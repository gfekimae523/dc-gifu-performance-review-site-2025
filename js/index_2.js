class ConsoleWriter {
    constructor(id) {
        this.el = document.getElementById(id);
        this.queue = [];
        this.isRunning = false;
    }

    appendLine(text) {
        this.queue.push({ type: 'instant', text });
        this.runQueue();
        return this;
    }

    typeLine(text, delay = 50) {
        this.queue.push({ type: 'type', text, delay });
        this.runQueue();
        return this;
    }

    progressBar(label, length = 30, steps = 20, delay = 100) {
        this.queue.push({
            type: 'progress',
            label,
            length,
            steps,
            delay
        });
        this.runQueue();
        return this;
    }

    callFunction(func, ...args) {
        this.queue.push({
            type: 'function',
            func,
            args
        });
        this.runQueue();
        return this;
    }

    async runQueue() {
        if (this.isRunning) return;
        this.isRunning = true;

        while (this.queue.length > 0) {
            const item = this.queue.shift();

            if (item.type === 'instant') {
                this.el.textContent += item.text;
            }

            else if (item.type === 'type') {
                for (let char of item.text) {
                    this.el.textContent += char;
                    await this.sleep(item.delay);
                }
            }

            else if (item.type === 'progress') {
                const { label, length, steps, delay } = item;
                for (let i = 0; i <= steps; i++) {
                    const fillLength = Math.floor((i / steps) * length);
                    const fill = '#'.repeat(fillLength);
                    const empty = ' '.repeat(length - fillLength);
                    const percent = Math.floor((i / steps) * 100);

                    // 上書きしたい最後の行だけ更新
                    const lines = this.el.textContent.split('\n');
                    lines[lines.length - 1] = `${label}: [${fill}${empty}] ${percent}%`;
                    this.el.textContent = lines.join('\n');
                    await this.sleep(delay);
                }
                this.el.textContent += '\n'; // 最後に改行
            }

            else if (item.type === 'function') {
                const { func, args } = item;
                try {
                    // 関数が非同期の場合はawaitで待つ
                    const result = await func(...args);
                    // 関数の戻り値がある場合は表示（オプション）
                    if (result !== undefined && result !== null) {
                        this.el.textContent += String(result);
                    }
                } catch (error) {
                    // エラーハンドリング
                    this.el.textContent += `Error: ${error.message}\n`;
                }
            }
        }

        this.isRunning = false;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}


window.addEventListener('load', () => {

    function fadeout() {
        document.body.style.overflowY = 'auto';
        document.querySelector('#intro-screen').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('#intro-screen').style.display = 'none';
        }, 2000);
    }

    const writer = new ConsoleWriter('console-output');
    writer
        .appendLine('Last login: Wed Jun 11 10:45:21 on ttys001\n')
        .appendLine('% ')
        .typeLine('sudo start it-expert-gifu\n', 30)
        .appendLine('Password: ')
        .typeLine('************\n', 50)
        .appendLine('Activating IT Office System...\n')
        .progressBar('Deploying core modules', 20, 20, 10)
        .progressBar('Establishing network connection', 20, 20, 20)
        .progressBar('Launching runtime services', 20, 20, 40)
        .appendLine('System successfully activated!')
        .callFunction(fadeout);


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