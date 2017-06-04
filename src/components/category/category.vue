<template>
    <div>
        <h4>Categories</h4>
        <ul class="blog-categories">
            <li v-for="item in categories">
                <router-link :to="item.link" key="item.name">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: ['categories']
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    .blog-categories{
        li{
            border-bottom: 1px solid rgba(108, 108, 108, .2);
            a{
                display: block;
                padding: 16px 8px;
                color: #2f2f2f;
                &:before{
                    content: '\203A';
                    font-weight: 400;
                    margin-right: 8px;
                }
                &:hover{
                    color: #fff;
                    background: #2f2f2f;
                }
            }
        }
    }
</style>
