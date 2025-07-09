# DevOps Portfolio – Abhijeet Raj

This is a personal DevOps portfolio built using **React + Vite + Tailwind CSS** and deployed via **GitHub Pages**. It includes a downloadable resume and showcases DevOps projects and skills.

---

## 🚀 How to Run & Set Up Locally

```bash
# 1. Clone the repository
git clone https://github.com/abhijeetraj646/dev-portfolio.git
cd dev-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open `http://localhost:5173` in your browser to view it.

---

## 🏗️ Build for Production

```bash
npm run build
```

This creates a production-ready version in the `dist/` folder.

---

## 🌐 Deploy to GitHub Pages

Ensure `vite.config.ts` includes:

```ts
export default defineConfig({
  base: '/dev-portfolio/',
  plugins: [react()],
});
```

Then run:

```bash
npm run deploy
```

> This builds the project and deploys it to the `gh-pages` branch.

---

## 📄 Resume Download

1. Place your resume file here:  
   `public/Abhijeet_Devops.pdf`

2. It will be available at:  
   `https://abhijeetraj646.github.io/dev-portfolio/Abhijeet_Devops.pdf`

3. The "Resume" button on the site downloads this file directly.

---

## 🔗 Live Portfolio

👉 [Click to view live site](https://abhijeetraj646.github.io/dev-portfolio/)

---
