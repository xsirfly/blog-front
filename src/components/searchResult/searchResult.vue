<template>
    <div>
        <result :url="url" :routeName="routeName"></result>
    </div>
</template>

<script type="text/ecmascript-6">
    import result from '../../components/result/result';

    export default {
        data() {
            return {
                url: '/search',
                routeName: 'search'
            };
        },
        components: {
            result
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
