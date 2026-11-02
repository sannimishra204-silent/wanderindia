/**
 * WanderIndia — Phase 5 Travel Wishlist Page Controller
 * Product Vision: "Explore India. Travel Smarter. Travel Safer."
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    // Nav Elements
    const menuToggle = document.querySelector(".menu-toggle");
    const primaryNav = document.querySelector("#primary-navigation");

    // Wishlist Page Elements
    const wishlistGrid = document.querySelector("#wishlist-grid");
    const emptyState = document.querySelector("#wishlist-empty-state");
    const toolbar = document.querySelector("#wishlist-toolbar");
    const countText = document.querySelector("#wishlist-count-text");
    const toolbarStatus = document.querySelector("#toolbar-count-status");
    const btnClearWishlist = document.querySelector("#btn-clear-wishlist");
    const quickWishlistChips = document.querySelectorAll(".quick-wishlist-chip");

    // Recents on Wishlist
    const recentsContainer = document.querySelector("#wishlist-recents-container");
    const recentsGrid = document.querySelector("#wishlist-recents-grid");
    const btnClearRecents = document.querySelector("#btn-clear-wishlist-recents");

    // -------------------------------------------------------------------------
    // 1. Mobile Navigation
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

      primaryNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeNavMenu);
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && primaryNav.classList.contains("is-open")) {
          closeNavMenu();
        }
      });

      document.addEventListener("click", (e) => {
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
    // 2. Render Wishlist Cards
    // -------------------------------------------------------------------------
    function renderWishlist() {
      if (!window.WANDERINDIA_DISCOVERY) return;

      const wishlistIds = window.WANDERINDIA_DISCOVERY.getWishlist();
      const count = wishlistIds.length;

      // Update metrics
      if (countText) {
        countText.textContent = `${count} saved destination${count === 1 ? "" : "s"}`;
      }
      if (toolbarStatus) {
        toolbarStatus.textContent = `Showing ${count} saved destination${count === 1 ? "" : "s"}`;
      }

      window.WANDERINDIA_DISCOVERY.updateNavWishlistBadge();

      if (count === 0) {
        if (toolbar) toolbar.hidden = true;
        if (emptyState) emptyState.hidden = false;
        if (wishlistGrid) {
          wishlistGrid.innerHTML = "";
          wishlistGrid.hidden = true;
        }
      } else {
        if (toolbar) toolbar.hidden = false;
        if (emptyState) emptyState.hidden = true;
        if (wishlistGrid) {
          wishlistGrid.hidden = false;
          wishlistGrid.innerHTML = wishlistIds.map((slug) => {
            const dest = window.WANDERINDIA_DISCOVERY.DESTINATIONS[slug];
            if (!dest) return "";

            return `
              <article class="wishlist-card" data-slug="${dest.id}">
                <div class="wishlist-card-media">
                  <img
                    class="wishlist-card-img"
                    src="${dest.heroImage}"
                    alt="${dest.name} travel photography"
                    loading="lazy"
                  >
                  <button
                    type="button"
                    class="wishlist-btn is-active"
                    data-slug="${dest.id}"
                    aria-label="Remove ${dest.name} from wishlist"
                    aria-pressed="true"
                  >
                    ${window.WANDERINDIA_DISCOVERY.createHeartSvg()}
                  </button>
                </div>
                <div class="wishlist-card-body">
                  <div class="wishlist-card-meta">
                    <span class="wishlist-region">${dest.region}</span>
                    <span class="wishlist-category">${dest.categoryLabel || dest.category}</span>
                  </div>
                  <h3 class="wishlist-card-title">
                    <a href="destination.html?place=${encodeURIComponent(dest.id)}">${dest.name}</a>
                  </h3>
                  <p class="wishlist-card-overview">${dest.overview}</p>
                  <div class="wishlist-card-actions">
                    <a
                      href="planner.html?place=${encodeURIComponent(dest.id)}"
                      class="button button-small button-primary wishlist-action-btn"
                    >
                      ✨ Plan Trip
                    </a>
                    <a
                      href="safety.html?place=${encodeURIComponent(dest.id)}"
                      class="button button-small button-outline-dark wishlist-action-btn"
                    >
                      🛡️ Safety Guide
                    </a>
                  </div>
                </div>
              </article>
            `;
          }).join("");

          // Bind remove heart buttons
          wishlistGrid.querySelectorAll(".wishlist-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              const slug = btn.getAttribute("data-slug");
              if (slug && window.WANDERINDIA_DISCOVERY) {
                window.WANDERINDIA_DISCOVERY.toggleWishlist(slug);
                renderWishlist();
              }
            });
          });
        }
      }

      renderRecentlyViewed();
    }

    // -------------------------------------------------------------------------
    // 3. Render Recently Viewed Destinations
    // -------------------------------------------------------------------------
    function renderRecentlyViewed() {
      if (!window.WANDERINDIA_DISCOVERY || !recentsContainer || !recentsGrid) return;

      const recents = window.WANDERINDIA_DISCOVERY.getRecentDestinations();

      if (!recents || recents.length === 0) {
        recentsContainer.hidden = true;
        recentsGrid.innerHTML = "";
      } else {
        recentsContainer.hidden = false;
        recentsGrid.innerHTML = recents.map((dest) => `
          <a class="recent-dest-card" href="destination.html?place=${encodeURIComponent(dest.id)}">
            <img class="recent-card-img" src="${dest.heroImage}" alt="${dest.name}" loading="lazy">
            <div class="recent-card-info">
              <span class="recent-card-name">${dest.name}</span>
              <span class="recent-card-region">${dest.region}</span>
            </div>
          </a>
        `).join("");
      }
    }

    // Clear Recents Handler
    if (btnClearRecents) {
      btnClearRecents.addEventListener("click", () => {
        if (window.WANDERINDIA_DISCOVERY) {
          window.WANDERINDIA_DISCOVERY.clearRecentDestinations();
          renderRecentlyViewed();
        }
      });
    }

    // Clear All Wishlist Handler
    if (btnClearWishlist) {
      btnClearWishlist.addEventListener("click", () => {
        if (window.WANDERINDIA_DISCOVERY) {
          window.WANDERINDIA_DISCOVERY.clearWishlist();
          renderWishlist();
        }
      });
    }

    // Quick suggestion chips on empty state
    quickWishlistChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const slug = chip.getAttribute("data-slug");
        if (slug && window.WANDERINDIA_DISCOVERY) {
          window.WANDERINDIA_DISCOVERY.toggleWishlist(slug);
          renderWishlist();
        }
      });
    });

    // Listen to updates from other tabs / components
    window.addEventListener("wanderindia:wishlist-updated", () => {
      renderWishlist();
    });

    // Initial render
    renderWishlist();
  });
})();
