(function($, root, undefined) {

    function easyPeasyParallax() {
        scrollPos = $(this).scrollTop();
        // $('.hero-bg').css({
        //     'background-position': 'center ' + (0 + (scrollPos / 2)) + 'px'
        // });
        // $('.hero-person').css({
        //     'background-position': 'center ' + (0 + (scrollPos / 3)) + 'px'
        // });
        // $('.hero-branding').css({
        //     'background-position': 'center ' + (0 + (scrollPos / 4)) + 'px'
        // });
        // $('h1.page-title').css({
        //     'top': 0 + (scrollPos / 3) + "px"
        // });
        // $('.page-sub-title').css({
        //     'top': 0 + (scrollPos / 3) + "px"
        // });
        // $('button#watch-video').css({
        //     'top': 0 + (scrollPos / 3) + "px"
        // });
        // $('.mck-btn-launch').css({
        //     'top': 0 + (scrollPos / 3) + "px"
        // });
        // $('p.user-details').css({
        //     'top': 0 + (scrollPos / 3) + "px"
        // });
    };

    function menuAnimation() {
        var scrollPosDocument = $(document).scrollTop();
        if (scrollPosDocument >= 80) {
            $('nav.navbar').addClass('scrolled');
            $('a.navbar-brand').addClass('scrolled');
            $('.navbar-toggler').addClass('scrolled');
            $('.navbar-toggler-icon').addClass('scrolled');
            $('#navbarCollapse').addClass('scrolled');
            $('#search-box').addClass('scrolled');
            $('#avatar-btn').addClass('scrolled');
        } else {
            $('nav.navbar').removeClass('scrolled');
            $('a.navbar-brand').removeClass('scrolled');
            $('.navbar-toggler').removeClass('scrolled');
            $('.navbar-toggler-icon').removeClass('scrolled');
            $('#navbarCollapse').removeClass('scrolled');
            $('#search-box').removeClass('scrolled');
            $('#avatar-btn').removeClass('scrolled');
        }
    }

    function pageTransition() {
        $('nav.navbar').removeClass('fadeInDown');
        $('#hero').removeClass('fadeInDownBig');
        $('#main-content').removeClass('fadeInUp');
        $('footer').removeClass('fadeInUp');
        $('nav.navbar').addClass('fadeOutUp zero-delay');
        $('#hero').addClass('fadeOutUpBig zero-delay');
        $('#main-content').addClass('fadeOutDown zero-delay');
        $('footer').addClass('fadeOutDown zero-delay');
    }


    $(function() {

    	$('.curriculum-map-container-full').hide();
        $('.view-full-curriculum').on('click', function() {
    		$(this).parent().hide();
            $(this).parent().next().show();
    	})

        $('a[href="#hero-carousel"]').on('click', function(e) {
            e.preventDefault();
        })

        $('.faq-collapsed-info').hide();
        $('.faq-collapse-btn').on('click', function() {
            $(this).toggleClass('open');
            $(this).next().animate({
                height: "toggle",
                opacity: "toggle"
            }, 290);
        })

        // Wizard
        $('#wizard1-btn-next').on('click', function() {
            $('#wizard1Modal').modal('hide');
            $('#wizard2Modal').modal('show');
        });
        $('#wizard2-btn-prev').on('click', function() {
            $('#wizard2Modal').modal('hide');
            $('#wizard1Modal').modal('show');
        });
        $('#wizard2-btn-done').on('click', function() {
            $('#wizard2Modal').modal('hide');
            // window.location.href = 'wizard.html';
        });
        
        // Learning Plan
        $('.learning-plan-remove-icon').on('click', function() {
        	$('#deleteMyPlanModal').modal('show');
            // $(this).parent().slideUp();
        });

        // People Modal
        // $('#peopleModal').modal('show');

        $('a.addduedate').on('click', function(e) {
            e.preventDefault();
            $('#addtoLearningPlanModal').modal('show');
        });
        $('a.learning-plan-date-icon').on('click', function(e) {
            e.preventDefault();
            $('#modifyDueDateModal').modal('show');
        });

        $('.edit-icon').on('click', function() {
            $('.learning-plan-courses').toggleClass('edit');
        });
        

        // Toolkit
        $('.toolkit-collapsed-info').hide();
        $('.toolkit-collapse-btn').on('click', function(){
            $(this).next().animate({
                height: "toggle",
                opacity: "toggle"
            }, 290);
        });

        $('a[href="#nonlmslearn"]').on('click', function() {
            $('.staffing-filters').addClass('filters-hidden');
        });
        $('a[href="#lmslearn"]').on('click', function() {
            $('.staffing-filters').removeClass('filters-hidden');
        });

        // Journey Setting
        $('.non-partner-dropdown').hide();
        $('#partner-toggle-switch, #partner-toggle-switch-btn').on('click', function() {
            if ( $(this).prop('checked') == true ) {
                $('.partner-dropdown').hide();
                $('.non-partner-dropdown').show();
            } else if ( $(this).prop('checked') == false ) {
                $('.partner-dropdown').show();
                $('.non-partner-dropdown').hide();
            }    
        });

        // Hero Carousel
        $('#hero-carousel').carousel({
            interval: 9000,
            pause: 'hover'
        })

        // Labeleuty
        $(".labelauty-checkbox:checkbox").labelauty();
        $(".labelauty-checkbox:radio").labelauty();

        // Scrollos
        $('#core-scroll').Scrollos();
        $('#expertise-scroll').Scrollos();
        $('#expertise1-scroll').Scrollos();
        $('#expertise2-scroll').Scrollos();
        $('#electives-scroll').Scrollos();
        
        // Animating Progress Bars on Core on page load
        $('.progress .progress-bar').progressbar({
            transition_delay: 2000
        });

        // Animating Footer
        $.fn.isInViewport = function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            return elementBottom > viewportTop && elementTop < viewportBottom;
        };

        $(window).on('resize scroll', function() {
            if ($('#feedback-hero').isInViewport()) {
                $('#feedback-hero').addClass('fadeInUp');
            }
            
        });

    	// Scroll more
    	$('.scroll-more-core').hide();
    	setTimeout(function() {
    		var totalExpertiseWidth = 0;
            $("ul#electives-categories").children().each(function() {
                  totalExpertiseWidth = totalExpertiseWidth + ($(this).outerWidth() + 40);
            });
            if ( totalExpertiseWidth > $(window).width() ) {
                $('.scroll-more-core').slideDown();
            } else {
                $('.scroll-more-core').slideUp();
            }
    	}, 1000);
    	
		$(window).on('resize', function() {
	    	
            var totalExpertiseWidth = 0;
            $("ul#electives-categories").children().each(function() {
                  totalExpertiseWidth = totalExpertiseWidth + ($(this).outerWidth() + 40);
            });
            if ( totalExpertiseWidth > $(window).width() ) {
                $('.scroll-more-core').slideDown();
            } else {
                $('.scroll-more-core').slideUp();
            }
	    	
		});

        

        // Blur background on modal open and unblur on close
        $('.modal').on('show.bs.modal', function(e) {
            $('.wrapper').addClass('modal-blur');
        });
        $('.modal').on('hidden.bs.modal', function(e) {
            $('.wrapper').removeClass('modal-blur');
        });

        // Remove hero banner
        $('#hide-hero').on('click', function() {
            $('#hero').toggleClass('removed');
            $('#hide-hero .hide').toggleClass('hidden-hide');
            $('#hide-hero .show').toggleClass('hidden-show');
            $(this).toggleClass('collapsed');
        });

        // Journey Tabs
        $('#journey-tabs a').on('click', function(e) {
            // e.preventDefault();
            e.stopImmediatePropagation();
            if ( $(this).attr('data-collapse') == 'collapsed' ) {
                $('body, html').animate({ scrollTop: 0 }, 'slow');

                setTimeout(function() {
                    if (!$('#hero').hasClass("removed")) {
                        $('#hero').addClass('collapsed');
                        $('#hide-hero').addClass('hidden');
                    }    
                }, 1000);
            } else {
                $('body, html').animate({ scrollTop: 0 }, 'slow');

                setTimeout(function() {
                    if (!$('#hero').hasClass("removed")) {
                        $('#hero').removeClass('collapsed');
                        $('#hide-hero').removeClass('hidden');
                    }    
                }, 1000);
            }
            $(this).tab('show');
		    setTimeout(function() {
		    	var totalCoreWidth = 0;
				$("ul#core-categories").children('li').each(function() {
				      totalCoreWidth = totalCoreWidth + ($(this).outerWidth() + 40);
				});
				if ( totalCoreWidth > $(window).width() ) {
					$('.scroll-more-core').slideDown();
				} else {
					$('.scroll-more-core').slideUp();
				}
                var totalExpertiseWidth = 0;
                $("ul#expertise-categories").children().each(function() {
                      totalExpertiseWidth = totalExpertiseWidth + ($(this).outerWidth() + 40);
                });
                if ( totalExpertiseWidth > $(window).width() ) {
                    $('.scroll-more-expertise').slideDown();
                } else {
                    $('.scroll-more-expertise').slideUp();
                }
		    	var totalExpertise1Width = 0;
				$("ul#expertise-functional-subcategories").children().each(function() {
				      totalExpertise1Width = totalExpertise1Width + ($(this).outerWidth() + 40);
				});
				if ( totalExpertise1Width > $(window).width() ) {
					$('.scroll-more-expertise1').slideDown();
                    $('#expertise1-scroll .scrollos-container').attr('data-overflowing', 'right');
				} else {
					$('.scroll-more-expertise1').slideUp();
				}
		    	var totalExpertise2Width = 0;
				$("ul#expertise-industry-subcategories").children().each(function() {
				      totalExpertise2Width = totalExpertise2Width + ($(this).outerWidth() + 40);
				});
				if ( totalExpertise2Width > $(window).width() ) {
					$('.scroll-more-expertise2').slideDown();
                    $('#expertise2-scroll .scrollos-container').attr('data-overflowing', 'right');
				} else {
					$('.scroll-more-expertise2').slideUp();
				}
		    	var totalElectivesWidth = 0;
				$("ul#electives-categories").children('li:not(.hidden-category)').each(function() {
				      totalElectivesWidth = totalElectivesWidth + ($(this).outerWidth() + 40);
				});
				if ( totalElectivesWidth > $(window).width() ) {
					$('.scroll-more-electives').slideDown();
                    $('#electives-scroll .scrollos-container').attr('data-overflowing', 'right');
				} else {
					$('.scroll-more-electives').slideUp();
				}
		    }, 1000);
            setInterval(function() {
                $('#core-scroll').Scrollos();
                $('#expertise-scroll').Scrollos();
                $('#expertise1-scroll').Scrollos();
                $('#expertise2-scroll').Scrollos();
                $('#electives-scroll').Scrollos();
		    }, 1000);	
        })
        $('#industry-tab').on('click', function() {
        	$('#expertise2-scroll .scrollos-container').attr('data-overflowing', 'right');
        });
        $('#curriculum-tabs a').on('click', function(e) {
            // e.preventDefault();
            e.stopImmediatePropagation();
            
            $(this).tab('show');
		    	
        })

        // Settings 
        $('#avatar-btn').on('click', function() {
            $('#avatar-btn .dropdown-settings').toggleClass('open');
        })

        // Explore Another Journey Dropdowns
        $('.office-select').selectpicker({
            liveSearch: true,
            width: '100%',
            size: 4,
            dropupAuto: false
        });
        $('.service-select').selectpicker({
            width: '100%',
            dropupAuto: false
        });
        $('.role-select').selectpicker({
            width: '100%',
            dropupAuto: false
        });
        $('.path-select').selectpicker({
            liveSearch: true,
            width: '100%',
            size: 4,
            dropupAuto: false
        });
        $('.partner-select').selectpicker({
            width: '100%',
            dropupAuto: false
        });

        // Unhide Courses
        $('.unhide-course').on('click', function() {
            $(this).parent().slideUp();
        });

        // Offcanvas settings
        $('#settings-toggle').on('click', function() {
            $(this).parent().toggleClass('open');
        });

        // Helpful Resources
        $('.resources-show').hide();
        $('.resources-hide').on('click', function() {
            $(this).hide();
            $(this).next().show();
            $(this).parent().parent().next().slideUp();
        });
        $('.resources-show').on('click', function() {
            $(this).hide();
            $(this).prev().show();
            $(this).parent().parent().next().slideDown();
        });

        // Browse Catalog
        // $('ul.catalog-categories').hide();
        $('.catalog-hide').hide();
        $('.catalog-hide').on('click', function() {
            $(this).hide();
            $(this).next().show();
            $(this).parent().parent().next().slideUp();
        });
        $('.catalog-show').on('click', function() {
            $(this).hide();
            $(this).prev().show();
            $(this).parent().parent().next().slideDown();
        });

        // Comments
        $('.course-comment-icon-fill').hide();
        $('.course-comment').on('click', function() {
            $('#launchCommentsModal').modal('show');
        });

        // Hiding explore more on page load
        // $('#journey-more').hide();

        // Core
        // Tabs
        $('#core-categories a').on('click', function(e) {
            e.preventDefault();
            $(this).tab('show');
            // if (!$('#hero').hasClass("removed")) {
            //     $('html, body').animate({
            //         scrollTop: $( $(this).attr('href') ).offset().top + 905
            //     }, 1000);            
            // } else {
            //     $('html, body').animate({
            //         scrollTop: $( $(this).attr('href') ).offset().top + 615
            //     }, 1000);
            // }  
            
        });
        // Center horizontal scrolling on category containers
        var $coreMenu = $('#core-categories');
        $('#core-categories li > a').on('click', function(e) {
            e.preventDefault();
            var $element = $(this);

            $coreMenu.find('li > a').removeClass('active');
            $element.addClass('active');

            var elOffset = $element.offset().left;
            var elWidth = $element.outerWidth(true);
            var menuScrollLeft = $coreMenu.scrollLeft();
            var menuWidth = $coreMenu.width();

            var myScrollPos = (elOffset + (elWidth / 2) + menuScrollLeft - (menuWidth / 2)) - 30;
            $coreMenu.animate({ scrollLeft: myScrollPos }, 1000);
            e.stopImmediatePropagation();
        });
        // Core course lists
        // $('.course-description').hide();
        $('[data-toggle="tooltip"]').tooltip();
        $('.course-minus').hide();
        $('.course-plus').on('click', function() {
            $(this).hide();
            $(this).next().show();
            $(this).parent().next().children('.course-description').slideDown();
        });
        $('.course-minus').on('click', function() {
            $(this).hide();
            $(this).prev().show();
            $(this).parent().next().children('.course-description').slideUp();
        });
        $('.course-extras-icon-fill').hide();
        $('.course-extras-icon').on('click', function() {
            $(this).hide();
            $(this).next().show();
        });
        $('.course-extras-icon-fill').on('click', function() {
            $(this).hide();
            $(this).prev().show();
        });
        $('.course-contextual-menu').hide();
        $('.course-menu-icon').on('click', function() {
            $(this).next().fadeToggle();
        });
        // Core Dropdowns
        $('.dd-core-types').selectpicker({
            width: '100%',
            dropupAuto: false,
            height: 10
        });
        $('.dd-core-levels').selectpicker({
            width: '100%',
            dropupAuto: false,
            height: 10
        });
        $('.dd-core-duration').selectpicker({
            width: '100%',
            dropupAuto: false,
            height: 10
        });
        $('.dd-core-statuses').selectpicker({
            width: '100%',
            dropupAuto: false,
            height: 10
        });
        // Carousel
        $('#hero-carousel a.carousel-control-prev').on('click', function(e) {
            e.stopImmediatePropagation();
            $('#hero-carousel').carousel('prev');
        });
        $('#hero-carousel a.carousel-control-next').on('click', function(e) {
            e.stopImmediatePropagation();
            $('#hero-carousel').carousel('next');
        });
        // Carousel Touch Swipe
        $("#hero-carousel").swipe({
            swipeRight: function() {
                $(this).carousel('prev')
            },
            swipeLeft: function() {
                $(this).carousel('next')
            }
        });
        // Resize circle completion percentage


        // Expertise
        // // Activate electives tab
        $('#expertise-functional-subcategories a').on('click', function(e) {
            e.preventDefault();
            $(this).tab('show');
      //       $('html, body').animate({
		    //     scrollTop: $( $(this).attr('href') ).offset().top + 700
		    // }, 1000);
        });
        // Center horizontal scrolling on category containers
        var $expertiseFunctionalMenu = $('#expertise-functional-subcategories');
        $('#expertise-functional-subcategories li > a').on('click', function(e) {
            e.preventDefault();
            var $element = $(this);

            $expertiseFunctionalMenu.find('li > a').removeClass('active');
            $element.addClass('active');

            var elOffset = $element.offset().left;
            var elWidth = $element.outerWidth(true);
            var menuScrollLeft = $expertiseFunctionalMenu.scrollLeft();
            var menuWidth = $expertiseFunctionalMenu.width();

            var myScrollPos = (elOffset + (elWidth / 2) + menuScrollLeft - (menuWidth / 2)) - 30;
            $expertiseFunctionalMenu.animate({ scrollLeft: myScrollPos }, 1000);
            e.stopImmediatePropagation();
        });
        $('#expertise-industry-subcategories a').on('click', function(e) {
            e.preventDefault();
            $(this).tab('show');
      //       $('html, body').animate({
		    //     scrollTop: $( $(this).attr('href') ).offset().top + 700
		    // }, 1000);
        });
        // Center horizontal scrolling on category containers
        var $expertiseIndustryMenu = $('#expertise-industry-subcategories');
        $('#expertise-industry-subcategories li > a').on('click', function(e) {
            e.preventDefault();
            var $element = $(this);

            $expertiseIndustryMenu.find('li > a').removeClass('active');
            $element.addClass('active');

            var elOffset = $element.offset().left;
            var elWidth = $element.outerWidth(true);
            var menuScrollLeft = $expertiseIndustryMenu.scrollLeft();
            var menuWidth = $expertiseIndustryMenu.width();

            var myScrollPos = (elOffset + (elWidth / 2) + menuScrollLeft - (menuWidth / 2)) - 30;
            $expertiseIndustryMenu.animate({ scrollLeft: myScrollPos }, 1000);
            e.stopImmediatePropagation();
        });

        // Tabs
        $('body.v1 #expertise-categories a:not(#newventures-tab)').on('click', function(e) {
            e.preventDefault();
            $(this).tab('show');
      //       $('html, body').animate({
		    //     scrollTop: $( $(this).attr('href') ).offset().top + 555
		    // }, 1000);
        });
        $('body.v2 #expertise-categories a:not(#newventures-tab), body.v3 #expertise-categories a:not(#newventures-tab)').on('click', function(e) {
            e.preventDefault();
            $(this).tab('show');
            // $('html, body').animate({
            //     scrollTop: $( $(this).attr('href') ).offset().top + 575
            // }, 1000);
        });
        $('#expertise-categories a#newventures-tab').on('click', function(e) {
            e.preventDefault();
            $(this).tab('show');
            // $('html, body').animate({
            //     scrollTop: $( $(this).attr('href') ).offset().top + 565
            // }, 1000);
        });
        // Center horizontal scrolling on category containers
        var $expertiseMenu = $('#expertise-categories');
        $('#expertise-categories li > a').on('click', function(e) {
            e.preventDefault();
            var $element = $(this);

            $expertiseMenu.find('li > a').removeClass('active');
            $element.addClass('active');

            var elOffset = $element.offset().left;
            var elWidth = $element.outerWidth(true);
            var menuScrollLeft = $expertiseMenu.scrollLeft();
            var menuWidth = $expertiseMenu.width();

            var myScrollPos = (elOffset + (elWidth / 2) + menuScrollLeft - (menuWidth / 2)) - 30;
            $expertiseMenu.animate({ scrollLeft: myScrollPos }, 1000);
            e.stopImmediatePropagation();
        });
        // Expertise Dropdowns
        $('.dd-expertise-subcategories').selectpicker({
            liveSearch: true,
            width: '100%',
            dropupAuto: false,
            height: 4
        });
        $('.dd-expertise-types').selectpicker({
            width: '100%',
            dropupAuto: false,
            height: 10
        });
        $('.dd-expertise-duration').selectpicker({
            width: '100%',
            dropupAuto: false,
            height: 10
        });
        $('.dd-expertise-level').selectpicker({
            width: '100%',
            dropupAuto: false,
            height: 10
        });
        $('.dd-expertise-statuses').selectpicker({
            width: '100%',
            dropupAuto: false,
            height: 10
        });
        $('.expertise-sub-category-select').selectpicker({
            liveSearch: true,
            width: '100%',
            dropupAuto: false,
            height: 4
        });
        $('.expertise-sub-sector-select').selectpicker({
            liveSearch: true,
            width: '100%',
            dropupAuto: false,
            height: 4
        });

        // Select Filters
        $('.select-hide').hide();
        $('#function-select').on('change', function() {
            var functionFilter = $('#function-select option:selected').val();
            $('.expertise-sub-sector-select').hide();
            var functionFilterShow = "#" + functionFilter;
            console.log(functionFilterShow);
            $(functionFilterShow).parent().show();
        });
        $('#industry-select').on('change', function() {
            var industryFilter = $('#industry-select option:selected').val();
            $('.expertise-sub-sector-select').hide();
            var industryFilterShow = '#' + industryFilter;
            $(industryFilterShow).parent().show();
        });

        // Electives
        // Tabs
        $('#electives-categories a[data-toggle="tab"]').on('click', function(e) {
            e.preventDefault();
            $(this).tab('show');
      //       $('html, body').animate({
		    //     scrollTop: $( $(this).attr('href') ).offset().top + 585
		    // }, 1000);
        });
        // Center horizontal scrolling on category containers
        // var $electivesMenu = $('#electives-categories');
        // $('#electives-categories li > a').on('click', function(e) {
        //     e.preventDefault();
        //     var $element = $(this);

        //     $electivesMenu.find('li > a').removeClass('active');
        //     $element.addClass('active');

        //     var elOffset = $element.offset().left;
        //     var elWidth = $element.outerWidth(true);
        //     var menuScrollLeft = $electivesMenu.scrollLeft();
        //     var menuWidth = $electivesMenu.width();

        //     var myScrollPos = (elOffset + (elWidth / 2) + menuScrollLeft - (menuWidth / 2)) - 30;
        //     $electivesMenu.animate({ scrollLeft: myScrollPos }, 1000);
        //     e.stopImmediatePropagation();
        // });
        // Show more/less categories
        $('#cat-show-more a').on('click', function() {
            $('.hidden-category').removeClass('cat-hide');
            $('.shown-category').removeClass('cat-show');
            $('.hidden-category').addClass('cat-show');
            $('.shown-category').addClass('cat-hide');
            setTimeout(function() {
                var totalElectivesWidth = 0;
                $("ul#electives-categories").children().each(function() {
                      totalElectivesWidth = totalElectivesWidth + ($(this).outerWidth() + 40);
                });
                if ( totalElectivesWidth > $(window).width() ) {
                    $('.scroll-more-electives').slideDown();
                    $('#electives-scroll .scrollos-container').attr('data-overflowing', 'right');
                } else {
                    $('.scroll-more-electives').slideUp();
                }
            }, 1000);
        });
        $('#cat-show-less a').on('click', function() {
            $('.hidden-category').removeClass('cat-show');
            $('.shown-category').removeClass('cat-hide');
            $('.hidden-category').addClass('cat-hide');
            $('.shown-category').addClass('cat-show');
            setTimeout(function() {
                var totalElectivesWidth = 0;
                $("ul#electives-categories").children().each(function() {
                      totalElectivesWidth = totalElectivesWidth + ($(this).outerWidth() + 40);
                });
                if ( totalElectivesWidth > $(window).width() ) {
                    $('.scroll-more-electives').slideDown();
                    $('#electives-scroll .scrollos-container').attr('data-overflowing', 'right');
                } else {
                    $('.scroll-more-electives').slideUp();
                }
            }, 1000);
        });
        // Electives Dropdowns
        $('.dd-electives-types').selectpicker({
            width: '100%',
            dropupAuto: false,
            height: 10
        });
        $('.dd-electives-duration').selectpicker({
            width: '100%',
            dropupAuto: false,
            height: 10
        });
        $('.dd-electives-level').selectpicker({
            width: '100%',
            dropupAuto: false,
            height: 10
        });
        $('.dd-electives-statuses').selectpicker({
            width: '100%',
            dropupAuto: false,
            height: 10
        });
        $('.electives-select').selectpicker({
            width: '100%',
            dropupAuto: false,
            height: 10
        });
        
        // Tiles
        $('.owl-carousel').owlCarousel({
            // animateIn: 'fadeIn',
            // animateOut: 'fadeOut',
            fluidSpeed: 1000,
            smartSpeed: 1000,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 7000,
            margin: 20,
            loop: true,
            nav: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1
                },
                // breakpoint from 480 up
                768: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        });

        // QDL
        $('.qdl-resource .course-description').hide();

        // Search
        // Hide unified search on enter key
        $('.journey-unified-search-select').keypress(function(e) {
            if(e.which == 13) {
                $('.journey-unified-search-select').selectpicker('hide');
            }
        }); 
        
        $('#search-feedback-fixed-link').on('click', function(e) {
            // e.preventDefault();
            var searchTerm = $('#search-form-input-term').val();
            $(this).attr("href", 'mailto:Learning_Journey@mckinsey.com?subject=Search Term: ' + searchTerm);
            $(this).trigger('click');
        });
        $('a[href="#unified-search"]').on('click', function() {
            $('#search-feedback-fixed').fadeIn();
        });
        $('a[href="#journey-search"]').on('click', function() {
            $('#search-feedback-fixed').fadeOut();
        });
        $('.search-source-select').selectpicker({
            width: '100%',
            dropupAuto: false
        });
        $('.search-type-select').selectpicker({
            width: '100%',
            size: 4,
            dropupAuto: false
        });
        $('.search-duration-select').selectpicker({
            width: '100%',
            size: 4,
            dropupAuto: false
        });
        $('.search-category-select').selectpicker({
            liveSearch: true,
            width: '100%',
            size: 4,
            dropupAuto: false
        });
        $('.search-status-select').selectpicker({
            width: '100%',
            dropupAuto: false
        });
        
        // Search
        // // Tabs
        $('#tabbed-search ul li a').on('click', function(e) {
            e.preventDefault();
            $(this).tab('show');
        });
        // // Tabs
        $('#tabbed-search-beta ul li a').on('click', function(e) {
            e.preventDefault();
            $(this).tab('show');
        });
        // Search Results
        $('#tabbedSearchContent').hide();
        $('#search-form #search-form-input').on('keypress', function() {
            window.location = "https://githuben.intranet.mckinsey.com/pages/Mathew-Laverty/partner-learning-journey-branded/search/"
        });
        $('#search-form3 #search-form-input').on('keypress', function() {
            $('#tabbedSearchContent').fadeIn();
        });
        $('#journey-unified-search-select').selectpicker({
            width: '100%',
            dropupAuto: false
        });
        $('#journey-learn-search-select').selectpicker({
            width: '100%',
            dropupAuto: false
        });
        $('#journey-search-select').selectpicker({
            width: '100%',
            dropupAuto: false
        });
        $('#journey-search-duration-select').selectpicker({
            width: '100%',
            dropupAuto: false
        });
        $('#journey-expertise-category-select').selectpicker({
            width: '100%',
            dropupAuto: false
        });

        $('#journey-search-expertise, #journey-search-expertise-function, #journey-search-expertise-industry').hide();
        $('#journey-search-select').on('change', function() {
            var journeySearchFilter = $('#journey-search-select option:selected').val();
            var journeySearchFilterShow = "#" + journeySearchFilter;
            if ( journeySearchFilterShow == '#journey-search-expertise' ) {
                $(journeySearchFilterShow).slideDown();
            } else {
                $('#journey-search-expertise').slideUp();
                $(journeySearchFilterShow).slideDown();
            }
            
        });
        $('#journey-expertise-category-select').on('change', function() {
            var journeySearchExpertiseFilter = $('#journey-expertise-category-select option:selected').val();
            var journeySearchExpertiseFilterShow = "#" + journeySearchExpertiseFilter;
            if ( journeySearchExpertiseFilterShow == '#journey-search-expertise-function') {
                $('#journey-search-expertise-industry').slideUp();
                $(journeySearchExpertiseFilterShow).slideDown();     
            } else if ( journeySearchExpertiseFilterShow == '#journey-search-expertise-industry') {
                $('#journey-search-expertise-function').slideUp();
                $(journeySearchExpertiseFilterShow).slideDown();     
            } else {
                $('#journey-search-expertise-function, #journey-search-expertise-industry').slideUp();
            }
        })
        // // Select Filters
        // $('.container-hide').hide();
        // $('#search-category-select').on('change', function() {
        //     var searchFilter = $('#search-category-select option:selected').val();
        //     $('#journey-expertise-function-container, #journey-expertise-industry-container').slideUp();
        //     var searchFilterShow = "#" + searchFilter;
        //     $(searchFilterShow).slideDown();
        // });
        // // Unified search 
        // $('#unified-search').hide();
        // $('#search-results-unified').hide();
        // setInterval(function() {
        //     if ( $('#unified-search-alpha').is(":checked") ) {
        //         $('#unified-search').fadeIn();
        //         $('#search-results-journey').hide();
        //         $('#search-results-unified').fadeIn();
        //         $('#search-journey-page').slideUp();
        //     } else {
        //         $('#unified-search').fadeOut();
        //         $('#search-results-unified').hide();
        //         $('#search-results-journey').fadeIn();
        //         $('#search-journey-page').slideDown();
        //     }   
        // }, 300);
        
        // Search animation
        $('#search-btn').on('click', function() {
            $('#search-close').addClass('open').fadeIn('fast');
        });
        $('#search-close').on('click', function() {
            $('#search-close').removeClass('open').fadeOut('fast');
            $('#searchModal').modal('hide');
        });
        $('#searchModal').on('hidden.bs.modal', function(e) {
            $('#search-close').removeClass('open').fadeOut('fast');
        })

        // Navbar toggle 
        $('.navbar-toggler').on('click', function() {
            $('body').toggleClass('lock');
            $('a.navbar-brand').toggleClass('menu-open');
            $(this).toggleClass('menu-open');
            $('.navbar-toggler-icon').toggleClass('menu-open');
        });

        // User settings panel
        // $('.user-settings-panel').show();
        // // if ( $(window).width() > 767 ) {
        //     $('.user-settings-btn.open').hide();
        //     // $('.user-settings-btn.closed').show();
        //     $('.user-settings-btn.closed').on('click', function() {
        //         $('.user-settings-panel').slideUp(300);
        //         $('.user-settings-btn.closed').hide();
        //         $('.user-settings-btn.open').show();
        //     });
        //     $('.user-settings-btn.open').on('click', function() {
        //         $('.user-settings-panel').stop(true, true).fadeIn({ duration: 300, queue: false }).css('display', 'none').slideDown(300);
        //         $('.user-settings-btn.closed').show();
        //         $('.user-settings-btn.open').hide();
        //     });
        // } else {
        //     $('.user-settings-btn.closed').hide();
        //     // $('.user-settings-btn.open').show();
        //     $('.user-settings-btn.open').on('click', function() {
        //         $('.user-settings-panel').stop(true, true).fadeIn({ duration: 300, queue: false }).css('display', 'none').slideDown(300);
        //         $('.user-settings-btn.open').hide();
        //         $('.user-settings-btn.closed').show();
        //     });
        //     $('.user-settings-btn.closed').on('click', function() {
        //         $('.user-settings-panel').slideUp(300);
        //         $('.user-settings-btn.open').show();
        //         $('.user-settings-btn.closed').hide();
        //     });
        // }
            


        $(document).scroll(function() {
            menuAnimation();
        });

        if ($(window).width() > 1024) {
            // Running parallax & adding video to #hero function if bigger then tablet
            $(document).scroll(function() {
                easyPeasyParallax();
            });

        }
        $(window).on('resize', function() {
            // Running parallax & adding video to #hero function if bigger then tablet
            if ($(window).width() > 1024) {
                $(document).scroll(function() {
                    easyPeasyParallax();
                });
            }
        });

        
        // $(window).on('resize', function() {
        //     if ($(window).width() < 768) {
        //         $('.user-settings-panel').slideUp(300);
        //         $('.user-settings-btn.open').show();
        //         $('.user-settings-btn.closed').hide();

        //     } else {
        //         $('.user-settings-panel').stop(true, true).fadeIn({ duration: 300, queue: false }).css('display', 'none').slideDown(300);
                
        //         $('.user-settings-btn.open').show();
        //         $('.user-settings-btn.closed').hide();
        //     }
        //     if ( $(window).width() > 767 ) {
        //         $('.user-settings-btn.open').hide();
        //         $('.user-settings-btn.closed').show();
        //         $('.user-settings-btn.closed').on('click', function() {
        //             $('.user-settings-panel').slideUp(300);
        //             $('.user-settings-btn.closed').hide();
        //             $('.user-settings-btn.open').show();
        //         });
        //         $('.user-settings-btn.open').on('click', function() {
        //             $('.user-settings-panel').stop(true, true).fadeIn({ duration: 300, queue: false }).css('display', 'none').slideDown(300);
        //             $('.user-settings-btn.closed').show();
        //             $('.user-settings-btn.open').hide();
        //         });
        //     } else {
        //         $('.user-settings-btn.closed').hide();
        //         $('.user-settings-btn.open').show();
        //         $('.user-settings-btn.open').on('click', function() {
        //             $('.user-settings-panel').stop(true, true).fadeIn({ duration: 300, queue: false }).css('display', 'none').slideDown(300);
        //             $('.user-settings-btn.open').hide();
        //             $('.user-settings-btn.closed').show();
        //         });
        //         $('.user-settings-btn.closed').on('click', function() {
        //             $('.user-settings-panel').slideUp(300);
        //             $('.user-settings-btn.open').show();
        //             $('.user-settings-btn.closed').hide();
        //         });
        //     }
        // });

    });

})(jQuery, this);
