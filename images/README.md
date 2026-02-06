# Image Placeholder Guide

This directory contains placeholder images for the flyda62.com website. Replace these with actual photographs of N520RA.

## Required Images

### 1. Hero Background Image
- **File:** (currently using placeholder URL)
- **Size:** 1920x1080px minimum
- **Content:** Dramatic exterior shot of DA-62, ideally:
  - Aircraft on the ramp at KFRG
  - Good lighting (golden hour or bright overcast)
  - Show the distinctive DA-62 profile
  - Text overlay will be on top, so avoid busy backgrounds

### 2. Gallery Images (4 images)

#### Image 1: Exterior Shot
- **Size:** 1200x800px minimum
- **Content:** Three-quarter front view of N520RA
- **Show:** Clean lines, modern design, N-number visible
- **Location:** KFRG ramp or hangar

#### Image 2: G1000 NXi Panel
- **Size:** 1200x800px minimum
- **Content:** Close-up of instrument panel
- **Show:** Both PFDs, MFD, G1000 NXi interface
- **Tips:** Ensure screens are bright and readable

#### Image 3: Interior/Cabin
- **Size:** 1200x800px minimum
- **Content:** 7-seat cabin interior
- **Show:** Spaciousness, leather seats, side windows
- **Tips:** Good interior lighting, clutter-free

#### Image 4: Engine Close-up
- **Size:** 1200x800px minimum
- **Content:** Austro AE300 diesel engine
- **Show:** Engine cowl open, clean appearance, modern design
- **Tips:** Professional look, not a maintenance shot

## Image Specifications

### Format
- **Primary:** JPG (for photographs)
- **Optional:** WebP (better compression, with JPG fallback)
- **Avoid:** PNG (larger file sizes for photos)

### Compression
- Target file size: Under 200KB per image
- Use 80-85% quality for JPG
- Use TinyPNG or similar tools for optimization
- Maintain visual quality while reducing load time

### Naming Convention
- `hero-bg.jpg` - Hero background
- `gallery-exterior.jpg` - Gallery image 1
- `gallery-panel.jpg` - Gallery image 2
- `gallery-interior.jpg` - Gallery image 3
- `gallery-engine.jpg` - Gallery image 4

## How to Replace Placeholders

### Step 1: Optimize Your Images

1. Export photos at appropriate resolution
2. Compress using TinyPNG or similar:
   - Website: https://tinypng.com/
   - CLI: `npm install -g tinypng-cli`
3. Test quality - ensure no visible artifacts

### Step 2: Upload Images

**For GoDaddy:**
1. Use cPanel File Manager
2. Navigate to `public_html/images/`
3. Upload your optimized images

**For GitHub Pages:**
1. Add images to this folder in your repository
2. Commit and push changes

### Step 3: Update HTML References

Open `index.html` and replace placeholder URLs:

**Find this (hero section, ~line 95):**
```html
background-image: url('https://placehold.co/1920x1080/003366/FFFFFF?text=Diamond+DA-62+Hero+Image');
```

**Replace with:**
```html
background-image: url('images/hero-bg.jpg');
```

**Find these (gallery section, lines ~466-477):**
```html
<img src="https://placehold.co/600x400/003366/FFFFFF?text=Exterior+Shot" ...>
<img src="https://placehold.co/600x400/003366/FFFFFF?text=G1000+NXi+Panel" ...>
<img src="https://placehold.co/600x400/003366/FFFFFF?text=Interior+Cabin" ...>
<img src="https://placehold.co/600x400/003366/FFFFFF?text=AE300+Diesel+Engine" ...>
```

**Replace with:**
```html
<img src="images/gallery-exterior.jpg" ...>
<img src="images/gallery-panel.jpg" ...>
<img src="images/gallery-interior.jpg" ...>
<img src="images/gallery-engine.jpg" ...>
```

## Photography Tips for N520RA

### Best Conditions
- **Lighting:** Golden hour (sunrise/sunset) or bright overcast
- **Weather:** Clear skies or light clouds (avoid heavy overcast)
- **Location:** Clean ramp area at KFRG, hangar interior for panel shots

### Angles to Capture
1. **Three-quarter front:** Classic aircraft profile
2. **Side profile:** Show aircraft length and design
3. **Nose-on:** Emphasize twin-engine configuration
4. **Cabin interior:** Wide shot showing all 7 seats
5. **Panel close-up:** Detail shot of avionics
6. **Engine cowl open:** Show Austro diesel engines

### Equipment Recommendations
- **Camera:** DSLR or mirrorless with wide-angle lens (24-35mm)
- **Settings:** Low ISO (100-400), aperture f/8-f/11 for sharpness
- **Tripod:** Use for panel and interior shots

### Post-Processing
- Adjust exposure and contrast
- Enhance colors (subtle, not oversaturated)
- Remove dust spots
- Straighten horizon line
- Crop to aspect ratio if needed

## Professional Photography

Consider hiring a professional aviation photographer:
- Better equipment and expertise
- Professional lighting for interior shots
- Aerial/drone photography options (if allowed at KFRG)
- Consistent brand quality

**Estimated cost:** $500-1,500 for a full aircraft photoshoot

## Legal Considerations

- Ensure you have permission to photograph at KFRG
- Don't photograph other aircraft or people without consent
- Respect FBO and hangar rules
- Consider model releases if people are visible

---

**Current status:** Using placeholder images from placehold.co
**Next step:** Schedule photoshoot and replace placeholders with real N520RA photos
