<template>
    <div class="slides-container">
        <div v-for="item in slideItems" class="slide-item"
             :style="item.style"></div>
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
                currentPage: 0
            };
        },
        props: ['slideItems'],
        methods: {
            prev() {

            },
            next() {

            }
        },
        mounted() {

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
            .slides-container{
                a{
                    opacity: 0.3;
                }
            }
        }
        .slide-item{
            position: relative;
            background-position: center center;
            background-attachment: fixed;
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
                -webkit-border-radius: 24px;
                -moz-border-radius: 24px;
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
