<template>
	<div>
		<preloader v-bind:show="preloaderShow"></preloader>
	</div>
</template>

<script>
	import preloader from '../../components/preloader/preloader'
	export default {
		data() {
			return {
				preloaderShow: true
			}
		},
		components: {
			preloader
		}
	}
</script>

<style>

</style>
