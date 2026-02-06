# GitHub Actions Workflows

## deploy.yml - Automated Deployment to GitHub Pages

**Trigger:** Automatically runs on push to `main` branch or manual trigger

**What it does:**
1. Checks out the latest code
2. Uploads all files as a GitHub Pages artifact
3. Deploys to GitHub Pages (https://robottwo.github.io/flyda62/)

**How to use:**
- Push changes to `main` branch → automatic deployment
- Go to Actions tab → Run workflow manually if needed

**Status:** Check the Actions tab in GitHub to see deployment status

**Requirements:**
- GitHub Pages must be enabled in repository settings
- Source must be set to "GitHub Actions" (not branch)

## Enabling GitHub Pages

1. Go to repository Settings
2. Navigate to Pages (left sidebar)
3. Under "Build and deployment":
   - Source: **GitHub Actions** (not "Deploy from a branch")
4. Save changes

After first push, site will be available at: https://robottwo.github.io/flyda62/

## Manual Deployment

If you need to trigger deployment manually:
1. Go to Actions tab in GitHub
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select branch (main)
5. Click "Run workflow" button

## Troubleshooting

**Deployment fails:**
- Check Actions tab for error logs
- Verify GitHub Pages is enabled
- Ensure "Source" is set to "GitHub Actions"

**Site shows 404:**
- Wait a few minutes for DNS propagation
- Check deployment completed successfully
- Verify index.html exists in root

**Changes not showing:**
- Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
- Clear browser cache
- Check service worker isn't caching old version
