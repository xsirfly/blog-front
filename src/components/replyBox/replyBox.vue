<template>
    <form v-if="show" class="replyBox">
        <div class="field">
            <input type="text" id="username" class="username" v-model="username" @focus="getUserFocus" @blur="loseUserFocus">
            <label for="username" :class="userFocus">Your name</label>
        </div>
        <div class="field">
            <input type="email" id="email" v-model="email" @focus="getEmailFocus" @blur="loseEmialFocus">
            <label for="email" :class="emailFocus">Your email</label>
        </div>
        <div class="field">
            <textarea id="content" v-model="content" @focus="getContentFocus" @blur="loseContentFocus"></textarea>
            <label for="content" :class="contentFocus">Content</label>
        </div>
        <div class="submit">
            <i class="fa fa-edit"></i>
            提交评论
        </div>
    </form>
</template>

<script type="text/ecmascript-6">
    export default {
        props: ['show'],
        data() {
            return {
                userFocus: '',
                emailFocus: '',
                contentFocus: '',
                username: '',
                email: '',
                content: ''
            };
        },
        methods: {
            getUserFocus() {
                this.userFocus = 'focus';
            },
            loseUserFocus() {
                if (this.username === '') {
                    this.userFocus = '';
                }
            },
            getEmailFocus() {
                this.emailFocus = 'focus';
            },
            loseEmialFocus() {
                if (this.email === '') {
                    this.emailFocus = '';
                }
            },
            getContentFocus() {
                this.contentFocus = 'focus';
            },
            loseContentFocus() {
                if (this.content === '') {
                    this.contentFocus = '';
                }
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
            font-size: 20px;
            font-weight: bold;
            color: #FFF;
            padding: 15px;
            border-radius: 10px;
            display: inline-block;
        }
    }
</style>
