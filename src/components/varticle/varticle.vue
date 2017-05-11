<template>
    <div ref="article"></div>
</template>

<script type="text/ecmascript-6">
    import config from '../../common/js/config';

    const separate = config.port === '' ? '' : ':';
    const articleUrl = '/article';
    export default {
        data() {
            return {
                html: '<div>未获取到数据</div>',
                articleId: this.$route.params.id
            };
        },
        created() {
            this.$http.get(config.host + separate + config.port + articleUrl + '/' + this.articleId).then((response) => {
                response = response.body;
                if (response.success) {
                    this.html = response.data.html;
                }
            });
        },
        watch: {
            html(val, oldVal) {
                this.$refs.article.innerHTML = this.html;
            }
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
