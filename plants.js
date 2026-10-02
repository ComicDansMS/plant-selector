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
          "offers": [],
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
        }
      ]
    }
  ]
};
