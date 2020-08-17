$(document).ready(function () {
	$('.popup-btn').on('click', function(event){
		event.preventDefault();
		$('.popup').fadeIn();
	})
	$('.popup__close').on('click', function(event){
		event.preventDefault();
		$('.popup').fadeOut();
	})
	// слайдер с отзывами
	$('.feedback__slider').slick({
		prevArrow:'<button type="button" class="feedback-slider__btn feedback-pref__btn prev"></button>',
		nextArrow:'<button type="button" class="feedback-slider__btn feedback-next__btn next"></button>'

		
	});
	// слайдер с преимуществами
	$('.features__slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					prevArrow: '<button class="prev"> </button>',
					nextArrow: '<button class="next"> </button>',
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: '<button class="prev"> </button>',
					nextArrow: '<button class="next"> </button>',
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
});
