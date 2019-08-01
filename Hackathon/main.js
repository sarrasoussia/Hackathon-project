
$(document).ready(function() {


setInterval(
    function () {
        var H= "You Survived";
        var W="Now What?";
        var T =document.getElementById("para1");
        if (T.innerHTML ==H) { T.innerHTML =W}
        else { T.innerHTML =H} 
    }, 1000);


$(".words").click(function() {
    $(".wordBys").css("opacity","1");
});


});
