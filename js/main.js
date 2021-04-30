$(document).ready(function() {
    AOS.init({
      offset: 300,
      duration: 1000
    });
});

$(document).ready(function() {
    $('.popup-img').magnificPopup({
      type:'image'
      
    });
  });

  $('.gallery-im').magnificPopup({
    type:'image',
    gallery:{
      enabled:true
    }
    
  });

  $(document).ready(function(){
    
    //STICKY MENU
    
    $('.js--about-section').waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        } else{
            $("nav").removeClass("sticky");
        }
    });
    
});