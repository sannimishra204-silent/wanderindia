"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------------------------------------------------------
  // Destination Data Store
  // ---------------------------------------------------------------------------
  const DESTINATIONS = {
    goa: {
      id: "goa",
      name: "Goa",
      region: "West India",
      category: "Beaches",
      tag: "Coastal escape",
      heroImage:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1800&q=85",
      heroAlt: "Palm trees and a golden sandy beach in Goa at sunset",
      tagline:
        "Sun-drenched golden coastlines, Portuguese heritage & breezy susegad living.",
      overview:
        "Nestled along the Konkan coast of Western India, Goa is a captivating blend of Portuguese colonial history, golden beaches, lush spice plantations, and laid-back coastal culture. Whether you are drawn to the tranquil, quiet coves of South Goa, the bustling markets and heritage architecture of Panaji's Latin Quarter, or scenic sunset boat cruises along the Mandovi River, Goa offers a versatile holiday experience that seamlessly blends relaxation and discovery.",
      bestTime: "November to February",
      bestTimeDetail:
        "Comfortable sunny days and cool ocean breezes (20°C to 30°C). Ideal for sightseeing and coastal exploration.",
      idealDuration: "4 to 5 Days",
      estimatedBudget: "₹2,500 – ₹6,000 / day",
      budgetTiers: [
        {
          tier: "Budget Traveler",
          cost: "₹1,800 – ₹2,800 / day",
          details:
            "Hostels or family guesthouses, scooter rentals, beach shacks, and local thali dining."
        },
        {
          tier: "Mid-Range Traveler",
          cost: "₹4,000 – ₹7,500 / day",
          details:
            "Boutique hotels or heritage villas, private auto/cab rides, watersports, and multi-cuisine restaurants."
        },
        {
          tier: "Luxury Traveler",
          cost: "₹12,000+ / day",
          details:
            "5-star beachside resorts, private chauffeured cars, spa treatments, and private sunset sailing."
        }
      ],
      famousPlaces: [
        {
          name: "Palolem & Agonda Beaches",
          type: "Coastline",
          desc: "Crescent-shaped white-sand bays framed by coconut palms, ideal for swimming and quiet sunset walks."
        },
        {
          name: "Basilica of Bom Jesus",
          type: "Heritage / UNESCO",
          desc: "Stunning 16th-century baroque cathedral in Old Goa holding the mortal remains of St. Francis Xavier."
        },
        {
          name: "Fontainhas Latin Quarter",
          type: "Architecture",
          desc: "Asia's only Latin Quarter in Panaji, featuring narrow lanes, tiled roofs, and vibrant pastel-painted Portuguese villas."
        },
        {
          name: "Fort Aguada & Chapora Fort",
          type: "Historic Forts",
          desc: "Historic 17th-century clifftop fortresses offering sweeping, unobstructed views of the Arabian Sea."
        },
        {
          name: "Dudhsagar Waterfalls",
          type: "Nature",
          desc: "A dramatic four-tiered waterfall cascading down the verdant Western Ghats along the Goa-Karnataka border."
        }
      ],
      activities: [
        {
          title: "Latin Quarter Heritage Walk",
          desc: "Stroll through the cobblestone alleys of Fontainhas to admire Portuguese azulejos (ceramic tiles) and art cafes."
        },
        {
          title: "Mandovi River Sunset Cruise",
          desc: "Board a traditional river boat to witness the sun set over the estuary accompanied by Goan folk music."
        },
        {
          title: "Backwater Kayaking",
          desc: "Paddle through quiet mangrove canals in the Sal or Chapora backwaters away from tourist crowds."
        },
        {
          title: "Spice Plantation Tour",
          desc: "Tour organic spice gardens in Ponda, learning how vanilla, cardamom, cinnamon, and pepper are sustainably cultivated."
        }
      ],
      foodRecommendations: [
        {
          dish: "Goan Fish Curry Thali",
          desc: "Fresh catch cooked in coconut milk, spiced with fiery Kashmiri red chilies and sour kokum, served with steamed red rice."
        },
        {
          dish: "Pork or Vegetable Vindaloo",
          desc: "Traditional Indo-Portuguese curry flavored with vinegar, garlic, cloves, and aromatic whole spices."
        },
        {
          dish: "Bebinca",
          desc: "The 'Queen of Goan desserts' — a rich, multi-layered pudding prepared with coconut milk, egg yolks, sugar, and ghee."
        },
        {
          dish: "Poi (Goan Bread)",
          desc: "Freshly baked crusty whole-wheat bread fermented with toddy, best paired with choris (Goan sausage) or vegetable curry."
        },
        {
          dish: "Solkadhi",
          desc: "A refreshing digestive beverage made with fresh coconut milk, wild kokum fruit extract, green chilies, and garlic."
        }
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival & Coastal Unwind",
          desc: "Arrive in Goa, check into your accommodation, unwind at the beach, and catch a panoramic sunset from Chapora Fort."
        },
        {
          day: "Day 2",
          title: "Colonial Heritage & Latin Quarter",
          desc: "Explore the UNESCO churches of Old Goa in the morning, followed by an afternoon walking tour and cafe lunch in Fontainhas, Panaji."
        },
        {
          day: "Day 3",
          title: "Nature & Hidden Wonders",
          desc: "Take a morning excursion to Dudhsagar Waterfalls or a Ponda spice plantation; spend a leisurely evening on peaceful Palolem Beach."
        },
        {
          day: "Day 4",
          title: "Art, Markets & Departure",
          desc: "Visit a morning flea market for handmade souvenirs, taste authentic local sweets, and prepare for your onward journey."
        }
      ],
      practicalTips: [
        "Renting a two-wheeler or self-drive car is the most cost-effective and flexible way to explore between North and South Goa.",
        "Dress respectfully when visiting active religious monuments such as the Basilica of Bom Jesus or local temples.",
        "Stay hydrated under the midday tropical sun and swim only in designated beach areas supervised by official lifeguards.",
        "The monsoon season (June to September) transforms Goa into a lush green haven, but open-sea swimming is strictly closed due to rough swells."
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Goa,+India",
      related: ["kerala", "jaipur"]
    },

    manali: {
      id: "manali",
      name: "Manali",
      region: "North India",
      category: "Mountains",
      tag: "Mountain air",
      heroImage:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1800&q=85",
      heroAlt: "Snow-dusted Himalayan peaks and cedar trees near Manali",
      tagline:
        "Pine-scented alpine passes, roaring Beas rapids & Himalayan sanctuary.",
      overview:
        "Set high in the Beas River Valley of Himachal Pradesh, Manali is a cherished alpine retreat framed by the towering Pir Panjal and Dhauladhar ranges. Surrounded by dense deodar pine woodlands, apple orchards, and cascading mountain streams, it serves as both an idyllic haven for those seeking fresh mountain air and the premier launching pad for Himalayan treks and trans-Himalayan journeys.",
      bestTime: "October to June",
      bestTimeDetail:
        "March to June brings pleasant temperatures (10°C to 25°C) ideal for valley hikes; December to February offers winter snowfall, skiing, and snowscapes.",
      idealDuration: "4 to 5 Days",
      estimatedBudget: "₹2,000 – ₹5,500 / day",
      budgetTiers: [
        {
          tier: "Budget Traveler",
          cost: "₹1,600 – ₹2,600 / day",
          details:
            "Riverside hostels, homestays in Old Manali, local bus transit, and traditional dhabas."
        },
        {
          tier: "Mid-Range Traveler",
          cost: "₹3,500 – ₹6,500 / day",
          details:
            "Mountain-view resort rooms, local private cab hire, adventure activities, and cozy village cafes."
        },
        {
          tier: "Luxury Traveler",
          cost: "₹10,000+ / day",
          details:
            "Luxury pine-chalet resorts with personal heating, private guided valley treks, and fine Himalayan dining."
        }
      ],
      famousPlaces: [
        {
          name: "Solang Valley",
          type: "Adventure / Scenic",
          desc: "A premier adventure bowl renowned for paragliding, zorbing, and winter snow-sports with sweeping mountain backdrops."
        },
        {
          name: "Atal Tunnel & Sissu",
          type: "Mountain Pass / Valley",
          desc: "World's longest highway tunnel above 10,000 feet, opening directly onto the dramatically arid and stark Lahaul Valley."
        },
        {
          name: "Hadimba Temple",
          type: "Historic Shrine",
          desc: "Unique 16th-century four-tiered wooden pagoda temple set deep within the fragrant Dhungri deodar sanctuary."
        },
        {
          name: "Old Manali Village",
          type: "Culture & Living",
          desc: "A rustic village of traditional timber-and-stone houses, charming apple orchards, and bohemian travelers' cafes."
        },
        {
          name: "Jogini Waterfalls",
          type: "Nature Trek",
          desc: "A picturesque cascade reached via a scenic nature trail winding through village orchards and pine forests from Vashisht."
        }
      ],
      activities: [
        {
          title: "River Rafting on the Beas",
          desc: "Navigate thrilling Grade II and III rapids along the scenic stretch between Pirdi and Jhiri near Kullu."
        },
        {
          title: "Scenic Trek to Jogini Falls",
          desc: "Hike along tranquil mountain streams and pine trees to reach the multi-tiered Jogini waterfall."
        },
        {
          title: "Cable Car Ride at Solang",
          desc: "Soar high above the valley floor on the Solang ropeway for bird's-eye views of snowy Himalayan summits."
        },
        {
          title: "Vashisht Sulphur Bath",
          desc: "Soak in the soothing natural mineral hot springs at the historic Vashisht temple village."
        }
      ],
      foodRecommendations: [
        {
          dish: "Himachali Siddu",
          desc: "Traditional steamed wheat flour bread stuffed with a savory filling of crushed walnuts, poppy seeds, and local spices, drenched in pure ghee."
        },
        {
          dish: "Himalayan Trout Fish",
          desc: "Freshly caught river trout lightly pan-fried with lemon butter, garlic, and fresh herbs."
        },
        {
          dish: "Pahadi Rajma Madra",
          desc: "Red kidney beans slow-cooked in a rich yogurt and curd gravy infused with cloves, cardamom, and fennel."
        },
        {
          dish: "Mittha",
          desc: "A ceremonial Himachali sweet dish made from fragrant rice cooked with milk, saffron, raisins, and toasted dry fruits."
        },
        {
          dish: "Kullu Dham",
          desc: "A traditional celebratory multi-course festive meal prepared by traditional chefs (Bhotis) and served on broad leaf platters."
        }
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival & Old Manali Exploration",
          desc: "Check in, stroll through Old Manali's stone pathways, visit the historic Hadimba Temple, and relax along the Beas River."
        },
        {
          day: "Day 2",
          title: "Solang Valley & Atal Tunnel Excursion",
          desc: "Head out early for Solang Valley adventure activities; continue through Atal Tunnel to marvel at the Sissu waterfall in Lahaul Valley."
        },
        {
          day: "Day 3",
          title: "Jogini Falls Hike & Vashisht Springs",
          desc: "Embark on the peaceful morning hike to Jogini Falls, visit the Vashisht hot springs, and browse handicrafts on Mall Road."
        },
        {
          day: "Day 4",
          title: "Naggar Castle & Departure",
          desc: "Take a scenic drive to the 500-year-old Naggar Castle and Nicholas Roerich Art Gallery before your onward travel."
        }
      ],
      practicalTips: [
        "Pack thermal innerwear and woolens even during summer trips, as alpine temperatures drop sharply after sunset.",
        "If planning to visit Rohtang Pass, ensure local administration tourism permits are booked well in advance online.",
        "Keep basic motion sickness medication handy if you are sensitive to winding Himalayan mountain roads.",
        "Support local mountain communities by preserving clean trails and carrying reusable water containers."
      ],
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Manali,+Himachal+Pradesh,+India",
      related: ["kashmir", "varanasi"]
    },

    kashmir: {
      id: "kashmir",
      name: "Kashmir",
      region: "North India",
      category: "Mountains",
      tag: "Alpine calm",
      heroImage: "assets/images/kashmir.jpg",
      heroAlt: "Mirror-still lake and misty mountain landscape in Kashmir",
      tagline:
        "Misty Dal Lake shikaras, blossoming Mughal gardens & alpine meadows.",
      overview:
        "Cherished throughout the centuries as 'Paradise on Earth', the Kashmir Valley is a mesmerizing wonderland of mirror-still lakes, terraced Mughal gardens, floating vegetable markets, and snow-crowned Himalayan peaks. From drifting lazily in a carved wooden shikara beneath the morning mist to standing amidst the alpine meadows and ski slopes of Gulmarg, Kashmir offers an unforgettable sensory journey through nature, craftsmanship, and hospitality.",
      bestTime: "March to October & Dec–Feb (Snow)",
      bestTimeDetail:
        "Spring and summer (April to August) showcase vibrant flower blossoms, saffron fields, and mild weather (15°C to 28°C); winter (Dec to Feb) transforms the valley into a snowy wonderland.",
      idealDuration: "5 to 6 Days",
      estimatedBudget: "₹2,800 – ₹7,000 / day",
      budgetTiers: [
        {
          tier: "Budget Traveler",
          cost: "₹2,200 – ₹3,500 / day",
          details:
            "Traditional Srinagar homestays, shared tourist taxis, local bakery breakfasts, and street dhabas."
        },
        {
          tier: "Mid-Range Traveler",
          cost: "₹4,500 – ₹8,500 / day",
          details:
            "Classic cedar houseboat stays on Nigeen or Dal Lake, private sedan transfers, and Gondola Phase 1 & 2 tickets."
        },
        {
          tier: "Luxury Traveler",
          cost: "₹14,000+ / day",
          details:
            "Premium heritage resorts in Gulmarg and Srinagar, private chauffeured luxury SUVs, and bespoke artisan tours."
        }
      ],
      famousPlaces: [
        {
          name: "Dal Lake & Nigeen Lake",
          type: "Waterfront",
          desc: "Srinagar's world-famous urban waterbodies lined with intricately carved cedar houseboats and gliding shikaras."
        },
        {
          name: "Gulmarg & Apharwat Peak",
          type: "Meadow / Ski Resort",
          desc: "The 'Meadow of Flowers', hosting one of the world's highest commercial cable cars (Gondola) reaching 13,780 feet."
        },
        {
          name: "Pahalgam & Betaab Valley",
          type: "Alpine Valley",
          desc: "A verdant valley of deodar pines, babbling Lidder riverbanks, and shepherd trails leading toward Amarnath."
        },
        {
          name: "Mughal Gardens (Shalimar & Nishat)",
          type: "Heritage Gardens",
          desc: "Magnificent terraced gardens designed with Persian fountains, chinar trees, and cascades overlooking Dal Lake."
        },
        {
          name: "Sonamarg",
          type: "Glacier Valley",
          desc: "The 'Meadow of Gold', home to the Thajiwas Glacier and surrounded by breathtaking snow-streaked granite peaks."
        }
      ],
      activities: [
        {
          title: "Sunrise Shikara Cruise",
          desc: "Glide silently across Dal Lake at first light to witness the vibrant 100-year-old floating vegetable and flower market."
        },
        {
          title: "Gulmarg Gondola Ride",
          desc: "Ascend Apharwat Peak across two cable car phases for panoramic views of the Pir Panjal mountain range."
        },
        {
          title: "Stay in a Cedar Houseboat",
          desc: "Experience historic Kashmiri hospitality inside a hand-carved pinewood and cedar floating residence on peaceful Nigeen Lake."
        },
        {
          title: "Pashmina & Walnut Wood Workshop Visit",
          desc: "Observe master artisans hand-weaving delicate Pashmina shawls and hand-carving intricate walnut wood furniture."
        }
      ],
      foodRecommendations: [
        {
          dish: "Kashmiri Wazwan Feast",
          desc: "A legendary multi-course royal feast featuring Rogan Josh, succulent Rista (meatballs in saffron gravy), and Gushtaba."
        },
        {
          dish: "Kahwa",
          desc: "Traditional aromatic green tea brewed with saffron strands, crushed green cardamom, cinnamon, and crunchy sliced almonds."
        },
        {
          dish: "Dum Aloo Kashmiri",
          desc: "Baby potatoes slow-simmered in an authentic, un-emulsified yogurt sauce infused with fennel powder and ginger."
        },
        {
          dish: "Nadru Yakhni",
          desc: "Crisp lotus stems sourced directly from the lake, simmered in a delicate, lightly spiced curd-based broth."
        },
        {
          dish: "Kashmiri Breads (Girda & Sheermal)",
          desc: "Fresh golden breads baked in traditional clay tandoors by neighborhood Kandur bakeries, enjoyed with noon chai."
        }
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Srinagar Arrival & Dal Lake Shikara",
          desc: "Arrive at Srinagar Airport, settle into a traditional houseboat on Nigeen or Dal Lake, and enjoy an evening shikara cruise."
        },
        {
          day: "Day 2",
          title: "Mughal Heritage & Old City Bazaars",
          desc: "Explore Shalimar Bagh, Nishat Bagh, and Chashme Shahi; walk through the historic Jamia Masjid and saffron merchants."
        },
        {
          day: "Day 3",
          title: "Alpine Wonder of Gulmarg",
          desc: "Travel to Gulmarg for a full day; take the two-phase Gondola ride to Apharwat summit and wander across the rolling golf meadows."
        },
        {
          day: "Day 4",
          title: "Scenic Valleys of Pahalgam",
          desc: "Drive along saffron fields to Pahalgam; visit Betaab Valley, Aru Valley, and enjoy riverside tea by the roaring Lidder River."
        },
        {
          day: "Day 5",
          title: "Floating Market & Departure",
          desc: "Catch the dawn floating market by boat, pick up authentic saffron and dry fruits, and proceed to Srinagar airport."
        }
      ],
      practicalTips: [
        "Only post-paid cellular connections from Indian providers (Airtel, Jio, BSNL) function in Jammu & Kashmir.",
        "Carry valid government-issued photo identity cards (e.g. Aadhaar, Passport) at all times for verification checkpoints.",
        "Book Gulmarg Gondola tickets exclusively through the official Jammu & Kashmir tourism portal in advance to avoid scalpers.",
        "Negotiate shikara and pony ride charges politely beforehand based on official government tourism rate cards."
      ],
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Srinagar,+Kashmir,+India",
      related: ["manali", "kerala"]
    },

    jaipur: {
      id: "jaipur",
      name: "Jaipur",
      region: "West India",
      category: "Culture",
      tag: "Heritage & colour",
      heroImage:
        "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1800&q=85",
      heroAlt: "Ornate pink sandstone palace architecture in Jaipur",
      tagline:
        "Majestic hilltop citadels, honeycombed palaces & vibrant royal bazaars.",
      overview:
        "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is the illustrious 'Pink City' and the vibrant capital of Rajasthan. Renowned worldwide as part of India's iconic Golden Triangle, Jaipur blends strict Vedic architectural planning with royal Rajput fortresses, kaleidoscopic gemstone bazaars, and grand heritage palaces. It is an open-air museum where living history, regal pomp, and master craftsmanship thrive side by side.",
      bestTime: "October to March",
      bestTimeDetail:
        "Pleasant winter days with sunny skies (12°C to 27°C) and crisp cool evenings, perfect for walking tours and exploring sprawling outdoor forts.",
      idealDuration: "3 to 4 Days",
      estimatedBudget: "₹1,800 – ₹5,000 / day",
      budgetTiers: [
        {
          tier: "Budget Traveler",
          cost: "₹1,400 – ₹2,500 / day",
          details:
            "Cozy heritage haveli guesthouses, metro and e-rickshaws, and iconic street kachori stalls."
        },
        {
          tier: "Mid-Range Traveler",
          cost: "₹3,200 – ₹6,500 / day",
          details:
            "Restored royal havelis, air-conditioned cabs, composite monument passes, and rooftop courtyard restaurants."
        },
        {
          tier: "Luxury Traveler",
          cost: "₹12,000+ / day",
          details:
            "Palatial 5-star palace hotels (such as Rambagh or Jai Mahal), private royal historians, and fine dining."
        }
      ],
      famousPlaces: [
        {
          name: "Amer Fort (Amber)",
          type: "Royal Citadel",
          desc: "A majestic hilltop fortress overlooking Maota Lake, famous for its magnificent Hall of Mirrors (Sheesh Mahal)."
        },
        {
          name: "Hawa Mahal",
          type: "Palace Architecture",
          desc: "The five-story 'Palace of Winds' featuring 953 delicately carved jharokha honeycomb windows built for royal women."
        },
        {
          name: "City Palace",
          type: "Living Royal Palace",
          desc: "A sprawling complex of courtyards, gardens, and royal halls that continues to serve as home to the Jaipur royal family."
        },
        {
          name: "Jantar Mantar",
          type: "UNESCO Observatory",
          desc: "An astounding 18th-century UNESCO World Heritage collection of nineteen architectural astronomical instruments."
        },
        {
          name: "Nahargarh & Jaigarh Forts",
          type: "Hilltop Forts",
          desc: "Clifftop defensive bastions standing guard atop the Aravalli hills, offering the ultimate panoramic Pink City sunset."
        }
      ],
      activities: [
        {
          title: "Dawn Photography at Hawa Mahal",
          desc: "Capture the golden sunrise hitting the terracotta facade of Hawa Mahal before the city streets awaken."
        },
        {
          title: "Sheesh Mahal Exploration",
          desc: "Witness how a single candle illuminates the entire mirrored ceiling and walls of Amer Fort's royal hall."
        },
        {
          title: "Bazaar Walking & Handicraft Shopping",
          desc: "Explore Johari Bazaar for precious jewelry and Bapu Bazaar for handmade mojari leather shoes and block-printed quilts."
        },
        {
          title: "Sunset at Nahargarh Fort",
          desc: "Sit atop the centuries-old fortification walls as the sun dips behind the Aravalli hills, illuminating the city below."
        }
      ],
      foodRecommendations: [
        {
          dish: "Dal Baati Churma",
          desc: "Crisp baked wheat flour dough balls served with spiced mixed lentils, garlic chutney, and sweetened powdered cereal."
        },
        {
          dish: "Pyaaz Kachori",
          desc: "Flaky, crisp golden pastries stuffed with a savory, spicy onion and potato filling, served piping hot with tamarind chutney."
        },
        {
          dish: "Ghevar",
          desc: "A traditional Rajasthani disc-shaped honeycomb sweet soaked in fragrant cardamom sugar syrup and topped with rich rabdi."
        },
        {
          dish: "Laal Maas",
          desc: "A fiery, slow-cooked royal mutton curry prepared in a rich gravy of mathania dry red chilies, garlic, and yogurt."
        },
        {
          dish: "Kulhad Lassi from MI Road",
          desc: "Thick, creamy churned sweet yogurt served in earthen terracotta cups, topped with a generous layer of malai (clotted cream)."
        }
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Heart of the Pink City",
          desc: "Start at Hawa Mahal, tour the sprawling City Palace complex, inspect the stone sundials of Jantar Mantar, and explore Johari Bazaar."
        },
        {
          day: "Day 2",
          title: "Fortresses & Palatial Grandeur",
          desc: "Spend the morning admiring Amer Fort and the Jaivana cannon at Jaigarh; head to Nahargarh Fort for a breathtaking sunset."
        },
        {
          day: "Day 3",
          title: "Crafts, Culture & Departure",
          desc: "Visit the Albert Hall Museum, shop for hand block-printed textiles in Sanganer, and savor sweet ghevar before departure."
        }
      ],
      practicalTips: [
        "Purchase the Jaipur Composite Monument Entry Ticket at your first monument to save time and skip ticket lines at five major sites.",
        "Wear comfortable walking shoes with good grip, as climbing the stone ramps and cobblestones of Amer Fort requires walking.",
        "Hire only government-certified tour guides wearing official Department of Tourism identity badges at monuments.",
        "Bargain politely in old city bazaars and look for certified hallmark stamps when purchasing gemstones and silver jewelry."
      ],
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Jaipur,+Rajasthan,+India",
      related: ["varanasi", "goa"]
    },

    kerala: {
      id: "kerala",
      name: "Kerala",
      region: "South India",
      category: "Nature",
      tag: "Backwater retreat",
      heroImage:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1800&q=85",
      heroAlt: "A boat on the green tropical backwaters of Kerala",
      tagline:
        "Emerald lagoons, mist-veiled tea hills & ancient Ayurvedic serenity.",
      overview:
        "Revered across the globe as 'God's Own Country', Kerala is a slender tropical paradise nestled between the Arabian Sea and the Western Ghats. Blessed with an intricate 900-kilometer network of serene palm-fringed backwaters, rolling green tea estates in Munnar, dramatic red coastal cliffs in Varkala, and aromatic spice hills in Thekkady, Kerala invites travelers into a state of tranquil rejuvenation and rich cultural wonder.",
      bestTime: "September to March",
      bestTimeDetail:
        "Pleasant tropical weather (23°C to 32°C) with low humidity and gentle breezes, optimal for houseboat stays, beach outings, and plantation treks.",
      idealDuration: "5 to 6 Days",
      estimatedBudget: "₹2,500 – ₹6,500 / day",
      budgetTiers: [
        {
          tier: "Budget Traveler",
          cost: "₹1,800 – ₹3,000 / day",
          details:
            "Village homestays, state government ferry rides on the backwaters, and authentic local banana-leaf mess meals."
        },
        {
          tier: "Mid-Range Traveler",
          cost: "₹4,000 – ₹8,000 / day",
          details:
            "Tea-estate hillside cottages, private overnight houseboat cruises in Alleppey, and Kathakali cultural performances."
        },
        {
          tier: "Luxury Traveler",
          cost: "₹13,000+ / day",
          details:
            "5-star luxury backwater wellness resorts, multi-room luxury houseboats with private chef, and Ayurvedic retreats."
        }
      ],
      famousPlaces: [
        {
          name: "Alleppey (Alappuzha) Backwaters",
          type: "Waterway Network",
          desc: "A world-renowned labyrinth of canals, lagoons, and lakes navigated by traditional thatched-roof houseboats (Kettuvallams)."
        },
        {
          name: "Munnar Tea Plantations",
          type: "Hill Station",
          desc: "Rolling emerald hills carpeted in manicured tea bushes, cool mist, and home to Eravikulam National Park and the Nilgiri Tahr."
        },
        {
          name: "Fort Kochi",
          type: "Colonial Port & Art",
          desc: "Historic port quarter famed for giant cantilevered Chinese fishing nets, Dutch and Portuguese mansions, and art biennales."
        },
        {
          name: "Periyar National Park (Thekkady)",
          type: "Wildlife & Spices",
          desc: "An elephant and tiger reserve centered around a scenic lake, surrounded by cardamom, pepper, and cinnamon plantations."
        },
        {
          name: "Varkala Cliff Beach",
          type: "Coastal Haven",
          desc: "Unique geological red laterite cliffs towering directly above a sandy beach and natural mineral water springs."
        }
      ],
      activities: [
        {
          title: "Overnight Houseboat Cruise",
          desc: "Drift past floating lotus patches, village life, and paddy fields on a traditional wooden boat with private freshly cooked meals."
        },
        {
          title: "Munnar Tea Estate Walk",
          desc: "Stroll through morning mist in heritage tea gardens and tour an operational orthodox tea processing factory."
        },
        {
          title: "Kathakali & Kalaripayattu Show",
          desc: "Witness the vivid makeup, dramatic eye expressions of Kathakali dance, and the lightning-fast ancient martial art of Kalaripayattu."
        },
        {
          title: "Ayurvedic Rejuvenation Massage",
          desc: "Experience traditional Abhyanga herbal oil massage therapy administered by certified Ayurvedic practitioners."
        }
      ],
      foodRecommendations: [
        {
          dish: "Appam with Stew",
          desc: "Fluffy, bowl-shaped fermented rice pancakes with crisp lacy edges, paired with a mild, creamy coconut milk vegetable or chicken stew."
        },
        {
          dish: "Karimeen Pollichathu",
          desc: "Fresh pearl spot fish marinated in fiery ground shallots and spices, wrapped securely in a banana leaf and pan-roasted."
        },
        {
          dish: "Kerala Sadya",
          desc: "A grand vegetarian ceremonial feast featuring over twenty dishes, pickles, and payasam served on an expansive fresh banana leaf."
        },
        {
          dish: "Puttu and Kadala Curry",
          desc: "Steamed cylinders of ground rice layered with grated fresh coconut, paired with a spicy black chickpea coconut gravy."
        },
        {
          dish: "Malabar Parotta with Roast",
          desc: "Flaky, multi-layered spiral flatbread served alongside a rich, caramelized coconut onion-tomato roast."
        }
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Colonial Charm of Fort Kochi",
          desc: "Arrive in Kochi, explore the Chinese fishing nets, walk past Dutch colonial warehouses, and watch an evening Kathakali performance."
        },
        {
          day: "Day 2",
          title: "Ascent to the Tea Hills of Munnar",
          desc: "Drive scenic winding roads passing Cheeyappara waterfalls to reach Munnar; walk through sprawling green tea gardens."
        },
        {
          day: "Day 3",
          title: "Wildlife & Spices in Thekkady",
          desc: "Travel to Thekkady; take a guided walking tour through aromatic spice plantations and enjoy an evening martial arts demonstration."
        },
        {
          day: "Day 4",
          title: "Backwater Magic in Alleppey",
          desc: "Transfer to Alleppey, board your private traditional houseboat around midday, and glide through village lagoons at sunset."
        },
        {
          day: "Day 5",
          title: "Morning Calm & Kochi Departure",
          desc: "Enjoy an early morning breakfast on the water as village canoes pass by, disembark the houseboat, and depart via Kochi."
        }
      ],
      practicalTips: [
        "Select government-accredited (Green Palm certified) houseboats to ensure environmental standards and passenger safety.",
        "Bring along a light jacket or cardigan for Munnar, where temperatures can dip into the single digits at night.",
        "Always verify that Ayurvedic treatment centers possess valid government accreditation from the Kerala Department of Tourism.",
        "When visiting orthodox temples like Padmanabhaswamy, note that traditional attire (mundu/saree) is strictly required."
      ],
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Kerala,+India",
      related: ["goa", "kashmir"]
    },

    varanasi: {
      id: "varanasi",
      name: "Varanasi",
      region: "North India",
      category: "Culture",
      tag: "A city of stories",
      heroImage: "assets/images/varanashi.jpg",
      heroAlt:
        "Historic riverside ghats and temple steps along the sacred Ganges in Varanasi",
      tagline:
        "Sacred dawn river chants, ancient stone ghats & eternal spiritual rhythms.",
      overview:
        "Stretching gracefully along the sacred crescent bend of the River Ganges, Varanasi (also revered as Kashi and Benares) is one of the oldest continuously inhabited cities on earth. As the spiritual epicenter of India, it is a realm where the ancient and the modern intertwine seamlessly: from the resonant chiming of temple bells and hypnotic evening aarti ceremonies to the winding labyrinth of galis (alleys) bustling with silk weavers and chai vendors.",
      bestTime: "October to March",
      bestTimeDetail:
        "Cool winter months with pleasant daytime temperatures (14°C to 26°C), ideal for exploring the open-air river ghats, temple lanes, and taking dawn boat rides.",
      idealDuration: "3 to 4 Days",
      estimatedBudget: "₹1,500 – ₹4,500 / day",
      budgetTiers: [
        {
          tier: "Budget Traveler",
          cost: "₹1,200 – ₹2,200 / day",
          details:
            "Ghat-side heritage hostels, walking and cycle rickshaws, street food breakfasts, and shared wooden boats."
        },
        {
          tier: "Mid-Range Traveler",
          cost: "₹3,000 – ₹6,000 / day",
          details:
            "Restored riverfront havelis, private sunrise and sunset boat rides, guided heritage walk tours, and courtyard dining."
        },
        {
          tier: "Luxury Traveler",
          cost: "₹11,000+ / day",
          details:
            "Palatial riverside luxury hotels (such as BrijRama Palace), private ceremonial priest blessings, and luxury car transfers."
        }
      ],
      famousPlaces: [
        {
          name: "Dashashwamedh Ghat",
          type: "Spiritual Epicenter",
          desc: "The most vibrant and historic ghat in Varanasi, site of the mesmerizing daily Ganga Aarti choreographed with flaming brass lamps."
        },
        {
          name: "Assi Ghat",
          type: "Cultural Ghat",
          desc: "The southernmost ghat where pilgrims gather for morning Subah-e-Banaras concerts, yoga, and dawn chai at sunset."
        },
        {
          name: "Kashi Vishwanath Corridor",
          type: "Golden Temple",
          desc: "One of the twelve sacred Jyotirlingas of Lord Shiva, newly renovated with a grand pedestrian corridor leading directly to the river."
        },
        {
          name: "Manikarnika & Harishchandra Ghats",
          type: "Sacred Cremation",
          desc: "Ancient sacred cremation ghats where perpetual funeral pyres burn, representing the profound Hindu philosophy of Moksha (liberation)."
        },
        {
          name: "Sarnath",
          type: "Buddhist Heritage",
          desc: "Located just 10 km outside the city, where Gautama Buddha delivered his first sermon; features the historic Dhamek Stupa and Ashoka Pillar."
        }
      ],
      activities: [
        {
          title: "Dawn Wooden Boat Ride",
          desc: "Drift quietly along the Ganges at dawn as the rising sun bathes the centuries-old sandstone temples and morning bathers in gold."
        },
        {
          title: "Witnessing the Ganga Aarti",
          desc: "Take a seat on a riverboat at dusk to experience the hypnotic chanting, conch shells, and rhythmic multi-tiered brass oil lamps."
        },
        {
          title: "Old City Gali Heritage Walk",
          desc: "Navigate the winding, car-free stone alleys to discover hidden centuries-old shrines, antique doorways, and sweet shops."
        },
        {
          title: "Excursion to Sacred Sarnath",
          desc: "Visit the serene deer park, inspect the 5th-century Buddhist stupas, and view the original four-lion Ashoka Capital in the archaeological museum."
        }
      ],
      foodRecommendations: [
        {
          dish: "Banarasi Kachori Sabzi & Jalebi",
          desc: "Crisp, lentil-stuffed kachoris served with a spicy, unpeeled potato and chickpea curry, rounded off with crisp, syrupy jalebis."
        },
        {
          dish: "Tamatar Chaat",
          desc: "A uniquely Banarasi delicacy made of spiced mashed tomatoes, roasted cumin, ginger, and crispy namakpare drenched in sugar syrup."
        },
        {
          dish: "Malaiyo (Winter Specialty)",
          desc: "A heavenly, cloud-like winter foam created by churning raw milk exposed to night dew, flavored with saffron, cardamom, and pistachios."
        },
        {
          dish: "Blue Lassi & Earthen Thandai",
          desc: "Thick, hand-churned yogurt or chilled milk flavored with rose water, crushed nuts, rabdi, and saffron in an earthen kulhad."
        },
        {
          dish: "Authentic Banarasi Paan",
          desc: "World-famed betel leaf parcel filled with aromatic gulkand, fragrant spices, and areca nut, creating an iconic burst of flavor."
        }
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival & The Grand Evening Aarti",
          desc: "Check into your riverside stay, wander down to Assi Ghat for chai, and board an evening boat to witness the majestic Dashashwamedh Ganga Aarti."
        },
        {
          day: "Day 2",
          title: "Dawn on the Ganges & Kashi Vishwanath",
          desc: "Take a tranquil 5:30 AM sunrise boat ride from Assi to Rajghat; visit Kashi Vishwanath temple corridor and wander the ancient galis."
        },
        {
          day: "Day 3",
          title: "Buddha's Footsteps at Sarnath",
          desc: "Take a half-day excursion to Sarnath to view Dhamek Stupa and ancient Buddhist relics; return for afternoon silk weaver visits."
        },
        {
          day: "Day 4",
          title: "Morning Subah-e-Banaras & Departure",
          desc: "Enjoy classical morning music at Assi Ghat, savor hot kachoris and jalebis, shop for authentic Banarasi silk, and depart."
        }
      ],
      practicalTips: [
        "The old city galis are completely pedestrianized; comfortable walking sandals or shoes that are easy to slip off at temples are essential.",
        "Strictly respect photography guidelines: photography is strictly forbidden at Manikarnika and Harishchandra cremation ghats out of respect.",
        "Negotiate boat ride rates politely beforehand, or arrange your boat through your hotel to ensure transparent, agreed-upon pricing.",
        "Be prepared for crowds and sensory intensity; embrace the rhythm of the city at an unhurried, patient pace."
      ],
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Varanasi,+Uttar+Pradesh,+India",
      related: ["jaipur", "manali"]
    },

    darjeeling: {
      id: "darjeeling",
      name: "Darjeeling",
      region: "East India",
      category: "Mountains",
      tag: "Queen of the Hills",
      heroImage:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1800&q=85",
      heroAlt: "Rolling emerald tea gardens and mist-veiled Himalayan ridges in Darjeeling",
      tagline:
        "Misty emerald tea estates, iconic UNESCO Toy Train & sunrise over Mount Kanchenjunga.",
      overview:
        "Perched at an elevation of 2,042 meters (6,700 feet) in the Lesser Himalayas of West Bengal, Darjeeling is world-renowned for its distinctively aromatic black tea and sweeping vistas of Mount Kanchenjunga—the world's third-highest peak. Once a summer retreat for British administrators, Darjeeling presents an enchanting blend of Victorian colonial architecture, Tibetan Buddhist monasteries, and vibrant multicultural hill communities spanning Gorkha, Bhutia, and Lepcha heritages.",
      bestTime: "October to December & March to May",
      bestTimeDetail:
        "Autumn (October–November) offers clear blue skies for Kanchenjunga viewpoints. Spring (March–May) brings pleasant temperatures (11°C to 19°C) and blooming rhododendrons. Monsoon (June–September) brings heavy rainfall and mountain road caveats.",
      idealDuration: "3 to 4 Days",
      estimatedBudget: "₹2,000 – ₹5,500 / day",
      budgetTiers: [
        {
          tier: "Budget Traveler",
          cost: "₹1,800 – ₹2,600 / day",
          details:
            "Homestays or heritage backpacker lodges, shared jeeps, Tibetan cafe dining, and walking routes."
        },
        {
          tier: "Mid-Range Traveler",
          cost: "₹3,800 – ₹6,500 / day",
          details:
            "Colonial boutique hotels, private day jeeps for Tiger Hill, guided tea tastings, and heritage restaurants."
        },
        {
          tier: "Luxury Traveler",
          cost: "₹10,500+ / day",
          details:
            "Historic colonial planters' estates, private chauffeur, personalized tea estate tours, and spa therapies."
        }
      ],
      famousPlaces: [
        {
          name: "Tiger Hill",
          type: "Sunrise Viewpoint",
          desc: "Famed vantage point at 2,590 meters offering iconic dawn views illuminating the twin peaks of Mount Kanchenjunga and Mount Everest on clear mornings."
        },
        {
          name: "Batasia Loop & War Memorial",
          type: "Heritage Railway",
          desc: "A spiraling engineering marvel where the narrow-gauge Toy Train loops around a manicured hillside garden and Gorkha war memorial."
        },
        {
          name: "Darjeeling Himalayan Railway (DHR)",
          type: "UNESCO World Heritage",
          desc: "Operating since 1881, the historic two-foot narrow-gauge steam railway winding through misty mountain villages between New Jalpaiguri and Darjeeling."
        },
        {
          name: "Happy Valley Tea Estate",
          type: "Tea Plantation",
          desc: "One of Darjeeling's oldest organic tea estates established in 1854, offering guided walking tours through tea slopes and processing factories."
        },
        {
          name: "Japanese Peace Pagoda & Buddhist Temple",
          type: "Spiritual & Cultural",
          desc: "A serene white stupa established by Nichidatsu Fuji, offering panoramic views of the Darjeeling town valley and snowcapped peaks."
        }
      ],
      activities: [
        {
          title: "Joy Ride on the DHR Steam Train",
          desc: "Experience the historic 2-hour steam train joy ride from Darjeeling station through Batasia Loop to Ghum, India's highest railway station."
        },
        {
          title: "Orthodox Tea Tasting Masterclass",
          desc: "Sample first and second flush Darjeeling muscatel teas with master tasters along Nehru Road and Chowrasta."
        },
        {
          title: "Sunrise Trek to Tiger Hill",
          desc: "Rise before dawn to watch the first rays of sunlight turn Kanchenjunga's snowfields from deep violet to blazing gold."
        },
        {
          title: "Chowrasta & Mall Road Stroll",
          desc: "Wander the historic vehicle-free promenade at sunset, browsing second-hand mountain bookshops and sampling fresh street momos."
        }
      ],
      foodRecommendations: [
        {
          dish: "Darjeeling Steamed Momos",
          desc: "Delicate dumplings stuffed with seasoned local vegetables or chicken, served with fiery roasted red chili dalles and clear bone broth."
        },
        {
          dish: "Thukpa",
          desc: "Hearty Tibetan noodle soup infused with ginger, garlic, spring onions, and seasonal mountain greens, ideal for chilly evenings."
        },
        {
          dish: "Sel Roti & Aloo Dum",
          desc: "Traditional ring-shaped Nepali sweet rice bread with a crisp exterior, paired with spicy cumin-tempered potato curry."
        },
        {
          dish: "Churpi (Himalayan Yak Cheese)",
          desc: "Traditional hardened or soft cheese prepared in high-altitude pastures, chewed as an energy snack or cooked in soups."
        },
        {
          dish: "First Flush Darjeeling Tea",
          desc: "Light, amber-gold organic orthodox tea renowned globally for its delicate floral aroma and natural muscatel grape notes."
        }
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival, Chowrasta & Colonial Heritage",
          desc: "Arrive via shared jeep or private taxi from Bagdogra/NJP, settle in, and spend a relaxing afternoon walking the pedestrian Mall Road."
        },
        {
          day: "Day 2",
          title: "Tiger Hill Sunrise & Himalayan Railway",
          desc: "Early 4:00 AM excursion to Tiger Hill for sunrise over Kanchenjunga, followed by breakfast in Ghum and the historic DHR Steam Joy Ride."
        },
        {
          day: "Day 3",
          title: "Tea Estates & Peace Pagoda",
          desc: "Tour Happy Valley Tea Estate, witness orthodox leaf grading, visit the Himalayan Mountaineering Institute (HMI), and walk to the Peace Pagoda."
        },
        {
          day: "Day 4",
          title: "Monasteries & Departure",
          desc: "Visit the historic Bhutia Busty monastery, pick up freshly packaged orthodox teas, and start your journey onward to Gangtok or Bagdogra."
        }
      ],
      practicalTips: [
        "Tiger Hill trips require an early 3:30 AM departure; book authorized shared jeeps from the central Darjeeling motor stand the evening before.",
        "Pre-book DHR Steam Joy Ride tickets well in advance on the Indian Railways (IRCTC) portal, as seats sell out weeks ahead in peak tourist months.",
        "Pack warm woolens even during summer months; mountain evenings turn chilly once the afternoon mist rolls across the ridges.",
        "Road transit between Siliguri/Bagdogra and Darjeeling involves winding hill roads (approx. 3.5 to 4 hours); keep motion sickness medicine on hand."
      ],
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Darjeeling,+West+Bengal,+India",
      related: ["gangtok", "manali"]
    },

    gangtok: {
      id: "gangtok",
      name: "Gangtok",
      region: "East India",
      category: "Mountains",
      tag: "Cloud kingdom",
      heroImage: "assets/images/Gangtok.jpg",
      heroAlt: "Majestic mountain ridges and prayer flags overlooking Gangtok, Sikkim",
      tagline:
        "Clean mountain avenues, sacred Buddhist monasteries & high Himalayan alpine passes.",
      overview:
        "The capital of Sikkim, perched at 1,650 meters (5,410 feet) amidst the Eastern Himalayas, Gangtok is recognized as one of India's cleanest, most progressive hill cities. Famed for its vehicle-free pedestrian boulevard of MG Marg, ancient Tibetan Buddhist monasteries, and orchid sanctuaries, Gangtok serves as the cultural gateway to high-altitude glacial lakes, alpine passes, and views of Mount Kanchenjunga.",
      bestTime: "March to May & October to Mid-December",
      bestTimeDetail:
        "Spring (March–May) brings mild weather (12°C–20°C) and bursting orchid blooms across the hills. Autumn (October–November) offers clear skies and crisp mountain vistas. Monsoon (June–September) brings intense rains and frequent road closures along NH10.",
      idealDuration: "3 to 4 Days",
      estimatedBudget: "₹2,200 – ₹6,000 / day",
      budgetTiers: [
        {
          tier: "Budget Traveler",
          cost: "₹1,900 – ₹2,800 / day",
          details:
            "Clean guesthouses, shared Sikkim Tourism jeeps, local MG Marg cafes, and public ropeway rides."
        },
        {
          tier: "Mid-Range Traveler",
          cost: "₹4,000 – ₹7,000 / day",
          details:
            "Modern hotels with Kanchenjunga views, reserved private cabs for monastery circuits, and specialty dining."
        },
        {
          tier: "Luxury Traveler",
          cost: "₹11,000+ / day",
          details:
            "5-star mountain wellness resorts, private luxury SUV with hill permits, and curated monastery tours."
        }
      ],
      famousPlaces: [
        {
          name: "Rumtek Monastery (Dharma Chakra Centre)",
          type: "Buddhist Heritage",
          desc: "The seat of the Karma Kagyu lineage located 24 km from Gangtok, housing rare Tibetan murals, golden stupas, and sacred Buddhist relics."
        },
        {
          name: "Tsomgo Lake (Changu Lake)",
          type: "Glacial Alpine Lake",
          desc: "A sacred glacial lake at 3,753 meters (12,310 feet) reflecting surrounding snow peaks, with changing water hues across seasons."
        },
        {
          name: "MG Marg",
          type: "Pedestrian Boulevard",
          desc: "India's first litter-free, vehicle-free pedestrian street lined with flowerbeds, cafes, handicraft shops, and lively evening gatherings."
        },
        {
          name: "Enchey Monastery",
          type: "Sacred Gompa",
          desc: "A 200-year-old Nyingma monastery perched above the town in a pine forest, revered as a spiritual guardian of the valley."
        },
        {
          name: "Nathula Pass (Indo-China Border)",
          type: "High Mountain Pass",
          desc: "Historic branch of the Old Silk Route at 4,310 meters (14,140 feet), open to Indian citizens with authorized special permits."
        }
      ],
      activities: [
        {
          title: "Gangtok Ropeway Cable Car Ride",
          desc: "Board the bi-cable passenger ropeway from Deorali to Tashiling for sweeping aerial views of Gangtok town and snow peaks."
        },
        {
          title: "Excursion to Tsomgo Lake & Baba Mandir",
          desc: "Travel along high mountain switchbacks past cascading waterfalls to reach the frozen or turquoise waters of Tsomgo Lake."
        },
        {
          title: "Monastery Meditation & Chanting",
          desc: "Experience early-morning prayer sessions and deep horn music with Buddhist monks at Rumtek or Enchey Monastery."
        },
        {
          title: "Namgyal Institute of Tibetology",
          desc: "Explore one of the world's leading research institutes on Tibetan language, Mahayana Buddhist art, and ancient manuscripts."
        }
      ],
      foodRecommendations: [
        {
          dish: "Sikkimese Shaphale",
          desc: "Crisp, deep-fried pastry pies stuffed with spiced minced chicken or seasonal vegetables, served with chili dip."
        },
        {
          dish: "Gundruk Soup",
          desc: "Nutritious, tangy traditional fermented mustard leaf soup cooked with tomatoes, garlic, and mountain herbs."
        },
        {
          dish: "Tingmo with Ema Datshi",
          desc: "Fluffy steamed Tibetan flower-shaped bread paired with spicy Bhutanese chili and yak cheese gravy."
        },
        {
          dish: "Sikkim Momos & Dalle Khursani",
          desc: "Steamed thin-wrapper dumplings served with fiery round red Dalle chilies—one of the world's hottest peppers."
        },
        {
          dish: "Chhang (Traditional Millet Brew)",
          desc: "Warm fermented finger-millet beverage sipped through a bamboo straw from a wooden cylinder called a dhungro."
        }
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival & MG Marg Evening",
          desc: "Arrive in Gangtok from Siliguri or Darjeeling, check into your hotel, and spend an easy evening walking along the lively, vehicle-free MG Marg."
        },
        {
          day: "Day 2",
          title: "Tsomgo Lake & High-Altitude Excursion",
          desc: "Early morning departure with pre-arranged permits to sacred Tsomgo Lake (3,753m) and the historic memorial of Baba Harbhajan Singh."
        },
        {
          day: "Day 3",
          title: "Monasteries & Tibetology Heritage",
          desc: "Visit the expansive Rumtek Monastery in the morning, followed by the Namgyal Institute of Tibetology, Do-Drul Chorten, and the Gangtok Ropeway."
        },
        {
          day: "Day 4",
          title: "Enchey Monastery, Viewpoints & Onward",
          desc: "Catch morning panoramic views from Tashi Viewpoint, visit Enchey Monastery, and prepare for departure or onward travel to North Sikkim."
        }
      ],
      practicalTips: [
        "Visits to Tsomgo Lake and Nathula Pass require Protected Area Permits (PAP); submit passport photos and government ID to a Sikkim Tourism registered tour operator 24 hours prior.",
        "Nathula Pass is restricted to Indian citizens only (by Ministry of Defence regulations) and is closed to tourists on Mondays and Tuesdays.",
        "Sikkim is 100% organic and strictly prohibits single-use plastic water bottles; carry reusable flasks to refill at hotel purification stations.",
        "Highway NH10 connects Sikkim to West Bengal; road closures can occur during peak monsoon rains. Allow buffer time when traveling to Bagdogra airport."
      ],
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Gangtok,+Sikkim,+India",
      related: ["darjeeling", "kashmir"]
    },

    mumbai: {
      "id": "mumbai",
      "name": "Mumbai",
      "region": "West India",
      "category": "Culture",
      "tag": "City of dreams",
      "heroImage": "assets/images/mumbai.jpg",
      "heroAlt": "The iconic Gateway of India overlooking the Arabian Sea in Mumbai",
      "tagline": "Colonial heritage, coastal art deco promenades, and the unstoppable energy of the Arabian Sea.",
      "overview": "Perched on India's west coast, Mumbai is a dazzling metropolis of contrasts where Victorian gothic architecture meets the Arabian Sea. From the morning fish auctions at Sassoon Docks to sunset strolls along Marine Drive's Queen's Necklace, Mumbai offers historic rock-cut shrines at Elephanta Island, iconic Irani cafes, and the creative pulse of Bollywood.",
      "bestTime": "November to February",
      "bestTimeDetail": "Pleasant coastal temperatures (20°C to 30°C) with low humidity and cool evening sea breezes, ideal for walking tours and harbor cruises.",
      "idealDuration": "3 to 4 Days",
      "estimatedBudget": "₹3,000 – ₹7,500 / day",
      "budgetTiers": [
            {
                  "tier": "Budget Traveler",
                  "cost": "₹2,000 – ₹3,200 / day",
                  "details": "South Mumbai heritage guesthouses/hostels, local trains, street food, and free promenades."
            },
            {
                  "tier": "Mid-Range Traveler",
                  "cost": "₹4,500 – ₹8,500 / day",
                  "details": "Boutique hotels in Colaba/Bandra, app-cabs, heritage dining, and guided museum tours."
            },
            {
                  "tier": "Luxury Traveler",
                  "cost": "₹15,000+ / day",
                  "details": "Iconic sea-facing 5-star hotels, fine dining, private chauffeured cars, and private yacht charters."
            }
      ],
      "famousPlaces": [
            {
                  "name": "Gateway of India & Taj Mahal Palace",
                  "type": "Heritage / Architecture",
                  "desc": "Historic waterfront basalt arch built in 1924 alongside the legendary 1903 heritage palace hotel."
            },
            {
                  "name": "Marine Drive & Chowpatty Beach",
                  "type": "Coastline / Boulevard",
                  "desc": "A 3.6 km curved seaside promenade known as the Queen's Necklace, famous for panoramic Arabian Sea sunsets."
            },
            {
                  "name": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
                  "type": "UNESCO Heritage",
                  "desc": "UNESCO World Heritage Victorian Gothic railway headquarters featuring stone gargoyles, domes, and vaulted ceilings."
            },
            {
                  "name": "Elephanta Island Caves",
                  "type": "UNESCO Ancient Art",
                  "desc": "UNESCO World Heritage 6th-century rock-cut cave temples dedicated to Lord Shiva on an island in Mumbai Harbor."
            },
            {
                  "name": "Bandra Bandstand & Fort",
                  "type": "Seaside Heritage",
                  "desc": "Historic Portuguese coastal fort ruins overlooking the dramatic Bandra-Worli Sea Link with vibrant sea breezes."
            }
      ],
      "activities": [
            {
                  "title": "South Mumbai Colonial Architectural Walk",
                  "desc": "Stroll through Fort and Kala Ghoda to view Indo-Saracenic, Gothic, and Art Deco landmarks."
            },
            {
                  "title": "Elephanta Island Harbor Ferry Excursion",
                  "desc": "Take a scenic one-hour harbor boat cruise from the Gateway to explore ancient rock-cut cave shrines."
            },
            {
                  "title": "Sunset Promenade at Marine Drive",
                  "desc": "Join thousands of locals along the seaside promenade as the city lights illuminate along the shoreline."
            },
            {
                  "title": "Kala Ghoda Art & Cafe Culture",
                  "desc": "Visit contemporary art galleries, historic synagogues, and traditional Parsi cafes."
            }
      ],
      "foodRecommendations": [
            {
                  "dish": "Mumbai Vada Pav & Pav Bhaji",
                  "desc": "The quintessential street-side spiced potato fritter in buttered pav, and spicy mashed vegetable bhaji."
            },
            {
                  "dish": "Bombay Duck & Koli Seafood Thali",
                  "desc": "Crispy semolina-crusted Bombil fish fry and spicy crab masala prepared in traditional coastal Koli style."
            },
            {
                  "dish": "Parsi Mutton Dhansak & Berry Pulao",
                  "desc": "Slow-cooked spiced lentil and mutton stew served with caramelised berry rice in heritage Irani cafes."
            },
            {
                  "dish": "Misal Pav & Bhel Puri",
                  "desc": "Sprouted pulse curry topped with crispy farsan, and iconic sweet-and-sour puffed rice street snacks."
            },
            {
                  "dish": "Bun Maska & Irani Chai",
                  "desc": "Warm crusty bun slathered with salted butter dunked in sweet, milky cardamom-infused Irani tea."
            }
      ],
      "itinerary": [
            {
                  "day": "Day 1",
                  "title": "Arrival, Gateway of India & Colaba",
                  "desc": "Check in, explore the Gateway of India, walk the heritage lanes of Colaba, and watch sunset at Marine Drive."
            },
            {
                  "day": "Day 2",
                  "title": "Elephanta Caves & Historic Fort",
                  "desc": "Morning ferry to Elephanta Island caves, afternoon architectural tour of CSMT and Kala Ghoda art district."
            },
            {
                  "day": "Day 3",
                  "title": "Bandra Vibes & Coastal Sunset",
                  "desc": "Explore the vibrant murals of Bandra, visit Mount Mary Church, Bandra Fort, and drive across the Sea Link."
            },
            {
                  "day": "Day 4",
                  "title": "Museums, Markets & Departure",
                  "desc": "Visit Chhatrapati Shivaji Maharaj Vastu Sangrahalaya museum, shop at Crawford Market, and depart."
            }
      ],
      "practicalTips": [
            "The suburban local train network and Mumbai Metro are fast for daytime transit; avoid peak commuter rush hours (8:30-10:30 AM and 5:30-8:30 PM).",
            "Metered black-and-yellow taxis (kaali-peeli) in South Mumbai and auto-rickshaws in the suburbs run strictly by official meters.",
            "Monsoon season (June to September) brings intense rainfall and high tidal waves; coastal sea excursions to Elephanta are suspended during heavy weather.",
            "Pack comfortable walking shoes and lightweight cotton clothing for exploring the heritage walking districts."
      ],
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mumbai,+Maharashtra,+India",
      "related": [
            "goa",
            "jaipur"
      ]
},

    bhopal: {
      "id": "bhopal",
      "name": "Bhopal",
      "region": "Central India",
      "category": "Nature",
      "tag": "City of lakes",
      "heroImage": "assets/images/Bhopal.jpg",
      "heroAlt": "Scenic waters of the Upper Lake in Bhopal surrounded by lush green hills",
      "tagline": "Serene historic lakes, ancient rock art, monumental mosques, and lush nature reserves.",
      "overview": "The capital of Madhya Pradesh, Bhopal is an enchanting blend of natural beauty and cultural heritage split between two massive scenic lakes. Known as the City of Lakes, Bhopal features dramatic grand mosques like the Taj-ul-Masajid, tribal heritage museums, tranquil national parks bordering the water, and quick access to the UNESCO World Heritage rock shelters of Bhimbetka and Buddhist stupas of Sanchi.",
      "bestTime": "October to March",
      "bestTimeDetail": "Cool, pleasant winter temperatures (12°C to 26°C), perfect for boat rides on Upper Lake and open-air heritage excursions.",
      "idealDuration": "3 to 4 Days",
      "estimatedBudget": "₹1,800 – ₹4,800 / day",
      "budgetTiers": [
            {
                  "tier": "Budget Traveler",
                  "cost": "₹1,400 – ₹2,400 / day",
                  "details": "Clean central guesthouses, public bus/e-rickshaw transit, street food, and municipal parks."
            },
            {
                  "tier": "Mid-Range Traveler",
                  "cost": "₹3,200 – ₹6,000 / day",
                  "details": "Lake-view heritage hotels or MP Tourism resorts, private taxis, and multi-course dining."
            },
            {
                  "tier": "Luxury Traveler",
                  "cost": "₹10,000+ / day",
                  "details": "Historic royal palaces like Jehan Numa Palace, private guided archaeology tours, and lakefront luxury dining."
            }
      ],
      "famousPlaces": [
            {
                  "name": "Upper Lake (Bhojtal)",
                  "type": "Lakes & Nature",
                  "desc": "Asia's oldest man-made lake built by Raja Bhoj in the 11th century, offering peaceful boat rides and sunset promenades."
            },
            {
                  "name": "Van Vihar National Park",
                  "type": "Wildlife Sanctuary",
                  "desc": "A unique open-air zoological park and protected sanctuary running along the banks of the Upper Lake."
            },
            {
                  "name": "Taj-ul-Masajid",
                  "type": "Heritage / Architecture",
                  "desc": "One of the largest and most grand mosques in Asia, with soaring pink marble minarets and an immense courtyard."
            },
            {
                  "name": "Bharat Bhavan & Tribal Museum",
                  "type": "Culture & Arts",
                  "desc": "A multi-arts complex and world-acclaimed ethnographic museum celebrating indigenous central Indian tribal arts."
            },
            {
                  "name": "Sanchi Stupa & Bhimbetka Caves",
                  "type": "UNESCO Heritage",
                  "desc": "Nearby UNESCO World Heritage ancient Buddhist stupas from the 3rd century BCE and 30,000-year-old Paleolithic rock shelters."
            }
      ],
      "activities": [
            {
                  "title": "Sunset Boating on Bhojtal",
                  "desc": "Cruise the placid waters of the Upper Lake on solar boats or pedal boats as the sun sets over the surrounding hills."
            },
            {
                  "title": "Van Vihar Eco-Bicycle Safari",
                  "desc": "Rent a bicycle to cycle through the peaceful lakeside forest trails observing free-roaming herbivores and birdlife."
            },
            {
                  "title": "Old City Heritage & Bazaars Walk",
                  "desc": "Wander through the historic gates of the old walled city, Chowk bazaar, and traditional silver markets."
            },
            {
                  "title": "Day Trip to Bhimbetka Rock Shelters",
                  "desc": "Explore the prehistoric rock shelters with vivid cave paintings dating back over 10,000 years."
            }
      ],
      "foodRecommendations": [
            {
                  "dish": "Bhopali Gosht Korma",
                  "desc": "Slow-cooked tender mutton prepared with rich ground spices, yoghurt, and poppy seed gravy."
            },
            {
                  "dish": "Poha Jalebi & Sulemani Chai",
                  "desc": "The beloved central Indian breakfast: light spiced flaked rice with crispy sev, warm jalebis, and spiced black tea."
            },
            {
                  "dish": "Bafla & Dal",
                  "desc": "Traditional oven-baked wheat dough balls dipped in fragrant ghee, accompanied by spicy dal and tangy raw mango pickle."
            },
            {
                  "dish": "Bhopali Biryani & Shahi Tukda",
                  "desc": "Fragrant layered rice with saffron and mild whole spices, followed by rich cardamom-scented fried bread pudding."
            },
            {
                  "dish": "Bhutte Ka Kees",
                  "desc": "Spiced grated sweet corn cooked with milk, green chilies, and coconut, a classic Madhya Pradesh delicacy."
            }
      ],
      "itinerary": [
            {
                  "day": "Day 1",
                  "title": "Lakeside Serenity & City Landmarks",
                  "desc": "Arrive, stroll along VIP Road on Upper Lake, visit Van Vihar National Park, and take an evening boat cruise."
            },
            {
                  "day": "Day 2",
                  "title": "Old City Architecture & Grand Mosques",
                  "desc": "Explore Taj-ul-Masajid, Moti Masjid, and Shaukat Mahal; sample street delicacies in Chowk bazaar."
            },
            {
                  "day": "Day 3",
                  "title": "Arts, Heritage & Bhimbetka Excursion",
                  "desc": "Morning visit to the Madhya Pradesh Tribal Museum; afternoon day trip to the prehistoric Bhimbetka rock caves."
            },
            {
                  "day": "Day 4",
                  "title": "Sanchi Buddhist Stupas & Departure",
                  "desc": "Morning excursion to the Great Stupa of Sanchi, return for shopping, and depart."
            }
      ],
      "practicalTips": [
            "Pre-book MP Tourism (MPSTDC) vehicles or licensed taxis for day trips to Bhimbetka (45 km) and Sanchi (48 km).",
            "When visiting Taj-ul-Masajid and other historic mosques, dress conservatively covering head and limbs, and remove footwear before entering.",
            "Van Vihar National Park allows rented bicycles and electric carts; private petrol vehicles are restricted inside the conservation core.",
            "Winter nights can become pleasantly chilly (around 10°C to 12°C); pack a light jacket or shawl for evening lake breezes."
      ],
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bhopal,+Madhya+Pradesh,+India",
      "related": [
            "varanasi",
            "jaipur"
      ]
},

    chandigarh: {
      "id": "chandigarh",
      "name": "Chandigarh",
      "region": "North India",
      "category": "Nature",
      "tag": "The city beautiful",
      "heroImage": "assets/images/chandigarh.jpg",
      "heroAlt": "Sculptural forms and manicured landscapes in Chandigarh's Rock Garden",
      "tagline": "Modernist Corbusier architecture, expansive green gardens, and Himalayan gateway calm.",
      "overview": "Designed by legendary modernist architect Le Corbusier, Chandigarh is India's first planned city and the joint capital of Punjab and Haryana. Renowned as 'The City Beautiful', it features wide tree-lined boulevards, self-contained sectors, expansive rose gardens, the surreal recycled sculptures of Nek Chand's Rock Garden, the tranquil Sukhna Lake, and UNESCO-listed Capitol Complex.",
      "bestTime": "October to March",
      "bestTimeDetail": "Crisp sunny autumn and winter days (10°C to 24°C) with scenic views of the snow-dusted Shivalik foothills on clear days.",
      "idealDuration": "2 to 3 Days",
      "estimatedBudget": "₹2,200 – ₹5,500 / day",
      "budgetTiers": [
            {
                  "tier": "Budget Traveler",
                  "cost": "₹1,600 – ₹2,600 / day",
                  "details": "Sector guesthouses, CTU city buses, cycle rickshaws, and local dhaba dining."
            },
            {
                  "tier": "Mid-Range Traveler",
                  "cost": "₹3,500 – ₹7,000 / day",
                  "details": "Comfortable Sector 17/35 hotels, app cabs, garden cafes, and architectural tours."
            },
            {
                  "tier": "Luxury Traveler",
                  "cost": "₹12,000+ / day",
                  "details": "Upscale 5-star heritage and modern hotels, private car services, and fine Punjabi dining."
            }
      ],
      "famousPlaces": [
            {
                  "name": "Nek Chand's Rock Garden",
                  "type": "Sculpture Park",
                  "desc": "A 40-acre wonderland of maze-like pathways, waterfalls, and thousands of sculptures made entirely from recycled urban waste."
            },
            {
                  "name": "Sukhna Lake",
                  "type": "Lakes & Nature",
                  "desc": "A serene 3-sq-km rain-fed lake at the foot of the Shivalik hills, beloved for morning jogs, boating, and migratory birds."
            },
            {
                  "name": "Zakir Hussain Rose Garden",
                  "type": "Botanical Gardens",
                  "desc": "Asia's largest botanical rose garden sprawling over 30 acres with over 50,000 rose bushes and medicinal plants."
            },
            {
                  "name": "The Capitol Complex",
                  "type": "UNESCO Architecture",
                  "desc": "UNESCO World Heritage modernist complex designed by Le Corbusier featuring the Open Hand Monument, High Court, and Secretariat."
            },
            {
                  "name": "Sector 17 Plaza & Sector 26 Culinary Hub",
                  "type": "Urban Culture",
                  "desc": "The pedestrian shopping heart of the city with open fountains, brand arcades, and traditional Punjabi dhabas."
            }
      ],
      "activities": [
            {
                  "title": "Rock Garden Sculptural Exploration",
                  "desc": "Wander through narrow archways discovering vibrant courtyards built of porcelain shards, bangles, and stone."
            },
            {
                  "title": "Morning Row Boating on Sukhna Lake",
                  "desc": "Rent a rowboat or pedal boat at sunrise while enjoying views of the tranquil Shivalik mountain ranges."
            },
            {
                  "title": "Corbusier Architectural Tour",
                  "desc": "Take a guided architectural pilgrimage through the Capitol Complex and the Le Corbusier Centre."
            },
            {
                  "title": "Punjabi Dhaba Feast",
                  "desc": "Savor authentic rich Punjabi curries, buttery naans, and tall glasses of chilled lassi in Sector 26 or Sector 35."
            }
      ],
      "foodRecommendations": [
            {
                  "dish": "Amritsari Kulcha with Chole",
                  "desc": "Crispy, layered tandoor bread stuffed with spiced potatoes and onions, served with tangy chickpea curry and butter."
            },
            {
                  "dish": "Butter Chicken & Dal Makhani",
                  "desc": "World-famous slow-simmered creamy tomato chicken curry paired with overnight slow-cooked black lentils."
            },
            {
                  "dish": "Sarson Ka Saag & Makki Ki Roti",
                  "desc": "Seasonal winter delicacy of spiced mustard greens served with cornmeal flatbread and fresh white butter."
            },
            {
                  "dish": "Tandoori Chicken & Kebabs",
                  "desc": "Succulent chicken marinated in yoghurt, mustard oil, and ground spices, charred in clay ovens."
            },
            {
                  "dish": "Sweet Punjabi Malai Lassi",
                  "desc": "Thick creamy churned yoghurt drink topped with a generous dollop of clotted cream and pistachios."
            }
      ],
      "itinerary": [
            {
                  "day": "Day 1",
                  "title": "Modernism & Sculptural Marvels",
                  "desc": "Arrive, explore the wonder of Nek Chand's Rock Garden, and spend a relaxing afternoon at Sukhna Lake."
            },
            {
                  "day": "Day 2",
                  "title": "UNESCO Heritage & Botanical Gardens",
                  "desc": "Morning guided tour of Le Corbusier's Capitol Complex; afternoon stroll in the Rose Garden and Sector 17 Plaza."
            },
            {
                  "day": "Day 3",
                  "title": "Art, Gastronomy & Gateway Departure",
                  "desc": "Visit the Government Museum and Art Gallery, enjoy a traditional Punjabi dhaba feast, and depart."
            }
      ],
      "practicalTips": [
            "Chandigarh's numbered sector grid makes navigation simple; sectors have internal shopping and dining hubs.",
            "Visits to the UNESCO Capitol Complex require advance permission or guided tour registration at the Sector 1 Tourist Facilitation Centre.",
            "Sukhna Lake's walking promenade is strictly pedestrian; motorized vehicles are parked in designated perimeter lots.",
            "Chandigarh serves as the ideal springboard for road trips into the Himachal Pradesh hills (Shimla, Kasauli, Manali)."
      ],
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Chandigarh,+India",
      "related": [
            "manali",
            "delhi"
      ]
},

    delhi: {
      "id": "delhi",
      "name": "Delhi",
      "region": "North India",
      "category": "Culture",
      "tag": "Heart of the nation",
      "heroImage": "assets/images/delhi.jpg",
      "heroAlt": "India Gate lit up against the evening sky in New Delhi",
      "tagline": "Mughal grandeur, British imperial avenues, timeless bazaars, and vibrant culinary soul.",
      "overview": "India's historic and political capital, Delhi is a grand tapestry of eight historical cities spanning more than a millennium. From the red sandstone ramparts of the Mughal Red Fort and narrow spice alleys of Chandni Chowk to the stately tree-lined avenues of Lutyens' New Delhi, UNESCO-listed Humayun's Tomb, and soaring Qutub Minar, Delhi offers an unparalleled cultural journey.",
      "bestTime": "October to March",
      "bestTimeDetail": "Pleasant sunny days and brisk evenings (8°C to 25°C), optimal for exploring extensive outdoor monuments and bustling bazaars.",
      "idealDuration": "3 to 4 Days",
      "estimatedBudget": "₹2,500 – ₹6,500 / day",
      "budgetTiers": [
            {
                  "tier": "Budget Traveler",
                  "cost": "₹1,800 – ₹2,800 / day",
                  "details": "Central guesthouses/hostels, Delhi Metro transit, famous street food, and historic free monuments."
            },
            {
                  "tier": "Mid-Range Traveler",
                  "cost": "₹4,200 – ₹7,500 / day",
                  "details": "Comfortable hotels in Connaught Place/South Delhi, app cabs, heritage dining, and guided city walks."
            },
            {
                  "tier": "Luxury Traveler",
                  "cost": "₹14,000+ / day",
                  "details": "Historic 5-star grand hotels, private luxury chauffeured sedans, private heritage historians, and gourmet dining."
            }
      ],
      "famousPlaces": [
            {
                  "name": "Red Fort (Lal Qila)",
                  "type": "UNESCO Mughal Fort",
                  "desc": "UNESCO World Heritage 17th-century Mughal fortress of red sandstone, the historic seat of Mughal power."
            },
            {
                  "name": "India Gate & Kartavya Path",
                  "type": "National Memorial",
                  "desc": "Iconic 42-meter war memorial arch framing the grand ceremonial boulevard of independent India."
            },
            {
                  "name": "Qutub Minar Complex",
                  "type": "UNESCO Ancient Monument",
                  "desc": "UNESCO World Heritage 73-meter fluted minaret built in 1192, featuring the rust-resistant 4th-century Iron Pillar."
            },
            {
                  "name": "Humayun's Tomb",
                  "type": "UNESCO Mughal Garden",
                  "desc": "Magnificent UNESCO World Heritage 16th-century Persian-style garden tomb, the precursor to the Taj Mahal."
            },
            {
                  "name": "Chandni Chowk & Jama Masjid",
                  "type": "Historic Bazaars & Mosque",
                  "desc": "Vibrant historic market lanes bustling with spices, street food, and India's largest congregational mosque."
            }
      ],
      "activities": [
            {
                  "title": "Old Delhi Rickshaw & Heritage Walk",
                  "desc": "Ride an eco-friendly rickshaw through Kinari Bazaar, Paranthe Wali Gali, and the Khari Baoli spice market."
            },
            {
                  "title": "Evening Light Show & Walk at India Gate",
                  "desc": "Stroll the pedestrian gardens of Kartavya Path as India Gate illuminates under evening lights."
            },
            {
                  "title": "Sufi Music at Nizamuddin Dargah",
                  "desc": "Experience the soulful, transcendent qawwali musical traditions on Thursday evenings."
            },
            {
                  "title": "Lodhi Garden Architecture Walk",
                  "desc": "Wander past 15th-century Sayyid and Lodhi dynasty tomb pavilions set in manicured landscaped gardens."
            }
      ],
      "foodRecommendations": [
            {
                  "dish": "Old Delhi Chaat & Dahi Bhalla",
                  "desc": "Crispy fried lentil fritters smothered in sweetened chilled yoghurt, zesty tamarind, and mint chutneys."
            },
            {
                  "dish": "Paranthe Wali Gali Paranthas",
                  "desc": "Crispy pan-fried stuffed flatbreads filled with spiced potato, paneer, cauliflower, or rabri."
            },
            {
                  "dish": "Delhi Butter Chicken & Dal Makhani",
                  "desc": "Originating in Daryaganj, tender tandoori chicken simmered in rich creamy tomato and butter gravy."
            },
            {
                  "dish": "Chole Bhature",
                  "desc": "Golden puffed deep-fried bread served with spicy, tangy Punjabi chickpeas and pickled onions."
            },
            {
                  "dish": "Karim's Mutton Seekh Kebabs & Nihari",
                  "desc": "Historic Old Delhi slow-cooked aromatic meat stew and melt-in-mouth tandoor-grilled kebabs."
            }
      ],
      "itinerary": [
            {
                  "day": "Day 1",
                  "title": "Old Delhi Heritage & Mughal Majesty",
                  "desc": "Visit the Red Fort, Jama Masjid, and take a heritage culinary walk through Chandni Chowk."
            },
            {
                  "day": "Day 2",
                  "title": "Imperial Delhi & UNESCO Masterpieces",
                  "desc": "Explore Humayun's Tomb, drive along Rajpath to India Gate, and stroll Lodhi Gardens."
            },
            {
                  "day": "Day 3",
                  "title": "Ancient Monuments & Crafts",
                  "desc": "Visit Qutub Minar, shop at Dilli Haat open-air artisan market, and explore Connaught Place."
            },
            {
                  "day": "Day 4",
                  "title": "Spiritual Sanctuaries & Departure",
                  "desc": "Visit Akshardham Temple or Lotus Temple, enjoy an iconic lunch, and prepare for departure."
            }
      ],
      "practicalTips": [
            "The Delhi Metro is world-class, clean, air-conditioned, and by far the fastest way to travel across the National Capital Region.",
            "Buy an electronic Metro Tourist Card or smart card to bypass ticket vending queues during peak hours.",
            "Dress modestly with shoulders and knees covered when visiting religious sites like Jama Masjid, Gurudwara Bangla Sahib, and Akshardham.",
            "Winter mornings (December and January) can experience morning fog and chilly temperatures; carry warm layered clothing."
      ],
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=New+Delhi,+India",
      "related": [
            "jaipur",
            "varanasi"
      ]
},

    dehradun: {
      "id": "dehradun",
      "name": "Dehradun",
      "region": "North India",
      "category": "Mountains",
      "tag": "Doon valley retreat",
      "heroImage": "assets/images/Dehradun.jpg",
      "heroAlt": "Lush forested valley and Himalayan mountain foothills around Dehradun",
      "tagline": "Pine-scented Doon valley, colonial institutions, sacred caves, and tranquil monasteries.",
      "overview": "Cradled in the picturesque Doon Valley between the Ganges and Yamuna rivers, Dehradun is the scenic capital of Uttarakhand and gateway to Mussoorie and the Garhwal Himalayas. Celebrated for its temperate climate, colonial-era institutions like the Forest Research Institute, sacred natural caves at Robber's Cave, rejuvenating mineral springs at Sahastradhara, and serene Tibetan monasteries, Dehradun offers a refreshing mountain retreat.",
      "bestTime": "March to June & September to November",
      "bestTimeDetail": "Pleasant sunny weather (15°C to 28°C) with clear mountain views and cool evening breezes from the surrounding Garhwal hills.",
      "idealDuration": "2 to 3 Days",
      "estimatedBudget": "₹1,800 – ₹4,800 / day",
      "budgetTiers": [
            {
                  "tier": "Budget Traveler",
                  "cost": "₹1,400 – ₹2,400 / day",
                  "details": "Homestays or town lodges, Vikram shared autos, bakery snacks, and local Garhwali meals."
            },
            {
                  "tier": "Mid-Range Traveler",
                  "cost": "₹3,200 – ₹6,200 / day",
                  "details": "Lush valley resorts, private rental cars, hillside cafes, and guided forest tours."
            },
            {
                  "tier": "Luxury Traveler",
                  "cost": "₹10,500+ / day",
                  "details": "Heritage estates, private wellness retreats, chauffeured mountain SUVs, and farm-to-table dining."
            }
      ],
      "famousPlaces": [
            {
                  "name": "Forest Research Institute (FRI)",
                  "type": "Colonial Architecture",
                  "desc": "A breathtaking 450-hectare Greco-Roman colonial architectural landmark housing forestry museums and botanical gardens."
            },
            {
                  "name": "Robber's Cave (Guchhupani)",
                  "type": "Natural River Cave",
                  "desc": "A 600-meter-long natural limestone river cave where visitors wade through knee-deep stream waters between towering gorge walls."
            },
            {
                  "name": "Sahastradhara",
                  "type": "Mineral Springs",
                  "desc": "A natural cascade of thousand-fold sulfur springs renowned for therapeutic mineral waters and limestone dripstone caves."
            },
            {
                  "name": "Mindrolling Monastery & Buddha Temple",
                  "type": "Tibetan Heritage",
                  "desc": "One of the largest Tibetan Buddhist learning centers in India with a 107-foot stupa and peaceful gardens."
            },
            {
                  "name": "Tapkeshwar Cave Temple",
                  "type": "Ancient Sacred Cave",
                  "desc": "An ancient cave temple dedicated to Lord Shiva set along the Asan riverbed where natural spring water droplets continually fall onto the lingam."
            }
      ],
      "activities": [
            {
                  "title": "Wading Through Robber's Cave",
                  "desc": "Walk inside the narrow limestone river canyon accompanied by cool subterranean streams and natural waterfalls."
            },
            {
                  "title": "Heritage Cycling at FRI",
                  "desc": "Cycle along the quiet, tree-shaded colonial campus boulevards surrounded by towering eucalyptus and pine trees."
            },
            {
                  "title": "Mindrolling Meditation & Stupa Walk",
                  "desc": "Spin traditional prayer wheels and admire colorful Tibetan Buddhist murals in the quiet Clement Town gardens."
            },
            {
                  "title": "Famous Dehradun Bakery Tour",
                  "desc": "Sample fresh rusk, plum cakes, and ginger cookies at legendary century-old bakeries on Rajpur Road."
            }
      ],
      "foodRecommendations": [
            {
                  "dish": "Garhwali Kafuli & Phaanu",
                  "desc": "Nutritious traditional mountain curries made with slow-cooked spinach and local lentils, served with steamed rice."
            },
            {
                  "dish": "Tibetan Momos & Thukpa",
                  "desc": "Steaming handcrafted dumplings and comforting noodle soups served in the Tibetan settlement cafes."
            },
            {
                  "dish": "Aloo Ke Gutke & Bhang Ki Chutney",
                  "desc": "Spiced stir-fried mountain potatoes paired with an aromatic roasted hemp seed chutney."
            },
            {
                  "dish": "Bal Mithai & Singori",
                  "desc": "Famous Kumaoni and Garhwali sweets coated in sugar globules and wrapped in fragrant malu leaves."
            },
            {
                  "dish": "Dehradun Bakery Rusks & Pastries",
                  "desc": "Iconic fresh milk rusks, cream rolls, and walnut tarts from heritage bakeries along Paltan Bazaar."
            }
      ],
      "itinerary": [
            {
                  "day": "Day 1",
                  "title": "Colonial Architecture & Sacred Caves",
                  "desc": "Arrive, tour the stately Forest Research Institute, and visit the serene cave shrine of Tapkeshwar."
            },
            {
                  "day": "Day 2",
                  "title": "Canyon Adventure & Monastery Calm",
                  "desc": "Wade through the cooling waters of Robber's Cave, followed by an afternoon at Mindrolling Monastery."
            },
            {
                  "day": "Day 3",
                  "title": "Mineral Springs, Bakeries & Departure",
                  "desc": "Visit Sahastradhara cascades, browse local bakeries on Rajpur Road, and depart."
            }
      ],
      "practicalTips": [
            "Carry waterproof footwear or water sandals when visiting Robber's Cave (Guchhupani) as you will be wading through river waters.",
            "Shared blue three-wheelers (Vikrams) ply designated fixed routes across the city and are very economical.",
            "The Forest Research Institute is open to tourists on weekdays and Saturdays; carry government photo ID for campus entry.",
            "Monsoon months (July and August) bring heavy Himalayan downpours; check local weather advisories before cave excursions."
      ],
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dehradun,+Uttarakhand,+India",
      "related": [
            "manali",
            "chandigarh"
      ]
}
  };

  // Aliases for friendly parameter handling
  const ALIASES = {
    varanashi: "varanasi",
    banaras: "varanasi",
    kashi: "varanasi",
    darjiling: "darjeeling"
  };

  // ---------------------------------------------------------------------------
  // Helper: Safe Element Creator
  // ---------------------------------------------------------------------------
  function createSafeElement(tag, className, textContent) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (textContent !== undefined && textContent !== null) {
      el.textContent = textContent;
    }
    return el;
  }

  // ---------------------------------------------------------------------------
  // Header Mobile Menu & Footer Year
  // ---------------------------------------------------------------------------
  const currentYear = document.querySelector("#current-year");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-navigation");

  function closeMenu() {
    if (!menuToggle || !navigation) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      menuToggle.setAttribute(
        "aria-label",
        isExpanded ? "Open navigation menu" : "Close navigation menu"
      );
      navigation.classList.toggle("is-open", !isExpanded);
      document.body.classList.toggle("menu-open", !isExpanded);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    document.addEventListener("click", (e) => {
      if (!navigation.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) closeMenu();
    });
  }

  // ---------------------------------------------------------------------------
  // Render Destination Content
  // ---------------------------------------------------------------------------
  const loadingView = document.querySelector("#destination-loading");
  const errorView = document.querySelector("#destination-error");
  const contentView = document.querySelector("#destination-content");

  function showLoading() {
    if (loadingView) {
      loadingView.hidden = false;
      loadingView.style.display = "flex";
    }
    if (errorView) {
      errorView.hidden = true;
      errorView.style.display = "none";
    }
    if (contentView) {
      contentView.hidden = true;
      contentView.style.display = "none";
    }
  }

  function showStateError(heading, message, isMissing = false) {
    if (loadingView) {
      loadingView.hidden = true;
      loadingView.style.display = "none";
    }
    if (contentView) {
      contentView.hidden = true;
      contentView.style.display = "none";
    }
    if (errorView) {
      errorView.hidden = false;
      errorView.style.display = "flex";

      const titleEl = document.querySelector("#state-title");
      const messageEl = document.querySelector("#state-message");
      const eyebrowEl = document.querySelector("#state-eyebrow");

      if (eyebrowEl) {
        eyebrowEl.textContent = isMissing
          ? "No Destination Selected"
          : "Destination Not Found";
      }

      if (titleEl) {
        titleEl.textContent = heading;
      }

      if (messageEl) {
        messageEl.textContent = message;
      }

      const grid = document.querySelector("#available-destinations-grid");
      if (grid) {
        grid.textContent = ""; // Clear existing safely

        Object.keys(DESTINATIONS).forEach((key) => {
          const dest = DESTINATIONS[key];
          const link = createSafeElement(
            "a",
            "available-card-link",
            dest.name
          );
          link.href = `destination.html?place=${encodeURIComponent(dest.id)}`;

          const arrow = createSafeElement("span", "link-arrow", "↗");
          arrow.setAttribute("aria-hidden", "true");
          link.appendChild(arrow);

          grid.appendChild(link);
        });
      }
    }
  }

  function renderDestination(data) {
    // 1. Update Title and Breadcrumb
    const pageTitle = document.querySelector("#page-title");
    if (pageTitle) {
      pageTitle.textContent = `${data.name} Travel Guide — WanderIndia`;
    }

    const breadcrumbCurrent = document.querySelector("#breadcrumb-current");
    if (breadcrumbCurrent) {
      breadcrumbCurrent.textContent = data.name;
    }

    // 2. Hero Elements
    const heroImage = document.querySelector("#detail-hero-image");
    if (heroImage) {
      heroImage.src = data.heroImage;
      heroImage.alt = data.heroAlt || `${data.name} landscape photo`;
    }

    const categoryBadge = document.querySelector("#detail-category-badge");
    if (categoryBadge) {
      categoryBadge.textContent = data.category;
    }

    const regionBadge = document.querySelector("#detail-region-badge");
    if (regionBadge) {
      regionBadge.textContent = data.region;
    }

    const detailTitle = document.querySelector("#detail-title");
    if (detailTitle) {
      detailTitle.textContent = data.name;
    }

    const detailTagline = document.querySelector("#detail-tagline");
    if (detailTagline) {
      detailTagline.textContent = data.tagline;
    }

    // 3. Quick Facts Bar
    const quickBestTime = document.querySelector("#quick-best-time");
    if (quickBestTime) {
      quickBestTime.textContent = data.bestTime;
    }

    const quickDuration = document.querySelector("#quick-duration");
    if (quickDuration) {
      quickDuration.textContent = data.idealDuration;
    }

    const quickBudget = document.querySelector("#quick-budget");
    if (quickBudget) {
      quickBudget.textContent = data.estimatedBudget;
    }

    const quickMapButton = document.querySelector("#quick-map-button");
    if (quickMapButton) {
      quickMapButton.href = data.mapUrl;
    }

    // 4. Overview Section & Sidebar
    const overviewDesc = document.querySelector("#overview-description");
    if (overviewDesc) {
      overviewDesc.textContent = data.overview;
    }

    const sidebarRegion = document.querySelector("#sidebar-region");
    if (sidebarRegion) {
      sidebarRegion.textContent = data.region;
    }

    const sidebarCategory = document.querySelector("#sidebar-category");
    if (sidebarCategory) {
      sidebarCategory.textContent = data.category;
    }

    const sidebarWeather = document.querySelector("#sidebar-weather");
    if (sidebarWeather) {
      sidebarWeather.textContent = data.bestTimeDetail;
    }

    const sidebarDirections = document.querySelector(
      "#sidebar-directions-link"
    );
    if (sidebarDirections) {
      sidebarDirections.href = data.mapUrl;
    }

    const sidebarSafety = document.querySelector(
      "#sidebar-safety-link"
    );
    if (sidebarSafety) {
      sidebarSafety.href = `safety.html?place=${encodeURIComponent(data.id)}`;
    }

    const sidebarPlanner = document.querySelector(
      "#sidebar-planner-link"
    );
    if (sidebarPlanner) {
      sidebarPlanner.href = `planner.html?place=${encodeURIComponent(data.id)}`;
    }

    // 5. Famous Places
    const placesGrid = document.querySelector("#famous-places-grid");
    if (placesGrid) {
      placesGrid.textContent = "";
      data.famousPlaces.forEach((place) => {
        const card = createSafeElement("article", "place-card");

        const tag = createSafeElement("span", "card-top-tag", place.type);
        const heading = createSafeElement("h3", "", place.name);
        const desc = createSafeElement("p", "", place.desc);

        card.appendChild(tag);
        card.appendChild(heading);
        card.appendChild(desc);
        placesGrid.appendChild(card);
      });
    }

    // 6. Activities & Experiences
    const activitiesGrid = document.querySelector("#activities-grid");
    if (activitiesGrid) {
      activitiesGrid.textContent = "";
      data.activities.forEach((act) => {
        const card = createSafeElement("article", "activity-card");

        const heading = createSafeElement("h3", "", act.title);
        const desc = createSafeElement("p", "", act.desc);

        card.appendChild(heading);
        card.appendChild(desc);
        activitiesGrid.appendChild(card);
      });
    }

    // 7. Itinerary Timeline
    const itineraryTimeline = document.querySelector("#itinerary-timeline");
    if (itineraryTimeline) {
      itineraryTimeline.textContent = "";
      data.itinerary.forEach((item) => {
        const row = createSafeElement("div", "itinerary-day");

        const badge = createSafeElement("div", "day-badge");
        const dayNum = createSafeElement(
          "span",
          "day-num",
          item.day.replace(/[^0-9]/g, "") || item.day
        );
        const dayLabel = createSafeElement("span", "day-label", "Day");
        badge.appendChild(dayNum);
        badge.appendChild(dayLabel);

        const content = createSafeElement("div", "itinerary-content");
        const h3 = createSafeElement("h3", "", item.title);
        const p = createSafeElement("p", "", item.desc);
        content.appendChild(h3);
        content.appendChild(p);

        row.appendChild(badge);
        row.appendChild(content);
        itineraryTimeline.appendChild(row);
      });
    }

    // 8. Food Recommendations
    const foodGrid = document.querySelector("#food-grid");
    if (foodGrid) {
      foodGrid.textContent = "";
      data.foodRecommendations.forEach((food) => {
        const card = createSafeElement("article", "food-card");

        const tag = createSafeElement(
          "span",
          "card-top-tag",
          "Regional Flavor"
        );
        const h3 = createSafeElement("h3", "", food.dish);
        const p = createSafeElement("p", "", food.desc);

        card.appendChild(tag);
        card.appendChild(h3);
        card.appendChild(p);
        foodGrid.appendChild(card);
      });
    }

    // 9. Budget Tiers
    const budgetTiers = document.querySelector("#budget-tiers");
    if (budgetTiers) {
      budgetTiers.textContent = "";
      data.budgetTiers.forEach((tier) => {
        const row = createSafeElement("div", "budget-tier-row");

        const headline = createSafeElement("div", "tier-headline");
        const name = createSafeElement("span", "tier-name", tier.tier);
        const cost = createSafeElement("span", "tier-cost", tier.cost);
        headline.appendChild(name);
        headline.appendChild(cost);

        const details = createSafeElement("p", "tier-details", tier.details);

        row.appendChild(headline);
        row.appendChild(details);
        budgetTiers.appendChild(row);
      });
    }

    // 10. Practical Travel Tips
    const tipsList = document.querySelector("#tips-list");
    if (tipsList) {
      tipsList.textContent = "";
      data.practicalTips.forEach((tipText, index) => {
        const li = createSafeElement("li", "tip-item");

        const bullet = createSafeElement(
          "span",
          "tip-bullet",
          String(index + 1)
        );
        bullet.setAttribute("aria-hidden", "true");

        const text = createSafeElement("span", "tip-text", tipText);

        li.appendChild(bullet);
        li.appendChild(text);
        tipsList.appendChild(li);
      });
    }

    // 11. Travel Discovery: Wishlist, Recommendations & Recently Viewed
    // Record into Recently Viewed
    if (window.WANDERINDIA_DISCOVERY) {
      window.WANDERINDIA_DISCOVERY.addRecentDestination(data.id);
    }

    // Detail Page Wishlist Toggle
    const detailWishlistBtn = document.querySelector("#detail-wishlist-btn");
    if (detailWishlistBtn && window.WANDERINDIA_DISCOVERY) {
      detailWishlistBtn.setAttribute("data-slug", data.id);
      const isSaved = window.WANDERINDIA_DISCOVERY.isInWishlist(data.id);
      detailWishlistBtn.classList.toggle("is-active", isSaved);
      detailWishlistBtn.setAttribute("aria-pressed", String(isSaved));
      detailWishlistBtn.setAttribute(
        "aria-label",
        isSaved ? `Remove ${data.name} from wishlist` : `Add ${data.name} to wishlist`
      );
      const textSpan = detailWishlistBtn.querySelector("#detail-wishlist-text");
      if (textSpan) textSpan.textContent = isSaved ? "Saved in Wishlist" : "Save to Wishlist";

      detailWishlistBtn.onclick = (e) => {
        e.preventDefault();
        const res = window.WANDERINDIA_DISCOVERY.toggleWishlist(data.id);
        detailWishlistBtn.classList.toggle("is-active", res.isSaved);
        detailWishlistBtn.setAttribute("aria-pressed", String(res.isSaved));
        detailWishlistBtn.setAttribute(
          "aria-label",
          res.isSaved ? `Remove ${data.name} from wishlist` : `Add ${data.name} to wishlist`
        );
        if (textSpan) textSpan.textContent = res.isSaved ? "Saved in Wishlist" : "Save to Wishlist";
      };
    }

    // Section Title
    const relatedDestName = document.querySelector("#related-dest-name");
    if (relatedDestName) {
      relatedDestName.textContent = data.name;
    }

    // Related & Recommended Destinations Grid
    const relatedGrid = document.querySelector("#related-destinations-grid");
    function renderRelatedDestinations(activeInterest = "all") {
      if (!relatedGrid) return;
      relatedGrid.textContent = "";

      let list = [];
      if (window.WANDERINDIA_DISCOVERY) {
        list = window.WANDERINDIA_DISCOVERY.getRecommendations(data.id, activeInterest, 3);
      } else if (Array.isArray(data.related)) {
        list = data.related.map((id) => ({
          dest: DESTINATIONS[id],
          matchReason: "Curated partner"
        })).filter(item => !!item.dest);
      }

      list.forEach((rec) => {
        const relData = rec.dest;
        if (!relData || relData.id === data.id) return;

        const card = createSafeElement("article", "destination-card");
        card.setAttribute("data-slug", relData.id);
        if (card.dataset) card.dataset.slug = relData.id;
        card.style.cursor = "pointer";

        // Image Wrap
        const imgWrap = createSafeElement("div", "destination-image-wrap");
        const img = createSafeElement("img", "destination-image");
        img.src = relData.heroImage;
        img.alt = relData.heroAlt || relData.name;
        img.loading = "lazy";

        const tag = createSafeElement("span", "destination-tag", relData.tag);
        imgWrap.appendChild(img);
        imgWrap.appendChild(tag);

        // Match reason badge
        if (rec.matchReason) {
          const badge = createSafeElement("span", "rec-match-badge", rec.matchReason);
          imgWrap.appendChild(badge);
        }

        // Heart Wishlist Button
        if (window.WANDERINDIA_DISCOVERY) {
          const isItemSaved = window.WANDERINDIA_DISCOVERY.isInWishlist(relData.id);
          const heartBtn = createSafeElement("button", isItemSaved ? "wishlist-btn is-active" : "wishlist-btn");
          heartBtn.type = "button";
          heartBtn.setAttribute("data-slug", relData.id);
          heartBtn.setAttribute(
            "aria-label",
            isItemSaved ? `Remove ${relData.name} from wishlist` : `Add ${relData.name} to wishlist`
          );
          heartBtn.setAttribute("aria-pressed", String(isItemSaved));
          heartBtn.innerHTML = window.WANDERINDIA_DISCOVERY.createHeartSvg();
          heartBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.WANDERINDIA_DISCOVERY.toggleWishlist(relData.id);
          });
          imgWrap.appendChild(heartBtn);
        }

        // Card Content
        const content = createSafeElement("div", "destination-card-content");
        const textWrap = createSafeElement("div");
        const regionP = createSafeElement(
          "p",
          "destination-region",
          relData.region
        );

        const h3 = createSafeElement("h3");
        const titleLink = createSafeElement(
          "a",
          "destination-title-link",
          relData.name
        );
        titleLink.href = `destination.html?place=${encodeURIComponent(relData.id)}`;
        h3.appendChild(titleLink);

        textWrap.appendChild(regionP);
        textWrap.appendChild(h3);

        const arrowLink = createSafeElement(
          "a",
          "destination-arrow"
        );
        arrowLink.href = `destination.html?place=${encodeURIComponent(relData.id)}`;
        arrowLink.setAttribute(
          "aria-label",
          `Explore ${relData.name} details`
        );
        const arrowSpan = createSafeElement("span", "", "↗");
        arrowSpan.setAttribute("aria-hidden", "true");
        arrowLink.appendChild(arrowSpan);

        content.appendChild(textWrap);
        content.appendChild(arrowLink);

        card.appendChild(imgWrap);
        card.appendChild(content);

        card.addEventListener("click", (e) => {
          if (e.target.closest("a") || e.target.closest("button")) return;
          window.location.href = `destination.html?place=${encodeURIComponent(relData.id)}`;
        });

        relatedGrid.appendChild(card);
      });
    }

    // Recommendation Interest Filters
    const recFilters = document.querySelectorAll("#recommendation-filters .rec-filter-btn");
    recFilters.forEach((btn) => {
      btn.addEventListener("click", () => {
        recFilters.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const interest = btn.getAttribute("data-interest") || "all";
        renderRelatedDestinations(interest);
      });
    });

    renderRelatedDestinations("all");

    // Recently Viewed Journeys
    function renderRecents() {
      const recentsContainer = document.querySelector("#recently-viewed-container");
      const recentsGrid = document.querySelector("#recently-viewed-grid");
      const clearRecentsBtn = document.querySelector("#btn-clear-recents");

      if (!window.WANDERINDIA_DISCOVERY || !recentsContainer || !recentsGrid) return;
      const recents = window.WANDERINDIA_DISCOVERY.getRecentDestinations(data.id);

      if (!recents || recents.length === 0) {
        recentsContainer.hidden = true;
        recentsGrid.innerHTML = "";
      } else {
        recentsContainer.hidden = false;
        recentsGrid.innerHTML = recents.map((r) => `
          <a class="recent-dest-card" href="destination.html?place=${encodeURIComponent(r.id)}">
            <img class="recent-card-img" src="${r.heroImage}" alt="${r.name}" loading="lazy">
            <div class="recent-card-info">
              <span class="recent-card-name">${r.name}</span>
              <span class="recent-card-region">${r.region}</span>
            </div>
          </a>
        `).join("");

        if (clearRecentsBtn) {
          clearRecentsBtn.onclick = () => {
            window.WANDERINDIA_DISCOVERY.clearRecentDestinations();
            recentsContainer.hidden = true;
            recentsGrid.innerHTML = "";
          };
        }
      }
    }
    renderRecents();

    if (window.WANDERINDIA_DISCOVERY) {
      window.WANDERINDIA_DISCOVERY.syncAllHeartButtons();
    }

    // Reveal Content
    if (loadingView) {
      loadingView.hidden = true;
      loadingView.style.display = "none";
    }
    if (errorView) {
      errorView.hidden = true;
      errorView.style.display = "none";
    }
    if (contentView) {
      contentView.hidden = false;
      contentView.style.display = "block";
    }
  }

  // ---------------------------------------------------------------------------
  // URL Parameter Resolution
  // ---------------------------------------------------------------------------
  showLoading();

  const urlParams = new URLSearchParams(window.location.search);
  const rawPlace = urlParams.get("place");

  if (!rawPlace || !rawPlace.trim()) {
    showStateError(
      "Choose a Destination",
      "No destination was specified in the page address. Please select one of our curated Indian destinations below:",
      true
    );
    return;
  }

  const cleanSlug = rawPlace.trim().toLowerCase();
  const resolvedKey = ALIASES[cleanSlug] || cleanSlug;
  const destinationData = DESTINATIONS[resolvedKey];

  if (!destinationData) {
    showStateError(
      `"${rawPlace.trim()}" Not Found`,
      `We could not find a destination guide matching "${rawPlace.trim()}". Please explore one of our featured destinations below:`,
      false
    );
    return;
  }

  try {
    renderDestination(destinationData);
  } catch (err) {
    console.error("Error rendering destination:", err);
    showStateError(
      "Unable to Load Destination",
      "An unexpected error occurred while displaying this destination. Please explore one of our featured destinations below:",
      false
    );
  }
});
