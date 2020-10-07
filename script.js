//alert("Check");

function showDiff() {
    var curr_date = new Date();
    //var event = new Date("October 7, 2020 3:26 AM PDT");
    var event = new Date("October 13, 2020 10:00 AM PDT");
    var diff = (event - curr_date) / 1000;
    var diff = Math.abs(Math.floor(diff));

    var days = Math.floor(diff / (24 * 60 * 60));
    var leftSec = diff - days * 24 * 60 * 60;

    var hrs = Math.floor(leftSec / (60 * 60));
    var leftSec = leftSec - hrs * 60 * 60;

    var min = Math.floor(leftSec / (60));
    var leftSec = leftSec - min * 60;
    document.getElementById("cdate").innerHTML = curr_date;

    if (diff === -1 || curr_date > event) {
        document.getElementById("datedifff").innerHTML = "It's live !";
        var re = document.getElementById("datediff");
        re.remove();
        //alert("It's live!");
        return;

    } else {
        document.getElementById("datediff").innerHTML = days + " days " + hrs + " hours " + min + " minutes and " + leftSec + " sec till event.";
    }
    setTimeout(showDiff, 1000);
}
showDiff();

const checkpoint = 100; //300

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 0.8 - currentScroll / checkpoint;
    } else {
        opacity = 0.4;
    }
    document.querySelector(".globe1").style.opacity = opacity;
});
