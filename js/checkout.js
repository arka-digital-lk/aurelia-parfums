/* ============================================================
   AURELIA PARFUMS — checkout.js
   Reads cart from localStorage and powers the checkout page
   ============================================================ */

const SHIPPING_FEE = 299;
const VALID_CODES  = { "AURELIA10": 10, "WELCOME15": 15, "SL20": 20 };

let appliedDiscount = 0; // percentage

/* ── Load cart from localStorage ─────────────────────────── */
function loadCart() {
  try {
    return JSON.parse(localStorage.getItem("aurelia_cart")) || [];
  } catch {
    return [];
  }
}

/* ── Render order summary ────────────────────────────────── */
function renderSummary() {
  const cart     = loadCart();
  const itemsEl  = document.getElementById("co-items");
  const subEl    = document.getElementById("co-subtotal");
  const shipEl   = document.getElementById("co-shipping");
  const totalEl  = document.getElementById("co-total");
  const discRow  = document.getElementById("co-discount-row");

  if (!cart.length) {
    itemsEl.innerHTML = `<p style="color:#8a7d70;font-size:.85rem;padding:16px 0;">Your cart is empty. <a href="index.html" style="color:#1c69d4;text-decoration:underline;">Continue shopping</a></p>`;
    if (subEl)   subEl.textContent  = "LKR 0";
    if (shipEl)  shipEl.textContent = "—";
    if (totalEl) totalEl.textContent = "0";
    return;
  }

  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const shipping = getSelectedShipping();
  const discount = Math.round(subtotal * appliedDiscount / 100);
  const total    = subtotal - discount + shipping;

  itemsEl.innerHTML = cart.map(c => `
    <div class="co-item">
      <div class="co-item-img-wrap">
        <img src="${c.image}" alt="${c.name}" class="co-item-img" />
        <span class="co-item-qty">${c.qty}</span>
      </div>
      <div class="co-item-info">
        <p class="co-item-name">${c.name}</p>
        <p class="co-item-sub">${c.category || "Eau de Parfum"}</p>
      </div>
      <span class="co-item-price">LKR ${(c.price * c.qty).toLocaleString("en-LK")}</span>
    </div>
  `).join("");

  if (subEl)   subEl.textContent  = `LKR ${subtotal.toLocaleString("en-LK")}`;
  if (shipEl)  shipEl.textContent = shipping === 0 ? "Free" : `LKR ${shipping.toLocaleString("en-LK")}`;

  // Discount row
  if (discRow) {
    if (appliedDiscount > 0) {
      discRow.style.display = "flex";
      document.getElementById("co-discount-amount").textContent =
        `−LKR ${discount.toLocaleString("en-LK")}`;
    } else {
      discRow.style.display = "none";
    }
  }

  if (totalEl) totalEl.textContent = total.toLocaleString("en-LK");
}

/* ── Get selected shipping fee ───────────────────────────── */
function getSelectedShipping() {
  const checked = document.querySelector('input[name="shipping"]:checked');
  return checked ? parseInt(checked.value) : SHIPPING_FEE;
}

/* ── Shipping option toggle ──────────────────────────────── */
function initShipping() {
  document.querySelectorAll(".co-shipping-option").forEach(opt => {
    opt.addEventListener("click", () => {
      document.querySelectorAll(".co-shipping-option").forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      opt.querySelector("input").checked = true;
      renderSummary();
    });
  });
}

/* ── Payment option toggle ───────────────────────────────── */
function initPayment() {
  document.querySelectorAll(".co-payment-option").forEach(opt => {
    opt.addEventListener("click", () => {
      document.querySelectorAll(".co-payment-option").forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      opt.querySelector("input").checked = true;
    });
  });
}

/* ── Billing option toggle ───────────────────────────────── */
function initBilling() {
  document.querySelectorAll(".co-billing-option").forEach(opt => {
    opt.addEventListener("click", () => {
      document.querySelectorAll(".co-billing-option").forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      opt.querySelector("input").checked = true;
    });
  });
}

/* ── Discount code ───────────────────────────────────────── */
function initDiscount() {
  const btn   = document.getElementById("apply-discount");
  const input = document.getElementById("discount-code");
  const msgEl = document.getElementById("discount-msg");

  btn && btn.addEventListener("click", () => {
    const code = input.value.trim().toUpperCase();
    if (!code) {
      msgEl.style.color = "#c0392b";
      msgEl.textContent = "Please enter a discount code.";
      return;
    }
    if (VALID_CODES[code]) {
      appliedDiscount = VALID_CODES[code];
      msgEl.style.color = "#1a7a4a";
      msgEl.textContent = `✓ Code applied! ${appliedDiscount}% discount activated.`;
      input.style.borderColor = "#1a7a4a";
      renderSummary();
    } else {
      appliedDiscount = 0;
      msgEl.style.color = "#c0392b";
      msgEl.textContent = "Invalid discount code. Please try again.";
      input.style.borderColor = "#c0392b";
      renderSummary();
    }
  });
}

/* ── Pre-fill from saved user ────────────────────────────── */
function prefillFromUser() {
  try {
    const saved = localStorage.getItem("aurelia_user");
    if (!saved) return;
    const user = JSON.parse(saved);
    const emailEl = document.getElementById("contact-email");
    const fnEl    = document.getElementById("first-name");
    const lnEl    = document.getElementById("last-name");
    if (emailEl && user.email)     emailEl.value = user.email;
    if (fnEl    && user.firstName) fnEl.value    = user.firstName;
    if (lnEl    && user.lastName)  lnEl.value    = user.lastName;
  } catch {}
}

/* ── Form validation ─────────────────────────────────────── */
function validate() {
  let ok = true;
  const fields = [
    { id: "last-name",  errId: "last-name-err",  msg: "Last name is required." },
    { id: "address",    errId: "address-err",     msg: "Address is required." },
    { id: "city",       errId: "city-err",        msg: "City is required." },
  ];
  fields.forEach(f => {
    const el  = document.getElementById(f.id);
    const err = document.getElementById(f.errId);
    if (el && !el.value.trim()) {
      if (err) err.textContent = f.msg;
      el.classList.add("error");
      ok = false;
    } else {
      if (err) err.textContent = "";
      if (el) el.classList.remove("error");
    }
  });

  // Email
  const emailEl = document.getElementById("contact-email");
  if (emailEl && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
    emailEl.classList.add("error");
    ok = false;
  } else if (emailEl) {
    emailEl.classList.remove("error");
  }

  return ok;
}

/* ── Generate order number ───────────────────────────────── */
function generateOrderNumber() {
  return "AUR-" + Date.now().toString(36).toUpperCase() + "-" +
    Math.floor(Math.random() * 9000 + 1000);
}

/* ── Place order ─────────────────────────────────────────── */
function initPayBtn() {
  const btn = document.getElementById("pay-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const cart = loadCart();
    if (!cart.length) {
      alert("Your cart is empty! Please add items before checking out.");
      window.location.href = "index.html";
      return;
    }
    if (!validate()) {
      // Scroll to first error
      const firstErr = document.querySelector(".co-input.error");
      if (firstErr) firstErr.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Show loading state
    btn.disabled = true;
    document.getElementById("pay-btn-text").textContent = "Processing…";

    // Simulate payment processing
    setTimeout(() => {
      const orderNum = generateOrderNumber();

      // Build order record
      const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
      const shipping = getSelectedShipping();
      const discount = Math.round(subtotal * appliedDiscount / 100);
      const total    = subtotal - discount + shipping;

      const order = {
        id:        orderNum,
        date:      new Date().toISOString(),
        items:     cart,
        subtotal,
        shipping,
        discount,
        total,
        email:     document.getElementById("contact-email")?.value || "",
        address:   [
          document.getElementById("first-name")?.value,
          document.getElementById("last-name")?.value,
          document.getElementById("address")?.value,
          document.getElementById("city")?.value,
        ].filter(Boolean).join(", "),
      };

      // Save order to localStorage
      try {
        const orders = JSON.parse(localStorage.getItem("aurelia_orders") || "[]");
        orders.push(order);
        localStorage.setItem("aurelia_orders", JSON.stringify(orders));
      } catch (_) {}

      // Save order & trigger email in Firebase Firestore
      if (window.db) {
        try {
          db.collection("orders").doc(orderNum).set(order);
          db.collection("mail").add({
            to: order.email,
            message: {
              subject: `Order Confirmation #${order.id} - AURELIA PARFUMS`,
              text: `Thank you for your order #${order.id}. Total: LKR ${order.total.toLocaleString("en-LK")}`,
              html: `<h2>Order Confirmation #${order.id}</h2><p>Thank you for shopping with AURELIA PARFUMS.</p><p>Total Paid: <strong>LKR ${order.total.toLocaleString("en-LK")}</strong></p><p>Delivery Address: ${order.address}</p>`
            }
          });
          console.log("🔥 Order & Email document saved to Firebase Firestore!");
        } catch (err) {
          console.warn("Firebase Firestore note:", err);
        }
      }

      // Clear cart
      localStorage.removeItem("aurelia_cart");

      // Show success UI
      document.querySelector(".co-submit-row").style.display = "none";

      const successEl = document.getElementById("co-success");
      if (successEl) {
        successEl.style.display = "block";
        const orderNumEl = document.getElementById("co-order-number");
        if (orderNumEl) orderNumEl.textContent = orderNum;
        successEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 2200);
  });
}

/* ── Init ────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderSummary();
  initShipping();
  initPayment();
  initBilling();
  initDiscount();
  prefillFromUser();
  initPayBtn();
});
