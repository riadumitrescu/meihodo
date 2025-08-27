# Meihodo Image Assets Structure

This directory contains all image assets for the Meihodo website, organized by section and content type. All images are accessible globally via `/assets/images/` path.

## 🗂️ Complete Folder Structure

### 📱 Main Sections
- **homepage/** - Hero images, featured content, main page visuals
- **accommodations/** - All accommodation-related images
  - **bunshinkan/** - Bunshinkan accommodation images
  - **edokan/** - Edokan accommodation images  
  - **geihinkan/** - Geihinkan accommodation images
  - **hinokinoma/** - Hinokinoma accommodation images
  - **kourokan/** - Kourokan accommodation images

  - **seiseisya/** - Seiseisya accommodation images
- **experiences/** - All experience-related images
  - **bonseki/** - Bonseki (sand art) experience images
  - **chanoyu/** - Tea ceremony experience images
  - **iaido/** - Iaido (sword drawing) experience images
  - **kado/** - Flower arrangement experience images
  - **kanshi-shigin/** - Poetry experience images
  - **karate/** - Karate experience images
  - **kendo/** - Kendo experience images
  - **kyudo/** - Kyudo (archery) experience images
  - **samurai/** - Samurai experience images
  - **shodo/** - Calligraphy experience images
  - **taiko/** - Taiko drumming experience images
  - **takigyo/** - Waterfall meditation experience images
  - **zazen/** - Zen meditation experience images
- **restaurant/** - Restaurant and dining images
- **photography/** - Photography service images
- **contact/** - Contact page specific images
- **legal/** - Legal page images (if any)

### 🛠️ Utility Folders
- **logos/** - Company logos, brand assets
- **icons/** - UI icons, navigation icons, feature icons
- **backgrounds/** - Background images, textures, patterns
- **thumbnails/** - Small preview images for galleries
- **gallery/** - General gallery images

## 📋 Page-Specific Image Requirements

### 🏠 Homepage (`/index.html`)
**Location**: `homepage/`
**Required Images**:
- `hero-video-poster.jpg` (1600x900) - Hero section background
- `experience-main.jpg` (1200x800) - Experience section
- `restaurant-interior.jpg` (1200x800) - Restaurant section
- `photography-location.jpg` (1200x800) - Photography section
- `access-map.jpg` (1200x800) - Access section
- `sansuiya-restaurant.jpg` (600x400) - Affiliated services
- `kokoriraku-massage.jpg` (600x400) - Affiliated services

### 🏨 Accommodations
**Location**: `accommodations/[building-name]/`
**Each building needs**:
- `hero.jpg` (1200x800) - Main building image
- `room-1.jpg` (800x600) - Room photos
- `room-2.jpg` (800x600) - Additional room views
- `exterior.jpg` (800x600) - Building exterior
- `garden.jpg` (800x600) - Garden/outdoor areas
- `details.jpg` (600x400) - Architectural details

### 🥋 Experiences
**Location**: `experiences/[experience-name]/`
**Each experience needs**:
- `hero.jpg` (1200x800) - Main experience image
- `practice.jpg` (800x600) - People practicing
- `equipment.jpg` (800x600) - Tools/equipment
- `environment.jpg` (800x600) - Practice environment
- `results.jpg` (600x400) - Finished work/achievement

## 🖼️ Image Guidelines

### 📏 Recommended Sizes
- **Hero images**: 1920x1080 or 1200x800 (16:9 or 3:2 ratio)
- **Card images**: 600x400 (3:2 ratio)
- **Thumbnails**: 400x300 (4:3 ratio)
- **Icons**: 64x64 or 128x128 (square)
- **Logos**: 200x80 or larger (maintain aspect ratio)

### 📁 Naming Convention
```
[page-name]-[content-type]-[size].jpg
Examples:
- bunshinkan-hero-1200x800.jpg
- tea-ceremony-practice-800x600.jpg
- homepage-experience-1200x800.jpg
```

### 🎨 File Formats
- **Photos**: JPG for photos, PNG for graphics with transparency
- **Icons**: SVG (preferred) or PNG
- **Logos**: SVG or high-res PNG
- **Backgrounds**: JPG for photos, PNG for patterns

## 🔗 Usage Examples

### HTML Implementation
```html
<!-- Hero image for Bunshinkan -->
<img src="/assets/images/accommodations/bunshinkan/hero.jpg" 
     alt="Bunshinkan accommodation" 
     width="1200" height="800">

<!-- Experience image for Tea Ceremony -->
<img src="/assets/images/experiences/chanoyu/practice.jpg" 
     alt="Tea ceremony practice" 
     width="800" height="600">

<!-- Homepage experience section -->
<img src="/assets/images/homepage/experience-main.jpg" 
     alt="Martial arts and traditional culture" 
     width="1200" height="800">
```

### CSS Background Images
```css
.hero-section {
  background-image: url('/assets/images/homepage/hero-video-poster.jpg');
  background-size: cover;
  background-position: center;
}
```

## 🚀 Vercel Optimization

### ✅ Vercel Benefits
- **Automatic Optimization**: Vercel automatically optimizes images
- **CDN Distribution**: Images served from global edge locations
- **Format Conversion**: Automatic WebP/AVIF conversion for modern browsers
- **Responsive Images**: Automatic srcset generation
- **Lazy Loading**: Built-in lazy loading for better performance

### 📱 Performance Tips
- Use appropriate image sizes (don't upload 4K images for thumbnails)
- Optimize images before uploading (compress JPGs, optimize PNGs)
- Use descriptive alt text for accessibility
- Consider using Vercel's Image component for advanced optimization

## 📝 File Management

### 🔄 Adding New Images
1. Place images in appropriate folder
2. Use consistent naming convention
3. Optimize file size (aim for <500KB for hero images, <200KB for cards)
4. Update this README if adding new categories

### 🗑️ Maintenance
- Keep original high-res files in each folder
- Use consistent naming across similar content
- Group related images together
- Consider creating subfolders for different image types (hero, gallery, details)

## 🎯 Quick Start

1. **Upload your images** to the appropriate folders
2. **Reference them** in HTML using `/assets/images/[folder]/[filename]`
3. **Vercel will automatically** optimize and serve them
4. **All pages** will have access to all images
5. **Performance** will be optimized automatically

This structure ensures your entire site has access to all images while maintaining perfect organization and Vercel compatibility!
