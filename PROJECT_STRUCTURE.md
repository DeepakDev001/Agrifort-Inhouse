# AgriFort Website - Complete Project Structure

## 📋 Project Overview

**AgriFort Website** is a modern, responsive Next.js 15 application built for AgriFort Technologies - an agricultural technology company. The project focuses on showcasing innovative agricultural solutions and connecting with farmers nationwide.

---

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5** - Type safety

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **shadcn/ui** - Component library (Radix UI based)
- **next-themes** - Dark/light theme support
- **tailwindcss-animate** - Animation utilities
- **Geist Sans** - Font family

### UI Component Libraries
- **Radix UI** - Headless UI components:
  - Avatar, Dialog, Dropdown Menu, Label
  - Navigation Menu, Popover, Select
  - Slot, Tabs, Tooltip

### Utilities
- **lucide-react** - Icon library
- **clsx** & **tailwind-merge** - Class name utilities
- **class-variance-authority** - Component variants

---

## 📁 Project Structure

```
agrifort-website/
├── public/
│   └── images/              # Static images and assets
│
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/           # About Us page
│   │   ├── farmer-wins/     # Farmer Wins page
│   │   ├── highlights/      # AgriFort Highlights page
│   │   ├── leaders/         # Leaders & People page
│   │   ├── login/           # Workplace Login page
│   │   ├── portfolio/       # Our Portfolio page
│   │   ├── registration/   # Registration Center page
│   │   ├── layout.tsx       # Root layout with Header/Footer
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles & utilities
│   │
│   ├── components/          # React components
│   │   ├── layout/         # Layout components
│   │   │   ├── Header.tsx  # Navigation header
│   │   │   └── Footer.tsx  # Site footer
│   │   ├── ui/             # shadcn/ui components
│   │   │   ├── button.tsx  # Button component
│   │   │   └── dropdown-menu.tsx
│   │   ├── HeroSection.tsx      # Homepage hero section
│   │   ├── ScrollingBanner.tsx  # Scrolling message banner
│   │   ├── theme-provider.tsx   # Theme context provider
│   │   └── theme-toggle.tsx     # Dark/light theme toggle
│   │
│   └── lib/
│       └── utils.ts        # Utility functions (cn helper)
│
├── Configuration Files
│   ├── package.json        # Dependencies & scripts
│   ├── tsconfig.json       # TypeScript configuration
│   ├── tailwind.config.ts  # Tailwind CSS configuration
│   ├── next.config.ts      # Next.js configuration
│   ├── postcss.config.mjs  # PostCSS configuration
│   ├── components.json     # shadcn/ui configuration
│   ├── README.md           # Project documentation
│   ├── SETUP.md            # Setup instructions
│   └── IMPROVEMENTS.md     # Improvement notes
```

---

## 🎨 Design System

### Color Palette

#### Agriculture Theme Colors
- **Agri Green**: Shades 50-900
  - Primary: `#22c55e` (500)
  - Dark: `#166534` (800)
- **Agri Earth**: Shades 50-900
  - Primary: `#9c7840` (500)
  - Dark: `#7d5f30` (600)

#### Theme Variables
- Light/Dark mode support via CSS variables
- HSL color system for theme switching

### Custom CSS Utilities

#### Gradient Buttons
- `.btn-gradient-primary` - Primary gradient button
- `.btn-gradient-agri` - Agriculture theme gradient
- `.btn-gradient-earth` - Earth tone gradient
- `.btn-gradient-hero` - Hero section button

#### Color Utilities
- `.text-agri-green` / `.bg-agri-green` - Green theme
- `.text-agri-earth` / `.bg-agri-earth` - Earth theme
- `.gradient-text` - Gradient text effect

#### Animation Utilities
- `.animate-fade-in` - Fade in animation
- `.animate-slide-up` - Slide up animation
- `.animate-slide-in-right` - Slide in from right
- `.animate-scroll` - Scrolling banner animation

---

## 📄 Pages & Routes

### Homepage (`/`)
- **HeroSection**: Full-width hero with rotating background images
  - Title: "Innovative Technology To Transform Agriculture"
  - 5 circular feature icons (Manufacturing, R&D, People, Products, Partnerships)
  - Image carousel with navigation dots
- **ScrollingBanner**: Green banner with scrolling messages
- **AgriFort Journey**: Company story section with "Read More" link

### About Us (`/about`)
- Placeholder page (content coming soon)

### Leaders & People (`/leaders`)
- Placeholder page (content coming soon)

### Our Portfolio (`/portfolio`)
- Placeholder page (content coming soon)

### Farmer Wins (`/farmer-wins`)
- Placeholder page (content coming soon)

### AgriFort Highlights (`/highlights`)
- Placeholder page (content coming soon)

### Registration Center (`/registration`)
- Placeholder page (content coming soon)

### Workplace Login (`/login`)
- Placeholder page (content coming soon)

---

## 🧩 Key Components

### Header Component
- **Logo**: Leaf icon with "AGRIFORT TECHNOLOGIES" text
- **Navigation**: Center-aligned menu items
  - About Us, Leaders, Portfolio, Farmer Wins, Highlights
- **Right Side**: Registration Center link + Workplace Login button
- **Mobile**: Responsive hamburger menu
- **Theme Toggle**: Dark/light/system theme switcher

### Footer Component
- **4 Column Layout**:
  1. Address Section - 3 office locations (Lucknow, Mumbai, Dubai)
  2. Media Section - Newsrooms, Electronic, Online, Events
  3. Farmer's Reach & Get in Touch - Contact, Careers, Social Media
  4. Groups of Companies - Link to company websites
- **Social Media**: Facebook, Twitter, LinkedIn, YouTube
- **Bottom Bar**: Copyright, Privacy Policy, Terms of Service

### HeroSection Component
- **Client Component** (`"use client"`)
- Rotating background images (5 agriculture-themed images)
- Dark green gradient overlay on left side
- Main title with fade-in animation
- 5 feature icons with staggered slide-up animations
- Image navigation dots at bottom right

### ScrollingBanner Component
- **Client Component** (`"use client"`)
- Green background (`bg-agri-green-500`)
- Infinite scrolling animation (30s duration)
- Messages:
  - "Innovative technology to transform agriculture"
  - "Farmer wins - we win"
  - "Trusted products by farmers nationwide"
  - "Jai jawan - jai kisan"
  - "Moving lives through innovation"
- Leaf icons between messages
- Pauses on hover

---

## ⚙️ Configuration Details

### TypeScript (`tsconfig.json`)
- Target: ES2017
- Module: ESNext
- Path alias: `@/*` → `./src/*`
- Strict mode enabled

### Tailwind CSS (`tailwind.config.ts`)
- Dark mode: Class-based
- Content paths: `src/pages/**/*`, `src/components/**/*`, `src/app/**/*`
- Custom colors: `agri.green`, `agri.earth`
- Custom gradients: `gradient-primary`, `gradient-agri`, `gradient-earth`, `gradient-hero`
- Animation plugin: `tailwindcss-animate`

### Next.js (`next.config.ts`)
- Default configuration (no custom settings yet)

### shadcn/ui (`components.json`)
- Style: Default
- RSC: Enabled (React Server Components)
- Base color: Slate
- CSS variables: Enabled
- Path aliases configured

---

## 🚀 Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 📦 Adding New Components

### Adding shadcn/ui Components
```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add input
```

### Creating Custom Components
1. Create component in `src/components/`
2. Use TypeScript for type safety
3. Use Tailwind classes for styling
4. Leverage custom utilities from `globals.css`
5. Add "use client" directive if using React hooks

---

## 🎯 Key Features

### ✅ Implemented
- ✅ Next.js 15 with App Router
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light theme support
- ✅ Custom agriculture-themed color palette
- ✅ Hero section with image carousel
- ✅ Scrolling banner
- ✅ Navigation header with mobile menu
- ✅ Comprehensive footer
- ✅ Custom CSS utilities (gradients, animations)
- ✅ TypeScript throughout

### 🚧 In Progress / Placeholder
- ⏳ Content pages (About, Leaders, Portfolio, etc.)
- ⏳ Login/Registration functionality
- ⏳ Image assets in `public/images/`

---

## 🔧 Development Guidelines

### File Naming
- Components: PascalCase (e.g., `HeroSection.tsx`)
- Pages: lowercase (e.g., `page.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)

### Component Structure
- Use functional components
- Add `"use client"` for client-side interactivity
- Export default for page components
- Use TypeScript interfaces for props

### Styling Guidelines
- Use Tailwind utility classes
- Leverage custom utilities from `globals.css`
- Use agriculture theme colors (`agri-green-*`, `agri-earth-*`)
- Maintain responsive design (mobile-first)

### Theme Support
- All components should support dark mode
- Use theme variables for colors
- Test both light and dark themes

---

## 📝 Next Steps for Development

1. **Content Development**
   - Add content to placeholder pages
   - Create page layouts and components
   - Add images to `public/images/`

2. **Functionality**
   - Implement login/registration forms
   - Add form validation
   - Connect to backend APIs (if needed)

3. **Enhancements**
   - Add more sections to homepage
   - Implement page transitions
   - Add loading states
   - Optimize images with Next.js Image component

4. **Testing**
   - Test responsive design on all devices
   - Test theme switching
   - Test navigation and links

---

## 🌐 Project URLs

- **Development**: http://localhost:3000
- **Production**: (To be configured)

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Radix UI Documentation](https://www.radix-ui.com)

---

**Last Updated**: Based on current project state
**Project Status**: ✅ Ready for development

