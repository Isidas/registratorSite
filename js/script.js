'use strict';
// class Slider {
// 	constructor(wrapper, wrapperBtn, widthSlide, countSlides, paginationWrapper) {
// 		this.wrapper = document.querySelector(wrapper);
// 		this.paginationWrapper = document.querySelector(paginationWrapper);
// 		this.dut = this.paginationWrapper.querySelectorAll('.dut');
// 		this.wrapperBtn = document.querySelector(wrapperBtn);
// 		this.slide = this.wrapper.querySelectorAll('.slide');
// 		this.prevBtn = this.wrapperBtn.querySelector('.arrow-left');
// 		this.nextBtn = this.wrapperBtn.querySelector('.arrow-right');
// 		this.widthSlide = widthSlide;
// 		this.countSlides = countSlides;
// 		this.offset = 0;
// 		this.dutIndex = 0;
// 		this.nextBtn.addEventListener('click', () => {
// 			this.showNextSlide();
// 		});
// 		this.prevBtn.addEventListener('click', () => {
// 			this.showPrevSlide();
// 		});
// 	}

// 	showPagination() {
// 		for (let i = 0; i < this.slide.length; i ++) {
// 			const el = document.createElement('div');
// 			el.classList.add(`dut`);
// 			this.paginationWrapper.append(el);
// 		}
// 	}

// 	showNextSlide() {
// 		this.offset = this.offset + this.widthSlide;
// 		if (this.offset > (this.widthSlide * this.slide.length) - this.widthSlide * this.countSlides) {
// 			// this.offset = 0;
// 			this.nextBtn.classList.add ('off');
// 		}	
// 		this.wrapper.style.left = -this.offset + 'px';
// 		this.prevBtn.addEventListener('click', () =>{
// 			this.nextBtn.classList.remove ('off');
// 		});
// 	}

// 	showPrevSlide() {
// 		this.offset = this.offset - this.widthSlide;
// 		if (this.offset < 0) {
// 			// this.offset = (this.widthSlide * this.slide.length)- this.widthSlide*this.countSlides;
// 			this.prevBtn.classList.add ('off');
// 		}if( this.offset > 0 || this.offset == 0) {
// 			this.prevBtn.classList.remove ('off');
// 		}
// 		this.wrapper.style.left = -this.offset + 'px';
// 		this.nextBtn.addEventListener('click', () =>{
// 			this.prevBtn.classList.remove ('off');
// 		});
// 	}

// }

// const sliderWorks = new Slider('.slider__wrapper', '.slider__navigation', 360, 4, '.slider__pagination');
// 			sliderWorks.showNextSlide();
// 			sliderWorks.showPrevSlide();
// 			sliderWorks.showPagination();

// const sliderFeedback = new Slider('.feedback__slider','.feedback__navigation', 480, 3, '.feedback__pagination');
// 	  sliderFeedback.showNextSlide();
// 	  sliderFeedback.showPrevSlide();
// 	  sliderFeedback.showPagination();

const burger = document.querySelector('.menu__burger'),
	  nav    = document.querySelector('.menu__navigation');

function showBurger () {
	burger.addEventListener('click', () => {
		nav.classList.toggle('active');
		burger.classList.toggle('toggle');
	});
}
showBurger();


new Swiper('.swiper', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clikable: true
	},
	slidesPerView: 4,
});

new Swiper('.swiper2', {
	navigation: {
	  nextEl: '.feedback-swiper-button-next',
	  prevEl: '.feedback-swiper-button-prev',
	},
	pagination: {
		el: '.feedback-swiper-pagination',
		clikable: true
	},
	slidesPerView: 3,

});





