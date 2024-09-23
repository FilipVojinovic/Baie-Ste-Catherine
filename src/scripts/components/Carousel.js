import Swiper from "swiper/bundle";
export default class Carousel{
    constructor(element){
        this.element = element;
        this.options = {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: this.element.querySelector('.swiper-pagination'),
                type: 'bullets',
            },
            navigation: {
                nextEl: this.element.querySelector('.swiper-button-next'),
                prevEl: this.element.querySelector('.swiper-button-prev'),
              },
        };
        this.init();
    }

    init(){
        this.setOptions();
        const swiper = new Swiper (this.element, this.options);
    }

    setOptions(){
        if (this.element.dataset.triple !== undefined) {

            this.options.breakpoints = {
                768: {
                    slidesPerView: 3
                },

                350: {
                    slidesPerView: 1
                }
            };
        }

        if (this.element.dataset.autoplay !== undefined) {
            this.options.autoplay = {
                delay: 5000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            };
        }

        if (this.element.dataset.loop !== undefined) {
            this.options.loop = true;
        }

        
        if (this.element.dataset.slides !== undefined && this.element.dataset.slides !== "") {
            this.options.slidesPerView = parseFloat(this.element.dataset.slides) || this.options.slidesPerView;
        }
    }
}