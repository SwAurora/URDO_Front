$(document).ready(function() {
  $('.tabBtn').on('click',function() {
    idx = $(this).index();
    $('.tabBtn').removeClass('on');
    $('.tabBtn').eq(idx).addClass('on');
    $('.tabContents').removeClass('on');
    $('.tabContents').eq(idx).addClass('on');
  })
  


}); 
