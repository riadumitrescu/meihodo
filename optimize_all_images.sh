#!/bin/bash

# Comprehensive script to optimize all images in assets/images (except accommodations)
# This will create optimized versions while maintaining quality

echo "Starting comprehensive image optimization for all directories..."

# Create optimized directory structure
mkdir -p assets/images_optimized

# Function to optimize a single image
optimize_image() {
    local input_file="$1"
    local output_file="$2"
    
    # Get the directory structure
    local dir=$(dirname "$output_file")
    mkdir -p "$dir"
    
    # Optimize image: resize to max 1920x1920 (maintain aspect ratio), output to new file
    sips -Z 1920 "$input_file" --out "$output_file" 2>/dev/null
    
    # Get file sizes for comparison
    local original_size=$(ls -lh "$input_file" 2>/dev/null | awk '{print $5}')
    local optimized_size=$(ls -lh "$output_file" 2>/dev/null | awk '{print $5}')
    
    if [ -f "$output_file" ]; then
        echo "Optimized: $input_file -> $output_file"
        echo "  Original: $original_size -> Optimized: $optimized_size"
    else
        echo "Failed to optimize: $input_file"
    fi
}

# Function to process all images in a directory
process_directory() {
    local source_dir="$1"
    local target_dir="$2"
    
    echo "Processing directory: $source_dir"
    
    # Find all image files
    find "$source_dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.tiff" \) | while read -r file; do
        # Create relative path
        local rel_path="${file#$source_dir/}"
        local target_file="$target_dir/$rel_path"
        
        # Optimize the image
        optimize_image "$file" "$target_file"
    done
}

# Process experiences directory
echo "Processing experiences images..."
process_directory "assets/images/experiences" "assets/images_optimized/experiences"

# Process photography directory
echo "Processing photography images..."
process_directory "assets/images/photography" "assets/images_optimized/photography"

# Process restaurant directory
echo "Processing restaurant images..."
process_directory "assets/images/restaurant" "assets/images_optimized/restaurant"

# Process logos directory
echo "Processing logos images..."
process_directory "assets/images/logos" "assets/images_optimized/logos"

# Process other directories that might have images
for dir in backgrounds contact gallery icons legal thumbnails; do
    if [ -d "assets/images/$dir" ] && [ "$(find "assets/images/$dir" -type f -name "*.jpg" -o -name "*.png" -o -name "*.gif" | wc -l)" -gt 0 ]; then
        echo "Processing $dir images..."
        process_directory "assets/images/$dir" "assets/images_optimized/$dir"
    fi
done

# Special handling for homepage - optimize images but not video
echo "Processing homepage images (excluding video)..."
mkdir -p assets/images_optimized/homepage
find assets/images/homepage -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) | while read -r file; do
    local filename=$(basename "$file")
    local target_file="assets/images_optimized/homepage/$filename"
    optimize_image "$file" "$target_file"
done

echo ""
echo "Image optimization complete!"
echo "Optimized images are saved in: assets/images_optimized/"
echo ""
echo "Summary of file size reductions:"
echo "Original directories size:"
du -sh assets/images/experiences assets/images/photography assets/images/restaurant assets/images/logos assets/images/homepage
echo ""
echo "Optimized directories size:"
du -sh assets/images_optimized/experiences assets/images_optimized/photography assets/images_optimized/restaurant assets/images_optimized/logos assets/images_optimized/homepage
echo ""
echo "Video optimization recommendations:"
echo "- The homepage video (389MB) should be optimized separately"
echo "- Consider creating multiple quality versions (1080p, 720p, 480p)"
echo "- Use video compression tools like HandBrake or FFmpeg"
echo "- Consider lazy loading or progressive loading for the video"
