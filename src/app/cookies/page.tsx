"use client";

import LegalLayout from "@/components/LegalLayout";
import Link from "next/link";

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated={new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}>
      <p>
        This Cookie Policy explains how Paply uses cookies and similar local storage technologies.
      </p>

      <h2>1. The Short Version: No Tracking Cookies</h2>
      <p>
        Paply does not use any third-party tracking, advertising, or analytics cookies. Because we are a privacy-first, zero-backend application, we have no interest in tracking your web activity or selling your data.
      </p>

      <h2>2. Strictly Necessary Technologies</h2>
      <p>
        Instead of traditional cookies, Paply relies on your browser's built-in <strong>Local Storage</strong> (`localStorage`) and <strong>Session Storage</strong> APIs. We use these technologies strictly to make the application function correctly.
      </p>
      <ul>
        <li><strong>Form State:</strong> We may temporarily save your invoice drafts and current form inputs so that you do not lose your work if you accidentally refresh the page.</li>
        <li><strong>UI Preferences:</strong> We remember your preference for Light Mode or Dark Mode, as well as your selected currency and preferred invoice template.</li>
      </ul>
      <p>
        These technologies are classified as "Strictly Necessary" for the application to function.
      </p>

      <h2>3. Where Data is Stored</h2>
      <p>
        Any data stored via these technologies resides locally on your specific device and browser. It is never transmitted back to our servers or accessible by us.
      </p>

      <h2>4. How to Clear Your Data</h2>
      <p>
        You have full control over this data. You can clear all saved invoices, preferences, and form states at any time by clearing your browser's local cache and cookies.
      </p>
      <ul>
        <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Clear browsing data.</li>
        <li><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Clear Data.</li>
        <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data.</li>
      </ul>

      <h2>5. Changes to this Policy</h2>
      <p>
        If we ever introduce new features that require different types of cookies or local storage, we will update this policy accordingly.
      </p>

      <h2>6. Contact</h2>
      <p>
        For any questions regarding this policy, please reach out via our <Link href="https://github.com/TharindaMarasingha/Paply">GitHub repository</Link> or contact <Link href="https://www.kaldor.dev">Kaldor</Link>.
      </p>
    </LegalLayout>
  );
}
