<template>
	<div class="borrow">
		<Panle title="极速借贷" cname="borrow-panle">
			<section class="borrow-panle-body">
				<img src="../img/5acca83eN5e543b33.png" alt="极速借贷">
			</section>
		</Panle>
	</div>
</template>

<script>
	import Panle from '../core/panel.vue';
	export default {
		components: {
			Panle
		}
	}
</script>
<style scoped lang='scss'>
 @import '../css/px2rem.scss';
 $designWidth : 640;
	.borrow-panle{
		padding-bottom: px2rem(40);
		.borrow-panle-body {
			text-align: center;
		}
		img {
			width: 80%;
			border-radius: px2rem(40);
		}
	}
</style>