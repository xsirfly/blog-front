<template>
    <div>
        <h4>Tags</h4>
        <a v-for="item in tags" :href="item.link" class="blog-tag">{{item.name}}</a>
    </div>
</template>

<script type="text/ecmascript-6">
    import config from '../../common/js/config';

    const queryUrl = '/tag';
    const separate = config.port === '' ? '' : ':';
    export default {
        data() {
          return {
              tags: []
          };
        },
        created() {
            this.$http.get(config.host + separate + config.port + queryUrl).then((response) => {
                response = response.body;
                if (response.success) {
                    this.tags = response.data.tags;
                }
            });
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    .blog-tag{
        display: inline-block;
        background: #ecf0f1;
        padding: 8px 8px;
        margin: 4px;
        color: #2f2f2f;
        border-radius: 3px;
        &:hover{
            color: #fff;
            background: #2f2f2f;
        }
    }
</style>
