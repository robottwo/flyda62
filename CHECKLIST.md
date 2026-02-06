# Deployment Checklist

Use this checklist to ensure a smooth launch of flyda62.com.

## Pre-Deployment Checklist

### Content Review
- [ ] Review all text for accuracy (aircraft specs, pricing, location)
- [ ] Verify email address: `robottwo@gmail.com`
- [ ] Update phone number: Replace `+1 (XXX) XXX-XXXX` (2 locations)
- [ ] Update social media links in footer (Twitter, Instagram, YouTube)

### Images
- [ ] Prepare hero background image (1920x1080px, <200KB)
- [ ] Prepare 4 gallery images (1200x800px each, <200KB)
- [ ] Upload images to `images/` folder
- [ ] Update image paths in `index.html`:
  - [ ] Hero background (line ~95)
  - [ ] Gallery image 1 - Exterior (line ~466)
  - [ ] Gallery image 2 - Panel (line ~471)
  - [ ] Gallery image 3 - Interior (line ~476)
  - [ ] Gallery image 4 - Engine (line ~481)

### Contact Form
- [ ] Create Formspree account (https://formspree.io/)
- [ ] Verify email address: `robottwo@gmail.com`
- [ ] Set up email notifications in Formspree dashboard
- [ ] Test contact form submission
- [ ] Check that test submission is received

### Testing (Local)
- [ ] Open `index.html` in browser
- [ ] Test all navigation links (Aircraft, Pricing, Why Us, Gallery, Contact)
- [ ] Test mobile menu (resize browser or use mobile device)
- [ ] Test contact form submission
- [ ] Check all sections load correctly
- [ ] Verify responsive design on mobile/tablet/desktop

## GoDaddy Deployment Checklist

### Access
- [ ] Log in to GoDaddy account
- [ ] Navigate to hosting > cPanel Admin

### File Upload
- [ ] Open File Manager
- [ ] Navigate to `public_html/`
- [ ] Upload `index.html` to root
- [ ] Create `images/` folder
- [ ] Upload all images to `images/` folder

### Verify Deployment
- [ ] Visit `https://flyda62.com` in browser
- [ ] Check that site loads correctly
- [ ] Test all navigation links
- [ ] Test contact form (submit real test)
- [ ] Check mobile version (use phone or DevTools)

### SSL Certificate
- [ ] Enable AutoSSL in cPanel
- [ ] Wait for SSL to activate (5-10 minutes)
- [ ] Verify HTTPS works (look for lock icon)
- [ ] Force HTTPS redirect (add to .htaccess)

### Performance
- [ ] Enable browser caching (add to .htaccess)
- [ ] Enable gzip compression (add to .htaccess)
- [ ] Test site speed (PageSpeed Insights or similar)

## Post-Launch Checklist

### Day 1
- [ ] Verify all contact form submissions are received
- [ ] Test site on multiple devices (phone, tablet, desktop)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Share website link on social media
- [ ] Update any external listings with new website URL

### Week 1
- [ ] Monitor Formspree dashboard daily for new inquiries
- [ ] Respond to all inquiries within 24-48 hours
- [ ] Check Google Analytics (if added)
- [ ] Verify SSL certificate is working
- [ ] Test all functionality again

### Month 1
- [ ] Add testimonials/reviews as they come in
- [ ] Update gallery with additional photos
- [ ] Consider adding video walkthrough
- [ ] Review and refine messaging based on feedback
- [ ] Update any pricing or details if changed

## SEO Tasks (Post-Launch)

### Search Engines
- [ ] Submit site to Google Search Console
- [ ] Submit site to Bing Webmaster Tools
- [ ] Create and submit sitemap.xml
- [ ] Request indexing via Search Console

### Backlinks
- [ ] Add website to Diamond Aviators Network profile
- [ ] Add website to Pilots of America signature
- [ ] Update Barnstormers listing with website URL
- [ ] Update Trade-A-Plane listing with website URL
- [ ] Update Controller.com listing with website URL
- [ ] Share on relevant Facebook groups

### Local SEO
- [ ] Verify Schema.org markup is correct
- [ ] Check Google Maps business listing (if applicable)
- [ ] Add to aviation directories
- [ ] Request reviews from early customers

## Maintenance Checklist

### Weekly
- [ ] Check Formspree for new submissions
- [ ] Respond to all inquiries
- [ ] Verify site is loading correctly
- [ ] Check for any broken links

### Monthly
- [ ] Backup website files (download index.html)
- [ ] Review and update content if needed
- [ ] Update gallery with new photos
- [ ] Check analytics and metrics

### Quarterly
- [ ] Full site review and audit
- [ ] Update SEO meta tags if needed
- [ ] Refresh marketing copy
- [ ] Check competitor websites
- [ ] Gather customer feedback

## Troubleshooting Quick Reference

### Site Not Loading
1. Check DNS propagation: https://www.whatsmydns.net/
2. Verify files in `public_html/` folder
3. Clear browser cache
4. Check cPanel for any errors

### Contact Form Not Working
1. Check Formspree dashboard
2. Verify email address in form tag
3. Test from different browser
4. Check browser console for errors

### Images Not Showing
1. Verify files in `images/` folder
2. Check file names (case-sensitive)
3. Check file paths in HTML
4. Clear browser cache

### SSL Not Working
1. Wait 24 hours for full propagation
2. Check AutoSSL ran successfully
3. Verify DNS records
4. Contact GoDaddy support if needed

## Emergency Contacts

- **GoDaddy Support:** https://www.godaddy.com/help
- **Formspree Support:** https://formspree.io/docs
- **Your IT/Web contact:** [Add contact info]

---

**Version:** 1.0
**Last updated:** February 6, 2026
**Status:** Ready for deployment
