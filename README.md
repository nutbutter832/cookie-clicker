# cookie-clicker
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie Clicker</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="main-content">
            <div class="game-section">
                <h1>🍪 Cookie Clicker</h1>
                <div class="stats">
                    <div class="stat">
                        <span>Cookies:</span>
                        <span id="cookies">0</span>
                    </div>
                    <div class="stat">
                        <span>Per Second:</span>
                        <span id="cps">0</span>
                    </div>
                </div>
                
                <button id="cookieButton" class="cookie-btn">
                    🍪
                </button>
                
                <div class="cheat-section">
                    <h3>Cheats (for testing only!)</h3>
                    <button id="infiniteButton" class="cheat-btn">Enable Infinite Cookies</button>
                    <button id="disableInfiniteButton" class="cheat-btn">Disable Infinite Cookies</button>
                    <p id="cheatStatus">Status: Normal Mode</p>
                </div>
            </div>
            
            <div class="shop-section">
                <h2>Shop</h2>
                <div id="shop" class="shop-grid"></div>
            </div>
        </div>
    </div>

    <script src="game.js"></script>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    width: 100%;
    max-width: 1200px;
}

.main-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: start;
}

.game-section {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    text-align: center;
}

.game-section h1 {
    color: #333;
    margin-bottom: 30px;
    font-size: 2.5em;
}

.stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 40px;
}

.stat {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 10px;
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.stat span:first-child {
    opacity: 0.9;
    font-size: 0.9em;
}

.stat span:last-child {
    font-size: 1.8em;
    font-weight: bold;
}

.cookie-btn {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: none;
    font-size: 120px;
    background: radial-gradient(circle at 30% 30%, #FFD700, #FFA500);
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(255, 165, 0, 0.4);
    transition: all 0.1s ease;
    margin: 20px 0;
    display: inline-block;
}

.cookie-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(255, 165, 0, 0.6);
}

.cookie-btn:active {
    transform: scale(0.95);
}

.cheat-section {
    margin-top: 30px;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 10px;
    border: 2px dashed #ccc;
}

.cheat-section h3 {
    color: #666;
    margin-bottom: 15px;
    font-size: 0.9em;
}

.cheat-btn {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9em;
    transition: all 0.3s ease;
}

.cheat-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(245, 87, 108, 0.4);
}

#cheatStatus {
    color: #666;
    font-size: 0.9em;
    margin-top: 10px;
}

.shop-section {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.shop-section h2 {
    color: #333;
    margin-bottom: 30px;
    text-align: center;
}

.shop-grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.shop-item {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.shop-item:hover {
    transform: translateX(5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.shop-item.affordable {
    background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
}

.shop-item.unaffordable {
    opacity: 0.6;
    cursor: not-allowed;
}

.shop-item-info h3 {
    font-size: 1.2em;
    margin-bottom: 5px;
}

.shop-item-info p {
    font-size: 0.9em;
    opacity: 0.9;
}

.shop-item-cost {
    font-size: 1.3em;
    font-weight: bold;
    text-align: right;
}

@media (max-width: 768px) {
    .main-content {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .cookie-btn {
        width: 200px;
        height: 200px;
        font-size: 80px;
    }
    
    .game-section h1 {
        font-size: 2em;
    }
}
</body>
</html>
