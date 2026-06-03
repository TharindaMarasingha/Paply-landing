# AI Agent Guide: Paply Landing Page

Welcome, future AI Agent! If you are reading this file, you have been tasked with maintaining, extending, or debugging the **Paply Landing Page** repository. This document outlines the project architecture, design philosophy, and critical guidelines you MUST follow.

## 1. Project Overview
**Paply Landing Page** is a modern, high-conversion landing page built to promote the main Paply app (a zero-backend, privacy-first invoice generator).
- **Framework:** Next.js (App Router) with React 18
- **Language:** TypeScript
- **Styling:** Vanilla CSS Modules with CSS Variables (`globals.css`)
- **Animation:** `framer-motion`
- **Icons:** `lucide-react`

## 2. Design Philosophy & Aesthetics
This project strictly adheres to a **Premium Dark Glassmorphism** aesthetic. DO NOT introduce generic colors or basic flat UI elements.
- **Backgrounds:** Pitch black (`#050505`) with subtle radial gradients and animated blobs (`#3b0764`, `#0f172a`).
- **Cards/Containers:** Glassmorphism using `backdrop-filter: blur(12px)` and semi-transparent backgrounds (`rgba(255, 255, 255, 0.03)`).
- **Borders:** Extremely subtle, low-opacity white/gray borders (`rgba(255, 255, 255, 0.05)`).
- **Animations:** All interactive elements MUST have micro-animations (hover scaling, smooth transitions). Use `framer-motion` for scroll-triggered reveal animations.
- **Typography:** Uses the **Outfit** font.

## 3. CSS Architecture
We rely entirely on Vanilla CSS Modules combined with global CSS variables. **DO NOT install or use Tailwind CSS unless explicitly requested by the user.**
- **Global Variables (`src/app/globals.css`):** This file contains all the design tokens (colors, gradients, typography sizes). It uses a `[data-theme="dark"]` implementation for the theme system.
- **CSS Modules:** Every React component must have its own `.module.css` file (e.g., `Hero.tsx` -> `Hero.module.css`).

## 4. Component Hierarchy
- `src/app/layout.tsx`: Root layout, loads the Outfit font and `<ThemeProvider>`. Contains the floating `<ThemeToggle />` button.
- `src/app/page.tsx`: The main landing page aggregator.
  - `<Navbar />`: Fixed, glassmorphic header.
  - `<Hero />`: Main call-to-action with a custom `<MockLoadingScreen />` floating macOS-style window widget.
  - `<HowItWorks />`: Step-by-step feature breakdown.
  - `<Features />`: Feature grid highlighting the app's capabilities.
  - `<Pricing />`: Single pricing card (since it's a free open-source tool, it emphasizes "Free Forever"). Contains a custom GitHub star iframe embed wrapper.
  - `<Footer />`: Links to GitHub, Kaldor, Tharinda.me, and the legal pages.
- `src/components/LegalLayout.tsx`: A reusable wrapper for text-heavy pages (`/docs`, `/privacy`, `/terms`, `/cookies`).

## 5. Important Implementation Details
- **Theme Toggle:** The `<ThemeToggle />` component is rendered inside `layout.tsx` (NOT `Navbar.tsx`) as a `position: fixed` element. This prevents CSS `backdrop-filter` containing block bugs. Do not move it back into the Navbar.
- **Icons:** We use `lucide-react`. **WARNING:** `lucide-react` recently removed all brand logos (like GitHub, Twitter, etc.). Do NOT attempt to import `{ Github }` from `lucide-react`, it will cause a critical SSR crash. Use generic icons like `<Code />` or `<Globe />` instead.
- **Legal Pages:** The legal pages (`/privacy`, `/terms`, `/cookies`) are generated dynamically based on Paply's core architecture. They use the shared `<LegalLayout />`.

## 6. Rules for Editing
1. **Never use raw color hex codes in CSS Modules.** Always use the CSS variables defined in `globals.css` (e.g., `var(--primary-color)`).
2. **Never remove existing `framer-motion` properties** unless specifically replacing them.
3. **Always check mobile responsiveness.** All CSS Modules use `@media (max-width: 768px)` queries to collapse grids and adjust paddings. If you add a new component, you must add mobile styles.
4. **Use Next.js `<Image>` tags** for local images to ensure proper optimization.

Follow this guide strictly to maintain the extremely high quality and "wow factor" of the landing page. Good luck!
