class Slider {
    constructor() {
        this.imageUrls = [];
        this.currentImageIndex = 0;
        this.imageCount = 10;

        this.showPrevBtn = null;
        this.showNextBtn = null;
        this.slideImage = null;
    }

    start(elementId) {
        let that = this;
        let element = document.querySelector(`#${elementId}`);

        this.showPrevBtn = element.querySelector('.show-prev-btn');
        this.showNextBtn = element.querySelector('.show-next-btn');
        this.slideImage = element.querySelector('.slider-img');

        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e);
        });
        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClick(e);
        });

        for (let i = 1; i <= this.imageCount; i++) {
            this.imageUrls.push(`${i}.jpg`);
        }

        this.slideImage.src = `./img/${this.imageUrls[this.currentImageIndex]}`;

        this.showPrevBtn.disabled = true;
    }

    onShowPrevBtnClick(e) {
        this.showNextBtn.disabled = false;
        this.currentImageIndex--;
        this.slideImage.src = `./img/${this.imageUrls[this.currentImageIndex]}`;
        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    }

    onShowNextBtnClick(e) {
        this.showPrevBtn.disabled = false;
        this.currentImageIndex++;
        this.slideImage.src = `./img/${this.imageUrls[this.currentImageIndex]}`;
        if (this.currentImageIndex === (this.imageUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    }
}

const slider1 = new Slider();
slider1.start('ok-slider-1');


