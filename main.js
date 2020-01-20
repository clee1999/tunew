$(document).ready(function(){
    $('.progress-value > span').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 1500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});

/* clique scrool */
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 900) {
          $(".my-nav").css("background" , "rgba(124, 124, 124, 0.532)");
          $(".my-nav .nav-link").css("color" , "black");
          $(".my-nav .nav-link:hover").css("color" , "white");
        //  $(".navbar-expand-lg").css("border-bottom","gray solid 1px");
        $(".navbar-expand-lg").css("width","730px");
        $(".navbar-expand-lg").css("border-radius","50px");
        $(".navbar-expand-lg").css("margin-top","10px");
          
         
        }
        
        else{
            $(".my-nav").css("background" , "transparent");
            $(".my-nav .nav-link").css("color" , "white");
            $(".navbar-expand-lg").css("border-bottom","none");
            $(".navbar-expand-lg").css("width","100%");
           	
        }
    })
  })


//   $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 700 && scroll < 1250) {
//           $(".my-nav .nav1").css("color" , "red");
         
//         }
        
//         else{
            
           	
//         }
//     })
//   })

//   $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 1250 && scroll < 2500) {
//             $(".my-nav .nav2").css("color" , "red")
         
//         }
        
//         else{
          
           	
//         }
//     })
//   })

//   $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 2500 && scroll < 3200) {
//             $(".my-nav .nav3").css("color" , "red")
         
//         }
        
//         else{
          
           	
//         }
//     })
//   })

//   $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 3200) {
//             $(".my-nav .nav4").css("color" , "red")
         
//         }
        
//         else{
          
           	
//         }
//     })
//   })

// Animation scroll h1 header
new WOW().init();