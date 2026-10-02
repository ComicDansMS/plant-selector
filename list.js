(() => {
  "use strict";

  const {
    byId,
    $,
    $$,
    esc,
    money,
    clampQty,
    formatChecked,
    external,
    quantityHTML,
    stepQuantity,
    lines,
    cartSummary,
    checkedNote,
    cartText,
    onCartChange,
    updateCart,
    addToCart,
    removeFromCart,
    clearCart,
    storageOk,
  } = globalThis.PLANT_CORE;

  // Open items are remembered by plant so they stay open across re-renders.
  const expanded = new Set();
  let removedId = null;

  function itemHTML({ plant, line, offer, sum }) {
    const key = `list-${plant.id}`;
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
    return `<details class="list-item" data-line="${plant.id}"${expanded.has(plant.id) ? " open" : ""}>
      <summary class="list-item__summary">
        <img class="list-item__thumb" src="${esc(plant.photos[0].src)}" alt="" width="80" height="80" loading="lazy" decoding="async">
        <span class="list-item__heading">
          <span class="list-item__name">${esc(plant.name)}</span>
          <span class="list-item__qty">Qty ${line.qty}</span>
        </span>
        <span class="list-item__price">${offer ? money(sum) : "Unpriced"}</span>
      </summary>
      <div class="list-item__body">
        <div class="cart-line__top">
          <p class="cart-line__sub">${esc(plant.scientific)}</p>
          <p class="cart-line__each">${offer ? money(offer.price) : "Unpriced"}<small>each</small></p>
        </div>
        ${shop}
        ${warning ? `<p class="cart-line__warning">${warning}</p>` : ""}
        <div class="cart-line__controls">
          ${quantityHTML(key, plant.name, line.qty)}
          <a href="index.html#plant-${plant.id}">Plant details</a>
          <button type="button" class="link-button" data-remove="${plant.id}" aria-label="Remove ${esc(plant.name)}">Remove</button>
        </div>
      </div>
    </details>`;
  }

  function renderExpandButton() {
    const items = $$(".list-item");
    const allOpen = items.length > 0 && items.every((item) => item.open);
    $("#list-expand").textContent = allOpen ? "Collapse all" : "Expand all";
  }

  function render() {
    // The list is re-rendered on every change, so focus is carried across by
    // a stable key instead of being lost to the replaced nodes.
    const focusKey = document.activeElement?.dataset?.focusKey;
    const removeFocused = document.activeElement?.matches?.(
      "#list-groups [data-remove]",
    );
    if (removedId !== null && lines.get(removedId).selected) removedId = null;
    const { groups, count, unknown } = cartSummary();

    $("#list-groups").innerHTML = groups
      .map(
        ({ zone, entries, subtotal }) => `<section class="list-group" aria-label="${esc(zone.name)}">
          <h2>${esc(zone.name)}<span>${money(subtotal)}</span></h2>
          ${entries.map(itemHTML).join("")}
        </section>`,
      )
      .join("");

    $("#list-empty").hidden = count > 0;
    $("#list-content").hidden = count === 0;
    $("#list-save-note").textContent = storageOk()
      ? "Your list is saved on this device."
      : "Your list cannot be saved on this device.";
    const unknownNote = $("#list-unknown");
    unknownNote.hidden = unknown === 0;
    unknownNote.textContent = `Unpriced items: ${unknown}. Excluded from the total.`;
    $("#list-checked").textContent = checkedNote(
      groups.flatMap((group) => group.entries),
    );
    renderExpandButton();

    const undo = $("#list-undo");
    undo.hidden = removedId === null;
    if (removedId !== null)
      $("#list-undo-text").textContent = `${byId.get(removedId).name} removed.`;

    const target = focusKey && $(`#list-groups [data-focus-key="${focusKey}"]`);
    if (target) target.focus({ preventScroll: true });
    else if (removeFocused && !undo.hidden)
      $("#list-undo-button").focus({ preventScroll: true });
  }

  async function copyList() {
    const text = cartText();
    const fallback = $("#list-copy-fallback");
    const status = $("#list-status");
    try {
      await navigator.clipboard.writeText(text);
      fallback.hidden = true;
      status.textContent = "List copied as text.";
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

  /* Events */

  const CLICK_ACTIONS = [
    ["[data-qty-step]", (el) => stepQuantity(el)],
    [
      "[data-remove]",
      (el) => {
        removedId = +el.dataset.remove;
        expanded.delete(removedId);
        removeFromCart(removedId);
      },
    ],
    [
      "#list-undo-button",
      () => {
        const id = removedId;
        removedId = null;
        if (id !== null) addToCart(id);
      },
    ],
    [
      "#list-clear",
      () => {
        removedId = null;
        expanded.clear();
        clearCart();
      },
    ],
    ["#list-copy", () => copyList()],
    [
      "#list-expand",
      () => {
        const items = $$(".list-item");
        const open = !items.every((item) => item.open);
        for (const item of items) {
          item.open = open;
          if (open) expanded.add(+item.dataset.line);
          else expanded.delete(+item.dataset.line);
        }
        renderExpandButton();
      },
    ],
  ];

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
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
      const id = Number(target.dataset.qty.slice("list-".length));
      updateCart(() => (lines.get(id).qty = clampQty(target.value)));
    } else if (target.matches("[data-shop]")) {
      const id = +target.dataset.shop;
      updateCart(() => (lines.get(id).offer = Number(target.value)));
    }
  });

  // Toggle events do not bubble, hence the capture listener.
  document.addEventListener(
    "toggle",
    (event) => {
      const item = event.target;
      if (!item.classList?.contains("list-item")) return;
      if (item.open) expanded.add(+item.dataset.line);
      else expanded.delete(+item.dataset.line);
      renderExpandButton();
    },
    true,
  );

  onCartChange(render);
  render();
})();
