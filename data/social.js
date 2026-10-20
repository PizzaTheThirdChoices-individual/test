// 公式アカウントのURLを入力してください。空欄のサービスはリンクを表示しません。
const socialLinks = {
  youtube: 'https://www.youtube.com/@PizzaTheThirdChoices',
  x: 'https://twitter.com/pizza3rdchoices',
  instagram: 'https://www.instagram.com/pizza3rdchoices',
  // 必要に応じて追加
  spotify: 'https://open.spotify.com/intl-ja/artist/4ENePIxjSEaftxvJ98ftlg?si=nZhVvjq3TXmFRSJupGeiig',
  appleMusic: 'https://music.apple.com/jp/artist/pizza-the-third-choices/1860142863',
  tiktok: '',
  bandcamp: ''
};
const socialNames = {youtube:'YouTube', x:'X / Twitter', instagram:'Instagram', spotify:'Spotify', appleMusic:'Apple Music', tiktok:'TikTok', bandcamp:'Bandcamp'};
function renderSocialLinks(){
  document.querySelectorAll('[data-social-links]').forEach(container=>{
    container.replaceChildren();
    for(const [service,label] of Object.entries(socialNames)){
      const raw=socialLinks[service]; if(!raw) continue;
      let url;try{url=new URL(raw);if(url.protocol!=='https:')continue;}catch{continue;}
      const a=document.createElement('a');a.href=url.href;a.target='_blank';a.rel='noopener noreferrer';a.className='social-link social-'+service;
      const text=document.createElement('span');text.textContent=label;const arrow=document.createElement('span');arrow.textContent=' ↗';arrow.setAttribute('aria-hidden','true');a.append(text,arrow);container.append(a);
    }
    if(!container.children.length){const note=document.createElement('p');note.className='social-empty';note.textContent='公式SNSリンクは準備中です。';container.append(note);}
  });
}
document.addEventListener('DOMContentLoaded',renderSocialLinks);
