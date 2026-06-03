"use client";

import LegalLayout from "@/components/LegalLayout";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated={new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}>
      <p>
        At Paply, we believe your financial data belongs to you. This Privacy Policy explains our "Zero Backend" approach and how we ensure your data remains secure and entirely under your control.
      </p>

      <h2>1. The "Zero Backend" Philosophy</h2>
      <p>
        Paply operates 100% locally in your web browser. When you generate an invoice or a quotation, we do not send, transmit, or store any of your data on our servers. In fact, we do not even have a database for your financial information.
      </p>

      <h2>2. What Data We Process</h2>
      <p>
        All processing, calculations, and PDF rendering happen completely client-side on your device. The data you enter into the Paply generator—such as your company name, client details, line items, and pricing—is held temporarily in your browser's active memory (RAM) while you are using the app.
      </p>

      <h2>3. Data Persistence</h2>
      <p>
        We may use local storage mechanisms (like `localStorage` or `IndexedDB`) strictly to save drafts or preferences locally on your device, allowing you to pick up where you left off. This data never leaves your device and can be cleared at any time by clearing your browser cache.
      </p>

      <h2>4. Third-Party Integrations</h2>
      <p>
        If you utilize our AI-powered description generation, specific line item titles may be sent to our AI providers (such as OpenAI or similar services) solely for the purpose of generating professional descriptions. No sensitive personal information, client details, or pricing data is transmitted for this purpose.
      </p>

      <h2>5. Security</h2>
      <p>
        Because your data is not stored on our servers, there is no risk of data breaches on our end. Your information is as secure as the device and browser you are using. We highly recommend keeping your operating system and web browser up to date.
      </p>

      <h2>6. Changes to this Policy</h2>
      <p>
        As Paply continues to evolve, we may update this policy. Because we do not collect your email address, we cannot notify you directly of changes. We encourage you to review this page periodically.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about our privacy practices or the open-source nature of Paply, you can reach out via our <Link href="https://github.com/TharindaMarasingha/Paply">GitHub repository</Link> or by contacting the maintainers at <Link href="https://www.kaldor.dev">Kaldor</Link>.
      </p>
    </LegalLayout>
  );
}
