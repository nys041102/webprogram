const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".notice-card");

const leftBtn = document.querySelector(".carousel-btn.left");
const rightBtn = document.querySelector(".carousel-btn.right");

// 카드 한 개의 너비 + 간격
const cardWidth = cards[0].offsetWidth + 50;
let index = 0;

// 오른쪽 버튼
rightBtn.addEventListener("click", () => {
  if (index < cards.length - 1) {
    index++;
    track.style.transform = `translateX(${-cardWidth * index}px)`;
  }
});

// 왼쪽 버튼
leftBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(${-cardWidth * index}px)`;
  }
});
