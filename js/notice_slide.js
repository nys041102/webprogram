console.log("JS 연결 완료!");

class Carousel {
    constructor(trackSelector, leftBtnSelector, rightBtnSelector, gap = 40) {
        this.track = document.querySelector(trackSelector);
        this.cards = document.querySelectorAll(`${trackSelector} .notice-card`);

        if (this.cards.length === 0) return;

        this.leftBtn = document.querySelector(leftBtnSelector);
        this.rightBtn = document.querySelector(rightBtnSelector);

        this.gap = gap;
        this.cardWidth = this.cards[0].offsetWidth + this.gap;

        // URL 해시에서 index 불러오기 (#slide1)
        this.index = this.getIndexFromHash();

        this.addEvents();
        this.updatePosition();  // 새로고침해도 유지됨
        this.addHashChangeListener();
    }

    addEvents() {
        this.rightBtn.addEventListener("click", () => this.moveRight());
        this.rightBtn.addEventListener("click", () => {
    console.log("오른쪽 버튼 클릭됨!!!");
});S
    }

    moveRight() {
        if (this.index < this.cards.length - 1) {
            this.index++;
            this.updatePosition();
            this.updateHash();
        }
    }

    moveLeft() {
        if (this.index > 0) {
            this.index--;
            this.updatePosition();
            this.updateHash();
        }
    }

    updatePosition() {
        this.track.style.transform = `translateX(${-this.cardWidth * this.index}px)`;
    }

    // URL 해시 "#slide2" → index = 2
    getIndexFromHash() {
        if (!location.hash.startsWith("#slide")) return 0;
        const num = Number(location.hash.replace("#slide", ""));
        return isNaN(num) ? 0 : num;
    }

    // index → "#slide2" 로 저장
    updateHash() {
        location.hash = `slide${this.index}`;
    }

    // 뒤로가기 / 앞으로가기 사용 시 자동 이동
    addHashChangeListener() {
        window.addEventListener("hashchange", () => {
            this.index = this.getIndexFromHash();
            this.updatePosition();
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Carousel(".carousel-track", ".carousel-btn.left", ".carousel-btn.right");
});

