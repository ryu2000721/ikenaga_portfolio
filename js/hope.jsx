document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('header').classList.add('visible');
    }, 100);

    const arrow = document.querySelector('.arrow');
    const cartIcon = document.querySelector('.cart-icon');
    const showOffset = 700;

    function toggleElementVisibility(element) {
        if (!element) return;
    
        const scrollPosition = window.scrollY || window.pageYOffset;
    
        if (scrollPosition > showOffset) {
            element.classList.add('visible');
            console.log(`${element.className} should be visible`);
        } else {
            element.classList.remove('visible');
            console.log(`${element.className} should be hidden`);
        }
    }
    
    function toggleVisibility() {
        toggleElementVisibility(arrow);
        toggleElementVisibility(cartIcon);
    }
    
    toggleVisibility(); // 初期状態の設定
    
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                toggleVisibility();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    console.log('Scroll listener added');
});