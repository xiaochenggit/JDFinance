<template>
	<div class="home">
		<Heador/>
		<Hslider/>
		<Novice/>
		<Borrow/>
		<Money/>
		<Product/>
	</div>
</template>

<script>
	import Heador from '../public/header.vue';
	import Hslider from './hslider.vue';
	import Novice from './novice.vue';
	import Borrow from './borrow.vue';
	import Money from './money.vue';
	import Product from './produce.vue';
	export default {
		components: {
			Heador,
			Hslider,
			Novice,
			Borrow,
			Money,
			Product
		}
	}
</script>

<style scoped>

</style>