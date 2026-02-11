// Game 3: Who in Shadow?
window.Game3 = {
    render() {
        return `
            <h2>Game 3: Who in Shadow?</h2>
            <h3>Хто у тіні?</h3>
            <div class="instruction">Обери правильну відповідь!</div>
            <div class="game-area">
                <div style="font-size: 10rem; filter: brightness(0);">👨</div>
            </div>
            <div class="options-grid">
                <button class="option-btn" onclick="Game3.checkAnswer('Dad')">Dad</button>
                <button class="option-btn" onclick="Game3.checkAnswer('Mom')">Mom</button>
                <button class="option-btn" onclick="Game3.checkAnswer('Brother')">Brother</button>
                <button class="option-btn" onclick="Game3.checkAnswer('Sister')">Sister</button>
            </div>
        `;
    },
    checkAnswer(answer) {
        if (answer === 'Dad') {
            Utils.createConfetti();
            Utils.playSound('Correct! Dad!');
            setTimeout(() => GameManager.completeGame(3, 8), 1000);
        } else {
            Utils.showMessage('Try again! 🤔');
        }
    }
};

// Game 4: Family Train
window.Game4 = {
    render() {
        return `
            <h2>Game 4: Family Train</h2>
            <h3>Сімейний потяг</h3>
            <div class="instruction">Завдання: Add Mom to the train! 🚂</div>
            <div class="game-area">
                <div style="font-size: 8rem;">🚂 🟦 🟦 🟦</div>
                <div class="family-cards">
                    <div class="family-card" onclick="Game4.checkAnswer('Mom')">
                        <div class="emoji">👩</div>
                        <div class="name">Mom</div>
                    </div>
                    <div class="family-card" onclick="Game4.checkAnswer('Dad')">
                        <div class="emoji">👨</div>
                        <div class="name">Dad</div>
                    </div>
                </div>
            </div>
        `;
    },
    checkAnswer(answer) {
        if (answer === 'Mom') {
            Utils.createConfetti();
            Utils.playSound('Great! Mom is on the train!');
            setTimeout(() => GameManager.completeGame(4, 7), 1000);
        } else {
            Utils.showMessage('Try again! Need Mom! 😊');
        }
    }
};

// Game 5: Family Actions
window.Game5 = {
    render() {
        return `
            <h2>Game 5: Family Actions</h2>
            <h3>Сімейні дії</h3>
            <div class="instruction">Команда: Show Brother! 👦</div>
            <div class="game-area">
                <div class="family-cards">
                    <div class="family-card" onclick="Game5.checkAnswer('Dad')">
                        <div class="emoji">👨</div>
                        <div class="name">Dad</div>
                    </div>
                    <div class="family-card" onclick="Game5.checkAnswer('Brother')">
                        <div class="emoji">👦</div>
                        <div class="name">Brother</div>
                    </div>
                </div>
            </div>
        `;
    },
    checkAnswer(answer) {
        if (answer === 'Brother') {
            Utils.createConfetti();
            Utils.playSound('Perfect! Brother!');
            setTimeout(() => GameManager.completeGame(5, 6), 1000);
        } else {
            Utils.showMessage('Try again! Need Brother! 😊');
        }
    }
};

// Game 6: Magic Words
window.Game6 = {
    render() {
        return `
            <h2>Game 6: Magic Words</h2>
            <h3>Чарівні слова</h3>
            <div class="instruction">Ситуація: Ти хочеш попросити цукерку. Що сказати?</div>
            <div class="game-area">
                <div style="font-size: 6rem;">🍬</div>
            </div>
            <div class="options-grid">
                <button class="option-btn" onclick="Game6.checkAnswer('Please')">Please</button>
                <button class="option-btn" onclick="Game6.checkAnswer('Sorry')">Sorry</button>
                <button class="option-btn" onclick="Game6.checkAnswer('Hello')">Hello</button>
                <button class="option-btn" onclick="Game6.checkAnswer('Bye')">Bye</button>
            </div>
        `;
    },
    checkAnswer(answer) {
        if (answer === 'Please') {
            Utils.createConfetti();
            Utils.playSound('Perfect! Please!');
            setTimeout(() => GameManager.completeGame(6, 5), 1000);
        } else {
            Utils.showMessage('Not quite! Think again! 🤔');
        }
    }
};

// Game 7: Help Friend
window.Game7 = {
    render() {
        return `
            <h2>Game 7: Help Friend</h2>
            <h3>Допоможи другу</h3>
            <div class="instruction">Твій друг упав. Що ти скажеш?</div>
            <div class="game-area">
                <div style="font-size: 6rem;">😢</div>
            </div>
            <div class="options-grid">
                <button class="option-btn" onclick="Game7.checkAnswer('help')">I can help you!</button>
                <button class="option-btn" onclick="Game7.checkAnswer('bye')">Goodbye!</button>
                <button class="option-btn" onclick="Game7.checkAnswer('later')">See you later!</button>
                <button class="option-btn" onclick="Game7.checkAnswer('ok')">Are you OK?</button>
            </div>
        `;
    },
    checkAnswer(answer) {
        if (answer === 'help' || answer === 'ok') {
            Utils.createConfetti();
            Utils.playSound('Very kind!');
            setTimeout(() => GameManager.completeGame(7, 7), 1000);
        } else {
            Utils.showMessage('Not the best answer! Try again! 💪');
        }
    }
};

// Game 8: Clean the Room
window.Game8 = {
    render() {
        return `
            <h2>Game 8: Clean the Room</h2>
            <h3>Прибирання в кімнаті</h3>
            <div class="instruction">Завдання: Де має стояти table? 🪑</div>
            <div class="game-area">
                <div class="family-cards">
                    <div class="family-card" onclick="Game8.checkAnswer('Chair')">
                        <div class="emoji">🪑</div>
                        <div class="name">Chair</div>
                    </div>
                    <div class="family-card" onclick="Game8.checkAnswer('Table')">
                        <div class="emoji">🪑</div>
                        <div class="name">Table</div>
                    </div>
                    <div class="family-card" onclick="Game8.checkAnswer('Bed')">
                        <div class="emoji">🛏️</div>
                        <div class="name">Bed</div>
                    </div>
                    <div class="family-card" onclick="Game8.checkAnswer('Lamp')">
                        <div class="emoji">💡</div>
                        <div class="name">Lamp</div>
                    </div>
                </div>
            </div>
        `;
    },
    checkAnswer(answer) {
        if (answer === 'Table') {
            Utils.createConfetti();
            Utils.playSound('Perfect! Table!');
            setTimeout(() => GameManager.completeGame(8, 8), 1000);
        } else {
            Utils.showMessage(`Try again! That's a ${answer}!`);
        }
    }
};

// Game 9: Where is it?
window.Game9 = {
    render() {
        return `
            <h2>Game 9: Where is it?</h2>
            <h3>Де це знаходиться?</h3>
            <div class="instruction">Питання: Where is the sofa? 🛋️</div>
            <div class="game-area">
                <div class="family-cards">
                    <div class="family-card" onclick="Game9.checkAnswer('Sofa')">
                        <div class="emoji">🛋️</div>
                        <div class="name">Sofa</div>
                    </div>
                    <div class="family-card" onclick="Game9.checkAnswer('Chair')">
                        <div class="emoji">🪑</div>
                        <div class="name">Chair</div>
                    </div>
                    <div class="family-card" onclick="Game9.checkAnswer('Table')">
                        <div class="emoji">🪑</div>
                        <div class="name">Table</div>
                    </div>
                    <div class="family-card" onclick="Game9.checkAnswer('Bed')">
                        <div class="emoji">🛏️</div>
                        <div class="name">Bed</div>
                    </div>
                </div>
            </div>
        `;
    },
    checkAnswer(answer) {
        if (answer === 'Sofa') {
            Utils.createConfetti();
            Utils.playSound('Great! Sofa!');
            setTimeout(() => GameManager.completeGame(9, 6), 1000);
        } else {
            Utils.showMessage(`That's a ${answer}! Try again! 🤔`);
        }
    }
};

// Game 10: Count the Hearts
window.Game10 = {
    render() {
        return `
            <h2>Game 10: Count the Hearts</h2>
            <h3>Порахуй сердечка</h3>
            <div class="instruction">Скільки сердечок ти бачиш?</div>
            <div class="game-area">
                <div class="counting-hearts">
                    <span class="heart">❤️</span>
                    <span class="heart">❤️</span>
                    <span class="heart">❤️</span>
                    <span class="heart">❤️</span>
                    <span class="heart">❤️</span>
                </div>
                <input type="number" class="number-input" id="heartCount" placeholder="?">
                <button class="complete-btn" onclick="Game10.checkCount()">Перевірити! ✓</button>
            </div>
        `;
    },
    checkCount() {
        const count = parseInt(document.getElementById('heartCount').value);
        if (count === 5) {
            Utils.createConfetti();
            Utils.playSound('Five! Correct!');
            setTimeout(() => GameManager.completeGame(10, 9), 1000);
        } else {
            Utils.showMessage('Try again! Count carefully! 💭');
        }
    }
};

// Game 11: Jump and Count
window.Game11 = {
    jumpClicks: 0,

    init() {
        this.jumpClicks = 0;
    },

    render() {
        return `
            <h2>Game 11: Jump and Count</h2>
            <h3>Стрибай та рахуй</h3>
            <div class="instruction">Команда: Jump THREE times! Натисни 3 рази! 🤸</div>
            <div class="game-area">
                <div style="font-size: 8rem; cursor: pointer;" onclick="Game11.jump()">
                    <div id="jumpEmoji">🤸</div>
                </div>
                <div style="font-size: 3rem; font-weight: 700; color: var(--blue);" id="jumpCounter">
                    Clicks: 0
                </div>
            </div>
        `;
    },

    jump() {
        this.jumpClicks++;
        const emoji = document.getElementById('jumpEmoji');
        const counter = document.getElementById('jumpCounter');
        
        counter.textContent = `Clicks: ${this.jumpClicks}`;
        emoji.style.transform = 'translateY(-30px)';
        
        const numbers = ['One', 'Two', 'Three'];
        if (this.jumpClicks <= 3) {
            Utils.playSound(numbers[this.jumpClicks - 1]);
        }
        
        setTimeout(() => {
            emoji.style.transform = 'translateY(0)';
        }, 200);
        
        if (this.jumpClicks === 3) {
            setTimeout(() => {
                GameManager.completeGame(11, 7);
            }, 1000);
        }
    }
};

// Game 12: Draw a Heart
window.Game12 = {
    selectedColor: '#FF6B9D',

    render() {
        return `
            <h2>Game 12: Draw a Heart</h2>
            <h3>Намалюй серце</h3>
            <div class="instruction">Обери колір та натисни на серце!</div>
            <div class="game-area">
                <div style="font-size: 10rem; cursor: pointer;" id="colorHeart" onclick="Game12.colorHeart()">
                    🤍
                </div>
                <div style="display: flex; gap: 15px;">
                    <button class="option-btn" style="background: #FF6B9D;" 
                            onclick="Game12.selectedColor='#FF6B9D'">Pink</button>
                    <button class="option-btn" style="background: #FF0000;" 
                            onclick="Game12.selectedColor='#FF0000'">Red</button>
                    <button class="option-btn" style="background: #FFD93D;" 
                            onclick="Game12.selectedColor='#FFD93D'">Yellow</button>
                    <button class="option-btn" style="background: #6BCF7F;" 
                            onclick="Game12.selectedColor='#6BCF7F'">Green</button>
                </div>
                <button class="complete-btn" onclick="GameManager.completeGame(12, 5)">
                    Завершити! 🎨
                </button>
            </div>
        `;
    },

    colorHeart() {
        const heart = document.getElementById('colorHeart');
        heart.style.color = this.selectedColor;
        Utils.playSound('Beautiful color!');
    }
};

// Game 13: Show Emotion
window.Game13 = {
    render() {
        return `
            <h2>Game 13: Show Emotion</h2>
            <h3>Покажи емоцію</h3>
            <div class="instruction">Емоція: LOVE ❤️ Покажи її!</div>
            <div class="game-area">
                <div class="emotion-display">😍</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--pink);">
                    Повтори цю емоцію!
                </div>
                <button class="complete-btn" onclick="GameManager.completeGame(13, 6)">
                    Я показав емоцію! 😊
                </button>
            </div>
        `;
    }
};

// Game 14: Open the Box
window.Game14 = {
    firstBox: null,

    init() {
        this.firstBox = null;
    },

    render() {
        return `
            <h2>Game 14: Open the Box</h2>
            <h3>Відкрий коробку</h3>
            <div class="instruction">Знайди дві однакові коробки!</div>
            <div class="game-area">
                <div class="family-cards">
                    <div class="family-card" onclick="Game14.openBox(this, '🍎')">
                        <div class="emoji">📦</div>
                    </div>
                    <div class="family-card" onclick="Game14.openBox(this, '🍌')">
                        <div class="emoji">📦</div>
                    </div>
                    <div class="family-card" onclick="Game14.openBox(this, '🍎')">
                        <div class="emoji">📦</div>
                    </div>
                    <div class="family-card" onclick="Game14.openBox(this, '🍌')">
                        <div class="emoji">📦</div>
                    </div>
                </div>
            </div>
        `;
    },

    openBox(element, item) {
        const emoji = element.querySelector('.emoji');
        
        if (emoji.textContent !== '📦') return;
        
        emoji.textContent = item;
        Utils.playSound(item === '🍎' ? 'Apple' : 'Banana');
        
        if (!this.firstBox) {
            this.firstBox = { element, item };
        } else {
            if (this.firstBox.item === item && this.firstBox.element !== element) {
                setTimeout(() => {
                    Utils.playSound('Match! Great job!');
                    Utils.createConfetti();
                    setTimeout(() => GameManager.completeGame(14, 10), 1000);
                }, 500);
            } else {
                setTimeout(() => {
                    emoji.textContent = '📦';
                    this.firstBox.element.querySelector('.emoji').textContent = '📦';
                    this.firstBox = null;
                }, 1000);
            }
        }
    }
};

// Game 15: Heart Hunt
window.Game15 = {
    foundHearts: 0,

    init() {
        this.foundHearts = 0;
    },

    render() {
        return `
            <h2>Game 15: Heart Hunt</h2>
            <h3>Полювання на сердечка</h3>
            <div class="instruction">Знайди 5 схованих сердечок! Клікай по кімнаті!</div>
            <div class="game-area" style="background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%); 
                 position: relative; min-height: 400px; cursor: pointer;" onclick="Game15.findHeart(event)">
                <div style="position: absolute; top: 20%; left: 15%; font-size: 2rem;" data-heart>🪴</div>
                <div style="position: absolute; top: 40%; right: 20%; font-size: 2rem;" data-heart>🪑</div>
                <div style="position: absolute; bottom: 30%; left: 40%; font-size: 2rem;" data-heart>📚</div>
                <div style="position: absolute; top: 60%; right: 15%; font-size: 2rem;" data-heart>🖼️</div>
                <div style="position: absolute; bottom: 20%; left: 25%; font-size: 2rem;" data-heart>🪟</div>
                <div style="font-size: 2rem; font-weight: 700; margin: 20px; color: var(--teal);" 
                     id="huntCounter">Знайдено: 0 / 5</div>
            </div>
        `;
    },

    findHeart(event) {
        if (event.target.hasAttribute('data-heart') && event.target.textContent !== '❤️') {
            event.target.textContent = '❤️';
            this.foundHearts++;
            
            const numbers = ['One', 'Two', 'Three', 'Four', 'Five'];
            Utils.playSound(numbers[this.foundHearts - 1]);
            
            document.getElementById('huntCounter').textContent = `Знайдено: ${this.foundHearts} / 5`;
            
            if (this.foundHearts === 5) {
                setTimeout(() => {
                    GameManager.completeGame(15, 8);
                }, 1000);
            }
        }
    }
};
