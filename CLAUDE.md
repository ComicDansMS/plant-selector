# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, dependency-free single page that shortlists aquarium plants from Australian stores that ship to South Australia. Users browse plants by zone, filter and sort them, open a detail dialog, and build a list (the code calls it the cart) that is managed on a separate page and can be copied as text. The list is for ordering through a local fish shop, so the price shown everywhere is the average of the online stores' prices, as a rough guide. Stock status isn't shown. There is no build step, package manager, linter or test suite in the repo.

## The tank

Plants are chosen for one tank: a Waterbox 2420, 60 cm wide, 50 cm deep and 50 cm high. The substrate is 9 cm high at the back and the water line sits 2 cm below the top, so the water column at the back is about 39 cm.

The aim is to keep a sense of scale: prefer small-leaved, fine-textured plants that make the tank look bigger, and leave out large-leaved or bulky plants (most swords, large Hygrophila, broad Vallisneria, lotuses and so on) that would make it look small. Height alone isn't disqualifying when leaves are fine and the plant can be trimmed or cut back at the surface. Use this when adding or reviewing plants.

This context is for choosing plants only. Don't mention the tank, its model or its dimensions in plant data (`about`, `saNote`, zone intros) or anywhere in the UI. Write descriptions so they apply to any planted tank.

## Running

Open `index.html` directly in a browser, or serve the directory with any static server (e.g. `python3 -m http.server`). All scripts are classic scripts loaded with `defer`, not ES modules, so the page still works from `file://`. Keep it that way: `plants.js` notes that jsdom-based tests run these scripts, and jsdom skips module scripts.

## Architecture

- `plants.js` sets `globalThis.PLANT_CATALOGUE = { zones: [...] }`. It is pure JSON-style data. Each zone (`fore`, `mid`, `back`, `wood`, `moss`, `emersed`, `waterline`) has `plants`. Each plant has `id`, `name`, `scientific`, `difficulty`, `about`, `conditions` (array of `[label, value]` pairs such as Light/CO2/Growth/Height), `saNote`, `photos`, `offers`, `defaultOffer` and `sources`. It holds a shortlist of compact, small-leaved plants filtered from `plants-2420.js`, the original full catalogue, which no page loads. Keep ids and offers in step with that file.
- `core.js` is shared by both pages and exposes `globalThis.PLANT_CORE`:
  - **Derived plant model**: it flattens the zones into `plants` and adds `zone`, `conditionMap`, `searchText`, `price` (the average of every offer's price, sold out or not, in cents, or `null` with no offers), `light` (free-text Light parsed into Low/Medium/High levels by `lightLevels`) and `order`. `byId` maps id to plant.
  - Helpers (`esc`, `money`, `quantityHTML`, `storesHTML` for the per-store price list, ...) and the image error fallback.
  - **Favourites**: plants being considered but not in the list. Saved as an array of ids under `plant-shortlist-favourites-v1`, separate from the cart. `isFavourite`/`setFavourite`, and `consideredPlants()` returns them in catalogue order. `addToCart` removes a plant from favourites and favouriting a plant removes it from the list, so a plant is never in both. Changes go through the same `onCartChange` listeners.
  - **List state**: `lines` (one per plant), persistence, `cartSummary`/`cartText`, and mutations (`updateCart`, `addToCart`, `removeFromCart`, `clearCart`) that save and then call listeners registered with `onCartChange`. It reloads on `storage` and back/forward cache `pageshow`, so a page stays in sync with changes made on the other page.
- `app.js` (on `index.html`) is a single IIFE for the catalogue:
  - **View state** (`view`: query, sort, facet sets, min/max price) drives `applyView()`, which re-filters and re-sorts the rendered cards. Facets are declared in `FACETS` (key, options, `test` fn) and sorts in `SORTS`. Add new filters or sorts there.
  - **Rendering** builds HTML strings and assigns them to `innerHTML`. Every interpolated value must go through `esc()`.
  - **Events** are delegated at `document` level. Clicks go through `[data-open-plant]`, then dialog backdrop/`[data-close]` handling, then the `CLICK_ACTIONS` table of `[selector, handler]` pairs. Use that table for new buttons rather than adding per-element listeners.
  - **Dialogs**: the plant modal, lightbox and filter drawer are native `<dialog>` elements in `index.html`, managed via `showDialog`/`dialogStack` so they stack correctly.
  - **Added notification**: `#added` (modelled on Dawn's cart notification) is a `popover`, not a dialog, so the page keeps scrolling. It hides after 3 seconds unless hovered or focused. `showAdded` moves it into the topmost open dialog first, because content outside a modal dialog is inert.
  - **Deep links**: `#plant-<id>` opens a plant; the legacy `#plant-cart` redirects to `list.html` (`syncHash`).
  - **History**: opening the plant modal pushes one history entry (state `{ plant: true }`) and moving between plants replaces it, so back (including the browser's edge swipe) closes the modal. Closing it any other way calls `history.back()`.
  - **Swipe**: the previous and next plants are rendered as inert copies (`.product-modal__peek`, ids stripped) either side of `#plant-dialog-body`. A sideways drag on the plant modal, outside the photo gallery and away from the screen edges, moves the track with the finger and steps when released past a third of the width or flicked. Scope queries for the current plant's content to `plantBody`, not `plantDialog`, so they don't match the copies.
- `list.js` (on `list.html`) renders the list grouped by zone as `<details>` items: collapsed shows photo, name, quantity and price; expanded shows the average, each store's price and link, and quantity controls. Open items are kept in `expanded` so they survive re-renders. It also has its own `CLICK_ACTIONS` table, undo for removals, copy and clear.
- `styles.css` holds all styling. `--toolbar-height` is set from JS by a ResizeObserver so anchor jumps clear the sticky toolbar. The toolbar hides on scroll down and returns on scroll up (`is-hidden`), so group links scroll via `jumpTo`, which only leaves room for the toolbar when jumping up. Group headings (`.zone__head`) are sticky at `--toolbar-bottom` (also set by the ResizeObserver), or at the top while the toolbar is hidden.

## Compatibility constraints (don't break saved carts)

The cart persists to `localStorage` under `plant-shortlist-native-cart-v1`, and the older `plant-shortlist-cart-v1` key is migrated on load. The saved shape is a flat object keyed `native-selected-<id>`, `native-quantity-<id>` and `native-shop-<id>-<offerIndex>`, which mirrors an earlier version's form controls. So:

- Never renumber or reuse a plant `id`. New plants get the next unused number.
- Never reorder or remove existing `offers`. Append new ones, since offer indexes are stored.
- Keep the favourites key (`plant-shortlist-favourites-v1`) and its array-of-ids shape.
- Keep both storage keys and the `#plant-cart` hash (now a redirect to `list.html`) working.

## Data conventions in `plants.js`

- Prices are integer cents. `null` means no listed price. `was` is the pre-sale price, or `null`.
- `checked` is when the listing was last verified, formatted `YYYY-MM` or `YYYY-MM-DD`.
- `defaultOffer` is the offer index a plant starts with in the list: the cheapest in-stock option at the time of checking. Lines no longer pick a shop, but the saved shop keys are still written so the saved shape doesn't change.
- Only individual store prices go in the data. The average is worked out in `core.js`.
- Filters match condition values exactly (`CO2`: Optional/Recommended/Required; `Growth`: Very slow/Slow/Medium/Fast; `difficulty`: Easy/Moderate/Demanding). New data must use the same vocabulary, or it won't show up under those filters.
