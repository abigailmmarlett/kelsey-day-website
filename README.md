# Kelsey Days Website

A modern, elevated website for the Kelsey Days annual celebration. This website features a clean, professional design with smooth animations, responsive layout, and engaging user experience.

## Features

- **Modern Design**: Clean, elegant design with a professional color scheme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects, counter animations, and smooth scrolling
- **Interactive Elements**: Hover effects, mobile menu, and form validation
- **SEO Friendly**: Semantic HTML5 structure with proper meta tags
- **Performance Optimized**: Lightweight, fast-loading pages

## Structure

The website includes the following sections:

1. **Hero Section** - Eye-catching landing area with gradient background
2. **About Section** - Information about Kelsey Days with statistics
3. **Events Section** - Upcoming events displayed in card format
4. **Gallery Section** - Photo gallery with hover effects
5. **Contact Section** - Contact form and event information
6. **Footer** - Site links and social media

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and responsive design
- `script.js` - Interactive functionality and animations

## How to Use

### Local Development

1. Clone the repository
2. Open `index.html` in a web browser, or
3. Run a local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8080
   
   # Using Node.js
   npx http-server -p 8080
   ```
4. Navigate to `http://localhost:8080`

### Deployment

This is a static website that can be deployed to any web hosting service:

- **GitHub Pages**: Enable GitHub Pages in repository settings
- **Netlify**: Drag and drop the folder or connect your repository
- **Vercel**: Import your repository
- **Any web host**: Upload all files via FTP

## Customization

### Content

Edit `index.html` to customize:
- Event names, dates, and descriptions
- About section text and statistics
- Contact information
- Footer content

### Styling

Edit `styles.css` to customize:
- Color scheme (see CSS variables in `:root`)
- Fonts (Google Fonts are included)
- Spacing and layout
- Animation timing

### Images

Replace the placeholder SVGs with actual images:
1. Add your images to an `images/` folder
2. Update the `<img>` or SVG placeholders in `index.html`
3. Recommended image sizes:
   - Hero background: 1920x1080px
   - About image: 600x750px
   - Gallery images: 800x800px (or larger)

## Color Scheme

The website uses a sophisticated color palette:
- **Primary (Gold)**: `#d4af37` - Used for accents and CTAs
- **Secondary (Dark)**: `#1a1a1a` - Headers and important text
- **Text**: `#333` - Body text
- **Background**: `#ffffff` and `#f8f8f8` - Clean, light backgrounds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

Design and development inspired by modern event websites with a focus on user experience and visual appeal.

## License

All rights reserved © 2024 Kelsey Days