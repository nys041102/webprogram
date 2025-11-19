const track = document.querySelector(".carousel-track");
const leftBtn = document.querySelector(".carousel-btn.left");
const rightBtn = document.querySelector(".carousel-btn.right");

let index = 0;
const cardWidth = 460; // 카드 하나의 전체 폭 + gap 포함 값

rightBtn.addEventListener("click", () => {
  index++;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});

leftBtn.addEventListener("click", () => {
  if (index > 0) index--;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});
