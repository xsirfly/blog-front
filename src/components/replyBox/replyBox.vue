<template>
    <form v-if="show" class="replyBox">
        <div class="field">
            <input type="text" id="username" class="username" v-model="comment.username" @focus="getUserFocus" @blur="loseUserFocus">
            <label for="username" :class="userFocus">Your name</label>
        </div>
        <div class="field">
            <input type="email" id="email" v-model="comment.email" @focus="getEmailFocus" @blur="loseEmialFocus">
            <label for="email" :class="emailFocus">Your email</label>
        </div>
        <div class="field">
            <textarea id="content" v-model="comment.content" @focus="getContentFocus" @blur="loseContentFocus"></textarea>
            <label for="content" :class="contentFocus">Content</label>
        </div>
        <div class="submit" @click="submit">
            <i class="fa fa-edit"></i>
            提交评论
        </div>
    </form>
</template>

<script type="text/ecmascript-6">
    import config from '../../common/js/config';

    const commentUrl = '/comment';
    const separate = config.port === '' ? '' : ':';

    export default {
        props: ['show', 'reply', 'comments', 'articleId'],
        data() {
            return {
                userFocus: '',
                emailFocus: '',
                contentFocus: '',
                comment: {
                    username: '',
                    email: '',
                    content: ''
                }
            };
        },
        methods: {
            getUserFocus() {
                this.userFocus = 'focus';
            },
            loseUserFocus() {
                if (this.comment.username === '') {
                    this.userFocus = '';
                }
            },
            getEmailFocus() {
                this.emailFocus = 'focus';
            },
            loseEmialFocus() {
                if (this.comment.email === '') {
                    this.emailFocus = '';
                }
            },
            getContentFocus() {
                this.contentFocus = 'focus';
            },
            loseContentFocus() {
                if (this.comment.content === '') {
                    this.contentFocus = '';
                }
            },
            submit() {
                if (this.comment.username === '' || this.comment.email === '' || this.comment.content === '') {
                    alert('用户名、邮箱、回复内容不能为空');
                    return;
                }
                this.comment.article_id = this.articleId;
                let replys = null;
                if (this.reply) {
                    console.log(this.reply);
                    this.comment.reply_id = this.reply.id;
                    this.comment.level = this.reply.level === 2 ? 2 : this.reply.level + 1;
                    replys = this.reply.replys || [];
                } else if (this.comments) {
                    this.comment.reply_id = 0;
                    this.comment.level = 0;
                    replys = this.comments;
                }
                this.$http.post(config.host + separate + config.port + commentUrl, this.comment).then((response) => {
                    response = response.body;
                    if (!response.success) {
                        alert('回复失败');
                 } else {
                        let tmpComment = Object.assign({}, this.comment);
                        replys.push(tmpComment);
                        this.comment.username = '';
                        this.comment.email = '';
                        this.comment.content = '';
                        this.userFocus = '';
                        this.emailFocus = '';
                        this.contentFocus = '';
                        if (this.reply) {
                            this.$emit('hidden');
                        }
                        alert('回复成功');
                    }
                });
            }
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    .replyBox {
        margin-top: 10px;
        .field {
            position: relative;
            margin-bottom: 20px;
            label {
                position: absolute;
                color: #aaa;
                top: 10px;
                left: 10px;
                font-weight: bold;
                font-size: 20px;
                transition: all .2s ease;
                &:focus {
                    font-size: 10px;
                }
            }
            .focus {
                color: #52A5FB!important;
                font-size: 10px!important;
                top: 1%!important;
            }
        }
        .submit {
            background-color: #1BA7D5;
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            color: #FFF;
            padding: 15px;
            border-radius: 10px;
            display: inline-block;
        }
    }
</style>
