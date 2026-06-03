"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/paply-logo-v3.png" alt="Paply Logo" width={32} height={32} className={styles.logoImg} />
          <span>Paply</span>
        </Link>
        
        <nav className={styles.links}>
          <Link href="#features" className={styles.link}>Features</Link>
          <Link href="#how-it-works" className={styles.link}>How it Works</Link>
          <Link href="#pricing" className={styles.link}>Pricing</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="#" className="btn btn-secondary" style={{ display: 'none' /* Mobile hide might be needed later, but fine for now */ }}>
            Log in
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="https://github.com/TharindaMarasingha/Paply" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Wanna Contribute?
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
