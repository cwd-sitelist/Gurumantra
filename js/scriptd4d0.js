(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			
			var HeaderHight = $('.main-header').height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
			
		}
	}
	
	headerStyle();
	

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Dropdown Menu / Fullscreen Nav
		$('.fullscreen-menu .navigation li.dropdown > a').on('click', function() {
			$(this).next('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
	}
	
	
	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		
	}
	
	
	
	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	
	
	
	if($('.paroller').length){
		$('.paroller').paroller({
			  factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control  
			  factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			  type: 'foreground',     // background, foreground  
			  direction: 'horizontal' // vertical, horizontal  
		});
	}

	/* =======================================================================================
   footer script
   ========================================================================================*/ 
	document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("#gurumantra_newsletter-2 form");
  const emailInput = form.querySelector('input[name="email"]');

  // Create message element
  const message = document.createElement("p");
  message.style.marginTop = "10px";
  message.style.fontSize = "14px";
  form.appendChild(message);

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop reload

    const email = emailInput.value.trim();

    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      message.style.color = "red";
      message.textContent = "Please enter your email address.";
      return;
    }

    if (!emailPattern.test(email)) {
      message.style.color = "red";
      message.textContent = "Please enter a valid email address.";
      return;
    }

    // SUCCESS
    message.style.color = "#10b8b0";
    message.textContent = "Thanks for subscribing! 🎉";

    // Clear input
    emailInput.value = "";

    // 🔔 OPTIONAL: send to backend / API
    // fetch("save-email.php", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email: email })
    // });

  });

});

	
	
	//Accordion Box
	function acordionActiveJS($scope, $) {
		$(".accordion-box").on('click', '.acc-btn', function() {
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	

	
	
	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}
	
	
	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}
	
	
	
	//Main Slider Carousel
	$(window).on('load', function () {

			$('.services-carousel').trigger('refresh.owl.carousel');
			var owl = $('.services-carousel');

			owl.owlCarousel({
				loop: true,
				margin: 30,
				nav: true,
				dots: true,

				autoplay: true,
				autoplayTimeout: 2000,
				autoplayHoverPause: true,

				smartSpeed: 600,
				autoWidth: false,

				responsive: {
					0: { items: 1 },
					600: { items: 2 },
					1024: { items: 4 },

				}
			});


			owl.trigger('refresh.owl.carousel');

		});
	
	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			//animateOut: 'fadeOut',
    		//animateIn: 'fadeIn',
			loop:true,
			margin:30,
			nav:true,
			//autoHeight: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				},
				1400:{
					items:1
				}
			}
		});    		
	}

	// Tab inner page
	const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
  // price Tab inner page
     const priceTabs = document.querySelectorAll(".price-tab");
  const priceContents = document.querySelectorAll(".price-content");

  priceTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      priceTabs.forEach(t => t.classList.remove("active"));
      priceContents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.price).classList.add("active");
    });
  });

  // Accordian	
  document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;

    document.querySelectorAll(".faq-item").forEach(item => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });

    faqItem.classList.toggle("active");
  });
});

	// Testimonial Carousel
	$(window).on('load', function () {

			$('.testimonial-carousel').trigger('refresh.owl.carousel');
			var owl = $('.testimonial-carousel');

			owl.owlCarousel({
				loop: true,
				margin: 30,
				nav: true,
				dots: true,

				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,

				smartSpeed: 600,
				autoWidth: false,

				responsive: {
					0: { items: 1 },
					600: { items: 1 },
					1024: { items: 4 }
				}
			});
			owl.trigger('refresh.owl.carousel');
		});
	
	
	// Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}


	
	
	
	// Sponsors Item Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
				
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:5
				},
				1200:{
					items:6
				}
			}
		});    	
		
	}
	// Sponsors Carousel Two
	function sponsorstwoCarouselActive($scope, $) {
		$('.sponsors-carousel-two').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:5
				},
				1200:{
					items:5
				}
			}
		});    		
	}
	
	
	//Header Search
	if($('.search-box-btn').length) {
		$('.search-box-btn').on('click', function() {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function() {
			$('body').removeClass('search-active');
		});
	}
	
	
	
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	
	jQuery(".counter").counterUp({
		delay: 50,
		time: 2000,
	});
	
	
	
	
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});
	
	$(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/gurumantra_services_v1.default', serviceCarouselActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/gurumantra_testimonials_v1.default', testimonialCarouselActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/gurumantra_partners.default', sponsorstwoCarouselActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/gurumantra_faqs_v1.default', acordionActiveJS);
		elementorFrontend.hooks.addAction('frontend/element_ready/gurumantra_service_details.default', acordionActiveJS);
        elementorFrontend.hooks.addAction('frontend/element_ready/gurumantra_faqs_v2.default', acordionFAQ2ActiveJS);
    });

})(window.jQuery);



/* =======================================================================================
   preloader function
   ========================================================================================*/ 
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hide");

    setTimeout(() => {
      preloader.style.display = "none";
    }, 600);
  });

  /* =======================================================================================
   smooth Scroll
   ========================================================================================*/ 

let lastScrollTop = 0;
function headerStyle() {
  if ($('.main-header').length) {
 
    var windowpos = $(window).scrollTop();
    var siteHeader = $('.main-header');
    var scrollLink = $('.scroll-to-top');
 
    // SET FIXED HEIGHT (important)
    var headerHeight = 90; // adjust to your header height
 
    if (windowpos > headerHeight) {
      if (!siteHeader.hasClass('fixed-header')) {
        siteHeader.addClass('fixed-header');
      }
      scrollLink.fadeIn(300);
    } else {
      siteHeader.removeClass('fixed-header');
      scrollLink.fadeOut(300);
    }
  }
}
 
// Run on load & scroll
$(window).on('scroll load', function () {
  headerStyle();
});


 /* =======================================================================================
      salary roi calculate 
 ========================================================================================*/ 
function calculateROI() {
  const annualSalary = Number(document.getElementById("currentSalary").value);
  const investment = Number(document.getElementById("investment").value);
  const increase = Number(document.getElementById("increase").value);

  if (annualSalary <= 0 || investment <= 0 || increase <= 0) {
    document.getElementById("result").innerHTML =
      "<p style='color:red;'>Please enter valid values in all fields.</p>";
    return;
  }

  const newAnnualSalary = annualSalary + (annualSalary * increase / 100);
  const annualGain = newAnnualSalary - annualSalary;
  const roi = (annualGain / investment) * 100;
  const paybackMonths = investment / (annualGain / 12);

  document.getElementById("result").innerHTML = `
    <table class="roi-table">
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Current Annual Salary</td>
          <td>₹${annualSalary.toLocaleString('en-IN')}</td>
        </tr>
        <tr>
          <td>New Annual Salary</td>
          <td>₹${newAnnualSalary.toLocaleString('en-IN')}</td>
        </tr>
        <tr>
          <td>Annual Gain</td>
          <td>₹${annualGain.toLocaleString('en-IN')}</td>
        </tr>
        <tr>
          <td>ROI</td>
          <td>${roi.toFixed(2)}%</td>
        </tr>
        <tr>
          <td>Investment Recovery</td>
          <td>${paybackMonths.toFixed(1)} months</td>
        </tr>
      </tbody>
    </table>
  `;
}











 