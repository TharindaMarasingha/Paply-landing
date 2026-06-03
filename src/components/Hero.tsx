"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import MockLoadingScreen from "./MockLoadingScreen";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.badge}>
            <Sparkles size={16} className={styles.badgeHighlight} />
            <span>AI-powered invoicing is here</span>
            <ArrowRight size={14} />
          </div>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Stop writing invoices. <br />
          <span className="text-gradient-primary">Start sending them.</span>
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Paply uses AI to craft your descriptions for you. Drop in your details, 
          grab your PDF, and get paid — no account, no waiting, no hassle.
        </motion.p>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="https://paply.kaldor.dev/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Create Invoice
            <ArrowRight size={18} />
          </a>
          <a href="https://paply.kaldor.dev/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Create Quotation
          </a>
        </motion.div>

        <motion.div
          className={`animate-float ${styles.heroImage}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className={styles.heroImageInner}>
            <div className={styles.mockUi}>
              <div className={styles.mockHeader}>
                <div className={`${styles.dot} ${styles.dotRed}`}></div>
                <div className={`${styles.dot} ${styles.dotYellow}`}></div>
                <div className={`${styles.dot} ${styles.dotGreen}`}></div>
              </div>
              <div className={styles.mockBody}>
                <MockLoadingScreen />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
