
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


/* On appelle la classe correspondant aux images du carroussel et 
on définit une étape pour notre algorithme */

let bannerimg = document.getElementsByClassName('bannerimg')

let etape = 0;

let nmb_img = bannerimg.length;

/* On appelle les 2 classes correspondant aux flèches */

let arrow_left = document.querySelector('.arrow_left');
let arrow_right = document.querySelector('.arrow_right');


/* On définit une fonction qui permet de rériter la classe .active sur les images
 du caroussel, la classe .active permettant de moduler l'opacité et donc d'afficher une image */

function removeactivefromimg() {
	for(let i = 0 ; i < nmb_img ; i++) {
		bannerimg[i].classList.remove('active');
	}
}

/* On ajoute un event listener qui permet de faire défiler les images vers la droite , 
dans un sens croissant et de recommencer (retourner à l'étape 0) le défilement des images 
à l'infini une fois qu'elles sont toutes passées. 
Cet event listener permet aussi d'ajouter la classe .active à l'image correspondant à l'étape à laquelle nous sommes */

arrow_right.addEventListener('click', function() {
	etape++;
	if(etape >= nmb_img) {
		etape = 0;
	}
	removeactivefromimg();
	bannerimg[etape].classList.add('active');
})

/* Même fonctionnalité mais vers la gauche */ 

arrow_left.addEventListener('click', function() {
	etape--;
	if(etape <0) {
		etape = nmb_img - 1;
	}
	removeactivefromimg();
	bannerimg[etape].classList.add('active');
})




const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
let positionSlide = 0;
const txt = document.querySelector('.banner-txt');

/* Cet event listener permet de faire défiler le texte correspondant aux différentes images , sauf qu'ici
la variable positionSlide équivaut à l'étape à laquelle est notre caroussel. Il permet également de faire défiler 
à l'infini nos images une fois qu'elles sont toutes passées. On a également intégré la fonction UpdateDots qui permet 
de faire fonctionner les points de navigation */

leftArrow.addEventListener('click', function() {
	positionSlide--;
	if (positionSlide === -1) {
		positionSlide = slides.length - 1;
	}
	txt.innerHTML = slides[positionSlide].tagLine;
	updateDots();
});

rightArrow.addEventListener('click', function() {
	positionSlide++;
	if (positionSlide === slides.length) {
		positionSlide = 0;
	}
	txt.innerHTML = slides[positionSlide].tagLine;
	updateDots();
});

/* On appelle la classe correspondant aux 4 points de navigation */

let dot = document.querySelectorAll('.dot');

/* On crée une fonction qui permet d'ajouter la classe .active au point qui correspond à 
l'étape numérique (positionSlide) à laquelle nous sommes. La fonction active permet de colorer le point 
en blanc */

function updateDots() {
	for (let i = 0; i < dot.length; i++) {
		if (i === positionSlide) {
			dot[i].classList.add('active');
		} else {
			dot[i].classList.remove('active');
		}
	}
}
