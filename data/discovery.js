/**
 * WanderIndia — Travel Discovery, Recommendations & Wishlist Store
 * Product Vision: "Explore India. Travel Smarter. Travel Safer."
 * 
 * 100% Client-Side • Privacy-First • Deterministic Local Matching
 */

(function () {
  "use strict";

  // Storage Keys
  const WISHLIST_STORAGE_KEY = "wanderindia_wishlist";
  const RECENTS_STORAGE_KEY = "wanderindia_recent_destinations";
  const MAX_RECENTS = 6;

  // ---------------------------------------------------------------------------
  // 1. Authoritative Discovery Metadata Catalog (All 8 destinations)
  // ---------------------------------------------------------------------------
  const DESTINATIONS_METADATA = {
    goa: {
      id: "goa",
      name: "Goa",
      region: "West India",
      category: "beaches",
      categoryLabel: "Beaches & Coastline",
      tag: "Sun, Sand & Portuguese Heritage",
      heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      overview: "Golden crescent beaches, 16th-century baroque churches, spice plantations, and laid-back coastal serenity.",
      bestTime: "November to February",
      interests: ["beaches", "food", "culture", "peaceful"],
      state: "Goa"
    },
    manali: {
      id: "manali",
      name: "Manali",
      region: "North India",
      category: "mountains",
      categoryLabel: "Snow Peaks & High Passes",
      tag: "Snow Peaks & Pine Valleys",
      heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      overview: "Cedar-clad mountain slopes, apple orchards, Beas river rapids, and the gateway to high Himalayan passes.",
      bestTime: "October to June",
      interests: ["mountains", "adventure", "nature", "peaceful"],
      state: "Himachal Pradesh"
    },
    kashmir: {
      id: "kashmir",
      name: "Kashmir",
      region: "North India",
      category: "mountains",
      categoryLabel: "Alpine Valleys & Lakes",
      tag: "Paradise on Earth",
      heroImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
      overview: "Mirrored Dal Lake waters, historic pinewood houseboats, snowbound Gulmarg slopes, and terraced Mughal gardens.",
      bestTime: "March to October",
      interests: ["mountains", "peaceful", "nature", "culture"],
      state: "Jammu and Kashmir"
    },
    jaipur: {
      id: "jaipur",
      name: "Jaipur",
      region: "West India",
      category: "culture",
      categoryLabel: "Palaces & Royal Fortresses",
      tag: "The Pink City",
      heroImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
      overview: "Terracotta-pink palaces, hilltop Rajput fortresses, world-heritage astronomical instruments, and vibrant artisan bazaars.",
      bestTime: "October to March",
      interests: ["culture", "food", "peaceful"],
      state: "Rajasthan"
    },
    kerala: {
      id: "kerala",
      name: "Kerala",
      region: "South India",
      category: "nature",
      categoryLabel: "Emerald Backwaters & Hills",
      tag: "God's Own Country",
      heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      overview: "Lush tropical backwaters, mist-shrouded Munnar tea hills, Ayurvedic sanctuaries, and ancient spice trading ports.",
      bestTime: "September to March",
      interests: ["nature", "peaceful", "beaches", "food", "culture"],
      state: "Kerala"
    },
    varanasi: {
      id: "varanasi",
      name: "Varanasi",
      region: "North India",
      category: "culture",
      categoryLabel: "Sacred Ghats & Living Heritage",
      tag: "Spiritual Heart of India",
      heroImage: "assets/images/varanashi.jpg",
      overview: "Timeless sacred river ghats, mesmerizing evening Ganga Aarti ceremonies, ancient temple corridors, and spiritual heritage.",
      bestTime: "October to March",
      interests: ["culture", "food", "peaceful"],
      state: "Uttar Pradesh"
    },
    darjeeling: {
      id: "darjeeling",
      name: "Darjeeling",
      region: "East India",
      category: "mountains",
      categoryLabel: "Tea Gardens & Himalayan Views",
      tag: "Queen of the Hills",
      heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      overview: "Misty mountain ridges, world-renowned single-origin tea estates, UNESCO heritage steam railway, and sunrise over Mount Kanchenjunga.",
      bestTime: "March to May & October to December",
      interests: ["mountains", "nature", "food", "peaceful", "culture"],
      state: "West Bengal"
    },
    gangtok: {
      id: "gangtok",
      name: "Gangtok",
      region: "East India",
      category: "mountains",
      categoryLabel: "Monasteries & Alpine Lakes",
      tag: "Monasteries & Mountain Vistas",
      heroImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
      overview: "Pristine Himalayan valleys, peaceful Tibetan monasteries, high-altitude glacial lakes, and immaculate pedestrian promenades.",
      bestTime: "March to May & October to Mid-December",
      interests: ["mountains", "peaceful", "culture", "nature", "adventure"],
      state: "Sikkim"
    },
    mumbai: {
      id: "mumbai",
      name: "Mumbai",
      region: "West India",
      category: "culture",
      categoryLabel: "Art Deco, Heritage & Coastal Energy",
      tag: "City of Dreams",
      heroImage: "assets/images/mumbai.jpg",
      overview: "Colonial Victorian gothic architecture, Arabian Sea sunsets on Marine Drive, Elephanta Island caves, and vibrant street food.",
      bestTime: "November to February",
      interests: ["culture", "beaches", "food", "peaceful"],
      state: "Maharashtra"
    },
    bhopal: {
      id: "bhopal",
      name: "Bhopal",
      region: "Central India",
      category: "nature",
      categoryLabel: "Historic Lakes & Ancient Rock Art",
      tag: "City of Lakes",
      heroImage: "assets/images/bhopal.jpg",
      overview: "Asia's oldest man-made lakes, monumental mosques, open-air national parks, tribal museums, and UNESCO caves at Bhimbetka.",
      bestTime: "October to March",
      interests: ["nature", "culture", "peaceful", "food"],
      state: "Madhya Pradesh"
    },
    chandigarh: {
      id: "chandigarh",
      name: "Chandigarh",
      region: "North India",
      category: "nature",
      categoryLabel: "Modernist Architecture & Serene Gardens",
      tag: "The City Beautiful",
      heroImage: "assets/images/chandigarh.jpg",
      overview: "Le Corbusier's planned green city, Nek Chand's recycled Rock Garden, tranquil Sukhna Lake, and rose-filled urban parks.",
      bestTime: "October to March",
      interests: ["nature", "culture", "peaceful", "food"],
      state: "Chandigarh"
    },
    delhi: {
      id: "delhi",
      name: "Delhi",
      region: "North India",
      category: "culture",
      categoryLabel: "Imperial Monuments & Mughal Heritage",
      tag: "Heart of the Nation",
      heroImage: "assets/images/delhi.jpg",
      overview: "Mughal Red Fort, India Gate, Qutub Minar, Humayun's Tomb, bustling Chandni Chowk bazaars, and rich culinary traditions.",
      bestTime: "October to March",
      interests: ["culture", "food", "peaceful", "nature"],
      state: "Delhi"
    },
    dehradun: {
      id: "dehradun",
      name: "Dehradun",
      region: "North India",
      category: "mountains",
      categoryLabel: "Pine Valleys & Sacred Cave Springs",
      tag: "Doon Valley Retreat",
      heroImage: "assets/images/dehradun.jpg",
      overview: "Temperate pine-scented Doon valley, Greco-Roman Forest Research Institute, wading in Robber's Cave, and Tibetan monasteries.",
      bestTime: "March to June & September to November",
      interests: ["mountains", "nature", "peaceful", "culture"],
      state: "Uttarakhand"
    }
  };

  // Supported Curated Travel Collections
  const TRAVEL_COLLECTIONS = {
    mountains: {
      id: "mountains",
      title: "Escape to the Mountains",
      icon: "🏔️",
      subtitle: "High Himalayan valleys, snow-capped peaks, and pine-scented mountain air.",
      dests: ["manali", "kashmir", "darjeeling", "gangtok", "dehradun"],
      filterCategory: "mountains"
    },
    coastal: {
      id: "coastal",
      title: "Coastal & Beach Getaways",
      icon: "🏖️",
      subtitle: "Sun-drenched golden sands, swaying palm fringed shores, and tranquil backwaters.",
      dests: ["goa", "kerala", "mumbai"],
      filterCategory: "beaches"
    },
    culture: {
      id: "culture",
      title: "Heritage & Spiritual Culture",
      icon: "🏛️",
      subtitle: "Ancient river ghats, royal Rajput palaces, living traditions, and timeless spiritual sanctums.",
      dests: ["jaipur", "varanasi", "delhi", "bhopal"],
      filterCategory: "culture"
    },
    nature: {
      id: "nature",
      title: "Nature & Wildlife Havens",
      icon: "🌿",
      subtitle: "Lush tropical lagoons, rolling tea hills, pristine flora, and serene sanctuaries.",
      dests: ["kerala", "darjeeling", "manali"],
      filterCategory: "nature"
    },
    northeast: {
      id: "northeast",
      title: "Explore India's Northeast",
      icon: "⛩️",
      subtitle: "Tibetan monasteries, cloud forests, Kanchenjunga sunrises, and tranquil Himalayan culture.",
      dests: ["darjeeling", "gangtok"],
      filterCategory: "mountains"
    },
    peaceful: {
      id: "peaceful",
      title: "Peaceful Retreats",
      icon: "🧘",
      subtitle: "Quiet lake houseboats, dawn river boat rides, mountain monasteries, and Ayurvedic calm.",
      dests: ["kashmir", "gangtok", "kerala", "darjeeling"],
      filterCategory: "nature"
    }
  };

  // ---------------------------------------------------------------------------
  // 2. Storage Utility Functions (Safe with try/catch)
  // ---------------------------------------------------------------------------
  function safeGet(key) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      }
    } catch (e) {
      console.warn(`[WanderIndia] localStorage read prevented for '${key}':`, e);
    }
    return null;
  }

  function safeSet(key, value) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;
      }
    } catch (e) {
      console.warn(`[WanderIndia] localStorage write prevented for '${key}':`, e);
    }
    return false;
  }

  function safeRemove(key) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.removeItem(key);
        return true;
      }
    } catch (e) {
      console.warn(`[WanderIndia] localStorage remove prevented for '${key}':`, e);
    }
    return false;
  }

  // ---------------------------------------------------------------------------
  // 3. Wishlist Management APIs
  // ---------------------------------------------------------------------------
  function getWishlist() {
    const raw = safeGet(WISHLIST_STORAGE_KEY);
    if (!Array.isArray(raw)) return [];
    // Validate stored IDs against actual destination catalog
    return raw.filter((id) => typeof id === "string" && !!DESTINATIONS_METADATA[id.toLowerCase()]);
  }

  function isInWishlist(destId) {
    if (!destId) return false;
    const list = getWishlist();
    return list.includes(destId.toLowerCase());
  }

  function toggleWishlist(destId) {
    if (!destId) return { isSaved: false, count: 0, list: [] };
    const id = destId.toLowerCase();
    if (!DESTINATIONS_METADATA[id]) {
      console.warn(`[WanderIndia] Unknown destination '${destId}' ignored for wishlist.`);
      return { isSaved: false, count: 0, list: getWishlist() };
    }

    let list = getWishlist();
    let isSaved = false;

    if (list.includes(id)) {
      list = list.filter((item) => item !== id);
      isSaved = false;
    } else {
      list.push(id);
      isSaved = true;
    }

    safeSet(WISHLIST_STORAGE_KEY, list);

    // Broadcast change for other components on current page
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("wanderindia:wishlist-updated", {
          detail: { destId: id, isSaved, count: list.length, list }
        })
      );
    }

    return { isSaved, count: list.length, list };
  }

  function removeFromWishlist(destId) {
    if (!destId) return;
    const id = destId.toLowerCase();
    let list = getWishlist();
    if (list.includes(id)) {
      list = list.filter((item) => item !== id);
      safeSet(WISHLIST_STORAGE_KEY, list);
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("wanderindia:wishlist-updated", {
            detail: { destId: id, isSaved: false, count: list.length, list }
          })
        );
      }
    }
  }

  function clearWishlist() {
    safeRemove(WISHLIST_STORAGE_KEY);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("wanderindia:wishlist-updated", {
          detail: { destId: null, isSaved: false, count: 0, list: [] }
        })
      );
    }
  }

  // ---------------------------------------------------------------------------
  // 4. Recently Viewed Destinations Management APIs
  // ---------------------------------------------------------------------------
  function getRecentDestinations(excludeId = null) {
    const raw = safeGet(RECENTS_STORAGE_KEY);
    if (!Array.isArray(raw)) return [];
    const validIds = raw.filter(
      (id) => typeof id === "string" && !!DESTINATIONS_METADATA[id.toLowerCase()]
    );

    const normExclude = excludeId ? excludeId.toLowerCase() : null;
    const filtered = normExclude ? validIds.filter((id) => id !== normExclude) : validIds;

    return filtered.slice(0, MAX_RECENTS).map((id) => DESTINATIONS_METADATA[id]);
  }

  function addRecentDestination(destId) {
    if (!destId) return;
    const id = destId.toLowerCase();
    if (!DESTINATIONS_METADATA[id]) return;

    let list = safeGet(RECENTS_STORAGE_KEY);
    if (!Array.isArray(list)) list = [];

    // Remove existing occurrence to prevent duplicates
    list = list.filter((item) => typeof item === "string" && item.toLowerCase() !== id);

    // Prepend as newest
    list.unshift(id);

    // Enforce max limit of 6
    list = list.slice(0, MAX_RECENTS);

    safeSet(RECENTS_STORAGE_KEY, list);

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("wanderindia:recents-updated", {
          detail: { destId: id, recents: list }
        })
      );
    }
  }

  function clearRecentDestinations() {
    safeRemove(RECENTS_STORAGE_KEY);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("wanderindia:recents-updated", {
          detail: { destId: null, recents: [] }
        })
      );
    }
  }

  // ---------------------------------------------------------------------------
  // 5. Deterministic Recommendations Engine
  // ---------------------------------------------------------------------------
  /**
   * Generates ranked recommendations excluding current destination.
   * Matches selected interest or finds closest thematic pairs.
   */
  function getRecommendations(currentId, selectedInterest = "all", limit = 3) {
    const normCurrent = currentId ? currentId.toLowerCase() : "";
    const activeInterest = selectedInterest ? selectedInterest.toLowerCase() : "all";
    const currentMeta = DESTINATIONS_METADATA[normCurrent];

    const candidates = Object.values(DESTINATIONS_METADATA).filter(
      (d) => d.id !== normCurrent
    );

    // Score candidates deterministically
    const scored = candidates.map((d) => {
      let score = 0;
      let matchReason = "Handpicked journey";

      // 1. Direct interest filter match
      if (activeInterest !== "all") {
        if (d.interests && d.interests.includes(activeInterest)) {
          score += 15;
          matchReason = `Matches interest: ${activeInterest.charAt(0).toUpperCase() + activeInterest.slice(1)}`;
        } else if (d.category === activeInterest) {
          score += 12;
          matchReason = `Matches category: ${d.categoryLabel}`;
        }
      }

      // 2. Similarity with current destination (if current exists)
      if (currentMeta) {
        if (d.category === currentMeta.category) {
          score += 6;
          if (activeInterest === "all") matchReason = `Similar Vibe • ${d.categoryLabel}`;
        }
        if (d.region === currentMeta.region) {
          score += 4;
          if (activeInterest === "all" && score <= 6) matchReason = `Regional Partner • ${d.region}`;
        }
        // Common interests overlap
        if (currentMeta.interests && d.interests) {
          const overlap = d.interests.filter((i) => currentMeta.interests.includes(i));
          score += overlap.length * 2;
          if (activeInterest === "all" && overlap.length >= 2) {
            matchReason = `Shared theme: ${overlap[0]}`;
          }
        }
      }

      return {
        dest: d,
        score,
        matchReason
      };
    });

    // Rank highest score first, stable tie-breaker by name
    scored.sort((a, b) => b.score - a.score || a.dest.name.localeCompare(b.dest.name));

    return scored.slice(0, limit);
  }

  // ---------------------------------------------------------------------------
  // 6. UI Synchronization & Accessible Button Helpers
  // ---------------------------------------------------------------------------
  function createHeartSvg() {
    return `
      <svg class="heart-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
        <path class="heart-path" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    `;
  }

  function syncAllHeartButtons() {
    if (typeof document === "undefined") return;
    const wishlist = getWishlist();
    const buttons = document.querySelectorAll(".wishlist-btn, [data-wishlist-slug]");

    buttons.forEach((btn) => {
      const slug = (btn.getAttribute("data-slug") || btn.getAttribute("data-wishlist-slug") || "").toLowerCase();
      if (!slug || !DESTINATIONS_METADATA[slug]) return;

      const isSaved = wishlist.includes(slug);
      const destName = DESTINATIONS_METADATA[slug].name;

      btn.classList.toggle("is-active", isSaved);
      btn.setAttribute("aria-pressed", String(isSaved));
      btn.setAttribute(
        "aria-label",
        isSaved ? `Remove ${destName} from wishlist` : `Add ${destName} to wishlist`
      );

      // If button has a text label inside (e.g. on detail page)
      const textSpan = btn.querySelector(".wishlist-btn-text, #detail-wishlist-text");
      if (textSpan) {
        textSpan.textContent = isSaved ? "Saved in Wishlist" : "Save to Wishlist";
      }
    });

    updateNavWishlistBadge();
  }

  function updateNavWishlistBadge() {
    if (typeof document === "undefined") return;
    const count = getWishlist().length;
    const badges = document.querySelectorAll("#nav-wishlist-count, .nav-wishlist-count");

    badges.forEach((b) => {
      b.textContent = String(count);
      b.hidden = count === 0;
    });
  }

  // Bind global storage listener for multi-tab synchronization
  if (typeof window !== "undefined") {
    window.addEventListener("storage", (e) => {
      if (e.key === WISHLIST_STORAGE_KEY) {
        syncAllHeartButtons();
      }
    });

    // Auto-sync on DOM ready
    document.addEventListener("DOMContentLoaded", () => {
      syncAllHeartButtons();
    });
  }

  // ---------------------------------------------------------------------------
  // 7. Global Export
  // ---------------------------------------------------------------------------
  const WANDERINDIA_DISCOVERY = {
    DESTINATIONS: DESTINATIONS_METADATA,
    COLLECTIONS: TRAVEL_COLLECTIONS,
    getWishlist,
    isInWishlist,
    toggleWishlist,
    removeFromWishlist,
    clearWishlist,
    getRecentDestinations,
    addRecentDestination,
    clearRecentDestinations,
    getRecommendations,
    createHeartSvg,
    syncAllHeartButtons,
    updateNavWishlistBadge
  };

  if (typeof window !== "undefined") {
    window.WANDERINDIA_DISCOVERY = WANDERINDIA_DISCOVERY;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = WANDERINDIA_DISCOVERY;
  }
})();
