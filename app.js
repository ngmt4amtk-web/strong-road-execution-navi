const ASSETS = {
  hero: "assets/morning-clear.png",
  morning: "assets/morning-clear.png",
  recovery: "assets/recovery-clear.png",
  shadow: "assets/shadow-clear.png",
  migraine: "assets/migraine-clear.png"
};

const dayNames = {
  mon: "月曜",
  tue: "火曜",
  wed: "水曜",
  thu: "木曜",
  fri: "金曜",
  sat: "土曜",
  sun: "日曜"
};

const weekPlan = {
  1: ["呼吸法・神経的", "朝90秒と就寝前に固定。できた日数だけ見る。"],
  2: ["足指接地確認", "立つたびに6点接地を30秒。量より回数。"],
  3: ["キャット・カウ", "朝5分版の中で10回。首は楽に保つ。"],
  4: ["椅子軸方の基本", "レッスン間の姿勢リセット。週全体は60から70%に落とす。"],
  5: ["肩甲骨360度回転", "朝5分とシャドー前。ゆっくり円を描く。"],
  6: ["股関節ウェイブ", "歩行前とシャドー前。膝を柔らかく。"],
  7: ["腸腰筋マーチング", "月曜の核。背骨を丸めず、左右10回。"],
  8: ["橋のポーズ", "月曜の核。週全体は60から70%に落とす。"],
  9: ["初動落下エネルギー", "水曜シャドーで前後左右に各5本。"],
  10: ["スローモーションシャドー", "1動作3秒。呼吸が先、打撃は後。"],
  11: ["目を閉じた立位バランス", "緑判定だけ。壁か椅子の近くで20秒。"],
  12: ["その場突き・高速体幹", "緑判定だけ短く。週全体は60から70%に落とす。"]
};

const quickCues = [
  ["椅子軸方 5秒", "力を抜いてお辞儀。お尻を浮かせ、5秒で立つ。"],
  ["座る感覚 30秒", "尾骨を椅子の中心へ。背骨を立て、腹は抜く。"],
  ["頸部ニューテーション 30秒", "顎を軽く引き、左右に小さく20回。痛ければ中止。"],
  ["肩甲骨の上げ下げ 45秒", "すくめる、下げる。首は固めない。"],
  ["指関節ほぐし 60秒", "道具がある時だけ。指の股を3回ずつ軽く。"],
  ["足指接地 30秒", "親指、小指、外側ライン、かかとを感じる。"],
  ["中指タップ 1秒", "注意の切替だけ。1日1回まで。"],
  ["呼吸1回", "吸う5秒、吐く8秒。顔と肩を落とす。"],
  ["ここからクルン 45秒", "肩甲骨を片方ずつ軽く回す。"],
  ["スワイショウ横 60秒", "腕を振るより、体ごと揺れる。"]
];

const morning5Steps = [
  step("0:00-0:40", 40, "背骨はまっすぐ", "立位で足裏全体を床に置く。", ["頭頂が上に伸びる感覚を作る", "腹を固めすぎず内側を広げる", "骨で支える感覚を探す"], ["胸を反らせて作らない", "首を固めない"]),
  step("0:40-1:30", 50, "足指接地確認", "裸足か薄い靴下で、足裏の点を感じる。", ["親指先、小指先を感じる", "小指からかかと外側ラインを見る", "かかとを軽く床へ預ける"], ["足指で床を掴み続けない"]),
  step("1:30-2:30", 60, "呼吸法・神経的", "吸う5秒、吐く8秒。4から5呼吸。", ["吐く方を丁寧にする", "顔、舌、みぞおちを抜く", "肩が上がったら一度リセット"], ["息を止めない", "深呼吸で苦しくしない"]),
  step("2:30-3:30", 60, "キャット・カウ", "四つ這い。手は肩の下、膝は股関節の下。", ["背中を丸める", "背中を反らせる", "10回をゆっくり"], ["首だけで動かさない", "痛い範囲へ押し込まない"]),
  step("3:30-4:20", 50, "肩甲骨360度回転", "立位。腕ではなく肩甲骨に意識を置く。", ["前、上、後、下の順に円を描く", "左右ゆっくり回す", "呼吸は止めない"], ["首肩に痛みが増えたら小さくする"]),
  step("4:20-5:00", 40, "股関節ウェイブ", "膝を柔らかくして立つ。", ["股関節だけで前後に揺れる", "左右にも小さく揺れる", "足裏は床に預ける"], ["腰を反らせて代用しない"])
];

const oshikuraProtocols = {
  neck: {
    title: "首肩・肩甲骨まわり 3分",
    caution: "首そのものを強く押さない。しびれ、夜間痛、力が入らない感覚があれば中止して医療者へ。",
    steps: [
      ["30秒", "鎖骨下から胸の上を太い側で軽くなでる。呼吸が浅くならない圧。"],
      ["60秒", "肩甲骨の内側ではなく、周辺の硬い線を探して5秒ずつ軽く当てる。"],
      ["60秒", "前腕と手のひらへ移動。首肩を直接攻めず、遠い場所から緊張を落とす。"],
      ["30秒", "肩をすくめて下ろす。可動域が少し軽いかだけ確認する。"]
    ]
  },
  forearm: {
    title: "前腕・手指 3分",
    caution: "しびれ、電気が走る痛み、握力低下があれば中止。腱をゴリゴリこすらない。",
    steps: [
      ["30秒", "手のひらを太い側で軽くなでる。親指付け根は押し込みすぎない。"],
      ["60秒", "前腕の内側を肘から手首へ向けてゆっくり。痛気持ちいい未満。"],
      ["60秒", "前腕の外側を同じくゆっくり。バイオリン後はここを短く丁寧に。"],
      ["30秒", "指の股を1か所3回だけ。関節そのものをねじらない。"]
    ]
  },
  foot: {
    title: "足裏・足首 3分",
    caution: "痛い場所探しにしない。足底腱膜を強圧で剥がす発想は禁止。",
    steps: [
      ["30秒", "足裏全体を太い側でなでて、接地感を戻す。"],
      ["60秒", "親指側、小指側、かかと側を分けて軽く当てる。"],
      ["60秒", "土踏まずは点で押し込まず、短い線でゆっくり動かす。"],
      ["30秒", "立って6点接地を確認。足裏が床に広がる感じで終了。"]
    ]
  },
  headache: {
    title: "片頭痛前兆・顔まわり 2分",
    caution: "片頭痛薬や医師の指示を優先。首前面、こめかみ、顔面を強く押さない。",
    steps: [
      ["30秒", "暗めの場所で座る。押し蔵くんを持つ前に吐く息を長くする。"],
      ["30秒", "胸、腹、前腕を軽くなでる。頭を直接攻めない。"],
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

const sessions = {
  morning90: {
    title: "朝起動90秒",
    subtitle: "赤判定、寝坊、片頭痛寄りの日",
    days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    status: ["red", "migraine"],
    asset: ASSETS.morning,
    tags: ["安全優先", "90秒"],
    intro: "今日は戻れる体を残す日。呼吸と末端だけで終える。",
    steps: [
      step("0:00-1:00", 60, "呼吸法・神経的", "座位か立位。吸う5秒、吐く8秒を目安にする。", ["吐く時に肩、顔、腹を落とす", "深く吸おうとしすぎない", "鼻呼吸がつらければ自然呼吸でよい"], ["ブレスホールドしない", "めまいが出たら中止"]),
      step("1:00-1:30", 30, "足指接地確認", "座っても立ってもよい。足裏を床に置く。", ["親指先を感じる", "小指先を感じる", "かかとと外側ラインを感じる"], ["強く踏み込まない", "足指を握りこまない"])
    ]
  },
  morning5: {
    title: "朝起動5分",
    subtitle: "普通の日の標準",
    days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    status: ["green", "yellow"],
    asset: ASSETS.morning,
    tags: ["毎日", "5分"],
    intro: "軸、呼吸、末端、モビリティを少しずつ入れる。",
    steps: morning5Steps
  },
  morning8: {
    title: "朝起動8分",
    subtitle: "緑判定、木曜稽古日",
    days: ["thu", "sat"],
    status: ["green"],
    asset: ASSETS.morning,
    tags: ["緑限定", "8分"],
    intro: "5分版に小さいジャンプ、眼、バランスを足す。",
    steps: [
      ...cloneSteps(morning5Steps),
      step("5:00-6:00", 60, "小さい軸ジャンプ", "足幅は腰幅。着地の静かさだけを見る。", ["小さく5回", "膝を柔らかく着地", "音を消す"], ["赤や黄の日はやらない", "首肩痛がある日は飛ばない"]),
      step("6:00-7:00", 60, "眼球ストレッチ", "顔は正面。目だけを動かす。", ["上下左右を見る", "近くと遠くに焦点を合わせる", "めまいが出たら止める"], ["首ごと速く振らない"]),
      step("7:00-8:00", 60, "目を閉じた立位バランス", "壁か椅子の近くで立つ。", ["20秒を2回", "足裏の接地を感じる", "崩れそうならすぐ手をつく"], ["転倒リスクがある場所でやらない"])
    ]
  },
  monday20: {
    title: "月曜20分版",
    subtitle: "最初の1週間",
    days: ["mon"],
    status: ["green", "yellow"],
    asset: ASSETS.shadow,
    tags: ["初週", "RPE6まで"],
    intro: "種目を絞った導入版。翌日に残さない。",
    steps: [
      step("0:00-3:00", 180, "ウォームアップ3種", "キャット・カウ、肩甲骨360度、股関節ウェイブを各1分。", ["首を楽にする", "肩甲骨をゆっくり回す", "股関節を小さく揺らす"], ["汗をかく強度にしない"]),
      step("3:00-7:00", 240, "橋のポーズ", "仰向けで膝を立てる。", ["お尻を上げる", "大殿筋を締める", "12回を2周"], ["腰を反らせない", "首で踏ん張らない"]),
      step("7:00-11:00", 240, "肩甲骨外転", "四つ這いから両手を前ならえの方向へ。", ["肩を下ろす", "床を押す", "10回を2周"], ["肩をすくめない"]),
      step("11:00-15:00", 240, "前鋸筋プランク", "肘つきプランク。きつければ膝をつく。", ["胸を少し沈める", "床を押して胸を上げる", "20秒を2回"], ["腰を反らせない", "赤判定ではやらない"]),
      step("15:00-18:00", 180, "初動落下エネルギー", "立位から小さく前へ進む。", ["体を落とす感覚を作る", "落下で前進", "5歩を2本"], ["速くやらない"]),
      step("18:00-20:00", 120, "呼吸で終了", "座るか立つ。吐く方を長くする。", ["顔、舌、腹を抜く", "次の予定に残さない"], ["追加種目を足さない"])
    ]
  },
  mondayFull: {
    title: "月曜30から40分",
    subtitle: "動的レジスタンス",
    days: ["mon"],
    status: ["green"],
    asset: ASSETS.shadow,
    tags: ["RPE6", "筋力日"],
    intro: "ハード筋トレではなく、壊れない出力を作る日。",
    steps: [
      step("0:00-6:00", 360, "ウォームアップ6種", "キャット・カウ、肩甲骨360度、股関節ウェイブ、足首、足指、呼吸を各1分。", ["全種目を小さく始める", "鼻呼吸で余裕を残す", "痛みの確認を兼ねる"], ["ウォームアップで息を上げない"]),
      step("6:00-10:00", 240, "橋のポーズ", "12回。大殿筋を締める。", ["お尻を上げる", "肋骨を開きすぎない", "足裏で床を押す"], ["腰で反らない"]),
      step("10:00-14:00", 240, "腸腰筋マーチング", "仰向け膝立て。骨盤を起こす。", ["交互に膝を胸へ", "左右10回", "背骨は丸めない"], ["腰が浮くなら小さく"]),
      step("14:00-18:00", 240, "肩甲骨外転と前鋸筋プランク", "肩甲骨外転10回、前鋸筋プランク20秒。", ["床を押す", "胸をリフト", "肋骨を締める"], ["首肩で踏ん張らない"]),
      step("18:00-24:00", 360, "スクワットと初動落下", "スクワット10回、初動落下5歩。3周目まで無理に増やさない。", ["足裏を離さない", "股関節から曲げる", "落ちる力で進む"], ["ジャンプは睡眠不足なら追加しない"]),
      step("24:00-31:00", 420, "仕上げ", "秀徹プランク、手足の連動性、股関節ローリング、スワイショウ縦。", ["30秒単位で区切る", "中心から手足を動かす", "最後は揺れて緩める"], ["RPE6を超えない"]),
      step("31:00-36:00", 300, "クールダウン", "腸腰筋、広背筋、呼吸で終える。", ["左右30秒ずつ", "吐く息を長く", "追加せず終了"], ["達成感で追い込まない"])
    ]
  },
  tuesdayWalk: {
    title: "火曜 速歩25から35分",
    subtitle: "いつもの歩きの一部だけ",
    days: ["tue"],
    status: ["green", "yellow"],
    asset: ASSETS.morning,
    tags: ["Zone2", "追加散歩なし"],
    intro: "すでに歩いている量の中で、25から35分だけ質を上げる。",
    steps: [
      step("開始前", 60, "足部6点を確認", "立って足裏を見る。", ["親指先", "小指先", "小指からかかとの外側ライン"], ["痛い場所を探さない"]),
      step("25-35分", 1500, "速歩", "鼻呼吸ギリギリ可、しゃべりにくい程度。", ["最大心拍の60から70%が目安", "30歳なら120から135bpm", "歩幅より足音の静かさを見る"], ["回復日に追加で歩かない", "頭痛前兆があれば中止"]),
      step("終了後1分", 60, "呼吸で戻す", "立つか座る。", ["吐く息を長くする", "首肩の力を抜く"], ["その場で追加トレーニングしない"])
    ]
  },
  tuesdayNight: {
    title: "火曜 夜の呼吸10分",
    subtitle: "RF 4.5bpm",
    days: ["tue"],
    status: ["green", "yellow", "red"],
    asset: ASSETS.recovery,
    tags: ["夜", "10分"],
    intro: "呼吸を練習ではなく睡眠への橋にする。",
    steps: [
      step("0:00-10:00", 600, "HRVバイオフィードバック", "Breathwrkなどで4.5bpmに設定。なければ吸う5秒、吐く8秒。", ["肩、顔、腹を抜く", "吐気を丁寧にする", "暗めの部屋で行う"], ["苦しい深呼吸にしない", "スマホを見続けない"])
    ]
  },
  wednesday10: {
    title: "水曜シャドー10分",
    subtitle: "最初の月",
    days: ["wed"],
    status: ["green", "yellow"],
    asset: ASSETS.shadow,
    tags: ["技術", "低汗"],
    intro: "汗より精度。最初の月はストレートリードだけ。",
    steps: [
      step("0:00-3:00", 180, "体軸の基礎", "丹田周辺から手足を動かす感覚。", ["肩を下げる", "足裏を感じる", "腕だけで打たない"], ["速くしない"]),
      step("3:00-6:00", 180, "初動落下", "前進、後退、左右を各5本。", ["体を落とす", "足音を小さく", "戻る余力を残す"], ["飛び跳ねない"]),
      step("6:00-9:00", 180, "スローモーションリード", "1動作3秒。呼吸が先、拳は後。", ["吐きながら伸ばす", "骨盤から拳へつなぐ", "力みを見つける"], ["全力で打たない"]),
      step("9:00-10:00", 60, "呼吸と足指で終了", "立位で整える。", ["吸う5秒、吐く8秒を1から2回", "足裏6点に戻す"], ["反省を長引かせない"])
    ]
  },
  wednesday30: {
    title: "水曜シャドー30分",
    subtitle: "技術、反応、連動",
    days: ["wed"],
    status: ["green"],
    asset: ASSETS.shadow,
    tags: ["緑限定", "30分"],
    intro: "中心から動く精度を上げる日。汗を目的にしない。",
    steps: [
      ...cloneSteps(morning5Steps),
      step("5:00-8:00", 180, "体軸の基礎構築", "丹田周辺から手足を動かす。", ["腕だけで始めない", "足裏を感じる", "背骨は長く"], ["力で固めない"]),
      step("8:00-11:00", 180, "初動落下エネルギー", "前進、後退、左右を各5本。", ["落ちる力で始める", "足音を小さく", "戻れる速度"], ["ジャンプにしない"]),
      step("11:00-15:00", 240, "シンプルパンチ力向上", "骨盤回転から拳へ。左右ゆっくり。", ["骨盤を先に回す", "拳は遅れて出る", "息を吐く"], ["肩だけで打たない"]),
      step("15:00-19:00", 240, "スローモーションシャドー", "1動作3秒。呼吸が先。", ["目線を置く", "体が追う", "余力を残す"], ["速くしない"]),
      step("19:00-22:00", 180, "その場突き・高速体幹", "20秒動く、40秒休むを3本。", ["緑判定だけ", "短く速く", "足裏を崩さない"], ["黄や赤ではやらない"]),
      step("22:00-25:00", 180, "視線と眼球", "目線を先に置き、体が追う。", ["上下左右を見る", "近遠を切り替える", "首は楽に"], ["めまいが出たら中止"]),
      step("25:00-30:00", 300, "呼吸と足指で終了", "呼吸法・神経的と足指接地確認。", ["吐く息を長く", "足裏6点へ戻す", "追加しない"], ["動画研究へ流れない"])
    ]
  },
  thursdayPre: {
    title: "木曜 稽古前10分",
    subtitle: "反応できる状態へ",
    days: ["thu"],
    status: ["green", "yellow"],
    asset: ASSETS.shadow,
    tags: ["稽古前", "10分"],
    intro: "強くするのではなく、軸、呼吸、末端を起こす。",
    steps: [
      step("0:00-1:00", 60, "椅子軸方の基本", "1から3回だけ。効かせようとしない。", ["背中と首の力を抜く", "ゆっくり立つ", "感覚が薄くても終える"], ["何度も反復しない"]),
      step("1:00-2:00", 60, "足首チューニング", "つま先裏返し、先端上げ、内側、外側を各3回。", ["小さく動かす", "足裏の感覚を見る"], ["痛い方向へ押さない"]),
      step("2:00-3:00", 60, "足指接地確認", "6点接地を確認する。", ["親指先", "小指先", "外側ラインとかかと"], ["踏みすぎない"]),
      step("3:00-5:00", 120, "呼吸法・物理的", "背中側まで膨らむ呼吸。", ["腹だけでなく背中へ", "肩を上げない", "吐いて緩める"], ["ブレスホールドしない"]),
      step("5:00-7:00", 120, "肩甲骨360度", "前、上、後、下へゆっくり。", ["左右差を見る", "首を楽にする"], ["速く回さない"]),
      step("7:00-8:30", 90, "股関節ウェイブ", "膝を柔らかく。", ["前後左右に揺れる", "足裏は床に置く"], ["腰で反らない"]),
      step("8:30-10:00", 90, "スローモーションシャドー", "1発ずつ吐きながら。", ["呼吸が先", "目線を置く", "力みを抜く"], ["全力で打たない"])
    ]
  },
  thursdayPost: {
    title: "木曜 稽古後15分",
    subtitle: "帰宅後ルーティン",
    days: ["thu"],
    status: ["green", "yellow", "red"],
    asset: ASSETS.recovery,
    tags: ["稽古後", "睡眠優先"],
    intro: "木曜から金曜の崩れを減らす。反省より栄養と睡眠。",
    steps: [
      step("直後30分以内", 120, "補給", "先に買っておいたものを食べる。", ["おにぎり1個", "プロテイン1杯、または牛乳と卵", "水500から750ml"], ["空腹のまま帰宅しない"]),
      step("0:00-3:00", 180, "スワイショウ横", "腕を振るより、体ごと揺れる。", ["肩を落とす", "足裏を感じる", "呼吸を止めない"], ["反省しながらやらない"]),
      step("3:00-5:00", 120, "呼吸法・神経的", "4.5bpmより自然でもよい。", ["吐く息を長めにする", "顔と腹を抜く"], ["苦しくしない"]),
      step("5:00-8:00", 180, "足裏ほぐし", "押し蔵君などで軽く。", ["痛い場所を探しすぎない", "全体をなでる程度", "左右を見る"], ["強圧で剥がしにいかない"]),
      step("8:00-10:00", 120, "前腕ストレッチ", "バイオリンと打撃の前腕ケア。", ["手首を軽く伸ばす", "前腕をゆるめる"], ["しびれが出たら中止"]),
      step("10:00-14:00", 240, "広背筋と腸腰筋", "膝倒し、腸腰筋ストレッチを左右。", ["左右30秒ずつ", "吐く息でゆるむ"], ["深い前屈にしない"]),
      step("14:00-15:00", 60, "頭部の緊張解除", "顔、こめかみ、首の力を抜く。", ["触れる程度", "眉間をゆるめる", "後頭部を軽く"], ["強く揉まない"]),
      step("その後", 60, "寝る準備", "風呂10分以内、3行記録、稽古終了から90分以内に布団。", ["代表場面を1つ", "原因を1つ", "次回試すことを1つ"], ["動画研究、新メソッド検索、長文日記は禁止"])
    ]
  },
  fridayRed: {
    title: "金曜 復元日 赤",
    subtitle: "8から12分、回復のみ",
    days: ["fri"],
    status: ["red", "migraine"],
    asset: ASSETS.recovery,
    tags: ["高強度禁止", "回復"],
    intro: "金曜の高強度は禁止。赤なら回復だけ。",
    steps: [
      step("0:00-3:00", 180, "呼吸法・神経的", "座るか横になる。", ["自然に長く吐く", "顔と肩を抜く"], ["深くしすぎない"]),
      step("3:00-5:00", 120, "皮膚への優しいタッチ", "胸、腹、前腕を軽く触れる。", ["圧をかけない", "落ち着き0から10を見る"], ["マッサージにしない"]),
      step("5:00-6:00", 60, "足指接地確認", "末端へ注意を下ろす。", ["足裏を感じる", "座位でも可"], ["踏み込まない"]),
      step("6:00-9:00", 180, "足裏ほぐし", "押し蔵君などで軽く。", ["全体を軽く", "痛い場所を探さない"], ["強圧にしない"]),
      step("9:00-12:00", 180, "全身リラクゼーション", "寝てもよい。", ["足先から顔へ抜く", "眠気が来たらそのまま休む"], ["取り返そうとしない"])
    ]
  },
  fridayYellow: {
    title: "金曜 復元日 黄",
    subtitle: "18から22分、回復と可動域",
    days: ["fri"],
    status: ["yellow"],
    asset: ASSETS.recovery,
    tags: ["可動域", "低負荷"],
    intro: "回復を主にして、可動域だけ足す。",
    steps: [
      step("0:00-3:00", 180, "スワイショウ横", "揺れて緩める。", ["肩を落とす", "呼吸を止めない"], ["腕力で振らない"]),
      step("3:00-5:00", 120, "キャット・カウ", "四つ這いで10回。", ["丸める", "反らせる"], ["首だけ動かさない"]),
      step("5:00-11:00", 360, "股関節と肩甲骨", "股関節ウェイブ3分、肩甲骨360度3分。", ["小さく", "滑らかに", "左右差を見る"], ["痛みに押し込まない"]),
      step("11:00-15:00", 240, "腸腰筋と広背筋", "左右を軽く伸ばす。", ["左右30秒から", "吐く息でゆるむ"], ["深くやらない"]),
      step("15:00-20:00", 300, "呼吸法・神経的", "長く吐いて終了。", ["顔、舌、腹を抜く", "睡眠へつなぐ"], ["追加しない"])
    ]
  },
  fridayGreen: {
    title: "金曜 復元日 緑",
    subtitle: "25から30分、回復と軽い技術",
    days: ["fri"],
    status: ["green"],
    asset: ASSETS.recovery,
    tags: ["緑でも高強度なし", "軽技術"],
    intro: "緑でも復元日。強くなる日ではなく戻す日。",
    steps: [
      step("0:00-4:00", 240, "ゆっくり大きく動く体操", "全身を大きく、低速で動かす。", ["呼吸に合わせる", "関節を観察"], ["汗を狙わない"]),
      step("4:00-16:00", 720, "総合フローワーク", "つなぎ目を滑らかにする。", ["止まらず流す", "足裏を感じる", "余力を残す"], ["RPEを上げない"]),
      step("16:00-21:00", 300, "スローモーションシャドー", "1動作3秒。", ["目線が先", "体が追う", "呼吸が先"], ["高速突きにしない"]),
      step("21:00-24:00", 180, "目を閉じた立位バランス", "壁か椅子の近く。", ["20秒単位", "足裏を見る"], ["転倒リスクを取らない"]),
      step("24:00-29:00", 300, "呼吸法・神経的", "吐く息で終える。", ["顔、舌、腹を抜く", "眠れる方向へ"], ["追加で歩かない"])
    ]
  },
  saturdayCare: {
    title: "土曜 集中ケア30分",
    subtitle: "緑判定の週だけ",
    days: ["sat"],
    status: ["green"],
    asset: ASSETS.recovery,
    tags: ["条件付き", "30分"],
    intro: "疲労が強い週は流す。流れる週があってよい。",
    steps: [
      step("0:00-5:00", 300, "呼吸とキャット・カウ", "呼吸法・物理的2分、キャット・カウ3分。", ["背中側まで膨らむ", "四つ這いでゆっくり"], ["首を固めない"]),
      step("5:00-11:00", 360, "腸腰筋セッティングとマーチング", "骨盤を起こし、左右を動かす。", ["背骨を丸めない", "左右10回"], ["腰が反るなら小さく"]),
      step("11:00-18:00", 420, "ストレッチと正座軸", "腸腰筋、大腿直筋、正座の軸。", ["左右を均等に", "丹田を感じる"], ["膝痛があれば正座しない"]),
      step("18:00-24:00", 360, "プランクと足裏", "秀徹プランク30秒を3回、足裏ほぐし。", ["休憩込み", "足裏は軽く"], ["赤や黄なら中止"]),
      step("24:00-30:00", 360, "太もも、お尻、多裂筋、呼吸", "ほぐしと目線版を軽く。最後は呼吸。", ["強圧にしない", "吐く息で終える"], ["痛みを剥がさない"])
    ]
  },
  sundayReview: {
    title: "日曜 10分レビュー",
    subtitle: "取り返す日ではない",
    days: ["sun"],
    status: ["green", "yellow", "red"],
    asset: ASSETS.hero,
    tags: ["週次", "10分"],
    intro: "何ができたかを見て、来週の制約を1つだけ決める。",
    steps: [
      step("0:00-3:00", 180, "Oura週次サマリー", "HRV、睡眠、入眠潜時を見る。", ["木曜から金曜の落ち幅を見る", "良し悪しを決めつけない"], ["原因を1回で断定しない"]),
      step("3:00-7:00", 240, "達成チェック", "月曜から金曜にできたこと、できなかったことを見る。", ["できた事実を数える", "崩れた曜日を見る"], ["埋め合わせ計画にしない"]),
      step("7:00-10:00", 180, "来週の制約1つ", "例、水曜シャドーで足音を消す。", ["1つだけ決める", "睡眠を削らない制約にする"], ["追加目標を並べない"])
    ]
  },
  bedtime: {
    title: "就寝前10分",
    subtitle: "毎日、暗めの部屋",
    days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    status: ["green", "yellow", "red", "migraine"],
    asset: ASSETS.recovery,
    tags: ["夜", "睡眠"],
    intro: "スマホを見ながらではなく、寝る方向へ落とす。",
    steps: [
      step("0:00-3:00", 180, "呼吸法・神経的", "RF 4.5bpm。吐く時に顔、舌、腹を抜く。", ["吸う5秒", "吐く8秒", "苦しければ自然に"], ["息を止めない"]),
      step("3:00-5:00", 120, "皮膚への優しいタッチ", "胸から腹へ軽く。", ["手の重さだけ", "落ち着き具合を見る"], ["揉まない"]),
      step("5:00-7:00", 120, "広背筋ストレッチ・膝倒し", "左右30秒ずつ。余りは呼吸。", ["膝を左右へ倒す", "肩は床へ預ける"], ["痛い範囲まで倒さない"]),
      step("7:00-8:00", 60, "足裏か足指", "足部の指骨マッサージ、または足裏ほぐし。", ["軽く触る", "末端へ注意を下ろす"], ["強く押さない"]),
      step("8:00-9:00", 60, "頭部の緊張解除", "眉間、こめかみ、後頭部を軽く。", ["触れる程度", "顔の力を抜く"], ["首前面を圧迫しない"]),
      step("9:00-10:00", 60, "全身リラクゼーション", "足先から顔へ力を抜く。", ["力を入れて抜くより、抜けている場所を探す", "寝てもよい"], ["スマホへ戻らない"])
    ]
  },
  migraine: {
    title: "片頭痛前兆メニュー",
    subtitle: "5から12分、運動で倒しにいかない",
    days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    status: ["migraine"],
    asset: ASSETS.migraine,
    tags: ["前兆", "安全"],
    intro: "医師の指示や薬があるならそれを優先。暗めの場所で座るか横になる。",
    steps: [
      step("0:00-3:00", 180, "呼吸法・神経的", "深くしすぎず、自然に長く吐く。", ["座るか横になる", "吐く息を長く", "首肩を抜く"], ["ブレスホールドしない"]),
      step("3:00-5:00", 120, "皮膚への優しいタッチ", "胸、腹、前腕に軽く触れる。", ["圧をかけない", "落ち着く方向を見る"], ["マッサージにしない"]),
      step("5:00-7:00", 120, "頭部の緊張解除", "顔と頭皮を軽く。", ["眉間", "こめかみ", "後頭部"], ["強く揉まない", "首前面を押さない"]),
      step("7:00-7:30", 30, "足指接地か足指ひねり", "末端へ注意を下ろす。", ["座位で可", "足裏を感じる"], ["踏み込まない"]),
      step("7:30-9:30", 120, "手掌ほぐし", "首肩から遠い場所を使う。", ["手のひらを軽く", "痛みを追わない"], ["強圧にしない"]),
      step("9:30-12:00", 150, "首は可動域確認だけ", "痛い方向へ押し込まない。", ["今どこまで楽か確認", "戻して終える"], ["速い首回旋をしない"])
    ]
  }
};

const state = {
  day: dayFromDate(new Date()),
  status: "green",
  showAll: false,
  selectedSession: "morning5",
  currentStep: 0,
  timerLeft: 0,
  timerRunning: false,
  timerId: null,
  completed: new Set(),
  oshikura: "neck"
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  bindElements();
  loadState();
  bindEvents();
  renderAll();
});

function bindElements() {
  [
    "checkHrv", "checkSleep", "checkPain", "checkMigraine", "statusReadout",
    "statusLabel", "statusText", "weekSelect", "weekCard", "dayTabs",
    "guardList", "sessionImage", "sessionMode", "visualTitle", "visualText",
    "sessionPickerTitle", "showAllButton", "sessionGrid", "guideKicker",
    "guideTitle", "stepCount", "progressBar", "stepCard", "timerOutput",
    "timerButton", "timerResetButton", "prevButton", "nextButton",
    "resumeButton", "resetDayButton", "cueList", "noteScene", "noteCause",
    "noteNext", "oshikuraSelect", "oshikuraProtocol"
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });
}

function bindEvents() {
  ["checkHrv", "checkSleep", "checkPain", "checkMigraine"].forEach((id) => {
    els[id].addEventListener("change", () => {
      evaluateStatus();
      pickRecommendedSession();
      saveState();
      renderAll();
    });
  });

  els.weekSelect.addEventListener("change", () => {
    saveState();
    renderWeek();
  });

  els.dayTabs.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-day]");
    if (!button) return;
    state.day = button.dataset.day;
    pickRecommendedSession();
    saveState();
    renderAll();
  });

  els.showAllButton.addEventListener("click", () => {
    state.showAll = !state.showAll;
    renderSessions();
  });

  els.prevButton.addEventListener("click", () => {
    if (state.currentStep > 0) {
      state.currentStep -= 1;
      resetTimerToStep();
      saveState();
      renderGuide();
    }
  });

  els.nextButton.addEventListener("click", () => {
    const session = sessions[state.selectedSession];
    const key = `${state.selectedSession}:${state.currentStep}`;
    state.completed.add(key);
    if (state.currentStep < session.steps.length - 1) {
      state.currentStep += 1;
      resetTimerToStep();
    } else {
      state.completed.add(`${state.selectedSession}:done`);
      state.currentStep = 0;
      resetTimerToStep();
    }
    saveState();
    renderAll();
  });

  els.timerButton.addEventListener("click", () => {
    if (state.timerRunning) {
      stopTimer();
    } else {
      startTimer();
    }
    renderTimer();
  });

  els.timerResetButton.addEventListener("click", () => {
    resetTimerToStep();
    renderTimer();
  });

  els.resumeButton.addEventListener("click", () => {
    const done = `${state.selectedSession}:done`;
    if (state.completed.has(done)) state.completed.delete(done);
    renderGuide();
  });

  els.resetDayButton.addEventListener("click", () => {
    stopTimer();
    state.completed.clear();
    state.currentStep = 0;
    resetTimerToStep();
    saveState();
    renderAll();
  });

  ["noteScene", "noteCause", "noteNext"].forEach((id) => {
    els[id].addEventListener("input", saveState);
  });

  els.oshikuraSelect.addEventListener("change", () => {
    state.oshikura = els.oshikuraSelect.value;
    saveState();
    renderOshikura();
  });
}

function renderAll() {
  evaluateStatus();
  renderStatus();
  renderWeek();
  renderDays();
  renderGuards();
  renderSessions();
  renderGuide();
  renderCues();
  renderOshikura();
}

function evaluateStatus() {
  if (els.checkMigraine.checked) {
    state.status = "migraine";
    return;
  }
  const count = [els.checkHrv, els.checkSleep, els.checkPain].filter((el) => el.checked).length;
  if (count >= 2) state.status = "red";
  else if (count === 1) state.status = "yellow";
  else state.status = "green";
}

function renderStatus() {
  const map = {
    green: ["緑判定", "普通に実行。朝起動5分が基準。"],
    yellow: ["黄判定", "強度を1段下げる。速い動きと追加種目は避ける。"],
    red: ["赤判定", "完全休み寄り。朝90秒、回復、就寝前だけ。"],
    migraine: ["片頭痛前兆", "運動で倒しにいかない。暗めの場所で専用メニュー。"]
  };
  els.statusReadout.className = `status-readout ${state.status}`;
  els.statusLabel.textContent = map[state.status][0];
  els.statusText.textContent = map[state.status][1];
}

function renderWeek() {
  const week = Number(els.weekSelect.value);
  const [title, text] = weekPlan[week];
  const deload = [4, 8, 12].includes(week) ? "デロード週。量は60から70%。" : "追加は1つだけ。";
  els.weekCard.innerHTML = `<strong>${week}週目 ${title}</strong><span>${text} ${deload}</span>`;
}

function renderDays() {
  [...els.dayTabs.querySelectorAll("button")].forEach((button) => {
    button.classList.toggle("active", button.dataset.day === state.day);
  });
}

function renderGuards() {
  const base = ["23時にベッド。22時以降の高強度なし。"];
  if (state.status === "migraine") {
    base.push("頭痛前兆日はジャンプ、速い首回旋、全力シャドー、冷水刺激をしない。");
    base.push("片頭痛薬や医師の指示があれば優先。");
  } else if (state.status === "red") {
    base.push("ジャンプ、プランク、速い首回旋、ブレスホールド、全力シャドーなし。");
  } else if (state.status === "yellow") {
    base.push("強度を1段下げる。緑限定メニューは選ばない。");
  } else {
    base.push("緑でもRPE6から8を上限。睡眠不足なら追加しない。");
  }
  if (state.day === "fri") base.push("金曜は何があっても高強度禁止。");
  if (state.day === "thu") base.push("稽古後はおにぎり、タンパク質、水、90分以内入床。");
  els.guardList.innerHTML = base.map((item, index) => `<li class="${index > 0 ? "hot" : ""}">${item}</li>`).join("");
}

function renderSessions() {
  const list = filteredSessions();
  els.sessionPickerTitle.textContent = state.showAll ? "全メニュー" : `${dayNames[state.day]}の候補`;
  els.showAllButton.textContent = state.showAll ? "今日だけ見る" : "全部見る";
  els.sessionGrid.innerHTML = list.map(([id, session]) => {
    const allowed = isSessionAllowed(session);
    const active = id === state.selectedSession ? "active" : "";
    const done = state.completed.has(`${id}:done`) ? `<span class="completed-mark">完了</span>` : "";
    const locked = allowed ? "" : `<span class="pill red">今日は選べない</span>`;
    const tags = session.tags.map((tag) => `<span class="pill ${pillClass(tag)}">${tag}</span>`).join("");
    return `
      <button class="session-card ${active} ${allowed ? "" : "locked"}" type="button" data-session="${id}" ${allowed ? "" : "disabled"}>
        <div class="pill-row">${tags}${locked}</div>
        <strong>${session.title}</strong>
        <span>${session.subtitle}</span>
        <small>${session.intro}</small>
        ${done}
      </button>
    `;
  }).join("");

  els.sessionGrid.querySelectorAll("[data-session]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.disabled) return;
      state.selectedSession = button.dataset.session;
      state.currentStep = 0;
      resetTimerToStep();
      saveState();
      renderAll();
    });
  });
}

function renderGuide() {
  const session = sessions[state.selectedSession];
  const stepData = session.steps[state.currentStep];
  els.guideKicker.textContent = `${session.subtitle}`;
  els.guideTitle.textContent = session.title;
  els.stepCount.textContent = `${state.currentStep + 1} / ${session.steps.length}`;
  els.progressBar.style.width = `${((state.currentStep + 1) / session.steps.length) * 100}%`;
  els.sessionImage.src = session.asset;
  els.sessionMode.textContent = dayNames[state.day];
  els.visualTitle.textContent = session.title;
  els.visualText.textContent = session.intro;
  const done = state.completed.has(`${state.selectedSession}:${state.currentStep}`);
  els.stepCard.innerHTML = `
    <div class="step-topline">
      <span class="time-chip">${stepData.time}</span>
      ${done ? `<span class="pill green">この手順は完了</span>` : ""}
    </div>
    <div>
      <h3>${stepData.title}</h3>
      <p>${stepData.setup}</p>
    </div>
    <div class="step-meaning">
      <div class="meaning-item">
        <strong>目的</strong>
        <span>${stepData.purpose}</span>
      </div>
      <div class="meaning-item">
        <strong>正解感</strong>
        <span>${stepData.success}</span>
      </div>
      <div class="meaning-item">
        <strong>最強への接続</strong>
        <span>${stepData.strength}</span>
      </div>
      <div class="meaning-item">
        <strong>画像の見方</strong>
        <span>開始姿勢と矢印だけ見る。細部はこのカードを優先。</span>
      </div>
    </div>
    <div class="instruction-grid">
      <section class="instruction-block">
        <h4>始める姿勢</h4>
        <ul>${stepData.prepare.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="instruction-block">
        <h4>動く方向</h4>
        <ul>${stepData.actions.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="instruction-block warning">
        <h4>NG・中止</h4>
        <ul>${stepData.avoid.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
    </div>
  `;
  renderTimer();
}

function renderTimer() {
  els.timerOutput.textContent = formatTime(state.timerLeft);
  els.timerButton.textContent = state.timerRunning ? "一時停止" : "タイマー開始";
  const session = sessions[state.selectedSession];
  const last = state.currentStep === session.steps.length - 1;
  els.nextButton.textContent = last ? "できた。完了" : "できた。次へ";
  els.prevButton.disabled = state.currentStep === 0;
}

function renderCues() {
  els.cueList.innerHTML = quickCues.map(([title, text]) => `
    <div class="cue-item">
      <strong>${title}</strong>
      <span>${text}</span>
    </div>
  `).join("");
}

function renderOshikura() {
  const protocol = oshikuraProtocols[state.oshikura] || oshikuraProtocols.neck;
  els.oshikuraSelect.value = state.oshikura;
  els.oshikuraProtocol.innerHTML = `
    <div class="oshikura-step">
      <strong>${protocol.title}</strong>
      <span>押し蔵くんは主役ではなく、身体を戻す補助。強く押すほど効く、ではない。</span>
    </div>
    ${protocol.steps.map(([time, text]) => `
      <div class="oshikura-step">
        <strong>${time}</strong>
        <span>${text}</span>
      </div>
    `).join("")}
    <div class="oshikura-caution">${protocol.caution}</div>
  `;
}

function filteredSessions() {
  let entries = Object.entries(sessions);
  if (!state.showAll) {
    entries = entries.filter(([, session]) => isSessionAllowed(session));
  }
  if (state.status === "migraine") {
    entries = entries.sort(([a], [b]) => (a === "migraine" ? -1 : b === "migraine" ? 1 : 0));
  }
  return entries;
}

function pickRecommendedSession() {
  const candidates = Object.entries(sessions).filter(([, session]) => isSessionAllowed(session));
  if (!candidates.some(([id]) => id === state.selectedSession)) {
    state.selectedSession = candidates[0]?.[0] || "morning5";
    state.currentStep = 0;
    resetTimerToStep();
  }
}

function isSessionAllowed(session) {
  const dayOk = session.days.includes(state.day);
  const statusOk = session.status.includes(state.status);
  return dayOk && statusOk;
}

function cloneSteps(steps) {
  return steps.map((item) => ({ ...item, prepare: [...item.prepare], actions: [...item.actions], avoid: [...item.avoid] }));
}

function step(time, duration, title, setup, actions, avoid) {
  return {
    time,
    duration,
    title,
    setup,
    prepare: prepareFor(title),
    actions,
    avoid,
    purpose: purposeFor(title),
    success: successFor(title),
    strength: strengthFor(title)
  };
}

function prepareFor(title) {
  if (title.includes("呼吸")) return ["座るか立つ", "肩と顎を軽くする", "息を止めない前提で始める"];
  if (title.includes("シャドー") || title.includes("パンチ") || title.includes("突き")) return ["周囲に物がない場所", "足裏を床へ置く", "速さより呼吸を優先"];
  if (title.includes("足") || title.includes("接地")) return ["裸足か薄い靴下", "足幅は腰幅", "膝を固めない"];
  if (title.includes("プランク")) return ["床に肘をつく", "きつければ膝つき", "首を長く保つ"];
  if (title.includes("記録") || title.includes("レビュー")) return ["紙かメモを開く", "1つだけ書く", "長文にしない"];
  return ["痛みがない範囲", "呼吸を止めない", "小さく始める"];
}

function purposeFor(title) {
  if (title.includes("呼吸") || title.includes("HRV")) return "交感神経を下げ、次の動作や睡眠へ戻れる状態を作る。";
  if (title.includes("足") || title.includes("接地")) return "床からの入力を戻し、姿勢と反応の土台を作る。";
  if (title.includes("背骨") || title.includes("体軸") || title.includes("軸")) return "力みではなく骨格で立ち、手足を中心から動かす準備をする。";
  if (title.includes("キャット") || title.includes("肩甲骨") || title.includes("股関節") || title.includes("可動域")) return "固い場所を押し広げるのではなく、動ける範囲を起こす。";
  if (title.includes("橋") || title.includes("腸腰筋") || title.includes("プランク") || title.includes("スクワット")) return "翌日に残さない範囲で、出力の通り道を作る。";
  if (title.includes("シャドー") || title.includes("パンチ") || title.includes("突き") || title.includes("落下")) return "速さより連動。目線、呼吸、骨盤、拳の順番を整える。";
  if (title.includes("ほぐし") || title.includes("ストレッチ") || title.includes("緊張解除")) return "痛みを倒すのではなく、警戒を下げて回復へ寄せる。";
  if (title.includes("補給")) return "木曜から金曜のHRV低下を小さくするため、先に材料を入れる。";
  if (title.includes("レビュー") || title.includes("記録") || title.includes("制約")) return "原因探しを広げず、次回の実験を1つに絞る。";
  return "強くなるための準備。疲労を増やすより、戻れる身体を残す。";
}

function successFor(title) {
  if (title.includes("呼吸") || title.includes("HRV")) return "息が深いより、吐いた後に顔・肩・腹が少し落ちる。";
  if (title.includes("足") || title.includes("接地")) return "足裏が床に広がり、立つ位置が少し静かになる。";
  if (title.includes("背骨") || title.includes("体軸") || title.includes("軸")) return "胸を張らずに、頭頂が上へ伸びる感じがある。";
  if (title.includes("キャット")) return "首を頑張らず、背中全体が丸まる・反る。";
  if (title.includes("肩甲骨")) return "首ではなく肩甲骨の周辺が滑る。痛みは増えない。";
  if (title.includes("股関節")) return "腰ではなく股関節から揺れ、膝が柔らかい。";
  if (title.includes("橋")) return "腰ではなくお尻に入る。終わった後に腰が重くない。";
  if (title.includes("プランク")) return "首肩ではなく、床を押して胸が軽く上がる。";
  if (title.includes("シャドー") || title.includes("パンチ") || title.includes("突き")) return "拳を速く出すより、足音と肩の力みが減る。";
  if (title.includes("ほぐし") || title.includes("ストレッチ") || title.includes("緊張解除")) return "痛みが消えるより、警戒が1段下がる。眠気が出てもよい。";
  if (title.includes("補給")) return "食べ終わったら反省会に入らず、帰宅後ルーティンへ移れる。";
  return "終わった直後にもう少しできそう、くらいで止められる。";
}

function strengthFor(title) {
  if (title.includes("呼吸") || title.includes("HRV") || title.includes("リラクゼーション")) return "回復を伸ばす。強い練習を積める身体へ戻す。";
  if (title.includes("足") || title.includes("接地") || title.includes("バランス")) return "反応を伸ばす。崩れない足場で初動を速くする。";
  if (title.includes("背骨") || title.includes("体軸") || title.includes("軸")) return "力伝達を伸ばす。腕力ではなく中心から出力する。";
  if (title.includes("キャット") || title.includes("肩甲骨") || title.includes("股関節") || title.includes("可動域")) return "可動性を伸ばす。詰まりを減らして技が通る道を作る。";
  if (title.includes("橋") || title.includes("腸腰筋") || title.includes("プランク") || title.includes("スクワット")) return "出力を伸ばす。ただし翌日に残さない範囲で強くする。";
  if (title.includes("シャドー") || title.includes("パンチ") || title.includes("突き") || title.includes("落下")) return "反応と出力を統合する。速さより、無駄なく届く強さ。";
  if (title.includes("ほぐし") || title.includes("ストレッチ") || title.includes("緊張解除")) return "継続を守る。痛みで練習が止まるリスクを下げる。";
  if (title.includes("補給")) return "回復を守る。木曜の強さを金曜の崩れに変えない。";
  if (title.includes("レビュー") || title.includes("記録") || title.includes("制約")) return "継続を伸ばす。次の一手だけ決めて迷いを減らす。";
  return "出力、反応、回復、継続のどれかを残す。やりすぎは最強から遠い。";
}

function startTimer() {
  if (state.timerLeft <= 0) resetTimerToStep();
  state.timerRunning = true;
  state.timerId = window.setInterval(() => {
    state.timerLeft = Math.max(0, state.timerLeft - 1);
    if (state.timerLeft === 0) stopTimer();
    renderTimer();
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
  state.timerLeft = session.steps[state.currentStep]?.duration || 0;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function dayFromDate(date) {
  return ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][date.getDay()];
}

function pillClass(tag) {
  if (tag.includes("禁止") || tag.includes("前兆") || tag.includes("安全")) return "red";
  if (tag.includes("条件") || tag.includes("黄") || tag.includes("初週")) return "yellow";
  if (tag.includes("緑") || tag.includes("毎日")) return "green";
  return "";
}

function saveState() {
  const data = {
    checks: {
      hrv: els.checkHrv.checked,
      sleep: els.checkSleep.checked,
      pain: els.checkPain.checked,
      migraine: els.checkMigraine.checked
    },
    week: els.weekSelect.value,
    day: state.day,
    selectedSession: state.selectedSession,
    currentStep: state.currentStep,
    completed: [...state.completed],
    oshikura: state.oshikura,
    notes: {
      scene: els.noteScene.value,
      cause: els.noteCause.value,
      next: els.noteNext.value
    }
  };
  localStorage.setItem(storageKey(), JSON.stringify(data));
}

function loadState() {
  const raw = localStorage.getItem(storageKey());
  if (!raw) {
    evaluateStatus();
    pickRecommendedSession();
    resetTimerToStep();
    return;
  }
  try {
    const data = JSON.parse(raw);
    els.checkHrv.checked = Boolean(data.checks?.hrv);
    els.checkSleep.checked = Boolean(data.checks?.sleep);
    els.checkPain.checked = Boolean(data.checks?.pain);
    els.checkMigraine.checked = Boolean(data.checks?.migraine);
    els.weekSelect.value = data.week || "1";
    state.day = data.day || state.day;
    state.selectedSession = sessions[data.selectedSession] ? data.selectedSession : "morning5";
    state.currentStep = Number(data.currentStep || 0);
    state.completed = new Set(data.completed || []);
    state.oshikura = oshikuraProtocols[data.oshikura] ? data.oshikura : "neck";
    els.noteScene.value = data.notes?.scene || "";
    els.noteCause.value = data.notes?.cause || "";
    els.noteNext.value = data.notes?.next || "";
    evaluateStatus();
    pickRecommendedSession();
    clampStep();
    resetTimerToStep();
  } catch {
    resetTimerToStep();
  }
}

function clampStep() {
  const session = sessions[state.selectedSession];
  if (!session || state.currentStep >= session.steps.length) state.currentStep = 0;
}

function storageKey() {
  const today = new Date().toISOString().slice(0, 10);
  return `strong-road-v2:${today}`;
}
