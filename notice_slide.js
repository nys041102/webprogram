const slider = document.querySelector(".notice-list");
const btnLeft = document.querySelector(".slide-btn.left");
const btnRight = document.querySelector(".slide-btn.right");

btnRight.addEventListener("click", () => {
    slider.scrollLeft += 400; // 카드 하나만큼 이동
});

btnLeft.addEventListener("click", () => {
    slider.scrollLeft -= 400;
});
