"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import styles from "./About.module.css";
import { MouseEvent } from "react";

export default function About() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About the Creator</h2>
          <p className="section-subtitle">
            Built with passion for the developer community.
          </p>
          
          <div className={styles.cardWrapper}>
            <div 
              className={styles.card}
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className={styles.cardGlare}
                style={{
                  background: useMotionTemplate`
                    radial-gradient(
                      350px circle at ${mouseX}px ${mouseY}px,
                      rgba(255,255,255,0.1),
                      transparent 80%
                    )
                  `,
                }}
              />
              <div className={styles.cardContent}>
                <div className={styles.ringWrapper}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src="/founder.jpg" 
                      alt="Tharinda Marasingha" 
                      fill
                      className={styles.image}
                    />
                  </div>
                </div>
                <div className={styles.info}>
                  <h3>Tharinda Marasingha</h3>
                  <p className={styles.role}>Founder & Lead Developer</p>
                  <p className={styles.bio}>
                    Paply is a zero-backend, privacy-first invoice generator designed to make creating professional PDFs effortless.
                  </p>
                  <a 
                    href="https://www.tharinda.me" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Visit Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
