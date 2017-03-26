<template>
    <div>
		<preloader v-bind:show="preloaderShow"></preloader>
		<index></index>
	</div>
</template>

<script>
	import preloader from '../../components/preloader/preloader';
	import index from '../../components/index/index';
	export default {
		data() {
			return {
				preloaderShow: true
			};
		},
		components: {
			preloader,
			index
		},
		created() {
			setTimeout(() => {
				this.preloaderShow = false;
			}, 2000);
		}
	};
</script>

<style lang="scss" rel="stylesheet/scss">
	@import "../../common/css/base.css";
	@import "../../common/css/reset.css";
</style>
