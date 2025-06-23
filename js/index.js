window.addEventListener('load', () => {

    // スクロールアニメーション
    function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // 初期実行

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
    setInterval(showNextImage, 5000); // 5秒ごとに切り替え

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
});