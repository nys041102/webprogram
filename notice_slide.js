// ======= 캐러셀 기능 ========

// 트랙 선택
const track = document.querySelector(".carousel-track");

// 버튼 선택
const btnLeft = document.querySelector(".carousel-btn.left");
const btnRight = document.querySelector(".carousel-btn.right");

// 이동 거리 (카드 한 개 너비)
const moveAmount = 420;

// 왼쪽 버튼
btnLeft.addEventListener("click", () => {
  track.scrollLeft -= moveAmount;
});

// 오른쪽 버튼
btnRight.addEventListener("click", () => {
  track.scrollLeft += moveAmount;
});
