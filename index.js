$(window).on("scroll", function(){
  var scrollAmount = window.scrollY % document.querySelector("body").scrollHeight;
  var grad = "-webkit-linear-gradient(" + ((window.scrollY)%45) + "deg, rgba(188,188,188,0.62) " + ((window.scrollY)%50) + "%, rgba(130,130,130,0.23) " + (120-(window.scrollY)%50) + "%)";
  // console.log(grad);
  $(".side-text").css("left", scrollAmount);
  $(".side-text").css("background", grad);
  $(".side-text").css("-webkit-background-clip", "text");
  $(".side-text").css("-webkit-text-fill-color", "transparent");

  // $(".girl").css("top", window.scrollY%400);
  // $(".boy").css("bottom", window.scrollY % document.querySelector("body").scrollHeight);
  // var girlTop = parseInt($(".girl").css("top").replace("px",""));
  // var h = document.querySelector("body").scrollHeight
  // girlTop =  girlTop +  window.scrollY % 20;
  // $(".girl").css("top", girlTop);
});

var link = "https://drive.google.com/file/d/11Gyxk0jW2pfEJr_TeUDJJL66nhisS73c/view?usp=sharing";
$(".cal").on("click", function(){
  window.location.href = link;
});


function showDiff() {
    var curr_date = new Date();
    var event = new Date("June 7, 2021 10:00 AM PDT");
    // var event = new Date("April 1 2021 10:00 PDT")
    var diff = (event - curr_date) / 1000;
    var diff = Math.abs(Math.floor(diff));

    var days = Math.floor(diff / (24 * 60 * 60));
    var leftSec = diff - days * 24 * 60 * 60;

    var hrs = Math.floor(leftSec / (60 * 60));
    var leftSec = leftSec - hrs * 60 * 60;

    var min = Math.floor(leftSec / (60));
    var leftSec = leftSec - min * 60;

    if (diff === -1 || curr_date > event) {
        document.getElementById("live").innerHTML = "It's live !";
        return;

    } else {

        document.getElementById("live").innerHTML = days + " days " + hrs + " hours " + min + " minutes and " + leftSec + " secs till event.";
    }
    setTimeout(showDiff, 1000);
}
showDiff();


const videoDiv = document.querySelector(".hero");
const video = videoDiv.querySelector("video");
const text = document.querySelector(".hero h2");
const endSection = document.querySelector(".main");
const endText = document.querySelector(".side-text");

const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: videoDiv,
  triggerHook: 0
})
// .addIndicators()
.setPin(videoDiv)
.addTo(controller);


const textAnim = TweenMax.fromTo(text, 1.5, {opacity: 1}, {opacity: 0});

let sceneText = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: videoDiv,
  triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);


let accelAmount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", function(e){
  scrollpos = e.scrollPos / 1000;
});


setInterval(() => {
  delay += (scrollpos - delay) * accelAmount;
  video.currentTime = delay;
}, 33.3);
