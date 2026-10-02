// Shared by the plant list (app.js) and the list page (list.js): helpers, the
// derived plant model and the saved list.
(() => {
  "use strict";

  const { zones } = globalThis.PLANT_CATALOGUE;

  // Both keys and the per control state shape come from the earlier static
  // page; keeping them means lists saved by that version still load.
  const STORAGE_KEY = "plant-shortlist-native-cart-v1";
  const LEGACY_STORAGE_KEY = "plant-shortlist-cart-v1";
  // Favourites are plants being considered but not yet in the list, saved as
  // an array of plant ids.
  const FAVOURITES_KEY = "plant-shortlist-favourites-v1";
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

  // The price shown for a plant is the average of every store's listed
  // price, as a rough guide to what a local shop will charge. Stock is left
  // out, since a sold out listing still says what the plant costs.
  const averagePrice = (offers) =>
    offers.length
      ? Math.round(
          offers.reduce((sum, offer) => sum + offer.price, 0) / offers.length,
        )
      : null;

  const plants = zones.flatMap((zone) =>
    zone.plants.map((plant) => {
      const conditions = Object.fromEntries(plant.conditions);
      return {
        ...plant,
        zone,
        conditionMap: conditions,
        searchText: `${plant.name} ${plant.scientific}`.toLowerCase(),
        price: averagePrice(plant.offers),
        light: lightLevels(conditions.Light ?? ""),
      };
    }),
  );
  plants.forEach((plant, index) => (plant.order = index));
  const byId = new Map(plants.map((plant) => [plant.id, plant]));

  /* Markup */

  const ICONS = {
    leaf: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14Z"/><path d="M5 19 13 11"/></svg>',
    close:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6"/></svg>',
    next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6"/></svg>',
    heart:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/></svg>',
    bin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M10 7V4h4v3M6 7l1 13h10l1-13M10 11v5M14 11v5"/></svg>',
  };

  const external = (url, label) =>
    `<a href="${esc(url)}" target="_blank" rel="noopener">${label}</a>`;
  const credit = (photo) =>
    `${esc(photo.caption)}${photo.credit ? ` ${external(photo.creditUrl, esc(photo.credit))}` : ""}`;

  // Every store listing a plant, with its price and a link.
  function storesHTML(plant) {
    return `<ul class="stores" role="list">${plant.offers
      .map(
        (offer) => `<li class="stores__item">
          <span>${external(offer.url, `${esc(offer.shop)} ↗`)}${offer.unit ? `<span class="stores__unit">${esc(offer.unit)}</span>` : ""}</span>
          <span class="stores__price">${money(offer.price)}</span>
        </li>`,
      )
      .join("")}</ul>`;
  }

  const averageLabel = (plant) =>
    plant.offers.length > 1
      ? `Average of ${plant.offers.length} stores`
      : `From ${plant.offers[0].shop}`;

  function quantityHTML(key, name, qty) {
    return `<div class="quantity">
      <button type="button" class="quantity__button" data-qty-step="-1" data-focus-key="${key}-dec" aria-label="Decrease quantity of ${esc(name)}"${qty <= 1 ? " disabled" : ""}>&minus;</button>
      <input class="quantity__input" type="number" inputmode="numeric" min="1" max="${MAX_QTY}" step="1" value="${qty}" data-qty="${key}" data-focus-key="${key}" aria-label="Quantity of ${esc(name)}">
      <button type="button" class="quantity__button" data-qty-step="1" data-focus-key="${key}-inc" aria-label="Increase quantity of ${esc(name)}"${qty >= MAX_QTY ? " disabled" : ""}>+</button>
    </div>`;
  }

  // The stepper buttons change the input and then let the page's change
  // handler deal with the new value.
  function stepQuantity(button) {
    const input = $(".quantity__input", button.parentElement);
    input.value = clampQty(Number(input.value) + Number(button.dataset.qtyStep));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }

  /* Saved list */

  // Every plant keeps a line in or out of the list, so a plant added again
  // comes back with its last quantity and shop, and the saved state keeps the
  // same shape as the earlier version's form controls. Lines no longer pick
  // a shop, since prices are averaged, but the saved shop is kept as is.
  const freshLine = (plant) => ({
    selected: false,
    qty: 1,
    offer: plant.defaultOffer,
  });
  const lines = new Map(plants.map((plant) => [plant.id, freshLine(plant)]));
  const listeners = [];
  let storageOk = true;

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
    for (const plant of plants) lines.set(plant.id, freshLine(plant));
    let state = null;
    try {
      state =
        JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") ??
        migrateLegacy(localStorage.getItem(LEGACY_STORAGE_KEY));
    } catch {
      /* Invalid or unavailable storage leaves the default list usable. */
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
      storageOk = true;
    } catch {
      storageOk = false;
    }
  }

  /* Favourites */

  const favourites = new Set();

  function restoreFavourites() {
    favourites.clear();
    try {
      const ids = JSON.parse(localStorage.getItem(FAVOURITES_KEY) || "[]");
      if (Array.isArray(ids))
        for (const id of ids) if (byId.has(id)) favourites.add(id);
    } catch {
      /* Invalid or unavailable storage leaves no favourites. */
    }
  }

  function saveFavourites() {
    try {
      localStorage.setItem(FAVOURITES_KEY, JSON.stringify([...favourites]));
      storageOk = true;
    } catch {
      storageOk = false;
    }
  }

  const isFavourite = (id) => favourites.has(id);

  function setFavourite(id, on) {
    if (on) favourites.add(id);
    else favourites.delete(id);
    saveFavourites();
    notify();
  }

  // Favourited plants that are not in the list yet, in catalogue order.
  const consideredPlants = () =>
    plants.filter(
      (plant) => favourites.has(plant.id) && !lines.get(plant.id).selected,
    );

  function cartSummary() {
    let count = 0;
    let total = 0;
    let unknown = 0;
    const groups = [];
    for (const zone of zones) {
      const entries = zone.plants
        .map(({ id }) => ({ plant: byId.get(id), line: lines.get(id) }))
        .filter(({ line }) => line.selected)
        .map((entry) => ({
          ...entry,
          sum: (entry.plant.price ?? 0) * entry.line.qty,
        }));
      if (!entries.length) continue;
      const subtotal = entries.reduce((sum, entry) => sum + entry.sum, 0);
      for (const entry of entries) {
        count += entry.line.qty;
        if (entry.plant.price === null) unknown += entry.line.qty;
      }
      total += subtotal;
      groups.push({ zone, entries, subtotal });
    }
    return { groups, count, total, unknown };
  }

  function renderBadges() {
    const { count, total } = cartSummary();
    $$("[data-cart-count]").forEach((el) => (el.textContent = count));
    $$("[data-cart-total]").forEach((el) => (el.textContent = money(total)));
  }

  function notify() {
    renderBadges();
    listeners.forEach((listener) => listener());
  }

  function onCartChange(listener) {
    listeners.push(listener);
  }

  function updateCart(change) {
    change();
    saveCart();
    notify();
  }

  function addToCart(id, { qty } = {}) {
    updateCart(() => {
      const line = lines.get(id);
      line.selected = true;
      if (qty !== undefined) line.qty = clampQty(qty);
    });
  }

  function removeFromCart(id) {
    updateCart(() => (lines.get(id).selected = false));
  }

  function clearCart() {
    updateCart(() => {
      for (const plant of plants) lines.set(plant.id, freshLine(plant));
    });
  }

  // The list can change on the other page, either in another tab or before
  // coming back to a page kept in the back/forward cache.
  function reload() {
    restoreCart();
    restoreFavourites();
    notify();
  }
  window.addEventListener("storage", (event) => {
    if (
      event.key === null ||
      event.key === STORAGE_KEY ||
      event.key === FAVOURITES_KEY
    )
      reload();
  });
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) reload();
  });

  function checkedNote(entries) {
    const dates = entries
      .flatMap((entry) => entry.plant.offers.map((offer) => offer.checked))
      .sort();
    if (!dates.length) return "";
    const first = formatChecked(dates[0]);
    const last = formatChecked(dates.at(-1));
    return first === last
      ? `Prices checked ${first}.`
      : `Prices checked between ${first} and ${last}.`;
  }

  function cartText() {
    const { groups, total, unknown } = cartSummary();
    const out = ["Plant shortlist", ""];
    for (const { zone, entries, subtotal } of groups) {
      out.push(`${zone.name} (${money(subtotal)})`);
      for (const { plant, line, sum } of entries) {
        out.push(`- ${plant.name} (${plant.scientific}) x ${line.qty}`);
        out.push(
          plant.price === null
            ? "  No price listed"
            : `  About ${money(plant.price)} each (${averageLabel(plant).toLowerCase()}), ${money(sum)}`,
        );
      }
      out.push("");
    }
    out.push(`Estimated total: ${money(total)} AUD, based on average online prices.`);
    if (unknown)
      out.push(`Unpriced items: ${unknown}. Excluded from the total.`);
    const checked = checkedNote(groups.flatMap((group) => group.entries));
    if (checked) out.push(checked);
    return out.join("\n");
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

  // Image error events do not bubble, so this listens in the capture phase
  // to cover images added after start up.
  document.addEventListener(
    "error",
    (event) => {
      if (event.target instanceof HTMLImageElement) imageFallback(event.target);
    },
    true,
  );

  restoreCart();
  restoreFavourites();
  renderBadges();

  globalThis.PLANT_CORE = {
    zones,
    plants,
    byId,
    MAX_QTY,
    DIFFICULTY,
    LIGHT_LEVELS,
    $,
    $$,
    esc,
    money,
    plural,
    clampQty,
    formatChecked,
    ICONS,
    external,
    credit,
    storesHTML,
    averageLabel,
    quantityHTML,
    stepQuantity,
    lines,
    cartSummary,
    checkedNote,
    cartText,
    renderBadges,
    onCartChange,
    updateCart,
    addToCart,
    removeFromCart,
    clearCart,
    isFavourite,
    setFavourite,
    consideredPlants,
    storageOk: () => storageOk,
  };
})();
