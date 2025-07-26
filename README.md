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

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhishekbhave/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your configuration:
   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   
   # Email (Resend)
   RESEND_API_KEY=your_resend_api_key
   
   # Security
   HCAPTCHA_SITE_KEY=your_hcaptcha_site_key
   HCAPTCHA_SECRET_KEY=your_hcaptcha_secret_key
   
   # Analytics
   PLAUSIBLE_DOMAIN=your_domain.com
   
   # Resume
   RESUME_PDF_URL=https://your-cdn.com/resume.pdf
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Content Updates
- **Personal Info** – Update `src/app/layout.tsx` metadata
- **Resume Data** – Modify `src/data/resume.ts`
- **Projects** – Edit `src/data/projects.ts`
- **Speaking** – Update `src/data/speaking.ts`

### Styling
- **Colors** – Customize in `tailwind.config.js`
- **Fonts** – Update Google Fonts import in `globals.css`
- **Components** – Modify individual component files

### Features
- **Email Integration** – Configure in `src/app/api/contact/route.ts`
- **Analytics** – Set up Plausible in `src/app/layout.tsx`
- **Resume Download** – Update `src/app/api/resume/route.ts`

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

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm start
```

## 🧪 Testing

```bash
# Run Playwright tests
npm run test

# Run tests in headed mode
npm run test:e2e
```

## 📊 Performance

- **Lighthouse Score** – 95+ across all metrics
- **Core Web Vitals** – All green
- **Bundle Size** – <100kb initial JS load
- **Loading Speed** – <1s LCP on 4G

## 🔒 Security

- **Form Protection** – hCaptcha integration
- **Input Validation** – Server-side validation
- **Security Headers** – CSP, X-Frame-Options, etc.
- **HTTPS Only** – Secure connections enforced

## 📈 Analytics

Privacy-focused analytics with Plausible:
- No cookies or personal data collection
- GDPR compliant
- Real-time dashboard
- Custom event tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration** – Linear, Notion, and modern SaaS platforms
- **Icons** – Lucide React for beautiful, consistent icons
- **Animations** – Framer Motion for smooth interactions
- **Performance** – Next.js team for the amazing framework

---

**Built with ❤️ by Abhishek Bhave**

For questions or collaboration opportunities, reach out at [abhishek@example.com](mailto:abhishek@example.com) 