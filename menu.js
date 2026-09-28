// Pre-cache hero images for ultra-fast, zero-lag switching across all devices
const heroImageCache = {
  page1: new Image(),
  page2: new Image()
};
heroImageCache.page1.src = 'images/hero-thali.jpg';
heroImageCache.page2.src = 'images/hero-snacks.jpg';

function switchMenuPage(pageNum) {
  const page1 = document.getElementById('menu-page-1');
  const page2 = document.getElementById('menu-page-2');
  const btn1 = document.getElementById('btn-page-1');
  const btn2 = document.getElementById('btn-page-2');
  const heroImg = document.getElementById('hero-img');

  if (pageNum === 1) {
    if (heroImg) {
      heroImg.src = heroImageCache.page1.src;
      heroImg.alt = 'MYCLAN Special Pure Veg Thali';
    }
    page1.style.display = 'block';
    page2.style.display = 'none';
    if (btn1) btn1.classList.add('active');
    if (btn2) btn2.classList.remove('active');
  } else if (pageNum === 2) {
    if (heroImg) {
      heroImg.src = heroImageCache.page2.src;
      heroImg.alt = 'MYCLAN Special Snacks & Platter';
    }
    page1.style.display = 'none';
    page2.style.display = 'block';
    if (btn1) btn1.classList.remove('active');
    if (btn2) btn2.classList.add('active');
  }

  // Smooth scroll to top across all desktop and mobile devices
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
