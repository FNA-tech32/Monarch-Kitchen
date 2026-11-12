# 🍽️ Monarch Kitchen

> **Traditional and Hygienic Food** — *For the Love of Delicious Food!*

Welcome to **Monarch Kitchen**, an exquisite restaurant and food discovery web application built with **React.js**. Monarch Kitchen offers customers an authentic culinary journey blending royal taste, rich Indian spices, and traditional recipes prepared under the highest standards of hygiene and freshness.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Pages & Routes](#-pages--routes)
- [Contact Details (Primary & Alternative)](#-contact-details-primary--alternative)
- [Tech Stack](#-tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Building for Production](#building-for-production)
- [Responsive Design](#-responsive-design)
- [License](#-license)

---

## 📖 Overview

**Monarch Kitchen** is designed to provide food enthusiasts with a seamless digital browsing experience. Whether you're craving traditional Maharashtrian delicacies, royal North Indian curries, hearty fast food, or freshly baked desserts, Monarch Kitchen provides an interactive menu, transparent pricing, and instant contact support.

---

## ✨ Key Features

- **Royal Branding & Modern UI**: Rebranded with an elegant color palette (`#910c36` / `#c93463`), clean typography, and interactive components.
- **Multi-Category Food Menu**:
  - 🍕 **Fast Food**: Authentic pizzas, smash burgers, stir-fried noodles, and frost desserts.
  - 🥗 **Vegetarian Specials**: South Indian dosas, soft idlis, stuffed parathas, authentic Misal Pav, Poha, and Sabudana Khichdi.
  - 🍗 **Non-Veg Delights**: Rich chicken gravies, aromatic dum biryani, mutton specialties, and egg curries.
- **Primary & Alternative Contact Information**:
  - Multi-tier phone numbers and email support for orders, catering, and general support.
  - Alternative branch and landmark details.
- **Interactive Contact Form**:
  - Name, email, primary contact, optional alternative contact, inquiry type dropdown, and message box with live submission feedback.
- **Interactive Google Maps**: Real-time embedded map showing the restaurant's location.
- **Client-Side Routing**: Smooth page transitions using `react-router-dom` v6 without page reloads.
- **Mobile Responsive**: Fully adaptive across smartphones, tablets, laptops, and desktops.

---

## 🗺️ Pages & Routes

| Route | Page Component | Description |
|---|---|---|
| `/` | `Home` | Hero landing banner, category inspiration, service guarantees, and popular recommendations. |
| `/about` | `About` | Brand history, quality mission, and culinary philosophy of Monarch Kitchen. |
| `/products` | `Products` | Master product catalog featuring quick-order food cards with pricing and discounts. |
| `/fastfood` | `FastFood` | Dedicated fast-food section with nutritional facts, pricing, and origin notes. |
| `/vegeterian` | `Vegeterian` | Pure veg delicacies including traditional breakfast and thali items. |
| `/nonveg` | `Nonveg` | High-protein non-vegetarian culinary options. |
| `/categories` | `Categories` | Dropdown and categorization hub. |
| `/contact` | `Contact` | Comprehensive contact details, alternative channels, form, and map. |
| `/login` | `Login` | User authentication and account portal. |

---

## 📞 Contact Details (Primary & Alternative)

Monarch Kitchen offers dual contact channels so customers can always get in touch for reservations, catering, or home deliveries:

| Detail | Primary Detail | Alternative Detail |
|---|---|---|
| **Brand Name** | **Monarch Kitchen** | — |
| **Phone / Mobile** | `+91 98765 43210` | `+91 91234 56789` |
| **Email Address** | `contact@monarchkitchen.com` | `support@monarchkitchen.com` |
| **Physical Address** | Laxmi Height, Pune-Solapur Highway, Hadapsar, Pune, Maharashtra 411028 | Hadapsar Annexe, Manjri Budruk, East Pune, Maharashtra |
| **Operating Hours** | Mon – Sun: 10:00 AM – 11:00 PM (Dine-in & Takeaway) | 24/7 Digital Ordering & Kitchen Delivery Support |

---

## 💻 Tech Stack

- **Frontend Library**: [React.js](https://reactjs.org/) (v18.2.0)
- **Routing**: [React Router DOM](https://reactrouter.com/) (v6.15.0)
- **Styling**: Bootstrap 5, Font Awesome 6, Custom CSS3
- **Tooling**: Create React App / `react-scripts`

---

## 📁 Project Directory Structure

```text
Monarch-Kitchen/
├── public/
│   └── index.html                # Main HTML template with Bootstrap & FontAwesome CDN
├── src/
│   ├── component/
│   │   ├── Button/               # Reusable button component and styles
│   │   ├── Card/                 # Food card component with price & distance
│   │   ├── Category/             # Category carousel / icon component
│   │   ├── Footer/               # Footer with Monarch Kitchen brand & alt contact details
│   │   ├── Info/                 # Information image grid component
│   │   ├── Navbar/               # Responsive header navigation bar
│   │   └── Service/              # Restaurant services showcase card
│   ├── view/
│   │   ├── About/                # About Monarch Kitchen page
│   │   ├── Categories/           # Category grouping page
│   │   ├── Contact/              # Contact page with cards, form & alternative details
│   │   ├── Home/                 # Landing page
│   │   ├── Login/                # Customer authentication view
│   │   └── Products/             # Products and submenus (FastFood, Vegeterian, Nonveg)
│   ├── index.css                 # Global styling
│   └── index.js                  # Application entry point with React Router
├── package.json                  # Project dependencies and npm scripts
└── README.md                     # Project documentation
```

---

## 🚀 Getting Started

Follow these instructions to run Monarch Kitchen locally on your machine.

### Prerequisites

Ensure you have **Node.js** (v14+ recommended) and **npm** installed:
```bash
node -v
npm -v
```

### Installation

1. Navigate to the project directory:
   ```bash
   cd Monarch-Kitchen
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the App

To run the application in development mode:
```bash
npm run dev
# or
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser. The page reloads automatically when changes are made.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
This builds the application for production to the `build/` folder, bundling and minifying the assets.

---

## 📱 Responsive Design

Monarch Kitchen is built to be responsive across:
- 📱 Mobile devices (iOS & Android screens < 600px)
- 💻 Tablets and iPad displays (600px - 992px)
- 🖥️ Desktop and widescreen monitors (> 992px)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

*Made with ❤️ for **Monarch Kitchen**.*
