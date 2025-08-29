#!/bin/bash

# Simple compression and renaming script
# This will compress images further and give them meaningful names

echo "=== SIMPLE COMPRESSION AND RENAMING ==="
echo ""

# Create compressed directory
mkdir -p assets/images_compressed

# Function to compress and rename
compress_and_rename() {
    local input_file="$1"
    local category="$2"
    local index="$3"
    
    # Get file extension
    local extension="${input_file##*.}"
    local base_name=""
    
    # Create meaningful names
    case "$category" in
        "accommodations")
            case "$(basename "$(dirname "$input_file")")" in
                "bunshinkan") base_name="bunshinkan-room" ;;
                "edokan") base_name="edokan-room" ;;
                "geihinkan") base_name="geihinkan-room" ;;
                "hinokinoma") base_name="hinokinoma-room" ;;
                "kourokan") base_name="kourokan-room" ;;
                "seiseisya") base_name="seiseisya-room" ;;
                *) base_name="accommodation" ;;
            esac
            ;;
        "experiences")
            case "$(basename "$(dirname "$input_file")")" in
                "karate") base_name="karate-experience" ;;
                "bonseki") base_name="bonseki-art" ;;
                "samurai") base_name="samurai-experience" ;;
                "chanoyu") base_name="tea-ceremony" ;;
                "taiko") base_name="taiko-drumming" ;;
                "kendo") base_name="kendo-sword" ;;
                "kyudo") base_name="kyudo-archery" ;;
                "iaido") base_name="iaido-sword" ;;
                "zazen") base_name="zazen-meditation" ;;
                "takigyo") base_name="takigyo-ritual" ;;
                "kado") base_name="flower-arrangement" ;;
                "kanshi-shigin") base_name="poetry-calligraphy" ;;
                "shodo") base_name="calligraphy" ;;
                *) base_name="cultural-experience" ;;
            esac
            ;;
        "restaurant")
            case "$(basename "$(dirname "$input_file")")" in
                "sushi") base_name="sushi-dish" ;;
                "chinese") base_name="chinese-dish" ;;
                *) base_name="restaurant-food" ;;
            esac
            ;;
        "photography") base_name="photography" ;;
        "homepage") base_name="homepage" ;;
        "logos") base_name="logo" ;;
        *) base_name="image" ;;
    esac
    
    # Create new filename
    local new_filename="${base_name}-${index}.${extension}"
    local output_file="assets/images_compressed/${new_filename}"
    
    # Super compress: resize to max 1200x1200 (50% smaller than current 1920x1920)
    sips -Z 1200 "$input_file" --out "$output_file" 2>/dev/null
    
    if [ -f "$output_file" ]; then
        local original_size=$(ls -lh "$input_file" 2>/dev/null | awk '{print $5}')
        local compressed_size=$(ls -lh "$output_file" 2>/dev/null | awk '{print $5}')
        echo "✅ $new_filename (Original: $original_size -> Compressed: $compressed_size)"
    else
        echo "❌ Failed to compress: $input_file"
    fi
}

# Process accommodations
echo "Processing accommodations..."
index=1
find assets/images/accommodations -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    compress_and_rename "$file" "accommodations" "$index"
    ((index++))
done

# Process experiences
echo ""
echo "Processing experiences..."
index=1
find assets/images/experiences -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    compress_and_rename "$file" "experiences" "$index"
    ((index++))
done

# Process restaurant
echo ""
echo "Processing restaurant..."
index=1
find assets/images/restaurant -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    compress_and_rename "$file" "restaurant" "$index"
    ((index++))
done

# Process photography
echo ""
echo "Processing photography..."
index=1
find assets/images/photography -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    compress_and_rename "$file" "photography" "$index"
    ((index++))
done

# Process logos
echo ""
echo "Processing logos..."
index=1
find assets/images/logos -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    compress_and_rename "$file" "logos" "$index"
    ((index++))
done

# Process homepage images (excluding video)
echo ""
echo "Processing homepage images..."
index=1
find assets/images/homepage -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    compress_and_rename "$file" "homepage" "$index"
    ((index++))
done

echo ""
echo "=== COMPRESSION COMPLETE ==="
echo ""
echo "Compressed images are in: assets/images_compressed/"
echo ""
echo "=== NAMING CONVENTION ==="
echo "accommodations: bunshinkan-room-1.jpg, edokan-room-1.jpg, etc."
echo "experiences: karate-experience-1.jpg, tea-ceremony-1.jpg, etc."
echo "restaurant: sushi-dish-1.jpg, chinese-dish-1.jpg, etc."
echo "photography: photography-1.jpg, photography-2.jpg, etc."
echo "homepage: homepage-1.jpg, homepage-2.jpg, etc."
echo "logos: logo-1.png, logo-2.png, etc."
echo ""
echo "=== VIDEO OPTIMIZATION WITHOUT FFMPEG ==="
echo "Convert your 407MB MP4 to WebM using online tools:"
echo ""
echo "1. GO TO: https://cloudconvert.com/mp4-to-webm"
echo "2. UPLOAD your video file"
echo "3. SETTINGS: VP9 codec, 480p quality, Opus audio"
echo "4. DOWNLOAD the WebM file (should be ~100-150MB)"
echo "5. REPLACE the original MP4"
echo ""
echo "WebM benefits: 50-70% smaller, faster loading, modern web standard!"
