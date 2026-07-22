/* ============================================================
   AURELIA PARFUMS â€” script.js (Sri Lanka Edition)
   ============================================================ */

/* ---------- Data ---------- */
const products = [
  {
    id: 1,
    name: "Aurelia Classique",
    category: "Eau de Parfum",
    price: 54900,
    oldPrice: null,
    notes: "Jasmine · Rose · Sandalwood · Musk",
    topNotes: "Bergamot · Pink Pepper · Cardamom",
    heartNotes: "Jasmine · Rose · Peony",
    baseNotes: "Sandalwood · Musk · Amber",
    description: "The signature scent that embodies the soul of AURELIA. A masterful composition of sun-kissed jasmine and velvety rose, anchored on a warm sandalwood foundation. Timeless, radiant, and unmistakably feminine.",
    concentration: "EDP – 20% fragrance oil",
    longevity: "8–10 hours",
    sillage: "Moderate to strong",
    image: "images/hero_perfume.png",
    badge: "Bestseller",
    badgeClass: "gold",
    stars: "★★★★★",
    rating: 4.9,
    reviews: 214,
  },
  {
    id: 2,
    name: "Noir Mystique",
    category: "Extrait de Parfum",
    price: 72500,
    oldPrice: 85900,
    notes: "Black Rose · Oud · Patchouli · Vetiver",
    topNotes: "Black Pepper · Cardamom · Bergamot",
    heartNotes: "Black Rose · Iris · Leather",
    baseNotes: "Oud · Patchouli · Vetiver · Labdanum",
    description: "A daring portrait of seduction and depth. Noir Mystique opens with a burst of dark spice before revealing an intoxicating heart of black rose and leather, settling into a smouldering oud foundation that lingers through the night.",
    concentration: "Extrait – 35% fragrance oil",
    longevity: "12–16 hours",
    sillage: "Very strong",
    image: "images/product_noir.png",
    badge: "New",
    badgeClass: "",
    stars: "★★★★★",
    rating: 4.8,
    reviews: 98,
  },
  {
    id: 3,
    name: "Rose Éternelle",
    category: "Eau de Parfum",
    price: 48900,
    oldPrice: null,
    notes: "Damask Rose · Peony · White Musk · Vanilla",
    topNotes: "Lychee · Raspberry · Pink Pepper",
    heartNotes: "Damask Rose · Peony · Magnolia",
    baseNotes: "White Musk · Vanilla · Cedarwood",
    description: "An eternal love letter written in flowers. Rose Éternelle captures the delicate beauty of freshly-picked Damask roses, softened with powdery peony and wrapped in a warm, skin-like musky vanilla embrace.",
    concentration: "EDP – 20% fragrance oil",
    longevity: "7–9 hours",
    sillage: "Moderate",
    image: "images/product_rose.png",
    badge: null,
    badgeClass: "",
    stars: "★★★★★",
    rating: 4.9,
    reviews: 176,
  },
  {
    id: 4,
    name: "Oud Royale",
    category: "Extrait de Parfum",
    price: 94900,
    oldPrice: null,
    notes: "Oud · Saffron · Amber · Frankincense",
    topNotes: "Saffron · Rose · Elemi",
    heartNotes: "Agarwood Oud · Rose Absolute · Jasmine",
    baseNotes: "Amber · Frankincense · Sandalwood · Musk",
    description: "Conceived for those who wear luxury as a second skin. Oud Royale marries the rarest agarwood from Southeast Asia with precious saffron threads and sacred frankincense — a fragrance reserved for royalty.",
    concentration: "Extrait – 35% fragrance oil",
    longevity: "14–18 hours",
    sillage: "Exceptional",
    image: "images/product_oud.png",
    badge: "Exclusive",
    badgeClass: "gold",
    stars: "★★★★★",
    rating: 5.0,
    reviews: 62,
  },
  {
    id: 5,
    name: "Ceylon Breeze",
    category: "Eau de Parfum",
    price: 42900,
    oldPrice: null,
    notes: "Cinnamon · Clove · Frangipani · Coconut",
    topNotes: "Mandarin · Cinnamon Bark · Clove Bud",
    heartNotes: "Frangipani · Ylang Ylang · Jasmine",
    baseNotes: "Coconut · Vanilla · Warm Wood",
    description: "A tribute to the island of spices. Ceylon Breeze evokes the warm coastal air of Sri Lanka — cinnamon and clove drift on a frangipani breeze, melting into a creamy coconut warmth that feels like golden hour on the beach.",
    concentration: "EDP – 20% fragrance oil",
    longevity: "8–10 hours",
    sillage: "Moderate to strong",
    image: "images/product_ceylon.png",
    badge: "Sri Lanka Exclusive",
    badgeClass: "gold",
    stars: "★★★★★",
    rating: 4.9,
    reviews: 143,
  },
  {
    id: 6,
    name: "Lotus Blanc",
    category: "Eau de Toilette",
    price: 36900,
    oldPrice: 44900,
    notes: "White Lotus · Lily · Fresh Air · Musk",
    topNotes: "Green Tea · Citrus Zest · Aquatic Notes",
    heartNotes: "White Lotus · Lily of the Valley · Peach Blossom",
    baseNotes: "White Musk · Cedarwood · Soft Cashmere",
    description: "Purity captured in a bottle. Lotus Blanc opens with the freshness of morning dew on green tea leaves, blooming into a serene bouquet of white lotus and lily. The dry-down is clean, soft, and endlessly wearable.",
    concentration: "EDT – 12% fragrance oil",
    longevity: "5–7 hours",
    sillage: "Light to moderate",
    image: "images/product_lotus.png",
    badge: null,
    badgeClass: "",
    stars: "★★★★★",
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 7,
    name: "Velvet Oud",
    category: "Extrait de Parfum",
    price: 88900,
    oldPrice: null,
    notes: "Oud · Dark Rose · Patchouli · Amber",
    topNotes: "Black Pepper · Saffron · Bergamot",
    heartNotes: "Dark Rose · Turkish Rose · Iris",
    baseNotes: "Oud · Patchouli · Amber · Vetiver",
    description: "Velvet Oud is a study in contrasts — the smoky darkness of aged oud tempered by the romantic softness of dark rose. Rich, complex, and utterly captivating, it commands attention from the very first breath.",
    concentration: "Extrait – 35% fragrance oil",
    longevity: "12–15 hours",
    sillage: "Strong",
    image: "images/product_velvet.png",
    badge: "Luxury",
    badgeClass: "",
    stars: "★★★★★",
    rating: 4.8,
    reviews: 77,
  },
  {
    id: 8,
    name: "Saffron Mystique",
    category: "Eau de Parfum",
    price: 61900,
    oldPrice: 72900,
    notes: "Saffron · Tuberose · Sandalwood · Vanilla",
    topNotes: "Saffron · Blood Orange · Pink Pepper",
    heartNotes: "Tuberose · Jasmine · Rose",
    baseNotes: "Sandalwood · Vanilla · Warm Amber",
    description: "Saffron Mystique is the art of contradiction — bold yet tender, exotic yet intimate. Precious saffron ignites the senses before giving way to lush tuberose, finally dissolving into creamy sandalwood and vanilla warmth.",
    concentration: "EDP – 20% fragrance oil",
    longevity: "9–12 hours",
    sillage: "Moderate to strong",
    image: "images/product_saffron.png",
    badge: "New",
    badgeClass: "",
    stars: "★★★★★",
    rating: 4.8,
    reviews: 112,
  },
];

/* ---------- Cart State ---------- */
const CART_KEY = "aurelia_cart";
let cart = [];

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function loadCartFromStorage() {
  try {
    const stored = localStorage.getItem(CART_KEY);
    if (stored) cart = JSON.parse(stored);
  } catch (_) {
    cart = [];
  }
}

/* ---------- Render Products ---------- */
function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  grid.innerHTML = products
    .map(
      (p) => `
    <div class="product-card reveal" data-id="${p.id}" style="cursor:pointer;">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="product-badge ${p.badgeClass}">${p.badge}</span>` : ""}
        <button class="product-wishlist" data-id="${p.id}" title="Add to wishlist">♡</button>
        <div class="product-overlay">
          <button class="btn btn-gold add-to-cart-btn" data-id="${p.id}">Add to Cart</button>
          <button class="btn btn-outline preview-btn" data-id="${p.id}" style="color:#f5efe6;border-color:rgba(245,239,230,.5);">Preview</button>
        </div>
      </div>
      <div class="product-info">
        <p class="product-category">${p.category}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-notes">${p.notes}</p>
        <div class="product-footer">
          <div>
            <span class="product-price">LKR ${p.price.toLocaleString('en-LK')}${p.oldPrice ? `<span class="old-price">LKR ${p.oldPrice.toLocaleString('en-LK')}</span>` : ""}</span>
          </div>
          <span class="product-stars">${p.stars} <span style="color:var(--text-muted);font-size:0.7rem;">(${p.rating})</span></span>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Attach add-to-cart listeners
  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      addToCart(id);
    });
  });

  // Attach preview & card click listeners for Product Detail Modal
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = parseInt(card.dataset.id);
      openProductDetailModal(id);
    });
  });

  document.querySelectorAll(".preview-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      openProductDetailModal(id);
    });
  });

  // Wishlist toggle
  document.querySelectorAll(".product-wishlist").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.classList.toggle("active");
      btn.textContent = btn.classList.contains("active") ? "♥" : "♡";
    });
  });
}

/* ---------- Product Detail Modal (PDM) ---------- */
function openProductDetailModal(id) {
  const p = products.find((prod) => prod.id === id);
  if (!p) return;

  const existing = document.getElementById("pdm-backdrop");
  if (existing) existing.remove();

  let selectedQty = 1;
  let selectedSize = "50ml";
  let currentPrice = p.price;

  const backdrop = document.createElement("div");
  backdrop.id = "pdm-backdrop";
  backdrop.className = "pdm-backdrop";

  backdrop.innerHTML = `
    <div class="pdm-card">
      <button class="pdm-close-btn" id="pdm-close" aria-label="Close">✕</button>

      <!-- Left Gallery -->
      <div class="pdm-gallery">
        ${p.badge ? `<span class="pdm-badge ${p.badgeClass}">${p.badge}</span>` : ""}
        <img src="${p.image}" alt="${p.name}" class="pdm-main-img" />
      </div>

      <!-- Right Info -->
      <div class="pdm-info">
        <p class="pdm-category">${p.category}</p>
        <h2 class="pdm-title">${p.name}</h2>

        <div class="pdm-rating-row">
          <span class="pdm-stars">${p.stars}</span>
          <span class="pdm-rating-text">${p.rating} (${p.reviews || 120} reviews)</span>
        </div>

        <div class="pdm-price-row">
          <span class="pdm-price" id="pdm-display-price">LKR ${p.price.toLocaleString('en-LK')}</span>
          ${p.oldPrice ? `<span class="pdm-old-price">LKR ${p.oldPrice.toLocaleString('en-LK')}</span>` : ""}
        </div>

        <p class="pdm-desc">${p.description || "An exquisite handcrafted fragrance blending rare floral essences and warm precious woods for an enchanting signature trail."}</p>

        <!-- Volume Size Selector -->
        <p class="pdm-size-title">Select Volume</p>
        <div class="pdm-sizes">
          <button class="pdm-size-btn active" data-size="50ml">50ml Standard</button>
          <button class="pdm-size-btn" data-size="100ml">100ml Grand Flacon (+30%)</button>
        </div>

        <!-- Olfactory Notes -->
        <p class="pdm-section-heading">Fragrance Pyramid</p>
        <div class="pdm-pyramid">
          <div class="pdm-note-row">
            <span class="pdm-note-label">Top Notes:</span>
            <span class="pdm-note-val">${p.topNotes || p.notes.split("·")[0] || "Fresh Citrus"}</span>
          </div>
          <div class="pdm-note-row">
            <span class="pdm-note-label">Heart Notes:</span>
            <span class="pdm-note-val">${p.heartNotes || p.notes.split("·")[1] || "Rare Florals"}</span>
          </div>
          <div class="pdm-note-row">
            <span class="pdm-note-label">Base Notes:</span>
            <span class="pdm-note-val">${p.baseNotes || p.notes.split("·")[2] || "Precious Woods"}</span>
          </div>
        </div>



        <!-- Quantity & Add to Cart -->
        <div class="pdm-actions">
          <div class="pdm-qty-wrap">
            <button class="pdm-qty-btn" id="pdm-minus">−</button>
            <span class="pdm-qty-val" id="pdm-qty">1</span>
            <button class="pdm-qty-btn" id="pdm-plus">+</button>
          </div>
          <button class="pdm-add-btn" id="pdm-add">Add to Cart</button>
          <button class="pdm-buy-btn" id="pdm-buy">Buy Now</button>
        </div>

      </div>
    </div>
  `;

  document.body.appendChild(backdrop);
  document.body.style.overflow = "hidden";
  setTimeout(() => backdrop.classList.add("open"), 10);

  function closeModal() {
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => backdrop.remove(), 300);
  }

  backdrop.querySelector("#pdm-close").addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener("keydown", function escListener(e) {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", escListener);
    }
  });

  const sizeBtns = backdrop.querySelectorAll(".pdm-size-btn");
  const priceDisplay = backdrop.querySelector("#pdm-display-price");

  sizeBtns.forEach((sBtn) => {
    sBtn.addEventListener("click", () => {
      sizeBtns.forEach((b) => b.classList.remove("active"));
      sBtn.classList.add("active");
      selectedSize = sBtn.dataset.size;
      currentPrice = selectedSize === "100ml" ? Math.round(p.price * 1.3) : p.price;
      priceDisplay.textContent = `LKR ${currentPrice.toLocaleString("en-LK")}`;
    });
  });

  const qtyValEl = backdrop.querySelector("#pdm-qty");
  backdrop.querySelector("#pdm-minus").addEventListener("click", () => {
    if (selectedQty > 1) {
      selectedQty--;
      qtyValEl.textContent = selectedQty;
    }
  });
  backdrop.querySelector("#pdm-plus").addEventListener("click", () => {
    selectedQty++;
    qtyValEl.textContent = selectedQty;
  });

  backdrop.querySelector("#pdm-add").addEventListener("click", () => {
    for (let i = 0; i < selectedQty; i++) {
      addToCart(p.id);
    }
    const addBtn = backdrop.querySelector("#pdm-add");
    addBtn.textContent = "✓ Added to Cart";
    addBtn.style.background = "#1a7a4a";
    setTimeout(() => {
      closeModal();
    }, 800);
  });

  backdrop.querySelector("#pdm-buy").addEventListener("click", () => {
    for (let i = 0; i < selectedQty; i++) {
      addToCart(p.id);
    }
    closeModal();
    window.location.href = "checkout.html";
  });
}

/* ---------- Cart Functions ---------- */
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;
  const existing = cart.find((c) => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCart();
  openCart();
  showAddedFeedback(id);
}

function removeFromCart(id) {
  cart = cart.filter((c) => c.id !== id);
  saveCart();
  updateCart();
}

function changeQty(id, delta) {
  const item = cart.find((c) => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((c) => c.id !== id);
  saveCart();
  updateCart();
}

function updateCart() {
  const count = cart.reduce((sum, c) => sum + c.qty, 0);
  const badge = document.getElementById("cart-count");
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle("visible", count > 0);
  }

  const itemsEl = document.getElementById("cart-items");
  const footerEl = document.getElementById("cart-footer");
  const totalEl = document.getElementById("cart-total-amount");

  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <p>Your cart is empty</p>
        <a href="#collections" class="btn btn-dark" onclick="closeCart()">Explore Fragrances</a>
      </div>`;
    if (footerEl) footerEl.style.display = "none";
  } else {
    itemsEl.innerHTML = cart
      .map(
        (c) => `
      <div class="cart-item">
        <img src="${c.image}" alt="${c.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <p class="cart-item-name">${c.name}</p>
          <p class="cart-item-price">LKR ${c.price.toLocaleString('en-LK')}</p>
          <div class="cart-qty-controls">
            <button class="cart-qty-btn" onclick="changeQty(${c.id}, -1)">-</button>
            <span class="cart-qty-num">${c.qty}</span>
            <button class="cart-qty-btn" onclick="changeQty(${c.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${c.id})" title="Remove item">✕</button>
      </div>`
      )
      .join("");
    if (footerEl) footerEl.style.display = "block";
    const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
    if (totalEl) totalEl.textContent = `LKR ${total.toLocaleString('en-LK')}`;
  }
}

function openCart() {
  document.getElementById("cart-sidebar").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function showAddedFeedback(id) {
  const btn = document.querySelector(`.add-to-cart-btn[data-id="${id}"]`);
  if (!btn) return;
  const orig = btn.textContent;
  btn.textContent = "✓ Added!";
  btn.style.background = "var(--brown)";
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = "";
  }, 1500);
}

/* ---------- Navbar Scroll ---------- */
function initNavbar() {
  const nav = document.getElementById("navbar");
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  // Hamburger
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Active link on scroll
  const sections = document.querySelectorAll("section[id], header[id]");
  const links = document.querySelectorAll(".nav-link");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add("active");
        }
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach((s) => observer.observe(s));
}

/* ---------- Search ---------- */
function initSearch() {
  const btn       = document.getElementById("search-btn");
  const overlay   = document.getElementById("search-overlay");
  const closeBtn  = document.getElementById("search-close");
  const input     = document.getElementById("search-input");
  const resultsEl = document.getElementById("search-results");

  if (!btn || !overlay) return;

  function openSearch() {
    overlay.classList.add("open");
    setTimeout(() => input && input.focus(), 150);
  }

  function closeSearch() {
    overlay.classList.remove("open");
    input.value = "";
    resultsEl.innerHTML = "";
  }

  btn.addEventListener("click", openSearch);
  closeBtn && closeBtn.addEventListener("click", closeSearch);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSearch();
  });

  /* â”€â”€ Live product search â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  input && input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();

    if (!query) { resultsEl.innerHTML = ""; return; }

    const matches = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.notes.toLowerCase().includes(query)
    );

    if (!matches.length) {
      resultsEl.innerHTML = `
        <div class="search-no-results">
          No fragrances found for <strong>"${input.value.trim()}"</strong>.<br>
          <span style="font-size:0.78rem;">Try searching by name, category, or scent note.</span>
        </div>`;
      return;
    }

    resultsEl.innerHTML = matches.map(p => `
      <div class="search-result-item" data-id="${p.id}">
        <img src="${p.image}" alt="${p.name}" class="search-result-img" />
        <div class="search-result-info">
          <p class="search-result-name">${highlightMatch(p.name, query)}</p>
          <p class="search-result-cat">${p.category}</p>
          <p class="search-result-notes">${p.notes}</p>
        </div>
        <span class="search-result-price">LKR ${p.price.toLocaleString("en-LK")}</span>
        <button class="search-result-add" data-id="${p.id}" id="sr-btn-${p.id}">Add</button>
      </div>
    `).join("");

    // Add to cart from results
    resultsEl.querySelectorAll(".search-result-add").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        addToCart(id);
        btn.textContent = "✓ Added";
        btn.classList.add("added");
        setTimeout(() => {
          btn.textContent = "Add";
          btn.classList.remove("added");
        }, 1600);
      });
    });

    // Click row -> scroll to product card & close search
    resultsEl.querySelectorAll(".search-result-item").forEach(row => {
      row.addEventListener("click", (e) => {
        if (e.target.classList.contains("search-result-add")) return;
        const id = row.dataset.id;
        closeSearch();
        const card = document.querySelector(`.product-card[data-id="${id}"]`);
        if (card) {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
          card.style.outline = "2px solid var(--gold)";
          card.style.borderRadius = "16px";
          card.style.transition = "outline .3s";
          setTimeout(() => { card.style.outline = ""; }, 2000);
        } else {
          document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
}

/* Helper: bold the matching part of the text */
function highlightMatch(text, query) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return text.slice(0, idx) +
    `<mark style="background:rgba(184,149,74,.2);color:var(--charcoal);border-radius:2px;">${text.slice(idx, idx + query.length)}</mark>` +
    text.slice(idx + query.length);
}

/* ---------- Cart Sidebar ---------- */
function initCart() {
  const btn = document.getElementById("cart-btn");
  const closeBtn = document.getElementById("cart-close");
  const overlay = document.getElementById("cart-overlay");

  btn && btn.addEventListener("click", openCart);
  closeBtn && closeBtn.addEventListener("click", closeCart);
  overlay && overlay.addEventListener("click", closeCart);
}

/* ---------- Hero Thumbnails ---------- */
function initHeroThumbs() {
  const thumbs = document.querySelectorAll(".thumb-item");
  const heroImg = document.getElementById("hero-img");

  const fragImages = [
    "hero_perfume.png",
    "product_noir.png",
    "product_rose.png",
    "product_oud.png",
  ];

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbs.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
      const idx = parseInt(thumb.dataset.fragrance);
      if (heroImg && fragImages[idx]) {
        heroImg.style.opacity = "0";
        heroImg.style.transform = "scale(0.96)";
        setTimeout(() => {
          heroImg.src = fragImages[idx];
          heroImg.style.opacity = "1";
          heroImg.style.transform = "";
        }, 250);
      }
    });
  });

  if (heroImg) {
    heroImg.style.transition = "opacity .3s ease, transform .3s ease";
  }
}

/* ---------- Particles ---------- */
function initParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 60 + 20;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 12 + 10}s;
      animation-delay: ${Math.random() * 15}s;
      opacity: 0;
    `;
    container.appendChild(p);
  }
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, idx * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ---------- Newsletter ---------- */
function initNewsletter() {
  const form = document.getElementById("nl-form");
  const success = document.getElementById("nl-success");
  const emailInput = document.getElementById("nl-email");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailInput && emailInput.value) {
      if (success) success.classList.add("visible");
      emailInput.value = "";
      setTimeout(() => success && success.classList.remove("visible"), 4000);
    }
  });
}

/* ---------- Smooth section reveal with stagger ---------- */
function initSectionReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll(".reveal");
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add("visible"), i * 120);
          });
        }
      });
    },
    { threshold: 0.05 }
  );

  document.querySelectorAll(".products-grid, .testimonials-track, .process-steps").forEach((el) => {
    observer.observe(el);
  });
}

/* ---------- Add reveal class to key elements ---------- */
function addRevealClasses() {
  document
    .querySelectorAll(
      ".testimonial-card, .process-step, .story-stat, .footer-col"
    )
    .forEach((el) => el.classList.add("reveal"));
}

/* ============================================================
   AUTH MODALS â€” Firebase Authentication + Firestore
   ============================================================ */
function initAuth() {
  const backdrop      = document.getElementById("auth-backdrop");
  const loginModal    = document.getElementById("login-modal");
  const registerModal = document.getElementById("register-modal");
  const accountBtn    = document.getElementById("account-btn");
  const loginClose    = document.getElementById("login-close");
  const registerClose = document.getElementById("register-close");
  const goToRegister  = document.getElementById("go-to-register");
  const goToLogin     = document.getElementById("go-to-login");
  const loginForm     = document.getElementById("login-form");
  const registerForm  = document.getElementById("register-form");

  /* â”€â”€ Open / Close helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  function openLogin() {
    clearForm(loginForm);
    backdrop.classList.add("open");
    loginModal.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(() => document.getElementById("login-email")?.focus(), 200);
  }
  function openRegister() {
    clearForm(registerForm);
    backdrop.classList.add("open");
    registerModal.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(() => document.getElementById("reg-firstname")?.focus(), 200);
  }
  function closeAll() {
    backdrop.classList.remove("open");
    loginModal.classList.remove("open");
    registerModal.classList.remove("open");
    document.body.style.overflow = "";
  }
  function clearForm(form) {
    if (!form) return;
    form.reset();
    form.querySelectorAll(".form-error").forEach((e) => (e.textContent = ""));
    form.querySelectorAll(".form-input").forEach((i) => i.classList.remove("error", "success"));
    const msg = form.querySelector(".auth-msg");
    if (msg) { msg.className = "auth-msg"; msg.textContent = ""; }
  }

  /* â”€â”€ Trigger: profile icon click â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  accountBtn && accountBtn.addEventListener("click", () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      showUserDropdown(currentUser, accountBtn);
    } else {
      openLogin();
    }
  });

  /* â”€â”€ Close â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  loginClose    && loginClose.addEventListener("click",    closeAll);
  registerClose && registerClose.addEventListener("click", closeAll);
  backdrop      && backdrop.addEventListener("click",      closeAll);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });

  /* â”€â”€ Switch panels â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  goToRegister && goToRegister.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.classList.remove("open");
    openRegister();
  });
  goToLogin && goToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    registerModal.classList.remove("open");
    openLogin();
  });

  /* â”€â”€ Password visibility toggles â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  document.querySelectorAll(".toggle-pw").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      const isText = input.type === "text";
      input.type = isText ? "password" : "text";
      btn.querySelector(".eye-icon").style.opacity = isText ? "1" : "0.45";
    });
  });

  /* â”€â”€ Validation helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  function setError(input, errEl, msg) {
    if (errEl) errEl.textContent = msg;
    input.classList.add("error");
    input.classList.remove("success");
  }
  function setSuccess(input, errEl) {
    if (errEl) errEl.textContent = "";
    input.classList.remove("error");
    input.classList.add("success");
  }
  function showMsg(el, text, type) {
    el.className = "auth-msg " + type;
    el.textContent = text;
  }
  function setLoading(btn, loading) {
    btn.disabled = loading;
    btn.querySelector(".btn-text").style.display  = loading ? "none"   : "inline";
    btn.querySelector(".btn-spinner").style.display = loading ? "inline" : "none";
  }

  /* â”€â”€ Map Firebase error codes to friendly messages â”€â”€â”€â”€â”€â”€â”€â”€ */
  function firebaseError(code) {
    const map = {
      "auth/email-already-in-use":    "This email is already registered. Please log in.",
      "auth/invalid-email":           "Please enter a valid email address.",
      "auth/weak-password":           "Password must be at least 6 characters.",
      "auth/user-not-found":          "No account found with this email.",
      "auth/wrong-password":          "Incorrect password. Please try again.",
      "auth/invalid-credential":      "Incorrect email or password. Please try again.",
      "auth/too-many-requests":       "Too many attempts. Please try again later.",
      "auth/network-request-failed":  "Network error. Check your connection.",
    };
    return map[code] || "Something went wrong. Please try again.";
  }

  /* â”€â”€ REGISTER â€” Firebase createUserWithEmailAndPassword â”€â”€â”€ */
  registerForm && registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fnInput      = document.getElementById("reg-firstname");
    const lnInput      = document.getElementById("reg-lastname");
    const emailInput   = document.getElementById("reg-email");
    const pwInput      = document.getElementById("reg-password");
    const confirmInput = document.getElementById("reg-confirm");
    const fnErr        = document.getElementById("reg-fn-err");
    const emailErr     = document.getElementById("reg-email-err");
    const pwErr        = document.getElementById("reg-pw-err");
    const confirmErr   = document.getElementById("reg-confirm-err");
    const msg          = document.getElementById("register-msg");
    const submitBtn    = document.getElementById("register-submit-btn");

    // Client-side validation
    let valid = true;
    if (!fnInput.value.trim()) {
      setError(fnInput, fnErr, "First name is required."); valid = false;
    } else { setSuccess(fnInput, fnErr); }

    if (!emailInput.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      setError(emailInput, emailErr, "Please enter a valid email."); valid = false;
    } else { setSuccess(emailInput, emailErr); }

    if (pwInput.value.length < 6) {
      setError(pwInput, pwErr, "Password must be at least 6 characters."); valid = false;
    } else { setSuccess(pwInput, pwErr); }

    if (confirmInput.value !== pwInput.value) {
      setError(confirmInput, confirmErr, "Passwords do not match."); valid = false;
    } else if (confirmInput.value) { setSuccess(confirmInput, confirmErr); }

    if (!valid) return;

    setLoading(submitBtn, true);

    try {
      // 1. Create the auth account
      const credential = await auth.createUserWithEmailAndPassword(
        emailInput.value.trim(),
        pwInput.value
      );

      const user = credential.user;

      // 2. Update Firebase display name
      await user.updateProfile({ displayName: fnInput.value.trim() + " " + (lnInput.value.trim() || "") });

      // 3. Save extra profile data to Firestore
      await db.collection("users").doc(user.uid).set({
        firstName: fnInput.value.trim(),
        lastName:  lnInput.value.trim() || "",
        email:     emailInput.value.trim(),
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

      showMsg(msg, "Account created! Welcome to AURELIA, " + fnInput.value.trim() + "!", "success");
      setTimeout(closeAll, 1600);

    } catch (err) {
      showMsg(msg, firebaseError(err.code), "error");
    } finally {
      setLoading(submitBtn, false);
    }
  });

  /* â”€â”€ LOGIN â€” Firebase signInWithEmailAndPassword â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  loginForm && loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("login-email");
    const pwInput    = document.getElementById("login-password");
    const emailErr   = document.getElementById("login-email-err");
    const pwErr      = document.getElementById("login-pw-err");
    const msg        = document.getElementById("login-msg");
    const submitBtn  = document.getElementById("login-submit-btn");

    let valid = true;
    if (!emailInput.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      setError(emailInput, emailErr, "Please enter a valid email."); valid = false;
    } else { setSuccess(emailInput, emailErr); }

    if (!pwInput.value) {
      setError(pwInput, pwErr, "Password is required."); valid = false;
    } else { setSuccess(pwInput, pwErr); }

    if (!valid) return;

    setLoading(submitBtn, true);

    try {
      await auth.signInWithEmailAndPassword(emailInput.value.trim(), pwInput.value);
      showMsg(msg, "âœ“ Welcome back!", "success");
      setTimeout(closeAll, 1200);

    } catch (err) {
      showMsg(msg, firebaseError(err.code), "error");
    } finally {
      setLoading(submitBtn, false);
    }
  });

  /* â”€â”€ onAuthStateChanged â€” keep UI in sync â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      // Step 1: start with displayName (most reliable for registered users)
      let firstName = user.displayName?.trim().split(" ")[0] || "";
      try {
        // Step 2: Firestore can override with stored firstName
        const doc = await db.collection("users").doc(user.uid).get();
        if (doc.exists && doc.data().firstName) {
          firstName = doc.data().firstName;
        }
      } catch (_) {}
      // Step 3: last resort â€” parse from email
      if (!firstName) firstName = user.email.split("@")[0];

      // Cache for checkout prefill
      try {
        localStorage.setItem("aurelia_user", JSON.stringify({ email: user.email, firstName }));
      } catch (_) {}

      updateAccountBtn(firstName, user.email);
    } else {
      localStorage.removeItem("aurelia_user");
      if (accountBtn) {
        accountBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
      }
    }
  });

  /* â”€â”€ Update profile icon to gold initials â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  function updateAccountBtn(firstName, email) {
    if (!accountBtn) return;
    const initial = (firstName?.[0] || "A").toUpperCase();
    accountBtn.innerHTML = `
      <span title="${email}" style="
        width:32px;height:32px;border-radius:50%;
        background:linear-gradient(135deg,var(--gold),var(--gold-light));
        color:#fff;font-size:0.72rem;font-weight:700;
        display:flex;align-items:center;justify-content:center;
        letter-spacing:0.05em;font-family:'Jost',sans-serif;
      ">${initial}</span>`;
  }

  /* â”€â”€ User dropdown (signed-in state) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  function showUserDropdown(firebaseUser, anchor) {
    const existing = document.getElementById("user-dropdown");
    if (existing) { existing.remove(); return; }

    // Resolve name: Firestore cache â†’ displayName â†’ email prefix
    const cached    = (() => { try { return JSON.parse(localStorage.getItem("aurelia_user")); } catch { return null; } })();
    const firstName = cached?.firstName || firebaseUser.displayName?.trim().split(" ")[0] || firebaseUser.email.split("@")[0];
    const email     = firebaseUser.email;
    const initial   = (firstName[0] || "A").toUpperCase();

    const menu = document.createElement("div");
    menu.id = "user-dropdown";
    menu.style.cssText = `
      position:absolute;top:calc(100% + 8px);right:0;
      background:#fff;border-radius:16px;
      box-shadow:0 16px 48px rgba(10,6,2,.2);
      padding:20px;min-width:240px;z-index:4000;
      border:1px solid var(--cream-dark);
      font-family:'Jost',sans-serif;
    `;
    menu.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid var(--cream-dark);">
        <span style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gold-light));color:#fff;font-size:0.85rem;font-weight:700;display:flex;align-items:center;justify-content:center;">
          ${initial}
        </span>
        <div>
          <p style="font-weight:600;font-size:0.9rem;color:var(--charcoal);margin-bottom:2px;">${firstName}</p>
          <p style="font-size:0.72rem;color:var(--text-muted);">${email}</p>
        </div>
      </div>
      <a href="#" id="dd-my-orders" style="display:block;font-size:0.8rem;color:var(--charcoal);padding:8px 0;border-bottom:1px solid var(--cream-dark);transition:color .2s;" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--charcoal)'">My Orders</a>
      <button id="logout-btn" style="
        width:100%;margin-top:14px;padding:10px;border-radius:10px;
        background:var(--charcoal);color:var(--cream);
        border:none;cursor:pointer;font-family:'Jost',sans-serif;
        font-size:0.78rem;letter-spacing:0.12em;text-transform:uppercase;
        transition:background .2s;
      " onmouseover="this.style.background='var(--brown)'" onmouseout="this.style.background='var(--charcoal)'">
        Sign Out
      </button>
    `;

    anchor.parentElement.style.position = "relative";
    anchor.parentElement.appendChild(menu);

    // My Orders
    document.getElementById("dd-my-orders").addEventListener("click", (e) => {
      e.preventDefault();
      menu.remove();
      showOrdersModal(firstName);
    });

    // Sign out
    document.getElementById("logout-btn").addEventListener("click", async () => {
      await auth.signOut();
      menu.remove();
    });

    // Click outside closes dropdown
    setTimeout(() => {
      document.addEventListener("click", function dismiss(ev) {
        if (!menu.contains(ev.target) && ev.target !== anchor) {
          menu.remove();
          document.removeEventListener("click", dismiss);
        }
      });
    }, 100);
  }

  /* â”€â”€ My Orders Modal â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  function showOrdersModal(firstName) {
    // Remove existing
    const old = document.getElementById("orders-modal-backdrop");
    if (old) old.remove();

    let orders = [];
    try { orders = JSON.parse(localStorage.getItem("aurelia_orders") || "[]"); } catch (_) {}
    orders = orders.slice().reverse(); // newest first

    function formatDate(iso) {
      try {
        return new Date(iso).toLocaleDateString("en-LK", { day: "numeric", month: "short", year: "numeric" });
      } catch { return iso; }
    }

    const ordersHTML = orders.length
      ? orders.map(o => `
          <div style="background:#faf7f3;border:1px solid #e8dfd3;border-radius:12px;padding:16px;margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
              <span style="font-size:0.75rem;font-weight:600;color:var(--gold);letter-spacing:0.08em;">${o.id}</span>
              <span style="font-size:0.72rem;color:var(--text-muted);">${formatDate(o.date)}</span>
            </div>
            <div style="margin-bottom:10px;">
              ${(o.items||[]).map(i =>
                `<div style="display:flex;justify-content:space-between;font-size:0.8rem;color:var(--text);padding:3px 0;">
                  <span>${i.name} <span style="color:var(--text-muted);">Ã— ${i.qty}</span></span>
                  <span>LKR ${(i.price * i.qty).toLocaleString("en-LK")}</span>
                </div>`
              ).join("")}
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid #e8dfd3;">
              <span style="font-size:0.8rem;color:var(--text-muted);">Total</span>
              <strong style="font-family:'Cormorant Garamond',serif;font-size:1.05rem;color:var(--charcoal);">LKR ${(o.total||0).toLocaleString("en-LK")}</strong>
            </div>
          </div>
        `).join("")
      : `<div style="text-align:center;padding:48px 20px;">
          <div style="font-size:2.5rem;margin-bottom:12px;">ðŸ›ï¸</div>
          <p style="font-family:'Cormorant Garamond',serif;font-size:1.15rem;color:var(--charcoal);margin-bottom:8px;">No orders yet</p>
          <p style="font-size:0.8rem;color:var(--text-muted);">Your completed orders will appear here.</p>
        </div>`;

    const backdrop = document.createElement("div");
    backdrop.id = "orders-modal-backdrop";
    backdrop.style.cssText = `
      position:fixed;inset:0;background:rgba(10,6,2,.55);
      backdrop-filter:blur(6px);z-index:5000;
      display:flex;align-items:center;justify-content:center;
      padding:20px;
    `;
    backdrop.innerHTML = `
      <div style="
        background:#fff;border-radius:24px;width:100%;max-width:480px;
        max-height:80vh;display:flex;flex-direction:column;
        box-shadow:0 32px 80px rgba(10,6,2,.25);
        overflow:hidden;
        font-family:'Jost',sans-serif;
      ">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:20px 24px;border-bottom:1px solid #ebe2d6;">
          <div>
            <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:500;color:#1a1209;">My Orders</h3>
            <p style="font-size:0.72rem;color:#7a6555;margin-top:2px;">${orders.length} order${orders.length !== 1 ? "s" : ""} • ${firstName}</p>
          </div>
          <button id="orders-close" style="
            width:36px;height:36px;border-radius:50%;border:none;
            background:#f5efe6;cursor:pointer;font-size:1.1rem;
            display:flex;align-items:center;justify-content:center;
            color:#7a6555;transition:background .2s;
          " onmouseover="this.style.background='#ebe2d6'" onmouseout="this.style.background='#f5efe6'">
            ✕
          </button>
        </div>
        <div style="overflow-y:auto;padding:20px 24px;flex:1;">
          ${ordersHTML}
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);
    document.body.style.overflow = "hidden";

    function closeOrders() {
      backdrop.remove();
      document.body.style.overflow = "";
    }

    document.getElementById("orders-close").addEventListener("click", closeOrders);
    backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeOrders(); });
    document.addEventListener("keydown", function esc(e) {
      if (e.key === "Escape") { closeOrders(); document.removeEventListener("keydown", esc); }
    });
  }
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  renderProducts();
  addRevealClasses();
  initNavbar();
  initSearch();
  initCart();
  initHeroThumbs();
  initParticles();
  initReveal();
  initSectionReveal();
  initNewsletter();
  updateCart();
  initAuth();

  // Auto-open cart if returning from checkout
  if (new URLSearchParams(window.location.search).get("cart") === "open") {
    setTimeout(openCart, 400);
    // Clean up the URL without reloading
    history.replaceState(null, "", window.location.pathname);
  }
});

