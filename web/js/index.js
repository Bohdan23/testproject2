$(document).ready(function(){new Swiper(".swiper-container",{direction:"vertical",loop:!0,pagination:{el:".swiper-pagination"},speed:900,autoplay:!0});function t(){$(window).trigger("resize").trigger("scroll")}$(".hamburger").on("click",function(){$(this).toggleClass("active"),$(this).hasClass("active")?$(".header__nav").addClass("active"):$(".header__nav").removeClass("active")}),$(window).on("resize",t()),$(".portfolio__filter-button").on("click",function(){$(".portfolio__filter-button.active").removeClass("active"),$(this).addClass("active"),setTimeout(t,600)}),$(".portfolio__block").on("click",function(){var t=$(this).find(".main-img").attr("src"),e=$(this).find(".portfolio__block-name").text();$(".modal-wrapper").addClass("active"),$(".modal-content").attr("src",t),$(".modal-caption").text(e)}),$(".modal-wrapper").on("click",".modal-close",function(){$(".modal-wrapper").removeClass("active")}),$(".modal-wrapper").on("click",function(t){var e=$(".modal-wrapper");e.is(t.target)&&e.removeClass("active")}),$(function(){$(".portfolio__wrapper").mixItUp({selectors:{target:".mix",filter:".portfolio__filter-button"},load:{filter:"all"},controls:{enable:!0,activeClass:"on"},animation:{enable:!0,effects:"fade translateZ(-100px)",duration:300}})}),$(".text-wrapper").find("input, textarea").focusout(function(){""!=$(this).val()?$(this).siblings("span").addClass("focused"):""==$(this).val()&&$(this).siblings("span").removeClass("focused")}),$(".header__nav").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href"),a=$(e).offset().top+1;$("body, html").animate({scrollTop:a},1500)}),$(document).on("scroll",function(){var t=$(document).scrollTop();$(".header__nav a").each(function(){var e=$(this).attr("href"),a=$(e);a.position().top<=t&&a.position().top+a.outerHeight()>t?($(".header__nav li.active").removeClass("active"),$(this).parent("li").addClass("active")):$(this).parent("li").removeClass("active")}),$(window).scrollTop()>100?$(".header").addClass("sticky"):$(".header").removeClass("sticky")})});