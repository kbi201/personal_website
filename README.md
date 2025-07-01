# Kelly Irahola - Professional Portfolio

A modern, responsive portfolio website showcasing computer science expertise, machine learning projects, and professional experience.

## 🚀 Deployment on Vercel

### Quick Deploy (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration from `vercel.json`
   - Click "Deploy"

### Manual Configuration

If you need to configure manually:

- **Build Command:** `vite build`
- **Output Directory:** `dist/public`
- **Framework Preset:** Vite

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5000`

## 📁 Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utilities
├── server/              # Backend Express server
├── shared/              # Shared types and schemas
├── vercel.json          # Vercel deployment configuration
└── README.md
```

## ✨ Features

- **Interactive Project Carousel** with tech stack icons
- **Responsive Design** for all devices
- **Modern UI Components** with Radix UI and Tailwind CSS
- **Professional Timeline** showing experience and education
- **Contact Form** with validation
- **SEO Optimized** with proper meta tags

## 🔧 Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **UI Components:** Radix UI, shadcn/ui
- **Backend:** Node.js, Express (for full-stack features)
- **Deployment:** Vercel (frontend), optional backend deployment

## 📊 Performance

- Fast loading with Vite optimization
- Mobile-first responsive design
- Accessible components with ARIA compliance
- Modern web standards and best practices