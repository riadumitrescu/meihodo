(() => {
  const btns = document.querySelectorAll('.lang-btn');
  let routing = false;

  // 言語別コピー（必要に応じて調整）
  const COPY_MAP = {
    'ja': '静かに己の心を見つめるひと時を。',
    'en': 'A quiet moment to reflect on yourself.',
    'zh-cn': '静静地凝视自己的心。',
    'zh-tw': '靜靜地凝視自己的心。'
  };

  // 言語別フォント（日本語のみ筆文字、それ以外はセリフ体に切替したい場合）
  const FONT_MAP = {
    'ja': "'KouzanBrushFont','AoyagiKouzanFont','GenEiGyoSho',serif",
    'en': "Georgia, 'Times New Roman', serif",
    'zh-cn': "Georgia, 'Noto Serif SC', serif",
    'zh-tw': "Georgia, 'Noto Serif TC', serif"
  };

  function playRouteIntroThenNavigate(url, lang){
    // prefers-reduced-motion の場合は即遷移
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce){ window.location.href = url; return; }

    // 既存があれば削除（多重生成防止）
    const old = document.getElementById('route-blackout');
    if(old) old.remove();

    // オーバーレイ生成
    const wrap = document.createElement('div');
    wrap.id = 'route-blackout';

    const phrase = document.createElement('div');
    phrase.id = 'route-phrase';
    phrase.textContent = COPY_MAP[lang] || COPY_MAP['ja'];
    phrase.style.fontFamily = FONT_MAP[lang] || FONT_MAP['ja'];

    const logo = document.createElement('img');
    logo.id = 'route-logo';
    logo.src = '/assets/images/homepage/Meihodo Logo 白黒.png';
    logo.alt = 'Meihodo Logo';

    wrap.appendChild(phrase);
    wrap.appendChild(logo);
    document.body.appendChild(wrap);

    // モバイル縦書きにしたい場合は body に .vertical-mobile を付与（任意）
    if(window.innerWidth <= 768){ document.body.classList.add('vertical-mobile'); }

    // タイムライン：白文字 → 消す → ロゴ → 黒ごと遷移
    // 0.5s後：白文字フェードイン
    setTimeout(() => { phrase.style.opacity = '1'; }, 500);

    // 2.6s後：白文字フェードアウト
    setTimeout(() => { phrase.style.opacity = '0'; }, 2600);

    // 3.6s後：ロゴフェードイン（同じ中央位置）
    setTimeout(() => { logo.style.opacity = '1'; }, 3600);

    // 6.0s後：ロゴと背景を一緒にフェードアウト
    setTimeout(() => {
      // ロゴと背景を一緒にフェードアウト
      const wrap = document.getElementById('route-blackout');
      const logo = document.getElementById('route-logo');
      if(wrap) wrap.style.opacity = '0';
      if(logo) logo.style.opacity = '0';

      // 2.0s のフェードが終わってから遷移
      setTimeout(() => { window.location.href = url; }, 2000);
    }, 6000); // ロゴ表示後に発火
  }

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      if(routing) return; // 連打防止
      routing = true;

      const url = btn.getAttribute('href');
      const lang = btn.getAttribute('data-lang') || 'ja';

      playRouteIntroThenNavigate(url, lang);
    }, { passive: false });
  });
})();
