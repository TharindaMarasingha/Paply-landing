import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Code, Users } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image src="/paply-logo-v3.png" alt="Paply Logo" width={32} height={32} />
              <span>Paply</span>
            </Link>
            <p className={styles.description}>
              Stop writing invoices. Start sending them. The smartest way to generate professional PDFs in seconds.
            </p>
          </div>

          <div className={styles.column}>
            <h4>Product</h4>
            <div className={styles.links}>
              <Link href="#features" className={styles.link}>Features</Link>
              <Link href="#pricing" className={styles.link}>Pricing</Link>
              <Link href="/docs" className={styles.link}>Documentation</Link>
              <Link href="/changelog" className={styles.link}>Changelog</Link>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Company</h4>
            <div className={styles.links}>
              <Link href="/about" className={styles.link}>About Creator</Link>
              <a href="https://www.kaldor.dev/about" target="_blank" rel="noopener noreferrer" className={styles.link}>About Us</a>
              <a href="https://www.kaldor.dev/careers" target="_blank" rel="noopener noreferrer" className={styles.link}>Careers</a>
              <a href="https://www.kaldor.dev/blog" target="_blank" rel="noopener noreferrer" className={styles.link}>Blog</a>
              <a href="https://www.kaldor.dev/contact" target="_blank" rel="noopener noreferrer" className={styles.link}>Contact</a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Legal</h4>
            <div className={styles.links}>
              <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
              <Link href="/terms" className={styles.link}>Terms of Service</Link>
              <Link href="/cookies" className={styles.link}>Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {new Date().getFullYear()} Paply. Built by{" "}
            <a 
              href="https://www.kaldor.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: "var(--primary-color)", fontWeight: 500 }}
            >
              Kaldor
            </a>.
          </p>
          
          <div className={styles.bottomRight}>

            <div className={styles.social}>
              <a href="https://www.kaldor.dev" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Kaldor">
                <MessageCircle size={20} />
              </a>
              <a href="https://github.com/TharindaMarasingha/Paply" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                <Code size={20} />
              </a>
              <a href="https://www.tharinda.me" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Tharinda Marasingha">
                <Users size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
