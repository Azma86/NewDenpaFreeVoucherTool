// アイテムデータ (追加・差し替えが容易)
const items = [
    { name: 'ヘビーワーム', image: './images/ヘビーワーム.png', quantity: 0, genre: '★5', disabled: false },
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
    { name: 'きんば', image: './images/きんば.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'きんば', image: './images/きんば.png', quantity: 0, genre: '★5', disabled: false },
];

// アイテムを表示する
function renderItems() {
    const container = document.getElementById('item-container');
    container.innerHTML = ''; // 一度リセット

    // ジャンルごとにアイテムをグループ化
    const genres = [...new Set(items.map(item => item.genre))]; // ユニークなジャンルのリストを作成

    genres.forEach(genre => {
        const genreDiv = document.createElement('div');
        genreDiv.classList.add('genre');
        genreDiv.innerHTML = `<h2>${genre}</h2>`;
        container.appendChild(genreDiv);

        items.filter(item => item.genre === genre).forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.dataset.index = index; // インデックスをデータ属性として保存

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.onerror = function() { this.src = './images/NoImage.png'; }; // エラー時に noimage.png を表示
            img.loading = 'lazy'; // 遅延読み込み
            // クリックイベントを設定（イベントデリゲーションを使用する場合は削除）
            img.onclick = toggleCover;

            const quantityInput = document.createElement('input');
            quantityInput.type = "number";
            quantityInput.value = item.quantity;
            quantityInput.min = 0;
            quantityInput.onchange = function() { updateQuantity(index, this.value); };

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
function updateQuantity(index, value) {
    items[index].quantity = parseInt(value);
    saveToCookies(); // クッキーに保存
    renderItems(); // 数量変更後に再描画
}

// 画像に×印を表示・非表示
function toggleCover(event) {
    const itemDiv = event.target.closest('.item');
    const index = itemDiv.dataset.index; // データ属性からインデックスを取得
    items[index].disabled = !items[index].disabled; // アイテムの有効・無効を切り替え

    // カバーの再設定
    addCover(itemDiv, items[index]);
    saveToCookies(); // 状態の変更を保存
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

// クッキーにデータを保存
function saveToCookies() {
    const itemsData = JSON.stringify(items);
    document.cookie = `items=${encodeURIComponent(itemsData)}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

// クッキーからデータを読み込む
function loadFromCookies() {
    const cookies = document.cookie.split('; ');
    const itemsCookie = cookies.find(row => row.startsWith('items='));
    if (itemsCookie) {
        const itemsData = decodeURIComponent(itemsCookie.split('=')[1]);
        return JSON.parse(itemsData);
    }
    return [];
}

// DOMの変更を監視するための MutationObserver を作成
const observer = new MutationObserver((mutations, observer) => {
    // 監視対象のDOM要素に変更が加えられた際に実行される
    const container = document.getElementById('item-container');
    if (container && container.children.length > 0) {
        // アイテムのレンダリングが完了したとみなす（アイテムが存在する場合）
        document.getElementById('saveBtn').addEventListener('click', saveAsImage);
        // 一度登録すれば十分なので、監視を停止
        observer.disconnect();
    }
});

// 監視対象のDOMを設定
const config = { childList: true, subtree: true }; // DOMの子要素の変化を監視
observer.observe(document.getElementById('item-container'), config);

// ページ読み込み時にアイテムを表示し、クッキーからデータをロード
document.addEventListener('DOMContentLoaded', () => {
    const savedItems = loadFromCookies();
    if (savedItems.length > 0) {
        savedItems.forEach((item, index) => {
            items[index] = item;
        });
    }
    renderItems();
});
