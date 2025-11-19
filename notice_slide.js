const track = document.querySelector(".carousel-track");
const btnLeft = document.querySelector(".carousel-btn.left");
const btnRight = document.querySelector(".carousel-btn.right");

const cardWidth = 350; // 카드 + 간격

// 오른쪽 이동
btnRight.addEventListener("click", () => {
  track.scrollLeft += cardWidth;
});

// 왼쪽 이동
btnLeft.addEventListener("click", () => {
  track.scrollLeft -= cardWidth;
});
