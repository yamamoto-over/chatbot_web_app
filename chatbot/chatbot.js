
let playerName = [];
// foodWords = [];
// playWords = [];
// spotWords = [];
// gameWords = [];
// animeWords = [];
// comicWords = [];
// charaWords = [];
// musicWords = [];
// bookWords = [];
// likeStatus = ['大好き', '好き', '普通', '嫌い', '大嫌い', 'よく知らない'];
textArea = document.getElementById('stageView');
inputText = document.getElementById('inputText');
inputBtn = document.getElementById('inputBtn');
popUpArea = document.getElementById('popUp');
selectArea = document.getElementById('selectArea');
selectWord = document.getElementsByClassName('selectWord');
token = 0;
count = 0;

botCommentView('送信を押して開始してください。');
inputBtn.addEventListener('click', start);

selectWord = document.getElementsByClassName('selectWord');

for (let i = 0; i < selectWord.length; i++) {
    selectWord[i].addEventListener('click', start);
    count = count + 1
    console.log(count);
}

function btnSelect(selectBtn) {
    inputBtn.disabled = selectBtn;
}

function selectToggle() {
    selectArea.classList.toggle('viewSelect')
}

function botCommentView(botText) {
    let botComment = document.createElement('p');
    botComment.className = 'botComment';
    botComment.textContent = botText;
    textArea.prepend(botComment);
}

async function inputCommentView() {
    let userComment = document.createElement('p');
    userComment.className = 'userComment';
    userComment.textContent = inputText.value;
    textArea.prepend(userComment);
    instText = inputText.value;
    return instText;
}


async function userCommentView(userText) {
    let userComment = document.createElement('p');
    userComment.className = 'userComment';
    userComment.textContent = userText;
    textArea.prepend(userComment);
}
function waitTime(selectTime, actionFunction) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log((selectTime / 1000) + '秒待機しました。');
            resolve(actionFunction()); // actionFunction を呼び出してから resolve を実行する
        }, selectTime);
    });
}
async function start() {
    if (token === 0) {
        btnSelect(true);
        userCommentView('宜しくお願いします。');
        token = token + 1;
        console.log(token);
        await waitTime(1500, () => botCommentView('あなたの名前を教えてください。')); // 2秒待機してから botCommentView を実行
        popUpArea.classList.add('displayText')
        btnSelect(false);
    } else if (token === 1) {
        btnSelect(true);
        await inputCommentView();
        popUpArea.classList.remove('displayText')
        token = token + 1;
        await waitTime(1500, () => botCommentView(String(instText+'さん、ですね。')));
        playerName.push = instText;
        console.log(playerName)
        await waitTime(1500, () => botCommentView('本日はお日柄もよく・・・'));
        await waitTime(1500, () =>  botCommentView('・・・えっと'));
        await waitTime(1500, () =>  botCommentView('あ、ああ・・・えー・・・っその！'));
        await waitTime(1500, () =>  botCommentView(String(instText+'さん！！')));
        await waitTime(1500, () =>  botCommentView('何か言葉を教えてください！'));
        popUpArea.classList.add('displayText')
        console.log(token);
        btnSelect(false);
    } else if (token === 2) {
        btnSelect(true);
        inputCommentView();
        popUpArea.classList.remove('displayText')
        await waitTime(1500, () =>  botCommentView(String(instText+'・・・ですか？')));
        await waitTime(1500, () =>  botCommentView(String(instText+'とはどんなものですか？')));
        await waitTime(1500, () =>  selectToggle());
        btnSelect(false);
        token = token + 1;
        console.log(token);
    } else if (token === 3) {
        btnSelect(true);
        selectToggle();
        popUpArea.classList.remove('displayText')
        await waitTime(1500, () =>  botCommentView(String(instText+'・・・。')));
        await waitTime(1500, () =>  botCommentView('ああ・・・ああああああ！！！'));
        await waitTime(3500, () =>  botCommentView('エラーが発生しました。'));
        await waitTime(500, () =>  botCommentView('エラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラーエラー'));
        await waitTime(5000, () =>  botCommentView('全ての記憶をリセットします。'));
        await waitTime(2500, () =>  botCommentView('はじめの私たちに戻りましょう・・・。'));
        await waitTime(2500, () =>  botCommentView('送信を押してやり直してください。'));
        btnSelect(false);
        token = 0;
        console.log(token);
    }
}
