export var fullCalendar = function(){
  jQuery(document).ready(function() {
    KTCalendarBasic.init();
  });
}
export var fileUploader = function(){
  KTDropzoneDemo.init();
}
export var tooltip = function(){
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
}