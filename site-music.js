/* ═══════════════════════════════════════════════════
   伯拉大國際地產 - 全站背景音樂播放器
   音樂檔案請放在網站根目錄，命名為 bg-music.mp3
   ═══════════════════════════════════════════════════ */
(function(){
  const STORAGE_KEY = 'phrath_music_on';

  const style = document.createElement('style');
  style.textContent = `
    #phrathSoundBtn{
      position:fixed; bottom:22px; right:22px; z-index:9999;
      width:42px; height:42px; border-radius:50%;
      background:rgba(70,60,51,.82); border:1px solid rgba(246,242,234,.35);
      display:flex; align-items:center; justify-content:center;
      cursor:pointer; transition:background .25s, transform .25s;
      box-shadow:0 6px 18px rgba(0,0,0,.25);
      backdrop-filter:blur(6px);
    }
    #phrathSoundBtn:hover{ background:rgba(70,60,51,.95); transform:scale(1.06); }
    #phrathSoundBtn svg{ width:18px; height:18px; }
    #phrathSoundBtn .ic-on{ display:none; }
    #phrathSoundBtn.playing .ic-on{ display:block; }
    #phrathSoundBtn.playing .ic-off{ display:none; }
    @media(max-width:600px){
      #phrathSoundBtn{ width:38px; height:38px; bottom:16px; right:16px; }
    }
  `;
  document.head.appendChild(style);

  const audio = document.createElement('audio');
  audio.id = 'phrathBgm';
  audio.loop = true;
  audio.preload = 'auto';
  audio.volume = 0.5;
  audio.innerHTML = '<source src="bg-music.mp3" type="audio/mpeg">';
  document.body.appendChild(audio);

  const btn = document.createElement('button');
  btn.id = 'phrathSoundBtn';
  btn.setAttribute('aria-label', '背景音樂開關');
  btn.innerHTML = `
    <svg class="ic-off" viewBox="0 0 24 24" fill="none" stroke="#F6F2EA" stroke-width="1.6"><path d="M11 5 6 9H2v6h4l5 4V5Z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
    <svg class="ic-on" viewBox="0 0 24 24" fill="none" stroke="#F6F2EA" stroke-width="1.6"><path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>
  `;
  document.body.appendChild(btn);

  function setPlaying(on){
    if(on){
      audio.muted = false;
      audio.play().catch(()=>{});
      btn.classList.add('playing');
      localStorage.setItem(STORAGE_KEY, '1');
    } else {
      audio.muted = true;
      audio.pause();
      btn.classList.remove('playing');
      localStorage.setItem(STORAGE_KEY, '0');
    }
  }

  // 如果訪客先前已開啟過音樂，換頁時嘗試自動繼續播放（瀏覽器可能仍會擋，需再次互動）
  if (localStorage.getItem(STORAGE_KEY) === '1') {
    audio.muted = false;
    audio.play().then(() => btn.classList.add('playing')).catch(() => {
      // 自動播放被瀏覽器擋下，維持靜音圖示，等待使用者點擊
      audio.muted = true;
    });
  }

  btn.addEventListener('click', () => {
    const isOn = btn.classList.contains('playing');
    setPlaying(!isOn);
  });
})();
