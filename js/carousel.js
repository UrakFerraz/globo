{
	'use strict';


	let slides = document.querySelectorAll('.carouselUnit');
	slides = [...slides];


	let dots = document.querySelectorAll('.carouselIndicatorDot');
	dots = [...dots];



	let cont = 0;

	function sl() {
		slides.forEach(el => {
			el.style.transform = 'translateX(-' + cont + '00%)';
		});
	};

	function dot() {
		dots.forEach(el => {
			el.classList.remove('carouselIndicatorDotSelected');
		});
		dots[cont].classList.add('carouselIndicatorDotSelected');
	};

	function slideMove() {
		if(cont < slides.length -1) {
			cont++;
			dot();
			sl();
		} else {
			cont = 0;
			dot();
			sl();
		}
	};


	let slideAuto;

	slideAuto = setInterval(slideMove, 5000);

	document.body.addEventListener('mouseover', (el) => {
		if(el.target.classList.contains('carouselIndicators') || el.target.classList.contains('carouselDestaques') || el.target.classList.contains('carouselWrapper') || el.target.classList.contains('carouselUnit') || el.target.classList.contains('carouselImg')) {
			clearInterval(slideAuto);
		};
	});

	document.querySelector('.carouselDestaques').addEventListener('mouseout', () => {
			clearInterval(slideAuto);
			slideAuto = setInterval(slideMove, 5000);
	});


	document.querySelector('.carouselIndicators').addEventListener('click', (el) => {
		if(el.target.classList.contains('carouselIndicatorDot')) {
			let num = Number(el.target.className.match(/\d/gmi));
			cont = num - 1;
			dot();
			sl();
		}
	});



}
