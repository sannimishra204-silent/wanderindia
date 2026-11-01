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
      if (event.target.closest("a")) return;

      const slug =
        card.dataset.slug || (card.dataset.name || "").trim().toLowerCase();
      if (slug) {
        window.location.href = `destination.html?place=${encodeURIComponent(slug)}`;
      }
    });
  });

  syncCategoryButtons();
  updateDestinationResults();
});