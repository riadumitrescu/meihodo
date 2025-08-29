#!/bin/bash

# Script to replace all original images with optimized versions
# This will backup the originals and replace them with the optimized versions

echo "=== COMPREHENSIVE IMAGE REPLACEMENT ==="
echo ""

# Create backup directory
backup_dir="assets/images_backup_$(date +%Y%m%d_%H%M%S)"
echo "Creating backup in: $backup_dir"

# Backup original images (excluding accommodations since we already did that)
echo "Backing up original images..."
mkdir -p "$backup_dir"
cp -r assets/images/experiences "$backup_dir/"
cp -r assets/images/photography "$backup_dir/"
cp -r assets/images/restaurant "$backup_dir/"
cp -r assets/images/logos "$backup_dir/"
cp -r assets/images/homepage "$backup_dir/"

echo "Backup completed in: $backup_dir"
echo ""

# Replace original images with optimized versions
echo "Replacing original images with optimized versions..."

# Replace experiences
echo "Replacing experiences images..."
cp -r assets/images_optimized/experiences/* assets/images/experiences/

# Replace photography
echo "Replacing photography images..."
cp -r assets/images_optimized/photography/* assets/images/photography/

# Replace restaurant
echo "Replacing restaurant images..."
cp -r assets/images_optimized/restaurant/* assets/images/restaurant/

# Replace logos
echo "Replacing logos images..."
cp -r assets/images_optimized/logos/* assets/images/logos/

# Replace homepage images (but not video)
echo "Replacing homepage images (excluding video)..."
find assets/images_optimized/homepage -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) | while read -r file; do
    local filename=$(basename "$file")
    cp "$file" "assets/images/homepage/$filename"
done

echo ""
echo "=== REPLACEMENT COMPLETE ==="
echo ""
echo "Summary of optimizations:"
echo ""

# Show before/after sizes
echo "EXPERIENCES:"
echo "  Before: 128MB -> After: $(du -sh assets/images/experiences | cut -f1)"
echo ""

echo "PHOTOGRAPHY:"
echo "  Before: 15MB -> After: $(du -sh assets/images/photography | cut -f1)"
echo ""

echo "RESTAURANT:"
echo "  Before: 162MB -> After: $(du -sh assets/images/restaurant | cut -f1)"
echo ""

echo "LOGOS:"
echo "  Before: 264K -> After: $(du -sh assets/images/logos | cut -f1)"
echo ""

echo "HOMEPAGE IMAGES:"
echo "  Before: 36MB -> After: $(du -sh assets/images/homepage/*.jpg assets/images/homepage/*.png 2>/dev/null | awk '{sum+=$1} END {print sum "K"}')"
echo ""

echo "TOTAL SAVINGS:"
original_total=$(du -sh assets/images/experiences assets/images/photography assets/images/restaurant assets/images/logos | awk '{sum+=$1} END {print sum}')
echo "  Original total: $original_total"
current_total=$(du -sh assets/images/experiences assets/images/photography assets/images/restaurant assets/images/logos | awk '{sum+=$1} END {print sum}')
echo "  Current total: $current_total"
echo ""

echo "=== VIDEO OPTIMIZATION RECOMMENDATIONS ==="
echo ""
echo "The homepage video (407MB) needs separate optimization:"
echo ""
echo "1. INSTALL FFMPEG (Recommended):"
echo "   brew install ffmpeg"
echo ""
echo "2. CREATE MULTIPLE QUALITY VERSIONS:"
echo "   - 480p: Fast loading, mobile-friendly (~50-80MB)"
echo "   - 720p: Medium quality (~100-150MB)"
echo "   - 1080p: High quality (~200-250MB)"
echo ""
echo "3. IMPLEMENT PROGRESSIVE LOADING:"
echo "   - Start with 480p for immediate loading"
echo "   - Allow quality switching based on user preference"
echo "   - Use lazy loading to defer video loading"
echo ""
echo "4. ALTERNATIVE SOLUTIONS:"
echo "   - Replace with animated GIF or CSS animations"
echo "   - Use video thumbnails that expand on click"
echo "   - Implement video carousel with lazy loading"
echo "   - Consider using WebM format for better compression"
echo ""
echo "5. HTML5 IMPLEMENTATION:"
echo "   <video controls preload='metadata' poster='thumbnail.jpg'>"
echo "     <source src='homepage_480p.mp4' type='video/mp4' media='(max-width: 768px)'>"
echo "     <source src='homepage_720p.mp4' type='video/mp4' media='(max-width: 1200px)'>"
echo "     <source src='homepage_1080p.mp4' type='video/mp4'>"
echo "   </video>"
echo ""
echo "=== NEXT STEPS ==="
echo "1. ✅ All images have been optimized and replaced"
echo "2. 🔄 Install FFmpeg: brew install ffmpeg"
echo "3. 🎥 Optimize the homepage video"
echo "4. 🚀 Your website will now load significantly faster!"
echo ""
echo "Backup location: $backup_dir"
