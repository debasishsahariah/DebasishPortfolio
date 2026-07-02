/* ============================================================
   DEBASISH SAHARIA — 3D Portfolio
   JavaScript: Portfolio Data, Filters, Lightbox, Video Modal
   ============================================================ */

// ============================================================
// PORTFOLIO DATA — Edit this array to add your own projects
// ============================================================
const portfolioItems = [
  // --- PERSONAL PROJECTS ---
  {
    id: 1,
    type: "personal",
    title: "Coastal Living Room",
    category: "Interior Render",
    image: "images/personal-01.png",
    description: "A moody, cinematic rendering of a rustic living space featuring concrete walls, a blue velvet sofa, wooden accents, and a large seashell painting.",
  },
  {
    id: 2,
    type: "personal",
    title: "Modern Abstract Interior",
    category: "Interior Render",
    image: "images/personal-02.png",
    description: "A contemporary living room design with a teal sofa, minimalist geometric furniture, and a striking portrait painting.",
  },
  {
    id: 3,
    type: "personal",
    title: "Luxury Teal Lounge",
    category: "Interior Render",
    image: "images/personal-03.png",
    description: "An elegant living space with deep teal walls, a mustard yellow velvet sofa, and abstract reflective boat artwork, accented with golden decor.",
  },
  {
    id: 4,
    type: "personal",
    title: "Sunny Boho Balcony",
    category: "Exterior Render",
    image: "images/personal-04.png",
    description: "A bright, modern terrace design featuring wooden slats, a hanging egg chair, and woven patio furniture in sunlight.",
  },
  {
    id: 5,
    type: "personal",
    title: "Rustic Textured Bedroom",
    category: "Interior Render",
    image: "images/personal-05.png",
    description: "A cozy boho bedroom rendering with heavily textured stone walls, a wooden headboard, and tribal geometric wall art.",
  },
  {
    id: 6,
    type: "personal",
    title: "Moody Evening Interior",
    category: "Interior Render",
    image: "images/personal-06.png",
    description: "Moody evening interior with a spotlight illuminating a bust sculpture, wine glass on table, and a large anime poster in the background.",
  },
  {
    id: 7,
    type: "personal",
    title: "Vibrant Living Space",
    category: "Interior Render",
    image: "images/personal-07.png",
    description: "Vibrant living space with bold orange walls, an abstract black and white painting, yellow sofa, and patterned armchair.",
  },
  {
    id: 8,
    type: "personal",
    title: "Festive Holiday Living Room",
    category: "Interior Render",
    image: "images/personal-08.png",
    description: "Festive holiday living room with a decorated Christmas tree, gifts, dark green wainscoting, and brass accents.",
  },
  {
    id: 9,
    type: "personal",
    title: "Minimalist Interior",
    category: "Interior Render",
    image: "images/personal-09.png",
    description: "Minimalist interior featuring a woven rattan rocking chair, textured tan walls, and dark cabinetry with minimalist vases.",
  },
  {
    id: 10,
    type: "personal",
    title: "Colorful Dining Area",
    category: "Interior Render",
    image: "images/personal-10.png",
    description: "Eclectic and colorful dining/living area with an arched alcove shelving display, pastel pink walls, and vibrant glassware.",
  },
  {
    id: 101,
    type: "personal",
    title: "Project Alpha",
    category: "Concept Art",
    images: ["images/personal-11-1.png", "images/personal-11-2.png", "images/personal-11-3.png", "images/personal-11-4.png"],
    description: "A comprehensive exploration of conceptual art spanning four different perspectives.",
  },
  {
    id: 102,
    type: "personal",
    title: "Project Beta",
    category: "Character Design",
    images: ["images/personal-12-1.png", "images/personal-12-2.png", "images/personal-12-3.png", "images/personal-12-4.png"],
    description: "In-depth character design showcases featuring multiple angles and lighting scenarios.",
  },

  // --- CLIENT PROJECTS ---
  {
    id: 11,
    type: "client",
    title: "Large Estate Exterior",
    client: "Outdoor fencing, decking firm",
    category: "Exterior Render",
    image: "images/client-01.png",
    description: "An aerial architectural visualization of a massive modern farmhouse estate featuring a large pool, patio, and beautifully landscaped backyard.",
  },
  {
    id: 12,
    type: "client",
    title: "Patio Dining Set",
    client: "Furniture Brand",
    category: "Product Visualization",
    image: "images/client-02.png",
    description: "A photorealistic rendering of a modern outdoor dining set with four chairs on a brick patio under a pergola.",
  },
  {
    id: 13,
    type: "client",
    title: "Outdoor Gazebo Setup",
    client: "Outdoor Furniture Brand",
    category: "Exterior Render",
    image: "images/client-03.png",
    description: "A backyard patio scene featuring a dark grey gazebo shading a modern outdoor seating area with a sofa and chairs.",
  },
  {
    id: 14,
    type: "client",
    title: "Product Showcase",
    client: "Electronic Gadgets Brand",
    category: "Product Listing image",
    image: "images/client-04.png",
    description: "Wireless charger showcasing multi charging capability.",
  },
  {
    id: 15,
    type: "client",
    title: "Backyard Pool Oasis",
    client: "Outdoor Fencing, Decking Manufacturer",
    category: "Exterior Render",
    image: "images/client-05.png",
    description: "An aerial view of a green house exterior showcasing a beautifully designed backyard pool area with lounging spaces and a white picket fence.",
  },
  {
    id: 16,
    type: "client",
    title: "Outdoor Patio Area",
    client: "Outdoor Fencing, Decking Manufacturer",
    category: "Exterior Render",
    image: "images/client-06.png",
    description: "A beautifully arranged outdoor area visualization.",
  },
  {
    id: 17,
    type: "client",
    title: "Winter House Exterior",
    client: "Electronic Gadgets Brand",
    category: "Product Listing Image",
    image: "images/client-07.jpg",
    description: "Powerbank with mulitple charging capabilities.",
  },
  {
    id: 18,
    type: "client",
    title: "Commercial Kitchen Setup",
    client: "Water Heater Manufacturer",
    category: "Commercial Visualization",
    image: "images/client-08.png",
    description: "Commercial kitchen showcasing a commercial water heater installed on the wall with kitchen staff cooking in the background.",
  },
  {
    id: 19,
    type: "client",
    title: "Modern Bathroom Interior",
    client: "Vanity Manufacturer",
    category: "Interior Render",
    image: "images/client-09.png",
    description: "Bathroom interior featuring a light wood vanity, a black-framed mirror, and marble-patterned shower tile.",
  },
  {
    id: 20,
    type: "client",
    title: "Winter Porch Setup",
    client: "Fence, Deck Manufacturer",
    category: "Exterior Render",
    image: "images/client-10.png",
    description: "Covered front porch decorated for winter holidays with string lights, a wicker couch, candles, and light snow.",
  },

  // --- VIDEO PROJECTS ---
  {
    id: 21,
    type: "video",
    title: "Functionality Walkthrough",
    client: "Private Client",
    category: "Cinematic Walkthrough",
    thumbnail: "images/video-thumb-01.png",
    videoUrl: "videos/Sequence 01.mp4",
    description: "Cinematic product function showcase video.",
  },
  {
    id: 22,
    type: "video",
    title: "Product Commercial",
    client: "Bacardi",
    category: "Product Commercial",
    thumbnail: "images/video-thumb-02.png",
    videoUrl: "videos/Sequence 02.mp4",
    description: "High-end product commercial with dynamic lighting and particle effects.",
  },
  {
    id: 23,
    type: "video",
    title: "Automotive Spot",
    client: "Mercedes",
    category: "Automotive Commercial",
    thumbnail: "images/video-thumb-03.png",
    videoUrl: "videos/Sequence 03.mp4",
    description: "Cinematic automotive commercial with dramatic lighting and motion effects.",
  },
  {
    id: 24,
    type: "video",
    title: "Brand Story",
    client: "GOBBG",
    category: "Brand Film",
    thumbnail: "images/video-thumb-01.png",
    videoUrl: "videos/Sequence 04.mp4",
    description: "Narrative brand film combining 3D elements with motion graphics.",
  },
  {
    id: 25,
    type: "video",
    title: "Explainer Video",
    client: "Becker Robotics",
    category: "Explainer / Motion Graphics",
    thumbnail: "images/video-thumb-02.png",
    videoUrl: "videos/Sequence 05.mp4",
    description: "Technical explainer video showcasing robotic systems and capabilities.",
  },
];

// ============================================================
// DOM READY
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  renderPortfolio("all");
  initFilters();
  initLightbox();
  initVideoModal();
  initScrollAnimations();
  initSmoothScroll();
});

// ============================================================
// NAVBAR SCROLL EFFECT
// ============================================================
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  });
}

// ============================================================
// MOBILE MENU
// ============================================================
function initMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!toggle) return;

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "";
  });

  // Close menu on link click
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      navLinks.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
}

// ============================================================
// PORTFOLIO RENDERING
// ============================================================
function renderPortfolio(filter) {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  const items = filter === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.type === filter);

  grid.innerHTML = items
    .map((item) => {
      if (item.type === "video") {
        return createVideoCard(item);
      }
      return createImageCard(item);
    })
    .join("");

  // Trigger animations
  requestAnimationFrame(() => {
    grid.querySelectorAll(".portfolio-item").forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, i * 100);
    });
  });

  // Reattach event listeners
  attachPortfolioEvents();
}

function createImageCard(item) {
  const isClient = item.type === "client";
  const badgeHTML = isClient
    ? `<span class="client-badge">Client Work</span>`
    : "";
  const copyrightHTML = isClient
    ? `<p class="portfolio-copyright">© ${item.client}. All rights reserved.</p>`
    : "";

  let mediaHTML = "";
  if (item.images && item.images.length > 1) {
    mediaHTML = `
      <div class="card-carousel">
        ${item.images.map((img, idx) => `<img src="${img}" alt="${item.title} ${idx+1}" loading="lazy" class="${idx === 0 ? 'active' : ''}" />`).join("")}
        <button class="card-carousel-btn prev" aria-label="Previous image">‹</button>
        <button class="card-carousel-btn next" aria-label="Next image">›</button>
        <div class="card-carousel-indicators">
          ${item.images.map((_, idx) => `<span class="indicator ${idx === 0 ? 'active' : ''}"></span>`).join("")}
        </div>
      </div>
    `;
  } else {
    mediaHTML = `<img src="${item.image}" alt="${item.title}" loading="lazy" />`;
  }

  return `
    <div class="portfolio-item" data-id="${item.id}" data-type="${item.type}">
      ${badgeHTML}
      ${mediaHTML}
      <div class="portfolio-overlay">
        <span class="portfolio-tag">${item.category}</span>
        <h3 class="portfolio-item-title">${item.title}</h3>
        ${isClient ? `<p class="portfolio-item-client">For ${item.client}</p>` : ""}
        ${copyrightHTML}
      </div>
    </div>
  `;
}

function createVideoCard(item) {
  return `
    <div class="portfolio-item video-item" data-id="${item.id}" data-type="video">
      <span class="client-badge">Client Work</span>
      <video class="video-thumbnail" src="${item.videoUrl}#t=0.001" muted loop playsinline preload="metadata"></video>
      <div class="play-button">
        <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"></polygon></svg>
      </div>
      <div class="portfolio-overlay">
        <span class="portfolio-tag">${item.category}</span>
        <h3 class="portfolio-item-title">${item.title}</h3>
        <p class="portfolio-item-client">For ${item.client}</p>
        <p class="portfolio-copyright">© ${item.client}. All rights reserved.</p>
      </div>
    </div>
  `;
}

function attachPortfolioEvents() {
  // Image items — open lightbox & handle carousel
  document.querySelectorAll('.portfolio-item:not(.video-item)').forEach((el) => {
    
    // Setup carousel logic if it exists
    const prevBtn = el.querySelector(".card-carousel-btn.prev");
    const nextBtn = el.querySelector(".card-carousel-btn.next");
    if (prevBtn && nextBtn) {
      const images = el.querySelectorAll(".card-carousel img");
      const indicators = el.querySelectorAll(".card-carousel-indicators .indicator");
      let currentIndex = 0;

      const updateCarousel = (newIndex) => {
        images[currentIndex].classList.remove("active");
        indicators[currentIndex].classList.remove("active");
        currentIndex = newIndex;
        images[currentIndex].classList.add("active");
        indicators[currentIndex].classList.add("active");
      };

      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        let newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = images.length - 1;
        updateCarousel(newIndex);
      });

      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        let newIndex = currentIndex + 1;
        if (newIndex >= images.length) newIndex = 0;
        updateCarousel(newIndex);
      });
    }

    el.addEventListener("click", () => {
      const id = parseInt(el.dataset.id);
      openLightbox(id);
    });
  });

  // Video items — open video modal and play on hover
  document.querySelectorAll(".portfolio-item.video-item").forEach((el) => {
    const video = el.querySelector("video");
    if (video) {
      el.addEventListener("mouseenter", () => { video.play().catch(()=>{}); });
      el.addEventListener("mouseleave", () => { video.pause(); });
    }

    el.addEventListener("click", () => {
      const id = parseInt(el.dataset.id);
      openVideoModal(id);
    });
  });
}

// ============================================================
// FILTER TABS
// ============================================================
function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active state
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Re-render portfolio
      const filter = btn.dataset.filter;
      renderPortfolio(filter);
    });
  });
}

// ============================================================
// LIGHTBOX
// ============================================================
let currentLightboxItems = [];
let currentLightboxIndex = 0;

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  // Close button
  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);

  // Nav buttons
  lightbox.querySelector(".lightbox-prev").addEventListener("click", () => navigateLightbox(-1));
  lightbox.querySelector(".lightbox-next").addEventListener("click", () => navigateLightbox(1));

  // Close on background click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}

function openLightbox(id) {
  const lightbox = document.getElementById("lightbox");

  // Get current filtered non-video items
  const activeFilter = document.querySelector(".filter-btn.active")?.dataset.filter || "all";
  
  currentLightboxItems = [];
  portfolioItems.filter(item => item.type !== "video" && (activeFilter === "all" || item.type === activeFilter))
    .forEach(item => {
      if (item.images && item.images.length > 0) {
        item.images.forEach((imgSrc, index) => {
           currentLightboxItems.push({ ...item, image: imgSrc, lightboxTitle: `${item.title} (${index + 1}/${item.images.length})`, originalId: item.id });
        });
      } else {
        currentLightboxItems.push({ ...item, lightboxTitle: item.title, originalId: item.id });
      }
    });

  currentLightboxIndex = currentLightboxItems.findIndex((item) => item.originalId === id);
  if (currentLightboxIndex === -1) return;

  updateLightboxContent();
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

function navigateLightbox(direction) {
  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) currentLightboxIndex = currentLightboxItems.length - 1;
  if (currentLightboxIndex >= currentLightboxItems.length) currentLightboxIndex = 0;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = currentLightboxItems[currentLightboxIndex];
  if (!item) return;

  const lightbox = document.getElementById("lightbox");
  lightbox.querySelector(".lightbox-img").src = item.image;
  lightbox.querySelector(".lightbox-img").alt = item.lightboxTitle;
  lightbox.querySelector(".lightbox-title").textContent = item.lightboxTitle;
  lightbox.querySelector(".lightbox-desc").textContent = item.description;

  const copyrightEl = lightbox.querySelector(".lightbox-copyright");
  if (item.type === "client") {
    copyrightEl.textContent = `Work produced for ${item.client}. All rights belong to the respective client.`;
    copyrightEl.style.display = "block";
  } else {
    copyrightEl.style.display = "none";
  }
}

// ============================================================
// VIDEO MODAL
// ============================================================
function initVideoModal() {
  const modal = document.getElementById("video-modal");
  if (!modal) return;

  modal.querySelector(".video-modal-close").addEventListener("click", closeVideoModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeVideoModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeVideoModal();
    }
  });
}

function openVideoModal(id) {
  const item = portfolioItems.find((p) => p.id === id);
  if (!item) return;

  const modal = document.getElementById("video-modal");
  const contentContainer = modal.querySelector(".video-modal-content");
  const titleEl = modal.querySelector(".video-modal-title");
  const copyrightEl = modal.querySelector(".video-modal-copyright");

  titleEl.textContent = item.title;
  copyrightEl.textContent = `Produced for ${item.client}. All rights belong to the respective client.`;

  // Clear previous content
  const existingMedia = contentContainer.querySelector("iframe, video");
  if (existingMedia) existingMedia.remove();

  if (item.videoUrl && item.videoUrl.trim() !== "") {
    // Check if it's a YouTube/Vimeo embed URL
    if (item.videoUrl.includes("youtube") || item.videoUrl.includes("vimeo")) {
      const iframe = document.createElement("iframe");
      iframe.src = item.videoUrl;
      iframe.allow = "autoplay; encrypted-media; picture-in-picture";
      iframe.allowFullscreen = true;
      contentContainer.appendChild(iframe);
    } else {
      // Local video file
      const video = document.createElement("video");
      video.src = item.videoUrl;
      video.controls = true;
      video.autoplay = true;
      video.setAttribute("controlsList", "nodownload");
      video.oncontextmenu = (e) => e.preventDefault(); // Prevent right-click to "Save Video As"
      contentContainer.appendChild(video);
    }
  } else {
    // No video URL — show placeholder
    const placeholder = document.createElement("div");
    placeholder.style.cssText = `
      width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
      flex-direction: column; gap: 16px; color: var(--text-muted); background: var(--bg-card);
    `;
    placeholder.innerHTML = `
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <polygon points="5,3 19,12 5,21"></polygon>
      </svg>
      <p style="font-size: 0.9rem;">Video URL not configured yet</p>
      <p style="font-size: 0.75rem; opacity: 0.6;">Add your YouTube/Vimeo URL in script.js</p>
    `;
    contentContainer.appendChild(placeholder);
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeVideoModal() {
  const modal = document.getElementById("video-modal");
  const contentContainer = modal.querySelector(".video-modal-content");

  // Stop video playback
  const iframe = contentContainer.querySelector("iframe");
  if (iframe) iframe.src = "";

  const video = contentContainer.querySelector("video");
  if (video) video.pause();

  // Remove placeholder
  const placeholder = contentContainer.querySelector("div");
  if (placeholder) placeholder.remove();

  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Don't unobserve — let it remain for potential re-entry
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
    observer.observe(el);
  });
}

// ============================================================
// SMOOTH SCROLL NAVIGATION
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const navHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = targetEl.offsetTop - navHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
}

// ============================================================
// TYPING EFFECT FOR HERO (Optional Enhancement)
// ============================================================
function initTypingEffect() {
  const el = document.querySelector(".hero-typing");
  if (!el) return;

  const words = ["3D Visualization", "Product Rendering", "Architectural Viz", "Motion Design"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      el.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      el.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Pause before next word
    }

    setTimeout(type, typeSpeed);
  }

  type();
}
