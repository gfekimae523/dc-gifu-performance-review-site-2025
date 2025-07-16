document.addEventListener('DOMContentLoaded', () => {

    const speakerNameMap = {
        A: '清水さん',
        B: '櫻本さん',
        C: '杉山様',
    };

    const speakerImageSrcMap = {
        A: 'img/panel/faceIcon_A.png', 
        B: 'img/panel/faceIcon_B.png', 
        C: 'img/panel/faceIcon_C.png',
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
        { speaker: 'A', text: '最初は“通うこと自体が挑戦”という方、本当に多いですよね。' },
        { speaker: 'A', text: '櫻本さんはそんな中でも、少しずつステップアップされていたんですね。' },
        { speaker: 'A', text: '通所の“何があったから続けられた”と思いますか？' },
        { speaker: 'B', text: '予定表を見て、講義やイベントなどのプログラムへ参加することへの楽しみな気持ちを持つことで、通所を続けることが出来たように思います' },
        { speaker: 'A', text: '楽しむことは凄く大切ですよね。' },
        { speaker: 'A', text: 'では、今、“通っていた頃の経験”がどんなふうに仕事に活きていますか？' },
        { speaker: 'B', text: '講義で教えてもらったことを、日常生活でどんな風に生かせるか考えることがありました。' },
        { speaker: 'B', text: '仕事中でも、身に着けたストレスコーピングを毎日実行するようにしています。ストレスコーピングの数を今でも増やすようにしています。' },
        { speaker: 'A', text: 'おおー凄い。私と一緒にストレスコーピングリストを作成して、最強のコーピングリストを作り上げましたよね。' },
        { speaker: 'A', text: '定着の時期にも、ストレスコーピングどうですか？と話し合いめっちゃ活かされていますと話してたことを今でも思い出します。' },
        { speaker: 'A', text: 'ちなみに、櫻本さん、通所中、特に“これが助けになったな”と感じた支援や環境について教えてください。' },
        { speaker: 'B', text: '周りの利用者さんと雑談してコミュニケーションをとること、Eスポーツにみんなで楽しく取り組んだことです。' },
        { speaker: 'A', text: 'コミュニケーションが取りやすい環境にしている弊所の取り組みが櫻本さんには良かったわけですね。' },
        { speaker: 'A', text: '雑談を意識していた理由ってなぜですか？' },
        { speaker: 'B', text: '[回答を入力]' },
        { speaker: 'A', text: '“自分って意外とできてるかも”と思ったことはありますか？' },
        { speaker: 'B', text: '振り返りシートに記入することもそうですが、当時つけていた「やれたことノート」に、一日を振り返って書き出すことで自己肯定感を少しでも持つことが出来たと思います' },
        { speaker: 'A', text: '振り返ることって案外しないですよね。' },
        { speaker: 'A', text: '弊所での毎週実施される振り返りシートが自己肯定感に繋がることが出来たことはうれしく思います。' },
        { speaker: 'A', text: '続いて企業さんへご質問させていただきます。' },
        { speaker: 'A', text: '本人への印象・日々の仕事で感じているポイントがあれば教えてください。' },
        { speaker: 'C', text: '入社したての頃は周りの環境・雰囲気に戸惑いと不安があったようにみえましたが、当初から挨拶や返事もしっかりされておりこの緊張感が徐々に解消されていけばご本人の能力を十分発揮されると期待を抱きました。' },
        { speaker: 'A', text: '久しぶりのお仕事・環境変化による緊張はだれしもありますよね。今後の能力に期待されたという暖かいお言葉ありがとうございます。' },
        { speaker: 'A', text: 'では先ほどのお話にございました緊張されていた中で、印象に残っているやり取りはありましたか？' },
        { speaker: 'C', text: '入社後すぐに作業の教育訓練を専属担当者と一緒に進めてきました。' },
        { speaker: 'C', text: 'その専属担当者はタイ出身の女性の方で彼女もこの部署に配属されて３年、現在も知識と経験の積み上げをしています。' },
        { speaker: 'C', text: 'その彼女と櫻本さんは日々の会話の中から意思疎通が早くできて作業も順調にこなせるようになってきました。' },
        { speaker: 'A', text: 'マンツーマンで専属の担当者の方が教えてくれることは、大きいですよね。' },
        { speaker: 'A', text: '櫻本さんの対応はどうでしたか？' },
        { speaker: 'C', text: '分からないことは必ず質問し自らスキルをあげていく姿勢がみえます。また今では他者の作業フォローを進んで行ってくれます。' },
        { speaker: 'A', text: '分からないことは素直に相談して、自ら率先して仕事をしていくのは本当に大切なことですよね。' },
        { speaker: 'A', text: '逆に、“ここはサポートが必要かも”と感じたことはありましたか？' },
        { speaker: 'C', text: '品質保証部検査Gは弊社において最終工程に位置づけられます。前工程の遅れが生じた場合、検査G内で遅れを挽回させなければなりません。' },
        { speaker: 'C', text: '品質・納期を守るためにプレッシャーを感じることもあるかもしれませんが、その場合には周りのメンバーに気軽に相談して欲しいと思います。' },
        { speaker: 'A', text: '会社の要である工程でお仕事されているんですね。報告連絡相談お及びスケジュール管理は、仕事する上で必須であり、大切なことを改めて実感しました。' },
        { speaker: 'A', text: '今後櫻本さんへ業務で期待していることを教えてもらえますか？' },
        { speaker: 'C', text: '入社されてから９カ月が経ちました。作業も徐々に慣れてきたと思います。' },
        { speaker: 'C', text: '今まで教育訓練してきた内容は基本作業であり、櫻本さんが感じる改善提案等があればどしどし出していただけると嬉しいです。' },
        { speaker: 'C', text: '日々の作業の中から新しいアイデアを創出することで更に達成感を味わえると思います。' },
        { speaker: 'A', text: '改善提案は弊社でもほしいところです。' },
        { speaker: 'A', text: '9か月経過した現在の表情ややりとりに変化は感じられましたか？' },
        { speaker: 'C', text: '作業の中での不明点が解決できた時は喜びの表情が見て分かるようになりました。また作業が一人工で完結できた時の達成感もうかがえるようになりました。' },
        { speaker: 'A', text: '周囲の社員さんの反応はどうでしたか？' },
        { speaker: 'C', text: '職場の一員として任せられる仕事ができ、担当者間とのコミュニケーションも良好です。' },
        { speaker: 'C', text: '周りのメンバーと同様に毎日の仕事に向き合っております。' },
        { speaker: 'A', text: 'ありがとうございました。どのように櫻本さんが入社してから過ごされていたか想像でき、安心しました。' },
        { speaker: 'A', text: '上長よりお話を聞かせてもらい、櫻本さんにご質問したいと思います。実際に担当している業務は、どのような内容ですか？' },
        { speaker: 'B', text: '三次元測定結果の折り込み作業です。最初は未経験だったので覚えることが多く大変でしたが、少しずつ慣れることが出来ました。' },
        { speaker: 'A', text: '“繰り返して慣れる”って大事なステップですよね。そこを丁寧に積み重ねてこられたのがよく分かります。' },
        { speaker: 'A', text: '企業さんや周りのサポートで、“これが助けになった”と感じたことはありましたか？' },
        { speaker: 'B', text: '隣の席のタイ人の先輩と雑談だけでなく相談できることが大きいです。' },
        { speaker: 'B', text: 'あと、部署の関係上自分の好きなグッズを置いても個性の一つとしてとらえてもらえることもありがたいです。' },
        { speaker: 'A', text: '好きな物を置かしてもらい、モチベーション上がりますね。いいんですか？' },
        { speaker: 'A', text: 'ちなみに、作業で気を付けていることはありますか？' },
        { speaker: 'B', text: '入力した数値に間違いがないか、チェックシートに書かれている内容に不備がないかチェックすることです。' },
        { speaker: 'A', text: '今後、どんな業務にチャレンジしてみたいですか？' },
        { speaker: 'B', text: '現在も少し結果表の作成に必要なキャプチャ撮影を手伝わせてもらうことがあるのですが、三次元測定プログラムの作成業務にもチャレンジしてみたいです。' },
        { speaker: 'A', text: '今のお仕事の様子が伝わってきて、とても頼もしいですね。' },
        { speaker: 'A', text: 'それではここからは、実際にどのような工夫が職場でされているのか、企業様に伺ってみたいと思います。' },
        { speaker: 'A', text: 'ご本人が働きやすいよう、業務内容や進め方で工夫された点はありますか？' },
        { speaker: 'C', text: '作業内容の指示・進捗状況の確認については、専属担当者を介して行うようにしています。' },
        { speaker: 'C', text: 'しばらくの間はサポートを付けて一人で抱え込まないよう配慮しています。' },
        { speaker: 'C', text: 'また、毎朝の職場ミーティングでは表情を確認し体調に変化がないか気を付けています。' },
        { speaker: 'A', text: '業務以外のことも含めて見守ってくださっていること、本当に心強いです。' },
        { speaker: 'A', text: '作業の目安やステップを決めるうえで、工夫しているポイントはありますか？' },
        { speaker: 'C', text: '毎日の仕事の優先順位・量・納期については他メンバーと一緒に情報を共有しています。' },
        { speaker: 'C', text: '櫻本さん一人で消化できない仕事量が発生しそうな場合や難易度の高い仕事については他メンバーがフォローするよう私の方から指示しています。' },
        { speaker: 'A', text: '具体的にどんなふうに声かけをされていますか？' },
        { speaker: 'C', text: '業務における重要な要素については、仕事の節々で分かりやすく説明するように心掛けています。' },
        { speaker: 'C', text: '例えば検査部署では正確な測定データを抽出し対象ワークの良否判断が求められています。' },
        { speaker: 'C', text: 'いろいろ経験を積まないと分からない事も多々有りますが、目的と手段の基本作業ができれば自ずと身についてくると思いますので焦らないで落ち着いて作業するように声掛けをしています。' },
        { speaker: 'C', text: 'また他メンバーとのコミュニケーションをとれるよう、周りのメンバーからも声掛けできる機会を作っています' },
        { speaker: 'A', text: '櫻本さんに変化が見られたタイミングがあれば、ぜひ教えてください。' },
        { speaker: 'C', text: '月末や期末などの多忙な時期は自ら残業や休日出勤に協力してくれるようになりました。周りの仕事の負荷状況をいち早く気付き行動してくれます。' },
        { speaker: 'A', text: '企業様の細やかな工夫が、安心して働ける環境づくりに繋がっているのがよく分かりました。' },
        { speaker: 'A', text: '続いては、櫻本さんご自身が感じている“この職場でよかった”と思う瞬間について伺っていきます。' },
        { speaker: 'A', text: '櫻本さん、現在の職場で“嬉しかったこと”や“やりがい”を感じた経験はありますか？' },
        { speaker: 'B', text: '自分がキャプチャ撮影をした結果表が印刷されたとき、これ私が撮影したやつだ！！と喜びを覚えました。' },
        { speaker: 'B', text: '小さいことでも仕事を覚えられると、周りの先輩の仕事が忙しいときに手伝うことが出来るようになるので、やりがいを感じています。' },
        { speaker: 'A', text: 'その経験が大きな自信になっていることが伝わってきます。ひとつずつの成功体験が、今後の成長にもつながっていくように思います。' },
        { speaker: 'A', text: '前向きな気持ちを保つために心掛けていることはありますか？' },
        { speaker: 'B', text: 'なるべく毎日、スマホの写真フォルダの欲しいものリストを見返すことがモチベーション維持になっています。' },
        { speaker: 'B', text: 'メンタルが回復するので、ちいかわのアニメをお昼休みに必ず見るようにしています。' },
        { speaker: 'A', text: 'これからも続けていくうえで、大事にしたいことは何ですか？' },
        { speaker: 'B', text: 'ストレスをためないことです。そのために、リフレーミングやストレスコーピングなどディーキャリアで学んだことを思い出しながら、引き続き活かしていきたいです' },
        { speaker: 'A', text: '' },
        { speaker: 'C', text: '健康と安全が第一です。無理をせず一歩会社を出たら自分の時間を楽しむようにしてください。' },
        { speaker: 'C', text: '忙しい毎日が続きプレッシャーもあるかもしれませんが、仕事の中で何か一つ楽しみややりがいを見つけることがスキルアップの近道ではないかと思います。期待しています。' },
        { speaker: 'A', text: '' },
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


