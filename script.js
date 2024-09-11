// アイテムデータ (追加・差し替えが容易)
const items = [
    { name: 'ヘビーワーム', image: './images/ヘビーワーム.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'にゅうし', image: './images/にゅうし.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'きんば', image: './images/きんば.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'おうさまのは', image: 'NewDenpaFreeVoucherTool/images/おうさまのは.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'キラービースト', image: '/NewDenpaFreeVoucherTool/images/キラービースト.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'ガイアドラゴン', image: './NewDenpaFreeVoucherTool/images/ガイアドラゴン.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'フロストキーパー', image: './NewDenpaFreeVoucherTool/images/フロストキーパー.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'タケノこぞう', image: './NewDenpaFreeVoucherTool/images/タケノこぞう.png', quantity: 0, genre: '★5', disabled: false },
    { name: 'エンゼルフライ', image: './NewDenpaFreeVoucherTool/images/エンゼルフライ.png', quantity: 0, genre: '★5', disabled: false }
    { name: 'ペンギンロード', image: './NewDenpaFreeVoucherTool/images/ペンギンロード.png', quantity: 0, genre: '★5', disabled: false }
    { name: 'ペンギンロード', image: './NewDenpaFreeVoucherTool/images/ペンギンロード.png', quantity: 0, genre: '★5', disabled: false }
    { name: 'ペンギンロード', image: './NewDenpaFreeVoucherTool/images/ペンギンロード.png', quantity: 0, genre: '★5', disabled: false }
    { name: 'ペンギンロード', image: './NewDenpaFreeVoucherTool/images/ペンギンロード.png', quantity: 0, genre: '★5', disabled: false }
    { name: 'ペンギンロード', image: './NewDenpaFreeVoucherTool/images/ペンギンロード.png', quantity: 0, genre: '★5', disabled: false }
    { name: 'ペンギンロード', image: './NewDenpaFreeVoucherTool/images/ペンギンロード.png', quantity: 0, genre: '★5', disabled: false }
    { name: 'ペンギンロード', image: './NewDenpaFreeVoucherTool/images/ペンギンロード.png', quantity: 0, genre: '★5', disabled: false }
    { name: 'ペンギンロード', image: './NewDenpaFreeVoucherTool/images/ペンギンロード.png', quantity: 0, genre: '★5', disabled: false }
    { name: 'ペンギンロード', image: './NewDenpaFreeVoucherTool/images/ペンギンロード.png', quantity: 0, genre: '★5', disabled: false }
    { name: 'ペンギンロード', image: './NewDenpaFreeVoucherTool/images/ペンギンロード.png', quantity: 0, genre: '★5', disabled: false }
    { name: 'ペンギンロード', image: './NewDenpaFreeVoucherTool/images/ペンギンロード.png', quantity: 0, genre: '★5', disabled: false }
    { name: 'ペンギンロード', image: './NewDenpaFreeVoucherTool/images/ペンギンロード.png', quantity: 0, genre: '★5', disabled: false }
    { name: 'ペンギンロード', image: './NewDenpaFreeVoucherTool/images/ペンギンロード.png', quantity: 0, genre: '★5', disabled: false }
    
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

            if (item.quantity <= 0 || item.disabled) {
                const coverDiv = document.createElement('div');
                coverDiv.classList.add('black');
                itemDiv.appendChild(coverDiv);
            }
            else if (item.quantity >= 2) {
                const coverDiv = document.createElement('div');
                coverDiv.classList.add('green');
                itemDiv.appendChild(coverDiv);
            }

            genreDiv.appendChild(itemDiv);
        });
    });

    // アイテムが描画された後に、画像保存ボタンのイベントを設定
    document.getElementById('saveBtn').addEventListener('click', saveAsImage);
}

// 数量の更新
function updateQuantity(index, value) {
    items[index].quantity = value;
    renderItems(); // 数量変更後に再描画
}

// 画像に×印を表示・非表示
function toggleCover(event) {
    const itemDiv = event.target.closest('.item');
    const index = itemDiv.dataset.index; // データ属性からインデックスを取得
    items[index].disabled = !items[index].disabled; // アイテムの有効・無効を切り替え

    const coverDiv = itemDiv.querySelector('.cover');
    if (coverDiv) {
        coverDiv.remove(); // すでにカバーがある場合は削除
    } else {
        const newCoverDiv = document.createElement('div');
        newCoverDiv.classList.remove('green');
        newCoverDiv.classList.add('cover', 'black');
        itemDiv.appendChild(newCoverDiv); // 新しくカバーを追加
    }
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

// DOMの変更を監視するためのMutationObserverを作成
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

// ページ読み込み時にアイテムを表示
document.addEventListener('DOMContentLoaded', renderItems);
document.addEventListener('DOMContentLoaded', renderItems);
