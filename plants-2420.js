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
          "about": "A Thai plant with crinkled, curling leaves that form small star shaped rosettes. Its texture is unlike anything else in the foreground. It needs a nutrient rich substrate and good iron levels to stay green.",
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
          "about": "Fine, grassy carpeting plant that spreads by runners. Needs good light and nutrients to carpet.",
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
              "5-10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "scientific": "Micranthemum sp. 'Takashi'",
          "difficulty": "Moderate",
          "about": "Carpeting baby tears with larger, rounder leaves than HC. Easier than HC but still wants good light.",
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
              "2-5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Short, grass-like carpeting plant spreading by runners. Wants decent light and CO2 to stay low and dense.",
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
              "3-8 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "difficulty": "Moderate",
          "about": "Tiny four-leaf clover-like carpeting fern. Stays low under strong light and CO2.",
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
              "2-5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Tiny pincushion rosette plant. Needs soft water, strong light and CO2.",
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
              "3-8 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 176,
          "name": "Eriocaulon breviscapum",
          "scientific": "Eriocaulon breviscapum",
          "difficulty": "Demanding",
          "about": "Short, grassy Eriocaulon that makes pincushion clumps. Needs soft water and strong light.",
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
              "5-10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 181,
          "name": "Creeping Jenny",
          "scientific": "Lysimachia nummularia",
          "difficulty": "Easy",
          "about": "Round-leaved creeper that does better emersed than fully submerged long term. Easy and spreading.",
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
              "5-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "difficulty": "Moderate",
          "about": "Short, grassy carpeting plant with stiff leaves. Spreads slowly by runners under good light.",
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
              "3-8 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Small crypt with narrow, wavy leaves that forms a low carpet. Slow and easy.",
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
              "8-15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Fine, grass-like plant that spreads by runners into a lawn in the foreground and midground.",
          "conditions": [
            [
              "Light",
              "Moderate to high"
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
              "Foreground/midground"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
        },
        {
          "id": 250,
          "name": "Cryptocoryne nevillii",
          "scientific": "Cryptocoryne nevillii",
          "difficulty": "Easy",
          "about": "Low, narrow-leaved crypt that spreads by runners into a foreground carpet.",
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
              "Short"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Scapeshop",
              "url": "https://scapeshop.com.au/products/cryptocoryne-nevillii-terracotta-pot",
              "unit": "3cm terracotta pot",
              "price": 1600,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Scapeshop: product page",
              "url": "https://scapeshop.com.au/products/cryptocoryne-nevillii-terracotta-pot"
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
              "src": "http://www.aquariumcoop.com/cdn/shop/files/cryptocoryne-lucens-8430287.jpg?v=1766095149",
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
          "about": "A compact form of cardinal flower with small round leaves on short stems. Underwater it stays green and tidy.",
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
              "5 to 10 cm"
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
              "src": "http://aquafy.com.au/cdn/shop/products/bacopa-monnieri_grande.jpg?v=1730198039",
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
          "about": "Bright green stem plant with small round leaves, often called Hemianthus umbrosum. Can be trimmed low as a carpet or left as a bush.",
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
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Fine-leaved bushy stem plant, similar to baby tears but taller. Currently sold out at the one shop listing it.",
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
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Fast, bright green stem plant with rounded leaves. Prefers cooler water and trims easily.",
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
              "10-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Rosette-forming stem plant with soft green leaves. Easy and compact.",
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
              "10-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "scientific": "Samolus parviflorus 'Red'",
          "difficulty": "Moderate",
          "about": "Red-leaved form of Samolus, also sold as Red Lysimachia. Needs more light for good colour.",
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
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 99,
          "name": "Echinodorus 'Green Flame'",
          "scientific": "Echinodorus 'Green Flame'",
          "difficulty": "Easy",
          "about": "Sword plant with ruffled green leaves. A root feeder that likes fertiliser tabs.",
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
              "20-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/rare-echinodorus-green-flame",
              "unit": "plant",
              "price": 1900,
              "was": 2900,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/rare-echinodorus-green-flame"
            }
          ]
        },
        {
          "id": 107,
          "name": "Echinodorus grisebachii",
          "scientific": "Echinodorus grisebachii",
          "difficulty": "Easy",
          "about": "Compact sword with light green leaves. Suits mid-size tanks.",
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
              "15-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/tissue-culture-echinodorus-grisebachii",
              "unit": "tissue culture cup",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/echin-grisebachii",
              "unit": "plant",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/tissue-culture-echinodorus-grisebachii"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/echin-grisebachii"
            }
          ]
        },
        {
          "id": 108,
          "name": "Echinodorus 'Tropica' (parviflorus)",
          "scientific": "Echinodorus parviflorus",
          "difficulty": "Easy",
          "about": "Mid-size sword with dark, slightly red-tinged leaves. A root feeder.",
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
              "15-25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/echinodorus-parviflorus-tropica/",
              "unit": "plant",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/peacock-swords-live-aquarium-plant/",
              "unit": "plant",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/echinodorus-parviflorus-tropica/"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/peacock-swords-live-aquarium-plant/"
            }
          ]
        },
        {
          "id": 109,
          "name": "Echinodorus 'Rose'",
          "scientific": "Echinodorus 'Rose'",
          "difficulty": "Easy",
          "about": "Sword with rosy new growth. A moderate-sized root feeder.",
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
              "20-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/echinodorus-rose/",
              "unit": "plant",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/echinodorus-rose/"
            }
          ]
        },
        {
          "id": 110,
          "name": "Echinodorus 'Kleiner Bar'",
          "scientific": "Echinodorus 'Kleiner Bar'",
          "difficulty": "Easy",
          "about": "Compact sword with bright green, pointed leaves. Suits small to mid tanks.",
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
              "15-25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/echinodorus-kleiner-bar/",
              "unit": "plant",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/echinodorus-kleiner-bar/"
            }
          ]
        },
        {
          "id": 111,
          "name": "Echinodorus 'Red Devil'",
          "scientific": "Echinodorus 'Red Devil'",
          "difficulty": "Easy",
          "about": "Red-leaved sword of moderate size. Feed through the roots.",
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
              "20-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/echinodorus-red-devil/",
              "unit": "plant",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/echinodorus-red-devil/"
            }
          ]
        },
        {
          "id": 116,
          "name": "Ludwigia ovalis",
          "scientific": "Ludwigia ovalis",
          "difficulty": "Easy",
          "about": "Low-growing Ludwigia with oval leaves. Easy stem plant for the midground.",
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
              "10-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 119,
          "name": "Ludwigia repens",
          "scientific": "Ludwigia repens",
          "difficulty": "Easy",
          "about": "Easy, fast green-to-bronze stem plant. Tolerates a wide range of conditions.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/ludwigia-repens",
              "unit": "bunch",
              "price": 1450,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/ludwigia-natans-submersed-bunch-s027",
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
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/ludwigia-repens"
            },
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/ludwigia-natans-submersed-bunch-s027"
            }
          ]
        },
        {
          "id": 122,
          "name": "Ludwigia 'Super Mini Red'",
          "scientific": "Ludwigia palustris 'Super Red Mini'",
          "difficulty": "Moderate",
          "about": "Short, compact red Ludwigia for the midground. Needs strong light for colour.",
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
              "10-25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Small, rounded-leaf Rotala that stays fairly compact. Easy under medium light.",
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
              "20-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 138,
          "name": "Brazilian Pennywort",
          "scientific": "Hydrocotyle leucocephala",
          "difficulty": "Easy",
          "about": "Fast creeping stem plant with round leaves. Can be planted or left to trail.",
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
              "10-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/brazilian-pennywort",
              "unit": "bunch",
              "price": 1495,
              "was": 1800,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/hydrocotyle-leucocephala",
              "unit": "portion",
              "price": 1095,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/gold-pennywort-live-aquarium-plant/",
              "unit": "plant",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/brazilian-pennywort"
            },
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/hydrocotyle-leucocephala"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/gold-pennywort-live-aquarium-plant/"
            }
          ]
        },
        {
          "id": 153,
          "name": "Hygrophila 'Pink Poly'",
          "scientific": "Hygrophila polysperma 'Rosanervig'",
          "difficulty": "Moderate",
          "about": "Polysperma with pink-veined leaves. Needs more light for colour.",
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
              "15-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/hygrophila-rosanervis-submersed-bunch-pink-poly-s018",
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
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/hygrophila-rosanervis-submersed-bunch-pink-poly-s018"
            }
          ]
        },
        {
          "id": 158,
          "name": "Limnophila aromatica 'Kalimantan Mini'",
          "scientific": "Limnophila aromatica",
          "difficulty": "Easy",
          "about": "Compact Limnophila that goes purple underneath in strong light. Easy.",
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
              "15-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "difficulty": "Demanding",
          "about": "Red-leaved Ammannia that needs strong light and nutrients. Sold as tissue culture.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 163,
          "name": "Pogostemon sampsonii",
          "scientific": "Pogostemon sampsonii",
          "difficulty": "Moderate",
          "about": "Broad-leaved Pogostemon with a bushy habit. Wants decent light and CO2.",
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
              "30-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/pogostemon-sampsonii",
              "unit": "portion (from price)",
              "price": 999,
              "was": 3897,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/pogostemon-sampsonii",
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
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/pogostemon-sampsonii"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/pogostemon-sampsonii"
            }
          ]
        },
        {
          "id": 164,
          "name": "Lindernia rotundifolia",
          "scientific": "Lindernia rotundifolia",
          "difficulty": "Easy",
          "about": "Compact stem plant with small round leaves, pink-tinged in good light. Easy midground filler.",
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
              "10-25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "difficulty": "Moderate",
          "about": "Unusual rosette-like stem plant with round, pale green leaves. Needs decent light and stable conditions.",
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
              "10-25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 170,
          "name": "Alternanthera 'Rosanervig'",
          "scientific": "Alternanthera reineckii 'Rosanervig'",
          "difficulty": "Moderate",
          "about": "Alternanthera with green leaves and pink veins. Likes strong light.",
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
              "10-25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/alternanthera-rosanervig/",
              "unit": "bunch",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "The Online Aquarium Shop",
              "url": "https://www.theonlineaquariumshop.com.au/product/alternanthera-rosanervig/",
              "unit": "pot",
              "price": 1290,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/alternanthera-rosanervig/"
            },
            {
              "label": "The Online Aquarium Shop: product page",
              "url": "https://www.theonlineaquariumshop.com.au/product/alternanthera-rosanervig/"
            }
          ]
        },
        {
          "id": 171,
          "name": "Alternanthera 'Rosaefolia'",
          "scientific": "Alternanthera reineckii var. rosaefolia",
          "difficulty": "Moderate",
          "about": "Red-pink Alternanthera form with rounded leaves. Needs strong light for colour.",
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
              "15-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/tissue-culture-alternanthera-rosaefolia",
              "unit": "tissue culture cup",
              "price": 1800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/tissue-culture-alternanthera-rosaefolia"
            }
          ]
        },
        {
          "id": 172,
          "name": "Cuphea anagalloidea",
          "scientific": "Cuphea anagalloidea",
          "difficulty": "Moderate",
          "about": "Compact stem plant with small rounded leaves. Wants good light.",
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
              "10-25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "difficulty": "Demanding",
          "about": "Grassy Eriocaulon with a pincushion look. Needs soft, acidic water, good light and CO2.",
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
              "10-15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 177,
          "name": "Eriocaulon 'Ratnagiri'",
          "scientific": "Eriocaulon sp. 'Ratnagiri'",
          "difficulty": "Demanding",
          "about": "Rare Eriocaulon from India with a tight rosette. Needs soft water, strong light and CO2.",
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
              "Very slow"
            ],
            [
              "Height",
              "5-12 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Grassy rosette plant with long, soft leaves. Likes soft water and good light.",
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
              "15-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 179,
          "name": "Cyperus helferi",
          "scientific": "Cyperus helferi",
          "difficulty": "Easy",
          "about": "Clumping, grassy plant with wide, strappy leaves. Easy and takes medium light.",
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
              "15-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/cyperus-helferi",
              "unit": "portion",
              "price": 1295,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/tissue-culture-cyperus-helferi-clumping-grass",
              "unit": "tissue culture cup",
              "price": 1495,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/products/cyperus-helferi-elegant-grass-like-aquarium-plant",
              "unit": "portion",
              "price": 3000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/cyperus-helferi"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/tissue-culture-cyperus-helferi-clumping-grass"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/products/cyperus-helferi-elegant-grass-like-aquarium-plant"
            }
          ]
        },
        {
          "id": 180,
          "name": "Floscopa scandens 'Mini Bamboo'",
          "scientific": "Floscopa scandens",
          "difficulty": "Easy",
          "about": "Bamboo-like jointed stem plant with narrow leaves. Easy and sold as tissue culture.",
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
              "15-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/tissue-culture-floscopa-scandens-mini-bamboo",
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
              "url": "https://nanotanksaustralia.com.au/products/tissue-culture-floscopa-scandens-mini-bamboo"
            }
          ]
        },
        {
          "id": 182,
          "name": "Juncus repens",
          "scientific": "Juncus repens",
          "difficulty": "Easy",
          "about": "Creeping rush with upright green blades. Easy and slow to spread.",
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
              "5-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 183,
          "name": "Umbrella Hair Grass (Eleocharis vivipara)",
          "scientific": "Eleocharis vivipara",
          "difficulty": "Easy",
          "about": "Taller hairgrass with arching, umbrella-like stems. Easy and spreads by runners.",
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
              "15-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 184,
          "name": "Bacopa 'Japan'",
          "scientific": "Bacopa sp. 'Japan'",
          "difficulty": "Easy",
          "about": "Small-leaved Bacopa that grows as a creeping or upright stem. Easy.",
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
              "10-25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Narrow-leaved Sagittaria that stays smaller than giant types. Easy root feeder.",
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
              "15-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Compact Staurogyne with slightly larger leaves than S. repens. Easy and forms a dense bush.",
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
              "10-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Easy crypt with olive green, wavy leaves. Slow, root feeding, and may melt when moved.",
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
              "10-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Easy crypt with yellowish-green narrow leaves. Slow and root feeding.",
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
              "10-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Crypt with ruffled, reddish-brown leaves. Slow and root feeding.",
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
              "15-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Crypt with long, narrow, dark green leaves. Slow and easy.",
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
              "15-25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "difficulty": "Easy",
          "about": "Pink-tinged wendtii form. Currently sold out.",
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
              "10-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "difficulty": "Moderate",
          "about": "Tall crypt with narrow, rippled leaves. Slow and fussier about stable conditions.",
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
              "15-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Narrow-leaved chain sword that spreads by runners and suits the foreground or midground. Sold as tissue culture cups.",
          "conditions": [
            [
              "Light",
              "Moderate to high"
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
              "10-15cm"
            ]
          ],
          "saNote": "The Tech Den ships only tissue cultures. Its other live plants are pickup only.",
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Broader-leaved chain sword that carpets the foreground or midground by runners.",
          "conditions": [
            [
              "Light",
              "Moderate"
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
              "15cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Compact crypt with olive leaves and a reddish underside. It is slow to start but hardy.",
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
              "Midground"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 230,
          "name": "Echinodorus 'Schlueteri'",
          "scientific": "Echinodorus schlueteri",
          "difficulty": "Easy",
          "about": "Compact sword with speckled leaves, under 25cm.",
          "conditions": [
            [
              "Light",
              "Moderate to high"
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
              "Under 25cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/products/echinodorus-schuleteri-5cm-pot",
              "unit": "5cm pot",
              "price": 1695,
              "was": 2000,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/products/echinodorus-schuleteri-5cm-pot"
            }
          ]
        },
        {
          "id": 231,
          "name": "Echinodorus 'White Flame'",
          "scientific": "Echinodorus 'White Flame'",
          "difficulty": "Easy",
          "about": "Compact sword with pale, flame-like variegation.",
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
              "Compact"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/products/echinodorus-white-flame-emersed",
              "unit": "single emersed plant, no pot",
              "price": 3000,
              "was": 6000,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/products/echinodorus-white-flame-emersed"
            }
          ]
        },
        {
          "id": 232,
          "name": "Didiplis diandra (Water Hedge)",
          "scientific": "Didiplis diandra",
          "difficulty": "Easy",
          "about": "Fine-leaved stem plant that forms a bushy hedge.",
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
              "Slow"
            ],
            [
              "Height",
              "Background"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Stem plant with purple-bronze leaves under good light.",
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
              "Midground"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 234,
          "name": "Alternanthera reineckii 'Red'",
          "scientific": "Alternanthera reineckii",
          "difficulty": "Moderate",
          "about": "Red-leaved stem plant that colours best under strong light with CO2.",
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
              "Mid to back"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/red-collection/products/alternanthera-reineckii-submersed-bunch-red-alt-s002",
              "unit": "bunch of 6-10 stems, submersed",
              "price": 850,
              "was": 1200,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/aquadepot-tissue-culture-alternanthera-reineckii-red",
              "unit": "TC cup",
              "price": 1995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/alternanthera-reineckii",
              "unit": "each",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/red-collection/products/alternanthera-reineckii-submersed-bunch-red-alt-s002"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/aquadepot-tissue-culture-alternanthera-reineckii-red"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/alternanthera-reineckii"
            }
          ]
        },
        {
          "id": 246,
          "name": "Cryptocoryne wendtii 'Tropica'",
          "scientific": "Cryptocoryne wendtii 'Tropica'",
          "difficulty": "Easy",
          "about": "Hardy crypt with brownish-green leaves. It is slow to settle after planting.",
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
              "About 12cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 247,
          "name": "Cryptocoryne wendtii 'Broadleaf'",
          "scientific": "Cryptocoryne wendtii 'Broadleaf'",
          "difficulty": "Easy",
          "about": "Hardy crypt with wide leaves.",
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
              "Midground"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Scapeshop",
              "url": "https://scapeshop.com.au/products/cryptocoryne-wendtii-broadleaf-5cm-pot",
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
              "label": "Scapeshop: product page",
              "url": "https://scapeshop.com.au/products/cryptocoryne-wendtii-broadleaf-5cm-pot"
            }
          ]
        },
        {
          "id": 248,
          "name": "Cryptocoryne wendtii 'Tall'",
          "scientific": "Cryptocoryne wendtii 'Tall'",
          "difficulty": "Easy",
          "about": "Taller form of C. wendtii for the midground to background.",
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
              "Midground to background"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Scapeshop",
              "url": "https://scapeshop.com.au/products/cryptocoryne-wendtii-tall-5cm-pot",
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
              "label": "Scapeshop: product page",
              "url": "https://scapeshop.com.au/products/cryptocoryne-wendtii-tall-5cm-pot"
            }
          ]
        },
        {
          "id": 249,
          "name": "Cryptocoryne 'Mi Oya'",
          "scientific": "Cryptocoryne sp. 'Mi Oya'",
          "difficulty": "Easy",
          "about": "Crypt with textured, bubbly leaves.",
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
              "Midground"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "scientific": "Cryptocoryne nurii 'Rosen Maiden'",
          "difficulty": "Moderate",
          "about": "Pink-toned form of C. nurii. It is slow to establish.",
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
              "Midground"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 252,
          "name": "Cryptocoryne affinis 'Red'",
          "scientific": "Cryptocoryne affinis",
          "difficulty": "Easy",
          "about": "Hardy crypt with a red underside to the leaves.",
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
              "Midground"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Tankquility",
              "url": "https://tankquility.com.au/products/cryptocoryne-affinis-red",
              "unit": "each",
              "price": 2495,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Tankquility: product page",
              "url": "https://tankquility.com.au/products/cryptocoryne-affinis-red"
            }
          ]
        },
        {
          "id": 254,
          "name": "Cryptocoryne pontederiifolia (clone #2)",
          "scientific": "Cryptocoryne pontederiifolia",
          "difficulty": "Easy",
          "about": "Crypt with large heart-shaped leaves on long stems.",
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
              "Midground"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Tankquility",
              "url": "https://tankquility.com.au/products/cryptocoryne-pontederiifolia-clone-2",
              "unit": "each",
              "price": 1995,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Tankquility: product page",
              "url": "https://tankquility.com.au/products/cryptocoryne-pontederiifolia-clone-2"
            }
          ]
        },
        {
          "id": 259,
          "name": "Bacopa monnieri 'White'",
          "scientific": "Bacopa monnieri 'White'",
          "difficulty": "Demanding",
          "about": "Rare white-leaved bacopa that needs high light and CO2. It is expensive.",
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
              "Mid to back"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Rare, slow hygrophila for high-tech tanks.",
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
              "15-20cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Fine-leaved stem plant for the foreground to midground.",
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
              "Fore to mid"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Compact Ludwigia that colours up red under high light.",
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
              "10-20cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Fine-leaved Rotala for the midground.",
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
              "Midground"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
      "intro": "Stem plants and tall ribbons for the rear. Most need regular trimming in a tank this height.",
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
              "src": "http://aquafy.com.au/cdn/shop/files/rotala-colorata_grande.jpg?v=1730200944",
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
          "about": "A Rotala selected for deep red colour. It needs strong light and lean nitrate to colour fully.",
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
          "about": "Wavy, deep red leaves on fragile stems. It is one of the most striking red plants but needs stable conditions. Handle stems carefully when trimming.",
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
              "src": "http://aquafy.com.au/cdn/shop/products/ludwigia-arcuata-needle-leaf-repens-939683_grande.jpg?v=1667814304",
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
          "id": 100,
          "name": "Echinodorus 'Ozelot Red'",
          "scientific": "Echinodorus 'Ozelot Red'",
          "difficulty": "Easy",
          "about": "Sword with red-spotted leaves. Large and a heavy root feeder.",
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
              "30-45 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/rare-echinodorus-ozelot-red",
              "unit": "plant",
              "price": 1900,
              "was": 2900,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/echinodorus-ozelot-red-5cm-pot",
              "unit": "5cm pot",
              "price": 1595,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/rare-echinodorus-ozelot-red"
            },
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/echinodorus-ozelot-red-5cm-pot"
            }
          ]
        },
        {
          "id": 101,
          "name": "Echinodorus 'Ozelot Green'",
          "scientific": "Echinodorus 'Ozelot Green'",
          "difficulty": "Easy",
          "about": "Green sword with dark spotting on large leaves. Feed through the roots.",
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
              "30-45 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/echinodorus-ozelot-green-5cm-pot",
              "unit": "5cm pot",
              "price": 1595,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/echinodorus-ozelot-green/",
              "unit": "plant",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/echinodorus-ozelot-green-5cm-pot"
            },
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/echinodorus-ozelot-green/"
            }
          ]
        },
        {
          "id": 102,
          "name": "Echinodorus 'Red Flame'",
          "scientific": "Echinodorus 'Red Flame'",
          "difficulty": "Easy",
          "about": "Sword with deep red leaves. Large and a root feeder.",
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
              "30-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/red-flame-sword",
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
              "url": "https://aquafy.com.au/products/red-flame-sword"
            }
          ]
        },
        {
          "id": 103,
          "name": "Echinodorus 'Vesuvius'",
          "scientific": "Echinodorus 'Vesuvius'",
          "difficulty": "Easy",
          "about": "Sword with twisted, curled leaves. Large; give it root fertiliser.",
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
              "30-45 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/echinodorus-vesuvius",
              "unit": "pot",
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
              "url": "https://www.beyondaquatics.com.au/product-page/echinodorus-vesuvius"
            }
          ]
        },
        {
          "id": 104,
          "name": "Amazon Sword",
          "scientific": "Echinodorus bleheri",
          "difficulty": "Easy",
          "about": "The classic big aquarium sword. Wants root tabs and plenty of room.",
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
              "30-50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/echinodorus-bleheri-5cm-pot",
              "unit": "5cm pot",
              "price": 1595,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/swords/243-amazon-sword-plant.html",
              "unit": "plant",
              "price": 1490,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Duthie Aquatics",
              "url": "https://duthieaquatics.com.au/products/echinodorus-amazonicus-amazon-sword",
              "unit": "plant",
              "price": 1099,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/echinodorus-bleheri-5cm-pot"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/swords/243-amazon-sword-plant.html"
            },
            {
              "label": "Duthie Aquatics: product page",
              "url": "https://duthieaquatics.com.au/products/echinodorus-amazonicus-amazon-sword"
            }
          ]
        },
        {
          "id": 105,
          "name": "Echinodorus 'Fancy Twist'",
          "scientific": "Echinodorus 'Fancy Twist'",
          "difficulty": "Easy",
          "about": "Sword with twisted, ruffled leaves. Easy but takes up space.",
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
              "20-35 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/centrepiece/products/echinodorus-fancy-twist-emersed",
              "unit": "emersed pot",
              "price": 895,
              "was": 2200,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/centrepiece/products/echinodorus-fancy-twist-emersed"
            }
          ]
        },
        {
          "id": 106,
          "name": "Narrow Amazon Sword (Echinodorus 'Horemanii')",
          "scientific": "Echinodorus horemanii",
          "difficulty": "Easy",
          "about": "Narrow-leaved sword that suits smaller tanks than the Amazon sword. Feed through the roots.",
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
              "30-50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/home/521-narrow-amazon-sword-plant.html",
              "unit": "plant",
              "price": 2900,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/home/521-narrow-amazon-sword-plant.html"
            }
          ]
        },
        {
          "id": 115,
          "name": "Proserpinaca palustris (Mermaid weed)",
          "scientific": "Proserpinaca palustris",
          "difficulty": "Moderate",
          "about": "Feathery, serrated leaves on upright stems, turning orange-red in strong light. Trim regularly.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 117,
          "name": "Ludwigia 'Atlantis'",
          "scientific": "Ludwigia sp. 'Atlantis'",
          "difficulty": "Moderate",
          "about": "Orange to dark red Ludwigia with a compact, bushy habit. Colour improves with strong light.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/ludwigia-atlantis-dark-orange",
              "unit": "bunch",
              "price": 1495,
              "was": 1600,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/centrepiece/products/ludwigia-atlantis-dark-orange-emersed-bunch",
              "unit": "emersed bunch",
              "price": 1125,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/ludwigia-atlantis-pot",
              "unit": "pot",
              "price": 1195,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/ludwigia-atlantis-dark-orange",
              "unit": "stem",
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
              "url": "https://microaquaticshop.com.au/products/ludwigia-atlantis-dark-orange"
            },
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/centrepiece/products/ludwigia-atlantis-dark-orange-emersed-bunch"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/ludwigia-atlantis-pot"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/ludwigia-atlantis-dark-orange"
            }
          ]
        },
        {
          "id": 118,
          "name": "Ludwigia repens 'Rubin'",
          "scientific": "Ludwigia repens 'Rubin'",
          "difficulty": "Easy",
          "about": "Red-leaved Ludwigia that is easy and fast. Colours up under good light.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/ludwigia-rubin",
              "unit": "bunch",
              "price": 1495,
              "was": 1800,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/ludwigia-repens-rubin",
              "unit": "bunch",
              "price": 1000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/ludwigia-rubin-pot",
              "unit": "pot",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/ludwigia-rubin"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/ludwigia-repens-rubin"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/ludwigia-rubin-pot"
            }
          ]
        },
        {
          "id": 120,
          "name": "Ludwigia 'Super Red' (inclinata 'Cuba')",
          "scientific": "Ludwigia inclinata var. verticillata 'Cuba'",
          "difficulty": "Easy",
          "about": "Strongly red Ludwigia with a bushy habit. Easy under good light.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 121,
          "name": "Ludwigia glandulosa",
          "scientific": "Ludwigia glandulosa",
          "difficulty": "Easy",
          "about": "Tall Ludwigia with reddish leaf undersides. Fast grower, trim often.",
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
              "30-50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/ludwigia-glandulosa",
              "unit": "bunch",
              "price": 1450,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/ludwigia-glandulosa",
              "unit": "3 stems",
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
              "url": "https://www.beyondaquatics.com.au/product-page/ludwigia-glandulosa"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/ludwigia-glandulosa"
            }
          ]
        },
        {
          "id": 123,
          "name": "Ludwigia brevipes",
          "scientific": "Ludwigia brevipes",
          "difficulty": "Easy",
          "about": "Easy green Ludwigia with a tidy habit. Good filler stem.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Green to bronze Rotala with narrow, upright leaves. Shows best colour under strong light.",
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
              "15-35 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Easy green Rotala for filling out the background. Fast and forgiving.",
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
              "20-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Classic easy Rotala with round leaves, going pink-red in strong light. Fast, trim often.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "difficulty": "Moderate",
          "about": "Bushy Rotala with thin leaves that colour up red-orange. Likes strong light.",
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
              "20-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Red Rotala with fine leaves. Needs strong light to colour up.",
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
              "Fast"
            ],
            [
              "Height",
              "20-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 131,
          "name": "Rotala macrandra 'Butterfly'",
          "scientific": "Rotala macrandra 'Butterfly'",
          "difficulty": "Demanding",
          "about": "Rotala macrandra form with broad, deep red leaves. Needs strong light, CO2 and nutrients.",
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
              "25-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/rotala-macranda-butterfly",
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
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/rotala-macranda-butterfly"
            }
          ]
        },
        {
          "id": 132,
          "name": "Myriophyllum 'Roraima'",
          "scientific": "Myriophyllum sp. 'Roraima'",
          "difficulty": "Moderate",
          "about": "Bronze-red feathery milfoil. Fast and likes strong light.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/myriophyllum-sp-roraima",
              "unit": "bunch",
              "price": 1295,
              "was": 1500,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/myriophyllum-sp-roraimi-bronze-milfoil",
              "unit": "bunch",
              "price": 1450,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/stem-plants/539-myriophyllum-roraima.html",
              "unit": "bunch",
              "price": 990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "The Online Aquarium Shop",
              "url": "https://www.theonlineaquariumshop.com.au/product/milfoil-bronze-myriophyllum-sp-roraimi/",
              "unit": "bunch",
              "price": 980,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 3,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/myriophyllum-sp-roraima"
            },
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/myriophyllum-sp-roraimi-bronze-milfoil"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/stem-plants/539-myriophyllum-roraima.html"
            },
            {
              "label": "The Online Aquarium Shop: product page",
              "url": "https://www.theonlineaquariumshop.com.au/product/milfoil-bronze-myriophyllum-sp-roraimi/"
            }
          ]
        },
        {
          "id": 133,
          "name": "Myriophyllum 'Guyana'",
          "scientific": "Myriophyllum sp. 'Guyana'",
          "difficulty": "Moderate",
          "about": "Fine-leaved green-red milfoil. Fast and wants good light.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Bushy, feathery milfoil with green to reddish stems. Fast grower.",
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
              "30-50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Australian native milfoil with fine leaves. Sold as tissue culture.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 137,
          "name": "Coarse Water Sprite",
          "scientific": "Ceratopteris cornuta",
          "difficulty": "Easy",
          "about": "Broader-leaved water sprite that grows fast, planted or floating. Good nutrient sponge.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/ceratopteris-cornuta-sprite-course",
              "unit": "portion",
              "price": 1450,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/ceratopteris-cornuta-course-sprite",
              "unit": "single plant",
              "price": 1200,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/ceratopteris-cornuta-sprite-course"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/ceratopteris-cornuta-course-sprite"
            }
          ]
        },
        {
          "id": 147,
          "name": "Persicaria 'Sao Paulo'",
          "scientific": "Persicaria sp. 'Sao Paulo'",
          "difficulty": "Easy",
          "about": "Fast stem plant with purplish-bronze undersides, also sold as Purple Bamboo. Easy and fast.",
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
              "25-50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/persicaria-sp-sao-paulo",
              "unit": "bunch",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/persicaria-maculosa-sao-paulo",
              "unit": "bunch",
              "price": 1400,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/persicaria-sp-sao-paulo/",
              "unit": "bunch",
              "price": 800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/persicaria-sp-kawagoeanum",
              "unit": "bunch",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nature Aquariums",
              "url": "https://natureaquariums.com.au/products/persicaria-maculosa-sao-paulo-submersed-grown",
              "unit": "per bunch",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/products/purple-bamboo-hygrophila-sp-sao-paulo",
              "unit": "bunch",
              "price": 1200,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/persicaria-sp-sao-paulo"
            },
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/persicaria-maculosa-sao-paulo"
            },
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/persicaria-sp-sao-paulo/"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/persicaria-sp-kawagoeanum"
            },
            {
              "label": "Nature Aquariums: product page",
              "url": "https://natureaquariums.com.au/products/persicaria-maculosa-sao-paulo-submersed-grown"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/products/purple-bamboo-hygrophila-sp-sao-paulo"
            }
          ]
        },
        {
          "id": 148,
          "name": "Hygrophila corymbosa 'Kompakt'",
          "scientific": "Hygrophila corymbosa 'Kompakt'",
          "difficulty": "Easy",
          "about": "Compact, bushy Hygrophila that is easy and fast. Good filler for the background.",
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
              "25-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/hygrophila-corymbosa",
              "unit": "bunch",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/hygrophila-kompakt",
              "unit": "portion",
              "price": 1295,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/hygrophila-corymbosa"
            },
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/hygrophila-kompakt"
            }
          ]
        },
        {
          "id": 149,
          "name": "Hygrophila corymbosa 'Stricta'",
          "scientific": "Hygrophila corymbosa 'Stricta'",
          "difficulty": "Easy",
          "about": "Tall, upright Hygrophila with narrow leaves. Easy and fast.",
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
              "30-50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/hygrophila-corymbosa-emersed-bunch-stricta",
              "unit": "emersed bunch",
              "price": 895,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/hygrophila-corymbosa-blue-stricta",
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
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/hygrophila-corymbosa-emersed-bunch-stricta"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/hygrophila-corymbosa-blue-stricta"
            }
          ]
        },
        {
          "id": 150,
          "name": "Water Wisteria",
          "scientific": "Hygrophila difformis",
          "difficulty": "Easy",
          "about": "Fast stem plant with deeply lobed leaves. Easy and a good nutrient sponge.",
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
              "20-50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/hygrophila-difformis-water-wisteria",
              "unit": "bunch",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/hygrophila-difformis-wisteria",
              "unit": "bunch",
              "price": 1400,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/hygrophila-difformis-water-wisteria"
            },
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/hygrophila-difformis-wisteria"
            }
          ]
        },
        {
          "id": 151,
          "name": "Hygrophila polysperma",
          "scientific": "Hygrophila polysperma",
          "difficulty": "Easy",
          "about": "Very easy, fast stem plant with small oval leaves. Tolerates low light and hard water.",
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
              "20-50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/polysperma-hygrophlia",
              "unit": "emersed bunch",
              "price": 595,
              "was": 895,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/hygrophila-polysperma/",
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
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/polysperma-hygrophlia"
            },
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/hygrophila-polysperma/"
            }
          ]
        },
        {
          "id": 152,
          "name": "Hygrophila 'Tiger'",
          "scientific": "Hygrophila polysperma 'Tiger'",
          "difficulty": "Easy",
          "about": "Polysperma form with tiger-striped leaves. Easy and fast.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/stem-plants/245-hygrophila-tiger.html",
              "unit": "6 stems",
              "price": 990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/stem-plants/245-hygrophila-tiger.html"
            }
          ]
        },
        {
          "id": 154,
          "name": "Hygrophila 'Ceylon'",
          "scientific": "Hygrophila balsamica",
          "difficulty": "Easy",
          "about": "Tall, fast stem plant with lance-shaped leaves, also sold as Ceylon. Easy and forgiving.",
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
              "30-50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/centrepiece/products/hygrophila-balsamica-emersed-bunch-copy",
              "unit": "emersed bunch",
              "price": 895,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/hygrophila-ceylon-live-aquarium-plant/",
              "unit": "bunch",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/hygrophila-balsamica",
              "unit": "3 stems",
              "price": 1800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/centrepiece/products/hygrophila-balsamica-emersed-bunch-copy"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/hygrophila-ceylon-live-aquarium-plant/"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/hygrophila-balsamica"
            }
          ]
        },
        {
          "id": 155,
          "name": "Hygrophila salicifolia",
          "scientific": "Hygrophila salicifolia",
          "difficulty": "Easy",
          "about": "Tall willow-leaved stem plant. Easy and fast.",
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
              "30-50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/hygrophila-salicifolia-5-stems-around-10cm-each",
              "unit": "5 stems ~10cm",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/hygrophila-salicifolia-5-stems-around-10cm-each"
            }
          ]
        },
        {
          "id": 156,
          "name": "Hornwort",
          "scientific": "Ceratophyllum demersum",
          "difficulty": "Easy",
          "about": "Rootless, bushy, fast-growing plant that floats or is anchored. Takes up nutrients quickly and sheds needles if stressed.",
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
              "30-60 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/hornwort",
              "unit": "bunch",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/ceratophyllum-demersum-submersed-potted-foxtail-s001",
              "unit": "bunch",
              "price": 895,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Sydney Aquascapes",
              "url": "https://sydney-aquascapes.com.au/products/hornwort",
              "unit": "bunch",
              "price": 400,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/hornwort-foxtail-live-aquarium-plant/",
              "unit": "plant",
              "price": 1095,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/hornwort"
            },
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/ceratophyllum-demersum-submersed-potted-foxtail-s001"
            },
            {
              "label": "Sydney Aquascapes: product page",
              "url": "https://sydney-aquascapes.com.au/products/hornwort"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/hornwort-foxtail-live-aquarium-plant/"
            }
          ]
        },
        {
          "id": 157,
          "name": "Ambulia",
          "scientific": "Limnophila sessiliflora",
          "difficulty": "Easy",
          "about": "Feathery, fast stem plant that is very easy. Trim regularly.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/limnophila-sessiliflora-submersed-bunch-ambulia-s005",
              "unit": "submersed bunch",
              "price": 1200,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Sydney Aquascapes",
              "url": "https://sydney-aquascapes.com.au/products/ambulia",
              "unit": "bunch",
              "price": 1400,
              "was": 1500,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/ambulia-limnophila-sessiliflora",
              "unit": "bunch",
              "price": 800,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/giant-ambulia-live-aquarium-plant/",
              "unit": "bunch",
              "price": 895,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/limnophila-sessiliflora-submersed-bunch-ambulia-s005"
            },
            {
              "label": "Sydney Aquascapes: product page",
              "url": "https://sydney-aquascapes.com.au/products/ambulia"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/collections/livestock-plants/products/ambulia-limnophila-sessiliflora"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/giant-ambulia-live-aquarium-plant/"
            }
          ]
        },
        {
          "id": 159,
          "name": "Limnophila hippuridoides",
          "scientific": "Limnophila hippuridoides",
          "difficulty": "Easy",
          "about": "Fine-leaved whorled stem plant, green to pinkish in strong light. Easy and fast.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/stem-plants/434-limnophila-hippuridoides.html",
              "unit": "bunch",
              "price": 990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/stem-plants/434-limnophila-hippuridoides.html"
            }
          ]
        },
        {
          "id": 160,
          "name": "Ammannia gracilis",
          "scientific": "Ammannia gracilis",
          "difficulty": "Demanding",
          "about": "Pink-red stem plant with broad leaves. Needs strong light and good nutrients.",
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
              "Fast"
            ],
            [
              "Height",
              "30-50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/midground/products/ammania-gracilis-submersed-bunch-s095",
              "unit": "submersed bunch",
              "price": 1100,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/ammania-gracilis-live-aquarium-plant/",
              "unit": "bunch",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/ammania-gracilis-rose-leaf",
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
              "url": "https://www.aquaticplantsaustralia.com.au/collections/midground/products/ammania-gracilis-submersed-bunch-s095"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/ammania-gracilis-live-aquarium-plant/"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/ammania-gracilis-rose-leaf"
            }
          ]
        },
        {
          "id": 162,
          "name": "Pogostemon stellatus",
          "scientific": "Pogostemon stellatus",
          "difficulty": "Moderate",
          "about": "Whorled star-leaved stem plant that makes a striking background bush. Likes good light and CO2.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/pogostemon-stellata-fine-leaf",
              "unit": "bunch",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/pogostemon-stellata-submerged",
              "unit": "5 stems ~10cm",
              "price": 1000,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/products/pogostemon-stellatus",
              "unit": "bunch",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/pogostemon-stellatus-narrow",
              "unit": "bunch",
              "price": 1200,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/pogostemon-stellatus-octopus",
              "unit": "portion",
              "price": 3995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 3,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/pogostemon-stellata-fine-leaf"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/pogostemon-stellata-submerged"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/products/pogostemon-stellatus"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/pogostemon-stellatus-narrow"
            },
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/pogostemon-stellatus-octopus"
            }
          ]
        },
        {
          "id": 166,
          "name": "Mayaca fluviatilis",
          "scientific": "Mayaca fluviatilis",
          "difficulty": "Moderate",
          "about": "Soft, moss-like fine-leaved stem plant. Fast but can melt if conditions swing.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 167,
          "name": "Hyptis lorentziana",
          "scientific": "Hyptis lorentziana",
          "difficulty": "Moderate",
          "about": "Bright green, serrated-leaf stem plant that grows fast. Needs good light and CO2.",
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
              "25-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/hyptis-lorentziana",
              "unit": "stem (from price)",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nature Aquariums",
              "url": "https://natureaquariums.com.au/products/hyptis-lorentziana",
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
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/hyptis-lorentziana"
            },
            {
              "label": "Nature Aquariums: product page",
              "url": "https://natureaquariums.com.au/products/hyptis-lorentziana"
            }
          ]
        },
        {
          "id": 168,
          "name": "Stargrass",
          "scientific": "Heteranthera zosterifolia",
          "difficulty": "Easy",
          "about": "Easy, grassy-leaved stem plant that grows fast. Bends and sprawls if light is low.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 169,
          "name": "Alternanthera cardinalis",
          "scientific": "Alternanthera cardinalis",
          "difficulty": "Moderate",
          "about": "Red-leaved Alternanthera with a taller habit. Needs good light for colour.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/alternanthera-cardinalis",
              "unit": "bunch (from price)",
              "price": 1295,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/alternanthera-cardinalis"
            }
          ]
        },
        {
          "id": 173,
          "name": "Nesaea triflora",
          "scientific": "Nesaea triflora",
          "difficulty": "Moderate",
          "about": "Fast, bushy stem plant with red-tinged leaves. Likes good light and CO2.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Feathery temperate stem plant that likes cooler water. Can struggle in warm tanks.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "difficulty": "Easy",
          "about": "Submerged stem plant relative of water hyacinth. Easy and fast.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 190,
          "name": "Vallisneria triptera",
          "scientific": "Vallisneria triptera",
          "difficulty": "Easy",
          "about": "Tall ribbon-leaved Vallisneria that spreads by runners. Easy and a root feeder.",
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
              "30-60 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/stem-plants/477-vallisneria-triptera.html",
              "unit": "plant",
              "price": 990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/stem-plants/477-vallisneria-triptera.html"
            }
          ]
        },
        {
          "id": 191,
          "name": "Vallisneria rubra",
          "scientific": "Vallisneria rubra",
          "difficulty": "Easy",
          "about": "Reddish-brown Vallisneria with long ribbon leaves. Spreads by runners.",
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
              "30-60 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/stem-plants/765-vallisneria-rubra.html",
              "unit": "plant",
              "price": 990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/stem-plants/765-vallisneria-rubra.html"
            }
          ]
        },
        {
          "id": 192,
          "name": "Tiger Vallisneria",
          "scientific": "Vallisneria spiralis 'Tiger'",
          "difficulty": "Easy",
          "about": "Vallisneria with tiger-striped, twisty leaves. Easy and spreads by runners.",
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
              "30-60 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/tiger-val-1-plant",
              "unit": "plant",
              "price": 895,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/tiger-val-1-plant"
            }
          ]
        },
        {
          "id": 195,
          "name": "Crinum calamistratum",
          "scientific": "Crinum calamistratum",
          "difficulty": "Moderate",
          "about": "Bulb plant with long, curly, dark leaves. Slow, needs a deep substrate and a big tank.",
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
              "40-80 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-lilies-swords/products/crinum-calaministratum",
              "unit": "bulb plant",
              "price": 15000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-lilies-swords/products/crinum-calaministratum"
            }
          ]
        },
        {
          "id": 206,
          "name": "Guppy Grass",
          "scientific": "Najas guadalupensis",
          "difficulty": "Easy",
          "about": "Fine, bushy, fast-growing stem plant that floats or is planted. Good cover for fry.",
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
              "30-60 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Fast-growing, tall stem plant that is good for soaking up nutrients in a new tank. It needs regular trimming.",
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
              "Tall"
            ]
          ],
          "saNote": "Roxy does not state SA shipping. Aquatic Plants Australia excludes Tasmania only. Confirm SA is allowed at checkout.",
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 222,
          "name": "Echinodorus 'Marble Queen'",
          "scientific": "Echinodorus cordifolius 'Marble Queen'",
          "difficulty": "Easy",
          "about": "Sword plant with marbled green and cream leaves. It makes a good centrepiece.",
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
              "Midground/background"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/echinodorus-marble-queen-5cm-pot/",
              "unit": "5cm pot",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/swords/725-echinodorus-marble-queen.html",
              "unit": "1 plant, 4-5 leaves",
              "price": 1980,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/echinodorus-marble-queen-5cm-pot/"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/swords/725-echinodorus-marble-queen.html"
            }
          ]
        },
        {
          "id": 224,
          "name": "Corkscrew Vallisneria (Contortionist)",
          "scientific": "Vallisneria spiralis 'Contortionist'",
          "difficulty": "Easy",
          "about": "Vallisneria with twisted, corkscrew leaves. It spreads by runners into a tall background screen.",
          "conditions": [
            [
              "Light",
              "Low to moderate"
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
              "Tall"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 226,
          "name": "Pine Needle (Hydrotriche)",
          "scientific": "Hydrotriche hottoniiflora",
          "difficulty": "Moderate",
          "about": "Feathery, needle-leaved stem plant. It needs clean water and good light.",
          "conditions": [
            [
              "Light",
              "Moderate to high"
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
              "20-30cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 229,
          "name": "Giant Vallisneria",
          "scientific": "Vallisneria gigantea",
          "difficulty": "Easy",
          "about": "Very tall vallisneria with wide leaves, suited to a back wall. It spreads by runners.",
          "conditions": [
            [
              "Light",
              "Moderate to high"
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
              "50-150cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/vallisneria-gigantea-live-aquarium-plant/",
              "unit": "bunch",
              "price": 1495,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/products/gaint-val-bunch",
              "unit": "bunch",
              "price": 995,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Duthie Aquatics",
              "url": "https://duthieaquatics.com.au/products/vallisneria-gigantea-thin-val",
              "unit": "portion",
              "price": 999,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Scapeshop",
              "url": "https://scapeshop.com.au/products/giant-vallisneria",
              "unit": "bunch",
              "price": 800,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/vallisneria-gigantea-live-aquarium-plant/"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/products/gaint-val-bunch"
            },
            {
              "label": "Duthie Aquatics: product page",
              "url": "https://duthieaquatics.com.au/products/vallisneria-gigantea-thin-val"
            },
            {
              "label": "Scapeshop: product page",
              "url": "https://scapeshop.com.au/products/giant-vallisneria"
            }
          ]
        },
        {
          "id": 253,
          "name": "Cryptocoryne retrospiralis",
          "scientific": "Cryptocoryne retrospiralis",
          "difficulty": "Easy",
          "about": "Tall crypt with long, narrow, wavy leaves up to about 70cm submerged.",
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
              "Up to 70cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Tankquility",
              "url": "https://tankquility.com.au/products/cryptocoryne-retrospiralis",
              "unit": "each",
              "price": 4995,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Tankquility: product page",
              "url": "https://tankquility.com.au/products/cryptocoryne-retrospiralis"
            }
          ]
        },
        {
          "id": 261,
          "name": "Rotala macrandra 'Mini Type 2'",
          "scientific": "Rotala macrandra 'Mini Type 2'",
          "difficulty": "Demanding",
          "about": "Compact, curled-leaf Rotala macrandra with red colour under strong light.",
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
              "15-20cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
        },
        {
          "id": 265,
          "name": "Aciotis acuminifolia",
          "scientific": "Aciotis acuminifolia",
          "difficulty": "Moderate",
          "about": "Rare, red-veined background stem plant.",
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
              "Background"
            ]
          ],
          "saNote": "Aquaristic Online does not ship plants to WA or NT. SA is allowed.",
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/aciotis-acuminifolia",
              "unit": "each",
              "price": 2500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-background/products/aciotis-acuminifolia"
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
          "about": "A Java fern with thin, narrow fronds that give a fine texture on wood. It is as hardy as standard Java fern.",
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
              "15 to 20 cm"
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
          "id": 31,
          "name": "Java fern 'Windelov'",
          "scientific": "Microsorum pteropus 'Windelov'",
          "difficulty": "Easy",
          "about": "A Java fern whose frond tips split into lacy ends. It is a bushy, medium height fern for the midground area of the wood.",
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
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/microsorum-pteropus-windelov-4f7a01f7e04db.jpg",
              "caption": "Microsorum pteropus 'Windeløv', submerged",
              "credit": "© Svennovitch (2004)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/microsorum-pteropus-windelov"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/am-waldrand-5bce34f512795.jpg",
              "caption": "Aquascape: am waldrand (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/am-waldrand"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/microsorum-pteropus-windelov-4f7a01f90f1a9.jpg",
              "caption": "Microsorum pteropus 'Windeløv'",
              "credit": "© Oliver Knott (2005)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/microsorum-pteropus-windelov"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/008B%20TC/4.PNG&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Microsorumpteropus'Windeløv'(008BTC)/31249"
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/ferns/154-crested-java-fern-microsorum-pteropus-sp-windelov-.html",
              "unit": "Plant, 4 to 5 leaves",
              "price": 990,
              "was": 1500,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/collections/tissue-culture/products/windelov-java-fern-tissue-culture",
              "unit": "Tissue culture cup",
              "price": 1795,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: Windelov Java fern",
              "url": "https://www.aquarzon.com/ferns/154-crested-java-fern-microsorum-pteropus-sp-windelov-.html"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Microsorumpteropus'Windeløv'(008BTC)/31249"
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
          "about": "The juvenile form of a fern that grows as lacy, flat clumps. It wedges into crevices and holds on with little help. It is a good filler where moss would look too fine.",
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
              "Forms flat clumps"
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
          "id": 58,
          "name": "Anubias 'Coffeefolia'",
          "scientific": "Anubias barteri var. coffeefolia",
          "difficulty": "Easy",
          "about": "Compact Anubias with ridged, coffee-bean textured leaves. Tie or glue to wood or rock rather than burying the rhizome.",
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
              "15-25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/anubias-coffeefolia",
              "unit": "on rock",
              "price": 6500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/anubias-coffeefolia",
              "unit": "plant",
              "price": 3595,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/anubias-coffeefolia"
            },
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/anubias-coffeefolia"
            }
          ]
        },
        {
          "id": 59,
          "name": "Anubias 'Paco'",
          "scientific": "Anubias barteri 'Paco'",
          "difficulty": "Easy",
          "about": "Small Anubias with narrow, pointed leaves on a compact rhizome. Good for tying onto hardscape.",
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
              "10-15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Compact Anubias with rounded, glossy leaves. A tough shade plant for wood and rock.",
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
              "10-15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Heart-shaped bright green Anubias leaves on a small rhizome. Tie to hardscape and keep the rhizome above the substrate.",
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
              "10-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Small Anubias with rounded leaves that suits nano tanks. Attach to wood or rock.",
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
              "10-15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 63,
          "name": "Anubias afzelii",
          "scientific": "Anubias afzelii",
          "difficulty": "Easy",
          "about": "Larger Anubias with long, narrow, lance-shaped leaves. Suits a mid to large tank on wood.",
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
              "20-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/anubias-afzelii",
              "unit": "plant",
              "price": 2499,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/anubias-afzelli",
              "unit": "plant",
              "price": 2995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/anubias-afzelii",
              "unit": "per plant",
              "price": 1000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/anubias-afzelli",
              "unit": "plant",
              "price": 2395,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/anubias-afzelii"
            },
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/anubias-afzelli"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/anubias-afzelii"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/anubias-afzelli"
            }
          ]
        },
        {
          "id": 64,
          "name": "Anubias 'Pangolino'",
          "scientific": "Anubias barteri var. nana 'Pangolino'",
          "difficulty": "Easy",
          "about": "Compact Anubias with narrow, pointed leaves. Slow and easy on hardscape.",
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
              "10-15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Anubias with white and green marbled new leaves. Slow growing and easy on wood or rock.",
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
              "10-15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Very small Anubias for nano tanks and tight hardscape. Attach to wood or rock.",
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
              "5-10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Tiny Anubias with narrow, claw-like leaves. Suits nano scapes on wood or rock.",
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
              "5-10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Anubias with yellow-green new leaves that brighten with light. Slow and hardy on hardscape.",
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
              "10-15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Compact Anubias with dark, rounded leaves. Hardy shade plant for hardscape.",
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
              "10-15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Small Anubias with round, coin-shaped leaves. Attach to wood or rock.",
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
              "5-10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Small form of Anubias glabra with smooth, narrow leaves. Tie to wood or rock.",
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
              "5-10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Anubias with lance-shaped leaves, a bit more upright than nana types. Attach to hardscape.",
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
              "10-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 73,
          "name": "Anubias hastifolia",
          "scientific": "Anubias hastifolia",
          "difficulty": "Easy",
          "about": "Large Anubias with arrow-shaped leaves. Best for bigger tanks, attached to wood.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/anubias-hastifolia",
              "unit": "per plant",
              "price": 2000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/anubias-hastifolia-on-rock/",
              "unit": "on rock",
              "price": 2500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/anubias-hastifolia"
            },
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/anubias-hastifolia-on-rock/"
            }
          ]
        },
        {
          "id": 74,
          "name": "Anubias 'Hybrid Curly Heart'",
          "scientific": "Anubias sp. hybrid",
          "difficulty": "Easy",
          "about": "Anubias hybrid with wavy, heart-shaped leaves. Slow and tough on hardscape.",
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
              "10-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/anubias-hybrid-curly-heart-10-20cm",
              "unit": "plant",
              "price": 3695,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/anubias-hybrid-curly-heart-10-20cm"
            }
          ]
        },
        {
          "id": 75,
          "name": "Anubias 'Panda'",
          "scientific": "Anubias barteri 'Panda'",
          "difficulty": "Easy",
          "about": "Variegated Anubias with white-splashed leaves. Currently sold out; the shop takes pre-orders.",
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
              "10-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Java fern with rounded, spoon-shaped fronds. Tie to hardscape and leave the rhizome uncovered.",
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
              "10-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Java fern with fronds that split into three tips. Tough and slow on wood or rock.",
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
              "15-25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Small, finely divided java fern with a coral-like look. Good for nano scapes.",
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
              "5-10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 79,
          "name": "Philippine Java Fern",
          "scientific": "Leptochilus pteropus 'Philippine'",
          "difficulty": "Easy",
          "about": "Narrow-leaf java fern with a more delicate look than standard. Attach to wood or rock.",
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
              "15-25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/philippine-java-fern",
              "unit": "3-4 leaves on rhizome",
              "price": 1795,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/philippine-java-fern-2-3-leaves-on-rhizome",
              "unit": "plant (2-3 leaves)",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/philippine-java-fern"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/philippine-java-fern-2-3-leaves-on-rhizome"
            }
          ]
        },
        {
          "id": 80,
          "name": "Java Fern 'Crested'",
          "scientific": "Microsorum pteropus 'Crested'",
          "difficulty": "Easy",
          "about": "Java fern with frilly, crested frond tips. Hardy on wood or rock.",
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
              "15-25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/crested-micro-pteropus-medium",
              "unit": "plant",
              "price": 1995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Sydney Aquascapes",
              "url": "https://sydney-aquascapes.com.au/products/crested-java-fern",
              "unit": "plant",
              "price": 2200,
              "was": 2500,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "The Online Aquarium Shop",
              "url": "https://www.theonlineaquariumshop.com.au/product/java-fern-crested-small-2/",
              "unit": "small plant",
              "price": 1990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/crested-micro-pteropus-medium"
            },
            {
              "label": "Sydney Aquascapes: product page",
              "url": "https://sydney-aquascapes.com.au/products/crested-java-fern"
            },
            {
              "label": "The Online Aquarium Shop: product page",
              "url": "https://www.theonlineaquariumshop.com.au/product/java-fern-crested-small-2/"
            }
          ]
        },
        {
          "id": 81,
          "name": "Java Fern (regular)",
          "scientific": "Microsorum pteropus",
          "difficulty": "Easy",
          "about": "The standard java fern: tough, shade tolerant and easy. Tie to hardscape and keep the rhizome uncovered.",
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
              "15-30 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/microsorium-pteropus-small",
              "unit": "plant",
              "price": 1395,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/microsorium-pteropus-small"
            }
          ]
        },
        {
          "id": 82,
          "name": "Java Fern 'Thor's Hammer'",
          "scientific": "Microsorum pteropus 'Thor's Hammer'",
          "difficulty": "Easy",
          "about": "Java fern with thick, hammer-like frond tips. Slow and sturdy.",
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
              "15-25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/java-fern-thors-hammer",
              "unit": "per plant",
              "price": 2095,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/java-fern-thors-hammer"
            }
          ]
        },
        {
          "id": 83,
          "name": "Java Fern 'Micro'",
          "scientific": "Microsorum pteropus 'Micro'",
          "difficulty": "Easy",
          "about": "Very compact java fern with small leaves. Suits nano tanks on wood or rock.",
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
              "5-8 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Compact java fern, a little larger than 'Micro'. Attach to wood or rock.",
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
              "5-10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 85,
          "name": "Java Fern 'Fork Leaf'",
          "scientific": "Microsorum pteropus 'Fork Leaf'",
          "difficulty": "Easy",
          "about": "Java fern with forked frond tips. Slow and hardy.",
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
              "15-25 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/java-fern-fork-leaf-rare",
              "unit": "portion",
              "price": 4495,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/java-fern-fork-leaf-rare"
            }
          ]
        },
        {
          "id": 86,
          "name": "Mini Bolbitis (Baby Leaf)",
          "scientific": "Bolbitis heteroclita 'Difformis'",
          "difficulty": "Moderate",
          "about": "Small bolbitis with delicate fronds. Attach to wood or rock in flow, and avoid burying the rhizome.",
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
              "10-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 87,
          "name": "African Water Fern",
          "scientific": "Bolbitis heudelotii",
          "difficulty": "Moderate",
          "about": "Dark green fern with long, finely cut fronds. Attach to hardscape and give it some water movement.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/ferns/160-bolbitis-heudelotii-african-water-fern.html",
              "unit": "portion",
              "price": 2900,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/bolbitis-heudelotii-african-water-fern",
              "unit": "per plant",
              "price": 3000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "School of Scape",
              "url": "https://schoolofscape.com.au/products/bolbitis",
              "unit": "plant",
              "price": 4000,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/ferns/160-bolbitis-heudelotii-african-water-fern.html"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/bolbitis-heudelotii-african-water-fern"
            },
            {
              "label": "School of Scape: product page",
              "url": "https://schoolofscape.com.au/products/bolbitis"
            }
          ]
        },
        {
          "id": 88,
          "name": "Bolbitis 'Long Tails'",
          "scientific": "Bolbitis heteroclita",
          "difficulty": "Moderate",
          "about": "Bolbitis form with long trailing fronds. Attach to hardscape.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/bolbitis-heteroclita-long-tails",
              "unit": "portion",
              "price": 4495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/bolbitis-heteroclita-long-tails"
            }
          ]
        },
        {
          "id": 89,
          "name": "Filmy Fern (Crepidomanes auriculatum)",
          "scientific": "Crepidomanes auriculatum",
          "difficulty": "Moderate",
          "about": "Small filmy fern that carpets wood and rock. Likes steady, low to moderate light.",
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
              "5-10 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Slow rhizome plant for attaching to wood or rock.",
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
              "Short"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Slow rhizome plant for attaching to wood or rock.",
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
              "Short"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Slow rhizome plant with dark, blue-tinted leaves.",
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
              "Short"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Small, slow rhizome plant for wood or rock.",
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
              "Short"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Slow rhizome plant for attaching to wood or rock.",
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
              "Short"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Slow rhizome plant for attaching to wood or rock.",
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
              "Short"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Slow rhizome plant with wavy leaves.",
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
              "Short"
            ]
          ],
          "saNote": "Micro Aquatic Shop restricts several Bucephalandra to SA, but this page notes no SA restriction. Verify at checkout.",
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Slow rhizome plant, grown emersed.",
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
              "Short"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Slow rhizome plant, grown emersed.",
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
              "Short"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Slow rhizome plant with reddish tones, grown emersed.",
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
              "Short"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Slow rhizome plant with purple-tinted leaves, grown emersed.",
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
              "Short"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Anubias with white-variegated leaves. It is slow and best attached to wood or rock.",
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
              "Short"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Compact anubias for attaching to wood or rock, up to about 20cm.",
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
              "Up to 20cm"
            ]
          ],
          "saNote": "The shop does not explicitly confirm plant shipping to SA. Verify at checkout.",
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Neat, layered fronds shaped like small fir trees. It is tidier than Java moss and the usual choice for moss trees on wood. Regular trimming keeps it dense.",
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
              "Layered fronds"
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
          "about": "A smaller leaved form of Christmas moss. Its finer scale suits a smaller tank and detailed wood. Growth is slow, so start with a generous portion.",
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
              "Small layered fronds"
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
          "about": "Grows straight up in twisting strands that look like flickering flames. It adds vertical texture on wood and rock.",
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
              "Upright twisting strands"
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
          "about": "The only common aquarium moss that grows downward. It looks best on the undersides of branches and overhangs. Attach it high and let it hang.",
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
              "Hanging fronds"
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
          "about": "A soft, fluffy moss with branching fronds. The mini form is a tidier choice for small scale detail. It attaches readily to wood.",
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
              "Fluffy branching"
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
          "about": "Long, pointed fronds with a sharper look than Christmas moss. It copes with warmer water better than Christmas moss, which helps during SA summer heatwaves.",
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
              "Long pointed fronds"
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
          "about": "A true aquatic moss with tiny fronds like miniature ferns that form dense domes. It attaches slowly and can be fiddly to tie on. It looks natural on branch shaped wood and at the base of rocks.",
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
              "Tiny fern shaped fronds"
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
          "about": "Fronds spread in flat, layered fans. It gives a fuller look than Christmas moss on large surfaces.",
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
              "Fanned fronds"
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
          "about": "Fine strands that grow fast and move in the flow. It suits a wilder look and fills spaces quickly. It can spread onto plants where it is not wanted, so trim it often.",
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
              "Fine flowing strands"
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
          "about": "A liverwort, not a true moss, with branching growth that looks like small coral. It gives a distinctive texture on wood and rock. It also grows well emersed in damp spots near the waterline.",
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
              "Branching, coral shape"
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
          "about": "Slow-growing spherical algae. Roll occasionally and keep out of strong light.",
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
              "3-5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Dark green, branching aquatic moss that likes cooler water and flow. Tie to wood or rock.",
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
              "5-15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 142,
          "name": "Giant Willow Moss",
          "scientific": "Fontinalis antipyretica var. gigantea",
          "difficulty": "Easy",
          "about": "Larger form of willow moss with longer, bigger fronds. Tie to hardscape.",
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
              "10-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/moss/389-very-rare-giant-willow-moss-fontinalis-antipyretica-var-gigantea.html",
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
              "url": "https://www.aquarzon.com/moss/389-very-rare-giant-willow-moss-fontinalis-antipyretica-var-gigantea.html"
            }
          ]
        },
        {
          "id": 143,
          "name": "Crystalwort (Riccia fluitans)",
          "scientific": "Riccia fluitans",
          "difficulty": "Easy",
          "about": "Floating or pinned-down liverwort that forms dense mats. Can be tied to hardscape or mesh.",
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
              "Floating or mat"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Low, fern-like Fissidens moss that forms neat cushions. Slow, attach to wood or rock.",
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
              "2-5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "The classic easy aquarium moss. Tie to wood or rock and trim to shape.",
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
              "2-5 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Upright, leafy moss with larger rounded leaves. Slow to establish; attach to hardscape.",
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
              "3-6 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
      "intro": "For the wood above the waterline. The wet zone near the water can also use the mosses, Bucephalandra, Anubias, Java ferns and Hydrocotyle tripartita listed above.",
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
              "src": "http://www.uprooted.com.au/cdn/shop/files/ficus-pumila-minima-uprooted-buy-plants-online-australia-1222475.jpg?v=1783042570",
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
              "src": "http://flowerandtwignursery.com.au/cdn/shop/files/peperomia-prostrata-string-of-turtles-366098_1200x1200.jpg?v=1740571908",
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
              "src": "http://flowerandtwignursery.com.au/cdn/shop/files/pilea-glauca-silver-sprinkles-177178_1200x1200.jpg?v=1717505893",
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
          "id": 214,
          "name": "Lobelia cardinalis",
          "scientific": "Lobelia cardinalis",
          "difficulty": "Easy",
          "about": "Taller Lobelia that grows well emersed in a paludarium or above the waterline. Easy and takes a range of light.",
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
              "30-60 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/lobelia-cardinalis-emersed-potted-p125",
              "unit": "emersed bunch",
              "price": 795,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarium Gallery",
              "url": "https://www.aquariumgallery.com.au/products/tc-lobelia-cardinalis",
              "unit": "TC cup",
              "price": 1895,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/bunches/products/lobelia-cardinalis-emersed-potted-p125"
            },
            {
              "label": "Aquarium Gallery: product page",
              "url": "https://www.aquariumgallery.com.au/products/tc-lobelia-cardinalis"
            }
          ]
        },
        {
          "id": 215,
          "name": "Purple Waffle Plant",
          "scientific": "Hemigraphis sp.",
          "difficulty": "Easy",
          "about": "Purple-green ruffled creeper that does best emersed. Good for paludariums.",
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
              "10-20 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/hemigraphis-purple-waffle-emersed",
              "unit": "emersed plant",
              "price": 1295,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Melbourne Tropical Fish",
              "url": "https://melbournetropicalfish.com.au/collections/aquarium-plants/products/purple-temple",
              "unit": "plant",
              "price": 1500,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/hemigraphis-purple-waffle-emersed"
            },
            {
              "label": "Melbourne Tropical Fish: product page",
              "url": "https://melbournetropicalfish.com.au/collections/aquarium-plants/products/purple-temple"
            }
          ]
        },
        {
          "id": 216,
          "name": "Lucky Bamboo",
          "scientific": "Dracaena sanderiana",
          "difficulty": "Easy",
          "about": "Tough terrestrial plant often grown with roots in water and leaves above. Not truly submersible.",
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
              "20-50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/lucky-bamboo-plant/",
              "unit": "plant",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/lucky-bamboo-plant/"
            }
          ]
        },
        {
          "id": 217,
          "name": "Earth Star (Cryptanthus bivittatus)",
          "scientific": "Cryptanthus bivittatus",
          "difficulty": "Easy",
          "about": "Terrestrial bromeliad with striped, wavy leaves. For emersed or paludarium use only, not submerged.",
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
              "10-15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Red-toned terrestrial bromeliad. For emersed or paludarium use only.",
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
              "8-15 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
        },
        {
          "id": 219,
          "name": "Variegated Rhaphidophora beccarii",
          "scientific": "Rhaphidophora beccarii",
          "difficulty": "Moderate",
          "about": "Climbing aroid for paludariums with variegated leaves. Needs humidity and something to climb.",
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
              "Climbing"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/home/792-1997-variegated-rhaphidophora-beccarii.html",
              "unit": "plant",
              "price": 6900,
              "was": 9500,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/home/792-1997-variegated-rhaphidophora-beccarii.html"
            }
          ]
        },
        {
          "id": 227,
          "name": "Lizard's Tail",
          "scientific": "Saururus cernuus",
          "difficulty": "Easy",
          "about": "Marginal plant with heart-shaped leaves and white flower spikes. It grows well emersed with its roots in the tank.",
          "conditions": [
            [
              "Light",
              "Moderate to high"
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
              "Midground/background"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/lizard-tails-aquarium-plant-5cm-pot/",
              "unit": "5cm pot",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/lizard-tails-aquarium-plant-5cm-pot/"
            }
          ]
        }
      ]
    },
    {
      "id": "lily",
      "name": "Along the waterline",
      "intro": "Roots in the water, leaves above it. Most are houseplants sold through general nurseries, so buy them in SA rather than from Queensland.",
      "plants": [
        {
          "id": 49,
          "name": "Pothos",
          "scientific": "Epipremnum aureum (small leaved forms)",
          "difficulty": "Easy",
          "about": "A trailing vine that roots readily in water and uses a lot of nitrate. Small leaved cultivars such as 'Pearls and Jade' keep the scale down.",
          "conditions": [
            [
              "Light",
              "Medium to bright"
            ],
            [
              "Roots",
              "Grows in water"
            ],
            [
              "Humidity",
              "Any"
            ],
            [
              "Growth",
              "Fast"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://pds.exblog.jp/pds/1/202005/18/79/f0238779_19203525.jpg",
              "caption": "Pothos Hydroponics in a Shrimp Aquarium",
              "credit": "hacchannt.exblog.jp",
              "creditUrl": "https://hacchannt.exblog.jp/31191150/"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0311/3149/files/pothos_plant_in_rectangle_glass_vase.jpg?v=1581455564",
              "caption": "pothos plant in rectangle glass vase",
              "credit": "www.aquariumcoop.com",
              "creditUrl": "https://www.aquariumcoop.com/blogs/aquarium/pothos"
            },
            {
              "src": "https://www.aquariumcoop.com/cdn/shop/articles/how-to-use-pothos-as-a-natural-aquarium-filter-6938729.jpg?v=1766094769&width=3840",
              "caption": "How to Use Pothos as a Natural Aquarium Filter - Aquarium Co-Op",
              "credit": "www.aquariumcoop.com",
              "creditUrl": "https://www.aquariumcoop.com/blogs/aquarium/pothos"
            },
            {
              "src": "https://upload.wikimedia.org/wikipedia/commons/6/62/Money_Plant_%28Epipremnum_aureum%29_4.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
              "caption": "Original reference photo. Species reference photo.",
              "credit": "en.wikipedia.org",
              "creditUrl": "https://en.wikipedia.org/wiki/Epipremnum_aureum"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Photo source: en.wikipedia.org",
              "url": "https://en.wikipedia.org/wiki/Epipremnum_aureum"
            }
          ]
        },
        {
          "id": 50,
          "name": "Heartleaf philodendron",
          "scientific": "Philodendron hederaceum ('Micans', 'Brasil')",
          "difficulty": "Easy",
          "about": "Heart shaped leaves on trailing stems. 'Micans' has velvety bronze leaves and 'Brasil' has yellow variegation. Both trail neatly over the rim.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "Roots",
              "Grows in water"
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
              "src": "https://cdn.shopify.com/s/files/1/0228/9192/1472/files/il_fullxfull.4316229525_100z.jpg?v=1712471991",
              "caption": "Mature trailing Philodendron micans",
              "credit": "Dose of Succulents",
              "creditUrl": "https://doseofsucculents.com/products/8-philodendron-micans-long-and-64570"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0228/9192/1472/files/il_fullxfull.4268826762_tva8.jpg?v=1712471991",
              "caption": "Mature trailing Philodendron micans",
              "credit": "Dose of Succulents",
              "creditUrl": "https://doseofsucculents.com/products/8-philodendron-micans-long-and-64570"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0228/9192/1472/files/il_fullxfull.4268826822_nuel.jpg?v=1712471991",
              "caption": "Mature trailing Philodendron micans",
              "credit": "Dose of Succulents",
              "creditUrl": "https://doseofsucculents.com/products/8-philodendron-micans-long-and-64570"
            },
            {
              "src": "http://www.uprooted.com.au/cdn/shop/files/philodendron-hederaceum-micans-uprooted-buy-plants-online-australia-602583.jpg?v=1757644060",
              "caption": "Original reference photo. Philodendron hederaceum 'Micans' cultivar.",
              "credit": "uprooted.com.au",
              "creditUrl": "https://www.uprooted.com.au/products/philodendron-micans"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Photo source: uprooted.com.au",
              "url": "https://www.uprooted.com.au/products/philodendron-micans"
            }
          ]
        },
        {
          "id": 51,
          "name": "Arrowhead plant",
          "scientific": "Syngonium podophyllum (compact cultivars)",
          "difficulty": "Easy",
          "about": "Arrow shaped leaves, often in pink or cream tones. Compact cultivars such as 'Mini Pixie' suit a tank corner.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "Roots",
              "Grows in water"
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
              "src": "https://img.gogoshop.cloud/bd8c5546/km5A4j2fMrZ.jpg",
              "caption": "Miniature Indoor Garden",
              "credit": "www.friendrabbit.com.tw",
              "creditUrl": "https://www.friendrabbit.com.tw/categories/%E6%A4%8D%E6%A0%BD%E8%A8%AD%E8%A8%88?page=2"
            },
            {
              "src": "https://cdn.togetherv.com/beauteous-syngonium-terrarium-2_1709875338.webp",
              "caption": "Beauteous Syngonium Terrarium",
              "credit": "www.togetherv.com",
              "creditUrl": "https://www.togetherv.com/delhi-ncr/plants/beauteous-syngonium-terrarium"
            },
            {
              "src": "https://www.fnp.com/images/pr/x/v20190828113614/syngonium-plant-4-glass-terrarium_2.jpg",
              "caption": "Syngonium Plant in Glass Terrarium",
              "credit": "www.fnp.com",
              "creditUrl": "https://www.fnp.com/gift/syngonium-plant-4-glass-terrarium"
            },
            {
              "src": "http://www.nurserywarehouse.com.au/cdn/shop/files/Syngonium_Pixie.png?v=1773890325",
              "caption": "Original reference photo. Syngonium 'Pixie' compact cultivar.",
              "credit": "nurserywarehouse.com.au",
              "creditUrl": "https://www.nurserywarehouse.com.au/products/syngonium-pixie"
            }
          ],
          "offers": [],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Photo source: nurserywarehouse.com.au",
              "url": "https://www.nurserywarehouse.com.au/products/syngonium-pixie"
            }
          ]
        },
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
              "src": "http://flowerandtwignursery.com.au/cdn/shop/files/fittonia-skeleton-819173_1200x1200.jpg?v=1717506172",
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
          "about": "Short, grassy tufts that contrast with the broad peace lily leaves. It is a bog plant, not a true aquatic, so the crown must stay above the water or it rots.",
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
              "src": "http://www.nurserywarehouse.com.au/cdn/shop/files/Acorus_Gramineus_Ogon_Golden_Sweet_Flag_1.jpg?v=1774351062",
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
          "id": 54,
          "name": "Curly spider plant",
          "scientific": "Chlorophytum comosum 'Bonnie'",
          "difficulty": "Easy",
          "about": "Curled, grassy leaves and small plantlets on arching stems. It is tough and roots well in water.",
          "conditions": [
            [
              "Light",
              "Medium to bright"
            ],
            [
              "Roots",
              "Grows in water"
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
              "src": "https://cdn.shopify.com/s/files/1/0671/9697/7440/files/IMG_4873.jpg?v=1773315543",
              "caption": "Curly spider plant Bonnie: mature foliage and plantlets",
              "credit": "Plant Studio",
              "creditUrl": "https://plant.studio/products/chlorophytum-comosum-bonnie-curly-spider-plant"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0671/9697/7440/files/IMG_4874.jpg?v=1773315542",
              "caption": "Curly spider plant Bonnie: mature foliage and plantlets",
              "credit": "Plant Studio",
              "creditUrl": "https://plant.studio/products/chlorophytum-comosum-bonnie-curly-spider-plant"
            },
            {
              "src": "https://cdn.shopify.com/s/files/1/0671/9697/7440/files/IMG_4875.jpg?v=1773315543",
              "caption": "Curly spider plant Bonnie: mature foliage and plantlets",
              "credit": "Plant Studio",
              "creditUrl": "https://plant.studio/products/chlorophytum-comosum-bonnie-curly-spider-plant"
            },
            {
              "src": "http://theplantboys.au/cdn/shop/files/IMG_8441.jpg?v=1729910644",
              "caption": "Original reference photo.",
              "credit": "theplantboys.au",
              "creditUrl": "https://theplantboys.au/products/chlorophytum-bonnie-curly-spider-plant"
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/chlorophytum-live-aquarium-plant/",
              "unit": "plant",
              "price": 1495,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": null,
          "sources": [
            {
              "label": "Photo source: theplantboys.au",
              "url": "https://theplantboys.au/products/chlorophytum-bonnie-curly-spider-plant"
            }
          ]
        },
        {
          "id": 55,
          "name": "Bacopa caroliniana",
          "scientific": "Bacopa caroliniana (grown out of water)",
          "difficulty": "Easy",
          "about": "An aquarium stem plant that keeps growing once it reaches the surface and produces small blue flowers above water. It links the underwater planting to the plants outside the tank.",
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
          "id": 56,
          "name": "Anubias barteri",
          "scientific": "Anubias barteri (grown out of water)",
          "difficulty": "Easy",
          "about": "Grows easily out of water with thick, arrow shaped leaves and occasionally flowers. Keep the rhizome at or just above the waterline.",
          "conditions": [
            [
              "Light",
              "Medium"
            ],
            [
              "Roots",
              "Rhizome at waterline"
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
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/anubias-barteri-var-barteri-4f7a011a00450.jpg",
              "caption": "Anubias barteri var. barteri",
              "credit": "Bjarne Sætrang (2004)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/anubias-barteri-var-barteri"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/hidden-valleys-545d3a0a42cc1.jpg",
              "caption": "Aquascape: hidden valleys (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/hidden-valleys"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/hidden-valleys-545d4f0a7c4bc.jpg",
              "caption": "Aquascape: hidden valleys (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/hidden-valleys"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/101A/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Anubiasbarterivar.barteri(101A)/4551"
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
              "url": "https://tropica.com/en/plants/plantdetails/Anubiasbarterivar.barteri(101A)/4551"
            }
          ]
        },
        {
          "id": 57,
          "name": "Shield pennywort",
          "scientific": "Hydrocotyle verticillata",
          "difficulty": "Easy",
          "about": "Round, umbrella shaped leaves on tall stalks that rise above the water. It spreads by runners and needs regular thinning.",
          "conditions": [
            [
              "Light",
              "Medium to bright"
            ],
            [
              "Roots",
              "Grows in water"
            ],
            [
              "Humidity",
              "Any"
            ],
            [
              "Growth",
              "Fast"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hydrocotyle-verticillata-4f7a01c0ce2fc.jpg",
              "caption": "Hydrocotyle verticillata, submerged",
              "credit": "Bjarne Sætrang (2004)",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hydrocotyle-verticillata"
            },
            {
              "src": "https://www.flowgrow.de/db/images/tanks/detail/bommerholz-58ceb7baeeca5.jpg",
              "caption": "Aquascape: bommerholz (plant included in the aquascape’s plant list)",
              "credit": "Flowgrow community",
              "creditUrl": "https://www.flowgrow.de/db/tanks/bommerholz"
            },
            {
              "src": "https://www.flowgrow.de/db/images/aquaticplants/detail/hydrocotyle-verticillata-51da5df501d8b.jpg",
              "caption": "Shield pennywort growing detail",
              "credit": "© stern_nbg",
              "creditUrl": "https://www.flowgrow.de/db/aquaticplants/hydrocotyle-verticillata"
            },
            {
              "src": "https://tropica.com/imagegen.ashx?height=720&image=/Plants/039/4.png&crop=resize&class=product",
              "caption": "Original reference photo.",
              "credit": "tropica.com",
              "creditUrl": "https://tropica.com/en/plants/plantdetails/Hydrocotyleverticillata(039)/4457"
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/rare-tc-hydrocotyle-verticillata",
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
              "label": "Nature Aquariums: tissue culture range",
              "url": "https://www.natureaquariums.com.au/collections/tissue-culture"
            },
            {
              "label": "Photo source: tropica.com",
              "url": "https://tropica.com/en/plants/plantdetails/Hydrocotyleverticillata(039)/4457"
            }
          ]
        },
        {
          "id": 112,
          "name": "Red Tiger Lotus",
          "scientific": "Nymphaea zenkeri",
          "difficulty": "Easy",
          "about": "Bulb plant with red-marbled lily pads that can reach the surface. Trim pads to keep the tank open.",
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
              "20-40 cm"
            ]
          ],
          "saNote": "Melbourne Tropical Fish says some plant listings are in-store only; SA shipping unconfirmed.",
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/red-tiger-lotus",
              "unit": "bulb",
              "price": 2795,
              "was": 2995,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/home/239-red-tiger-lotus-nymphaea-lotus-red-.html",
              "unit": "20-30cm plant",
              "price": 2900,
              "was": 3900,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-lilies-swords/products/nymphaea-zenkeri-tiger-lotus-red",
              "unit": "bulb plant",
              "price": 4500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Melbourne Tropical Fish",
              "url": "https://melbournetropicalfish.com.au/products/tiger-lotus-red",
              "unit": "bulb plant",
              "price": 3700,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-lilies-swords/products/nymphaea-zenkeri-tiger-lotus-green",
              "unit": "bulb plant",
              "price": 4500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/red-tiger-lotus"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/home/239-red-tiger-lotus-nymphaea-lotus-red-.html"
            },
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-lilies-swords/products/nymphaea-zenkeri-tiger-lotus-red"
            },
            {
              "label": "Melbourne Tropical Fish: product page",
              "url": "https://melbournetropicalfish.com.au/products/tiger-lotus-red"
            }
          ]
        },
        {
          "id": 113,
          "name": "Tri Color Lotus",
          "scientific": "Nymphaea micrantha",
          "difficulty": "Easy",
          "about": "Lotus with green, pink and red marbled leaves, grown from a bulb. Trim lily pads to control shade.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-lilies-swords/products/nymphaea-micrantha-lotus-tri-color",
              "unit": "bulb plant",
              "price": 4500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-lilies-swords/products/nymphaea-micrantha-lotus-tri-color"
            }
          ]
        },
        {
          "id": 114,
          "name": "Barclaya longifolia",
          "scientific": "Barclaya longifolia",
          "difficulty": "Moderate",
          "about": "Bulb plant with long, wavy leaves that can be green or reddish. Dislikes being moved and wants a fertile substrate.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/home/651-barclaya-longifolia-green.html",
              "unit": "plant",
              "price": 2900,
              "was": 3900,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/home/651-barclaya-longifolia-green.html"
            }
          ]
        },
        {
          "id": 124,
          "name": "Mosaic Plant",
          "scientific": "Ludwigia sedioides",
          "difficulty": "Moderate",
          "about": "Pond plant with patterned floating rosettes. Needs strong light and a surface to spread over.",
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
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/ludwigia-sedoides-3-plants",
              "unit": "3 plants",
              "price": 995,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/mosaic-plant-ludwigia-sedioides-floating",
              "unit": "plant (from)",
              "price": 1395,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/ludwigia-sedoides-3-plants"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/mosaic-plant-ludwigia-sedioides-floating"
            }
          ]
        },
        {
          "id": 136,
          "name": "Water Sprite",
          "scientific": "Ceratopteris thalictroides",
          "difficulty": "Easy",
          "about": "Fast, lacy fern that can be planted or left floating. Soaks up excess nutrients.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/ceratopteris-thalictroides",
              "unit": "bunch",
              "price": 1495,
              "was": 1995,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "The Online Aquarium Shop",
              "url": "https://www.theonlineaquariumshop.com.au/product/ceratopteris-thalictroides-water-sprite/",
              "unit": "bunch",
              "price": 1080,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/ceratopteris-thalictroides"
            },
            {
              "label": "The Online Aquarium Shop: product page",
              "url": "https://www.theonlineaquariumshop.com.au/product/ceratopteris-thalictroides-water-sprite/"
            }
          ]
        },
        {
          "id": 139,
          "name": "Red Root Floater",
          "scientific": "Phyllanthus fluitans",
          "difficulty": "Easy",
          "about": "Floating plant with roots that turn red in strong light. Shades the tank and soaks up nutrients.",
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
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 193,
          "name": "Aponogeton crispus",
          "scientific": "Aponogeton crispus",
          "difficulty": "Moderate",
          "about": "Bulb plant with wavy, ruffled leaves. Goes through rest periods, so keep bulbs healthy.",
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
              "30-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Liverpool Creek Aquariums",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/aponogeton-crispus",
              "unit": "bulb",
              "price": 1995,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Z-Aquatics",
              "url": "https://www.z-aquatics.com.au/aponogeton-crispus/",
              "unit": "bulb",
              "price": 1500,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Liverpool Creek Aquariums: product page",
              "url": "https://www.liverpoolcreekaquariums.com.au/products/aponogeton-crispus"
            },
            {
              "label": "Z-Aquatics: product page",
              "url": "https://www.z-aquatics.com.au/aponogeton-crispus/"
            }
          ]
        },
        {
          "id": 194,
          "name": "Aponogeton undulatus",
          "scientific": "Aponogeton undulatus",
          "difficulty": "Easy",
          "about": "Easy bulb plant with long, wavy leaves. Currently sold out; shop takes pre-orders.",
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
              "30-50 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Tankquility",
              "url": "https://tankquility.com.au/products/aponogeton-undulatus",
              "unit": "bulb (from)",
              "price": 1495,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Tankquility: product page",
              "url": "https://tankquility.com.au/products/aponogeton-undulatus"
            }
          ]
        },
        {
          "id": 196,
          "name": "Banana Lily",
          "scientific": "Nymphoides aquatica",
          "difficulty": "Easy",
          "about": "Lily with banana-shaped tubers and floating leaves. Easy but grows large and may need pruning.",
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
              "Floating leaves"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/banana-lily-nymphoides-aquatica",
              "unit": "1 leaf",
              "price": 995,
              "was": 1950,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquafy",
              "url": "https://aquafy.com.au/products/banana-lily",
              "unit": "portion",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/midground/products/nymphoides-aquatica-banana-lilly-x-3",
              "unit": "x3 (listing title)",
              "price": 695,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/banana-lily-nymphoides-aquatica",
              "unit": "bare root",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 2,
          "sources": [
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/banana-lily-nymphoides-aquatica"
            },
            {
              "label": "Aquafy: product page",
              "url": "https://aquafy.com.au/products/banana-lily"
            },
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/midground/products/nymphoides-aquatica-banana-lilly-x-3"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/banana-lily-nymphoides-aquatica"
            }
          ]
        },
        {
          "id": 197,
          "name": "Nymphoides hydrophylla 'Taiwan'",
          "scientific": "Nymphoides hydrophylla",
          "difficulty": "Easy",
          "about": "Taiwan lily with small, rounded, mottled leaves. Grows up to the surface.",
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
              "20-40 cm"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquaristic Online",
              "url": "https://www.aquaristiconline.com.au/collections/plant-lilies-swords/products/nymphoides-hydrophylla-taiwan",
              "unit": "plant",
              "price": 4500,
              "was": 9000,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Aquaristic Online: product page",
              "url": "https://www.aquaristiconline.com.au/collections/plant-lilies-swords/products/nymphoides-hydrophylla-taiwan"
            }
          ]
        },
        {
          "id": 198,
          "name": "Floating Water Bamboo",
          "scientific": "Hygroryza aristata",
          "difficulty": "Easy",
          "about": "Floating grass with bamboo-like jointed stems. Fast and shades the tank.",
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
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/floating/395-hygroryza-aristata-floater-aquarium-floating-plant.html",
              "unit": "plant",
              "price": 656,
              "was": 690,
              "soldOut": true,
              "checked": "2026-10"
            },
            {
              "shop": "Nano Tanks Australia",
              "url": "https://nanotanksaustralia.com.au/products/hygroryza-aristata-floating-plant",
              "unit": "1 plant ~10cm",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/hygroryza-aristata-bamboo-floating-plant",
              "unit": "plant (from)",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquatic Plants Australia",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/rare-plants/products/hygroryza-aristate",
              "unit": "portion",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/floating/395-hygroryza-aristata-floater-aquarium-floating-plant.html"
            },
            {
              "label": "Nano Tanks Australia: product page",
              "url": "https://nanotanksaustralia.com.au/products/hygroryza-aristata-floating-plant"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/hygroryza-aristata-bamboo-floating-plant"
            },
            {
              "label": "Aquatic Plants Australia: product page",
              "url": "https://www.aquaticplantsaustralia.com.au/collections/rare-plants/products/hygroryza-aristate"
            }
          ]
        },
        {
          "id": 199,
          "name": "Antler Fern",
          "scientific": "Ceratopteris pteridoides",
          "difficulty": "Easy",
          "about": "Floating fern with broad, lobed fronds. Fast and a good nutrient sponge.",
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
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Beyond Aquatics",
              "url": "https://www.beyondaquatics.com.au/product-page/ceratopteris-pteridoides-antler-fern",
              "unit": "portion",
              "price": 1450,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Aquarzon",
              "url": "https://www.aquarzon.com/floating/493-ceratopteris-pteridoides-fern-floating-plant.html",
              "unit": "plant",
              "price": 990,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "AB Quatics",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/antler-floater-floating-plant",
              "unit": "plant",
              "price": 995,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Micro Aquatic Shop",
              "url": "https://microaquaticshop.com.au/products/ceratopteris-pteridoides-antler-fern",
              "unit": "1 plant 3 cm",
              "price": 895,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 1,
          "sources": [
            {
              "label": "Beyond Aquatics: product page",
              "url": "https://www.beyondaquatics.com.au/product-page/ceratopteris-pteridoides-antler-fern"
            },
            {
              "label": "Aquarzon: product page",
              "url": "https://www.aquarzon.com/floating/493-ceratopteris-pteridoides-fern-floating-plant.html"
            },
            {
              "label": "AB Quatics: product page",
              "url": "https://abquatics.shop/collections/live-aquarium-plants/products/antler-floater-floating-plant"
            },
            {
              "label": "Micro Aquatic Shop: product page",
              "url": "https://microaquaticshop.com.au/products/ceratopteris-pteridoides-antler-fern"
            }
          ]
        },
        {
          "id": 200,
          "name": "Duckweed",
          "scientific": "Lemna minor",
          "difficulty": "Easy",
          "about": "Tiny, fast floating plant that covers the surface quickly. Hard to remove once added.",
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
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Larger floating duckweed with bigger, rounder fronds. Fast but easier to net out than Lemna.",
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
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "about": "Tiny floating fern that turns red in strong light. Fast and spreads across the surface.",
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
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
          "id": 203,
          "name": "Frogbit",
          "scientific": "Limnobium laevigatum",
          "difficulty": "Easy",
          "about": "Floating plant with round leaves and long dangling roots. Fast and good for shading.",
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
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/frogbit-floating-plant/",
              "unit": "plant (from)",
              "price": 199,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            },
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/amazonian-frogbit/",
              "unit": "portion (bulk discounts)",
              "price": 500,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/frogbit-floating-plant/"
            }
          ]
        },
        {
          "id": 204,
          "name": "Dwarf Water Lettuce",
          "scientific": "Pistia stratiotes",
          "difficulty": "Easy",
          "about": "Floating rosette with velvety leaves and long roots. Fast and needs good light.",
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
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Roxy Aquarium",
              "url": "https://roxyaquarium.com.au/product/dwarf-water-lettuce/",
              "unit": "plant",
              "price": 250,
              "was": null,
              "soldOut": false,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Roxy Aquarium: product page",
              "url": "https://roxyaquarium.com.au/product/dwarf-water-lettuce/"
            }
          ]
        },
        {
          "id": 205,
          "name": "Bladderwort",
          "scientific": "Utricularia gibba",
          "difficulty": "Easy",
          "about": "Floating, thread-like carnivorous plant with tiny bladder traps. Easy and fast in still water.",
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
              "src": "no-photo.svg",
              "caption": "No photo yet."
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
        },
        {
          "id": 255,
          "name": "Aponogeton tofus",
          "scientific": "Aponogeton tofus",
          "difficulty": "Easy",
          "about": "Bulb plant with long, wavy leaves.",
          "conditions": [
            [
              "Light",
              "High"
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
              "Tall"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Tankquility",
              "url": "https://tankquility.com.au/products/aponogeton-tofus",
              "unit": "each",
              "price": 2495,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Tankquility: product page",
              "url": "https://tankquility.com.au/products/aponogeton-tofus"
            }
          ]
        },
        {
          "id": 256,
          "name": "Aponogeton rigidifolius",
          "scientific": "Aponogeton rigidifolius",
          "difficulty": "Moderate",
          "about": "Large bulb plant with stiff, long leaves.",
          "conditions": [
            [
              "Light",
              "High"
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
              "Tall"
            ]
          ],
          "saNote": null,
          "photos": [
            {
              "src": "no-photo.svg",
              "caption": "No photo yet."
            }
          ],
          "offers": [
            {
              "shop": "Tankquility",
              "url": "https://tankquility.com.au/products/aponogeton-rigidifolius",
              "unit": "each",
              "price": 3995,
              "was": null,
              "soldOut": true,
              "checked": "2026-10"
            }
          ],
          "defaultOffer": 0,
          "sources": [
            {
              "label": "Tankquility: product page",
              "url": "https://tankquility.com.au/products/aponogeton-rigidifolius"
            }
          ]
        }
      ]
    }
  ]
};
