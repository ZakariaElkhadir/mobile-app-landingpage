# Mobile App Landing Page

A pixel-perfect implementation of a modern mobile app landing page, built based on a provided high-fidelity Figma design. This project focuses on delivering a premium user experience through intricate animations, responsive layouts, and a robust modern web architecture.

## 🎨 Design

This project is a 1-to-1 pixel-perfect recreation of the following Figma design:
[Figma Design Reference](https://www.figma.com/design/jM49RLCs54mrdVlEisUmGx/Untitled?node-id=0-1&t=qyH53TUHfU3C7w7e-1)

The implementation strictly adheres to the design specifications, capturing proper spacing, typography scaling, cohesive color palette, and micro-interactions.

## 🚀 Tech Stack

The application is built using a modern, performance-focused stack:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**:
  - [Framer Motion](https://www.framer.com/motion/) for declarative, component-level animations
  - [GSAP (GreenSock)](https://gsap.com/) for complex, timeline-based or scroll-triggered animation sequences
- **Language**: TypeScript

## ✨ Sections Built

- **Header / Navigation**: Sticky, responsive navigation bar.
- **Hero Section**: High-impact introduction with captivating entry animations.
- **Steps Section**: Detailed walkthrough/instructions area with sequential reveals.
- **Metric Section**: Data presentation with visual emphasis.
- **Cards Section**: Grid-based layouts for showcasing features seamlessly.

More sections are actively being developed to complete the landing page.

## 🛠️ Getting Started

To run this project locally, follow these steps:

### Prerequisites

Ensure you have Node.js (v18+) and your preferred package manager (`npm`, `yarn`, `pnpm`, or `bun`) installed.

### Installation

1. Copy the repository or clone it:

   ```bash
   git clone <repository-url>
   cd mobile-app-landingpage
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   # or yarn install / pnpm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or yarn dev / pnpm dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application in action.

## 📂 Project Structure

```
├── app/                  # Next.js App Router root (pages, main layout, CSS variables)
├── components/           # Reusable UI component modules (Header, HeroSection, etc.)
├── package.json          # Project dependencies and operational scripts
```

## 📝 Design Tokens & Theming

The project utilizes native CSS variables integrated directly with the Tailwind v4 theme (`app/globals.css`) for consistent theming and scalable typography:

- Dynamic font sizes configured using `clamp()` for perfect fluid typography across all breakpoints without ad-hoc media queries.
- Defined variables for backgrounds, vibrant text grays, and primary button interactions matching Figma definitions.
