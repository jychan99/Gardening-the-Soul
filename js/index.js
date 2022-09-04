//jquery
$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    scrollingSpeed: 1600,
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);
});

const leaf = document.querySelector(".homepage-image__leaf");

function deleteHidden() {
  leaf.classList.remove("hidden");
}

leaf.addEventListener("mouseover", deleteHidden);
