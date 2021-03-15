$(function() {
  $('.fa-bars').click(function() {
    $('.header-hide').slideDown();
  });
  $('.fa-angle-down').click(function() {
    $('.header-hide').slideUp();
  });
  $('#top-btn').click(function() {
    $('html,body').animate({
      'scrollTop':0
    },500)
  });
  $(function () {
    $('a[href^="#"]').click(function () {
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({ 
        scrollTop: position 
      }, speed, "swing");
      return false;
    });
  });
  $('.works-box-item-inner').hover(
    function() {
      $(this).find('.hide').slideDown();
    },
    function() {
      $(this).find('.hide').slideUp();
    }
  );
  $('.works-icon').click(function() {
    $('.active').removeClass('active');
    var clickindex = $('.works-icon').index($(this));
    $('.works-box-item').eq(clickindex).addClass('active');
  });
  $('.about').find('.fab').hover(
    function() {
      $(this).animate({
        'font-size':'24px'
      },100)
    },
    function() {
      $(this).animate({
        'font-size':'20px'
      },100)
    }
  );
});

$(function() {
  var header01 = $('.header-inner-wrap01');
  $(window).scroll(function() {
    if($(this).scrollTop() > 10) {
      header01.css({
        'background-color':'white',
        'box-shadow':'1px 1px 8px grey'
      });
    }else {
      header01.css('background-color','transparent');
    }
  });

  var skill = $('.skill-inner-box');
  skill.hide();
  $(window).scroll(function() {
    if($(this).scrollTop() > 700) {
      skill.fadeIn(800);
    }else {
      skill.fadeOut(800);
    }
  });

  var works = $('.works-img');
  works.hide();
  $(window).scroll(function() {
    if($(this).scrollTop() > 2000) {
      works.fadeIn(1000);
    }else {
      works.fadeOut(1000);
    }
  });
  let pagetop = $('.totop');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      pagetop.fadeIn(300);
    } else {
      pagetop.fadeOut(300);
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});

