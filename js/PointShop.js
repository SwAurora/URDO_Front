$(document).ready(function () {
  $('.tabBtn').on('click', function () {
    idx = $(this).index();
    $('.tabBtn').removeClass('on');
    $('.tabBtn').eq(idx).addClass('on');
    $('.tabContents').removeClass('on');
    $('.tabContents').eq(idx).addClass('on');
  })


  $('.page_num').on('click', function() {
    idx2 = $(this).index();
    $('.page_num').removeClass('on');
    $('.page_num').eq(idx2).addClass('on');
    $('.pageContents').removeClass('on');
    $('.pageContents').eq(idx2).addClass('on');
  })

  $('.page_arrow').on('click', function() {
    idx3=$('on').index();
    alert(idx3);
  })

});





