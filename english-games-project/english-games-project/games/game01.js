// Game 1: Meet My Family
window.Game1 = {
    render() {
        return `
            <h2>Game 1: Meet My Family</h2>
            <h3>Знайомство з родиною</h3>
            <div class="instruction">Натисни на картку, щоб почути англійське слово!</div>
            <div class="game-area">
                <div class="family-cards">
                    <div class="family-card" onclick="Game1.playCard('Dad', event)">
                        <div class="emoji">👨</div>
                        <div class="name">Dad</div>
                    </div>
                    <div class="family-card" onclick="Game1.playCard('Mom', event)">
                        <div class="emoji">👩</div>
                        <div class="name">Mom</div>
                    </div>
                    <div class="family-card" onclick="Game1.playCard('Brother', event)">
                        <div class="emoji">👦</div>
                        <div class="name">Brother</div>
                    </div>
                    <div class="family-card" onclick="Game1.playCard('Sister', event)">
                        <div class="emoji">👧</div>
                        <div class="name">Sister</div>
                    </div>
                </div>
            </div>
            <button class="complete-btn" onclick="GameManager.completeGame(1, 5)">
                Завершити гру! ⭐
            </button>
        `;
    },

    playCard(word, event) {
        Utils.playSound(word);
        
        // Visual feedback
        const card = event.target.closest('.family-card');
        card.style.transform = 'scale(1.1)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 300);
    }
};
