"use client";

import { motion, Variants } from "framer-motion";
import styles from "./HowItWorks.module.css";
import { FileEdit, Sparkles, DownloadCloud } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Choose Your Document",
    description: "Start by selecting either an Invoice or a Quotation. No sign-ups required.",
    icon: FileEdit,
  },
  {
    id: "02",
    title: "Add Details (with AI)",
    description: "Drop in the basics. Our AI automatically crafts professional line-item descriptions for you.",
    icon: Sparkles,
  },
  {
    id: "03",
    title: "Export & Get Paid",
    description: "Instantly download a polished, client-ready PDF securely to your device.",
    icon: DownloadCloud,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How it <span className="text-gradient">works</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Create professional documents in three simple steps.
          </motion.p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, idx) => (
            <motion.div key={step.id} variants={itemVariants} className={styles.cardWrapper}>
              <div className={`glass ${styles.card}`}>
                <div className={styles.numberWrapper}>
                  <span className={styles.number}>{step.id}</span>
                </div>
                <div className={styles.iconWrapper}>
                  <step.icon size={28} />
                </div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDescription}>{step.description}</p>
              </div>
              {/* Connector line for desktop */}
              {idx !== steps.length - 1 && (
                <div className={styles.connector}>
                  <div className={styles.line} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
