// スクロール時にナビゲーションバーの背景色を変える
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    header.style.backgroundColor = '#333';
  } else {
    header.style.backgroundColor = 'transparent';
  }
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
