
/*$(".hidden").click(function() {

    if ($(".hidden").hasClass("hidden")) {
        $(".hidden").addClass("visible")} 
        
        else {
        $(".menu-area").addClass("active")
    }

    $(".menu-area").toggleClass("active")
})*/

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "block";
      //btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
     //btnText.innerHTML = "Read less";
      moreText.style.display = "block";
    }
  }
