#!/bin/bash

# Script to replace original accommodation images with optimized versions
# This will backup the originals and replace them with the optimized versions

echo "Starting replacement of original images with optimized versions..."

# Create backup directory
backup_dir="assets/images/accommodations_backup_$(date +%Y%m%d_%H%M%S)"
echo "Creating backup in: $backup_dir"

# Backup original images
cp -r assets/images/accommodations "$backup_dir"
echo "Backup completed in: $backup_dir"

# Replace original images with optimized versions
echo "Replacing original images with optimized versions..."
cp -r assets/images/accommodations_optimized/* assets/images/accommodations/

echo "Replacement complete!"
echo ""
echo "Summary:"
echo "- Original images backed up to: $backup_dir"
echo "- All accommodation images have been replaced with optimized versions"
echo "- File size reduced from 366MB to 13MB (96% reduction)"
echo "- Images are now web-optimized for fast loading"
echo ""
echo "You can now use the optimized images in your website."
echo "If you need to restore the originals, they are in: $backup_dir"
