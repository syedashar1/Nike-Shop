var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
// Get the button that opens the modal
document.getElementById("nodalboxbtn1").onclick = function() {
  modal1.style.display = "block";
};
document.getElementById("nodalboxbtn2").onclick = function() {
  modal2.style.display = "block";
};
var span1= document.getElementsByClassName("close1")[0].onclick = function() {modal1.style.display = "none";}
var span1= document.getElementsByClassName("close2")[0].onclick = function() {modal2.style.display = "none";}

window.onclick = function(event) {
  if (event.target == modal1 || event.target == modal2 ) {
        modal1.style.display = "none";
    modal2.style.display = "none";

  }
}
