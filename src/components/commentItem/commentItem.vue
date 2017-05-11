<!--suppress ALL -->
<template>
    <div class="comment" :style="level">
        <a class="avatar">
            <img src="static/images/foot.png">
        </a>
        <div class="content">
            <span class="author">{{comment.username}}</span>
            <span class="email">{{comment.email}}</span>
            <span class="date">{{comment.time}}</span>
            <div class="text">{{comment.content}}</div>
            <div class="actions">
                <a v-if="reply" @click="reply = !reply">回复</a>
                <a v-if="!reply" @click="reply = !reply">取消回复</a>
            </div>
            <replyBox :show="!reply" :reply="comment" :comments="null" :articleId="comment.article_id"
                      v-on:hidden="hiddenReply"></replyBox>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import replyBox from '../replyBox/replyBox';
    export default {
        props: ['comment'],
        data() {
            return {
                reply: true,
                level: {
                    marginLeft: this.comment.level * 30 + 'px'
                }
            };
        },
        components: {
            replyBox
        },
        methods: {
            hiddenReply() {
                this.reply = true;
            }
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    .comment{
        padding-top: 8px;
        .avatar {
            float: left;
            width: 64px;
            height: 48px;
            display: block;
            img {
                display: block;
                margin: 0 auto;
                width: 48px;
                height: 48px;
                border-radius: 500px;
            }
        }
        .content {
            display: block;
            padding: 4px 16px 0px 16px;
            border-top: 1px solid rgba(0, 0, 0, 0.2);
            text-align: left;
            margin-left: 56px;
            .author {
                cursor: pointer;
                font-size: 20px;
            }
            .date {
                color: rgba(0, 0, 0, 0.3);
                font-size: 15px;
            }
            .text {
                margin: 5px 0 5px 0;
                padding: 0px;
            }
            .actions {
                a {
                    color: rgba(0,0,0,0.3);
                    font-size: 15px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
