"use strict";function LiftEffect(e){for(var c=[],o=0;o<e.target.length;o++){var t=$(e.target[o]).offset().top;c.push(t)}function f(o){$(e.control2).children().eq(o).addClass(e.current).siblings().removeClass(e.current)}function r(){var o=$(window).scrollTop();o>=$(e.target[0]).offset().top-100?$(e.control1).fadeIn(500):$(e.control1).fadeOut(500);for(var t,n=0,r=!0,l=0;l<c.length;l++){n++,r=r&&(!(o>=c[c.length-n]-300)||(t=c.length-n,!1))}f(t)}$(window).on("scroll",r),$(e.control2).children().on("click",function(){$(window).off("scroll");var o=$(this).index();f(o);for(var t=!0,n=0;n<c.length;n++)t=t&&(o!=n||($("html,body").stop().animate({scrollTop:c[n]-50},500,function(){$(window).on("scroll",r)}),!1))})}