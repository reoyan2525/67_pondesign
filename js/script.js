$(function() {

  //main-visualの高さをresizeで調整
  var windowHeight = $(window).height();
  $('.main-visual').height(windowHeight);
  
  $(window).resize(function(){
    var windowHeight = $(window).height();
    $('.main-visual').height(windowHeight);
  });

  //scrollさせるとHeader要素背景に着色
  $(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop(); // 現在のスクロール位置を取得
    if (scrollPosition > 100) {
      $('.header-inner').addClass('__isActive'); // 100px以上スクロールしたらクラスを追加
    } else {
      $('.header-inner').removeClass('__isActive'); // 100px未満ならクラスを削除
    }
  });

  // ハンバーガーメニュー初期化
  var $header = $('header');
  var $hamburgerMenu = $('.hamburger-menu');
  var headerHeight = $header.outerHeight();
  var isMenuOpen = false; // ハンバーガーメニューが開いているかどうか

  // ハンバーガーメニューボタンのクリックイベント
  $hamburgerMenu.on('click', function () {
    if(!isMenuOpen){
      $(this).addClass('open');
      $('.header-gnav').addClass('is-show');
    }
    else{
      $(this).removeClass('open');
      $('.header-gnav').removeClass('is-show');
    }
    isMenuOpen = !isMenuOpen;
  });

  /*TOPへスクロールするボタンの処理 */
  $(function () {
    const $pageTop = $("#js-pagetop");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $pageTop.fadeIn(300).css('display', 'flex');
        } else {
            $pageTop.fadeOut(300);
        }
    });

    $pageTop.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
  });

});



