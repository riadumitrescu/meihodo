document.addEventListener('DOMContentLoaded', () => {
  // フェーズ1：白文字を表示
  setTimeout(() => {
    document.getElementById('intro-phrase').style.opacity = '1';
  }, 500);

  // フェーズ2：白文字を消す
  setTimeout(() => {
    document.getElementById('intro-phrase').style.opacity = '0';
  }, 3000);

  // フェーズ3：ロゴを表示
  setTimeout(() => {
    document.getElementById('intro-logo').style.opacity = '1';
  }, 4000);

  // フェーズ4：ロゴと黒背景を同時に消し、動画を表示
  setTimeout(() => {
    document.body.classList.add('video-start');
    document.getElementById('blackout').style.opacity = '0';
    setTimeout(() => {
      const el = document.getElementById('blackout');
      if(el) el.remove();
    }, 2400);
  }, 6500);
});
