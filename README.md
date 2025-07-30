# Abhijeet Raj - DevOps Engineer Portfolio 🚀

A modern, responsive portfolio website showcasing DevOps expertise, built with React, TypeScript, and Tailwind CSS.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://abhijeetraj.dev)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/AbhijeetRaj646/dev-portfolio)

## ✨ Features

### 🎨 **Modern Design**
- Responsive design that works on all devices
- Clean, professional UI with smooth animations
- Dark gradient hero section with system status dashboard
- Modern card-based layout for projects and experience

### 🔍 **SEO Optimized**
- Complete meta tags for search engines
- Open Graph and Twitter Card support
- Semantic HTML structure with proper heading hierarchy
- Optimized for search engine visibility

### ♿ **Accessibility First**
- WCAG 2.1 compliant
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios and readable fonts

### 📊 **Analytics Ready**
- Google Analytics 4 integration
- Plausible Analytics support
- Event tracking for user interactions
- Environment-based configuration

### ⚡ **Performance Optimized**
- Vite build system for fast development and builds
- Code splitting and lazy loading
- Optimized bundle size
- Fast loading times

### 🛡️ **Security & Best Practices**
- No security vulnerabilities
- Modern React hooks and patterns
- TypeScript for type safety
- ESLint for code quality

## 🚀 **Quick Start**

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbhijeetRaj646/dev-portfolio.git
   cd dev-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional)**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your analytics configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Visit `http://localhost:3000`

## 📁 **Project Structure**

```
src/
├── components/           # React components
│   ├── Analytics.tsx    # Analytics integration
│   ├── Contact.tsx      # Contact form and information
│   ├── Experience.tsx   # Work experience and education
│   ├── Footer.tsx       # Site footer
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Projects.tsx     # Portfolio projects
│   └── Skills.tsx       # Technical skills
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🔧 **Configuration**

### Analytics Setup

Create a `.env.local` file and configure your analytics:

```env
# Google Analytics
VITE_GA_ENABLED=true
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Plausible Analytics
VITE_PLAUSIBLE_ENABLED=true
VITE_PLAUSIBLE_DOMAIN=your-domain.com
```

### Customization

1. **Update personal information** in the component files
2. **Replace the resume PDF** in the `public` folder
3. **Modify colors** in `tailwind.config.js`
4. **Update project data** in `src/components/Projects.tsx`

## 📱 **Responsive Design**

The portfolio is fully responsive and tested on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🎯 **Key Sections**

### **Hero Section**
- Professional introduction
- Key skills highlights
- Contact information
- Call-to-action buttons

### **Skills Section**
- Technical skill categories
- Proficiency levels with progress bars
- Additional technologies

### **Projects Section**
- Detailed project descriptions
- Technologies used
- Key achievements and metrics

### **Experience Section**
- Work experience timeline
- Educational background
- Certifications

### **Contact Section**
- Contact form with email integration
- Professional links
- Availability status

## 🚀 **Deployment**

### GitHub Pages
```bash
npm run deploy
```

### Manual Build
```bash
npm run build
# Deploy the `dist` folder to your hosting provider
```

### Recommended Hosting
- [Vercel](https://vercel.com) - Zero configuration deployment
- [Netlify](https://netlify.com) - Easy continuous deployment
- [GitHub Pages](https://pages.github.com) - Free hosting for GitHub repos

## 🛠️ **Built With**

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Analytics**: Google Analytics 4, Plausible
- **Deployment**: GitHub Pages

## 📊 **Performance**

- ⚡ **Fast Loading**: Optimized for Core Web Vitals
- 📦 **Small Bundle**: Code splitting and tree shaking
- 🎨 **Smooth Animations**: CSS transitions and transforms
- 📱 **Mobile First**: Responsive design approach

## 🤝 **Contributing**

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/AbhijeetRaj646/dev-portfolio/issues).

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 **Author**

**Abhijeet Raj**
- 🌐 Website: [abhijeetraj.dev](https://abhijeetraj.dev)
- 💼 LinkedIn: [abhijeetraj646](https://linkedin.com/in/abhijeetraj646)
- 📧 Email: abhijeetraj646@gmail.com
- 🐱 GitHub: [AbhijeetRaj646](https://github.com/AbhijeetRaj646)

---

⭐ **Star this repo if you found it helpful!**
