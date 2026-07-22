/* ============================================================
   AURELIA PARFUMS — js/auth.js
   Dedicated Authentication Module (Firebase Auth + Firestore)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initAuthPage();
  initAuthHeaderState();
});

/* ── Global Auth State Observer ───────────────────────────── */
function initAuthHeaderState() {
  if (!window.auth) return;

  auth.onAuthStateChanged(async (user) => {
    const accountBtn = document.getElementById("account-btn");
    if (!accountBtn) return;

    if (user) {
      // Resolve Display Name & Avatar Initial
      let displayName = user.displayName || "";
      if (!displayName && window.db) {
        try {
          const doc = await db.collection("users").doc(user.uid).get();
          if (doc.exists) {
            const data = doc.data();
            displayName = `${data.firstName || ""} ${data.lastName || ""}`.trim();
          }
        } catch (_) {}
      }
      if (!displayName) displayName = user.email ? user.email.split("@")[0] : "User";

      const initial = displayName.charAt(0).toUpperCase();

      accountBtn.innerHTML = `
        <span style="
          width:28px;height:28px;border-radius:50%;background:var(--gold);
          color:#fff;display:flex;align-items:center;justify-content:center;
          font-weight:600;font-size:0.8rem;text-transform:uppercase;
        ">${initial}</span>
      `;
      accountBtn.title = `Logged in as ${displayName}`;

      accountBtn.onclick = (e) => {
        e.stopPropagation();
        toggleUserDropdown(user, displayName, accountBtn);
      };
    } else {
      accountBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      `;
      accountBtn.title = "Log in";
      accountBtn.onclick = () => {
        window.location.href = window.location.pathname.includes("/auth/") ? "login.html" : "auth/login.html";
      };
    }
  });
}

function toggleUserDropdown(user, name, anchorBtn) {
  const existing = document.getElementById("user-dropdown-menu");
  if (existing) { existing.remove(); return; }

  const menu = document.createElement("div");
  menu.id = "user-dropdown-menu";
  menu.style.cssText = `
    position: absolute; top: 60px; right: 24px; width: 220px;
    background: #ffffff; border: 1px solid var(--cream-dark);
    border-radius: 16px; box-shadow: 0 16px 40px rgba(10,6,2,0.15);
    padding: 12px; z-index: 5000; font-family: 'Jost', sans-serif;
  `;

  menu.innerHTML = `
    <div style="padding: 8px 12px; border-bottom: 1px solid var(--cream-dark); margin-bottom: 8px;">
      <p style="font-weight: 600; font-size: 0.88rem; color: var(--charcoal);">${name}</p>
      <p style="font-size: 0.75rem; color: var(--text-muted); text-overflow: ellipsis; overflow: hidden;">${user.email}</p>
    </div>
    <a href="#" id="drop-orders" style="display: block; padding: 8px 12px; font-size: 0.82rem; color: var(--charcoal); text-decoration: none; border-radius: 8px;">📦 My Orders</a>
    <a href="#" id="drop-logout" style="display: block; padding: 8px 12px; font-size: 0.82rem; color: #c0392b; text-decoration: none; border-radius: 8px; font-weight: 500;">🚪 Log Out</a>
  `;

  document.body.appendChild(menu);

  document.getElementById("drop-orders").onclick = (e) => {
    e.preventDefault();
    menu.remove();
    if (window.showOrdersModal) showOrdersModal();
    else alert("Please visit home page to view orders.");
  };

  document.getElementById("drop-logout").onclick = (e) => {
    e.preventDefault();
    menu.remove();
    auth.signOut().then(() => {
      localStorage.removeItem("aurelia_user");
      window.location.reload();
    });
  };

  document.addEventListener("click", function closeMenu(e) {
    if (!menu.contains(e.target) && e.target !== anchorBtn) {
      menu.remove();
      document.removeEventListener("click", closeMenu);
    }
  });
}

/* ── Dedicated Login & Register Page Handler ─────────────── */
function initAuthPage() {
  // Password visibility toggle buttons
  document.querySelectorAll(".toggle-pw").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      const isText = input.type === "text";
      input.type = isText ? "password" : "text";
    });
  });

  // Dedicated Login Form
  const loginForm = document.getElementById("dedicated-login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value.trim();
      const pass  = document.getElementById("login-password").value;
      const msgEl = document.getElementById("login-msg");
      const submitBtn = document.getElementById("login-submit-btn");

      if (!email || !pass) {
        showMsg(msgEl, "Please fill in all required fields.", "error");
        return;
      }

      setLoading(submitBtn, true);
      try {
        const cred = await auth.signInWithEmailAndPassword(email, pass);
        showMsg(msgEl, "✓ Login successful! Redirecting...", "success");

        // Save local state
        localStorage.setItem("aurelia_user", JSON.stringify({ email: cred.user.email, uid: cred.user.uid }));

        setTimeout(() => { window.location.href = window.location.pathname.includes("/auth/") ? "../index.html" : "index.html"; }, 1000);
      } catch (err) {
        showMsg(msgEl, getFriendlyError(err.code), "error");
        setLoading(submitBtn, false);
      }
    });
  }

  // Dedicated Register Form
  const regForm = document.getElementById("dedicated-register-form");
  if (regForm) {
    regForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const fn    = document.getElementById("reg-firstname").value.trim();
      const ln    = document.getElementById("reg-lastname").value.trim();
      const email = document.getElementById("reg-email").value.trim();
      const pass  = document.getElementById("reg-password").value;
      const conf  = document.getElementById("reg-confirm").value;
      const msgEl = document.getElementById("register-msg");
      const submitBtn = document.getElementById("register-submit-btn");

      if (!fn || !email || !pass || !conf) {
        showMsg(msgEl, "Please fill in all required fields.", "error");
        return;
      }
      if (pass.length < 6) {
        showMsg(msgEl, "Password must be at least 6 characters.", "error");
        return;
      }
      if (pass !== conf) {
        showMsg(msgEl, "Passwords do not match.", "error");
        return;
      }

      setLoading(submitBtn, true);
      try {
        const cred = await auth.createUserWithEmailAndPassword(email, pass);
        const fullName = `${fn} ${ln}`.trim();
        await cred.user.updateProfile({ displayName: fullName });

        if (window.db) {
          await db.collection("users").doc(cred.user.uid).set({
            firstName: fn,
            lastName: ln,
            email: email,
            createdAt: new Date().toISOString()
          });
        }

        showMsg(msgEl, "✓ Account created successfully! Redirecting...", "success");
        localStorage.setItem("aurelia_user", JSON.stringify({ email, firstName: fn, lastName: ln }));

        setTimeout(() => { window.location.href = window.location.pathname.includes("/auth/") ? "../index.html" : "index.html"; }, 1000);
      } catch (err) {
        showMsg(msgEl, getFriendlyError(err.code), "error");
        setLoading(submitBtn, false);
      }
    });
  }
}

function showMsg(el, text, type) {
  if (!el) return;
  el.style.display = "block";
  el.style.padding = "10px 14px";
  el.style.borderRadius = "8px";
  el.style.fontSize = "0.82rem";
  el.style.marginBottom = "16px";
  if (type === "error") {
    el.style.background = "#fceae8";
    el.style.color = "#c0392b";
    el.style.border = "1px solid #f5b7b1";
  } else {
    el.style.background = "#e8f8f5";
    el.style.color = "#1a7a4a";
    el.style.border = "1px solid #a3e4d7";
  }
  el.textContent = text;
}

function setLoading(btn, loading) {
  if (!btn) return;
  btn.disabled = loading;
  btn.style.opacity = loading ? "0.7" : "1";
}

function getFriendlyError(code) {
  switch (code) {
    case "auth/email-already-in-use": return "This email is already registered. Please log in.";
    case "auth/invalid-email": return "Please enter a valid email address.";
    case "auth/weak-password": return "Password must be at least 6 characters.";
    case "auth/user-not-found": return "No account found with this email.";
    case "auth/wrong-password": return "Incorrect password. Please try again.";
    default: return "An error occurred. Please try again.";
  }
}
