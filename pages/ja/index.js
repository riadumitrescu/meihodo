import Head from 'next/head'

export default function JapaneseHome() {
  return (
    <>
      <Head>
        <title>鳴鳳堂 - 阿蘇の文化リゾート</title>
        <meta name="description" content="雄大な阿蘇山麓に広がる文化リゾート、鳴鳳堂。弓道・居合・空手などの武道から、茶道・華道・盆石などの文化芸術まで、心を磨く体験が満載です。" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://meihodo.com/ja" />
        
        {/* Font Loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;600&family=Noto+Serif+JP:wght@700&family=Zen+Old+Mincho:wght@400;500;600;700;900&family=KouzanBrushFont:wght@400&family=AoyagiKouzanFont:wght@400&display=swap" rel="stylesheet" />
        
        {/* Stylesheet */}
        <link rel="stylesheet" href="/assets/css/site.css" />
      </Head>
      
      <div dangerouslySetInnerHTML={{ __html: `
        <div id="blackout" aria-hidden="true">
          <div id="intro-phrase">静かに己の心を見つめるひと時を。</div>
          <img id="intro-logo" src="/assets/images/homepage/Meihodo Logo 白黒.png" alt="Meihodo Logo">
        </div>

        <!-- Fixed Language Switcher -->
        <nav aria-label="Language" style="
          position:fixed; right:20px; bottom:20px; z-index:9999;
          display:flex; flex-direction:column; gap:10px;
          text-align:center;
        ">
          <a href="/ja" class="lang-btn" data-lang="ja" aria-label="日本語" style="
            font:600 14px/1 'Noto Serif JP', serif;
            color:#cccccc; text-decoration:none;
            transition:all 0.3s ease;
          " onmouseover="this.style.color='#000000';this.style.transform='scale(1.1)';"
             onmouseout="this.style.color='#cccccc';this.style.transform='scale(1)';">
            JP
          </a>
          <a href="/en" class="lang-btn" data-lang="en" aria-label="English" style="
            font:600 14px/1 'Noto Serif JP', serif;
            color:#cccccc; text-decoration:none;
            transition:all 0.3s ease;
          " onmouseover="this.style.color='#000000';this.style.transform='scale(1.1)';"
             onmouseout="this.style.color='#cccccc';this.style.transform='scale(1)';">
            EN
          </a>
          <a href="/zh-tw" class="lang-btn" data-lang="zh-tw" aria-label="繁體中文" style="
            font:600 14px/1 'Noto Serif JP', serif;
            color:#cccccc; text-decoration:none;
            transition:all 0.3s ease;
          " onmouseover="this.style.color='#000000';this.style.transform='scale(1.1)';"
             onmouseout="this.style.color='#cccccc';this.style.transform='scale(1)';">
            繁
          </a>
          <a href="/zh-cn" class="lang-btn" data-lang="zh-cn" aria-label="简体中文" style="
            font:600 14px/1 'Noto Serif JP', serif;
            color:#cccccc; text-decoration:none;
            transition:all 0.3s ease;
          " onmouseover="this.style.color='#000000';this.style.transform='scale(1.1)';"
             onmouseout="this.style.color='#cccccc';this.style.transform='scale(1)';">
            简
          </a>
        </nav>

        <!-- 既存のHTMLコンテンツをここに含める -->
        <div id="app">
          <!-- 既存のja/index.htmlの内容をここに移動 -->
        </div>
      ` }} />
      
      {/* Scripts */}
      <script src="/assets/js/blackout-animation.js" defer />
      <script src="/assets/js/route-animation.js" defer />
    </>
  )
}
