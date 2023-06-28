// Setup đồng hồ đếm ngược
var countDownDate = new Date("Jan 30, 2023 15:37:25").getTime();


var x = setInterval(function() {

  var now = new Date().getTime();
    

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  document.getElementById("timeExpire").innerHTML = " " + days + ": " + hours + ": "
  + minutes + ": " + seconds;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timeExpire").innerHTML = "Đã hết hạn";
  }
}, 1000);


//Thanh trượt sản phẩm
// swiper
$(document).ready(function(){
  $('.imageSlider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2 ,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ],
      dots: true,
      speed: 300,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 1400,
  });
});
