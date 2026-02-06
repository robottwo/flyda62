# FlyDA62.com - Delta Echo Aviation Website

Premium marketing website for Diamond DA-62 dry lease program at KFRG Republic Airport, NY.

## Project Overview

- **Domain:** flyda62.com
- **Purpose:** Marketing site to attract dry lease customers for Diamond DA-62 (N520RA)
- **Pricing:** $650/hr dry lease (lessee pays fuel separately)
- **Location:** KFRG Republic Airport, Farmingdale, NY
- **Target:** Multi-engine pilots, business travelers, pilots seeking ownership alternative

## Features

- Fully responsive, mobile-first design
- Tailwind CSS for styling (via CDN)
- SEO optimized with meta tags, Open Graph, and Schema.org markup
- Contact form powered by Formspree
- Smooth scrolling and interactive elements
- Premium aviation-themed design

## File Structure

```
flyda62-website/
├── index.html          # Main website file (all-in-one)
├── README.md           # This file
├── assets/             # Additional assets (empty for now)
└── images/             # Image placeholder folder
```

## Deployment Instructions

### Option 1: GoDaddy Hosting

1. **Prepare your files**
   - Ensure all files are in the project root
   - The site is static, so no build process needed

2. **Upload to GoDaddy**
   - Log in to your GoDaddy account
   - Navigate to your hosting control panel (cPanel)
   - Open File Manager
   - Navigate to the `public_html` directory (or your domain's root)
   - Upload `index.html` to this directory
   - The site will be live at `https://flyda62.com`

3. **Configure Formspree**
   - The contact form is already set up with Formspree
   - Email destination: `robottwo@gmail.com`
   - Visit https://formspree.io/ to create an account and verify your email
   - The form will work immediately, but you may want to:
     - Set up email notifications
     - Configure spam protection
     - Customize success messages
     - Set up automated responses

4. **Update placeholder images**
   - Replace placeholder image URLs in `index.html` with actual aircraft photos
   - Search for `https://placehold.co/` in the file to find all placeholders
   - Recommended image sizes:
     - Hero: 1920x1080px
     - Gallery images: 600x400px (or higher quality)

### Option 2: GitHub Pages

1. **Create a GitHub repository**
   - Create a new repository named `flyda62-website`
   - Upload `index.html` to the repository

2. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select "main" branch as the source
   - Save changes
   - Your site will be available at `https://yourusername.github.io/flyda62-website/`

3. **Custom domain (optional)**
   - In repository Settings > Pages, set custom domain to `flyda62.com`
   - Configure DNS records on GoDaddy:
     - Add CNAME record: `@` pointing to `yourusername.github.io`
     - Add CNAME record: `www` pointing to `yourusername.github.io`

### Option 3: Netlify (Free)

1. **Deploy to Netlify**
   - Drag and drop the `flyda62-website` folder to https://app.netlify.com/drop
   - Your site will be live instantly with a random URL

2. **Custom domain**
   - In Netlify dashboard, go to Domain settings
   - Add custom domain: `flyda62.com`
   - Update DNS on GoDaddy with the Netlify-provided records

## Customization

### Update Contact Form Email

The contact form currently points to `robottwo@gmail.com`. To change this:

1. Open `index.html`
2. Find the form tag (around line 362):
   ```html
   <form action="https://formspree.io/f/robottwo@gmail.com" method="POST">
   ```
3. Replace `robottwo@gmail.com` with your desired email
4. Visit Formspree to verify the new email address

### Replace Placeholder Images

1. Find all instances of `https://placehold.co/` in `index.html`
2. Replace with paths to your actual images
3. For best performance, use:
   - JPG format for photographs
   - WebP format for better compression (if supported)
   - Compress images to under 200KB each

### Update Phone Number

1. Find the phone number placeholder: `+1 (XXX) XXX-XXXX`
2. Replace with your actual phone number
3. Update in both the contact section and footer

### Social Media Links

1. In the footer (around line 520), find the social media placeholder links
2. Replace `#` with your actual social media URLs:
   - Twitter/X profile
   - Instagram profile
   - YouTube channel

## SEO Checklist

The following SEO optimizations are already implemented:

- ✅ Meta title and description
- ✅ Meta keywords
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Schema.org LocalBusiness markup
- ✅ Semantic HTML structure
- ✅ Mobile-responsive design
- ✅ Fast loading (static HTML, CDN CSS)

### Additional SEO Tasks

After deployment:

1. **Submit to Google Search Console**
   - Add property for `flyda62.com`
   - Submit sitemap (if you create one)
   - Request indexing

2. **Submit to Bing Webmaster Tools**
   - Add property and verify ownership
   - Submit sitemap

3. **Create a sitemap.xml** (optional but recommended)
   - List all pages (currently just `/`)
   - Submit to search engines

4. **Build backlinks**
   - Aviation forums (Diamond Aviators Network, Pilots of America)
   - Classified listings (Barnstormers, Trade-A-Plane)
   - Social media profiles

## Performance Optimization

The site is already optimized for speed:

- Static HTML (no build process)
- Tailwind CSS via CDN (cached)
- Minimal JavaScript
- Placeholder images (replace with optimized images)

### Image Optimization Tips

- Use TinyPNG or similar tools to compress images
- Use responsive images (`srcset` attribute) if needed
- Consider lazy loading for gallery images
- Use WebP format with JPG fallback

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Maintenance

### Regular Updates

- Replace placeholder images with real photos of N520RA
- Update pricing if it changes
- Add testimonials as you receive them
- Update gallery with new photos
- Monitor and respond to form submissions

### Contact Form Management

- Check Formspree dashboard regularly for submissions
- Respond to inquiries promptly (within 24-48 hours)
- Set up email notifications for new submissions
- Consider adding an auto-responder message

## Analytics (Optional)

To add analytics tracking:

1. **Google Analytics 4**
   - Create a GA4 property
   - Add the tracking script before `</head>` in `index.html`

2. **Other options**
   - Plausible (privacy-focused)
   - Fathom (self-hosted option)

## Legal Compliance

- Ensure your dry lease agreement complies with FAA Part 91 regulations
- Have an aviation attorney review your lease documents
- Clearly state that this is a dry lease (lessee has operational control)
- Include proper insurance requirements in your communications

## Support

For questions or issues:
- Email: info@flyda62.com (update with actual contact)
- Review the Formspree documentation: https://formspree.io/docs

---

**Built with:** HTML5, Tailwind CSS, Vanilla JavaScript
**Deployment target:** GoDaddy hosting / GitHub Pages
**Contact form:** Formspree
**Last updated:** February 2026
