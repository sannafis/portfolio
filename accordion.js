var acc = document.getElementsByClassName("accordion");
var i;

function accordionShow(accord){
    accord.classList.toggle("active");
    var panel = accord.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
}