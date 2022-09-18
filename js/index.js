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

const homepageLeaf = document.querySelector(".homepage-image__leaf");
const next = document.querySelector(".leaf");
const back = document.querySelector(".fa-chevron-left");
const Ani_date = document.querySelector(".section1__date");
const Ani_text = document.querySelector(".section1__text");
const closing_text = document.querySelector(".closing__text");

function deleteHidden() {
  homepageLeaf.classList.remove("hidden");
}
function deleteHidden_next() {
  next.classList.remove("hidden");
}
function moveTo2() {
  $.fn.fullpage.moveTo(2);
}
function moveTo3() {
  $.fn.fullpage.moveTo(3);
}
function animationstart() {
  Ani_date.classList.remove("paused");
  Ani_text.classList.remove("paused");
  Ani_date.classList.add("play");
  Ani_text.classList.add("play");
  next.classList.remove("paused");
  next.classList.add("play");
}
function closing_animationstart() {
  closing_text.classList.remove("hidden");
  closing_text.classList.remove("paused");
  closing_text.classList.add("play");
}

homepageLeaf.addEventListener("mouseover", deleteHidden);
homepageLeaf.addEventListener("click", moveTo2);
homepageLeaf.addEventListener("click", animationstart);
next.addEventListener("mouseover", deleteHidden_next);
next.addEventListener("click", moveTo3);
next.addEventListener("click", closing_animationstart);
back.addEventListener("click", moveTo2);
