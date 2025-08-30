// Restaurant Gallery Handler for Meihodo
document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('restaurant-gallery');
    
    if (!galleryContainer) return;
    
    // Sushi image data
    const sushiImages = [
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-1.JPG',
            alt: 'Premium sushi platter with seasonal fish',
            title: 'Seasonal Sushi Selection'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-2.JPG',
            alt: 'Artistic sashimi presentation',
            title: 'Sashimi Artistry'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-3.JPG',
            alt: 'Traditional sushi arrangement',
            title: 'Traditional Sushi'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-4.JPG',
            alt: 'Chef\'s special sushi creation',
            title: 'Chef\'s Special'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-5.JPG',
            alt: 'Premium tuna and salmon sushi',
            title: 'Premium Fish Selection'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-6.JPG',
            alt: 'Elegant sushi presentation',
            title: 'Elegant Presentation'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-7.JPG',
            alt: 'Seasonal ingredients sushi',
            title: 'Seasonal Ingredients'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-8.JPG',
            alt: 'Artistic sushi arrangement',
            title: 'Artistic Arrangement'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-9.JPG',
            alt: 'Premium sushi experience',
            title: 'Premium Experience'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-10.png',
            alt: 'Chef\'s signature sushi',
            title: 'Chef\'s Signature'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-11.JPG',
            alt: 'Traditional Japanese sushi',
            title: 'Traditional Japanese'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-12.PNG',
            alt: 'Seasonal sushi showcase',
            title: 'Seasonal Showcase'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-13.JPG',
            alt: 'Premium sushi ingredients',
            title: 'Premium Ingredients'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-14.JPG',
            alt: 'Artistic sushi presentation',
            title: 'Artistic Presentation'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-15.JPG',
            alt: 'Chef\'s special creation',
            title: 'Chef\'s Creation'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-16.JPG',
            alt: 'Traditional sushi arrangement',
            title: 'Traditional Arrangement'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-17.JPG',
            alt: 'Seasonal fish sushi',
            title: 'Seasonal Fish'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-18.JPG',
            alt: 'Premium sushi experience',
            title: 'Premium Experience'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-19.JPG',
            alt: 'Artistic sushi showcase',
            title: 'Artistic Showcase'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-20.JPG',
            alt: 'Chef\'s signature dish',
            title: 'Chef\'s Signature'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-21.JPG',
            alt: 'Traditional Japanese cuisine',
            title: 'Traditional Cuisine'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-22.JPG',
            alt: 'Seasonal sushi selection',
            title: 'Seasonal Selection'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-23.JPG',
            alt: 'Premium sushi ingredients',
            title: 'Premium Ingredients'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-24.JPG',
            alt: 'Artistic sushi presentation',
            title: 'Artistic Presentation'
        },
        {
            src: '/assets/images_organized/restaurant/sushi/sushi-dish-25.JPG',
            alt: 'Chef\'s special creation',
            title: 'Chef\'s Special'
        }
    ];
    
    // Create gallery items
    function createGallery() {
        sushiImages.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.setAttribute('data-index', index);
            
            galleryItem.innerHTML = `
                <div class="gallery-image-container">
                    <img src="${image.src}" alt="${image.alt}" loading="lazy" />
                    <div class="gallery-overlay">
                        <h4>${image.title}</h4>
                        <button class="gallery-expand" aria-label="View larger image">
                            <span>+</span>
                        </button>
                    </div>
                </div>
            `;
            
            // Add click event for expanding image
            galleryItem.addEventListener('click', function() {
                openLightbox(index);
            });
            
            galleryContainer.appendChild(galleryItem);
        });
    }
    
    // Lightbox functionality
    function openLightbox(index) {
        const image = sushiImages[index];
        
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
                <button class="lightbox-nav lightbox-prev" aria-label="Previous image">&lt;</button>
                <button class="lightbox-nav lightbox-next" aria-label="Next image">&gt;</button>
                <img src="${image.src}" alt="${image.alt}" />
                <div class="lightbox-caption">
                    <h3>${image.title}</h3>
                    <p>${image.alt}</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Close lightbox
        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.addEventListener('click', closeLightbox);
        
        // Navigation
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');
        
        prevBtn.addEventListener('click', () => navigateLightbox(index - 1));
        nextBtn.addEventListener('click', () => navigateLightbox(index + 1));
        
        // Keyboard navigation
        document.addEventListener('keydown', handleLightboxKeys);
        
        // Click outside to close
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        function closeLightbox() {
            document.body.removeChild(lightbox);
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleLightboxKeys);
        }
        
        function navigateLightbox(newIndex) {
            if (newIndex < 0) newIndex = sushiImages.length - 1;
            if (newIndex >= sushiImages.length) newIndex = 0;
            
            closeLightbox();
            openLightbox(newIndex);
        }
        
        function handleLightboxKeys(e) {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    navigateLightbox(index - 1);
                    break;
                case 'ArrowRight':
                    navigateLightbox(index + 1);
                    break;
            }
        }
    }
    
    // Initialize gallery
    createGallery();
});
