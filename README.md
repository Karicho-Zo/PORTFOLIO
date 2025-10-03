# Portfolio Website

A modern, fully responsive personal portfolio website built with React.js, TypeScript, and Tailwind CSS. This portfolio showcases projects, skills, experience, and provides a clean, professional interface with dark/light mode support.

## 🚀 Features

### Core Features
- **Responsive Design**: Mobile-first approach with breakpoints at 768px, 1024px, and 1440px
- **Dark/Light Mode**: Toggle between themes with localStorage persistence
- **Smooth Animations**: Scroll-based animations using Framer Motion
- **Interactive Components**: Hover effects, modals, and animated counters
- **Accessibility**: WCAG AA compliant with ARIA labels and keyboard navigation

### Sections
- **Navigation Bar**: Fixed header with hamburger menu for mobile
- **Hero Section**: Animated typing effect with call-to-action buttons
- **About Section**: Profile with expandable bio and animated statistics
- **Projects Section**: Filterable grid with modal details
- **Skills Section**: Interactive progress bars with categories
- **Experience Section**: Timeline layout for work and education
- **Contact Section**: Form validation with EmailJS integration
- **Footer**: Links, newsletter signup, and back-to-top button

### Technical Features
- **Progressive Web App (PWA)**: Offline capability with service worker
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance Optimized**: Code splitting and lazy loading
- **TypeScript**: Full type safety throughout the application
- **Modern Stack**: React 18, Vite, Framer Motion, React Hook Form

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Custom Properties
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Forms**: React Hook Form
- **Routing**: React Router DOM
- **Email**: EmailJS
- **PWA**: Vite PWA Plugin
- **Deployment**: Netlify/Vercel ready

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## ⚡ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up a service (Gmail, Outlook, etc.)
3. Create an email template
4. Add your credentials to the `.env` file

### Content Customization
- Update personal information in components
- Replace placeholder images in `/public` folder
- Modify color scheme in `src/styles/index.css`
- Update project data in `src/components/Projects.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: > 1440px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Skip to main content link
- High contrast mode support
- Reduced motion preferences
- Screen reader optimization

## 🚀 Deployment

### Netlify
1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

3. Set up custom domain (optional)

### Vercel
1. Connect your GitHub repository to Vercel
2. Automatic deployments on push
3. Custom domain configuration available

### Manual Deployment
1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder to your hosting provider

## 📊 Performance Optimization

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: WebP format support
- **Lazy Loading**: Components and images
- **Caching**: Service worker implementation
- **Bundle Analysis**: Vite build analysis

## 🧪 Testing

```bash
# Run tests (if implemented)
npm run test

# Run linting
npm run lint

# Build for production
npm run build
```

## 🎨 Customization

### Colors
Modify CSS custom properties in `src/styles/index.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
}
```

### Typography
Update font imports in `index.html` and font families in CSS.

### Animations
Adjust animation durations and easing in component files.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

For questions or support, please reach out through the contact form on the website or connect via social media links in the footer.

---

Built with ❤️ using React and TypeScript