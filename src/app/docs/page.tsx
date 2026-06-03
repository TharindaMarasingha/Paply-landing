"use client";

import LegalLayout from "@/components/LegalLayout";

export default function Documentation() {
  return (
    <LegalLayout title="Documentation" lastUpdated={new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}>
      <p>
        Welcome to the Paply documentation. Paply is designed to be incredibly intuitive, requiring zero setup to start generating professional invoices and quotations.
      </p>

      <h2>Getting Started</h2>
      <p>
        Because Paply is a client-side application, there is no account creation required. Simply open the app and start filling in your details.
      </p>
      <ul>
        <li><strong>Document Type:</strong> Use the top selector to switch instantly between an Invoice and a Quotation.</li>
        <li><strong>Company Logo:</strong> Click the logo upload area to upload your company's branding. Your logo is processed entirely in your browser and is automatically optimized for the PDF layout.</li>
        <li><strong>Currency:</strong> Select your preferred currency from the dropdown to automatically format all numbers correctly.</li>
      </ul>

      <h2>Adding Line Items</h2>
      <p>
        Click the "Add Item" button to begin building your document. Paply features a real-time calculation engine that instantly updates your subtotal, tax, and final total as you type. 
      </p>
      <p>
        <strong>AI Descriptions:</strong> If enabled, you can use our built-in AI tool to automatically generate detailed, professional descriptions for your line items, saving you time and ensuring your documents look premium.
      </p>

      <h2>Terms &amp; Conditions</h2>
      <p>
        Paply includes a dynamic Terms &amp; Conditions accordion editor. You can use this to outline payment terms, delivery schedules, or legal disclaimers directly on your PDF. You can easily add, remove, or edit custom sections to suit your specific business needs.
      </p>

      <h2>Generating Your PDF</h2>
      <p>
        Once you are satisfied with your document, click the "Download PDF" button. Our proprietary rendering engine, powered by `@react-pdf/renderer`, will compile your data into a pixel-perfect, beautifully structured A4 PDF document instantly.
      </p>
      <p>
        <strong>Important:</strong> Because Paply prioritizes your privacy, your document data is held in temporary memory. If you refresh the page without downloading your PDF, your data will be lost. Always ensure you download your file before closing the tab.
      </p>
    </LegalLayout>
  );
}
