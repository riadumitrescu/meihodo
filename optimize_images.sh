#!/bin/bash

# Script to optimize accommodation images for web use
# This will create optimized versions while maintaining quality

echo "Starting image optimization for accommodation images..."

# Create optimized directory structure
mkdir -p assets/images/accommodations_optimized

# Function to optimize a single image
optimize_image() {
    local input_file="$1"
    local output_file="$2"
    
    # Get the directory structure
    local dir=$(dirname "$output_file")
    mkdir -p "$dir"
    
    # Optimize image: resize to max 1920x1080, maintain aspect ratio, optimize quality
    sips -Z 1920 1080 "$input_file" --out "$output_file" --quality 85
    
    # Get file sizes for comparison
    local original_size=$(ls -lh "$input_file" | awk '{print $5}')
    local optimized_size=$(ls -lh "$output_file" | awk '{print $5}')
    
    echo "Optimized: $input_file -> $output_file"
    echo "  Original: $original_size -> Optimized: $optimized_size"
}

# Process all accommodation images
echo "Processing bunshinkan images..."
optimize_image "assets/images/accommodations/bunshinkan/DSC04868-HDR.jpg" "assets/images/accommodations_optimized/bunshinkan/DSC04868-HDR.jpg"
optimize_image "assets/images/accommodations/bunshinkan/DSC04894-HDR.jpg" "assets/images/accommodations_optimized/bunshinkan/DSC04894-HDR.jpg"
optimize_image "assets/images/accommodations/bunshinkan/DSC04948-HDR.jpg" "assets/images/accommodations_optimized/bunshinkan/DSC04948-HDR.jpg"

echo "Processing edokan images..."
optimize_image "assets/images/accommodations/edokan/_T6A7014.JPG" "assets/images/accommodations_optimized/edokan/_T6A7014.JPG"
optimize_image "assets/images/accommodations/edokan/_T6A7019.JPG" "assets/images/accommodations_optimized/edokan/_T6A7019.JPG"
optimize_image "assets/images/accommodations/edokan/DSC01266.jpg" "assets/images/accommodations_optimized/edokan/DSC01266.jpg"
optimize_image "assets/images/accommodations/edokan/DSC02920-HDR.jpg" "assets/images/accommodations_optimized/edokan/DSC02920-HDR.jpg"
optimize_image "assets/images/accommodations/edokan/DSC03044-HDR.jpg" "assets/images/accommodations_optimized/edokan/DSC03044-HDR.jpg"

echo "Processing geihinkan images..."
optimize_image "assets/images/accommodations/geihinkan/DSC01288-HDR.jpg" "assets/images/accommodations_optimized/geihinkan/DSC01288-HDR.jpg"
optimize_image "assets/images/accommodations/geihinkan/DSC02798-HDR.jpg" "assets/images/accommodations_optimized/geihinkan/DSC02798-HDR.jpg"
optimize_image "assets/images/accommodations/geihinkan/DSC02846-HDR.jpg" "assets/images/accommodations_optimized/geihinkan/DSC02846-HDR.jpg"

echo "Processing hinokinoma images..."
optimize_image "assets/images/accommodations/hinokinoma/_T6A7030.JPG" "assets/images/accommodations_optimized/hinokinoma/_T6A7030.JPG"
optimize_image "assets/images/accommodations/hinokinoma/DSC01207.jpg" "assets/images/accommodations_optimized/hinokinoma/DSC01207.jpg"
optimize_image "assets/images/accommodations/hinokinoma/DSC01229.jpg" "assets/images/accommodations_optimized/hinokinoma/DSC01229.jpg"
optimize_image "assets/images/accommodations/hinokinoma/DSC01264-HDR.jpg" "assets/images/accommodations_optimized/hinokinoma/DSC01264-HDR.jpg"

echo "Processing kourokan images..."
optimize_image "assets/images/accommodations/kourokan/_T6A7006.JPG" "assets/images/accommodations_optimized/kourokan/_T6A7006.JPG"
optimize_image "assets/images/accommodations/kourokan/DSC02565-HDR.jpg" "assets/images/accommodations_optimized/kourokan/DSC02565-HDR.jpg"
optimize_image "assets/images/accommodations/kourokan/DSC02586-HDR.jpg" "assets/images/accommodations_optimized/kourokan/DSC02586-HDR.jpg"
optimize_image "assets/images/accommodations/kourokan/DSC02593-HDR.jpg" "assets/images/accommodations_optimized/kourokan/DSC02593-HDR.jpg"
optimize_image "assets/images/accommodations/kourokan/DSC02652.jpg" "assets/images/accommodations_optimized/kourokan/DSC02652.jpg"

echo "Processing seiseisya images..."
optimize_image "assets/images/accommodations/seiseisya/_T6A7045.JPG" "assets/images/accommodations_optimized/seiseisya/_T6A7045.JPG"
optimize_image "assets/images/accommodations/seiseisya/_T6A7052.JPG" "assets/images/accommodations_optimized/seiseisya/_T6A7052.JPG"
optimize_image "assets/images/accommodations/seiseisya/DSC02702-HDR.jpg" "assets/images/accommodations_optimized/seiseisya/DSC02702-HDR.jpg"
optimize_image "assets/images/accommodations/seiseisya/DSC02727.jpg" "assets/images/accommodations_optimized/seiseisya/DSC02727.jpg"
optimize_image "assets/images/accommodations/seiseisya/DSC02802-HDR.jpg" "assets/images/accommodations_optimized/seiseisya/DSC02802-HDR.jpg"

echo "Image optimization complete!"
echo "Optimized images are saved in: assets/images/accommodations_optimized/"
echo ""
echo "Summary of file size reductions:"
echo "Original directory size:"
du -sh assets/images/accommodations
echo "Optimized directory size:"
du -sh assets/images/accommodations_optimized
