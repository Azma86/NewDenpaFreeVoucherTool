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
	
    { name: 'ずきんぶたばな', image: './images/ずきんぶたばな.png', quantity: 0, genre: ['★3', '3.ジュエル埋蔵地'], disabled: false },
    { name: 'アイスシープ', image: './images/アイスシープ.png', quantity: 0, genre: ['★3', '3.ジュエル埋蔵地'], disabled: false },
    { name: 'ラッシュボウ', image: './images/ラッシュボウ.png', quantity: 0, genre: ['★3', '3.ジュエル埋蔵地'], disabled: false },
    { name: 'どくろマイマイ', image: './images/どくろマイマイ.png', quantity: 0, genre: ['★3', '3.ジュエル埋蔵地'], disabled: false },
    { name: 'がんせきまじん', image: './images/がんせきまじん.png', quantity: 0, genre: ['★3', '3.ジュエル埋蔵地'], disabled: false },
    { name: 'アイスクラブ', image: './images/アイスクラブ.png', quantity: 0, genre: ['★4', '3.ジュエル埋蔵地'], disabled: false },
    { name: 'フローズンミスト', image: './images/フローズンミスト.png', quantity: 0, genre: ['★4', '3.ジュエル埋蔵地'], disabled: false },
    { name: 'ジュエルまじん', image: './images/ジュエルまじん.png', quantity: 0, genre: ['★5', '3.ジュエル埋蔵地'], disabled: false },
	
    { name: 'リーフホッグ', image: './images/リーフホッグ.png', quantity: 0, genre: ['★3', '4.風の塔と妖精'], disabled: false },
    { name: 'ダイころがし', image: './images/ダイころがし.png', quantity: 0, genre: ['★2', '4.風の塔と妖精'], disabled: false },
	{ name: 'マジックエイプ', image: './images/マジックエイプ.png', quantity: 0, genre: ['★5', '4.風の塔と妖精'], disabled: false },
    { name: 'ウィンドデビル', image: './images/ウィンドデビル.png', quantity: 0, genre: ['★3', '4.風の塔と妖精'], disabled: false },
    { name: 'ヘビーワーム', image: './images/ヘビーワーム.png', quantity: 0, genre: ['★5', '4.風の塔と妖精'], disabled: false },
    { name: 'しびれマタンゴ', image: './images/しびれマタンゴ.png', quantity: 0, genre: ['★4', '4.風の塔と妖精'], disabled: false },
    { name: 'ウィンドビー', image: './images/ウィンドビー.png', quantity: 0, genre: ['★2', '4.風の塔と妖精'], disabled: false },
	{ name: 'コドモドラコ', image: './images/コドモドラコ.png', quantity: 0, genre: ['★5', '4.風の塔と妖精'], disabled: false },
	
	{ name: 'はなもぐら', image: './images/はなもぐら.png', quantity: 0, genre: ['★1', '5.とうがらし農家'], disabled: false },
	{ name: 'もろこしおばけ', image: './images/もろこしおばけ.png', quantity: 0, genre: ['★4', '5.とうがらし農家'], disabled: false },
	{ name: 'タケノこぞう', image: './images/タケノこぞう.png', quantity: 0, genre: ['★5', '5.とうがらし農家'], disabled: false },
	{ name: 'おばけとうがらし', image: './images/おばけとうがらし.png', quantity: 0, genre: ['★5', '5.とうがらし農家'], disabled: false },
	{ name: 'ドライウッド', image: './images/ドライウッド.png', quantity: 0, genre: ['★4', '5.とうがらし農家'], disabled: false },
	{ name: 'ロックシープ', image: './images/ロックシープ.png', quantity: 0, genre: ['★3', '5.とうがらし農家'], disabled: false },
	{ name: 'ギガントード', image: './images/ギガントード.png', quantity: 0, genre: ['★3', '5.とうがらし農家'], disabled: false },
	{ name: 'ヒドラプラント', image: './images/ヒドラプラント.png', quantity: 0, genre: ['★4', '5.とうがらし農家'], disabled: false },
	{ name: 'ゴーレム', image: './images/ゴーレム.png', quantity: 0, genre: ['★4', '5.とうがらし農家'], disabled: false },
	
	{ name: 'かみなりちょう', image: './images/かみなりちょう.png', quantity: 0, genre: ['★1', '6.カジノの街'], disabled: false },
	{ name: 'カビまんじゅう', image: './images/カビまんじゅう.png', quantity: 0, genre: ['★1', '6.カジノの街'], disabled: false },
	{ name: 'ばけギツネ', image: './images/ばけギツネ.png', quantity: 0, genre: ['★2', '6.カジノの街'], disabled: false },
	{ name: 'ライジーン', image: './images/ライジーン.png', quantity: 0, genre: ['★4', '6.カジノの街'], disabled: false },
	{ name: 'ダークドラゴン', image: './images/ダークドラゴン.png', quantity: 0, genre: ['★5', '6.カジノの街'], disabled: false },
	{ name: 'パラライズレイ', image: './images/パラライズレイ.png', quantity: 0, genre: ['★5', '6.カジノの街'], disabled: false },
	{ name: 'サンダービースト', image: './images/サンダービースト.png', quantity: 0, genre: ['★3', '6.カジノの街'], disabled: false },
    { name: 'にゅうし', image: './images/にゅうし.png', quantity: 0, genre: ['★5', '6.カジノの街'], disabled: false },
	
    { name: 'おばけオトシゴ', image: './images/おばけオトシゴ.png', quantity: 0, genre: ['★4', '7.海賊と水の神殿'], disabled: false },
    { name: 'あおばなちょう', image: './images/あおばなちょう.png', quantity: 0, genre: ['★3', '7.海賊と水の神殿'], disabled: false },
    { name: 'おおナマコ', image: './images/おおナマコ.png', quantity: 0, genre: ['★3', '7.海賊と水の神殿'], disabled: false },
    { name: 'かいぞくキャット', image: './images/かいぞくキャット.png', quantity: 0, genre: ['★3', '7.海賊と水の神殿'], disabled: false },
    { name: 'かいぞくウッキー', image: './images/かいぞくウッキー.png', quantity: 0, genre: ['★4', '7.海賊と水の神殿'], disabled: false },
    { name: 'よつめシャーク', image: './images/よつめシャーク.png', quantity: 0, genre: ['★3', '7.海賊と水の神殿'], disabled: false },
    { name: 'ハンマーアンコウ', image: './images/ハンマーアンコウ.png', quantity: 0, genre: ['★4', '7.海賊と水の神殿'], disabled: false },
    { name: 'りくガニ', image: './images/りくガニ.png', quantity: 0, genre: ['★3', '7.海賊と水の神殿'], disabled: false },
    { name: 'あばれコブダイ', image: './images/あばれコブダイ.png', quantity: 0, genre: ['★3', '7.海賊と水の神殿'], disabled: false },
    { name: 'かいりゅう', image: './images/かいりゅう.png', quantity: 0, genre: ['★5', '7.海賊と水の神殿'], disabled: false },
	
    { name: 'シールドナイト', image: './images/シールドナイト.png', quantity: 0, genre: ['★3', '8.試練の塔'], disabled: false },
    { name: 'ビショップ', image: './images/ビショップ.png', quantity: 0, genre: ['★3', '8.試練の塔'], disabled: false },
    { name: 'プラチナドラゴン', image: './images/プラチナドラゴン.png', quantity: 0, genre: ['★3', '8.試練の塔'], disabled: false },
    { name: 'ルーク', image: './images/ルーク.png', quantity: 0, genre: ['★3', '8.試練の塔'], disabled: false },
    { name: 'クイーン', image: './images/クイーン.png', quantity: 0, genre: ['★3', '8.試練の塔'], disabled: false },
    { name: 'ねずみみけんし', image: './images/ねずみみけんし.png', quantity: 0, genre: ['★4', '8.試練の塔'], disabled: false },
    { name: 'エンゼルフライ', image: './images/エンゼルフライ.png', quantity: 0, genre: ['★5', '8.試練の塔'], disabled: false },
    { name: 'キラービースト', image: './images/キラービースト.png', quantity: 0, genre: ['★5', '8.試練の塔'], disabled: false },
    { name: 'キング', image: './images/キング.png', quantity: 0, genre: ['★4', '8.試練の塔'], disabled: false },
	
    { name: 'ブラッドバット', image: './images/ブラッドバット.png', quantity: 0, genre: ['★1', '9.暗闇の洞窟'], disabled: false },
    { name: 'ダークゴブリン', image: './images/ダークゴブリン.png', quantity: 0, genre: ['★1', '9.暗闇の洞窟'], disabled: false },
    { name: 'ゴースト', image: './images/ゴースト.png', quantity: 0, genre: ['★3', '9.暗闇の洞窟'], disabled: false },
    { name: 'たからばこぞう', image: './images/たからばこぞう.png', quantity: 0, genre: ['★4', '9.暗闇の洞窟'], disabled: false },
    { name: 'ファフニール', image: './images/ファフニール.png', quantity: 0, genre: ['★4', '9.暗闇の洞窟'], disabled: false },
    { name: 'ブラックバード', image: './images/ブラックバード.png', quantity: 0, genre: ['★3', '9.暗闇の洞窟'], disabled: false },
    { name: 'ビースト', image: './images/ビースト.png', quantity: 0, genre: ['★4', '9.暗闇の洞窟'], disabled: false },
    { name: 'デーモン', image: './images/デーモン.png', quantity: 0, genre: ['★4', '9.暗闇の洞窟'], disabled: false },
	
    { name: 'かえんマイマイ', image: './images/かえんマイマイ.png', quantity: 0, genre: ['★1', '駆け出し者への火の試練'], disabled: false },
    { name: 'かえんニードル', image: './images/かえんニードル.png', quantity: 0, genre: ['★4', '駆け出し者への火の試練'], disabled: false },
    { name: 'ファイヤーブロックス', image: './images/ファイヤーブロックス.png', quantity: 0, genre: ['★4', '駆け出し者への火の試練'], disabled: false },
    { name: 'ファイアゴーレム', image: './images/ファイアゴーレム.png', quantity: 0, genre: ['★4', '駆け出し者への火の試練'], disabled: false },
    { name: 'ファイアミスト', image: './images/ファイアミスト.png', quantity: 0, genre: ['★3', '駆け出し者への火の試練'], disabled: false },
    { name: 'ファイアバード', image: './images/ファイアバード.png', quantity: 0, genre: ['★4', '駆け出し者への火の試練'], disabled: false },
    { name: 'れんごくウッキー', image: './images/れんごくウッキー.png', quantity: 0, genre: ['★4', '駆け出し者への火の試練'], disabled: false },
    { name: 'タフビースト', image: './images/タフビースト.png', quantity: 0, genre: ['★4', '駆け出し者への火の試練'], disabled: false },
    { name: 'ファイヤーころがし', image: './images/ファイヤーころがし.png', quantity: 0, genre: ['★3', '駆け出し者への火の試練'], disabled: false },
    { name: 'レッドドラコ', image: './images/レッドドラコ.png', quantity: 0, genre: ['★3', '駆け出し者への火の試練'], disabled: false },
    { name: 'かえんふくろう', image: './images/かえんふくろう.png', quantity: 0, genre: ['★3', '駆け出し者への火の試練'], disabled: false },
    { name: 'レッドドラゴン', image: './images/レッドドラゴン.png', quantity: 0, genre: ['★4', '駆け出し者への火の試練'], disabled: false },
	
    { name: 'れいこくチョウ', image: './images/れいこくチョウ.png', quantity: 0, genre: ['★1', '駆け出し者への氷の試練'], disabled: false },
    { name: 'フロストゴブリン', image: './images/フロストゴブリン.png', quantity: 0, genre: ['★3', '駆け出し者への氷の試練'], disabled: false },
    { name: 'アイスバード', image: './images/アイスバード.png', quantity: 0, genre: ['★3', '駆け出し者への氷の試練'], disabled: false },
    { name: 'アイスウォーカー', image: './images/アイスウォーカー.png', quantity: 0, genre: ['★4', '駆け出し者への氷の試練'], disabled: false },
    { name: 'れいとうナマコ', image: './images/れいとうナマコ.png', quantity: 0, genre: ['★3', '駆け出し者への氷の試練'], disabled: false },
    { name: 'アイスサソリ', image: './images/アイスサソリ.png', quantity: 0, genre: ['★4', '駆け出し者への氷の試練'], disabled: false },
    { name: 'アイスフライ', image: './images/アイスフライ.png', quantity: 0, genre: ['★4', '駆け出し者への氷の試練'], disabled: false },
    { name: 'アイスドラゴン', image: './images/アイスドラゴン.png', quantity: 0, genre: ['★4', '駆け出し者への氷の試練'], disabled: false },
    { name: 'アイスワーム', image: './images/アイスワーム.png', quantity: 0, genre: ['★1', '駆け出し者への氷の試練'], disabled: false },
    { name: 'ブリザードプテラ', image: './images/ブリザードプテラ.png', quantity: 0, genre: ['★3', '駆け出し者への氷の試練'], disabled: false },
    { name: 'ホワイトベア', image: './images/ホワイトベア.png', quantity: 0, genre: ['★4', '駆け出し者への氷の試練'], disabled: false },
    { name: 'アイスゲーター', image: './images/アイスゲーター.png', quantity: 0, genre: ['★4', '駆け出し者への氷の試練'], disabled: false },
	
    { name: 'リーフドール', image: './images/リーフドール.png', quantity: 0, genre: ['★3', '駆け出し者への風の試練'], disabled: false },
    { name: 'かぜつかい', image: './images/かぜつかい.png', quantity: 0, genre: ['★4', '駆け出し者への風の試練'], disabled: false },
    { name: 'トルネードホース', image: './images/トルネードホース.png', quantity: 0, genre: ['★4', '駆け出し者への風の試練'], disabled: false },
    { name: 'ウィンドゴーレム', image: './images/ウィンドゴーレム.png', quantity: 0, genre: ['★4', '駆け出し者への風の試練'], disabled: false },
    { name: 'もりナマコ', image: './images/もりナマコ.png', quantity: 0, genre: ['★3', '駆け出し者への風の試練'], disabled: false },
    { name: 'たつまきシャーク', image: './images/たつまきシャーク.png', quantity: 0, genre: ['★4', '駆け出し者への風の試練'], disabled: false },
    { name: 'ジャングルオーク', image: './images/ジャングルオーク.png', quantity: 0, genre: ['★4', '駆け出し者への風の試練'], disabled: false },
    { name: 'エアドラゴン', image: './images/エアドラゴン.png', quantity: 0, genre: ['★4', '駆け出し者への風の試練'], disabled: false },
    { name: 'グリーンキャット', image: './images/グリーンキャット.png', quantity: 0, genre: ['★3', '駆け出し者への風の試練'], disabled: false },
    { name: 'カーニバルイーグル', image: './images/カーニバルイーグル.png', quantity: 0, genre: ['★4', '駆け出し者への風の試練'], disabled: false },
    { name: 'とっぷうこぞう', image: './images/とっぷうこぞう.png', quantity: 0, genre: ['★3', '駆け出し者への風の試練'], disabled: false },
    { name: 'せいりゅう', image: './images/せいりゅう.png', quantity: 0, genre: ['★4', '駆け出し者への風の試練'], disabled: false },
	
    { name: 'ビッグバット', image: './images/ビッグバット.png', quantity: 0, genre: ['★1', '駆け出し者への土の試練'], disabled: false },
    { name: 'やきもろこし', image: './images/やきもろこし.png', quantity: 0, genre: ['★2', '駆け出し者への土の試練'], disabled: false },
    { name: 'だいちのつかい', image: './images/だいちのつかい.png', quantity: 0, genre: ['★4', '駆け出し者への土の試練'], disabled: false },
    { name: 'せきどうまじん', image: './images/せきどうまじん.png', quantity: 0, genre: ['★4', '駆け出し者への土の試練'], disabled: false },
    { name: 'マッディミスト', image: './images/マッディミスト.png', quantity: 0, genre: ['★3', '駆け出し者への土の試練'], disabled: false },
    { name: 'カエルせんし', image: './images/カエルせんし.png', quantity: 0, genre: ['★4', '駆け出し者への土の試練'], disabled: false },
    { name: 'トライコーン', image: './images/トライコーン.png', quantity: 0, genre: ['★4', '駆け出し者への土の試練'], disabled: false },
    { name: 'ストーンクラブ', image: './images/ストーンクラブ.png', quantity: 0, genre: ['★4', '駆け出し者への土の試練'], disabled: false },
    { name: 'ビッグニードル', image: './images/ビッグニードル.png', quantity: 0, genre: ['★3', '駆け出し者への土の試練'], disabled: false },
    { name: 'タケノコデビル', image: './images/タケノコデビル.png', quantity: 0, genre: ['★4', '駆け出し者への土の試練'], disabled: false },
    { name: 'アースドラコ', image: './images/アースドラコ.png', quantity: 0, genre: ['★4', '駆け出し者への土の試練'], disabled: false },
    { name: 'どくガエルせんし', image: './images/どくガエルせんし.png', quantity: 0, genre: ['★5', '駆け出し者への土の試練'], disabled: false },
	
	{ name: 'サンダードラゴン', image: './images/サンダードラゴン.png', quantity: 0, genre: ['★5', '駆け出し者への雷の試練'], disabled: false },
	{ name: 'サンダーボウ', image: './images/サンダーボウ.png', quantity: 0, genre: ['★4', '駆け出し者への雷の試練'], disabled: false },
    { name: 'サンダーエイプ', image: './images/サンダーエイプ.png', quantity: 0, genre: ['★4', '駆け出し者への雷の試練'], disabled: false },
	{ name: 'サンダービー', image: './images/サンダービー.png', quantity: 0, genre: ['★4', '駆け出し者への雷の試練'], disabled: false },
    { name: 'サンダーシープ', image: './images/サンダーシープ.png', quantity: 0, genre: ['★3', '駆け出し者への雷の試練'], disabled: false },
    { name: 'サンダーミスト', image: './images/サンダーミスト.png', quantity: 0, genre: ['★5', '駆け出し者への雷の試練'], disabled: false },
	{ name: 'かみなりゴケ', image: './images/かみなりゴケ.png', quantity: 0, genre: ['★1', '駆け出し者への雷の試練'], disabled: false },
    { name: 'あらくれきょじん', image: './images/あらくれきょじん.png', quantity: 0, genre: ['★4', '駆け出し者への雷の試練'], disabled: false },
    { name: 'イエローアイズプテラ', image: './images/イエローアイズプテラ.png', quantity: 0, genre: ['★4', '駆け出し者への雷の試練'], disabled: false },
	{ name: 'エレキドラコ', image: './images/エレキドラコ.png', quantity: 0, genre: ['★2', '駆け出し者への雷の試練'], disabled: false },
	{ name: 'ビリビリクラゲ', image: './images/ビリビリクラゲ.png', quantity: 0, genre: ['★3', '駆け出し者への雷の試練'], disabled: false },
	{ name: 'しびれジェリー', image: './images/しびれジェリー.png', quantity: 0, genre: ['★3', '駆け出し者への雷の試練'], disabled: false },
	
    { name: 'バブルフロッグ', image: './images/バブルフロッグ.png', quantity: 0, genre: ['★1', '駆け出し者への水の試練'], disabled: false },
    { name: 'アクアボウ', image: './images/アクアボウ.png', quantity: 0, genre: ['★3', '駆け出し者への水の試練'], disabled: false },
    { name: 'アクアサソリ', image: './images/アクアサソリ.png', quantity: 0, genre: ['★3', '駆け出し者への水の試練'], disabled: false },
    { name: 'ポイズンレイ', image: './images/ポイズンレイ.png', quantity: 0, genre: ['★3', '駆け出し者への水の試練'], disabled: false },
    { name: 'アクアマンモス', image: './images/アクアマンモス.png', quantity: 0, genre: ['★4', '駆け出し者への水の試練'], disabled: false },
    { name: 'タコきぞく', image: './images/タコきぞく.png', quantity: 0, genre: ['★4', '駆け出し者への水の試練'], disabled: false },
    { name: 'てっぽうオトシゴ', image: './images/てっぽうオトシゴ.png', quantity: 0, genre: ['★3', '駆け出し者への水の試練'], disabled: false },
    { name: 'いかしょうぐん', image: './images/いかしょうぐん.png', quantity: 0, genre: ['★4', '駆け出し者への水の試練'], disabled: false },
    { name: 'ポイズンクラブ', image: './images/ポイズンクラブ.png', quantity: 0, genre: ['★5', '駆け出し者への水の試練'], disabled: false },
    { name: 'ギガントコブダイ', image: './images/ギガントコブダイ.png', quantity: 0, genre: ['★4', '駆け出し者への水の試練'], disabled: false },
    { name: 'もうどくキンチャク', image: './images/もうどくキンチャク.png', quantity: 0, genre: ['★3', '駆け出し者への水の試練'], disabled: false },
    { name: 'ばけつマイマイ', image: './images/ばけつマイマイ.png', quantity: 0, genre: ['★4', '駆け出し者への水の試練'], disabled: false },
    { name: 'バブルジェリー', image: './images/バブルジェリー.png', quantity: 0, genre: ['★4', '駆け出し者への水の試練'], disabled: false },
	
    { name: 'プラチナバード', image: './images/プラチナバード.png', quantity: 0, genre: ['★3', '駆け出し者への光の試練'], disabled: false },
    { name: 'シャインゴーレム', image: './images/シャインゴーレム.png', quantity: 0, genre: ['★4', '駆け出し者への光の試練'], disabled: false },
    { name: 'オラクルマスター', image: './images/オラクルマスター.png', quantity: 0, genre: ['★3', '駆け出し者への光の試練'], disabled: false },
    { name: 'レインボーミスト', image: './images/レインボーミスト.png', quantity: 0, genre: ['★4', '駆け出し者への光の試練'], disabled: false },
    { name: 'オクトリッチ', image: './images/オクトリッチ.png', quantity: 0, genre: ['★4', '駆け出し者への光の試練'], disabled: false },
    { name: 'ホワイトオウル', image: './images/ホワイトオウル.png', quantity: 0, genre: ['★3', '駆け出し者への光の試練'], disabled: false },
    { name: 'エルコーン', image: './images/エルコーン.png', quantity: 0, genre: ['★4', '駆け出し者への光の試練'], disabled: false },
    { name: 'ひかるきょじん', image: './images/ひかるきょじん.png', quantity: 0, genre: ['★3', '駆け出し者への光の試練'], disabled: false },
    { name: 'てんしドール', image: './images/てんしドール.png', quantity: 0, genre: ['★2', '駆け出し者への光の試練'], disabled: false },
    { name: 'てんしのフォーク', image: './images/てんしのフォーク.png', quantity: 0, genre: ['★3', '駆け出し者への光の試練'], disabled: false },
    { name: 'ホワイトドラコ', image: './images/ホワイトドラコ.png', quantity: 0, genre: ['★3', '駆け出し者への光の試練'], disabled: false },
    { name: 'シャイニーキャット', image: './images/シャイニーキャット.png', quantity: 0, genre: ['★3', '駆け出し者への光の試練'], disabled: false },
	
    { name: 'くろぶたウサギ', image: './images/くろぶたウサギ.png', quantity: 0, genre: ['★2', '駆け出し者への闇の試練'], disabled: false },
    { name: 'デビルバーサーカー', image: './images/デビルバーサーカー.png', quantity: 0, genre: ['★3', '駆け出し者への闇の試練'], disabled: false },
    { name: 'エイプメイジ', image: './images/エイプメイジ.png', quantity: 0, genre: ['★3', '駆け出し者への闇の試練'], disabled: false },
    { name: 'ダークフライ', image: './images/ダークフライ.png', quantity: 0, genre: ['★4', '駆け出し者への闇の試練'], disabled: false },
    { name: 'ブラックビースト', image: './images/ブラックビースト.png', quantity: 0, genre: ['★4', '駆け出し者への闇の試練'], disabled: false },
    { name: 'ダークどうけギツネ', image: './images/ダークどうけギツネ.png', quantity: 0, genre: ['★4', '駆け出し者への闇の試練'], disabled: false },
    { name: 'カーズウォーカー', image: './images/カーズウォーカー.png', quantity: 0, genre: ['★4', '駆け出し者への闇の試練'], disabled: false },
    { name: 'イビルドラコ', image: './images/イビルドラコ.png', quantity: 0, genre: ['★4', '駆け出し者への闇の試練'], disabled: false },
    { name: 'ブラックスパイス', image: './images/ブラックスパイス.png', quantity: 0, genre: ['★4', '駆け出し者への闇の試練'], disabled: false },
    { name: 'イビルバタフライ', image: './images/イビルバタフライ.png', quantity: 0, genre: ['★3', '駆け出し者への闇の試練'], disabled: false },
    { name: 'あんこくきとうし', image: './images/あんこくきとうし.png', quantity: 0, genre: ['★4', '駆け出し者への闇の試練'], disabled: false },
    { name: 'イービルキャット', image: './images/イービルキャット.png', quantity: 0, genre: ['★3', '駆け出し者への闇の試練'], disabled: false },
	
    { name: 'ヒートマンモス', image: './images/ヒートマンモス.png', quantity: 0, genre: ['★5', '冒険者の試練'], disabled: false },
    { name: 'アイスデーモン', image: './images/アイスデーモン.png', quantity: 0, genre: ['★5', '冒険者の試練'], disabled: false },
    { name: 'れっぷうりゅう', image: './images/れっぷうりゅう.png', quantity: 0, genre: ['★5', '冒険者の試練'], disabled: false },
    { name: 'つちくれきょじん', image: './images/つちくれきょじん.png', quantity: 0, genre: ['★5', '冒険者の試練'], disabled: false },
    { name: 'らいでん', image: './images/らいでん.png', quantity: 0, genre: ['★5', '冒険者の試練'], disabled: false },
    { name: 'オクトパイダー', image: './images/らいでん.png', quantity: 0, genre: ['★5', '冒険者の試練'], disabled: false },
    { name: 'エンゼルライダー', image: './images/らいでん.png', quantity: 0, genre: ['★5', '冒険者の試練'], disabled: false },
    { name: 'ファントムホース', image: './images/らいでん.png', quantity: 0, genre: ['★5', '冒険者の試練'], disabled: false },
	
    { name: 'イフリート', image: './images/イフリート.png', quantity: 0, genre: ['★5', '勇者の試練'], disabled: false },
    { name: 'クリムゾンキーパー', image: './images/クリムゾンキーパー.png', quantity: 0, genre: ['★5', '勇者の試練'], disabled: false },
    { name: 'フロストキーパー', image: './images/フロストキーパー.png', quantity: 0, genre: ['★5', '勇者の試練'], disabled: false },
    { name: 'サイクロンまじん', image: './images/サイクロンまじん.png', quantity: 0, genre: ['★5', '勇者の試練'], disabled: false },
    { name: 'パームヒドラ', image: './images/パームヒドラ.png', quantity: 0, genre: ['★5', '勇者の試練'], disabled: false },
    { name: 'いなずまトライコーン', image: './images/いなずまトライコーン.png', quantity: 0, genre: ['★5', '勇者の試練'], disabled: false },
    { name: 'ドリルアンコウ', image: './images/ドリルアンコウ.png', quantity: 0, genre: ['★5', '勇者の試練'], disabled: false },
    { name: 'でんきフジツボ', image: './images/でんきフジツボ.png', quantity: 0, genre: ['★5', '勇者の試練'], disabled: false },
    { name: 'せいなるぶたばな', image: './images/せいなるぶたばな.png', quantity: 0, genre: ['★5', '勇者の試練'], disabled: false },
    { name: 'はがねぶたウサギ', image: './images/はがねぶたウサギ.png', quantity: 0, genre: ['★5', '勇者の試練'], disabled: false },
    { name: 'マスターぶたばな', image: './images/マスターぶたばな.png', quantity: 0, genre: ['★5', '勇者の試練'], disabled: false },
	
    { name: 'ゲソパラディン', image: './images/ゲソパラディン.png', quantity: 0, genre: ['★5', '達人の試練'], disabled: false },
    { name: 'アイスフェニックス', image: './images/アイスフェニックス.png', quantity: 0, genre: ['★5', '達人の試練'], disabled: false },
    { name: 'タイブーン', image: './images/タイブーン.png', quantity: 0, genre: ['★5', '達人の試練'], disabled: false },
    { name: 'ガイアドラゴン', image: './images/ガイアドラゴン.png', quantity: 0, genre: ['★5', '達人の試練'], disabled: false },
    { name: 'かみなりタイガー', image: './images/かみなりタイガー.png', quantity: 0, genre: ['★5', '達人の試練'], disabled: false },
    { name: 'ホースドラゴン', image: './images/ホースドラゴン.png', quantity: 0, genre: ['★5', '達人の試練'], disabled: false },
    { name: 'ペンギンロード', image: './images/ペンギンロード.png', quantity: 0, genre: ['★5', '達人の試練'], disabled: false },
    { name: 'あんこくりゅう', image: './images/あんこくりゅう.png', quantity: 0, genre: ['★5', '達人の試練'], disabled: false },
	
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

// アイテムが描画される前に、画像保存ボタンのイベントを設定
    document.getElementById('saveBtn').addEventListener('click', saveAsImage);

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
    window.requestAnimationFrame(() => {
		
        item.quantity = parseInt(value);
        const itemDiv = document.querySelector(`[data-id="${item.id}"]`);
        itemDiv.querySelector('input[type="number"]').value = item.quantity;
		
		// カバーの状態だけを更新
        addCover(itemDiv, item);
		
		// ローカルストレージに保存
        saveToLocalStorage();
    });


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
    html2canvas(container, { useCORS: true, logging: true })
        .then(canvas => {
            const link = document.createElement('a');
            link.download = 'filtered_items.png'; // 絞り込み状態で保存
            link.href = canvas.toDataURL('image/png');
            link.click(); // 自動でリンクをクリックしてダウンロードを開始
        })
        .catch(error => {
            console.error('画像の保存に失敗しました: ', error);
        });
}

// 新しいタブで開く
function openInNewTab() {
    const container = document.querySelector("#item-container");

    // html2canvas を使って #item-container をキャプチャ
    html2canvas(container, { useCORS: true, logging: true })
        .then(canvas => {
            const imageUrl = canvas.toDataURL('image/png');
            const newTab = window.open();
            newTab.document.body.innerHTML = `<img src="${imageUrl}" alt="Captured Image">`;
        })
        .catch(error => {
            console.error('新しいタブでの画像表示に失敗しました: ', error);
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
