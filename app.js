// === ASSETS ===
const ASSETS = {
  morning: "assets/morning-clear.png",
  recovery: "assets/recovery-clear.png",
  shadow: "assets/shadow-clear.png",
  migraine: "assets/migraine-clear.png"
};

// === DATA: 12週プラン（参考用） ===
const weekPlan = [
  [1, "呼吸法・神経的", "朝90秒と就寝前で固定。RF=4.5bpm（吸う5秒・吐く8秒）。"],
  [2, "足指接地確認", "立つたびに6点接地を30秒。量より回数。"],
  [3, "キャット・カウ", "朝の中で10回。首は楽に。"],
  [4, "椅子軸方の基本", "レッスン間に姿勢リセット。週全体は60-70%に。", true],
  [5, "肩甲骨360度回転", "朝とシャドー前。ゆっくり円を描く。"],
  [6, "股関節ウェイブ", "歩行前とシャドー前。膝を柔らかく。"],
  [7, "腸腰筋マーチング", "修行の核。背骨を丸めず、左右10回。"],
  [8, "橋のポーズ", "修行の核。週全体は60-70%に。", true],
  [9, "初動落下エネルギー", "シャドーで前後左右に各5本。"],
  [10, "スローモーションシャドー", "1動作3秒。呼吸が先、打撃は後。"],
  [11, "目を閉じた立位バランス", "壁か椅子の近くで20秒。"],
  [12, "その場突き・高速体幹", "短く速く。週全体は60-70%に。", true]
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

// === STEP HELPER ===
// must: 必須フラグ（最低ライン）
// danger: "jump" | "highIntensity" | "breathHold" | "neckRotate" | null
// 回復寄りの日は danger があるものを警告、前兆ありの日は強い警告
function step(title, duration, instruction, opts) {
  opts = opts || {};
  return {
    title,
    duration,
    instruction,
    must: !!opts.must,
    danger: opts.danger || null,
    time: opts.time || "",
    prepare: opts.prepare || [],
    actions: opts.actions || [],
    avoid: opts.avoid || []
  };
}

// === SESSIONS: 朝トレ / 修行 / 寝る前 の3つだけ ===
const sessions = {
  morning: {
    title: "朝トレ",
    subtitle: "軸・呼吸・末端を起こす",
    asset: ASSETS.morning,
    intro: "起き抜けに身体を準備状態へ。必須3つだけでも十分。",
    steps: [
      step("呼吸 4.5bpm", 60, "吸う5秒・吐く8秒。4-5呼吸。吐く方を丁寧に。", {
        must: true, time: "1分",
        prepare: ["座るか立つ", "肩と顎を軽くする"],
        actions: ["吸う5秒・吐く8秒", "顔・舌・みぞおちを抜く", "肩が上がったらリセット"],
        avoid: ["息を止めない", "深呼吸で苦しくしない"]
      }),
      step("足指接地確認", 50, "親指先・小指先・小指からかかと外側ライン・かかとの6点を感じる。", {
        must: true, time: "50秒",
        prepare: ["床にまっすぐ立つ", "重心を真ん中に"],
        actions: ["6点が床に触れているかだけ確認", "踏みしめない"],
        avoid: ["足指で床を掴み続けない"]
      }),
      step("背骨はまっすぐ", 40, "立位で頭頂が上に伸びる感覚。骨で支える。", {
        must: true, time: "40秒",
        prepare: ["足幅は腰幅", "膝を固めない"],
        actions: ["頭頂が上に伸びる", "腹腔を内側へ広げる", "骨で支える感じ"],
        avoid: ["胸を反らせて作らない", "首を固めない"]
      }),
      step("キャット・カウ", 60, "四つ這いで丸めて反らせて、10回。首は楽に。", {
        time: "1分",
        prepare: ["四つ這い姿勢", "手は肩の下、膝は股関節の下"],
        actions: ["背中を丸める", "背中を反らせる", "ゆっくり10回"],
        avoid: ["首だけで動かさない", "痛い範囲へ押し込まない"]
      }),
      step("肩甲骨360度回転", 50, "腕ではなく肩甲骨に意識。前→上→後→下の円。", {
        time: "50秒",
        prepare: ["立位、腕は脱力"],
        actions: ["前→上→後→下の円", "左右ゆっくり"],
        avoid: ["首肩に痛みが増えたら小さく"]
      }),
      step("股関節ウェイブ", 40, "膝を柔らかくして股関節だけで揺らす。", {
        time: "40秒",
        prepare: ["立位、膝は軽く曲げる"],
        actions: ["前後に揺れる", "左右にも小さく"],
        avoid: ["腰を反らせて代用しない"]
      }),
      step("スワイショウ横", 60, "腕を振るより、体ごと揺れる。肩を起こす。", {
        time: "1分",
        prepare: ["立位"],
        actions: ["両腕を横に振り子のように", "肩を落とす"],
        avoid: ["腕力で振らない"]
      }),
      step("多裂筋はがし・目線版", 90, "頸椎7番下から斜め上に。耳前側。目線は横向き5秒。", {
        time: "90秒", danger: "neckRotate",
        prepare: ["座位"],
        actions: ["頸椎7番突起を確認", "斜め上に手で引き上げ", "目線は横向きに5秒"],
        avoid: ["強く押し込まない", "しびれが出たら中止"]
      }),
      step("小さい軸ジャンプ", 60, "足幅は腰幅。着地の静かさだけ見る。小さく5回。", {
        time: "1分", danger: "jump",
        prepare: ["立位、腰幅", "膝を柔らかく"],
        actions: ["小さく5回", "音を消す"],
        avoid: ["首肩痛がある日は飛ばない"]
      }),
      step("眼球ストレッチ", 60, "顔は正面。目だけ上下左右。近遠フォーカス。", {
        time: "1分",
        prepare: ["楽な姿勢"],
        actions: ["上下左右を見る", "近くと遠くに焦点", "めまいが出たら止める"],
        avoid: ["首ごと速く振らない"]
      }),
      step("目を閉じた立位バランス", 60, "壁か椅子の近くで立つ。20秒×2。", {
        time: "1分",
        prepare: ["手をつける場所を確保"],
        actions: ["20秒×2", "足裏の接地を感じる"],
        avoid: ["転倒リスクがある場所でやらない"]
      })
    ]
  },

  main: {
    title: "修行",
    subtitle: "出力・打撃・連動。RPE6まで",
    asset: ASSETS.shadow,
    intro: "ハード筋トレではなく、壊れない強さを作る日。必須だけなら20分。",
    steps: [
      // ウォームアップ
      step("ウォームアップ呼吸", 60, "鼻呼吸で余裕を残す。痛みの確認も兼ねる。", {
        must: true, time: "1分",
        prepare: ["楽な姿勢"],
        actions: ["吸う5秒・吐く8秒", "肩と顎を軽くする"],
        avoid: ["息を上げない"]
      }),
      step("足指接地", 60, "6点接地を確認する。", {
        must: true, time: "1分",
        prepare: ["立位"],
        actions: ["親指先・小指先・外側・かかと"],
        avoid: ["踏みすぎない"]
      }),
      step("キャット・カウ", 60, "四つ這いで10回。首は楽に。", {
        time: "1分",
        prepare: ["四つ這い"],
        actions: ["丸める", "反らせる"],
        avoid: ["首だけ動かさない"]
      }),
      step("肩甲骨360度回転", 60, "前→上→後→下へゆっくり。", {
        time: "1分",
        prepare: ["立位"],
        actions: ["左右差を見る"],
        avoid: ["速く回さない"]
      }),
      step("股関節ウェイブ", 60, "膝を柔らかく。前後左右に揺らす。", {
        time: "1分",
        prepare: ["立位"],
        actions: ["足裏は床に置く"],
        avoid: ["腰で反らない"]
      }),
      // 軸
      step("体軸の基礎構築", 180, "丹田周辺から手足を動かす感覚。", {
        must: true, time: "3分",
        prepare: ["立位、肩を下げる"],
        actions: ["足裏を感じる", "腕だけで打たない"],
        avoid: ["速くしない"]
      }),
      step("大腰筋の活性化", 120, "姿勢を整え、軸を真上に伸ばす全力。", {
        time: "2分",
        prepare: ["立位"],
        actions: ["背骨カーブを変えずに伸びる", "胸を上げない"],
        avoid: ["反り腰にしない"]
      }),
      // 体幹・出力
      step("橋のポーズ", 240, "仰向け膝立て。お尻を上げて締める。12回×2-3周。", {
        must: true, time: "4分",
        prepare: ["仰向け膝立て"],
        actions: ["お尻を上げる", "大殿筋を締める", "肋骨を開きすぎない"],
        avoid: ["腰で反らない", "首で踏ん張らない"]
      }),
      step("腸腰筋マーチング", 240, "仰向け膝立てから骨盤を起こし、左右10回×2-3周。", {
        must: true, time: "4分",
        prepare: ["仰向け膝立て、骨盤を起こす"],
        actions: ["交互に膝を胸へ", "背骨は丸めない"],
        avoid: ["腰が浮くなら小さく"]
      }),
      step("肩甲骨外転", 240, "四つ這いから前ならえの方向へ。10回×2-3周。", {
        time: "4分",
        prepare: ["四つ這い"],
        actions: ["肩を下ろす", "床を押す"],
        avoid: ["肩をすくめない"]
      }),
      step("前鋸筋プランク", 240, "肘プランク。胸を沈めて、押して上げる。20秒×3。", {
        time: "4分", danger: "highIntensity",
        prepare: ["肘プランク姿勢"],
        actions: ["胸を少し沈める", "床を押して胸を上げる", "肋骨を締める"],
        avoid: ["腰を反らせない", "首肩で踏ん張らない"]
      }),
      step("スクワット＆足の屈伸", 240, "腰幅広めで足先少し外向き。10回×3。", {
        time: "4分",
        prepare: ["立位、足裏を離さない"],
        actions: ["股関節から曲げる", "膝はつま先より外側"],
        avoid: ["腰で反らない"]
      }),
      step("秀徹プランク", 90, "うつ伏せから両肘とつま先で浮かせる。30秒×2-3。", {
        time: "1.5分", danger: "highIntensity",
        prepare: ["うつ伏せ", "両手後頭部"],
        actions: ["肘とつま先で浮かせる", "短く吸い長く吐く"],
        avoid: ["首で踏ん張らない", "赤判定では飛ばす"]
      }),
      // 打撃
      step("初動落下エネルギー", 180, "前後左右に各5本。落ちる力で進む。", {
        time: "3分",
        prepare: ["立位、力を抜く"],
        actions: ["体を落とす感覚", "足音を小さく"],
        avoid: ["飛び跳ねない"]
      }),
      step("シンプルパンチ力向上", 240, "骨盤回転から拳へ。左右ゆっくり。", {
        must: true, time: "4分",
        prepare: ["構える"],
        actions: ["骨盤を先に回す", "拳は遅れて出る", "息を吐く"],
        avoid: ["肩だけで打たない"]
      }),
      step("スローモーションシャドー", 240, "1動作3秒。呼吸が先、打撃は後。", {
        must: true, time: "4分",
        prepare: ["構える"],
        actions: ["目線を置く", "体が追う", "余力を残す"],
        avoid: ["速くしない"]
      }),
      step("その場突き・高速体幹", 180, "20秒動く・40秒休むを3本。", {
        time: "3分", danger: "highIntensity",
        prepare: ["立位、足裏を確認"],
        actions: ["短く速く", "体幹をぶらさない"],
        avoid: ["黄や赤・前兆では飛ばす"]
      }),
      step("視線と眼球", 180, "目線を先に置き、体が追う。上下左右と近遠。", {
        time: "3分",
        prepare: ["立位"],
        actions: ["目線を先に置く", "体が追う", "首は楽に"],
        avoid: ["めまいが出たら中止"]
      }),
      // 仕上げ
      step("手足の連動性", 60, "仰向けで両腕両脚を上げ、足の力で腕を上げる感覚。", {
        time: "1分",
        prepare: ["仰向け"],
        actions: ["対角線を統合する", "中心から手足が動く"],
        avoid: ["腰を反らせない"]
      }),
      step("股関節ローリング", 60, "立位で股関節を前→外→後→内で円。", {
        time: "1分",
        prepare: ["立位"],
        actions: ["骨で動かす", "筋肉に頼らない"],
        avoid: ["速くしない"]
      }),
      step("スワイショウ縦", 120, "両腕を上下に振る。膝でクッション。", {
        time: "2分",
        prepare: ["立位"],
        actions: ["肩上がらないよう肘下ろし", "ゆれて緩める"],
        avoid: ["腕で振らない"]
      }),
      // クールダウン
      step("腸腰筋ストレッチ", 60, "膝立ちから片足前。骨盤前傾。左右各30秒。", {
        must: true, time: "1分",
        prepare: ["膝立ち、片足前"],
        actions: ["骨盤前傾", "30秒×左右"],
        avoid: ["反らせない"]
      }),
      step("広背筋ストレッチ・膝倒し", 60, "仰向け膝立てから両膝を片側に倒す。左右各30秒。", {
        time: "1分",
        prepare: ["仰向け膝立て"],
        actions: ["肩は床から浮かさない", "30秒×左右"],
        avoid: ["痛い範囲まで倒さない"]
      }),
      step("呼吸 4.5bpm", 180, "吐く息を長く。次へ残さない。", {
        must: true, time: "3分",
        prepare: ["楽な姿勢"],
        actions: ["顔・舌・腹を抜く"],
        avoid: ["達成感で追い込まない"]
      })
    ]
  },

  bedtime: {
    title: "寝る前",
    subtitle: "睡眠への橋",
    asset: ASSETS.recovery,
    intro: "スマホを見ながらではなく、寝る方向へ落とす。暗めの部屋で。",
    steps: [
      step("呼吸 4.5bpm", 180, "吸う5秒・吐く8秒。吐く時に顔・舌・腹を抜く。", {
        must: true, time: "3分",
        prepare: ["暗めの部屋", "楽な姿勢"],
        actions: ["吸う5秒・吐く8秒", "苦しければ自然に"],
        avoid: ["息を止めない"]
      }),
      step("皮膚への優しいタッチ", 120, "胸から腹へ軽く撫でる。1/Fゆらぎリズム。", {
        time: "2分",
        prepare: ["仰向け"],
        actions: ["手の重さだけ", "落ち着き具合を見る"],
        avoid: ["揉まない"]
      }),
      step("広背筋ストレッチ・膝倒し", 120, "仰向け膝立てから両膝を片側に倒す。左右各30秒×2。", {
        time: "2分",
        prepare: ["仰向け膝立て"],
        actions: ["膝を左右へ倒す", "肩は床へ預ける"],
        avoid: ["痛い範囲まで倒さない"]
      }),
      step("足部マッサージ", 60, "足部の指骨マッサージ、または押し蔵足裏ほぐし。", {
        time: "1分",
        prepare: ["座位"],
        actions: ["軽く触る", "末端へ注意を下ろす"],
        avoid: ["強く押さない"]
      }),
      step("頭部の緊張解除", 60, "眉間・こめかみ・後頭部を軽く触れる。", {
        time: "1分",
        prepare: ["仰向けまたは座位"],
        actions: ["触れる程度", "顔の力を抜く"],
        avoid: ["首前面を圧迫しない"]
      }),
      step("全身リラクゼーション", 60, "足先から顔へ力を抜く。寝てもよい。", {
        must: true, time: "1分",
        prepare: ["仰向け"],
        actions: ["抜けている場所を探す", "寝てもよい"],
        avoid: ["スマホへ戻らない"]
      })
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
  condition: "normal",            // "normal" | "recover" | "migraine"
  selectedSession: "morning",     // "morning" | "main" | "bedtime"
  currentStep: 0,
  timerLeft: 0,
  timerRunning: false,
  timerId: null,
  oshikura: "neck",
  notes: { scene: "", cause: "", next: "" },
  done: { must: 0, optional: 0, skipped: 0 }
};

const els = {};

// === BOOTSTRAP ===
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
  // Generic data-go navigation
  document.body.addEventListener("click", (e) => {
    const t = e.target.closest("[data-go]");
    if (!t) return;
    showView(t.dataset.go);
  });

  // Start a session via the home CTAs
  document.body.addEventListener("click", (e) => {
    const t = e.target.closest("[data-go-session]");
    if (!t) return;
    startSession(t.dataset.goSession);
  });

  // Condition toggle
  els.condRow.addEventListener("click", (e) => {
    const t = e.target.closest("[data-cond]");
    if (!t) return;
    state.condition = t.dataset.cond;
    saveState();
    renderHome();
  });

  // Run controls
  els.timerButton.addEventListener("click", () => {
    if (state.timerRunning) stopTimer(); else startTimer();
    renderRun();
  });
  els.prevButton.addEventListener("click", goPrev);
  els.skipButton.addEventListener("click", () => advance(true));
  els.nextButton.addEventListener("click", () => advance(false));

  // Oshikura tabs
  els.oshikuraTabs.addEventListener("click", (e) => {
    const t = e.target.closest("[data-osh]");
    if (!t) return;
    state.oshikura = t.dataset.osh;
    saveState();
    renderOshikura();
  });

  // Notes
  ["noteScene", "noteCause", "noteNext"].forEach(id => {
    els[id].addEventListener("input", () => {
      const k = id.replace("note", "").toLowerCase();
      state.notes[k] = els[id].value;
      saveState();
    });
  });
}

// === SESSION FLOW ===
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

// === ROUTER ===
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

// === RENDER ===
function renderAll() {
  renderHome();
  renderOshikura();
  renderWeek();
}

function renderHome() {
  // Condition buttons
  els.condRow.querySelectorAll("[data-cond]").forEach(b => {
    b.classList.toggle("active", b.dataset.cond === state.condition);
  });

  // Update CTA subs with must/total minutes
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

  // Tags: must / optional / danger
  const tags = [];
  if (stepData.must) tags.push(`<span class="run-tag run-tag--must">★ 必須</span>`);
  else tags.push(`<span class="run-tag run-tag--optional">任意・飛ばしOK</span>`);
  const dangerWarning = dangerNote(stepData.danger);
  if (dangerWarning) tags.push(`<span class="run-tag run-tag--danger">${dangerWarning}</span>`);
  els.runTagRow.innerHTML = tags.join("");

  // Body color tone for danger
  els.runTagRow.dataset.danger = dangerWarning ? "true" : "false";

  // Details
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
    ${stepData.time ? `<div class="detail-block"><h4>目安</h4><ul><li>${stepData.time}</li></ul></div>` : ""}
  `;

  // Buttons
  els.prevButton.disabled = state.currentStep === 0;
  els.nextButton.textContent = (state.currentStep === session.steps.length - 1)
    ? "完了する" : "できた";
  // 必須のときは飛ばすを薄く（押せはする、ただし注意喚起）
  els.skipButton.dataset.discouraged = stepData.must ? "true" : "false";
}

function dangerNote(d) {
  if (!d) return null;
  if (state.condition === "normal" && d !== "neckRotate") return null;
  const map = {
    jump: "回復寄り・前兆あり: 飛ばす",
    highIntensity: "回復寄り・前兆あり: 飛ばす",
    breathHold: "前兆あり: 飛ばす",
    neckRotate: "前兆・首痛: 飛ばす"
  };
  if (state.condition === "migraine") return map[d] || "前兆あり: 飛ばす";
  if (state.condition === "recover") {
    if (d === "jump" || d === "highIntensity") return "回復寄り: 飛ばす推奨";
    return null;
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

// === TIMER ===
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

// === STORAGE ===
function storageKey() {
  const today = new Date().toISOString().slice(0, 10);
  return `strong-road-v4:${today}`;
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
