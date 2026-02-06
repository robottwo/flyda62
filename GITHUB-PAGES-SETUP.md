# GitHub Pages Setup Instructions

## ✅ CI/CD Workflow Deployed

The GitHub Actions workflow has been pushed to the repository. It will automatically deploy the site to GitHub Pages whenever you push to the `main` branch.

**Workflow file:** `.github/workflows/deploy.yml`  
**Status:** Ready to use (after enabling GitHub Pages)

---

## 🚀 Enable GitHub Pages (Required - One-Time Setup)

### Step 1: Go to Repository Settings

1. Open https://github.com/robottwo/flyda62
2. Click **Settings** tab (top right)
3. Scroll down left sidebar to **Pages** (under "Code and automation")

### Step 2: Configure Source

Under "Build and deployment":
1. **Source:** Select **GitHub Actions** (from dropdown)
   - NOT "Deploy from a branch"
   - This is the modern recommended method
2. Click **Save** (if button appears)

That's it! No other configuration needed.

### Step 3: Trigger First Deployment

The workflow will run automatically:
- **Option A:** Make any small change and push to main
- **Option B:** Manually trigger the workflow:
  1. Go to **Actions** tab in GitHub
  2. Click "Deploy to GitHub Pages" workflow
  3. Click "Run workflow" button
  4. Select `main` branch
  5. Click "Run workflow"

### Step 4: Wait for Deployment

1. Go to **Actions** tab to watch progress
2. Deployment takes 1-2 minutes
3. When complete, you'll see a green checkmark ✅

---

## 🌐 Your Site URL

Once deployed, your site will be live at:

**https://robottwo.github.io/flyda62/**

---

## 📊 Monitoring Deployments

### Check Deployment Status

1. Go to **Actions** tab in repository
2. See list of all workflow runs
3. Click any run to see detailed logs
4. Green checkmark = success, Red X = failed

### View Deployment History

1. Go to repository main page
2. Look for "Environments" section (right sidebar)
3. Click **github-pages**
4. See all deployments with timestamps and URLs

---

## 🔄 How It Works

### Automatic Deployment

Every time you push to `main`:
1. GitHub Actions workflow starts automatically
2. Checks out your code
3. Packages all files
4. Deploys to GitHub Pages
5. Site updates within 1-2 minutes

### Manual Deployment

If you need to redeploy without new changes:
1. **Actions** tab → **Deploy to GitHub Pages**
2. **Run workflow** → Select **main** → **Run workflow**

---

## ✨ Benefits

- **Automatic:** Push to main = instant deployment
- **Fast:** Deploys in 1-2 minutes
- **Free:** GitHub Pages hosting at no cost
- **SSL:** Automatic HTTPS certificate
- **Preview:** Test before pointing custom domain
- **Rollback:** Easy to revert via Actions history

---

## 🔧 Workflow Features

### Triggers
- ✅ Push to `main` branch (automatic)
- ✅ Manual workflow dispatch (Actions tab)

### Permissions
- Correctly configured for GitHub Pages
- Read contents, write pages, use ID token

### Concurrency
- Only one deployment at a time
- New push cancels in-progress deployment

---

## 📝 Next Steps After Enabling

### 1. Test the Deployment

After enabling GitHub Pages and first deployment:
- Visit https://robottwo.github.io/flyda62/
- Verify site loads correctly
- Test all sections (navigation, form, gallery)
- Check mobile responsive design
- Test PWA installation

### 2. Custom Domain (Optional)

To use flyda62.com instead of github.io subdomain:

**In GitHub:**
1. Settings → Pages → Custom domain
2. Enter: `flyda62.com`
3. Click Save
4. Wait for DNS check (may take a few minutes)

**In GoDaddy (or your DNS provider):**
1. Add CNAME record:
   - Name: `@` (or leave blank)
   - Value: `robottwo.github.io`
   - TTL: 600 (or default)
2. Wait 5-60 minutes for DNS propagation

**Verify:**
- Site should work at both github.io and flyda62.com
- HTTPS automatically enabled (may take 24 hours)

### 3. Monitor Performance

After deployment:
- Run Lighthouse audit: Chrome DevTools → Lighthouse
- Check Core Web Vitals
- Test service worker registration
- Verify PWA installation works

---

## 🐛 Troubleshooting

### Workflow Fails

**"Error: Resource not accessible by integration"**
- Solution: Enable GitHub Pages in Settings → Pages
- Set Source to "GitHub Actions"

**"Repository not found or permission denied"**
- Solution: Check repository is public or you have write access
- Verify GITHUB_TOKEN has correct permissions

### Site Shows 404

**After first deployment:**
- Wait 2-5 minutes for GitHub Pages activation
- Hard refresh browser (Ctrl+Shift+R)
- Check Actions tab shows successful deployment

**Still 404:**
- Verify GitHub Pages is enabled (Settings → Pages)
- Check Source is set to "GitHub Actions"
- Ensure `index.html` exists in repository root

### Changes Not Showing

**Old version displayed:**
- Service worker may be caching old version
- Open DevTools → Application → Service Workers
- Click "Unregister" service worker
- Hard refresh page

**CSS/JS not updated:**
- Clear browser cache
- Check deployment completed (Actions tab)
- Verify files uploaded correctly in workflow logs

### Custom Domain Issues

**Domain doesn't resolve:**
- Wait up to 24 hours for DNS propagation
- Check DNS configuration in registrar
- Verify CNAME record points to robottwo.github.io

**HTTPS not working:**
- Give it 24 hours after custom domain setup
- GitHub automatically provisions SSL certificate
- Ensure DNS is properly configured

---

## 📚 Additional Resources

### GitHub Documentation
- [GitHub Pages](https://docs.github.com/en/pages)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### Workflow Files
- **Deploy workflow:** `.github/workflows/deploy.yml`
- **Workflow docs:** `.github/README.md`

### Repository Links
- **Main:** https://github.com/robottwo/flyda62
- **Actions:** https://github.com/robottwo/flyda62/actions
- **Settings:** https://github.com/robottwo/flyda62/settings/pages

---

## ✅ Deployment Checklist

Before enabling GitHub Pages:
- [x] CI/CD workflow created and pushed
- [x] Repository settings accessible
- [ ] GitHub Pages enabled in settings
- [ ] First deployment triggered
- [ ] Site verified at github.io URL
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active (after 24h)
- [ ] Form submission tested
- [ ] PWA installation tested
- [ ] Lighthouse audit run (95+ target)

---

**Last Updated:** February 6, 2026  
**Workflow Version:** 1.0  
**Status:** Ready for activation
