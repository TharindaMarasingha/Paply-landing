"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './MockLoadingScreen.module.css';

export default function MockLoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  const accentColor  = 'var(--primary-color)';
  const accentColor2 = 'var(--secondary-color)';
  const accentFaint  = 'var(--primary-glow)';
  const accentRing   = 'var(--primary-glow)';

  useEffect(() => {
    const duration = 2200;
    const interval = 16;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const raw = step / steps;
      const eased = 1 - Math.pow(1 - raw, 2.8);
      const p = Math.min(100, Math.round(eased * 100));
      setProgress(p);

      const si = Math.floor(p / 26);
      setStepIndex(Math.min(si, 3));

      if (step >= steps) {
        step = 0; // Loop the animation for the mock UI
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      {/* Decorative blurred orbs */}
      <div
        className={styles.orb1}
        style={{
          background: accentFaint,
        }}
      />
      <div
        className={styles.orb2}
        style={{
          background: 'var(--secondary-glow)',
        }}
      />

      {/* Centre content */}
      <div className={styles.content}>
        {/* Logo block */}
        <div className={styles.logoWrapper}>
          <div
            className={styles.pulseRing}
            style={{ border: `1px solid ${accentRing}` }}
          />
          <div
            className={styles.glowRing}
            style={{ border: `1.5px solid ${accentRing}` }}
          />
          <div className={styles.logoContainer}>
            <Image 
              src="/paply-logo-v3.png" 
              alt="Paply" 
              width={48} 
              height={48} 
              style={{ objectFit: 'contain' }} 
            />
          </div>
        </div>

        {/* Brand name */}
        <h2 className={styles.brandName}>Paply</h2>
        <p className={styles.tagline}>Simply Paperless</p>

        {/* Progress bar track */}
        <div className={styles.progressWrapper}>
          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${accentColor}, ${accentColor2})`,
                boxShadow: `0 0 10px ${accentColor}`,
              }}
            />
          </div>
          <div className={styles.shimmerWrapper}>
            <div
              className={styles.shimmer}
              style={{ left: `calc(${progress}% - 40px)` }}
            />
          </div>
        </div>

        {/* Three dot indicators */}
        <div className={styles.dotsWrapper}>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={styles.dot}
              style={{
                width: i === stepIndex ? 16 : 6,
                background: i === stepIndex ? accentColor : 'var(--mock-ui-skeleton)',
                opacity: i < stepIndex ? 0.35 : 1,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
