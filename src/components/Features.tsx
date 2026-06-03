"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Download, Sparkles, FileText, Lock } from "lucide-react";
import styles from "./Features.module.css";
import { MouseEvent } from "react";

const features = [
  {
    title: "Instant PDF Generation",
    description: "Generate polished, professional PDFs in seconds without any hassle.",
    icon: Zap,
  },
  {
    title: "100% Private",
    description: "Your data stays on your device. We don't store your sensitive financial information.",
    icon: Lock,
  },
  {
    title: "AI-Powered Descriptions",
    description: "Let AI write your line item descriptions. Just provide the context and we do the rest.",
    icon: Sparkles,
  },
  {
    title: "One-Click Download",
    description: "No accounts, no waiting. Just drop in your details and grab your PDF instantly.",
    icon: Download,
  },
  {
    title: "Smart Quotations",
    description: "Send professional price quotes before work begins, complete with validity periods.",
    icon: FileText,
  },
  {
    title: "Bank-Grade Security",
    description: "No data leaves your device, ensuring maximum compliance and peace of mind.",
    icon: Shield,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Features() {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach((card) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    });
  };

  return (
    <section id="features" className={styles.section} onMouseMove={handleMouseMove}>
      <div className="container">
        <div className={styles.header}>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Features
          </motion.p>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Everything you need to <span className="text-gradient">get paid</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Paply comes packed with all the essential tools to help you create invoices and quotations quickly, securely, and seamlessly.
          </motion.p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants} className={`glass ${styles.card}`}>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <feature.icon size={24} />
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
