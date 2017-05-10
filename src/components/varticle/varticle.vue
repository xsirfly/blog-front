<template>
    <div ref="article"></div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                html: '<h1 id="test">test</h1>'
            };
        },
        mounted() {
            this.$refs.article.innerHTML = this.html;
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
