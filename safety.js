/**
 * WanderIndia — Travel Safety Center Controller
 * Product Vision: "Explore India. Travel Smarter. Travel Safer."
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------------------------------------------------------
  // 1. Safe DOM Helper Utilities
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
  // 2. Mobile Navigation & Footer Year
  // ---------------------------------------------------------------------------
  const currentYear = document.querySelector("#current-year");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector("#primary-navigation");

  if (menuToggle && primaryNav) {
    const toggleMenu = () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      primaryNav.classList.toggle("open", !isExpanded);
      document.body.classList.toggle("menu-open", !isExpanded);
    };

    const closeMenu = () => {
      menuToggle.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("open");
      document.body.classList.remove("menu-open");
    };

    menuToggle.addEventListener("click", toggleMenu);

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && primaryNav.classList.contains("open")) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) closeMenu();
    });
  }

  // ---------------------------------------------------------------------------
  // 3. Safety Data Access & Guard
  // ---------------------------------------------------------------------------
  const SAFETY_DATA = window.WANDERINDIA_SAFETY;
  if (!SAFETY_DATA) {
    console.error("WanderIndia Safety data module (safety-data.js) not loaded.");
    return;
  }

  const ALIASES = {
    varanashi: "varanasi",
    banaras: "varanasi",
    kashi: "varanasi",
    darjiling: "darjeeling"
  };

  // ---------------------------------------------------------------------------
  // 4. Render Emergency Helplines (Section 1)
  // ---------------------------------------------------------------------------
  const emergencyCardsGrid = document.querySelector("#emergency-cards-grid");
  if (emergencyCardsGrid && Array.isArray(SAFETY_DATA.helplines)) {
    emergencyCardsGrid.textContent = "";

    SAFETY_DATA.helplines.forEach((item) => {
      const card = createSafeElement(
        "article",
        `emergency-card ${item.number === "112" ? "card-emergency-112" : "card-tourist-1363"}`
      );

      // Card Header
      const header = createSafeElement("div", "emergency-card-header");
      const badge = createSafeElement(
        "span",
        `emergency-type-badge ${item.number === "112" ? "type-critical" : "type-guidance"}`,
        item.badge
      );
      const hours = createSafeElement("span", "emergency-hours", item.operationalHours);
      header.appendChild(badge);
      header.appendChild(hours);

      // Title & Subtitle
      const title = createSafeElement("h3", "emergency-card-title", item.name);
      const subtitle = createSafeElement(
        "p",
        "emergency-card-subtitle",
        `Dial: ${item.number}${item.alternateNumber ? " or " + item.alternateNumber : ""}`
      );

      // Description
      const desc = createSafeElement("p", "emergency-card-desc", item.description);

      // Dial Action Group
      const dialGroup = createSafeElement("div", "dial-action-group");
      const primaryDial = createSafeElement(
        "a",
        `dial-btn ${item.number === "112" ? "dial-btn-emergency" : "dial-btn-tourist"}`,
        item.number === "112" ? "🚨 Call 112" : "📞 Call 1363"
      );
      primaryDial.href = item.telUri;
      primaryDial.setAttribute("aria-label", `Call ${item.name} at ${item.number}`);
      dialGroup.appendChild(primaryDial);

      if (item.alternateTelUri && item.alternateNumber) {
        const altDial = createSafeElement(
          "a",
          "dial-btn-secondary",
          `Call ${item.alternateNumber} (Toll-Free)`
        );
        altDial.href = item.alternateTelUri;
        altDial.setAttribute("aria-label", `Call toll-free alternate number ${item.alternateNumber}`);
        dialGroup.appendChild(altDial);
      }

      // Metadata Footer
      const meta = createSafeElement("div", "emergency-card-meta");
      const authoritySpan = createSafeElement("span", "", `Authority: ${item.authority}`);
      const linkWrap = createSafeElement("span");
      const linkPrefix = document.createTextNode("Official Portal: ");
      const link = createSafeElement("a", "", item.officialUrl.replace("https://", ""));
      link.href = item.officialUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      linkWrap.appendChild(linkPrefix);
      linkWrap.appendChild(link);

      const statusSpan = createSafeElement(
        "span",
        "",
        `Status: ${item.verificationStatus} (Verified: ${item.lastVerified})`
      );

      meta.appendChild(authoritySpan);
      meta.appendChild(linkWrap);
      meta.appendChild(statusSpan);

      // Assemble Card
      card.appendChild(header);
      card.appendChild(title);
      card.appendChild(subtitle);
      card.appendChild(desc);
      card.appendChild(dialGroup);
      card.appendChild(meta);

      emergencyCardsGrid.appendChild(card);
    });
  }

  // ---------------------------------------------------------------------------
  // 5. Destination Safety Dossiers & Hospital Spotlight
  // ---------------------------------------------------------------------------
  const tabPillsContainer = document.querySelector("#dossier-tab-pills");
  const dossierContentContainer = document.querySelector("#dossier-content");
  const hospitalSpotlightContainer = document.querySelector("#destination-hospital-spotlight");
  const paramNoticeBanner = document.querySelector("#dossier-param-notice");
  const paramNoticeText = document.querySelector("#dossier-notice-text");

  const destinationKeys = Object.keys(SAFETY_DATA.destinations);

  function renderDestinationDossier(destKey) {
    const dest = SAFETY_DATA.destinations[destKey];
    if (!dest) return;

    // 1. Update Tab Button Styles & ARIA states
    if (tabPillsContainer) {
      tabPillsContainer.querySelectorAll(".dossier-tab-btn").forEach((btn) => {
        const isActive = btn.dataset.slug === destKey;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", String(isActive));
      });
    }

    // 2. Render Dossier Card Content safely
    if (dossierContentContainer) {
      dossierContentContainer.textContent = "";

      // Header Area
      const headerArea = createSafeElement("div", "dossier-card-header");
      const titleArea = createSafeElement("div", "dossier-title-area");
      const h3 = createSafeElement("h3", "", `${dest.name} Safety Dossier`);
      const subtitle = createSafeElement("p", "", `${dest.region} • ${dest.category}`);
      titleArea.appendChild(h3);
      titleArea.appendChild(subtitle);

      const badgesArea = createSafeElement("div", "dossier-header-badges");
      const tagBadge = createSafeElement("span", "dossier-badge dossier-badge-tag", dest.heroTag);
      const boardLink = createSafeElement(
        "a",
        "dossier-badge dossier-badge-board",
        `${dest.officialTourismBoard.name} ↗`
      );
      boardLink.href = dest.officialTourismBoard.url;
      boardLink.target = "_blank";
      boardLink.rel = "noopener noreferrer";

      badgesArea.appendChild(tagBadge);
      badgesArea.appendChild(boardLink);

      headerArea.appendChild(titleArea);
      headerArea.appendChild(badgesArea);

      // Civic Contacts Bar
      const contactsBar = createSafeElement("div", "dossier-contacts-bar");

      // Police Outpost
      const policeBox = createSafeElement("div", "dossier-contact-item");
      const policeLabel = createSafeElement("span", "contact-label", "Tourist Police Contact");
      const policeName = createSafeElement("span", "contact-name", dest.policeContact.name);
      const policeLoc = createSafeElement("span", "contact-detail", dest.policeContact.location);
      const policePhone = createSafeElement("a", "contact-phone-link", `📞 ${dest.policeContact.phone}`);
      policePhone.href = dest.policeContact.telUri;
      policeBox.appendChild(policeLabel);
      policeBox.appendChild(policeName);
      policeBox.appendChild(policeLoc);
      policeBox.appendChild(policePhone);

      // Apex Hospital Quick Info
      const hospBox = createSafeElement("div", "dossier-contact-item");
      const hospLabel = createSafeElement("span", "contact-label", "Apex Medical Emergency Facility");
      const hospName = createSafeElement("span", "contact-name", dest.medicalFacility.name);
      const hospLoc = createSafeElement("span", "contact-detail", dest.medicalFacility.location);
      const hospPhone = createSafeElement("a", "contact-phone-link", `🏥 Emergency: ${dest.medicalFacility.phone}`);
      hospPhone.href = dest.medicalFacility.telUri;
      hospBox.appendChild(hospLabel);
      hospBox.appendChild(hospName);
      hospBox.appendChild(hospLoc);
      hospBox.appendChild(hospPhone);

      contactsBar.appendChild(policeBox);
      contactsBar.appendChild(hospBox);

      // 6 Guidance Items Grid
      const guidanceGrid = createSafeElement("div", "dossier-guidance-grid");
      dest.guidance.forEach((item) => {
        const itemCard = createSafeElement("div", "guidance-card");
        const categoryTag = createSafeElement("span", "guidance-category-tag", item.category);
        const cardH4 = createSafeElement("h4", "", item.title);
        const cardP = createSafeElement("p", "", item.detail);

        itemCard.appendChild(categoryTag);
        itemCard.appendChild(cardH4);
        itemCard.appendChild(cardP);
        guidanceGrid.appendChild(itemCard);
      });

      dossierContentContainer.appendChild(headerArea);
      dossierContentContainer.appendChild(contactsBar);
      dossierContentContainer.appendChild(guidanceGrid);
    }

    // 3. Render Hospital Spotlight
    if (hospitalSpotlightContainer && dest.medicalFacility) {
      hospitalSpotlightContainer.textContent = "";

      const hosp = dest.medicalFacility;

      const hospHeader = createSafeElement("div", "hospital-card-header");
      const hospTitle = createSafeElement("h3", "", `Featured Medical Facility: ${hosp.name}`);
      const hospStatus = createSafeElement("span", "hospital-status-pill", hosp.verificationStatus);
      hospHeader.appendChild(hospTitle);
      hospHeader.appendChild(hospStatus);

      const detailsP = createSafeElement("div", "hospital-details");
      const p1 = createSafeElement("p", "", `Classification: ${hosp.facilityType}`);
      const p2 = createSafeElement("p", "", `Physical Address: ${hosp.location}`);
      const p3 = createSafeElement("p", "", `Authority / Source: ${hosp.source} (Verified: ${hosp.lastVerified})`);
      detailsP.appendChild(p1);
      detailsP.appendChild(p2);
      detailsP.appendChild(p3);

      const actionsDiv = createSafeElement("div", "hospital-actions");
      const callLink = createSafeElement("a", "button-hospital-call", `📞 Call ${hosp.phone}`);
      callLink.href = hosp.telUri;

      const mapLink = createSafeElement(
        "a",
        "button-hospital-map",
        "View Location & Directions on Google Maps ↗"
      );
      mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hosp.mapQuery)}`;
      mapLink.target = "_blank";
      mapLink.rel = "noopener noreferrer";

      actionsDiv.appendChild(callLink);
      actionsDiv.appendChild(mapLink);

      hospitalSpotlightContainer.appendChild(hospHeader);
      hospitalSpotlightContainer.appendChild(detailsP);
      hospitalSpotlightContainer.appendChild(actionsDiv);
    }
  }

  // Build Tab Buttons
  if (tabPillsContainer) {
    tabPillsContainer.textContent = "";

    destinationKeys.forEach((key) => {
      const dest = SAFETY_DATA.destinations[key];
      const btn = createSafeElement("button", "dossier-tab-btn", dest.name);
      btn.type = "button";
      btn.dataset.slug = key;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", "false");

      btn.addEventListener("click", () => {
        if (paramNoticeBanner) paramNoticeBanner.hidden = true;
        renderDestinationDossier(key);

        // Update URL cleanly without reloading
        if (window.history && window.history.replaceState) {
          const newUrl = `${window.location.pathname}?place=${encodeURIComponent(key)}#destination-safety-section`;
          window.history.replaceState(null, "", newUrl);
        }
      });

      tabPillsContainer.appendChild(btn);
    });
  }

  // Resolve Initial Query Parameter
  const urlParams = new URLSearchParams(window.location.search);
  const rawPlace = urlParams.get("place");

  let initialSlug = "goa";

  if (rawPlace && rawPlace.trim()) {
    const cleanParam = rawPlace.trim().toLowerCase();
    const resolved = ALIASES[cleanParam] || cleanParam;

    if (SAFETY_DATA.destinations[resolved]) {
      initialSlug = resolved;
    } else {
      if (paramNoticeBanner && paramNoticeText) {
        paramNoticeBanner.hidden = false;
        paramNoticeText.textContent = `Destination "${rawPlace.trim()}" was not recognized. Displaying Goa safety dossier by default. Select a destination above:`;
      }
    }
  }

  renderDestinationDossier(initialSlug);

  // ---------------------------------------------------------------------------
  // 6. Render Official Travel Advisories (Section 4)
  // ---------------------------------------------------------------------------
  const advisoriesGrid = document.querySelector("#advisories-grid");
  if (advisoriesGrid && Array.isArray(SAFETY_DATA.advisorySources)) {
    advisoriesGrid.textContent = "";

    SAFETY_DATA.advisorySources.forEach((adv) => {
      const card = createSafeElement("article", "advisory-card");

      const badge = createSafeElement("span", "advisory-status-badge", adv.verificationStatus);
      const title = createSafeElement("h3", "", adv.title);
      const authority = createSafeElement("p", "advisory-authority", adv.authority);
      const focus = createSafeElement("p", "advisory-focus", adv.focus);

      const note = createSafeElement("div", "advisory-guidance-note");
      note.textContent = adv.guidanceNote;

      const link = createSafeElement("a", "advisory-link", "Visit Official Government Bulletin ↗");
      link.href = adv.officialUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      card.appendChild(badge);
      card.appendChild(title);
      card.appendChild(authority);
      card.appendChild(focus);
      card.appendChild(note);
      card.appendChild(link);

      advisoriesGrid.appendChild(card);
    });
  }

  // ---------------------------------------------------------------------------
  // 7. Interactive Travel Safety Checklist (Section 5)
  // ---------------------------------------------------------------------------
  const checklistGroupsContainer = document.querySelector("#checklist-groups-container");
  const progressText = document.querySelector("#checklist-progress-text");
  const progressFill = document.querySelector("#checklist-progress-fill");
  const progressBar = document.querySelector("#checklist-progress-bar");
  const btnReset = document.querySelector("#btn-reset-checklist");
  const storageBlockedBanner = document.querySelector("#storage-blocked-banner");

  const STORAGE_KEY = "wanderindia_safety_checklist";

  // Defensive Storage Manager
  const checkedIds = new Set();
  let isStorageAvailable = true;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        parsed.forEach((id) => checkedIds.add(id));
      }
    }
  } catch (err) {
    isStorageAvailable = false;
    if (storageBlockedBanner) {
      storageBlockedBanner.hidden = false;
    }
  }

  function saveChecklistState() {
    if (!isStorageAvailable) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(checkedIds)));
    } catch (err) {
      // Storage quota or permissions blocked; fails silently to keep UI interactive
    }
  }

  let totalItemsCount = 0;

  function updateChecklistProgress() {
    const checkedCount = checkedIds.size;
    const pct = totalItemsCount > 0 ? Math.round((checkedCount / totalItemsCount) * 100) : 0;

    if (progressText) {
      progressText.textContent = `${checkedCount} of ${totalItemsCount} Completed (${pct}%)`;
    }
    if (progressFill) {
      progressFill.style.width = `${pct}%`;
    }
    if (progressBar) {
      progressBar.setAttribute("aria-valuenow", String(pct));
    }
  }

  if (checklistGroupsContainer && Array.isArray(SAFETY_DATA.checklistCategories)) {
    checklistGroupsContainer.textContent = "";
    totalItemsCount = 0;

    SAFETY_DATA.checklistCategories.forEach((cat) => {
      const group = createSafeElement("div", "checklist-group");
      const title = createSafeElement("h3", "checklist-group-title", cat.title);
      const desc = createSafeElement("p", "checklist-group-desc", cat.description);
      const list = createSafeElement("div", "checklist-items-list");

      cat.items.forEach((item) => {
        totalItemsCount++;
        const isChecked = checkedIds.has(item.id);

        const row = createSafeElement(
          "label",
          `checklist-item-row ${isChecked ? "completed" : ""}`
        );
        row.htmlFor = item.id;

        const checkbox = createSafeElement("input", "checklist-checkbox");
        checkbox.type = "checkbox";
        checkbox.id = item.id;
        checkbox.checked = isChecked;

        checkbox.addEventListener("change", (e) => {
          if (e.target.checked) {
            checkedIds.add(item.id);
            row.classList.add("completed");
          } else {
            checkedIds.delete(item.id);
            row.classList.remove("completed");
          }
          saveChecklistState();
          updateChecklistProgress();
        });

        const body = createSafeElement("div", "checklist-item-body");
        const itemTitle = createSafeElement("span", "checklist-item-title", item.title);
        const itemDetail = createSafeElement("span", "checklist-item-detail", item.detail);

        body.appendChild(itemTitle);
        body.appendChild(itemDetail);

        row.appendChild(checkbox);
        row.appendChild(body);
        list.appendChild(row);
      });

      group.appendChild(title);
      group.appendChild(desc);
      group.appendChild(list);
      checklistGroupsContainer.appendChild(group);
    });

    updateChecklistProgress();
  }

  // Reset Checklist Handler
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      const confirmReset = window.confirm("Reset your checklist progress? All checked items will be cleared.");
      if (!confirmReset) return;

      checkedIds.clear();
      saveChecklistState();

      if (checklistGroupsContainer) {
        checklistGroupsContainer.querySelectorAll(".checklist-checkbox").forEach((cb) => {
          cb.checked = false;
        });
        checklistGroupsContainer.querySelectorAll(".checklist-item-row").forEach((row) => {
          row.classList.remove("completed");
        });
      }

      updateChecklistProgress();
    });
  }
});
