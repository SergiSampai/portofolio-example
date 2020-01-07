var modal = document.getElementById("myModal");

var btn = document.getElementById("open");

var btnClose = document.getElementById("close");

var btnReset = document.getElementById("reset");

btnReset.onclick = function(){
  document.getElementById("message").reset();
}

btn.onclick = function() {
  modal.style.display = "block";
}
btnClose.onclick = function() {
    modal.style.display = "none";
  }



