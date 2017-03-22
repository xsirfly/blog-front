<template>
    <section id="preloader">
        <div class="loader fa fa-spin"></div>
    </section>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/css/font-awesome.css"

    #preloader
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: #fff
      z-index: 1000
      .loader
        position: absolute
        margin: -25px 0 0 -25px
        top: 50%
        left: 50%
        width: 50px
        height: 50px
        background: url(loader.png)
        background-size: 50px 50px
</style>
