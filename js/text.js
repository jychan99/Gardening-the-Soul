let today = new Date();
let month = today.getMonth() + 1; // 월
let date = today.getDate(); // 날짜

const next = document.querySelector(".leaf");
const back = document.querySelector(".back");

next.addEventListener("click", moveTo3);
back.addEventListener("click", moveTo2);
