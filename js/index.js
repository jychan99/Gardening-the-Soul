//jquery
$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    scrollingSpeed: 1600,
  });

  //methods
  $.fn.fullpage.setAllowScrolling(false);
});

const leaf = document.querySelector(".homepage-image__leaf");

function deleteHidden() {
  leaf.classList.remove("hidden");
}
function moveTo2() {
  $.fn.fullpage.moveTo(2);
}
function moveTo3() {
  $.fn.fullpage.moveTo(3);
}

leaf.addEventListener("mouseover", deleteHidden);
leaf.addEventListener("click", moveTo2);
