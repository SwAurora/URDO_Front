$(document).ready(function () {


  $('.menu-level2 li').on('click', function() {
    idx = $(this).index();
    alert(idx);
    $('.l2-list').removeClass('on');
    $('.l2-list').eq(idx).addClass('on');
    $('.tabContents').removeClass('on');
    $('.tabContents').eq(idx).addClass('on');
  })


  $('#prev').on('click', function() {
    idx3=$('.page_num.on').index();
    if(idx3-1 >=0) {
      $('.page_num').removeClass('on');
      $('.page_num').eq(idx3-1).addClass('on');
      // 페이지컨텐츠를 구성하지 않았음
    }
  })
  $('#next').on('click', function() {
    end = $('.page_num').length - 1;
    idx3=$('.page_num.on').index();
    if(idx3+1 <= end) {
      $('.page_num').removeClass('on');
      $('.page_num').eq(idx3+1).addClass('on');
      // 페이지컨텐츠를 구성하지 않았음
    }
  })

});





