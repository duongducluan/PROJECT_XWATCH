import $ from "jquery";
function style() {
$(window).scroll(function(){
    var size=window.scrollY;
    if(size<=100){
        $('.navbar').css('position','absolute'); 
        $('.navbar').css('top','75px'); 
    }
     if(size>100){
        $('.navbar').css('position','fixed'); 
        $('.navbar').css('z-index','1000'); 
        $('.navbar').css('top','0px'); 
        $('.navbar').css('witdh','100%'); 
        $('.navbar').css('transition','0.5s'); 
     }
})
var i=1;
$('.like').click(function () {
    console.log(i)
    alert("djshgrfkjdksBJd")
      if(i===1){
               $('.like .span-l').text(`Thích ${i}`)
               i--;
      }
      else{
        $('.like .span-l').text(`Thích ${i}`)
        i++;
      }
            })
            
        //     $(document).ready(function ($) {
        //         $('.slider').slick({
        //             dots: false,
        //             infinite: true,
        //             speed: 500,
        //             slidesToShow: 4,
        //             slidesToScroll: 1,
        //             autoplay: true,
        //             autoplaySpeed: 2000,
        //             arrows: true,
                  
        //     })
        // })
        $('.left-item-cat ul>li').each(function (index,element) {
          $(element).click(function(){
          //  $('.left-item-cat ul>li').css('background-color','#ededee')
                $(this).css('background-color','#ededee')
              })  
        });    
        $('.dropdown-item').each(function(index,element){
          $(this).click(function(){
            $('.dropdown-item').removeClass('active')
             $(this).addClass('active')
           })
        })
  
        $(".video-left1 img").click(function(){
          var video=document.getElementById('video')
          $(".video-left1 video").css("z-index","50");
          $(".icon-youtube").css("display","none");
          $(".video-left1>img").css("display","none")
          video.play()
        })
   
        $(".imgmot").click(function(){
          var video=document.getElementById('video1')
          $("#video1").css("z-index","1000");
          $(".icon").css("z-index","1");
          video.play()
        })
        
        $(".imghai").click(function(){
          var video=document.getElementById('video2')
          $("#video2").css("z-index","1000");
          $(".icon").css("z-index","1");
          video.play()
        })
        
        $(".imgba").click(function(){
          var video=document.getElementById('video3')
          $("#video3").css("z-index","1000");
          $(".icon").css("z-index","1");
          video.play()
        })
        setInterval(function () {
          $(".block-str img").css("transform","rotate(33deg)")
        },1000)
        setInterval(function () {
          $(".block-str img").css("transform","rotate(0deg)")
        },2000)
}
export default style;