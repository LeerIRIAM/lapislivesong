// スクロール時にヘッダーの背景色を変更
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;
　
  if (scrollPosition > 100) {
    header.style.backgroundColor = '#333';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

// ScrollRevealを使ってアニメーションを設定
window.sr = ScrollReveal();

// フェードインアニメーションの設定
sr.reveal('.fade-in', {
  duration: 1000,
  distance: '0px',
  opacity: 0,
  reset: false
});

// 左からスライドイン
sr.reveal('.slide-in-left', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  opacity: 0,
  reset: false
});

// 右からスライドイン
sr.reveal('.slide-in-right', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  opacity: 0,
  reset: false
});

// ページ内リンクでスムーズにスクロール
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});
