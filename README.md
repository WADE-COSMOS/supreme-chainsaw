# Supreme Chainsaw - Professional Video Editing Portfolio

A modern, responsive, high-converting agency portfolio website for a professional video editing studio. Built with vanilla HTML, CSS, and JavaScript.

## 🎬 Features

### ✨ Design & UX
- **Dark Mode Theme**: Sleek, cinematic design with electric cyan and neon purple accents
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Smooth Animations**: Hover effects, scroll animations, and transitions
- **Modern Aesthetics**: Professional agency-level visual design

### 📱 Core Sections

1. **Navigation Bar**
   - Fixed header with smooth scroll navigation
   - Mobile hamburger menu
   - CTA button for contact

2. **Hero Section**
   - High-impact headline and subheadline
   - Call-to-action button
   - Animated background with floating orbs

3. **Portfolio Showcase**
   - Embedded video grid (6 videos)
   - 16:9 responsive video containers
   - Hover overlays with category tags
   - Direct Google Drive iframe embeds

4. **Services Section**
   - 4 service cards with icons
   - Hover animations
   - Service descriptions

5. **About Section**
   - Company information
   - Statistics showcase (projects, clients, experience)

6. **Contact Section**
   - Fully functional contact form
   - Form validation
   - Email service integration
   - Contact information display
   - Social links

7. **Footer**
   - Quick navigation links
   - Social media links
   - Copyright information

## 🚀 Quick Start

### Prerequisites
- No build tools required
- Modern web browser
- Text editor (VS Code recommended)

### Installation

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/WADE3-V/supreme-chainsaw.git
   cd supreme-chainsaw
   ```

2. **Open in browser**
   - Double-click `index.html` or
   - Right-click → Open with → Browser or
   - Use Live Server in VS Code

3. **Setup Email Functionality**
   
   **Option A: Using Formspree (Recommended)**
   - Go to https://formspree.io
   - Create a free account
   - Create a new form and get your Form ID
   - In `script.js`, replace `YOUR_FORM_ID` with your actual ID:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_ACTUAL_FORM_ID', {
   ```

   **Option B: Using EmailJS**
   - Go to https://www.emailjs.com/
   - Create a free account
   - Follow their setup guide
   - Replace the form submission logic in `script.js`

## 📁 File Structure

```
supreme-chainsaw/
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🎨 Color Scheme

- **Primary Dark**: `#0b0c10`
- **Secondary Dark**: `#121212`
- **Accent Cyan**: `#00e5ff`
- **Accent Purple**: `#8a2be2`
- **Text White**: `#ffffff`
- **Text Gray**: `#b3b3b3`

## 🎥 Video Integration

Videos are embedded using Google Drive direct preview links:

```html
<iframe src="https://drive.google.com/file/d/VIDEO_ID/preview" 
        frameborder="0" 
        allow="autoplay" 
        allowfullscreen>
</iframe>
```

To add your own videos:
1. Upload videos to Google Drive
2. Right-click video → Share → Get link
3. Extract the file ID from the share link
4. Use the preview URL: `https://drive.google.com/file/d/FILE_ID/preview`

### Current Videos
- Video 1: Anime Edit
- Video 2: Gaming Showcase
- Video 3: Motion Graphics
- Video 4: Promotional Video
- Video 5: Short-form Content
- Video 6: Color Grading

## 📝 Contact Form

### Features
- Real-time form validation
- Project type selection dropdown
- Budget range selection
- Auto-save to local storage
- Success/error messaging
- Smooth form interactions

### Form Fields
- Name (required)
- Email (required, validated)
- Project Type (required)
- Budget Range (required)
- Message (required, min 10 characters)

## 🎯 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ⚡ Performance Features

- Lazy loading for iframes
- Debounced scroll events
- Optimized animations
- CSS Grid for responsive layouts
- Minimal JavaScript for fast loading
- CDN-ready structure

## 🔧 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-dark: #0b0c10;
    --secondary-dark: #121212;
    --accent-cyan: #00e5ff;
    --accent-purple: #8a2be2;
    --text-white: #ffffff;
    --text-gray: #b3b3b3;
}
```

### Text Content
All text can be edited directly in `index.html`:
- Logo name and tagline
- Section titles and descriptions
- Service descriptions
- Contact information
- Social links

### Fonts
The site uses system fonts for best performance:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

To use custom fonts, add to `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

## 🌐 Deployment

### Deploy to GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select main branch as source
4. Your site will be live at: `https://username.github.io/supreme-chainsaw`

### Deploy to Netlify
1. Connect GitHub repository
2. Set build command: (leave blank - static site)
3. Set publish directory: (leave blank - root directory)
4. Deploy!

### Deploy to Vercel
1. Import GitHub repository
2. Vercel auto-detects static site
3. Deploy automatically

## 📊 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security

- No backend dependencies
- Client-side form validation
- HTTPS recommended for production
- No sensitive data stored locally

## 📱 SEO Optimization

To improve search rankings:

1. **Meta Tags** (add to `<head>`):
```html
<meta name="description" content="Professional video editing for anime, gaming, and commercial content.">
<meta name="keywords" content="video editing, animation editing, gaming montages">
<meta name="og:title" content="Supreme Chainsaw - Video Editing Studio">
<meta name="og:description" content="...">
<meta name="og:image" content="thumbnail.jpg">
```

2. **Google Analytics**:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 🐛 Troubleshooting

### Videos not loading?
- Verify Google Drive links are accessible
- Check internet connection
- Ensure file IDs are correct
- Try incognito mode to rule out cache issues

### Form not submitting?
- Replace `YOUR_FORM_ID` in script.js with your Formspree ID
- Check browser console for errors (F12)
- Verify email configuration

### Styling issues?
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser
- Check CSS file is linked correctly

## 📞 Contact & Support

For inquiries or customization:
- Email: info@supremechainsaw.com
- Discord: Join our server
- Instagram: @supremechainsaw
- YouTube: @supremechainsaw

## 📜 License

This project is available for personal and commercial use. Feel free to modify and customize for your needs.

## 🚀 Future Enhancements

- Blog section for case studies
- Testimonials from clients
- Video filtering by category
- Pricing page with packages
- FAQ section
- Live chat integration
- Booking calendar integration
- Newsletter signup

## ✅ Checklist for Launch

- [ ] Replace company name/logo
- [ ] Update video embeds with your videos
- [ ] Setup email service (Formspree/EmailJS)
- [ ] Add your social media links
- [ ] Update contact information
- [ ] Setup analytics (Google Analytics)
- [ ] Test on mobile devices
- [ ] Test form submission
- [ ] Deploy to hosting
- [ ] Setup SSL certificate (HTTPS)

## 🤝 Contributing

Feel free to fork, modify, and improve this template!

---

**Built with ❤️ for Supreme Chainsaw Video Editing Studio**
