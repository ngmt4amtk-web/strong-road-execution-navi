// === ASSETS ===
const ASSETS = {
  morning: "assets/morning-clear.png",
  recovery: "assets/recovery-clear.png",
  shadow: "assets/shadow-clear.png",
  migraine: "assets/migraine-clear.png"
};

// === 12週プラン（参考用） ===
const weekPlan = [
  [1, "ゆっくり呼吸を毎日固定", "朝に1分、寝る前に3分。吸う5秒・吐く8秒のリズム。"],
  [2, "足の裏の6点接地", "立つたびに30秒だけ。足の裏が床に触れているか確かめる。"],
  [3, "四つん這いの丸める・反らせる", "朝の中で10回。首は楽に。"],
  [4, "椅子から立つ姿勢リセット", "レッスンの合間に。週全体は60-70%に減らす。", true],
  [5, "背中の三角の骨を回す", "朝とシャドー前。前→上→後ろ→下の順にゆっくり円を描く。"],
  [6, "太ももの付け根の前後揺れ", "歩く前とシャドー前。膝を柔らかく。"],
  [7, "仰向けで膝を交互に胸へ", "修行の核。背中を丸めず、左右10回ずつ。"],
  [8, "お尻を持ち上げて締める", "修行の核。週全体は60-70%に減らす。", true],
  [9, "体を落とす力で前進する練習", "シャドーで前後左右に各5本。"],
  [10, "1動作3秒のスローシャドー", "呼吸が先、パンチは後。"],
  [11, "目を閉じて立つバランス練習", "壁か椅子の近くで20秒。"],
  [12, "20秒動く・40秒休むを3本", "短く速く。週全体は60-70%に減らす。", true]
];

const quickCues = [
  ["椅子から立つ 5秒", "椅子に座って力を抜き、お辞儀をするように体を前に倒し、お尻を浮かせて5秒かけて立つ。"],
  ["椅子に座り直す 30秒", "尾骨（背骨の一番下の骨）を椅子の中心に置き、背骨を上にまっすぐ。お腹の力は抜く。"],
  ["首を前に小さく振る 30秒", "顎を軽く引いて、首を前に小さく傾ける。左右に小さく頭を振るのを20回。痛ければやめる。"],
  ["肩を上げ下げ 45秒", "肩をすくめてから、力を抜いて下げる。これだけ。首は固めない。"],
  ["指の股を軽く押す 60秒", "親指と人差し指の付け根の間（指の股）を反対の手の指で3回ずつ押す。痛気持ちいい未満。"],
  ["足の裏の6点を感じる 30秒", "立って、親指の先・小指の先・足の外側のライン・かかとが床に触れているか感じる。"],
  ["右手中指を曲げる 1秒", "右手の中指の真ん中の関節を1回曲げる。注意の切替だけ。1日1回まで。"],
  ["呼吸1回 15秒", "鼻から5秒で吸って、口から8秒で吐く。顔と肩の力を抜く。"],
  ["肩甲骨を片方ずつ回す 45秒", "背中の左右の三角の骨（肩甲骨）を、片方ずつ前→上→後ろ→下の順に回す。"],
  ["腕を横に振る 60秒", "両腕を体の横にだらんとさせ、振り子のように左右に揺らす。腕の力で振らず、体ごと揺れる。"]
];

// === STEP HELPER ===
// title: わかりやすいタイトル
// duration: 秒
// instruction: 短い1行
// detailed: 番号付き手順（動画AIが再現できるレベル）
// stop: やめるサイン（赤枠で表示）
function step(title, duration, instruction, detailed, opts) {
  opts = opts || {};
  return {
    title, duration, instruction, detailed,
    must: !!opts.must,
    danger: opts.danger || null,
    time: opts.time || "",
    stop: opts.stop || []
  };
}

// === SESSIONS ===
const sessions = {

  morning: {
    title: "朝トレ",
    subtitle: "起き抜けに体を起こす",
    asset: ASSETS.morning,
    intro: "起きたあと最初にやるメニュー。必須3つだけでも十分。",
    steps: [

      step("ゆっくり呼吸（吸う5秒・吐く8秒）", 60,
        "鼻から5秒で吸って、口から8秒で吐く。これを4回くりかえす。",
        [
          "椅子に座る、または床にあぐらで座る。",
          "椅子の場合は背もたれを使わず、お尻を椅子の前半分に置く。",
          "両足の裏全体を床にぴったり付ける。",
          "背中をまっすぐ伸ばす。頭のてっぺんが上から糸で吊られているイメージ。",
          "両手は太ももの上に置く。手のひらは上向き。",
          "口は閉じる。",
          "鼻から、お腹がふくらむのを感じながら、5秒かけて空気を吸う。",
          "心の中で「いち、にい、さん、しい、ご」とゆっくり数える。",
          "肩は上に持ち上がらないように。お腹だけがふくらむ。",
          "吸い切ったら、口を細くすぼめる。ストローをくわえる形。",
          "お腹がへこむのに合わせて、8秒かけて口から細く吐く。",
          "心の中で「いち、にい、さん、しい、ご、ろく、しち、はち」と数える。",
          "吐きながら、肩・あご・口の周り・お腹の力を全部抜く。",
          "これで1回。同じリズムで合計4回くりかえす。",
          "苦しくなったら無理せず、いつでも自然な呼吸に戻す。"
        ],
        { must: true, time: "1分",
          stop: ["息を止めない", "深く吸いすぎて苦しくしない", "めまいが出たら中止"] }),

      step("足の裏の6点を感じる", 50,
        "立って、足の裏の6つのポイントが床に触れているか確かめる。",
        [
          "裸足、または薄い靴下で立つ。",
          "足の幅は腰の幅と同じくらい（こぶし2つ分の間隔）。",
          "両足のつま先はまっすぐ前を向ける。",
          "膝は固めず、軽く緩める。",
          "足の指は床を掴まない。指の力は抜く。",
          "目を開けたまま、自分の足の感覚に意識を向ける。",
          "親指の先が床に触れているのを感じる。",
          "小指の先が床に触れているのを感じる。",
          "足の外側のライン（小指の付け根からかかとまで）が床に触れているのを感じる。",
          "かかとが床に触れているのを感じる。",
          "6つの点（親指の先・小指の先・外側ライン・かかと、左右で計6点）が同時に触れているか確認する。",
          "触れていない場所があれば、重心を少しだけ動かして触れさせる。",
          "50秒かけてゆっくり確認する。"
        ],
        { must: true, time: "50秒",
          stop: ["強く踏み込まない", "足指を握りしめない"] }),

      step("背中をまっすぐ立つ", 40,
        "頭のてっぺんが天井に向かって伸びる感じで立つ。",
        [
          "足の幅は腰の幅で立つ。",
          "両足のつま先はまっすぐ前。",
          "膝は固めない。",
          "両腕は体の横に自然に下ろす。",
          "おへその下（指4本分くらい下の場所）を内側に少しだけ広げるイメージ。",
          "胸を張らない。胸を反らせない。",
          "あごは軽く引く。耳の穴と肩の真ん中が縦一直線になるように。",
          "肩は上がらないようにストンと下ろす。",
          "頭のてっぺんが、天井から糸で引っ張られているように上に伸びる。",
          "お腹に力を入れて固めない。",
          "首も固めない。ふわっと支える。",
          "40秒間この姿勢でじっと立つ。",
          "呼吸は止めない。普通に鼻で呼吸を続ける。"
        ],
        { must: true, time: "40秒",
          stop: ["胸を反らせない", "首を固めない"] }),

      step("四つん這いで背中を丸めて反らせる（猫のポーズ）", 60,
        "猫が伸びをするように背中を丸めて、次に反対に反らせる。10回。",
        [
          "床に四つん這いになる。",
          "両手のひらを床につける。手の真上に肩がくる位置。",
          "両膝を床につける。膝の真上に太ももの付け根がくる位置。",
          "足の甲は床に伸ばす（つま先は立てない）。",
          "首は楽にする。最初は床と平行に。",
          "息を吐きながら、おへそを天井の方へ持ち上げるように、背中全体を丸める。",
          "頭は自然に下を向き、お尻も下を向く。",
          "「猫が怒って毛を逆立てた時の背中」のような形になる。",
          "丸めた状態で1秒止まる。",
          "次に息を吸いながら、お腹を床に近づけるように、背中を反対に反らせる。",
          "胸を前に開いて、目線は少し上を見る。",
          "「牛が背中を反らせた」ような形。ただし首を限界まで反らせない。",
          "反らせた状態で1秒止まる。",
          "丸める→反らせるで1回。これを10回くりかえす。",
          "1回あたり6秒くらいのペース。",
          "首だけで動かさない。背中全体で動く。"
        ],
        { time: "1分",
          stop: ["首を限界まで反らせない", "痛い範囲に入ったら止める"] }),

      step("背中の三角の骨を回す（肩甲骨回し）", 50,
        "背中の左右にある三角の骨を、前→上→後ろ→下の順で円を描くように回す。",
        [
          "立った姿勢で、両腕は体の横にだらんと下ろす。",
          "腕には力を入れない。",
          "背中の左右にある「三角の骨」（肩甲骨）に意識を向ける。",
          "右の三角の骨を前へ動かす（胸の方へスライドさせる）。",
          "次に上へ動かす（耳の方へ持ち上げる）。",
          "次に後ろへ動かす（背骨の方へ寄せる）。",
          "次に下へ動かす（お尻の方へ下げる）。",
          "これで右の三角の骨が前→上→後ろ→下の円を1周描いた。",
          "右を1周したら、次は左の三角の骨で同じく円を描く。",
          "左右交互に5回ずつ、合計10回回す。",
          "1周あたり5秒くらいのペース。",
          "首は固めない。腕は脱力したまま。",
          "肩や首に痛みが出たら、円を小さくする。"
        ],
        { time: "50秒",
          stop: ["速く回さない", "首肩に痛みが出たら小さくする"] }),

      step("太ももの付け根を前後に揺らす", 40,
        "立って、太ももの付け根（足の付け根）だけを前後に小さく揺らす。",
        [
          "立った姿勢、足の幅は腰の幅。",
          "膝を軽く曲げて、ふんわり立つ。",
          "両手は腰の横、または太ももの付け根に当てる。",
          "上半身は動かさず、太ももの付け根だけを前に出す。",
          "次に太ももの付け根だけを後ろに引く。",
          "1秒で前、1秒で後ろ。前後で2秒。",
          "上半身（胸・肩・頭）は動かない。",
          "腰を反らせて代用しない。あくまで付け根の関節を動かす。",
          "20回くりかえす（前後20往復、合計40秒）。",
          "余裕があれば、左右にも小さく揺らしてみる。"
        ],
        { time: "40秒",
          stop: ["腰を反らせて代用しない"] }),

      step("両腕を横に振る（スワイショウ）", 60,
        "両腕を体の前から左右に振り子のように揺らす。腕の力ではなく、体ごと揺れる。",
        [
          "立った姿勢、足の幅は肩の幅。",
          "膝を軽く曲げる。",
          "両腕は体の前にだらんと垂らす。",
          "腰を左にひねる。すると、腕は腕の力ではなく、体のひねりにつられて右側へ振られる。",
          "次に腰を右にひねる。腕は左側へ振られる。",
          "腕には力を入れない。腕は「ひも」のように、体のひねりについていくだけ。",
          "1秒で左、1秒で右。",
          "30回くりかえす（合計60秒）。",
          "肩を上げない。落としたまま。",
          "呼吸は止めない。自然に鼻で呼吸。"
        ],
        { time: "1分",
          stop: ["腕の力で振らない"] }),

      step("首の後ろの硬い場所を軽く持ち上げる", 90,
        "首の付け根の出っ張った骨のすぐ下を、指で軽くつかんで斜め上に引き上げる。",
        [
          "椅子に座るか、床に楽な姿勢で座る。",
          "下を向いて、首の後ろを触る。",
          "首の後ろで一番大きく出っ張った骨を見つける（首の付け根、肩のラインの真ん中）。",
          "その骨のすぐ下に、両手の指（人差し指と中指）を当てる。",
          "皮膚を、斜め上の方向（耳の方）にゆっくり引き上げる。",
          "強くつかまない。皮膚を持ち上げる程度の弱い力。",
          "引き上げたまま、目線だけを横に向ける（首は動かさない）。",
          "5秒数える。",
          "目線を反対の横に向ける。さらに5秒。",
          "手を離す。",
          "30秒休む。",
          "もう一度同じ手順をくりかえす。合計2セット。"
        ],
        { time: "1分30秒", danger: "neckRotate",
          stop: ["強く押し込まない", "しびれが出たら中止", "痛い方向には押さない"] }),

      step("小さく軸ジャンプ（5回）", 60,
        "足の幅は腰の幅。小さく5回ジャンプする。着地の音が静かなことだけ気をつける。",
        [
          "立った姿勢、足の幅は腰の幅。",
          "膝を柔らかく軽く曲げる。",
          "両腕は体の横に自然に。",
          "1回目のジャンプ。両足で軽く床から離れる（10cmくらいでOK）。",
          "着地は、つま先→足全体→かかとの順でつく。膝で衝撃を吸収する。",
          "「ドスン」ではなく「トン」と静かに着地する。",
          "5秒休む。",
          "2回目のジャンプ。同じく静かに着地。",
          "5秒休む。",
          "合計5回くりかえす。",
          "着地音が大きくなってきたら、ジャンプを小さくする。",
          "首肩に痛みがある日はやらない。"
        ],
        { time: "1分", danger: "jump",
          stop: ["首肩痛がある日はやらない", "膝や足首に痛みが出たら中止"] }),

      step("目だけ動かす（眼球ストレッチ）", 60,
        "顔を動かさず、目だけを上下左右に動かす。",
        [
          "椅子に座るか、楽に立つ。",
          "顔は正面を向いたまま固定する。",
          "目だけを上に向ける。3秒キープ。",
          "目だけを下に向ける。3秒キープ。",
          "目だけを右に向ける。3秒キープ。",
          "目だけを左に向ける。3秒キープ。",
          "次に近くを見る。指を顔の30cm前に立てて、その指先にピントを合わせる。3秒。",
          "次に遠くを見る。3m以上先の物を見てピントを合わせる。3秒。",
          "近く・遠くを3往復する。",
          "首は動かさない。目だけ。",
          "めまいや気持ち悪さが出たら、すぐにやめる。"
        ],
        { time: "1分",
          stop: ["めまいが出たらすぐ中止", "首ごと振らない"] }),

      step("目を閉じて立つ（バランス）", 60,
        "壁か椅子の近くで、目を閉じて20秒立つ。これを2回。",
        [
          "壁、または椅子の横に立つ。手をすぐつける場所で。",
          "足の幅は腰の幅。",
          "両腕は体の横に自然に。",
          "目を開けたまま、足の裏の6点を感じる（前のステップと同じ）。",
          "ゆっくり目を閉じる。",
          "そのまま20秒立つ。",
          "崩れそうになったら、すぐに目を開けるか、壁に手をつく。",
          "20秒たったら目を開ける。",
          "10秒休む。",
          "もう一度くりかえす。合計2回。",
          "ふらついても怖がらない。立てているだけでOK。"
        ],
        { time: "1分",
          stop: ["転倒しそうな場所ではやらない", "崩れそうなら即中止"] })
    ]
  },

  main: {
    title: "修行",
    subtitle: "出力・打撃・連動",
    asset: ASSETS.shadow,
    intro: "壊れない強さを作るメニュー。RPE6（がんばり度6/10）まで。必須9つだけなら20分。",
    steps: [

      step("ウォームアップ呼吸", 60,
        "鼻から吸って口から吐く呼吸を1分。次の動きの準備。",
        [
          "立つか座るか、楽な姿勢。",
          "肩を一度すくめてから、力を抜いて下ろす。あごを軽く引く。",
          "鼻から5秒かけて吸う。お腹がふくらむのを感じる。",
          "口から8秒かけて細く吐く。",
          "これを5-6回くりかえす（合計1分）。",
          "鼻呼吸が苦しければ、口呼吸でもOK。",
          "首と顔の力を抜くのが目的。"
        ],
        { must: true, time: "1分", stop: ["息を上げない"] }),

      step("足の裏の6点を感じる", 60,
        "立って、足の裏が床にどう触れているかを確認する。",
        [
          "裸足、または薄い靴下で立つ。",
          "足の幅は腰の幅。",
          "つま先はまっすぐ前。",
          "親指の先、小指の先、足の外側ライン、かかとが床に触れているのを順番に感じる。",
          "左右両方の足で確認する。",
          "1分かけてゆっくり感じる。",
          "踏みしめない。乗っているだけでOK。"
        ],
        { must: true, time: "1分", stop: ["強く踏みしめない"] }),

      step("四つん這いで丸めて反らせる（猫のポーズ）", 60,
        "猫のポーズ10回。背中の準備運動。",
        [
          "床に四つん這い。手は肩の真下、膝は太ももの付け根の真下。",
          "息を吐きながら、おへそを天井へ持ち上げて背中を丸める。",
          "頭は下を向く。",
          "息を吸いながら、お腹を床へ近づけて背中を反らせる。",
          "頭は少し上を向く（限界まで反らせない）。",
          "丸める→反らせるで1回。10回くりかえす。",
          "1回あたり6秒のペース。"
        ],
        { time: "1分", stop: ["首を限界まで反らせない"] }),

      step("背中の三角の骨を回す", 60,
        "立って、肩甲骨を前→上→後ろ→下の順で回す。",
        [
          "立った姿勢、腕は体の横にだらん。",
          "右の肩甲骨を、前→上→後ろ→下の順で円に動かす。1周5秒。",
          "次に左の肩甲骨で同じく1周。",
          "左右交互に5回ずつ、合計10回。",
          "首は固めない。"
        ],
        { time: "1分", stop: ["首肩に痛みがあれば小さく"] }),

      step("太ももの付け根を前後左右に揺らす", 60,
        "立って、付け根の関節だけを前後と左右に揺らす。",
        [
          "立った姿勢、膝を軽く曲げる。",
          "上半身は動かさない。",
          "太ももの付け根だけを前に出して、後ろに引く。10回。",
          "次に左に出して、右に出す。10回。",
          "腰を反らせて代用しない。"
        ],
        { time: "1分", stop: ["腰で反らない"] }),

      step("おへその下から手足を動かす意識（体軸）", 180,
        "立って、おへその下を中心にして、ゆっくり手や足を動かす。",
        [
          "立った姿勢、足の幅は腰の幅。",
          "おへその下（指4本分くらい下の場所）に意識を置く。",
          "右手をゆっくり前に伸ばす。腕の力ではなく、お腹の中心から押し出すイメージで。",
          "5秒かけて伸ばし切り、5秒かけて戻す。",
          "次に左手で同じく10秒。",
          "次に右足を前にゆっくり出して戻す。10秒。",
          "次に左足で同じく10秒。",
          "1セット40秒。これを4セット（合計約3分）。",
          "腕や足に力を入れて速く動かさない。中心から動く感じを探す。"
        ],
        { must: true, time: "3分", stop: ["速くしない", "腕だけで動かさない"] }),

      step("背骨を上にぐっと伸ばす（大腰筋活性）", 120,
        "立って、背骨を上に思いっきり伸ばす。胸は上げない。",
        [
          "立った姿勢、足の幅は腰の幅。",
          "両腕は体の横にだらん。",
          "背骨を、頭のてっぺんから天井に向かって思いっきり伸ばす。",
          "ただし、胸は反らせない・上げない。",
          "おへその下のあたりも一緒に上に伸びる感じ。",
          "20秒キープ。",
          "10秒休む。",
          "これを4セットくりかえす（合計2分）。"
        ],
        { time: "2分", stop: ["反り腰にしない"] }),

      step("お尻を持ち上げて締める（橋のポーズ）", 240,
        "仰向けで膝を立てて、お尻を持ち上げる。12回を2-3セット。",
        [
          "床に仰向けに寝る。",
          "両膝を立てる。足の裏は床。",
          "足の幅は腰の幅。両足は平行。",
          "両腕は体の横、手のひらは床に。",
          "息を吐きながら、お尻を床から持ち上げる。",
          "持ち上げ切ったところで、お尻に「ぎゅっ」と力を入れて締める。",
          "膝から肩までが斜め一直線になる位置がベスト。",
          "そこで2秒キープ。",
          "息を吸いながら、ゆっくりお尻を床に下ろす。",
          "1回。これを12回くりかえす。",
          "12回終わったら30秒休む。",
          "合計2-3セットくりかえす（4分）。",
          "腰で反らせない。お尻の力で持ち上げる。"
        ],
        { must: true, time: "4分", stop: ["腰で反らせない", "首で踏ん張らない"] }),

      step("仰向けで膝を交互に胸へ（マーチング）", 240,
        "仰向けで膝を立てて、骨盤を起こし、左右の膝を交互に胸の方へ引き寄せる。",
        [
          "床に仰向けに寝る。",
          "両膝を立てる。足の幅は腰の幅。",
          "腰の下に手のひらが入るくらいの隙間がある状態（自然な腰のカーブ）。",
          "おへそをへこませて、その隙間を埋める（骨盤を後ろに傾ける）。",
          "両膝を90度に曲げたまま、両足を床から持ち上げる。膝の真上にすねが垂直になる位置。",
          "右の膝を、胸の方へゆっくり引き寄せる。引き寄せ切ったら戻す。",
          "次に左の膝を同じく引き寄せて戻す。",
          "左右で1回。これを10回くりかえす。",
          "腰が床から浮かないように。浮きそうなら膝の動きを小さくする。",
          "10回終わったら30秒休む。",
          "合計2-3セット（4分）。"
        ],
        { must: true, time: "4分", stop: ["腰が浮くなら小さく"] }),

      step("四つん這いで前ならえ（肩甲骨外転）", 240,
        "四つん這いから、両腕を前ならえの位置に伸ばし、肩を下ろして床を押す。10回×2-3セット。",
        [
          "床に四つん這いになる。手は肩の真下、膝は太ももの付け根の真下。",
          "両腕をまっすぐ前に伸ばす（前ならえの形）。手のひらは床に。",
          "肩をすくめないように、ストンと下ろす。",
          "肩甲骨を背中から離すように、床を手のひらで押す。",
          "押すと、背中の上の方がふくらむような感じになる。",
          "1秒押して、戻す。",
          "10回くりかえす。",
          "30秒休む。",
          "2-3セット（合計4分）。",
          "肩をすくめない。"
        ],
        { time: "4分", stop: ["肩をすくめない"] }),

      step("肘プランク（前鋸筋プランク）", 240,
        "肘を床について体を一直線にする。きつければ膝をつく。20秒×3セット。",
        [
          "床にうつ伏せ。",
          "両肘を床につける。肘は肩の真下。",
          "前腕（肘から手首まで）を床にぴったり付ける。",
          "つま先を立てる。",
          "体を持ち上げて、肩から足首までを一直線にする。",
          "きつければ、つま先ではなく膝を床につけてもOK。",
          "肩をすくめない。腰を反らせない。",
          "胸を少し床に近づけてから、床を押して胸を上げる。これを呼吸で繰り返す。",
          "20秒キープしたら、いったん床に下りる。",
          "40秒休む。",
          "合計3セット（4分）。"
        ],
        { time: "4分", danger: "highIntensity",
          stop: ["腰を反らせない", "首肩で踏ん張らない", "赤判定の日は飛ばす"] }),

      step("スクワット（足を曲げ伸ばし）", 240,
        "立って膝を曲げてしゃがみ、立ち上がる。10回×2-3セット。",
        [
          "立った姿勢、足の幅は腰の幅より少し広く。",
          "つま先は少し外側に向ける（30度くらい）。",
          "両腕は前にまっすぐ伸ばす（バランスをとるため）。",
          "息を吸いながら、お尻を後ろに引いて、ゆっくりしゃがむ。",
          "膝はつま先と同じ方向（外向き）に曲がる。",
          "太ももが床と平行になるくらいまで下げる。痛ければ浅くてOK。",
          "足の裏全体は床から離さない（かかとを浮かせない）。",
          "息を吐きながら、立ち上がる。",
          "1回。これを10回くりかえす。",
          "30秒休む。",
          "2-3セット（合計4分）。",
          "腰を反らせない。"
        ],
        { time: "4分", stop: ["膝の痛みが出たら中止"] }),

      step("両肘とつま先で体を浮かせる（秀徹プランク）", 90,
        "うつ伏せで両肘とつま先で体を浮かせる。30秒×2-3セット。",
        [
          "床にうつ伏せ。",
          "両肘を床につけ、両手を後頭部に組む。",
          "つま先を立てる。",
          "体を持ち上げて、肘とつま先だけで浮かせる。",
          "肩から足首までが一直線になるように。",
          "鼻から短く吸って、口から長く吐く呼吸を続ける。",
          "30秒キープ。",
          "30秒休む。",
          "2-3セット（合計1分30秒）。",
          "首で頑張らない。お腹で支える。"
        ],
        { time: "1分30秒", danger: "highIntensity",
          stop: ["首で踏ん張らない", "腰を反らせない", "赤判定の日は飛ばす"] }),

      step("体を落とす力で前進（初動落下）", 180,
        "立ち姿勢から、体を前にぱたんと倒すような感覚で1歩進む。前後左右に各5本。",
        [
          "立った姿勢、足の幅は腰の幅。",
          "膝を軽く曲げる。",
          "上半身を、前にゆっくり傾けていく（板が前に倒れるように）。",
          "倒れすぎる前に、片足を前に出して支える（自然に前進する）。",
          "これを「体を落として進む」感覚で5歩。",
          "次に後ろにも同じく5歩（後ろ倒れ→足で支える）。",
          "次に左に5歩、右に5歩。",
          "全部で20歩（前後左右5歩ずつ）。",
          "ジャンプではなく、自然に倒れる感じ。",
          "足音は静かに。"
        ],
        { time: "3分", stop: ["飛び跳ねない"] }),

      step("シンプルパンチ練習", 240,
        "立って、お腹のひねりから拳を前に出す。左右ゆっくり。",
        [
          "立った姿勢、左足を前、右足を後ろ（ボクシングの構え）。",
          "両こぶしを軽く握り、あごの横に構える。",
          "肩は下げる。あごは引く。",
          "右の腰（お腹）をひねりながら、右拳を前に伸ばす。",
          "腰が先に動き、拳は後からついてくる。",
          "息を吐きながら拳を伸ばす。",
          "拳が伸び切ったら、ゆっくり戻す。",
          "次に左拳。同じくお腹のひねりから。",
          "左右で1回。これを20回くりかえす（合計4分）。",
          "肩だけで打たない。お腹のひねりが先。"
        ],
        { must: true, time: "4分", stop: ["肩だけで打たない"] }),

      step("1動作3秒のスローシャドー", 240,
        "ボクシングの動きを、1動作3秒のスローモーションでやる。",
        [
          "ボクシングの構えで立つ。",
          "1発のパンチを、3秒かけてゆっくり出す。",
          "息を吐きながら、ゆっくり伸ばす。",
          "目線を、想像の相手の場所に置く。",
          "拳を伸ばしたら、3秒かけて戻す。",
          "ジャブ、ストレート、フックなど、好きな動きを3秒ずつ。",
          "速くしない。1動作3秒を必ず守る。",
          "20-30動作くりかえす（合計4分）。",
          "余力を残して終わる。"
        ],
        { must: true, time: "4分", stop: ["速くしない", "全力で打たない"] }),

      step("20秒動く・40秒休むを3本（高速体幹）", 180,
        "ボクシングの構えで20秒間速くパンチを打ち、40秒休む。これを3回。",
        [
          "ボクシングの構えで立つ。",
          "20秒間、左右の拳を速く打ち続ける。",
          "ただし、体の中心はぶれない。足の位置は動かない。",
          "20秒たったらいったん止まる。",
          "40秒休む。",
          "もう20秒打つ。",
          "40秒休む。",
          "もう20秒打つ。",
          "合計3本（3分）。",
          "黄判定・赤判定・前兆ありの日はやらない。"
        ],
        { time: "3分", danger: "highIntensity",
          stop: ["黄や赤の日は飛ばす", "前兆ありの日は飛ばす"] }),

      step("目線を先に置く＋目だけ動かす", 180,
        "目線を先に置いて体が追う練習＋目を上下左右に動かす。",
        [
          "ボクシングの構えで立つ。",
          "想像の相手の顔の位置に、まず目線を置く。",
          "目線を置いた後、体がそこに反応するように1発打つ。",
          "「目→体」の順番を守る。",
          "5発打つ。",
          "次に、顔は正面のまま、目だけ上下左右に動かす（朝トレと同じ）。",
          "上3秒・下3秒・右3秒・左3秒。",
          "近くと遠くを3往復。",
          "全部で3分。"
        ],
        { time: "3分", stop: ["めまいが出たら中止"] }),

      step("仰向けで手足を上に上げる（手足の連動）", 60,
        "仰向けで両腕と両足を持ち上げ、足の力で腕を動かす感覚。",
        [
          "床に仰向け。",
          "両腕を天井に向けてまっすぐ伸ばす。",
          "両膝を90度に曲げ、足を床から持ち上げる（すねが床と平行）。",
          "右足を伸ばすと、左腕が下がる。同時に動かす（対角線）。",
          "戻して、左足と右腕を同じく動かす。",
          "左右交互に10回。",
          "腰が床から浮かないように。"
        ],
        { time: "1分", stop: ["腰を反らせない"] }),

      step("太ももの付け根で円を描く", 60,
        "立って、太ももの付け根（足の付け根）の関節だけで円を描くように動かす。",
        [
          "立った姿勢。",
          "右の太ももの付け根（足の付け根）だけで、前→外→後ろ→内の順に円を描く。",
          "1周5秒くらい。",
          "右で5周。",
          "次に左の付け根で5周。",
          "上半身は動かさない。"
        ],
        { time: "1分", stop: ["速くしない"] }),

      step("両腕を上下に振る（縦のスワイショウ）", 120,
        "両腕を上下に振り子のように振る。膝で衝撃を吸収する。",
        [
          "立った姿勢、足の幅は肩の幅。",
          "両腕は体の横にだらんと下ろす。",
          "両腕を前に振り上げる（肩の高さくらい）。",
          "同時に膝を少し曲げる（クッション）。",
          "腕を下ろしながら、膝を伸ばす。",
          "下ろした勢いで、腕は後ろに少し振れる。",
          "また前に振り上げる。",
          "1往復2秒くらい。",
          "60回くりかえす（合計2分）。",
          "肩を上げない。腕の力で振らない。"
        ],
        { time: "2分", stop: ["腕で振らない"] }),

      step("太もも前のストレッチ（腸腰筋）", 60,
        "膝立ちで片足を前に出し、太ももの付け根を伸ばす。左右各30秒。",
        [
          "床に両膝をつく（膝立ち）。",
          "右足を前に大きく出す。右膝は90度に曲がる。",
          "左膝は床にそのまま。左の太ももの付け根が床と垂直に近い位置。",
          "両手は右の太ももの上に置く。",
          "お尻を、ゆっくり前に押し出す（左の太ももの付け根が伸びる）。",
          "左の太ももの付け根の前側がじんわり伸びるのを感じる。",
          "30秒キープ。",
          "ゆっくり戻して、左右を入れ替える。",
          "左足を前、右膝を後ろにして30秒。",
          "合計1分。"
        ],
        { must: true, time: "1分", stop: ["腰を反らせない", "膝が痛ければ膝の下にタオル"] }),

      step("背中を伸ばす（広背筋ストレッチ）", 60,
        "仰向けで膝を立てて、両膝を片側にゆっくり倒す。左右30秒ずつ。",
        [
          "床に仰向け。",
          "両膝を立てる。",
          "両腕は体の横、手のひらは床に。",
          "両膝をそろえたまま、ゆっくり右側に倒す。",
          "膝を倒しても、左の肩は床から離れないように。",
          "背中の左側、わき腹がじんわり伸びる。",
          "30秒キープ。",
          "ゆっくり戻して、左側に倒す。",
          "30秒キープ。",
          "合計1分。"
        ],
        { time: "1分", stop: ["痛い範囲まで倒さない"] }),

      step("ゆっくり呼吸で終わる", 180,
        "最後にゆっくり呼吸を3分。次に残さないために。",
        [
          "床に仰向けか、楽な座り姿勢。",
          "両手はお腹に置く。",
          "鼻から5秒で吸う。お腹がふくらむ。",
          "口から8秒で細く吐く。お腹がへこむ。",
          "これを10回くりかえす（合計約3分）。",
          "顔・あご・口の周り・お腹の力を全部抜く。",
          "終わったら、ゆっくり起き上がる。"
        ],
        { must: true, time: "3分", stop: ["息を止めない"] })
    ]
  },

  bedtime: {
    title: "寝る前",
    subtitle: "眠りに入る準備",
    asset: ASSETS.recovery,
    intro: "ベッドに入る前の10分。スマホを見ずに、暗めの部屋で。必須2つだけなら4分。",
    steps: [

      step("ゆっくり呼吸（吸う5秒・吐く8秒）", 180,
        "暗めの部屋で、鼻から5秒吸って口から8秒吐く呼吸を3分。",
        [
          "部屋の電気を暗めにする（豆電球くらい）。",
          "ベッドか床に仰向けに寝る。",
          "両手はお腹の上に置く。",
          "口を閉じる。",
          "鼻から、お腹がふくらむのを感じながら、5秒かけて吸う。",
          "心の中で「いち、にい、さん、しい、ご」と数える。",
          "口を細くすぼめて、お腹がへこむのに合わせて、8秒かけて吐く。",
          "心の中で「いち〜はち」まで数える。",
          "吐きながら、顔・あご・口の周り・お腹の力を抜く。",
          "これで1回。",
          "同じリズムで14回くりかえす（合計約3分）。",
          "苦しければ、自然な呼吸でOK。",
          "眠くなったらそのまま眠っていい。"
        ],
        { must: true, time: "3分",
          stop: ["息を止めない", "深く吸いすぎて苦しくしない"] }),

      step("胸からお腹へ手をすべらせる（やさしいタッチ）", 120,
        "仰向けで、自分の手で胸からお腹へゆっくり撫でる。",
        [
          "仰向けに寝たまま。",
          "右手をパー（手のひらを開く）にする。",
          "右手のひらを胸の中央（鎖骨の下）にそっと置く。",
          "息を吐きながら、手のひらをゆっくりお腹の方へすべらせる（10秒くらい）。",
          "おへその上まですべらせて止める。",
          "また胸の中央に戻して、ゆっくりすべらせる。",
          "これを6-8回くりかえす（合計2分）。",
          "圧は『手の重さだけ』。押し込まない。",
          "撫でるテンポは波の音のようにゆっくり。"
        ],
        { time: "2分",
          stop: ["強く揉まない", "圧をかけない"] }),

      step("仰向けで膝を左右に倒す", 120,
        "仰向けで膝を立てて、両膝を片側にゆっくり倒す。左右30秒ずつ×2。",
        [
          "仰向けに寝る。",
          "両膝を立てる。",
          "両腕は体の横、手のひらは床（またはベッド）に。",
          "両膝をそろえて、ゆっくり右側に倒す。",
          "左の肩はベッドから離れないように。",
          "30秒キープ。",
          "ゆっくり戻して、左側に倒す。",
          "30秒キープ。",
          "もう1セットくりかえす（合計2分）。"
        ],
        { time: "2分",
          stop: ["痛い範囲まで倒さない"] }),

      step("足の裏か足の指を軽くなでる", 60,
        "片足ずつ、足の裏や足の指を反対の手で軽くさわる。",
        [
          "ベッドに座るか、椅子に座る。",
          "右足を左の太ももの上に置く。",
          "左手で、右足の裏を軽くなでる。指先からかかとへ、20秒。",
          "次に左足を右の太ももに置いて、右手で20秒なでる。",
          "強く押さない。撫でる程度。",
          "末端の感覚に注意を向けて、頭を切り替える。"
        ],
        { time: "1分",
          stop: ["強く押さない"] }),

      step("顔・こめかみ・後頭部を軽くさわる", 60,
        "両手の指で、顔のいろいろな場所を軽くさわって力を抜く。",
        [
          "仰向けか、楽な座り姿勢。",
          "両手の指の腹で、眉毛と眉毛の間（眉間）を軽くさわる。10秒。",
          "次にこめかみ（耳の上の柔らかい場所）を両手で軽くさわる。10秒。",
          "次に後頭部（頭の後ろの下の方）を両手で軽くさわる。10秒。",
          "次に顎（あご）の力を抜く（口を少し開けるくらい楽に）。10秒。",
          "次に頭のてっぺんを軽くさわる。10秒。",
          "全部で1分。",
          "圧は『触れているだけ』。押し込まない。",
          "首の前側は押さない。"
        ],
        { time: "1分",
          stop: ["首の前側を押さない", "強く揉まない"] }),

      step("全身の力を順番に抜く", 60,
        "足の先から顔まで、力を抜いている場所を順に確認する。",
        [
          "仰向けに寝たまま、目を閉じる。",
          "足の指の力を抜く（5秒で確認）。",
          "ふくらはぎ、太ももの力を抜く（5秒）。",
          "お尻、お腹の力を抜く（5秒）。",
          "胸、背中の力を抜く（5秒）。",
          "両手の指、腕、肩の力を抜く（10秒）。",
          "首、あご、口の周りの力を抜く（10秒）。",
          "目の周り、おでこの力を抜く（10秒）。",
          "頭のてっぺんまで、全身がベッドに沈むように感じる（10秒）。",
          "そのまま眠ってしまってOK。"
        ],
        { must: true, time: "1分",
          stop: ["スマホへ戻らない"] })
    ]
  }
};

const oshikuraProtocols = {
  neck: {
    title: "首肩・肩甲骨まわり 3分",
    caution: "首そのものを強く押さない。しびれ・夜の痛み・力が入らない感覚があれば中止して病院へ。",
    steps: [
      ["30秒", "鎖骨（首と肩の間にある横の骨）の下から、胸の上を、押し蔵くんの太い側で軽く撫でる。呼吸が浅くならない弱い圧。"],
      ["60秒", "背中の三角の骨（肩甲骨）の周りで、硬い線を探す。見つかったら5秒ずつ軽く当てる。3-4ヶ所くらい。"],
      ["60秒", "前腕（肘から手首）と手のひらに移動。首肩を直接攻めず、遠い場所から緊張を落とす。"],
      ["30秒", "肩を耳に向かってすくめてから、ストンと下ろす。可動域が少し軽いか確認するだけ。"]
    ]
  },
  forearm: {
    title: "前腕・手指 3分",
    caution: "しびれ・電気が走る痛み・握力が落ちた感覚があれば中止。腱（白い筋）をゴリゴリこすらない。",
    steps: [
      ["30秒", "手のひらを、押し蔵くんの太い側で軽く撫でる。親指の付け根は押し込みすぎない。"],
      ["60秒", "前腕の内側（手のひら側）を、肘から手首へゆっくり撫でる。痛気持ちいい未満。"],
      ["60秒", "前腕の外側（手の甲側）を、同じく肘から手首へゆっくり撫でる。バイオリンの後はここを丁寧に。"],
      ["30秒", "指の股（指と指の間）を、1ヶ所3回だけ軽く押す。関節をねじらない。"]
    ]
  },
  foot: {
    title: "足裏・足首 3分",
    caution: "痛い場所を探さない。足の裏の硬い場所を強く押し剥がす発想は禁止。",
    steps: [
      ["30秒", "足の裏全体を、押し蔵くんの太い側で撫でる。接地感を戻すだけ。"],
      ["60秒", "親指側・小指側・かかと側を分けて、軽く当てる。各20秒くらい。"],
      ["60秒", "土踏まず（足の真ん中の凹んだ場所）は、点で押し込まず、短い線でゆっくり動かす。"],
      ["30秒", "立って、足の裏の6点（親指の先・小指の先・外側ライン・かかと）が床に触れているか確認。"]
    ]
  },
  headache: {
    title: "片頭痛前兆・顔まわり 2分",
    caution: "片頭痛薬や医師の指示があれば優先。首の前側・こめかみ・顔面を強く押さない。",
    steps: [
      ["30秒", "暗めの場所で座る。押し蔵くんを持つ前に、まず吐く息を長くする。"],
      ["30秒", "胸・お腹・前腕を軽く撫でる。頭は直接さわらない。"],
      ["30秒", "手のひらか足の裏に注意を向ける。末端の感覚だけ見る。"],
      ["30秒", "顔は指先で触れる程度。楽にならなければ終了して休む。"]
    ]
  },
  lesson: {
    title: "レッスン間30秒",
    caution: "生徒への指導には使わない。自分の姿勢リセットだけに使う。",
    steps: [
      ["5秒", "手のひらを軽くなでて、握り込みを抜く。"],
      ["10秒", "前腕を肘から手首へ1往復なでる。両腕同じだけ。"],
      ["10秒", "足の裏を床に戻し、6点接地を確認。"],
      ["5秒", "息を吐いて終わり。追加しない。"]
    ]
  }
};

// === STATE ===
const state = {
  view: "home",
  condition: "normal",
  selectedSession: "morning",
  currentStep: 0,
  timerLeft: 0,
  timerRunning: false,
  timerId: null,
  oshikura: "neck",
  notes: { scene: "", cause: "", next: "" },
  done: { must: 0, optional: 0, skipped: 0 }
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  loadState();
  bindEvents();
  resetTimerToStep();
  renderAll();
  showView(state.view);
});

function cacheElements() {
  document.querySelectorAll("[id]").forEach(el => { els[el.id] = el; });
  els.views = document.querySelectorAll(".view");
}

function bindEvents() {
  document.body.addEventListener("click", (e) => {
    const t = e.target.closest("[data-go]");
    if (!t) return;
    showView(t.dataset.go);
  });
  document.body.addEventListener("click", (e) => {
    const t = e.target.closest("[data-go-session]");
    if (!t) return;
    startSession(t.dataset.goSession);
  });
  els.condRow.addEventListener("click", (e) => {
    const t = e.target.closest("[data-cond]");
    if (!t) return;
    state.condition = t.dataset.cond;
    saveState();
    renderHome();
  });
  els.timerButton.addEventListener("click", () => {
    if (state.timerRunning) stopTimer(); else startTimer();
    renderRun();
  });
  els.prevButton.addEventListener("click", goPrev);
  els.skipButton.addEventListener("click", () => advance(true));
  els.nextButton.addEventListener("click", () => advance(false));
  els.oshikuraTabs.addEventListener("click", (e) => {
    const t = e.target.closest("[data-osh]");
    if (!t) return;
    state.oshikura = t.dataset.osh;
    saveState();
    renderOshikura();
  });
  ["noteScene", "noteCause", "noteNext"].forEach(id => {
    els[id].addEventListener("input", () => {
      const k = id.replace("note", "").toLowerCase();
      state.notes[k] = els[id].value;
      saveState();
    });
  });
}

function startSession(name) {
  if (!sessions[name]) return;
  state.selectedSession = name;
  state.currentStep = 0;
  state.done = { must: 0, optional: 0, skipped: 0 };
  resetTimerToStep();
  saveState();
  showView("run");
}

function advance(skipped) {
  const session = sessions[state.selectedSession];
  const stepData = session.steps[state.currentStep];
  if (skipped) state.done.skipped += 1;
  else if (stepData.must) state.done.must += 1;
  else state.done.optional += 1;

  if (state.currentStep < session.steps.length - 1) {
    state.currentStep += 1;
    resetTimerToStep();
    saveState();
    renderRun();
  } else {
    finishSession();
  }
}

function goPrev() {
  if (state.currentStep > 0) {
    state.currentStep -= 1;
    resetTimerToStep();
    saveState();
    renderRun();
  }
}

function finishSession() {
  const session = sessions[state.selectedSession];
  els.doneSessionTitle.textContent = session.title;
  const must = state.done.must;
  const opt = state.done.optional;
  const sk = state.done.skipped;
  const totalMust = session.steps.filter(s => s.must).length;
  els.doneText.textContent = `必須 ${must}/${totalMust}・任意 ${opt} 個できた。飛ばし ${sk} 個。`;
  saveState();
  showView("done");
}

function showView(name) {
  state.view = name;
  els.views.forEach(v => v.classList.toggle("active", v.dataset.view === name));
  if (name === "run") renderRun();
  else if (name === "oshikura") renderOshikura();
  else if (name === "week") renderWeek();
  else if (name === "home") renderHome();
  window.scrollTo(0, 0);
  saveState();
}

function renderAll() {
  renderHome();
  renderOshikura();
  renderWeek();
}

function renderHome() {
  els.condRow.querySelectorAll("[data-cond]").forEach(b => {
    b.classList.toggle("active", b.dataset.cond === state.condition);
  });
  const fmt = (sec) => Math.round(sec / 60);
  for (const [name, key] of [["morning", "morningSub"], ["main", "mainSub"], ["bedtime", "bedtimeSub"]]) {
    const s = sessions[name];
    const must = s.steps.filter(x => x.must).reduce((a, x) => a + x.duration, 0);
    const total = s.steps.reduce((a, x) => a + x.duration, 0);
    els[key].textContent = `必須 約${fmt(must)}分・全部 約${fmt(total)}分`;
  }
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

  // Tags
  const tags = [];
  if (stepData.must) tags.push(`<span class="run-tag run-tag--must">★ 必須</span>`);
  else tags.push(`<span class="run-tag run-tag--optional">任意・飛ばしOK</span>`);
  const dangerWarning = dangerNote(stepData.danger);
  if (dangerWarning) tags.push(`<span class="run-tag run-tag--danger">${dangerWarning}</span>`);
  if (stepData.time) tags.push(`<span class="run-tag run-tag--time">${stepData.time}</span>`);
  els.runTagRow.innerHTML = tags.join("");

  // Detailed steps (常時表示)
  const list = (stepData.detailed || []).map((line, i) =>
    `<li><span class="num">${i + 1}</span><span class="text">${line}</span></li>`).join("");

  const stop = (stepData.stop && stepData.stop.length)
    ? `<div class="run-stop"><strong>こうなったら止める</strong><ul>${stepData.stop.map(x => `<li>${x}</li>`).join("")}</ul></div>`
    : "";

  els.runDetails.innerHTML = `<ol class="run-step-list">${list}</ol>${stop}`;

  els.prevButton.disabled = state.currentStep === 0;
  els.nextButton.textContent = (state.currentStep === session.steps.length - 1)
    ? "完了する" : "できた";
  els.skipButton.dataset.discouraged = stepData.must ? "true" : "false";
}

function dangerNote(d) {
  if (!d) return null;
  if (state.condition === "normal" && d !== "neckRotate") return null;
  if (state.condition === "migraine") {
    return "前兆あり：飛ばす";
  }
  if (state.condition === "recover") {
    if (d === "jump" || d === "highIntensity") return "回復寄り：飛ばす推奨";
    return null;
  }
  if (d === "neckRotate" && state.condition !== "normal") {
    return "首の不調あり：飛ばす";
  }
  return null;
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

function formatTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const x = Math.floor(s % 60).toString().padStart(2, "0");
  return `${m}:${x}`;
}

function storageKey() {
  const today = new Date().toISOString().slice(0, 10);
  return `strong-road-v5:${today}`;
}
function saveState() {
  try {
    localStorage.setItem(storageKey(), JSON.stringify({
      view: state.view,
      condition: state.condition,
      selectedSession: state.selectedSession,
      currentStep: state.currentStep,
      oshikura: state.oshikura,
      notes: state.notes,
      done: state.done
    }));
  } catch {}
}
function loadState() {
  try {
    const raw = localStorage.getItem(storageKey());
    if (!raw) return;
    const d = JSON.parse(raw);
    if (d.condition && ["normal","recover","migraine"].includes(d.condition)) state.condition = d.condition;
    if (d.selectedSession && sessions[d.selectedSession]) state.selectedSession = d.selectedSession;
    if (typeof d.currentStep === "number") state.currentStep = d.currentStep;
    if (d.oshikura && oshikuraProtocols[d.oshikura]) state.oshikura = d.oshikura;
    if (d.notes) state.notes = { ...state.notes, ...d.notes };
    if (d.done) state.done = { ...state.done, ...d.done };
    if (els.noteScene) els.noteScene.value = state.notes.scene || "";
    if (els.noteCause) els.noteCause.value = state.notes.cause || "";
    if (els.noteNext) els.noteNext.value = state.notes.next || "";
  } catch {}
}
