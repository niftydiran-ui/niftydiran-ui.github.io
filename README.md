# Diran Dodda - AI Engineer Portfolio

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?style=for-the-badge&logo=github)
![JSON Powered](https://img.shields.io/badge/Data-JSON%20Driven-orange?style=for-the-badge)

**Live Site:** [https://niftydiran-ui.github.io](https://niftydiran-ui.github.io)

## 🚀 Overview

A modern, responsive portfolio website showcasing AI/ML engineering projects, built with a clean JSON-based architecture for easy content management. Features stunning animations, particle effects, and a fully dynamic content system.

## ✨ Features

### 🎨 Modern Design
- **Glassmorphism UI** with backdrop blur effects
- **Animated particle canvas** with connected dots
- **Gradient orbs** creating dynamic background ambiance
- **Smooth scroll animations** using Intersection Observer
- **Responsive grid layouts** adapting to all screen sizes

### 🔧 Technical Highlights
- **JSON-Driven Content**: All portfolio data stored in `data.json` for easy updates
- **Zero Dependencies**: Pure vanilla JavaScript (no frameworks)
- **Performance Optimized**: Lazy loading and efficient animations
- **SEO Ready**: Semantic HTML5 structure
- **Mobile First**: Fully responsive across all devices

### 📊 Sections
- **Hero Section**: Introduction with key metrics and current focus
- **Professional Summary**: Core competencies and achievements
- **Skills**: Comprehensive technical stack
- **Projects Grid**: 12+ AI/ML projects with GitHub links
- **Experience**: Professional work history
- **Education**: Academic credentials
- **Publications**: Research papers and conference proceedings
- **Certifications**: Professional certifications and courses
- **Contact**: Multiple ways to connect

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Data Management**: JSON
- **Animations**: CSS Keyframes, Canvas API
- **Hosting**: GitHub Pages
- **Version Control**: Git

## 📂 Project Structure

```
niftydiran-ui.github.io/
├── index.html          # Main HTML structure
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
├── data.json           # Portfolio content data
└── README.md          # Project documentation
```

## 🎯 Key Projects Featured

### 1. **Agentic AI Financial Analyst**
- Multi-agent LLM system with LangChain
- Processes 200GB+ market data
- Prophet + XGBoost ensemble forecasting
- 70% reduction in analysis time

### 2. **Real-Time Twitter Sentiment Analysis**
- BERT inference at 15K tweets/min
- 89% accuracy, sub-100ms latency
- Kafka streaming architecture
- Live dashboard with Streamlit

### 3. **Agentic Stock Price Predictor**
- XGBoost-powered trading signals
- Walk-forward validation
- Automated backtesting with metrics
- Technical indicator engineering

### 4. **Conversational AI Support Bot**
- GPT-4 with RAG system
- 85% ticket resolution rate
- Pinecone vector database
- React-based interface

*...and 8 more projects!*

## 🚦 Getting Started

### View Live
Simply visit: **[https://niftydiran-ui.github.io](https://niftydiran-ui.github.io)**

### Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/niftydiran-ui/niftydiran-ui.github.io.git
cd niftydiran-ui.github.io
```

2. **Start a local server**
```bash
# Using Python
python -m http.server 8000

# Or using Node.js
npx http-server -p 8000
```

3. **Open in browser**
```
http://localhost:8000
```

## ✏️ Updating Content

All portfolio content is managed through `data.json`. Simply edit this file and refresh the page!

### Example: Add a New Project

```json
{
  "title": "Your Project Name",
  "description": "Brief description of the project",
  "tag": "Tech Stack · Tools · Framework",
  "github": "https://github.com/username/repo",
  "highlights": [
    "Key achievement or feature 1",
    "Key achievement or feature 2",
    "Key achievement or feature 3"
  ]
}
```

### Data Structure

- `personal`: Name, title, contact info, badges
- `stats`: Hero section statistics
- `currentFocus`: Current work/research focus
- `summary`: Professional summary items
- `skills`: Technical skills by category
- `projects`: Project portfolio (with GitHub links)
- `experience`: Work history
- `education`: Academic background
- `publications`: Research papers
- `certifications`: Certifications and courses

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --accent: #76f7d8;      /* Primary accent color */
  --accent-2: #9a7bff;    /* Secondary accent */
  --accent-3: #ff6b9d;    /* Tertiary accent */
  --text: #eaf0ff;        /* Main text color */
  --muted: #9ba7c7;       /* Muted text */
}
```

### Animations
- Particle count: Modify `particleCount` in `script.js`
- Animation speeds: Adjust `@keyframes` in `styles.css`
- Scroll effects: Configure `threshold` in Intersection Observer

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Load Time**: < 2 seconds on 3G
- **Bundle Size**: ~50KB total (uncompressed)
- **Accessibility**: WCAG 2.1 AA compliant

## 🔄 Deployment

### GitHub Pages (Current)
Automatically deployed from `main` branch. Any push triggers a rebuild.

### Alternative Hosting
Can be deployed to:
- Vercel: `vercel --prod`
- Netlify: Connect repo or drag-and-drop
- AWS S3: `aws s3 sync . s3://bucket-name`

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **Email**: [doddadiran@gmail.com](mailto:doddadiran@gmail.com)
- **GitHub**: [@niftydiran-ui](https://github.com/niftydiran-ui)
- **Phone**: (331) 425-1963

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Particle effects inspired by Three.js demos
- Color palette optimized for dark mode accessibility

---

**Built with 💻 and ☕ by Diran Dodda**

*AI Engineer | Multi-Agent Architect | LLM Systems Specialist*
