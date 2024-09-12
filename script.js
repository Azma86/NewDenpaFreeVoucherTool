// グローバル変数で選択されたジャンルを保持
let selectedGenres = [];

// アイテムデータ (追加・差し替えが容易)
const items = [
    { name: 'ジェリーマウス', image: './images/ジェリーマウス.png', quantity: 0, genre: ['★1', '1.凄いお宝がある洞窟'], disabled: false },
	{ name: 'きゅうけつキャット', image: './images/きゅうけつキャット.png', quantity: 0, genre: ['★2', '1.凄いお宝がある洞窟'], disabled: false },
	{ name: 'だんごボーイ', image: './images/だんごボーイ.png', quantity: 0, genre: ['★3', '1.凄いお宝がある洞窟'], disabled: false },
	{ name: 'ボムパイン', image: './images/ボムパイン.png', quantity: 0, genre: ['★3', '1.凄いお宝がある洞窟'], disabled: false },
	{ name: 'ロックゲーター', image: './images/ロックゲーター.png', quantity: 0, genre: ['★3', '1.凄いお宝がある洞窟'], disabled: false },
	{ name: 'ぶたばなウサギ', image: './images/ぶたばなウサギ.png', quantity: 0, genre: ['★3', '1.凄いお宝がある洞窟'], disabled: false },
	{ name: 'トードロック', image: './images/トードロック.png', quantity: 0, genre: ['★3', '1.凄いお宝がある洞窟'], disabled: false },
	{ name: 'はさみサボテン', image: './images/はさみサボテン.png', quantity: 0, genre: ['★3', '1.凄いお宝がある洞窟'], disabled: false },
	{ name: 'ヴァイパーレディ', image: './images/ヴァイパーレディ.png', quantity: 0, genre: ['★3', '1.凄いお宝がある洞窟'], disabled: false },
    { name: 'あかばなチョウ', image: './images/あかばなチョウ.png', quantity: 0, genre: ['★1', '2.温泉の町'], disabled: false },
    { name: 'おおくちばし', image: './images/おおくちばし.png', quantity: 0, genre: ['★1', '2.温泉の町'], disabled: false },
    { name: 'ウッキー', image: './images/ウッキー.png', quantity: 0, genre: ['★1', '2.温泉の町'], disabled: false },
    { name: 'バーサーカー', image: './images/バーサーカー.png', quantity: 0, genre: ['★3', '2.温泉の町'], disabled: false },
    { name: 'ひつかいキツネ', image: './images/ひつかいキツネ.png', quantity: 0, genre: ['★4', '2.温泉の町'], disabled: false },
    { name: 'サラマンダー', image: './images/サラマンダー.png', quantity: 0, genre: ['★2', '2.温泉の町'], disabled: false },
    { name: 'トーチゴースト', image: './images/トーチゴースト.png', quantity: 0, genre: ['★3', '2.温泉の町'], disabled: false },
    { name: 'ポーン', image: './images/ポーン.png', quantity: 0, genre: ['★3', '2.温泉の町'], disabled: false },
    { name: 'ポーン', image: './images/ポーン.png', quantity: 0, genre: ['★3', '3.ジュエル埋葬地'], disabled: false },
    { name: 'ヘビーワーム', image: './images/ヘビーワーム.png', quantity: 0, genre: ['★5', 'AA'], disabled: false },
    { name: 'にゅうし', image: './images/にゅうし.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'きんば', image: './images/きんば.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'おうさまのは', image: './images/おうさまのは.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'キラービースト', image: './images/キラービースト.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'ガイアドラゴン', image: './images/ガイアドラゴン.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'フロストキーパー', image: './images/フロストキーパー.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'タケノこぞう', image: './images/タケノこぞう.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'エンゼルフライ', image: './images/エンゼルフライ.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'どくガエルせんし', image: './images/どくガエルせんし.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'おばけとうがらし', image: './images/おばけとうがらし.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'きんのおくば', image: './images/きんのおくば.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'クリムゾンキーパー', image: './images/クリムゾンキーパー.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'パラライズレイ', image: './images/パラライズレイ.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'マジックエイプ', image: './images/マジックエイプ.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'コドモドラコ', image: './images/コドモドラコ.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'ようがんゴースト', image: './images/ようがんゴースト.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'きんば', image: './images/きんば.png', quantity: 0, genre: 'AA', disabled: false },
    { name: 'きんば', image: './images/きんば.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'きんば', image: './images/きんば.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'きんば', image: './images/きんば.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'きんば', image: './images/きんば.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'きんば', image: './images/きんば.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'きんば', image: './images/きんば.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'きんば', image: './images/きんば.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'きんば', image: './images/きんば.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'きんば', image: './images/きんば.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'きんば', image: './images/きんば.png', quantity: 0, genre: '★5', disabled: false },
];

// ローカルストレージにデータを保存
function saveToLocalStorage() {
    const itemsData = JSON.stringify(items);
    localStorage.setItem('items', itemsData);
}

// ローカルストレージからデータを読み込む
function loadFromLocalStorage() {
    const itemsData = localStorage.getItem('items');
    return itemsData ? JSON.parse(itemsData) : [];
}

// ボタンのクリックイベントを設定
function setupGenreButtons() {
    const buttons = document.querySelectorAll('#genre-buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            selectedGenres = button.getAttribute('data-genres').split(',');
            renderItems(selectedGenres); // 選択されたジャンルでアイテムを再描画
        });
    });
}

// アイテムを表示する
function renderItems(selectedGenres = []) {
    const container = document.getElementById('item-container');
    container.innerHTML = ''; // 一度リセット

    // HTMLで指定されたジャンル順に表示するために、selectedGenresの順に処理
    selectedGenres.forEach(genre => {
        const genreDiv = document.createElement('div');
        genreDiv.classList.add('genre');
        genreDiv.innerHTML = `<h2>${genre}</h2>`;
        container.appendChild(genreDiv);

        // 選択されたジャンルに合致するアイテムを表示
        items.filter(item => item.genre.includes(genre)).forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.onerror = function() { this.src = './images/NoImage.png'; }; // エラー時に noimage.png を表示
            img.loading = 'lazy'; // 遅延読み込み
            img.onclick = () => toggleCover(item); // アイテム自体を渡す

            const quantityInput = document.createElement('input');
            quantityInput.type = "number";
            quantityInput.value = item.quantity;
            quantityInput.min = 0;
            quantityInput.onchange = function() { updateQuantity(item, this.value); }; // アイテム自体を渡す

            const namePara = document.createElement('p');
            namePara.textContent = item.name;

            itemDiv.appendChild(img);
            itemDiv.appendChild(namePara);
            itemDiv.appendChild(quantityInput);

            // カバーの追加処理
            addCover(itemDiv, item);

            genreDiv.appendChild(itemDiv);
        });
    });

    // アイテムが描画された後に、画像保存ボタンのイベントを設定
    document.getElementById('saveBtn').addEventListener('click', saveAsImage);
}

// カバーの追加処理
function addCover(itemDiv, item) {
    // 既存のカバーを削除
    const existingCovers = itemDiv.querySelectorAll('.cover, .black, .blue, .green');
    existingCovers.forEach(cover => cover.remove());

    if (item.disabled || item.quantity == 1) {
        // 無効化されているとき：黒カバーとクロス印を表示
        const coverDiv = document.createElement('div');
        coverDiv.classList.add('black', 'cover');
        itemDiv.appendChild(coverDiv);
    } else if (item.quantity <= 0) {
        // 数量が0のとき：青カバーを表示
        const coverDiv = document.createElement('div');
        coverDiv.classList.add('blue');
        itemDiv.appendChild(coverDiv);
    } else if (item.quantity >= 2) {
        // 数量が2以上のとき：緑カバーを表示
        const coverDiv = document.createElement('div');
        coverDiv.classList.add('green');
        itemDiv.appendChild(coverDiv);
    }
}

// 数量の更新
function updateQuantity(item, value) {
    item.quantity = parseInt(value);
    saveToLocalStorage(); // ローカルストレージに保存
    renderItems(selectedGenres); // 数量変更後に再描画（選択されたジャンルを維持）
}

// 画像に×印を表示・非表示
function toggleCover(item) {
    item.disabled = !item.disabled; // アイテムの有効・無効を切り替え

    saveToLocalStorage(); // 状態の変更を保存
    renderItems(selectedGenres); // 変更を反映（選択されたジャンルを維持）
}


// 画像として保存
function saveAsImage() {
    const container = document.querySelector("#item-container");

    // html2canvas を使って #item-container をキャプチャ
    html2canvas(container, { useCORS: true })
        .then(canvas => {
            // 画像を生成し、リンクを作成
            const link = document.createElement('a');
            link.download = 'items.png';
            link.href = canvas.toDataURL('image/png'); // PNG形式でキャプチャ
            link.click(); // 自動でリンクをクリックしてダウンロードを開始
        })
        .catch(error => {
            console.error('画像の保存に失敗しました: ', error);
        });
}

// ページ読み込み時にアイテムを表示し、ローカルストレージからデータをロード
document.addEventListener('DOMContentLoaded', () => {
    const savedItems = loadFromLocalStorage();
    if (savedItems.length > 0) {
        savedItems.forEach((item, index) => {
            items[index] = item;
        });
    }
    setupGenreButtons(); // ボタンのイベントリスナーを設定

    // デフォルトで1つ目のボタンを選択
    const firstButton = document.querySelector('#genre-buttons button');
    if (firstButton) {
        firstButton.click(); // 最初のボタンをクリックして自動選択
    }
});
