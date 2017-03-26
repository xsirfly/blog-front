<template>
    <slide :slideItems="slideItems"></slide>
</template>

<script>
    import slide from '../slide/slide.vue';
    export default {
        data() {
            return {
                slideItems: [
                    {
                        style: 'background-image: url("pattern-1.png"), url("slider-img-1.jpg");background-position: left top;background-repeat: repeat, no-repeat;'
                    },
                    {
                        style: 'background-image: url("pattern-1.png"), url("slider-img-2.jpg");background-position: left top;background-repeat: repeat, no-repeat;'
                    }
                ]
            };
        },
        components: {
            slide
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    #slides {
        .slides-container {
            div {
                position: relative;
                background-position: center center;
                background-attachment: fixed;
            }
            .slide-1 {
                background-image: url("pattern-1.png"), url("slider-img-1.jpg");
                background-position: left top;
                background-repeat: repeat, no-repeat;
            }
            .slide-2 {
                background-image: url("pattern-1.png"), url("slider-img-2.jpg");
                background-position: left top;
                background-repeat: repeat, no-repeat;
            }
        }
    }
</style>