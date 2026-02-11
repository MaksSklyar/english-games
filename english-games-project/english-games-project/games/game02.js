// Game 2: Family Puzzle
window.Game2 = {
    revealLevel: 0,

    init() {
        this.revealLevel = 0;
    },

    render() {
        return `
            <h2>Game 2: Family Puzzle</h2>
            <h3>Сімейний пазл</h3>
            <div class="instruction">Натисни "Показати більше", щоб побачити більше зображення!</div>
            <div class="game-area">
                <div class="puzzle-container">
                    <div class="puzzle-reveal" id="puzzleReveal" style="clip-path: inset(0 75% 75% 0);">
                        👨
                    </div>
                </div>
                <button class="play-btn" onclick="Game2.revealMore()">
                    Показати більше 👁️
                </button>
            </div>
            <div class="options-grid">
                <button class="option-btn" onclick="Game2.checkAnswer('Dad')">Dad</button>
                <button class="option-btn" onclick="Game2.checkAnswer('Mom')">Mom</button>
                <button class="option-btn" onclick="Game2.checkAnswer('Brother')">Brother</button>
                <button class="option-btn" onclick="Game2.checkAnswer('Sister')">Sister</button>
            </div>
        `;
    },

    revealMore() {
        this.revealLevel++;
        const puzzleReveal = document.getElementById('puzzleReveal');
        
        if (this.revealLevel === 1) {
            puzzleReveal.style.clipPath = 'inset(0 50% 50% 0)';
        } else if (this.revealLevel === 2) {
            puzzleReveal.style.clipPath = 'inset(0 25% 25% 0)';
        } else {
            puzzleReveal.style.clipPath = 'inset(0 0 0 0)';
        }
    },

    checkAnswer(answer) {
        if (answer === 'Dad') {
            Utils.createConfetti();
            Utils.playSound('Correct! ' + answer);
            setTimeout(() => {
                GameManager.completeGame(2, 10);
            }, 1000);
        } else {
            Utils.showMessage('Try again! 🤔');
        }
    }
};
