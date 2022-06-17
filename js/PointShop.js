$(document).ready(function () {
  $('.tabBtn').on('click', function () {
    idx = $(this).index();
    $('.tabBtn').removeClass('on');
    $('.tabBtn').eq(idx).addClass('on');
    $('.tabContents').removeClass('on');
    $('.tabContents').eq(idx).addClass('on');
  })


  $('.page_nation').on('click', function() {
    alert("실행!");
  })

});





