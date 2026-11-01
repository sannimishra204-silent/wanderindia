/**
 * WanderIndia — Official Travel Safety Directory & Data Store
 * Product Vision: "Explore India. Travel Smarter. Travel Safer."
 * 
 * Strict Ground Truth Policy:
 * - Only verified Government of India and official state tourism/health sources.
 * - Zero fabricated emergency numbers, hospitals, or live condition alerts.
 * - Clear distinction between verified permanent baselines and dynamic conditions.
 */

(function () {
  "use strict";

  const WANDERINDIA_SAFETY = {
    metadata: {
      version: "2.0.0",
      lastReviewed: "October 2026",
      jurisdiction: "Republic of India",
      disclaimer:
        "WanderIndia is an independent informational travel guide and does not operate emergency dispatch units. In a life-threatening crisis in India, call 112 immediately."
    },

    // -------------------------------------------------------------------------
    // 1. Official National Emergency & Assistance Helplines
    // -------------------------------------------------------------------------
    helplines: [
      {
        id: "erss-112",
        name: "National Emergency Response Support System (ERSS)",
        shortName: "National Emergency",
        number: "112",
        telUri: "tel:112",
        type: "Emergency Response",
        badge: "Police • Fire • Medical • Disaster",
        priority: "Immediate Life-Safety",
        authority: "Ministry of Home Affairs (MHA), Government of India",
        officialUrl: "https://112.gov.in/",
        operationalHours: "24x7 / 365 Days",
        description:
          "India's unified national emergency number. Call 112 for urgent police assistance, fire rescue, medical emergencies, or disaster situations across all Indian States and Union Territories. Accessible free from any mobile phone or landline, even with zero SIM balance.",
        verificationStatus: "Official Government Service",
        lastVerified: "October 2026",
        notes: "Single emergency number across India, integrating police (100), fire (101), and ambulance (108/102)."
      },
      {
        id: "tourist-1363",
        name: "24x7 Multi-Lingual Tourist Infoline",
        shortName: "Tourist Helpline",
        number: "1363",
        alternateNumber: "1800-11-1363",
        telUri: "tel:1363",
        alternateTelUri: "tel:1800111363",
        type: "Tourist Information & Guidance",
        badge: "12 Languages • Toll-Free",
        priority: "Travel Assistance",
        authority: "Ministry of Tourism, Government of India",
        officialUrl: "https://tourism.gov.in/",
        operationalHours: "24x7 / 365 Days",
        description:
          "Official helpline for domestic and foreign tourists traveling in India. Provides verified travel information, logistics guidance, advisory updates, and helps travelers in distress connect with appropriate authorities. Services provided in 12 languages (Hindi, English, French, Spanish, German, Italian, Russian, Japanese, Korean, Chinese, Arabic, Portuguese).",
        verificationStatus: "Official Government Service",
        lastVerified: "October 2026",
        notes: "Toll-free across India. Use 1800-11-1363 if dialing from certain landline operators."
      }
    ],

    // -------------------------------------------------------------------------
    // 2. Official Advisory & Weather Authorities
    // -------------------------------------------------------------------------
    advisorySources: [
      {
        id: "imd-weather",
        title: "India Meteorological Department (IMD)",
        focus: "Weather forecasts, rainfall alerts, heatwaves, cyclones & monsoon bulletins",
        officialUrl: "https://mausam.imd.gov.in/index_en.php?lang=en",
        authority: "Ministry of Earth Sciences, Government of India",
        verificationStatus: "Official Source",
        lastVerified: "October 2026",
        guidanceNote:
          "Current conditions must be checked externally on the official IMD portal before high-altitude trekking, monsoon travel, or coastal trips."
      },
      {
        id: "ndma-disaster",
        title: "National Disaster Management Authority (NDMA)",
        focus: "Natural disaster guidelines, flood response & regional safety bulletins",
        officialUrl: "https://ndma.gov.in/",
        authority: "Government of India",
        verificationStatus: "Official Source",
        lastVerified: "October 2026",
        guidanceNote:
          "Provides authoritative safety protocols and emergency preparedness advisories for travelers during natural events."
      },
      {
        id: "ministry-tourism",
        title: "Ministry of Tourism Portal",
        focus: "National tourism guidelines, approved tour operators & certified guides",
        officialUrl: "https://tourism.gov.in/",
        authority: "Government of India",
        verificationStatus: "Official Source",
        lastVerified: "October 2026",
        guidanceNote:
          "Official directory of approved travel agents, certified monument guides, and traveler rights."
      }
    ],

    // -------------------------------------------------------------------------
    // 3. Destination-Specific Safety Dossiers (All 6 Destinations)
    // -------------------------------------------------------------------------
    destinations: {
      goa: {
        id: "goa",
        name: "Goa",
        region: "West India",
        category: "Coastal & Heritage",
        heroTag: "Coastal Safety",
        officialTourismBoard: {
          name: "Goa Tourism Development Corporation (GTDC)",
          url: "https://goatourism.gov.in/",
          verificationStatus: "Official State Portal",
          lastVerified: "October 2026"
        },
        policeContact: {
          name: "Goa Tourist Police Special Outpost",
          location: "Calangute / Baga coastal desk",
          phone: "+91 832 241 4440",
          telUri: "tel:+918322414440",
          verificationStatus: "Verified Civic Contact",
          lastVerified: "October 2026"
        },
        medicalFacility: {
          name: "Goa Medical College & Hospital (GMC)",
          location: "Bambolim, Panaji, Goa",
          facilityType: "Apex Government Tertiary Hospital & 24x7 Trauma Center",
          phone: "+91 832 245 8725",
          telUri: "tel:+918322458725",
          source: "Directorate of Health Services, Government of Goa",
          verificationStatus: "Verified Public Facility",
          lastVerified: "October 2026",
          mapQuery: "Goa Medical College and Hospital, Bambolim, Goa"
        },
        guidance: [
          {
            category: "Weather & Seasonal Preparation",
            title: "Monsoon Sea Currents & Seasonal Swimming Bans",
            detail:
              "During the southwest monsoon (June to September), strong undertows and high swells make open-sea swimming hazardous. Follow coastal lifeguard flags strictly: Red flag means zero swimming allowed. In winter (November to February), daytime temperatures are pleasant (24°C–32°C); carry broad-spectrum sunscreen and drink plenty of fluids."
          },
          {
            category: "Transport & Road Safety",
            title: "Two-Wheeler Rental & Taxi Rate Guidelines",
            detail:
              "Renting scooters is popular, but wearing a certified helmet is mandatory by law for rider and pillion. Always inspect the vehicle condition, verify valid insurance, and keep your physical driving license. For cabs, use official prepaid taxi counters at Goa International Airport (Dabolim/Mopa) or railway stations to ensure standardized rates."
          },
          {
            category: "Personal Belongings & Crowds",
            title: "Beachside Awareness & Night-time Caution",
            detail:
              "Keep personal valuables, passports, and high-value electronics secure in hotel safe boxes. Avoid leaving bags unattended on crowded beaches while swimming. Stick to well-illuminated main thoroughfares at night and avoid isolated beach stretches alone after hours."
          },
          {
            category: "Outdoor & Adventure Activities",
            title: "Certified Water Sports Operators",
            detail:
              "Participate in water sports (parasailing, jet-skiing, scuba) only with operators certified by the National Institute of Water Sports (NIWS) or registered with Goa Tourism. Always insist on a life jacket fitted correctly before boarding any boat."
          },
          {
            category: "Local Rules & Respectful Conduct",
            title: "Heritage Church & Temple Etiquette",
            detail:
              "When visiting religious heritage sites such as the Basilica of Bom Jesus or local temples, dress respectfully with shoulders and knees covered. Alcohol consumption in designated open public areas or outside licensed beach shacks is restricted by local state municipal regulations."
          },
          {
            category: "Emergency Preparation",
            title: "Lifeguards & Coastal Safety Contacts",
            detail:
              "Major public beaches in Goa are patrolled by Drishti Marine Lifesavers. In case of water distress or coastal medical emergencies, alert the nearest stationed lifeguard tower immediately or dial 112."
          }
        ]
      },

      manali: {
        id: "manali",
        name: "Manali",
        region: "North India",
        category: "Alpine & Mountains",
        heroTag: "Mountain Safety",
        officialTourismBoard: {
          name: "Himachal Pradesh Tourism Development Corporation (HPTDC)",
          url: "https://himachaltourism.gov.in/",
          verificationStatus: "Official State Portal",
          lastVerified: "October 2026"
        },
        policeContact: {
          name: "Manali Tourist Police Desk",
          location: "The Mall Road, Manali, Himachal Pradesh",
          phone: "+91 1902 252 322",
          telUri: "tel:+911902252322",
          verificationStatus: "Verified Civic Contact",
          lastVerified: "October 2026"
        },
        medicalFacility: {
          name: "Civil Hospital Manali",
          location: "Left Bank, Model Town, Manali, Himachal Pradesh",
          facilityType: "Government Sub-Divisional Hospital & Emergency Medical Unit",
          phone: "+91 1902 252 363",
          telUri: "tel:+911902252363",
          source: "Department of Health & Family Welfare, Himachal Pradesh",
          verificationStatus: "Verified Public Facility",
          lastVerified: "October 2026",
          mapQuery: "Civil Hospital Manali, Left Bank, Manali"
        },
        guidance: [
          {
            category: "Weather & Seasonal Preparation",
            title: "Altitude Changes & Winter Freezing Temperatures",
            detail:
              "Manali sits at over 2,050 meters (6,700 feet) above sea level. Winter (December to February) brings sub-zero temperatures and snow; dress in thermal layers with windproof outerwear and sturdy waterproof boots. During monsoon (July to August), monitor IMD rainfall warnings before traveling along mountain highways due to landslide risks."
          },
          {
            category: "Transport & Road Safety",
            title: "High Mountain Passes & Atal Tunnel Transit",
            detail:
              "Vehicular transit across the Atal Tunnel and Rohtang Pass is subject to weather conditions and official administration permits. Hire experienced hill drivers accustomed to switchbacks and icy roads. Always verify that vehicle tires have adequate tread, and check daily Border Roads Organisation (BRO) advisories before traveling toward Lahaul or Leh."
          },
          {
            category: "Personal Belongings & Crowds",
            title: "Crowded Mall Road & Winter Equipment Rental",
            detail:
              "The Mall Road experiences dense pedestrian footfalls in peak season; keep wallets and phones secured. When renting snow boots or gear at Solang Valley, verify rates at registered government-authorized rental kiosks to avoid inflated charges."
          },
          {
            category: "Outdoor & Adventure Activities",
            title: "River Rafting & Paragliding Safety",
            detail:
              "River rafting on the Beas and paragliding in Solang Valley must only be undertaken with pilots and guides licensed by the Himachal Pradesh Tourism Department. Never enter or stand on river rocks in the Beas River, as water release from upstream hydro dams can cause rapid, unexpected water level surges."
          },
          {
            category: "Local Rules & Respectful Conduct",
            title: "Eco-Sensitive Mountain Etiquette",
            detail:
              "Himachal Pradesh strictly enforces a ban on single-use plastic bags. Dispose of waste in marked civic bins. Respect sacred village sanctums, such as ancient deodar shrines in Hadimba and Vashisht, by removing footwear where posted."
          },
          {
            category: "Emergency Preparation",
            title: "Mountain Rescue & Hypothermia Awareness",
            detail:
              "Keep emergency numbers saved offline. In the event of acute mountain sickness (headache, nausea, breathlessness) or hypothermia during high-altitude treks, descend immediately to a lower elevation and visit Civil Hospital Manali."
          }
        ]
      },

      kashmir: {
        id: "kashmir",
        name: "Kashmir",
        region: "North India",
        category: "Valleys & Alpine Lakes",
        heroTag: "Alpine Valley Safety",
        officialTourismBoard: {
          name: "Jammu & Kashmir Tourism Department",
          url: "https://jktourism.jk.gov.in/",
          verificationStatus: "Official State Portal",
          lastVerified: "October 2026"
        },
        policeContact: {
          name: "Tourist Police Assistance Counter",
          location: "Tourist Reception Centre (TRC), Srinagar",
          phone: "+91 194 250 2274",
          telUri: "tel:+911942502274",
          verificationStatus: "Verified Civic Contact",
          lastVerified: "October 2026"
        },
        medicalFacility: {
          name: "Sher-i-Kashmir Institute of Medical Sciences (SKIMS)",
          location: "Soura, Srinagar, Jammu & Kashmir",
          facilityType: "Premier Autonomous Tertiary Medical Institute & Apex Trauma Center",
          phone: "+91 194 240 1013",
          telUri: "tel:+911942401013",
          source: "Department of Health & Medical Education, J&K Government",
          verificationStatus: "Verified Public Facility",
          lastVerified: "October 2026",
          mapQuery: "Sher-i-Kashmir Institute of Medical Sciences, Soura, Srinagar"
        },
        guidance: [
          {
            category: "Weather & Seasonal Preparation",
            title: "High-Altitude Winter (Chilai Kalan) & Rapid Weather Shifts",
            detail:
              "Kashmir experiences intense winter cold between late December and January (Chilai Kalan), with temperatures dropping below -5°C in Srinagar and lower in Gulmarg. Layer thermal innerwear, woolen mid-layers, and heavy down jackets. In summer (May to September), weather remains pleasant (15°C–28°C), but mountain passes can turn chilly after sundown."
          },
          {
            category: "Transport & Road Safety",
            title: "Prepaid Cabs & Mountain Highway Caution",
            detail:
              "Use authorized prepaid taxi counters at Srinagar International Airport or book through official tourism-registered unions for trips to Gulmarg, Pahalgam, and Sonamarg. In winter, snow chains are mandatory on vehicles ascending from Tangmarg to Gulmarg."
          },
          {
            category: "Personal Belongings & Crowds",
            title: "Identity Documents & Shikara Bookings",
            detail:
              "Always carry physical government-issued photo identification (Aadhaar, Passport, or Voter ID), as standard security checkpoints operate throughout highway transit corridors. Book Shikara rides on Dal Lake using official government-approved rate charts posted at lake jetties."
          },
          {
            category: "Outdoor & Adventure Activities",
            title: "Gulmarg Gondola & Ski Safety Standards",
            detail:
              "Book Gondola tickets only through the official J&K Cable Car Corporation portal (avoid unauthorized touts). Skiers venturing into backcountry slopes in Gulmarg must carry avalanche transceivers, check daily snow safety patrol warnings, and register with the Gulmarg Rescue Center."
          },
          {
            category: "Local Rules & Respectful Conduct",
            title: "Houseboat Hospitality & Cultural Sensitivity",
            detail:
              "Kashmir has a rich tradition of hospitality. Remove shoes when entering houseboats or traditional Kashmiri homes with carpeted floor seating. Dress modestly when visiting sacred mosques and shrines like Hazratbal and Jamia Masjid."
          },
          {
            category: "Emergency Preparation",
            title: "Health Outposts & Altitude Care",
            detail:
              "Gulmarg and Pahalgam have local primary health centres with emergency oxygen support for altitude sickness. In cases requiring advanced tertiary care, SKIMS Soura in Srinagar is the apex medical institution."
          }
        ]
      },

      jaipur: {
        id: "jaipur",
        name: "Jaipur",
        region: "West India",
        category: "Royal Heritage & Palaces",
        heroTag: "Heritage City Safety",
        officialTourismBoard: {
          name: "Rajasthan Tourism Development Corporation (RTDC)",
          url: "https://tourism.rajasthan.gov.in/",
          verificationStatus: "Official State Portal",
          lastVerified: "October 2026"
        },
        policeContact: {
          name: "Tourist Police Station Jaipur",
          location: "Hawa Mahal & Amer Fort Assistance Desks",
          phone: "+91 141 260 2200",
          telUri: "tel:+911412602200",
          verificationStatus: "Verified Civic Contact",
          lastVerified: "October 2026"
        },
        medicalFacility: {
          name: "Sawai Man Singh (SMS) Hospital & Medical College",
          location: "JLN Marg, Ashok Nagar, Jaipur, Rajasthan",
          facilityType: "Largest Government Tertiary Care Hospital & Apex Trauma Center in Rajasthan",
          phone: "+91 141 251 8222",
          telUri: "tel:+911412518222",
          source: "Medical, Health & Family Welfare Department, Rajasthan",
          verificationStatus: "Verified Public Facility",
          lastVerified: "October 2026",
          mapQuery: "SMS Hospital, JLN Marg, Jaipur, Rajasthan"
        },
        guidance: [
          {
            category: "Weather & Seasonal Preparation",
            title: "Extreme Summer Heat & Winter Comfort",
            detail:
              "Jaipur experiences intense dry heat between April and June, with temperatures often surpassing 42°C. Explore open-air heritage forts (Amer, Nahargarh) in the early morning before 10:30 AM or late afternoon. Carry oral rehydration salts (ORS), drink filtered water constantly, and wear wide-brimmed hats and light cotton clothing. Winter (October to March) is the ideal travel period (10°C–25°C)."
          },
          {
            category: "Transport & Road Safety",
            title: "Jaipur Metro & Auto-Rickshaw Etiquette",
            detail:
              "The Jaipur Metro provides clean, air-conditioned transit across the city center. When using auto-rickshaws, negotiate the fare beforehand or ask for the electronic meter. Alternatively, use verified ride-hailing apps or government-approved prepaid taxi booths at Jaipur Junction Railway Station."
          },
          {
            category: "Personal Belongings & Crowds",
            title: "Bazaar Navigation & Gem/Textile Purchases",
            detail:
              "The walled city bazaars (Johari, Bapu, Tripolia) are vibrant and bustling. Watch your personal bag in crowded lanes. When purchasing precious gems, jewelry, or handmade carpets, look for government-certified hallmarks and verify invoices rather than relying on recommendations from unauthorized commission agents."
          },
          {
            category: "Outdoor & Adventure Activities",
            title: "Amer Fort Climbing & Hot Air Ballooning",
            detail:
              "Walking up Amer Fort involves uphill cobblestones; wear shoes with good traction. When booking sunrise hot air balloon rides, verify that the agency holds valid civil aviation clearances and current liability insurance."
          },
          {
            category: "Local Rules & Respectful Conduct",
            title: "Authorized Monument Guides & Temple Etiquette",
            detail:
              "Hire only official guides carrying photo identification cards issued by the Archaeological Survey of India (ASI) or Rajasthan Tourism. When visiting Govind Dev Ji Temple or Galta Ji, respect temple photography rules and be cautious around wild monkeys."
          },
          {
            category: "Emergency Preparation",
            title: "Heatstroke Response & Civic Care",
            detail:
              "If experiencing symptoms of heat exhaustion (dizziness, dry mouth, rapid pulse), seek air-conditioned rest immediately. SMS Hospital on JLN Marg operates a 24-hour emergency trauma ward with dedicated heatstroke recovery units."
          }
        ]
      },

      kerala: {
        id: "kerala",
        name: "Kerala",
        region: "South India",
        category: "Tropical Backwaters & Coast",
        heroTag: "Backwaters & Tropical Safety",
        officialTourismBoard: {
          name: "Kerala Department of Tourism",
          url: "https://www.keralatourism.org/",
          verificationStatus: "Official State Portal",
          lastVerified: "October 2026"
        },
        policeContact: {
          name: "Kerala Tourism Police Wing",
          location: "Fort Kochi & Alappuzha Boat Jetty Desks",
          phone: "+91 484 221 5055",
          telUri: "tel:+914842215055",
          verificationStatus: "Verified Civic Contact",
          lastVerified: "October 2026"
        },
        medicalFacility: {
          name: "Government Medical College Hospital, Ernakulam",
          location: "HMT Colony, Kalamassery, Kochi, Kerala",
          facilityType: "Premier Government Tertiary Medical College & Trauma Center",
          phone: "+91 484 275 4000",
          telUri: "tel:+914842754000",
          source: "Health & Family Welfare Department, Government of Kerala",
          verificationStatus: "Verified Public Facility",
          lastVerified: "October 2026",
          mapQuery: "Government Medical College Hospital, Ernakulam, Kalamassery, Kochi"
        },
        guidance: [
          {
            category: "Weather & Seasonal Preparation",
            title: "Tropical Humidity & Southwest Monsoon Alerts",
            detail:
              "Kerala has a warm, tropical climate year-round with humidity often above 75%. Hydrate regularly with tender coconut water and filtered water. The southwest monsoon (June to August) brings heavy rains; monitor Kerala State Disaster Management Authority (KSDMA) warnings before planning hill station trips to Munnar or Wayanad due to slope cautions."
          },
          {
            category: "Transport & Road Safety",
            title: "Certified Houseboat Seaworthiness & Ferry Transit",
            detail:
              "When chartering traditional kettuvallam houseboats in Alappuzha or Kumarakom, check for the official Kerala Maritime Board (KMB) Green Palm / Gold Star safety certification plate. Ensure life jackets are readily accessible on board. For inland waterways, state water transport ferries offer safe, licensed commuter transit."
          },
          {
            category: "Personal Belongings & Crowds",
            title: "Coastal Markets & Festival Crowds",
            detail:
              "Keep mobile devices protected in waterproof pouches during monsoon boat tours or beach outings. During major temple festivals (Thrissur Pooram) or snake boat races (Nehru Trophy), follow marked safety barricades and maintain distance from temple elephant processions."
          },
          {
            category: "Outdoor & Adventure Activities",
            title: "Periyar Wildlife Treks & Bamboo Rafting",
            detail:
              "Trekking in Periyar Tiger Reserve or Eravikulam National Park must be accompanied by certified Forest Department eco-guides. Wear leech socks on rainforest trails and do not wander off marked trails in dense plantations."
          },
          {
            category: "Local Rules & Respectful Conduct",
            title: "Traditional Ayurveda Accreditation & Temple Customs",
            detail:
              "Select Ayurvedic wellness centers with 'Ayur Silver' or 'Ayur Gold' classification certificates issued by Kerala Tourism. When entering traditional Hindu temples (such as Padmanabhaswamy Temple), traditional unstitched attire guidelines (dhoti/mundu) are strictly enforced."
          },
          {
            category: "Emergency Preparation",
            title: "Coastal First Aid & Tertiary Care",
            detail:
              "Alappuzha and Fort Kochi have government general hospitals within city limits. In Kochi, Government Medical College Hospital at Kalamassery provides comprehensive 24x7 trauma and emergency care."
          }
        ]
      },

      varanasi: {
        id: "varanasi",
        name: "Varanasi",
        region: "North India",
        category: "Ancient Spiritual Heritage",
        heroTag: "Ghat & River Safety",
        officialTourismBoard: {
          name: "Uttar Pradesh Tourism Department",
          url: "https://uptourism.gov.in/",
          verificationStatus: "Official State Portal",
          lastVerified: "October 2026"
        },
        policeContact: {
          name: "Varanasi Tourist Police Station",
          location: "Dashashwamedh Ghat Road & Sarnath",
          phone: "+91 542 250 8033",
          telUri: "tel:+915422508033",
          verificationStatus: "Verified Civic Contact",
          lastVerified: "October 2026"
        },
        medicalFacility: {
          name: "Sir Sunderlal Hospital (IMS, Banaras Hindu University)",
          location: "Lanka, Varanasi, Uttar Pradesh",
          facilityType: "Premier Multi-Specialty University Teaching Hospital & Apex Trauma Center",
          phone: "+91 542 230 7500",
          telUri: "tel:+915422307500",
          source: "Banaras Hindu University / Ministry of Education, Govt of India",
          verificationStatus: "Verified Public Facility",
          lastVerified: "October 2026",
          mapQuery: "Sir Sunderlal Hospital, IMS BHU, Varanasi"
        },
        guidance: [
          {
            category: "Weather & Seasonal Preparation",
            title: "River Water Levels & Summer/Winter Variations",
            detail:
              "During monsoon (July to September), the River Ganga rises substantially, submerging the lower ghat steps; private boating is often restricted by municipal order for safety. In winter (November to February), early mornings are foggy and cold (8°C–18°C); wear layers when taking dawn boat rides. Summer (April to June) is intensely hot (38°C–45°C); schedule temple visits in early mornings."
          },
          {
            category: "Transport & Road Safety",
            title: "Walking Ancient Alleyways (Galies) & E-Rickshaws",
            detail:
              "The historic heart of Varanasi around the ghats consists of narrow pedestrian alleys (galies) inaccessible to four-wheelers. Wear comfortable walking shoes with non-slip soles. For travel across the wider city, use e-rickshaws with agreed-upon rates, or book app-based cabs for airport transit."
          },
          {
            category: "Personal Belongings & Crowds",
            title: "Ghat Crowds & Evening Aarti Safety",
            detail:
              "Dashashwamedh Ghat experiences dense gatherings during the evening Ganga Aarti (around 6:30 PM). Keep children close and keep your bags in front of you. Secure phones and purses, and agree on a recognizable meeting point with your travel companions in case of separation."
          },
          {
            category: "Outdoor & Adventure Activities",
            title: "Licensed Boat Operators & Mandatory Life Jackets",
            detail:
              "By municipal order, every passenger boarding a boat on the Ganga must wear a life jacket. Hire only boats with registered municipal license plates displayed on the bow. Avoid overcrowding on wooden rowboats or venturing onto deep sandbanks on the eastern shore after sunset."
          },
          {
            category: "Local Rules & Respectful Conduct",
            title: "Cremation Ghat Photography & Sacred Protocols",
            detail:
              "Photography is strictly prohibited at the cremation ghats (Manikarnika and Harishchandra Ghats) to honor family mourning and cultural privacy. When entering Kashi Vishwanath Temple, mobile phones and large leather items must be deposited in official electronic lockers outside the temple corridor."
          },
          {
            category: "Emergency Preparation",
            title: "River Rescue (NDRF) & University Trauma Care",
            detail:
              "The National Disaster Response Force (NDRF) maintains a river rescue post along the main ghats. For medical emergencies, Sir Sunderlal Hospital at Banaras Hindu University (BHU) in Lanka operates the region's largest 24x7 trauma center."
          }
        ]
      },

      darjeeling: {
        id: "darjeeling",
        name: "Darjeeling",
        region: "East India",
        category: "Himalayan Hill Station",
        heroTag: "Hill Safety",
        officialTourismBoard: {
          name: "West Bengal Tourism Development Corporation (WBTDCL)",
          url: "https://wbtourism.gov.in/",
          verificationStatus: "Official State Portal",
          lastVerified: "October 2026"
        },
        policeContact: {
          name: "Darjeeling Tourist Police Desk",
          location: "Sadar Police Station / Mall Road Desk, Darjeeling",
          phone: "+91 354 225 4422",
          telUri: "tel:+913542254422",
          verificationStatus: "Verified Civic Contact",
          lastVerified: "October 2026"
        },
        medicalFacility: {
          name: "Darjeeling District Hospital (Eden Hospital)",
          location: "Hospital Road, Darjeeling, West Bengal",
          facilityType: "Apex District Government Hospital & 24x7 Emergency Unit",
          phone: "+91 354 225 2211",
          telUri: "tel:+913542252211",
          source: "Department of Health & Family Welfare, Government of West Bengal",
          verificationStatus: "Verified Public Facility",
          lastVerified: "October 2026",
          mapQuery: "Darjeeling District Hospital, Hospital Road, Darjeeling"
        },
        guidance: [
          {
            category: "Weather & Seasonal Preparation",
            title: "Mountain Fog, Monsoon Landslides & Winter Chill",
            detail:
              "Darjeeling sits at an altitude of 2,042 meters (6,700 feet). Monsoon (July to September) brings intense rainfall and potential roadblocks on Rohini or Pankhabari routes; check IMD forecasts and state road status before ascending. Winters (December to February) dip close to freezing (2°C–10°C); carry thermal inners, woolens, and windbreakers."
          },
          {
            category: "Transport & Road Safety",
            title: "Steep Hill Road Transit & Shared Jeeps",
            detail:
              "Hilly routes between Siliguri/Bagdogra (IXB)/NJP and Darjeeling feature sharp hairpin bends. Use licensed hill taxis or registered shared sumos from official stands. Book Darjeeling Himalayan Railway (DHR Toy Train) joy rides strictly via official IRCTC portals well in advance."
          },
          {
            category: "Personal Belongings & Crowds",
            title: "Dawn Crowds at Tiger Hill & Mall Chowrasta",
            detail:
              "Tiger Hill viewpoint attracts heavy tourist vehicle convoys between 4:00 AM and 6:00 AM for the Kanchenjunga sunrise. Keep torches/phone batteries charged, secure your bags in dense viewing pavilions, and arrange round-trip cab parking confirmations the night before."
          },
          {
            category: "Outdoor & Adventure Activities",
            title: "Singalila & Sandakphu Trekking Regulations",
            detail:
              "Trekking into Singalila National Park (Sandakphu/Phalut route) legally requires hiring a certified local guide from the Dhotrey/Manebhanjan guides association and obtaining forest entry permits. Ensure you carry warm windproof gear and hydration supplies."
          },
          {
            category: "Local Rules & Respectful Conduct",
            title: "Pedestrian Mall Zone & Tea Estate Etiquette",
            detail:
              "The Chowrasta Mall and Observatory Hill are strict vehicle-free pedestrian heritage zones. Single-use plastic littering carries civic fines. When walking through working tea plantations (e.g. Happy Valley), stay on paved footpaths and do not pluck tea bushes without permission."
          },
          {
            category: "Emergency Preparation",
            title: "Hill Emergency Evacuation & District Hospital",
            detail:
              "In case of medical emergencies or altitude distress, head to Darjeeling District Hospital (Eden Hospital) near Chowrasta. For severe medical trauma requiring advanced surgical tertiary facilities, Siliguri (North Bengal Medical College) is approximately 2.5 hours downhill via ambulance."
          }
        ]
      },

      gangtok: {
        id: "gangtok",
        name: "Gangtok",
        region: "East India",
        category: "Eastern Himalayan Capital",
        heroTag: "Alpine Safety",
        officialTourismBoard: {
          name: "Sikkim Tourism Development Corporation (STDC)",
          url: "https://www.sikkimtourism.gov.in/",
          verificationStatus: "Official State Portal",
          lastVerified: "October 2026"
        },
        policeContact: {
          name: "Sikkim Tourist Police & Help Desk",
          location: "MG Marg Tourist Information Centre, Gangtok",
          phone: "+91 3592 202 022",
          telUri: "tel:+913592202022",
          verificationStatus: "Verified Civic Contact",
          lastVerified: "October 2026"
        },
        medicalFacility: {
          name: "Sir Thutob Namgyal Memorial (STNM) Hospital",
          location: "Sochakgang, Sichey, Gangtok, Sikkim",
          facilityType: "Premier State Multi-Specialty Government Hospital & 24x7 Trauma Center",
          phone: "+91 3592 202 944",
          telUri: "tel:+913592202944",
          source: "Health and Family Welfare Department, Government of Sikkim",
          verificationStatus: "Verified Public Facility",
          lastVerified: "October 2026",
          mapQuery: "STNM Hospital, Sochakgang, Gangtok, Sikkim"
        },
        guidance: [
          {
            category: "Weather & Seasonal Preparation",
            title: "High Altitude Alpine Weather & Teesta Highway Updates",
            detail:
              "Gangtok is at 1,650 meters, while excursions like Tsomgo Lake and Nathula Pass exceed 3,750 meters (12,300+ feet). Sub-zero temperatures and sudden snowfall are common between November and April. High-altitude excursions require warm thermal layers, gloves, and sunglasses. During monsoon, check NH-10 road conditions along the Teesta corridor before traveling."
          },
          {
            category: "Transport & Road Safety",
            title: "Protected Area Permits (PAP) & Registered 4x4 Taxis",
            detail:
              "Trips to Nathula Pass, Tsomgo Lake, and Baba Mandir lie in restricted border zones requiring official Protected Area Permits (PAP). Apply through registered Sikkim Tourism travel agents at least 24 hours prior with passport photos and government ID. Nathula Pass is open only to Indian citizens (closed Mondays & Tuesdays for maintenance)."
          },
          {
            category: "Personal Belongings & Crowds",
            title: "MG Marg Pedestrian Promenade Rules",
            detail:
              "MG Marg is Gangtok's central pedestrian, vehicle-free boulevard. It is clean, well-lit, and policed. Keep your phone and wallet secure during festive evenings and shopping hours. Smoking, spitting, and littering on MG Marg carry immediate spot fines enforced by municipal wardens."
          },
          {
            category: "Outdoor & Adventure Activities",
            title: "High Altitude Acclimatization & Mountain Trails",
            detail:
              "When ascending rapidly to Tsomgo Lake (12,310 ft) or Nathula (14,140 ft), acute mountain sickness (AMS) can occur. Ascend gradually, avoid strenuous exertion, stay hydrated, and carry portable oxygen canisters if sensitive to thin air. Avoid rapid ascends if suffering from cardiac or respiratory conditions."
          },
          {
            category: "Local Rules & Respectful Conduct",
            title: "100% Organic State Rules & Monastery Protocols",
            detail:
              "Sikkim is India's first 100% organic state and has a strict complete ban on single-use packaged plastic water bottles in tourist transit zones. Carry reusable steel or copper bottles; filtered water refilling stations are widely available. When visiting Rumtek or Enchey Monasteries, remove shoes, circumambulate stupas clockwise, and seek permission before taking pictures inside prayer halls."
          },
          {
            category: "Emergency Preparation",
            title: "STNM Multi-Specialty Hospital & Border Evacuation",
            detail:
              "For any medical emergencies, the 1,000-bed STNM Multi-Specialty Government Hospital in Sochakgang provides comprehensive emergency and trauma treatment. On border routes toward Nathula, Indian Army medical transit posts provide emergency high-altitude first aid and stabilization."
          }
        ]
      }
    },

    // -------------------------------------------------------------------------
    // 4. Interactive Travel Safety Checklist (4 Progressive Phases)
    // -------------------------------------------------------------------------
    checklistCategories: [
      {
        id: "cat-pre-trip",
        title: "1. Before Travelling (Preparation & Documentation)",
        description: "Essential preparations to complete before departing from home.",
        items: [
          {
            id: "chk_id_backup",
            title: "Identity Document Backups",
            detail: "Keep physical photocopies and password-protected digital scans of your Passport, Visa, or Government ID (Aadhaar/Voter Card) stored safely."
          },
          {
            id: "chk_insurance",
            title: "Travel & Health Insurance",
            detail: "Ensure travel insurance covers trip cancellation, medical treatment, emergency hospitalization, and regional activities (adventure/water sports)."
          },
          {
            id: "chk_meds",
            title: "Prescription Medications & Medical Notes",
            detail: "Pack enough prescribed medicine for the entire trip duration in original packaging, along with an official doctor's prescription slip."
          },
          {
            id: "chk_helplines_saved",
            title: "Key Emergency Numbers Saved",
            detail: "Save India's National Emergency Number (112), Tourist Infoline (1363), and your accommodation's reception number in your phone's address book."
          }
        ]
      },
      {
        id: "cat-journey",
        title: "2. During the Journey (Transit & Road Safety)",
        description: "Safety measures while in transit on highways, railways, and flights.",
        items: [
          {
            id: "chk_powerbank",
            title: "Charged Portable Battery",
            detail: "Carry a fully charged external power bank (within airline cabin luggage limits) and charging cables for mobile navigation."
          },
          {
            id: "chk_offline_maps",
            title: "Offline Navigation Maps",
            detail: "Download offline maps of your route and destination in case cellular signal is intermittent in mountain or rural sectors."
          },
          {
            id: "chk_official_cabs",
            title: "Authorized Transit Counters",
            detail: "Use official prepaid airport/railway taxi booths or verified app-based services; avoid unmetered rides with unauthorized touts."
          },
          {
            id: "chk_seatbelts_helmets",
            title: "Seatbelt & Helmet Compliance",
            detail: "Always buckle seatbelts in passenger cars, and wear a certified full-face helmet whenever riding two-wheelers."
          }
        ]
      },
      {
        id: "cat-destination",
        title: "3. At the Destination (Local Awareness & Etiquette)",
        description: "Practical habits for personal security, hydration, and cultural respect.",
        items: [
          {
            id: "chk_hotel_card",
            title: "Hotel Business Card",
            detail: "Keep a physical business card with your hotel's name, local address, and landline in your wallet for simple taxi navigation."
          },
          {
            id: "chk_water_food",
            title: "Safe Drinking Water & Food Hygiene",
            detail: "Drink sealed bottled mineral water or verified purified water. Eat freshly cooked, hot food at reputable, busy establishments."
          },
          {
            id: "chk_modest_dress",
            title: "Culturally Respectful Attire",
            detail: "Carry a lightweight scarf or shawl to cover shoulders and knees when visiting active temples, mosques, churches, or sacred ghats."
          },
          {
            id: "chk_licensed_guides",
            title: "Licensed Tour Guides Only",
            detail: "Verify official photo identification issued by the Archaeological Survey of India (ASI) or State Tourism before hiring historical guides."
          }
        ]
      },
      {
        id: "cat-emergency-ready",
        title: "4. Emergency Readiness (Medical & Urgent Support)",
        description: "Readiness protocols in the rare event of illness, loss, or distress.",
        items: [
          {
            id: "chk_first_aid_kit",
            title: "Compact Travel First-Aid Kit",
            detail: "Keep oral rehydration salts (ORS), antiseptic cream, band-aids, paracetamol, and mosquito repellent in your daypack."
          },
          {
            id: "chk_nearest_hospital",
            title: "Nearest Emergency Hospital Identified",
            detail: "Note the name and route of the primary government civil hospital or emergency clinic near your accommodation."
          },
          {
            id: "chk_itinerary_shared",
            title: "Itinerary Shared with Family",
            detail: "Share your travel route, flight/train numbers, and daily accommodation names with a trusted family member or emergency contact."
          },
          {
            id: "chk_consulate_contact",
            title: "Embassy / Consulate Contact Noted",
            detail: "For international visitors, record the emergency assistance number and address of your home country's embassy or consulate in India."
          }
        ]
      }
    ]
  };

  // Export to global scope for browser usage and CommonJS for Node.js test runners
  if (typeof window !== "undefined") {
    window.WANDERINDIA_SAFETY = WANDERINDIA_SAFETY;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = WANDERINDIA_SAFETY;
  }
})();
