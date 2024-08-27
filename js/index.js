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
                bgImg: "https://i.postimg.cc/bwCrh4NB/photo-1541462608143-67571c6738dd.avif",
                rectImg: "https://i.postimg.cc/bwCrh4NB/photo-1541462608143-67571c6738dd.avif"
            },
            {
                headlineFirstLine: "電子商務",
                headlineSecondLine: "網頁設計",
                sublineFirstLine: "電子商務走天下",
                sublineSecondLine: "XingBei",
                href: "#service",
                bgImg: "https://i.postimg.cc/bwCrh4NB/photo-1541462608143-67571c6738dd.avif",
                rectImg: "https://i.postimg.cc/ryWZ8R2b/slide-rect1.jpg"
            },
            {
                headlineFirstLine: "虛擬主機 / 網域",
                headlineSecondLine: "/ 註冊",
                sublineFirstLine: "輕鬆簡單完成主機、網域註冊",
                sublineSecondLine: "XingBei",
                href: "#service",
                bgImg: "https://i.postimg.cc/bwCrh4NB/photo-1541462608143-67571c6738dd.avif",
                rectImg: "https://i.postimg.cc/G20sW6X1/photo-1416339442236-8ceb164046f8.avif"
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
