document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('header').classList.add('visible');
    }, 100);

    const arrow = document.querySelector('.arrow');
    const showOffset = 300;
    
    // if (arrow) {
    //     function toggleArrowVisibility() {
    //         const scrollPosition = window.scrollY || window.pageYOffset;

    //         if (scrollPosition > showOffset) {
    //             arrow.classList.add('visible');
    //             console.log('Arrow should be visible');
    //         }else {
    //             arrow.classList.remove('visible');
    //             console.log('Arrow should be hidden');
    //         }
    //     }

    //     toggleArrowVisibility();
        
    //     let ticking = false;
    //     window.addEventListener('scroll', function() {
    //         if (!ticking) {
    //             window.requestAnimationFrame(function() {
    //                 toggleArrowVisibility();
    //                 ticking = false;
    //             });
    //             ticking = true;
    //         }
    //     });

    //     console.log('Scroll listener added');
    // }else {
    //     console.warn('.arrow element not found');
    // }
});