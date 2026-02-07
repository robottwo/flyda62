# Jekyll Blog Usage Guide

## Overview

Your blog is set up with Jekyll and automatically builds via GitHub Pages. Write posts in Markdown, commit, and they go live automatically.

## Blog Structure

```
flyda62.com/
├── _config.yml          # Jekyll configuration
├── _layouts/
│   └── post.html        # Blog post template (matches site design)
├── _posts/              # Your blog posts (markdown files)
│   └── YYYY-MM-DD-title.md
├── blog/
│   └── index.html       # Blog index page (lists all posts)
├── Gemfile              # Jekyll dependencies
└── index.html           # Main site (unchanged)
```

## Writing a New Post

### 1. Create a new file in `_posts/`

File naming convention: `YYYY-MM-DD-post-title.md`

Example: `2026-02-10-baron-vs-da62-costs.md`

### 2. Add front matter at the top

```markdown
---
layout: post
title: "Baron G58 vs DA-62: Real Operating Costs"
date: 2026-02-10
author: Delta Echo Aviation
tags: [operating-costs, da-62, baron, comparison]
reading_time: 8
image: /assets/images/baron-vs-da62.jpg  # Optional
---

Your post content starts here...
```

### 3. Write in Markdown

```markdown
## Section Heading

This is a paragraph with **bold** and *italic* text.

### Subsection

- Bullet point one
- Bullet point two
- Bullet point three

1. Numbered item
2. Another item

> This is a blockquote — great for callouts or quotes

[Link text](https://example.com)

![Image alt text](/assets/images/photo.jpg)
```

### 4. Commit and push

```bash
cd ~/openclaw/flyda62-website
git add _posts/2026-02-10-baron-vs-da62-costs.md
git commit -m "Add Baron vs DA-62 cost comparison post"
git push
```

GitHub Pages will automatically build and deploy in ~60 seconds.

Your post will be live at:
`https://flyda62.com/blog/2026/02/10/baron-vs-da62-costs/`

## Post URLs

Posts automatically generate clean URLs:
- File: `_posts/2026-02-10-baron-vs-da62-costs.md`
- URL: `flyda62.com/blog/2026/02/10/baron-vs-da62-costs/`

## Front Matter Options

```yaml
---
layout: post                    # Always "post"
title: "Your Post Title"        # Required
date: 2026-02-10                # Required (YYYY-MM-DD)
author: Delta Echo Aviation     # Optional (defaults to site author)
tags: [tag1, tag2, tag3]        # Optional (for categorization)
reading_time: 5                 # Optional (estimated minutes)
image: /path/to/image.jpg       # Optional (featured image)
excerpt: "Custom excerpt..."    # Optional (defaults to first paragraph)
---
```

## Markdown Cheat Sheet

### Headings
```markdown
## H2 Heading (use for main sections)
### H3 Heading (use for subsections)
```

### Emphasis
```markdown
**bold text**
*italic text*
```

### Lists
```markdown
- Unordered list item
- Another item

1. Ordered list
2. Second item
```

### Links
```markdown
[Link text](https://example.com)
[Internal link](/#contact)
```

### Images
```markdown
![Alt text](/assets/images/photo.jpg)
```

### Blockquotes
```markdown
> This is a blockquote
> — Author Name
```

### Code
```markdown
Inline `code` uses backticks.

```
Code blocks use triple backticks
```
```

## Adding Images

1. Upload images to `/assets/images/blog/`
2. Reference in your post:
```markdown
![Caption](/assets/images/blog/your-image.jpg)
```

## Testing Locally (Optional)

If you want to preview posts before pushing:

```bash
# Install Jekyll (one time)
gem install bundler jekyll

# In your repo directory
cd ~/openclaw/flyda62-website
bundle install

# Run local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Blog URLs

- Blog index: `https://flyda62.com/blog`
- Individual post: `https://flyda62.com/blog/YYYY/MM/DD/title/`
- RSS feed: `https://flyda62.com/feed.xml` (auto-generated)

## SEO Features (Built-In)

✅ Clean URLs  
✅ Automatic sitemap generation  
✅ RSS feed  
✅ Meta descriptions from excerpts  
✅ Structured data (via jekyll-seo-tag)  
✅ Social media preview tags

## Quick Content Ideas

- Baron vs DA-62 operating cost breakdown
- Best weekend destinations from KFRG
- Understanding Jet-A diesel operations
- G1000 NXi tips and tricks
- IFR flying in the Northeast
- DA-62 single-engine performance explained
- Family trip reports
- Maintenance transparency posts
- Fuel cost comparisons over time

## Need Help?

Ask KIPP to:
- Create a new post from an outline
- Convert Google Doc to markdown
- Add images and format
- Optimize for SEO
