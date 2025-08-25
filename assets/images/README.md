# Meihodo Image Assets Structure

This directory contains all image assets for the Meihodo website, organized by section and content type.

## Folder Structure

### Main Sections
- **homepage/** - Hero images, featured content, main page visuals
- **accommodations/** - All accommodation-related images
  - **bunshinkan/** - Bunshinkan accommodation images
  - **edokan/** - Edokan accommodation images  
  - **geihinkan/** - Geihinkan accommodation images
  - **hinokinoma/** - Hinokinoma accommodation images
  - **kourokan/** - Kourokan accommodation images
  - **omoya/** - Omoya accommodation images
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

### Utility Folders
- **logos/** - Company logos, brand assets
- **icons/** - UI icons, navigation icons, feature icons
- **backgrounds/** - Background images, textures, patterns
- **thumbnails/** - Small preview images for galleries
- **gallery/** - General gallery images

## Image Guidelines

### Naming Convention
- Use lowercase letters and hyphens: `hero-image.jpg`
- Include size/type suffix: `bunshinkan-hero-1920x1080.jpg`
- Use descriptive names: `tea-ceremony-setup.jpg`

### Recommended Formats
- **Hero images**: JPG, 1920x1080 or larger
- **Thumbnails**: JPG, 400x300 or similar
- **Icons**: SVG or PNG with transparency
- **Logos**: SVG or high-res PNG

### File Organization
- Keep original high-res files in each folder
- Use consistent naming across similar content
- Group related images together
- Consider creating subfolders for different image types (hero, gallery, details)

## Usage Examples

```html
<!-- Hero image -->
<img src="assets/images/homepage/hero-main.jpg" alt="Meihodo Hero">

<!-- Accommodation image -->
<img src="assets/images/accommodations/bunshinkan/room-main.jpg" alt="Bunshinkan Room">

<!-- Experience image -->
<img src="assets/images/experiences/chanoyu/tea-ceremony.jpg" alt="Tea Ceremony">

<!-- Icon -->
<img src="assets/images/icons/arrow-right.svg" alt="Arrow Right">
```
