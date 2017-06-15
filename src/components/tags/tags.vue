<template>
    <div>
        <h4>Tags</h4>
        <router-link v-for="item in tags" :to="getLink(item)" class="blog-tag" key="item.name">{{item.name}}</router-link>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: ['tags'],
        methods: {
            getLink(item) {
                let link = `/tag?query=${item.id}&offset=1`;
                return link;
            }
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
