/* =========================================
   1. 核心資料庫 (Database)
   包含價格、庫存(Stock)、功耗(Watts)、效能分(Score)
   ========================================= */
const db = {
    cpu: [
        { id: 'c1', name: 'Intel Core i3-12100 (4核/8緒)', price: 3900, stock: 20, watts: 60, score: 30 },
        { id: 'c2', name: 'Intel Core i3-14100 (4核/8緒)', price: 4500, stock: 15, watts: 65, score: 35 },
        { id: 'c3', name: 'Intel Core i5-12400F (6核/12緒) CP值王', price: 4800, stock: 30, watts: 75, score: 50 },
        { id: 'c4', name: 'Intel Core i5-13400F (10核/16緒)', price: 6500, stock: 10, watts: 90, score: 60 },
        { id: 'c5', name: 'Intel Core i5-13500 (14核/20緒)', price: 7900, stock: 8, watts: 100, score: 65 },
        { id: 'c6', name: 'Intel Core i5-14600K (14核/20緒)', price: 10200, stock: 10, watts: 150, score: 75 },
        { id: 'c7', name: 'Intel Core i7-13700K (16核/24緒)', price: 13500, stock: 5, watts: 230, score: 85 },
        { id: 'c8', name: 'Intel Core i7-14700K (20核/28緒)', price: 14800, stock: 5, watts: 250, score: 90 },
        { id: 'c9', name: 'Intel Core i9-14900K (24核/32緒) 頂規', price: 19800, stock: 3, watts: 300, score: 100 },
        { id: 'c10', name: 'Intel Core i9-14900KS (特別版)', price: 22800, stock: 1, watts: 320, score: 105 },
        { id: 'c11', name: 'AMD Ryzen 5 5600X', price: 4500, stock: 12, watts: 65, score: 50 },
        { id: 'c12', name: 'AMD Ryzen 5 7500F (無內顯/高CP)', price: 5200, stock: 25, watts: 80, score: 55 },
        { id: 'c13', name: 'AMD Ryzen 5 7600X', price: 7200, stock: 8, watts: 105, score: 60 },
        { id: 'c14', name: 'AMD Ryzen 7 7700X', price: 9500, stock: 6, watts: 120, score: 70 },
        { id: 'c15', name: 'AMD Ryzen 7 7800X3D (遊戲最強)', price: 14500, stock: 0, watts: 120, score: 85 }, // 缺貨
        { id: 'c16', name: 'AMD Ryzen 9 7900X', price: 15500, stock: 4, watts: 170, score: 90 },
        { id: 'c17', name: 'AMD Ryzen 9 7950X', price: 18200, stock: 3, watts: 230, score: 100 },
        { id: 'c18', name: 'AMD Ryzen 9 7950X3D', price: 21000, stock: 2, watts: 120, score: 100 }
    ],
    mb: [
        { id: 'm1', name: 'ASUS PRIME H610M-K D4', price: 2590, stock: 20, watts: 10 },
        { id: 'm2', name: 'GIGABYTE B760M DS3H DDR4', price: 3590, stock: 15, watts: 15 },
        { id: 'm3', name: 'MSI PRO B760M-A WIFI DDR4', price: 4200, stock: 10, watts: 15 },
        { id: 'm4', name: 'ASUS TUF GAMING B760M-PLUS WIFI', price: 5290, stock: 8, watts: 20 },
        { id: 'm5', name: 'ASUS ROG STRIX B760-A GAMING WIFI', price: 6590, stock: 6, watts: 20 },
        { id: 'm6', name: 'MSI MAG B760 TOMAHAWK WIFI', price: 6200, stock: 5, watts: 25 },
        { id: 'm7', name: 'GIGABYTE Z790 AORUS ELITE AX', price: 8500, stock: 4, watts: 30 },
        { id: 'm8', name: 'ASUS ROG MAXIMUS Z790 HERO', price: 18900, stock: 2, watts: 40 },
        { id: 'm9', name: 'MSI MPG B650 EDGE WIFI (AMD)', price: 6990, stock: 8, watts: 25 },
        { id: 'm10', name: 'GIGABYTE X670E AORUS MASTER', price: 15900, stock: 3, watts: 35 },
        { id: 'm11', name: 'ASUS ROG STRIX X670E-F GAMING', price: 11900, stock: 3, watts: 35 },
        { id: 'm12', name: 'ASUS TUF GAMING X670E-PLUS', price: 9900, stock: 5, watts: 30 }
    ],
    ram: [
        // 模擬缺貨：只有金士頓 32GB 有貨
        { id: 'r1', name: '金士頓 Fury Beast 8GB DDR4-3200', price: 650, stock: 0, watts: 3 },
        { id: 'r2', name: '金士頓 Fury Beast 16GB DDR4-3200', price: 1100, stock: 0, watts: 3 },
        { id: 'r3', name: '金士頓 Fury Beast 32GB(16x2) DDR4-3200', price: 2100, stock: 0, watts: 6 },
        { id: 'r4', name: '美光 Crucial 16GB DDR4-3200', price: 999, stock: 0, watts: 3 },
        { id: 'r5', name: '芝奇 Ripjaws V 32GB(16x2) DDR4-3600', price: 2300, stock: 0, watts: 6 },
        { id: 'r6', name: '威剛 XPG D10 32GB(16x2) DDR4-3200', price: 2050, stock: 0, watts: 6 },
        { id: 'r7', name: '金士頓 Fury Beast 16GB DDR5-5600', price: 1650, stock: 0, watts: 4 },
        // ↓↓↓ 唯一倖存者 ↓↓↓
        { id: 'r8', name: '金士頓 Fury Beast 32GB(16x2) DDR5-6000', price: 3500, stock: 4, watts: 8 }, 
        // ↑↑↑ ---------------- ↑↑↑
        { id: 'r9', name: '威剛 XPG Lancer 32GB(16x2) DDR5-6000', price: 3200, stock: 0, watts: 8 },
        { id: 'r10', name: '芝奇 Trident Z5 RGB 32GB(16x2) DDR5-6400', price: 3800, stock: 0, watts: 8 },
        { id: 'r11', name: '芝奇 Trident Z5 RGB 64GB(32x2) DDR5-6000', price: 6500, stock: 0, watts: 12 },
        { id: 'r12', name: 'Corsair Dominator Platinum 32GB DDR5-6200', price: 5500, stock: 0, watts: 8 },
        { id: 'r13', name: 'Team T-Force Delta RGB 32GB DDR5-6000', price: 3100, stock: 0, watts: 8 },
        { id: 'r14', name: 'Kingston Fury Renegade 48GB(24x2) DDR5', price: 5800, stock: 0, watts: 10 }
    ],
    gpu: [
        { id: 'g1', name: 'ASUS Dual RTX 3060 O12G V2', price: 8900, stock: 10, watts: 170, score: 40 },
        { id: 'g2', name: 'GIGABYTE RTX 3060 EAGLE OC 12G', price: 8800, stock: 8, watts: 170, score: 40 },
        { id: 'g3', name: 'MSI RTX 4060 VENTUS 2X Black 8G', price: 9800, stock: 15, watts: 115, score: 50 },
        { id: 'g4', name: 'GIGABYTE RTX 4060 EAGLE OC 8G', price: 9900, stock: 12, watts: 115, score: 50 },
        { id: 'g5', name: 'ASUS ROG STRIX RTX 4060 O8G', price: 11900, stock: 5, watts: 120, score: 55 },
        { id: 'g6', name: 'ASUS TUF RTX 4060 Ti O8G Gaming', price: 14500, stock: 8, watts: 160, score: 65 },
        { id: 'g7', name: 'MSI RTX 4060 Ti GAMING X 16G', price: 16500, stock: 6, watts: 165, score: 68 },
        { id: 'g8', name: 'GIGABYTE RTX 4070 WINDFORCE OC 12G', price: 18900, stock: 6, watts: 200, score: 80 },
        { id: 'g9', name: 'ASUS Dual RTX 4070 SUPER O12G', price: 21900, stock: 8, watts: 220, score: 90 },
        { id: 'g10', name: 'MSI RTX 4070 SUPER GAMING X SLIM', price: 23500, stock: 5, watts: 220, score: 90 },
        { id: 'g11', name: 'ASUS ROG STRIX RTX 4070 Ti SUPER 16G', price: 32900, stock: 3, watts: 285, score: 100 },
        { id: 'g12', name: 'GIGABYTE RTX 4080 SUPER GAMING OC', price: 38900, stock: 2, watts: 320, score: 120 },
        { id: 'g13', name: 'MSI RTX 4090 SUPRIM X 24G', price: 63000, stock: 1, watts: 450, score: 200 },
        { id: 'g14', name: 'ASUS ROG STRIX RTX 4090 O24G', price: 65900, stock: 1, watts: 450, score: 200 },
        { id: 'g15', name: 'AMD Radeon RX 7600 8G', price: 8500, stock: 5, watts: 165, score: 45 },
        { id: 'g16', name: 'AMD Radeon RX 7800 XT 16G', price: 17900, stock: 4, watts: 263, score: 85 },
        { id: 'g17', name: 'AMD Radeon RX 7900 XTX 24G', price: 33900, stock: 2, watts: 355, score: 150 }
    ],
    ssd: [
        { id: 's1', name: 'Kingston NV2 500GB Gen4', price: 1100, stock: 20, watts: 5 },
        { id: 's2', name: 'Kingston NV2 1TB Gen4', price: 1850, stock: 30, watts: 5 },
        { id: 's3', name: 'WD Blue SN580 1TB Gen4', price: 1950, stock: 25, watts: 5 },
        { id: 's4', name: 'WD Black SN850X 1TB Gen4', price: 2990, stock: 15, watts: 7 },
        { id: 's5', name: 'WD Black SN850X 2TB Gen4', price: 4990, stock: 10, watts: 7 },
        { id: 's6', name: 'Samsung 990 PRO 1TB Gen4', price: 3200, stock: 8, watts: 8 },
        { id: 's7', name: 'Samsung 990 PRO 2TB Gen4', price: 5600, stock: 5, watts: 8 },
        { id: 's8', name: 'Seagate FireCuda 530 1TB', price: 3100, stock: 5, watts: 8 },
        { id: 's9', name: 'Crucial P3 Plus 1TB Gen4', price: 1900, stock: 10, watts: 5 },
        { id: 's10', name: 'Crucial T700 2TB Gen5 (極速)', price: 9500, stock: 2, watts: 12 }
    ],
    hdd: [
        { id: 'h1', name: 'Seagate Barracuda 1TB', price: 1350, stock: 10, watts: 15 },
        { id: 'h2', name: 'Seagate Barracuda 2TB', price: 1750, stock: 15, watts: 15 },
        { id: 'h3', name: 'Toshiba P300 2TB', price: 1700, stock: 8, watts: 15 },
        { id: 'h4', name: 'WD Blue 4TB', price: 2900, stock: 5, watts: 18 },
        { id: 'h5', name: 'Seagate IronWolf 4TB (NAS)', price: 3500, stock: 4, watts: 20 },
        { id: 'h6', name: 'WD Gold 8TB (企業級)', price: 7500, stock: 2, watts: 25 },
        { id: 'h7', name: 'Seagate Exos X18 16TB', price: 10500, stock: 1, watts: 28 }
    ],
    case: [
        { id: 'ca1', name: 'Montech Air 1000 Premium', price: 1990, stock: 15, watts: 0 },
        { id: 'ca2', name: 'Antec P20C (高風量)', price: 2390, stock: 8, watts: 0 },
        { id: 'ca3', name: 'Lian Li LANCOOL 216 RGB', price: 2790, stock: 10, watts: 0 },
        { id: 'ca4', name: 'Hyte Y60 全景機殼', price: 5990, stock: 5, watts: 0 },
        { id: 'ca5', name: 'NZXT H9 Flow 全透測', price: 5990, stock: 4, watts: 0 },
        { id: 'ca6', name: 'ASUS ROG Hyperion GR701', price: 13900, stock: 1, watts: 0 },
        { id: 'ca7', name: 'Cooler Master TD500 Mesh V2', price: 2890, stock: 6, watts: 0 },
        { id: 'ca8', name: 'Fractal Design North (木紋)', price: 5200, stock: 3, watts: 0 }
    ],
    psu: [
        { id: 'p1', name: 'Montech Century 550W 金牌', price: 1990, stock: 15, watts: 0 },
        { id: 'p2', name: 'Montech Century 650W 金牌', price: 2390, stock: 20, watts: 0 },
        { id: 'p3', name: 'Seasonic Focus GX-750', price: 3390, stock: 12, watts: 0 },
        { id: 'p4', name: 'Seasonic Focus GX-850', price: 3790, stock: 10, watts: 0 },
        { id: 'p5', name: 'Seasonic Vertex GX-1000', price: 5690, stock: 5, watts: 0 },
        { id: 'p6', name: 'FSP Hydro G PRO 750W', price: 3390, stock: 8, watts: 0 },
        { id: 'p7', name: 'FSP Hydro PTM PRO 1200W', price: 7990, stock: 2, watts: 0 },
        { id: 'p8', name: 'ASUS ROG Strix 850W Gold', price: 4690, stock: 4, watts: 0 },
        { id: 'p9', name: 'ASUS ROG Thor 1000W P2', price: 9500, stock: 1, watts: 0 },
        { id: 'p10', name: 'Corsair RM850e', price: 3890, stock: 6, watts: 0 }
    ],
    cooler: [
        { id: 'cl1', name: 'Intel/AMD 原廠散熱器', price: 0, stock: 99, watts: 0 },
        { id: 'cl2', name: '利民 Peerless Assassin 120', price: 1400, stock: 20, watts: 5 },
        { id: 'cl3', name: '九州風神 AG620', price: 1390, stock: 10, watts: 5 },
        { id: 'cl4', name: 'NZXT Kraken 240 RGB 水冷', price: 4990, stock: 5, watts: 10 },
        { id: 'cl5', name: 'NZXT Kraken 360 RGB 水冷', price: 7990, stock: 3, watts: 15 },
        { id: 'cl6', name: 'ASUS ROG RYUJIN III 360', price: 10900, stock: 2, watts: 20 },
        { id: 'cl7', name: 'MSI MPG CORELIQUID K360', price: 8500, stock: 2, watts: 15 },
        { id: 'cl8', name: 'Valkyrie E360 (高顏值)', price: 4200, stock: 5, watts: 15 }
    ],
    os: [
        { id: 'o1', name: '不含作業系統', price: 0, stock: 99, watts: 0 },
        { id: 'o2', name: 'Windows 11 家用隨機版', price: 3790, stock: 50, watts: 0 },
        { id: 'o3', name: 'Windows 11 家用彩盒版', price: 4590, stock: 20, watts: 0 },
        { id: 'o4', name: 'Windows 11 專業隨機版', price: 4790, stock: 30, watts: 0 },
        { id: 'o5', name: 'Windows 11 專業彩盒版', price: 6290, stock: 10, watts: 0 },
        { id: 'o6', name: 'Office 2021 家用版', price: 4590, stock: 15, watts: 0 },
        { id: 'o7', name: 'Microsoft 365 個人版', price: 1990, stock: 20, watts: 0 }
    ]
};

// --- 類別與變數 ---
const labels = {
    cpu: "CPU 處理器", mb: "主機板 MB", ram: "記憶體 RAM", gpu: "顯示卡 GPU",
    ssd: "固態硬碟 SSD", hdd: "傳統硬碟 HDD", case: "機殼 Case", psu: "電源供應器",
    cooler: "散熱系統", os: "作業系統/軟體"
};

let cart = [];
let isLoggedIn = false;
let currentSlide = 0;

// --- 初始化入口 ---
window.onload = function() {
    initCanvasBg();         // 背景動畫
    initProductionStatus(); // 產線狀態
    initCarousel();         // 輪播
    initPromos();           // 促銷
    initPrebuilts();        // 主機
    initLaptops();          // 筆電
    initBuilder();          // 估價區
    updateCartCount();
};

// ============================
// 1. 視覺特效與側欄邏輯
// ============================

// 側欄收折功能 (Toggle Panel)
function togglePanel(side) {
    const panel = document.getElementById(`${side}Panel`);
    const btn = panel.querySelector('.panel-toggle');
    panel.classList.toggle('collapsed');
    
    // 更新按鈕箭頭方向
    if(side === 'left') {
        btn.textContent = panel.classList.contains('collapsed') ? '▶' : '◀';
    } else {
        btn.textContent = panel.classList.contains('collapsed') ? '◀' : '▶';
    }
}

// 動態粒子背景
function initCanvasBg() {
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = 60;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.fillStyle = '#ccc';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
            particles.forEach(p2 => {
                let dx = p.x - p2.x;
                let dy = p.y - p2.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.strokeStyle = `rgba(200,200,200,${1 - dist / 150})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });
        requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// 產線負荷燈號模擬
function initProductionStatus() {
    const queue = Math.floor(Math.random() * 25) + 5; 
    document.getElementById('queueCount').textContent = queue;

    const lights = document.querySelectorAll('.light');
    lights.forEach(l => l.classList.remove('active'));

    const lightGreen = document.getElementById('light-green');
    const lightYellow = document.getElementById('light-yellow');
    const lightRed = document.getElementById('light-red');
    const statusText = document.getElementById('statusText');
    const waitDays = document.getElementById('waitDays');

    if (queue < 12) {
        lightGreen.classList.add('active');
        statusText.textContent = "產能充足";
        statusText.style.color = "#00cc66";
        waitDays.textContent = "24";
    } else if (queue < 20) {
        lightYellow.classList.add('active');
        statusText.textContent = "訂單繁忙";
        statusText.style.color = "#ffcc00";
        waitDays.textContent = "48";
    } else {
        lightRed.classList.add('active');
        statusText.textContent = "產線爆量";
        statusText.style.color = "#ff4444";
        waitDays.textContent = "72+";
    }
}

// 戰力儀表板 (核心運算)
function updateDashboard() {
    // 【修改 1】將基礎瓦數從 50 改成 0
    let totalWatts = 0; 
    let totalScore = 0;

    // 遍歷所有選單，計算瓦數與分數
    for (const key in db) {
        const select = document.getElementById(`select-${key}`);
        if (select && select.selectedIndex > 0) {
            const option = select.options[select.selectedIndex];
            const watts = parseInt(option.getAttribute('data-watts')) || 0;
            const score = parseInt(option.getAttribute('data-score')) || 0;
            
            totalWatts += watts;
            if (key === 'gpu') totalScore = score; // 以顯卡分數為主
        }
    }

    // 更新瓦數 UI
    document.getElementById('totalWatts').textContent = totalWatts;
    const wattBar = document.getElementById('wattBar');
    const pct = Math.min((totalWatts / 1000) * 100, 100);
    wattBar.style.width = pct + '%';
    
    // 瓦數顏色變化
    if(totalWatts < 400) wattBar.style.background = '#00cc66';
    else if(totalWatts < 700) wattBar.style.background = '#ffcc00';
    else wattBar.style.background = '#ff4444';

    // 【修改 2】如果瓦數是 0，顯示尚未選擇，不然會預設顯示 550W 怪怪的
    if (totalWatts === 0) {
        document.getElementById('psuSuggestion').textContent = "建議電源：尚未選擇";
    } else {
        let psuRec = "550W";
        if(totalWatts > 450) psuRec = "650W";
        if(totalWatts > 550) psuRec = "750W";
        if(totalWatts > 650) psuRec = "850W";
        if(totalWatts > 750) psuRec = "1000W";
        if(totalWatts > 900) psuRec = "1200W";
        document.getElementById('psuSuggestion').textContent = `建議電源：${psuRec} 以上`;
    }

    // 更新效能 UI (維持原本邏輯)
    const fpsLabel = document.getElementById('fpsLabel');
    const fpsScore = document.getElementById('fpsScore');
    
    if(totalScore === 0) {
        fpsLabel.textContent = "請選擇顯卡";
        fpsScore.textContent = "--";
    } else if(totalScore < 50) {
        fpsLabel.textContent = "1080p 入門順跑";
        fpsScore.textContent = "60+";
    } else if(totalScore < 80) {
        fpsLabel.textContent = "1080p 特效全開";
        fpsScore.textContent = "100+";
    } else if(totalScore < 100) {
        fpsLabel.textContent = "2K 畫質暢玩";
        fpsScore.textContent = "120+";
    } else {
        fpsLabel.textContent = "4K 極致光追";
        fpsScore.textContent = "144+";
    }
}

// ============================
// 2. 頁面導覽與互動
// ============================

function switchSection(id) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active-section'));
    document.getElementById(id).classList.add('active-section');
    document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.remove('active');
        if (b.getAttribute('onclick')?.includes(id)) b.classList.add('active');
    });
    window.scrollTo(0, 0);
}

function scrollToId(id) {
    switchSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleStore(id) {
    document.querySelectorAll('.store-info-box').forEach(b => b.style.display = 'none');
    document.querySelectorAll('.store-btn').forEach(b => b.classList.remove('active'));
    const target = document.getElementById(`store-info-${id}`);
    if (target) {
        target.style.display = 'block';
        const btns = document.querySelectorAll('.store-btn');
        if (id === 'tp') btns[0].classList.add('active');
        if (id === 'tc') btns[1].classList.add('active');
        if (id === 'tn') btns[2].classList.add('active');
        if (id === 'fix') btns[3].classList.add('active');
    }
}

// ============================
// 3. 內容渲染 (Grid & Carousel)
// ============================

// 輪播圖片 (自動補上 images/)
const slides = [
    "輪播1.webp", 
    "輪播2.webp",
    "輪播3.webp" 
];

function initCarousel() {
    const track = document.getElementById('carouselTrack');
    track.innerHTML = '';
    slides.forEach(filename => {
        const d = document.createElement('div');
        d.className = 'carousel-slide';
        // 自動補全路徑
        d.innerHTML = `<img src="images/${filename}">`;
        track.appendChild(d);
    });
    setInterval(() => moveCarousel(1), 5000);
}

function moveCarousel(d) {
    currentSlide = (currentSlide + d + 3) % 3;
    document.getElementById('carouselTrack').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// 渲染 Grid
function renderGrid(containerId, items, type) {
    const c = document.getElementById(containerId);
    c.innerHTML = '';
    items.forEach(item => {
        let btnAction = type === 'brand' ?
            `addToCart({type:'brand', name:'${item.title}', price:${item.price}, id:'${item.id}'})` :
            `showDetail('${type}', '${item.id}')`;

        let priceHtml = type === 'brand' ?
            `<span class="original-price">$${item.old.toLocaleString()}</span><span class="promo-price">$${item.price.toLocaleString()}</span>` :
            `<span class="promo-price">$${item.price.toLocaleString()}</span>`;

        let descHtml = item.desc ? `<div style="color:#666;margin-bottom:10px;font-size:0.9rem;">${item.desc}</div>` : '';
        if (item.specs) {
            descHtml = `<ul style="padding-left:20px;color:#666;font-size:0.85rem;margin:5px 0;">
                ${item.specs.slice(0, 2).map(s=>`<li>${s}</li>`).join('')}
                ${item.specs.length > 2 ? '<li>...更多規格</li>' : ''}
            </ul>`;
        }
        
        // 自動補全圖片路徑
        let imgSrc = 'images/' + item.img;

        c.innerHTML += `
            <div class="product-card">
                <div class="card-img-box">
                    <img src="${imgSrc}" alt="${item.title}">
                </div>
                <div class="card-body">
                    <div class="card-title">${item.title}</div>
                    ${descHtml}
                    <div style="margin-top:auto; padding-top:10px; border-top:1px dashed #eee;">
                        ${priceHtml}
                    </div>
                    <button class="btn-primary" onclick="${btnAction}">
                        ${type === 'brand' ? '加入購物車' : '查看詳情'}
                    </button>
                </div>
            </div>`;
    });
}

// 品牌促銷 (Data Update)
function initPromos() {
    const data = [
        { id: 'p1', title: "技嘉 AORUS 全家餐", desc: "Z790 AORUS ELITE AX 主機板 + RTX 4070 EAGLE OC 12G 顯示卡", price: 28900, old: 32000, img: "品牌促銷1.jpg" },
        { id: 'p2', title: "ROG 信仰組", desc: "ROG Strix Helios 機殼 + ROG Strix LC II 360 水冷 + ROG 850W 電源", price: 24990, old: 28500, img: "品牌促銷2.png" },
        { id: 'p3', title: "微星龍魂信仰大全餐", desc: "B760 TOMAHAWK WIFI + RTX 4060 Ti + MAG 360 水冷 + A850G 電源 + VELOX 100R 機殼", price: 32900, old: 39500, img: "品牌促銷3.jpg" },
        { id: 'p4', title: "AMD 真香組", desc: "AMD Ryzen 7 7800X3D + 華碩 TUF GAMING X670E-PLUS WIFI", price: 23500, old: 26400, img: "品牌促銷4.jpg" },
        { id: 'p5', title: "SSD 極速升級包", desc: "Samsung 990 PRO 2TB PCIe 4.0 兩條組", price: 9999, old: 11200, img: "品牌促銷5.jpg" }
    ];
    renderGrid('promoGrid', data, 'brand');
}

// 套裝主機 (Data Update)
function initPrebuilts() {
    const prebuilts = [
        { id: 'pb1', title: "APEX 特戰機", specs: ["i5-12400F", "RTX 4060", "16G RAM"], price: 23900, img: "套裝主機1.jpg" },
        { id: 'pb2', title: "2077 旗艦機", specs: ["i7-13700K", "RTX 4070 Ti", "32G RAM"], price: 58900, img: "套裝主機2.png" },
        { id: 'pb3', title: "AI 運算工作站", specs: ["i9-14900K", "RTX 4090", "64G RAM"], price: 109000, img: "套裝主機3.jpg" }
    ];
    renderGrid('prebuiltGrid', prebuilts, 'prebuilt');
    window.prebuiltsData = prebuilts;
}

// 電競筆電 (Data Update)
function initLaptops() {
    const laptops = [
        { id: 'nb1', title: "ROG Strix G16", specs: ["i9-13980HX", "RTX 4060", "240Hz"], price: 48900, img: "電競筆電1.jpg" },
        { id: 'nb2', title: "GIGABYTE AORUS 15", specs: ["i7-13700H", "RTX 4070", "165Hz"], price: 52900, img: "電競筆電2.jpg" },
        { id: 'nb3', title: "MSI Raider GE78", specs: ["i9-13980HX", "RTX 4080", "240Hz"], price: 89900, img: "電競筆電3.webp" },
        { id: 'nb4', title: "ASUS TUF F15", specs: ["i7-12700H", "RTX 4050", "144Hz"], price: 32900, img: "電競筆電4.jpg" }
    ];
    renderGrid('laptopGrid', laptops, 'laptop');
    window.laptopsData = laptops;
}

// ============================
// 4. 估價系統 (Builder)
// ============================

function initBuilder() {
    const c = document.getElementById('builderRows');
    c.innerHTML = '';
    for (const [key, items] of Object.entries(db)) {
        const row = document.createElement('div');
        row.className = 'builder-row';
        row.innerHTML = `
            <div class="col-name">${labels[key] || key.toUpperCase()}</div>
            <div class="col-select">
                <select id="select-${key}" onchange="updateBuilderState('${key}'); updateBuilderTotal();" class="product-select">
                    <option value="0" data-price="0" data-stock="99" data-watts="0" data-score="0">-- 請選擇產品 --</option>
                    ${items.map(item => {
                        let stockMsg = item.stock > 0 ? `(餘:${item.stock})` : '(缺貨)';
                        let disabled = item.stock === 0 ? 'disabled' : '';
                        let style = item.stock === 0 ? 'color:#ccc' : '';
                        return `<option value="${item.id}" data-price="${item.price}" data-stock="${item.stock}" data-watts="${item.watts}" data-score="${item.score}" data-name="${item.name}" ${disabled} style="${style}">
                            $${item.price.toLocaleString()} | ${item.name} ${stockMsg}
                        </option>`;
                    }).join('')}
                </select>
            </div>
            <div class="col-qty">
                <input type="number" id="qty-${key}" value="1" min="1" max="1" onchange="updateBuilderTotal()" class="qty-input">
            </div>
            <div class="col-price" id="price-${key}">$0</div>
        `;
        c.appendChild(row);
    }
}

function updateBuilderState(key) {
    const select = document.getElementById(`select-${key}`);
    const qtyInput = document.getElementById(`qty-${key}`);
    const option = select.options[select.selectedIndex];
    const stock = parseInt(option.getAttribute('data-stock')) || 1;
    qtyInput.max = stock;
    qtyInput.value = 1;
    updateBuilderTotal();
}

function updateBuilderTotal() {
    let total = 0;
    for (const key of Object.keys(db)) {
        const select = document.getElementById(`select-${key}`);
        if (!select) continue;
        const option = select.options[select.selectedIndex];
        const price = parseInt(option.getAttribute('data-price')) || 0;
        const qtyInput = document.getElementById(`qty-${key}`);
        
        const maxStock = parseInt(qtyInput.max);
        if(parseInt(qtyInput.value) > maxStock) qtyInput.value = maxStock;
        if(parseInt(qtyInput.value) < 1) qtyInput.value = 1;

        const subtotal = price * parseInt(qtyInput.value);
        document.getElementById(`price-${key}`).textContent = `$${subtotal.toLocaleString()}`;
        if (subtotal > 0) document.getElementById(`price-${key}`).style.color = 'var(--accent)';
        
        total += subtotal;
    }
    document.getElementById('builderTotalPrice').textContent = `$${total.toLocaleString()}`;
    
    updateDashboard();
}

function filterProducts() {
    const k = document.getElementById('searchInput').value.toLowerCase().trim();
    document.querySelectorAll('.product-select').forEach(s => {
        let has = false;
        s.classList.remove('highlight-match');
        s.querySelectorAll('option').forEach((o, i) => {
            if (i === 0) return;
            if (k === '' || o.text.toLowerCase().includes(k)) {
                o.style.display = '';
                if (k !== '') { o.classList.add('highlight-option'); has = true; }
                else o.classList.remove('highlight-option');
            } else {
                o.style.display = 'none';
            }
        });
        if (has) s.classList.add('highlight-match');
    });
}

function addBuilderToCart() {
    let items = [];
    let totalPrice = 0;
    
    // 收集選單資料
    for (const key of Object.keys(db)) {
        const select = document.getElementById(`select-${key}`);
        if (!select || select.value === '0') continue;
        const option = select.options[select.selectedIndex];
        const qty = parseInt(document.getElementById(`qty-${key}`).value);
        const price = parseInt(option.getAttribute('data-price'));
        const name = option.getAttribute('data-name');
        
        // 建立商品物件
        items.push({ component: labels[key], name: name, qty: qty, price: price });
        totalPrice += price * qty;
    }
    
    // 防呆：沒選東西不能送出
    if (items.length === 0) return showToast("請至少選擇一項商品");
    
    // 1. 加入購物車
    addToCart({ 
        type: 'builder-set', 
        name: '客製化組裝電腦', 
        price: totalPrice, 
        contents: items, 
        id: 'build-' + Date.now() 
    });
    
    // 2. 重置估價單 (選單歸零)
    initBuilder();
    document.getElementById('builderTotalPrice').textContent = '$0';
    
    // 3. 【關鍵修正】強制重置儀表板為 50W
    // 因為 initBuilder 剛執行完，所有選單都是預設值(0)，
    // 這時候呼叫 updateDashboard 就會自動算回基礎瓦數 50W
    updateDashboard(); 
}

// ============================
// 5. 購物車邏輯
// ============================

function addToCart(item) {
    let existing = null;
    if (item.type !== 'builder-set') {
        existing = cart.find(x => x.id === item.id && x.type === item.type);
    }
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    updateCartCount();
    showToast(`已加入: ${item.name}`);
    renderCart();
}

function renderCart() {
    const tbody = document.getElementById('cartTableBody');
    if(!tbody) return;
    tbody.innerHTML = '';
    let finalTotal = 0;

    if (cart.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:30px">購物車目前是空的</td></tr>';
        document.getElementById('cartFinalTotal').textContent = '$0';
        return;
    }

    cart.forEach((item, index) => {
        let subtotal = item.price * item.qty;
        finalTotal += subtotal;

        let contentHtml = `<div class="cart-item-name">${item.name}</div>`;
        
        // 【關鍵修改】如果是估價組合，使用 div 確保強制換行
        if (item.type === 'builder-set') {
            contentHtml += item.contents.map(c =>
                // 這裡改成了 div，並加上 style 確保排版間距
                `<div class="cart-sub-item" style="display:block; margin-top:5px; padding-left:10px; border-left:3px solid #eee; color:#666; font-size:0.9rem;">
                    • ${c.component}: ${c.name} x${c.qty}
                 </div>`
            ).join('');
        } else if (item.details) {
            contentHtml += `<div class="cart-sub-item" style="margin-top:5px; color:#666; font-size:0.9rem;">${item.details}</div>`;
        }

        let typeLabel = {
            'brand': '品牌促銷', 'prebuilt': '套裝主機', 'laptop': '電競筆電', 'builder-set': '線上估價組合'
        }[item.type] || '其他';

        tbody.innerHTML += `
            <tr>
                <td>${contentHtml}</td>
                <td><span style="background:#eee;padding:2px 6px;border-radius:4px;font-size:0.8rem">${typeLabel}</span></td>
                <td>$${item.price.toLocaleString()}</td>
                <td>
                    <input type="number" class="qty-input" value="${item.qty}" min="1" onchange="updateCartQty(${index}, this.value)">
                </td>
                <td style="color:var(--accent);font-weight:bold">$${subtotal.toLocaleString()}</td>
                <td><button class="btn-delete" onclick="removeFromCart(${index})">刪除</button></td>
            </tr>
        `;
    });
    document.getElementById('cartFinalTotal').textContent = `$${finalTotal.toLocaleString()}`;
}

function updateCartQty(index, val) {
    if (val < 1) val = 1;
    cart[index].qty = parseInt(val);
    renderCart();
    updateCartCount();
}

function removeFromCart(index) {
    if (confirm('確定移除此商品？')) {
        cart.splice(index, 1);
        renderCart();
        updateCartCount();
    }
}

function updateCartCount() {
    let count = cart.reduce((acc, item) => acc + item.qty, 0);
    document.getElementById('cartCount').textContent = count;
}

// ============================
// 6. 視窗與結帳 (Modals & Checkout)
// ============================

function showDetail(type, id) {
    let item;
    if (type === 'prebuilt') item = window.prebuiltsData.find(x => x.id === id);
    if (type === 'laptop') item = window.laptopsData.find(x => x.id === id);

    document.getElementById('dtTitle').textContent = item.title;
    document.getElementById('dtPrice').textContent = `$${item.price.toLocaleString()}`;
    let imgSrc = 'images/' + item.img;
    
    document.getElementById('dtContent').innerHTML = `
        <div class="modal-img-wrapper"><img src="${imgSrc}"></div>
        <div class="product-specs">
            <h4 style="color:#666;margin-bottom:10px">詳細規格：</h4>
            <div class="pb-details-list">
                <ul>
                    ${item.specs.map(s => `<li>${s}</li>`).join('')}
                    <li>Win11 Home 正版授權</li>
                    <li>兩年原廠保固</li>
                </ul>
            </div>
        </div>`;
    
    const btn = document.getElementById('dtBuyBtn');
    btn.onclick = function() {
        addToCart({ type: type, name: item.title, price: item.price, id: item.id, details: item.specs.join(', ') });
        closeModal('detailModal');
    };
    document.getElementById('detailModal').style.display = 'block';
}

function openCheckoutModal() {
    if (cart.length === 0) return showToast('購物車是空的');
    if (!isLoggedIn) {
        showToast('請先登入會員');
        toggleAuth();
        return;
    }

    const summaryBox = document.getElementById('orderSummaryContent');
    summaryBox.innerHTML = '';

    const sets = cart.filter(x => x.type === 'builder-set');
    const promos = cart.filter(x => x.type === 'brand');
    const systems = cart.filter(x => x.type === 'prebuilt' || x.type === 'laptop');

    if (sets.length > 0) {
        summaryBox.innerHTML += `<div class="order-group-title" style="background:#eee;padding:5px;margin-top:10px">線上估價細項</div>`;
        sets.forEach(item => {
            summaryBox.innerHTML += `
                <div style="padding:10px;border-bottom:1px solid #eee">
                    <div style="font-weight:bold">組合: ${item.name} ($${item.price.toLocaleString()}) x${item.qty}</div>
                    ${item.contents.map(c => `<div style="font-size:0.85rem;color:#666;margin-left:10px">- ${c.component}: ${c.name} x${c.qty}</div>`).join('')}
                </div>`;
        });
    }

    if (promos.length > 0) {
        summaryBox.innerHTML += `<div class="order-group-title" style="background:#eee;padding:5px;margin-top:10px">品牌促銷</div>`;
        promos.forEach(item => {
            summaryBox.innerHTML += `<div style="padding:10px;border-bottom:1px solid #eee;display:flex;justify-content:space-between"><span>${item.name}</span><span>$${item.price.toLocaleString()} x${item.qty}</span></div>`;
        });
    }

    if (systems.length > 0) {
        summaryBox.innerHTML += `<div class="order-group-title" style="background:#eee;padding:5px;margin-top:10px">主機/筆電</div>`;
        systems.forEach(item => {
            summaryBox.innerHTML += `<div style="padding:10px;border-bottom:1px solid #eee;display:flex;justify-content:space-between"><span>${item.name}</span><span>$${item.price.toLocaleString()} x${item.qty}</span></div>`;
        });
    }

    let total = cart.reduce((a, b) => a + (b.price * b.qty), 0);
    document.getElementById('checkoutFinalTotal').textContent = `$${total.toLocaleString()}`;
    document.getElementById('checkoutModal').style.display = 'block';
    calculateInstallment();
}

function calculateInstallment() {
    let totalStr = document.getElementById('checkoutFinalTotal').textContent.replace(/[$,]/g, '');
    let total = parseInt(totalStr);
    let months = parseInt(document.getElementById('installmentSelect').value);
    let rate = 0;
    if (months === 12) rate = 0.03;
    if (months === 24) rate = 0.05;

    let finalTotal = Math.floor(total * (1 + rate));
    let perMonth = Math.floor(finalTotal / months);

    let html = `<p style="color:var(--primary);font-weight:bold;font-size:1.1rem;margin-top:10px">每期應付: $${perMonth.toLocaleString()}</p>`;
    if (rate > 0) html += `<p style="font-size:0.8rem;color:#666">含利息總金額: $${finalTotal.toLocaleString()}</p>`;
    document.getElementById('installmentResult').innerHTML = html;
}

function submitOrder() {
    const name = document.getElementById('cxName').value;
    const phone = document.getElementById('cxPhone').value;
    const addr = document.getElementById('cxAddr').value;
    if (!name || !phone || !addr) return alert('請完整填寫收件資訊');

    alert(`訂單已送出！\n感謝 ${name} 的購買。\n我們將盡快配送至 ${addr}。`);
    
    // 清空購物車
    cart = [];
    updateCartCount();
    renderCart();
    
    // 【新增】順便把估價單和儀表板也清空重置
    initBuilder();
    document.getElementById('builderTotalPrice').textContent = '$0';
    updateDashboard(); // 重置回 50W
    
    closeModal('checkoutModal');
    switchSection('section-home');
}

// --- 登入 & 工具 ---
function toggleAuth() {
    if (isLoggedIn) {
        if (confirm("確定登出？")) {
            isLoggedIn = false;
            document.getElementById('authBtn').textContent = '會員登入';
            document.getElementById('welcomeMsg').textContent = '';
            showToast('已登出');
        }
    } else {
        document.getElementById('loginModal').style.display = 'block';
    }
}

function login() {
    const u = document.getElementById('loginUser').value;
    const p = document.getElementById('loginPass').value;
    if (u === 'user' && p === '1234') {
        isLoggedIn = true;
        closeModal('loginModal');
        document.getElementById('authBtn').textContent = '登出';
        document.getElementById('welcomeMsg').textContent = `Hi, ${u}`;
        showToast('登入成功');
    } else {
        alert('帳號密碼錯誤');
    }
}

function closeModal(id) { document.getElementById(id).style.display = 'none'; }
function showToast(m) {
    const t = document.getElementById('toast');
    t.textContent = m;
    t.className = 'toast show';
    setTimeout(() => t.className = t.className.replace('show', ''), 3000);
}
window.onclick = e => { if (e.target.classList.contains('modal')) e.target.style.display = 'none'; }