$(function() {
  $('.question-inner-box').click(function() {
    var question = $(this).find('.question-hide')
   if(question.hasClass('open')) {
     question.removeClass('poen');
     question.slideUp();
   }else {
    question.addClass('open');
     question.slideDown();
   }
   var fas = $(this).find('.fas');
   if(fas.hasClass('fa-angle-down')) {
     fas.removeClass('fa-angle-down');
     fas.addClass('fa-angle-up');
   }else  {
     fas.removeClass('fa-angle-up');
     fas.addClass('fa-angle-down');
   }
  });
  $('.c-box').click(function() {
    var right = $(this).find('.c-box-right');
    if(right.hasClass('open')) {
      right.removeClass('open');
      right.slideUp();
    }else {
      right.addClass('open');
      right.slideDown();
    }
    var fas = $(this).find('.fas')
    if(fas.hasClass('fa-angle-down')) {
      fas.removeClass('fa-angle-down');
      fas.addClass('fa-angle-up');
    }else {
      fas.removeClass('fa-angle-up');
      fas.addClass('fa-angle-down');
    }
  });
});
$(function () {
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

$(function () {
  $('a[href^="#"]').click(function () {
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});