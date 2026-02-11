// Main Application Entry Point

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 English Learning Games - Initializing...');
    
    // Initialize the game manager
    GameManager.init();
    
    console.log('✅ Games loaded successfully!');
    console.log(`📚 Total games: ${GAMES_CONFIG.length}`);
    console.log(`⭐ Total stars available: ${TOTAL_STARS}`);
});

// Close modal on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        GameManager.closeModal();
    }
});

// Close modal on outside click
window.addEventListener('click', function(event) {
    const modal = document.getElementById('gameModal');
    if (event.target === modal) {
        GameManager.closeModal();
    }
});

console.log('🚀 English Learning Games - Ready to load!');
