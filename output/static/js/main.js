define("modules/js/main",function(e,n){var s={init:function(){e(["modules/js/swiper"],function(e){new e(".swiper-container",{direction:"vertical",paginationClickable:!0,centeredSlides:!0,autoplayDisableOnInteraction:!1})})}},t={init:function(){e(["modules/js/swiper"],function(e){new e(".swiper-container2",{direction:"vertical",paginationClickable:!0,loop:!0,centeredSlides:!0,autoplay:2500,autoplayDisableOnInteraction:!1})})}},i={init:function(n,s,t){e(["components/zepto/main","components/zepto/touch"],function(e){e(n).tap(function(){e(t).css("display","block")}),e(s).tap(function(){e(t).css("display","none")})})}},o={init:function(n,s,t,i){e(["components/zepto/main","components/zepto/touch"],function(e){e(n).on("tap",function(){e(this).children().toggleClass(i),e(this).next().toggleClass(t)})})}},a={init:function(n){e(["pikaday/pikaday"],function(e){new e(n)})}},l={init:function(n,s){e(["components/zepto/main","components/zepto/touch"],function(e){e(n).tap(function(){e(n).eq(e(this).index()).addClass("active").siblings().removeClass("active"),e(s).eq(e(this).index()).addClass("show").siblings().removeClass("show")})})}},c={init:function(n,s,t,i){e(["components/zepto/main","components/zepto/touch"],function(e){e(n).tap(function(){e(s).addClass("fadeIn"),e(t).addClass("mySilderdown"),e(i).addClass("mySilderdown")}),e(i).tap(function(){e(s).removeClass("fadeIn"),e(t).removeClass("mySilderdown"),e(i).removeClass("mySilderdown")})})}},r={init:function(n,s){e(["components/zepto/zepto","modules/js/drawer"],function(e){e(n).drawer({model:e(s),dimens:{width:"50%"},dir:"left"})})}},d={init:function(n,s){e(["components/zepto/main"],function(e){pass=0;{var t=/^1(3|4|5|7|8)\d{9}$/;e(s).value}e(s).keyup(function(){return""==this.value?(pass=0,e(s).siblings(".tips").removeClass("tips-in"),e(s).removeClass("error"),!1):void(t.test(this.value)?(pass=pass++,e(s).removeClass("error"),e(s).siblings(".tips").removeClass("tips-in")):(pass=0,e(s).addClass("error"),e(s).siblings(".tips").addClass("tips-in")))}),e(n).blur(function(){return e(n).eq(0).hasClass("error")&&e(n).eq(1).hasClass("error")&&e(n).eq(2).hasClass("error")&&e(n).eq(e(n).length-1).removeClass("active"),e(n).eq(0).hasClass("error")&&e(n).eq(1).hasClass("error")&&e(n).eq(2).hasClass("error")||e(n).eq(e(n).length-1).removeClass("active"),""==this.value?(e(this).siblings(".tips").addClass("tips-in"),e(this).addClass("error"),!1):void 0}),e(n).focus(function(){e(this).siblings(".tips").removeClass("tips-in"),e(this).removeClass("error")})})}},p={init:function(){e(["modules/js/jquery.min"],function(e){e(".select-area .select-value").each(function(){0!=e(this).next("select").find("option:selected").length&&e(this).text(e(this).next("select").find("option:selected").text())}),e(".select-area select").change(function(){var n=e(this).find("option:selected").text();e(this).parent(".select-area").find(".select-value").text(n)})})}},u={init:function(n){e(["components/zepto/main"],function(e){e(n).click(function(){console.log(pass)})})}};n.Test=u,n.Select=p,n.CheckTel=d,n.Offcanvas=r,n.Slide=s,n.Slide2=t,n.Show=i,n.Datepicker=a,n.Tab=l,n.Alert=c,n.Toggle=o});