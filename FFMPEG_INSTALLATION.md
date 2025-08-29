# FFmpeg Installation Guide for macOS

## Option 1: Install Homebrew First (Recommended)

1. **Open Terminal** app on your Mac
2. **Copy and paste this command:**
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. **Enter your password** (`0810`) when prompted
4. **Follow the on-screen instructions** to complete Homebrew installation
5. **After Homebrew is installed, install FFmpeg:**
   ```bash
   brew install ffmpeg
   ```

## Option 2: Download FFmpeg Directly

1. **Go to:** https://ffmpeg.org/download.html
2. **Click on "macOS"** under "Get packages & executable files"
3. **Download the latest release** for macOS
4. **Extract the downloaded file**
5. **Move the ffmpeg executable** to `/usr/local/bin/`:
   ```bash
   sudo mv /path/to/extracted/ffmpeg /usr/local/bin/
   ```

## Option 3: Use MacPorts (Alternative to Homebrew)

1. **Install MacPorts** from: https://www.macports.org/install.php
2. **Install FFmpeg:**
   ```bash
   sudo port install ffmpeg
   ```

## Verify Installation

After installation, verify FFmpeg is working:
```bash
ffmpeg -version
```

## Video Compression Commands

Once FFmpeg is installed, you can compress your video:

### Basic Compression (Good quality, smaller size):
```bash
ffmpeg -i "assets/images/homepage/2024.3.5_新選挙広報帯付き.mp4" \
  -c:v libx264 -crf 25 -preset fast \
  -c:a aac -b:a 96k \
  -movflags +faststart \
  -vf "scale=1920:1080" \
  "assets/images/homepage/hero-video-compressed.mp4"
```

### High Quality Compression (Better quality, still under 100MB):
```bash
ffmpeg -i "assets/images/homepage/2024.3.5_新選挙広報帯付き.mp4" \
  -c:v libx264 -crf 23 -preset medium \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  -vf "scale=1920:1080" \
  "assets/images/homepage/hero-video-compressed.mp4"
```

### Extract First Frame as Poster:
```bash
ffmpeg -i "assets/images/homepage/2024.3.5_新選挙広報帯付き.mp4" \
  -vframes 1 \
  -q:v 2 \
  "assets/images/homepage/hero-poster.jpg"
```

## What Each Parameter Does:

- `-c:v libx264`: Use H.264 video codec
- `-crf 25`: Quality setting (18-28 is good, lower = better quality)
- `-preset fast`: Encoding speed (fast, medium, slow)
- `-c:a aac`: Use AAC audio codec
- `-b:a 96k`: Audio bitrate
- `-movflags +faststart`: Enable streaming before full download
- `-vf "scale=1920:1080"`: Resize to 1080p
- `-vframes 1`: Extract only 1 frame for poster

## Recommended Settings for Web:

- **CRF**: 23-25 (good balance of quality and size)
- **Preset**: fast (good balance of speed and compression)
- **Audio**: 96k-128k (sufficient for web)
- **Resolution**: 1920x1080 (standard HD)

