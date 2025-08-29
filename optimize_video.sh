#!/bin/bash

# Script to optimize the homepage video and provide recommendations

echo "=== HOMEPAGE VIDEO OPTIMIZATION ==="
echo ""

# Check if FFmpeg is available
if command -v ffmpeg &> /dev/null; then
    echo "✅ FFmpeg is available for video optimization"
    FFMPEG_AVAILABLE=true
else
    echo "❌ FFmpeg not found. Installing..."
    echo "You can install FFmpeg using: brew install ffmpeg"
    echo "Or download from: https://ffmpeg.org/download.html"
    FFMPEG_AVAILABLE=false
fi

echo ""
echo "=== CURRENT VIDEO ANALYSIS ==="
echo "Video file: assets/images/homepage/2024.3.5_新築建物完成.mp4"
echo "Current size: $(ls -lh assets/images/homepage/2024.3.5_新築建物完成.mp4 | awk '{print $5}')"
echo ""

if [ "$FFMPEG_AVAILABLE" = true ]; then
    echo "=== CREATING OPTIMIZED VIDEO VERSIONS ==="
    
    # Create optimized directory
    mkdir -p assets/images/homepage_optimized
    
    # Get video info
    echo "Analyzing video properties..."
    ffprobe -v quiet -print_format json -show_format -show_streams "assets/images/homepage/2024.3.5_新築建物完成.mp4" > video_info.json
    
    # Create multiple quality versions
    echo "Creating 1080p version (high quality)..."
    ffmpeg -i "assets/images/homepage/2024.3.5_新築建物完成.mp4" \
           -c:v libx264 -crf 23 -preset medium \
           -c:a aac -b:a 128k \
           -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
           "assets/images/homepage_optimized/homepage_1080p.mp4" -y
    
    echo "Creating 720p version (medium quality)..."
    ffmpeg -i "assets/images/homepage/2024.3.5_新築建物完成.mp4" \
           -c:v libx264 -crf 25 -preset medium \
           -c:a aac -b:a 96k \
           -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2" \
           "assets/images/homepage_optimized/homepage_720p.mp4" -y
    
    echo "Creating 480p version (low quality, fast loading)..."
    ffmpeg -i "assets/images/homepage/2024.3.56_新築建物完成.mp4" \
           -c:v libx264 -crf 28 -preset fast \
           -c:a aac -b:a 64k \
           -vf "scale=854:480:force_original_aspect_ratio=decrease,pad=854:480:(ow-iw)/2:(oh-ih)/2" \
           "assets/images/homepage_optimized/homepage_480p.mp4" -y
    
    echo ""
    echo "=== OPTIMIZATION RESULTS ==="
    echo "Original video size:"
    ls -lh "assets/images/homepage/2024.3.5_新築建物完成.mp4"
    echo ""
    echo "Optimized versions:"
    ls -lh assets/images/homepage_optimized/
    
    # Clean up
    rm -f video_info.json
    
else
    echo "=== MANUAL OPTIMIZATION RECOMMENDATIONS ==="
    echo ""
    echo "Since FFmpeg is not available, here are manual optimization steps:"
    echo ""
    echo "1. INSTALL FFMPEG:"
    echo "   - macOS: brew install ffmpeg"
    echo "   - Windows: Download from https://ffmpeg.org/download.html"
    echo "   - Linux: sudo apt install ffmpeg"
    echo ""
    echo "2. ALTERNATIVE TOOLS:"
    echo "   - HandBrake (GUI tool): https://handbrake.fr/"
    echo "   - Online converters: CloudConvert, Convertio"
    echo ""
    echo "3. RECOMMENDED SETTINGS:"
    echo "   - 1080p: H.264, CRF 23, AAC audio 128k"
    echo "   - 720p: H.264, CRF 25, AAC audio 96k"
    echo "   - 480p: H.264, CRF 28, AAC audio 64k"
fi

echo ""
echo "=== WEBSITE INTEGRATION RECOMMENDATIONS ==="
echo ""
echo "1. PROGRESSIVE VIDEO LOADING:"
echo "   - Start with 480p version for fast initial load"
echo "   - Allow users to switch to higher quality versions"
echo "   - Use lazy loading to defer video loading until needed"
echo ""
echo "2. HTML5 VIDEO IMPLEMENTATION:"
echo "   <video controls preload='metadata' poster='thumbnail.jpg'>"
echo "     <source src='homepage_480p.mp4' type='video/mp4' media='(max-width: 768px)'>"
echo "     <source src='homepage_720p.mp4' type='video/mp4' media='(max-width: 1200px)'>"
echo "     <source src='homepage_1080p.mp4' type='video/mp4'>"
echo "   </video>"
echo ""
echo "3. PERFORMANCE OPTIMIZATIONS:"
echo "   - Add poster image for immediate visual feedback"
echo "   - Use preload='metadata' to avoid full video download"
echo "   - Consider autoplay with muted attribute for better UX"
echo "   - Implement video compression and CDN delivery"
echo ""
echo "4. ALTERNATIVE APPROACHES:"
echo "   - Replace video with animated GIF or CSS animations"
echo "   - Use video thumbnails that expand on click"
echo "   - Implement video carousel with lazy loading"
echo "   - Consider using WebM format for better compression"
