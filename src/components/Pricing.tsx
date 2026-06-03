"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import styles from "./Pricing.module.css";
import { Check, ExternalLink, Heart, X, Star } from "lucide-react";

const features = [
  "Unlimited Invoices & Quotations",
  "AI-powered descriptions",
  "No watermarks on PDFs",
  "100% Private - data stays on device",
  "No account or login required",
  "Community-driven updates",
];

export default function Pricing() {
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (!showModal) return;
    
    if (countdown === 0) {
      window.open("https://github.com/TharindaMarasingha/Paply", "_blank");
      setShowModal(false);
      return;
    }
    
    const timer = setInterval(() => setCountdown(c => c - 1), 1000);
    return () => clearInterval(timer);
  }, [showModal, countdown]);

  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCountdown(10);
    setShowModal(true);
  };

  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Actually, there is no pricing. Paply is completely free and open source.
          </motion.p>
        </div>

        <motion.div 
          className={styles.cardWrapper}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.card}>
            
            <div className={styles.cardHeader}>
              <div className={styles.badge}>
                <Heart size={14} className={styles.heartIcon} />
                <span>100% Free Forever</span>
              </div>
              <h3 className={styles.planName}>Open Source</h3>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>0</span>
                <span className={styles.period}>/mo</span>
              </div>
              <p className={styles.description}>
                Everything you need to run your freelance business, without the monthly subscription fees.
              </p>
            </div>

            <div className={styles.divider} />

            <div className={styles.cardBody}>
              <ul className={styles.features}>
                {features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <div className={styles.checkIcon}>
                      <Check size={14} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://github.com/TharindaMarasingha/Paply" 
                onClick={handleGithubClick}
                className={`btn btn-primary ${styles.actionBtn}`}
              >
                <ExternalLink size={18} />
                View on GitHub
              </a>
            </div>
            
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.75rem 1.5rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '9999px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
              Love what we're building?
            </span>
            <div style={{ display: 'flex', alignItems: 'center', height: '28px' }}>
              <a 
                className="github-button" 
                href="https://github.com/TharindaMarasingha/Paply" 
                data-color-scheme="no-preference: dark; light: light; dark: dark;"
                data-icon="octicon-star" 
                data-size="large" 
                data-show-count="true" 
                aria-label="Star TharindaMarasingha/Paply on GitHub"
              >
                Star
              </a>
            </div>
          </div>
          <Script async defer src="https://buttons.github.io/buttons.js" strategy="lazyOnload" />
        </motion.div>

        <AnimatePresence>
          {showModal && (
            <div className={styles.modalOverlay}>
              <motion.div 
                className={styles.modalContent}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
              >
                <button 
                  className={styles.closeBtn}
                  onClick={() => setShowModal(false)}
                >
                  <X size={20} />
                </button>
                
                <div className={styles.modalIconContainer}>
                  <Star className={styles.modalStar} size={32} fill="var(--primary-color)" color="var(--primary-color)" />
                </div>
                
                <h3 className={styles.modalTitle}>Support Open Source</h3>
                <p className={styles.modalText}>
                  Paply is completely free and open source. If you like what we're building, please consider starring our repository!
                </p>
                
                <div className={styles.modalGithubEmbed}>
                  <a 
                    className="github-button" 
                    href="https://github.com/TharindaMarasingha/Paply" 
                    data-color-scheme="no-preference: dark; light: light; dark: dark;"
                    data-icon="octicon-star" 
                    data-size="large" 
                    data-show-count="true" 
                    aria-label="Star TharindaMarasingha/Paply on GitHub"
                  >
                    Star
                  </a>
                </div>
                
                <div className={styles.modalFooter}>
                  <p className={styles.countdown}>Redirecting to GitHub in <span>{countdown}s</span>...</p>
                  <button 
                    className={`btn btn-secondary ${styles.skipBtn}`}
                    onClick={() => {
                      window.open("https://github.com/TharindaMarasingha/Paply", "_blank");
                      setShowModal(false);
                    }}
                  >
                    Go to GitHub now
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
