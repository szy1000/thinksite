// SuperSlide
var Slide = {
  init: function (op) {
    require(['js/swiper'], function (Swiper) {
      var mySwiper = new Swiper ('.swiper-container', {
        direction : 'vertical',
        // pagination: '.swiper-pagination',
        paginationClickable: true,
        // loop: true,
        centeredSlides: true,
        // autoplay: 2500,
        autoplayDisableOnInteraction: false
      })        
    })
  }
}

var Slide2 = {
  init: function (op) {
    require(['js/swiper'], function (Swiper) {
      var mySwiper = new Swiper ('.swiper-container2', {
        direction : 'vertical',
        paginationClickable: true,
        loop: true,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
      })        
    })
  }
}
//show
var Show = {
  init:function(ele,close,overlay){
    require(['zepto','zepto/touch'],function($,tap){
      $(ele).tap(function(){
        $(overlay).css('display','block');
      });
      $(close).tap(function(){
        $(overlay).css('display','none');
        // $(close).css('display','none');
      })
    })
  }
}
//Toggle
var Toggle = {
  init:function(control,box,cls,cls2){
    require(['zepto','zepto/touch'],function($,tap){
      $(control).on('tap',function(){
        $(this).children().toggleClass(cls2);
        $(this).next().toggleClass(cls);
      })
    })
  }
}
// Pikaday
var Datepicker = {
  init: function (op) {
    require(['pikaday/pikaday'], function (Pikaday) {
      var picker = new Pikaday(op);
    })
  }
}

// Tab
var Tab = {
  init: function(e,content) {
    require(['zepto', 'zepto/touch'], function ($, tap) {
      $(e).tap(function () {
        // console.log($(this).index());
        // $(e).children().eq($(this).index()).addClass('active').siblings().removeClass('active')
        $(e).eq($(this).index()).addClass('active').siblings().removeClass('active')
        $(content).eq($(this).index()).addClass('show').siblings().removeClass('show');
      })
    })
  }
}

//Alert
var Alert ={
  init : function (open ,overlay,block,close) {
    require(['zepto','zepto/touch'],function($,tap){
      $(open).tap(function(){
        $(overlay).addClass('fadeIn');
        $(block).addClass('mySilderdown');
        $(close).addClass('mySilderdown');
      })
      $(close).tap(function(){
        $(overlay).removeClass('fadeIn');
        $(block).removeClass('mySilderdown');
        $(close).removeClass('mySilderdown');
      })
    })
  }
}
//Offcanvas
var Offcanvas ={
  init: function(trigger,drawer){
    require(['zepto/zepto','js/drawer'],function($, draw){
      $(trigger).drawer({
        "model": $(drawer),
        "dimens": {
        "width": "50%"
        },
        "dir": "left"
    });
  
    })
  }
}


var CheckTel = {
  init: function(ipt,tel,psd){
    require(['zepto'],function($){
      pass = 0;
      var telReg = /^1(3|4|5|7|8)\d{9}$/;
      var value = $(tel).value;
      $(tel).keyup(function(){
        if(this.value == ''){
          pass = 0;
          $(tel).siblings('.tips').removeClass('tips-in');
          $(tel).removeClass('error');
          return false;
        }else{
          if(telReg.test(this.value)){
            pass = pass++;
            $(tel).removeClass('error');
            $(tel).siblings('.tips').removeClass('tips-in');
          }else{
            pass = 0;
            $(tel).addClass('error');
            $(tel).siblings('.tips').addClass('tips-in')
          }
        }
      })

      $(ipt).blur(function(){
        if( $(ipt).eq(0).hasClass('error') &&
            $(ipt).eq(1).hasClass('error') &&
            $(ipt).eq(2).hasClass('error')  ){
            $(ipt).eq($(ipt).length-1).removeClass('active');
        } 

        if( !$(ipt).eq(0).hasClass('error') ||
           !$(ipt).eq(1).hasClass('error') ||
            !$(ipt).eq(2).hasClass('error')  ){
            $(ipt).eq($(ipt).length-1).removeClass('active');
        } 

        if(this.value == ''){
          $(this).siblings('.tips').addClass('tips-in');
          $(this).addClass('error');
          return false;
        } 
        
      })
      $(ipt).focus(function(){
        $(this).siblings('.tips').removeClass('tips-in');
        $(this).removeClass('error');
      })
    })
  }
}

var Test = {
  init: function(el){
    require(['zepto'],function($){
      $(el).click(function(){
        console.log(pass);
      })
    })
  }
}

exports.Test = Test;
exports.CheckTel = CheckTel;
exports.Offcanvas =Offcanvas;
exports.Slide = Slide;
exports.Slide2 = Slide2;
exports.Show = Show;
exports.Datepicker = Datepicker;
exports.Tab = Tab;
exports.Alert = Alert;
exports.Toggle = Toggle;