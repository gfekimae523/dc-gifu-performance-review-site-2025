window.addEventListener('load', () => {

    document.querySelectorAll('body > :not(#intro-screen)').forEach(el => {
        el.style.display = 'none';
    });

    function startProgressBar(callback) {
        const progressBar = document.getElementById('progress-bar');
        const container = document.getElementById('progress-bar-container');
        container.style.display = 'block';

        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            progressBar.style.width = progress + '%';
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(callback, 500); // 少し待ってから切り替え
            }
        }, 300); // 3秒で100%
    }

    new TypeIt("#console-output", {
        speed: 50,
        waitUntilVisible: true
    })
        .type("> username: guest_user", { delay: 500 })
        .break()
        .type("> password: ********", { delay: 500 })
        .break()
        .type("> login successful.", { delay: 500 })
        .break()
        .type("> start IT_office", { delay: 500 })
        .break()
        .exec(() => {
            startProgressBar(() => {
                // アニメーション終了 → 本体表示
                document.getElementById('intro-screen').style.display = 'none';
                
                document.body.style.overflow = 'auto'; // スクロール復活
            });
        })
        .go();


    // スクロールアニメーション
    function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // 初期実行

    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
});