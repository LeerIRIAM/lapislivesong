document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーションバーのスクロール固定効果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // スムーズスクロール機能
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // チケットボタンのクリックでポップアップを表示
    const ticketButton = document.querySelector('.btn');
    ticketButton.addEventListener('click', function(event) {
        event.preventDefault();
        showPopup('チケット購入ページに移動します。');
    });

    // ポップアップ表示関数
    function showPopup(message) {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerText = message;
        document.body.appendChild(popup);

        // ポップアップを3秒後に削除
        setTimeout(() => {
            popup.remove();
        }, 3000);
    }
});
