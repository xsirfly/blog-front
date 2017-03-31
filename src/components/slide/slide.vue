<template>
    <div class="slides-container">
        <div class="slides" :style="[translateStyle, slidesWidth]" @touchmove="ignore">
            <div class="slide-1 slide-item" :style="itemWidth"></div>
            <div class="slide-2 slide-item" :style="itemWidth"></div>
        </div>
        <nav class="slides-navigation">
            <a href="#" class="prev" @click="prev"></a>
            <a href="#" class="next" @click="next"></a>
        </nav>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                currentPage: 0,
                items: 2,
                offestLeft: 0,
                animation: '',
                duration: 300,
                screenWidth: 0
            };
        },
        methods: {
            prev() {
                let index = this.currentPage;
                this.currentPage = index === 0 ? this.items : index - 1;
            },
            next() {
                let index = this.currentPage;
                this.currentPage = index === this.items - 1 ? 0 : index + 1;
            },
            ignore() {}
        },
        computed: {
            itemWidth() {
                let itemWidth = 100 / this.items;
                return {
                    width: itemWidth.toFixed(2) + '%'
                };
            },
            slidesWidth() {
                return {
                    width: this.items * 100 + '%'
                };
            },
            translateStyle() {
                let style = {};
                style['transform'] = 'translateX(-' + this.currentPage * this.screenWidth + 'px)';
                style['transitionTimingFunction'] = 'ease';
                style['transitionDuration'] = this.duration + 'ms';
                return style;
            }
        },
        created() { // would work in 'ready', 'attached', etc.
            window.addEventListener('load', () => {
                this.screenWidth = this.$el.clientWidth;
            });
            window.addEventListener('resize', () => {
                this.screenWidth = this.$el.clientWidth;
            });
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../../common/css/font-awesome.css";
    .slides-container{
        width: 100%;
        height: 100%;
        position: relative;
        &:hover{
            .slides-navigation{
                a{
                    opacity: 0.3;
                }
            }
        }
        .slides{
            height: 100%;
            .slide-item{
                height: 100%;
                background-position: center center;
                background-size: cover;
                float: left;
            }
            .slide-1{
                background-image: url("pattern-1.png"), url("slider-img-1.jpg");
                background-repeat: repeat, no-repeat;
            }

            .slide-2{
                background-image: url("pattern-1.png"), url("slider-img-2.jpg");
                background-repeat: repeat, no-repeat;
            }
        }
        .slides-navigation{
            width: 100%;
            position: absolute;
            top: 40%;
            margin: 0 auto;
            z-index: 1000;
            a{
                position: absolute;
                display: block;
                width:48px;
                height:48px;
                opacity:0;
                color: #fff;
                font-size: 32px;
                font-weight: 400;
                background: #000;
                border-radius: 24px;
                &:hover{
                    opacity: .8 !important;
                }
            }
            .prev{
                left: 2%;
                padding:9px 0 0 16px;
                &:before{
                    content: "\ab";
                }
            }
            .next{
                right: 2%;
                padding:9px 0 0 19px;
                &:before{
                    content: "\bb";
                }
            }

        }
    }
</style>
