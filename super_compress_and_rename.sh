#!/bin/bash

# Super compression and renaming script
# This will compress images by 50% more and give them meaningful names

echo "=== SUPER COMPRESSION AND RENAMING ==="
echo ""

# Create super compressed directory
mkdir -p assets/images_super_compressed

# Function to compress image further and rename
super_compress_and_rename() {
    local input_file="$1"
    local output_dir="$2"
    local category="$3"
    local index="$4"
    
    # Get file extension
    local extension="${input_file##*.}"
    local base_name=""
    
    # Create meaningful names based on category
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
    local new_filename="${base_name}-${index}.${extension,,}"
    local output_file="$output_dir/$new_filename"
    
    # Create directory if it doesn't exist
    mkdir -p "$(dirname "$output_file")"
    
    # Super compress: resize to max 1200x1200 (50% smaller than current 1920x1920)
    sips -Z 1200 "$input_file" --out "$output_file" 2>/dev/null
    
    if [ -f "$output_file" ]; then
        local original_size=$(ls -lh "$input_file" 2>/dev/null | awk '{print $5}')
        local compressed_size=$(ls -lh "$output_file" 2>/dev/null | awk '{print $5}')
        echo "✅ $new_filename (Original: $original_size -> Super compressed: $compressed_size)"
    else
        echo "❌ Failed to compress: $input_file"
    fi
}

# Process accommodations
echo "Processing accommodations with super compression..."
index=1
find assets/images/accommodations -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    super_compress_and_rename "$file" "assets/images_super_compressed/accommodations" "accommodations" "$index"
    ((index++))
done

# Process experiences
echo ""
echo "Processing experiences with super compression..."
index=1
find assets/images/experiences -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    super_compress_and_rename "$file" "assets/images_super_compressed/experiences" "experiences" "$index"
    ((index++))
done

# Process restaurant
echo ""
echo "Processing restaurant with super compression..."
index=1
find assets/images/restaurant -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    super_compress_and_rename "$file" "assets/images_super_compressed/restaurant" "restaurant" "$index"
    ((index++))
done

# Process photography
echo ""
echo "Processing photography with super compression..."
index=1
find assets/images/photography -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    super_compress_and_rename "$file" "assets/images_super_compressed/photography" "photography" "$index"
    ((index++))
done

# Process logos
echo ""
echo "Processing logos with super compression..."
index=1
find assets/images/logos -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    super_compress_and_rename "$file" "assets/images_super_compressed/logos" "logos" "$index"
    ((index++))
done

# Process homepage images (excluding video)
echo ""
echo "Processing homepage images with super compression..."
index=1
find assets/images/homepage -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    super_compress_and_rename "$file" "assets/images_super_compressed/homepage" "homepage" "$index"
    ((index++))
done

echo ""
echo "=== SUPER COMPRESSION COMPLETE ==="
echo ""
echo "Summary of super compression:"
echo "Original directories size:"
du -sh assets/images/experiences assets/images/photography assets/images/restaurant assets/images/logos assets/images/homepage
echo ""
echo "Super compressed directories size:"
du -sh assets/images_super_compressed/experiences assets/images_super_compressed/photography assets/images_super_compressed/restaurant assets/images_super_compressed/logos assets/images_super_compressed/homepage
echo ""
echo "=== NAMING CONVENTION USED ==="
echo "accommodations: bunshinkan-room-1.jpg, edokan-room-1.jpg, etc."
echo "experiences: karate-experience-1.jpg, tea-ceremony-1.jpg, etc."
echo "restaurant: sushi-dish-1.jpg, chinese-dish-1.jpg, etc."
echo "photography: photography-1.jpg, photography-2.jpg, etc."
echo "homepage: homepage-1.jpg, homepage-2.jpg, etc."
echo "logos: logo-1.png, logo-2.png, etc."
echo ""
echo "=== VIDEO OPTIMIZATION WITHOUT FFMPEG ==="
echo "Since we can't install FFmpeg, here are alternatives:"
echo ""
echo "1. ONLINE WEBM CONVERTERS:"
echo "   - CloudConvert: https://cloudconvert.com/mp4-to-webm"
echo "   - Convertio: https://convertio.co/mp4-webm/"
echo "   - Online-Convert: https://audio.online-convert.com/convert-to-webm"
echo ""
echo "2. RECOMMENDED WEBM SETTINGS:"
echo "   - Video codec: VP9 (best compression)"
echo "   - Audio codec: Opus"
echo "   - Quality: 480p for fast loading (~30-50MB)"
echo "   - Frame rate: 30fps"
echo ""
echo "3. MANUAL CONVERSION STEPS:"
echo "   - Upload your 407MB MP4 to any online converter"
echo "   - Choose WebM format with VP9 codec"
echo   - Set quality to 480p or 720p"
echo "   - Download the compressed WebM file"
echo "   - Replace the original MP4"
echo ""
echo "4. WEBM BENEFITS:"
echo "   - 50-70% smaller than MP4"
echo   - Better web compatibility"
echo "   - Faster loading times"
echo "   - Modern web standard"
