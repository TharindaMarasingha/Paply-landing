import { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./LegalLayout.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>
          <div className={styles.content}>
            {children}
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
