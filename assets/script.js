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
	removeactivefromimg();
	bannerimg[etape].classList.add('active');
})