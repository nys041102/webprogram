// js/notice_slide.js

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const cards = Array.from(document.querySelectorAll(".notice-card"));
  const prevBtn = document.querySelector(".carousel-btn.left");
  const nextBtn = document.querySelector(".carousel-btn.right");

  if (!track || cards.length === 0) return;

  let currentIndex = 0;

  // 현재 인덱스 카드 기준으로 슬라이드 이동
  function updateSlide() {
    const targetCard = cards[currentIndex];
    if (!targetCard) return;

    // 카드의 왼쪽 위치만큼 track을 반대로 이동
    const offset = targetCard.offsetLeft;
    track.style.transform = `translateX(-${offset}px)`;
  }

  // 이전 버튼
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateSlide();
    }
  });

  // 다음 버튼
  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      currentIndex += 1;
      updateSlide();
    }
  });

  // 처음 로드 시 초기 위치 정렬
  updateSlide();
});
