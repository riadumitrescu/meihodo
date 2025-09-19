document.addEventListener('DOMContentLoaded', () => {
  const played = sessionStorage.getItem('blackoutPlayed');

  if(!played){
    // ブラックアウト演出あり
    sessionStorage.setItem('blackoutPlayed', 'true');

    // フェーズ1：白文字を表示
    setTimeout(() => {
      document.getElementById('intro-phrase').style.opacity = '1';
    }, 500);

    // フェーズ2：白文字を消す
    setTimeout(() => {
      document.getElementById('intro-phrase').style.opacity = '0';
    }, 3000);

    // フェーズ3：ロゴ表示
    setTimeout(() => {
      document.getElementById('intro-logo').style.opacity = '1';
    }, 4000);

    // フェーズ4：ロゴと黒背景を同時に消す
    setTimeout(() => {
      document.body.classList.add('video-start');
      document.getElementById('blackout').style.opacity = '0';
      setTimeout(() => {
        const el = document.getElementById('blackout');
        if(el) el.remove();
      }, 2400);
    }, 6500);

  } else {
    // すでに演出済み → ブラックアウトをスキップ
    document.body.classList.add('video-start');
    const blackout = document.getElementById('blackout');
    if(blackout) blackout.remove();
    const phrase = document.getElementById('intro-phrase');
    if(phrase) phrase.remove();
    const logo = document.getElementById('intro-logo');
    if(logo) logo.remove();
  }
});
