<template>
    <div class="home">
		<preloader v-bind:show="preloaderShow"></preloader>
        <slide></slide>
		<slogon></slogon>
	</div>
</template>

<script>
	import preloader from '../../components/preloader/preloader';
	import slide from '../../components/slide/slide';
	import slogon from '../../components/slogon/slogon';
	export default {
		data() {
			return {
				preloaderShow: true
			};
		},
		components: {
			preloader,
			slide,
			slogon
		},
		created() {
			setTimeout(() => {
				this.preloaderShow = false;
			}, 20);
		}
	};
</script>

<style lang="scss" rel="stylesheet/scss">
	@import "../../common/css/base.css";
	@import "../../common/css/reset.css";
	.home{
		height: 100%;
		width: 100%;
		top:0;
		position: relative;
        &:after{
			clear: both;
		}
		&:hover{
			.slides-navigation{
				a{
					opacity: 0.3;
				}
			}
		}
	}
</style>
