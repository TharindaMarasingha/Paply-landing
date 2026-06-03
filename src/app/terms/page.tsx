"use client";

import LegalLayout from "@/components/LegalLayout";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated={new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}>
      <p>
        Welcome to Paply. By accessing or using our invoice and quotation generator, you agree to comply with and be bound by these Terms of Service.
      </p>

      <h2>1. License and Usage</h2>
      <p>
        Paply is an open-source project distributed under the MIT License. You are free to use, modify, and distribute the software in accordance with the terms of the <Link href="https://opensource.org/licenses/MIT">MIT License</Link>. 
      </p>
      <p>
        While the software is open-source, the hosted version provided by Kaldor (the "Service") is provided for your convenience to generate financial documents.
      </p>

      <h2>2. "As Is" Service</h2>
      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
      </p>
      <p>
        We do not guarantee that the generated invoices or quotations will meet specific legal or tax requirements in your jurisdiction. It is your sole responsibility to ensure that any documents generated using Paply comply with local laws and regulations.
      </p>

      <h2>3. User Responsibilities</h2>
      <p>
        You are solely responsible for the content and accuracy of the documents you generate using Paply. Because Paply operates 100% locally in your browser, we cannot recover lost invoices, fix typographical errors, or intervene if you close the application without downloading your PDF.
      </p>
      <ul>
        <li>You must verify all calculations and tax amounts before sending documents to clients.</li>
        <li>You must ensure you have the right to use any logos or images uploaded to the generator.</li>
        <li>You must save your generated PDFs to your local device immediately.</li>
      </ul>

      <h2>4. Prohibited Uses</h2>
      <p>
        You agree not to use the Service to generate fraudulent, illegal, or deceptive financial documents. While we do not monitor or store the content you create, we reserve the right to block access to the hosted Service if we detect malicious activity or abuse of our infrastructure.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        In no event shall the authors, maintainers, or Kaldor be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the software or the use or other dealings in the software. This includes, but is not limited to, lost revenue, miscalculated taxes, or business interruptions.
      </p>

      <h2>6. Modifications</h2>
      <p>
        We reserve the right to modify or discontinue, temporarily or permanently, the hosted Service with or without notice.
      </p>
    </LegalLayout>
  );
}
