# GoDaddy Deployment Guide

Quick guide to deploy flyda62.com to GoDaddy hosting.

## Prerequisites

- GoDaddy account with domain: flyda62.com
- GoDaddy hosting (cPanel) account
- FTP client (optional, File Manager works too)

## Deployment Steps

### Step 1: Prepare Files

1. Ensure you have the `index.html` file ready
2. Verify all placeholder image URLs are updated (if you have real photos)
3. Test the site locally by opening `index.html` in a browser

### Step 2: Access GoDaddy cPanel

1. Log in to your GoDaddy account
2. Go to "My Products"
3. Find your hosting account and click "Manage"
4. Click "cPanel Admin" to access hosting control panel

### Step 3: Upload Files (Method A: File Manager)

1. In cPanel, find and click "File Manager"
2. Navigate to `public_html` folder (this is your website root)
3. If there are existing files, you can:
   - Delete them (if starting fresh)
   - Or backup them first
4. Click "Upload" in the top menu
5. Select and upload `index.html`
6. Wait for upload to complete

### Step 4: Upload Files (Method B: FTP)

**Use this method for easier bulk uploads:**

1. Get FTP credentials from GoDaddy:
   - In cPanel, click "FTP Accounts"
   - Create a new FTP account or use existing one
   - Note: Host, Username, Password, Port (usually 21)

2. Connect with FTP client:
   - Recommended clients: FileZilla, Cyberduck, Transmit
   - Enter credentials and connect

3. Upload files:
   - Navigate to `public_html` directory
   - Upload `index.html`
   - Upload any images to `public_html/images/`

### Step 5: Verify Deployment

1. Open browser and visit: `https://flyda62.com`
2. Check that the site loads correctly
3. Test all navigation links
4. Test the contact form (submit a test message)
5. Check mobile responsiveness (use browser DevTools or your phone)

### Step 6: Configure Formspree

1. Visit https://formspree.io/
2. Sign up / log in
3. Verify your email address (`robottwo@gmail.com`)
4. Set up notifications:
   - Go to Dashboard > Forms
   - Click on your form
   - Configure email notifications
   - Set up auto-responder (optional)
5. Test the form again to ensure submissions are received

### Step 7: Replace Placeholder Images

**If you have real photos of N520RA:**

1. Create `images` folder in `public_html`:
   - In File Manager, click "Folder"
   - Name it `images`

2. Upload your optimized images:
   - `hero-bg.jpg` (1920x1080px)
   - `gallery-exterior.jpg` (1200x800px)
   - `gallery-panel.jpg` (1200x800px)
   - `gallery-interior.jpg` (1200x800px)
   - `gallery-engine.jpg` (1200x800px)

3. Update `index.html` via File Manager:
   - Right-click `index.html` > "Edit"
   - Find placeholder URLs (Ctrl+F: `placehold.co`)
   - Replace with your image paths (e.g., `images/hero-bg.jpg`)
   - Save changes

### Step 8: Update Contact Information

1. Edit `index.html` via File Manager
2. Find phone number placeholder: `+1 (XXX) XXX-XXXX`
3. Replace with actual phone number (2 locations)
4. Save changes

### Step 9: Update Social Media Links

1. Edit `index.html` via File Manager
2. Find social media links in footer (around line 520)
3. Replace `#` with actual URLs:
   - Twitter: `https://twitter.com/yourhandle`
   - Instagram: `https://instagram.com/yourhandle`
   - YouTube: `https://youtube.com/@yourchannel`
4. Save changes

## SSL Certificate

### Enable Free SSL (Let's Encrypt)

1. In cPanel, find "SSL/TLS Status"
2. Select your domain (flyda62.com)
3. Check "Auto-Renewal"
4. Click "Run AutoSSL"
5. Wait a few minutes
6. Verify by visiting `https://flyda62.com` (should show lock icon)

### Force HTTPS

1. In File Manager, edit `.htaccess` file (create if doesn't exist)
2. Add this code:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```
3. Save changes
4. Test by visiting `http://flyda62.com` (should redirect to HTTPS)

## DNS Configuration (If Needed)

If your domain isn't pointing to the right place:

1. In GoDaddy, go to "DNS Management"
2. Ensure these records exist:
   ```
   Type: A
   Name: @
   Value: [Your hosting IP address]
   
   Type: CNAME
   Name: www
   Value: @
   ```
3. Save changes
4. DNS propagation may take up to 48 hours (usually 1-4 hours)

## Performance Optimization

### Enable Browser Caching

1. In File Manager, edit `.htaccess`
2. Add this code:
   ```apache
   <IfModule mod_expires.c>
       ExpiresActive On
       ExpiresByType image/jpg "access plus 1 year"
       ExpiresByType image/jpeg "access plus 1 year"
       ExpiresByType image/gif "access plus 1 year"
       ExpiresByType image/png "access plus 1 year"
       ExpiresByType text/css "access plus 1 month"
       ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```
3. Save changes

### Enable Gzip Compression

1. In `.htaccess`, add:
   ```apache
   <IfModule mod_deflate.c>
       AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
   </IfModule>
   ```
2. Save changes

## Troubleshooting

### Site Not Loading

1. Check DNS propagation: Use https://www.whatsmydns.net/
2. Verify files are in `public_html` folder
3. Check that `index.html` is named correctly (lowercase)
4. Clear browser cache and try again

### Contact Form Not Working

1. Check Formspree dashboard for submissions
2. Verify email address in form tag matches Formspree account
3. Check browser console for errors
4. Try submitting from different browser/device

### Images Not Displaying

1. Verify image files exist in `images` folder
2. Check file names match exactly (case-sensitive)
3. Verify file permissions (should be 644)
4. Check file paths in HTML

### SSL Not Working

1. Verify AutoSSL ran successfully
2. Check DNS records point to correct IP
3. Clear browser cache
4. Wait 24 hours for full propagation

## Ongoing Maintenance

### Weekly Checks
- Monitor Formspree for new submissions
- Check site is loading correctly
- Review contact form submissions

### Monthly Tasks
- Replace placeholder images (when available)
- Update content if pricing/details change
- Backup files (download `index.html`)

### Quarterly Reviews
- Update SEO meta tags if needed
- Add testimonials/reviews
- Refresh gallery with new photos
- Check analytics (if added)

## Support Resources

- **GoDaddy Support:** https://www.godaddy.com/help
- **Formspree Docs:** https://formspree.io/docs
- **cPanel Documentation:** https://docs.cpanel.net/

## Quick Reference

- **cPanel URL:** `https://yourdomain.com/cpanel`
- **File Manager:** cPanel > Files > File Manager
- **Site Root:** `public_html/`
- **Main File:** `public_html/index.html`
- **Images Folder:** `public_html/images/`
- **Formspree Dashboard:** https://formspree.io/dashboard

---

**Last updated:** February 2026
**Status:** Ready for deployment
