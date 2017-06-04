<template>
    <div>
        <input type="text" placeholder="Search"
               v-model="searchKey"
               @keydown.enter="search">
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                searchKey: ''
            };
        },
        methods: {
            search() {
                if (this.searchKey === '' || this.searchKey === null) {
                    return;
                }
                this.$router.push({
                    path: '/search',
                    query: {
                        query: this.searchKey,
                        offset: 1
                    }
                });
            }
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
