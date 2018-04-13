<template>
	<div class="home">
		<Heador/>
		<Hslider/>
		<Novice/>
		<Borrow/>
		<Money/>
		<Product/>
		<Life/>
		<Insurance/>
		<HaveCar/>
		<Footer/>
	</div>
</template>

<script>
	import Heador from '../public/header.vue';
	import Hslider from './hslider.vue';
	import Novice from './novice.vue';
	import Borrow from './borrow.vue';
	import Money from './money.vue';
	import Product from './produce.vue';
	import Life from './Life.vue';
	import Insurance from './insurance.vue';
	import HaveCar from './havecar.vue';
	import Footer from '../public/footer.vue';
	export default {
		components: {
			Heador,
			Hslider,
			Novice,
			Borrow,
			Money,
			Product,
			Life,
			Insurance,
			HaveCar,
			Footer
		}
	}
</script>

<style scoped>

</style>