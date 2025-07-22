// 定数の宣言
// 1文字あたりの表示速度（ミリ秒）
const TYPING_SPEED = 12;


// DOM要素
let openingElement;
let openingButton;
let consoleElement;
let consoleRedButton;
let consoleYellowButton;
let consoleGreenButton;
let consoleCodeElement;
let consoleBodyElement;
let canvasElement;
let ctx;
let heroBgImages;



let isCreating = false;
let hasExecuted = false;

// consoleの処理
let charIndex = 0;

// canvasの描画処理
let particles = [];
let time = 0;
let gradientHeight;
let gradientMargin;

// heroのクロスフェード
let current = 0;



function init() {
    cacheDomElements();
    resizeCanvas();
    setupEventListeners();

    heroBgImages[0].classList.add('active');
}

function cacheDomElements() {
    openingElement = document.querySelector('.opening');
    openingButton = document.querySelector('.opening__button');
    consoleElement = document.querySelector('.console');
    consoleRedButton = document.querySelector('.console__red-button');
    consoleYellowButton = document.querySelector('.console__yellow-button');
    consoleGreenButton = document.querySelector('.console__green-button');
    consoleCodeElement = document.querySelector('.console__code');
    consoleBodyElement = document.querySelector('.console__body');
    canvasElement = document.querySelector('.canvas');
    ctx = canvasElement.getContext('2d');

    heroBgImages = document.querySelectorAll('.hero__bg-image');
}

function setupEventListeners() {
    window.addEventListener('resize', resizeCanvas);
    openingButton.addEventListener('click', () => {
        createWorld();
    });
    consoleRedButton.addEventListener('click', () => {
        handleRedButtonClick();
    });
    consoleYellowButton.addEventListener('click', () => {
        handleYellowButtonClick();
    });
    consoleGreenButton.addEventListener('click', () => {
        handleGreenButtonClick();
    });
}

function resizeCanvas() {
    console.log("DOMContentLoaded - document.documentElement.scrollHeight:", document.documentElement.scrollHeight);
    console.log("DOMContentLoaded - document.body.scrollHeight:", document.body.scrollHeight);
    console.log("DOMContentLoaded - window.innerHeight:", window.innerHeight);

    canvasElement.width = window.innerWidth;
    canvasElement.height = document.body.scrollHeight;

    gradientHeight = document.body.scrollHeight;
    gradientMargin = gradientHeight / 10;
}

function createWorld() {
    if (isCreating) return;
    isCreating = true;

    // 初期画面をフェードアウト
    openingElement.style.opacity = '0';
    resizeCanvas();
    drawMask(0);

    setTimeout(() => {
        window.scroll(0, 0);
        openingElement.style.display = 'none';
        consoleElement.classList.remove('console--hidden');
        consoleElement.classList.add('console--visible');
        document.body.style.overflowY = 'auto';
        typeWriter();
    }, 1000);
    setTimeout(() => {
        animate();
    }, 5000);
}

function typeWriter() {
    const CODE_SEQUENCE =
        `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>ディーキャリア 業績報告会 2025</title>
  <link rel="stylesheet" href="css/index.css">
  <script src="js/index.js"></script>
</head>
<body>
  <header class="header">
    <img class="header__logo" src="img/index/logo.webp">
  </header>
  <main class="main">
    <section class="hero">
      <div class="hero__bg-container"></div>
      <h1 class="hero__catch-copy">
        強みを仕事に<br>
        弱みに工夫を！
      </h1>
    </section>
    <section class="news">
      <div class="news__content">
        <h2 class="news__title">IT 始めました</h2>
        <p class="news__discription"></p>
      </div>
      <img class="news__image" src="img/index/news_1.jpg">
    </section>
    <section class="event">
      <div class="event__content">
        <h2 class="event__title">業績報告会2025</h2>
        <p class="event__discription"></p>
        <div class="event__details"></div>
      </div>
      <img class="event__image" src="img/index/event_1.png">
    </section>
    <section class="flow">
      <div class="flow__content">
        <h2 class="flow__title">プログラム</h2>
        <ol class="flow__list"></ol>
      </div>
      <img class="flow__image" src="img/index/flow_1.jpg">
    </section>
    <section id="closing" class="closing">
      <div class=closing__content">
        <p class="closing__discription"></p>
      </div>
      <img class="closing__image" src="img/index/closing.jpg">
    </section>
  <footer class="footer">
    <p class="footer__copyright">&copy; 2025 ディーキャリア岐阜駅前オフィス All rights reserved.</p>
  </footer>
</body>
</html>
`;

    if (charIndex < CODE_SEQUENCE.length) {
        // 現在の文字をtypedCodeElementに追加
        consoleCodeElement.textContent += CODE_SEQUENCE.charAt(charIndex);
        // コンソールを自動スクロールして、最新の行が見えるようにする
        consoleBodyElement.scrollTop = consoleBodyElement.scrollHeight;
        charIndex++;
        setTimeout(typeWriter, TYPING_SPEED);
    } else {
        setTimeout(endAnimation, 2000);
        //setInterval(showNextImage, 5000);
        return;
    }
}

function resetConsoleStateClasses() {
    consoleElement.classList.remove('console--hidden', 'console--visible', 'console--maximized', 'console--minimized');
}

function handleRedButtonClick() {
    endAnimation();
}

function handleYellowButtonClick() {
    if (consoleElement.classList.contains('console--minimized')) {
        resetConsoleStateClasses();
        consoleElement.classList.add('console--visible');
    } else {
        resetConsoleStateClasses();
        consoleElement.classList.add('console--minimized');
    }
}

function handleGreenButtonClick() {
    if (consoleElement.classList.contains('console--maximized')) {
        resetConsoleStateClasses();
        consoleElement.classList.add('console--visible');
    } else {
        resetConsoleStateClasses();
        consoleElement.classList.add('console--maximized');
    }
}



function animate() {
    //再描画
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    let vy =canvasElement.height / 1000;

    let y = time * vy;
    let x = canvasElement.width / 2 + Math.sin(time * 0.02) * canvasElement.width / 2 * 0.94;
    createParticle(x, y);
    createParticle(canvasElement.width - x, y);

    drawMask(y);
    drawParticles();
    updateParticles();

    time += 1;
    if (y < canvasElement.height + 200) {
        requestAnimationFrame(animate);
    } else {

    }

}



function drawMask(offsetY) {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    const grad = ctx.createLinearGradient(0, offsetY - gradientMargin, 0, offsetY + gradientHeight);
    grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
    grad.addColorStop(0.08, 'rgba(255,255,255,1)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, offsetY - gradientMargin, canvasElement.width, gradientHeight + gradientMargin);
}

function createParticle(x, y) {
    particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        alpha: 1,
        size: Math.random() * 10 + 5,
        color: getRandomPastelColor(),
        rotation: Math.random() * Math.PI * 2  // ← 角度（0〜360°）をランダムに
    });
}

function updateParticles() {
    const PARTICLE_FADE_SPEED = 0.02;

    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= PARTICLE_FADE_SPEED;
    });
    particles = particles.filter(p => p.alpha > 0);
}

function drawParticles() {
    particles.forEach(p => {
        drawStar(ctx, p.x, p.y, p.size, 0.5, p.color, p.alpha, p.rotation);
    });
}

function drawStar(ctx, x, y, radius, inset, color, alpha, rotation = 0) {
    const STAR_POINTS = 5;

    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate(rotation);  // ← ランダムな角度で回転
    ctx.moveTo(0, 0 - radius);
    for (let i = 0; i < STAR_POINTS; i++) {
        ctx.rotate(Math.PI / STAR_POINTS);
        ctx.lineTo(0, 0 - (radius * inset));
        ctx.rotate(Math.PI / STAR_POINTS);
        ctx.lineTo(0, 0 - radius);
    }
    ctx.closePath();
    ctx.fillStyle = `rgba(${color}, ${alpha})`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = `rgba(${color}, ${alpha})`;
    ctx.fill();
    ctx.restore();
}

function getRandomPastelColor() {
    // RGBの中から一つを強く出す
    const base = 200 + Math.floor(Math.random() * 56); // 200〜255
    const mid = 150 + Math.floor(Math.random() * 56); // 150〜205
    const low = 100 + Math.floor(Math.random() * 56); // 100〜155

    // RGBの順番をランダムに並び替え
    const arr = [base, mid, low];
    const [r, g, b] = arr.sort(() => Math.random() - 0.5);

    return `${r},${g},${b}`;
}


function endAnimation() {
    if (!hasExecuted) { // まだ実行されていない場合のみ
        consoleElement.classList.add('console--hidden');
        canvasElement.classList.add('canvas--hidden');

        activateInteractions();
        setInterval(showNextImage, 5000);

        setTimeout(() => {
            consoleElement.style.display = 'none';
            canvasElement.style.display = 'none';
        }, 800);
        hasExecuted = true; // 実行後フラグをtrueに設定
    } else {

    }
    // const console = document.querySelector('.console');
    // console.style.opacity = '0';
    // console.style.transform = 'translateX(100px)';

}

function activateInteractions() {
    // ナビゲーションリンクをアクティブに
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.add('active'));


    // スムーススクロールを有効化
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // クリック時にデフォルトのジャンプ動作を止める
            e.preventDefault();

            if (targetId === '#' || targetId === '') {
                // href="#" のときは、ページトップへスムーズにスクロール
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // 対象の要素があるならそこへスムーズにスクロール
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

function showNextImage() {
    heroBgImages[current].classList.remove('active');
    current = (current + 1) % heroBgImages.length;
    heroBgImages[current].classList.add('active');
}


document.addEventListener('DOMContentLoaded', () => {
    init();
});
