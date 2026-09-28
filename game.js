class CookieClickerGame {
    constructor() {
        this.cookies = 0;
        this.cookiesPerSecond = 0;
        this.infiniteMode = false;
        this.upgrades = [
            { name: 'Grandma', cost: 15, cps: 0.1, owned: 0 },
            { name: 'Farm', cost: 100, cps: 1, owned: 0 },
            { name: 'Bakery', cost: 1000, cps: 10, owned: 0 },
            { name: 'Factory', cost: 10000, cps: 100, owned: 0 },
            { name: 'Gold Mine', cost: 100000, cps: 1000, owned: 0 }
        ];
        
        this.init();
    }
    
    init() {
        document.getElementById('cookieButton').addEventListener('click', () => this.clickCookie());
        document.getElementById('infiniteButton').addEventListener('click', () => this.enableInfinite());
        document.getElementById('disableInfiniteButton').addEventListener('click', () => this.disableInfinite());
        
        this.renderShop();
        this.gameLoop();
        this.update();
    }
    
    clickCookie() {
        if (this.infiniteMode) {
            this.cookies += 1000000;
        } else {
            this.cookies += 1;
        }
        this.update();
        this.animateCookie();
    }
    
    animateCookie() {
        const button = document.getElementById('cookieButton');
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    }
    
    enableInfinite() {
        this.infiniteMode = true;
        document.getElementById('cheatStatus').textContent = 'Status: ∞ INFINITE COOKIES MODE ∞';
        document.getElementById('cheatStatus').style.color = '#f5576c';
        document.getElementById('cheatStatus').style.fontWeight = 'bold';
    }
    
    disableInfinite() {
        this.infiniteMode = false;
        document.getElementById('cheatStatus').textContent = 'Status: Normal Mode';
        document.getElementById('cheatStatus').style.color = '#666';
        document.getElementById('cheatStatus').style.fontWeight = 'normal';
    }
    
    renderShop() {
        const shopDiv = document.getElementById('shop');
        shopDiv.innerHTML = '';
        
        this.upgrades.forEach((upgrade, index) => {
            const item = document.createElement('div');
            item.className = 'shop-item';
            
            if (this.cookies >= upgrade.cost) {
                item.classList.add('affordable');
            } else {
                item.classList.add('unaffordable');
            }
            
            item.innerHTML = `
                <div class="shop-item-info">
                    <h3>${upgrade.name}</h3>
                    <p>+${upgrade.cps.toFixed(1)} cookies/sec | Owned: ${upgrade.owned}</p>
                </div>
                <div class="shop-item-cost">${upgrade.cost.toLocaleString()}</div>
            `;
            
            item.addEventListener('click', () => this.buyUpgrade(index));
            shopDiv.appendChild(item);
        });
    }
    
    buyUpgrade(index) {
        const upgrade = this.upgrades[index];
        if (this.cookies >= upgrade.cost) {
            this.cookies -= upgrade.cost;
            upgrade.owned += 1;
            upgrade.cost = Math.ceil(upgrade.cost * 1.15);
            this.cookiesPerSecond += upgrade.cps;
            this.update();
            this.renderShop();
        }
    }
    
    update() {
        document.getElementById('cookies').textContent = Math.floor(this.cookies).toLocaleString();
        document.getElementById('cps').textContent = this.cookiesPerSecond.toFixed(1);
    }
    
    gameLoop() {
        setInterval(() => {
            if (this.infiniteMode) {
                this.cookies += 1000000;
            } else {
                this.cookies += this.cookiesPerSecond / 10;
            }
            this.update();
        }, 100);
    }
}

// Start the game
const game = new CookieClickerGame();
