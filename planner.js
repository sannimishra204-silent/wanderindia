/**
 * WanderIndia — Phase 4 Smart Trip Planner Script
 * Product Vision: "Explore India. Travel Smarter. Travel Safer."
 *
 * 100% Client-Side • Privacy-First • Deterministic Routing & Budget Estimation
 */

(function () {
  "use strict";

  // ---------------------------------------------------------------------------
  // 1. Destination Planning Data Catalog (All 8 destinations)
  // ---------------------------------------------------------------------------
  const PLANNER_DESTINATIONS = {
    goa: {
      id: "goa",
      name: "Goa",
      region: "West India",
      category: "Beaches",
      tag: "Sun, Sand & Portuguese Heritage",
      heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      tagline: "Sun-drenched golden sands, Portuguese baroque churches, vibrant spice plantations, and laid-back coastal serenity.",
      dailyRates: {
        budget: 1800,
        balanced: 4800,
        premium: 11000
      },
      attractions: [
        {
          title: "Palolem & Agonda Crescent Beaches",
          category: "Beaches",
          interest: "beaches",
          timeSlot: "morning",
          desc: "Crescent-shaped white-sand bays framed by coconut palms, ideal for swimming and quiet seaside walks away from heavy crowds.",
          tip: "Early mornings offer calm seas and quiet shorelines before beach shacks open."
        },
        {
          title: "Basilica of Bom Jesus & Old Goa",
          category: "Heritage",
          interest: "culture",
          timeSlot: "afternoon",
          desc: "Stunning 16th-century baroque cathedral holding the mortal remains of St. Francis Xavier, an architectural UNESCO treasure.",
          tip: "Dress modestly covering shoulders and knees; photography inside the crypt is restricted."
        },
        {
          title: "Fontainhas Latin Quarter Heritage Walk",
          category: "Architecture",
          interest: "culture",
          timeSlot: "morning",
          desc: "Asia's only Latin Quarter in Panaji, featuring cobblestone alleys, traditional azulejos tiles, and pastel Portuguese villas.",
          tip: "Great area for photography and boutique heritage bakeries."
        },
        {
          title: "Fort Aguada & Sinquerim Clifftop",
          category: "Historic Forts",
          interest: "culture",
          timeSlot: "evening",
          desc: "Historic 17th-century Portuguese fortress overlooking the Mandovi River estuary and Arabian Sea sunset horizons.",
          tip: "Arrive around 5:00 PM for the sunset view over the ramparts."
        },
        {
          title: "Dudhsagar Four-Tiered Waterfalls",
          category: "Nature",
          interest: "nature",
          timeSlot: "morning",
          desc: "A dramatic four-tiered cascade plummeting down the lush Western Ghats along the Bhagwan Mahavir Wildlife Sanctuary border.",
          tip: "Requires a forest department jeep safari; advance safari booking is recommended."
        },
        {
          title: "Mandovi River Sunset Cruise",
          category: "Experiences",
          interest: "beaches",
          timeSlot: "evening",
          desc: "Traditional river cruise departing from Panaji promenade with live Goan folk music, Dekhni dance performances, and estuary breezes.",
          tip: "Evening cruises depart between 5:30 PM and 6:30 PM."
        },
        {
          title: "Sal Backwaters Kayaking & Mangroves",
          category: "Nature & Eco",
          interest: "nature",
          timeSlot: "morning",
          desc: "Paddle silently through dense mangrove creeks in South Goa, spotting kingfishers, egrets, and mudskippers in calm tidal waters.",
          tip: "Wear water shoes and carry waterproof pouches for smartphones."
        },
        {
          title: "Sahakari Organic Spice Plantation Tour",
          category: "Agriculture & Food",
          interest: "food",
          timeSlot: "afternoon",
          desc: "Guided walk through fragrant organic groves learning how cardamom, peri-peri peppers, and vanilla are cultivated, followed by a buffet lunch.",
          tip: "Includes a traditional Goan herbal tea welcome and authentic buffet on banana leaves."
        },
        {
          title: "Anjuna & Vagator Red Clifftops",
          category: "Scenic Views",
          interest: "beaches",
          timeSlot: "evening",
          desc: "Dramatic laterite cliffs dropping into the Arabian Sea with panoramic vistas, vibrant cafe culture, and cool coastal breezes.",
          tip: "Wear sturdy footwear when walking on rocky clifftop paths."
        },
        {
          title: "Divar Island Village Bicycle Trail",
          category: "Rural Heritage",
          interest: "culture",
          timeSlot: "morning",
          desc: "Take the river ferry to tranquil Divar Island, cycling past ancestral Indo-Portuguese mansions, sluice gates, and paddy fields.",
          tip: "Ferry crossings from Old Goa are frequent and very scenic."
        }
      ],
      foods: [
        {
          dish: "Goan Fish Curry Thali",
          desc: "Fresh kingfish simmered in coconut milk, spiced with Kashmiri red chilies and sour kokum, served with red rice and kismoor."
        },
        {
          dish: "Chicken Xacuti & Poi Bread",
          desc: "Rich, aromatic curry cooked with roasted grated coconut, poppy seeds, and traditional whole spices paired with crusty Goan poi bread."
        },
        {
          dish: "Bebinca Multi-Layered Dessert",
          desc: "Traditional Indo-Portuguese 7 to 16 layered pudding made from coconut milk, egg yolks, sugar, and fragrant nutmeg."
        },
        {
          dish: "Prawn Balchão",
          desc: "Fiery, tangy prawn pickle-curry preserved in toddy vinegar with garlic, ginger, and red chili paste."
        },
        {
          dish: "Kokum Sol Kadi",
          desc: "Refreshing digestive drink infused with wild kokum extract, coconut milk, garlic, green chilies, and fresh coriander."
        }
      ],
      proTips: [
        "Renting a certified self-drive scooter or private taxi is the easiest way to commute between North and South Goa.",
        "Observe beach safety flags: red flags indicate dangerous undertow currents where swimming is prohibited.",
        "Respect heritage sanctuaries: cover your shoulders and knees when visiting Old Goa churches and temples."
      ]
    },
    manali: {
      id: "manali",
      name: "Manali",
      region: "North India",
      category: "Mountains",
      tag: "Snow Peaks, Pine Valleys & High Passes",
      heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
      tagline: "High alpine valleys surrounded by deodar forests, rushing glacial rivers, and gateway to high Himalayan mountain passes.",
      dailyRates: {
        budget: 1700,
        balanced: 4400,
        premium: 9500
      },
      attractions: [
        {
          title: "Hadimba Devi Pagoda Temple",
          category: "Heritage",
          interest: "culture",
          timeSlot: "morning",
          desc: "Iconic 16th-century four-tiered wooden pagoda temple set amidst towering cedar forests in Dhungri.",
          tip: "Morning visits offer peaceful ambience before tour buses arrive."
        },
        {
          title: "Old Manali Village & Cedar Cafes",
          category: "Culture & Strolls",
          interest: "culture",
          timeSlot: "afternoon",
          desc: "Traditional Himachali stone-and-timber village with winding alleys, apple orchards, live-music cafes, and local handlooms.",
          tip: "Great place to sample organic rhododendron tea and fresh mountain bakery items."
        },
        {
          title: "Solang Valley Alpine Meadow",
          category: "Adventure & Landscapes",
          interest: "mountains",
          timeSlot: "morning",
          desc: "High mountain amphitheater famous for paragliding, snow vistas, zorbing, and pine-clad mountain ridges.",
          tip: "Visit during the morning hours for clearest weather and mountain visibility."
        },
        {
          title: "Atal Tunnel & Sissu Waterfall, Lahaul",
          category: "High Altitude Wonder",
          interest: "mountains",
          timeSlot: "afternoon",
          desc: "Traverse the 9.02 km world's longest high-altitude highway tunnel emerging into the breathtaking arid valleys of Lahaul.",
          tip: "Carry warm layers as temperatures drop significantly once crossing into Lahaul."
        },
        {
          title: "Jogini Waterfall Forest Hike",
          category: "Nature Trails",
          interest: "nature",
          timeSlot: "morning",
          desc: "Pleasant 3 km pine forest trail leading from Vashisht village up to a cascading mountain waterfall with panoramic Beas river views.",
          tip: "Wear hiking shoes with good grip; the trail can be slippery near the splash pool."
        },
        {
          title: "Vashisht Natural Sulphur Springs",
          category: "Wellness",
          interest: "culture",
          timeSlot: "evening",
          desc: "Historic village featuring natural therapeutic hot sulphur springs with dedicated male and female public bathing enclaves.",
          tip: "The water temperature is naturally hot; soak for 15-20 minutes for maximum muscle relaxation."
        },
        {
          title: "Naggar Castle Heritage Complex",
          category: "Heritage & Art",
          interest: "culture",
          timeSlot: "afternoon",
          desc: "Stunning 15th-century wood-and-stone fortress of the Kullu Rajas, overlooking the valley, with the Nicholas Roerich Art Gallery nearby.",
          tip: "Enjoy tea on the castle verandah overlooking the snowcapped Pir Panjal range."
        },
        {
          title: "Beas River Promenade & Nature Park",
          category: "Nature",
          interest: "nature",
          timeSlot: "evening",
          desc: "Gentle riverside walk beneath ancient deodars, listening to the thunderous Beas rapids with scenic mountain backdrops.",
          tip: "Stay behind security barriers; river currents are treacherous."
        }
      ],
      foods: [
        {
          dish: "Siddu with Pure Ghee",
          desc: "Steamed wheat dough pocket filled with a savory paste of crushed walnuts, poppy seeds, and spices, served hot with melted desi ghee."
        },
        {
          dish: "Himachali Dham Platter",
          desc: "Traditional ceremonial festive feast of Madra (chickpeas in yogurt), Mahni (tangy black gram), and sweet rice served on leaf plates."
        },
        {
          dish: "Fresh Himalayan Trout Fry",
          desc: "Locally farmed river trout delicately seasoned with lemon, garlic, and mountain herbs, pan-fried to crisp perfection."
        },
        {
          dish: "Tudkiya Bhath",
          desc: "Spiced mountain pilaf cooked with lentils, potatoes, yogurt, cardamom, and mountain garlic."
        },
        {
          dish: "Kullu Apple Crumble",
          desc: "Warm dessert baked with crisp organic Kullu valley apples, cinnamon, and toasted oat crust."
        }
      ],
      proTips: [
        "Acclimatize gradually if traveling past Atal Tunnel into Lahaul; drink plenty of water.",
        "Keep motion sickness tablets handy if sensitive to winding mountain switchbacks.",
        "Book Rohtang Pass permits several days in advance during the peak summer window."
      ]
    },
    kashmir: {
      id: "kashmir",
      name: "Kashmir",
      region: "North India",
      category: "Mountains",
      tag: "Paradise on Earth & Alpine Lakes",
      heroImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
      tagline: "Majestic snow peaks, iconic Dal Lake houseboats, fragrant saffron fields, and verdant Mughal royal gardens.",
      dailyRates: {
        budget: 2200,
        balanced: 5500,
        premium: 12500
      },
      attractions: [
        {
          title: "Dawn Shikara Cruise on Dal Lake",
          category: "Lakes & Waterways",
          interest: "nature",
          timeSlot: "morning",
          desc: "Glide across the mirrored waters of Dal Lake at sunrise, exploring floating vegetable markets, lotus beds, and water channels.",
          tip: "Start at 6:00 AM for the most tranquil light and authentic wholesale market boats."
        },
        {
          title: "Gulmarg Gondola & Apharwat Peak",
          category: "High Altitude",
          interest: "mountains",
          timeSlot: "morning",
          desc: "Board Asia's highest cable car ascending to Phase II at 13,780 feet for breathtaking 360-degree views of Himalayan peaks and snowfields.",
          tip: "Book Gondola Phase II tickets well in advance online via the official J&K tourism portal."
        },
        {
          title: "Pahalgam & Betaab Valley",
          category: "Scenic Valleys",
          interest: "nature",
          timeSlot: "morning",
          desc: "Picturesque pine-rimmed meadow flanked by snow-capped peaks and the crystal-clear Lidder River rushing through the valley floor.",
          tip: "Great spot for family picnics, riverside pony rides, and photography."
        },
        {
          title: "Mughal Terraced Gardens (Shalimar & Nishat)",
          category: "Historic Gardens",
          interest: "culture",
          timeSlot: "afternoon",
          desc: "Magnificent 17th-century terraced gardens engineered with water cascades, fountain pools, and century-old Chinar trees.",
          tip: "Autumn (October-November) turns the Chinar leaves into brilliant crimson and gold."
        },
        {
          title: "Old Srinagar Heritage Walk & Jamia Masjid",
          category: "Architecture & Culture",
          interest: "culture",
          timeSlot: "afternoon",
          desc: "Walk through the historic Shah-e-Hamdan and 600-year-old Jamia Masjid with 378 deodar timber pillars and labyrinthine spice bazars.",
          tip: "Modest attire is required; shoe storage is available at the entrance."
        },
        {
          title: "Cedar Houseboat Stay on Nigeen Lake",
          category: "Heritage Stays",
          interest: "culture",
          timeSlot: "evening",
          desc: "Experience classic Kashmiri hospitality aboard an intricately hand-carved pinewood houseboat with private viewing deck.",
          tip: "Nigeen Lake is quieter and more peaceful than commercial Dal Lake stretches."
        },
        {
          title: "Sonamarg 'Meadow of Gold' & Thajiwas Glacier",
          category: "Alpine Wonders",
          interest: "mountains",
          timeSlot: "morning",
          desc: "Gateway to high-altitude treks where silver birch forests meet the permanent ice and snow cones of Thajiwas Glacier.",
          tip: "Carry warm jackets and rent rubber boots on-site if trekking onto glacier snow."
        },
        {
          title: "Pashmina & Walnut Wood Workshop Experience",
          category: "Artisan Crafts",
          interest: "culture",
          timeSlot: "evening",
          desc: "Witness master Kashmiri artisans spinning delicate GI-tagged Pashmina shawls and hand-chiseling intricate walnut furniture.",
          tip: "Look for the official GI hologram tag when purchasing certified Pashmina."
        }
      ],
      foods: [
        {
          dish: "Kashmiri Wazwan Rogan Josh",
          desc: "Tender lamb slow-cooked in aromatic gravy infused with Kashmiri Mawal cockscomb flower, fennel powder, and dried ginger."
        },
        {
          dish: "Kashmiri Kahwa with Almonds",
          desc: "Fragrant green tea brewed with saffron strands, crushed cardamom, cinnamon, and slivered almonds, sweetened with honey."
        },
        {
          dish: "Gushtaba (Meatballs in Yogurt Gravy)",
          desc: "Hand-pounded minced mutton balls simmered in a velvety yogurt gravy seasoned with dry mint and cardamom."
        },
        {
          dish: "Dum Aloo Kashmiri",
          desc: "Baby potatoes deep-fried and slow-simmered in a rich, yogurt-based gravy scented with Kashmiri red chili and saunf."
        },
        {
          dish: "Sheermal & Girda Breads",
          desc: "Traditional local tandoor-baked saffron flatbreads enjoyed with butter or salt tea (Nun Chai) at dawn."
        }
      ],
      proTips: [
        "Carry valid government photo IDs (Aadhaar or Passport) at all times; security checkpoints are routine.",
        "Prepaid SIM cards from outside J&K do not work due to telecom regulations; obtain a local postpaid/prepaid SIM or use hotel Wi-Fi.",
        "Always agree upon Shikara and pony rates beforehand according to official tourism department rate cards."
      ]
    },
    jaipur: {
      id: "jaipur",
      name: "Jaipur",
      region: "West India",
      category: "Culture",
      tag: "Pink City Palaces & Historic Forts",
      heroImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
      tagline: "Terracotta-pink palaces, hilltop Rajput fortresses, world-heritage astronomical instruments, and bustling artisan bazaars.",
      dailyRates: {
        budget: 1500,
        balanced: 4200,
        premium: 9800
      },
      attractions: [
        {
          title: "Amer (Amber) Fort & Sheesh Mahal",
          category: "Historic Forts",
          interest: "culture",
          timeSlot: "morning",
          desc: "Imposing 16th-century hilltop palace blending Rajput and Mughal architecture, with the breathtaking Hall of Mirrors (Sheesh Mahal).",
          tip: "Arrive at 8:30 AM to beat the mid-day heat and large group tour buses."
        },
        {
          title: "Hawa Mahal (Palace of Winds)",
          category: "Royal Palaces",
          interest: "culture",
          timeSlot: "morning",
          desc: "Five-story pink sandstone facade featuring 953 intricately carved jharokhas (casements) designed for royal court ladies.",
          tip: "The best street photography angle is from the rooftop cafes directly opposite."
        },
        {
          title: "City Palace & Chandra Mahal Museum",
          category: "Royal Heritage",
          interest: "culture",
          timeSlot: "afternoon",
          desc: "Sprawling royal complex housing courtyards, Peacock Gate, royal armory, and the current residence of the Maharaja family.",
          tip: "Composite tickets save money when visiting City Palace alongside Jantar Mantar."
        },
        {
          title: "Jantar Mantar UNESCO Astronomical Observatory",
          category: "Heritage Science",
          interest: "culture",
          timeSlot: "afternoon",
          desc: "The world's largest stone astronomical observatory built by Maharaja Jai Singh II, featuring the 27-meter-tall Samrat Yantra sundial.",
          tip: "Hiring an authorized audio guide or monument guide makes the complex instruments come alive."
        },
        {
          title: "Sunset at Nahargarh Fort Ramparts",
          category: "Scenic Views",
          interest: "nature",
          timeSlot: "evening",
          desc: "Perched high on the Aravalli hills, Nahargarh offers an unforgettable bird's-eye panorama of Jaipur bathed in sunset gold.",
          tip: "The open terrace restaurant provides spectacular city lights views after dusk."
        },
        {
          title: "Johari & Bapu Bazaar Artisan Walk",
          category: "Shopping & Crafts",
          interest: "culture",
          timeSlot: "evening",
          desc: "Explore vibrant Pink City markets famous for blue pottery, block-printed quilts, bandhani textiles, and precious gemstone jewelry.",
          tip: "Bargaining is customary; maintain a polite and friendly rapport."
        },
        {
          title: "Jal Mahal (Water Palace) Promenade",
          category: "Monuments",
          interest: "nature",
          timeSlot: "evening",
          desc: "Stunning yellow sandstone palace floating serenely in the center of Man Sagar Lake, framed by surrounding Aravalli hills.",
          tip: "The palace interior is closed, but the lakeside promenade offers great night illumination views."
        },
        {
          title: "Jaigarh Fort & Jaivana Cannon",
          category: "Military History",
          interest: "culture",
          timeSlot: "afternoon",
          desc: "Rugged military fortress holding the Jaivana cannon, once the world's largest cannon on wheels, connected to Amer by secret passages.",
          tip: "Explore the underground water tanks and ancient cannon foundry."
        }
      ],
      foods: [
        {
          dish: "Dal Baati Churma",
          desc: "Quintessential Rajasthani trio: baked wheat balls dipped in pure ghee, spicy five-lentil dal, and sweetened crushed churma."
        },
        {
          dish: "Laal Maas (Fiery Mutton)",
          desc: "Royal Rajput game meat curry simmered in a fiery, deep-red gravy infused with Mathania chilies and garlic."
        },
        {
          dish: "Pyaaz Kachori & Mirchi Vada",
          desc: "Flaky, crisp golden pastries stuffed with spiced caramelized onions, served with sweet tamarind and spicy mint chutneys."
        },
        {
          dish: "Ghevar Traditional Sweet",
          desc: "Disc-shaped honeycomb dessert soaked in sugar syrup, topped with rich rabdi, saffron strands, and silver vark."
        },
        {
          dish: "Lassi in Earthen Kulhad",
          desc: "Thick, creamy yogurt lassi served chilled in clay cups with a generous dollop of fresh malai on top."
        }
      ],
      proTips: [
        "Jaipur gets very warm between 11 AM and 3 PM; schedule indoor palace museums or rest during these peak sun hours.",
        "Buy the Government of India composite ticket for Amer, Hawa Mahal, Jantar Mantar, and Nahargarh to save over 40% on entry fees.",
        "Always take registered prepaid autos or verified ride-hailing apps to avoid tout markups."
      ]
    },
    kerala: {
      id: "kerala",
      name: "Kerala",
      region: "South India",
      category: "Nature",
      tag: "God's Own Country & Emerald Backwaters",
      heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      tagline: "Emerald backwaters, mist-shrouded Munnar tea hills, ancient spice trade ports, and Ayurvedic wellness retreats.",
      dailyRates: {
        budget: 1900,
        balanced: 5200,
        premium: 11500
      },
      attractions: [
        {
          title: "Alleppey (Alappuzha) Backwater Cruise",
          category: "Backwaters",
          interest: "nature",
          timeSlot: "afternoon",
          desc: "Board a traditional thatched Kettuvallam houseboat drifting past paddy fields, water lilies, and idyllic canalside villages.",
          tip: "Opt for an overnight stay or a private day cruise with traditional Karimeen fish lunch on board."
        },
        {
          title: "Munnar Kolukkumalai Tea Estates",
          category: "Mountains & Tea",
          interest: "mountains",
          timeSlot: "morning",
          desc: "Lush rolling emerald hills carpeted with tea bushes, misty valleys, and the world's highest tea plantation at 7,900 feet.",
          tip: "Early morning walks through the tea estates offer spectacular cloud-inversion views."
        },
        {
          title: "Fort Kochi Colonial Quarter & Chinese Nets",
          category: "Heritage & Coast",
          interest: "culture",
          timeSlot: "morning",
          desc: "Colonial town with Portuguese churches, Jew Town spice warehouses, Dutch Palace, and iconic cantilevered Chinese fishing nets.",
          tip: "Stroll along Fort Kochi beach at sunset to see the nets silhouetted against the sea."
        },
        {
          title: "Periyar Wildlife Sanctuary, Thekkady",
          category: "Wildlife & Eco",
          interest: "nature",
          timeSlot: "morning",
          desc: "Lush protected tropical reserve centered around Periyar Lake, renowned for wild elephants, bison, otters, and endemic birds.",
          tip: "Book early morning boat safaris through the Kerala Forest Department portal."
        },
        {
          title: "Kathakali & Kalaripayattu Cultural Show",
          category: "Performing Arts",
          interest: "culture",
          timeSlot: "evening",
          desc: "Experience classical Kathakali dance-drama with intricate facial makeup, followed by thrilling Kalaripayattu martial arts demonstrations.",
          tip: "Arrive 30 minutes early to watch the artists apply their traditional mineral face paints."
        },
        {
          title: "Varkala Clifftop & Papanasam Beach",
          category: "Beaches & Wellness",
          interest: "beaches",
          timeSlot: "evening",
          desc: "Dramatic red laterite cliffs towering above the Arabian Sea with seaside cafes, yoga retreats, and natural spring waters.",
          tip: "Sunset views from the North Cliff are among the finest in South India."
        },
        {
          title: "Ayurvedic Rejuvenation Massage Session",
          category: "Wellness",
          interest: "nature",
          timeSlot: "afternoon",
          desc: "Traditional Abhyanga full-body warm herbal oil therapy followed by herbal steam bath at a certified government-approved center.",
          tip: "Ensure the center is certified by the Kerala Tourism Green Leaf / Olive Leaf program."
        },
        {
          title: "Kumarakom Bird Sanctuary Wetland Walk",
          category: "Nature & Birding",
          interest: "nature",
          timeSlot: "morning",
          desc: "14-acre mangrove wetland on the shores of Vembanad Lake, home to egrets, herons, waterfowl, and migratory Siberian cranes.",
          tip: "Best visited between November and February during peak migratory arrivals."
        }
      ],
      foods: [
        {
          dish: "Appam with Vegetable / Chicken Stew",
          desc: "Lacy fermented rice batter hoppers with soft spongy centers, served with aromatic coconut milk stew simmered with cinnamon and cloves."
        },
        {
          dish: "Karimeen Pollichathu",
          desc: "Pearl spot fish marinated in spicy shallot-chili masala, wrapped in fresh banana leaves, and pan-roasted over slow heat."
        },
        {
          dish: "Traditional Kerala Sadya",
          desc: "Grand multi-course vegetarian feast served on banana leaf featuring Avial, Sambar, Thoran, Kalan, and sweet Palada Payasam."
        },
        {
          dish: "Malabar Parotta & Beef/Mushroom Roast",
          desc: "Flaky, multi-layered spiral bread paired with slow-roasted meat or mushrooms tossed in browned shallots, curry leaves, and black pepper."
        },
        {
          dish: "Tender Coconut Pudding",
          desc: "Silky, chilled dessert crafted from fresh tender coconut pulp, coconut water, milk, and natural agar-agar."
        }
      ],
      proTips: [
        "Monsoon season (June to August) brings heavy rainfall but is the traditional peak period for authentic Ayurvedic treatments.",
        "When booking houseboats, verify that the vessel possesses a valid license from the Department of Tourism and carries life jackets.",
        "Kerala cuisine uses generous coconut oil and spices; you can request milder preparation at hotels if sensitive."
      ]
    },
    varanasi: {
      id: "varanasi",
      name: "Varanasi",
      region: "North India",
      category: "Culture",
      tag: "Ancient Spiritual Capital on the Ganges",
      heroImage: "assets/images/varanashi.jpg",
      tagline: "Timeless sacred river ghats, mesmerizing evening Ganga Aarti ceremonies, ancient temple corridors, and spiritual heritage.",
      dailyRates: {
        budget: 1300,
        balanced: 3600,
        premium: 8500
      },
      attractions: [
        {
          title: "Grand Evening Ganga Aarti at Dashashwamedh Ghat",
          category: "Spiritual Rituals",
          interest: "culture",
          timeSlot: "evening",
          desc: "Mesmerizing devotional ceremony conducted by young priests with massive brass lamps, conch shells, and rhythmic chants.",
          tip: "Rent a wooden boat on the river around 6:00 PM for unobstructed views from the water."
        },
        {
          title: "Dawn Wooden Boat Ride along the River Ghats",
          category: "River Heritage",
          interest: "culture",
          timeSlot: "morning",
          desc: "Drift past 84 sacred riverfront ghats at sunrise as morning bathers, sadhus, and historic sandstone palaces bathe in golden light.",
          tip: "Negotiate boat fares beforehand from Assi Ghat to Manikarnika Ghat."
        },
        {
          title: "Kashi Vishwanath Corridor & Golden Temple",
          category: "Temples",
          interest: "culture",
          timeSlot: "morning",
          desc: "One of the 12 sacred Jyotirlingas, newly connected to the Ganges by a grand marble pedestrian corridor.",
          tip: "Strict security: mobile phones, leather belts, and bags must be deposited in official lockers outside."
        },
        {
          title: "Old City Galis & Banarasi Silk Looms Walk",
          category: "Heritage & Craft",
          interest: "culture",
          timeSlot: "afternoon",
          desc: "Navigate the atmospheric medieval labyrinth of cobblestone alleys discovering century-old handloom weavers creating pure silk sarees.",
          tip: "A guided walking tour is ideal to avoid getting disoriented in the narrow alleyways."
        },
        {
          title: "Sacred Sarnath Buddhist Heritage Park",
          category: "Monuments & Buddhism",
          interest: "culture",
          timeSlot: "morning",
          desc: "10 km from Varanasi where Lord Buddha preached his first sermon; site of the Dhamek Stupa and Lion Capital Ashoka Pillar museum.",
          tip: "Visit the Archaeological Museum on site (closed on Fridays)."
        },
        {
          title: "Assi Ghat Subah-e-Banaras Morning Program",
          category: "Music & Yoga",
          interest: "culture",
          timeSlot: "morning",
          desc: "Dawn spiritual awakening program featuring Vedic chanting, morning Ganga aarti, open-air yoga, and classical Hindustani music.",
          tip: "Starts at 5:00 AM; open and free to all visitors on the wide steps of Assi Ghat."
        },
        {
          title: "Ramnagar Fort & Riverfront Palace Museum",
          category: "Historic Forts",
          interest: "culture",
          timeSlot: "afternoon",
          desc: "18th-century cream-sandstone fortress on the eastern bank of the Ganges, holding royal vintage cars, armory, and astronomical clocks.",
          tip: "Cross the Pontoon bridge or take a riverboat across to the fort."
        },
        {
          title: "Manikarnika & Harishchandra Ghat Contemplation",
          category: "Sacred Philosophy",
          interest: "culture",
          timeSlot: "evening",
          desc: "Varanasi's sacred cremation ghats where perpetual fires have burned for millennia, representing the cycle of life, death, and liberation.",
          tip: "Maintain solemn silence; photography of funerals and pyres is strictly forbidden out of respect."
        }
      ],
      foods: [
        {
          dish: "Banarasi Kachori Sabzi & Jalebi",
          desc: "Breakfast staple: hot puffed kachoris served with spicy hing-infused potato curry and piping hot, crisp syrup-soaked jalebis."
        },
        {
          dish: "Blue Lassi / Peda Malai Lassi",
          desc: "Hand-churned thick curd lassi layered with rich rabdi, dried fruits, rose syrup, and fresh seasonal pomegranate."
        },
        {
          dish: "Banarasi Tamatar Chaat",
          desc: "Unique hot street chaat made with stewed tomatoes, crushed potatoes, cumin, ginger, cashew nuts, and sweet syrup."
        },
        {
          dish: "Authentic Banarasi Paan",
          desc: "Betel leaf filled with fragrant gulkand (rose jam), sweet fennel, menthol, and supari, folded into a refreshing digestif."
        },
        {
          dish: "Malaiyo (Winter Saffron Froth)",
          desc: "Seasonal winter delicacy made by churning dew-chilled raw milk into a light, cloud-like foam infused with saffron and pistachios."
        }
      ],
      proTips: [
        "Varanasi is best explored on foot or by cycle rickshaws; large vehicles cannot navigate the historic ghat alleys.",
        "Drink only sealed bottled or filtered water; avoid raw salads or unpeeled fruits from roadside vendors.",
        "Be wary of aggressive touts around temple alleys offering 'VIP darshan' or demanding donations near burning ghats."
      ]
    },
    darjeeling: {
      id: "darjeeling",
      name: "Darjeeling",
      region: "East India",
      category: "Mountains",
      tag: "Queen of the Hills, Tea Gardens & Kanchenjunga",
      heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      tagline: "Misty mountain ridges, world-renowned single-origin tea estates, UNESCO heritage steam railway, and sunrise over Mount Kanchenjunga.",
      dailyRates: {
        budget: 1600,
        balanced: 4200,
        premium: 9200
      },
      attractions: [
        {
          title: "Tiger Hill Sunrise over Mount Kanchenjunga",
          category: "High Vistas",
          interest: "mountains",
          timeSlot: "morning",
          desc: "Watch the first golden dawn rays illuminate the world's third highest peak, Mount Kanchenjunga, and the far Himalayan crest.",
          tip: "Leave your hotel by 4:00 AM; traffic at Tiger Hill is heavy during peak tourist months."
        },
        {
          title: "Darjeeling Himalayan Railway (DHR) Steam Joy Ride",
          category: "Heritage Rail",
          interest: "culture",
          timeSlot: "morning",
          desc: "Ride the legendary UNESCO World Heritage 2-foot narrow-gauge toy train looping through Batasia Loop to Ghum, India's highest station.",
          tip: "Book steam-locomotive joy ride tickets well in advance via IRCTC."
        },
        {
          title: "Happy Valley Tea Estate Factory & Tasting",
          category: "Tea Gardens",
          interest: "nature",
          timeSlot: "afternoon",
          desc: "Established in 1854, walk through verdant slopes seeing plucking, processing, rolling, and tasting world-famous First Flush Darjeeling teas.",
          tip: "Factory machinery operates actively between March and November during plucking seasons."
        },
        {
          title: "Batasia Loop & Gorkha War Memorial",
          category: "Heritage & Views",
          interest: "culture",
          timeSlot: "afternoon",
          desc: "An engineering marvel where the toy train negotiates a 360-degree spiral loop amid manicured gardens and Himalayan panoramas.",
          tip: "On clear days, the entire Kanchenjunga range frames the memorial backdrop."
        },
        {
          title: "Himalayan Mountaineering Institute & Zoo",
          category: "Nature & Adventure",
          interest: "nature",
          timeSlot: "morning",
          desc: "Founded by Tenzing Norgay; features a historic Everest museum alongside a conservation zoo housing rare Red Pandas and Snow Leopards.",
          tip: "Closed on Thursdays; plan at least 2 hours to explore both facilities."
        },
        {
          title: "Japanese Peace Pagoda & Buddhist Temple",
          category: "Spiritual & Peace",
          interest: "culture",
          timeSlot: "afternoon",
          desc: "Serene white pagoda constructed by Nichidatsu Fuji, featuring polished stone carvings depicting the four stages of Buddha's life.",
          tip: "Join the evening drum chanting at 4:30 PM inside the adjacent wooden temple."
        },
        {
          title: "Chowrasta Mall Road Stroll & Heritage Cafes",
          category: "Culture & Strolls",
          interest: "culture",
          timeSlot: "evening",
          desc: "The pedestrian social heart of Darjeeling with mountain benches, pony rides, Curio shops, and historic colonial bakeries.",
          tip: "Stop at Keventers for hot chocolate on the open terrace or Glenary's for fresh pastries."
        },
        {
          title: "Rock Garden & Ganga Maya Waterfalls",
          category: "Scenic Nature",
          interest: "nature",
          timeSlot: "morning",
          desc: "Multi-tiered terraced rock garden sculpted around a natural mountain stream 10 km down the winding hillside from town.",
          tip: "The road descent is steep; hire a reliable 4WD local cab for the round trip."
        }
      ],
      foods: [
        {
          dish: "Steamed Darjeeling Momos with Dalle Khursani Sauce",
          desc: "Handmade dumplings stuffed with seasoned chicken, pork, or vegetables, served with fiery paste of native Dalle chili."
        },
        {
          dish: "Warm Tibetan Thukpa Noodle Soup",
          desc: "Comforting hot noodle broth loaded with shredded vegetables or meat, fresh coriander, and mountain herbs."
        },
        {
          dish: "First Flush Darjeeling Tea Platter",
          desc: "Light, floral, and amber-gold single-estate tea with delicate muscatel grape notes, served without milk or sugar."
        },
        {
          dish: "Churpi Traditional Mountain Cheese Soup",
          desc: "Nutritious traditional soup made with soft fermented cottage cheese, tender greens, garlic, and wild herbs."
        },
        {
          dish: "Shaphalay (Crispy Meat Pastry)",
          desc: "Tibetan deep-fried bread stuffed with seasoned minced meat and scallions, served with spicy garlic dipping sauce."
        }
      ],
      proTips: [
        "Mountain weather can change rapidly; carry a warm fleece and compact windbreaker even during sunny spring days.",
        "Darjeeling roads are steep and narrow; wearing comfortable walking sneakers is essential for navigating town hills.",
        "Book shared or private jeeps for Bagdogra / Siliguri transport from registered transport union stands."
      ]
    },
    gangtok: {
      id: "gangtok",
      name: "Gangtok",
      region: "East India",
      category: "Mountains",
      tag: "Monasteries, Cloud Forests & Himalayan Vistas",
      heroImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
      tagline: "Pristine Himalayan valleys, peaceful Tibetan monasteries, high-altitude glacial lakes, and immaculate pedestrian promenades.",
      dailyRates: {
        budget: 1750,
        balanced: 4500,
        premium: 9800
      },
      attractions: [
        {
          title: "Rumtek Monastery (Dharma Chakra Centre)",
          category: "Tibetan Heritage",
          interest: "culture",
          timeSlot: "morning",
          desc: "The largest and most sacred monastery in Sikkim, seat of the Karma Kagyu lineage, holding golden stupas and sacred murals.",
          tip: "Carry your passport / Aadhaar card as there is a security outpost at the monastery entrance."
        },
        {
          title: "Tsomgo (Changu) Glacial Lake Excursion",
          category: "High Altitude Lakes",
          interest: "mountains",
          timeSlot: "morning",
          desc: "Sacred high-altitude glacial lake at 12,310 feet, reflecting the surrounding snow peaks and alpine rhodedendron slopes.",
          tip: "Special Protected Area Permits (PAP) are mandatory and must be arranged one day prior through a registered tour operator."
        },
        {
          title: "MG Marg Clean Pedestrian Boulevard",
          category: "Promenade",
          interest: "culture",
          timeSlot: "evening",
          desc: "India's first litter-free, spit-free, and vehicle-free cobblestone promenade, lined with cafes, souvenir shops, and benches.",
          tip: "Strict no-smoking and no-littering rules apply with heavy on-the-spot fines."
        },
        {
          title: "Namgyal Institute of Tibetology & Do-Drul Chorten",
          category: "Culture & Philosophy",
          interest: "culture",
          timeSlot: "afternoon",
          desc: "Renowned museum promoting research on Tibetan language, Mahayana Buddhism, rare manuscripts, and traditional thangka paintings.",
          tip: "Circumambulate the adjacent Do-Drul Chorten stupa in a clockwise direction as per tradition."
        },
        {
          title: "Gangtok Ropeway Cable Car Ride",
          category: "Aerial Views",
          interest: "mountains",
          timeSlot: "morning",
          desc: "One-kilometer zig-zag ropeway gliding over Gangtok town, offering sweeping views of Deorali, the ridge, and the valley below.",
          tip: "Ride early in the morning before cloud cover rolls into the valley."
        },
        {
          title: "Enchey Monastery & Pine Ridge",
          category: "Heritage",
          interest: "culture",
          timeSlot: "afternoon",
          desc: "200-year-old Nyingma monastery perched high on a ridge above Gangtok, blessed by the tantric master Lama Druptob Karpo.",
          tip: "Visit during prayer hours to experience the deep ceremonial horns and cymbal sounds."
        },
        {
          title: "Ban Jhakri Falls & Shamanic Heritage Park",
          category: "Waterfalls & Folklore",
          interest: "nature",
          timeSlot: "morning",
          desc: "A 100-foot cascading mountain waterfall surrounded by landscaped gardens showcasing traditional Sikkim shamanic folklore.",
          tip: "A relaxing morning excursion 7 km from town, great for families and nature walks."
        },
        {
          title: "Tashi Viewpoint Sunrise Vista",
          category: "Scenic Views",
          interest: "mountains",
          timeSlot: "morning",
          desc: "Lookout point 8 km from Gangtok offering unobstructed panoramic views of Mount Kanchenjunga and Mount Siniolchu.",
          tip: "Arrive at dawn for the clearest views; binoculars are available for hire."
        }
      ],
      foods: [
        {
          dish: "Sikkimese Phagshapa Platter",
          desc: "Traditional pork or mushroom stew cooked with tender mountain radish, red chilies, and wild ginger, served with sticky rice."
        },
        {
          dish: "Tibetan Gyathuk Noodle Soup",
          desc: "Hand-rolled wheat noodles in hot clear vegetable or chicken bone broth seasoned with Sichuan pepper and spring onions."
        },
        {
          dish: "Kinema Curry (Fermented Soya)",
          desc: "Traditional ethnic delicacy made with naturally fermented soybeans, cooked with onions, tomatoes, and native chilies."
        },
        {
          dish: "Sha Phaley with Chili Paste",
          desc: "Deep-fried semicircular bread parcels filled with seasoned minced meat or cabbage, crunchy outside and juicy inside."
        },
        {
          dish: "Chhang Fermented Millet Beverage",
          desc: "Traditional Himalayan beverage brewed from fermented finger millet, served warm in bamboo vessels with a bamboo straw."
        }
      ],
      proTips: [
        "Sikkim is a 100% organic state and has banned single-use plastic bottles; carry reusable water flasks.",
        "Protected Area Permits (PAP) are required for Tsomgo Lake, Baba Mandir, and Nathula Pass; bring 4 passport photos and ID copies.",
        "Strict anti-smoking laws exist across all public spaces in Sikkim."
      ]
    }
,

    mumbai: {
      "id": "mumbai",
      "name": "Mumbai",
      "region": "West India",
      "category": "Culture",
      "tag": "City of Dreams",
      "heroImage": "assets/images/mumbai.jpg",
      "tagline": "Colonial Victorian architecture, Arabian Sea sunsets on Marine Drive, Elephanta caves, and iconic street food.",
      "dailyRates": {
            "budget": 2200,
            "balanced": 5800,
            "premium": 14000
      },
      "attractions": [
            {
                  "title": "Gateway of India & Taj Palace Promenade",
                  "category": "Heritage",
                  "interest": "culture",
                  "timeSlot": "morning",
                  "desc": "Iconic 1924 waterfront triumphal arch overlooking Mumbai Harbor and the historic Taj Mahal Palace hotel.",
                  "tip": "Early morning visits avoid harbor ferry crowds and offer calm photography conditions."
            },
            {
                  "title": "Marine Drive & Queen's Necklace",
                  "category": "Coastline",
                  "interest": "beaches",
                  "timeSlot": "evening",
                  "desc": "A 3.6 km sweeping coastal boulevard with Arabian Sea sunset vistas and vibrant evening city lights.",
                  "tip": "Sit along the seaside promenade wall between 5:30 PM and 7:00 PM for the sunset glow."
            },
            {
                  "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
                  "category": "Architecture",
                  "interest": "culture",
                  "timeSlot": "afternoon",
                  "desc": "UNESCO World Heritage Victorian Gothic railway headquarters featuring stone gargoyles, domes, and stained glass.",
                  "tip": "View the illuminated facade at night after visiting the heritage galleries inside."
            },
            {
                  "title": "Elephanta Island Rock-Cut Caves",
                  "category": "UNESCO Heritage",
                  "interest": "culture",
                  "timeSlot": "morning",
                  "desc": "Ancient 6th-century rock-cut cave temples dedicated to Lord Shiva, reached via a scenic one-hour harbor boat cruise.",
                  "tip": "Ferries depart from Gateway of India; caves are closed on Mondays."
            },
            {
                  "title": "Kala Ghoda Art & Heritage Precinct",
                  "category": "Culture",
                  "interest": "culture",
                  "timeSlot": "afternoon",
                  "desc": "Mumbai's premier art district lined with heritage synagogues, contemporary galleries, and bohemian cafes.",
                  "tip": "Excellent area for boutique design shopping and quiet cafe lunches."
            },
            {
                  "title": "Bandra Bandstand & Portuguese Fort",
                  "category": "Coastline",
                  "interest": "peaceful",
                  "timeSlot": "evening",
                  "desc": "Historic coastal fort ruins overlooking the dramatic open ocean and Bandra-Worli Sea Link highway.",
                  "tip": "Combine with an evening stroll past Bandra's colorful historic Portuguese village lanes."
            },
            {
                  "title": "Sanjay Gandhi National Park & Kanheri Caves",
                  "category": "Nature",
                  "interest": "nature",
                  "timeSlot": "morning",
                  "desc": "A sprawling protected forest reserve within city limits housing ancient 1st-century Buddhist rock-cut caves.",
                  "tip": "Rent a bicycle at the park entrance to explore the tranquil forest road leading to the caves."
            },
            {
                  "title": "Crawford Market & Mangaldas Fabric Bazaar",
                  "category": "Bazaars",
                  "interest": "food",
                  "timeSlot": "afternoon",
                  "desc": "Vibrant Norman-Gothic indoor market famous for seasonal Alphonso mangoes, spices, dry fruits, and silks.",
                  "tip": "Bargaining is expected; keep valuables secure in busy central aisles."
            }
      ],
      "foods": [
            {
                  "dish": "Mumbai Vada Pav & Pav Bhaji",
                  "desc": "Crispy spiced potato fritter in buttered pav, and spicy mashed mixed vegetable curry with warm dinner rolls."
            },
            {
                  "dish": "Bombay Duck Semolina Fry",
                  "desc": "Crisp golden-fried Bombil fish marinated in coastal spices, a coastal Koli community specialty."
            },
            {
                  "dish": "Parsi Mutton Dhansak",
                  "desc": "Slow-simmered spiced lentil and tender mutton stew served with caramelized onion rice and kachumber."
            },
            {
                  "dish": "Bun Maska & Irani Chai",
                  "desc": "Crusty bakery bun slathered with salted butter dunked in rich, sweet cardamom-infused Irani milk tea."
            },
            {
                  "dish": "Chowpatty Bhel Puri & Kulfi",
                  "desc": "Tangy puffed rice street snack with tamarind chutney followed by rich pistachio malai kulfi on a stick."
            }
      ],
      "proTips": [
            "Use the Mumbai Metro and Western/Central suburban trains for fast daytime transit, but avoid peak rush hours (8:30-10:30 AM and 5:30-8:30 PM).",
            "Metered black-and-yellow cabs (kaali-peeli) in South Mumbai run strictly by the meter; insist on turning the meter on.",
            "Elephanta Island boat services are suspended during severe monsoon swells (June to August)."
      ]
},

    bhopal: {
      "id": "bhopal",
      "name": "Bhopal",
      "region": "Central India",
      "category": "Nature",
      "tag": "City of Lakes",
      "heroImage": "assets/images/bhopal.jpg",
      "tagline": "Serene historic lakes, ancient rock art, monumental mosques, and lush nature reserves.",
      "dailyRates": {
            "budget": 1600,
            "balanced": 4200,
            "premium": 9500
      },
      "attractions": [
            {
                  "title": "Upper Lake (Bhojtal) Promenade & Boating",
                  "category": "Lakes",
                  "interest": "nature",
                  "timeSlot": "morning",
                  "desc": "Asia's oldest man-made lake built in the 11th century, offering solar boat cruises and birdwatching.",
                  "tip": "Morning boat rides provide tranquil waters and views of migratory wetland birds."
            },
            {
                  "title": "Van Vihar National Park Safari",
                  "category": "Wildlife",
                  "interest": "nature",
                  "timeSlot": "morning",
                  "desc": "Open-air zoological park and green sanctuary stretching along the shores of Upper Lake with free-roaming wildlife.",
                  "tip": "Rent a bicycle at the entry gate to cycle through the peaceful forest trails."
            },
            {
                  "title": "Taj-ul-Masajid Grand Mosque",
                  "category": "Heritage",
                  "interest": "culture",
                  "timeSlot": "afternoon",
                  "desc": "One of Asia's largest mosques featuring towering pink minarets, marble domes, and an expansive courtyard.",
                  "tip": "Dress modestly with covered shoulders and legs; photography during prayer hours is restricted."
            },
            {
                  "title": "Madhya Pradesh Tribal Museum",
                  "category": "Museums",
                  "interest": "culture",
                  "timeSlot": "afternoon",
                  "desc": "A world-class immersive museum showcasing life-sized indigenous tribal dwellings, sacred art, and mythology.",
                  "tip": "Allow at least 2 hours to fully explore the colorful thematic pavilions."
            },
            {
                  "title": "Bharat Bhavan Multi-Arts Complex",
                  "category": "Arts",
                  "interest": "peaceful",
                  "timeSlot": "evening",
                  "desc": "Architect Charles Correa's terraced cultural centre overlooking the lake, featuring contemporary Indian art and poetry.",
                  "tip": "Check the evening schedule for outdoor theatre, classical recitals, or art exhibitions."
            },
            {
                  "title": "Bhimbetka Prehistoric Rock Shelters",
                  "category": "UNESCO Heritage",
                  "interest": "nature",
                  "timeSlot": "morning",
                  "desc": "Ancient sandstone rock shelters with cave paintings dating back more than 10,000 years, nestled in teak forests.",
                  "tip": "Located 45 km south of Bhopal; combine with a visit to the colossal 11th-century Bhojpur Shiva temple."
            },
            {
                  "title": "Great Buddhist Stupa at Sanchi",
                  "category": "UNESCO Heritage",
                  "interest": "culture",
                  "timeSlot": "morning",
                  "desc": "UNESCO World Heritage 3rd-century BCE hemispherical stone dome built by Emperor Ashoka with intricately carved torana gateways.",
                  "tip": "Located 48 km northeast of Bhopal; hire an ASI certified guide for detailed historical narration."
            },
            {
                  "title": "Old City Chowk & Historic Bazaars",
                  "category": "Culture",
                  "interest": "food",
                  "timeSlot": "evening",
                  "desc": "Historic marketplace surrounded by royal havelis, silver artisans, zardozi embroidery workshops, and street kebab stalls.",
                  "tip": "Try the traditional Sulemani chai and mawa jalebi while exploring the old city lanes."
            }
      ],
      "foods": [
            {
                  "dish": "Poha Jalebi & Sulemani Chai",
                  "desc": "Spiced flattened rice with crunchy sev and pomegranate seeds, paired with hot crispy jalebis and black tea."
            },
            {
                  "dish": "Bhopali Gosht Korma",
                  "desc": "Mughlai-influenced rich mutton curry slow-cooked with ground almonds, poppy seeds, and whole spices."
            },
            {
                  "dish": "Bafla & Spiced Toor Dal",
                  "desc": "Oven-baked wheat dough balls dunked in melted desi ghee, accompanied by aromatic lentil curry."
            },
            {
                  "dish": "Bhutte Ka Kees",
                  "desc": "Grated fresh sweet corn cooked with milk, green chilies, mustard seeds, and freshly grated coconut."
            },
            {
                  "dish": "Shahi Tukda & Mawa Bati",
                  "desc": "Crispy fried bread soaked in saffron syrup topped with rabri, and rich dried-fruit filled mawa sweets."
            }
      ],
      "proTips": [
            "Book MPSTDC official tourist vehicles for convenient day excursions to Sanchi and Bhimbetka.",
            "Winter nights (November to February) can be chilly near the lake (10°C to 12°C); bring a warm jacket.",
            "Van Vihar operates an electric golf-cart service for visitors who prefer not to cycle."
      ]
},

    chandigarh: {
      "id": "chandigarh",
      "name": "Chandigarh",
      "region": "North India",
      "category": "Nature",
      "tag": "The City Beautiful",
      "heroImage": "assets/images/chandigarh.jpg",
      "tagline": "Modernist Corbusier architecture, expansive green gardens, and Himalayan gateway calm.",
      "dailyRates": {
            "budget": 1900,
            "balanced": 4600,
            "premium": 11500
      },
      "attractions": [
            {
                  "title": "Nek Chand's Rock Garden",
                  "category": "Sculpture Park",
                  "interest": "culture",
                  "timeSlot": "morning",
                  "desc": "A fantasy wonderland of narrow canyons, waterfalls, and thousands of sculptures made entirely from recycled urban waste.",
                  "tip": "Wear comfortable walking shoes as the trail winds through multi-level stone passages."
            },
            {
                  "title": "Sukhna Lake Promenade & Boating",
                  "category": "Lakes",
                  "interest": "peaceful",
                  "timeSlot": "evening",
                  "desc": "A serene 3-sq-km rain-fed lake at the foot of the Shivalik hills, beloved for peaceful sunset strolls and pedal boating.",
                  "tip": "Sunset provides panoramic views of the water reflecting the Shivalik mountain ridges."
            },
            {
                  "title": "Zakir Hussain Rose Garden",
                  "category": "Botanical",
                  "interest": "nature",
                  "timeSlot": "morning",
                  "desc": "Asia's largest rose sanctuary spanning 30 acres with 50,000 rose bushes of over 1,600 varieties and medicinal groves.",
                  "tip": "Peak blooming season is from February to March during the annual Festival of Gardens."
            },
            {
                  "title": "Le Corbusier Capitol Complex",
                  "category": "UNESCO Architecture",
                  "interest": "culture",
                  "timeSlot": "afternoon",
                  "desc": "UNESCO World Heritage modernist government complex housing the High Court, Secretariat, and iconic Open Hand Monument.",
                  "tip": "Requires registration at the Tourist Information Centre in Sector 1 before guided tour entry."
            },
            {
                  "title": "Government Museum & Art Gallery",
                  "category": "Museums",
                  "interest": "culture",
                  "timeSlot": "afternoon",
                  "desc": "Corbusier-designed modernist museum housing Gandharan Buddhist stone sculptures and Pahari miniature paintings.",
                  "tip": "Located in Sector 10; includes a natural history museum and architecture pavilion."
            },
            {
                  "title": "Sector 17 Pedestrian Plaza",
                  "category": "Urban",
                  "interest": "food",
                  "timeSlot": "evening",
                  "desc": "The open-air, traffic-free commercial heart of the city featuring landscaped fountains, department stores, and ice cream parlors.",
                  "tip": "Musical fountain shows run in the central square on weekend evenings."
            },
            {
                  "title": "Pinjore Mughal Gardens (Yadavindra)",
                  "category": "Heritage Gardens",
                  "interest": "nature",
                  "timeSlot": "evening",
                  "desc": "Historic 17th-century terraced Mughal gardens with illuminated water channels, fountains, and royal pavilions 20 km away.",
                  "tip": "Visit around twilight when hundreds of fountains are lit up across the seven descending terraces."
            },
            {
                  "title": "Sector 26 & 35 Culinary Hub",
                  "category": "Gastronomy",
                  "interest": "food",
                  "timeSlot": "afternoon",
                  "desc": "The city's vibrant dining districts packed with authentic Punjabi dhabas, microbreweries, and sweet shops.",
                  "tip": "Try the fresh tandoori kulchas and rich dal makhani with tall brass tumblers of lassi."
            }
      ],
      "foods": [
            {
                  "dish": "Amritsari Stuffed Kulcha & Chole",
                  "desc": "Flaky tandoor-baked flatbread stuffed with spiced potatoes and onions, served with tangy chickpea curry and pickle."
            },
            {
                  "dish": "Authentic Butter Chicken & Naan",
                  "desc": "Succulent tandoor-roasted chicken in a rich, slow-simmered tomato, butter, and fenugreek gravy."
            },
            {
                  "dish": "Sarson Ka Saag with Makki Di Roti",
                  "desc": "Traditional winter stew of mustard and bathua greens served with yellow cornmeal flatbread and white churned butter."
            },
            {
                  "dish": "Tandoori Murgh & Paneer Tikka",
                  "desc": "Charcoal-grilled cottage cheese and chicken marinated in hung curd, Kashmiri chili, and carom seeds."
            },
            {
                  "dish": "Sweet Malai Lassi with Rabri",
                  "desc": "Thick hand-churned Punjabi yoghurt beverage flavored with green cardamom and topped with clotted cream."
            }
      ],
      "proTips": [
            "Chandigarh's grid layout of numbered sectors makes navigation effortless; Sector 17 is central for commerce and Sector 1 for government.",
            "Auto-rickshaws and app cabs are plentiful; public CTU AC buses connect all sectors efficiently.",
            "The city has strict traffic enforcement; always cross at zebra crossings and follow signals."
      ]
},

    delhi: {
      "id": "delhi",
      "name": "Delhi",
      "region": "North India",
      "category": "Culture",
      "tag": "Heart of the Nation",
      "heroImage": "assets/images/delhi.jpg",
      "tagline": "Mughal grandeur, British imperial avenues, timeless bazaars, and vibrant culinary soul.",
      "dailyRates": {
            "budget": 2000,
            "balanced": 5200,
            "premium": 13000
      },
      "attractions": [
            {
                  "title": "Red Fort (Lal Qila) & Diwan-i-Khas",
                  "category": "UNESCO Heritage",
                  "interest": "culture",
                  "timeSlot": "morning",
                  "desc": "Imposing 17th-century Mughal red sandstone fortress that served as the seat of the Mughal emperors for two centuries.",
                  "tip": "Book ASI e-tickets online in advance to bypass long ticket queue lines; closed on Mondays."
            },
            {
                  "title": "Humayun's Tomb Garden Complex",
                  "category": "UNESCO Heritage",
                  "interest": "culture",
                  "timeSlot": "afternoon",
                  "desc": "Magnificent 16th-century Persian-style red sandstone garden tomb, the grand architectural inspiration for the Taj Mahal.",
                  "tip": "Late afternoon light illuminates the red sandstone and white marble dome beautifully."
            },
            {
                  "title": "Qutub Minar & Ancient Iron Pillar",
                  "category": "UNESCO Heritage",
                  "interest": "culture",
                  "timeSlot": "morning",
                  "desc": "A soaring 73-meter victory minaret built in 1192 and the famous 4th-century rust-resistant Iron Pillar of Chandragupta.",
                  "tip": "The surrounding Mehrauli archaeological park contains over 100 lesser-known historic monuments."
            },
            {
                  "title": "India Gate & Kartavya Path Memorial",
                  "category": "Monuments",
                  "interest": "peaceful",
                  "timeSlot": "evening",
                  "desc": "Grand 42-meter war memorial arch framing the central ceremonial boulevard of New Delhi with landscaped lawns and fountains.",
                  "tip": "Evenings are lively with street ice cream vendors, cool breezes, and illuminated water channels."
            },
            {
                  "title": "Chandni Chowk & Jama Masjid",
                  "category": "Bazaars",
                  "interest": "food",
                  "timeSlot": "morning",
                  "desc": "Historic 17th-century market alleys, the colossal Jama Masjid congregational mosque, and centuries-old spice bazaars.",
                  "tip": "Take a cycle-rickshaw through Khari Baoli (Asia's largest spice market) and Paranthe Wali Gali."
            },
            {
                  "title": "Lodhi Garden Heritage Pavilions",
                  "category": "Nature & Parks",
                  "interest": "peaceful",
                  "timeSlot": "morning",
                  "desc": "A peaceful 90-acre municipal park dotted with 15th-century Sayyid and Lodhi dynasty domed mausoleums and botanical groves.",
                  "tip": "Popular with morning joggers and birdwatchers; free public entry."
            },
            {
                  "title": "Swaminarayan Akshardham Temple",
                  "category": "Spiritual",
                  "interest": "culture",
                  "timeSlot": "afternoon",
                  "desc": "Colossal modern Hindu temple complex built from pink Rajasthani sandstone and Italian Carrara marble with boat rides and musical fountains.",
                  "tip": "Strict security: mobile phones and electronic devices must be deposited in cloakrooms; closed on Mondays."
            },
            {
                  "title": "Dilli Haat Crafts & Food Village",
                  "category": "Crafts & Food",
                  "interest": "food",
                  "timeSlot": "evening",
                  "desc": "Open-air rural craft bazaar with rotating artisans from across India and regional food stalls representing every Indian state.",
                  "tip": "Great place to sample regional cuisines from Nagaland momos to Kashmiri kahwa."
            }
      ],
      "foods": [
            {
                  "dish": "Old Delhi Chaat & Dahi Bhalla",
                  "desc": "Lentil fritters soaked in sweetened yoghurt, zesty ginger-tamarind chutney, and roasted cumin powder."
            },
            {
                  "dish": "Paranthe Wali Gali Stuffed Paranthas",
                  "desc": "Crisp pan-fried flatbreads stuffed with spicy potato, paneer, fenugreek, or sweet rabri, served with tangy pumpkin sabzi."
            },
            {
                  "dish": "Authentic Delhi Butter Chicken",
                  "desc": "The classic culinary invention from Daryaganj: tender tandoori chicken simmered in silky tomato and butter gravy."
            },
            {
                  "dish": "Chole Bhature with Pind Di Lassi",
                  "desc": "Fluffy puffed fried bread served with dark, spiced chickpea curry, pickled green chilies, and onion salad."
            },
            {
                  "dish": "Karim's Mutton Seekh Kebabs & Nihari",
                  "desc": "Slow-simmered overnight rich meat stew flavored with bone marrow and mace, paired with tandoori khameeri roti."
            }
      ],
      "proTips": [
            "The Delhi Metro is the cleanest, fastest, and most cost-effective way to travel across Delhi and the NCR.",
            "Get a Delhi Metro Tourist Smart Card for unlimited rides over 1 or 3 days.",
            "Monuments like Red Fort, Humayun's Tomb, and Qutub Minar provide discount QR code ticketing at entry gates."
      ]
},

    dehradun: {
      "id": "dehradun",
      "name": "Dehradun",
      "region": "North India",
      "category": "Mountains",
      "tag": "Doon Valley Retreat",
      "heroImage": "assets/images/dehradun.jpg",
      "tagline": "Pine-scented Doon valley, colonial institutions, sacred caves, and tranquil monasteries.",
      "dailyRates": {
            "budget": 1700,
            "balanced": 4400,
            "premium": 10500
      },
      "attractions": [
            {
                  "title": "Forest Research Institute (FRI) Heritage Campus",
                  "category": "Colonial Architecture",
                  "interest": "culture",
                  "timeSlot": "morning",
                  "desc": "Monumental Greco-Roman architectural marvel sprawling over 450 hectares with six forestry museums and lush botanical gardens.",
                  "tip": "Carry government photo ID for campus gate entry; closed on Sundays."
            },
            {
                  "title": "Robber's Cave (Guchhupani) Canyon Walk",
                  "category": "Nature",
                  "interest": "nature",
                  "timeSlot": "morning",
                  "desc": "A 600-meter-long natural limestone river gorge where visitors wade through cool knee-deep stream waters between towering cliffs.",
                  "tip": "Wear water sandals or rent rubber slippers at the entrance."
            },
            {
                  "title": "Mindrolling Monastery & Great Stupa",
                  "category": "Tibetan Heritage",
                  "interest": "peaceful",
                  "timeSlot": "afternoon",
                  "desc": "One of the largest Tibetan Buddhist learning centers in India with a 107-foot stupa, manicured gardens, and colorful prayer halls.",
                  "tip": "Spin the brass prayer wheels in a clockwise direction around the main stupa."
            },
            {
                  "title": "Sahastradhara Thousandfold Sulfur Springs",
                  "category": "Mineral Springs",
                  "interest": "nature",
                  "timeSlot": "morning",
                  "desc": "Natural limestone cascades and sulfur springs known for therapeutic mineral waters and dripstone caves.",
                  "tip": "A ropeway cable car takes visitors to the hilltop park overlooking the valley."
            },
            {
                  "title": "Tapkeshwar Mahadev Cave Temple",
                  "category": "Sacred Caves",
                  "interest": "culture",
                  "timeSlot": "afternoon",
                  "desc": "An ancient Shiva temple situated in a natural riverside cave where water droplets continually drip onto the shivalingam.",
                  "tip": "Located along the scenic Asan river; peaceful and cool even on warm summer afternoons."
            },
            {
                  "title": "Rajpur Road Heritage Bakeries & Cafes",
                  "category": "Gastronomy",
                  "interest": "food",
                  "timeSlot": "evening",
                  "desc": "The city's historic dining corridor lined with century-old Anglo-Indian bakeries, art cafes, and mountain view terraces.",
                  "tip": "Try the traditional milk rusks, walnut fudges, and plum cakes at famous bakeries."
            },
            {
                  "title": "Malsi Deer Park (Dehradun Zoo)",
                  "category": "Wildlife",
                  "interest": "nature",
                  "timeSlot": "morning",
                  "desc": "A mini zoological park located in the foothills along the road to Mussoorie, housing deer, leopards, and native Himalayan birds.",
                  "tip": "Great stopover when traveling upward to Mussoorie or Dhanaulti."
            },
            {
                  "title": "Paltan Bazaar & Ghanta Ghar Clock Tower",
                  "category": "Bazaars",
                  "interest": "food",
                  "timeSlot": "evening",
                  "desc": "The lively pedestrian shopping heart of the city centered around the historic 1953 six-faced clock tower.",
                  "tip": "Buy authentic Dehradun Basmati rice, Garhwali handlooms, and Bal Mithai sweets here."
            }
      ],
      "foods": [
            {
                  "dish": "Garhwali Kafuli & Phaanu",
                  "desc": "Nutritious slow-cooked spinach and local mountain lentil gravy, traditionally served with steaming basmati rice."
            },
            {
                  "dish": "Tibetan Steamed Momos & Thukpa",
                  "desc": "Juicy handcrafted dumplings with fiery chili garlic dip and hearty vegetable noodle soup from Clement Town."
            },
            {
                  "dish": "Aloo Ke Gutke with Bhang Chutney",
                  "desc": "Stir-fried mountain baby potatoes spiced with jambu herbs, served with aromatic roasted hemp-seed chutney."
            },
            {
                  "dish": "Dehradun Bakery Rusk & Ginger Biscuits",
                  "desc": "Twice-baked buttery milk rusks and spiced cookies from century-old bakery ovens along Rajpur Road."
            },
            {
                  "dish": "Kumaoni Bal Mithai & Singori",
                  "desc": "Rich roasted milk fudge coated in white sugar beads, and mawa sweets wrapped in fragrant oak leaves."
            }
      ],
      "proTips": [
            "Shared blue auto-rickshaws (Vikrams) run on fixed point-to-point routes across the valley for very low fares.",
            "Dehradun is an ideal transit base for road trips to Mussoorie (34 km), Rishikesh (45 km), and Haridwar (52 km).",
            "During the monsoon season (July to August), avoid venturing into Robber's Cave during heavy rain due to swift water level rises."
      ]
    }
  };

  // Aliases for URL parameters
  const ALIASES = {
    varanashi: "varanasi",
    banaras: "varanasi",
    kashi: "varanasi",
    darjiling: "darjeeling"
  };

  // LocalStorage Key
  const STORAGE_KEY = "wanderindia_saved_trip";

  // ---------------------------------------------------------------------------
  // 2. DOM Utilities & Storage Helpers
  // ---------------------------------------------------------------------------
  function safeGetStorage(key) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      }
    } catch (e) {
      console.warn("localStorage read prevented or unavailable:", e);
    }
    return null;
  }

  function safeSetStorage(key, value) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;
      }
    } catch (e) {
      console.warn("localStorage write prevented or unavailable:", e);
    }
    return false;
  }

  function safeRemoveStorage(key) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.removeItem(key);
        return true;
      }
    } catch (e) {
      console.warn("localStorage remove prevented or unavailable:", e);
    }
    return false;
  }

  function formatINR(amount) {
    if (isNaN(amount) || amount === null || amount === undefined) return "0";
    return Number(amount).toLocaleString("en-IN");
  }

  function escapeHTML(str) {
    if (typeof str !== "string") return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // ---------------------------------------------------------------------------
  // 3. Deterministic Itinerary Generation Engine
  // ---------------------------------------------------------------------------
  /**
   * Generates a day-by-day itinerary for 1 to 14 days without duplicating
   * attractions on the same day and prioritizing user interests.
   */
  function generateItinerary(destKey, days, interests, travelStyle, seed) {
    const dest = PLANNER_DESTINATIONS[destKey];
    if (!dest) return null;

    const targetDays = Math.max(1, Math.min(14, parseInt(days, 10) || 5));
    const selectedInterests = Array.isArray(interests) && interests.length > 0
      ? interests
      : ["culture", "nature", "food"];

    // Clone candidate attractions
    const allAttractions = dest.attractions.map(a => Object.assign({}, a));
    const allFoods = (dest.foods || dest.foodRecommendations || []).slice();
    const allTips = (dest.proTips || dest.practicalTips || []).slice();

    // Prioritize attractions matching selected interests
    allAttractions.sort((a, b) => {
      const aMatch = selectedInterests.includes(a.interest) ? 1 : 0;
      const bMatch = selectedInterests.includes(b.interest) ? 1 : 0;
      return bMatch - aMatch;
    });

    // Optional pseudo-shuffle based on seed for "Regenerate"
    if (seed && seed > 0) {
      for (let i = allAttractions.length - 1; i > 0; i--) {
        const j = (seed * (i + 1) + 7) % (i + 1);
        const temp = allAttractions[i];
        allAttractions[i] = allAttractions[j];
        allAttractions[j] = temp;
      }
    }

    const dayThemes = [
      "Arrival, Historic Orientation & Sunset",
      "Iconic Landmarks & Cultural Heart",
      "Scenic Excursion & Nature Immersion",
      "Hidden Gems, Heritage & Local Life",
      "Artisan Quarters & Culinary Discovery",
      "Deep-Dive Wilderness & Panoramic Trails",
      "Monasteries, Spiritual Sites & Calm",
      "High Passes, Alpine Vistas & Lakes",
      "Traditional Villages & Rural Living",
      "Tea Estates, Spice Groves & Agriculture",
      "Quiet Riverfronts, Sunsets & Reflection",
      "Historic Architecture & Royal Enclaves",
      "Bazaars, Handlooms & Souvenir Hunting",
      "Farewell Strolls & Himalayan Horizon"
    ];

    const itineraryDays = [];
    const usedTitles = new Set();

    for (let dayNum = 1; dayNum <= targetDays; dayNum++) {
      const dayTheme = dayThemes[(dayNum - 1) % dayThemes.length];

      // Find morning attraction
      let morningItem = allAttractions.find(
        a => !usedTitles.has(a.title) && (a.timeSlot === "morning" || a.timeSlot === "any")
      );
      if (!morningItem) {
        morningItem = allAttractions.find(a => !usedTitles.has(a.title)) || allAttractions[(dayNum - 1) % allAttractions.length];
      }
      usedTitles.add(morningItem.title);

      // Find afternoon attraction
      let afternoonItem = allAttractions.find(
        a => !usedTitles.has(a.title) && (a.timeSlot === "afternoon" || a.timeSlot === "any")
      );
      if (!afternoonItem) {
        afternoonItem = allAttractions.find(a => !usedTitles.has(a.title)) || allAttractions[(dayNum) % allAttractions.length];
      }
      usedTitles.add(afternoonItem.title);

      // Find evening attraction
      let eveningItem = allAttractions.find(
        a => !usedTitles.has(a.title) && (a.timeSlot === "evening" || a.timeSlot === "any")
      );
      if (!eveningItem) {
        eveningItem = allAttractions.find(a => !usedTitles.has(a.title)) || allAttractions[(dayNum + 1) % allAttractions.length];
      }
      usedTitles.add(eveningItem.title);

      // Food highlight for the day (cycle safely)
      const foodItem = allFoods[(dayNum - 1) % allFoods.length];

      // Pro-tip for the day
      const tipText = allTips[(dayNum - 1) % allTips.length];

      itineraryDays.push({
        dayNumber: dayNum,
        themeTitle: `Day ${dayNum}: ${dayTheme}`,
        morning: {
          period: "Morning",
          hours: "09:00 AM – 12:30 PM",
          icon: "☀️",
          title: morningItem.title,
          category: morningItem.category,
          desc: morningItem.desc,
          tip: morningItem.tip
        },
        afternoon: {
          period: "Afternoon",
          hours: "01:30 PM – 05:00 PM",
          icon: "🌤️",
          title: afternoonItem.title,
          category: afternoonItem.category,
          desc: afternoonItem.desc,
          tip: afternoonItem.tip
        },
        evening: {
          period: "Evening",
          hours: "05:30 PM – 08:30 PM",
          icon: "🌙",
          title: eveningItem.title,
          category: eveningItem.category,
          desc: eveningItem.desc,
          tip: eveningItem.tip
        },
        food: foodItem,
        pacingTip: tipText
      });
    }

    return {
      destination: dest,
      days: targetDays,
      itineraryDays: itineraryDays
    };
  }

  // ---------------------------------------------------------------------------
  // 4. Deterministic Budget Calculation Engine
  // ---------------------------------------------------------------------------
  /**
   * Transparent budget estimator. Computes category allocations and
   * compares with user target budget.
   */
  function calculateBudget(destKey, days, adults, children, travelStyle, userBudget) {
    const dest = PLANNER_DESTINATIONS[destKey];
    if (!dest) return null;

    const numDays = Math.max(1, Math.min(14, parseInt(days, 10) || 5));
    const numAdults = Math.max(1, Math.min(10, parseInt(adults, 10) || 2));
    const numChildren = Math.max(0, Math.min(10, parseInt(children, 10) || 0));
    const totalTravellers = numAdults + numChildren;

    // Children counted at 50% for standard accommodation & meals
    const weightedTravellers = numAdults + (numChildren * 0.5);

    const styleKey = ["budget", "balanced", "premium"].includes(travelStyle)
      ? travelStyle
      : "balanced";

    const dailyRate = dest.dailyRates[styleKey] || dest.dailyRates.balanced;

    // Total Cost
    const totalCost = Math.round(dailyRate * weightedTravellers * numDays);
    const perPersonCost = Math.round(totalCost / totalTravellers);

    // Categories
    const accommodation = Math.round(totalCost * 0.40);
    const food = Math.round(totalCost * 0.25);
    const transport = Math.round(totalCost * 0.15);
    const activities = Math.round(totalCost * 0.12);
    // Contingency absorbs remainder to maintain 100% exact math
    const contingency = totalCost - (accommodation + food + transport + activities);

    // Budget Comparison
    const parsedUserBudget = parseFloat(userBudget);
    let comparison = {
      hasUserBudget: false,
      status: "baseline",
      difference: 0,
      badgeText: "Baseline Estimate",
      badgeClass: "status-neutral",
      detailText: "Planning benchmark for selected parameters."
    };

    if (!isNaN(parsedUserBudget) && parsedUserBudget > 0) {
      comparison.hasUserBudget = true;
      if (totalCost <= parsedUserBudget) {
        const diff = parsedUserBudget - totalCost;
        comparison.status = "within";
        comparison.difference = diff;
        comparison.badgeText = "✓ Within Budget";
        comparison.badgeClass = "status-within";
        comparison.detailText = `Estimated total ₹${formatINR(totalCost)} is ₹${formatINR(diff)} below your target budget of ₹${formatINR(parsedUserBudget)}.`;
      } else {
        const diff = totalCost - parsedUserBudget;
        comparison.status = "exceeds";
        comparison.difference = diff;
        comparison.badgeText = "⚠ Exceeds Budget";
        comparison.badgeClass = "status-exceeds";
        comparison.detailText = `Estimated total ₹${formatINR(totalCost)} is ₹${formatINR(diff)} above your target budget. Consider switching travel style to Budget or reducing days.`;
      }
    }

    return {
      dailyRate: dailyRate,
      weightedTravellers: weightedTravellers,
      totalTravellers: totalTravellers,
      days: numDays,
      totalCost: totalCost,
      perPersonCost: perPersonCost,
      categories: [
        {
          name: "Accommodation",
          share: "40%",
          cost: accommodation,
          color: "#102338",
          covers: `${styleKey === "budget" ? "Clean homestays & hostels" : styleKey === "premium" ? "Luxury heritage / 5-star resorts" : "3-star & boutique hotel stays"} for all nights.`
        },
        {
          name: "Food & Dining",
          share: "25%",
          cost: food,
          color: "#ed8b52",
          covers: "Breakfast, local lunch thalis, street snacks, and dinners across all travel days."
        },
        {
          name: "Local Transportation",
          share: "15%",
          cost: transport,
          color: "#3b82f6",
          covers: `${styleKey === "premium" ? "Dedicated AC chauffeur cab" : "Intra-city auto-rickshaws, city cabs, and local transfers"}.`
        },
        {
          name: "Activities & Sightseeing",
          share: "12%",
          cost: activities,
          color: "#10b981",
          covers: "Standard monument entry tickets, temple passes, and boat/cable-car rides."
        },
        {
          name: "Contingency Buffer",
          share: "8%",
          cost: contingency,
          color: "#94a3b8",
          covers: "Emergency buffer, incidental bottle water, porters, and miscellaneous expenses."
        }
      ],
      comparison: comparison
    };
  }

  // ---------------------------------------------------------------------------
  // 5. DOM Rendering & Application Controller
  // ---------------------------------------------------------------------------
  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
    // Nav Elements
    const menuToggle = document.querySelector(".menu-toggle");
    const primaryNav = document.querySelector("#primary-navigation");

    // Form Elements
    const form = document.querySelector("#planner-form");
    const departureInput = document.querySelector("#departure-city");
    const destinationSelect = document.querySelector("#planner-destination");
    const durationRange = document.querySelector("#duration-range");
    const durationNumber = document.querySelector("#duration-number");
    const durationBadge = document.querySelector("#duration-badge");
    const durationChips = document.querySelectorAll(".duration-chips .chip-btn");
    const adultsInput = document.querySelector("#adults-count");
    const adultsMinus = document.querySelector("#adults-minus");
    const adultsPlus = document.querySelector("#adults-plus");
    const childrenInput = document.querySelector("#children-count");
    const childrenMinus = document.querySelector("#children-minus");
    const childrenPlus = document.querySelector("#children-plus");
    const totalBudgetInput = document.querySelector("#total-budget");
    const budgetPreview = document.querySelector("#budget-preview");
    const destinationPreview = document.querySelector("#destination-preview-pill");
    const btnReset = document.querySelector("#btn-reset");

    // Results Elements
    const emptyState = document.querySelector("#planner-empty-state");
    const outputContainer = document.querySelector("#planner-output");
    const quickPickPills = document.querySelectorAll(".quick-pick-pill");

    // Output Banner
    const bannerImg = document.querySelector("#trip-banner-img");
    const bannerRegion = document.querySelector("#banner-region-pill");
    const bannerCategory = document.querySelector("#banner-category-pill");
    const bannerTitle = document.querySelector("#banner-destination-title");
    const bannerTagline = document.querySelector("#banner-tagline");
    const bannerParamsSummary = document.querySelector("#banner-params-summary");
    const plannerSafetyLink = document.querySelector("#planner-safety-link");
    const safetyCalloutMsg = document.querySelector("#safety-callout-message");

    // Budget Output
    const costTotalDisplay = document.querySelector("#cost-total-display");
    const costPerTravellerDisplay = document.querySelector("#cost-per-traveller-display");
    const comparisonStatus = document.querySelector("#comparison-status");
    const comparisonDetail = document.querySelector("#comparison-detail");
    const budgetTableBody = document.querySelector("#budget-table-body");

    // Itinerary Output
    const timelineContainer = document.querySelector("#timeline-days-container");

    // Toolbar Elements
    const btnSaveTrip = document.querySelector("#btn-save-trip");
    const btnPrintTrip = document.querySelector("#btn-print-trip");
    const btnRegenerate = document.querySelector("#btn-regenerate");
    const saveStatusMsg = document.querySelector("#save-status-msg");

    // Saved Alert Banner
    const savedTripAlert = document.querySelector("#saved-trip-alert");
    const savedTripSummary = document.querySelector("#saved-trip-summary");
    const btnDismissAlert = document.querySelector("#btn-dismiss-saved-alert");
    const btnClearSaved = document.querySelector("#btn-clear-saved");

    // Current generation seed
    let currentRegenSeed = 0;

    // -------------------------------------------------------------------------
    // Mobile Navigation Toggle
    // -------------------------------------------------------------------------
    function closeNavMenu() {
      if (!menuToggle || !primaryNav) return;
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      primaryNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    }

    if (menuToggle && primaryNav) {
      menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        menuToggle.setAttribute(
          "aria-label",
          isExpanded ? "Open navigation menu" : "Close navigation menu"
        );
        primaryNav.classList.toggle("is-open", !isExpanded);
        document.body.classList.toggle("menu-open", !isExpanded);
      });

      primaryNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeNavMenu);
      });

      document.addEventListener("keydown", e => {
        if (e.key === "Escape" && primaryNav.classList.contains("is-open")) {
          closeNavMenu();
        }
      });

      document.addEventListener("click", e => {
        if (
          primaryNav.classList.contains("is-open") &&
          !primaryNav.contains(e.target) &&
          !menuToggle.contains(e.target)
        ) {
          closeNavMenu();
        }
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth >= 880 && primaryNav.classList.contains("is-open")) {
          closeNavMenu();
        }
      });
    }

    // -------------------------------------------------------------------------
    // Synchronize Duration Slider & Number Input
    // -------------------------------------------------------------------------
    function updateDuration(val) {
      let num = parseInt(val, 10);
      if (isNaN(num)) num = 5;
      num = Math.max(1, Math.min(14, num));

      if (durationRange) durationRange.value = num;
      if (durationNumber) durationNumber.value = num;
      if (durationBadge) durationBadge.textContent = `${num} Day${num > 1 ? "s" : ""}`;

      // Update chip active classes
      durationChips.forEach(chip => {
        const chipDays = parseInt(chip.getAttribute("data-days"), 10);
        chip.classList.toggle("active", chipDays === num);
      });
    }

    if (durationRange) {
      durationRange.addEventListener("input", e => {
        updateDuration(e.target.value);
      });
    }

    if (durationNumber) {
      durationNumber.addEventListener("input", e => {
        updateDuration(e.target.value);
      });
      durationNumber.addEventListener("blur", e => {
        updateDuration(e.target.value);
      });
    }

    durationChips.forEach(chip => {
      chip.addEventListener("click", () => {
        const days = chip.getAttribute("data-days");
        updateDuration(days);
      });
    });

    // -------------------------------------------------------------------------
    // Steppers for Adults & Children
    // -------------------------------------------------------------------------
    if (adultsMinus && adultsInput) {
      adultsMinus.addEventListener("click", () => {
        let val = parseInt(adultsInput.value, 10) || 1;
        if (val > 1) {
          adultsInput.value = val - 1;
        }
      });
    }
    if (adultsPlus && adultsInput) {
      adultsPlus.addEventListener("click", () => {
        let val = parseInt(adultsInput.value, 10) || 1;
        if (val < 10) {
          adultsInput.value = val + 1;
        }
      });
    }

    if (childrenMinus && childrenInput) {
      childrenMinus.addEventListener("click", () => {
        let val = parseInt(childrenInput.value, 10) || 0;
        if (val > 0) {
          childrenInput.value = val - 1;
        }
      });
    }
    if (childrenPlus && childrenInput) {
      childrenPlus.addEventListener("click", () => {
        let val = parseInt(childrenInput.value, 10) || 0;
        if (val < 10) {
          childrenInput.value = val + 1;
        }
      });
    }

    // -------------------------------------------------------------------------
    // Live Target Budget Formatter
    // -------------------------------------------------------------------------
    if (totalBudgetInput && budgetPreview) {
      totalBudgetInput.addEventListener("input", () => {
        const raw = parseFloat(totalBudgetInput.value);
        if (!isNaN(raw) && raw > 0) {
          budgetPreview.textContent = `Formatted: ₹${formatINR(raw)}`;
        } else {
          budgetPreview.textContent = "";
        }
      });
    }

    // -------------------------------------------------------------------------
    // Destination Preview Pill & Safety Link Sync
    // -------------------------------------------------------------------------
    function syncDestinationPreview(destKey) {
      const dest = PLANNER_DESTINATIONS[destKey];
      if (dest && destinationPreview) {
        destinationPreview.hidden = false;
        destinationPreview.textContent = `📍 ${dest.name} • ${dest.region} • ${dest.category} • Best: ${dest.tagline.slice(0, 48)}...`;
      } else if (destinationPreview) {
        destinationPreview.hidden = true;
        destinationPreview.textContent = "";
      }
    }

    if (destinationSelect) {
      destinationSelect.addEventListener("change", () => {
        syncDestinationPreview(destinationSelect.value);
      });
    }

    // Quick pick pills on empty state
    quickPickPills.forEach(pill => {
      pill.addEventListener("click", () => {
        const destKey = pill.getAttribute("data-dest");
        if (destKey && destinationSelect) {
          destinationSelect.value = destKey;
          syncDestinationPreview(destKey);
          destinationSelect.focus();
        }
      });
    });

    // -------------------------------------------------------------------------
    // Form Validation
    // -------------------------------------------------------------------------
    function validateForm() {
      let isValid = true;

      // Departure City
      const depCity = departureInput ? departureInput.value.trim() : "";
      const depError = document.querySelector("#departure-city-error");
      if (!depCity || depCity.length < 2) {
        if (depError) {
          depError.hidden = false;
          depError.textContent = "Please enter your starting/departure city (min 2 characters).";
        }
        isValid = false;
      } else if (depError) {
        depError.hidden = true;
        depError.textContent = "";
      }

      // Destination
      const destVal = destinationSelect ? destinationSelect.value : "";
      const destError = document.querySelector("#error-destination");
      if (!destVal || !PLANNER_DESTINATIONS[destVal]) {
        if (destError) {
          destError.hidden = false;
          destError.textContent = "Please select a valid destination from the list.";
        }
        isValid = false;
      } else if (destError) {
        destError.hidden = true;
        destError.textContent = "";
      }

      // Duration
      const durVal = parseInt(durationNumber.value, 10);
      const durError = document.querySelector("#duration-error");
      if (isNaN(durVal) || durVal < 1 || durVal > 14) {
        if (durError) {
          durError.hidden = false;
          durError.textContent = "Trip duration must be between 1 and 14 days.";
        }
        isValid = false;
      } else if (durError) {
        durError.hidden = true;
        durError.textContent = "";
      }

      // Travellers
      const numAdults = parseInt(adultsInput.value, 10);
      const numChildren = parseInt(childrenInput.value, 10);
      const travError = document.querySelector("#travellers-error");
      if (isNaN(numAdults) || numAdults < 1 || numAdults > 10) {
        if (travError) {
          travError.hidden = false;
          travError.textContent = "Number of adults must be between 1 and 10.";
        }
        isValid = false;
      } else if (isNaN(numChildren) || numChildren < 0 || numChildren > 10) {
        if (travError) {
          travError.hidden = false;
          travError.textContent = "Number of children must be between 0 and 10.";
        }
        isValid = false;
      } else if (travError) {
        travError.hidden = true;
        travError.textContent = "";
      }

      return isValid;
    }

    // -------------------------------------------------------------------------
    // Render Itinerary & Budget into Output
    // -------------------------------------------------------------------------
    function renderPlan(destKey, days, depCity, adults, children, budget, interests, style, seed) {
      const dest = PLANNER_DESTINATIONS[destKey];
      if (!dest) return;

      const itineraryData = generateItinerary(destKey, days, interests, style, seed);
      const budgetData = calculateBudget(destKey, days, adults, children, style, budget);

      if (!itineraryData || !budgetData) return;

      // 1. Render Banner
      if (bannerImg) {
        bannerImg.src = dest.heroImage;
        bannerImg.alt = `${dest.name} travel planning panorama`;
      }
      if (bannerRegion) bannerRegion.textContent = dest.region;
      if (bannerCategory) bannerCategory.textContent = dest.category;
      if (bannerTitle) bannerTitle.textContent = dest.name;
      if (bannerTagline) bannerTagline.textContent = dest.tagline;

      if (bannerParamsSummary) {
        bannerParamsSummary.innerHTML = `
          <span class="summary-chip"><span aria-hidden="true">🛫</span> From: <strong>${escapeHTML(depCity)}</strong></span>
          <span class="summary-chip"><span aria-hidden="true">⏱️</span> <strong>${days} Days</strong></span>
          <span class="summary-chip"><span aria-hidden="true">👥</span> <strong>${adults} Adult${adults > 1 ? "s" : ""}${children > 0 ? `, ${children} Child${children > 1 ? "ren" : ""}` : ""}</strong></span>
          <span class="summary-chip"><span aria-hidden="true">⭐</span> Style: <strong style="text-transform: capitalize;">${escapeHTML(style)}</strong></span>
        `;
      }

      // 2. Render Safety Callout
      if (plannerSafetyLink) {
        plannerSafetyLink.href = `safety.html?place=${encodeURIComponent(dest.id)}`;
      }
      if (safetyCalloutMsg) {
        safetyCalloutMsg.textContent = `Review official 24/7 helplines, government apex hospitals, and verified travel safety advisories for ${dest.name} in the Travel Safety Center.`;
      }

      // 3. Render Budget Metrics
      if (costTotalDisplay) costTotalDisplay.textContent = `₹${formatINR(budgetData.totalCost)}`;
      if (costPerTravellerDisplay) costPerTravellerDisplay.textContent = `₹${formatINR(budgetData.perPersonCost)}`;

      if (comparisonStatus) {
        comparisonStatus.innerHTML = `
          <span class="status-pill ${budgetData.comparison.badgeClass}">${budgetData.comparison.badgeText}</span>
        `;
      }
      if (comparisonDetail) {
        comparisonDetail.textContent = budgetData.comparison.detailText;
      }

      // 4. Render Budget Table
      if (budgetTableBody) {
        budgetTableBody.innerHTML = budgetData.categories.map(cat => `
          <tr>
            <th scope="row">
              <span class="color-dot" style="background: ${cat.color};" aria-hidden="true"></span>
              <strong>${escapeHTML(cat.name)}</strong>
            </th>
            <td>${escapeHTML(cat.share)}</td>
            <td class="cost-col">₹${formatINR(cat.cost)}</td>
            <td>${escapeHTML(cat.covers)}</td>
          </tr>
        `).join("");
      }

      // 5. Render Itinerary Timeline
      if (timelineContainer) {
        timelineContainer.innerHTML = itineraryData.itineraryDays.map(day => `
          <article class="day-card" aria-labelledby="day-heading-${day.dayNumber}">
            <header class="day-header">
              <div class="day-header-left">
                <span class="day-number-badge">Day ${day.dayNumber}</span>
                <h4 id="day-heading-${day.dayNumber}" class="day-title">${escapeHTML(day.themeTitle)}</h4>
              </div>
              <span class="day-theme-tag">Authentic Destination Schedule</span>
            </header>

            <div class="day-body">
              <!-- Morning Slot -->
              <div class="time-slot slot-morning">
                <div class="slot-time-col">
                  <span class="slot-icon" aria-hidden="true">${day.morning.icon}</span>
                  <span class="slot-period">${escapeHTML(day.morning.period)}</span>
                  <span class="slot-hours">${escapeHTML(day.morning.hours)}</span>
                </div>
                <div class="slot-content-col">
                  <div class="slot-tags-row">
                    <span class="slot-category-tag">${escapeHTML(day.morning.category)}</span>
                  </div>
                  <h5 class="slot-title">${escapeHTML(day.morning.title)}</h5>
                  <p class="slot-desc">${escapeHTML(day.morning.desc)}</p>
                  ${day.morning.tip ? `<p class="slot-tip">💡 <strong>Tip:</strong> ${escapeHTML(day.morning.tip)}</p>` : ""}
                </div>
              </div>

              <!-- Afternoon Slot -->
              <div class="time-slot slot-afternoon">
                <div class="slot-time-col">
                  <span class="slot-icon" aria-hidden="true">${day.afternoon.icon}</span>
                  <span class="slot-period">${escapeHTML(day.afternoon.period)}</span>
                  <span class="slot-hours">${escapeHTML(day.afternoon.hours)}</span>
                </div>
                <div class="slot-content-col">
                  <div class="slot-tags-row">
                    <span class="slot-category-tag">${escapeHTML(day.afternoon.category)}</span>
                  </div>
                  <h5 class="slot-title">${escapeHTML(day.afternoon.title)}</h5>
                  <p class="slot-desc">${escapeHTML(day.afternoon.desc)}</p>
                  ${day.afternoon.tip ? `<p class="slot-tip">💡 <strong>Tip:</strong> ${escapeHTML(day.afternoon.tip)}</p>` : ""}
                </div>
              </div>

              <!-- Evening Slot -->
              <div class="time-slot slot-evening">
                <div class="slot-time-col">
                  <span class="slot-icon" aria-hidden="true">${day.evening.icon}</span>
                  <span class="slot-period">${escapeHTML(day.evening.period)}</span>
                  <span class="slot-hours">${escapeHTML(day.evening.hours)}</span>
                </div>
                <div class="slot-content-col">
                  <div class="slot-tags-row">
                    <span class="slot-category-tag">${escapeHTML(day.evening.category)}</span>
                  </div>
                  <h5 class="slot-title">${escapeHTML(day.evening.title)}</h5>
                  <p class="slot-desc">${escapeHTML(day.evening.desc)}</p>
                  ${day.evening.tip ? `<p class="slot-tip">💡 <strong>Tip:</strong> ${escapeHTML(day.evening.tip)}</p>` : ""}
                </div>
              </div>

              <!-- Local Food Recommendation -->
              ${day.food ? `
                <div class="day-food-card">
                  <span class="food-icon" aria-hidden="true">🍲</span>
                  <div class="food-content">
                    <span class="food-label">Culinary Highlight</span>
                    <h5 class="food-title">${escapeHTML(day.food.dish)}</h5>
                    <p class="food-desc">${escapeHTML(day.food.desc)}</p>
                  </div>
                </div>
              ` : ""}

              <!-- Daily Pacing Tip -->
              ${day.pacingTip ? `
                <div class="day-pro-tip">
                  <span class="tip-bulb" aria-hidden="true">📌</span>
                  <span><strong>Travel Pacing Tip:</strong> ${escapeHTML(day.pacingTip)}</span>
                </div>
              ` : ""}
            </div>
          </article>
        `).join("");
      }

      // Switch visibility
      if (emptyState) emptyState.hidden = true;
      if (outputContainer) outputContainer.hidden = false;
    }

    // -------------------------------------------------------------------------
    // Form Submit Handler
    // -------------------------------------------------------------------------
    if (form) {
      form.addEventListener("submit", e => {
        e.preventDefault();
        if (!validateForm()) return;

        const depCity = departureInput.value.trim();
        const destKey = destinationSelect.value;
        const days = parseInt(durationNumber.value, 10) || 5;
        const adults = parseInt(adultsInput.value, 10) || 2;
        const children = parseInt(childrenInput.value, 10) || 0;
        const budget = totalBudgetInput ? totalBudgetInput.value.trim() : "";

        const interestBoxes = document.querySelectorAll('input[name="interests"]:checked');
        const interests = Array.from(interestBoxes).map(b => b.value);

        const styleRadio = document.querySelector('input[name="travelStyle"]:checked');
        const travelStyle = styleRadio ? styleRadio.value : "balanced";

        renderPlan(destKey, days, depCity, adults, children, budget, interests, travelStyle, currentRegenSeed);

        // Smooth scroll to results on mobile/tablet
        if (window.innerWidth <= 880 && outputContainer) {
          outputContainer.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }

    // -------------------------------------------------------------------------
    // Reset Form Handler
    // -------------------------------------------------------------------------
    if (btnReset) {
      btnReset.addEventListener("click", () => {
        if (form) form.reset();
        updateDuration(5);
        if (destinationPreview) destinationPreview.hidden = true;
        if (budgetPreview) budgetPreview.textContent = "";
        if (emptyState) emptyState.hidden = false;
        if (outputContainer) outputContainer.hidden = true;
        currentRegenSeed = 0;
      });
    }

    // -------------------------------------------------------------------------
    // Regenerate Itinerary Handler
    // -------------------------------------------------------------------------
    if (btnRegenerate) {
      btnRegenerate.addEventListener("click", () => {
        if (!validateForm()) return;
        currentRegenSeed++;

        const depCity = departureInput.value.trim();
        const destKey = destinationSelect.value;
        const days = parseInt(durationNumber.value, 10) || 5;
        const adults = parseInt(adultsInput.value, 10) || 2;
        const children = parseInt(childrenInput.value, 10) || 0;
        const budget = totalBudgetInput ? totalBudgetInput.value.trim() : "";

        const interestBoxes = document.querySelectorAll('input[name="interests"]:checked');
        const interests = Array.from(interestBoxes).map(b => b.value);

        const styleRadio = document.querySelector('input[name="travelStyle"]:checked');
        const travelStyle = styleRadio ? styleRadio.value : "balanced";

        renderPlan(destKey, days, depCity, adults, children, budget, interests, travelStyle, currentRegenSeed);

        if (saveStatusMsg) {
          saveStatusMsg.textContent = "Itinerary regenerated with alternate pacing!";
          setTimeout(() => {
            if (saveStatusMsg) saveStatusMsg.textContent = "";
          }, 4000);
        }
      });
    }

    // -------------------------------------------------------------------------
    // Print / PDF Handler
    // -------------------------------------------------------------------------
    if (btnPrintTrip) {
      btnPrintTrip.addEventListener("click", () => {
        window.print();
      });
    }

    // -------------------------------------------------------------------------
    // Save Trip to LocalStorage
    // -------------------------------------------------------------------------
    if (btnSaveTrip) {
      btnSaveTrip.addEventListener("click", () => {
        if (!validateForm()) return;

        const depCity = departureInput.value.trim();
        const destKey = destinationSelect.value;
        const days = parseInt(durationNumber.value, 10) || 5;
        const adults = parseInt(adultsInput.value, 10) || 2;
        const children = parseInt(childrenInput.value, 10) || 0;
        const budget = totalBudgetInput ? totalBudgetInput.value.trim() : "";

        const interestBoxes = document.querySelectorAll('input[name="interests"]:checked');
        const interests = Array.from(interestBoxes).map(b => b.value);

        const styleRadio = document.querySelector('input[name="travelStyle"]:checked');
        const travelStyle = styleRadio ? styleRadio.value : "balanced";

        const tripData = {
          savedAt: new Date().toISOString(),
          departureCity: depCity,
          destination: destKey,
          duration: days,
          adults: adults,
          children: children,
          totalBudget: budget,
          interests: interests,
          travelStyle: travelStyle
        };

        const success = safeSetStorage(STORAGE_KEY, tripData);
        if (saveStatusMsg) {
          if (success) {
            saveStatusMsg.textContent = "✓ Itinerary saved to browser!";
          } else {
            saveStatusMsg.textContent = "⚠ Storage not available in this browser.";
          }
          setTimeout(() => {
            if (saveStatusMsg) saveStatusMsg.textContent = "";
          }, 4000);
        }
      });
    }

    // -------------------------------------------------------------------------
    // Clear Saved Trip Handler
    // -------------------------------------------------------------------------
    if (btnClearSaved) {
      btnClearSaved.addEventListener("click", () => {
        safeRemoveStorage(STORAGE_KEY);
        if (savedTripAlert) savedTripAlert.hidden = true;
        if (saveStatusMsg) {
          saveStatusMsg.textContent = "Saved trip cleared from browser.";
          setTimeout(() => {
            if (saveStatusMsg) saveStatusMsg.textContent = "";
          }, 3000);
        }
      });
    }

    if (btnDismissAlert && savedTripAlert) {
      btnDismissAlert.addEventListener("click", () => {
        savedTripAlert.hidden = true;
      });
    }

    // -------------------------------------------------------------------------
    // URL Parameter Preselection & Aliases
    // -------------------------------------------------------------------------
    function handleUrlParams() {
      if (typeof window === "undefined" || !window.location.search) return null;
      const params = new URLSearchParams(window.location.search);
      let placeParam = params.get("place") || params.get("destination");

      if (placeParam) {
        placeParam = placeParam.trim().toLowerCase();
        // Resolve aliases
        if (ALIASES[placeParam]) {
          placeParam = ALIASES[placeParam];
        }

        if (PLANNER_DESTINATIONS[placeParam]) {
          if (destinationSelect) {
            destinationSelect.value = placeParam;
            syncDestinationPreview(placeParam);
          }
          return placeParam;
        }
      }
      return null;
    }

    // -------------------------------------------------------------------------
    // Initialization: Check Storage & URL
    // -------------------------------------------------------------------------
    const urlDestination = handleUrlParams();
    const savedTrip = safeGetStorage(STORAGE_KEY);

    if (savedTrip && savedTrip.destination && PLANNER_DESTINATIONS[savedTrip.destination]) {
      // If no conflicting URL param, or if matching, show saved trip notice
      if (savedTripAlert && savedTripSummary) {
        savedTripAlert.hidden = false;
        const destObj = PLANNER_DESTINATIONS[savedTrip.destination];
        savedTripSummary.textContent = `Trip to ${destObj ? destObj.name : savedTrip.destination} (${savedTrip.duration} Days) saved on ${new Date(savedTrip.savedAt).toLocaleDateString()}.`;
      }

      // Populate form fields from saved trip if user did not specify a different destination in the URL
      if (!urlDestination || urlDestination === savedTrip.destination) {
        if (departureInput && savedTrip.departureCity) {
          departureInput.value = savedTrip.departureCity;
        }
        if (destinationSelect && savedTrip.destination) {
          destinationSelect.value = savedTrip.destination;
          syncDestinationPreview(savedTrip.destination);
        }
        if (savedTrip.duration) {
          updateDuration(savedTrip.duration);
        }
        if (adultsInput && savedTrip.adults) {
          adultsInput.value = savedTrip.adults;
        }
        if (childrenInput && savedTrip.children !== undefined) {
          childrenInput.value = savedTrip.children;
        }
        if (totalBudgetInput && savedTrip.totalBudget) {
          totalBudgetInput.value = savedTrip.totalBudget;
          if (budgetPreview) {
            budgetPreview.textContent = `Formatted: ₹${formatINR(savedTrip.totalBudget)}`;
          }
        }
        if (Array.isArray(savedTrip.interests)) {
          document.querySelectorAll('input[name="interests"]').forEach(box => {
            box.checked = savedTrip.interests.includes(box.value);
          });
        }
        if (savedTrip.travelStyle) {
          const radio = document.querySelector(`input[name="travelStyle"][value="${savedTrip.travelStyle}"]`);
          if (radio) radio.checked = true;
        }

        // Render the saved trip
        renderPlan(
          savedTrip.destination,
          savedTrip.duration,
          savedTrip.departureCity || "Mumbai",
          savedTrip.adults || 2,
          savedTrip.children || 0,
          savedTrip.totalBudget || "",
          savedTrip.interests || ["culture", "nature", "food"],
          savedTrip.travelStyle || "balanced",
          0
        );
      }
    }
    });
  }

  // Export for Node.js test suites
  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      PLANNER_DESTINATIONS,
      ALIASES,
      generateItinerary,
      calculateBudget,
      formatINR
    };
  }
})();
