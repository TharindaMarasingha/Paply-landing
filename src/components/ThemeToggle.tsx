"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./ThemeToggle.module.css";
import { Sun, Moon, Cloud, Star } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.skeleton} />;
  }

  const isDark = theme === "dark";

  return (
    <button
      className={`${styles.toggle} ${isDark ? styles.dark : styles.light}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      type="button"
    >
      {/* Background elements */}
      <div className={styles.background}>
        {/* Sky gradient */}
        <motion.div
          className={styles.sky}
          animate={{
            background: isDark
              ? "linear-gradient(to bottom, #050505, #1f1f1f)"
              : "linear-gradient(to bottom, #8b5cf6, #c084fc)",
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Stars (Dark mode only) */}
        <motion.div
          className={styles.starsContainer}
          initial={false}
          animate={{ opacity: isDark ? 1 : 0, y: isDark ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <Star className={styles.star1} size={8} fill="#fff" stroke="none" />
          <Star className={styles.star2} size={6} fill="#fff" stroke="none" />
          <Star className={styles.star3} size={10} fill="#fff" stroke="none" />
        </motion.div>

        {/* Clouds (Light mode only) */}
        <motion.div
          className={styles.cloudsContainer}
          initial={false}
          animate={{ opacity: isDark ? 0 : 1, y: isDark ? 20 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cloud className={styles.cloud1} size={14} fill="#fff" stroke="none" />
          <Cloud className={styles.cloud2} size={20} fill="#fff" stroke="none" />
        </motion.div>
      </div>

      {/* The Handle / Orb */}
      <motion.div
        className={styles.handle}
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          className={styles.iconContainer}
          animate={{ rotate: isDark ? 360 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {isDark ? (
            <Moon className={styles.moonIcon} size={16} fill="#f1f5f9" />
          ) : (
            <Sun className={styles.sunIcon} size={16} fill="#a855f7" />
          )}
        </motion.div>
      </motion.div>
    </button>
  );
}
