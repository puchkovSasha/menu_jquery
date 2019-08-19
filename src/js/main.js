 $( document ).ready(function(){

  var link = $('.menu-link'); 
  var menu_show = $('.menu');

    		link.click(function () {
      link.toggleClass('menu-link-active');
      menu_show.toggleClass('menu-show');

  });
});
