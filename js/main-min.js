!function($,e,t){function s(){scrollPos=$(this).scrollTop(),$(".hero-bg").css({"background-position":"center "+(0+scrollPos/2)+"px"}),$(".hero-person").css({"background-position":"center "+(0+scrollPos/3)+"px"}),$(".hero-branding").css({"background-position":"center "+(0+scrollPos/4)+"px"}),$("h1.page-title").css({top:0+scrollPos/3+"px"}),$(".page-sub-title").css({top:0+scrollPos/3+"px"}),$("button#watch-video").css({top:0+scrollPos/3+"px"}),$(".mck-btn-launch").css({top:0+scrollPos/3+"px"}),$("p.user-details").css({top:0+scrollPos/3+"px"})}function o(){$(document).scrollTop()>=80?($("nav.navbar").addClass("scrolled"),$("a.navbar-brand").addClass("scrolled"),$(".navbar-toggler").addClass("scrolled"),$(".navbar-toggler-icon").addClass("scrolled"),$("#navbarCollapse").addClass("scrolled"),$("#search-box").addClass("scrolled"),$("#avatar-btn").addClass("scrolled")):($("nav.navbar").removeClass("scrolled"),$("a.navbar-brand").removeClass("scrolled"),$(".navbar-toggler").removeClass("scrolled"),$(".navbar-toggler-icon").removeClass("scrolled"),$("#navbarCollapse").removeClass("scrolled"),$("#search-box").removeClass("scrolled"),$("#avatar-btn").removeClass("scrolled"))}function i(){$("nav.navbar").removeClass("fadeInDown"),$("#hero").removeClass("fadeInDownBig"),$("#main-content").removeClass("fadeInUp"),$("footer").removeClass("fadeInUp"),$("nav.navbar").addClass("fadeOutUp zero-delay"),$("#hero").addClass("fadeOutUpBig zero-delay"),$("#main-content").addClass("fadeOutDown zero-delay"),$("footer").addClass("fadeOutDown zero-delay")}$(function(){$(".non-partner-dropdown").hide(),$("#partner-toggle-switch, #partner-toggle-switch-btn").on("click",function(){1==$(this).prop("checked")?($(".partner-dropdown").hide(),$(".non-partner-dropdown").show()):0==$(this).prop("checked")&&($(".partner-dropdown").show(),$(".non-partner-dropdown").hide())}),$("#hero-carousel").carousel({interval:9e3,pause:"hover"}),$(".labelauty-checkbox:checkbox").labelauty(),$(".labelauty-checkbox:radio").labelauty(),$("#core-scroll").Scrollos(),$("#expertise-scroll").Scrollos(),$("#expertise1-scroll").Scrollos(),$("#expertise2-scroll").Scrollos(),$("#electives-scroll").Scrollos(),$(".progress .progress-bar").progressbar({transition_delay:2e3}),$.fn.isInViewport=function(){var e=$(this).offset().top,t=e+$(this).outerHeight(),s=$(window).scrollTop(),o=s+$(window).height();return t>s&&e<o},$(window).on("resize scroll",function(){$("#feedback-hero").isInViewport()&&$("#feedback-hero").addClass("fadeInUp")}),$(".scroll-more-core").hide(),setTimeout(function(){var e=0;$("ul#core-categories").children("li").each(function(){e+=$(this).outerWidth()+40}),e>$(window).width()?$(".scroll-more-core").slideDown():$(".scroll-more-core").slideUp()},1e3),$(window).on("resize",function(){var e=0;$("ul#core-categories").children("li").each(function(){e+=$(this).outerWidth()+40}),e>$(window).width()?$(".scroll-more-core").slideDown():$(".scroll-more-core").slideUp();var t=0;$("ul#expertise-categories").children().each(function(){t+=$(this).outerWidth()+40}),t>$(window).width()?$(".scroll-more-expertise").slideDown():$(".scroll-more-expertise").slideUp();var s=0;$("ul#expertise-functional-subcategories").children().each(function(){s+=$(this).outerWidth()+40}),s>$(window).width()?$(".scroll-more-expertise1").slideDown():$(".scroll-more-expertise1").slideUp();var o=0;$("ul#expertise-industry-subcategories").children().each(function(){o+=$(this).outerWidth()+40}),o>$(window).width()?$(".scroll-more-expertise2").slideDown():$(".scroll-more-expertise2").slideUp();var i=0;$("ul#electives-categories").children("li:not(.hidden-category)").each(function(){i+=$(this).outerWidth()+40}),i>$(window).width()?$(".scroll-more-electives").slideDown():$(".scroll-more-electives").slideUp()}),$(".modal").on("show.bs.modal",function(e){$(".wrapper").addClass("modal-blur")}),$(".modal").on("hidden.bs.modal",function(e){$(".wrapper").removeClass("modal-blur")}),$("#hide-hero").on("click",function(){$("#hero").toggleClass("removed"),$("#hide-hero .hide").toggleClass("hidden-hide"),$("#hide-hero .show").toggleClass("hidden-show"),$(this).toggleClass("collapsed")}),$("#journey-tabs a").on("click",function(e){e.preventDefault(),e.stopImmediatePropagation(),"#core-main-tab"!=$(this).attr("href")?($("body, html").animate({scrollTop:0},"slow"),setTimeout(function(){$("#hero").hasClass("removed")||($("#hero").addClass("collapsed"),$("#hide-hero").addClass("hidden"))},1e3)):($("body, html").animate({scrollTop:0},"slow"),setTimeout(function(){$("#hero").hasClass("removed")||($("#hero").removeClass("collapsed"),$("#hide-hero").removeClass("hidden"))},1e3)),$(this).tab("show"),setTimeout(function(){var e=0;$("ul#core-categories").children("li").each(function(){e+=$(this).outerWidth()+40}),e>$(window).width()?$(".scroll-more-core").slideDown():$(".scroll-more-core").slideUp();var t=0;$("ul#expertise-categories").children().each(function(){t+=$(this).outerWidth()+40}),t>$(window).width()?$(".scroll-more-expertise").slideDown():$(".scroll-more-expertise").slideUp();var s=0;$("ul#expertise-functional-subcategories").children().each(function(){s+=$(this).outerWidth()+40}),s>$(window).width()?($(".scroll-more-expertise1").slideDown(),$("#expertise1-scroll .scrollos-container").attr("data-overflowing","right")):$(".scroll-more-expertise1").slideUp();var o=0;$("ul#expertise-industry-subcategories").children().each(function(){o+=$(this).outerWidth()+40}),o>$(window).width()?($(".scroll-more-expertise2").slideDown(),$("#expertise2-scroll .scrollos-container").attr("data-overflowing","right")):$(".scroll-more-expertise2").slideUp();var i=0;$("ul#electives-categories").children("li:not(.hidden-category)").each(function(){i+=$(this).outerWidth()+40}),i>$(window).width()?($(".scroll-more-electives").slideDown(),$("#electives-scroll .scrollos-container").attr("data-overflowing","right")):$(".scroll-more-electives").slideUp()},1e3),setInterval(function(){$("#core-scroll").Scrollos(),$("#expertise-scroll").Scrollos(),$("#expertise1-scroll").Scrollos(),$("#expertise2-scroll").Scrollos(),$("#electives-scroll").Scrollos()},1e3)}),$("#industry-tab").on("click",function(){$("#expertise2-scroll .scrollos-container").attr("data-overflowing","right")}),$("#avatar-btn").on("click",function(){$("#avatar-btn .dropdown-settings").toggleClass("open")}),$(".office-select").selectpicker({liveSearch:!0,width:"100%",size:4,dropupAuto:!1}),$(".role-select").selectpicker({width:"100%",dropupAuto:!1}),$(".path-select").selectpicker({liveSearch:!0,width:"100%",size:4,dropupAuto:!1}),$(".partner-select").selectpicker({width:"100%",dropupAuto:!1}),$(".unhide-course").on("click",function(){$(this).parent().slideUp()}),$("#settings-toggle").on("click",function(){$(this).parent().toggleClass("open")}),$(".resources-show").hide(),$(".resources-hide").on("click",function(){$(this).hide(),$(this).next().show(),$(this).parent().parent().next().slideUp()}),$(".resources-show").on("click",function(){$(this).hide(),$(this).prev().show(),$(this).parent().parent().next().slideDown()}),$(".catalog-hide").hide(),$(".catalog-hide").on("click",function(){$(this).hide(),$(this).next().show(),$(this).parent().parent().next().slideUp()}),$(".catalog-show").on("click",function(){$(this).hide(),$(this).prev().show(),$(this).parent().parent().next().slideDown()}),$(".course-comment-icon-fill").hide(),$(".course-comment").on("click",function(){$("#launchCommentsModal").modal("show")}),$("#core-categories a").on("click",function(e){e.preventDefault(),$(this).tab("show")});var e=$("#core-categories");$("#core-categories li > a").on("click",function(t){t.preventDefault();var s=$(this);e.find("li > a").removeClass("active"),s.addClass("active");var o=s.offset().left,i=s.outerWidth(!0),r=e.scrollLeft(),n=e.width(),c=o+i/2+r-n/2-30;e.animate({scrollLeft:c},1e3),t.stopImmediatePropagation()}),$('[data-toggle="tooltip"]').tooltip(),$(".course-minus").hide(),$(".course-plus").on("click",function(){$(this).hide(),$(this).next().show(),$(this).parent().next().children(".course-description").slideDown()}),$(".course-minus").on("click",function(){$(this).hide(),$(this).prev().show(),$(this).parent().next().children(".course-description").slideUp()}),$(".course-extras-icon-fill").hide(),$(".course-extras-icon").on("click",function(){$(this).hide(),$(this).next().show()}),$(".course-extras-icon-fill").on("click",function(){$(this).hide(),$(this).prev().show()}),$(".course-contextual-menu").hide(),$(".course-menu-icon").on("click",function(){$(this).next().fadeToggle()}),$(".dd-core-types").selectpicker({width:"100%",dropupAuto:!1,height:10}),$(".dd-core-levels").selectpicker({width:"100%",dropupAuto:!1,height:10}),$(".dd-core-duration").selectpicker({width:"100%",dropupAuto:!1,height:10}),$(".dd-core-statuses").selectpicker({width:"100%",dropupAuto:!1,height:10}),$("#hero-carousel a.carousel-control-prev").on("click",function(e){e.stopImmediatePropagation(),$("#hero-carousel").carousel("prev")}),$("#hero-carousel a.carousel-control-next").on("click",function(e){e.stopImmediatePropagation(),$("#hero-carousel").carousel("next")}),$("#hero-carousel").swipe({swipeRight:function(){$(this).carousel("prev")},swipeLeft:function(){$(this).carousel("next")}}),$(window).width()<991?$("#completion-circle").removeClass("big"):$(window).width()<768?$("#completion-circle").removeClass("big"):$("#completion-circle").addClass("big"),$(window).on("resize",function(){$(window).width()<991?$("#completion-circle").removeClass("big"):$(window).width()<768?$("#completion-circle").removeClass("big"):$("#completion-circle").addClass("big")}),$("#expertise-functional-subcategories a").on("click",function(e){e.preventDefault(),$(this).tab("show"),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top+700},1e3)});var t=$("#expertise-functional-subcategories");$("#expertise-functional-subcategories li > a").on("click",function(e){e.preventDefault();var s=$(this);t.find("li > a").removeClass("active"),s.addClass("active");var o=s.offset().left,i=s.outerWidth(!0),r=t.scrollLeft(),n=t.width(),c=o+i/2+r-n/2-30;t.animate({scrollLeft:c},1e3),e.stopImmediatePropagation()}),$("#expertise-industry-subcategories a").on("click",function(e){e.preventDefault(),$(this).tab("show"),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top+700},1e3)});var i=$("#expertise-industry-subcategories");$("#expertise-industry-subcategories li > a").on("click",function(e){e.preventDefault();var t=$(this);i.find("li > a").removeClass("active"),t.addClass("active");var s=t.offset().left,o=t.outerWidth(!0),r=i.scrollLeft(),n=i.width(),c=s+o/2+r-n/2-30;i.animate({scrollLeft:c},1e3),e.stopImmediatePropagation()}),$("body.v1 #expertise-categories a:not(#newventures-tab)").on("click",function(e){e.preventDefault(),$(this).tab("show"),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top+555},1e3)}),$("body.v2 #expertise-categories a:not(#newventures-tab), body.v3 #expertise-categories a:not(#newventures-tab)").on("click",function(e){e.preventDefault(),$(this).tab("show"),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top+575},1e3)}),$("#expertise-categories a#newventures-tab").on("click",function(e){e.preventDefault(),$(this).tab("show"),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top+565},1e3)});var r=$("#expertise-categories");$("#expertise-categories li > a").on("click",function(e){e.preventDefault();var t=$(this);r.find("li > a").removeClass("active"),t.addClass("active");var s=t.offset().left,o=t.outerWidth(!0),i=r.scrollLeft(),n=r.width(),c=s+o/2+i-n/2-30;r.animate({scrollLeft:c},1e3),e.stopImmediatePropagation()}),$(".dd-expertise-subcategories").selectpicker({liveSearch:!0,width:"100%",dropupAuto:!1,height:4}),$(".dd-expertise-types").selectpicker({width:"100%",dropupAuto:!1,height:10}),$(".dd-expertise-duration").selectpicker({width:"100%",dropupAuto:!1,height:10}),$(".dd-expertise-level").selectpicker({width:"100%",dropupAuto:!1,height:10}),$(".dd-expertise-statuses").selectpicker({width:"100%",dropupAuto:!1,height:10}),$(".expertise-sub-category-select").selectpicker({liveSearch:!0,width:"100%",dropupAuto:!1,height:4}),$(".expertise-sub-sector-select").selectpicker({liveSearch:!0,width:"100%",dropupAuto:!1,height:4}),$(".select-hide").hide(),$("#function-select").on("change",function(){var e=$("#function-select option:selected").val();$(".expertise-sub-sector-select").hide();var t="#"+e;console.log(t),$(t).parent().show()}),$("#industry-select").on("change",function(){var e=$("#industry-select option:selected").val();$(".expertise-sub-sector-select").hide(),$("#"+e).parent().show()}),$('#electives-categories a[data-toggle="tab"]').on("click",function(e){e.preventDefault(),$(this).tab("show"),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top+585},1e3)}),$("#cat-show-more a").on("click",function(){$(".hidden-category").removeClass("cat-hide"),$(".shown-category").removeClass("cat-show"),$(".hidden-category").addClass("cat-show"),$(".shown-category").addClass("cat-hide"),setTimeout(function(){var e=0;$("ul#electives-categories").children().each(function(){e+=$(this).outerWidth()+40}),e>$(window).width()?($(".scroll-more-electives").slideDown(),$("#electives-scroll .scrollos-container").attr("data-overflowing","right")):$(".scroll-more-electives").slideUp()},1e3)}),$("#cat-show-less a").on("click",function(){$(".hidden-category").removeClass("cat-show"),$(".shown-category").removeClass("cat-hide"),$(".hidden-category").addClass("cat-hide"),$(".shown-category").addClass("cat-show"),setTimeout(function(){var e=0;$("ul#electives-categories").children().each(function(){e+=$(this).outerWidth()+40}),e>$(window).width()?($(".scroll-more-electives").slideDown(),$("#electives-scroll .scrollos-container").attr("data-overflowing","right")):$(".scroll-more-electives").slideUp()},1e3)}),$(".dd-electives-types").selectpicker({width:"100%",dropupAuto:!1,height:10}),$(".dd-electives-duration").selectpicker({width:"100%",dropupAuto:!1,height:10}),$(".dd-electives-level").selectpicker({width:"100%",dropupAuto:!1,height:10}),$(".dd-electives-statuses").selectpicker({width:"100%",dropupAuto:!1,height:10}),$(".owl-carousel").owlCarousel({fluidSpeed:1e3,smartSpeed:1e3,autoplay:!0,autoplayHoverPause:!0,autoplayTimeout:7e3,margin:20,loop:!0,nav:!0,responsive:{0:{items:1},768:{items:2},991:{items:3}}}),$(".qdl-resource .course-description").hide(),$(".journey-unified-search-select").keypress(function(e){13==e.which&&$(".journey-unified-search-select").selectpicker("hide")}),$("#search-feedback-fixed-link").on("click",function(e){var t=$("#search-form-input-term").val();$(this).attr("href","mailto:Learning_Journey@mckinsey.com?subject=Search Term: "+t),$(this).trigger("click")}),$('a[href="#unified-search"]').on("click",function(){$("#search-feedback-fixed").fadeIn()}),$('a[href="#journey-search"]').on("click",function(){$("#search-feedback-fixed").fadeOut()}),$(".search-source-select").selectpicker({width:"100%",dropupAuto:!1}),$(".search-type-select").selectpicker({width:"100%",size:4,dropupAuto:!1}),$(".search-duration-select").selectpicker({width:"100%",size:4,dropupAuto:!1}),$(".search-category-select").selectpicker({liveSearch:!0,width:"100%",size:4,dropupAuto:!1}),$(".search-status-select").selectpicker({width:"100%",dropupAuto:!1}),$("#tabbed-search ul li a").on("click",function(e){e.preventDefault(),$(this).tab("show")}),$("#tabbed-search-beta ul li a").on("click",function(e){e.preventDefault(),$(this).tab("show")}),$("#search-results").hide(),$("#search-form-input").on("keypress",function(){window.location.href="search/"}),$("#journey-unified-search-select").selectpicker({width:"100%",dropupAuto:!1}),$("#journey-learn-search-select").selectpicker({width:"100%",dropupAuto:!1}),$("#journey-search-select").selectpicker({width:"100%",dropupAuto:!1}),$("#journey-search-duration-select").selectpicker({width:"100%",dropupAuto:!1}),$("#journey-expertise-category-select").selectpicker({width:"100%",dropupAuto:!1}),$("#journey-search-expertise, #journey-search-expertise-function, #journey-search-expertise-industry").hide(),$("#journey-search-select").on("change",function(){var e=$("#journey-search-select option:selected").val(),t="#"+e;"#journey-search-expertise"==t?$(t).slideDown():($("#journey-search-expertise").slideUp(),$(t).slideDown())}),$("#journey-expertise-category-select").on("change",function(){var e=$("#journey-expertise-category-select option:selected").val(),t="#"+e;"#journey-search-expertise-function"==t?($("#journey-search-expertise-industry").slideUp(),$(t).slideDown()):"#journey-search-expertise-industry"==t?($("#journey-search-expertise-function").slideUp(),$(t).slideDown()):$("#journey-search-expertise-function, #journey-search-expertise-industry").slideUp()}),$("#search-btn").on("click",function(){$("#search-close").addClass("open").fadeIn("fast")}),$("#search-close").on("click",function(){$("#search-close").removeClass("open").fadeOut("fast"),$("#searchModal").modal("hide")}),$("#searchModal").on("hidden.bs.modal",function(e){$("#search-close").removeClass("open").fadeOut("fast")}),$(".navbar-toggler").on("click",function(){$("body").toggleClass("lock"),$("a.navbar-brand").toggleClass("menu-open"),$(this).toggleClass("menu-open"),$(".navbar-toggler-icon").toggleClass("menu-open")}),$(window).width()>767?($(".user-settings-btn.open").hide(),$(".user-settings-btn.closed").on("click",function(){$(".user-settings-panel").slideUp(300),$(".user-settings-btn.closed").hide(),$(".user-settings-btn.open").show()}),$(".user-settings-btn.open").on("click",function(){$(".user-settings-panel").stop(!0,!0).fadeIn({duration:300,queue:!1}).css("display","none").slideDown(300),$(".user-settings-btn.closed").show(),$(".user-settings-btn.open").hide()})):($(".user-settings-btn.closed").hide(),$(".user-settings-btn.open").on("click",function(){$(".user-settings-panel").stop(!0,!0).fadeIn({duration:300,queue:!1}).css("display","none").slideDown(300),$(".user-settings-btn.open").hide(),$(".user-settings-btn.closed").show()}),$(".user-settings-btn.closed").on("click",function(){$(".user-settings-panel").slideUp(300),$(".user-settings-btn.open").show(),$(".user-settings-btn.closed").hide()})),$(document).scroll(function(){o()}),$(window).width()>1024&&$(document).scroll(function(){s()}),$(window).on("resize",function(){$(window).width()>1024&&$(document).scroll(function(){s()})}),$(window).on("resize",function(){$(window).width()<768?($(".user-settings-panel").slideUp(300),$(".user-settings-btn.open").show(),$(".user-settings-btn.closed").hide()):($(".user-settings-panel").stop(!0,!0).fadeIn({duration:300,queue:!1}).css("display","none").slideDown(300),$(".user-settings-btn.open").show(),$(".user-settings-btn.closed").hide()),$(window).width()>767?($(".user-settings-btn.open").hide(),$(".user-settings-btn.closed").show(),$(".user-settings-btn.closed").on("click",function(){$(".user-settings-panel").slideUp(300),$(".user-settings-btn.closed").hide(),$(".user-settings-btn.open").show()}),$(".user-settings-btn.open").on("click",function(){$(".user-settings-panel").stop(!0,!0).fadeIn({duration:300,queue:!1}).css("display","none").slideDown(300),$(".user-settings-btn.closed").show(),$(".user-settings-btn.open").hide()})):($(".user-settings-btn.closed").hide(),$(".user-settings-btn.open").show(),$(".user-settings-btn.open").on("click",function(){$(".user-settings-panel").stop(!0,!0).fadeIn({duration:300,queue:!1}).css("display","none").slideDown(300),$(".user-settings-btn.open").hide(),$(".user-settings-btn.closed").show()}),$(".user-settings-btn.closed").on("click",function(){$(".user-settings-panel").slideUp(300),$(".user-settings-btn.open").show(),$(".user-settings-btn.closed").hide()}))})})}(jQuery,this);