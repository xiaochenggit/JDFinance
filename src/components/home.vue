<template>
	<div class="home">
		<Heador/>
		<Hslider/>
		<Novice/>
		<Borrow/>
	</div>
</template>

<script>
	import Heador from '../public/header.vue';
	import Hslider from './hslider.vue';
	import Novice from './novice.vue';
	import Borrow from './borrow.vue';
	export default {
		components: {
			Heador,
			Hslider,
			Novice,
			Borrow
		}
	}
</script>

<style scoped>

</style>