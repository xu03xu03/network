var app = new Vue({
    el: '#app',
    data: {
        currentSlide: 0,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
            {
                headlineFirstLine: "傳統產業",
                headlineSecondLine: "網頁設計",
                sublineFirstLine: "傳統產業不再傳統",
                sublineSecondLine: "XingBei",
                href: "#service",
                bgImg: "https://i.postimg.cc/C5yvGSkm/slide0.jpg",
                rectImg: "https://i.postimg.cc/vTW0XkvM/slide-rect0.jpg"
            },
            {
                headlineFirstLine: "電子商務",
                headlineSecondLine: "網頁設計",
                sublineFirstLine: "電子商務走天下",
                sublineSecondLine: "XingBei",
                href: "#service",
                bgImg: "https://i.postimg.cc/Qx34VNXM/slide1.jpg",
                rectImg: "https://i.postimg.cc/ryWZ8R2b/slide-rect1.jpg"
            },
            {
                headlineFirstLine: "虛擬主機/網域",
                headlineSecondLine: "註冊服務",
                sublineFirstLine: "輕鬆簡單完成主機、網域註冊",
                sublineSecondLine: "XingBei",
                href: "#service",
                bgImg: "https://i.postimg.cc/t4RBtrnQ/slide2.jpg",
                rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg"
            }
        ]
    },
    mounted: function () {
        var productRotatorSlide = document.getElementById("app");
        var startX = 0;
        var endX = 0;

        productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

        productRotatorSlide.addEventListener("touchend", function (event) {
            var threshold = startX - endX;

            if (threshold < 150 && 0 < this.currentSlide) {
                this.currentSlide--;
            }
            if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
                this.currentSlide++;
            }
        }.bind(this));
    },
    methods: {
        updateSlide(index) {
            index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
            this.currentSlide = index;
            this.isFirstLoad = false;
        }
    }
})