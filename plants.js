// Plants with small leaves and a compact habit, chosen so a planted tank keeps
// its sense of scale. Filtered from plants-2420.js, the original full
// catalogue, which the pages no longer load. Ids and offers match it, so saved
// lists and deep links still work.
//
// Plant catalogue rendered by app.js.
//
// Plant ids key saved carts in localStorage and deep links (#plant-12), so an
// existing id must never be renumbered or reused; give new plants the next
// unused number. Offer indexes are also stored in saved carts, so append new
// offers rather than reordering existing ones.
//
// Prices are integer cents (null means no listed price). `was` is the
// pre-sale price when a sale was running. `checked` is when the listing was
// last checked, as YYYY-MM or YYYY-MM-DD. `defaultOffer` is the listing a
// plant starts with in the cart: the cheapest in stock option when checked.
//
// A classic script (not an ES module) so the page still works when opened
// from disk and jsdom can run it in the tests; jsdom skips module scripts.
globalThis.PLANT_CATALOGUE = {
  "zones": [
    {
      "id": "fore",
      "name": "Foreground",
      "intro": "Low plants and carpets for the front of the tank.",
      "plants": [
        {
          "id": 0,
          "name": "Monte Carlo",
          "scientific": "Micranthemum 'Monte Carlo'",
          "difficulty": "Moderate",
          "about": "Small round leaves on creeping stems that knit into a dense, bright green mat. It is more forgiving than HC and roots well, which makes it a common first carpet. It needs strong light at the substrate to stay flat, and the mat should be thinned once it starts to lift.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "1 to 3 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/micranthemum-tweediei-5203a17be166b.jpg",
              "caption": "Micranthemum sp. ''Montecarlo-3'', submerged",
              "credit": "© Tobias Coring (2013)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/micranthemum-tweediei"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/sherpas-way-home-570276e52a74b.jpg",
              "caption": "Aquascape: sherpas way home (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/sherpas-way-home"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/micranthemum-tweediei-5203a154e63c9.jpg",
              "caption": "Micranthemum sp. ''Montecarlo-3'', submerged",
              "credit": "© Tobias Coring (2013)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/micranthemum-tweediei"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/025%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Micranthemumtweediei'MonteCarlo'(025TC)/4442"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/tissue-culture-monte-carlo",
              "unit": "Tissue culture cup",
              "price": 1800,
              "was": 2100,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/monte-carlo-tissue-culture",
              "unit": "Tissue culture cup",
              "price": 1295,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Nature Aquariums: tissue culture range",
              "url": "https://www.natureaquariums.com.au/collections/tissue-culture"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Micranthemumtweediei'MonteCarlo'(025TC)/4442"
            }
          ]
        },
        {
          "id": 1,
          "name": "HC 'Cuba'",
          "scientific": "Hemianthus callitrichoides 'Cuba'",
          "difficulty": "Demanding",
          "about": "The smallest leaved carpet plant in the hobby. It needs stable CO2, strong light and a fine substrate to root into. In a sand cap the roots may not reach the soil layer, so root tabs under the carpet area help.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "1 to 3 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hemianthus-callitrichoides-cuba-4f7a010fdfe00.jpg",
              "caption": "Hemianthus callitrichoides",
              "credit": "Oliver Knott (2004)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hemianthus-callitrichoides-cuba"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/green-breath-52374da192539.jpg",
              "caption": "Aquascape: green breath (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/green-breath"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hemianthus-callitrichoides-cuba-4f7a010ebc26e.jpg",
              "caption": "Hemianthus callitrichoides",
              "credit": "© Christian Koch (2006)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hemianthus-callitrichoides-cuba"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/048B/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Micranthemumcallitrichoides´Cuba´(048B)/4477"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/hemianthus-callitrichoides-tissue-culture",
              "unit": "Tissue culture cup",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/tissue-culture/products/tissue-culture-cup-hemianthus-callitrichoides-baby-tears-hc",
              "unit": "Tissue culture cup",
              "price": 1900,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/tissue-culture-hemianthus-callitrichoides-baby-tears-hc",
              "unit": "Tissue culture cup",
              "price": 1800,
              "was": 2100,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquatic Plants Australia: tissue culture range",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/tissue-culture"
            },
            {
              "label": "Micro Aquatic Shop: tissue culture range",
              "url": "https://microaquaticshop.com.au/collections/tissue-culture-plant"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Micranthemumcallitrichoides´Cuba´(048B)/4477"
            }
          ]
        },
        {
          "id": 2,
          "name": "Glossostigma",
          "scientific": "Glossostigma elatinoides",
          "difficulty": "Demanding",
          "about": "An Australian and New Zealand native with pairs of small paddle shaped leaves. Under strong light it spreads fast and stays very low. If light at the substrate is too weak, it grows upward instead of across.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "2 to 3 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/glossostigma-elatinoides-4f7a01b4575e6.jpg",
              "caption": "Glossostigma elatinoides",
              "credit": "Tony Gomez (2004)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/glossostigma-elatinoides"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/anyplace-anytime-5150668198d06.jpg",
              "caption": "Aquascape: anyplace anytime (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/anyplace-anytime"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/glossostigma-elatinoides-4f7a01b38f503.jpg",
              "caption": "Glossostigma elatinoides",
              "credit": "Tony Gomez (2004)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/glossostigma-elatinoides"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/045A%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Glossostigmaelatinoides(045ATC)/4470"
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/tissue-culture-plants",
              "unit": "Tissue culture cup",
              "price": 1595,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/glossostigma-elatinoides-tissue-culture",
              "unit": "Tissue culture cup",
              "price": 1695,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: tissue culture range",
              "url": "https://aquafy.com.au/collections/tissue-culture/tc"
            },
            {
              "label": "Beyond Aquatics: tissue culture range",
              "url": "https://www.beyondaquatics.com.au/tissue-culture-plants"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Glossostigmaelatinoides(045ATC)/4470"
            }
          ]
        },
        {
          "id": 3,
          "name": "Dwarf hairgrass 'Mini'",
          "scientific": "Eleocharis acicularis 'Mini'",
          "difficulty": "Moderate",
          "about": "A short, fine grass that spreads by runners into a lawn. It gives the hairgrass look without the height of the standard form. Plant in small tufts spaced a few centimetres apart.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "3 to 5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/eleocharis-sp-mini-51dfe5695854a.jpg",
              "caption": "Eleocharis sp. 'Mini', submerged",
              "credit": "© Bryan (flashmaster) (2013)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/eleocharis-sp-mini"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/a-brief-crack-of-light-56c369bb82571.jpg",
              "caption": "Aquascape: a brief crack of light (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/a-brief-crack-of-light"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/eleocharis-sp-mini-51dfe54f5d839.jpg",
              "caption": "Eleocharis sp. 'Mini', submerged",
              "credit": "© Bryan (flashmaster) (2013)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/eleocharis-sp-mini"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/132B%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo. Sold by Tropica as Eleocharis pusilla 'Mini'.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Eleocharispusilla'Mini'(132BTC)/4571"
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/tissue-culture-plants",
              "unit": "Tissue culture cup",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/tc-tocharis-acicularis-mini-hairgrass",
              "unit": "Tissue culture cup",
              "price": 1800,
              "was": 2100,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Beyond Aquatics: tissue culture range",
              "url": "https://www.beyondaquatics.com.au/tissue-culture-plants"
            },
            {
              "label": "Nature Aquariums: tissue culture range",
              "url": "https://www.natureaquariums.com.au/collections/tissue-culture"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Eleocharispusilla'Mini'(132BTC)/4571"
            }
          ]
        },
        {
          "id": 4,
          "name": "UG",
          "scientific": "Utricularia graminifolia",
          "difficulty": "Demanding",
          "about": "A carnivorous bladderwort that forms a soft, grassy carpet. It lifts out of the substrate easily, so plant it in dense clumps. It prefers slightly acidic water, which matters with moderately hard SA tap water once the aquasoil stops buffering.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "3 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/utricularia-graminifolia-4f7a02440ad77.jpg",
              "caption": "Utricularia graminifolia, submerged",
              "credit": "© Oliver Knott (2005) www.oliver-knott.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/utricularia-graminifolia"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/once-there-was-chaos-515208fbabbeb.jpg",
              "caption": "Aquascape: once there was chaos (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/once-there-was-chaos"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/utricularia-graminifolia-4f7a024394373.jpg",
              "caption": "Utricularia graminifolia, submerged",
              "credit": "© Oliver Knott (2005) www.oliver-knott.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/utricularia-graminifolia"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/049B%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Utriculariagraminifolia(049BTC)/4480"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/utricularia-graminifolia-tissue-culture",
              "unit": "Tissue culture cup",
              "price": 1795,
              "was": 2495,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/tissue-culture/products/tissue-culture-cup-utricularia-graminifolia",
              "unit": "Tissue culture cup",
              "price": 2900,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/tissue-culture-utricularia-graminifolia",
              "unit": "Tissue culture cup",
              "price": 4500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/aquadepot-tissue-culture-utricularia-graminifolia",
              "unit": "Tissue culture cup",
              "price": 5000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "The Tech Den",
              "url": "https://www.thetechden.com.au/collections/tissue-culture-plants/products/aquadepot-utricularia-graminifolia-live-plant-tissue-culture",
              "unit": "Tissue culture cup",
              "price": 1595,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: Utricularia graminifolia",
              "url": "https://www.aquarzon.com/foreground/415-utricularia-graminifolia.html"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Utriculariagraminifolia(049BTC)/4480"
            }
          ]
        },
        {
          "id": 5,
          "name": "New Zealand grass",
          "scientific": "Lilaeopsis novaezelandiae",
          "difficulty": "Easy",
          "about": "Short, flat grass blades that spread slowly by runners. It works well along rock edges and in front of wood. It is the locally available alternative to Lilaeopsis brasiliensis.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "3 to 8 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquaryus.com/photos/plantes/lilaeopsis-novae-zelandiae.webp",
              "caption": "Lilaeopsis novae zelandiae Aquarium Carpet",
              "credit": "www.aquaryus.com",
              "creditUrl": "https://www.aquaryus.com/plantes-aquarium/lilaeopsis-novae-zelandiae.html"
            },
            {
              "src": "https://16739590.cdn6.editmysite.com/uploads/1/6/7/3/16739590/CTH3RPGRJSDABXEP5ZZF6QY5.jpeg",
              "caption": "Narrow Leaf Micro Sword Aquarium Plant",
              "credit": "shop.aquariumzen.net",
              "creditUrl": "https://shop.aquariumzen.net/product/narrow-microsword/66"
            },
            {
              "src": "https://aquascapeshop.com/cdn/shop/files/lilaeopsis-novae-zelandiae-2853518.jpg?v=1753707031&width=1200",
              "caption": "Lilaeopsis Novae-Zelandiae Aquarium Carpet Plant",
              "credit": "aquascapeshop.com",
              "creditUrl": "https://aquascapeshop.com/products/lilaeopsis-novae-zelandiae?srsltid=AfmBOorXSUm-ZC4-lk26CYYBZIym4j1rX8C1QqGWnhKAj4CNXOgV9hPY"
            },
            {
              "src": "https://microaquaticshop.com.au/cdn/shop/files/lilaeopsis_5cb1185b-3abb-4b48-a554-2f50a0b52bd8.webp?v=1785933883&width=1200",
              "caption": "Original reference photo.",
              "credit": "microaquaticshop.com.au",
              "creditUrl": "https://microaquaticshop.com.au/products/tissue-culture-lilaeopsis-novaezelandiae"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/tissue-culture-lilaeopsis-novaezelandiae",
              "unit": "Tissue culture cup",
              "price": 1800,
              "was": 2900,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/tissue-culture/products/tissue-culture-cup-lilaeopsis-novaezelandiae",
              "unit": "Tissue culture cup",
              "price": 1900,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: tissue culture range",
              "url": "https://microaquaticshop.com.au/collections/tissue-culture-plant"
            },
            {
              "label": "Photo source: microaquaticshop.com.au",
              "url": "https://microaquaticshop.com.au/products/tissue-culture-lilaeopsis-novaezelandiae"
            }
          ]
        },
        {
          "id": 6,
          "name": "Pygmy chain sword",
          "scientific": "Helanthium tenellum",
          "difficulty": "Easy",
          "about": "A small sword plant with narrow grassy leaves that spreads by runners. It is taller than dwarf hairgrass and fills in quickly. Under strong light the leaves can take on a reddish tint.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/helanthium-tenellum-4f7a019ed2891.jpg",
              "caption": "Helanthium tenellum",
              "credit": "Tropica",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/helanthium-tenellum"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/hidden-valleys-545d3a0a42cc1.jpg",
              "caption": "Aquascape: hidden valleys (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/hidden-valleys"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/helanthium-tenellum-4f7a019f99544.jpg",
              "caption": "Helanthium tenellum",
              "credit": "Tropica",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/helanthium-tenellum"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/067A%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Helanthiumtenellum'Green'(067ATC)/4757"
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/tissue-culture-plants",
              "unit": "Tissue culture cup",
              "price": 1595,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/tissue-culture-cup-helanthium-tenellum",
              "unit": "Tissue culture cup",
              "price": 2100,
              "was": 2500,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/echinodorus-tenellus-3-chains/",
              "unit": "3 chains",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "The Tech Den",
              "url": "https://www.thetechden.com.au/collections/tissue-culture-plants/products/copy-of-echinodorus-tenellus-tissue-culture",
              "unit": "Tissue culture cup",
              "price": 1595,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: tissue culture range",
              "url": "https://microaquaticshop.com.au/collections/tissue-culture-plant"
            },
            {
              "label": "Nature Aquariums: tissue culture range",
              "url": "https://www.natureaquariums.com.au/collections/tissue-culture"
            },
            {
              "label": "Beyond Aquatics: tissue culture range",
              "url": "https://www.beyondaquatics.com.au/tissue-culture-plants"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Helanthiumtenellum'Green'(067ATC)/4757"
            }
          ]
        },
        {
          "id": 7,
          "name": "Staurogyne repens",
          "scientific": "Staurogyne repens",
          "difficulty": "Easy",
          "about": "A compact stem plant with small, bright green leaves that creeps sideways into a low bush. It is not a true carpet, which makes it a good transition between the carpet and the midground. Topping and replanting the longest stems keeps it dense.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/staurogyne-repens-4f7a02be33cf5.jpg",
              "caption": "Staurogyne repens, submerged",
              "credit": "© Tobias Coring (2011)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/staurogyne-repens"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/green-breath-52374da192539.jpg",
              "caption": "Aquascape: green breath (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/green-breath"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/staurogyne-repens-5194b33d7675d.jpg",
              "caption": "Staurogyne repens, submerged",
              "credit": "© troetti",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/staurogyne-repens"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/049G%20PCS/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Staurogynerepens(049GPCS)/19617"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/staurogen-repens-tissue-culture",
              "unit": "Tissue culture cup",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/staurogyne-repens",
              "unit": "Tissue culture cup",
              "price": 1800,
              "was": 2300,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/tissue-culture/products/tissue-culture-cup-staurogyne-repens",
              "unit": "Tissue culture cup",
              "price": 1900,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: Staurogyne repens",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/staurogyne-repens"
            },
            {
              "label": "Seaview Aquarium Centre: Staurogyne repens",
              "url": "https://www.seaviewaquarium.com.au/shop/item/tissue-culture-staurogyne-repens"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Staurogynerepens(049GPCS)/19617"
            }
          ]
        },
        {
          "id": 8,
          "name": "Cryptocoryne parva",
          "scientific": "Cryptocoryne parva",
          "difficulty": "Easy",
          "about": "The smallest crypt, with narrow spoon shaped leaves. It grows very slowly, so plant it densely from the start. Like other crypts it feeds through its roots and benefits from root tabs in a sand cap.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "3 to 6 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cryptocoryne-parva-4f7a015eeb64b.jpg",
              "caption": "Cryptocoryne parva",
              "credit": "Tony Gomez (2004)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cryptocoryne-parva"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/green-breath-52374da192539.jpg",
              "caption": "Aquascape: green breath (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/green-breath"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cryptocoryne-parva-4f7a015fabe85.jpg",
              "caption": "Cryptocoryne parva",
              "credit": "buyenne (2007)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cryptocoryne-parva"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/106%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Cryptocoryneparva(106TC)/18755"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/tissue-culture-cryptocoryne-parva",
              "unit": "Tissue culture cup",
              "price": 5500,
              "was": 5800,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: tissue culture range",
              "url": "https://microaquaticshop.com.au/collections/tissue-culture-plant"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Cryptocoryneparva(106TC)/18755"
            }
          ]
        },
        {
          "id": 9,
          "name": "Downoi",
          "scientific": "Pogostemon helferi",
          "difficulty": "Moderate",
          "about": "A Thai plant with crinkled, curling leaves that form small star shaped rosettes. The crinkled texture stands out against flat-leaved carpets. It needs a nutrient rich substrate and good iron levels to stay green.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/pogostemon-helferi-4f7a013b21ad7.jpg",
              "caption": "Pogostemon helferi, submerged",
              "credit": "Oliver Knott (2005)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/pogostemon-helferi"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/sassi-s-375-liter-580baf1788c86.jpg",
              "caption": "Aquascape: sassi s 375 liter (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/sassi-s-375-liter"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/pogostemon-helferi-4f7a013a8142d.jpg",
              "caption": "Pogostemon helferi, submerged",
              "credit": "Oliver Knott (2005)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/pogostemon-helferi"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/053H%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Pogostemonhelferi(053HTC)/19680"
            }
          ],
          "offers": [
            {
              "shop": "FloraPhyta",
              "url": "https://www.floraphyta.com.au/plants/pogostemon-helferi",
              "unit": "Portion",
              "price": 695,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/pogostemon-helferi-downoi-tc/",
              "unit": "Tissue culture cup",
              "price": 1200,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/tissue-culture-pogostemon-helferi",
              "unit": "Tissue culture cup",
              "price": 1495,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/pogostemon-helferi-tissue-culture",
              "unit": "Tissue culture cup",
              "price": 2595,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "FloraPhyta: Pogostemon helferi",
              "url": "https://www.floraphyta.com.au/plants/pogostemon-helferi"
            },
            {
              "label": "Z-Aquatics: Pogostemon helferi 'Downoi'",
              "url": "https://www.z-aquatics.com.au/pogostemon-helferi-downoi-tc/"
            },
            {
              "label": "Nano Tanks Australia: Pogostemon helferi",
              "url": "https://nanotanksaustralia.com.au/products/tissue-culture-pogostemon-helferi"
            },
            {
              "label": "Aquasabi: Pogostemon helferi",
              "url": "https://www.aquasabi.com/Pogostemon-helferi"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Pogostemonhelferi(053HTC)/19680"
            }
          ]
        },
        {
          "id": 90,
          "name": "Hairgrass 'Belem'",
          "scientific": "Eleocharis sp. 'Belem'",
          "difficulty": "Moderate",
          "about": "The shortest of the dwarf hairgrasses, with very fine, bright green blades that arch over at a few centimetres. It spreads by runners into a low, even lawn that rarely needs mowing. Plant it in small tufts spaced apart in a rich substrate. Good light and CO2 make it spread much faster and thicker.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "3 to 5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn11.bigcommerce.com/s-os7lxdwh/images/stencil/original/products/435/1281/3-1-11013_1__62240.1509849982.jpg?c=2",
              "caption": "Hairgrass lawn growing submerged in an aquascape",
              "credit": "Z-Aquatics",
              "creditUrl": "https://www.z-aquatics.com.au/eleocharis-belem/"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/eleocharis-belem-aquatic-farmer-tissue-culture-1243226485.jpg?v=1788285784&width=1200",
              "caption": "Freshly planted tufts in an aquarium foreground",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/eleocharis-belem-aquatic-farmer-tissue-culture"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/eleocharis-belem-aquatic-farmer-tissue-culture-1243226486.jpg?v=1780964257&width=1200",
              "caption": "Planted along the front of an aquascape",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/eleocharis-belem-aquatic-farmer-tissue-culture"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/eleocharis-belem-aquatic-farmer-tissue-culture-1227438138.jpg?v=1773691896&width=1200",
              "caption": "Tissue-culture cup",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/eleocharis-belem-aquatic-farmer-tissue-culture"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/dwarf-hairgrass-tissue-hair-grass",
              "unit": "portion",
              "price": 1495,
              "was": 1800,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/eleocharis-belem/",
              "unit": "portion",
              "price": 1000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/eleocharis-acicularis-tissue-culture/",
              "unit": "tissue culture cup",
              "price": 1695,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/dwarf-hairgrass-tissue-hair-grass"
            },
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/eleocharis-belem/"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/eleocharis-acicularis-tissue-culture/"
            }
          ]
        },
        {
          "id": 91,
          "name": "Micranthemum 'Takashi'",
          "scientific": "Micranthemum umbrosum 'Takashi'",
          "difficulty": "Moderate",
          "about": "Small, round, bright green leaves on creeping stems that root as they go and knit into a soft, dense mat. The leaves are larger than HC, and it is more forgiving and roots more readily, so it suits a first carpet. It needs good light at the substrate to stay flat. Thin the mat once it starts to stack up, or the lower layers rot.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "2 to 5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/E644E05D-4477-4AD5-8620-D52AD8C15244.jpg?v=1763793341",
              "caption": "Carpet growing submerged in an aquascape",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/micranthemum-umbrosum-takashi"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/IMG-8911.jpg?v=1786578516&width=1000",
              "caption": "Portion held over a planted tank",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/micranthemum-umbrosum-takashi"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/IMG_1082.heic?v=1784563577&width=1200&format=pjpg",
              "caption": "Tissue-culture cup held over a planted tank",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/tc-micranthemum-umbrosum-takashi-ca"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0608/5771/2849/products/tissue-culture-micranthemum-umbrosum-takashi-carpet-363573.jpg?v=1702330289&width=1200",
              "caption": "Tissue-culture cup",
              "credit": "Nano Tanks Australia",
              "creditUrl": "https://nanotanksaustralia.com.au/products/tissue-culture-micranthemum-umbrosum-takashi-carpet"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/micranthemum-umbrosum-takashi",
              "unit": "portion",
              "price": 1495,
              "was": 1800,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/micranthemum-takashi-carpet-tissue-culture",
              "unit": "tissue culture cup",
              "price": 1595,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "The Online Aquarium Shop",
              "url": "https://www.theonlineaquariumshop.com.au/product/micranthemum-takashi-carpet/",
              "unit": "pot",
              "price": 1080,
              "was": 1690,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/micranthemum-umbrosum-takashi"
            },
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/micranthemum-takashi-carpet-tissue-culture"
            },
            {
              "label": "The Online Aquarium Shop: product page",
              "url": "https://www.theonlineaquariumshop.com.au/product/micranthemum-takashi-carpet/"
            }
          ]
        },
        {
          "id": 94,
          "name": "Brazilian Micro Sword",
          "scientific": "Lilaeopsis brasiliensis",
          "difficulty": "Moderate",
          "about": "Narrow, flat, bright green leaves, slightly widened at the tip, rise from creeping runners to form a grassy lawn. It is slow to establish but hardy once settled, and tolerates a little salt. It stays low and dense only under strong light with no shading from taller plants, so plant small clumps a few centimetres apart in an open spot.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "3 to 7 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/lilaeopsis-brasiliensis-523fe3ed2bcb7.jpg",
              "caption": "Submerged in an aquarium beside wood",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/lilaeopsis-brasiliensis"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/files/50F2C8FB-309C-4033-A223-68779EC9F3D1.jpg?v=1754373300&width=1200",
              "caption": "Close-up of a submerged lawn",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/micro-sword-lilaeopsis-brasiliensis"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/files/A5F81A18-D0DD-4652-9880-3EC49628DA94.jpg?v=1754373300&width=1200",
              "caption": "Dense submerged growth",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/micro-sword-lilaeopsis-brasiliensis"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/lilaeopsis-brasiliensis-1_turbo.webp?v=1763788782&width=800",
              "caption": "Single portion on a white background",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/lilaeopsis-brasiliensis"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/lilaeopsis-brasiliensis",
              "unit": "portion",
              "price": 1295,
              "was": 1800,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/micro-sword-lilaeopsis-brasiliensis",
              "unit": "portion",
              "price": 1195,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/lilaeopsis-brasiliensis"
            },
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/micro-sword-lilaeopsis-brasiliensis"
            }
          ]
        },
        {
          "id": 95,
          "name": "Marsilea hirsuta",
          "scientific": "Marsilea hirsuta",
          "difficulty": "Easy",
          "about": "A small aquatic fern that arrives with four-lobed, clover-like leaves on creeping rhizomes. Submerged, it often switches to single rounded leaves that form a low carpet, or a mix of one- to four-lobed leaves. It grows under low light without CO2, but more light keeps it compact and CO2 makes it denser and faster.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "2 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/010%20TC/5.JPG&crop=resize&class=product",
              "caption": "Submerged in an aquarium",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Marsileahirsuta(010TC)/4428"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/products/Marsilea-Hirsuta-in-aquarium.jpg?v=1730201702&width=1200",
              "caption": "Submerged carpet in an aquarium",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/marsilea-hirsuta"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/IMG-4207.jpg?v=1784565993&width=1000",
              "caption": "Young carpet spreading across the substrate",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/low-tech-carpet-plant-marselia-hirsuta"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/010%20TC/2.png&crop=resize&class=product",
              "caption": "Tropica 1-2-Grow! tissue-culture cup",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Marsileahirsuta(010TC)/4428"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/marsilea-hirsuta",
              "unit": "portion",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/marsilea-hirsute-loose",
              "unit": "emersed bunch",
              "price": 895,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/marsliea-hirsute",
              "unit": "per portion",
              "price": 1000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/marsilea-hirsuta"
            },
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/marsilea-hirsute-loose"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/marsliea-hirsute"
            }
          ]
        },
        {
          "id": 174,
          "name": "Eriocaulon cinereum",
          "scientific": "Eriocaulon cinereum",
          "difficulty": "Demanding",
          "about": "A small rosette of narrow, pale green leaves that grows into a pincushion-like clump and often sends up white flower heads. Flowering drains the plant, but with enough light and CO2 it regrows from the base. Soft water is best, though it copes with medium hardness. Divide side rosettes to propagate.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "3 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/eriocaulon-cinereum-4f7a01aca1832.jpg",
              "caption": "Submerged rosette in an aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/eriocaulon-cinereum"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/091%20TC/5.JPG&crop=resize&class=product",
              "caption": "Flowering in an aquascape",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/19547/19547"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/eriocaulon-cinereum-4f7a01ae3d151.jpg",
              "caption": "Submerged rosette in the foreground",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/eriocaulon-cinereum"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/091%20TC/2.png&crop=resize&class=product",
              "caption": "Tropica 1-2-Grow! tissue-culture cup",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/19547/19547"
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/eriocaulon-cinereum",
              "unit": "pot",
              "price": 4995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/eriocaulon-cinereum"
            }
          ]
        },
        {
          "id": 181,
          "name": "Creeping Jenny",
          "scientific": "Lysimachia nummularia",
          "difficulty": "Easy",
          "about": "Round, bright green leaves in opposite pairs on upright stems that branch little and grow straight towards the surface. It handles soft or hard water and suits cool and subtropical tanks best. In warm tropical water, growth often slows or stops. Trim and replant the tops to keep a bushier group.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/mein-anfang-51cebf85f3681.jpg",
              "caption": "Aquascape: mein anfang (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/mein-anfang"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/nano-silvae-542bcaa869e49.jpg",
              "caption": "Aquascape: nano silvae (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/nano-silvae"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0608/5771/2849/files/pennywort-creeping-jenny-lysimachia-nummularia-tissue-culture-2124297.png?v=1786977546&width=1000",
              "caption": "Tissue-culture cup",
              "credit": "Nano Tanks Australia",
              "creditUrl": "https://nanotanksaustralia.com.au/products/tissue-culture-lysimachia-nummularia-pennywort"
            },
            {
              "src": "https://greenaqua.hu/media/catalog/product/g/r/green-aqua-noveny-lysimachia-nummularia.jpg",
              "caption": "Potted plant on a white background",
              "credit": "Green Aqua",
              "creditUrl": "https://greenaqua.hu/en/green-aqua-plant-lysimachia-nummularia.html"
            }
          ],
          "offers": [
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/tissue-culture-lysimachia-nummularia-pennywort",
              "unit": "tissue culture cup",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/lysimachia-nummularia/",
              "unit": "bunch",
              "price": 800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/tissue-culture-lysimachia-nummularia-pennywort"
            },
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/lysimachia-nummularia/"
            }
          ]
        },
        {
          "id": 186,
          "name": "Littorella uniflora",
          "scientific": "Littorella uniflora",
          "difficulty": "Easy",
          "about": "Small rosettes of fat, fleshy, awl-shaped leaves, 2 to 5 cm long, that spread by runners into a short, grassy lawn. It copes with cooler water. Plant single rosettes a few centimetres apart. Low light works, but leaves grow longer, so stronger light keeps the lawn short.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "3 to 8 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/littorella-uniflora-51b07bd42ccfd.jpg",
              "caption": "Submerged in an aquascape foreground",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/littorella-uniflora"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/littorella-uniflora-4f7a01d664e9f.jpg",
              "caption": "Young plants spreading in an aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/littorella-uniflora"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/fffffffggggg.png?v=1720079838&width=800",
              "caption": "Growing submerged in a planted tank",
              "credit": "School of Scape",
              "creditUrl": "https://schoolofscape.com.au/products/litorella-uniflora"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/littorella-uniflora-4f7a01d9dc9bd.jpg",
              "caption": "Tissue-culture cup",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/littorella-uniflora"
            }
          ],
          "offers": [
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/products/litorella-uniflora",
              "unit": "portion",
              "price": 1200,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/products/litorella-uniflora"
            }
          ]
        },
        {
          "id": 210,
          "name": "Crypt willisii",
          "scientific": "Cryptocoryne willisii",
          "difficulty": "Easy",
          "about": "A small, hardy crypt with narrow, lance-shaped green leaves that spreads by runners into a low group or loose lawn. It is a good choice for shaded spots and low-tech tanks. Like most crypts, it may melt after planting and then regrow. It feeds through its roots, so give it a rich substrate or root tabs and leave it undisturbed.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "5 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/107/5.JPG&crop=resize&class=product",
              "caption": "Submerged group in an aquascape",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/4559/4559"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/cryptocoryne-willisii-1255795009.jpg?v=1787688397&width=1200",
              "caption": "Submerged between rocks in an aquarium",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/cryptocoryne-willisii"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Layouts/L021/2a.jpg&crop=resize&class=product",
              "caption": "Tropica layout detail: planted in sand",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/inspiration/layout/Layout21/4918"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/107/2.png&crop=resize&class=product",
              "caption": "Tropica potted plant",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/4559/4559"
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/crypt-willisii-5cm-pot",
              "unit": "5cm pot",
              "price": 1695,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/crypts-willisii-pot-plant/",
              "unit": "pot",
              "price": 1995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/crypt-willisii-5cm-pot"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/crypts-willisii-pot-plant/"
            }
          ]
        },
        {
          "id": 221,
          "name": "Green Rush (Eleocharis parvula)",
          "scientific": "Eleocharis parvula",
          "difficulty": "Easy",
          "about": "Fine, needle-like light green stalks that arch over as they grow, spreading by runners close to the parent plant into a dense lawn. Plant small clusters a few centimetres apart and they slowly join up. It grows in modest light without CO2, but brighter light and CO2 keep it shorter and help it spread faster.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "3 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/132C%20PCS/5.JPG&crop=resize&class=product",
              "caption": "Submerged lawn in an aquascape",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Eleocharisparvula(132CPCS)/30198"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Layouts/L100/main.jpg&crop=resize&class=product",
              "caption": "Tropica layout with a hairgrass lawn (plant in the layout's plant list)",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/inspiration/layout/Layout100/10356"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Layouts/L026/main.jpg&crop=resize&class=product",
              "caption": "Tropica layout: hairgrass on the left (plant in the layout's plant list)",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/inspiration/layout/Layout26/4958"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/132C/2.png&crop=resize&class=product",
              "caption": "Tropica potted plant",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/4572/4572"
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/green-rush-bunches-live-aquarium-plant/",
              "unit": "bunch",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/green-rush-bunches-live-aquarium-plant/"
            }
          ]
        }
      ]
    },
    {
      "id": "mid",
      "name": "Midground",
      "intro": "Bushes, rosettes and crypts that sit in front of the wood and stems.",
      "plants": [
        {
          "id": 10,
          "name": "Crypt wendtii 'Green Gecko'",
          "scientific": "Cryptocoryne wendtii",
          "difficulty": "Easy",
          "about": "A form of the most common crypt, with wavy, textured leaves. Crypts often melt after planting and regrow from the roots, so a slow start is normal. Root tabs in the sand keep it growing well.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cryptocoryne-wendtii-green-gecko-5164267d7d54b.jpg",
              "caption": "Crypt wendtii 'Green Gecko' growing detail",
              "credit": "Marcel Dykierek",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cryptocoryne-wendtii-green-gecko"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/the-circle-of-life-5283488de2554.jpg",
              "caption": "Aquascape: the circle of life (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/the-circle-of-life"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/tree-of-life-515b472167e93.jpg",
              "caption": "Aquascape: tree of life (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/tree-of-life"
            },
            {
              "src": "https://buceplant.com/cdn/shop/files/cryptocoryne-wendtii-green-gecko-uns-tissue-culture-1182146513_1200x800.jpg?v=1753740629",
              "caption": "Original reference photo.",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/cryptocoryne-wendtii-green-gecko-tissue-culture"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/tissue-culture-cryptocoryne-wendtii-green-gecko",
              "unit": "Tissue culture cup",
              "price": 4500,
              "was": 5900,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: tissue culture range",
              "url": "https://microaquaticshop.com.au/collections/tissue-culture-plant"
            },
            {
              "label": "Photo source: buceplant.com",
              "url": "https://buceplant.com/products/cryptocoryne-wendtii-green-gecko-tissue-culture"
            }
          ]
        },
        {
          "id": 11,
          "name": "Crypt lucens",
          "scientific": "Cryptocoryne × willisii 'Lucens'",
          "difficulty": "Easy",
          "about": "A compact crypt with narrow, upright leaves. It suits groups in front of wood or between stems. Like other crypts it is slow but very hardy once settled.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "10 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cryptocoryne-willisii-lucens-4f7a016d8a805.jpg",
              "caption": "Cryptocoryne x willisii ''lucens'', submerged",
              "credit": "© Paul Krombholz (2004)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cryptocoryne-willisii-lucens"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/nannostomus-bay-5207a3839b12d.jpg",
              "caption": "Aquascape: nannostomus bay (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/nannostomus-bay"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/nannostomus-bay-5207a3bb0a4df.jpg",
              "caption": "Aquascape: nannostomus bay (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/nannostomus-bay"
            },
            {
              "src": "https://www.aquariumcoop.com/cdn/shop/files/cryptocoryne-lucens-8430287.jpg?v=1766095149",
              "caption": "Original reference photo.",
              "credit": "aquariumcoop.com",
              "creditUrl": "https://www.aquariumcoop.com/products/cryptocoryne-lucens"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Aquarium Industries: tissue culture range",
              "url": "https://www.aquariumindustries.com.au/product-category/freshwater-plants/tissue_culture_plants/"
            },
            {
              "label": "Photo source: aquariumcoop.com",
              "url": "https://www.aquariumcoop.com/products/cryptocoryne-lucens"
            }
          ]
        },
        {
          "id": 12,
          "name": "Crypt nurii",
          "scientific": "Cryptocoryne nurii",
          "difficulty": "Moderate",
          "about": "A smaller crypt with narrow leaves that are often mottled. It is less common than wendtii and slower to establish. It adds a darker, patterned leaf among green plants.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "5 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0311/3149/files/cryptocoryne-nurii-tissue-culture-5390767.jpg?v=1766094910",
              "caption": "Cryptocoryne Nurii Tissue Culture - Aquarium Co - Op",
              "credit": "Aquarium Co-Op",
              "creditUrl": "https://www.aquariumcoop.com/products/cryptocoryne-nurii-tissue-culture"
            },
            {
              "src": "https://www.myhomenature.com/cdn/shop/products/TB2nCqzXCOFJuJjSZFBXXaGxpXa_46864701.jpg?v=1692941765&width=1445",
              "caption": "Cryptocoryne nurii Aquarium Plant",
              "credit": "www.myhomenature.com",
              "creditUrl": "https://www.myhomenature.com/products/cryptocoryne-nurii"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0004/1435/1385/products/image_9972eb63-e868-4270-8a8b-680dd0835b48_1200x1200.jpg?v=1676190487",
              "caption": "Cryptocoryne Nurii Rosen Maiden in Planted Aquarium",
              "credit": "aquaticavenueonline.com",
              "creditUrl": "https://aquaticavenueonline.com/products/cryptocoryne-nurii-rosen-maiden"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/126%20TC/4.JPG&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Cryptocorynenurii(126TC)/29518"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/tissue-culture-cryptocoryne-nurii",
              "unit": "Tissue culture cup",
              "price": 4500,
              "was": 5900,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: tissue culture range",
              "url": "https://microaquaticshop.com.au/collections/tissue-culture-plant"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Cryptocorynenurii(126TC)/29518"
            }
          ]
        },
        {
          "id": 13,
          "name": "Blyxa japonica",
          "scientific": "Blyxa japonica",
          "difficulty": "Moderate",
          "about": "A grassy, bushy plant made popular by nature style aquascapes. It turns bronze to reddish under strong light. It feeds heavily through its roots, so it benefits from root tabs in the sand.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/blyxa-japonica-var-japonica-513dd72003821.jpg",
              "caption": "Blyxa japonica",
              "credit": "Marcel Dykierek (2009)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/blyxa-japonica"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/green-breath-52374da192539.jpg",
              "caption": "Aquascape: green breath (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/green-breath"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/blyxa-japonica-var-japonica-513dd7200316e.jpg",
              "caption": "Blyxa japonica",
              "credit": "Oliver (2011)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/blyxa-japonica"
            },
            {
              "src": "https://www.aquarzon.com/2097-large_default/blyxa-japonica.jpg",
              "caption": "Original reference photo.",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/foreground/487-blyxa-japonica.html"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Aquarzon: Blyxa japonica",
              "url": "https://www.aquarzon.com/foreground/572-bulk-blyxa-japonica.html"
            },
            {
              "label": "Photo source: aquarzon.com",
              "url": "https://www.aquarzon.com/foreground/487-blyxa-japonica.html"
            }
          ]
        },
        {
          "id": 14,
          "name": "Hydrocotyle tripartita",
          "scientific": "Hydrocotyle tripartita 'Japan'",
          "difficulty": "Easy",
          "about": "An Australian and New Zealand native with tiny three lobed leaves. It creeps over rock, wood and other plants and can be trimmed into soft mounds. It also grows well above the waterline on damp wood.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "2 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hydrocotyle-cf-tripartita-4f7a03d62a8fb.jpg",
              "caption": "Hydrocotyle tripartita growing detail",
              "credit": "Tobias Coring (2010)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hydrocotyle-cf-tripartita"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/long-way-to-go-5151f6db5bc37.jpg",
              "caption": "Aquascape: long way to go (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/long-way-to-go"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hydrocotyle-cf-tripartita-4f7a03dbf10a4.jpg",
              "caption": "Hydrocotyle tripartita growing detail",
              "credit": "Holger Byrenheid (2011)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hydrocotyle-cf-tripartita"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/039B%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Hydrocotyletripartita(039BTC)/18751"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/hydrocotyle-tripartita-tissue-culture",
              "unit": "Tissue culture cup",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: tissue culture range",
              "url": "https://aquafy.com.au/collections/tissue-culture/tc"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Hydrocotyletripartita(039BTC)/18751"
            }
          ]
        },
        {
          "id": 15,
          "name": "Alternanthera reineckii 'Mini'",
          "scientific": "Alternanthera reineckii 'Mini'",
          "difficulty": "Moderate",
          "about": "A compact red to pink stem plant that stays low. It gives strong colour at a height where few red plants fit. Colour is best with strong light and good iron.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/alternanthera-reineckii-mini-4f7a03e5b27f0.jpg",
              "caption": "Alternanthera reineckii ''rosaefolia minor'', submersed",
              "credit": "Stephan Mönninghoff (2011)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/alternanthera-reineckii-mini"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/bommerholz-58ceb7baeeca5.jpg",
              "caption": "Aquascape: bommerholz (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/bommerholz"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/alternanthera-reineckii-mini-4f7a03e7601b6.jpg",
              "caption": "Alternanthera reineckii 'Mini' growing detail",
              "credit": "Stephan Mönninghoff (2011)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/alternanthera-reineckii-mini"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/023C%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Alternantherareineckii'Mini'(023CTC)/4439"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/alteranthera-reinekii-tissue-culture",
              "unit": "Tissue culture cup",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/tissue-culture-plants",
              "unit": "Tissue culture cup",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/tc-alternanthera-reinecki-mini",
              "unit": "Tissue culture cup",
              "price": 1800,
              "was": 2900,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/tissue-culture/products/tissue-culture-cup-alternanthera-reineckii-mini",
              "unit": "Tissue culture cup",
              "price": 1900,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Beyond Aquatics: tissue culture range",
              "url": "https://www.beyondaquatics.com.au/tissue-culture-plants"
            },
            {
              "label": "Nature Aquariums: tissue culture range",
              "url": "https://www.natureaquariums.com.au/collections/tissue-culture"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Alternantherareineckii'Mini'(023CTC)/4439"
            }
          ]
        },
        {
          "id": 16,
          "name": "Hygrophila 'Araguaia'",
          "scientific": "Hygrophila lancea 'Araguaia'",
          "difficulty": "Moderate",
          "about": "A low, bushy stem plant with narrow leaves in bronze to red tones. It forms a loose cushion rather than tall stems. It colours best under strong light with lean nitrate.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "5 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hygrophila-lancea-araguaia-4f7a02f241ce8.jpg",
              "caption": "Hygrophila sp. 'Araguaia', submerged",
              "credit": "Stephan Mönninghoff (2011)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hygrophila-lancea-araguaia"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/nannostomus-bay-5207a3839b12d.jpg",
              "caption": "Aquascape: nannostomus bay (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/nannostomus-bay"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hygrophila-lancea-araguaia-4f7a02f17d5a7.jpg",
              "caption": "Hygrophila sp. 'Araguaia', submerged",
              "credit": "Tim Gross (2008/2009)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hygrophila-lancea-araguaia"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/051B%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Hygrophilalancea'Araguaia'(051BTC)/4758"
            }
          ],
          "offers": [
            {
              "shop": "Scapeshop",
              "url": "https://scapeshop.com.au/collections/aquarium-plants-tissue-culture-1",
              "unit": "Tissue culture cup",
              "price": 1200,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/tissue-culture-plants",
              "unit": "Tissue culture cup",
              "price": 1595,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/tissue-culture-cup-hygrophila-lancea-araguaia",
              "unit": "Tissue culture cup",
              "price": 1800,
              "was": 2100,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Nature Aquariums: tissue culture range",
              "url": "https://www.natureaquariums.com.au/collections/tissue-culture"
            },
            {
              "label": "Scapeshop: tissue culture range",
              "url": "https://scapeshop.com.au/collections/aquarium-plants-tissue-culture-1"
            },
            {
              "label": "Beyond Aquatics: tissue culture range",
              "url": "https://www.beyondaquatics.com.au/tissue-culture-plants"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Hygrophilalancea'Araguaia'(051BTC)/4758"
            }
          ]
        },
        {
          "id": 17,
          "name": "Lobelia 'Mini'",
          "scientific": "Lobelia cardinalis 'Mini'",
          "difficulty": "Easy",
          "about": "A dwarf cardinal flower with rounded to oval leaves, fresh green above and reddish-purple below, on short, freely branching stems. It rarely sends up the long shoots of the species, so it forms a low, dense clump. It grows without CO2, but bright light and CO2 keep it compact and deepen the purple.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "3 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/lobelia-cardinalis-kleine-form-4f7a01dd8c292.jpg",
              "caption": "Lobelia cardinalis 'kleine Form'",
              "credit": "Svennovitch (2006)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/lobelia-cardinalis-kleine-form"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/olli-seins-52513527462b2.jpg",
              "caption": "Aquascape: olli seins (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/olli-seins"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/lobelia-cardinalis-kleine-form-51da5d70e6faf.jpg",
              "caption": "Lobelia 'Mini' growing detail",
              "credit": "© stern_nbg",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/lobelia-cardinalis-kleine-form"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/143%20TC/4.JPG&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Lobeliacardinalis'Mini'(143TC)/28647"
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/tissue-culture-plants",
              "unit": "Tissue culture cup",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/lobelia-cardinalis-mini",
              "unit": "Tissue culture cup",
              "price": 1800,
              "was": 1895,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/lobelia-cardinalis-tissue-culture-cup",
              "unit": "Tissue culture cup",
              "price": 1295,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Nature Aquariums: tissue culture range",
              "url": "https://www.natureaquariums.com.au/collections/tissue-culture"
            },
            {
              "label": "Beyond Aquatics: tissue culture range",
              "url": "https://www.beyondaquatics.com.au/tissue-culture-plants"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Lobeliacardinalis'Mini'(143TC)/28647"
            }
          ]
        },
        {
          "id": 18,
          "name": "Bacopa monnieri",
          "scientific": "Bacopa monnieri",
          "difficulty": "Easy",
          "about": "A hardy stem plant with small, thick leaves. It is easy to grow and tolerates a wide range of water. Trim and replant the tops to keep it bushy.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/bacopa-monnieri-513dd418e670e.jpg",
              "caption": "Bacopa monnieri, submerged",
              "credit": "© Alex (2006)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/bacopa-monnieri"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/fischsuppe-56e092617ce53.jpg",
              "caption": "Aquascape: fischsuppe (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/fischsuppe"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/bacopa-monnieri-4f7a0146ce837.jpg",
              "caption": "Bacopa monnieri, likely the cultivar 'Compact'; submerged",
              "credit": "© Svennovitch (2004)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/bacopa-monnieri"
            },
            {
              "src": "https://aquafy.com.au/cdn/shop/products/bacopa-monnieri_grande.jpg?v=1730198039",
              "caption": "Original reference photo.",
              "credit": "aquafy.com.au",
              "creditUrl": "https://aquafy.com.au/products/bacopa-monnieri"
            }
          ],
          "offers": [
            {
              "shop": "Live Fish",
              "url": "https://www.livefish.com.au/aquarium-plants/tissue-culture-plants.html",
              "unit": "Tissue culture tub",
              "price": 1250,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Live Fish: tissue culture range",
              "url": "https://www.livefish.com.au/aquarium-plants/tissue-culture-plants.html"
            },
            {
              "label": "Photo source: aquafy.com.au",
              "url": "https://aquafy.com.au/products/bacopa-monnieri"
            }
          ]
        },
        {
          "id": 19,
          "name": "Dwarf sag",
          "scientific": "Sagittaria subulata",
          "difficulty": "Easy",
          "about": "Short ribbon leaves that spread quickly by runners. It is useful for filling gaps between groups, but runners need regular removal to stop it spreading everywhere.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "5 to 15 cm"
            ]
          ],
          "saNote": "Sagittaria platyphylla is a declared weed in SA, and sale and movement are banned statewide. Only buy dwarf sag from a seller that names Sagittaria subulata.",
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/sagittaria-subulata-51da5e26eb8e5.jpg",
              "caption": "Sagittaria subulata, submerged",
              "credit": "© stern_nbg",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/sagittaria-subulata"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/das-mammut-568418da38d99.jpg",
              "caption": "Aquascape: das mammut (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/das-mammut"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/sagittaria-subulata-4f7a022f90337.jpg",
              "caption": "Sagittaria subulata, submerged",
              "credit": "© Bjarne Sætrang (2004) www.aquadigital.net",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/sagittaria-subulata"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/079%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Sagittariasubulata(079TC)/18270"
            }
          ],
          "offers": [
            {
              "shop": "Nature Aquariums",
              "url": "https://www.natureaquariums.com.au/products/sagittaria-subulata",
              "unit": "Portion",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Nature Aquariums: Sagittaria subulata",
              "url": "https://www.natureaquariums.com.au/products/sagittaria-subulata"
            },
            {
              "label": "PIRSA: declared plant policy for sagittaria",
              "url": "https://pir.sa.gov.au/biosecurity/weeds/managing_weeds/plant_policies/pest_weed_policies/declared_plants2/declared_plants/sagittaria_policy.pdf"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Sagittariasubulata(079TC)/18270"
            }
          ]
        },
        {
          "id": 92,
          "name": "Micranthemum umbrosum",
          "scientific": "Micranthemum umbrosum",
          "difficulty": "Moderate",
          "about": "Bright green stem plant with small round leaves, often called Hemianthus umbrosum. It can be trimmed low as a carpet or left to grow as a bush.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/048/4.png&crop=resize&class=product",
              "caption": "Submerged in an aquascape",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Micranthemumumbrosum(048)/4475"
            },
            {
              "src": "https://cdn11.bigcommerce.com/s-os7lxdwh/images/stencil/original/products/2/347/micranthemum-umbrosum-group__22518.1416825233.jpg?c=2",
              "caption": "Submerged group in an aquarium",
              "credit": "Z-Aquatics",
              "creditUrl": "https://www.z-aquatics.com.au/micranthemum-umbrosum/"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/micranthemum-umbrosum-4f7a01f2d1364.jpg",
              "caption": "Close-up of submerged growth",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/micranthemum-umbrosum"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/048/2.png&crop=resize&class=product",
              "caption": "Tropica potted plant",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Micranthemumumbrosum(048)/4475"
            }
          ],
          "offers": [
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/micranthemum-umbrosum/",
              "unit": "bunch",
              "price": 800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/hemianthus-umbrosum",
              "unit": "bunch",
              "price": 1800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/micranthemum-umbrosum/"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/hemianthus-umbrosum"
            }
          ]
        },
        {
          "id": 93,
          "name": "Pearlweed (Hemianthus micranthemoides)",
          "scientific": "Hemianthus micranthemoides",
          "difficulty": "Moderate",
          "about": "Tiny, light green, oval to lance-shaped leaves, usually in whorls of three, on thin, branching stems that build a fine, airy bush. It suits the midground or background of small layouts and can be trimmed into dense mounds. Trim often so the lower stems keep their light. Strong light and CO2 keep it compact.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/hemianthus-micranthemoides-pearl-weed-aquatic-farmer-tissue-culture-35572136968392.jpg?v=1775665021",
              "caption": "Dense submerged group in an aquascape",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/pearlweed-aquatic-farmer-tissue-culture"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/hemianthus-micranthemoides-pearl-weed-aquatic-farmer-tissue-culture-35572138180808.jpg?v=1715885504",
              "caption": "Submerged bush in front of red stem plants",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/pearlweed-aquatic-farmer-tissue-culture"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/0495D51A-6372-4272-B866-7C12B6C689A7.jpg?v=1763793268",
              "caption": "Trimmed low as a submerged carpet",
              "credit": "microaquaticshop.com.au",
              "creditUrl": "https://microaquaticshop.com.au/products/carpet-plant-hemianthus-micranthemoide"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/micranthemum-micranthemoides-aquatic-farmer-tissue-culture-15746058551377.jpg?v=1775665021",
              "caption": "Tissue-culture cup",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/pearlweed-aquatic-farmer-tissue-culture"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/carpet-plant-hemianthus-micranthemoide",
              "unit": "portion",
              "price": 1495,
              "was": 1800,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/carpet-plant-hemianthus-micranthemoide"
            }
          ]
        },
        {
          "id": 96,
          "name": "Cardamine lyrata (Japanese cress)",
          "scientific": "Cardamine lyrata",
          "difficulty": "Easy",
          "about": "Round, bright green, slightly scalloped leaves on soft stems that grow upright or trail across the surface. It is a swamp plant from East Asia that does best in cooler water, and leaves get smaller and stems stretch if it stays above about 28°C. It trims easily and grows quickly, so cut it back regularly to keep it bushy.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "20 to 50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/024/4.png&crop=resize&class=product",
              "caption": "Submerged in a planted aquarium",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Cardaminelyrata%28024%29/4441"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cardamine-lyrata-4f7a01527416c.jpg",
              "caption": "Submerged close-up of the kidney-shaped leaves",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cardamine-lyrata"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/swamp-grove-5644dd555b3db.jpg",
              "caption": "Aquascape: Swamp Grove (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/swamp-grove"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/024/2.png&crop=resize&class=product",
              "caption": "Tropica product photo (potted).",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Cardaminelyrata%28024%29/4441"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/cardamine-lyrata",
              "unit": "bunch",
              "price": 695,
              "was": 995,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/cardamine-lyrata-emersed-bunch",
              "unit": "emersed bunch",
              "price": 597,
              "was": 895,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/stem-plants/697-cardamine-lyrata.html",
              "unit": "bunch",
              "price": 990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Scapeshop",
              "url": "https://scapeshop.com.au/products/cardamine-lyrata",
              "unit": "bunch",
              "price": 800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/cardamine-lyrata/",
              "unit": "bunch",
              "price": 800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/cardamine-lyrata01",
              "unit": "bunch",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/cardamine-lyrata"
            },
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/cardamine-lyrata-emersed-bunch"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/stem-plants/697-cardamine-lyrata.html"
            },
            {
              "label": "Scapeshop: product page",
              "url": "https://scapeshop.com.au/products/cardamine-lyrata"
            },
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/cardamine-lyrata/"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/cardamine-lyrata01"
            }
          ]
        },
        {
          "id": 97,
          "name": "Water Rose (Samolus parviflorus)",
          "scientific": "Samolus parviflorus",
          "difficulty": "Easy",
          "about": "Light green, spoon-shaped leaves in a low, dense rosette that looks like a small open rose. It prefers cooler water and tolerates harder, more alkaline water, so it suits low-tech and room-temperature tanks. CO2 and good light give fuller, better-coloured leaves. Remove old outer leaves and replant offsets to propagate.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "5 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquarzon.com/2124-large_default/samolus-parviflorus.jpg",
              "caption": "Grown out above the water in a planted setup, flowering",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/stem-plants/540-samolus-parviflorus.html"
            },
            {
              "src": "https://www.aquarzon.com/2123-large_default/samolus-parviflorus.jpg",
              "caption": "Stem held over a planted aquarium",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/stem-plants/540-samolus-parviflorus.html"
            },
            {
              "src": "https://www.aquarzon.com/2146-large_default/samolus-parviflorus.jpg",
              "caption": "Close-up of the small white flowers",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/stem-plants/540-samolus-parviflorus.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/007FBB83-A5F6-4513-B45C-EB652ED3A5B8.webp?v=1763793208",
              "caption": "Potted rosette on white background",
              "credit": "microaquaticshop.com.au",
              "creditUrl": "https://microaquaticshop.com.au/products/samolus-parviflorus"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/samolus-parviflorus",
              "unit": "portion",
              "price": 1495,
              "was": 1600,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/stem-plants/540-samolus-parviflorus.html",
              "unit": "bunch",
              "price": 990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/samolus-parviflorus"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/stem-plants/540-samolus-parviflorus.html"
            }
          ]
        },
        {
          "id": 98,
          "name": "Samolus 'Red'",
          "scientific": "Lysimachia parvifolia",
          "difficulty": "Moderate",
          "about": "Small, rounded leaves in red, orange and bronze on short stems that slowly build into compact bushes. Higher light, around 150 PAR, brings out the deepest reds, and lower light gives greens and oranges. A rich substrate gives fuller, rounder leaves. It grows at a moderate pace, so it needs little pruning.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/samolus-parviflorus-red-1210794382.jpg?v=1765418786",
              "caption": "Red rosette planted in the midground of an aquascape",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/samolus-parviflorus-red"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/samolus-parviflorus-red-1202964493.jpg?v=1762334067",
              "caption": "Submerged on driftwood among moss",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/samolus-parviflorus-red"
            },
            {
              "src": "https://www.aquarzon.com/2721-large_default/red-samolus-parviflorus.jpg",
              "caption": "Submerged close-up showing red leaf colour",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/stem-plants/568-red-samolus-parviflorus.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/samolus-parviflorus-red-1202964496.jpg?v=1762334071",
              "caption": "Single plant on white background",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/samolus-parviflorus-red"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/stem-plants/568-red-samolus-parviflorus.html",
              "unit": "bunch",
              "price": 2900,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/samolus-parviflorus-red/",
              "unit": "plant",
              "price": 3500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/stem-plants/568-red-samolus-parviflorus.html"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/samolus-parviflorus-red/"
            }
          ]
        },
        {
          "id": 116,
          "name": "Ludwigia ovalis",
          "scientific": "Ludwigia ovalis",
          "difficulty": "Easy",
          "about": "Small, oval leaves in opposite pairs on creeping-to-upright stems that form a low, bushy clump. Leaves range from green and gold to orange and pink, depending on light and iron. Medium light is enough to grow it without CO2, but stronger light, CO2 and iron give richer red tones. Trim and replant tops to keep it dense.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/ludwigia-ovalis-1209749864.jpg?v=1771456351",
              "caption": "Pink-orange bushes in an aquascape",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/ludwigia-ovalis"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/D8F21D86-DDDF-4CFA-A752-22227966C69E.webp?v=1763795684",
              "caption": "Submerged bush in an aquarium",
              "credit": "microaquaticshop.com.au",
              "creditUrl": "https://microaquaticshop.com.au/products/ludwigia-ovalis"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/ludwigia-ovalis-513ee2cbb728b.jpg",
              "caption": "Submerged group in a planted aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/ludwigia-ovalis"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/ludwigia-ovalis-1221634889.jpg?v=1771492775",
              "caption": "Portion on white background",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/ludwigia-ovalis"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/ludwigia-ovalis",
              "unit": "bunch",
              "price": 1495,
              "was": 1600,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/ludwigia-ovalis"
            }
          ]
        },
        {
          "id": 122,
          "name": "Ludwigia 'Super Mini Red'",
          "scientific": "Ludwigia palustris 'Super Red Mini'",
          "difficulty": "Moderate",
          "about": "A compact form of Ludwigia palustris with small, oval leaves around 1 cm long that turn deep wine red in strong light. It branches readily and makes a low, bushy red accent in the midground. Colour depends on strong light and a good iron supply, and regular topping keeps the group dense.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.co2art.eu/cdn/shop/articles/1fab41604d72bef2eb4a78880998.jpg",
              "caption": "Bright red group among green stem plants",
              "credit": "co2art.eu",
              "creditUrl": "https://www.co2art.eu/blogs/blog/say-hello-to-ludwigia-mini-sp-super-red"
            },
            {
              "src": "https://www.aquarzon.com/1590-large_default/ludwigia-mini-super-red.jpg",
              "caption": "Submerged next to green stem plants",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/stem-plants/234-ludwigia-mini-super-red.html"
            },
            {
              "src": "https://www.aquarzon.com/1336-large_default/ludwigia-mini-super-red.jpg",
              "caption": "Submerged close-up of the red leaves",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/stem-plants/234-ludwigia-mini-super-red.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0643/3239/8819/products/ludiwigiasuperminired.jpg?v=1660635407",
              "caption": "Potted bunch on white background",
              "credit": "aquaticplantsaustralia.com.au",
              "creditUrl": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/ludwigia-palustris-submersed-bunch-super-mini-red-s053"
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/ludwigia-palustris-submersed-bunch-super-mini-red-s053",
              "unit": "submersed bunch",
              "price": 1200,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/stem-plants/234-ludwigia-mini-super-red.html",
              "unit": "5 stems",
              "price": 990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/ludwigia-sp-mini-super-red",
              "unit": "5 stems ~10cm",
              "price": 1000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/products/ludwigia-pantanal-verticillata-e142-copy",
              "unit": "bunch",
              "price": 1000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/ludwigia-sp-super-red",
              "unit": "bunch",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/ludwigia-palustris-submersed-bunch-super-mini-red-s053"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/stem-plants/234-ludwigia-mini-super-red.html"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/ludwigia-sp-mini-super-red"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/products/ludwigia-pantanal-verticillata-e142-copy"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/ludwigia-sp-super-red"
            }
          ]
        },
        {
          "id": 129,
          "name": "Rotala indica",
          "scientific": "Rotala indica",
          "difficulty": "Easy",
          "about": "Upright stems carry small, rounded, cupped leaves in opposite pairs, light green below with pink to orange tips under strong light. Planted in groups it forms a soft, fine-textured bush for the midground. Trimming the tops when they near the surface keeps it dense, and iron dosing brings out the colour.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "15 to 30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/rotala-indica-51da5e4081a44.jpg",
              "caption": "Upright submerged group in a planted aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/rotala-indica"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0854/0866/products/RotalaIndica_131f152f-9558-4bba-b6ee-505d9f14225c.jpg?v=1760447907",
              "caption": "Submerged group in an aquascape",
              "credit": "aquaristiconline.com.au",
              "creditUrl": "https://www.aquaristiconline.com.au/collections/plant-background/products/rotala-indica"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/rotala-indica-4f7a032006867.jpg",
              "caption": "Submerged stems with reddish tips",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/rotala-indica"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/rotala-ammania-bonsai-uns-tissue-culture-34270962778312.jpg?v=1687456843",
              "caption": "Tissue-culture cup (sold as Rotala 'Bonsai')",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/rotala-ammania-bonsai-uns-tissue-culture"
            }
          ],
          "offers": [
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/rotala-indica",
              "unit": "bunch",
              "price": 1800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/rotala-indica"
            }
          ]
        },
        {
          "id": 158,
          "name": "Limnophila aromatica 'Kalimantan Mini'",
          "scientific": "Limnophila aromatica",
          "difficulty": "Easy",
          "about": "A dwarf form of Limnophila aromatica, thought to come from Borneo, with narrow serrated leaves 1 to 2.5 cm long in light green to brown-red. It suits small midground groups and grows easily from cuttings. Strong light gives the best colour, and it looks best trimmed to a low group.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquarzon.com/3059-large_default/mini-limnophila-aromatica.jpg",
              "caption": "Submerged group showing green and red-tipped stems",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/stem-plants/635-mini-limnophila-aromatica.html"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/limnophila-aromatica-mini-4f7a026cb914b.jpg",
              "caption": "Submerged shoot tip with serrated brown-red leaves",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/limnophila-aromatica-mini"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/markus-130er-56c25cfaa98d3.jpg",
              "caption": "Aquascape: Markus' 130er (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/markus-130er"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0643/3239/8819/files/Kalmantan.jpg?v=1739937378",
              "caption": "Submersed-grown bunch on white background",
              "credit": "aquaticplantsaustralia.com.au",
              "creditUrl": "https://www.aquaticplantsaustralia.com.au/collections/centrepiece/products/limnophila-aromatica-kalmantan-mini-submersed-bunch"
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/centrepiece/products/limnophila-aromatica-kalmantan-mini-submersed-bunch",
              "unit": "submersed bunch",
              "price": 1200,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/aromatica-limnophilia",
              "unit": "bunch of 6-10 stems, emersed",
              "price": 895,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/centrepiece/products/limnophila-aromatica-kalmantan-mini-submersed-bunch"
            }
          ]
        },
        {
          "id": 161,
          "name": "Ammannia senegalensis",
          "scientific": "Ammannia senegalensis",
          "difficulty": "Moderate",
          "about": "Stem plant with opposite, slightly wavy lanceolate leaves that shift from olive and gold to copper-red under strong light. It makes a warm-coloured accent group in the midground or background. It needs strong light, a good iron supply and a nutrient-rich substrate, and prefers soft, slightly acidic water.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/ammannia-senegalensis-6228802058607.jpg",
              "caption": "Submerged stem in a planted aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/ammannia-senegalensis"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/growing-garden-561a540e1533a.jpg",
              "caption": "Aquascape: Growing Garden (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/growing-garden"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/pterophyllum-hugel-5349866c1f601.jpg",
              "caption": "Aquascape: Pterophyllum Hügel (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/pterophyllum-hugel"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0608/5771/2849/files/ammannia-senegalensis-tissue-culture-1232143.png?v=1787231947",
              "caption": "Tissue-culture cup",
              "credit": "nanotanksaustralia.com.au",
              "creditUrl": "https://nanotanksaustralia.com.au/products/tissue-culture-ammannia-senegalensis"
            }
          ],
          "offers": [
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/tissue-culture-ammannia-senegalensis",
              "unit": "tissue culture cup",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/tissue-culture-ammannia-senegalensis"
            }
          ]
        },
        {
          "id": 164,
          "name": "Lindernia rotundifolia",
          "scientific": "Lindernia rotundifolia",
          "difficulty": "Easy",
          "about": "Stem plant with small, round, light green leaves set closely along the stems. It forms compact groups quickly and works well in the midground or as a low background. It is undemanding, growing in low to medium light without CO2, and is kept tidy by pruning and replanting the tops.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "15 to 30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/045/5.png&crop=resize&class=product",
              "caption": "Submerged group beside driftwood",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Linderniarotundifolia(045)/4468"
            },
            {
              "src": "https://roxyaquarium.com.au/app/uploads/2026/01/fish-30.webp",
              "caption": "Submerged stems in an aquarium",
              "credit": "roxyaquarium.com.au",
              "creditUrl": "https://roxyaquarium.com.au/product/lindernia-rotundifolia-live-aquarium-plant/"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?width=1200&image=/Layouts/L003/main.jpg&crop=resize&class=product",
              "caption": "Tropica layout that uses this plant",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/inspiration/layout/Layout3/4384"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/045/2.png&crop=resize&class=product",
              "caption": "Tropica product photo (potted).",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Linderniarotundifolia(045)/4468"
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/lindernia-rotundifolia",
              "unit": "bunch",
              "price": 1195,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/lindernia-rotundifolia-live-aquarium-plant/",
              "unit": "bunch",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/lindernia-rotundifolia",
              "unit": "bunch",
              "price": 500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/stem-plants/462-lindernia-rotundifolia-variegated.html",
              "unit": "bunch",
              "price": 990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/lindernia-rotundifolia"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/lindernia-rotundifolia-live-aquarium-plant/"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/lindernia-rotundifolia"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/stem-plants/462-lindernia-rotundifolia-variegated.html"
            }
          ]
        },
        {
          "id": 165,
          "name": "Tonina fluviatilis",
          "scientific": "Tonina fluviatilis",
          "difficulty": "Demanding",
          "about": "Upright stem plant with narrow, pointed, fresh green leaves packed densely around the stem, so it looks star-like from above. It needs soft, acidic water with low KH, strong light and steady CO2. It is easily outgrown by faster neighbours and may rot if conditions are unstable.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "10 to 30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/tonina-fluviatilis-4f7a02412447d.jpg",
              "caption": "Submerged stand of stems (Flowgrow plant database)",
              "credit": "flowgrow.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/tonina-fluviatilis"
            },
            {
              "src": "https://www.tfhmagazine.com/-/media/Project/OneWeb/TFH/US/articles/079_tonina_fluviatilis.jpg",
              "caption": "Submerged stems in a planted aquarium",
              "credit": "tfhmagazine.com",
              "creditUrl": "https://www.tfhmagazine.com/articles/aquatic-plants/tonina-fluviatilis"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/old-amsterdam-691338c101c1a.jpg",
              "caption": "Aquascape: old amsterdam (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/old-amsterdam"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/tonina-fluviatilis-tissue-culture-34062602109128.jpg?v=1678725231",
              "caption": "Tissue-culture cup",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/tonina-fluviatilis-tissue-culture"
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/tonina-fluviatilis-5cm-pot",
              "unit": "5cm pot",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nature Aquariums",
              "url": "https://natureaquariums.com.au/products/tonina-fluvitilis",
              "unit": "per plant",
              "price": 2495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/tonina-fluviatilis-5cm-pot"
            },
            {
              "label": "Nature Aquariums: product page",
              "url": "https://natureaquariums.com.au/products/tonina-fluvitilis"
            }
          ]
        },
        {
          "id": 172,
          "name": "Cuphea anagalloidea",
          "scientific": "Cuphea anagalloidea",
          "difficulty": "Demanding",
          "about": "A small stem plant with fine leaves, the shoots only about 1.5 to 2 cm across, that turn strong red under high light, often with green flecks. It suits small accent groups in the midground. It is a delicate plant that needs high light, CO2, a good nutrient supply and soft, slightly acidic water.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cuphea-anagalloidea-513e3f98ce4eb.jpg",
              "caption": "Submerged, red-tinted stems (Flowgrow plant database)",
              "credit": "flowgrow.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cuphea-anagalloidea"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cuphea-anagalloidea-513de763dee2b.jpg",
              "caption": "Submerged shoot tips (Flowgrow plant database)",
              "credit": "flowgrow.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cuphea-anagalloidea"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0802/8835/0528/files/Cuphea_anagalloidea_submersed.jpg?v=1724708748",
              "caption": "Submerged group in an aquascape",
              "credit": "Liverpool Creek Aquariums",
              "creditUrl": "https://www.liverpoolcreekaquariums.com.au/products/cuphea-anagalloidea"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cuphea-anagalloidea-4f7a0321ad2e0.jpg",
              "caption": "Single stem on a black background (Flowgrow plant database)",
              "credit": "flowgrow.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cuphea-anagalloidea"
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/cuphea-anagalloidea",
              "unit": "pot",
              "price": 1995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/cuphea-anagalloidea"
            }
          ]
        },
        {
          "id": 175,
          "name": "Eriocaulon 'Vietnam'",
          "scientific": "Eriocaulon sp. 'Vietnam'",
          "difficulty": "Moderate",
          "about": "Rosette plant with bright green, needle-like leaves that form a pincushion-like clump. Over time it splits at the base into a dense tuft that can be divided. It is one of the easier Eriocaulon, but still does best with good light, CO2, a rich aquasoil and soft, slightly acidic water.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "5 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/eriocaulon-sp-vietnam-1640342880296.jpg?v=1667423207",
              "caption": "Planted in an aquascape",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/eriocaulon-sp-vietnam"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0802/8835/0528/files/eriocaulonvietnam.webp?v=1778702604",
              "caption": "Submerged clump in an aquarium",
              "credit": "Liverpool Creek Aquariums",
              "creditUrl": "https://www.liverpoolcreekaquariums.com.au/products/eriocaulon-vietnam"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/1-2-grow-limited-edition-eriocaulon-vietnam-2_grande_5fe41b94-01ff-4b8e-a7a1-8919f248f610.webp?v=1781629791",
              "caption": "Submerged growth",
              "credit": "School of Scape",
              "creditUrl": "https://schoolofscape.com.au/products/eriocaulon-vietnam-premium-aquarium-plant"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/EriocaulonSp.Vietnam-4.jpg?v=1667423376",
              "caption": "Potted plant from above",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/eriocaulon-sp-vietnam"
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/eriocaulon-vietnam",
              "unit": "pot",
              "price": 2995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/products/eriocaulon-vietnam-premium-aquarium-plant",
              "unit": "portion",
              "price": 2500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/eriocaulon-vietnam"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/products/eriocaulon-vietnam-premium-aquarium-plant"
            }
          ]
        },
        {
          "id": 176,
          "name": "Eriocaulon breviscapum",
          "scientific": "Eriocaulon breviscapum",
          "difficulty": "Demanding",
          "about": "Very narrow, flexible leaves about 1 mm wide, set in a spiral, build a fine, feathery rosette that grows much taller under water than when emersed. Daughter rosettes form at the base. Use it as a soft specimen among low plants. It wants soft water, a rich aqua soil, strong light and CO2 reaching the substrate.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "10 to 25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0802/8835/0528/files/eriocaulonbreviscapum.jpg?v=1694572483",
              "caption": "Submerged rosette in an aquarium",
              "credit": "Liverpool Creek Aquariums",
              "creditUrl": "https://www.liverpoolcreekaquariums.com.au/products/eriocaulon-breviscapum"
            },
            {
              "src": "https://cdn11.bigcommerce.com/s-m39bqdjce8/images/stencil/1280x1280/products/7183/11606/Eriocaulon.feather.duster__45213.1781555882.jpg",
              "caption": "Submerged plants",
              "credit": "fitzfishponds.com",
              "creditUrl": "https://fitzfishponds.com/eriocaulon-breviscapum-feather-duster/"
            },
            {
              "src": "https://mcmerwe.co.za/wp-content/uploads/2021/09/ADA-Eriocaulon-breviscapum.jpg",
              "caption": "Single plant on a white background",
              "credit": "mcmerwe.co.za",
              "creditUrl": "https://mcmerwe.co.za/shop/ada-eriocaulon-breviscapum"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0266/5843/9225/files/ada-feather-duster.jpg?v=1752748783",
              "caption": "Tissue-culture pouch",
              "credit": "horizonaquatics.co.uk",
              "creditUrl": "https://www.horizonaquatics.co.uk/products/ada-eriocaulon-breviscapum"
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/eriocaulon-breviscapum",
              "unit": "pot",
              "price": 2995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/eriocaulon-breviscapum"
            }
          ]
        },
        {
          "id": 177,
          "name": "Eriocaulon 'Ratnagiri'",
          "scientific": "Eriocaulon sp. 'Ratnagiri'",
          "difficulty": "Demanding",
          "about": "One of the smallest Eriocaulon, forming a tight rosette of thin, needle-like leaves only a few centimetres tall. It is a heavy root feeder that grows best in a deep, rich aquasoil with low KH, plenty of light and good flow at the substrate. Flower stalks should be removed, and large rosettes can be split in two.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "5 to 8 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/files/Screenshot_2024-06-02_at_10.15.13_pm.png?v=1717330636&width=1200",
              "caption": "Group of rosettes in an aquascape",
              "credit": "aquafy.com.au",
              "creditUrl": "https://aquafy.com.au/products/eriocaulon-ratnagiricum"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/files/Screenshot_2024-06-02_at_10.15.17_pm.png?v=1717330636&width=1200",
              "caption": "Submerged rosettes in the foreground",
              "credit": "aquafy.com.au",
              "creditUrl": "https://aquafy.com.au/products/eriocaulon-ratnagiricum"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0375/7557/products/EriocaulonRatnagiri.jpg?v=1604627524",
              "caption": "Submerged rosette from above",
              "credit": "Nature Aquariums",
              "creditUrl": "https://natureaquariums.com.au/products/eriocaulon-ratnagiri"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/files/Screenshot_2024-06-05_at_10.22.44_am.png?v=1717547011&width=1200",
              "caption": "Two plants held in the hand",
              "credit": "aquafy.com.au",
              "creditUrl": "https://aquafy.com.au/products/eriocaulon-ratnagiricum"
            }
          ],
          "offers": [
            {
              "shop": "Nature Aquariums",
              "url": "https://natureaquariums.com.au/products/eriocaulon-ratnagiri",
              "unit": "1 plant",
              "price": 4995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Nature Aquariums: product page",
              "url": "https://natureaquariums.com.au/products/eriocaulon-ratnagiri"
            }
          ]
        },
        {
          "id": 178,
          "name": "Blyxa aubertii",
          "scientific": "Blyxa aubertii",
          "difficulty": "Moderate",
          "about": "Rosette plant with long, narrow, soft green leaves that can take on red-brown tints in strong light. It gives a grassy, loose texture in the midground or behind lower plants. It needs medium to high light, CO2 and regular fertilising, and tends to stay smaller under strong light; in poor light it stalls and rots.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "15 to 30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/blyxa-aubertii-4f7a014c1ed94.jpg",
              "caption": "Submerged clump in an aquarium (Flowgrow plant database)",
              "credit": "flowgrow.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/blyxa-aubertii"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/blyxa-aubertii-53d9e751e4093.jpg",
              "caption": "Submerged in an aquascape (Flowgrow plant database)",
              "credit": "flowgrow.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/blyxa-aubertii"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0802/8835/0528/products/s825395814821053_p183_i1_w310.png?v=1694422559",
              "caption": "Submerged in an aquarium",
              "credit": "Liverpool Creek Aquariums",
              "creditUrl": "https://www.liverpoolcreekaquariums.com.au/products/blyxa-aubertii"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/blyxa-aubertii-53d9e77e5fc05.jpg",
              "caption": "Whole plant out of the water (Flowgrow plant database)",
              "credit": "flowgrow.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/blyxa-aubertii"
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/blyxa-aubertii",
              "unit": "portion",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/blyxa-aubertii"
            }
          ]
        },
        {
          "id": 182,
          "name": "Juncus repens",
          "scientific": "Juncus repens",
          "difficulty": "Easy",
          "about": "Creeping rush with thin, needle-like leaves that grow in bushy tufts along spreading stems. Under strong light the tips turn golden-orange to reddish brown. It gives a grassy texture in the midground and adapts to a wide range of water, though CO2 gives denser, faster growth.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/juncus-repens-4f7a01430844b.jpg",
              "caption": "Submerged, fine curving leaves (Flowgrow plant database)",
              "credit": "flowgrow.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/juncus-repens"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/juncus-repens-513e0841e99cd.jpg",
              "caption": "Submerged in an aquascape (Flowgrow plant database)",
              "credit": "flowgrow.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/juncus-repens"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/juncus-repens-4f7a0143727c6.jpg",
              "caption": "Submerged beside a rock (Flowgrow plant database)",
              "credit": "flowgrow.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/juncus-repens"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0643/3239/8819/files/Photoroom_20260722_184051.jpg?v=1786809776",
              "caption": "Tissue-culture cup",
              "credit": "Aquatic Plants Australia",
              "creditUrl": "https://www.aquaticplantsaustralia.com.au/products/tissue-culture-cup-juncus-repens"
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/tissue-culture/products/tissue-culture-cup-juncus-repens",
              "unit": "tissue culture cup",
              "price": 2400,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarium Gallery",
              "url": "https://www.aquariumgallery.com.au/products/tc-juncus-repens",
              "unit": "TC cup",
              "price": 2595,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/tissue-culture/products/tissue-culture-cup-juncus-repens"
            },
            {
              "label": "Aquarium Gallery: product page",
              "url": "https://www.aquariumgallery.com.au/products/tc-juncus-repens"
            }
          ]
        },
        {
          "id": 184,
          "name": "Bacopa 'Japan'",
          "scientific": "Bacopa sp. 'Japan'",
          "difficulty": "Moderate",
          "about": "Small Bacopa, usually identified as Bacopa serpyllifolia, with tiny rounded, lime green leaves. Unlike most Bacopa it grows mostly sideways at first, forming low clumps in the midground before slowly gaining height. It needs strong light, CO2 and plenty of iron, and new plants can take a while to settle in.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "5 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/bacopa-serpyllifolia-521af72ec903f.jpg",
              "caption": "Submerged stand (Flowgrow plant database)",
              "credit": "flowgrow.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/bacopa-serpyllifolia"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/bacopa-serpyllifolia-521af7390e707.jpg",
              "caption": "Submerged stems, close-up (Flowgrow plant database)",
              "credit": "flowgrow.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/bacopa-serpyllifolia"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/der-wurfel-51ed2a6eb127e.jpg",
              "caption": "Aquascape: der Würfel (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/der-wurfel"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0643/3239/8819/files/Bacopa_Japan.jpg?v=1768288279",
              "caption": "Submersed-grown bunch on a white background",
              "credit": "Aquatic Plants Australia",
              "creditUrl": "https://www.aquaticplantsaustralia.com.au/products/bacopa-serpyllifolia-submersed-bunch-bacopa-japan-s064"
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/bacopa-serpyllifolia-japan-live-aquarium-plant/",
              "unit": "bunch",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/bacopa-serpyllifolia-japan-live-aquarium-plant/"
            }
          ]
        },
        {
          "id": 185,
          "name": "Sagittaria natans",
          "scientific": "Sagittaria natans",
          "difficulty": "Easy",
          "about": "Grass-like rosette plant with narrow, bright green strap leaves a few millimetres wide, spreading by runners into a dense lawn for the midground. Height depends on light and density: strong light keeps it short, while crowded or dim plantings grow taller. It is a root feeder that needs iron.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn11.bigcommerce.com/s-os7lxdwh/images/stencil/original/products/38/300/saggitaria-natans-tank__04035.1415798658.jpg?c=2",
              "caption": "Submerged leaves in an aquarium",
              "credit": "Z-Aquatics",
              "creditUrl": "https://www.z-aquatics.com.au/sagittaria-natans/"
            },
            {
              "src": "https://cdn11.bigcommerce.com/s-os7lxdwh/images/stencil/original/products/38/301/sagittaria-natans__05425.1415798659.jpg?c=2",
              "caption": "Single plant submerged",
              "credit": "Z-Aquatics",
              "creditUrl": "https://www.z-aquatics.com.au/sagittaria-natans/"
            },
            {
              "src": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Sagittaria_natans_33663186.png",
              "caption": "Growing in shallow water in the wild, with floating leaves and flowers",
              "credit": "Wikimedia Commons (iNaturalist)",
              "creditUrl": "https://commons.wikimedia.org/wiki/File:Sagittaria_natans_33663186.png"
            },
            {
              "src": "https://www.bestaquariumfish.com/wp-content/uploads/sagittaria-natans-1749210367.jpg",
              "caption": "Potted plant on a white background",
              "credit": "bestaquariumfish.com",
              "creditUrl": "https://www.bestaquariumfish.com/product/sagittaria-natans/"
            }
          ],
          "offers": [
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/sagittaria-natans/",
              "unit": "plant",
              "price": 800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/sagittaria-natans/"
            }
          ]
        },
        {
          "id": 187,
          "name": "Staurogyne 'Porto Velho'",
          "scientific": "Staurogyne sp. 'Porto Velho'",
          "difficulty": "Easy",
          "about": "Compact Staurogyne with narrow, lanceolate leaves ending in a long point, greyish green with a slight purple hue. It creeps low and branches into a dense bush, used in the foreground or low midground. Stronger light keeps it compact; CO2 and a good nutrient supply speed up growth.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/staurogyne-sp-porto-velho-52f3584aa62ef.jpg",
              "caption": "Submerged cushion in the foreground (Flowgrow plant database)",
              "credit": "flowgrow.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/staurogyne-sp-porto-velho"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/staurogyne-sp-porto-velho-4f7a02796278b.jpg",
              "caption": "Submerged group on the substrate (Flowgrow plant database)",
              "credit": "flowgrow.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/staurogyne-sp-porto-velho"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/staurogyne-sp-porto-velho-4f7a027acf147.jpg",
              "caption": "Submerged plant beside a rock (Flowgrow plant database)",
              "credit": "flowgrow.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/staurogyne-sp-porto-velho"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/e94f17b0-7671-4e5d-bd00-a56093deded2.png?v=1784012832&width=1200",
              "caption": "Potted plant on a white background",
              "credit": "School of Scape",
              "creditUrl": "https://schoolofscape.com.au/products/staurogyne-porto-velho"
            }
          ],
          "offers": [
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/staurogyne-sp-porto-velho/",
              "unit": "portion",
              "price": 900,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/products/staurogyne-porto-velho",
              "unit": "portion",
              "price": 1800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/staurogyne-sp-porto-velho/"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/products/staurogyne-porto-velho"
            }
          ]
        },
        {
          "id": 207,
          "name": "Cryptocoryne beckettii",
          "scientific": "Cryptocoryne beckettii",
          "difficulty": "Easy",
          "about": "Classic crypt with lanceolate, olive green to brown leaves with wavy edges and reddish undersides. It forms compact clumps in the midground and spreads slowly by runners. It is a root feeder that benefits from root tabs, and leaves may melt after planting or moving before new growth appears.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cryptocoryne-beckettii-4f7a015d9f6a2.jpg",
              "caption": "Submerged in an aquarium",
              "credit": "Flowgrow aquatic plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cryptocoryne-beckettii"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/amazonas-54a02fb005765.jpg",
              "caption": "Aquascape: Amazonas (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/amazonas"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/green-planet-58e6358c90599.jpg",
              "caption": "Aquascape: Green Planet (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/green-planet"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/cryptocoryne-beckettii-1168007564.jpg?v=1747699838",
              "caption": "Potted plant on white",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/cryptocoryne-becketii"
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/tissue-culture/products/tissue-culture-cryptocoryne-beckettii",
              "unit": "tissue culture cup",
              "price": 2400,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/cryptocoryne-beckettii-petchii",
              "unit": "pot (Petchii)",
              "price": 1295,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/cryptocoryne-beckettii-tissue-culture",
              "unit": "tissue culture cup",
              "price": 1695,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/cryptocoryne-beckettii/",
              "unit": "plant",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarium Gallery",
              "url": "https://www.aquariumgallery.com.au/products/tc-cryptocoryne-beckettii",
              "unit": "TC cup",
              "price": 2495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 3,
          "sources": [
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/tissue-culture/products/tissue-culture-cryptocoryne-beckettii"
            },
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/cryptocoryne-beckettii-petchii"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/cryptocoryne-beckettii-tissue-culture"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/cryptocoryne-beckettii/"
            },
            {
              "label": "Aquarium Gallery: product page",
              "url": "https://www.aquariumgallery.com.au/products/tc-cryptocoryne-beckettii"
            }
          ]
        },
        {
          "id": 208,
          "name": "Crypt 'Lutea'",
          "scientific": "Cryptocoryne x willisii 'Lutea'",
          "difficulty": "Easy",
          "about": "Easy crypt with narrow, pointed, light to yellowish green leaves on long stalks, sometimes with wavy margins. It forms tidy clumps in the midground and spreads slowly by runners. It grows in low light, feeds from the roots so benefits from root tabs, and may melt back if moved or after big water changes.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/cryptocoryne-lutea-33643531010248.jpg?v=1747693590&width=1200",
              "caption": "Submerged in a planted aquarium",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/cryptocoryne-lutea"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/fire-in-the-corner-55da35723c40f.jpg",
              "caption": "Aquascape: Fire in the corner (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/fire-in-the-corner"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/wildscape-55ef6a1bcd698.jpg",
              "caption": "Aquascape: Wildscape (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/wildscape"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/cryptocoryne-lutea-1168007582.jpg?v=1747700549",
              "caption": "Potted plant on white",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/cryptocoryne-lutea"
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/crypt-lutea-5cm-pot",
              "unit": "5cm pot",
              "price": 1695,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/crypt-lutea-5cm-pot"
            }
          ]
        },
        {
          "id": 209,
          "name": "Crypt undulata 'Red'",
          "scientific": "Cryptocoryne undulata 'Red'",
          "difficulty": "Easy",
          "about": "Narrow, lance-shaped leaves with wavy edges that grow tall and greenish-brown in low light, or shorter and reddish-brown with more light, nutrients and CO2. It forms a rosette that spreads by runners and suits the midground. It feeds mainly through its roots, so root tabs help, and it may melt back after planting.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "15 to 30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/110A/4.JPG&crop=resize&class=product",
              "caption": "Submerged in an aquascape (Tropica sells it as C. undulata 'Broad Leaf', formerly 'Red')",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Cryptocoryneundulata%27BroadLeaf%27(110A)/4566"
            },
            {
              "src": "https://www.garnelio.de/media/image/75/9b/c9/Cryptocoryne-undulatusvsUuDPRUCyZu6_1280x1280.png",
              "caption": "Submerged in an aquascape",
              "credit": "garnelio.de",
              "creditUrl": "https://www.garnelio.de/en/1-2-grow-cryptocoryne-undulatus-red"
            },
            {
              "src": "https://www.garnelio.de/media/image/21/41/85/crypto383rCEHsRzmY86il_1280x1280.jpg",
              "caption": "Submerged, red-leaved specimen",
              "credit": "garnelio.de",
              "creditUrl": "https://www.garnelio.de/en/1-2-grow-cryptocoryne-undulatus-red"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/110A/2.png&crop=resize&class=product",
              "caption": "Tropica product photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Cryptocoryneundulata%27BroadLeaf%27(110A)/4566"
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/crypt-undulatus-red-5cm-pot",
              "unit": "5cm pot",
              "price": 1696,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/crypt-undulatus-red-5cm-pot"
            }
          ]
        },
        {
          "id": 211,
          "name": "Cryptocoryne axelrodi",
          "scientific": "Cryptocoryne axelrodi",
          "difficulty": "Easy",
          "about": "Narrow, elongated leaves with crinkled, wavy edges in green to dark brown, often with a marbled pattern and reddish tones under stronger light. It forms upright rosettes that fill in slowly by runners in the midground. Give it a nutrient-rich substrate and avoid moving it, as sudden changes trigger crypt melt.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "15 to 25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/cryptocoryne-axelrodi-1260012453.jpg?v=1790366917",
              "caption": "Submerged in an aquascape",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/cryptocoryne-axelrodii"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/cryptocoryne-axelrodi-1260012454.jpg?v=1790366950",
              "caption": "Plant lifted from the aquarium",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/cryptocoryne-axelrodii"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/cryptocoryne-axelrodi-1168007573.jpg?v=1747700084",
              "caption": "Potted plant on white",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/cryptocoryne-axelrodii"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/cryptocoryne-axelrodi-tissue-culture-15512140021841.jpg?v=1753291994&width=1200",
              "caption": "Tissue-culture cup",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/cryptocoryne-axelrodi-tissue-culture"
            }
          ],
          "offers": [
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/cryptocoryne-axelrodi-tissue-culture",
              "unit": "tissue culture cup",
              "price": 1895,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/cryptocoryne-axelrodi-tissue-culture"
            }
          ]
        },
        {
          "id": 212,
          "name": "Crypt wendtii 'Flamingo'",
          "scientific": "Cryptocoryne wendtii 'Flamingo'",
          "difficulty": "Moderate",
          "about": "A pink-leaved form of C. wendtii with soft, slightly wavy leaves in a compact rosette, used as a colour accent in the fore or midground. The pink is strongest under brighter light and fades towards bronze in dim tanks. It is slower and touchier than green wendtii and dislikes being moved.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cryptocoryne-wendtii-flamingo-4f7a040368750.jpg",
              "caption": "Submerged in an aquascape",
              "credit": "Flowgrow aquatic plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cryptocoryne-wendtii-flamingo"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cryptocoryne-wendtii-flamingo-4f7a04045fd36.jpg",
              "caption": "Submerged, young plants",
              "credit": "Flowgrow aquatic plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cryptocoryne-wendtii-flamingo"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cryptocoryne-wendtii-flamingo-56a63783a11f2.jpg",
              "caption": "Mature plant submerged in an aquascape",
              "credit": "Flowgrow aquatic plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cryptocoryne-wendtii-flamingo"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/cryptocoryne-pink-flamingo-35268831183048.jpg?v=1712074517",
              "caption": "Potted plant on white",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/cryptocoryne-pink-flamingo"
            }
          ],
          "offers": [
            {
              "shop": "Tankquility",
              "url": "https://tankquility.com.au/products/cryptocoryne-wendtii-flamingo",
              "unit": "portion (from price)",
              "price": 2995,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Tankquility: product page",
              "url": "https://tankquility.com.au/products/cryptocoryne-wendtii-flamingo"
            }
          ]
        },
        {
          "id": 213,
          "name": "Crypt crispatula var. albida 'Brown'",
          "scientific": "Cryptocoryne crispatula var. albida",
          "difficulty": "Easy",
          "about": "Narrow, red-brown leaves with dark striped markings and wavy edges, growing in slow, compact clumps that spread by runners. It works as a fine-textured accent in the foreground or midground. It copes with soft to hard water and low light, and grows best in a nutrient-rich substrate or with root tabs.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "5 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/126B/4.png&crop=resize&class=product",
              "caption": "Submerged in an aquascape",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Cryptocorynealbida%27Brown%27(126B)/18194"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/126B/5.png&crop=resize&class=product",
              "caption": "Submerged, close-up",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Cryptocorynealbida%27Brown%27(126B)/18194"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cryptocoryne-albida-4f7a015cece35.jpg",
              "caption": "Submerged in an aquarium",
              "credit": "Flowgrow aquatic plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cryptocoryne-albida"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/126B/2.png&crop=resize&class=product",
              "caption": "Tropica product photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Cryptocorynealbida%27Brown%27(126B)/18194"
            }
          ],
          "offers": [
            {
              "shop": "Tankquility",
              "url": "https://tankquility.com.au/products/cryptocoryne-crispatula-var-albida-brown",
              "unit": "plant (from)",
              "price": 3995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Tankquility: product page",
              "url": "https://tankquility.com.au/products/cryptocoryne-crispatula-var-albida-brown"
            }
          ]
        },
        {
          "id": 223,
          "name": "Echinodorus bolivianus",
          "scientific": "Echinodorus bolivianus (Helanthium bolivianum)",
          "difficulty": "Easy",
          "about": "A small chain sword with narrow, grass-like bright green leaves that spreads by runners into a low lawn or loose group. It suits the foreground or the front of the midground. It stays compact under medium light and stretches taller in dim tanks; root tabs help it spread, and runners can be replanted to fill gaps.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 15 cm"
            ]
          ],
          "saNote": "The Tech Den ships only tissue cultures. Its other live plants are pickup only.",
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0325/1250/7948/products/TrueAquaticEchinodorusbolivianus_Rusby_Holm-NielsLivePlant-TissueCulture.jpg?v=1676258086&width=1200",
              "caption": "Submerged in an aquarium",
              "credit": "The Tech Den",
              "creditUrl": "https://www.thetechden.com.au/products/true-aquatic-echinodorus-bolivianus-rusby-holm-niels-live-plant-tissue-culture"
            },
            {
              "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Helanthium_bolivianum_kz03.jpg/1280px-Helanthium_bolivianum_kz03.jpg",
              "caption": "Submerged in a botanic garden aquarium",
              "credit": "Krzysztof Ziarnek, Kenraiz (Wikimedia Commons, CC BY-SA 4.0)",
              "creditUrl": "https://commons.wikimedia.org/wiki/File:Helanthium_bolivianum_kz03.jpg"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/childhood-dream-52f611043c31d.jpg",
              "caption": "Aquascape: Childhood dream (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/childhood-dream"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0325/1250/7948/products/TrueAquaticEchinodorusbolivianus_Rusby_Holm-NielsLivePlant-TissueCultureContainer.jpg?v=1676258087&width=1200",
              "caption": "Tissue-culture cup",
              "credit": "The Tech Den",
              "creditUrl": "https://www.thetechden.com.au/products/true-aquatic-echinodorus-bolivianus-rusby-holm-niels-live-plant-tissue-culture"
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/echinodorus-bolivianus-tissue-culture/",
              "unit": "TC cup",
              "price": 1695,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "The Tech Den",
              "url": "https://www.thetechden.com.au/collections/tissue-culture-plants/products/true-aquatic-echinodorus-bolivianus-rusby-holm-niels-live-plant-tissue-culture",
              "unit": "tissue culture cup",
              "price": 1595,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarium Gallery",
              "url": "https://www.aquariumgallery.com.au/products/tc-echinodorus-bolivianus-rusby",
              "unit": "TC cup",
              "price": 1895,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/echinodorus-bolivianus-tissue-culture/"
            },
            {
              "label": "The Tech Den: product page",
              "url": "https://www.thetechden.com.au/collections/tissue-culture-plants/products/true-aquatic-echinodorus-bolivianus-rusby-holm-niels-live-plant-tissue-culture"
            },
            {
              "label": "Aquarium Gallery: product page",
              "url": "https://www.aquariumgallery.com.au/products/tc-echinodorus-bolivianus-rusby"
            }
          ]
        },
        {
          "id": 225,
          "name": "Chain Sword, broad (Echinodorus latifolius)",
          "scientific": "Echinodorus latifolius",
          "difficulty": "Easy",
          "about": "A medium-sized chain sword with slightly broader, bright green leaves than the narrow types, forming rosettes that spread by many runners. It can make a lawn in the foreground or a group in the midground. Brighter light keeps it compact, while low light makes it leggy, and root tabs help it spread.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/068/4.png&crop=resize&class=product",
              "caption": "Submerged in an aquascape (Tropica: Helanthium bolivianum 'Quadricostatus')",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Helanthiumbolivianum%27Quadricostatus%27(068)/4511"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/068/5.png&crop=resize&class=product",
              "caption": "Submerged in an aquascape",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Helanthiumbolivianum%27Quadricostatus%27(068)/4511"
            },
            {
              "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Echinodorus_quadricostatus.jpg/1280px-Echinodorus_quadricostatus.jpg",
              "caption": "Submerged in an aquarium (as Echinodorus quadricostatus)",
              "credit": "Haplochromis (Wikimedia Commons)",
              "creditUrl": "https://commons.wikimedia.org/wiki/File:Echinodorus_quadricostatus.jpg"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0568/4264/9794/products/image_df77eee4-1863-4498-91b6-50baef241a49.webp?v=1777290519",
              "caption": "Single plant on white",
              "credit": "Duthie Aquatics",
              "creditUrl": "https://duthieaquatics.com.au/products/echinodorus-latifolius-tall-chain-sword"
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/chain-sword-broad-live-aquarium-plant/",
              "unit": "pot",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Duthie Aquatics",
              "url": "https://duthieaquatics.com.au/products/echinodorus-latifolius-tall-chain-sword",
              "unit": "pot",
              "price": 999,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/products/echin-latifolius-10-15cm",
              "unit": "10-15cm plant",
              "price": 995,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/chain-sword-broad-live-aquarium-plant/"
            },
            {
              "label": "Duthie Aquatics: product page",
              "url": "https://duthieaquatics.com.au/products/echinodorus-latifolius-tall-chain-sword"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/products/echin-latifolius-10-15cm"
            }
          ]
        },
        {
          "id": 228,
          "name": "Cryptocoryne beckettii 'Petchii' (Dragons Flame)",
          "scientific": "Cryptocoryne beckettii 'Petchii'",
          "difficulty": "Easy",
          "about": "A small Sri Lankan crypt with narrow leaves that have slightly fluted edges, dark olive-brown on top and violet underneath. It forms full clumps by suckers in the midground or around wood and stone. It copes with low light, and a little more light, CO2 and root feeding make it grow faster and fuller.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/108A/4.png&crop=resize&class=product",
              "caption": "Submerged in an aquascape",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Cryptocorynebeckettii%27Petchii%27(108A)/4560"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cryptocoryne-beckettii-petchii-51da5e0a3b804.jpg",
              "caption": "Submerged in an aquarium",
              "credit": "Flowgrow aquatic plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cryptocoryne-beckettii-petchii"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/108A/5.JPG&crop=resize&class=product",
              "caption": "Submerged, another angle",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Cryptocorynebeckettii%27Petchii%27(108A)/4560"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/108A/2.png&crop=resize&class=product",
              "caption": "Tropica product photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Cryptocorynebeckettii%27Petchii%27(108A)/4560"
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/dragons-flame-live-aquarium-plant/",
              "unit": "pot",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Scapeshop",
              "url": "https://scapeshop.com.au/products/cryptocoryne-petchii-5cm-pot",
              "unit": "5cm pot",
              "price": 1900,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/dragons-flame-live-aquarium-plant/"
            },
            {
              "label": "Scapeshop: product page",
              "url": "https://scapeshop.com.au/products/cryptocoryne-petchii-5cm-pot"
            }
          ]
        },
        {
          "id": 232,
          "name": "Didiplis diandra (Water Hedge)",
          "scientific": "Didiplis diandra",
          "difficulty": "Moderate",
          "about": "Fine, needle-like light green leaves on slender upright stems that form a soft, bushy hedge, with tips turning orange to red under strong light. It works in the midground or as a fine-textured group. It needs good light and stable nutrients, or lower stems lose leaves, and it does best with CO2 and soft water.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/didiplis-diandra-4f7a016eaba68.jpg",
              "caption": "Submerged group in an aquascape",
              "credit": "Flowgrow aquatic plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/didiplis-diandra"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/aquatic-plant-didiplis-diandra-23590304141.jpg?v=1613044606",
              "caption": "Submerged, top view of stems",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/didiplis-diandra"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/didiplis-diandra-4f7a016fdeca6.jpg",
              "caption": "Red-tipped group in an aquascape",
              "credit": "Flowgrow aquatic plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/didiplis-diandra"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/didiplis-diandra-11720085307473.jpg?v=1613044605",
              "caption": "Bunch on white",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/didiplis-diandra"
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/didiplis-diandra-emersed-bunch",
              "unit": "bunch of 6-10 stems, emersed",
              "price": 895,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/didiplis-diandra",
              "unit": "each",
              "price": 1500,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/didiplis-diandra-emersed-bunch"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/didiplis-diandra"
            }
          ]
        },
        {
          "id": 233,
          "name": "Purple Bacopa (Bacopa salzmannii)",
          "scientific": "Bacopa salzmannii",
          "difficulty": "Moderate",
          "about": "Small, oval leaves set in pairs on upright stems, olive green turning purple to bronze under strong light. It suits groups in the midground or background. Regular trimming and replanting of tops keeps it bushy, and CO2 with iron and good light bring out the purple colour.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "15 to 30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/bacopa-salzmannii-52f33c11395e7.jpg",
              "caption": "Submerged group in a planted aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/bacopa-salzmannii"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/bacopa-salzmannii-52f33c0b6d73b.jpg",
              "caption": "Submerged shoot tip, close-up",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/bacopa-salzmannii"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0643/3239/8819/files/purplebacopa_10b944fc-f58a-4f8f-a4a7-876d258dee3f.jpg?v=1689830732&width=1200",
              "caption": "Submersed-grown stems",
              "credit": "Aquatic Plants Australia",
              "creditUrl": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/bacopa-salzmanni-submersed-bunch-purple-bacopa-1"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/bacopa-salzmannii-4f7a0313a8837.jpg",
              "caption": "Single shoot on a black background",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/bacopa-salzmannii"
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/bacopa-salzmanni-submersed-bunch-purple-bacopa-1",
              "unit": "pot of 8-12 stems, emersed",
              "price": 895,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/bacopa-salzmanii-purple",
              "unit": "3-5 stems",
              "price": 600,
              "was": 1000,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/bacopa-salzmanni-submersed-bunch-purple-bacopa-1"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/bacopa-salzmanii-purple"
            }
          ]
        },
        {
          "id": 246,
          "name": "Cryptocoryne wendtii 'Tropica'",
          "scientific": "Cryptocoryne wendtii 'Tropica'",
          "difficulty": "Easy",
          "about": "A compact crypt with dark, hammered leaves in brownish green that form a dense rosette. It is one of the hardiest crypts and suits the foreground or midground and the base of hardscape. It copes with low light but colours best with more, may melt back after planting, and slowly fills in by runners.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cryptocoryne-wendtii-tropica-4f7a016cc001b.jpg",
              "caption": "Submerged in a planted aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cryptocoryne-wendtii-tropica"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/109E/5.png&crop=resize&class=product",
              "caption": "Tropica photo: in an aquascape",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Cryptocorynewendtii%27Tropica%27(109E)/4564"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cryptocoryne-wendtii-tropica-513de6276e1fc.jpg",
              "caption": "Submerged, hammered leaves close-up",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cryptocoryne-wendtii-tropica"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/109E/2.png&crop=resize&class=product",
              "caption": "Tropica product photo: potted plant",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Cryptocorynewendtii%27Tropica%27(109E)/4564"
            }
          ],
          "offers": [
            {
              "shop": "Scapeshop",
              "url": "https://scapeshop.com.au/products/cryptocoryne-wendtii-tropica-5cm-pot",
              "unit": "5cm pot",
              "price": 1900,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Tankquility",
              "url": "https://tankquility.com.au/products/cryptocoryne-wendtii-tropica",
              "unit": "each",
              "price": 1495,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Scapeshop: product page",
              "url": "https://scapeshop.com.au/products/cryptocoryne-wendtii-tropica-5cm-pot"
            },
            {
              "label": "Tankquility: product page",
              "url": "https://tankquility.com.au/products/cryptocoryne-wendtii-tropica"
            }
          ]
        },
        {
          "id": 249,
          "name": "Cryptocoryne 'Mi Oya'",
          "scientific": "Cryptocoryne wendtii 'Mi Oya'",
          "difficulty": "Easy",
          "about": "A Sri Lankan form of C. wendtii with wavy-edged, hammered-textured leaves in reddish-bronze to olive green. It forms full rosettes in the midground and spreads slowly by runners. It copes with low light and no CO2, and benefits from root tabs and being left in place once planted.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cryptocoryne-wendtii-mi-oya-4f7a016b6b60a.jpg",
              "caption": "Submerged in a planted aquarium",
              "credit": "Tony Gomez via Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cryptocoryne-wendtii-mi-oya"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/cryptocoryne-wendtii-mi-oya-513de58c97980.jpg",
              "caption": "Submerged in an aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/cryptocoryne-wendtii-mi-oya"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0293/2506/6375/files/pisces-enterprises-5cm-pot-cryptocoryne-mi-oya-submerse-grown-5cm-pot-30897633591431.heic?v=1702760512&width=1200",
              "caption": "Submerse-grown plant in an aquarium",
              "credit": "Scapeshop",
              "creditUrl": "https://scapeshop.com.au/products/cryptocoryne-mi-oya-5cm-pot"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0491/5593/products/image_d4d3b3d3-a245-4483-b4df-7c16f7ef096d.jpg?v=1640935367&width=1200",
              "caption": "Tissue-culture cup",
              "credit": "Aquarium Gallery",
              "creditUrl": "https://www.aquariumgallery.com.au/products/tc-crytp-mioya"
            }
          ],
          "offers": [
            {
              "shop": "Scapeshop",
              "url": "https://scapeshop.com.au/products/cryptocoryne-mi-oya-5cm-pot",
              "unit": "5cm pot",
              "price": 2600,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarium Gallery",
              "url": "https://www.aquariumgallery.com.au/products/tc-crytp-mioya",
              "unit": "TC cup",
              "price": 2495,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Melbourne Tropical Fish",
              "url": "https://melbournetropicalfish.com.au/collections/aquarium-plants/products/cryptmioya",
              "unit": "each",
              "price": 1500,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Scapeshop: product page",
              "url": "https://scapeshop.com.au/products/cryptocoryne-mi-oya-5cm-pot"
            },
            {
              "label": "Aquarium Gallery: product page",
              "url": "https://www.aquariumgallery.com.au/products/tc-crytp-mioya"
            },
            {
              "label": "Melbourne Tropical Fish: product page",
              "url": "https://melbournetropicalfish.com.au/collections/aquarium-plants/products/cryptmioya"
            }
          ]
        },
        {
          "id": 251,
          "name": "Cryptocoryne nurii 'Rosen Maiden'",
          "scientific": "Cryptocoryne nurii var. raubensis 'Rosen Maiden'",
          "difficulty": "Moderate",
          "about": "A Malaysian crypt with ruffled bronze leaves marked by pink veins and spots, forming a flat, spreading rosette. It works as a colour accent in the foreground or midground. Colour and pattern are strongest with good light and nutrition, and it is slow to bulk up, so plant it where it can stay undisturbed.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1163/2672/files/IronMaidenCryptedited1.jpg?v=1728487273&width=1005",
              "caption": "Growing in an aquarium",
              "credit": "Aquatic Arts",
              "creditUrl": "https://aquaticarts.com/products/rosen-maiden-crypt-cryptocoryne-nurii-rosen-maiden"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1163/2672/files/IronMaidenCryptedited3.jpg?v=1728487274&width=1005",
              "caption": "Leaves close-up in an aquarium",
              "credit": "Aquatic Arts",
              "creditUrl": "https://aquaticarts.com/products/rosen-maiden-crypt-cryptocoryne-nurii-rosen-maiden"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1163/2672/files/IronMaidenCryptedited4.jpg?v=1728487273&width=1600",
              "caption": "Rosettes in an aquarium",
              "credit": "Aquatic Arts",
              "creditUrl": "https://aquaticarts.com/products/rosen-maiden-crypt-cryptocoryne-nurii-rosen-maiden"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0596/3474/5437/products/PE1_0600Cryptocorynenuriivar.raubensis_RosenMaiden_WM50.jpg?v=1678319157&width=1200",
              "caption": "Potted plant from above",
              "credit": "Peter Eggler via Tankquility",
              "creditUrl": "https://tankquility.com.au/products/cryptocoryne-nurii-var-raubensis-rosen-maiden"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/crypt/342-rare-crypt-nurii-rosen-maiden-quality-aquarium-grown-cryptocoryne.html",
              "unit": "approx 5 leaves",
              "price": 2900,
              "was": 3500,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/crypt/342-rare-crypt-nurii-rosen-maiden-quality-aquarium-grown-cryptocoryne.html"
            }
          ]
        },
        {
          "id": 259,
          "name": "Bacopa monnieri 'White'",
          "scientific": "Bacopa monnieri 'White'",
          "difficulty": "Demanding",
          "about": "A bacopa with small, rounded leaves that are almost pure creamy white, the green fading further under strong light. It is used as a bright accent in small groups. With little chlorophyll it grows very slowly and needs high light, CO2 and a clean, stable tank, as it is prone to algae and leaf loss.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "5 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/BacopaPlatinum.webp?v=1781512602&width=1200",
              "caption": "Submerged stems in an aquascape",
              "credit": "School of Scape",
              "creditUrl": "https://schoolofscape.com.au/collections/livestock-plants/products/rare-bacopa-monnieri-white"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/bacopa-monnieri-platinum-1192398110.jpg?v=1758656830&width=1200",
              "caption": "Submerged in an aquascape",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/bacopa-monnieri-platinum"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/bacopa-monnieri-platinum-1192479076.jpg?v=1758656830&width=1200",
              "caption": "Potted plant on white",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/bacopa-monnieri-platinum"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/bacopa-monnieri-platinum-uns-tissue-culture-1158939339.jpg?v=1745604627&width=1200",
              "caption": "Tissue-culture cup",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/bacopa-monnieri-platinum-uns-tissue-culture"
            }
          ],
          "offers": [
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/rare-bacopa-monnieri-white",
              "unit": "1 stem portion",
              "price": 9000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/rare-bacopa-monnieri-white"
            }
          ]
        },
        {
          "id": 260,
          "name": "Hygrophila sp. 'Chai'",
          "scientific": "Hygrophila sp. 'Chai'",
          "difficulty": "Demanding",
          "about": "A Hygrophila lancea form with slender, narrow leaves that are olive to red at the base with pale pink margins and tips. It suits small groups in the midground. It needs strong light, CO2 and regular iron dosing to keep its pink colour, and older leaves pick up algae easily, so a clean, stable tank matters.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/Hygrophila_sp_Chai_1000x_1dffe80c-de91-4e0b-a22f-6bd941a1b5ea.webp?v=1781645672&width=1000",
              "caption": "Submerged in an aquascape",
              "credit": "School of Scape",
              "creditUrl": "https://schoolofscape.com.au/collections/livestock-plants/products/hygrophila-sp-chai-submerged"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/2hrAquaristDSCF3662_1024x1024_bb8df55b-44ad-4df5-9794-485464b98a78.webp?v=1781645678&width=1024",
              "caption": "Foreground group in an aquascape",
              "credit": "2Hr Aquarist via School of Scape",
              "creditUrl": "https://schoolofscape.com.au/collections/livestock-plants/products/hygrophila-sp-chai-submerged"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/hygrophila-lancea-araguaia-sp-chai-1196477974.jpg?v=1773697086&width=1200",
              "caption": "Submerged in a planted aquarium",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/hygrophila-sp-chai-uns-tissue-culture"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/hygrophila-sp-chai-uns-tissue-culture-1227451256.jpg?v=1773705968&width=1200",
              "caption": "Tissue-culture cup",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/hygrophila-sp-chai-uns-tissue-culture"
            }
          ],
          "offers": [
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/hygrophila-sp-chai-submerged",
              "unit": "2 stems",
              "price": 10000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/hygrophila-sp-chai-submerged"
            }
          ]
        },
        {
          "id": 262,
          "name": "Hyptis laciniata",
          "scientific": "Hyptis laciniata",
          "difficulty": "Moderate",
          "about": "Bushy stem plant with deeply cut, feathery light green leaves whose tips turn light purple to pink under good light. It works in the foreground to midground as a fine-textured accent. It grows without CO2, but CO2 and good fertilising improve colour, and regular trimming keeps it dense.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "5 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/fffggggg.jpg?v=1720079941",
              "caption": "Submerged group in an aquascape",
              "credit": "School of Scape",
              "creditUrl": "https://schoolofscape.com.au/collections/livestock-plants/products/hyptis-laciniata"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/w800h800.webp?v=1781645943",
              "caption": "Submerged shoot, close-up",
              "credit": "School of Scape",
              "creditUrl": "https://schoolofscape.com.au/collections/livestock-plants/products/hyptis-laciniata"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/IMG-4030_1024x1024_2x_23516ae3-6fa3-46b0-829c-5fe3ace54015.webp?v=1781645971&width=1600",
              "caption": "Single portions on rockwool, submerged",
              "credit": "School of Scape",
              "creditUrl": "https://schoolofscape.com.au/collections/livestock-plants/products/hyptis-laciniata"
            }
          ],
          "offers": [
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/hyptis-laciniata",
              "unit": "3-5 stems",
              "price": 1800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/hyptis-laciniata"
            }
          ]
        },
        {
          "id": 263,
          "name": "Ludwigia sphaerocarpa",
          "scientific": "Ludwigia sphaerocarpa",
          "difficulty": "Moderate",
          "about": "A stem plant with narrow, pointed leaves that turn from olive green to copper and red under strong light. It forms upright, colourful groups in the midground. It needs high light and CO2 to colour and stay compact, and benefits from regular trimming and replanting of tops.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/SOS6-24.jpg?v=1771255285&width=1200",
              "caption": "Submerged rosette-like shoot in an aquascape",
              "credit": "School of Scape",
              "creditUrl": "https://schoolofscape.com.au/collections/livestock-plants/products/ludwigia-sphaerocarpa"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0854/0866/products/Ludwigia-Sphaerocarpa.jpg?v=1760440648&width=1000",
              "caption": "Submerged shoots, orange tones",
              "credit": "Aquaristic Online",
              "creditUrl": "https://www.aquaristiconline.com.au/products/ludwigia-sphaerocarpa"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/SOS6-23.jpg?v=1771255285&width=1200",
              "caption": "Submerged shoot among foreground plants",
              "credit": "School of Scape",
              "creditUrl": "https://schoolofscape.com.au/collections/livestock-plants/products/ludwigia-sphaerocarpa"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/ludwigia-sphaerocarpa-1219909682.jpg?v=1770714727&width=1200",
              "caption": "Tissue-culture cup",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/ludwigia-sphaerocarpa"
            }
          ],
          "offers": [
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/ludwigia-sphaerocarpa",
              "unit": "3-5 stems",
              "price": 1800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/ludwigia-sphaerocarpa"
            }
          ]
        },
        {
          "id": 264,
          "name": "Rotala mexicana",
          "scientific": "Rotala mexicana",
          "difficulty": "Moderate",
          "about": "Very fine, needle-like leaves on thin stems that form a soft, bushy mass, green to orange or red under strong light. It suits the midground as a fine-textured group. It needs high light, CO2 and soft water, and frequent trimming keeps it dense, as the delicate stems are easily lost if growth stalls.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "5 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquagreen.com.au/images/Rotala_mexicana_03.jpg",
              "caption": "Submerged stems in an aquarium",
              "credit": "Aquagreen",
              "creditUrl": "https://www.aquagreen.com.au/plant_data/Rotala_mexicana.html"
            },
            {
              "src": "https://www.aquagreen.com.au/images/Rotala_mexicana_04.jpg",
              "caption": "Red-tinged submerged stems",
              "credit": "Aquagreen",
              "creditUrl": "https://www.aquagreen.com.au/plant_data/Rotala_mexicana.html"
            },
            {
              "src": "https://www.aquagreen.com.au/images/Rotala_mexicana_01.jpg",
              "caption": "Submerged shoot, top view",
              "credit": "Aquagreen",
              "creditUrl": "https://www.aquagreen.com.au/plant_data/Rotala_mexicana.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/rotala-mexicana-33052379152584.jpg?v=1657134228&width=1200",
              "caption": "Emersed-grown stems on white",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/rotala-mexicana"
            }
          ],
          "offers": [
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/rotala-mexicana",
              "unit": "3-5 stems",
              "price": 1200,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/rotala-mexicana"
            }
          ]
        }
      ]
    },
    {
      "id": "back",
      "name": "Background",
      "intro": "Stem plants and tall ribbons for the rear. Most need regular trimming once they reach the surface.",
      "plants": [
        {
          "id": 20,
          "name": "Rotala 'Colorata'",
          "scientific": "Rotala rotundifolia 'Colorata'",
          "difficulty": "Easy",
          "about": "A fast stem plant with small leaves and pink to red tips under strong light. It bushes out well with repeated trimming. It is one of the easiest ways to add colour to the background.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/rotala-rotundifolia-colorata-4f7a0270d82c3.jpg",
              "caption": "Rotala rotundifolia 'Colorata', submerged",
              "credit": "© Tim Gross (2006)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/rotala-rotundifolia-colorata"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/a-brief-crack-of-light-56c369bb82571.jpg",
              "caption": "Aquascape: a brief crack of light (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/a-brief-crack-of-light"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/rotala-rotundifolia-colorata-513e3f03af302.jpg",
              "caption": "Rotala rotundifolia 'Colorata', submerged",
              "credit": "© Tobias Coring (2011)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/rotala-rotundifolia-colorata"
            },
            {
              "src": "https://aquafy.com.au/cdn/shop/files/rotala-colorata_grande.jpg?v=1730200944",
              "caption": "Original reference photo.",
              "credit": "aquafy.com.au",
              "creditUrl": "https://aquafy.com.au/products/rotala-colorata"
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/tissue-culture-plants",
              "unit": "Tissue culture cup",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Nature Aquariums: tissue culture range",
              "url": "https://www.natureaquariums.com.au/collections/tissue-culture"
            },
            {
              "label": "Beyond Aquatics: tissue culture range",
              "url": "https://www.beyondaquatics.com.au/tissue-culture-plants"
            },
            {
              "label": "Photo source: aquafy.com.au",
              "url": "https://aquafy.com.au/products/rotala-colorata"
            }
          ]
        },
        {
          "id": 21,
          "name": "Rotala 'Blood Red'",
          "scientific": "Rotala sp. 'Blood Red'",
          "difficulty": "Moderate",
          "about": "Small, narrow leaves on slender stems that turn a uniform deep red to burgundy, with the darkest colour at the tips. It is planted in tight groups as a red accent in the mid to background. Full colour needs strong light, injected CO2, iron dosing and lean nitrate; without them it stays orange-pink or greenish.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "15 to 30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.garnelio.de/media/image/56/78/37/Rotala-rotundifolia-Blood-Red-2_600x600%402x.png",
              "caption": "Vibrant Aquascape with Blood Red Rotala",
              "credit": "www.garnelio.de",
              "creditUrl": "https://www.garnelio.de/en/1-2-grow-rotala-rotundifolia-blood-red"
            },
            {
              "src": "https://www.garnelaxia.at/WebRoot/HostEurope2/Shops/es10563248/6629/145B/F47D/9141/7BC2/0A0C/0596/59FB/Rotala_Blood_Red_1.jpg",
              "caption": "Tropica Rotala Blood Red InVitro",
              "credit": "www.garnelaxia.at",
              "creditUrl": "https://www.garnelaxia.at/Tropica-Rotala-Blood-Red-InVitro/en"
            },
            {
              "src": "https://media.karousell.com/media/photos/products/2023/10/29/very_healthy_rotala_rotundifol_1698565368_32223c99_progressive.jpg",
              "caption": "Blood-Red Rotala Rotundifolia in Aquarium",
              "credit": "www.carousell.sg",
              "creditUrl": "https://www.carousell.sg/p/very-healthy-rotala-rotundifolia-blood-red-for-sale-1262735432/"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/032D%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Rotalarotundifolia'BloodRed'(032DTC)/30047"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/tissue-culture-rotala-bloodii-blood-red",
              "unit": "Tissue culture cup",
              "price": 1800,
              "was": 2000,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: tissue culture range",
              "url": "https://microaquaticshop.com.au/collections/tissue-culture-plant"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Rotalarotundifolia'BloodRed'(032DTC)/30047"
            }
          ]
        },
        {
          "id": 22,
          "name": "Rotala wallichii",
          "scientific": "Rotala wallichii",
          "difficulty": "Demanding",
          "about": "Fine, feathery whorls that turn pink and red under strong light. It looks best planted in large groups. It prefers soft, slightly acidic water and good iron levels.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": "SA tap water is moderately hard in most areas. This plant does best while the aquasoil is still softening the water, or with softer top up water.",
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/rotala-wallichii-4f7a02289e2f5.jpg",
              "caption": "Rotala wallichii, submerged",
              "credit": "© Oliver Knott (2004), www.oliver-knott.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/rotala-wallichii"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/secret-path-51f92ea87dcfc.jpg",
              "caption": "Aquascape: secret path (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/secret-path"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/rotala-wallichii-4f7a0229348cb.jpg",
              "caption": "Rotala wallichii, submerged",
              "credit": "© Bjarne Sætrang (2004) www.aquadigital.net",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/rotala-wallichii"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/032A%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Rotalawallichii(032ATC)/18748"
            }
          ],
          "offers": [
            {
              "shop": "Scapeshop",
              "url": "https://scapeshop.com.au/products/rotala-wallichii",
              "unit": "Bunch",
              "price": 900,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/rotala-wallichii",
              "unit": "6 stems",
              "price": 795,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Scapeshop: Rotala wallichii",
              "url": "https://scapeshop.com.au/products/rotala-wallichii"
            },
            {
              "label": "Liverpool Creek Aquariums: Rotala wallichii",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/rotala-wallichii"
            },
            {
              "label": "Coburg Aquarium: Rotala wallichii",
              "url": "https://coburgaquarium.com.au/products/rotala-wallichii"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Rotalawallichii(032ATC)/18748"
            }
          ]
        },
        {
          "id": 23,
          "name": "Rotala macrandra",
          "scientific": "Rotala macrandra",
          "difficulty": "Demanding",
          "about": "Wavy, deep red leaves on fragile stems. Its red is among the deepest of any stem plant, but it needs stable conditions. Handle stems carefully when trimming.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/rotala-macrandra-4f7a021e94dc8.jpg",
              "caption": "Rotala macrandra",
              "credit": "© Alexander Schilke (2005)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/rotala-macrandra"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/aquatlantis-53fe1aa8509c0.jpg",
              "caption": "Aquascape: aquatlantis (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/aquatlantis"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/rotala-macrandra-4f7a021f3430b.jpg",
              "caption": "Rotala macrandra",
              "credit": "© Alexander Schilke (2005)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/rotala-macrandra"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/032%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Rotalamacrandra(032TC)/4445"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/tissue-culture-rotala-macrandra",
              "unit": "Tissue culture cup",
              "price": 2100,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: tissue culture range",
              "url": "https://microaquaticshop.com.au/collections/tissue-culture-plant"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Rotalamacrandra(032TC)/4445"
            }
          ]
        },
        {
          "id": 24,
          "name": "Ludwigia arcuata",
          "scientific": "Ludwigia arcuata",
          "difficulty": "Moderate",
          "about": "Narrow, needle shaped leaves that turn orange to red under strong light. The fine texture contrasts well with round leaved stems. It holds its colour well with good light.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/ludwigia-arcuata-4f7a01de3678c.jpg",
              "caption": "Ludwigia arcuata",
              "credit": "Bjarne Sætrang (2004)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/ludwigia-arcuata"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/pflanzenwelt-58ede4e2387cd.jpg",
              "caption": "Aquascape: pflanzenwelt (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/pflanzenwelt"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/ludwigia-arcuata-4f7a01decd061.jpg",
              "caption": "Ludwigia arcuata",
              "credit": "Bjarne Sætrang (2004)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/ludwigia-arcuata"
            },
            {
              "src": "https://aquafy.com.au/cdn/shop/products/ludwigia-arcuata-needle-leaf-repens-939683_grande.jpg?v=1667814304",
              "caption": "Original reference photo.",
              "credit": "aquafy.com.au",
              "creditUrl": "https://aquafy.com.au/products/narrow"
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/tissue-culture/products/tissue-culture-cup-ludwigia-arcuata",
              "unit": "Tissue culture cup",
              "price": 1900,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquatic Plants Australia: tissue culture range",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/tissue-culture"
            },
            {
              "label": "Photo source: aquafy.com.au",
              "url": "https://aquafy.com.au/products/narrow"
            }
          ]
        },
        {
          "id": 25,
          "name": "Pogostemon erectus",
          "scientific": "Pogostemon erectus",
          "difficulty": "Moderate",
          "about": "Stiff, upright stems covered in fine needles, a little like small conifers. It gives a vertical texture that contrasts with soft stems. Strong light keeps it compact.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "15 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/pogostemon-deccanensis-513f3af9951e6.jpg",
              "caption": "Pogostemon deccanensis (as P. erectus), submerged",
              "credit": "© Olli2 (2011)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/pogostemon-deccanensis"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/closer-5150c5dc861af.jpg",
              "caption": "Aquascape: closer (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/closer"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/pogostemon-deccanensis-513f3af9945a9.jpg",
              "caption": "Pogostemon deccanensis (as P. erectus), submerged",
              "credit": "© Olli2 (2011)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/pogostemon-deccanensis"
            },
            {
              "src": "https://www.aquarzon.com/2995-large_default/pogostemon-erectus.jpg",
              "caption": "Original reference photo.",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/stem-plants/636-pogostemon-erectus.html"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Aquarzon: Pogostemon erectus",
              "url": "https://www.aquarzon.com/stem-plants/636-pogostemon-erectus.html"
            },
            {
              "label": "Photo source: aquarzon.com",
              "url": "https://www.aquarzon.com/stem-plants/636-pogostemon-erectus.html"
            }
          ]
        },
        {
          "id": 26,
          "name": "Crypt balansae",
          "scientific": "Cryptocoryne crispatula var. balansae",
          "difficulty": "Easy",
          "about": "Long, narrow, crinkled leaves that can reach the surface. It works best behind wood, where the leaves soften the hardscape. Leaves that reach the surface can be cut at the base.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "30 to 60 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquarium-planten.com/images/producten/crypt_balansae.jpg",
              "caption": "Cryptocoryne balansae Aquascape",
              "credit": "www.aquarium-planten.com",
              "creditUrl": "https://www.aquarium-planten.com/shop/5/cryptocoryne/13/cryptocoryne-balansae/1241"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/below-515070d9ddbf6.jpg",
              "caption": "Aquascape: below (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/below"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/below-515f26420caf7.jpg",
              "caption": "Aquascape: below (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow aquascaper",
              "creditUrl": "https://www.flowgrow.de/db/tanks/below"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/125%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Cryptocorynecrispatula(125TC)/18756"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Aquarium Industries: tissue culture range",
              "url": "https://www.aquariumindustries.com.au/product-category/freshwater-plants/tissue_culture_plants/"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Cryptocorynecrispatula(125TC)/18756"
            }
          ]
        },
        {
          "id": 27,
          "name": "Vallisneria nana",
          "scientific": "Vallisneria nana",
          "difficulty": "Easy",
          "about": "A narrow leaved Vallisneria from northern Australia. Despite the name it can reach 30 to 70 cm in an aquarium. Runners spread it along the back glass.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "30 to 70 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/vallisneria-gracilis-4f7a02467e2f8.jpg",
              "caption": "Vallisneria gracilis (as V. nana)",
              "credit": "© Oliver Knott (2005) www.oliver-knott.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/vallisneria-nana"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/anyplace-anytime-5150668198d06.jpg",
              "caption": "Aquascape: anyplace anytime (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/anyplace-anytime"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/anyplace-anytime-515f274120bd1.jpg",
              "caption": "Aquascape: anyplace anytime (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow aquascaper",
              "creditUrl": "https://www.flowgrow.de/db/tanks/anyplace-anytime"
            },
            {
              "src": "https://www.aquagreen.com.au/images/Vallisneria_nana_01.jpg",
              "caption": "Original reference photo.",
              "credit": "aquagreen.com.au",
              "creditUrl": "https://www.aquagreen.com.au/plant_data/Vallisneria_nana.html"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Aquagreen: Daintree Val (sold as Vallisneria nana)",
              "url": "https://www.aquagreen.com.au/plant_data/Vallisneria_erecta.html"
            },
            {
              "label": "Aquasabi: Vallisneria gracilis and nana",
              "url": "https://www.aquasabi.com/Vallisneria-gracilis-nana"
            },
            {
              "label": "Dennerle Plants: Vallisneria nana",
              "url": "https://dennerleplants.com/en/plants/plantdetails/Vallisneria-nana-(386)/27938"
            },
            {
              "label": "Photo source: aquagreen.com.au",
              "url": "https://www.aquagreen.com.au/plant_data/Vallisneria_nana.html"
            }
          ]
        },
        {
          "id": 115,
          "name": "Proserpinaca palustris (Mermaid weed)",
          "scientific": "Proserpinaca palustris",
          "difficulty": "Moderate",
          "about": "Narrow, comb-like serrated leaves on upright stems, green at first and turning orange to copper-red under good light. It makes a fine-textured accent in the midground or background. Low nitrate with plenty of phosphate deepens the colour, and new plants take a few weeks to change from the emersed green form to the submerged form.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/proserpinaca-palustris-4f7a013d0466e.jpg",
              "caption": "Submerged stems in an aquascape",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/proserpinaca-palustris"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/proserpinaca-palustris-52f33bcca5ad1.jpg",
              "caption": "Submerged stem in a planted aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/proserpinaca-palustris"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0854/0866/products/Proserpinaca-Palustris.jpg?v=1760443523&width=1000",
              "caption": "Red submerged growth in an aquascape",
              "credit": "Aquaristic Online",
              "creditUrl": "https://www.aquaristiconline.com.au/collections/plant-background/products/proserpinaca-palustris-mermaid-weed"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/SHOPIFYPHOTO-2026-08-18T105247.803.png?v=1787025177&width=1000",
              "caption": "Potted emersed-grown plant on white",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/proserpinaca-palustris-mermaid-weed"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/proserpinaca-palustris-mermaid-weed",
              "unit": "bunch",
              "price": 1495,
              "was": 1600,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/proserpinaca-palustris-mermaid-weed",
              "unit": "bunch",
              "price": 1450,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/stem-plants/228-proserpinaca-palustris-orange-red-mermaid-weed.html",
              "unit": "bunch",
              "price": 990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/proserpinaca-palustris-mermaid-weed/",
              "unit": "bunch",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "The Online Aquarium Shop",
              "url": "https://www.theonlineaquariumshop.com.au/product/proserpinaca-palustris-mermaid-weed/",
              "unit": "bunch",
              "price": 1290,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/proserpinaca-palustris-mermaid-weed",
              "unit": "bunch",
              "price": 1800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/proserpinaca-palustris-mermaid-weed"
            },
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/proserpinaca-palustris-mermaid-weed"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/stem-plants/228-proserpinaca-palustris-orange-red-mermaid-weed.html"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/proserpinaca-palustris-mermaid-weed/"
            },
            {
              "label": "The Online Aquarium Shop: product page",
              "url": "https://www.theonlineaquariumshop.com.au/product/proserpinaca-palustris-mermaid-weed/"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/proserpinaca-palustris-mermaid-weed"
            }
          ]
        },
        {
          "id": 120,
          "name": "Ludwigia inclinata 'Cuba'",
          "scientific": "Ludwigia inclinata var. verticillata 'Cuba'",
          "difficulty": "Moderate",
          "about": "Narrow, pointed leaves set in whorls around the stem, with copper to deep red new growth under strong light. It forms a bushy red group for the background and grows quickly once settled. It needs injected CO2, a full nutrient supply and room to grow; without CO2 the leaves come in wider, greener and sparser.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/ludwigia-inclinata-var-verticillata-cuba-53d9e89d78669.jpg",
              "caption": "Submerged growth in an aquarium.",
              "credit": "Flowgrow (© HME)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/ludwigia-inclinata-var-verticillata-cuba"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/ludwigia-inclinata-var-verticillata-cuba-4f7a012beff19.jpg",
              "caption": "Submerged shoot tip with marbled orange leaves.",
              "credit": "Flowgrow (Jaap Liefting)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/ludwigia-inclinata-var-verticillata-cuba"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/ludwigia-inclinata-var-verticillata-cuba-4f7a012997c87.jpg",
              "caption": "Submerged stems in a planted aquarium.",
              "credit": "Flowgrow (Oliver Knott)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/ludwigia-inclinata-var-verticillata-cuba"
            },
            {
              "src": "https://greenaqua.hu/media/catalog/product/3/3/33-035c.jpeg",
              "caption": "Tropica pot (emersed-grown) on white.",
              "credit": "greenaqua.hu",
              "creditUrl": "https://greenaqua.hu/en/tropica-plant-ludwigia-inclinata-cuba.html"
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/ludwigia-inclinata-cuba",
              "unit": "bunch",
              "price": 1450,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/products/ludwigia-verticilliata-cuba",
              "unit": "bunch",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/ludwigia-inclinata-cuba"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/products/ludwigia-verticilliata-cuba"
            }
          ]
        },
        {
          "id": 123,
          "name": "Ludwigia brevipes",
          "scientific": "Ludwigia brevipes",
          "difficulty": "Easy",
          "about": "Short, narrow oval leaves packed closely on thin stems, green in most tanks and orange-red at the tips under strong light with low nitrate. It branches well and makes a tidy filler group. It is easy in soft or hard water, but without CO2 it grows thinner and branches less.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/ludwigia-brevipes-513e3c5816fa9.jpg",
              "caption": "Submerged group in a planted aquarium.",
              "credit": "Flowgrow (Tobias Coring)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/ludwigia-brevipes"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/ludwigia-brevipes-11720601632849.jpg?v=1783527592",
              "caption": "Submerged stems in an aquascape.",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/ludwigia-brevipes"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/ludwigia-brevipes-11720600911953.jpg?v=1783531303",
              "caption": "Submerged clump in an aquarium.",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/ludwigia-brevipes"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/ludwigia-brevipes-11720599437393.jpg?v=1602843941&width=1200",
              "caption": "Bunch of stems on white.",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/ludwigia-brevipes"
            }
          ],
          "offers": [
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/ludwigia-brevipes",
              "unit": "bunch",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/ludwigia-brevipes"
            }
          ]
        },
        {
          "id": 125,
          "name": "Rotala 'H'ra'",
          "scientific": "Rotala sp. 'H'ra'",
          "difficulty": "Moderate",
          "about": "A Rotala rotundifolia form with narrow, lance-shaped leaves in pairs on slender stems, moving from gold through orange to red under strong light. It is used in dense groups for warm colour in the background. Lower leaves drop if shaded, so trim and replant tops before the group gets crowded; leaves are fragile when handling.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "15 to 35 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/032C%20TC/5.png&crop=resize&class=product",
              "caption": "Submerged in an aquascape.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/19550/19550"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0082/5091/6926/files/rotala-sp-hra-pot-799.webp?v=1746770009",
              "caption": "Submerged stems in an aquarium.",
              "credit": "ABquatics",
              "creditUrl": "https://abquatics.shop/collections/live-aquarium-plants/products/rotala-sp-hra-pot"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0082/5091/6926/files/rotala-sp-hra-pot-667.webp?v=1746770027",
              "caption": "Submerged stems in an aquascape.",
              "credit": "ABquatics",
              "creditUrl": "https://abquatics.shop/collections/live-aquarium-plants/products/rotala-sp-hra-pot"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/032C%20TC/2.png&crop=resize&class=product",
              "caption": "Tropica 1-2-Grow! tissue-culture cup.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/19550/19550"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/rotala-sp-hra",
              "unit": "bunch",
              "price": 1495,
              "was": 1800,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/stem-plants/235-rotala-hra-gia-lai.html",
              "unit": "6 stems",
              "price": 990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/rotala-sp-hra-green-leaves-nbsp",
              "unit": "per bunch",
              "price": 1000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/rotala-sp-hra-pot",
              "unit": "pot",
              "price": 1295,
              "was": 1500,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/rotala-sp-hra"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/stem-plants/235-rotala-hra-gia-lai.html"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/rotala-sp-hra-green-leaves-nbsp"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/rotala-sp-hra-pot"
            }
          ]
        },
        {
          "id": 126,
          "name": "Rotala 'Green'",
          "scientific": "Rotala sp. 'Green'",
          "difficulty": "Easy",
          "about": "Small, slightly pointed lime-green leaves set densely along fine stems. It fills the background with a soft, even texture and grows lower and more compact in stronger light. It grows without CO2 but is denser with it, and regular trimming keeps the group bushy.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "20 to 30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/rotala-rotundifolia-green-4f7a022727746.jpg",
              "caption": "Submerged in a planted aquarium.",
              "credit": "Flowgrow (Svennovitch)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/rotala-rotundifolia-green"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/products/il_570xN.1899986763_j77q.jpg-min.jpg?v=1729764618",
              "caption": "Submerged group beside a red Rotala.",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/rotala-green"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/files/EBA32790-74F0-49AB-8D87-A6326D2BBA25.jpg?v=1783121653&width=1200",
              "caption": "Stems growing submerged in a store tank (recently converted, rounder leaves).",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/rotala-green"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/033A/2.png&crop=resize&class=product",
              "caption": "Tropica pot.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/4448/4448"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/rotala-green",
              "unit": "bunch",
              "price": 895,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/rotala-species-green-submersed-bunch",
              "unit": "submersed bunch",
              "price": 1200,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/rotala-green"
            },
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/rotala-species-green-submersed-bunch"
            }
          ]
        },
        {
          "id": 127,
          "name": "Rotala rotundifolia",
          "scientific": "Rotala rotundifolia",
          "difficulty": "Easy",
          "about": "Small rounded leaves on soft stems, green in modest light and pink to red at the tips in strong light. It is a common background stem that grows into a dense, fine-textured bush. It is fast and easy, so it needs frequent trimming, and topping encourages side shoots.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/033/4.JPG&crop=resize&class=product",
              "caption": "Submerged in an aquascape.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/4447/4447"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/rotala-rotundifolia-4f7a0115d51e3.jpg",
              "caption": "Submerged shoot tips with orange colouring.",
              "credit": "Flowgrow (André Skarus)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/rotala-rotundifolia"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/products/Rotala-rotundifolia.jpg?v=1726138081",
              "caption": "Dense submerged bush in an aquarium.",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/rotala-rotundifolia"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/033/2.png&crop=resize&class=product",
              "caption": "Tropica pot.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/4447/4447"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/rotala-rotundifolia",
              "unit": "bunch",
              "price": 999,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/rotala-rotundifolia/",
              "unit": "bunch",
              "price": 800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/rotala-rotundifolia-orange-juice-5-stems-10cm",
              "unit": "5 stems ~10cm",
              "price": 1000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/rotala-rotundifolia-laos",
              "unit": "portion",
              "price": 2995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/rotala-rotundifolia"
            },
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/rotala-rotundifolia/"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/rotala-rotundifolia-orange-juice-5-stems-10cm"
            },
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/rotala-rotundifolia-laos"
            }
          ]
        },
        {
          "id": 128,
          "name": "Rotala ramosior 'Florida'",
          "scientific": "Rotala ramosior",
          "difficulty": "Demanding",
          "about": "Small, narrow oval leaves that turn red-violet to deep purple under strong light, on stems that branch into a compact bush. It is grown in groups as a colour accent in the mid to background. It needs CO2 and steady nutrients, and stable parameters with good flow help prevent loss of lower leaves.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "20 to 30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/files/af3c1180-6c19-4233-b61b-b3ca2fffa1c6.jpg?v=1690454385&width=1200",
              "caption": "Submerged stems with purple-pink leaves in an aquarium.",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/rotala-florida"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1685/8749/products/Unknown-5_bf9fe7db-f326-4d3f-b84f-003153e2c25f.jpg?v=1586768994&width=1200",
              "caption": "Potted portion resting on other plants.",
              "credit": "Green Chapter",
              "creditUrl": "https://www.gcshop-sg.com/products/rotala-ramosior-florida-2-stems"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/files/68756692_2327625807292942_7749197110334980096_n.jpg?v=1690454384&width=1200",
              "caption": "Submerged-grown stems held in the hand.",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/rotala-florida"
            },
            {
              "src": "https://mcmerwe.co.za/wp-content/uploads/2023/10/ADA-Rotala-ramosior-Florida-1.webp",
              "caption": "ADA tissue-culture cup.",
              "credit": "mcmerwe.co.za",
              "creditUrl": "https://mcmerwe.co.za/shop/ada-rotala-ramosior-florida/"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/rotala-florida",
              "unit": "bunch",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/rotala-florida"
            }
          ]
        },
        {
          "id": 130,
          "name": "Rotala tulunadensis",
          "scientific": "Rotala tulunadensis",
          "difficulty": "Moderate",
          "about": "Narrow leaves stacked densely on the stem, mostly green with a slight red or orange tint under stronger light. It forms a compact, fine-textured group for the mid to background. It is more sensitive to water quality than to light, and does best in soft water with steady, consistent nutrient levels and a rich substrate.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "20 to 30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0854/0866/products/Rotala-Tulunandesis.jpg?v=1760456944",
              "caption": "Submerged shoot tips with pink colouring.",
              "credit": "Aquaristic Online",
              "creditUrl": "https://www.aquaristiconline.com.au/collections/plant-background/products/rotala-tulunandesis"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0854/0866/files/RotalaTulunandesis01.jpg?v=1760456945",
              "caption": "Submerged green stems in an aquarium.",
              "credit": "Aquaristic Online",
              "creditUrl": "https://www.aquaristiconline.com.au/collections/plant-background/products/rotala-tulunandesis"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1685/8749/files/Rotala-Tulunadensis-1.jpg?v=1727325942",
              "caption": "Submerged stems with densely stacked leaves.",
              "credit": "Green Chapter",
              "creditUrl": "https://www.gcshop-sg.com/collections/ex-vitro-potted/products/rotala-tulunadensis-3-stems-1-pot"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/image_a2205e7e-a584-48ef-a60d-80eeb1dc786b.webp?v=1781688987",
              "caption": "Submerged in an aquarium.",
              "credit": "School of Scape",
              "creditUrl": "https://schoolofscape.com.au/products/rotala-tulunadensis-vibrant-red-aquarium-stem-plant"
            }
          ],
          "offers": [
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/products/rotala-tulunadensis-vibrant-red-aquarium-stem-plant",
              "unit": "bunch",
              "price": 2000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/products/rotala-tulunadensis-vibrant-red-aquarium-stem-plant"
            }
          ]
        },
        {
          "id": 133,
          "name": "Myriophyllum 'Guyana'",
          "scientific": "Myriophyllum sp. 'Guyana'",
          "difficulty": "Moderate",
          "about": "Soft, needle-like leaves in whorls, green with red to orange tints at the tips in good light. It makes a fine, feathery background group. It is fairly hardy and grows without CO2, but performs best with CO2, aquasoil and regular fertilising, and fast growth means frequent trimming.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/myriophyllum-sp-guyana-51753b3bc915c.jpg",
              "caption": "Submerged clump in an aquarium.",
              "credit": "Flowgrow (Tobias Coring)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/myriophyllum-sp-guyana"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/myriophyllum-sp-guyana-51753b007e247.jpg",
              "caption": "Submerged stems, close-up.",
              "credit": "Flowgrow (Tobias Coring)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/myriophyllum-sp-guyana"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0854/0866/files/Myriophyllum-Guyana.jpg?v=1760459979",
              "caption": "Submerged stems in a planted aquarium.",
              "credit": "Aquaristic Online",
              "creditUrl": "https://www.aquaristiconline.com.au/collections/plant-background/products/myriophyllum-guyana"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/037E%20TC/2.png&crop=resize&class=product",
              "caption": "Tropica 1-2-Grow! tissue-culture cup.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/19549/19549"
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/centrepiece/products/myriophyllum-guyana-submersed-bunch",
              "unit": "submersed bunch",
              "price": 1200,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/myriophyllum-guyana/",
              "unit": "bunch",
              "price": 1095,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/myriophyllum-guyana",
              "unit": "bunch",
              "price": 1800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarium Gallery",
              "url": "https://www.aquariumgallery.com.au/products/tc-myriophyllum-guyana",
              "unit": "TC cup",
              "price": 2495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/centrepiece/products/myriophyllum-guyana-submersed-bunch"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/myriophyllum-guyana/"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/myriophyllum-guyana"
            },
            {
              "label": "Aquarium Gallery: product page",
              "url": "https://www.aquariumgallery.com.au/products/tc-myriophyllum-guyana"
            }
          ]
        },
        {
          "id": 134,
          "name": "Myriophyllum mattogrossense",
          "scientific": "Myriophyllum mattogrossense",
          "difficulty": "Moderate",
          "about": "Fine, feathery bright green leaves in whorls, with stems and tips that can take on reddish tones. It grows quickly into a soft, bushy background group. It copes with medium light without CO2, but CO2 and rich nutrients make it denser and bring out the warmer colour.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "30 to 50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/037/3.png&crop=resize&class=product",
              "caption": "Submerged behind driftwood in an aquascape.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/4454/4454"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/037/5.png&crop=resize&class=product",
              "caption": "Submerged in an aquascape.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/4454/4454"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/myriophyllum-mattogrossense-4f7a01ffa5a3a.jpg",
              "caption": "Submerged shoot tip, close-up.",
              "credit": "Flowgrow (Nikolay)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/myriophyllum-mattogrossense"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/037/2.png&crop=resize&class=product",
              "caption": "Tropica pot.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/4454/4454"
            }
          ],
          "offers": [
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/myriophyllum-mattogrossense/",
              "unit": "bunch",
              "price": 800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/myriophyllum-mattogrossense",
              "unit": "bunch",
              "price": 1800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/products/rare-myriophyllum-mattogrossense-golden",
              "unit": "bunch",
              "price": 7500,
              "was": 9000,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/myriophyllum-mattogrossense/"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/myriophyllum-mattogrossense"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/products/rare-myriophyllum-mattogrossense-golden"
            }
          ]
        },
        {
          "id": 135,
          "name": "Myriophyllum simulans",
          "scientific": "Myriophyllum simulans",
          "difficulty": "Moderate",
          "about": "Australian native milfoil with comb-like leaves split into many hair-thin segments, held in whorls of four or five. It gives a very fine, soft texture in the background. It grows fast and feeds from the water column, so regular liquid fertiliser matters; CO2 is optional, and stems planted too close lose their lower leaves.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/myriophyllum-simulans-5175362a2c01b.jpg",
              "caption": "Submerged shoot tips in an aquarium.",
              "credit": "Flowgrow (Tobias Coring)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/myriophyllum-simulans"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0375/7557/products/Myriophyllum-simulans-Milfoil-1-png.webp?v=1671083586",
              "caption": "Submerged stems in an aquarium.",
              "credit": "Nature Aquariums",
              "creditUrl": "https://natureaquariums.com.au/products/myriophyllum-simulans-milfoil-tissue-culture"
            },
            {
              "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Myriophyllum_simulans_kz01.jpg/1280px-Myriophyllum_simulans_kz01.jpg",
              "caption": "Growing submerged in a botanical garden display tank.",
              "credit": "Krzysztof Ziarnek, Kenraiz (Wikimedia Commons)",
              "creditUrl": "https://commons.wikimedia.org/wiki/File:Myriophyllum_simulans_kz01.jpg"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0608/5771/2849/files/myriophyllum-simulans-milfoil-tissue-culture-9681728.png?v=1787231648",
              "caption": "Tissue-culture cup.",
              "credit": "Nano Tanks Australia",
              "creditUrl": "https://nanotanksaustralia.com.au/products/tissue-culture-myriophyllum-simulans-milfoil"
            }
          ],
          "offers": [
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/tissue-culture-myriophyllum-simulans-milfoil",
              "unit": "tissue culture cup",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/filigree-milfoil-live-aquarium-plant/",
              "unit": "plant",
              "price": 1095,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/tissue-culture-myriophyllum-simulans-milfoil"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/filigree-milfoil-live-aquarium-plant/"
            }
          ]
        },
        {
          "id": 166,
          "name": "Mayaca fluviatilis",
          "scientific": "Mayaca fluviatilis",
          "difficulty": "Moderate",
          "about": "Very fine, hair-like leaves along soft stems give it an almost moss-like look. It forms light green, feathery groups in the background. It prefers soft, slightly acidic water and needs steady iron, as pale new shoots are an early sign of shortage, and it can melt if conditions change suddenly.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/mayaca-fluviatilis-4f7a01fa7a172.jpg",
              "caption": "Submerged stems in an aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/mayaca-fluviatilis"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/mayaca-fluviatilis-4f7a01f9e49ec.jpg",
              "caption": "Submerged growth, close-up",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/mayaca-fluviatilis"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0293/2506/6375/files/scapeshop-bunch-plant-mayaca-bunch-33150975377543.jpg?v=1758190024&width=1200",
              "caption": "Growing in a planted aquarium",
              "credit": "Scapeshop",
              "creditUrl": "https://scapeshop.com.au/products/mayaca"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0293/2506/6375/products/pisces-enterprises-bunch-plant-mayaca-bunch-28413195288711.jpg?v=1758190024&width=1200",
              "caption": "Single bunch, out of water",
              "credit": "Scapeshop",
              "creditUrl": "https://scapeshop.com.au/products/mayaca"
            }
          ],
          "offers": [
            {
              "shop": "Scapeshop",
              "url": "https://scapeshop.com.au/products/mayaca",
              "unit": "1 bunch",
              "price": 900,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Sydney Aquascapes",
              "url": "https://sydney-aquascapes.com.au/products/mayaca",
              "unit": "bunch",
              "price": 1400,
              "was": 1500,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/mayaca-fluviatilis",
              "unit": "bunch",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Scapeshop: product page",
              "url": "https://scapeshop.com.au/products/mayaca"
            },
            {
              "label": "Sydney Aquascapes: product page",
              "url": "https://sydney-aquascapes.com.au/products/mayaca"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/mayaca-fluviatilis"
            }
          ]
        },
        {
          "id": 168,
          "name": "Stargrass",
          "scientific": "Heteranthera zosterifolia",
          "difficulty": "Easy",
          "about": "Narrow, grass-like leaves in star-shaped whorls on stems that throw out many side shoots. It quickly forms a bushy, light green group, and can also be trained low as a loose midground plant in strong light. It is easy and fast, but stems lean and sprawl in weak light, and dense groups need thinning so light reaches the lower leaves.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/heteranthera-zosterifolia-4f7a01107e30c.jpg",
              "caption": "Submerged stand in an aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/heteranthera-zosterifolia"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/heteranthera-zosterifolia-4f7a0111183a3.jpg",
              "caption": "Submerged shoots, close-up",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/heteranthera-zosterifolia"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/products/micro-aquatic-shop-aquarium-plants-5-stems-heter-nther-z-sterif-li-28242663931974.jpg?v=1660630566&width=1200",
              "caption": "Dense submerged growth in an aquascape",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/star-grass"
            },
            {
              "src": "https://dennerleplants.com/imagegen.ashx?height=800&image=/Files/Plants/30011/1.JPG",
              "caption": "Dennerle in-vitro cup",
              "credit": "Dennerle Plants",
              "creditUrl": "https://dennerleplants.com/en/plants/plantdetails/Heteranthera-zosterifolia-(30011)/23012"
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/heteranthera-zosterifolia",
              "unit": "bunch (from price)",
              "price": 795,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/heteranthera-zosterifolia-5-stems-around-10cm-each",
              "unit": "5 stems ~10cm",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/star-grass",
              "unit": "bunch",
              "price": 1095,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/heteranthera-zosterfolia-submersed-bunch-waterhedge-s012",
              "unit": "bunch",
              "price": 1200,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/heteranthera-zosterifolia"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/heteranthera-zosterifolia-5-stems-around-10cm-each"
            },
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/star-grass"
            },
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/heteranthera-zosterfolia-submersed-bunch-waterhedge-s012"
            }
          ]
        },
        {
          "id": 173,
          "name": "Nesaea triflora",
          "scientific": "Nesaea triflora",
          "difficulty": "Moderate",
          "about": "Small, narrow lance-shaped leaves on upright stems, bright green with red to pink tones in strong light. It forms a bushy background or midground group. It needs good light, CO2 and a nutrient-rich substrate to colour and stay compact, and regular trimming keeps it dense.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/ammannia-capitellata-4f7a0357bac57.jpg",
              "caption": "Submerged stem in an aquarium (listed under the current name Ammannia capitellata)",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/ammannia-capitellata"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/ammannia-capitellata-4f7a035accc5c.jpg",
              "caption": "Orange-toned submerged growth (listed as Ammannia capitellata)",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/ammannia-capitellata"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0802/8835/0528/files/nesaeatriflora.png?v=1695020887",
              "caption": "Dense stand of stems",
              "credit": "Liverpool Creek Aquariums",
              "creditUrl": "https://www.liverpoolcreekaquariums.com.au/products/nesaea-triflora"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0563/0053/5905/files/nesaea-triflora-potted-810760.jpg?v=1743969394",
              "caption": "Potted plant on white background",
              "credit": "Planted Aquaria",
              "creditUrl": "https://www.plantedaquaria.ca/products/nesaea-triflora-potted"
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/nesaea-triflora",
              "unit": "stem (from price)",
              "price": 595,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/nesaea-triflora"
            }
          ]
        },
        {
          "id": 188,
          "name": "Hottonia palustris (water violet)",
          "scientific": "Hottonia palustris",
          "difficulty": "Moderate",
          "about": "Bright green, finely divided comb-like leaves on upright stems, with a light, feathery texture. It is a temperate plant that does best below about 22°C and often struggles in warm tropical water. It likes good light and a steady supply of nitrate and phosphate, and emersed-grown plants need time to form submerged leaves.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hottonia-palustris-52ef47eef389a.jpg",
              "caption": "Submerged group in an aquascape",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hottonia-palustris"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hottonia-palustris-4f7a01b77400c.jpg",
              "caption": "Submerged shoot tip, close-up",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hottonia-palustris"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hottonia-palustris-4f7a01b66fb9d.jpg",
              "caption": "Submerged stems in an aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hottonia-palustris"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/027%20TC/2.png&crop=resize&class=product",
              "caption": "Tropica 1-2-Grow! tissue-culture cup",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/28508/28508"
            }
          ],
          "offers": [
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/products/hottonia-palustris",
              "unit": "bunch",
              "price": 1200,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/products/hottonia-palustris"
            }
          ]
        },
        {
          "id": 189,
          "name": "Eichhornia diversifolia",
          "scientific": "Eichhornia diversifolia",
          "difficulty": "Moderate",
          "about": "Narrow, light green, strap-like leaves sit alternately along upright stems, so each stem looks like a small, soft palm. It forms a bushy group that suits the background and grows quickly to the surface, so it needs regular trimming. Strong light and CO2 keep the stems sturdy; in shade or with low nitrate and phosphate the leaves turn transparent and drop.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/eichhornia-diversifolia-4f7a01a89d7af.jpg",
              "caption": "Submerged group in an aquascape",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/eichhornia-diversifolia"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/eichhornia-diversifolia-4f7a01a770889.jpg",
              "caption": "Submerged stems, close-up",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/eichhornia-diversifolia"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/blau-574b180e925af.jpg",
              "caption": "Aquascape: blau (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/blau"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/eichhornia-diversifolia-4f7a01a803ae5.jpg",
              "caption": "Single stem against a black background",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/eichhornia-diversifolia"
            }
          ],
          "offers": [
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/products/eichhornia-diversifolia",
              "unit": "bunch",
              "price": 1800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/products/eichhornia-diversifolia"
            }
          ]
        },
        {
          "id": 206,
          "name": "Guppy Grass",
          "scientific": "Najas guadalupensis",
          "difficulty": "Easy",
          "about": "Thin, branching stems carry very fine, narrow leaves about 1 to 2 cm long in a soft, bright green tangle. It can be planted as a loose background bunch or left floating, where it gives shelter to fry and shrimp. It grows fast in most water and soaks up nutrients, but the stems are brittle and need thinning often.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "30 to 60 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1163/2672/products/Guppy_Grass_5.jpg?v=1571167773",
              "caption": "Dense submerged growth in an aquarium",
              "credit": "Aquatic Arts",
              "creditUrl": "https://aquaticarts.com/products/guppy-grass"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/najas-guadalupensis-4f7a025478e22.jpg",
              "caption": "Submerged shoots in an aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/najas-guadalupensis"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0881/1810/0284/files/guppy_grass.jpg?v=1745196065&width=1200",
              "caption": "Floating mass in an aquarium",
              "credit": "NU Aqua",
              "creditUrl": "https://nuaquashop.com/products/guppy-grass-portion-buy-one-get-one-free"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/146%20TC/2.PNG&crop=resize&class=product",
              "caption": "Tropica 1-2-Grow! tissue-culture cup",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Najasguadalupensis'GuppyGrass'(146TC)(1)/30786"
            }
          ],
          "offers": [
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/golf-ball-size-guppy-grass",
              "unit": "portion",
              "price": 1395,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/golf-ball-size-guppy-grass"
            }
          ]
        },
        {
          "id": 220,
          "name": "Hydrilla verticillata",
          "scientific": "Hydrilla verticillata",
          "difficulty": "Easy",
          "about": "Small, finely toothed, bright green leaves grow in whorls along long, branching stems. It is often used in new tanks to take up excess nutrients and compete with algae. It grows quickly to the surface and needs frequent trimming; fragments root easily, so remove loose cuttings.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "30 to 60 cm"
            ]
          ],
          "saNote": "Roxy does not state SA shipping. Aquatic Plants Australia excludes Tasmania only. Confirm SA is allowed at checkout.",
          "photos": [
            {
              "src": "https://www.aquarzon.com/2658-large_default/hydrilla.jpg",
              "caption": "Submerged stems in an aquarium",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/stem-plants/615-hydrilla.html"
            },
            {
              "src": "https://roxyaquarium.com.au/app/uploads/2023/04/hydrilla.jpg",
              "caption": "Planted submerged in a display tank",
              "credit": "Roxy Aquarium",
              "creditUrl": "https://roxyaquarium.com.au/product/hydrilla-verticillata-waterthyme/"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hydrilla-verticillata-52fbdbfc76993.jpg",
              "caption": "Stems laid out to show leaf whorls",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hydrilla-verticillata"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0643/3239/8819/files/Hydrilla2.png?v=1696475550",
              "caption": "Submersed-grown bunch on black background",
              "credit": "Aquatic Plants Australia",
              "creditUrl": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/hydrilla-verticillata-submersed-bunch"
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/hydrilla-verticillata-waterthyme/",
              "unit": "bunch",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/hydrilla-verticillata-submersed-bunch",
              "unit": "bunch, submersed",
              "price": 1200,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/hydrilla-verticillata-waterthyme/"
            },
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/hydrilla-verticillata-submersed-bunch"
            }
          ]
        },
        {
          "id": 224,
          "name": "Corkscrew Vallisneria (Contortionist)",
          "scientific": "Vallisneria spiralis 'Contortionist'",
          "difficulty": "Easy",
          "about": "Long, narrow, ribbon leaves twist into tight corkscrew spirals and form a loose, textured screen at the back of a layout. It spreads by runners and is a heavy root feeder, so it does best in a nutrient-rich substrate with root tabs. Leaves that reach the surface can be cut off at the base to keep it tidy.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "30 to 50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0082/5091/6926/files/contortionist-vallisneria-1-plant-groundcover-family-people-419.webp?v=1746765764",
              "caption": "Twisted leaves growing in an aquarium",
              "credit": "AB Aquatics",
              "creditUrl": "https://abquatics.shop/products/contortionist-vallisneria-1-plant"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/IMG-9630.webp?v=1784567833",
              "caption": "Submerged in an aquarium",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/vallisneria-contortionist-bunches"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/A46C62C5-CF4C-44F5-A644-A6F8A999F62C.jpg?v=1784563990&width=1200",
              "caption": "Bunches out of water",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/vallisneria-contortionist-bunches"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1866/6367/files/Vallisneria-Contortionist-Bunches.jpg?v=1768785949",
              "caption": "Single plant on white background",
              "credit": "Melbourne Tropical Fish",
              "creditUrl": "https://melbournetropicalfish.com.au/collections/aquarium-plants/products/vallisneria-contortionst"
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/corkscrew-vallisneria-live-aquarium-plant/",
              "unit": "bunch",
              "price": 1895,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/vallisneria-contortionist-bunches",
              "unit": "bunch of 5-10 leaves",
              "price": 1800,
              "was": 1900,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/products/contortionist-vallisneria-1-plant",
              "unit": "1 plant",
              "price": 895,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Melbourne Tropical Fish",
              "url": "https://melbournetropicalfish.com.au/collections/aquarium-plants/products/vallisneria-contortionst",
              "unit": "each",
              "price": 1999,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/corkscrew-vallisneria-live-aquarium-plant/"
            },
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/vallisneria-contortionist-bunches"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/products/contortionist-vallisneria-1-plant"
            },
            {
              "label": "Melbourne Tropical Fish: product page",
              "url": "https://melbournetropicalfish.com.au/collections/aquarium-plants/products/vallisneria-contortionst"
            }
          ]
        },
        {
          "id": 183,
          "name": "Umbrella Hair Grass (Eleocharis vivipara)",
          "scientific": "Eleocharis vivipara",
          "difficulty": "Easy",
          "about": "Tall, very fine hairgrass whose stems reach the surface and then sprout clusters of thin shoots at the tips, forming an umbrella-like canopy. It suits the back of a layout or a single feature clump. It spreads by runners, benefits from a rich substrate and fertilising, and needs regular trimming.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "30 to 50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0854/0866/files/Eleocharis-Vivipara.jpg?v=1760454530",
              "caption": "Submerged stand in an aquarium",
              "credit": "Aquaristic Online",
              "creditUrl": "https://www.aquaristiconline.com.au/collections/plant-background/products/eleocharis-vivipara-umbrella-hair-grass"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0764/6524/2419/files/UmbrellaHairgrasswebsite.jpg?v=1776275420&width=1200",
              "caption": "Potted plant submerged in a tank",
              "credit": "Imperial Tropicals",
              "creditUrl": "https://imperialtropicals.com/products/umbrella-hairgrass-eleocharis-vivipara"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/jungfrau-582c4637b480c.jpg",
              "caption": "Aquascape: Jungfrau (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/jungfrau"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/eleocharis-vivipara-513e3a2795841.jpg",
              "caption": "Potted plant on white background",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/eleocharis-vivipara"
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/eleocharis-vivipara-emersed-bunch-umbrella-hair-grass",
              "unit": "emersed bunch",
              "price": 895,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/eleocharis-vivipara-umbrella-hair-grass",
              "unit": "portion",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/eleocharis-vivipara-emersed-bunch-umbrella-hair-grass"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/eleocharis-vivipara-umbrella-hair-grass"
            }
          ]
        },
        {
          "id": 226,
          "name": "Pine Needle (Hydrotriche)",
          "scientific": "Hydrotriche hottoniiflora",
          "difficulty": "Moderate",
          "about": "Bright green, needle-like leaves in dense whorls give the stems a soft, pine-like look. It works as a fine-textured background group and can flower at the surface. It prefers soft, slightly acidic water, a rich substrate and CO2, and it drops its needles quickly when conditions change or nutrients run low.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "20 to 40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hydrotriche-hottoniiflora-4f7a025961636.jpg",
              "caption": "Submerged stems in an aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hydrotriche-hottoniiflora"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hydrotriche-hottoniiflora-51447e53e05fa.jpg",
              "caption": "Bushy clump in an aquascape",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hydrotriche-hottoniiflora"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hydrotriche-hottoniiflora-4f7a0259e05ef.jpg",
              "caption": "Flower at the water surface of an aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hydrotriche-hottoniiflora"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0854/0866/products/Hydrotriche-Hottoniiflora.jpg?v=1760445246",
              "caption": "Stems against a black background",
              "credit": "Aquaristic Online",
              "creditUrl": "https://www.aquaristiconline.com.au/collections/plant-background/products/hydrotriche-hottoniiflora-pine-needle"
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/pine-needle-hydrotriche-hottoniiflora/",
              "unit": "bunch",
              "price": 895,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/hydrotriche-hottoniiflora-pine-needle",
              "unit": "each",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/pine-needle-hydrotriche-hottoniiflora/"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/hydrotriche-hottoniiflora-pine-needle"
            }
          ]
        },
        {
          "id": 261,
          "name": "Rotala macrandra 'Mini Type 2'",
          "scientific": "Rotala macrandra 'Mini Type 2'",
          "difficulty": "Demanding",
          "about": "A compact form of Rotala macrandra with small, wavy leaves on short internodes that turn orange to pink under strong light. It suits a small group in the midground or a low background. It needs high light, CO2 and steady nutrients; remove any shoots that revert to the larger wild-type leaves, and take cuttings only from small-leaved stems.",
          "conditions": [
            [
              "Light",
              "High"
            ],
            [
              "CO2",
              "Required"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/SOS6-67.jpg?v=1771254249&width=1200",
              "caption": "Submerged in an aquascape",
              "credit": "schoolofscape.com.au",
              "creditUrl": "https://schoolofscape.com.au/products/rotala-macrandra-type-2"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/SOS6-68.jpg?v=1771254249&width=1200",
              "caption": "Bushy group submerged in an aquascape",
              "credit": "schoolofscape.com.au",
              "creditUrl": "https://schoolofscape.com.au/products/rotala-macrandra-type-2"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/rotala-macrandra-mini-type-2-52d8e2c71ed20.jpg",
              "caption": "Submerged stem, pearling",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/rotala-macrandra-mini-type-2"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/rotala-macrandra-mini-type-2-4f7a032267b66.jpg",
              "caption": "Stems on their own, dark background",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/rotala-macrandra-mini-type-2"
            }
          ],
          "offers": [
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/rotala-macrandra-type-2",
              "unit": "3-5 stems",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/rotala-macrandra-type-2"
            }
          ]
        }
      ]
    },
    {
      "id": "wood",
      "name": "Attach to wood",
      "intro": "Rhizome plants tied or glued to wood and rock rather than planted in the substrate.",
      "plants": [
        {
          "id": 28,
          "name": "Anubias nana 'Petite'",
          "scientific": "Anubias barteri var. nana 'Petite'",
          "difficulty": "Easy",
          "about": "A miniature Anubias with small, dark, round leaves. Tie or glue the rhizome to wood and keep it out of the substrate. Under a strong light, place it in shade under branches to keep algae off the leaves.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "2 to 5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/anubias-barteri-var-nana-petite-bonsai-4f7a011dc913e.jpg",
              "caption": "Anubias barteri var. nana 'Petite', submersed",
              "credit": "© Tony Gomez (2004)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/anubias-barteri-var-nana-petite-bonsai"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/anubias-barteri-var-nana-petite-bonsai-4f7a011e72190.jpg",
              "caption": "Anubias barteri var. nana 'Petite', submersed",
              "credit": "© Christian (Freibel) (2011)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/anubias-barteri-var-nana-petite-bonsai"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/anubias-barteri-var-nana-petite-bonsai-51cbdd44631b3.jpg",
              "caption": "Anubias nana 'Petite' growing detail",
              "credit": "© Nunduun",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/anubias-barteri-var-nana-petite-bonsai"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/101H%20CLP/2.JPG&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Anubiasbarteri'Petite'(101HCLP)/30576"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Aquarium Industries: tissue culture range",
              "url": "https://www.aquariumindustries.com.au/product-category/freshwater-plants/tissue_culture_plants/"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Anubiasbarteri'Petite'(101HCLP)/30576"
            }
          ]
        },
        {
          "id": 29,
          "name": "Bucephalandra",
          "scientific": "Bucephalandra spp.",
          "difficulty": "Easy",
          "about": "Small rheophytes from Borneo with a huge range of leaf shapes and colours, often blue green or iridescent. Importing them into Australia is illegal, so buy locally grown stock. Like Anubias, shaded spots help avoid algae.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "3 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/bucephalandra-sp-kedagang-51641a2173b78.jpg",
              "caption": "Bucephalandra sp. ''Kedagang'', submerged",
              "credit": "© Marcel Dykierek",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/bucephalandra-sp-kedagang"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/63l-glasgarten-51507d5bd9053.jpg",
              "caption": "Aquascape: 63l glasgarten (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/63l-glasgarten"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/bucephalandra-sp-kedagang-54b956568882a.jpg",
              "caption": "Bucephalandra growing detail",
              "credit": "© *A44",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/bucephalandra-sp-kedagang"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/139B%20CLP/3.PNG&crop=resize&class=product",
              "caption": "Original reference photo. Representative Bucephalandra 'Kedagang'; the listing covers multiple species.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Bucephalandradiabolica'Kedagang'(139BCLP)/31144"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/rare-bucephalandra-brownie-tissue-culture",
              "unit": "Tissue culture, Brownie 'Purple'",
              "price": 7995,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Still Life Aquatics: Bucephalandra (grown in Australia)",
              "url": "https://stilllifeaquatics.com.au/collections/bucephalandra"
            },
            {
              "label": "Duckaroo: Bucephalandra guide",
              "url": "https://duckaroo.com.au/blogs/news/aquarium-guides-tips"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Bucephalandradiabolica'Kedagang'(139BCLP)/31144"
            }
          ]
        },
        {
          "id": 30,
          "name": "Java fern 'Needle Leaf'",
          "scientific": "Microsorum pteropus 'Needle Leaf'",
          "difficulty": "Easy",
          "about": "A Java fern with very narrow, almost grass-like fronds well under 1 cm wide that grow in dense, upright clusters. It gives a fine texture on wood or rock and is as hardy as standard Java fern. Tie or glue the rhizome to hardscape rather than burying it, and expect new plantlets to form on older fronds.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "15 to 25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/microsorum-pteropus-needle-leaf-53445540ca517.jpg",
              "caption": "Microsorum pteropus ''Needle leaf'' , submerged",
              "credit": "© Heiko Muth (2007)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/microsorum-pteropus-needle-leaf"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/anyplace-anytime-5150668198d06.jpg",
              "caption": "Aquascape: anyplace anytime (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/anyplace-anytime"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/microsorum-pteropus-needle-leaf-5344550b56342.jpg",
              "caption": "Microsorum pteropus ''Needle leaf'' , submerged",
              "credit": "© Heiko Muth (2007)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/microsorum-pteropus-needle-leaf"
            },
            {
              "src": "https://www.aquarzon.com/310-large_default/needle-leaf-java-fern-microsorum-pteropus-sp-needle-.jpg",
              "caption": "Original reference photo.",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/ferns/150-needle-leaf-java-fern-microsorum-pteropus-sp-needle-.html"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/ferns/150-needle-leaf-java-fern-microsorum-pteropus-sp-needle-.html",
              "unit": "5 to 8 leaves",
              "price": 1490,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: Needle Leaf Java fern",
              "url": "https://www.aquarzon.com/ferns/150-needle-leaf-java-fern-microsorum-pteropus-sp-needle-.html"
            },
            {
              "label": "Photo source: aquarzon.com",
              "url": "https://www.aquarzon.com/ferns/150-needle-leaf-java-fern-microsorum-pteropus-sp-needle-.html"
            }
          ]
        },
        {
          "id": 32,
          "name": "Hygrophila pinnatifida",
          "scientific": "Hygrophila pinnatifida",
          "difficulty": "Moderate",
          "about": "An Indian Hygrophila with deeply lobed leaves, green to brownish red on top and wine red underneath. It can be tied to wood or rock, where it sends runners along the surface, or planted in the substrate. Strong light keeps it low and colourful.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hygrophila-pinnatifida-4f7a034dade36.jpg",
              "caption": "Hygrophila pinnatifida, submerged",
              "credit": "© Tropica",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hygrophila-pinnatifida"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/green-breath-52374da192539.jpg",
              "caption": "Aquascape: green breath (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/green-breath"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hygrophila-pinnatifida-514cc371b56c4.jpg",
              "caption": "Hygrophila pinnatifida - submerged",
              "credit": "© Thomas Rudolph (2010)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hygrophila-pinnatifida"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/051A%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Hygrophilapinnatifida(051ATC)/19228"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/hygrophila-pinnatifida-tissue-culture",
              "unit": "Tissue culture cup",
              "price": 2195,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: Hygrophila pinnatifida tissue culture",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/hygrophila-pinnatifida-tissue-culture"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Hygrophilapinnatifida(051ATC)/19228"
            }
          ]
        },
        {
          "id": 33,
          "name": "Subwassertang",
          "scientific": "Lomariopsis lineata",
          "difficulty": "Easy",
          "about": "Small, lacy, dark green fronds grow as flat, branching clumps. It is the juvenile form of a fern and stays that way underwater. It wedges into crevices and holds on with little help, so it works as a filler on wood and rock where moss would look too fine. It is very tolerant and grows slowly, so clumps rarely need trimming.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "3 to 8 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/lomariopsis-cf-lineata-4f7a026820c61.jpg",
              "caption": "Lomariopsis cf. lineata",
              "credit": "Loh Kwek Leong (2006)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/lomariopsis-cf-lineata"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/olli-seins-52513527462b2.jpg",
              "caption": "Aquascape: olli seins (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/olli-seins"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/lomariopsis-cf-lineata-4f7a0268a0f37.jpg",
              "caption": "Lomariopsis cf. lineata",
              "credit": "Loh Kwek Leong (2006)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/lomariopsis-cf-lineata"
            },
            {
              "src": "https://www.aquarzon.com/1175-large_default/subwassertang.jpg",
              "caption": "Original reference photo.",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/moss/334-subwassertang.html"
            }
          ],
          "offers": [
            {
              "shop": "Sydney Aquascapes",
              "url": "https://sydney-aquascapes.com.au/collections/moss",
              "unit": "Portion",
              "price": 2000,
              "was": 2100,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/moss/334-subwassertang.html",
              "unit": "Portion",
              "price": 990,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product-category/live-plants/moss/",
              "unit": "Portion",
              "price": 1495,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: aquarium moss range",
              "url": "https://aquafy.com.au/collections/aquarium-moss"
            },
            {
              "label": "Roxy Aquarium: moss range",
              "url": "https://roxyaquarium.com.au/product-category/live-plants/moss/"
            },
            {
              "label": "Sydney Aquascapes: moss range",
              "url": "https://sydney-aquascapes.com.au/collections/moss"
            },
            {
              "label": "Photo source: aquarzon.com",
              "url": "https://www.aquarzon.com/moss/334-subwassertang.html"
            }
          ]
        },
        {
          "id": 59,
          "name": "Anubias 'Paco'",
          "scientific": "Anubias barteri 'Paco'",
          "difficulty": "Easy",
          "about": "A compact Anubias barteri form with broad, glossy, dark green leaves that are often slightly wavy. Like other Anubias it is tied or glued to wood or rock with the rhizome kept clear of the substrate. It grows slowly and tolerates low light, but strong light lets spot algae settle on the long-lived leaves.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0293/2506/6375/files/scapeshop-driftwood-creation-anubias-paco-on-medium-driftwood-creation-1226352383.jpg?v=1772883488&width=1200",
              "caption": "Mounted on driftwood (out of water)",
              "credit": "scapeshop.com.au",
              "creditUrl": "https://scapeshop.com.au/products/anubias-paco-driftwood-creation"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0293/2506/6375/products/pisces-enterprises-5cm-pot-anubias-paco-5cm-pot-28388560633991.jpg?v=1628245696&width=1200",
              "caption": "In a 5 cm pot",
              "credit": "scapeshop.com.au",
              "creditUrl": "https://scapeshop.com.au/products/anubias-paco-5cm-pot"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0082/5091/6926/files/anubias-paco-plants-moss-114.webp?v=1746761415",
              "caption": "Product photo",
              "credit": "abquatics.shop",
              "creditUrl": "https://abquatics.shop/products/anubias-paco"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/anubias-paco_turbo.webp?v=1763788743",
              "caption": "Bare-root product photo",
              "credit": "microaquaticshop.com.au",
              "creditUrl": "https://microaquaticshop.com.au/products/anubias-paco"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/anubias-paco",
              "unit": "plant",
              "price": 2495,
              "was": 2995,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/anubias-paco",
              "unit": "plant",
              "price": 2495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/anubias-paco",
              "unit": "plant",
              "price": 2995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/anubias-paco"
            },
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/anubias-paco"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/anubias-paco"
            }
          ]
        },
        {
          "id": 60,
          "name": "Anubias 'Lucy'",
          "scientific": "Anubias barteri 'Lucy'",
          "difficulty": "Easy",
          "about": "A compact Anubias barteri form with dark, glossy, slightly wavy leaves that build a dense, rounded plant. It suits shaded spots on wood and rock and is tough enough to resist most plant-nibbling fish. Keep the rhizome above the substrate and give gentle flow, as strong light encourages algae on the slow leaves.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "10 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0293/2506/6375/files/scapeshop-driftwood-creation-anubias-lucy-on-medium-driftwood-creation-1172855089.jpg?v=1749682144&width=1200",
              "caption": "Mounted on driftwood (out of water)",
              "credit": "scapeshop.com.au",
              "creditUrl": "https://scapeshop.com.au/products/anubias-lucy-on-medium-driftwood"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0293/2506/6375/products/pisces-enterprises-5cm-pot-anubias-lucy-5cm-pot-28364272992391.jpg?v=1628043190&width=1200",
              "caption": "In a 5 cm pot",
              "credit": "scapeshop.com.au",
              "creditUrl": "https://scapeshop.com.au/products/anubias-lucy-5cm-pot"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0082/5091/6926/files/anubias-lucy-flower-137.webp?v=1746760291",
              "caption": "Product photo with flower",
              "credit": "abquatics.shop",
              "creditUrl": "https://abquatics.shop/products/anubias-lucy"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/anubias-lucy_turbo.webp?v=1763788736",
              "caption": "Bare-root product photo",
              "credit": "microaquaticshop.com.au",
              "creditUrl": "https://microaquaticshop.com.au/products/anubias-lucy"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/anubias-lucy",
              "unit": "plant",
              "price": 3500,
              "was": 4500,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/anubias-lucy",
              "unit": "plant",
              "price": 2695,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/anubias-lucy"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/anubias-lucy"
            }
          ]
        },
        {
          "id": 61,
          "name": "Anubias 'Emerald Heart'",
          "scientific": "Anubias barteri var. nana 'Emerald Heart'",
          "difficulty": "Easy",
          "about": "A form of Anubias nana with bright green, heart-shaped leaves on a short rhizome. It is very hardy and grows in low light without CO2, which suits shaded spots on wood or rock. Tie or glue it in place and keep the rhizome uncovered, as a buried rhizome will rot.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn11.bigcommerce.com/s-os7lxdwh/images/stencil/original/products/185/656/anubias_emerald_heart__17154.1425824581.jpg",
              "caption": "Mounted on rock in an aquarium",
              "credit": "Z-Aquatics",
              "creditUrl": "https://www.z-aquatics.com.au/anubias-emerald-heart/"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0293/2506/6375/products/pisces-enterprises-bare-root-plant-anubias-emerald-heart-bare-root-large-28396987809927.jpg?v=1628326028&width=1200",
              "caption": "Planted in an aquarium",
              "credit": "scapeshop.com.au",
              "creditUrl": "https://scapeshop.com.au/products/anubias-emerald-heart-bare-root-large"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0293/2506/6375/products/pisces-enterprises-5cm-pot-anubias-emerald-heart-5cm-pot-28395678564487.jpg?v=1628335807&width=1200",
              "caption": "In a 5 cm pot",
              "credit": "scapeshop.com.au",
              "creditUrl": "https://scapeshop.com.au/products/anubias-emerald-heart-5cm-pot"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/anubias-emerald-heart-10-20cm_turbo.webp?v=1763788731",
              "caption": "Bare-root product photo",
              "credit": "microaquaticshop.com.au",
              "creditUrl": "https://microaquaticshop.com.au/products/anubias-emerald-heart-10-20cm"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/anubias-emerald-heart-10-20cm",
              "unit": "plant 10-20cm",
              "price": 3500,
              "was": 4500,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/anubias-emerald-heart-10-20cm",
              "unit": "plant",
              "price": 2895,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/anubias-emerald-heart/",
              "unit": "plant",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/anubias-emerald-heart-10-20cm"
            },
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/anubias-emerald-heart-10-20cm"
            },
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/anubias-emerald-heart/"
            }
          ]
        },
        {
          "id": 62,
          "name": "Anubias 'Isabelle'",
          "scientific": "Anubias sp. 'Isabelle'",
          "difficulty": "Easy",
          "about": "A small Anubias with rounded, dark green leaves on a short rhizome, suited to tight spots on wood and rock. It is grown like other dwarf Anubias: attached to hardscape, rhizome uncovered, in low to medium light. New leaves appear only every few weeks, so avoid strong light that lets algae build up.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "10 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0293/2506/6375/products/scapeshop-com-au-bare-root-plant-anubias-isabelle-bare-root-large-28388587470983.jpg?v=1628247850&width=1200",
              "caption": "Bare-root plant",
              "credit": "scapeshop.com.au",
              "creditUrl": "https://scapeshop.com.au/products/anubias-isabelle-bare-root"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0293/2506/6375/products/pisces-enterprises-5cm-pot-anubias-isabelle-5cm-pot-28387416309895.jpg?v=1628221570&width=1200",
              "caption": "In a 5 cm pot",
              "credit": "scapeshop.com.au",
              "creditUrl": "https://scapeshop.com.au/products/anubias-isabelle-5cm-pot"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0293/2506/6375/products/scapeshop-com-au-bare-root-plant-anubias-isabelle-bare-root-large-28285847109767.jpg?v=1748676802&width=1200",
              "caption": "Leaf close-up",
              "credit": "scapeshop.com.au",
              "creditUrl": "https://scapeshop.com.au/products/anubias-isabelle-bare-root"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/anubias-isabelle_turbo.webp?v=1763788746",
              "caption": "Potted product photo",
              "credit": "microaquaticshop.com.au",
              "creditUrl": "https://microaquaticshop.com.au/products/anubias-isabelle"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/anubias-isabelle",
              "unit": "plant",
              "price": 3900,
              "was": 4500,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/anubias-isabelle"
            }
          ]
        },
        {
          "id": 64,
          "name": "Anubias 'Pangolino'",
          "scientific": "Anubias barteri var. nana 'Pangolino'",
          "difficulty": "Easy",
          "about": "One of the smallest Anubias, with dark green, spoon to lance-shaped leaves about 0.5 to 1.5 cm long that overlap like scales on a short, thick rhizome. It suits small details on wood and rock, or crevices between stones. Growth is very slow, so give it low to medium light and good flow to keep algae off the leaves.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "3 to 5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquarzon.com/168-large_default/anubias-pangolino.jpg",
              "caption": "Growing on moss in an aquarium",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/anubias/92-anubias-pangolino.html"
            },
            {
              "src": "https://www.aquarzon.com/166-large_default/anubias-pangolino.jpg",
              "caption": "Submerged on rock in an aquarium",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/anubias/92-anubias-pangolino.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/anubias-nana-pangolino-on-lava-stone-1243226495.jpg?v=1780963572",
              "caption": "On lava stone in an aquarium",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/anubias-nana-pangolino-on-lava-stone"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0596/3474/5437/products/PE1_2849Anubias_Pangolino_WM50.jpg?v=1678184380&width=1200",
              "caption": "Studio photo",
              "credit": "tankquility.com.au",
              "creditUrl": "https://tankquility.com.au/products/anubias-pangolino"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/anubias-pangolino",
              "unit": "plant",
              "price": 1895,
              "was": 2495,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/anubias/92-anubias-pangolino.html",
              "unit": "portion",
              "price": 2900,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Tankquility",
              "url": "https://tankquility.com.au/products/anubias-pangolino",
              "unit": "portion",
              "price": 2495,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/anubias-pangolino"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/anubias/92-anubias-pangolino.html"
            },
            {
              "label": "Tankquility: product page",
              "url": "https://tankquility.com.au/products/anubias-pangolino"
            }
          ]
        },
        {
          "id": 65,
          "name": "Anubias 'Pinto'",
          "scientific": "Anubias barteri var. nana 'Pinto'",
          "difficulty": "Easy",
          "about": "A variegated Anubias nana with new leaves marbled in white and green, with no two leaves alike. It is grown on wood or rock like other Anubias, with the rhizome uncovered. It is slower than plain Anubias nana because the white areas lack chlorophyll, and it needs moderate light to keep its pattern; too much light invites algae.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "10 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquarzon.com/3904-large_default/anubias-pinto-sale.jpg",
              "caption": "Submerged in an aquarium",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/anubias/776-anubias-pinto-sale.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/anubias-nana-pinto-1259903600.jpg?v=1790273168",
              "caption": "In an aquascape, in front of hairgrass",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/anubias-nana-pinto"
            },
            {
              "src": "https://www.aquarzon.com/4630-large_default/anubias-pinto-sale.jpg",
              "caption": "Submerged clump in an aquarium",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/anubias/776-anubias-pinto-sale.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0596/3474/5437/products/PE1_3064Anubias_Pinto_WM50.jpg?v=1678166245&width=1200",
              "caption": "Studio photo",
              "credit": "tankquility.com.au",
              "creditUrl": "https://tankquility.com.au/products/anubias-pinto"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/anubias-pinto",
              "unit": "plant",
              "price": 3495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/anubias/776-anubias-pinto-sale.html",
              "unit": "portion",
              "price": 1900,
              "was": 4900,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/anubias-nana-pinto-on-rock/",
              "unit": "on rock",
              "price": 3000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Tankquility",
              "url": "https://tankquility.com.au/products/anubias-pinto",
              "unit": "plant",
              "price": 4995,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/anubias-pinto"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/anubias/776-anubias-pinto-sale.html"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/anubias-nana-pinto-on-rock/"
            },
            {
              "label": "Tankquility: product page",
              "url": "https://tankquility.com.au/products/anubias-pinto"
            }
          ]
        },
        {
          "id": 66,
          "name": "Anubias nana 'Bonsai'",
          "scientific": "Anubias barteri var. nana 'Bonsai'",
          "difficulty": "Easy",
          "about": "A very small form of Anubias nana with teardrop-shaped, dark green leaves about 1 to 2 cm long held close to the rhizome in tight clusters. It suits small gaps in hardscape and nano layouts. Attach it to wood or rock, keep the rhizome uncovered and avoid strong light, which lets algae settle on the slow leaves.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/anubias-nana-bonsai-1249543667.jpg?v=1784340367",
              "caption": "On driftwood in an aquascape",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/anubias-nana-bonsai"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/anubias-barteri-var-nana-petite-bonsai-524e6156a4633.jpg",
              "caption": "Submerged clump among moss",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/anubias-barteri-var-nana-petite-bonsai"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/anubias-barteri-var-nana-petite-bonsai-4f7a011e72190.jpg",
              "caption": "Submerged on driftwood",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/anubias-barteri-var-nana-petite-bonsai"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/products/anubias-nana-bonsai.jpg?v=1730197239",
              "caption": "Product photo",
              "credit": "aquafy.com.au",
              "creditUrl": "https://aquafy.com.au/products/anubias-nana-bonsai"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/anubias-nana-bonsai",
              "unit": "plant",
              "price": 1695,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/anubias-nana-bonsai"
            }
          ]
        },
        {
          "id": 67,
          "name": "Anubias minima 'Dragon Claw'",
          "scientific": "Anubias minima",
          "difficulty": "Easy",
          "about": "A small Anubias with elongated, slightly crinkled dark green leaves that curve like claws. It is usually listed as a form derived from Anubias barteri var. glabra. It grows in low to medium light without CO2 and is attached to wood or tucked into gaps between stones, where its roots grip on their own over time.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0802/8835/0528/files/Anubias_minima_dragons_claw.jpg?v=1781381906",
              "caption": "Mounted on rock",
              "credit": "liverpoolcreekaquariums.com.au",
              "creditUrl": "https://www.liverpoolcreekaquariums.com.au/products/anubias-minima-dragon-claw"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0608/5771/2849/files/anubias-minima-dragon-claw-8166632.png?v=1784382128&width=1200",
              "caption": "Clump on dark background",
              "credit": "nanotanksaustralia.com.au",
              "creditUrl": "https://nanotanksaustralia.com.au/products/anubias-minima-dragon-claw"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0082/5091/6926/files/anubias-minima-5-10-leaves-plants-moss-900.webp?v=1772520969",
              "caption": "Clump held in hand",
              "credit": "abquatics.shop",
              "creditUrl": "https://abquatics.shop/products/anubias-minima-4-6-leaves"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/anubias-minima-31235046342856.jpg?v=1633456308",
              "caption": "Potted studio photo",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/anubias-minima"
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/anubias-minima-dragon-claw",
              "unit": "portion",
              "price": 1995,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/anubias-minima-dragon-claw",
              "unit": "per plant",
              "price": 4495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/anubias-minima-4-6-leaves",
              "unit": "plant",
              "price": 2995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/anubias-minima-dragon-claw"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/anubias-minima-dragon-claw"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/anubias-minima-4-6-leaves"
            }
          ]
        },
        {
          "id": 68,
          "name": "Anubias 'Gold'",
          "scientific": "Anubias barteri var. nana 'Gold'",
          "difficulty": "Easy",
          "about": "An Anubias nana form whose new leaves open bright lime-yellow and mature to a warmer gold-green. It makes a light accent among darker plants. It is as hardy as standard Anubias nana. Moderate light keeps the colour bright, since weak light darkens the leaves, but strong light brings algae, so a gently lit spot with some flow suits it best.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "10 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/66152A44-EBEF-40B2-8838-DB475A45D9E8_700x700_efb22879-0b0e-484e-8a6c-8545b6e8bd38.webp?v=1779378254",
              "caption": "Submerged in an aquarium",
              "credit": "schoolofscape.com.au",
              "creditUrl": "https://schoolofscape.com.au/products/anubias-gold"
            },
            {
              "src": "https://www.aquarzon.com/150-large_default/anubias-gold-mini.jpg",
              "caption": "Submerged on rock in an aquarium",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/anubias/91-2107-anubias-gold-mini.html"
            },
            {
              "src": "https://www.aquarzon.com/153-large_default/anubias-gold-mini.jpg",
              "caption": "Submerged among moss in an aquarium",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/anubias/91-2107-anubias-gold-mini.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/rn-image_picker_lib_temp_2bf59ce6-c0d1-407e-909f-8c2d8b32ef5e.png?v=1770005592&width=1200",
              "caption": "Studio photo",
              "credit": "schoolofscape.com.au",
              "creditUrl": "https://schoolofscape.com.au/products/anubias-gold"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/anubias/91-2107-anubias-gold-mini.html",
              "unit": "5-10 leaves",
              "price": 950,
              "was": 1750,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/products/anubias-gold",
              "unit": "plant",
              "price": 3500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/anubias/91-2107-anubias-gold-mini.html"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/products/anubias-gold"
            }
          ]
        },
        {
          "id": 69,
          "name": "Anubias 'Jade'",
          "scientific": "Anubias barteri 'Jade'",
          "difficulty": "Easy",
          "about": "Compact nana-type Anubias with small, rounded leaves in mixed shades of green, often marked with fine veins, streaks or spots like jade. It stays low and slowly forms a tight clump on wood or rock. Leave the rhizome uncovered, and give it some shade or flow so slow-growing leaves do not collect algae.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "3 to 8 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/5bfdaa2a-93f3-4f2c-b4fa-2ec1a7a25474.jpg?v=1778652576&width=1200",
              "caption": "Submerged on hardscape in a planted aquarium",
              "credit": "School of Scape",
              "creditUrl": "https://schoolofscape.com.au/products/anubias-jade"
            },
            {
              "src": "https://www.aquarzon.com/2803-large_default/anubias-jade.jpg",
              "caption": "Submersed-grown portion, top view",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/anubias/652-anubias-jade.html"
            },
            {
              "src": "https://www.aquarzon.com/4510-large_default/anubias-jade-clump.jpg",
              "caption": "Submersed-grown clump",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/anubias/823-anubias-jade-clump.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/ProductDetail.jpg?v=1781515869&width=1200",
              "caption": "Product photo on white background",
              "credit": "School of Scape",
              "creditUrl": "https://schoolofscape.com.au/products/anubias-jade"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/anubias/652-anubias-jade.html",
              "unit": "5 leaves",
              "price": 1900,
              "was": 3500,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/anubias-jade",
              "unit": "portion",
              "price": 6000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/anubias/652-anubias-jade.html"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/anubias-jade"
            }
          ]
        },
        {
          "id": 70,
          "name": "Anubias 'Coin'",
          "scientific": "Anubias barteri 'Coin'",
          "difficulty": "Easy",
          "about": "Anubias with nearly circular, deep green leaves about 4 to 6 cm across on short stalks. It branches into a neat, rounded clump and suits wood, rock and gaps in the hardscape. Tie or glue the rhizome in place rather than burying it, which causes rot. Shade or gentle flow helps keep algae off the slow leaves.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "5 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/101F/5.png&crop=resize&class=product",
              "caption": "Growing on stone in a planted aquarium",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Anubiasbarteri%E2%80%99CoinLeaf%E2%80%99(101F)/29447"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/sansibar-of-asia-5a1837780bef5.jpg",
              "caption": "Aquascape: Sansibar of Asia (plant included in the aquascape’s plant list as A. barteri var. nana ‘Round Leaf’)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/sansibar-of-asia"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/wild-symphony-5e48266a0d8fd.jpg",
              "caption": "Aquascape: Wild Symphony (plant included in the aquascape’s plant list as A. barteri var. nana ‘Round Leaf’)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/wild-symphony"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/101F/2.png&crop=resize&class=product",
              "caption": "Tropica product photo, potted",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Anubiasbarteri%E2%80%99CoinLeaf%E2%80%99(101F)/29447"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/anubias/641-2109-anubias-coin.html",
              "unit": "4-5 leaves",
              "price": 1900,
              "was": 3500,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/anubias/641-2109-anubias-coin.html"
            }
          ]
        },
        {
          "id": 71,
          "name": "Anubias glabra Micro",
          "scientific": "Anubias barteri var. glabra",
          "difficulty": "Easy",
          "about": "Small form of Anubias glabra with smooth, narrow, lance-shaped dark green leaves on a creeping rhizome. Its spreading growth fills gaps along wood and rock and adds a finer texture than broad-leaved Anubias. Keep the rhizome above the substrate and dose some nutrients for darker, healthier leaves.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "5 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquarzon.com/4174-large_default/anubias-glabra.jpg",
              "caption": "Submersed-grown clump held in hand",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/anubias/798-2035-anubias-glabra.html"
            },
            {
              "src": "https://www.aquarzon.com/4166-large_default/anubias-glabra.jpg",
              "caption": "Submersed-grown portion showing the narrow, wavy leaves",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/anubias/798-2035-anubias-glabra.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1430/7150/products/anubias-minima-887843.png?v=1631463663&width=1200",
              "caption": "Potted plant on white background (sold as Anubias minima)",
              "credit": "Aquarium Plants Factory",
              "creditUrl": "https://www.aquariumplantsfactory.com/products/anubias-barteri-glabra-minima"
            },
            {
              "src": "https://shop.glassaqua.com/cdn/shop/products/AnubiasMinima-1.jpg?v=1631199579&width=1200",
              "caption": "Potted plant, studio photo (sold as Anubias minima)",
              "credit": "Glass Aqua",
              "creditUrl": "https://shop.glassaqua.com/products/anubias-minima"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/anubias/798-2035-anubias-glabra.html",
              "unit": "portion",
              "price": 750,
              "was": 1500,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/anubias/798-2035-anubias-glabra.html"
            }
          ]
        },
        {
          "id": 72,
          "name": "Anubias congensis Mini",
          "scientific": "Anubias congensis",
          "difficulty": "Easy",
          "about": "Compact Anubias with narrow, lance-shaped green leaves held more upright than nana types. It suits the midground, tied to wood or rock or planted with the rhizome left above the substrate, since burying it causes rot. It tolerates a wide range of water and grows slowly under low to moderate light.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn11.bigcommerce.com/s-m39bqdjce8/images/stencil/1280x1280/products/6721/10835/anubias.congensis.mini__81844.1768340284.jpg",
              "caption": "Submerged in an aquarium (potted, in a store display tank)",
              "credit": "Fitz Fish Ponds",
              "creditUrl": "https://fitzfishponds.com/anubias-congensis-mini/"
            },
            {
              "src": "https://www.aquarzon.com/4681-large_default/anubias-congensis-mini.jpg",
              "caption": "Submersed-grown portion held in hand",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/anubias/844-anubias-congensis-mini.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1430/7150/products/anubias-congensis-mini-811008.jpg?v=1625013960&width=1200",
              "caption": "Potted plant on white background",
              "credit": "Aquarium Plants Factory",
              "creditUrl": "https://www.aquariumplantsfactory.com/products/anubias-congensis-mini"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/anubias-congensis-mini-31235029565640.jpg?v=1633455945&width=1200",
              "caption": "Product photo, potted",
              "credit": "Buce Plant",
              "creditUrl": "https://buceplant.com/products/anubias-congensis-mini"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/anubias/844-anubias-congensis-mini.html",
              "unit": "portion",
              "price": 1900,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/anubias/844-anubias-congensis-mini.html"
            }
          ]
        },
        {
          "id": 75,
          "name": "Anubias 'Panda'",
          "scientific": "Anubias barteri 'Panda'",
          "difficulty": "Moderate",
          "about": "Anubias nana selection with green leaves splashed and speckled in creamy white, a less even pattern than 'Pinto' or 'White'. Growth is very slow, even for an Anubias. Attach it to wood or rock with the rhizome exposed. It needs somewhat more light than green forms to keep the variegation on new leaves.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquarzon.com/272-large_default/anubias-panda.jpg",
              "caption": "Growing submerged in a planted aquarium",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/anubias/98-anubias-panda.html"
            },
            {
              "src": "https://www.aquarzon.com/269-large_default/anubias-panda.jpg",
              "caption": "Submerged in an aquarium, close-up of the variegated leaves",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/anubias/98-anubias-panda.html"
            },
            {
              "src": "https://www.aquarzon.com/270-large_default/anubias-panda.jpg",
              "caption": "Submerged leaf close-up",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/anubias/98-anubias-panda.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0596/3474/5437/files/Pic1Anubias_Panda.jpg?v=1707804061&width=1200",
              "caption": "Studio photo on black background (photo: Peter Eggler)",
              "credit": "Tankquility",
              "creditUrl": "https://tankquility.com.au/products/anubias-panda"
            }
          ],
          "offers": [
            {
              "shop": "Tankquility",
              "url": "https://tankquility.com.au/products/anubias-panda",
              "unit": "plant",
              "price": 4495,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Tankquility: product page",
              "url": "https://tankquility.com.au/products/anubias-panda"
            }
          ]
        },
        {
          "id": 76,
          "name": "Spoon Leaf Java Fern",
          "scientific": "Microsorum pteropus 'Spoon Leaf'",
          "difficulty": "Easy",
          "about": "Java fern with broad, rounded fronds that curve slightly like the bowl of a spoon. It forms a dense clump on wood or rock and suits the midground or hardscape edges. Tie the rhizome on rather than burying it. It grows slowly and does well in low light without CO2.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/spoon-leaf-fern-4_turbo.webp?v=1763789012",
              "caption": "Grown on wood in a planted aquarium",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/spoon-leaf-fern"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/spoon-leaf-fern-3_turbo.webp?v=1763789012",
              "caption": "Submerged in an aquascape",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/spoon-leaf-fern"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/spoon-leaf-fern-2_turbo.webp?v=1763789010",
              "caption": "Submerged close-up of the spoon-shaped leaves",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/spoon-leaf-fern"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/spoon-leaf-fern-1_turbo.webp?v=1763789010",
              "caption": "A single portion held in hand",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/spoon-leaf-fern"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/spoon-leaf-fern",
              "unit": "plant",
              "price": 3500,
              "was": 4500,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/spoon-leaf-fern"
            }
          ]
        },
        {
          "id": 77,
          "name": "Java Fern 'Trident'",
          "scientific": "Microsorum pteropus 'Trident'",
          "difficulty": "Easy",
          "about": "Narrow-leaved form of java fern whose fronds usually split into three or more slender lobes, which gives a finer, lacier look than the standard plant. It forms a bushy clump on wood or rock in the midground. Keep the rhizome uncovered. It is undemanding and grows slowly in low light.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "15 to 25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/microsorum-pteropus-trident-513e5216932c8.jpg",
              "caption": "Submerged in an aquascape",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/microsorum-pteropus-trident"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/microsorum-pteropus-trident-52d8e2dd1d945.jpg",
              "caption": "Submerged clump in a planted aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/microsorum-pteropus-trident"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/products/micro-aquatic-shop-aquarium-plants-microsorum-pteropus-trident-java-fern-28740621598790.png?v=1763788161",
              "caption": "Growing submerged beside a stone",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/trident-fern"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/rn-image_picker_lib_temp_b8e88c59-157a-4779-a9ee-859224fcc52c.png?v=1768876010&width=1200",
              "caption": "Product photo on white background",
              "credit": "School of Scape",
              "creditUrl": "https://schoolofscape.com.au/products/microsorum-pteropus-trident-premium-java-fern-variant"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/trident-fern",
              "unit": "plant",
              "price": 1800,
              "was": 3500,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/ferns/152-uncommon-trident-java-fern-microsorum-pteropus-sp-trident-.html",
              "unit": "portion",
              "price": 1490,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/trident-java-fern",
              "unit": "mounted on hardscape piece",
              "price": 4000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/products/microsorum-pteropus-trident-premium-java-fern-variant",
              "unit": "plant (sale)",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/trident-fern"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/ferns/152-uncommon-trident-java-fern-microsorum-pteropus-sp-trident-.html"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/trident-java-fern"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/products/microsorum-pteropus-trident-premium-java-fern-variant"
            }
          ]
        },
        {
          "id": 78,
          "name": "Java Fern 'Mini Coral'",
          "scientific": "Microsorum sp. 'Mini Coral'",
          "difficulty": "Easy",
          "about": "Small java fern with short, forked fronds that resemble a compact 'Trident' with more defined lobes, so the plant has a coral-like outline. The small leaves help create a sense of scale on wood or between stones. Attach it to hardscape and keep the rhizome exposed. It prefers shaded spots and grows slowly.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://aquapaso.de/wp-content/uploads/2018/12/Mircosorum_Mini_Coral_1_900x900.jpg",
              "caption": "Submerged in a planted aquarium",
              "credit": "Aqua-PaSo",
              "creditUrl": "https://aquapaso.de/microsorum-mini-coral/"
            },
            {
              "src": "https://aquapaso.de/wp-content/uploads/2018/12/Mircosorum_Mini_Coral_2_900x900.jpg",
              "caption": "Submerged close-up of the forked leaves",
              "credit": "Aqua-PaSo",
              "creditUrl": "https://aquapaso.de/microsorum-mini-coral/"
            },
            {
              "src": "https://aquapaso.de/wp-content/uploads/2018/12/Mircosorum_Mini_Coral_3_900x900.jpg",
              "caption": "Growing on hardscape in an aquascape",
              "credit": "Aqua-PaSo",
              "creditUrl": "https://aquapaso.de/microsorum-mini-coral/"
            },
            {
              "src": "https://aquapaso.de/wp-content/uploads/2018/12/Mircosorum_Mini_Coral_Abgabe_1_900x900.jpg",
              "caption": "A single portion on a white background",
              "credit": "Aqua-PaSo",
              "creditUrl": "https://aquapaso.de/microsorum-mini-coral/"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/mini-coral",
              "unit": "plant",
              "price": 3500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/mini-coral"
            }
          ]
        },
        {
          "id": 83,
          "name": "Java Fern 'Micro'",
          "scientific": "Microsorum pteropus 'Micro'",
          "difficulty": "Easy",
          "about": "The smallest java fern in the hobby, with narrow leaves about 2 to 6 cm long forming a tiny, tight clump. It suits fine detail work on small stones and branches. Tie it to hardscape with the rhizome uncovered. Some plants sold under this name are young standard or 'Mini' ferns that grow larger.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "3 to 6 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquarzon.com/338-large_default/rare-true-micro-java-fern-microsorum-pteropus-sp-micro-.jpg",
              "caption": "Growing on rock in an aquascape",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/ferns/155-rare-true-micro-java-fern-microsorum-pteropus-sp-micro-.html"
            },
            {
              "src": "https://www.aquarzon.com/340-large_default/rare-true-micro-java-fern-microsorum-pteropus-sp-micro-.jpg",
              "caption": "Submerged on rock, with shrimp for scale",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/ferns/155-rare-true-micro-java-fern-microsorum-pteropus-sp-micro-.html"
            },
            {
              "src": "https://www.aquarzon.com/341-large_default/rare-true-micro-java-fern-microsorum-pteropus-sp-micro-.jpg",
              "caption": "Submerged in an aquascape",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/ferns/155-rare-true-micro-java-fern-microsorum-pteropus-sp-micro-.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0082/5091/6926/files/micro-java-fern-rare-50-cent-16feet-2-4-932.webp?v=1746765206",
              "caption": "A portion with a coin and tape measure for scale",
              "credit": "AB Quatics",
              "creditUrl": "https://abquatics.shop/products/micro-java-fern-rare"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/ferns/155-rare-true-micro-java-fern-microsorum-pteropus-sp-micro-.html",
              "unit": "portion",
              "price": 990,
              "was": 1500,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/micro-java-fern-rare",
              "unit": "plant",
              "price": 2495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/ferns/155-rare-true-micro-java-fern-microsorum-pteropus-sp-micro-.html"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/micro-java-fern-rare"
            }
          ]
        },
        {
          "id": 84,
          "name": "Java Fern 'Mini'",
          "scientific": "Microsorum pteropus 'Mini'",
          "difficulty": "Easy",
          "about": "Compact java fern with narrow, pointed green leaves, roughly twice the size of 'Micro' and much smaller than the standard plant. It forms a dense clump on wood or rock in the foreground or midground. Keep the rhizome above the substrate. It is undemanding and grows slowly in low to moderate light.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquarzon.com/1514-large_default/uncommon-mini-java-fern-microsorum-pteropus-sp-mini-.jpg",
              "caption": "Submersed-grown portion held in hand",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/ferns/156-uncommon-mini-java-fern-microsorum-pteropus-sp-mini-.html"
            },
            {
              "src": "https://www.aquarzon.com/1515-large_default/uncommon-mini-java-fern-microsorum-pteropus-sp-mini-.jpg",
              "caption": "Submersed-grown portion on rhizome",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/ferns/156-uncommon-mini-java-fern-microsorum-pteropus-sp-mini-.html"
            },
            {
              "src": "https://www.aquarzon.com/1516-large_default/uncommon-mini-java-fern-microsorum-pteropus-sp-mini-.jpg",
              "caption": "Close-up of the leaves",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/ferns/156-uncommon-mini-java-fern-microsorum-pteropus-sp-mini-.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0703/1003/5770/files/rn-image_picker_lib_temp_737ae69d-e97b-45f2-8d37-70ccbae9ca96.png?v=1768876731&width=1200",
              "caption": "Product photo on white background",
              "credit": "School of Scape",
              "creditUrl": "https://schoolofscape.com.au/products/microsorum-pteropus-mini-compact-java-fern-variant"
            }
          ],
          "offers": [
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/microsorum-pteropus-mini-compact-java-fern-variant",
              "unit": "portion",
              "price": 2500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/microsorum-pteropus-mini-compact-java-fern-variant"
            }
          ]
        },
        {
          "id": 86,
          "name": "Mini Bolbitis (Baby Leaf)",
          "scientific": "Bolbitis heteroclita 'Difformis'",
          "difficulty": "Moderate",
          "about": "Dwarf Bolbitis with small, finely divided, translucent green fronds on a thin creeping rhizome. It grows into a delicate, fern-like cover on wood or rock and adds fine texture. Remove any rock wool and attach the rhizome above the substrate. It grows slowly and does best with good flow and clean water.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/mini-bolbitis-on-driftwood-1221197601.jpg?v=1772728636",
              "caption": "Submerged on driftwood in a planted aquarium",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/bolbitis-heteroclita-difformis-on-wood"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/hiking-tour-52aaf06f1b9f4.jpg",
              "caption": "Aquascape: hiking tour (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/hiking-tour"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/alice-in-wonderland-51b63da0a2568.jpg",
              "caption": "Aquascape: alice in wonderland (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/alice-in-wonderland"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/bolbitis-heteroclita-difformis-50b68ced4ec56.jpg",
              "caption": "Potted plant on a white background",
              "credit": "Flowgrow plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/bolbitis-heteroclita-difformis"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/mini-bolbitis-baby-leaf-bolbitis-heteroclita-difformis",
              "unit": "plant",
              "price": 3500,
              "was": 4500,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/mini-bolbitis-baby-leaf-bolbitis-heteroclita-difformis"
            }
          ]
        },
        {
          "id": 89,
          "name": "Filmy Fern (Crepidomanes auriculatum)",
          "scientific": "Crepidomanes auriculatum",
          "difficulty": "Moderate",
          "about": "Tiny filmy fern with thin, translucent fronds on fine creeping rhizomes that slowly spread over wood and rock. Under water it grows very slowly and stays much smaller than when emersed. Keep it off the substrate and clear of mosses that can smother it. Soft water, flow and steady nutrients help.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "2 to 5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0082/5091/6926/files/crepidomanes-auriculatum-fern-249.webp?v=1746765320",
              "caption": "Growing submerged in a tank, seen from above",
              "credit": "abquatics.shop",
              "creditUrl": "https://abquatics.shop/collections/live-aquarium-plants/products/crepidomanes-auriculatum-fern"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0082/5091/6926/files/crepidomanes-auriculatum-fern-658.webp?v=1746765314",
              "caption": "Portion held over a tank where more of it grows submerged",
              "credit": "abquatics.shop",
              "creditUrl": "https://abquatics.shop/collections/live-aquarium-plants/products/crepidomanes-auriculatum-fern"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0082/5091/6926/files/crepidomanes-auriculatum-fern-217.webp?v=1746765309",
              "caption": "Submersed-grown portion held at the tank",
              "credit": "abquatics.shop",
              "creditUrl": "https://abquatics.shop/collections/live-aquarium-plants/products/crepidomanes-auriculatum-fern"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0608/5771/2849/files/crepidomanes-auriculatum-bare-root-5209052.jpg?v=1786977366&width=1200",
              "caption": "Bare-root portion on a black background",
              "credit": "nanotanksaustralia.com.au",
              "creditUrl": "https://nanotanksaustralia.com.au/products/crepidomanes-auriculatum"
            }
          ],
          "offers": [
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/crepidomanes-auriculatum",
              "unit": "bare root",
              "price": 5000,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/crepidomanes-auriculatum-fern",
              "unit": "plant",
              "price": 2995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/crepidomanes-auriculatum"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/crepidomanes-auriculatum-fern"
            }
          ]
        },
        {
          "id": 235,
          "name": "Bucephalandra 'Catherinae'",
          "scientific": "Bucephalandra sp. 'Catherinae'",
          "difficulty": "Easy",
          "about": "Bucephalandra with long, very narrow, dark green leaves with rippled edges that can show a blue-green sheen or reddish tints in stronger light. Its fine, wavy leaves add detail to hardscape. Attach the rhizome to wood or rock, never buried, and keep conditions stable to avoid melting.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/bucephalandra-catherinae-green-31004690743496.jpg?v=1631642987",
              "caption": "Submerged in a planted aquarium",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/catherinae-green-1"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/bucephalandra-catherinae-green-15632239873.jpg?v=1631642987&width=1200",
              "caption": "Growing among other Bucephalandra in an aquascape",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/catherinae-green-1"
            },
            {
              "src": "https://www.aquarzon.com/879-large_default/bucephalandra-catherinae-bucephalandra-sp-catherinae-.jpg",
              "caption": "Close-up of submerged leaves",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/bucephalandra/130-bucephalandra-catherinae-bucephalandra-sp-catherinae-.html"
            },
            {
              "src": "https://premiumbuces.com/wp-content/uploads/2019/08/bucephalandra-catherinae.jpg",
              "caption": "Product photo on a white background",
              "credit": "premiumbuces.com",
              "creditUrl": "https://premiumbuces.com/bucephalandra-catherinae/"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/bucephalandra/130-bucephalandra-catherinae-bucephalandra-sp-catherinae-.html",
              "unit": "approx 5-6 leaves",
              "price": 1900,
              "was": 2900,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/bucephalandra/130-bucephalandra-catherinae-bucephalandra-sp-catherinae-.html"
            }
          ]
        },
        {
          "id": 236,
          "name": "Bucephalandra 'Gorilla'",
          "scientific": "Bucephalandra sp. 'Gorilla'",
          "difficulty": "Easy",
          "about": "Bucephalandra with small to medium, narrow and wavy leaves. It looks mostly green under white light and shows more colour and sheen under RGB lighting. It forms a low clump on wood or rock with the rhizome left exposed. Growth is very slow, so place it where algae and faster plants will not crowd it.",
          "conditions": [
            [
              "Light",
              "Low"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "4 to 8 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquarzon.com/1081-large_default/rare-bucephalandra-gorilla-bucephalandra-sp-gorilla-.jpg",
              "caption": "Submerged in a planted aquarium",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/bucephalandra/138-rare-bucephalandra-gorilla-bucephalandra-sp-gorilla-.html"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/bucephalandra/138-rare-bucephalandra-gorilla-bucephalandra-sp-gorilla-.html",
              "unit": "approx 5 leaves",
              "price": 2900,
              "was": 3500,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/bucephalandra/138-rare-bucephalandra-gorilla-bucephalandra-sp-gorilla-.html"
            }
          ]
        },
        {
          "id": 237,
          "name": "Bucephalandra 'Dark Blue'",
          "scientific": "Bucephalandra sp. 'Dark Blue'",
          "difficulty": "Easy",
          "about": "Bucephalandra with long, narrow leaves in very dark green to near-black blue, with a metallic blue sheen under good light. New leaves often start green and darken as the plant settles. It forms a low clump on wood or rock with the rhizome exposed. Avoid sudden changes, which can cause melting.",
          "conditions": [
            [
              "Light",
              "Low"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquarzon.com/2286-large_default/bucephalandra-dark-blue.jpg",
              "caption": "Submersed-grown plant held up to show the leaves",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/bucephalandra/564-bucephalandra-dark-blue.html"
            },
            {
              "src": "https://www.aquarzon.com/2288-large_default/bucephalandra-dark-blue.jpg",
              "caption": "Submersed-grown plant, front view",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/bucephalandra/564-bucephalandra-dark-blue.html"
            },
            {
              "src": "https://premiumbuces.com/wp-content/uploads/2019/08/bucephalandra-dark-blue.jpg",
              "caption": "Product photo on a white background",
              "credit": "premiumbuces.com",
              "creditUrl": "https://premiumbuces.com/?p=416"
            },
            {
              "src": "https://aquariumplantsfactory.com/cdn/shop/products/bucephalandra-dark-blue-826973.jpg?v=1625014022&width=1600",
              "caption": "Single plant on a white background",
              "credit": "aquariumplantsfactory.com",
              "creditUrl": "https://aquariumplantsfactory.com/products/bucephalandra-dark-blue"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/bucephalandra/564-bucephalandra-dark-blue.html",
              "unit": "approx 5 leaves",
              "price": 3900,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/bucephalandra/564-bucephalandra-dark-blue.html"
            }
          ]
        },
        {
          "id": 238,
          "name": "Bucephalandra 'Brownie Phantom Mini'",
          "scientific": "Bucephalandra sp. 'Brownie Phantom Mini'",
          "difficulty": "Easy",
          "about": "Very small Bucephalandra with oblong leaves about 1 to 2 cm long in dark olive to deep brown, with a blue iridescent sheen under good light. Its tiny leaves suit small stones and fine detail on wood. Attach the rhizome to hardscape rather than burying it. It is hardy and does well in shaded spots.",
          "conditions": [
            [
              "Light",
              "Low"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "2 to 5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquarzon.com/2951-large_default/bucephalandra-brownie-phantom-mini-clump.jpg",
              "caption": "Clumps growing on hardscape in a planted aquarium",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/bucephalandra/525-bucephalandra-brownie-phantom-mini-clump.html"
            },
            {
              "src": "https://www.aquarzon.com/1724-large_default/bucephalandra-brownie-phantom-mini.jpg",
              "caption": "Close-up of submersed-grown leaves",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/bucephalandra/494-bucephalandra-brownie-phantom-mini.html"
            },
            {
              "src": "https://www.aquarzon.com/2127-large_default/bucephalandra-brownie-phantom-mini.jpg",
              "caption": "Single plant held in front of a planted tank",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/bucephalandra/494-bucephalandra-brownie-phantom-mini.html"
            },
            {
              "src": "https://www.aquarzon.com/2793-large_default/bucephalandra-brownie-phantom-mini-clump.jpg",
              "caption": "Clump held on a dark background",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/bucephalandra/525-bucephalandra-brownie-phantom-mini-clump.html"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/bucephalandra/494-bucephalandra-brownie-phantom-mini.html",
              "unit": "1 rhizome, ~5 leaves",
              "price": 990,
              "was": 1500,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/bucephalandra/494-bucephalandra-brownie-phantom-mini.html"
            }
          ]
        },
        {
          "id": 239,
          "name": "Bucephalandra 'Dark Lamandau'",
          "scientific": "Bucephalandra sp. 'Dark Lamandau'",
          "difficulty": "Easy",
          "about": "Compact Bucephalandra with small, rounded to oval dark leaves, from deep green to brownish, often with fine white dots and a sheen under good light. It stays low and suits the foreground or small accents on wood and rock. Keep the rhizome exposed, and give it stable conditions to avoid melting.",
          "conditions": [
            [
              "Light",
              "Low"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "3 to 6 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquarzon.com/3364-large_default/bucephalandra-dark-lamandau-bucephalandra-sp-dark-lamandau-.jpg",
              "caption": "Submerged on rock in an aquascape",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/bucephalandra/377-bucephalandra-dark-lamandau-bucephalandra-sp-dark-lamandau-.html"
            },
            {
              "src": "https://www.aquarzon.com/1327-large_default/bucephalandra-dark-lamandau-bucephalandra-sp-dark-lamandau-.jpg",
              "caption": "Close-up of a mounted clump",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/bucephalandra/377-bucephalandra-dark-lamandau-bucephalandra-sp-dark-lamandau-.html"
            },
            {
              "src": "https://www.aquarzon.com/1326-large_default/bucephalandra-dark-lamandau-bucephalandra-sp-dark-lamandau-.jpg",
              "caption": "Close-up of the small rounded leaves",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/bucephalandra/377-bucephalandra-dark-lamandau-bucephalandra-sp-dark-lamandau-.html"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/bucephalandra/377-bucephalandra-dark-lamandau-bucephalandra-sp-dark-lamandau-.html",
              "unit": "approx 5 leaves",
              "price": 990,
              "was": 1190,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/bucephalandra/377-bucephalandra-dark-lamandau-bucephalandra-sp-dark-lamandau-.html"
            }
          ]
        },
        {
          "id": 240,
          "name": "Bucephalandra 'Theia'",
          "scientific": "Bucephalandra sp. 'Theia'",
          "difficulty": "Easy",
          "about": "Soft, rounded leaves up to about 3.5 cm long that turn reddish brown to purple under water, often with a bluish sheen and fine silvery dots. It forms a low, slow-spreading clump on wood or rock. Keep the rhizome above the substrate and give it gentle flow so the leaves stay clean of algae.",
          "conditions": [
            [
              "Light",
              "Low"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/collector-s-buce-theia-buce-plant-private-collection-m8-1510500106280.jpg?v=1602843972",
              "caption": "Submerged on rock among hairgrass in an aquascape",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/bucephalandra-theia-1"
            },
            {
              "src": "https://www.aquarzon.com/4734-large_default/bucephalandra-theia.jpg",
              "caption": "Submersed leaves with bluish sheen, held in a planted tank",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/bucephalandra/852-bucephalandra-theia.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/files/bucephalandra-theia-farmed-1231626718.jpg?v=1775700368",
              "caption": "Potted plant held over a planted tank",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/bucephalandra-theia"
            },
            {
              "src": "https://premiumbuces.com/wp-content/uploads/2019/08/bucephalandra-theia.jpg",
              "caption": "Product photo on a white background",
              "credit": "premiumbuces.com",
              "creditUrl": "https://premiumbuces.com/bucephalandra-theia/"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/bucephalandra/852-bucephalandra-theia.html",
              "unit": "4-5 leaves per rhizome",
              "price": 3900,
              "was": 5000,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/bucephalandra/852-bucephalandra-theia.html"
            }
          ]
        },
        {
          "id": 241,
          "name": "Bucephalandra 'Wavy Green'",
          "scientific": "Bucephalandra sp. 'Wavy Green'",
          "difficulty": "Easy",
          "about": "Bright green, elongated leaves with ruffled, wavy edges and fine white spots, held on a thin creeping rhizome. It makes a low, textured clump for wood and rock in the foreground or midground. Attach it rather than burying the rhizome. It grows slowly and rarely needs trimming.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": "Micro Aquatic Shop restricts several Bucephalandra to SA, but this page notes no SA restriction. Verify at checkout.",
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1163/2672/products/Bucephalandra-sp.-Green-Wavy-1_284a7b3c-72f3-494a-afde-10bc6d4f48e2.jpg?v=1544797653",
              "caption": "Planted in an aquascape in front of rock",
              "credit": "aquaticarts.com",
              "creditUrl": "https://aquaticarts.com/products/green-wavy-buce-plant-tissue-culture"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1163/2672/products/Bucephalandra-sp.-Green-Wavy-2_0c4d513e-71cf-4953-acc5-f35a3538dc4c.jpg?v=1544797653",
              "caption": "Submerged, close-up of the wavy leaves",
              "credit": "aquaticarts.com",
              "creditUrl": "https://aquaticarts.com/products/green-wavy-buce-plant-tissue-culture"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1167/8568/products/bucephalandra-green-wavy-26387579725.jpg?v=1613044590",
              "caption": "Mounted on wood in a planted aquarium",
              "credit": "buceplant.com",
              "creditUrl": "https://buceplant.com/products/green-wavy"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/IMG-9551.jpg?v=1787799763",
              "caption": "Hand-held portion",
              "credit": "microaquaticshop.com.au",
              "creditUrl": "https://microaquaticshop.com.au/products/bucephalandra-wavy-green"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/bucephalandra-wavy-green",
              "unit": "1 stem",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/bucephalandra-wavy-green"
            }
          ]
        },
        {
          "id": 242,
          "name": "Bucephalandra 'Pandora'",
          "scientific": "Bucephalandra sp. 'Pandora'",
          "difficulty": "Easy",
          "about": "Small, rounded leaves with strong iridescence that shifts between green, blue and purple, and shows best under cooler or blue-toned lighting. It stays low and compact on wood or rock and spreads slowly along its rhizome. Tie or glue it in place with the rhizome exposed, and keep algae down with steady flow.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "5 to 8 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/products/22267872d8b1d2e9cee7618d2eebe3c1.jpg?v=1665137525",
              "caption": "Growing among other Bucephalandra in a planted tank",
              "credit": "aquafy.com.au",
              "creditUrl": "https://aquafy.com.au/products/bucephalandra-pandora"
            },
            {
              "src": "https://www.aquarzon.com/2156-large_default/bucephalandra-pandora-queen.jpg",
              "caption": "Submerged under RGB lighting, showing blue-purple sheen",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/bucephalandra/410-bucephalandra-pandora-queen.html"
            },
            {
              "src": "https://www.aquarzon.com/2157-large_default/bucephalandra-pandora-queen.jpg",
              "caption": "Submerged clump under RGB lighting",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/bucephalandra/410-bucephalandra-pandora-queen.html"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/products/7008f98961268aea8dd83f887c180e5b.jpg?v=1663921538",
              "caption": "Single hand-held plant",
              "credit": "aquafy.com.au",
              "creditUrl": "https://aquafy.com.au/products/bucephalandra-pandora"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/bucephalandra-pandora",
              "unit": "3-6 leaves, emersed grown",
              "price": 2795,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/bucephalandra-pandora"
            }
          ]
        },
        {
          "id": 243,
          "name": "Bucephalandra 'Palm Tree'",
          "scientific": "Bucephalandra sp. 'Palm Tree'",
          "difficulty": "Easy",
          "about": "Elongated, slightly wavy leaves that arch and curve down at the tips, so each rosette looks like a tiny palm. It grows a little faster than many Bucephalandra and clumps well on rock or wood. It is undemanding about light and CO2, but the rhizome must stay above the substrate or it may rot.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "5 to 12 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://live.staticflickr.com/7177/6783423430_98080a5550_b.jpg",
              "caption": "Growing in a planted tank",
              "credit": "Tomasz Wastowski (Vasteq) (Flickr)",
              "creditUrl": "https://www.flickr.com/photos/62693539@N07/6783423430/"
            },
            {
              "src": "https://live.staticflickr.com/4487/37151613084_6094bee840_b.jpg",
              "caption": "Close-up of the wavy, palm-like leaves",
              "credit": "Tomasz Wastowski (Vasteq) (Flickr)",
              "creditUrl": "https://www.flickr.com/photos/62693539@N07/37151613084/"
            },
            {
              "src": "https://live.staticflickr.com/4447/37812652196_389d69fa76_b.jpg",
              "caption": "A clump showing reddish stems and new growth",
              "credit": "Tomasz Wastowski (Vasteq) (Flickr)",
              "creditUrl": "https://www.flickr.com/photos/62693539@N07/37812652196/"
            },
            {
              "src": "https://www.bucephalandraeu.com/gallery/big/palm_tree.jpg",
              "caption": "A portion on lava rock, plain background",
              "credit": "BucephalandraEU",
              "creditUrl": "https://www.bucephalandraeu.com/en/product/palm-tree"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/bucephalandra-palm-tree",
              "unit": "3-6 leaves, emersed grown",
              "price": 1995,
              "was": 2095,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/bucephalandra-palm-tree"
            }
          ]
        },
        {
          "id": 244,
          "name": "Bucephalandra 'Kedagang Red'",
          "scientific": "Bucephalandra sp. 'Kedagang Red'",
          "difficulty": "Easy",
          "about": "Long, narrow, slightly curled leaves about 4 to 5.5 cm long, very dark green to bronze with a bluish sheen and silvery dots, while new leaves come in red. It stays compact and spreads outward across rock or wood. Colour is strongest with medium light, CO2 and steady nutrients, though it survives in low-tech tanks.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://live.staticflickr.com/65535/50056865847_b4f92348ff_b.jpg",
              "caption": "Attached to driftwood in an aquascape",
              "credit": "Find The Apex (Flickr)",
              "creditUrl": "https://www.flickr.com/photos/51973523@N07/50056865847/"
            },
            {
              "src": "https://live.staticflickr.com/65535/50056866197_2702f63ef0_b.jpg",
              "caption": "Growing on wood in a planted tank",
              "credit": "Find The Apex (Flickr)",
              "creditUrl": "https://www.flickr.com/photos/51973523@N07/50056866197/"
            },
            {
              "src": "https://live.staticflickr.com/65535/50152549382_d65cdb12f8_b.jpg",
              "caption": "Close-up of the red leaves",
              "credit": "buce2love (Flickr)",
              "creditUrl": "https://www.flickr.com/photos/188585397@N05/50152549382/"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/products/image_5ad3e960-ea23-47f5-aee6-dc6394b9064c.jpg?v=1665137512",
              "caption": "Product photo on a white background",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/bucephalandra-kedagang-red"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/bucephalandra-kedagang-red",
              "unit": "3-6 leaves, emersed grown",
              "price": 2495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/bucephalandra-kedagang-red"
            }
          ]
        },
        {
          "id": 245,
          "name": "Bucephalandra 'Purple Diamond'",
          "scientific": "Bucephalandra sp. 'Purple Diamond'",
          "difficulty": "Easy",
          "about": "Small leaves about 1 to 2 cm long that shimmer purple, blue and velvet green from above and show pink beneath. It is one of the more compact Bucephalandra and suits detailed placement on small stones and wood. Growth is very slow, so start with a good-sized clump and keep the rhizome uncovered.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "3 to 8 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://res.cloudinary.com/dhvj8x2nq/image/upload/v1773662218/products/bucephalandra-purple-diamond/main.jpg",
              "caption": "Being placed underwater in a planted tank",
              "credit": "Duckaroo",
              "creditUrl": "https://duckaroo.com.au/products/bucephalandra-purple-diamond"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/products/78711918_2529077377147783_443485674306273280_n_590X668_crop_center.jpg-min.jpg?v=1659782692",
              "caption": "Held up in front of a planted tank",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/buce-purple-diamond"
            },
            {
              "src": "https://image-cdn-prodv2.fishyhub.com/fit-in/1080x1080/inventory-images/products/prod_0_21681909925893.jpeg",
              "caption": "Close-up of the iridescent leaves",
              "credit": "FishyHub",
              "creditUrl": "https://fishyhub.com/product-detail/bucephalandra-purple-diamond-per-rhyzome-16676"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/products/image_b6e0145c-4cfb-4f1b-ba26-84dc3171707f.heic?v=1658918223&width=1200",
              "caption": "A single rhizome portion, held in hand",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/buce-purple-diamond"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/buce-purple-diamond",
              "unit": "3-6 leaves, emersed grown",
              "price": 2495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/buce-purple-diamond"
            }
          ]
        },
        {
          "id": 257,
          "name": "Anubias 'White'",
          "scientific": "Anubias barteri 'White'",
          "difficulty": "Moderate",
          "about": "A compact Anubias barteri form with leaves marbled or splashed with white, and some leaves almost entirely white. It is slower and a little touchier than green anubias because the pale tissue has less chlorophyll. Attach it to wood or rock in low to medium light; strong light invites algae on the slow leaves.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "5 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://live.staticflickr.com/8529/8555769558_f7fc13a9cd_b.jpg",
              "caption": "Growing in a planted tank",
              "credit": "Tomasz Wastowski (Vasteq) (Flickr)",
              "creditUrl": "https://www.flickr.com/photos/62693539@N07/8555769558/"
            },
            {
              "src": "https://live.staticflickr.com/4393/36851885632_6eb580e2cb_b.jpg",
              "caption": "Pale leaves on driftwood in an aquarium",
              "credit": "LSTof (Flickr)",
              "creditUrl": "https://www.flickr.com/photos/158024505@N07/36851885632/"
            },
            {
              "src": "https://live.staticflickr.com/3827/12269011583_68843d553c_b.jpg",
              "caption": "Next to a dark Bucephalandra in a tank",
              "credit": "Tomasz Wastowski (Vasteq) (Flickr)",
              "creditUrl": "https://www.flickr.com/photos/62693539@N07/12269011583/"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0596/3474/5437/products/PE1_4117Anubias_White_WM50.jpg?v=1678166342&width=1200",
              "caption": "Potted plant, product photo",
              "credit": "Tankquility",
              "creditUrl": "https://tankquility.com.au/products/anubias-white"
            }
          ],
          "offers": [
            {
              "shop": "Tankquility",
              "url": "https://tankquility.com.au/products/anubias-white",
              "unit": "each",
              "price": 5995,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Tankquility: product page",
              "url": "https://tankquility.com.au/products/anubias-white"
            }
          ]
        },
        {
          "id": 258,
          "name": "Anubias 'Jenny'",
          "scientific": "Anubias barteri 'Jenny'",
          "difficulty": "Easy",
          "about": "An Australian-bred anubias cultivar with broad, dark green leaves and lighter new growth on a sturdy rhizome. It is hardy, tolerates shade under ledges, and suits wood or rock in the midground. Keep the rhizome out of the substrate and avoid strong light on the slow leaves to limit algae.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "10 to 20 cm"
            ]
          ],
          "saNote": "The shop does not explicitly confirm plant shipping to SA. Verify at checkout.",
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/Anubias_Jenny_on_Driftwood.png?v=1684939574",
              "caption": "Attached to a small piece of driftwood",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/anubias-jenny-mini-driftwood"
            },
            {
              "src": "https://i0.wp.com/theonlineaquariumshop.com.au/wp-content/uploads/2024/09/Image-30-9-2024-at-2.30-pm.jpeg",
              "caption": "Bare-root plant, product photo",
              "credit": "The Online Aquarium Shop",
              "creditUrl": "https://www.theonlineaquariumshop.com.au/product/anubias-jenny/"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0293/2506/6375/products/scapeshop-com-au-bare-root-plant-anubias-jenny-bare-root-large-28376019533959.jpg?v=1628220855&width=1200",
              "caption": "Bare-root plant standing in water",
              "credit": "Scapeshop",
              "creditUrl": "https://scapeshop.com.au/products/anubias-jenny"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0293/2506/6375/products/scapeshop-com-au-bare-root-plant-anubias-jenny-bare-root-large-28286919934087.png?v=1628220855",
              "caption": "Bare-root plant on a white background",
              "credit": "Scapeshop",
              "creditUrl": "https://scapeshop.com.au/products/anubias-jenny"
            }
          ],
          "offers": [
            {
              "shop": "The Online Aquarium Shop",
              "url": "https://www.theonlineaquariumshop.com.au/product/anubias-jenny/",
              "unit": "bare root 10-20cm",
              "price": 2990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "The Online Aquarium Shop: product page",
              "url": "https://www.theonlineaquariumshop.com.au/product/anubias-jenny/"
            }
          ]
        }
      ]
    },
    {
      "id": "moss",
      "name": "Mosses and liverworts",
      "intro": "For covering wood, filling gaps and adding fine texture.",
      "plants": [
        {
          "id": 34,
          "name": "Christmas moss",
          "scientific": "Vesicularia montagnei",
          "difficulty": "Easy",
          "about": "Neat, layered fronds shaped like small fir trees, tidier than Java moss and a common choice for moss trees and covering wood. It grows slowly and is best tied on in a thin layer. Regular trimming keeps it dense, and it keeps its shape best in water below about 26°C.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "2 to 5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/vesicularia-montagnei-christmas-moss-4f7a024a79528.jpg",
              "caption": "Vesicularia montagnei, submerged",
              "credit": "© Oliver Knott (2005) www.oliver-knott.de",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/vesicularia-montagnei-christmas-moss"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/hello-old-quercus-52156ce0586f8.jpg",
              "caption": "Aquascape: hello old quercus (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/hello-old-quercus"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/vesicularia-montagnei-christmas-moss-4f7a024b0b2f0.jpg",
              "caption": "Vesicularia montagnei(?), submerged",
              "credit": "© Svennovitch (2006), www.aquaplantexchange.nl",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/vesicularia-montagnei-christmas-moss"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/003A%20POR/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Vesiculariamontagnei'ChristmasMoss'(003APOR)/4395"
            }
          ],
          "offers": [
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/collections/moss-1",
              "unit": "5 x 5 cm portion",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product-category/live-plants/moss/",
              "unit": "Portion",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-moss",
              "unit": "Portion",
              "price": 1495,
              "was": 1800,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/collections/moss-1",
              "unit": "Portion",
              "price": 2495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/collections/aquarium-moss-liverwort",
              "unit": "Portion",
              "price": 2495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Micro Aquatic Shop: moss range",
              "url": "https://microaquaticshop.com.au/collections/moss-1"
            },
            {
              "label": "Nano Tanks Australia: moss range",
              "url": "https://nanotanksaustralia.com.au/collections/moss-1"
            },
            {
              "label": "Practical Fishkeeping: five of the best aquarium mosses",
              "url": "https://www.practicalfishkeeping.co.uk/features/articles/five-of-the-best-aquarium-mosses"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Vesiculariamontagnei'ChristmasMoss'(003APOR)/4395"
            }
          ]
        },
        {
          "id": 35,
          "name": "Mini Christmas moss",
          "scientific": "Vesicularia sp. 'Mini Christmas'",
          "difficulty": "Easy",
          "about": "A smaller-leaved form of Christmas moss with tight, triangular fronds that give fine detail on wood and stone. Its small scale helps a layout look larger. Growth is slow, so start with a generous portion, tie it thinly and trim lightly to keep it compact.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "1 to 3 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/vesicularia-sp-mini-christmas-moss-4f7a0408c2ed7.jpg",
              "caption": "Vesicularia sp. ''Mini Christmas Moss'', submerged",
              "credit": "© Tobias Coring (2011)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/vesicularia-sp-mini-christmas-moss"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/wasserpflanzen-passion-5293432dcb8ef.jpg",
              "caption": "Aquascape: wasserpflanzen passion (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/wasserpflanzen-passion"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/vesicularia-sp-mini-christmas-moss-56a63b2600bcb.jpg",
              "caption": "Mini Christmas moss growing detail",
              "credit": "© Messingbarbe",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/vesicularia-sp-mini-christmas-moss"
            },
            {
              "src": "https://www.aquarzon.com/2257-large_default/true-mini-christmas-moss-vesicularia-sp-mini-christmas.jpg",
              "caption": "Original reference photo.",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/moss/31-true-mini-christmas-moss-vesicularia-sp-mini-christmas.html"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/moss/31-true-mini-christmas-moss-vesicularia-sp-mini-christmas.html",
              "unit": "Portion",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/collections/aquarium-moss-liverwort",
              "unit": "Portion",
              "price": 2495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: moss and liverwort range",
              "url": "https://www.liverpoolcreekaquariums.com.au/collections/aquarium-moss-liverwort"
            },
            {
              "label": "Aquarzon: moss range",
              "url": "https://www.aquarzon.com/10-moss"
            },
            {
              "label": "Photo source: aquarzon.com",
              "url": "https://www.aquarzon.com/moss/31-true-mini-christmas-moss-vesicularia-sp-mini-christmas.html"
            }
          ]
        },
        {
          "id": 36,
          "name": "Flame moss",
          "scientific": "Taxiphyllum sp. 'Flame'",
          "difficulty": "Easy",
          "about": "Dark green strands grow straight up and twist like flickering flames, which adds vertical texture on wood and rock. It is slow and stays in neat tufts rather than spreading sideways. Tie it on in small clumps and trim the tops if they start to flop over.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "3 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/taxiphyllum-sp-flame-moss-4f7a02600a2a9.jpg",
              "caption": "Taxiphyllum sp. ''Flame Moss'', submerged",
              "credit": "© Loh Kwek Leong (2006), www.killies.com",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/taxiphyllum-sp-flame-moss"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/richy-5627f2c86519d.jpg",
              "caption": "Aquascape: richy (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/richy"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/taxiphyllum-sp-flame-moss-4f7a026084194.jpg",
              "caption": "Taxiphyllum sp. ''Flame Moss'', submerged",
              "credit": "© Loh Kwek Leong (2006), www.killies.com",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/taxiphyllum-sp-flame-moss"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/003H%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Taxiphyllumsp.’FlameMoss’(003HTC)/4403"
            }
          ],
          "offers": [
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/collections/moss-1",
              "unit": "5 x 5 cm portion",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/collections/moss-1",
              "unit": "Portion",
              "price": 2495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/collections/aquarium-moss-liverwort",
              "unit": "Portion",
              "price": 2495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/moss/22-flame-moss-taxiphyllum-sp-flame-.html",
              "unit": "Portion",
              "price": 1500,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/flame-moss-tissue-culture",
              "unit": "5 x 5 cm tissue culture portion",
              "price": 2795,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: moss range",
              "url": "https://www.aquarzon.com/10-moss"
            },
            {
              "label": "Aquafy: aquarium moss range",
              "url": "https://aquafy.com.au/collections/aquarium-moss"
            },
            {
              "label": "Liverpool Creek Aquariums: moss and liverwort range",
              "url": "https://www.liverpoolcreekaquariums.com.au/collections/aquarium-moss-liverwort"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Taxiphyllumsp.’FlameMoss’(003HTC)/4403"
            }
          ]
        },
        {
          "id": 37,
          "name": "Weeping moss",
          "scientific": "Vesicularia ferriei",
          "difficulty": "Moderate",
          "about": "The common aquarium moss that grows downward, with branching fronds that hang in curtains. It looks best tied high on branches and overhangs. It grows slowly and is prone to algae in strong light, and it does best in cooler water with good flow.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "3 to 8 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/vesicularia-ferriei-weeping-moss-4f7a024dc14b9.jpg",
              "caption": "Vesicularia ferriei ''Weeping Moss'', submerged",
              "credit": "© Loh Kwek Leong (2004), www.killies.com",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/vesicularia-ferriei-weeping-moss"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/hiking-tour-52aaf06f1b9f4.jpg",
              "caption": "Aquascape: hiking tour (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/hiking-tour"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/vesicularia-ferriei-weeping-moss-4f7a024d30e19.jpg",
              "caption": "Vesicularia ferriei ''Weeping Moss'', submerged",
              "credit": "© Tony Gomez (2004), http://webfiles.uci.edu/algomez/index.html",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/vesicularia-ferriei-weeping-moss"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/003B%20POR/4.JPG&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Vesiculariaferriei'WeepingMoss'(003BPOR)/4398"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/collections/moss-1",
              "unit": "Portion",
              "price": 2495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/collections/aquarium-moss-liverwort",
              "unit": "6 cm portion",
              "price": 2995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/moss/37-rare-true-weeping-moss-vesicularia-ferriei.html",
              "unit": "Portion",
              "price": 1900,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/weeping-moss-tissue-culture",
              "unit": "5 x 5 cm tissue culture portion",
              "price": 2795,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: moss range",
              "url": "https://www.aquarzon.com/10-moss"
            },
            {
              "label": "Aquafy: aquarium moss range",
              "url": "https://aquafy.com.au/collections/aquarium-moss"
            },
            {
              "label": "Liverpool Creek Aquariums: moss and liverwort range",
              "url": "https://www.liverpoolcreekaquariums.com.au/collections/aquarium-moss-liverwort"
            },
            {
              "label": "Micro Aquatic Shop: types of aquarium moss",
              "url": "https://microaquaticshop.com.au/blogs/aquatic-plants/types-of-aquarium-moss-aquatic"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Vesiculariaferriei'WeepingMoss'(003BPOR)/4398"
            }
          ]
        },
        {
          "id": 38,
          "name": "Taiwan moss",
          "scientific": "Taxiphyllum alternans",
          "difficulty": "Easy",
          "about": "A soft, fluffy moss with irregular branching fronds, similar to Java moss but finer and denser. It attaches readily to wood and stone and suits a natural, overgrown look. Trim it regularly so the lower layers stay healthy and debris does not build up inside.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "2 to 5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/taxiphyllum-alternans-taiwan-moss-4f7a024f6db26.jpg",
              "caption": "Taxiphyllum alternans ''Taiwan Moss'', submerged, as moss wall",
              "credit": "© Loh Kwek Leong (2004), www.killies.com",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/taxiphyllum-alternans-taiwan-moss"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/choose-a-way-5b786ce037199.jpg",
              "caption": "Aquascape: choose a way (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/choose-a-way"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/taxiphyllum-alternans-taiwan-moss-4f7a02504c155.jpg",
              "caption": "Taxiphyllum alternans ''Taiwan Moss'', submerged, as moss wall",
              "credit": "© Loh Kwek Leong (2004), www.killies.com",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/taxiphyllum-alternans-taiwan-moss"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/003C%20TC/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Taxiphyllumalternans'TaiwanMoss'(003CTC)/19551"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/collections/moss-1",
              "unit": "Mini Taiwan portion",
              "price": 2495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/moss/32-rare-aus-mini-taiwan-moss.html",
              "unit": "Mini Taiwan portion",
              "price": 2500,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/taiwan-moss-tissue-culture",
              "unit": "5 x 5 cm tissue culture portion",
              "price": 2795,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: moss range",
              "url": "https://microaquaticshop.com.au/collections/moss-1"
            },
            {
              "label": "AB Quatics: moss range",
              "url": "https://abquatics.shop/collections/live-moss"
            },
            {
              "label": "Aquafy: tissue culture range",
              "url": "https://aquafy.com.au/collections/tissue-culture/tc"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Taxiphyllumalternans'TaiwanMoss'(003CTC)/19551"
            }
          ]
        },
        {
          "id": 39,
          "name": "Spiky moss",
          "scientific": "Taxiphyllum sp. 'Spiky'",
          "difficulty": "Easy",
          "about": "Long, pointed fronds with a sharper, more open look than Christmas moss. It grows a bit faster than most decorative mosses and attaches well to wood and rock. It copes with warmer water better than Christmas moss, and regular trimming keeps it from looking ragged.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "2 to 6 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/taxiphyllum-sp-spiky-moss-5634a234c0ef6.jpg",
              "caption": "Taxiphyllum sp. ''Spiky'' (gotten as ''Peacock moss''), submerged",
              "credit": "© Tobias Coring (2010)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/taxiphyllum-sp-spiky-moss"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/dinofuss-580f13f908057.jpg",
              "caption": "Aquascape: dinofuss (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/dinofuss"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/taxiphyllum-sp-spiky-moss-51823421d30ce.jpg",
              "caption": "Taxiphyllum sp. ''Spiky moss'', submerged",
              "credit": "© Moritz Aquascaping (2013)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/taxiphyllum-sp-spiky-moss"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/003G%20POR/3.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Taxiphyllumsp.'SpikyMoss'(003GPOR)/4402"
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product-category/live-plants/moss/",
              "unit": "Portion",
              "price": 1495,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Roxy Aquarium: moss range",
              "url": "https://roxyaquarium.com.au/product-category/live-plants/moss/"
            },
            {
              "label": "Liverpool Creek Aquariums: moss and liverwort range",
              "url": "https://www.liverpoolcreekaquariums.com.au/collections/aquarium-moss-liverwort"
            },
            {
              "label": "Gensou Aquascaping: aquarium moss roundup",
              "url": "https://gensou.sg/?p=42047"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Taxiphyllumsp.'SpikyMoss'(003GPOR)/4402"
            }
          ]
        },
        {
          "id": 40,
          "name": "Fissidens",
          "scientific": "Fissidens fontanus, F. nobilis, F. 'Mini'",
          "difficulty": "Moderate",
          "about": "A true aquatic moss with tiny fronds like miniature ferns that form dense, low domes. It grows very slowly and can be fiddly to tie on, but once established it needs little care. It looks natural on branch-shaped wood and at the base of rocks; keep algae down with steady flow.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "1 to 3 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/fissidens-fontanus-5194b3092cd02.jpg",
              "caption": "Fissidens growing detail",
              "credit": "© troetti",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/fissidens-fontanus"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/hiking-tour-52aaf06f1b9f4.jpg",
              "caption": "Aquascape: hiking tour (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/hiking-tour"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/fissidens-fontanus-4f7a025be7af0.jpg",
              "caption": "Fissidens fontanus",
              "credit": "Tony Gomez (2005)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/fissidens-fontanus"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/002F/4.JPG&crop=resize&class=product",
              "caption": "Original reference photo. Fissidens fontanus; the listing also includes other Fissidens forms.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Fissidensfontanus(002F)/4390"
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product-category/live-plants/moss/",
              "unit": "Portion",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/moss/60-au-us-fissidens-small-variant.html",
              "unit": "US Fissidens portion",
              "price": 1690,
              "was": 1900,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/collections/aquarium-moss-liverwort",
              "unit": "Fissidens nobilis portion",
              "price": 3495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/collections/aquarium-moss-liverwort",
              "unit": "Fissidens 'Mini' portion",
              "price": 3995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/collections/moss-1",
              "unit": "5 x 5 cm portion",
              "price": 2000,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/moss/67-rare-fissidens-nobilis.html",
              "unit": "Fissidens nobilis portion",
              "price": 2900,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: moss range",
              "url": "https://www.aquarzon.com/10-moss"
            },
            {
              "label": "Liverpool Creek Aquariums: moss and liverwort range",
              "url": "https://www.liverpoolcreekaquariums.com.au/collections/aquarium-moss-liverwort"
            },
            {
              "label": "Practical Fishkeeping: five of the best aquarium mosses",
              "url": "https://www.practicalfishkeeping.co.uk/features/articles/five-of-the-best-aquarium-mosses"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Fissidensfontanus(002F)/4390"
            }
          ]
        },
        {
          "id": 41,
          "name": "Peacock moss",
          "scientific": "Taxiphyllum sp. 'Peacock'",
          "difficulty": "Easy",
          "about": "Fronds spread in flat, layered fans with a fuller look than Christmas moss, good for covering larger wood and rock surfaces. It grows slowly and stays fairly neat. Tie it on thinly and trim the outer layer so light reaches the base.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "2 to 5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquarzon.com/4058-large_default/true-peacock-moss-taxiphyllum-sp-peacock-.jpg",
              "caption": "True Peacock Moss: Taxiphyllum sp. Peacock",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/moss/20-true-peacock-moss-taxiphyllum-sp-peacock-.html"
            },
            {
              "src": "https://www.aquarzon.com/4059-large_default/true-peacock-moss-taxiphyllum-sp-peacock-.jpg",
              "caption": "True Peacock Moss: Taxiphyllum sp. Peacock",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/moss/20-true-peacock-moss-taxiphyllum-sp-peacock-.html"
            },
            {
              "src": "https://www.aquarzon.com/4060-large_default/true-peacock-moss-taxiphyllum-sp-peacock-.jpg",
              "caption": "True Peacock Moss: Taxiphyllum sp. Peacock",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/moss/20-true-peacock-moss-taxiphyllum-sp-peacock-.html"
            },
            {
              "src": "https://www.aquarzon.com/50-large_default/true-peacock-moss-taxiphyllum-sp-peacock-.jpg",
              "caption": "Original reference photo.",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/moss/20-true-peacock-moss-taxiphyllum-sp-peacock-.html"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/moss/20-true-peacock-moss-taxiphyllum-sp-peacock-.html",
              "unit": "Portion",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: aquarium moss range",
              "url": "https://aquafy.com.au/collections/aquarium-moss"
            },
            {
              "label": "Photo source: aquarzon.com",
              "url": "https://www.aquarzon.com/moss/20-true-peacock-moss-taxiphyllum-sp-peacock-.html"
            }
          ]
        },
        {
          "id": 42,
          "name": "Stringy moss",
          "scientific": "Leptodictyum riparium",
          "difficulty": "Easy",
          "about": "Fine, light green strands that grow quickly and sway in the current for a wild, flowing look. It fills gaps fast and tolerates a wide range of light and temperature. It can spread onto nearby plants, so trim it often and remove stray pieces.",
          "conditions": [
            [
              "Light",
              "Low to high"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "3 to 10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/leptodictyum-riparium-4f7a038cf08a5.jpg",
              "caption": "Leptodictyum riparium, submerged in an aquarium",
              "credit": "© Tobias Coring (2011)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/leptodictyum-riparium"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/root-hill-591e047261ece.jpg",
              "caption": "Aquascape: root hill (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/root-hill"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/leptodictyum-riparium-5311d2e7c3745.jpg",
              "caption": "Leptodictyum riparium, submerged in an aquarium",
              "credit": "© Tobias Coring (2011)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/leptodictyum-riparium"
            },
            {
              "src": "https://www.aquarzon.com/274-large_default/native-stringy-moss-leptodictyum-riparium.jpg",
              "caption": "Original reference photo.",
              "credit": "aquarzon.com",
              "creditUrl": "https://www.aquarzon.com/moss/26-native-stringy-moss-leptodictyum-riparium.html"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/moss/26-native-stringy-moss-leptodictyum-riparium.html",
              "unit": "Portion",
              "price": 990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/collections/moss-1",
              "unit": "Portion",
              "price": 1900,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: moss range",
              "url": "https://microaquaticshop.com.au/collections/moss-1"
            },
            {
              "label": "Micro Aquatic Shop: types of aquarium moss",
              "url": "https://microaquaticshop.com.au/blogs/aquatic-plants/types-of-aquarium-moss-aquatic"
            },
            {
              "label": "Photo source: aquarzon.com",
              "url": "https://www.aquarzon.com/moss/26-native-stringy-moss-leptodictyum-riparium.html"
            }
          ]
        },
        {
          "id": 43,
          "name": "Mini Pellia",
          "scientific": "Riccardia chamedryfolia",
          "difficulty": "Moderate",
          "about": "A liverwort rather than a true moss, with fine, translucent green, branching thalli that build into small coral-like cushions. It is tied or glued to wood and rock and stays compact without much trimming. Growth is slow, so keep the cushion clear of algae and faster mosses, and give it good light and stable conditions for dense growth.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Recommended"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "1 to 4 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquascape.de/media/image/77/d7/0a/4260614760035-30269.jpg",
              "caption": "Aquascape with Riccardia chamedryfolia Moss",
              "credit": "www.aquascape.de",
              "creditUrl": "https://www.aquascape.de/korallenmoos-riccardia-chamedryfolia-in-vitro-dennerle-invitro"
            },
            {
              "src": "https://aquafy.com.au/cdn/shop/products/Coral_Moss_on_Driftwood_6_1024x1024_jpg_1024x1024.webp?v=1661237672",
              "caption": "Riccardia Chamedryfolia 'Mini Pellia' on Driftwood",
              "credit": "aquafy.com.au",
              "creditUrl": "https://aquafy.com.au/products/riccardia-moss"
            },
            {
              "src": "https://www.garnelen-guemmer.de/media/image/85/4c/cf/Riccardia-chamdryfolia-auf-Flussholz-Aquarium.jpg",
              "caption": "Riccardia chamedryfolia Aquascape Moss",
              "credit": "www.garnelen-guemmer.de",
              "creditUrl": "https://www.garnelen-guemmer.de/riccardia-chamedryfolia-korallenmoos-becher-5-5cm"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/003D%20TC/4.PNG&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Riccardiachamedryfolia(003DTC)/30334"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/moss/106-mini-pellia-coral-moss-riccardia-sp-chamedryfolia-.html",
              "unit": "3 cm portion",
              "price": 1490,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/collections/moss-1",
              "unit": "Portion",
              "price": 3495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: moss range",
              "url": "https://microaquaticshop.com.au/collections/moss-1"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Riccardiachamedryfolia(003DTC)/30334"
            }
          ]
        },
        {
          "id": 140,
          "name": "Marimo Moss Ball",
          "scientific": "Aegagropila linnaei",
          "difficulty": "Easy",
          "about": "A slow-growing green alga that forms soft, velvety balls of dense filaments rather than a moss. Balls can sit loose on the substrate or be pulled apart and spread as a short carpet. It prefers cool water, ideally below about 24°C, and moderate light; turn it now and then so all sides stay green.",
          "conditions": [
            [
              "Light",
              "Low"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Very slow"
            ],
            [
              "Height",
              "3 to 5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/aegagropila-linnaei-4f7a015a035e1.jpg",
              "caption": "Several balls among plants in an aquascape",
              "credit": "Flowgrow plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/aegagropila-linnaei"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/aegagropila-linnaei-4f7a0158862b3.jpg",
              "caption": "Resting on sand by a stone in an aquarium",
              "credit": "Flowgrow plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/aegagropila-linnaei"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/aegagropila-linnaei-4f7a01593e1fb.jpg",
              "caption": "Close-up of the filaments underwater",
              "credit": "Flowgrow plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/aegagropila-linnaei"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/files/marimo-moss-ball.jpg?v=1729819367",
              "caption": "Moss balls on a white background",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/marimo-moss-ball"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/marimo-moss-ball",
              "unit": "ball (from price)",
              "price": 595,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/marimo-moss-ball"
            }
          ]
        },
        {
          "id": 141,
          "name": "Willow Moss",
          "scientific": "Fontinalis antipyretica",
          "difficulty": "Easy",
          "about": "A dark green aquatic moss with long, branching strands of small, pointed leaves that trail in the current. It is tied to wood or rock and suits stream-style layouts, and the dense strands give good cover for shrimp and fry. It does best in cool, clean, moving water and slows down above about 24°C; trim long strands to keep it bushy.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "5 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/fontinalis-antipyretica-4f7a029f88cbf.jpg",
              "caption": "A submerged clump in a planted tank",
              "credit": "Flowgrow plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/fontinalis-antipyretica"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/fontinalis-antipyretica-52f8822bb2853.jpg",
              "caption": "Growing over driftwood in an aquascape",
              "credit": "Flowgrow plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/fontinalis-antipyretica"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/products/DSC-6618-1-1024x576-min-_1.jpg?v=1658361852",
              "caption": "Covering driftwood in an aquarium",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/willow-moss"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0608/5771/2849/files/willow-moss-55cm-portion-8739710.jpg?v=1786977367&width=1200",
              "caption": "A portion in a dish",
              "credit": "Nano Tanks Australia",
              "creditUrl": "https://nanotanksaustralia.com.au/products/willow-moss"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/willow-moss",
              "unit": "portion",
              "price": 1095,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/moss/23-willow-moss-fontinalis-antipyretica.html",
              "unit": "portion",
              "price": 900,
              "was": 1500,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/willow-moss",
              "unit": "5x5cm portion",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/willow-moss"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/moss/23-willow-moss-fontinalis-antipyretica.html"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/willow-moss"
            }
          ]
        },
        {
          "id": 143,
          "name": "Crystalwort (Riccia fluitans)",
          "scientific": "Riccia fluitans",
          "difficulty": "Easy",
          "about": "A liverwort with narrow, forking bright green thalli that float in loose clumps or can be held down to form a dense mat. Tied to stone or mesh it makes a bright, fine-textured cushion that pearls under strong light. Pinned mats need good light and CO2 and lift as they thicken, so they need regular trimming and re-tying.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "1 to 3 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/riccia-fluitans-5575da346f171.jpg",
              "caption": "A dense mat on wood at the water surface",
              "credit": "Flowgrow plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/riccia-fluitans"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/riccia-fluitans-5194b34fb2b39.jpg",
              "caption": "A mound of crystalwort in a planted tank",
              "credit": "Flowgrow plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/riccia-fluitans"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/files/1E3FD198-D41A-41B6-8CAE-3B5AFD273EDF.jpg?v=1723876288&width=1200",
              "caption": "Close-up of the fine, forked thalli underwater",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/riccia-fluitans"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/products/IMG-2164-_2.jpg?v=1725441676&width=1200",
              "caption": "A portion on mesh, held in hand",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/riccia-fluitans"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/riccia-fluitans",
              "unit": "portion",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/tc-riccia",
              "unit": "tissue culture cup",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Sydney Aquascapes",
              "url": "https://sydney-aquascapes.com.au/products/riccia-fluitans",
              "unit": "portion",
              "price": 600,
              "was": 700,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "The Online Aquarium Shop",
              "url": "https://www.theonlineaquariumshop.com.au/product/riccia-fluitans-tissue-culture-pot-2/",
              "unit": "TC pot",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/riccia-fluitans"
            },
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/tc-riccia"
            },
            {
              "label": "Sydney Aquascapes: product page",
              "url": "https://sydney-aquascapes.com.au/products/riccia-fluitans"
            },
            {
              "label": "The Online Aquarium Shop: product page",
              "url": "https://www.theonlineaquariumshop.com.au/product/riccia-fluitans-tissue-culture-pot-2/"
            }
          ]
        },
        {
          "id": 144,
          "name": "Phoenix Moss",
          "scientific": "Fissidens fontanus",
          "difficulty": "Easy",
          "about": "A small Fissidens moss with flat, feathery fronds arranged in a fan, forming neat, low tufts. It suits wood, rock and gaps in hardscape where a fine, tidy texture is wanted. Growth is slow, so keep algae in check while it establishes; it handles low light and does best in slightly cooler water.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "2 to 5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/fissidens-fontanus-5194b3092cd02.jpg",
              "caption": "A cushion of phoenix moss in an aquarium",
              "credit": "Flowgrow plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/fissidens-fontanus"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/fissidens-fontanus-4f7a025b625ab.jpg",
              "caption": "Upright tufts growing submerged",
              "credit": "Flowgrow plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/fissidens-fontanus"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0802/8835/0528/files/phoenixmoss.jpg?v=1695267276",
              "caption": "A dense carpet of fronds underwater",
              "credit": "Liverpool Creek Aquariums",
              "creditUrl": "https://www.liverpoolcreekaquariums.com.au/products/phoenix-moss"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/IMG-7222.jpg?v=1784948145&width=1200",
              "caption": "A portion on mesh, held in hand",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/phoenix-moss-fissidens-fontanus"
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/phoenix-moss-6cm-diameter",
              "unit": "6cm portion",
              "price": 2195,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/phoenix-moss",
              "unit": "portion",
              "price": 3495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/phoenix-moss-6cm-diameter"
            },
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/phoenix-moss"
            }
          ]
        },
        {
          "id": 145,
          "name": "Java Moss",
          "scientific": "Taxiphyllum barbieri",
          "difficulty": "Easy",
          "about": "A hardy moss with irregular, branching strands of tiny leaves that form a loose, untidy mat. It is tied or glued to wood and rock and is often used for natural-looking cover or as shelter for shrimp. It grows in almost any conditions but becomes shaggy and traps debris, so trim it regularly to keep it dense.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "2 to 5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/taxiphyllum-barbieri-52361a5f8ba78.jpg",
              "caption": "A dense wall of java moss in an aquarium",
              "credit": "Flowgrow plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/taxiphyllum-barbieri"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/taxiphyllum-barbieri-51da5db681b34.jpg",
              "caption": "Growing on a branch in a planted tank",
              "credit": "Flowgrow plant database",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/taxiphyllum-barbieri"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/files/java-moss.jpg?v=1729821004",
              "caption": "Submerged among other plants",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/java-moss"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0608/5771/2849/files/java-moss-taxiphyllum-barbieri-55cm-portion-2363295.png?v=1787327948&width=1200",
              "caption": "A portion on a black background",
              "credit": "Nano Tanks Australia",
              "creditUrl": "https://nanotanksaustralia.com.au/products/java-moss-taxophyllum-barberi-5cmx5cm"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/moss/88-java-moss-taxiphyllum-barbieri.html",
              "unit": "portion",
              "price": 950,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/java-moss-taxophyllum-barberi-5cmx5cm",
              "unit": "5x5cm portion",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/java-moss",
              "unit": "portion (from)",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/java-moss-vesicularia-dubyana",
              "unit": "portion",
              "price": 1400,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/moss/88-java-moss-taxiphyllum-barbieri.html"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/java-moss-taxophyllum-barberi-5cmx5cm"
            },
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/java-moss"
            },
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/java-moss-vesicularia-dubyana"
            }
          ]
        },
        {
          "id": 146,
          "name": "Pearl Moss",
          "scientific": "Plagiomnium cf. affine",
          "difficulty": "Moderate",
          "about": "An upright moss with small, rounded, bright green leaves that have a clear midrib, so the stems look beaded. It is attached to wood or rock and gives a softer, leafier texture than most mosses. It grows very slowly and needs stable conditions and patience; extra light and CO2 help it fill in faster.",
          "conditions": [
            [
              "Light",
              "Low to medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "3 to 6 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.aquarzon.com/1071-large_default/rare-pearl-moss-plagiomnium-cf-affine.jpg",
              "caption": "Submerged in a planted aquarium",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/moss/49-rare-pearl-moss-plagiomnium-cf-affine.html"
            },
            {
              "src": "https://www.aquarzon.com/298-large_default/rare-pearl-moss-plagiomnium-cf-affine.jpg",
              "caption": "Submerged on a mount, with guppies",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/moss/49-rare-pearl-moss-plagiomnium-cf-affine.html"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/plagiomnium-cf-affine-539062c17847f.jpg",
              "caption": "Grown submerged on wood",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/plagiomnium-cf-affine"
            },
            {
              "src": "https://www.aquarzon.com/100-large_default/rare-pearl-moss-plagiomnium-cf-affine.jpg",
              "caption": "Portion in a cup",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/moss/49-rare-pearl-moss-plagiomnium-cf-affine.html"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/moss/49-rare-pearl-moss-plagiomnium-cf-affine.html",
              "unit": "portion",
              "price": 1500,
              "was": 3000,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/moss/49-rare-pearl-moss-plagiomnium-cf-affine.html"
            }
          ]
        }
      ]
    },
    {
      "id": "emersed",
      "name": "Emersed wood",
      "intro": "For wood that rises above the waterline. The wet zone near the water can also use the mosses, Bucephalandra, Anubias, Java ferns and Hydrocotyle tripartita listed above.",
      "plants": [
        {
          "id": 44,
          "name": "Creeping fig 'Minima'",
          "scientific": "Ficus pumila 'Minima'",
          "difficulty": "Easy",
          "about": "A tiny leaved creeping fig that clings flat to wood. It copes with normal room humidity better than most plants suggested for this spot. Tuck its roots into a damp crevice filled with moss or soil.",
          "conditions": [
            [
              "Light",
              "Bright, indirect"
            ],
            [
              "Roots",
              "Damp crevices"
            ],
            [
              "Humidity",
              "Average"
            ],
            [
              "Growth",
              "Medium"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://assets.st-note.com/img/1736082119-5sDAhib4u971mkCRZczFlKBG.jpg?width=1200",
              "caption": "Creeping fig 'Minima' growing detail",
              "credit": "note.com",
              "creditUrl": "https://note.com/mossparadise3055/n/n7390a1fc22d9"
            },
            {
              "src": "https://assets.st-note.com/img/1736082149-XPVqybohYUAKdQGZaLxjstgN.jpg?width=1200",
              "caption": "Creeping fig 'Minima' growing detail",
              "credit": "note.com",
              "creditUrl": "https://note.com/mossparadise3055/n/n7390a1fc22d9"
            },
            {
              "src": "https://assets.st-note.com/img/1736082296-85eP6afOIDjwlUXBCNpAcZMn.jpg?width=1200",
              "caption": "Creeping fig 'Minima' growing detail",
              "credit": "note.com",
              "creditUrl": "https://note.com/mossparadise3055/n/n7390a1fc22d9"
            },
            {
              "src": "https://www.uprooted.com.au/cdn/shop/files/ficus-pumila-minima-uprooted-buy-plants-online-australia-1222475.jpg?v=1783042570",
              "caption": "Original reference photo.",
              "credit": "uprooted.com.au",
              "creditUrl": "https://www.uprooted.com.au/products/ficus-pumila-minima"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Photo source: uprooted.com.au",
              "url": "https://www.uprooted.com.au/products/ficus-pumila-minima"
            }
          ]
        },
        {
          "id": 45,
          "name": "String of turtles",
          "scientific": "Peperomia prostrata",
          "difficulty": "Easy",
          "about": "A trailing Peperomia with small, patterned round leaves. It hangs neatly over branch edges. It rots if kept constantly wet, so place it above the splash zone.",
          "conditions": [
            [
              "Light",
              "Bright, indirect"
            ],
            [
              "Roots",
              "Damp, never soaked"
            ],
            [
              "Humidity",
              "Medium"
            ],
            [
              "Growth",
              "Slow"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://hermetospheres.com/wp-content/uploads/2026/02/p_prostrata_inat_170396032_amar16_c.jpeg",
              "caption": "Peperomia prostrata B.S.Williams ex Mast. & T.Moore, observed by Amarú Ramón Salcedo in Pichincha, Ecuador; all rights reserved; reproduced with kind permission from the originator.",
              "credit": "hermetospheres.com",
              "creditUrl": "https://hermetospheres.com/2026/04/18/a-truly-tiny-dwarf/"
            },
            {
              "src": "https://hermetospheres.com/wp-content/uploads/2025/11/p_prostrata_251119_cs4_4640-4725_86f.jpg",
              "caption": "Peperomia prostrata in a container inspired by the flora of Costa Rica, 19 November 2025, 68 days after onset; image focus stacked from 120 single frames.",
              "credit": "hermetospheres.com",
              "creditUrl": "https://hermetospheres.com/2026/04/18/a-truly-tiny-dwarf/"
            },
            {
              "src": "https://www.aquaplante.fr/99610/peperomia-prostrata-string-of-turtles-plante-de-terrarium-humide.jpg",
              "caption": "Peperomia prostrata \"String of Turtles\" in a Glass Terrarium",
              "credit": "www.aquaplante.fr",
              "creditUrl": "https://www.aquaplante.fr/plantes-de-terrarium-paludarium/aquaplante/87818-peperomia-prostrata-string-of-turtles-plante-de-terrarium-humide.html"
            },
            {
              "src": "https://flowerandtwignursery.com.au/cdn/shop/files/peperomia-prostrata-string-of-turtles-366098_1200x1200.jpg?v=1740571908",
              "caption": "Original reference photo.",
              "credit": "flowerandtwignursery.com.au",
              "creditUrl": "https://flowerandtwignursery.com.au/products/peperomia-prostrata-string-of-turtles"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Photo source: flowerandtwignursery.com.au",
              "url": "https://flowerandtwignursery.com.au/products/peperomia-prostrata-string-of-turtles"
            }
          ]
        },
        {
          "id": 46,
          "name": "Pilea glauca",
          "scientific": "Pilea glauca",
          "difficulty": "Easy",
          "about": "Tiny silver blue leaves on fine red trailing stems. It forms a soft curtain over the edge of wood. It needs a damp root zone.",
          "conditions": [
            [
              "Light",
              "Bright, indirect"
            ],
            [
              "Roots",
              "Damp"
            ],
            [
              "Humidity",
              "Medium"
            ],
            [
              "Growth",
              "Medium"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://i.etsystatic.com/35281969/r/il/dfaa13/3963253293/il_570xN.3963253293_6vjc.jpg",
              "caption": "Mini Live Moss Terrarium with Pilea Glauca Aquamarine",
              "credit": "www.etsy.com",
              "creditUrl": "https://www.etsy.com/listing/1230222834/mini-live-moss-terrarium-with-pilea"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0622/2961/0748/files/Pileaglaucas.jpg?v=1714908018",
              "caption": "Pilea glaucophylla in Hand",
              "credit": "ome.design",
              "creditUrl": "https://ome.design/es/blogs/guides/a-masterful-guide-to-the-asparagus-fern"
            },
            {
              "src": "https://terrariumtribe.com/wp-content/uploads/2023/05/tiny-pilea-glauca-terrarium.jpg",
              "caption": "Miniature Pilea Glauca Terrarium",
              "credit": "terrariumtribe.com",
              "creditUrl": "https://terrariumtribe.com/terrarium-plants/pilea-glauca/"
            },
            {
              "src": "https://flowerandtwignursery.com.au/cdn/shop/files/pilea-glauca-silver-sprinkles-177178_1200x1200.jpg?v=1717505893",
              "caption": "Original reference photo.",
              "credit": "flowerandtwignursery.com.au",
              "creditUrl": "https://flowerandtwignursery.com.au/products/pilea-glauca-silver-sprinkles"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Photo source: flowerandtwignursery.com.au",
              "url": "https://flowerandtwignursery.com.au/products/pilea-glauca-silver-sprinkles"
            }
          ]
        },
        {
          "id": 47,
          "name": "Air plants",
          "scientific": "Tillandsia (small species such as T. ionantha)",
          "difficulty": "Easy",
          "about": "Spiky rosettes that need no soil and can be wired onto the highest, driest points of the wood. They should dry out between mistings and should not sit in constant splash.",
          "conditions": [
            [
              "Light",
              "Bright"
            ],
            [
              "Roots",
              "No substrate"
            ],
            [
              "Humidity",
              "Low to medium"
            ],
            [
              "Growth",
              "Slow"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0157/4262/files/blooming_clump_large.jpg?v=1562692539",
              "caption": "Tillandsia ionantha air plant clump in bloom",
              "credit": "www.air-plants.com",
              "creditUrl": "https://www.air-plants.com/blogs/tillandsia-info-care/clump-propagation"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0157/4262/files/ionantha_clump_on_driftwood_large.jpg?v=1562695445",
              "caption": "Tillandsia ionantha clump on driftwood",
              "credit": "www.air-plants.com",
              "creditUrl": "https://www.air-plants.com/blogs/tillandsia-info-care/clump-propagation"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0157/4262/files/ionantha_rubra_clump2_ffeda592-e6f7-42e4-9ca6-5c90abcca184_large.jpg?v=1562694105",
              "caption": "Tillandsia ionantha rubra air plant on a wire",
              "credit": "www.air-plants.com",
              "creditUrl": "https://www.air-plants.com/blogs/tillandsia-info-care/clump-propagation"
            },
            {
              "src": "https://collectorsonline.com.au/cdn/shop/files/ionanthavar.ionantha_c0cc416b-b449-4c4a-9c54-757265d11378.jpg?v=1720785329",
              "caption": "Original reference photo.",
              "credit": "collectorsonline.com.au",
              "creditUrl": "https://collectorsonline.com.au/products/tillandsia-ionantha"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Photo source: collectorsonline.com.au",
              "url": "https://collectorsonline.com.au/products/tillandsia-ionantha"
            }
          ]
        },
        {
          "id": 48,
          "name": "Rock felt fern",
          "scientific": "Pyrrosia rupestris",
          "difficulty": "Easy",
          "about": "An Australian native epiphytic fern with small, thick fronds on a creeping rhizome. It handles drier air than most ferns, which suits exposed wood in SA summers.",
          "conditions": [
            [
              "Light",
              "Bright, indirect"
            ],
            [
              "Roots",
              "Damp crevices"
            ],
            [
              "Humidity",
              "Low to medium"
            ],
            [
              "Growth",
              "Slow"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://garden.org/pics/2018-03-04/tofitropic/d9c6fb-500.jpg",
              "caption": "Rock Felt Fern on Tree Bark",
              "credit": "garden.org",
              "creditUrl": "https://garden.org/plants/view/120094/Rock-Felt-Fern-Pyrrosia-rupestris/"
            },
            {
              "src": "https://apps.lucidcentral.org/ferns/images/entities/pyrrosia_rupestris/f10150_bg8539.jpg",
              "caption": "Rock felt fern growing detail",
              "credit": "apps.lucidcentral.org",
              "creditUrl": "https://apps.lucidcentral.org/ferns/text/entities/pyrrosia_rupestris.htm"
            },
            {
              "src": "https://apps.lucidcentral.org/ferns/images/entities/pyrrosia_rupestris/f10033_bg8539.jpg",
              "caption": "Rock felt fern growing detail",
              "credit": "apps.lucidcentral.org",
              "creditUrl": "https://apps.lucidcentral.org/ferns/text/entities/pyrrosia_rupestris.htm"
            },
            {
              "src": "https://www.nurseriesonline.com.au/wp-content/uploads/2019/04/pyrrosia-rupestris.jpg",
              "caption": "Original reference photo.",
              "credit": "nurseriesonline.com.au",
              "creditUrl": "https://www.nurseriesonline.com.au/plant-index/ferns/pyrrosia-rupestris/"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Photo source: nurseriesonline.com.au",
              "url": "https://www.nurseriesonline.com.au/plant-index/ferns/pyrrosia-rupestris/"
            }
          ]
        },
        {
          "id": 217,
          "name": "Earth Star (Cryptanthus bivittatus)",
          "scientific": "Cryptanthus bivittatus",
          "difficulty": "Easy",
          "about": "A small terrestrial bromeliad that forms a flat rosette of wavy, pointed leaves striped in green, cream and pink. It is used above the waterline in paludariums and on emersed hardscape, and must not be submerged. Give it bright, indirect light, high humidity and a moist but free-draining spot, since constant waterlogging rots the base.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "10 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Cryptanthus_bivittatus_kz01.jpg/1280px-Cryptanthus_bivittatus_kz01.jpg",
              "caption": "Planted among moss in a glasshouse bed",
              "credit": "Wikimedia Commons",
              "creditUrl": "https://commons.wikimedia.org/wiki/File:Cryptanthus_bivittatus_kz01.jpg"
            },
            {
              "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Cryptanthus_bivittatus_1zz.jpg/1280px-Cryptanthus_bivittatus_1zz.jpg",
              "caption": "Planted as dense ground cover",
              "credit": "Wikimedia Commons",
              "creditUrl": "https://commons.wikimedia.org/wiki/File:Cryptanthus_bivittatus_1zz.jpg"
            },
            {
              "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Earth_Star_%28Cryptanthus_bivittatus%29.jpg/1280px-Earth_Star_%28Cryptanthus_bivittatus%29.jpg",
              "caption": "Clump of rosettes growing together",
              "credit": "Wikimedia Commons",
              "creditUrl": "https://commons.wikimedia.org/wiki/File:Earth_Star_(Cryptanthus_bivittatus).jpg"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0596/3474/5437/files/Image1Cryptanthusbivittatus.jpg?v=1735003921&width=1200",
              "caption": "Single rosette on a black background",
              "credit": "Tankquility",
              "creditUrl": "https://tankquility.com.au/products/cryptanthus-bivittatus"
            }
          ],
          "offers": [
            {
              "shop": "Tankquility",
              "url": "https://tankquility.com.au/products/cryptanthus-bivittatus",
              "unit": "plant",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Tankquility: product page",
              "url": "https://tankquility.com.au/products/cryptanthus-bivittatus"
            }
          ]
        },
        {
          "id": 218,
          "name": "Cryptanthus acaulis var. ruber",
          "scientific": "Cryptanthus acaulis var. ruber",
          "difficulty": "Easy",
          "about": "A compact terrestrial bromeliad with a low, star-shaped rosette of wavy leaves in reddish bronze to purple, with silvery scales on the undersides. It suits damp, shaded spots above the waterline in paludariums and must not be submerged. Colour is best in bright, indirect light; keep the medium moist but well drained and the air humid.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Slow"
            ],
            [
              "Height",
              "5 to 15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cryptanthus_acaulis_var_ruber_kz03.jpg/1280px-Cryptanthus_acaulis_var_ruber_kz03.jpg",
              "caption": "Planted rosette growing in substrate",
              "credit": "Wikimedia Commons",
              "creditUrl": "https://commons.wikimedia.org/wiki/File:Cryptanthus_acaulis_var_ruber_kz03.jpg"
            },
            {
              "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cryptanthus_acaulis_var_ruber_kz04.jpg/1280px-Cryptanthus_acaulis_var_ruber_kz04.jpg",
              "caption": "Planted rosette in flower",
              "credit": "Wikimedia Commons",
              "creditUrl": "https://commons.wikimedia.org/wiki/File:Cryptanthus_acaulis_var_ruber_kz04.jpg"
            },
            {
              "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Cryptanthus_acaulis_var_ruber_kz01.jpg/1280px-Cryptanthus_acaulis_var_ruber_kz01.jpg",
              "caption": "Close-up of a flowering rosette",
              "credit": "Wikimedia Commons",
              "creditUrl": "https://commons.wikimedia.org/wiki/File:Cryptanthus_acaulis_var_ruber_kz01.jpg"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0596/3474/5437/files/Image1Cryptanthusacaulisvar.ruber.jpg?v=1735027430&width=1200",
              "caption": "Single rosette on a black background",
              "credit": "Tankquility",
              "creditUrl": "https://tankquility.com.au/products/cryptanthus-acaulis-var-ruber"
            }
          ],
          "offers": [
            {
              "shop": "Tankquility",
              "url": "https://tankquility.com.au/products/cryptanthus-acaulis-var-ruber",
              "unit": "plant",
              "price": 1295,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Tankquility: product page",
              "url": "https://tankquility.com.au/products/cryptanthus-acaulis-var-ruber"
            }
          ]
        }
      ]
    },
    {
      "id": "waterline",
      "name": "Along the waterline",
      "intro": "Roots in the water, leaves above it. Most are houseplants sold through general nurseries, so buy them in SA rather than from Queensland.",
      "plants": [
        {
          "id": 52,
          "name": "Nerve plant",
          "scientific": "Fittonia",
          "difficulty": "Easy",
          "about": "Leaves with strongly marked white or pink veins. It wilts quickly in dry air, so it does best close to the water surface.",
          "conditions": [
            [
              "Light",
              "Medium, indirect"
            ],
            [
              "Roots",
              "Tolerates wet roots"
            ],
            [
              "Humidity",
              "High"
            ],
            [
              "Growth",
              "Medium"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.salla.sa/YRYGw/a12b3251-8662-4cd3-91f1-22d8ebe4c7ed-914.90963855422x1000-clHrcrGGRUiXVbeCPH3MOHem48j36Dz2o5BpzSXm.jpg",
              "caption": "Glass Terrarium Gift",
              "credit": "soullleaf.com",
              "creditUrl": "https://soullleaf.com/zozyxlr"
            },
            {
              "src": "https://i.pinimg.com/originals/71/a2/f1/71a2f1c91aa86745adf8b001f1d45aa4.jpg",
              "caption": "Large Fittonia Terrarium",
              "credit": "www.pinterest.com",
              "creditUrl": "https://www.pinterest.com/pin/large-fittonia-terrarium-in-2024--648307308887749992/"
            },
            {
              "src": "https://i.etsystatic.com/23597110/r/il/f67f0c/6877385368/il_570xN.6877385368_btzi.jpg",
              "caption": "Tropical Fittonia Terrarium",
              "credit": "www.etsy.com",
              "creditUrl": "https://www.etsy.com/listing/1681860023/tropical-fittonia-terrarium-ready-made"
            },
            {
              "src": "https://flowerandtwignursery.com.au/cdn/shop/files/fittonia-skeleton-819173_1200x1200.jpg?v=1717506172",
              "caption": "Original reference photo.",
              "credit": "flowerandtwignursery.com.au",
              "creditUrl": "https://flowerandtwignursery.com.au/products/fittonia-skeleton"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Photo source: flowerandtwignursery.com.au",
              "url": "https://flowerandtwignursery.com.au/products/fittonia-skeleton"
            }
          ]
        },
        {
          "id": 53,
          "name": "Japanese sweet flag",
          "scientific": "Acorus gramineus",
          "difficulty": "Easy",
          "about": "Short, grassy tufts that add fine texture at the waterline. It is a bog plant, not a true aquatic, so the crown must stay above the water or it rots.",
          "conditions": [
            [
              "Light",
              "Medium to bright"
            ],
            [
              "Roots",
              "Wet, crown above water"
            ],
            [
              "Humidity",
              "Any"
            ],
            [
              "Growth",
              "Slow"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/acorus-gramineus-621759f28da99.jpg",
              "caption": "Acorus gramineus, United States Botanic Garden",
              "credit": "© David J. Stang, 6. Nov. 2005 (CC BY-SA 4.0)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/acorus-gramineus"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/carnivorous-bank-56b371cabd9bf.jpg",
              "caption": "Aquascape: carnivorous bank (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/carnivorous-bank"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/acorus-gramineus-5155ddfeaadff.jpg",
              "caption": "Acorus gramineus 'Pusillus' in an aquarium",
              "credit": "© moss-maniac",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/acorus-gramineus"
            },
            {
              "src": "https://www.nurserywarehouse.com.au/cdn/shop/files/Acorus_Gramineus_Ogon_Golden_Sweet_Flag_1.jpg?v=1774351062",
              "caption": "Original reference photo. Acorus gramineus 'Ogon' cultivar.",
              "credit": "nurserywarehouse.com.au",
              "creditUrl": "https://www.nurserywarehouse.com.au/products/acorus-gramineus-ogon-golden-sweet-flag"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Photo source: nurserywarehouse.com.au",
              "url": "https://www.nurserywarehouse.com.au/products/acorus-gramineus-ogon-golden-sweet-flag"
            }
          ]
        },
        {
          "id": 55,
          "name": "Bacopa caroliniana",
          "scientific": "Bacopa caroliniana (grown out of water)",
          "difficulty": "Easy",
          "about": "An aquarium stem plant that keeps growing once it reaches the surface and produces small blue flowers above water. Left to grow out, it carries the planting up past the waterline.",
          "conditions": [
            [
              "Light",
              "Bright"
            ],
            [
              "Roots",
              "Submerged stems"
            ],
            [
              "Humidity",
              "Any"
            ],
            [
              "Growth",
              "Medium"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/bacopa-caroliniana-4f7a0145ddd50.jpg",
              "caption": "Bacopa caroliniana",
              "credit": "Svennovitch (2005)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/bacopa-caroliniana"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/unterwassergarten-52f8d59d65769.jpg",
              "caption": "Aquascape: unterwassergarten (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/unterwassergarten"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/bacopa-caroliniana-4f7a014654b9f.jpg",
              "caption": "Bacopa caroliniana",
              "credit": "Svennovitch (2005)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/bacopa-caroliniana"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/043%20BDT/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Bacopacaroliniana(043BDT)/4465"
            }
          ],
          "offers": [
            {
              "shop": "Live Fish",
              "url": "https://www.livefish.com.au/aquarium-plants/tissue-culture-plants.html",
              "unit": "Tissue culture tub",
              "price": 1250,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Live Fish: tissue culture range",
              "url": "https://www.livefish.com.au/aquarium-plants/tissue-culture-plants.html"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Bacopacaroliniana(043BDT)/4465"
            }
          ]
        },
        {
          "id": 139,
          "name": "Red Root Floater",
          "scientific": "Phyllanthus fluitans",
          "difficulty": "Easy",
          "about": "A floating plant with round, water-repellent leaves about 1 to 3 cm across, with fine roots below. In strong light and lean nitrate the leaves and roots turn deep red; in weaker light it stays green. It shades the water and takes up excess nutrients, and dislikes splashing, so keep surface flow gentle.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Medium"
            ],
            [
              "Height",
              "Floating"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/files/red-root-floaters-sideview.jpg?v=1729818195&width=1200",
              "caption": "Underwater view of the red roots, with fish",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/red-root-floaters"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/files/red-root-floaters-floating-plant.jpg?v=1729817553&width=1200",
              "caption": "Floating at the surface of an aquarium",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/red-root-floaters"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/phyllanthus-fluitans-5308cb6d83fc8.jpg",
              "caption": "Red leaves and roots in an aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/phyllanthus-fluitans"
            },
            {
              "src": "https://www.aquarzon.com/1109-large_default/red-root-floater-phyllanthus-fluitans.jpg",
              "caption": "Portion on a white background",
              "credit": "Aquarzon",
              "creditUrl": "https://www.aquarzon.com/home/366-red-root-floater-phyllanthus-fluitans.html"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/red-root-floaters",
              "unit": "portion",
              "price": 595,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/phyllanthus-fluitans-red-root-floater",
              "unit": "15 plants",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/home/366-red-root-floater-phyllanthus-fluitans.html",
              "unit": "5-6cm plant",
              "price": 990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/phyllanthus-fluitans-red-root-floaters",
              "unit": "portion",
              "price": 1400,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Sydney Aquascapes",
              "url": "https://sydney-aquascapes.com.au/products/red-root-floaters",
              "unit": "portion",
              "price": 400,
              "was": 500,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 4,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/red-root-floaters"
            },
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/phyllanthus-fluitans-red-root-floater"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/home/366-red-root-floater-phyllanthus-fluitans.html"
            },
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/phyllanthus-fluitans-red-root-floaters"
            },
            {
              "label": "Sydney Aquascapes: product page",
              "url": "https://sydney-aquascapes.com.au/products/red-root-floaters"
            }
          ]
        },
        {
          "id": 200,
          "name": "Duckweed",
          "scientific": "Lemna minor",
          "difficulty": "Easy",
          "about": "A tiny floating plant with single oval fronds a few millimetres long, each with one short root. It doubles quickly and soon covers still surfaces, shading plants below and taking up nitrate. It is very hard to remove once added, so it is best kept in a separate tank or contained with a surface ring.",
          "conditions": [
            [
              "Light",
              "Low to high"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "Floating"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/files/402105A6-0432-4E1B-9AA4-75D430358C80.jpg?v=1725933265&width=1200",
              "caption": "Underwater view of a duckweed mat, with a guppy",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/duckweed"
            },
            {
              "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Wasserlinsenteppich.jpg/1280px-Wasserlinsenteppich.jpg",
              "caption": "Duckweed carpet seen from below in an aquarium",
              "credit": "Wikimedia Commons",
              "creditUrl": "https://commons.wikimedia.org/wiki/File:Wasserlinsenteppich.jpg"
            },
            {
              "src": "https://www.garnelio.de/media/image/db/db/02/Wasserlinsen127n6YFNoJn2c4s_1280x1280.jpg",
              "caption": "Floating among plants in an aquarium",
              "credit": "Garnelio",
              "creditUrl": "https://www.garnelio.de/en/garnelio-duckweed-lemna-minor-portion"
            },
            {
              "src": "https://www.garnelio.de/media/image/f2/26/ec/Wasserlinsen334qFwpH9lOg6hO3_1280x1280.jpg",
              "caption": "Close-up of the fronds on their own",
              "credit": "Garnelio",
              "creditUrl": "https://www.garnelio.de/en/garnelio-duckweed-lemna-minor-portion"
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/duckweed-lemna-minor",
              "unit": "100g",
              "price": 895,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Sydney Aquascapes",
              "url": "https://sydney-aquascapes.com.au/products/lemna-minor-duck-weed",
              "unit": "portion",
              "price": 500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/duckweed",
              "unit": "portion",
              "price": 495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/duckweed-lemna-minor"
            },
            {
              "label": "Sydney Aquascapes: product page",
              "url": "https://sydney-aquascapes.com.au/products/lemna-minor-duck-weed"
            },
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/duckweed"
            }
          ]
        },
        {
          "id": 201,
          "name": "Giant Duckweed",
          "scientific": "Spirodela polyrhiza",
          "difficulty": "Easy",
          "about": "A floating duckweed with rounded fronds about 0.5 to 1 cm across, green above and purple-red below, each with a tuft of fine roots. It spreads quickly over calm water and needs a good supply of nitrate, phosphate and potassium. The larger fronds make it much easier to net out than common duckweed, but it still needs regular thinning.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "Floating"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/IMG-8680.jpg?v=1784565258&width=1200",
              "caption": "Underwater view of the fronds and roots",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/giant-duckweed"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/IMG-8681.webp?v=1784568131&width=1200",
              "caption": "Covering the surface of an aquarium",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/giant-duckweed"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/spirodela-polyrhiza-4f7a03bad4f46.jpg",
              "caption": "Floating in an aquarium with smaller duckweed",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/spirodela-polyrhiza"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/1020/9995/files/IMG-9134.jpg?v=1786773139&width=1000",
              "caption": "Portion in a cup",
              "credit": "Micro Aquatic Shop",
              "creditUrl": "https://microaquaticshop.com.au/products/giant-duckweed"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/giant-duckweed",
              "unit": "portion of 20 leaves",
              "price": 795,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/giant-duckweed"
            }
          ]
        },
        {
          "id": 202,
          "name": "Azolla",
          "scientific": "Azolla filiculoides",
          "difficulty": "Easy",
          "about": "A tiny floating fern with overlapping, scale-like leaves forming small branching fronds about 1 to 2 cm across. It is green in moderate light and turns red to bronze in strong light or when nitrate is low. It spreads quickly over calm surfaces and is easily damaged by splashing or condensation dripping from the lid, so keep flow gentle.",
          "conditions": [
            [
              "Light",
              "Medium to high"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "Floating"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://cdn.shopify.com/s/files/1/0802/8835/0528/files/azolla.webp?v=1694307844",
              "caption": "Red-tinged fronds floating in an aquarium",
              "credit": "Liverpool Creek Aquariums",
              "creditUrl": "https://www.liverpoolcreekaquariums.com.au/products/azolla-filiculoides"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0648/1038/5633/files/Azolla.jpg?v=1724139349&width=1200",
              "caption": "Floating mat on open water",
              "credit": "Aquafy",
              "creditUrl": "https://aquafy.com.au/products/azolla"
            },
            {
              "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Azolla_filiculoides_kz01.jpg/1280px-Azolla_filiculoides_kz01.jpg",
              "caption": "Close-up of fronds floating with duckweed",
              "credit": "Wikimedia Commons",
              "creditUrl": "https://commons.wikimedia.org/wiki/File:Azolla_filiculoides_kz01.jpg"
            },
            {
              "src": "https://www.garnelio.de/media/image/92/3a/21/Azolla-filiculoides5xVClwByrAc42_1280x1280.jpg",
              "caption": "Portion in a cup",
              "credit": "Garnelio",
              "creditUrl": "https://www.garnelio.de/en/garnelio-algae-fern-azolla-filiculoides-portion"
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/azolla-filiculoides",
              "unit": "portion",
              "price": 795,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/azolla",
              "unit": "portion",
              "price": 895,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/azolla-floating-plant/",
              "unit": "portion",
              "price": 399,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/azolla-filiculoides"
            },
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/azolla"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/azolla-floating-plant/"
            }
          ]
        },
        {
          "id": 205,
          "name": "Bladderwort",
          "scientific": "Utricularia gibba",
          "difficulty": "Easy",
          "about": "A carnivorous plant with fine, thread-like branching stems carrying tiny bladder traps, and small yellow flowers above the surface in bright light. It floats in tangles or weaves through other plants. It grows fast in still, soft water with good light but spreads through a layout and is hard to remove, and the traps can catch newborn shrimp.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "CO2",
              "Optional"
            ],
            [
              "Growth",
              "Fast"
            ],
            [
              "Height",
              "Floating"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/utricularia-gibba-4f7a02cd3120f.jpg",
              "caption": "Fine strands tangled in an aquarium",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/utricularia-gibba"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/utricularia-gibba-4f7a02cdbb9af.jpg",
              "caption": "Mass of strands in an aquarium, with fish",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/utricularia-gibba"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/utricularia-gibba-4f7a02ce56871.jpg",
              "caption": "Close-up of a stem with bladder traps",
              "credit": "Flowgrow",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/utricularia-gibba"
            },
            {
              "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Utricularia_gibba_stolons_and_insect_trap.jpg/1280px-Utricularia_gibba_stolons_and_insect_trap.jpg",
              "caption": "Stolons and a trap on their own, in a container",
              "credit": "Wikimedia Commons",
              "creditUrl": "https://commons.wikimedia.org/wiki/File:Utricularia_gibba_stolons_and_insect_trap.jpg"
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/utricularia-gibba",
              "unit": "portion",
              "price": 1095,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/utricularia-gibba"
            }
          ]
        }
      ]
    }
  ]
};
