# Ghost Cart: A Zero-Knowledge Proactive Budgeting Ecosystem

## 📌 Overview
The modern e-commerce landscape is engineered to exploit cognitive biases, utilizing frictionless checkouts to trigger dopamine-driven impulse buying. Existing financial tools like YNAB or Mint are purely reactive—they only track money after it has been spent. 

**Ghost Cart** is a behavioral-intervention browser extension that solves this by introducing proactive "cognitive friction" at the exact moment of purchase. By enforcing a mandatory 24-hour "cooling-off" period during a user's self-defined vulnerable hours, it gives logic time to overcome emotion 

## ✨ Key Features
* **Zero-Knowledge Privacy:** Engineered with a strict local-first design. All configurations are saved directly to `chrome.storage.local` ensuring 0% of PII, credit card data, or product information ever leaves the client device[cite: 4].
* **Proactive Interception:** Utilizes local DOM parsing to actively hunt down and disable "Buy Now" and "Checkout" buttons on major e-commerce platforms like Amazon and Flipkart[cite: 4].
* **Custom Vulnerability Windows:** A configurable Rule Dashboard allows users to set their own high-risk shopping hours (e.g., late-night browsing)[cite: 4].
* **Automated CI/CD:** Integrated GitHub Actions pipeline for continuous integration, linting, and build verification.

## 🛠️ Technical Architecture
* **Frontend UI:** HTML, CSS, JavaScript (Manifest V3 Extension Popup)
* **Core Engine:** JavaScript Content Scripts for dynamic DOM traversal and event listener overrides.
* **Storage:** Chrome Local Storage API
* **Version Control & CI:** Git, GitHub, GitHub Actions[cite: 3]

## 🚀 Installation & Setup (Developer Mode)
Since Ghost Cart is currently in the active development (Sprint 1) phase, it must be loaded as an unpacked extension:

1. Clone this repository to your local machine:
   ```bash
   git clone [https://github.com/Fenrir-Wulf/Ghost-Cart-Ecosystem.git](https://github.com/Fenrir-Wulf/Ghost-Cart-Ecosystem.git)
