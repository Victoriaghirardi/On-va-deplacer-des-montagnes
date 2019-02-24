$(".container").on("click", myFunction);

function myFunction() {
  this.classList.toggle("hide");
  $(".textBouton").toggleClass("show");
}
