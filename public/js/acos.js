$(document).ready(function() {
  $('.js-showContent').click(function(event) {  
    event.preventDefault();
    var allContent = $(this).parent().find('.allContent');
    var teaserContent = $(this).parent().find('.teaserContent');
    allContent.toggle();
    teaserContent.toggle();
    if(allContent.is(':visible')) {
      $(this).text('Hide');
      $(this).parent().append($(this));
    } else {
      $(this).text('Show All');
      $(this).parent().find('.teaserContent').after($(this));
    }
  })  
});
