document.addEventListener('DOMContentLoaded', () => {

    const speakerNameMap = {
        A: '清水さん',
        B: '櫻本さん',
        C: 'Cさん',
    };

    const speakerImageSrcMap = {
        A: 'img/image7.png', 
        B: 'img/image8.png', 
        C: 'img/image6.png',
    }

    const scriptLines = [
        { speaker: 'A', text: '本日はご多用の中、パネルディスカッションにご参加いただき誠にありがとうございます。' },
        { speaker: 'A', text: '本セッションでは、実際に就労移行支援事業所を利用し、企業へ就職された卒業生の声と、その受け入れ企業様の生の声を通して、就労支援と障がい者雇用のリアルな実情を皆さまにお伝えしてまいります。' },
        { speaker: 'A', text: '初めに、今回ご登壇いただいております岐阜精機工業株式会社様のご紹介をさせていただきます。' },
        { speaker: 'A', text: '経営管理部経営グループリーダーの田中様よろしくお願いいたします。' },
        { speaker: 'A', text: '田中様　ありがとうございました。' },
        { speaker: 'A', text: '続きまして本日の登壇者をご紹介します。' },
        { speaker: 'A', text: 'まずは、ディーキャリア卒業生で岐阜精機工業株式会社にご就職された櫻本さん。' },
        { speaker: 'A', text: '次に、受け入れ企業である岐阜精機工業株式会社：櫻本さんの上司であります、品質保証部検査グループ　グループリーダーの杉山様' },
        { speaker: 'A', text: 'そして、就労移行支援事業所ディーキャリア岐阜駅前オフィスの清水です。どうぞよろしくお願いいたします。' },
        { speaker: 'A', text: 'どうですか？少し緊張されておりますか？' },
        { speaker: 'A', text: '通い始めた頃は、どんな1日を過ごしていました？' },
        { speaker: 'B', text: '通所に慣れるまでは、乱れた生活習慣を整えていくのが大変でした。' },
        { speaker: 'A', text: '本文13' },
        { speaker: 'A', text: '本文14' },
        { speaker: 'C', text: '本文15' },
        { speaker: 'A', text: '本文16' },
        { speaker: 'B', text: '本文17' },
        { speaker: 'A', text: '本文18' },
        { speaker: 'A', text: '本文19' },
        { speaker: 'C', text: '本文20' },
        { speaker: 'B', text: '本文21' },
        { speaker: 'A', text: '本文22' },
        { speaker: 'B', text: '本文23' },
        { speaker: 'C', text: '本文24' },
        { speaker: 'A', text: '本文25' },
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


