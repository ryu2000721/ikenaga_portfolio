class Carousel {
    constructor() {
        this.carouselTrack = document.querySelector('.carousel-track');
        this.slides = Array.from(this.carouselTrack.children);
        this.prevButton = document.querySelector('.carousel-button.prev');
        this.nextButton = document.querySelector('.carousel-button.next');
        
        this.slideWidth = this.slides[0].getBoundingClientRect().width;
        this.currentIndex = 2;

        this.prevButton.addEventListener('click', () => this.moveLeft());
        this.nextButton.addEventListener('click', () => this.moveRight());

        this.setSlidePositions();
        this.moveToSlide(this.currentIndex);
    }

    setSlidePositions() {
        this.slides.forEach((slide, index) => {
            slide.style.left = this.slideWidth * index + 'px';
        });
    }

    moveToSlide(index) {
        this.carouselTrack.style.transform = `translateX(-${index * this.slideWidth}px)`;
    }

    moveLeft() {
        console.log('Moving left');
        this.currentIndex--;
        if (this.currentIndex < 2) {
            this.currentIndex = this.slides.length - 3;
            this.carouselTrack.style.transition = 'none';
            this.moveToSlide(this.currentIndex);
            setTimeout(() => {
                this.carouselTrack.style.transition = 'transform 0.5s ease';
                this.currentIndex--;
                this.moveToSlide(this.currentIndex);
            }, 10);
        } else {
            this.moveToSlide(this.currentIndex);
        }
    }

    moveRight() {
        console.log('Moving right');
        this.currentIndex++;
        if (this.currentIndex > this.slides.length - 3) {
            this.currentIndex = 2;
            this.carouselTrack.style.transition = 'none';
            this.moveToSlide(this.currentIndex);
            setTimeout(() => {
                this.carouselTrack.style.transition = 'transform 0.5s ease';
                this.currentIndex++;
                this.moveToSlide(this.currentIndex);
            }, 10);
        } else {
            this.moveToSlide(this.currentIndex);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('header').classList.add('visible');
    }, 100);

    const arrow = document.querySelector('.arrow');
    const cartIcon = document.querySelector('.cart-icon');
    const showOffset = 700;
    
    const carousel = new Carousel();
    console.log('Carousel initialized');

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
    
    toggleVisibility();
    
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