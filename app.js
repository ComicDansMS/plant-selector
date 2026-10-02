(() => {
  "use strict";

  const { zones } = globalThis.PLANT_CATALOGUE;

  // Both keys and the per control state shape come from the earlier static
  // page; keeping them means carts saved by that version still load.
  const STORAGE_KEY = "plant-shortlist-native-cart-v1";
  const LEGACY_STORAGE_KEY = "plant-shortlist-cart-v1";
  const MAX_QTY = 99;
  const DIFFICULTY = ["Easy", "Moderate", "Demanding"];
  const LIGHT_LEVELS = ["Low", "Medium", "High"];

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [
    ...root.querySelectorAll(selector),
  ];
  const ESCAPES = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ESCAPES[c]);
  const money = (cents) => `$${(cents / 100).toFixed(2)}`;
  const plural = (n, one, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;
  const clampQty = (value) => {
    const n = Number(value);
    return Number.isFinite(n)
      ? Math.max(1, Math.min(MAX_QTY, Math.trunc(n)))
      : 1;
  };
  const reducedMotion = () =>
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? true;

  function formatChecked(value) {
    const [year, month, day] = value.split("-").map(Number);
    return new Intl.DateTimeFormat("en-AU", {
      timeZone: "UTC",
      year: "numeric",
      month: "long",
      ...(day ? { day: "numeric" } : {}),
    }).format(new Date(Date.UTC(year, month - 1, day || 1)));
  }

  // Light is free text ("Low to medium", "Bright, indirect"), so it is mapped
  // onto three levels to make it filterable. A range covers every level
  // between its ends, and the emersed plants' "bright" counts as high.
  function lightLevels(text) {
    const found = [
      ...text.toLowerCase().matchAll(/low|medium|high|bright/g),
    ].map(([word]) =>
      word === "bright" ? 2 : ["low", "medium", "high"].indexOf(word),
    );
    if (!found.length) return [];
    return LIGHT_LEVELS.slice(Math.min(...found), Math.max(...found) + 1);
  }

  const plants = zones.flatMap((zone) =>
    zone.plants.map((plant) => {
      const inStock = plant.offers.filter((offer) => !offer.soldOut);
      const pool = inStock.length ? inStock : plant.offers;
      const best = pool.length
        ? pool.reduce((a, b) => (b.price < a.price ? b : a))
        : null;
      const conditions = Object.fromEntries(plant.conditions);
      return {
        ...plant,
        zone,
        conditionMap: conditions,
        searchText: `${plant.name} ${plant.scientific}`.toLowerCase(),
        best,
        fromPrice: best ? best.price : null,
        inStock: inStock.length > 0,
        light: lightLevels(conditions.Light ?? ""),
      };
    }),
  );
  plants.forEach((plant, index) => (plant.order = index));
  const byId = new Map(plants.map((plant) => [plant.id, plant]));

  const FACETS = [
    {
      key: "availability",
      label: "Availability",
      options: [
        ["in-stock", "In stock"],
        ["priced", "Has a price"],
      ],
      test: (plant, value) =>
        value === "in-stock" ? plant.inStock : plant.fromPrice !== null,
    },
    {
      key: "difficulty",
      label: "Difficulty",
      options: DIFFICULTY.map((d) => [d, d]),
      test: (plant, value) => plant.difficulty === value,
    },
    {
      key: "light",
      label: "Light",
      options: LIGHT_LEVELS.map((l) => [l, l]),
      test: (plant, value) => plant.light.includes(value),
    },
    {
      key: "co2",
      label: "CO2",
      options: ["Optional", "Recommended", "Required"].map((v) => [v, v]),
      test: (plant, value) => plant.conditionMap.CO2 === value,
    },
    {
      key: "growth",
      label: "Growth",
      options: ["Very slow", "Slow", "Medium", "Fast"].map((v) => [v, v]),
      test: (plant, value) => plant.conditionMap.Growth === value,
    },
  ];

  const view = {
    query: "",
    sort: "featured",
    facets: new Map(FACETS.map((facet) => [facet.key, new Set()])),
    min: null,
    max: null,
  };

  const byName = (a, b) =>
    a.name.localeCompare(b.name, "en", { sensitivity: "base" });
  function comparePrice(a, b, sign) {
    // Unpriced plants stay last in both directions.
    if (a.fromPrice === null || b.fromPrice === null)
      return (
        Number(a.fromPrice === null) - Number(b.fromPrice === null) ||
        byName(a, b)
      );
    return sign * (a.fromPrice - b.fromPrice) || byName(a, b);
  }
  const difficultyRank = (plant) => DIFFICULTY.indexOf(plant.difficulty);
  const SORTS = {
    featured: (a, b) => a.order - b.order,
    "name-asc": byName,
    "name-desc": (a, b) => byName(b, a),
    "diff-asc": (a, b) =>
      difficultyRank(a) - difficultyRank(b) || byName(a, b),
    "diff-desc": (a, b) =>
      difficultyRank(b) - difficultyRank(a) || byName(a, b),
    "price-asc": (a, b) => comparePrice(a, b, 1),
    "price-desc": (a, b) => comparePrice(a, b, -1),
  };

  function matches(plant) {
    if (view.query && !plant.searchText.includes(view.query)) return false;
    for (const facet of FACETS) {
      const chosen = view.facets.get(facet.key);
      if (chosen.size && ![...chosen].some((v) => facet.test(plant, v)))
        return false;
    }
    if (view.min !== null || view.max !== null) {
      if (plant.fromPrice === null) return false;
      if (view.min !== null && plant.fromPrice < view.min) return false;
      if (view.max !== null && plant.fromPrice > view.max) return false;
    }
    return true;
  }

  /* Markup */

  const ICONS = {
    leaf: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14Z"/><path d="M5 19 13 11"/></svg>',
    close:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6"/></svg>',
    next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6"/></svg>',
    zoom: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5M11 8v6M8 11h6"/></svg>',
  };

  const external = (url, label) =>
    `<a href="${esc(url)}" target="_blank" rel="noopener">${label}</a>`;
  const credit = (photo) =>
    `${esc(photo.caption)}${photo.credit ? ` ${external(photo.creditUrl, esc(photo.credit))}` : ""}`;
  const wasPrice = (cents) =>
    cents
      ? ` <s class="price__was"><span class="visually-hidden">was </span>${money(cents)}</s>`
      : "";

  function cardPriceHTML(plant) {
    if (!plant.best) return '<span class="price__none">No price</span>';
    const prefix = plant.offers.length > 1 ? "From " : "";
    return `<span class="price__current">${prefix}${money(plant.best.price)}</span>${wasPrice(plant.best.was)}`;
  }

  function quantityHTML(key, name, qty) {
    return `<div class="quantity">
      <button type="button" class="quantity__button" data-qty-step="-1" data-focus-key="${key}-dec" aria-label="Decrease quantity of ${esc(name)}"${qty <= 1 ? " disabled" : ""}>&minus;</button>
      <input class="quantity__input" type="number" inputmode="numeric" min="1" max="${MAX_QTY}" step="1" value="${qty}" data-qty="${key}" data-focus-key="${key}" aria-label="Quantity of ${esc(name)}">
      <button type="button" class="quantity__button" data-qty-step="1" data-focus-key="${key}-inc" aria-label="Increase quantity of ${esc(name)}"${qty >= MAX_QTY ? " disabled" : ""}>+</button>
    </div>`;
  }

  function cardHTML(plant) {
    const [first, second] = plant.photos;
    // The hover photo gets no src until a mouse reaches the card, so touch
    // devices, which never show it, never download it.
    const hover = second
      ? `<img class="card__hover" data-src="${esc(second.src)}" alt="" width="600" height="600" decoding="async">`
      : "";
    const soldOut =
      plant.best && !plant.inStock
        ? '<span class="badge badge--sold-out">Sold out</span>'
        : "";
    return `<li class="product-grid__item" data-id="${plant.id}">
      <div class="card">
        <div class="card__media">
          <img src="${esc(first.src)}" alt="" width="600" height="600" loading="lazy" decoding="async">
          ${hover}${soldOut}
        </div>
        <div class="card__info">
          <h3 class="card__heading"><a class="card__link" href="#plant-${plant.id}" data-open-plant="${plant.id}">${esc(plant.name)}</a></h3>
          <p class="card__sub">${esc(plant.scientific)}</p>
          <span class="diff" data-d="${plant.difficulty}">${plant.difficulty}</span>
          <p class="price">${cardPriceHTML(plant)}</p>
        </div>
        <button type="button" class="card__add" data-quick-add="${plant.id}" aria-pressed="false" aria-label="Add ${esc(plant.name)} to cart">
          <span class="card__add-label">Add to cart</span>
        </button>
      </div>
    </li>`;
  }

  function renderZones() {
    $("#zone-sections").innerHTML = zones
      .map(
        (zone) => `<section class="zone" id="z-${zone.id}" aria-labelledby="z-${zone.id}-title">
          <div class="zone__head">
            <h2 id="z-${zone.id}-title">${esc(zone.name)}</h2>
            <p class="zone__count"></p>
          </div>
          <p class="zone__intro">${esc(zone.intro)}</p>
          <ul class="product-grid" role="list">${zone.plants.map((p) => cardHTML(byId.get(p.id))).join("")}</ul>
        </section>`,
      )
      .join("");
    $("#zones").innerHTML = zones
      .map((zone) => `<a href="#z-${zone.id}">${esc(zone.name)}</a>`)
      .join("");
  }

  /* Search, sort and filters */

  function renderFacetForm() {
    const count = (facet, value) =>
      plants.filter((plant) => facet.test(plant, value)).length;
    const highest = Math.max(...plants.map((p) => p.fromPrice ?? 0));
    $("#filter-form").innerHTML =
      FACETS.map(
        (facet) => `<fieldset class="facet">
          <legend>${facet.label}</legend>
          ${facet.options
            .map(
              ([value, label]) => `<label class="facet__option">
                <input type="checkbox" name="${facet.key}" value="${esc(value)}">
                <span>${esc(label)}</span>
                <span class="facet__count">${count(facet, value)}</span>
              </label>`,
            )
            .join("")}
        </fieldset>`,
      ).join("") +
      `<fieldset class="facet">
        <legend>Price</legend>
        <p class="facet__hint">Uses the lowest price shown for each plant. Plants without a price are hidden while a price is set.</p>
        <div class="facet__range">
          <label><span>From $</span><input type="number" name="min" min="0" step="1" inputmode="decimal" placeholder="0"></label>
          <label><span>To $</span><input type="number" name="max" min="0" step="1" inputmode="decimal" placeholder="${Math.ceil(highest / 100)}"></label>
        </div>
      </fieldset>`;
  }

  function readFacetForm() {
    const form = $("#filter-form");
    for (const facet of FACETS) {
      view.facets.set(
        facet.key,
        new Set(
          $$(`input[name="${facet.key}"]:checked`, form).map((i) => i.value),
        ),
      );
    }
    const cents = (input) =>
      input.value === "" || !Number.isFinite(Number(input.value))
        ? null
        : Math.round(Number(input.value) * 100);
    view.min = cents(form.elements.min);
    view.max = cents(form.elements.max);
  }

  function writeFacetForm() {
    const form = $("#filter-form");
    for (const facet of FACETS) {
      $$(`input[name="${facet.key}"]`, form).forEach((input) => {
        input.checked = view.facets.get(facet.key).has(input.value);
      });
    }
    form.elements.min.value = view.min === null ? "" : view.min / 100;
    form.elements.max.value = view.max === null ? "" : view.max / 100;
  }

  function activeFacets() {
    const active = [];
    for (const facet of FACETS) {
      for (const value of view.facets.get(facet.key)) {
        const [, label] = facet.options.find(([v]) => v === value);
        active.push({
          id: `${facet.key}:${value}`,
          label: `${facet.label}: ${label}`,
        });
      }
    }
    const dollars = (cents) => `$${cents / 100}`;
    if (view.min !== null || view.max !== null) {
      const range =
        view.min !== null && view.max !== null
          ? `${dollars(view.min)} to ${dollars(view.max)}`
          : view.min !== null
            ? `from ${dollars(view.min)}`
            : `up to ${dollars(view.max)}`;
      active.push({ id: "price", label: `Price: ${range}` });
    }
    return active;
  }

  let renderedSort = null;
  function applyView() {
    let total = 0;
    for (const section of $$(".zone")) {
      const list = $(".product-grid", section);
      const items = $$(".product-grid__item", list);
      // Moving nodes can drop keyboard focus, so only reorder when the sort
      // actually changed.
      if (renderedSort !== view.sort) {
        items
          .sort((a, b) =>
            SORTS[view.sort](byId.get(+a.dataset.id), byId.get(+b.dataset.id)),
          )
          .forEach((item) => list.append(item));
      }
      let count = 0;
      for (const item of items) {
        item.hidden = !matches(byId.get(+item.dataset.id));
        if (!item.hidden) count++;
      }
      section.hidden = count === 0;
      $(".zone__count", section).textContent = plural(count, "plant");
      $(`#zones a[href="#${section.id}"]`).hidden = count === 0;
      total += count;
    }
    renderedSort = view.sort;

    $("#result-count").textContent =
      total === plants.length
        ? plural(total, "plant")
        : `${total} of ${plural(plants.length, "plant")}`;
    $("#empty").hidden = total > 0;
    $("#filters-apply").textContent = `Show ${plural(total, "plant")}`;

    const active = activeFacets();
    const badge = $("#filter-count");
    badge.hidden = !active.length;
    badge.textContent = active.length;
    $("#open-filters").setAttribute(
      "aria-label",
      active.length ? `Filter, ${active.length} active` : "Filter",
    );
    const chips = $("#active-facets");
    chips.hidden = !active.length;
    chips.innerHTML = active.length
      ? active
          .map(
            ({ id, label }) =>
              `<li><button type="button" class="chip" data-remove-facet="${esc(id)}" aria-label="Remove filter ${esc(label)}">${esc(label)}${ICONS.close}</button></li>`,
          )
          .join("") +
        '<li><button type="button" class="link-button" data-clear-facets>Clear all</button></li>'
      : "";
  }

  function clearFacets() {
    view.facets.forEach((set) => set.clear());
    view.min = view.max = null;
    writeFacetForm();
  }

  /* Cart state */

  // Every plant keeps a line in or out of the cart, so a plant added again
  // comes back with its last quantity and shop, and the saved state keeps the
  // same shape as the earlier version's form controls.
  const freshLine = (plant) => ({
    selected: false,
    qty: 1,
    offer: plant.defaultOffer,
  });
  const lines = new Map(plants.map((plant) => [plant.id, freshLine(plant)]));
  let removedId = null;

  function migrateLegacy(raw) {
    const legacy = JSON.parse(raw || "[]");
    if (!Array.isArray(legacy) || !legacy.length) return null;
    const state = {};
    for (const entry of legacy) {
      const plant = byId.get(entry?.id);
      if (
        !plant ||
        !Number.isInteger(entry.quantity) ||
        entry.quantity < 1 ||
        entry.quantity > MAX_QTY
      )
        continue;
      state[`native-selected-${plant.id}`] = true;
      state[`native-quantity-${plant.id}`] = String(entry.quantity);
      if (plant.offers[entry.offerId])
        plant.offers.forEach((_, i) => {
          state[`native-shop-${plant.id}-${i}`] = i === entry.offerId;
        });
    }
    return state;
  }

  function restoreCart() {
    let state = null;
    try {
      state =
        JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") ??
        migrateLegacy(localStorage.getItem(LEGACY_STORAGE_KEY));
    } catch {
      /* Invalid or unavailable storage leaves the default cart usable. */
    }
    if (!state || typeof state !== "object" || Array.isArray(state)) return;
    for (const plant of plants) {
      const line = lines.get(plant.id);
      const selected = state[`native-selected-${plant.id}`];
      if (typeof selected === "boolean") line.selected = selected;
      const qty = Number(state[`native-quantity-${plant.id}`]);
      if (Number.isInteger(qty) && qty >= 1 && qty <= MAX_QTY) line.qty = qty;
      const offer = plant.offers.findIndex(
        (_, i) => state[`native-shop-${plant.id}-${i}`] === true,
      );
      if (offer >= 0) line.offer = offer;
    }
  }

  function saveCart() {
    const state = {};
    for (const plant of plants) {
      const line = lines.get(plant.id);
      state[`native-selected-${plant.id}`] = line.selected;
      state[`native-quantity-${plant.id}`] = String(line.qty);
      plant.offers.forEach((_, i) => {
        state[`native-shop-${plant.id}-${i}`] = i === line.offer;
      });
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      $("#cart-save-note").textContent =
        "Your selections are saved on this device.";
    } catch {
      $("#cart-save-note").textContent =
        "Selections cannot be saved on this device.";
    }
  }

  function updateCart(change) {
    change();
    renderCart();
    saveCart();
    renderPlantCartState();
  }

  function addToCart(id, { qty, offer } = {}) {
    updateCart(() => {
      const line = lines.get(id);
      line.selected = true;
      if (qty !== undefined) line.qty = clampQty(qty);
      if (offer !== undefined && offer !== null) line.offer = offer;
      if (removedId === id) removedId = null;
    });
  }

  function removeFromCart(id) {
    updateCart(() => {
      lines.get(id).selected = false;
      removedId = id;
    });
  }

  function cartSummary() {
    let count = 0;
    let total = 0;
    let unknown = 0;
    const groups = [];
    for (const zone of zones) {
      const entries = zone.plants
        .map(({ id }) => ({ plant: byId.get(id), line: lines.get(id) }))
        .filter(({ line }) => line.selected)
        .map((entry) => {
          const offer = entry.plant.offers[entry.line.offer] ?? null;
          const sum = offer ? offer.price * entry.line.qty : 0;
          return { ...entry, offer, sum };
        });
      if (!entries.length) continue;
      const subtotal = entries.reduce((sum, entry) => sum + entry.sum, 0);
      for (const entry of entries) {
        count += entry.line.qty;
        if (!entry.offer) unknown += entry.line.qty;
      }
      total += subtotal;
      groups.push({ zone, entries, subtotal });
    }
    return { groups, count, total, unknown };
  }

  function checkedNote(entries) {
    const dates = entries
      .filter((entry) => entry.offer)
      .map((entry) => entry.offer.checked)
      .sort();
    if (!dates.length) return "";
    const first = formatChecked(dates[0]);
    const last = formatChecked(dates.at(-1));
    return first === last
      ? `Prices checked ${first}.`
      : `Prices checked between ${first} and ${last}.`;
  }

  function cartLineHTML({ plant, line, offer, sum }) {
    const key = `cart-${plant.id}`;
    const shop = offer
      ? `<label class="cart-line__shop">
          <span class="visually-hidden">Shop for ${esc(plant.name)}</span>
          <select data-shop="${plant.id}" data-focus-key="${key}-shop">
            ${plant.offers
              .map(
                (o, i) =>
                  `<option value="${i}"${i === line.offer ? " selected" : ""}>${esc(o.shop)}, ${money(o.price)}${o.soldOut ? ", sold out" : ""}</option>`,
              )
              .join("")}
          </select>
        </label>
        <p class="cart-line__detail">${offer.unit ? `${esc(offer.unit)}. ` : ""}${external(offer.url, `Visit ${esc(offer.shop)} ↗`)}</p>
        <p class="cart-line__detail">Price checked ${formatChecked(offer.checked)}</p>`
      : '<p class="cart-line__detail">Price not listed</p>';
    const warning = !offer
      ? "No price was listed. This plant is excluded from the total."
      : offer.soldOut
        ? "This listing was sold out when checked. Check stock before buying."
        : "";
    return `<article class="cart-line" data-line="${plant.id}">
      <img class="cart-line__thumb" src="${esc(plant.photos[0].src)}" alt="" width="80" height="80" loading="lazy" decoding="async">
      <div class="cart-line__main">
        <div class="cart-line__top">
          <div>
            <h4 class="cart-line__name"><a href="#plant-${plant.id}" data-open-plant="${plant.id}">${esc(plant.name)}</a></h4>
            <p class="cart-line__sub">${esc(plant.scientific)}</p>
          </div>
          <p class="cart-line__each">${offer ? money(offer.price) : "Unpriced"}<small>each</small></p>
        </div>
        ${shop}
        ${warning ? `<p class="cart-line__warning">${warning}</p>` : ""}
        <div class="cart-line__controls">
          ${quantityHTML(key, plant.name, line.qty)}
          <span class="cart-line__sum">${offer ? money(sum) : "Unpriced"}</span>
          <button type="button" class="link-button" data-remove="${plant.id}" aria-label="Remove ${esc(plant.name)}">Remove</button>
        </div>
      </div>
    </article>`;
  }

  function renderCart() {
    // The cart is re-rendered on every change, so focus is carried across by
    // a stable key instead of being lost to the replaced nodes.
    const focusKey = document.activeElement?.dataset?.focusKey;
    const removeFocused = document.activeElement?.matches?.(
      "#cart [data-remove]",
    );
    const { groups, count, total, unknown } = cartSummary();

    $("#cart-groups").innerHTML = groups
      .map(
        ({ zone, entries, subtotal }) => `<section class="cart-group" aria-label="${esc(zone.name)}">
          <h3>${esc(zone.name)}<span>${money(subtotal)}</span></h3>
          ${entries.map(cartLineHTML).join("")}
        </section>`,
      )
      .join("");

    $$("[data-cart-count]").forEach((el) => (el.textContent = count));
    $$("[data-cart-total]").forEach((el) => (el.textContent = money(total)));
    $("#cart-empty").hidden = count > 0;
    $("#cart-foot").hidden = count === 0;
    const unknownNote = $("#cart-unknown");
    unknownNote.hidden = unknown === 0;
    unknownNote.textContent = `Unpriced items: ${unknown}. Excluded from the total.`;
    $("#cart-checked").textContent = checkedNote(
      groups.flatMap((group) => group.entries),
    );

    const undo = $("#cart-undo");
    undo.hidden = removedId === null;
    if (removedId !== null)
      $("#cart-undo-text").textContent = `${byId.get(removedId).name} removed.`;

    for (const button of $$("[data-quick-add]")) {
      const selected = lines.get(+button.dataset.quickAdd).selected;
      button.setAttribute("aria-pressed", String(selected));
      $(".card__add-label", button).textContent = selected
        ? "In cart"
        : "Add to cart";
    }

    const target = focusKey && $(`#cart [data-focus-key="${focusKey}"]`);
    if (target) target.focus({ preventScroll: true });
    else if (removeFocused && !undo.hidden)
      $("#cart-undo-button").focus({ preventScroll: true });
  }

  function cartText() {
    const { groups, total, unknown } = cartSummary();
    const out = ["Plant shortlist", ""];
    for (const { zone, entries, subtotal } of groups) {
      out.push(`${zone.name} (${money(subtotal)})`);
      for (const { plant, line, offer, sum } of entries) {
        out.push(`- ${plant.name} (${plant.scientific}) x ${line.qty}`);
        if (offer) {
          const unit = offer.unit ? `, ${offer.unit}` : "";
          const soldOut = offer.soldOut ? " (sold out when checked)" : "";
          out.push(
            `  ${offer.shop}${unit}: ${money(offer.price)} each, ${money(sum)}${soldOut}`,
            `  ${offer.url}`,
          );
        } else out.push("  No price listed");
      }
      out.push("");
    }
    out.push(`Estimated total: ${money(total)} AUD, shipping not included.`);
    if (unknown)
      out.push(`Unpriced items: ${unknown}. Excluded from the total.`);
    const checked = checkedNote(groups.flatMap((group) => group.entries));
    if (checked) out.push(checked);
    return out.join("\n");
  }

  async function copyCart() {
    const text = cartText();
    const fallback = $("#cart-copy-fallback");
    const status = $("#cart-status");
    try {
      await navigator.clipboard.writeText(text);
      fallback.hidden = true;
      status.textContent = "Cart copied as text.";
    } catch {
      // Clipboard access needs a secure context and permission, so show the
      // text where it can still be copied by hand.
      fallback.value = text;
      fallback.hidden = false;
      fallback.focus();
      fallback.select();
      status.textContent =
        "Copying is not available here. The list is selected below for copying.";
    }
  }

  /* Dialogs */

  // The top layer cannot be queried for its order, so open dialogs are
  // tracked here, oldest first.
  const dialogStack = [];
  $$("dialog").forEach((dialog) =>
    dialog.addEventListener("close", () => {
      const index = dialogStack.indexOf(dialog);
      if (index >= 0) dialogStack.splice(index, 1);
    }),
  );

  function showDialog(dialog) {
    if (dialog.open) return;
    dialog.showModal();
    dialogStack.push(dialog);
  }

  // A dialog that is already open underneath another one has to be reopened
  // to come to the front. The flag lets close handlers tell this apart from a
  // real close, whether the close event arrives now or after reopening.
  function bringToFront(dialog) {
    if (dialog.open && dialogStack.at(-1) !== dialog) {
      dialog.dataset.reopening = "";
      dialog.close();
      delete dialog.dataset.reopening;
    }
    showDialog(dialog);
  }

  function openCart() {
    $("#cart-status").textContent = "";
    $("#cart-copy-fallback").hidden = true;
    bringToFront($("#cart"));
  }

  /* Plant modal */

  const modal = { id: null, photo: 0, qty: 1, offer: null };
  const plantDialog = $("#plant-dialog");
  const lightbox = $("#lightbox");

  // Previous and next follow the grid as currently sorted and filtered. A
  // plant opened from a deep link may be filtered out, so then the full list
  // is used instead.
  function visibleOrder() {
    const visible = $$(".zone:not([hidden]) .product-grid__item:not([hidden])")
      .map((item) => +item.dataset.id);
    return visible.includes(modal.id)
      ? visible
      : $$(".product-grid__item").map((item) => +item.dataset.id);
  }

  function galleryHTML(plant) {
    const count = plant.photos.length;
    const slides = plant.photos
      .map(
        (photo, i) => `<figure class="gallery__slide" role="group" aria-label="Photo ${i + 1} of ${count}">
          <button type="button" class="gallery__zoom" data-zoom="${i}" aria-label="View photo ${i + 1} full screen">
            <img src="${esc(photo.src)}" alt="${esc(`${plant.name}: ${photo.caption}`)}" width="720" height="720" loading="${i ? "lazy" : "eager"}" decoding="async">
            <span class="gallery__zoom-icon">${ICONS.zoom}</span>
          </button>
          <figcaption class="gallery__caption">${credit(photo)}</figcaption>
        </figure>`,
      )
      .join("");
    const thumbs = plant.photos
      .map(
        (photo, i) => `<li><button type="button" class="gallery__thumb" data-goto="${i}" aria-label="Show photo ${i + 1}"${i === 0 ? ' aria-current="true"' : ""}>
          <img src="${esc(photo.src)}" alt="" width="120" height="120" loading="lazy" decoding="async">
        </button></li>`,
      )
      .join("");
    return `<div class="gallery">
      <div class="gallery__viewport" tabindex="0" role="region" aria-label="${esc(plant.name)} photos, use the arrow keys to browse">${slides}</div>
      <div class="gallery__nav">
        <button type="button" class="icon-button" data-photo="-1" aria-label="Previous photo" disabled>${ICONS.prev}</button>
        <span class="gallery__counter" aria-live="polite">1 / ${count}</span>
        <button type="button" class="icon-button" data-photo="1" aria-label="Next photo"${count < 2 ? " disabled" : ""}>${ICONS.next}</button>
      </div>
      <ul class="gallery__thumbs" role="list">${thumbs}</ul>
    </div>`;
  }

  const accordion = (title, body, open = false) =>
    `<details class="accordion"${open ? " open" : ""}>
      <summary>${title}</summary>
      <div class="accordion__content">${body}</div>
    </details>`;

  function plantInfoHTML(plant) {
    const pills = plant.offers.length
      ? `<fieldset class="pills">
          <legend>Shop</legend>
          <div class="pills__list">
            ${plant.offers
              .map(
                (offer, i) => `<input class="pills__input visually-hidden" type="radio" name="plant-shop" id="plant-shop-${i}" value="${i}"${i === modal.offer ? " checked" : ""}>
                <label class="pills__pill${offer.soldOut ? " is-sold-out" : ""}" for="plant-shop-${i}">${esc(offer.shop)} <span class="pills__price">${money(offer.price)}</span>${offer.soldOut ? '<span class="visually-hidden">, sold out when checked</span>' : ""}</label>`,
              )
              .join("")}
          </div>
        </fieldset>`
      : "";
    const conditions = `<dl class="conditions">${plant.conditions
      .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
      .join("")}</dl>`;
    const credits = `<ol class="credits">${plant.photos
      .map((photo) => `<li>${credit(photo)}</li>`)
      .join("")}</ol>`;
    const sources = `<ul class="link-list">${plant.sources
      .map((source) => `<li>${external(source.url, esc(source.label))}</li>`)
      .join("")}</ul>`;

    return `<p class="product__zone">${esc(plant.zone.name)}</p>
      <h2 class="product__title" id="plant-dialog-title">${esc(plant.name)}</h2>
      <p class="product__sub">${esc(plant.scientific)}</p>
      <span class="diff" data-d="${plant.difficulty}">Difficulty: ${plant.difficulty}</span>
      <div class="product__price" id="plant-price"></div>
      ${pills}
      <div class="product__offer" id="plant-offer" aria-live="polite"></div>
      <div class="product__form">
        ${quantityHTML("plant", plant.name, modal.qty)}
        <button type="button" class="button product__add" id="plant-add">Add to cart</button>
      </div>
      <div class="product__in-cart" id="plant-in-cart" hidden></div>
      <p class="product__about">${esc(plant.about)}</p>
      <div class="accordions">
        ${accordion("Growing conditions", conditions, true)}
        ${plant.saNote ? accordion("South Australia", `<p>${esc(plant.saNote)}</p>`) : ""}
        ${accordion("Sources", sources)}
        ${accordion("Photo credits", credits)}
      </div>`;
  }

  function renderPlantOffer() {
    const plant = byId.get(modal.id);
    const offer = plant.offers[modal.offer];
    if (!offer) {
      $("#plant-price").innerHTML =
        '<span class="price__none">No Australian store listing with a price was found.</span>';
      $("#plant-offer").innerHTML = "";
      return;
    }
    const soldOutBadge = offer.soldOut
      ? ' <span class="badge badge--sold-out">Sold out when checked</span>'
      : "";
    $("#plant-price").innerHTML =
      `<span class="price__current">${money(offer.price)}</span>${wasPrice(offer.was)}${soldOutBadge}`;
    $("#plant-offer").innerHTML = `
      ${offer.unit ? `<p>${esc(offer.unit)} from ${esc(offer.shop)}</p>` : ""}
      ${offer.soldOut ? '<p class="product__warning">This listing was sold out when checked. Check stock before buying.</p>' : ""}
      <p>${external(offer.url, `View at ${esc(offer.shop)} ↗`)}</p>
      <p class="product__checked">Price checked ${formatChecked(offer.checked)}</p>`;
  }

  function renderPlantCartState() {
    if (modal.id === null) return;
    const plant = byId.get(modal.id);
    const line = lines.get(modal.id);
    $("#plant-add").textContent = line.selected ? "Update cart" : "Add to cart";
    const box = $("#plant-in-cart");
    box.hidden = !line.selected;
    if (!line.selected) {
      box.innerHTML = "";
      return;
    }
    const offer = plant.offers[line.offer];
    box.innerHTML = `<p>In your cart: ${line.qty}${offer ? ` from ${esc(offer.shop)}` : ""}.</p>
      <button type="button" class="link-button" data-remove="${plant.id}" aria-label="Remove ${esc(plant.name)} from cart">Remove from cart</button>
      <button type="button" class="link-button" data-open-cart>View cart</button>`;
  }

  function setModalQty(qty) {
    modal.qty = clampQty(qty);
    const input = $('[data-qty="plant"]', plantDialog);
    input.value = modal.qty;
    input.previousElementSibling.disabled = modal.qty <= 1;
    input.nextElementSibling.disabled = modal.qty >= MAX_QTY;
  }

  function openPlant(id) {
    const plant = byId.get(id);
    if (!plant) return;
    const line = lines.get(id);
    Object.assign(modal, {
      id,
      photo: 0,
      qty: line.selected ? line.qty : 1,
      offer: line.offer,
    });
    $("#plant-dialog-body").innerHTML =
      `<div class="product__media">${galleryHTML(plant)}</div>
      <div class="product__info">${plantInfoHTML(plant)}</div>`;
    renderPlantOffer();
    renderPlantCartState();

    const order = visibleOrder();
    const index = order.indexOf(id);
    $("#plant-position").textContent = `${index + 1} of ${order.length}`;
    $('[data-step="-1"]', plantDialog).disabled = index <= 0;
    $('[data-step="1"]', plantDialog).disabled = index >= order.length - 1;

    history.replaceState(history.state, "", `#plant-${id}`);
    bringToFront(plantDialog);
    $(".product-modal__panel", plantDialog).scrollTop = 0;
  }

  function stepPlant(step) {
    const order = visibleOrder();
    const next = order[order.indexOf(modal.id) + step];
    if (next === undefined) return;
    openPlant(next);
    // Keep focus on the button that was pressed so repeated presses work;
    // fall back to the other direction once the end is reached.
    const same = $(`[data-step="${step}"]`, plantDialog);
    (same.disabled ? $(`[data-step="${-step}"]`, plantDialog) : same).focus();
  }

  /* Gallery and lightbox */

  function showPhoto(index, { scroll = true } = {}) {
    const count = byId.get(modal.id).photos.length;
    modal.photo = Math.max(0, Math.min(count - 1, index));
    $(".gallery__counter", plantDialog).textContent =
      `${modal.photo + 1} / ${count}`;
    $$(".gallery__thumb", plantDialog).forEach((thumb, i) => {
      if (i === modal.photo) thumb.setAttribute("aria-current", "true");
      else thumb.removeAttribute("aria-current");
    });
    $('[data-photo="-1"]', plantDialog).disabled = modal.photo === 0;
    $('[data-photo="1"]', plantDialog).disabled = modal.photo === count - 1;
    if (scroll) {
      const viewport = $(".gallery__viewport", plantDialog);
      viewport.scrollTo({
        left: modal.photo * viewport.clientWidth,
        behavior: reducedMotion() ? "auto" : "smooth",
      });
    }
  }

  function renderLightbox() {
    const plant = byId.get(modal.id);
    const photo = plant.photos[modal.photo];
    $(".lightbox__frame", lightbox).innerHTML =
      `<img src="${esc(photo.src)}" alt="${esc(`${plant.name}: ${photo.caption}`)}" decoding="async">`;
    $(".lightbox__caption", lightbox).innerHTML = credit(photo);
    $(".lightbox__counter", lightbox).textContent =
      `${modal.photo + 1} / ${plant.photos.length}`;
    $('[data-photo-step="-1"]', lightbox).disabled = modal.photo === 0;
    $('[data-photo-step="1"]', lightbox).disabled =
      modal.photo === plant.photos.length - 1;
  }

  /* Image fallbacks */

  function imageFallback(img) {
    // A missing hover photo just means no hover swap.
    if (img.classList.contains("card__hover")) {
      img.remove();
      return;
    }
    const fallback = document.createElement("span");
    fallback.className = `img-fallback ${img.className}`.trim();
    if (img.alt) {
      fallback.setAttribute("role", "img");
      fallback.setAttribute("aria-label", `${img.alt} (photo unavailable)`);
    } else fallback.setAttribute("aria-hidden", "true");
    fallback.innerHTML = `${ICONS.leaf}<span>Photo unavailable</span>`;
    img.replaceWith(fallback);
  }

  /* Events */

  const isPlainClick = (event) =>
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey;

  const CLICK_ACTIONS = [
    ["#open-cart, [data-open-cart]", () => openCart()],
    [
      "#open-filters",
      () => {
        writeFacetForm();
        showDialog($("#filters"));
      },
    ],
    [
      "#filters-clear",
      () => {
        clearFacets();
        applyView();
      },
    ],
    [
      "[data-clear-facets]",
      () => {
        clearFacets();
        applyView();
        $("#open-filters").focus();
      },
    ],
    [
      "[data-remove-facet]",
      (el) => {
        const id = el.dataset.removeFacet;
        if (id === "price") view.min = view.max = null;
        else {
          const split = id.indexOf(":");
          view.facets.get(id.slice(0, split)).delete(id.slice(split + 1));
        }
        writeFacetForm();
        applyView();
        $("#open-filters").focus();
      },
    ],
    [
      "#clear-all",
      () => {
        $("#q").value = "";
        view.query = "";
        clearFacets();
        applyView();
        $("#q").focus();
      },
    ],
    [
      "[data-quick-add]",
      (el) => {
        const id = +el.dataset.quickAdd;
        if (lines.get(id).selected) removeFromCart(id);
        else {
          addToCart(id);
          openCart();
        }
      },
    ],
    [
      "[data-qty-step]",
      (el) => {
        const input = $(".quantity__input", el.parentElement);
        input.value = clampQty(Number(input.value) + Number(el.dataset.qtyStep));
        input.dispatchEvent(new Event("change", { bubbles: true }));
      },
    ],
    ["[data-remove]", (el) => removeFromCart(+el.dataset.remove)],
    [
      "#cart-undo-button",
      () => {
        if (removedId !== null) addToCart(removedId);
      },
    ],
    [
      "#cart-clear",
      () =>
        updateCart(() => {
          for (const plant of plants) lines.set(plant.id, freshLine(plant));
          removedId = null;
        }),
    ],
    ["#cart-copy", () => copyCart()],
    [
      "#plant-add",
      () => {
        addToCart(modal.id, { qty: modal.qty, offer: modal.offer });
        openCart();
      },
    ],
    ["[data-step]", (el) => stepPlant(Number(el.dataset.step))],
    ["[data-photo]", (el) => showPhoto(modal.photo + Number(el.dataset.photo))],
    ["[data-goto]", (el) => showPhoto(Number(el.dataset.goto))],
    [
      "[data-zoom]",
      (el) => {
        showPhoto(Number(el.dataset.zoom), { scroll: false });
        renderLightbox();
        showDialog(lightbox);
      },
    ],
    [
      "[data-photo-step]",
      (el) => {
        showPhoto(modal.photo + Number(el.dataset.photoStep), {
          scroll: false,
        });
        renderLightbox();
      },
    ],
  ];

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const plantLink = target.closest("[data-open-plant]");
    if (plantLink) {
      if (!isPlainClick(event)) return;
      event.preventDefault();
      openPlant(+plantLink.dataset.openPlant);
      return;
    }
    // Clicks on ::backdrop are dispatched to the dialog element itself. Each
    // panel fills its dialog box, so clicks inside land on a descendant.
    if (target instanceof HTMLDialogElement) {
      target.close();
      return;
    }
    const closer = target.closest("[data-close]");
    if (closer) {
      closer.closest("dialog")?.close();
      return;
    }
    for (const [selector, action] of CLICK_ACTIONS) {
      const el = target.closest(selector);
      if (el) {
        action(el);
        return;
      }
    }
  });

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (target.matches("[data-qty]")) {
      const key = target.dataset.qty;
      if (key === "plant") setModalQty(target.value);
      else {
        const id = Number(key.slice("cart-".length));
        updateCart(() => (lines.get(id).qty = clampQty(target.value)));
      }
    } else if (target.matches("[data-shop]")) {
      const id = +target.dataset.shop;
      updateCart(() => (lines.get(id).offer = Number(target.value)));
    } else if (target.name === "plant-shop") {
      modal.offer = Number(target.value);
      renderPlantOffer();
    }
  });

  $("#filter-form").addEventListener("input", () => {
    readFacetForm();
    applyView();
  });
  $("#filter-form").addEventListener("submit", (event) =>
    event.preventDefault(),
  );
  $("#q").addEventListener("input", (event) => {
    view.query = event.target.value.trim().toLowerCase();
    applyView();
  });
  $("#sort").addEventListener("change", (event) => {
    view.sort = SORTS[event.target.value] ? event.target.value : "featured";
    applyView();
  });

  document.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
      return;
    if (modal.id === null) return;
    const inLightbox = lightbox.open && lightbox.contains(event.target);
    const inGallery = event.target.closest?.(".gallery__viewport");
    if (!inLightbox && !inGallery) return;
    event.preventDefault();
    const last = byId.get(modal.id).photos.length - 1;
    const index =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? last
          : modal.photo + (event.key === "ArrowRight" ? 1 : -1);
    showPhoto(index, { scroll: !inLightbox });
    if (inLightbox) renderLightbox();
  });

  // Scroll events fire far more often than frames, so the position is read
  // once per frame. Scroll does not bubble, hence the capture listener.
  let scrollFrame;
  plantDialog.addEventListener(
    "scroll",
    (event) => {
      const viewport = event.target;
      if (!viewport.classList?.contains("gallery__viewport")) return;
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        if (!viewport.clientWidth || modal.id === null) return;
        const index = Math.round(viewport.scrollLeft / viewport.clientWidth);
        if (index !== modal.photo) showPhoto(index, { scroll: false });
      });
    },
    { capture: true, passive: true },
  );

  lightbox.addEventListener("close", () => {
    if (modal.id !== null) showPhoto(modal.photo);
  });
  plantDialog.addEventListener("close", () => {
    if (plantDialog.open || "reopening" in plantDialog.dataset) return;
    if (lightbox.open) lightbox.close();
    modal.id = null;
    if (location.hash.startsWith("#plant-"))
      history.replaceState(
        history.state,
        "",
        location.pathname + location.search,
      );
  });

  $("#zone-sections").addEventListener("pointerover", (event) => {
    if (event.pointerType !== "mouse") return;
    const img = event.target
      .closest?.(".card")
      ?.querySelector(".card__hover[data-src]");
    if (!img) return;
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
  });
  // Image load and error events do not bubble, so both listen in the capture
  // phase to cover images added after start up.
  document.addEventListener(
    "load",
    (event) => {
      if (event.target.classList?.contains("card__hover"))
        event.target.classList.add("is-loaded");
    },
    true,
  );
  document.addEventListener(
    "error",
    (event) => {
      if (event.target instanceof HTMLImageElement) imageFallback(event.target);
    },
    true,
  );

  function syncHash() {
    const match = /^#plant-(\d+)$/.exec(location.hash);
    if (match && byId.has(+match[1])) openPlant(+match[1]);
    // #plant-cart was the cart's address in the earlier version of the page.
    else if (location.hash === "#plant-cart") {
      history.replaceState(
        history.state,
        "",
        location.pathname + location.search,
      );
      openCart();
    }
  }
  window.addEventListener("hashchange", syncHash);

  // Group links must land below the sticky toolbar, whose height changes as
  // it wraps and as filter chips come and go.
  const toolbar = $(".toolbar");
  if ("ResizeObserver" in window)
    new ResizeObserver(() =>
      document.documentElement.style.setProperty(
        "--toolbar-height",
        `${toolbar.offsetHeight + 16}px`,
      ),
    ).observe(toolbar);

  renderZones();
  renderFacetForm();
  restoreCart();
  renderCart();
  applyView();
  syncHash();
})();
