// 抽卡函数
function gacha(count) {
    const results = [];
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
    
    // 延迟显示，模拟抽卡动画
    let delay = 0;
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const item = pullItem();
            results.push(item);
            displayItem(item, resultContainer);
            
            // 更新游戏状态
            gameState.totalPulls++;
            gameState.pity++;
            gameState.fourStarPity++;
            
            if (item.rarity === 5) {
                gameState.fiveStarCount++;
                gameState.pity = 0;
                gameState.fourStarPity = 0;
            } else if (item.rarity === 4) {
                gameState.fourStarPity = 0;
            }
            
            updateStats();
            saveGameState();
            
        }, delay);
        delay += 800; // 每个卡片之间的延迟
    }
}

// 单次抽卡逻辑
function pullItem() {
    // 检查保底
    if (gameState.pity >= gachaRates.pity.fiveStar - 1) {
        // 90抽保底，必出5星
        return getRandomFiveStar();
    }
    
    if (gameState.fourStarPity >= gachaRates.pity.fourStar - 1) {
        // 10抽保底，必出4星或以上
        const random = Math.random();
        if (random < gachaRates.fiveStar) {
            return getRandomFiveStar();
        } else {
            return getRandomFourStar();
        }
    }
    
    // 正常概率抽卡
    const random = Math.random();
    if (random < gachaRates.fiveStar) {
        return getRandomFiveStar();
    } else if (random < gachaRates.fiveStar + gachaRates.fourStar) {
        return getRandomFourStar();
    } else {
        return getRandomThreeStar();
    }
}

// 获取随机5星物品
function getRandomFiveStar() {
    const random = Math.random();
    if (random < gachaRates.upRate) {
        // 出UP角色
        return { ...characters.fiveStar[0], isUp: true };
    } else {
        // 出其他5星角色或武器
        const isCharacter = Math.random() < 0.5;
        if (isCharacter) {
            const index = Math.floor(Math.random() * characters.fiveStar.length);
            return characters.fiveStar[index];
        } else {
            const index = Math.floor(Math.random() * weapons.fiveStar.length);
            return weapons.fiveStar[index];
        }
    }
}

// 获取随机4星物品
function getRandomFourStar() {
    const isCharacter = Math.random() < 0.5;
    if (isCharacter) {
        const index = Math.floor(Math.random() * characters.fourStar.length);
        return characters.fourStar[index];
    } else {
        const index = Math.floor(Math.random() * weapons.fourStar.length);
        return weapons.fourStar[index];
    }
}

// 获取随机3星物品
function getRandomThreeStar() {
    const index = Math.floor(Math.random() * weapons.threeStar.length);
    return weapons.threeStar[index];
}

// 显示抽卡结果
function displayItem(item, container) {
    const card = document.createElement('div');
    card.className = `card ${getRarityClass(item.rarity)}`;
    
    // 添加星星评级
    const starRating = document.createElement('div');
    starRating.className = 'star-rating';
    starRating.innerHTML = '★'.repeat(item.rarity);
    card.appendChild(starRating);
    
    // 添加物品名称
    if (item.element) {
        // 角色
        const characterName = document.createElement('div');
        characterName.className = 'character-name';
        characterName.textContent = item.name;
        card.appendChild(characterName);
        
        const element = document.createElement('div');
        element.className = 'rarity';
        element.textContent = `${item.element} · ${item.weapon}`;
        card.appendChild(element);
    } else {
        // 武器
        const weaponName = document.createElement('div');
        weaponName.className = 'weapon-name';
        weaponName.textContent = item.name;
        card.appendChild(weaponName);
        
        const weaponType = document.createElement('div');
        weaponType.className = 'rarity';
        weaponType.textContent = item.type;
        card.appendChild(weaponType);
    }
    
    // 添加UP标记
    if (item.isUp) {
        const upBadge = document.createElement('div');
        upBadge.style.position = 'absolute';
        upBadge.style.top = '5px';
        upBadge.style.left = '5px';
        upBadge.style.background = 'red';
        upBadge.style.color = 'white';
        upBadge.style.fontSize = '0.7rem';
        upBadge.style.padding = '2px 4px';
        upBadge.style.borderRadius = '3px';
        upBadge.textContent = 'UP';
        card.appendChild(upBadge);
    }
    
    container.appendChild(card);
}

// 获取稀有度对应的CSS类
function getRarityClass(rarity) {
    switch (rarity) {
        case 5:
            return 'five-star';
        case 4:
            return 'four-star';
        case 3:
            return 'three-star';
        default:
            return '';
    }
}

// 更新统计信息
function updateStats() {
    document.getElementById('pity-count').textContent = gameState.pity;
    document.getElementById('total-pulls').textContent = gameState.totalPulls;
    document.getElementById('five-star-count').textContent = gameState.fiveStarCount;
}

// 重置游戏状态
function resetGacha() {
    if (confirm('确定要重置抽卡记录吗？这将清除所有数据！')) {
        gameState = {
            pity: 0,
            fourStarPity: 0,
            totalPulls: 0,
            fiveStarCount: 0,
            history: []
        };
        updateStats();
        saveGameState();
        document.getElementById('result-container').innerHTML = '';
        alert('抽卡记录已重置！');
    }
}

// 初始化
function init() {
    updateStats();
    // 添加一些视觉效果
    const buttons = document.querySelectorAll('.gacha-btn');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// 页面加载完成后初始化
window.onload = init;
