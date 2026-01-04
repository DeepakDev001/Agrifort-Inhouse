# AgriFort Website

A modern Next.js website for AgriFort - Innovative Tech to Transform Agriculture.

## Features

- ⚡ Next.js 15 with App Router
- 🎨 Tailwind CSS with custom utilities
- 🎯 shadcn/ui components
- 📱 Fully responsive design
- 🌈 Custom gradient buttons and color utilities
- 🎭 Smooth animations

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── layout/      # Header, Footer, etc.
│   └── ui/          # shadcn/ui components
├── lib/             # Utility functions
└── styles/          # Global styles
```

## Custom CSS Utilities

### Gradient Buttons
- `.btn-gradient-primary` - Primary gradient button
- `.btn-gradient-agri` - Agriculture theme gradient
- `.btn-gradient-earth` - Earth tone gradient
- `.btn-gradient-hero` - Hero section button

### Color Utilities
- `.text-agri-green` - Green text color
- `.bg-agri-green` - Green background
- `.text-agri-earth` - Earth tone text
- `.bg-agri-earth` - Earth tone background

### Animation Utilities
- `.animate-fade-in` - Fade in animation
- `.animate-slide-up` - Slide up animation
- `.animate-slide-in-right` - Slide in from right

## Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

## License

Private project - All rights reserved.

