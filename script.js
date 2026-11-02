"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-navigation");
  const searchForm = document.querySelector("#destination-search-form");
  const destinationInput = document.querySelector("#destination-query");
  const regionSelect = document.querySelector("#region-select");
  const clearSearchButton = document.querySelector("#clear-search");
  const filterButtons = document.querySelectorAll(".filter-button");
  const destinationCards = document.querySelectorAll(".destination-card");
  const resultsCount = document.querySelector("#results-count");
  const noResultsMessage = document.querySelector("#no-results");
  const currentYear = document.querySelector("#current-year");

  let activeCategory = "all";
  let activeQuery = "";
  let activeRegion = "all";

  function syncCategoryButtons() {
    filterButtons.forEach((button) => {
      const isActive = (button.dataset.category || "all") === activeCategory;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  // Keep the small footer year current.
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Mobile navigation open/close behavior.
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

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    document.addEventListener("click", (event) => {
      const clickedInsideMenu =
        navigation.contains(event.target) || menuToggle.contains(event.target);

      if (!clickedInsideMenu) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) {
        closeMenu();
      }
    });
  }

  // Apply the selected text, region, and category filters together.
  function updateDestinationResults() {
    let visibleCount = 0;

    if (!destinationCards.length) {
      if (resultsCount) {
        resultsCount.textContent = "Showing 0 destinations";
      }

      if (noResultsMessage) {
        noResultsMessage.hidden = false;
      }
      return;
    }

    const normalizedQuery = (activeQuery || "").replace(/\s+/g, " ").trim().toLowerCase();
    const queryTokens = normalizedQuery ? normalizedQuery.split(" ").filter(Boolean) : [];

    destinationCards.forEach((card) => {
      const name = (card.dataset.name || "").trim().toLowerCase();
      const region = (card.dataset.region || "").trim().toLowerCase();
      const category = (card.dataset.category || "").trim().toLowerCase();
      const state = (card.dataset.state || "").trim().toLowerCase();
      const attractions = (card.dataset.attractions || "").trim().toLowerCase();
      const aliases = (card.dataset.aliases || "").trim().toLowerCase();
      const cardText = (card.textContent || "").toLowerCase();

      // Rich multi-field search haystack (name, state, region, category, attractions, aliases, text content)
      const searchHaystack = [name, state, region, category, attractions, aliases, cardText].join(" ");

      const matchesQuery =
        !normalizedQuery ||
        searchHaystack.includes(normalizedQuery) ||
        (queryTokens.length > 0 && queryTokens.every((token) => searchHaystack.includes(token)));

      const matchesRegion = activeRegion === "all" || region === activeRegion;
      const matchesCategory =
        activeCategory === "all" || category === activeCategory;

      const isVisible = matchesQuery && matchesRegion && matchesCategory;
      card.hidden = !isVisible;

      if (isVisible) {
        visibleCount += 1;
      }
    });

    if (resultsCount) {
      const label = visibleCount === 1 ? "destination" : "destinations";
      resultsCount.textContent = `Showing ${visibleCount} ${label}`;
    }

    if (noResultsMessage) {
      noResultsMessage.hidden = visibleCount !== 0;
    }
  }

  function resetSearchState(focusInput = false) {
    if (searchForm) {
      searchForm.reset();
    }

    if (destinationInput) {
      destinationInput.value = "";
    }

    if (regionSelect) {
      regionSelect.value = "all";
    }

    activeQuery = "";
    activeRegion = "all";
    activeCategory = "all";

    syncCategoryButtons();
    updateDestinationResults();

    if (focusInput && destinationInput) {
      destinationInput.focus();
    }
  }

  // Real-time search as the user types
  if (destinationInput) {
    destinationInput.addEventListener("input", () => {
      activeQuery = destinationInput.value.replace(/\s+/g, " ").trim().toLowerCase();
      updateDestinationResults();
    });
  }

  // Real-time region filter on dropdown selection
  if (regionSelect) {
    regionSelect.addEventListener("change", () => {
      activeRegion = regionSelect.value ? regionSelect.value.toLowerCase() : "all";
      updateDestinationResults();
    });
  }

  // Text and region search runs when the form is submitted.
  if (searchForm && destinationInput && regionSelect) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      activeQuery = destinationInput.value.replace(/\s+/g, " ").trim().toLowerCase();
      activeRegion = regionSelect.value ? regionSelect.value.toLowerCase() : "all";

      updateDestinationResults();
      const destinationsSection = document.querySelector("#destinations");
      if (destinationsSection) {
        destinationsSection.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start"
        });
      }
    });
  }

  // Destination category filters.
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category || "all";
      syncCategoryButtons();
      updateDestinationResults();
    });
  });

  // Clear all search and category filters.
  if (clearSearchButton) {
    clearSearchButton.addEventListener("click", () => {
      resetSearchState(true);
    });
  }

    // Make each destination card clickable to navigate to its details page.
  destinationCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      // If the user clicked directly on an <a> tag, native link navigation handles it.
      if (event.target.closest("a") || event.target.closest("button")) return;

      const slug =
        card.dataset.slug || (card.dataset.name || "").trim().toLowerCase();
      if (slug) {
        window.location.href = `destination.html?place=${encodeURIComponent(slug)}`;
      }
    });
  });


  // ---------------------------------------------------------------------------
  // Phase 5: Travel Discovery, Collections & Wishlist Controller
  // ---------------------------------------------------------------------------
  // Wishlist Button Handlers on Homepage Cards
  function bindWishlistButtons(container = document) {
    container.querySelectorAll(".wishlist-btn").forEach((btn) => {
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const slug = btn.getAttribute("data-slug");
        if (slug && window.WANDERINDIA_DISCOVERY) {
          window.WANDERINDIA_DISCOVERY.toggleWishlist(slug);
          window.WANDERINDIA_DISCOVERY.syncAllHeartButtons();
        }
      };
    });
  }

  // Curated Travel Collections
  const collectionTabs = document.querySelectorAll(".collection-tab");
  const collectionBannerTitle = document.querySelector("#collection-theme-title");
  const collectionBannerSub = document.querySelector("#collection-theme-sub");
  const collectionGrid = document.querySelector("#collection-cards-grid");
  const btnFilterCollection = document.querySelector("#btn-filter-collection");
  let activeCollectionKey = "mountains";

  function renderCollection(collKey) {
    if (!window.WANDERINDIA_DISCOVERY || !collectionGrid) return;
    const coll = window.WANDERINDIA_DISCOVERY.COLLECTIONS[collKey];
    if (!coll) return;

    activeCollectionKey = collKey;

    if (collectionBannerTitle) collectionBannerTitle.textContent = coll.title;
    if (collectionBannerSub) collectionBannerSub.textContent = coll.subtitle;

    collectionGrid.innerHTML = coll.dests.map((slug) => {
      const dest = window.WANDERINDIA_DISCOVERY.DESTINATIONS[slug];
      if (!dest) return "";

      const isSaved = window.WANDERINDIA_DISCOVERY.isInWishlist(dest.id);

      return `
        <article class="collection-dest-card" data-slug="${dest.id}">
          <div class="dest-img-wrap">
            <img class="dest-img" src="${dest.heroImage}" alt="${dest.name} travel photography" loading="lazy">
            <span class="destination-tag">${dest.tag}</span>
            <button
              type="button"
              class="wishlist-btn${isSaved ? " is-active" : ""}"
              data-slug="${dest.id}"
              aria-label="${isSaved ? `Remove ${dest.name} from wishlist` : `Add ${dest.name} to wishlist`}"
              aria-pressed="${String(isSaved)}"
            >
              ${window.WANDERINDIA_DISCOVERY.createHeartSvg()}
            </button>
          </div>
          <div class="card-body">
            <div class="card-meta">
              <span class="card-region">${dest.region}</span>
              <span class="destination-region" style="margin:0; font-size: 0.8rem;">${dest.categoryLabel || dest.category}</span>
            </div>
            <h3 class="card-title">
              <a class="destination-title-link" href="destination.html?place=${encodeURIComponent(dest.id)}">${dest.name}</a>
            </h3>
            <p class="card-overview">${dest.overview}</p>
            <div class="card-footer">
              <a class="button button-small button-outline-dark" href="destination.html?place=${encodeURIComponent(dest.id)}">
                View Destination ↗
              </a>
              <a class="button button-small button-primary" href="planner.html?place=${encodeURIComponent(dest.id)}">
                Plan Trip ✨
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");

    bindWishlistButtons(collectionGrid);
  }

  collectionTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      collectionTabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      const collKey = tab.getAttribute("data-collection");
      renderCollection(collKey);
    });
  });

  // Action button: Filter all destinations by this theme
  if (btnFilterCollection) {
    btnFilterCollection.addEventListener("click", () => {
      if (!window.WANDERINDIA_DISCOVERY) return;
      const coll = window.WANDERINDIA_DISCOVERY.COLLECTIONS[activeCollectionKey];
      if (coll && coll.filterCategory) {
        activeCategory = coll.filterCategory;
        syncCategoryButtons();
        updateDestinationResults();

        const destsSection = document.querySelector("#destinations");
        if (destsSection) {
          destsSection.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            block: "start"
          });
        }
      }
    });
  }

  // Recently Viewed on Homepage
  function renderHomeRecents() {
    const recentsHome = document.querySelector("#recently-viewed-home");
    const recentsHomeGrid = document.querySelector("#recently-viewed-home-grid");
    const clearHomeRecentsBtn = document.querySelector("#btn-clear-home-recents");

    if (!window.WANDERINDIA_DISCOVERY || !recentsHome || !recentsHomeGrid) return;
    const recents = window.WANDERINDIA_DISCOVERY.getRecentDestinations();

    if (!recents || recents.length === 0) {
      recentsHome.hidden = true;
      recentsHomeGrid.innerHTML = "";
    } else {
      recentsHome.hidden = false;
      recentsHomeGrid.innerHTML = recents.map((dest) => `
        <a class="recent-dest-card" href="destination.html?place=${encodeURIComponent(dest.id)}">
          <img class="recent-card-img" src="${dest.heroImage}" alt="${dest.name}" loading="lazy">
          <div class="recent-card-info">
            <span class="recent-card-name">${dest.name}</span>
            <span class="recent-card-region">${dest.region}</span>
          </div>
        </a>
      `).join("");

      if (clearHomeRecentsBtn) {
        clearHomeRecentsBtn.onclick = () => {
          window.WANDERINDIA_DISCOVERY.clearRecentDestinations();
          recentsHome.hidden = true;
          recentsHomeGrid.innerHTML = "";
        };
      }
    }
  }

  // Initialize Discovery features on Homepage
  bindWishlistButtons(document);
  renderCollection("mountains");
  renderHomeRecents();

  if (window.WANDERINDIA_DISCOVERY) {
    window.WANDERINDIA_DISCOVERY.syncAllHeartButtons();
    window.WANDERINDIA_DISCOVERY.updateNavWishlistBadge();
  }

  window.addEventListener("wanderindia:wishlist-updated", () => {
    if (window.WANDERINDIA_DISCOVERY) {
      window.WANDERINDIA_DISCOVERY.syncAllHeartButtons();
    }
  });

  window.addEventListener("wanderindia:recents-updated", () => {
    renderHomeRecents();
  });

  if (searchForm) {
    searchForm.reset();
  }
  if (destinationInput) {
    destinationInput.value = "";
  }
  if (regionSelect) {
    regionSelect.value = "all";
  }
  activeQuery = "";
  activeRegion = "all";
  activeCategory = "all";

  syncCategoryButtons();
  updateDestinationResults();
});