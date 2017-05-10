<template>
    <div>
        <h2 class="title">大家的脚印</h2>
        <comment :comments="comments"></comment>
        <replyBox :show="true"></replyBox>
    </div>
</template>

<script type="text/ecmascript-6">
    import comment from '../../components/comment/comment';
    import replyBox from '../../components/replyBox/replyBox';

    export default {
        props: ['comments'],
        components: {
            comment,
            replyBox
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    .title {
        margin: 0 0 10px 0;
        padding: 0px;
        text-align: left;
        color: #000;
    }
</style>
