document.addEventListener('DOMContentLoaded', function() {
  // フォントや画像の描画待ちも考慮する場合は 'load' に変更可
  requestAnimationFrame(() => {
    document.body.classList.add('is-loaded');
    // 演出終了後にDOMから除去（任意）
    setTimeout(() => {
      const el = document.getElementById('blackout');
      if (el) el.remove();
    }, 1800); // CSSのtransition時間に合わせる
  });
});
