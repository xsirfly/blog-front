<template>
    <div class="container header slider-home">
        <span class="logo">joker</span>
        <div class="header-text"
             :style="slideHeight">
            <transition name="slide">
                <div class="text-slides"
                     v-if="0 === textChange"
                     key="up"
                     :style="textCenter">
                    {{ textPerfixs[currentIndex] }}
                    <span class="color normal">{{ textSuffixs[currentIndex] }}</span>
                </div>
                <div class="text-slides"
                     v-else
                     key="down"
                     :style="textCenter">
                    {{ textPerfixs[currentIndex] }}
                    <span class="color normal">{{ textSuffixs[currentIndex] }}</span>
                </div>
            </transition>
        </div>
        <div class="social-media">
            <h4>Spread the Word</h4>
            <ul class="social-links">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-weibo"></i></a></li>
                <li><a href="#"><i class="fa fa-github"></i></a></li>
            </ul>
        </div><!-- end social media links -->
        <a href="#" class="header-down-arrow scroll link"></a>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                textPerfixs: [
                        'We Believe in ',
                        'We Are ',
                        'We Do '
                ],
                textSuffixs: [
                        'Good Design',
                        'Good Designers',
                        'perfect Design'
                ],
                currentIndex: 0,
                textChange: 0,
                textHeight: 0,
                textWidth: 0
            };
        },
        computed: {
            slideHeight() {
                return {height: this.textHeight + 50 + 'px'};
            },

            textCenter() {
                return {
                    marginTop: -this.textHeight / 2 + 'px',
                    marginLeft: -this.textWidth / 2 + 'px'
                };
            }
        },
        created() {
            setInterval(() => {
                this.currentIndex = this.currentIndex === this.textPerfixs.length - 1 ? 0 : this.currentIndex + 1;
                this.textChange = (this.textChange + 1) % 2;
            }, 5000);

            window.addEventListener('load', () => {
                let slides = this.$el.children[1].children[0];
                this.textHeight = slides.clientHeight;
                this.textWidth = slides.clientWidth;
            });

            window.addEventListener('resize', () => {
                let slides = this.$el.children[1].children[0];
                this.textHeight = slides.clientHeight;
                this.textWidth = slides.clientWidth;
            });
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../../common/css/grid.css";
    @import "../../common/css/animate.css";
    @import "../../common/css/font-awesome.css";
    .container{
        text-align: center;
        height: auto;
        margin: 0 auto;
        padding: 64px 0;
    }

    .slider-home{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 5;
    }

    .header{
        padding-top: 10%;
        .logo{
            color: #ffffff;
            font-size: 80px;
            line-height: 96px;
            font-weight: 300;
            text-transform: uppercase;
            display: block;
            margin-bottom: 32px;
        }
        .header-text{
            position: relative;
            background: rgba(0,0,0, .4);
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
            padding: 24px 16px;
            margin: 0 auto;
            width: 55%;
            margin-bottom: 56px;
        }
        .text-slides{
            text-transform: uppercase;
            position: absolute;
            font-size: 48px;
            line-height:56px;
            font-weight:300;
            width: 100%;
            height: auto;
            left: 50%;
            top: 50%;
            color: #ffffff;
            &:after{
                clear: both;
            }
        }
        .social-media{
            h4{
                color:#ffffff;
                text-transform: uppercase;
                display: block;
                margin-bottom: 24px;
            }
            .social-links{
                li{
                    display: inline;
                    a{
                        display: inline-block;
                        padding: 4px 0 0 1px;
                        width: 32px;
                        height: 32px;
                        margin: 0 4px;
                        background: rgba(0,0,0, .5);
                        color: #fff;
                        radius: 3px;
                        &:hover{
                            background: rgba(0,0,0, .7);
                            color: #e74c3c;
                        }
                    }
                }
            }
        }
        .header-down-arrow{
            color: #fff;
            display: inline-block;
            font-size: 40px;
            font-weight: 400;
            margin-top: 100px;
            transform: rotate(-90deg);
            &:after{
                content: '\2329';
            }
            &:hover{
                color: #e74c3c;
            }
        }
    }

    @media only screen and (max-width: 767px){
        .header{
            .logo{
                font-size: 72px;
                line-height: 80px;
            }
            .text-slides{
                font-size: 24px;
                line-height: 32px;
            }
        }
    }

    .slide-enter-active, .slide-leave-active {
        transition: all 2s;
    }
    .slide-enter, .slide-leave-active {
        opacity: 0;
    }
    .slide-enter {
        transform: translateY(50%);
    }
    .slide-leave-active {
        transform: translateY(-50%);
    }
</style>
