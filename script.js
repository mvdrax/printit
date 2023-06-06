let bannerimg = document.getElementsByClassName('bannerimg')

let etape = 0;

let nmb_img = bannerimg.length;




let arrow_left = document.querySelector('.arrow_left');
let arrow_right = document.querySelector('.arrow_right');

function removeactivefromimg() {
	for(let i = 0 ; i < nmb_img ; i++) {
		bannerimg[i].classList.remove('active');
	}
}



arrow_right.addEventListener('click', function() {
	etape++;
	if(etape >= nmb_img) {
		etape = 0;
	}
	removeactivefromimg();
	bannerimg[etape].classList.add('active');
})



arrow_left.addEventListener('click', function() {
	etape--;
	if(etape <0) {
		etape = nmb_img - 1;
	}
	removeactivefromimg();
	bannerimg[etape].classList.add('active');
})


const slides = [
	{
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
let positionSlide = 0;
const txt = document.querySelector('.banner-txt');

leftArrow.addEventListener('click', function() {
	positionSlide--;
	if (positionSlide === -1) {
		positionSlide = slides.length - 1;
	}
	txt.innerHTML = slides[positionSlide].tagLine;
	console.log('On clique sur la flèche de gauche');
	updateDots();
});

rightArrow.addEventListener('click', function() {
	positionSlide++;
	if (positionSlide === slides.length) {
		positionSlide = 0;
	}
	txt.innerHTML = slides[positionSlide].tagLine;
	console.log('On clique sur la flèche de droite');
	updateDots();
});



let dot = document.querySelectorAll('.dot');


function updateDots() {
	for (let i = 0; i < dot.length; i++) {
		if (i === positionSlide) {
			dot[i].classList.add('active');
		} else {
			dot[i].classList.remove('active');
		}
	}
}
