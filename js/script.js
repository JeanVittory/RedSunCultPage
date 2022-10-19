$(document).ready(function () {
	$('body').addClass('js');
	var $menu = $('#menu'),
		$menulink = $('.menu-link');
	$links = $('#menu').find('a');

	$menulink.click(function () {
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
		return false;
	});

	$links.click(function () {
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
	});

	// /* slider gallery */  $('.rslides').responsiveSlides();
});

/* Media Query a 48em */

let mq48 = window.matchMedia('(min-width:48em)');
let $imagenMd = document.getElementById('imagen-md');
let $videoDesktop = document.getElementById('video-desktop');
let $desktopNav = document.getElementById('desktop-nav');
let $phHeader = document.getElementById('ph-header');
let $cultoAlSolRojoLatestPhone = document.querySelector('.culto-al-sol-rojo-img');
let $bannerLatestDesktop = document.querySelector('.banner-latest-desktop');

function mediaQueries(mq48) {
	if (mq48.matches) {
		$imagenMd.classList.remove('none');
		$videoDesktop.classList.remove('none');
		$desktopNav.classList.remove('none');
		$phHeader.classList.add('none');
		$cultoAlSolRojoLatestPhone.classList.add('none');
		$bannerLatestDesktop.classList.remove('none');
	} else {
		$imagenMd.classList.add('none');
		$videoDesktop.classList.add('none');
		$desktopNav.classList.add('none');
		$phHeader.classList.remove('none');
		$cultoAlSolRojoLatestPhone.classList.remove('none');
		$bannerLatestDesktop.classList.add('none');
	}
}

mediaQueries(mq48);
mq48.addListener(mediaQueries);

const $mainMenu = document.querySelector('.ph-main-menu');
const $closeMenu = document.querySelector('.close-menu');
const $openMenu = document.querySelector('.open-menu');
const $home = document.getElementById('home');
const $latest = document.getElementById('latest');
const $videos = document.getElementById('videos');
const $music = document.getElementById('music');
const $contact = document.getElementById('contact');
const $albumLatest = document.getElementById('culto-al-sol-rojo-album-imagen');
const $iconsLatestSection = document.getElementById('icons-latest-section');

// burguerMenu phone //
$openMenu.addEventListener('click', show);
$closeMenu.addEventListener('click', close);
$home.addEventListener('click', close);
$latest.addEventListener('click', close);
$videos.addEventListener('click', close);
$music.addEventListener('click', close);
$contact.addEventListener('click', close);

function show() {
	$mainMenu.style.display = 'flex';
	$mainMenu.style.top = '0';
}

function close() {
	$mainMenu.style.top = '-100%';
}

// stuck nav desktop

function stuck(desktopNnav) {
	const $stuck = document.querySelector(desktopNnav);
	window.addEventListener('scroll', (e) => {
		let scrollTop = document.documentElement.scrollTop;
		if (scrollTop > 50) {
			$stuck.classList.add('stuck');
		} else {
			$stuck.classList.remove('stuck');
		}
	});
}

document.addEventListener('DOMContentLoaded', (e) => {
	stuck('#desktop-nav');
});
