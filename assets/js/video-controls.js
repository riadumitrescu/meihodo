// Custom Video Controls for Hero Video
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, looking for video elements...');
    const video = document.getElementById('hero-video');
    const playPauseBtn = document.getElementById('play-pause');
    
    console.log('Video element:', video);
    console.log('Play button:', playPauseBtn);
    
    // Test if button is visible
    if (playPauseBtn) {
        playPauseBtn.style.border = '2px solid white';
        console.log('Button styles applied');
    }
    
    if (!video || !playPauseBtn) {
        console.error('Video or button not found!');
        return;
    }
    
    // Set initial button state
    updateButtonState();
    
    // Play/Pause button click handler
    playPauseBtn.addEventListener('click', function(e) {
        console.log('Button clicked!', e);
        e.preventDefault();
        e.stopPropagation();
        
        if (video.paused) {
            console.log('Video is paused, starting playback...');
            // Start video and unmute
            video.muted = false;
            video.play().then(() => {
                console.log('Video started playing successfully');
            }).catch(error => {
                console.error('Error playing video:', error);
                // Fallback: try with muted
                console.log('Trying fallback with muted playback...');
                video.muted = true;
                video.play().then(() => {
                    console.log('Video started playing with muted fallback');
                }).catch(fallbackError => {
                    console.error('Fallback also failed:', fallbackError);
                });
            });
        } else {
            console.log('Video is playing, pausing...');
            video.pause();
        }
        updateButtonState();
    });
    
    // Update button state based on video state
    function updateButtonState() {
        if (video.paused) {
            playPauseBtn.classList.remove('playing');
        } else {
            playPauseBtn.classList.add('playing');
        }
    }
    
    // Listen for video state changes
    video.addEventListener('play', updateButtonState);
    video.addEventListener('pause', updateButtonState);
    
    // Handle video loading
    video.addEventListener('loadedmetadata', function() {
        console.log('Video loaded successfully');
        // Ensure video is paused initially
        video.pause();
        updateButtonState();
    });
    
    video.addEventListener('error', function(e) {
        console.error('Video error:', e);
        // Hide controls if video fails to load
        playPauseBtn.style.display = 'none';
    });
    
    // Keep controls always visible for better UX
    // No auto-hide to ensure button is always clickable
});

