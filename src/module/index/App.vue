<template>
	<preloader v-bind:show="preloaderShow"></preloader>
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
