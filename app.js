// === ASSETS ===
const ASSETS = {
  morning: "assets/morning-clear.png",
  recovery: "assets/recovery-clear.png",
  shadow: "assets/shadow-clear.png",
  migraine: "assets/migraine-clear.png"
};

// === DATA ===
const dayNames = { mon: "月", tue: "火", wed: "水", thu: "木", fri: "金", sat: "土", sun: "日" };

const weekPlan = [
  [1, "呼吸法・神経的", "朝90秒と就寝前に固定。RF=4.5bpm（吸う5秒・吐く8秒）。"],
  [2, "足指接地確認", "立つたびに6点接地を30秒。量より回数。"],
  [3, "キャット・カウ", "朝5分版の中で10回。首は楽に。"],
  [4, "椅子軸方の基本", "レッスン間に姿勢リセット。週全体は60-70%に。", true],
  [5, "肩甲骨360度回転", "朝5分とシャドー前。ゆっくり円を描く。"],
  [6, "股関節ウェイブ", "歩行前とシャドー前。膝を柔らかく。"],
  [7, "腸腰筋マーチング", "月曜の核。背骨を丸めず、左右10回。"],
  [8, "橋のポーズ", "月曜の核。週全体は60-70%に。", true],
  [9, "初動落下エネルギー", "水曜シャドーで前後左右に各5本。"],
  [10, "スローモーションシャドー", "1動作3秒。呼吸が先、打撃は後。"],
  [11, "目を閉じた立位バランス", "緑判定だけ。壁か椅子の近くで20秒。"],
  [12, "その場突き・高速体幹", "緑判定だけ短く。週全体は60-70%に。", true]
];

const quickCues = [
  ["椅子軸方 5秒", "力を抜いてお辞儀。お尻を浮かせ、5秒で立つ。"],
  ["座る感覚 30秒", "尾骨を椅子の中心へ。背骨を立て、腹は抜く。"],
  ["頸部ニューテーション 30秒", "顎を軽く引き、左右に小さく20回。痛ければ中止。"],
  ["肩甲骨の上げ下げ 45秒", "すくめる、下げる。首は固めない。"],
  ["指関節ほぐし 60秒", "道具がある時だけ。指の股を3回ずつ軽く。"],
  ["足指接地 30秒", "親指、小指、外側ライン、かかと。"],
  ["中指タップ 1秒", "注意の切替だけ。1日1回まで。"],
  ["呼吸1回 15秒", "吸う5秒、吐く8秒。顔と肩を落とす。"],
  ["ここからクルン 45秒", "肩甲骨を片方ずつ軽く回す。"],
  ["スワイショウ横 60秒", "腕を振るより、体ごと揺れる。"]
];

function step(time, duration, title, instruction, prepare, actions, avoid) {
  return { time, duration, title, instruction, prepare, actions, avoid };
}

const morning5 = [
  step("0:00-0:40", 40, "背骨はまっすぐ", "立位で足裏全体を床に。頭頂が上に伸びる感覚を作る。",
    ["足幅は腰幅", "膝を固めない", "顎は軽く引く"],
    ["頭頂が上に伸びる", "腹腔を内側へ広げる", "骨で支える感じ"],
    ["胸を反らせて作らない", "首を固めない"]),
  step("0:40-1:30", 50, "足指接地確認", "裸足か薄い靴下で、足裏の点を感じる。",
    ["床にまっすぐ立つ", "重心を真ん中に"],
    ["親指先・小指先を感じる", "小指からかかと外側ラインを見る", "かかとを軽く床へ預ける"],
    ["足指で床を掴み続けない"]),
  step("1:30-2:30", 60, "呼吸 4.5bpm", "吸う5秒、吐く8秒。4-5呼吸。吐く方を丁寧に。",
    ["座るか立つ", "肩と顎を軽くする"],
    ["吸う5秒・吐く8秒", "顔・舌・みぞおちを抜く", "肩が上がったらリセット"],
    ["息を止めない", "深呼吸で苦しくしない"]),
  step("2:30-3:30", 60, "キャット・カウ", "四つ這い。手は肩の下、膝は股関節の下。10回。",
    ["四つ這い姿勢", "首は楽に保つ"],
    ["背中を丸める", "背中を反らせる", "ゆっくり10回"],
    ["首だけで動かさない", "痛い範囲へ押し込まない"]),
  step("3:30-4:20", 50, "肩甲骨360度回転", "立位。腕ではなく肩甲骨に意識。",
    ["立位、腕は脱力", "肩を下げる"],
    ["前→上→後→下の円", "左右ゆっくり", "呼吸は止めない"],
    ["首肩に痛みが増えたら小さく"]),
  step("4:20-5:00", 40, "股関節ウェイブ", "膝を柔らかくして股関節だけで揺らす。",
    ["立位、膝は軽く曲げる", "足裏を床に置く"],
    ["股関節だけで前後に揺れる", "左右にも小さく", "足裏は床に預ける"],
    ["腰を反らせて代用しない"])
];

const sessions = {
  morning90: {
    title: "朝起動90秒", subtitle: "赤判定・寝坊・前兆寄りの日",
    days: ["mon","tue","wed","thu","fri","sat","sun"], status: ["red","migraine"],
    asset: ASSETS.morning, intro: "今日は戻れる体を残す日。呼吸と末端だけで終える。",
    steps: [
      step("0:00-1:00", 60, "呼吸 4.5bpm", "座位か立位。吸う5秒、吐く8秒。",
        ["楽な姿勢", "肩を下げる"],
        ["吐く時に肩・顔・腹を落とす", "深く吸おうとしすぎない"],
        ["ブレスホールドしない", "めまいが出たら中止"]),
      step("1:00-1:30", 30, "足指接地確認", "座っても立ってもよい。足裏を床に置く。",
        ["足を床にしっかり置く"],
        ["親指先を感じる", "小指先を感じる", "かかとと外側ラインを感じる"],
        ["強く踏み込まない", "足指を握りこまない"])
    ]
  },
  morning5: {
    title: "朝起動5分", subtitle: "普通の日の標準",
    days: ["mon","tue","wed","thu","fri","sat","sun"], status: ["green","yellow"],
    asset: ASSETS.morning, intro: "軸・呼吸・末端・モビリティを少しずつ。",
    steps: morning5
  },
  morning8: {
    title: "朝起動8分", subtitle: "緑判定・木曜稽古日",
    days: ["thu","sat"], status: ["green"],
    asset: ASSETS.morning, intro: "5分版に小さいジャンプ・眼・バランスを足す。",
    steps: [
      ...morning5.map(s => ({...s})),
      step("5:00-6:00", 60, "小さい軸ジャンプ", "足幅は腰幅。着地の静かさだけを見る。",
        ["立位、腰幅", "膝を柔らかく"],
        ["小さく5回", "音を消す"],
        ["赤や黄ではやらない", "首肩痛がある日は飛ばない"]),
      step("6:00-7:00", 60, "眼球ストレッチ", "顔は正面。目だけを動かす。",
        ["楽な姿勢"],
        ["上下左右を見る", "近くと遠くに焦点", "めまいが出たら止める"],
        ["首ごと速く振らない"]),
      step("7:00-8:00", 60, "目を閉じた立位バランス", "壁か椅子の近くで立つ。",
        ["手をつける場所を確保"],
        ["20秒×2", "足裏の接地を感じる", "崩れそうならすぐ手をつく"],
        ["転倒リスクがある場所でやらない"])
    ]
  },
  monday20: {
    title: "月曜20分版", subtitle: "最初の1週間",
    days: ["mon"], status: ["green","yellow"],
    asset: ASSETS.shadow, intro: "種目を絞った導入版。翌日に残さない。",
    steps: [
      step("0:00-3:00", 180, "ウォームアップ3種", "キャット・カウ→肩甲骨360度→股関節ウェイブ各1分。",
        ["四つ這いから始める"],
        ["首を楽にする", "肩甲骨をゆっくり回す", "股関節を小さく揺らす"],
        ["汗をかく強度にしない"]),
      step("3:00-7:00", 240, "橋のポーズ", "仰向けで膝を立てて、お尻を上げて締める。12回×2周。",
        ["仰向け、膝を立てる"],
        ["お尻を上げる", "大殿筋を締める"],
        ["腰を反らせない", "首で踏ん張らない"]),
      step("7:00-11:00", 240, "肩甲骨外転", "四つ這いから前ならえの方向へ。10回×2周。",
        ["四つ這い"],
        ["肩を下ろす", "床を押す"],
        ["肩をすくめない"]),
      step("11:00-15:00", 240, "前鋸筋プランク", "肘プランク。きつければ膝つき。20秒×2。",
        ["肘プランク姿勢"],
        ["胸を少し沈める", "床を押して胸を上げる"],
        ["腰を反らせない", "赤判定ではやらない"]),
      step("15:00-18:00", 180, "初動落下エネルギー", "立位から小さく前進。5歩×2本。",
        ["立位、力を抜く"],
        ["体を落とす感覚", "落下で前進"],
        ["速くやらない"]),
      step("18:00-20:00", 120, "呼吸で終了", "座るか立つ。吐く方を長く。",
        ["楽な姿勢"],
        ["顔・舌・腹を抜く"],
        ["追加種目を足さない"])
    ]
  },
  mondayFull: {
    title: "月曜30-40分", subtitle: "動的レジスタンス・RPE6まで",
    days: ["mon"], status: ["green"],
    asset: ASSETS.shadow, intro: "ハード筋トレではなく、壊れない出力を作る日。",
    steps: [
      step("0:00-6:00", 360, "ウォームアップ6種", "キャット・カウ→肩甲骨→股関節→足首→足指→呼吸 各1分。",
        ["全種目を小さく始める"],
        ["鼻呼吸で余裕を残す", "痛みの確認を兼ねる"],
        ["息を上げない"]),
      step("6:00-10:00", 240, "橋のポーズ 12回", "大殿筋を締める。",
        ["仰向け膝立て"],
        ["お尻を上げる", "肋骨を開きすぎない", "足裏で床を押す"],
        ["腰で反らない"]),
      step("10:00-14:00", 240, "腸腰筋マーチング", "仰向け膝立てから骨盤を起こし、左右10回。",
        ["仰向け膝立て、骨盤を起こす"],
        ["交互に膝を胸へ", "背骨は丸めない"],
        ["腰が浮くなら小さく"]),
      step("14:00-18:00", 240, "肩甲骨外転＋前鋸筋プランク", "外転10回＋プランク20秒。",
        ["四つ這い／肘プランク"],
        ["床を押す", "胸をリフト", "肋骨を締める"],
        ["首肩で踏ん張らない"]),
      step("18:00-24:00", 360, "スクワット＋初動落下", "スクワット10回＋落下5歩を3周まで。",
        ["立位、足裏を離さない"],
        ["股関節から曲げる", "落ちる力で進む"],
        ["睡眠不足ならジャンプ追加しない"]),
      step("24:00-31:00", 420, "仕上げ4種", "秀徹プランク・連動性・股関節ローリング・スワイショウ縦。",
        ["楽な姿勢から開始"],
        ["30秒単位で区切る", "中心から手足を動かす"],
        ["RPE6を超えない"]),
      step("31:00-36:00", 300, "クールダウン", "腸腰筋・広背筋・呼吸で終える。",
        ["楽な姿勢"],
        ["左右30秒ずつ", "吐く息を長く"],
        ["達成感で追い込まない"])
    ]
  },
  tuesdayWalk: {
    title: "火曜 速歩25-35分", subtitle: "いつもの歩きの一部だけ",
    days: ["tue"], status: ["green","yellow"],
    asset: ASSETS.morning, intro: "すでに歩いている量の中で、25-35分だけ質を上げる。",
    steps: [
      step("開始前", 60, "足部6点を確認", "立って足裏を見る。",
        ["楽な立位"],
        ["親指先・小指先・外側ライン・かかと"],
        ["痛い場所を探さない"]),
      step("速歩 25-35分", 1500, "鼻呼吸ギリギリ可", "しゃべりにくい程度の速さ。",
        ["通勤や買い物路でOK"],
        ["最大心拍の60-70%（30歳なら120-135bpm）", "歩幅より足音の静かさ"],
        ["回復日に追加で歩かない", "頭痛前兆があれば中止"]),
      step("終了後", 60, "呼吸で戻す", "立つか座る。",
        ["楽な姿勢"],
        ["吐く息を長くする", "首肩の力を抜く"],
        ["その場で追加トレーニングしない"])
    ]
  },
  tuesdayNight: {
    title: "火曜 夜の呼吸 10分", subtitle: "RF 4.5bpm",
    days: ["tue"], status: ["green","yellow","red"],
    asset: ASSETS.recovery, intro: "呼吸を練習ではなく、睡眠への橋にする。",
    steps: [
      step("0:00-10:00", 600, "HRVバイオフィードバック", "Breathwrkで4.5bpmに設定。なければ吸う5秒・吐く8秒。",
        ["暗めの部屋", "楽な姿勢"],
        ["肩・顔・腹を抜く", "吐気を丁寧に"],
        ["苦しい深呼吸にしない", "スマホを見続けない"])
    ]
  },
  wednesday10: {
    title: "水曜シャドー 10分", subtitle: "最初の月",
    days: ["wed"], status: ["green","yellow"],
    asset: ASSETS.shadow, intro: "汗より精度。最初の月はストレートリードだけ。",
    steps: [
      step("0:00-3:00", 180, "体軸の基礎", "丹田周辺から手足を動かす感覚。",
        ["立位、肩を下げる"],
        ["足裏を感じる", "腕だけで打たない"],
        ["速くしない"]),
      step("3:00-6:00", 180, "初動落下", "前進・後退・左右を各5本。",
        ["立位"],
        ["体を落とす", "足音を小さく", "戻る余力を残す"],
        ["飛び跳ねない"]),
      step("6:00-9:00", 180, "スローモーションリード", "1動作3秒。呼吸が先、拳は後。",
        ["構える"],
        ["吐きながら伸ばす", "骨盤から拳へつなぐ"],
        ["全力で打たない"]),
      step("9:00-10:00", 60, "呼吸＋足指で終了", "立位で整える。",
        ["立位"],
        ["吸う5秒・吐く8秒×1-2回", "足裏6点に戻す"],
        ["反省を長引かせない"])
    ]
  },
  wednesday30: {
    title: "水曜シャドー 30分", subtitle: "技術・反応・連動（緑限定）",
    days: ["wed"], status: ["green"],
    asset: ASSETS.shadow, intro: "中心から動く精度を上げる日。汗を目的にしない。",
    steps: [
      ...morning5.map(s => ({...s})),
      step("5:00-8:00", 180, "体軸の基礎構築", "丹田から手足を動かす。",
        ["立位"],
        ["腕だけで始めない", "足裏を感じる", "背骨は長く"],
        ["力で固めない"]),
      step("8:00-11:00", 180, "初動落下エネルギー", "前後左右に各5本。",
        ["立位"],
        ["落ちる力で始める", "足音を小さく"],
        ["ジャンプにしない"]),
      step("11:00-15:00", 240, "シンプルパンチ力向上", "骨盤回転から拳へ。左右ゆっくり。",
        ["構える"],
        ["骨盤を先に回す", "拳は遅れて出る", "息を吐く"],
        ["肩だけで打たない"]),
      step("15:00-19:00", 240, "スローモーションシャドー", "1動作3秒。呼吸が先。",
        ["構える"],
        ["目線を置く", "体が追う", "余力を残す"],
        ["速くしない"]),
      step("19:00-22:00", 180, "その場突き・高速体幹", "20秒動く・40秒休むを3本。",
        ["立位、足裏を確認"],
        ["緑判定だけ", "短く速く"],
        ["黄や赤ではやらない"]),
      step("22:00-25:00", 180, "視線と眼球", "目線を先に置き、体が追う。",
        ["立位"],
        ["上下左右を見る", "近遠を切り替える", "首は楽に"],
        ["めまいが出たら中止"]),
      step("25:00-30:00", 300, "呼吸＋足指で終了", "呼吸＋接地確認。",
        ["楽な姿勢"],
        ["吐く息を長く", "足裏6点へ戻す"],
        ["動画研究へ流れない"])
    ]
  },
  thursdayPre: {
    title: "木曜 稽古前10分", subtitle: "反応できる状態へ",
    days: ["thu"], status: ["green","yellow"],
    asset: ASSETS.shadow, intro: "強くするのではなく、軸・呼吸・末端を起こす。",
    steps: [
      step("0:00-1:00", 60, "椅子軸方の基本", "1-3回だけ。効かせようとしない。",
        ["椅子に座る"],
        ["背中と首の力を抜く", "ゆっくり立つ"],
        ["何度も反復しない"]),
      step("1:00-2:00", 60, "足首チューニング", "つま先裏返し・先端上げ・内側・外側を各3回。",
        ["座位で足を出す"],
        ["小さく動かす", "足裏の感覚を見る"],
        ["痛い方向へ押さない"]),
      step("2:00-3:00", 60, "足指接地確認", "6点接地を確認する。",
        ["立位"],
        ["親指先・小指先・外側・かかと"],
        ["踏みすぎない"]),
      step("3:00-5:00", 120, "呼吸法・物理的", "背中側まで膨らむ呼吸。",
        ["楽な姿勢"],
        ["腹だけでなく背中へ", "肩を上げない"],
        ["ブレスホールドしない"]),
      step("5:00-7:00", 120, "肩甲骨360度", "前・上・後・下へゆっくり。",
        ["立位"],
        ["左右差を見る", "首を楽にする"],
        ["速く回さない"]),
      step("7:00-8:30", 90, "股関節ウェイブ", "膝を柔らかく。",
        ["立位"],
        ["前後左右に揺れる", "足裏は床に置く"],
        ["腰で反らない"]),
      step("8:30-10:00", 90, "スローモーションシャドー", "1発ずつ吐きながら。",
        ["構える"],
        ["呼吸が先", "目線を置く", "力みを抜く"],
        ["全力で打たない"])
    ]
  },
  thursdayPost: {
    title: "木曜 稽古後15分", subtitle: "金曜の崩れを減らす",
    days: ["thu"], status: ["green","yellow","red"],
    asset: ASSETS.recovery, intro: "反省より栄養と睡眠。90分以内に布団。",
    steps: [
      step("直後30分以内", 120, "補給", "コンビニで先に買っておく。",
        ["イートインまたは帰宅後"],
        ["おにぎり1個", "プロテイン1杯または牛乳と卵", "水500-750ml"],
        ["空腹のまま帰宅しない"]),
      step("0:00-3:00", 180, "スワイショウ横", "腕を振るより、体ごと揺れる。",
        ["立位"],
        ["肩を落とす", "足裏を感じる", "呼吸を止めない"],
        ["反省しながらやらない"]),
      step("3:00-5:00", 120, "呼吸 4.5bpm", "自然でもよい。",
        ["楽な姿勢"],
        ["吐く息を長めに", "顔と腹を抜く"],
        ["苦しくしない"]),
      step("5:00-8:00", 180, "足裏ほぐし", "押し蔵君などで軽く。",
        ["座位、片足ずつ"],
        ["全体を軽く", "左右を見る"],
        ["強圧で剥がしにいかない"]),
      step("8:00-10:00", 120, "前腕ストレッチ", "バイオリンと打撃の前腕ケア。",
        ["座位"],
        ["手首を軽く伸ばす", "前腕をゆるめる"],
        ["しびれが出たら中止"]),
      step("10:00-14:00", 240, "広背筋＋腸腰筋", "膝倒し＋腸腰筋ストレッチ左右。",
        ["仰向けまたは膝立ち"],
        ["左右30秒ずつ", "吐く息でゆるむ"],
        ["深い前屈にしない"]),
      step("14:00-15:00", 60, "頭部の緊張解除", "顔・こめかみ・首の力を抜く。",
        ["楽な姿勢"],
        ["触れる程度", "眉間をゆるめる"],
        ["強く揉まない"]),
      step("その後", 60, "寝る準備", "風呂10分以内＋3行記録＋90分以内に布団。",
        ["風呂を済ませる"],
        ["代表場面1つ", "原因1つ", "次回試すこと1つ"],
        ["動画研究・新メソッド検索・長文日記は禁止"])
    ]
  },
  fridayRed: {
    title: "金曜 復元日 赤", subtitle: "8-12分・回復のみ",
    days: ["fri"], status: ["red","migraine"],
    asset: ASSETS.recovery, intro: "金曜の高強度は禁止。赤なら回復だけ。",
    steps: [
      step("0:00-3:00", 180, "呼吸 4.5bpm", "座るか横になる。",
        ["楽な姿勢"],
        ["自然に長く吐く", "顔と肩を抜く"],
        ["深くしすぎない"]),
      step("3:00-5:00", 120, "皮膚への優しいタッチ", "胸・腹・前腕を軽く触れる。",
        ["楽な姿勢"],
        ["圧をかけない", "落ち着き0-10を見る"],
        ["マッサージにしない"]),
      step("5:00-6:00", 60, "足指接地確認", "末端へ注意を下ろす。",
        ["座位でも可"],
        ["足裏を感じる"],
        ["踏み込まない"]),
      step("6:00-9:00", 180, "足裏ほぐし", "押し蔵君などで軽く。",
        ["座位、片足ずつ"],
        ["全体を軽く", "痛い場所を探さない"],
        ["強圧にしない"]),
      step("9:00-12:00", 180, "全身リラクゼーション", "寝てもよい。",
        ["仰向け"],
        ["足先から顔へ抜く", "眠気が来たらそのまま休む"],
        ["取り返そうとしない"])
    ]
  },
  fridayYellow: {
    title: "金曜 復元日 黄", subtitle: "18-22分・回復＋可動域",
    days: ["fri"], status: ["yellow"],
    asset: ASSETS.recovery, intro: "回復を主にして、可動域だけ足す。",
    steps: [
      step("0:00-3:00", 180, "スワイショウ横", "揺れて緩める。",
        ["立位"],
        ["肩を落とす", "呼吸を止めない"],
        ["腕力で振らない"]),
      step("3:00-5:00", 120, "キャット・カウ", "四つ這いで10回。",
        ["四つ這い"],
        ["丸める", "反らせる"],
        ["首だけ動かさない"]),
      step("5:00-11:00", 360, "股関節＋肩甲骨", "ウェイブ3分＋360度3分。",
        ["立位"],
        ["小さく", "滑らかに", "左右差を見る"],
        ["痛みに押し込まない"]),
      step("11:00-15:00", 240, "腸腰筋＋広背筋", "左右を軽く伸ばす。",
        ["膝立ちまたは仰向け"],
        ["左右30秒から", "吐く息でゆるむ"],
        ["深くやらない"]),
      step("15:00-20:00", 300, "呼吸 4.5bpm", "長く吐いて終了。",
        ["楽な姿勢"],
        ["顔・舌・腹を抜く", "睡眠へつなぐ"],
        ["追加しない"])
    ]
  },
  fridayGreen: {
    title: "金曜 復元日 緑", subtitle: "25-30分・回復＋軽い技術",
    days: ["fri"], status: ["green"],
    asset: ASSETS.recovery, intro: "緑でも復元日。強くなる日ではなく戻す日。",
    steps: [
      step("0:00-4:00", 240, "ゆっくり大きく動く体操", "全身を大きく低速で。",
        ["立位またはリラックス姿勢"],
        ["呼吸に合わせる", "関節を観察"],
        ["汗を狙わない"]),
      step("4:00-16:00", 720, "総合フローワーク", "つなぎ目を滑らかに。",
        ["立位"],
        ["止まらず流す", "足裏を感じる"],
        ["RPEを上げない"]),
      step("16:00-21:00", 300, "スローモーションシャドー", "1動作3秒。",
        ["構える"],
        ["目線が先", "体が追う", "呼吸が先"],
        ["高速突きにしない"]),
      step("21:00-24:00", 180, "目を閉じた立位バランス", "壁か椅子の近く。",
        ["立位、サポート確保"],
        ["20秒単位", "足裏を見る"],
        ["転倒リスクを取らない"]),
      step("24:00-29:00", 300, "呼吸 4.5bpm", "吐く息で終える。",
        ["楽な姿勢"],
        ["顔・舌・腹を抜く"],
        ["追加で歩かない"])
    ]
  },
  saturdayCare: {
    title: "土曜 集中ケア30分", subtitle: "緑判定の週だけ",
    days: ["sat"], status: ["green"],
    asset: ASSETS.recovery, intro: "疲労が強い週は流す。流れる週があってよい。",
    steps: [
      step("0:00-5:00", 300, "呼吸＋キャット・カウ", "呼吸2分＋四つ這い3分。",
        ["四つ這い"],
        ["背中側まで膨らむ", "ゆっくり"],
        ["首を固めない"]),
      step("5:00-11:00", 360, "腸腰筋セッティング＋マーチング", "骨盤を起こし、左右を動かす。",
        ["仰向け膝立て"],
        ["背骨を丸めない", "左右10回"],
        ["腰が反るなら小さく"]),
      step("11:00-18:00", 420, "ストレッチ＋正座軸", "腸腰筋・大腿直筋・正座の軸。",
        ["膝立ち／正座"],
        ["左右を均等に", "丹田を感じる"],
        ["膝痛があれば正座しない"]),
      step("18:00-24:00", 360, "プランク＋足裏", "秀徹プランク30秒×3＋足裏ほぐし。",
        ["プランク"],
        ["休憩込み", "足裏は軽く"],
        ["赤や黄なら中止"]),
      step("24:00-30:00", 360, "太もも・お尻・多裂筋・呼吸", "ほぐし＋目線版＋呼吸。",
        ["楽な姿勢"],
        ["強圧にしない", "吐く息で終える"],
        ["痛みを剥がさない"])
    ]
  },
  sundayReview: {
    title: "日曜 10分レビュー", subtitle: "取り返す日ではない",
    days: ["sun"], status: ["green","yellow","red"],
    asset: ASSETS.morning, intro: "何ができたかを見て、来週の制約を1つだけ決める。",
    steps: [
      step("0:00-3:00", 180, "Oura週次サマリー", "HRV・睡眠・入眠潜時を見る。",
        ["スマホかPC"],
        ["木曜→金曜の落ち幅を見る", "良し悪しを決めつけない"],
        ["原因を1回で断定しない"]),
      step("3:00-7:00", 240, "達成チェック", "月-金にできたこと・できなかったこと。",
        ["記録を見る"],
        ["できた事実を数える", "崩れた曜日を見る"],
        ["埋め合わせ計画にしない"]),
      step("7:00-10:00", 180, "来週の制約1つ", "例：水曜シャドーで足音を消す。",
        ["メモを開く"],
        ["1つだけ決める", "睡眠を削らない制約に"],
        ["追加目標を並べない"])
    ]
  },
  bedtime: {
    title: "就寝前10分", subtitle: "毎日・暗めの部屋",
    days: ["mon","tue","wed","thu","fri","sat","sun"], status: ["green","yellow","red","migraine"],
    asset: ASSETS.recovery, intro: "スマホを見ながらではなく、寝る方向へ落とす。",
    steps: [
      step("0:00-3:00", 180, "呼吸 4.5bpm", "吐く時に顔・舌・腹を抜く。",
        ["暗めの部屋", "楽な姿勢"],
        ["吸う5秒・吐く8秒", "苦しければ自然に"],
        ["息を止めない"]),
      step("3:00-5:00", 120, "皮膚への優しいタッチ", "胸から腹へ軽く。",
        ["仰向け"],
        ["手の重さだけ", "落ち着き具合を見る"],
        ["揉まない"]),
      step("5:00-7:00", 120, "広背筋ストレッチ・膝倒し", "左右30秒ずつ。",
        ["仰向け膝立て"],
        ["膝を左右へ倒す", "肩は床へ預ける"],
        ["痛い範囲まで倒さない"]),
      step("7:00-8:00", 60, "足裏か足指", "押し蔵などで軽く。",
        ["座位"],
        ["軽く触る", "末端へ注意を下ろす"],
        ["強く押さない"]),
      step("8:00-9:00", 60, "頭部の緊張解除", "眉間・こめかみ・後頭部を軽く。",
        ["仰向けまたは座位"],
        ["触れる程度", "顔の力を抜く"],
        ["首前面を圧迫しない"]),
      step("9:00-10:00", 60, "全身リラクゼーション", "足先から顔へ力を抜く。",
        ["仰向け"],
        ["抜けている場所を探す", "寝てもよい"],
        ["スマホへ戻らない"])
    ]
  },
  migraine: {
    title: "片頭痛前兆メニュー", subtitle: "5-12分・運動で倒しにいかない",
    days: ["mon","tue","wed","thu","fri","sat","sun"], status: ["migraine"],
    asset: ASSETS.migraine, intro: "薬や医師指示があれば優先。暗めの場所で座るか横になる。",
    steps: [
      step("0:00-3:00", 180, "呼吸 4.5bpm", "深くしすぎず、自然に長く吐く。",
        ["暗めの場所、座位か横"],
        ["吐く息を長く", "首肩を抜く"],
        ["ブレスホールドしない"]),
      step("3:00-5:00", 120, "皮膚への優しいタッチ", "胸・腹・前腕に軽く触れる。",
        ["楽な姿勢"],
        ["圧をかけない", "落ち着く方向を見る"],
        ["マッサージにしない"]),
      step("5:00-7:00", 120, "頭部の緊張解除", "顔と頭皮を軽く。",
        ["仰向けまたは座位"],
        ["眉間・こめかみ・後頭部"],
        ["強く揉まない", "首前面を押さない"]),
      step("7:00-7:30", 30, "足指接地", "末端へ注意を下ろす。",
        ["座位で可"],
        ["足裏を感じる"],
        ["踏み込まない"]),
      step("7:30-9:30", 120, "手掌ほぐし", "首肩から遠い場所を使う。",
        ["座位"],
        ["手のひらを軽く", "痛みを追わない"],
        ["強圧にしない"]),
      step("9:30-12:00", 150, "首は可動域確認だけ", "痛い方向へ押し込まない。",
        ["座位"],
        ["どこまで楽か確認", "戻して終える"],
        ["速い首回旋をしない"])
    ]
  }
};

const oshikuraProtocols = {
  neck: {
    title: "首肩・肩甲骨まわり 3分",
    caution: "首そのものを強く押さない。しびれ・夜間痛・力が入らない感覚があれば中止して医療者へ。",
    steps: [
      ["30秒", "鎖骨下から胸の上を太い側で軽くなでる。呼吸が浅くならない圧。"],
      ["60秒", "肩甲骨の周辺の硬い線を探して5秒ずつ軽く当てる。"],
      ["60秒", "前腕と手のひらへ移動。首肩を直接攻めず、遠い場所から落とす。"],
      ["30秒", "肩をすくめて下ろす。可動域が少し軽いかだけ確認。"]
    ]
  },
  forearm: {
    title: "前腕・手指 3分",
    caution: "しびれ・電気が走る痛み・握力低下があれば中止。腱をゴリゴリこすらない。",
    steps: [
      ["30秒", "手のひらを太い側で軽くなでる。親指付け根は押し込みすぎない。"],
      ["60秒", "前腕の内側を肘から手首へゆっくり。痛気持ちいい未満。"],
      ["60秒", "前腕の外側を同じくゆっくり。バイオリン後はここを短く丁寧に。"],
      ["30秒", "指の股を1か所3回だけ。関節そのものをねじらない。"]
    ]
  },
  foot: {
    title: "足裏・足首 3分",
    caution: "痛い場所探しにしない。足底腱膜を強圧で剥がす発想は禁止。",
    steps: [
      ["30秒", "足裏全体を太い側でなでて、接地感を戻す。"],
      ["60秒", "親指側・小指側・かかと側を分けて軽く当てる。"],
      ["60秒", "土踏まずは点で押し込まず、短い線でゆっくり動かす。"],
      ["30秒", "立って6点接地を確認。足裏が床に広がる感じで終了。"]
    ]
  },
  headache: {
    title: "片頭痛前兆・顔まわり 2分",
    caution: "片頭痛薬や医師の指示を優先。首前面・こめかみ・顔面を強く押さない。",
    steps: [
      ["30秒", "暗めの場所で座る。押し蔵を持つ前に吐く息を長くする。"],
      ["30秒", "胸・腹・前腕を軽くなでる。頭を直接攻めない。"],
      ["30秒", "手のひらか足裏へ注意を下ろす。末端の感覚だけ見る。"],
      ["30秒", "顔は指先で触れる程度。楽にならなければ終了して休む。"]
    ]
  },
  lesson: {
    title: "レッスン間30秒",
    caution: "生徒への指導メソッドにしない。自分の姿勢リセットだけに使う。",
    steps: [
      ["5秒", "手のひらを軽くなでて、握り込みを抜く。"],
      ["10秒", "前腕を1往復。弓腕と反対側も同じだけ触る。"],
      ["10秒", "足裏を床へ戻し、6点接地を確認。"],
      ["5秒", "息を吐いて終わり。追加しない。"]
    ]
  }
};

// === STATE ===
const state = {
  view: "home",
  day: dayFromDate(new Date()),
  status: "green",
  checks: { hrv: false, sleep: false, pain: false, migraine: false },
  selectedSession: "morning5",
  currentStep: 0,
  timerLeft: 0,
  timerRunning: false,
  timerId: null,
  showAll: false,
  oshikura: "neck",
  notes: { scene: "", cause: "", next: "" }
};

const els = {};

// === BOOTSTRAP ===
document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  loadState();
  bindEvents();
  pickRecommendedSession();
  resetTimerToStep();
  renderAll();
  showView(state.view);
});

function cacheElements() {
  document.querySelectorAll("[id]").forEach(el => { els[el.id] = el; });
  els.views = document.querySelectorAll(".view");
}

function bindEvents() {
  // navigation triggers (data-go)
  document.body.addEventListener("click", (e) => {
    const t = e.target.closest("[data-go]");
    if (!t) return;
    const target = t.dataset.go;
    if (target === "run") {
      state.currentStep = 0;
      resetTimerToStep();
    }
    showView(target);
  });

  // home: CTA → run
  els.goRunButton.addEventListener("click", () => {
    state.currentStep = 0;
    resetTimerToStep();
    showView("run");
  });

  // QA buttons (rendered)
  els.qaList.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-qa]");
    if (!btn) return;
    const key = btn.dataset.qa;
    const value = btn.dataset.value === "yes";
    state.checks[key] = value;
    evaluateStatus();
    pickRecommendedSession();
    resetTimerToStep();
    saveState();
    renderCheck();
    renderHome();
  });

  // run controls
  els.timerButton.addEventListener("click", () => {
    if (state.timerRunning) stopTimer();
    else startTimer();
    renderRun();
  });
  els.prevButton.addEventListener("click", () => {
    if (state.currentStep > 0) {
      state.currentStep -= 1;
      resetTimerToStep();
      saveState();
      renderRun();
    }
  });
  els.nextButton.addEventListener("click", () => {
    const session = sessions[state.selectedSession];
    if (state.currentStep < session.steps.length - 1) {
      state.currentStep += 1;
      resetTimerToStep();
      saveState();
      renderRun();
    } else {
      // done
      els.doneSessionTitle.textContent = session.title;
      saveState();
      showView("done");
    }
  });

  // menu toggle
  els.menuToggle.addEventListener("click", () => {
    state.showAll = !state.showAll;
    els.menuToggle.textContent = state.showAll ? "今日だけ" : "全部";
    renderMenu();
  });
  els.menuList.addEventListener("click", (e) => {
    const t = e.target.closest("[data-session]");
    if (!t || t.classList.contains("locked")) return;
    state.selectedSession = t.dataset.session;
    state.currentStep = 0;
    resetTimerToStep();
    saveState();
    renderHome();
    showView("run");
  });

  // oshikura tabs
  els.oshikuraTabs.addEventListener("click", (e) => {
    const t = e.target.closest("[data-osh]");
    if (!t) return;
    state.oshikura = t.dataset.osh;
    saveState();
    renderOshikura();
  });

  // notes
  ["noteScene","noteCause","noteNext"].forEach(id => {
    els[id].addEventListener("input", () => {
      state.notes[id.replace("note","").toLowerCase()] = els[id].value;
      saveState();
    });
  });
}

// === ROUTER ===
function showView(name) {
  state.view = name;
  els.views.forEach(v => v.classList.toggle("active", v.dataset.view === name));
  if (name === "check") renderCheck();
  else if (name === "menu") renderMenu();
  else if (name === "run") renderRun();
  else if (name === "oshikura") renderOshikura();
  else if (name === "week") renderWeek();
  else if (name === "home") renderHome();
  window.scrollTo(0, 0);
  saveState();
}

// === RENDER ===
function renderAll() {
  evaluateStatus();
  renderHome();
  renderCheck();
  renderMenu();
  renderOshikura();
  renderWeek();
}

function evaluateStatus() {
  if (state.checks.migraine) state.status = "migraine";
  else {
    const c = (state.checks.hrv?1:0)+(state.checks.sleep?1:0)+(state.checks.pain?1:0);
    state.status = c >= 2 ? "red" : c === 1 ? "yellow" : "green";
  }
}

function renderHome() {
  const session = sessions[state.selectedSession];
  els.homeRecommendTitle.textContent = session.title;
  els.homeRecommendSub.textContent = session.subtitle;
  els.homeStepCount.textContent = `${session.steps.length} ステップ`;
  const labelMap = {
    green: "緑判定 普通に実行",
    yellow: "黄判定 1段下げる",
    red: "赤判定 完全休み寄り",
    migraine: "片頭痛前兆 安全モード"
  };
  els.homeStatusChip.dataset.status = state.status;
  els.homeStatusChip.querySelector(".status-chip__text").textContent = labelMap[state.status];
}

function renderCheck() {
  const qs = [
    ["hrv", "HRVが7日平均から15%以上落ちた？"],
    ["sleep", "睡眠が6時間未満？"],
    ["pain", "首肩痛が4/10以上？"],
    ["migraine", "片頭痛の前兆や首から上の違和感がある？"]
  ];
  els.qaList.innerHTML = qs.map(([k, q], i) => {
    const v = state.checks[k];
    return `
      <div class="qa-card">
        <div class="qa-num">${i+1} / 4</div>
        <h3 class="qa-q">${q}</h3>
        <div class="qa-buttons">
          <button class="qa-btn" data-qa="${k}" data-value="no" data-active="${v===false?'no':''}" type="button">いいえ</button>
          <button class="qa-btn" data-qa="${k}" data-value="yes" data-active="${v===true?'yes':''}" type="button">はい</button>
        </div>
      </div>
    `;
  }).join("");

  const map = {
    green: ["緑", "緑判定", "普通に実行できる。朝起動5分が基準。"],
    yellow: ["黄", "黄判定", "強度を1段下げる。速い動きと追加種目は避ける。"],
    red: ["赤", "赤判定", "完全休み寄り。朝90秒・回復・就寝前だけ。"],
    migraine: ["前", "片頭痛前兆", "運動で倒しにいかない。暗めの場所で専用メニュー。"]
  };
  const [badge, title, text] = map[state.status];
  els.resultCard.dataset.status = state.status;
  els.resultBadge.textContent = badge;
  els.resultTitle.textContent = title;
  els.resultText.textContent = text;
  els.resultMenu.textContent = sessions[state.selectedSession].title;
}

function renderMenu() {
  const entries = Object.entries(sessions).filter(([id, s]) => {
    if (state.showAll) return true;
    return isAllowed(s);
  });
  els.menuList.innerHTML = entries.map(([id, s]) => {
    const allowed = isAllowed(s);
    const recommended = id === state.selectedSession;
    const cls = `menu-item ${recommended ? "recommended" : ""} ${allowed ? "" : "locked"}`;
    return `
      <button class="${cls}" type="button" data-session="${id}" ${allowed ? "" : "disabled"}>
        <span class="menu-item__icon">${(s.steps && s.steps.length) || ""}</span>
        <span class="menu-item__main">
          <span class="menu-item__title">${s.title}</span>
          <span class="menu-item__sub">${s.subtitle}</span>
          ${!allowed ? '<span class="lock-tag">今日は選べない</span>' : ""}
        </span>
      </button>
    `;
  }).join("");
}

function renderRun() {
  const session = sessions[state.selectedSession];
  if (!session) return;
  const stepData = session.steps[state.currentStep];
  els.runSessionTitle.textContent = session.title;
  els.runStepCount.textContent = `${state.currentStep + 1} / ${session.steps.length}`;
  els.runProgress.style.width = `${((state.currentStep + 1) / session.steps.length) * 100}%`;
  els.runImage.src = session.asset;
  els.runImage.alt = `${stepData.title} の補助イメージ`;
  els.runTitle.textContent = stepData.title;
  els.runInstruction.textContent = stepData.instruction;
  els.timerOutput.textContent = formatTime(state.timerLeft);
  els.timerButton.textContent = state.timerRunning ? "一時停止" : "タイマー開始";
  els.timerButton.dataset.running = state.timerRunning ? "true" : "false";

  els.runDetails.innerHTML = `
    <div class="detail-block">
      <h4>始める姿勢</h4>
      <ul>${stepData.prepare.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>
    <div class="detail-block">
      <h4>動く方向</h4>
      <ul>${stepData.actions.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>
    <div class="detail-block warn">
      <h4>NG・中止</h4>
      <ul>${stepData.avoid.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>
    <div class="detail-block">
      <h4>時刻ガイド</h4>
      <ul><li>${stepData.time}</li></ul>
    </div>
  `;

  els.prevButton.disabled = state.currentStep === 0;
  els.nextButton.textContent = (state.currentStep === session.steps.length - 1)
    ? "完了する" : "できた → 次へ";
}

function renderOshikura() {
  const proto = oshikuraProtocols[state.oshikura] || oshikuraProtocols.neck;
  els.oshikuraTabs.querySelectorAll("[data-osh]").forEach(b => {
    b.classList.toggle("active", b.dataset.osh === state.oshikura);
  });
  els.oshikuraBody.innerHTML = `
    <div class="oshikura-head">
      <div class="oshikura-head__title">${proto.title}</div>
      <div class="oshikura-head__caution">${proto.caution}</div>
    </div>
    ${proto.steps.map(([t, x]) => `
      <div class="oshikura-step">
        <div class="oshikura-step__time">${t}</div>
        <div class="oshikura-step__text">${x}</div>
      </div>
    `).join("")}
  `;
}

function renderWeek() {
  els.weekList.innerHTML = weekPlan.map(([n, t, d, deload]) => `
    <div class="week-row ${deload ? "deload" : ""}">
      <div class="week-row__num">${n}<small>WEEK</small></div>
      <div>
        <div class="week-row__title">${t}</div>
        <div class="week-row__text">${d}</div>
      </div>
    </div>
  `).join("");
  els.cueList.innerHTML = quickCues.map(([t, x]) => `
    <div class="cue-item"><strong>${t}</strong><span>${x}</span></div>
  `).join("");
}

// === LOGIC ===
function isAllowed(session) {
  return session.days.includes(state.day) && session.status.includes(state.status);
}

function pickRecommendedSession() {
  // priority: migraine first, then morning sessions, then by allowed
  if (state.status === "migraine" && sessions.migraine) {
    state.selectedSession = "migraine";
    return;
  }
  if (state.status === "red") {
    state.selectedSession = "morning90";
    return;
  }
  // default: morning5 if allowed today, else first allowed
  if (isAllowed(sessions.morning5)) state.selectedSession = "morning5";
  else {
    const found = Object.entries(sessions).find(([, s]) => isAllowed(s));
    if (found) state.selectedSession = found[0];
  }
}

function startTimer() {
  if (state.timerLeft <= 0) resetTimerToStep();
  state.timerRunning = true;
  state.timerId = window.setInterval(() => {
    state.timerLeft = Math.max(0, state.timerLeft - 1);
    if (state.timerLeft === 0) stopTimer();
    renderRun();
  }, 1000);
}
function stopTimer() {
  state.timerRunning = false;
  if (state.timerId) window.clearInterval(state.timerId);
  state.timerId = null;
}
function resetTimerToStep() {
  stopTimer();
  const session = sessions[state.selectedSession];
  state.timerLeft = (session && session.steps[state.currentStep] && session.steps[state.currentStep].duration) || 0;
}

// === UTIL ===
function formatTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const x = Math.floor(s % 60).toString().padStart(2, "0");
  return `${m}:${x}`;
}
function dayFromDate(d) {
  return ["sun","mon","tue","wed","thu","fri","sat"][d.getDay()];
}

// === STORAGE ===
function storageKey() {
  const today = new Date().toISOString().slice(0, 10);
  return `strong-road-v3:${today}`;
}
function saveState() {
  try {
    localStorage.setItem(storageKey(), JSON.stringify({
      view: state.view,
      checks: state.checks,
      selectedSession: state.selectedSession,
      currentStep: state.currentStep,
      oshikura: state.oshikura,
      notes: state.notes,
      showAll: state.showAll
    }));
  } catch {}
}
function loadState() {
  try {
    const raw = localStorage.getItem(storageKey());
    if (!raw) return;
    const d = JSON.parse(raw);
    if (d.checks) state.checks = { ...state.checks, ...d.checks };
    if (d.selectedSession && sessions[d.selectedSession]) state.selectedSession = d.selectedSession;
    if (typeof d.currentStep === "number") state.currentStep = d.currentStep;
    if (d.oshikura && oshikuraProtocols[d.oshikura]) state.oshikura = d.oshikura;
    if (d.notes) state.notes = { ...state.notes, ...d.notes };
    if (typeof d.showAll === "boolean") state.showAll = d.showAll;
    // restore note inputs
    if (els.noteScene) els.noteScene.value = state.notes.scene || "";
    if (els.noteCause) els.noteCause.value = state.notes.cause || "";
    if (els.noteNext) els.noteNext.value = state.notes.next || "";
    evaluateStatus();
  } catch {}
}
