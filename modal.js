function modalpopup(id, src, alternateText){
    var modal = document.getElementById("modalpopup");
    var modalImg = modal.getElementsByClassName("modal-content")[0];
    // var captionText = modal.getElementsByClassName("caption")[0];
  modalImg.src = src;
  modal.style.display = "block";

}

function closemodal(button){
 button.parentElement.style.display = "none";
}