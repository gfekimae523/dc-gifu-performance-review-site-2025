
document.addEventListener('DOMContentLoaded', () => {

    const codeSequences = [
        `Welcome to D-Career IT Expert, Gifu Office.

`,
        `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>ディーキャリア 業績報告会 2025</title>
  <link rel="stylesheet" href="css/index.css">
  <script src="js/index.js"></script>
</head>
`,
        `<body>
  <header class="header">
`,
        `    <a href="#" class="header__logo">業績報告会2025</a>
`,
        `    <nav class="nav">
      <ol class="nav__list">
        <li>目的</li>
        <li>流れ</li>
        <li>アンケート</li>
      </ol>
    </nav>
  </header>
`,
        `  <main class="main">
    <section class="hero">
      <div class="hero__bg-container"></div>
`,
        `      <h1 class="hero__catch-copy">
        あなたのコードが<br>
        世界をつくる
      </h1>
`,
        `     <div class="hero__event-details"></div>
    </section>
`,
        `    <section class="purpose">
      <div class="purpose__content">
        <h2 class="purpose__title section-title">報告会の目的</h2>
        <p class="purpose__discription"></p>
      </div>
      <div class="purpose__image-wrapper">
        <img class="purpose__image">
      </div>
    </section>
`,
        `    <section id="flow" class="flow">
      <h2 class="flow__title section-title">当日の流れ</h2>
      <ol class="flow__list"></ol>
    </section>
`,
        `    <section id="closing" class="closing">
      <h2 class="closing__title section-title">終わりに</h2>
      <p class="closing__discription"></p>
    </section>
`,
        `  <footer class="footer">
    <p class="footer__copyright">&copy; 2025 ディーキャリア岐阜駅前オフィス All rights reserved.</p>
  </footer>
</body>
</html>
`,];

    let codeSequence = ``;
    for (let i = 0; i < codeSequences.length; i++) {
        codeSequence += codeSequences[i];
    }
    let triggers = [];

    const typedCodeElement = document.querySelector('.console__typed-code');
    const cursorElement = document.querySelector('.console__cursor');
    let charIndex = 0;
    const typingSpeed = 16; // 1文字あたりの表示速度（ミリ秒）

    let currentLineIndex = 0;
    let isCreating = false;

    const images = document.querySelectorAll('.hero__bg-image');
    let current = 0;


    function calculateTriggerIndex() {
        for (let i = 0; i < codeSequences.length; i++) {
            if (i == 0) {
                triggers[0] = codeSequences[0].length;
            } else {
                triggers[i] = triggers[i - 1] + codeSequences[i].length;
            }
        }
    }

    function createWorld() {
        if (isCreating) return;
        isCreating = true;

        // 初期画面をフェードアウト
        document.querySelector('.initial-screen').style.opacity = '0';

        setTimeout(() => {
            document.querySelector('.initial-screen').style.display = 'none';
            document.querySelector('.console').classList.add('active');
            typeWriter();
        }, 1000);
    }

    function typeWriter() {
        if (charIndex < codeSequence.length) {
            // 現在の文字をtypedCodeElementに追加
            typedCodeElement.textContent += codeSequence.charAt(charIndex);

            // コンソールを自動スクロールして、最新の行が見えるようにする
            const consoleBody = document.querySelector('.console__body');
            consoleBody.scrollTop = consoleBody.scrollHeight;
            checkTriggers(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            setTimeout(closeConsole, 2000);
            setInterval(showNextImage, 5000);
            return;
        }
    }

    function checkTriggers(index) {
        switch (index) {
            case triggers[0]:

                break;
            case triggers[1]:
                setTimeout(() => {
                    showElement('.header');
                    createMagicEffect('.header');
                }, 500);
                break;
            case triggers[2]:
                setTimeout(() => {
                    showElement('.header__logo');
                    createMagicEffect('.header__logo');
                }, 500);
                break;
            case triggers[3]:
                setTimeout(() => {
                    showElement('.nav');
                    createMagicEffect('.nav');
                }, 500);
                break;
            case triggers[4]:
                setTimeout(() => {
                    showElement('.hero');
                    createMagicEffect('.hero');
                }, 500);
                break;
            case triggers[5]:
                setTimeout(() => {
                    showElement('.hero__catch-copy');
                    createMagicEffect('.hero__catch-copy');
                }, 500);
                break;
            case triggers[6]:
                setTimeout(() => {
                    showElement('.hero__event-details');
                    createMagicEffect('.hero__event-details');
                }, 500);
                break;
            case triggers[7]:
                setTimeout(() => {
                    showElement('.purpose');
                    createMagicEffect('.purpose');
                }, 500);
                break;
            case triggers[8]:
                setTimeout(() => {
                    showElement('.flow');
                    createMagicEffect('.flow');
                }, 500);
                break;
            case triggers[9]:
                setTimeout(() => {
                    showElement('.closing');
                    createMagicEffect('.closing');
                }, 500);
                break;
            case triggers[10]:
                setTimeout(() => {
                    showElement('.footer');
                    createMagicEffect('.footer');
                }, 500);
                break;
        }

    }

    function showElement(selector) {
        const element = document.querySelector(selector);
        element.classList.add('visible');
    }

    function createMagicEffect(element) {

    }

    function createParticle(container, startX, endX, phase) {

    }

    function closeConsole() {
        const console = document.querySelector('.console');
        console.style.opacity = '0';
        console.style.transform = 'translateX(100px)';

        setTimeout(() => {
            console.style.display = 'none';
            activateInteractions();
        }, 800);
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
        console.log("hoge");
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }


    calculateTriggerIndex();

    document.querySelector('.initial-screen__create-world-button').addEventListener('click', () => {
        createWorld();
    });

    // 初期表示
    images[current].classList.add('active');





    // function startTyping() {
    //     const consoleBody = document.getElementById('consoleBody');
    //     const cursor = document.getElementById('cursor');

    //     function typeNextLine() {
    //         if (currentLineIndex >= codeSequence.length) {
    //             // 全て完了
    //             cursor.style.display = 'none';
    //             setTimeout(closeConsole, 2000);
    //             return;
    //         }

    //         const line = codeSequence[currentLineIndex];
    //         const lineDiv = document.createElement('div');
    //         lineDiv.className = 'code-line';
    //         lineDiv.textContent = line;

    //         consoleBody.insertBefore(lineDiv, cursor);

    //         // スクロールを最下部に
    //         consoleBody.scrollTop = consoleBody.scrollHeight;

    //         // 特定のコードに反応してUI要素を表示
    //         checkForElementTriggers(line);

    //         currentLineIndex++;

    //         // 次の行までの間隔（空行は短く、コードは長く）
    //         const delay = line.trim() === '' ? 200 : (line.includes('//') ? 800 : 600);
    //         setTimeout(typeNextLine, delay);
    //     }

    //     typeNextLine();
    // }

    // function checkForElementTriggers(line) {
    //     if (line.includes('<header>')) {
    //         setTimeout(() => {
    //             showElement('header');
    //             createMagicEffect('header');
    //         }, 500);
    //     } else if (line.includes('<section class="hero">')) {
    //         setTimeout(() => {
    //             showElement('hero');
    //             createMagicEffect('hero');
    //         }, 500);
    //     } else if (line.includes('<section class="purpose">')) {
    //         setTimeout(() => {
    //             showElement('purpose');
    //             createMagicEffect('purpose');
    //         }, 500);
    //     } else if (line.includes('<footer>')) {
    //         setTimeout(() => {
    //             showElement('footer');
    //             createMagicEffect('footer');
    //         }, 500);
    //     }
    // }

    // function showElement(elementId) {
    //     const element = document.getElementById(elementId);
    //     element.classList.add('visible');
    // }

    // function createMagicEffect(elementId) {
    //     const element = document.getElementById(elementId);
    //     const rect = element.getBoundingClientRect();

    //     // 魔法の波を作成
    //     const wave = document.createElement('div');
    //     wave.className = 'magic-wave';
    //     element.appendChild(wave);

    //     // パーティクルを生成
    //     const particleCount = 15;
    //     const startX = 0;
    //     const endX = rect.width;
    //     const duration = 2000;

    //     for (let i = 0; i < particleCount; i++) {
    //         setTimeout(() => {
    //             createParticle(element, startX, endX, i * 0.1);
    //         }, i * 100);
    //     }

    //     // 波を削除
    //     setTimeout(() => {
    //         if (wave.parentNode) {
    //             wave.parentNode.removeChild(wave);
    //         }
    //     }, duration);
    // }

    // function createParticle(container, startX, endX, phase) {
    //     const particle = document.createElement('div');
    //     particle.className = 'particle';

    //     const amplitude = 100; // サインカーブの振幅
    //     const frequency = 0.02; // 周波数

    //     particle.style.left = startX + 'px';
    //     particle.style.top = '20px';

    //     container.appendChild(particle);

    //     let x = startX;
    //     let progress = 0;
    //     const speed = 2;

    //     function animateParticle() {
    //         if (progress >= 1) {
    //             if (particle.parentNode) {
    //                 particle.parentNode.removeChild(particle);
    //             }
    //             return;
    //         }

    //         progress += 0.01;
    //         x = startX + (endX - startX) * progress;
    //         const y = 20 + amplitude * Math.sin((x * frequency) + phase);

    //         particle.style.left = x + 'px';
    //         particle.style.top = y + 'px';
    //         particle.style.transform = `rotate(${progress * 360}deg)`;

    //         requestAnimationFrame(animateParticle);
    //     }

    //     animateParticle();
    // }

    // function closeConsole() {
    //     const consoleDialog = document.getElementById('consoleDialog');
    //     consoleDialog.style.opacity = '0';
    //     consoleDialog.style.transform = 'translateX(100px)';

    //     setTimeout(() => {
    //         consoleDialog.style.display = 'none';
    //         activateInteractions();
    //     }, 800);
    // }

    // function activateInteractions() {
    //     // ナビゲーションリンクをアクティブに
    //     const navLinks = document.querySelectorAll('nav a');
    //     navLinks.forEach(link => link.classList.add('active'));

    //     // CTAボタンをアクティブに
    //     document.getElementById('ctaButton').classList.add('active');

    //     // スムーススクロールを有効化
    //     document.querySelectorAll('a[href^="#"]').forEach(link => {
    //         link.addEventListener('click', function (e) {
    //             e.preventDefault();
    //             const target = document.querySelector(this.getAttribute('href'));
    //             if (target) {
    //                 target.scrollIntoView({
    //                     behavior: 'smooth',
    //                     block: 'start'
    //                 });
    //             }
    //         });
    //     });
    // }

});




window.addEventListener('load', () => {

    // スクロールアニメーション
    // function animateOnScroll() {
    //     const elements = document.querySelectorAll('.fade-in');
    //     elements.forEach(element => {
    //         const elementTop = element.getBoundingClientRect().top;
    //         const elementVisible = 120;

    //         if (elementTop < window.innerHeight - elementVisible) {
    //             element.classList.add('visible');
    //         }
    //     });
    // }

    // window.addEventListener('scroll', animateOnScroll);
    // animateOnScroll(); // 初期実行


    // setInterval(showNextImage, 5000); // 5秒ごとに切り替え

    // スムーススクロール
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const target = document.querySelector(this.getAttribute('href'));
    //         if (target) {
    //             target.scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start'
    //             });
    //         }
    //     });
    // });


    // const canvas = document.getElementById('magic-canvas');
    // const ctx = canvas.getContext('2d');
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    // let particles = [];
    // let time = 0;

    // function getRandomPastelColor() {
    //     const r = Math.floor(155 + Math.random() * 100);
    //     const g = Math.floor(155 + Math.random() * 100);
    //     const b = Math.floor(155 + Math.random() * 100);
    //     return `${r},${g},${b}`;
    // }

    // function createParticle(x, y) {
    //     particles.push({
    //         x,
    //         y,
    //         vx: (Math.random() - 0.5) * 1,
    //         vy: (Math.random() - 0.5) * 1,
    //         alpha: 1,
    //         size: Math.random() * 3 + 3,
    //         color: getRandomPastelColor(),
    //         rotation: Math.random() * Math.PI * 2  // ← 角度（0〜360°）をランダムに
    //     });
    // }

    // function updateParticles() {
    //     particles.forEach(p => {
    //         p.x += p.vx;
    //         p.y += p.vy;
    //         p.alpha -= 0.02;
    //     });
    //     particles = particles.filter(p => p.alpha > 0);
    // }

    // function drawStar(ctx, x, y, radius, points, inset, color, alpha, rotation = 0) {
    //     ctx.save();
    //     ctx.beginPath();
    //     ctx.translate(x, y);
    //     ctx.rotate(rotation);  // ← ランダムな角度で回転
    //     ctx.moveTo(0, 0 - radius);
    //     for (let i = 0; i < points; i++) {
    //         ctx.rotate(Math.PI / points);
    //         ctx.lineTo(0, 0 - (radius * inset));
    //         ctx.rotate(Math.PI / points);
    //         ctx.lineTo(0, 0 - radius);
    //     }
    //     ctx.closePath();
    //     ctx.fillStyle = `rgba(${color}, ${alpha})`;
    //     ctx.shadowBlur = 10;
    //     ctx.shadowColor = `rgba(${color}, ${alpha})`;
    //     ctx.fill();
    //     ctx.restore();
    // }


    // function drawParticles() {
    //     particles.forEach(p => {
    //         drawStar(ctx, p.x, p.y, p.size, 5, 0.5, p.color, p.alpha, p.rotation);
    //     });
    // }

    // function animate() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);

    //     let y = time / 2;
    //     let x = canvas.width / 2 + Math.sin(time * 0.01) * 300;
    //     createParticle(x, y);

    //     drawParticles();
    //     updateParticles();

    //     time += 2;
    //     if (y < canvas.height) {
    //         requestAnimationFrame(animate);
    //     }
    // }

    // animate();







});