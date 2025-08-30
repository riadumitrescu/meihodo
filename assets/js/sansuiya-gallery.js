// Restaurant Sansuiya Gallery Handler for Meihodo
document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('sansuiya-gallery');
    
    if (!galleryContainer) return;
    
    // Chinese cuisine image data - all images from the organized folder
    const chineseImages = [
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-26.jpg',
            alt: 'Traditional Chinese cuisine presentation',
            title: 'Traditional Chinese'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-27.jpg',
            alt: 'Chinese hot pot with fresh ingredients',
            title: 'Hot Pot Specialties'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-28.jpg',
            alt: 'Stir-fried Chinese vegetables',
            title: 'Stir-fried Vegetables'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-29.jpg',
            alt: 'Chinese dim sum selection',
            title: 'Dim Sum Selection'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-30.jpg',
            alt: 'Chinese noodle dishes',
            title: 'Noodle Dishes'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-31.jpg',
            alt: 'Chinese rice dishes',
            title: 'Rice Dishes'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-32.jpg',
            alt: 'Chinese seafood dishes',
            title: 'Seafood Dishes'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-33.jpg',
            alt: 'Chinese meat dishes',
            title: 'Meat Dishes'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-34.jpg',
            alt: 'Chinese soup dishes',
            title: 'Soup Dishes'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-35.jpg',
            alt: 'Chinese appetizer selection',
            title: 'Appetizer Selection'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-36.jpg',
            alt: 'Chinese dessert selection',
            title: 'Dessert Selection'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-37.jpg',
            alt: 'Chinese banquet presentation',
            title: 'Banquet Presentation'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-38.jpg',
            alt: 'Chinese seasonal dishes',
            title: 'Seasonal Dishes'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-39.jpg',
            alt: 'Chinese traditional cooking',
            title: 'Traditional Cooking'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-40.jpg',
            alt: 'Chinese ingredient showcase',
            title: 'Fresh Ingredients'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-41.jpg',
            alt: 'Chinese culinary artistry',
            title: 'Culinary Artistry'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-42.jpg',
            alt: 'Chinese dining experience',
            title: 'Dining Experience'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-43.jpg',
            alt: 'Chinese chef specialties',
            title: 'Chef Specialties'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-44.jpg',
            alt: 'Chinese seasonal menu',
            title: 'Seasonal Menu'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-45.jpg',
            alt: 'Chinese traditional flavors',
            title: 'Traditional Flavors'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-46.jpg',
            alt: 'Chinese modern presentation',
            title: 'Modern Presentation'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-47.jpg',
            alt: 'Chinese authentic cuisine',
            title: 'Authentic Cuisine'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-48.jpg',
            alt: 'Chinese dining atmosphere',
            title: 'Dining Atmosphere'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-49.jpg',
            alt: 'Chinese culinary excellence',
            title: 'Culinary Excellence'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-50.jpg',
            alt: 'Chinese seasonal specialties',
            title: 'Seasonal Specialties'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-51.jpg',
            alt: 'Chinese traditional techniques',
            title: 'Traditional Techniques'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-52.jpg',
            alt: 'Chinese banquet cuisine',
            title: 'Banquet Cuisine'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-53.jpg',
            alt: 'Chinese regional specialties',
            title: 'Regional Specialties'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-54.jpg',
            alt: 'Chinese fusion dishes',
            title: 'Fusion Dishes'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-55.jpg',
            alt: 'Chinese street food',
            title: 'Street Food'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-56.jpg',
            alt: 'Chinese fine dining',
            title: 'Fine Dining'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-57.jpg',
            alt: 'Chinese family style',
            title: 'Family Style'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-58.jpg',
            alt: 'Chinese vegetarian options',
            title: 'Vegetarian Options'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-59.jpg',
            alt: 'Chinese seafood specialties',
            title: 'Seafood Specialties'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-60.jpg',
            alt: 'Chinese meat specialties',
            title: 'Meat Specialties'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-61.jpg',
            alt: 'Chinese noodle specialties',
            title: 'Noodle Specialties'
        },
        {
            src: '/assets/images_organized/restaurant/chinese/chinese-dish-62.jpg',
            alt: 'Chinese rice specialties',
            title: 'Rice Specialties'
        }
    ];
    
    // Create gallery items
    function createGallery() {
        chineseImages.forEach((image, index) => {
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
        const image = chineseImages[index];
        
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
            if (newIndex < 0) newIndex = chineseImages.length - 1;
            if (newIndex >= chineseImages.length) newIndex = 0;
            
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
