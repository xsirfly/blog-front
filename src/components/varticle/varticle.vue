<template>
    <div id="article">
        <div href="#" class="post-title">{{article === null ? '' : article.title}}</div>
        <div v-article="html"></div>
        <div>
            <h2>Comments</h2>
            <comment :comments="comments"></comment>
            <replyBox :show="true" :articleId="articleId" :comments="comments"></replyBox>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import config from '../../common/js/config';
    import hljs from 'highlight.js';
    import comment from '../../components/comment/comment';
    import replyBox from '../../components/replyBox/replyBox';
    import 'highlight.js/styles/monokai-sublime.css';

    const separate = config.port === '' ? '' : ':';
    const articleUrl = '/article';
    const commentUrl = '/comment';
    export default {
        data() {
            return {
                html: '<div>未获取到数据</div>',
                articleId: this.$route.params.id,
                article: null,
                comments: []
            };
        },
        components: {
            comment,
            replyBox
        },
        created() {
            this.$http.get(config.host + separate + config.port + articleUrl + '/' + this.articleId).then((response) => {
                response = response.body;
                if (response.success) {
                    this.article = response.data.article;
                    this.html = response.data.article.html;
                }
            });

            let commentParam = '?article_id=' + this.articleId;
            this.$http.get(config.host + separate + config.port + commentUrl + commentParam).then((response) => {
                response = response.body;
                if (response.success) {
                    this.comments = response.data.comments;
                }
            });
        },
        directives: {
            article: {
                update: function(el, binding) {
                    el.innerHTML = binding.value;
                    let blocks = el.querySelectorAll('pre code');
                    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
                }
            }
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../../common/css/font-awesome.css";
    #article {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        line-height: 22px;
        text-align: left;
        .post-title {
            font-size: 24px;
            font-weight: 500;
            line-height: 32px;
            text-align: center;
            color: #e74c3c;
        }
        img {
            max-width: 100%;
        }
        h2, h3, h4, h5, h6 {
            font-weight: 500;
            padding-bottom: 5px;
            border-bottom: 1px solid rgba(108, 108, 108, .2);
        }
        pre {
            margin: 5px 0px;
        }
        ol {
            li {
                list-style: decimal inside;
            }
            margin-left: 10px;
        }
        ul {
            li {
                list-style: disc inside;
            }
            margin-left: 10px;
        }
    }
</style>
