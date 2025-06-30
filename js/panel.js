document.addEventListener('DOMContentLoaded', () => {

    const speakerNameMap = {
        A: 'Aさん',
        B: 'Bさん',
        C: 'Cさん',
    };

    const speakerImageSrcMap = {
        A: 'img/image7.png', 
        B: 'img/image8.png', 
        C: 'img/image6.png',
    }

    const scriptLines = [
        { speaker: 'A', text: '本日はお集まりいただきありがとうございます。' },
        { speaker: 'B', text: '本日はよろしくお願いします。' },
        { speaker: 'C', text: 'こちらこそ、楽しみにしていました。' },
        { speaker: 'A', text: 'では、さっそく最初のトピックに入っていきましょう。' },
        { speaker: 'B', text: '本文5' },
        { speaker: 'C', text: '本文6' },
        { speaker: 'A', text: '本文7' },
        { speaker: 'B', text: '本文8ああああああああああああああああああああああああああああああああああああああああああああああああ' },
        { speaker: 'C', text: '本文9' },
        { speaker: 'A', text: '本文10' },
        { speaker: 'B', text: '本文11ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ' },
        { speaker: 'C', text: '本文12' },
        { speaker: 'A', text: '本文13' },
        { speaker: 'B', text: '本文14' },
        { speaker: 'C', text: '本文15' },
    ];



    let currentIndex = 0;
    const messageList = document.querySelector('.talk-panel__message-list');

    function showNextMessage() {
        if (currentIndex >= scriptLines.length) return;

        const scriptLine = scriptLines[currentIndex];
        const speaker = scriptLine['speaker'];
        const speakerName = speakerNameMap[speaker];
        const speakerImageSrc = speakerImageSrcMap[speaker];
        const text = scriptLine['text'];

        const messageEl = document.createElement('div');
        messageEl.className = 'talk-panel__message';
        messageEl.classList.add(speaker);

        const speakerInfoEl = document.createElement('div');
        speakerInfoEl.className = 'talk-panel__speaker-info';

        const speakerImageEl = document.createElement('img');
        speakerImageEl.className = 'talk-panel__speaker-image';
        speakerImageEl.src = speakerImageSrc;
        speakerImageEl.alt = speakerName;

        const speakerNameEl = document.createElement('div');
        speakerNameEl.className = 'talk-panel__speaker-name';
        speakerNameEl.textContent = speakerName;

        speakerInfoEl.appendChild(speakerImageEl);
        speakerInfoEl.appendChild(speakerNameEl);

        const textEl = document.createElement('div');
        textEl.className = 'talk-panel__text';
        textEl.textContent = text;

        messageEl.appendChild(speakerInfoEl);
        messageEl.appendChild(textEl);

        //新規メッセージをリストの先頭に追加;
        messageList.insertBefore(messageEl, messageList.firstChild);

        window.scrollTo({ top: 0, behavior: 'smooth' });

        currentIndex++;


    }

    document.body.addEventListener('click', showNextMessage);
});


