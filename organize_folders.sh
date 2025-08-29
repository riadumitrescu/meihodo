#!/bin/bash

# Script to reorganize compressed images back into proper folder structure

echo "=== REORGANIZING IMAGES INTO PROPER FOLDER STRUCTURE ==="
echo ""

# Create organized directory structure
mkdir -p assets/images_organized

# Create main category folders
mkdir -p assets/images_organized/accommodations
mkdir -p assets/images_organized/experiences
mkdir -p assets/images_organized/restaurant
mkdir -p assets/images_organized/photography
mkdir -p assets/images_organized/homepage
mkdir -p assets/images_organized/logos

# Create subcategory folders for experiences
mkdir -p assets/images_organized/experiences/karate
mkdir -p assets/images_organized/experiences/bonseki
mkdir -p assets/images_organized/experiences/samurai
mkdir -p assets/images_organized/experiences/chanoyu
mkdir -p assets/images_organized/experiences/taiko
mkdir -p assets/images_organized/experiences/kendo
mkdir -p assets/images_organized/experiences/kyudo
mkdir -p assets/images_organized/experiences/iaido
mkdir -p assets/images_organized/experiences/zazen
mkdir -p assets/images_organized/experiences/takigyo
mkdir -p assets/images_organized/experiences/kado
mkdir -p assets/images_organized/experiences/kanshi-shigin
mkdir -p assets/images_organized/experiences/shodo

# Create subcategory folders for restaurant
mkdir -p assets/images_organized/restaurant/sushi
mkdir -p assets/images_organized/restaurant/chinese

# Create subcategory folders for accommodations
mkdir -p assets/images_organized/accommodations/bunshinkan
mkdir -p assets/images_organized/accommodations/edokan
mkdir -p assets/images_organized/accommodations/geihinkan
mkdir -p assets/images_organized/accommodations/hinokinoma
mkdir -p assets/images_organized/accommodations/kourokan
mkdir -p assets/images_organized/accommodations/seiseisya

echo "Created folder structure..."
echo ""

# Function to move images to appropriate folders
organize_images() {
    echo "Organizing images by category..."
    
    # Move accommodation images
    echo "Moving accommodation images..."
    mv assets/images_compressed/bunshinkan-room-*.jpg assets/images_organized/accommodations/bunshinkan/ 2>/dev/null
    mv assets/images_compressed/edokan-room-*.jpg assets/images_organized/accommodations/edokan/ 2>/dev/null
    mv assets/images_compressed/edokan-room-*.JPG assets/images_organized/accommodations/edokan/ 2>/dev/null
    mv assets/images_compressed/geihinkan-room-*.jpg assets/images_organized/accommodations/geihinkan/ 2>/dev/null
    mv assets/images_compressed/hinokinoma-room-*.jpg assets/images_organized/accommodations/hinokinoma/ 2>/dev/null
    mv assets/images_compressed/hinokinoma-room-*.JPG assets/images_organized/accommodations/hinokinoma/ 2>/dev/null
    mv assets/images_compressed/kourokan-room-*.jpg assets/images_organized/accommodations/kourokan/ 2>/dev/null
    mv assets/images_compressed/kourokan-room-*.JPG assets/images_organized/accommodations/kourokan/ 2>/dev/null
    mv assets/images_compressed/seiseisya-room-*.jpg assets/images_organized/accommodations/seiseisya/ 2>/dev/null
    mv assets/images_compressed/seiseisya-room-*.JPG assets/images_organized/accommodations/seiseisya/ 2>/dev/null
    
    # Move experience images
    echo "Moving experience images..."
    mv assets/images_compressed/karate-experience-*.jpg assets/images_organized/experiences/karate/ 2>/dev/null
    mv assets/images_compressed/karate-experience-*.jpeg assets/images_organized/experiences/karate/ 2>/dev/null
    mv assets/images_compressed/karate-experience-*.png assets/images_organized/experiences/karate/ 2>/dev/null
    mv assets/images_compressed/bonseki-art-*.jpg assets/images_organized/experiences/bonseki/ 2>/dev/null
    mv assets/images_compressed/bonseki-art-*.jpeg assets/images_organized/experiences/bonseki/ 2>/dev/null
    mv assets/images_compressed/samurai-experience-*.jpg assets/images_organized/experiences/samurai/ 2>/dev/null
    mv assets/images_compressed/tea-ceremony-*.jpg assets/images_organized/experiences/chanoyu/ 2>/dev/null
    mv assets/images_compressed/tea-ceremony-*.jpeg assets/images_organized/experiences/chanoyu/ 2>/dev/null
    mv assets/images_compressed/taiko-drumming-*.jpg assets/images_organized/experiences/taiko/ 2>/dev/null
    mv assets/images_compressed/taiko-drumming-*.jpeg assets/images_organized/experiences/taiko/ 2>/dev/null
    mv assets/images_compressed/kendo-sword-*.jpg assets/images_organized/experiences/kendo/ 2>/dev/null
    mv assets/images_compressed/kyudo-archery-*.jpg assets/images_organized/experiences/kyudo/ 2>/dev/null
    mv assets/images_compressed/iaido-sword-*.jpg assets/images_organized/experiences/iaido/ 2>/dev/null
    mv assets/images_compressed/zazen-meditation-*.jpg assets/images_organized/experiences/zazen/ 2>/dev/null
    mv assets/images_compressed/takigyo-ritual-*.png assets/images_organized/experiences/takigyo/ 2>/dev/null
    mv assets/images_compressed/flower-arrangement-*.jpg assets/images_organized/experiences/kado/ 2>/dev/null
    mv assets/images_compressed/poetry-calligraphy-*.jpg assets/images_organized/experiences/kanshi-shigin/ 2>/dev/null
    mv assets/images_compressed/calligraphy-*.jpg assets/images_organized/experiences/shodo/ 2>/dev/null
    
    # Move restaurant images
    echo "Moving restaurant images..."
    mv assets/images_compressed/sushi-dish-*.jpg assets/images_organized/restaurant/sushi/ 2>/dev/null
    mv assets/images_compressed/sushi-dish-*.JPG assets/images_organized/restaurant/sushi/ 2>/dev/null
    mv assets/images_compressed/sushi-dish-*.png assets/images_organized/restaurant/sushi/ 2>/dev/null
    mv assets/images_compressed/sushi-dish-*.PNG assets/images_organized/restaurant/sushi/ 2>/dev/null
    mv assets/images_compressed/chinese-dish-*.jpg assets/images_organized/restaurant/chinese/ 2>/dev/null
    
    # Move other category images
    echo "Moving other category images..."
    mv assets/images_compressed/photography-*.jpg assets/images_organized/photography/ 2>/dev/null
    mv assets/images_compressed/photography-*.JPG assets/images_organized/photography/ 2>/dev/null
    mv assets/images_compressed/homepage-*.jpg assets/images_organized/homepage/ 2>/dev/null
    mv assets/images_compressed/homepage-*.png assets/images_organized/homepage/ 2>/dev/null
    mv assets/images_compressed/homepage-*.PNG assets/images_organized/homepage/ 2>/dev/null
    mv assets/images_compressed/logo-*.png assets/images_organized/logos/ 2>/dev/null
    
    echo "Image organization complete!"
}

# Run the organization
organize_images

echo ""
echo "=== FINAL ORGANIZED STRUCTURE ==="
echo ""
echo "📁 ORGANIZED FOLDER STRUCTURE:"
echo "assets/images_organized/"
echo "├── accommodations/"
echo "│   ├── bunshinkan/"
echo "│   ├── edokan/"
echo "│   ├── geihinkan/"
echo "│   ├── hinokinoma/"
echo "│   ├── kourokan/"
echo "│   └── seiseisya/"
echo "├── experiences/"
echo "│   ├── karate/"
echo "│   ├── bonseki/"
echo "│   ├── samurai/"
echo "│   ├── chanoyu/"
echo "│   ├── taiko/"
echo "│   ├── kendo/"
echo "│   ├── kyudo/"
echo "│   ├── iaido/"
echo "│   ├── zazen/"
echo "│   ├── takigyo/"
echo "│   ├── kado/"
echo "│   ├── kanshi-shigin/"
echo "│   └── shodo/"
echo "├── restaurant/"
echo "│   ├── sushi/"
echo "│   └── chinese/"
echo "├── photography/"
echo "├── homepage/"
echo "└── logos/"
echo ""

# Show the organized structure
echo "📊 ORGANIZED FOLDER CONTENTS:"
echo ""
for folder in assets/images_organized/*; do
    if [ -d "$folder" ]; then
        echo "📁 $(basename "$folder"):"
        for subfolder in "$folder"/*; do
            if [ -d "$subfolder" ]; then
                count=$(ls "$subfolder"/* 2>/dev/null | wc -l)
                echo "   ├── $(basename "$subfolder"): $count images"
            else
                count=$(ls "$folder"/* 2>/dev/null | wc -l)
                echo "   └── $count images"
                break
            fi
        done
        echo ""
    fi
done

echo "✅ ORGANIZATION COMPLETE!"
echo ""
echo "Your images are now organized in: assets/images_organized/"
echo "This structure matches your original website organization!"
echo ""
echo "💡 USAGE:"
echo "   - Copy assets/images_organized/ to your website"
echo "   - Update image paths in your HTML files"
echo "   - All images are compressed and have meaningful names"
echo "   - Folder structure matches your original organization"
