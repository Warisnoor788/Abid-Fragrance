function addTikTokContactCard() {
  const links = document.querySelector('.contact-links');
  if (!links || links.querySelector('.tiktok-contact')) return;
  links.insertAdjacentHTML('beforeend', '<a class="contact-card tiktok-contact" href="https://www.tiktok.com/@abid.fragrance?_r=1&_t=ZS-99myrkfePG0" target="_blank" rel="noopener"><span class="contact-icon tiktok-icon">♪</span><span><small>TikTok</small><strong>@abid.fragrance</strong></span><b>↗</b></a>');
}

addTikTokContactCard();
window.addEventListener('hashchange', addTikTokContactCard);
