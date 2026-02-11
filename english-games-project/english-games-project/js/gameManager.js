// Game Manager
const GameManager = {
    totalStarsEarned: 0,
    completedGames: new Set(),

    /**
     * Initialize the game manager
     */
    init() {
        this.renderGames();
        this.updateStarsCounter();
    },

    /**
     * Render all game cards
     */
    renderGames() {
        const grid = document.getElementById('gamesGrid');
        grid.innerHTML = GAMES_CONFIG.map(game => `
            <div class="game-card" onclick="GameManager.openGame(${game.number})">
                <div class="game-icon">${game.icon}</div>
                <div class="game-number">${game.number}</div>
                <h3 class="game-title">${game.title}</h3>
                <p class="game-subtitle">${game.subtitle}</p>
                <p class="game-description">${game.description}</p>
                <div class="game-stars">
                    <span>⭐</span>
                    <span>Earn ${game.stars} stars!</span>
                </div>
                <button class="play-btn" onclick="event.stopPropagation(); GameManager.openGame(${game.number})">
                    Грати! 🎮
                </button>
            </div>
        `).join('');
    },

    /**
     * Open game modal
     */
    openGame(gameNumber) {
        const gameFunction = window[`Game${gameNumber}`];
        if (gameFunction && typeof gameFunction.render === 'function') {
            const content = gameFunction.render();
            document.getElementById('modalContent').innerHTML = content;
            document.getElementById('gameModal').classList.add('active');
            
            // Initialize game if it has init function
            if (typeof gameFunction.init === 'function') {
                gameFunction.init();
            }
        }
    },

    /**
     * Close game modal
     */
    closeModal() {
        document.getElementById('gameModal').classList.remove('active');
    },

    /**
     * Complete a game
     */
    completeGame(gameNumber, stars) {
        if (!this.completedGames.has(gameNumber)) {
            this.completedGames.add(gameNumber);
            this.totalStarsEarned += stars;
            this.updateStarsCounter();
            this.showSuccessMessage(stars);
            Utils.createConfetti();
            Utils.playSound('Great job!');
        }
    },

    /**
     * Update stars counter display
     */
    updateStarsCounter() {
        document.getElementById('totalStars').textContent = 
            `${this.totalStarsEarned} / ${TOTAL_STARS}`;
    },

    /**
     * Show success message
     */
    showSuccessMessage(stars) {
        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = `
            <div class="success-message">
                <div style="font-size: 5rem; margin-bottom: 20px;">🎉</div>
                <div>Вітаємо!</div>
                <div style="font-size: 3rem; margin: 20px 0;">+${stars} ⭐</div>
                <div style="font-size: 1.3rem;">Гру завершено!</div>
                <button class="complete-btn" style="margin-top: 30px;" onclick="GameManager.closeModal()">
                    Продовжити навчання! 🚀
                </button>
            </div>
        `;
    }
};
