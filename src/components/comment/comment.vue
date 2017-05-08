<!--suppress ALL -->
<template>
    <div class="comments">
        <div v-for="comment in comments">
            <commentItem :comment="comment"></commentItem>
            <comment :comments="comment.replys"></comment>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import commentItem from '../commentItem/commentItem';
    export default {
        props: ['comments'],
        components: {
            commentItem
        },
        name: 'comment'
    };
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
