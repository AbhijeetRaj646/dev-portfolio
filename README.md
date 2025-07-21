# 🚀 Modern DevOps Engineer Portfolio

A stunning, fully responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring modern animations, dark mode, and comprehensive DevOps project showcases.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-green)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-cyan)

## ✨ Features

### 🎨 Modern Design
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Glass Morphism**: Modern frosted glass effects throughout
- **Gradient Animations**: Beautiful animated gradients and transitions
- **Custom Animations**: Smooth scroll animations and hover effects

### 🚀 Performance & SEO
- **Optimized Loading**: Lazy loading for images and components
- **SEO Ready**: Comprehensive meta tags and structured data
- **Fast Performance**: Optimized bundle size and loading times
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels
- **Progressive Enhancement**: Works without JavaScript

### 💼 Portfolio Features
- **Dynamic Hero Section**: Typing animation with role rotation
- **Interactive Skills**: Animated progress bars with filtering
- **Project Showcase**: Modal pop-ups with detailed project information
- **Timeline Experience**: Animated timeline with work history
- **Contact Form**: Validated form with toast notifications
- **Resume Download**: Direct PDF download functionality

### 🛠️ Technical Features
- **TypeScript**: Full type safety and better development experience
- **Framer Motion**: Smooth animations and transitions
- **React Hook Form**: Efficient form handling with validation
- **React Hot Toast**: Beautiful toast notifications
- **Intersection Observer**: Scroll-triggered animations
- **CSS Variables**: Dynamic theming system

## 🏗️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom utilities
- **Animations**: Framer Motion, CSS animations
- **Icons**: Heroicons, Custom SVGs
- **Forms**: React Hook Form with validation
- **Notifications**: React Hot Toast
- **Font**: Inter (Google Fonts)

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhijeetraj646/dev-portfolio.git
   cd dev-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   │   ├── AnimatedSection.tsx
│   │   └── ParallaxSection.tsx
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with animations
│   ├── Skills.tsx       # Skills showcase
│   ├── Projects.tsx     # Project portfolio
│   ├── Experience.tsx   # Work experience timeline
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer section
├── contexts/            # React contexts
│   └── ThemeContext.tsx # Theme management
├── hooks/               # Custom hooks
│   └── useScrollSpy.ts  # Scroll spy functionality
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles and CSS variables
```

## 🎨 Customization

### Theme Colors
Update CSS variables in `src/index.css`:

```css
:root {
  --primary: 59 130 246;        /* Blue-500 */
  --background: 255 255 255;    /* White */
  --foreground: 15 23 42;       /* Slate-900 */
  /* ... more variables */
}
```

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name, title, description
- `src/components/Experience.tsx` - Work experience and education
- `src/components/Projects.tsx` - Your projects
- `src/components/Skills.tsx` - Your skills and technologies
- `src/components/Contact.tsx` - Contact information
- `index.html` - Meta tags and SEO information

### Adding New Sections
1. Create a new component in `src/components/`
2. Add it to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## 🌐 Deployment

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Vercel
1. Push your code to GitHub
2. Import project to Vercel
3. Configure build settings (auto-detected)
4. Deploy!

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📈 Performance Tips

- **Images**: Use WebP format for better compression
- **Lazy Loading**: Images and components load when needed
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Run `npm run build -- --analyze` to analyze bundle size
- **Caching**: Configure proper cache headers for static assets

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🌟 Features Showcase

### 🎭 Animations
- Scroll-triggered animations using Intersection Observer
- Smooth page transitions with Framer Motion
- Hover effects and micro-interactions
- Loading states and skeleton screens

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly interface
- Optimized typography scaling

### ♿ Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast support

### 🔍 SEO Optimization
- Meta tags for social media sharing
- Structured data (JSON-LD)
- Sitemap generation
- Optimized loading performance
- Canonical URLs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

**Abhijeet Raj** - DevOps Engineer

- 📧 Email: abhijeetraj646@gmail.com
- 💼 LinkedIn: [linkedin.com/in/abhijeetraj646](https://linkedin.com/in/abhijeetraj646)
- 🐙 GitHub: [github.com/abhijeetraj646](https://github.com/abhijeetraj646)
- 📍 Location: Bangalore, India

---

<div align="center">
  <p>Built with ❤️ using React, TypeScript, and Tailwind CSS</p>
  <p>© 2024 Abhijeet Raj. All rights reserved.</p>
</div>
