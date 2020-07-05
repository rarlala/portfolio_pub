$(function () {
  //first-view 끝난 다음 동작 실행
  setTimeout(function () {
    $('html, body').animate({
      scrollTop: 0,
    });
    $('header').css({
      position: 'fixed',
    });
    $('.first-view').css({
      display: 'none',
    });
    $('header, #intro, #portFolio').animate({
      opacity: 1,
    });
  }, 4200);

  // 계단 보여주기
  $('#intro .stair-img-area > div >div').each(function (i) {
    $(this)
      .stop(true)
      .delay(5000 + i * 100)
      .animate(
        {
          opacity: 1,
        },
        1000
      );
  });

  // mobile-menu

  $('.btn-mobile-menu').on('click', function () {
    $('nav.mobile-menu').css({ right: '0%' });
    $('.btn-mobile-menu').css({ 'z-index': 100 });
    $('.btn-mobile-menu').addClass('close');
    $('.dark-bg').css({ display: 'block' });
  });

  $('.dark-bg, .btn-mobile-menu.close, .mobile-menu li').on('click', function () {
    $('nav.mobile-menu').css({ right: '-50%' });
    $('.btn-mobile-menu.close').removeClass('close');
    $('.dark-bg').css({ display: 'none' });
  });

  // 스크롤 이벤트
  $(window).scroll(function () {
    var scrollPosition = $(window).height() + $(window).scrollTop();

    var $menuHome = $('header nav.menu li:first-child');
    var $menuPortFolio = $('header nav.menu li:nth-child(2)');
    var $menuContact = $('header nav.menu li:nth-child(3)');

    var homePosition = $('#intro').offset().top;
    var introPosition = $('#portFolio').offset().top;
    var contactPosition = $('#contact').offset().top;

    var portFolioOnePosition = $('.portFolio-content.one').offset().top;
    var portFolioTwoPosition = $('.portFolio-content.two').offset().top;
    var portFolioThreePosition = $('.portFolio-content.three').offset().top;

    //메뉴 영역 위치 시 hover 효과 처리
    activeMenu($menuHome, homePosition);
    activeMenu($menuPortFolio, introPosition);
    activeMenu($menuContact, contactPosition);

    function activeMenu(selector, position) {
      if (scrollPosition >= position + 250) {
        var index = $('header nav.menu li').index(selector);

        $('header nav.menu li').removeClass('active');
        $(selector).addClass('active');

        $('header nav.mobile-menu li').removeClass('active');
        $(`header nav.mobile-menu li:nth-child(${index + 1})`).addClass('active');
      }
    }

    // 포트폴리오 화면 내 영역 위치시 보여지도록 처리
    showPortFolio('.portFolio-content.one', portFolioOnePosition);
    showPortFolio('.portFolio-content.two', portFolioTwoPosition);
    showPortFolio('.portFolio-content.three', portFolioThreePosition);

    function showPortFolio(selector, position) {
      if (scrollPosition >= position) {
        $(selector).animate(
          {
            top: 0,
            opacity: 1,
          },
          1000
        );
      }
    }

    if (scrollPosition > 80) {
      $('header .logo').animate(
        {
          left: '0',
          opacity: 1,
        },
        1000
      );

      $('header .logo-name').animate(
        {
          left: '-300px',
          opacity: 0,
        },
        1000
      );
    } else {
      $('header .logo').animate(
        {
          left: '-300px',
          opacity: 0,
        },
        1000
      );

      $('header .logo-name').animate(
        {
          left: 0,
          opacity: 1,
        },
        1000
      );
    }
  });
});
