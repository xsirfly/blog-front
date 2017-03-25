<template>
    <transition name="fade">
        <section v-if="show" id="preloader">
            <div class="loader fa fa-spin"></div>
        </section>
    </transition>
</template>

<script type="text/ecmascript-6">
    export default {
        props: ['show']
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../../common/css/font-awesome.css";
    .fade-enter-active, .fade-leave-active{
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-active{
        opacity: 0
    }

    #preloader{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        z-index: 1000;
        .loader{
            position: absolute;
            margin: -25px 0 0 -25px;
            top: 50%;
            left: 50%;
            width: 50px;
            height: 50px;
            background: url(loader.png);
            background-size: 50px 50px;
        }
    }
</style>
