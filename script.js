"use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());

	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener('click', function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}


//прокрутка при клике
const fullscreenLinks = document.querySelectorAll('.fullscreen__link[data-goto]');
if (fullscreenLinks.length > 0) {
	fullscreenLinks.forEach(fullscreenLink => {
		fullscreenLink.addEventListener("click", onFullscreenLinkClick);
	});

	function onFullscreenLinkClick(e) {
		const fullscreenLink = e.target;
		if (fullscreenLink.dataset.goto && document.querySelector(fullscreenLink.dataset.goto)) {
			const gotoBlock = document.querySelector(fullscreenLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

//оживляем свайпер
const swiper = new Swiper('.image-slider', {

	// Навигация
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',

		// Буллеты
		clickable: true,
		// Динамические буллеты
		dynamicBullets: true,

		//Фракция (не используется с буллетами)
		//type: 'fraction',


		// Прогрессбар
		//type: 'progressbar'
	},

	//стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// Скролл
	scrollbar: {
		el: '.swiper-scrollbar',
		// Возможность перетаскивать скролл
		draggable: true
	},

	// Включение/отключение
	// Перетаскивание на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания(рука-курсор)
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: false,

	// Управление клавиатурой
	keyboard: {
		// Включить/выключить
		enabled: true,
		// Включить/выключить
		// Только когда слайдер в пределах вьюпорта
		onlyInViewport: true,
		// Включить/выключить
		// Управление клавишами pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	/*mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором будет срабатывать прокрутка мышью
		// Нужно отключать когда много слайдеров
		//eventsTarget: ".image-slider"
	},*/

	// Автовысота
	autoHeight: true,

	// Количество слайдов для показа
	//slidesPerView:'auto', (количество слайдов для показа автоматически) не будет работать если slidesPerColumn > 1
	slidesPerView: 1,

	// Отключение функционала, если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 0,

	// Количество пролистываемых слайдов за раз
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд
	initialSlide: 0,

	// Мультирядность (для корректной работы - autoHeight: false,)
	//slidesPerColumn: 2,

	// Бесконечный слайдер (
	//выключаем scroll, 
	//не работает если slidesPerColumn > 1
	//если slidesPerView:'auto' , то loopedSlides настраваем вручную
	loop: true,

	// Количество дублируемых слайдов
	loopedSlides: 0,

	//Свободный режим
	freeMode: true,

	// Автопрокрутка
	autoplay: {
		// Пауза между прокруткой
		delay: 3000,
		// Закончить на последнем слайде
		stopOnLastSlide: false,
		// Отключить после ручного переключения
		disableOnInteraction: false,
	},

	// Скорость
	speed: 900,

	// Вертикальный слайдер 
	//direction: 'vertical',

	// << ЭФФЕКТЫ ПЕРЕКЛЮЧЕНИЯ >>
	// (1) Листание
	effect: 'slide',
	/*
	// (2) Смена прозрачности
	effect: 'fade',
	//дополнение к fade
	fadeEffect: {
		// Параллельная смена прозрачности
		crossFade: true
	},*/
	/*
	// (3) Переворот
	effect: 'flip',
	//дополнение к flip
	flipEffect: {
		// Тень
		slidesShadows:true,
		// Показ только активного слайда
		limitedRotation: true
	},*/

	/*// (4) Куб
	effect: 'cube',
	//дополнение к cube
	cubeEffect: {
		// Настройки тени
		slideShadows: false,
		shadow: true,
		shadowOffset:20,
		shadowScale: 0.94,
	},*/
	/*
	// (5) Эффект потока
	effect: 'coverflow',
	//дополнение к coverflow
	coverflowEffect: {
		// Угол
		rotate: 20,
		// Наложение
		stretch: 50,
		// Тень
		slideShadows: true,
	},*/


	// Брейк поинты (адаптив)
	// Ширина экрана
	/*breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},*/
	/*
		// Отключить предзагрузку картинок
		preloadImages: false,
		// lazy Loading
		// (подгрузка картинок)
		lazy: {
			//подгружать на старте переключения слайда
			loadOnTransitionStart: false,
			//подгружать предыдущую и следующую картинки
			loadPrevNext: false,
		},
		// Слежка за видимыми слайдами
		watchSlidesProgress: false,
		// Добавление класса "swiper-lazy-preloader" видимым слайдам
		watchSlidesVisibility: false,*/
});



// вставляем картинку в popup
$('.photo-grid__image').click(function (e) {
	e.preventDefault();

	// меняем путь к картинке
	let src = $(this).attr('src');
	$('.popup__image').attr('src', src);

	$('#popup').show();
});

$('.popup__close').click(function (e) {
	e.preventDefault();

	$('#popup').hide();
});

$("#popup").click(function (e) { // событие клика по #popup
	var div = $(".popup__content"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
		&& div.has(e.target).length === 0) { // и не по его дочерним элементам
		$('#popup').hide();
	}
});

