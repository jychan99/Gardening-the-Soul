let today = new Date();
let month = today.getMonth() + 1; // 월
let date = today.getDate(); // 날짜

const next = document.querySelector(".leaf");
const back = document.querySelector(".fa-chevron-left");

next.addEventListener("click", moveTo3);
back.addEventListener("click", moveTo2);

document.querySelector(".text").innerText = `dsadsa`;
