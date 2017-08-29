$(function(){
  $('head').append(
    '<style type="text/css">.nav_logo{opacity: 0;}'
  );

  $('.footer li').hover(
    function(){
      //マウスオーバー時
      var id = $(this).attr("id");
      var _offset = $(this).offset();
      $("#" + id + "_logo").width($(this).width() * 0.5)
      .offset({
        top: _offset.top - $("#" + id + "_logo").height(),
        left: _offset.left + $("#" + id + "_logo").width() * 0.5
      })
      .not(":animated")
      .animate({opacity:'1'}, "slow");
      $(this).css({
        "background-color":"#333333",
        "color":"E5CD2D"
      });
    },function(){
      //マウスアウト時
      var id = $(this).attr("id");
      $("#" + id + "_logo")
      .animate({opacity:'0'}, "slow");
      $(this).css({
        "background-color":"#1A1A1A",
        "color":"#FFFFFF"
      });
    }
  );
});
