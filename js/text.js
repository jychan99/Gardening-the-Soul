let today = new Date();
let month = today.getMonth() + 1; // 월
let date = today.getDate(); // 날짜

const section1Date = document.querySelector(".section1__date");
const mainText = document.querySelector(".section1__text");
const subText = document.querySelector(".section2__text");

for (let i = 0; i < quotesDay.length; i++) {
  if (quotesDay[i].month === month) {
    if (quotesDay[i].date === date) {
      section1Date.innerText = `${month}월 ${date}일`;
      mainText.innerText = `${quotesDay[i].day}`;
      subText.innerText = `${quotesDay[i].words}`;
    }
  }
}

//background
const image = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

const chosenImage = image[Math.floor(Math.random() * image.length)];

document.querySelector(
  ".section1__wallpaper"
).src = `img/gardening the soul/${chosenImage}`;
