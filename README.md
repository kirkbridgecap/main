# Kirkbridge Capital | Digital Presence

A sophisticated, minimalist web presence for Kirkbridge Capital, a private equity firm focused on the stewardship of growth and the development of enduring businesses.

## 🏛 Brand Identity
The visual language of Kirkbridge Capital is rooted in **Modern Swiss Design**, emphasizing clarity, objective layouts, and high-contrast elegance.

- **Logo**: A geometric "Bridge" monogram. The vertical pillars represent stability and the established foundation, while the `Fern Green` arch symbolizes the strategic bridge to future growth.
- **Color Palette**:
  - `Kirk Black (#0A0A0A)`: Represents authority, depth, and permanence.
  - `Fern Green (#4F7942)`: Represents organic growth, vitality, and renewal.
  - `Kirk Light (#F8FAFC)`: Provides a clean, spacious canvas for high-level thinking.
- **Typography**:
  - **Serif**: *Playfair Display* — Used for headers to evoke a sense of tradition and prestige.
  - **Sans**: *Inter* — Used for body text to ensure modern readability and technical precision.

## 🛠 Technical Architecture
The site is engineered for maximum performance and zero-latency deployment.
- **Framework**: React 18 (UMD Distribution).
- **Styling**: Tailwind CSS for utility-first responsive design.
- **Animations**: Custom `Intersection Observer` implementation for high-end scroll-reveal transitions.
- **Architecture**: Single-file distribution (`index.html`) to ensure atomic deployments and perfect SEO crawling.

## 🌐 Domain & Infrastructure (kirkbridgecap.com)
The platform is hosted via GitHub Pages with a custom domain integration.

### DNS Configuration
To point the custom domain `kirkbridgecap.com` to this repository, the following DNS records were implemented:
1. **A Records**:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. **CNAME Record**:
   - `www` -> `kirkbridgecap.github.io`

### GitHub Routing
- **CNAME File**: Contains the naked domain `kirkbridgecap.com`.
- **Enforcement**: HTTPS is enforced via GitHub's global edge network.

## 📂 Project Structure
- `index.html`: The core application containing all logic, styles, and assets.
- `CNAME`: Domain routing configuration for GitHub Pages.
- `metadata.json`: Application manifests and system permissions.
- `README.md`: Brand and infrastructure documentation.

---
*Developed by Kirkbridge Capital Partners, LLC.*