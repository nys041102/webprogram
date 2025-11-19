document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".notice-card");

    // 카드가 하나도 없으면 실행하지 않음
    if (cards.length === 0) return;

    const leftBtn = document.querySelector(".carousel-btn.left");
    const rightBtn = document.querySelector(".carousel-btn.right");

    // === 수정된 부분: 간격 40px을 정확히 더합니다. ===
    // offsetWidth: 카드 너비 (400px + 패딩 + border)
    // 40: CSS의 gap: 40px 값
    const GAP_SIZE = 40;
    const cardWidthWithGap = cards[0].offsetWidth + GAP_SIZE;
    // ===============================================
    
    let index = 0;

    // 오른쪽 버튼
    rightBtn.addEventListener("click", () => {
        // 마지막 카드에 도달했는지 확인
        if (index < cards.length - 1) {
            index++;
            track.style.transform = `translateX(${-cardWidthWithGap * index}px)`;
        }
    });

    // 왼쪽 버튼
    leftBtn.addEventListener("click", () => {
        // 첫 번째 카드를 넘어서지 않도록 확인
        if (index > 0) {
            index--;
            track.style.transform = `translateX(${-cardWidthWithGap * index}px)`;
        }
    });
});
