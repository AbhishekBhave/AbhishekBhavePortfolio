# Abhishek Bhave – Interactive Portfolio & Résumé Hub

A modern, recruiter-friendly personal website built with Next.js 14, TypeScript, and TailwindCSS. This portfolio showcases technical excellence, leadership, and business acumen while serving as a living demo of modern front-end techniques.

## 🚀 Features

### Core Pages
- **Hero Landing** – Animated headline with particle background and CTA buttons
- **Interactive Résumé** – Vertical timeline with flip animations and quantified impact metrics
- **Projects Lab** – Filterable grid with modal details and video demos
- **Tech Playground** – Live code execution (WebAssembly, Pyodide) with D3 data visualization
- **Speaking & Leadership** – Carousel with KPI counters and embedded content
- **Contact** – Validated form with hCaptcha and Calendly integration

### Technical Highlights
- **Performance** – <1s LCP on 4G, Lighthouse CI budget <100kb JS
- **Accessibility** – WCAG 2.2 AA compliant with semantic HTML and ARIA labels
- **SEO** – Structured data, Open Graph tags, and Plausible analytics
- **Modern Stack** – Next.js 14, React Server Components, TypeScript, TailwindCSS
- **Animations** – Framer Motion with GSAP for scroll-triggered animations
- **Security** – hCaptcha protection, input validation, and secure headers

## 🛠️ Tech Stack

### Frontend
- **Framework** – Next.js 14 with App Router
- **Language** – TypeScript
- **Styling** – TailwindCSS with custom design system
- **Animations** – Framer Motion + GSAP
- **Icons** – Lucide React
- **Charts** – D3.js for data visualization

### Backend & APIs
- **Runtime** – Edge Functions for API routes
- **Database** – Supabase (PostgreSQL + Storage)
- **Email** – Resend or SendGrid integration
- **Analytics** – Plausible (privacy-focused)
- **Security** – hCaptcha for form protection

### Development
- **Testing** – Playwright for E2E tests
- **Linting** – ESLint with Next.js config
- **Formatting** – Prettier
- **Git Hooks** – Husky + lint-staged
- **Deployment** – Vercel with preview deployments


## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── HeroSection.tsx    # Landing hero
│   ├── Navigation.tsx     # Header navigation
│   ├── TimelineCard.tsx   # Resume timeline
│   ├── ProjectTile.tsx    # Project showcase
│   ├── CodeRunner.tsx     # Live code execution
│   ├── KpiCounter.tsx     # Animated statistics
│   ├── ContactForm.tsx    # Contact form
│   └── Footer.tsx         # Site footer
├── data/                  # Static data
├── lib/                   # Utility functions
└── types/                 # TypeScript definitions
```


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration** – Linear, Notion, and modern SaaS platforms
- **Icons** – Lucide React for beautiful, consistent icons
- **Animations** – Framer Motion for smooth interactions
- **Performance** – Next.js team for the amazing framework


For questions or collaboration opportunities, reach out at [bhave.13@osu.edu](mailto:bhave.13@osu.edu) 

## Environment Variables (MVP)

Copy `env.example` to `.env.local` and set at least:

- `NEXT_PUBLIC_SITE_URL` (for canonical URLs and metadata base)
- `NEXT_PUBLIC_CONTACT_EMAIL` (displayed contact email)
- `NEXT_PUBLIC_CALENDLY_URL` (optional scheduling link)

Optional for production contact hardening:

- `HCAPTCHA_SECRET_KEY` (required only if captcha verification is enabled in production)
- `HCAPTCHA_SITE_KEY` (only if client-side captcha widget is added)

The MVP contact route works without third-party email providers and logs submissions server-side until a provider is wired.
