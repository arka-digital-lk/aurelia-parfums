# ✨ AURELIA PARFUMS — Luxury Perfume E-Commerce Platform

> **Essence of Every Moment** — An artisanal luxury fragrance e-commerce web application crafted with pure HTML, CSS, JavaScript, and integrated with Firebase Authentication and Cloud Firestore.

---

## 🌟 Overview

**AURELIA PARFUMS** is a high-end, responsive e-commerce web application designed to showcase and sell luxury fragrances. Built with a focus on premium aesthetics, liquid-smooth micro-interactions, and high performance, Aurelia Parfums offers an immersive shopping experience complete with scent pyramids, longevity ratings, interactive cart management, dynamic checkout, and user accounts powered by Firebase.

---

## 🚀 Features

### 🛍️ Product Catalog & Fragrance Pyramids

- **Detailed Scent Profiles**: Each fragrance includes full breakdowns for Top Notes, Heart Notes, Base Notes, Concentration (EDP / Extrait), Longevity (8–18 hours), and Sillage rating.
- **Dynamic Category Filtering**: Browse by Eau de Parfum, Extrait de Parfum, Cologne, or Discovery Sets.
- **Instant Search Modal**: Real-time keyword search across perfume names, notes, and categories.

### 🛒 Interactive Shopping Cart & Sync

- **Slide-out Cart Drawer**: Manage quantities, view item subtotals, and add promo codes seamlessly.
- **Dual Persistence**: Cart state is saved locally in `localStorage` and automatically synchronized with Firebase Firestore for authenticated users.

### 💳 Dynamic Checkout System

- **Multi-Step Order Process**: Collect shipping details (with pre-populated Sri Lankan districts/cities), select shipping options, and review order summaries.
- **Multiple Payment Gateways**: Support for Credit/Debit Cards, Cash on Delivery (COD), and Direct Bank Transfers.
- **Promo Code Engine**: Dynamic discount calculation and dynamic LKR currency formatting.

### 🔐 User Authentication & Account Management

- **Firebase Auth Integration**: User registration, login, logout, and session persistence.
- **User Dashboard & History**: Saved profiles and synchronized order histories.

### 🎨 Premium Visual Design & UX

- **Luxury Aesthetic**: Sophisticated dark palette (`#0B0B0C`, `#D4AF37` gold accents) paired with elegant typography (_Cormorant Garamond_ & _Jost_).
- **Responsive & Mobile-First**: Hamburger navigation drawer, modal dialogs, and adaptive layout for all viewports.
- **Custom Toast Notification System**: Real-time user feedback for actions like adding items to cart, promo code redemption, and checkout completion.

---

## 🛠️ Project Structure

```
Perfume E-commerce Website/
├── index.html              # Main Landing & Shop Page
├── checkout.html           # Dedicated Checkout & Order Summary Page
├── README.md               # Repository Documentation
├── css/
│   ├── style.css           # Global Styles, Glassmorphism, Theme Variables & Layouts
│   └── checkout.css        # Specific Styles for Checkout Workflow
├── js/
│   ├── script.js           # Core Application Logic, Product Catalog, Search & Cart
│   ├── auth.js             # Authentication Flow & User Session Management
│   ├── checkout.js         # Shipping, Payment Handling & Order Processing
│   └── firebase-config.js  # Firebase Credentials & Firestore Initialization
├── auth/
│   ├── login.html          # User Sign-In Page
│   └── register.html       # User Registration Page
└── images/                 # High-Resolution Product & Hero Assets
    ├── hero_perfume.png
    ├── product_ceylon.png
    ├── product_lotus.png
    ├── product_noir.png
    ├── product_oud.png
    ├── product_rose.png
    ├── product_saffron.png
    └── product_velvet.png
```

---

## 💻 Tech Stack

- **Frontend**: HTML5, Vanilla CSS3 (Custom Properties, Flexbox, CSS Grid), JavaScript (ES6+)
- **Backend & Database**: Firebase v10 (Authentication & Cloud Firestore)
- **Typography & Icons**: Google Fonts (_Cormorant Garamond_, _Jost_), Inline SVG Icons
- **Deployment & Hosting**: Compatible with GitHub Pages, Vercel, Netlify, or Firebase Hosting

---

## ⚙️ Getting Started

### Prerequisites

All you need is a modern web browser (Google Chrome, Firefox, Safari, or Microsoft Edge).

### Installation & Running Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/arka-digital-lk/aurelia-parfums.git
   cd "Perfume E-commerce Website"
   ```

2. **Serve the Application**
   You can open `index.html` directly in your browser, or use a local development server for the best experience:

   Using VS Code:
   - Install the **Live Server** extension.
   - Right-click `index.html` and select **Open with Live Server**.

   Using Node.js (`npx`):

   ```bash
   npx serve .
   ```

---

## 🔑 Firebase Setup (Optional)

To enable real-time backend authentication and Firestore order saving:

1. Create a project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication** (Email/Password method).
3. Enable **Cloud Firestore Database**.
4. Update `js/firebase-config.js` with your project credentials:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the root repository for details.

---

<p align="center">
  Crafted with ❤️ for <b>Aurelia Parfums</b>
</p>
