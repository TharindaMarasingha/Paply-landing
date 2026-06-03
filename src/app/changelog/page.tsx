"use client";

import LegalLayout from "@/components/LegalLayout";

export default function Changelog() {
  return (
    <LegalLayout title="Changelog" lastUpdated={new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}>
      <p>
        Stay up to date with the latest features, improvements, and bug fixes to the Paply platform.
      </p>

      <h2>v2.0.0 - The AI &amp; Privacy Update</h2>
      <p><strong>Release Date:</strong> {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
      <ul>
        <li><strong>New Feature:</strong> Introduced AI-powered line item descriptions using a multi-model fallback strategy.</li>
        <li><strong>New Feature:</strong> Completely overhauled the PDF rendering engine for pixel-perfect A4 generation.</li>
        <li><strong>UI/UX:</strong> Introduced the new premium Glassmorphism Dark UI with micro-interactions.</li>
        <li><strong>Security:</strong> Removed external image fallbacks. Logos are now strictly validated via a MIME whitelist (PNG/JPEG/GIF/WebP) and capped at a 2MB limit.</li>
        <li><strong>Enhancement:</strong> Custom Poppins font is now bundled locally for absolute privacy (no calls to external Google CDN).</li>
        <li><strong>Fix:</strong> Switched all `onKeyPress` listeners to modern `onKeyDown` to prevent deprecated API warnings.</li>
      </ul>

      <h2>v1.5.0 - Dynamic Terms</h2>
      <p><strong>Release Date:</strong> Previous Release</p>
      <ul>
        <li><strong>New Feature:</strong> Added the Accordion T&amp;C editor allowing users to add, remove, and fully edit custom Terms and Condition blocks.</li>
        <li><strong>New Feature:</strong> Implemented real-time Multi-Currency support.</li>
        <li><strong>Enhancement:</strong> Upgraded state management to Zustand for lightning-fast keystroke calculations.</li>
      </ul>

      <h2>v1.0.0 - Initial Release</h2>
      <p><strong>Release Date:</strong> Launch</p>
      <ul>
        <li><strong>Core Feature:</strong> 100% Client-side Invoice and Quotation generator released.</li>
        <li><strong>Core Feature:</strong> Real-time Subtotal, Tax, and Total calculation engine.</li>
        <li><strong>Core Feature:</strong> Automatic "Page X of Y" pagination for multi-page invoices.</li>
      </ul>

      <hr style={{ margin: '3rem 0', borderColor: 'var(--card-border)' }} />

      <h3>Upcoming Roadmap</h3>
      <p>We are actively working on the following features for future releases:</p>
      <ul>
        <li><code>localStorage</code> persistence to save drafts across page refreshes.</li>
        <li>Live, side-by-side PDF preview panel directly in the browser.</li>
        <li>Multiple PDF template themes (Minimal, Corporate, Creative).</li>
        <li>Discount fields (percentage or fixed amount).</li>
        <li>Invoice history list for the current session and CSV Export.</li>
      </ul>
    </LegalLayout>
  );
}
