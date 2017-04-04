<template>
    <div>
        <div v-for="essay in essays" class="blog-post left-align">
            <a href="#" class="post-title">{{essay.title}}</a>
            <ul class="post-meta">
                <li><i class="fa fa-user"></i> <a href="#">{{essay.author}}</a></li>
                <li><i class="fa fa-calendar"></i>{{essay.date}}</li>
                <li><i class="fa fa-comments"></i> <a href="#">{{essay.comments}}</a> comments</li>
            </ul>
            <p>{{essay.intro}}</p>
            <a href="">Read more &raquo;</a>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: ['essays']
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../../common/css/font-awesome.css";
    .blog-post{
        padding-bottom: 32px;
        margin-bottom: 40px;
        border-bottom: 1px solid rgba(108, 108, 108, .2);
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        &:last-child{
            border-bottom: none;
        }
        .post-title{
            font-size: 24px;
            line-height: 32px;
        }
        .post-meta{
            margin: 8px 0 16px 0;
            li{
                display: inline-block;
                font-size: 12px;
                font-weight: 400;
                color: #6c6c6c;
                margin-right: 8px;
                a{
                    color: #6c6c6c;
                }
                i{
                    margin-right: 4px;
                }
            }
        }
        p{
            margin-bottom: 16px;
        }
    }

    .left-align{
        text-align: left;
    }
</style>
