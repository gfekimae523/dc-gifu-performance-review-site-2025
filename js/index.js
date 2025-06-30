
document.addEventListener('DOMContentLoaded', () => {


    const codeSequence1 = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ディーキャリア 業績報告会 2025</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="js/index.js"></script>
</head>
`;

    const codeSequence2 = `
<header class="header">
    <a href="#" class="header__logo">
        業績報告会2025
    </a>
    <nav class="nav">
        <ol class="nav__list">
            <li class="nav__item"><a href="#purpose">目的</a></li>
            <li class="nav__item"><a href="#flow">流れ</a></li>
            <li class="nav__item"><a href="#survey">アンケート</a></li>
        </ol>
    </nav>
</header>`;
    const codeSequence3 = ``;
    const codeSequence4 = ``;
    const codeSequence5 = ``;

    const codeSequences = [
`create index.html ...

`,
`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ディーキャリア 業績報告会 2025</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="js/index.js"></script>
</head>

`,
`<body>
    <header class="header">
        <a href="#" class="header__logo">
            業績報告会2025
        </a>
`,
`        <nav class="nav">
            <ol class="nav__list">
                <li class="nav__item"><a href="#purpose">目的</a></li>
                <li class="nav__item"><a href="#flow">流れ</a></li>
                <li class="nav__item"><a href="#survey">アンケート</a></li>
            </ol>
        </nav>
    </header>
`,
`    <main class="main">
        <section id="hero" class="hero">
            <div class="hero__bg-container">
                <div class="hero__bg-image"></div>
                <div class="hero__bg-image"></div>
                <div class="hero__bg-image"></div>
            </div>
`,
`            <h1 class="hero__catch-copy">
                あなたのコードが<br>
                世界をつくる
            </h1>
`,
`            <div class="hero__event-details"></div>
        </section>
`,
`<header class="header">
    <a href="#" class="header__logo">
        業績報告会2025
    </a>
`,
`<header class="header">
    <a href="#" class="header__logo">
        業績報告会2025
    </a>
`,
`<header class="header">
    <a href="#" class="header__logo">
        業績報告会2025
    </a>
`,
`<header class="header">
    <a href="#" class="header__logo">
        業績報告会2025
    </a>
`,
`<header class="header">
    <a href="#" class="header__logo">
        業績報告会2025
    </a>
`,
`<header class="header">
    <a href="#" class="header__logo">
        業績報告会2025
    </a>
`,
`<header class="header">
    <a href="#" class="header__logo">
        業績報告会2025
    </a>
`,
    ];

    let codeSequence = ``;
    for (let i=0; i<codeSequences.length; i++) {
        codeSequence += codeSequences[i];
    }

    const typedCodeElement = document.querySelector('.console__typed-code');
    const cursorElement = document.querySelector('.console__cursor');
    let charIndex = 0;
    const typingSpeed = 20; // 1文字あたりの表示速度（ミリ秒）

    

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
            // 全ての文字がタイプされたら、カーソルの点滅を続ける
            // (CSSアニメーションが適用されているため、特別な処理は不要)
        }
    }

    let triggers = [];

    function calculateTriggerIndex() {
        for (let i=0; i<codeSequences.length; i++) {
            if (i == 0) {
                triggers[0] = codeSequences[0].length;
            } else {
                triggers[i] = triggers[i-1] + codeSequences[i].length;
            }
        }
    }
    calculateTriggerIndex();

    function checkTriggers(index) {
        if (index == triggers[1]) {
            // alert('ヘッダー生成');
            // document.querySelector('.header').classList.remove('invisible');
            document.querySelector('.header').style.opacity = '1';
        } else if (index == triggers[2]) {
            // alert('ヒーロー生成');
        }
    }






    // const codeSequence = [
    //     '// 世界を創造する魔法が始まります...',
    //     '',
    //     '<!DOCTYPE html>',
    //     '<html lang="ja">',
    //     '<head>',
    //     '    <meta charset="UTF-8">',
    //     '    <title>魔法のウェブサイト</title>',
    //     '</head>',
    //     '<body>',
    //     '',
    //     '// ヘッダーを召喚...',
    //     '<header>',
    //     '    <nav>',
    //     '        <ul>',
    //     '            <li><a href="#home">ホーム</a></li>',
    //     '            <li><a href="#about">私たちについて</a></li>',
    //     '            <li><a href="#services">サービス</a></li>',
    //     '            <li><a href="#contact">お問い合わせ</a></li>',
    //     '        </ul>',
    //     '    </nav>',
    //     '</header>',
    //     '',
    //     '// ヒーローセクションを創造...',
    //     '<section class="hero">',
    //     '    <h1>魔法のようなウェブ体験</h1>',
    //     '    <p>コードから生まれる無限の可能性</p>',
    //     '    <a href="#purpose" class="cta-button">始める</a>',
    //     '</section>',
    //     '',
    //     '// 使命セクションを構築...',
    //     '<section class="purpose">',
    //     '    <h2>私たちの使命</h2>',
    //     '    <div class="purpose-grid">',
    //     '        <div class="purpose-item">',
    //     '            <h3>革新</h3>',
    //     '            <p>最新の技術を使って...</p>',
    //     '        </div>',
    //     '        <div class="purpose-item">',
    //     '            <h3>創造</h3>',
    //     '            <p>アイデアを現実に...</p>',
    //     '        </div>',
    //     '        <div class="purpose-item">',
    //     '            <h3>体験</h3>',
    //     '            <p>ユーザーが感動する...</p>',
    //     '        </div>',
    //     '    </div>',
    //     '</section>',
    //     '',
    //     '// フッターで完成...',
    //     '<footer>',
    //     '    <p>&copy; 2025 魔法のウェブ体験</p>',
    //     '</footer>',
    //     '',
    //     '</body>',
    //     '</html>',
    //     '',
    //     '// 世界の創造が完了しました！',
    //     '// 魔法はここから始まります...'
    // ];

    let currentLineIndex = 0;
    let isCreating = false;

    document.querySelector('.initial-screen__create-world-button').addEventListener('click', () => {
        createWorld();
    });

    function createWorld() {
        if (isCreating) return;
        isCreating = true;

        // 初期画面をフェードアウト
        document.querySelector('.initial-screen').style.opacity = '0';

        setTimeout(() => {
            document.querySelector('.initial-screen').style.display = 'none';
            document.querySelector('.console').classList.add('active');
            typeWriter();
        }, 500);
    }

    function startTyping() {
        const consoleBody = document.getElementById('consoleBody');
        const cursor = document.getElementById('cursor');

        function typeNextLine() {
            if (currentLineIndex >= codeSequence.length) {
                // 全て完了
                cursor.style.display = 'none';
                setTimeout(closeConsole, 2000);
                return;
            }

            const line = codeSequence[currentLineIndex];
            const lineDiv = document.createElement('div');
            lineDiv.className = 'code-line';
            lineDiv.textContent = line;

            consoleBody.insertBefore(lineDiv, cursor);

            // スクロールを最下部に
            consoleBody.scrollTop = consoleBody.scrollHeight;

            // 特定のコードに反応してUI要素を表示
            checkForElementTriggers(line);

            currentLineIndex++;

            // 次の行までの間隔（空行は短く、コードは長く）
            const delay = line.trim() === '' ? 200 : (line.includes('//') ? 800 : 600);
            setTimeout(typeNextLine, delay);
        }

        typeNextLine();
    }

    function checkForElementTriggers(line) {
        if (line.includes('<header>')) {
            setTimeout(() => {
                showElement('header');
                createMagicEffect('header');
            }, 500);
        } else if (line.includes('<section class="hero">')) {
            setTimeout(() => {
                showElement('hero');
                createMagicEffect('hero');
            }, 500);
        } else if (line.includes('<section class="purpose">')) {
            setTimeout(() => {
                showElement('purpose');
                createMagicEffect('purpose');
            }, 500);
        } else if (line.includes('<footer>')) {
            setTimeout(() => {
                showElement('footer');
                createMagicEffect('footer');
            }, 500);
        }
    }

    function showElement(elementId) {
        const element = document.getElementById(elementId);
        element.classList.add('visible');
    }

    function createMagicEffect(elementId) {
        const element = document.getElementById(elementId);
        const rect = element.getBoundingClientRect();

        // 魔法の波を作成
        const wave = document.createElement('div');
        wave.className = 'magic-wave';
        element.appendChild(wave);

        // パーティクルを生成
        const particleCount = 15;
        const startX = 0;
        const endX = rect.width;
        const duration = 2000;

        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                createParticle(element, startX, endX, i * 0.1);
            }, i * 100);
        }

        // 波を削除
        setTimeout(() => {
            if (wave.parentNode) {
                wave.parentNode.removeChild(wave);
            }
        }, duration);
    }

    function createParticle(container, startX, endX, phase) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const amplitude = 100; // サインカーブの振幅
        const frequency = 0.02; // 周波数

        particle.style.left = startX + 'px';
        particle.style.top = '20px';

        container.appendChild(particle);

        let x = startX;
        let progress = 0;
        const speed = 2;

        function animateParticle() {
            if (progress >= 1) {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
                return;
            }

            progress += 0.01;
            x = startX + (endX - startX) * progress;
            const y = 20 + amplitude * Math.sin((x * frequency) + phase);

            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.transform = `rotate(${progress * 360}deg)`;

            requestAnimationFrame(animateParticle);
        }

        animateParticle();
    }

    function closeConsole() {
        const consoleDialog = document.getElementById('consoleDialog');
        consoleDialog.style.opacity = '0';
        consoleDialog.style.transform = 'translateX(100px)';

        setTimeout(() => {
            consoleDialog.style.display = 'none';
            activateInteractions();
        }, 800);
    }

    function activateInteractions() {
        // ナビゲーションリンクをアクティブに
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => link.classList.add('active'));

        // CTAボタンをアクティブに
        document.getElementById('ctaButton').classList.add('active');

        // スムーススクロールを有効化
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

});




window.addEventListener('load', () => {

    // スクロールアニメーション
    function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 120;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    // window.addEventListener('scroll', animateOnScroll);
    // animateOnScroll(); // 初期実行

    const images = document.querySelectorAll('.hero__bg-image');
    let current = 0;

    function showNextImage() {
        console.log("hoge");
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }

    // 初期表示
    images[current].classList.add('active');
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