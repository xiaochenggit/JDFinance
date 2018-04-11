<template>
	<div class="hslider">
		<Slider :cname='name' :items="items"/>
		<section class="list">
			<div class="item" v-for="item in entris" :key='item.title'>
				<img :src="item.src" :alt="item.title">
				<p :style="{color: item.title === '抢钢镚' ? 'red' : ''}">{{item.title}}</p>
			</div>
		</section>
	</div>
</template>

<script>
	import Slider from '../core/slider.vue';
	export default {
		data () {
			return {
				items: [{
					title: '红包',
					src: require('../img/5ac97f30N0b690c0c.jpg'),
					href: 'home'
				},{
					title: '红包红包',
					src: require('../img/5acca83eN5e543b33.png'),
					href: 'home'
				},{
					title: '红包红包',
					src: require('../img/5acca863Na29ab547.jpg'),
					href: 'home'
				},{
					title: '红包红包红包红包',
					src: require('../img/hb.jpg'),
					href: 'home'
				}],
				entris: [{
					title: '优惠券',
					src: require('../img/yhj.png')
				},{
					title: '领红包',
					src: require('../img/lhb.png')
				},{
					title: '抢钢镚',
					src: require('../img/qgb.png')
				},{
					title: '白条提额',
					src: require('../img/bt.png')
				}],
				name: 'slider'
			}
		},
		components: {
			Slider
		}
	}
</script>

<style lang='scss'>
	@import '../css/px2rem.scss';
	@import '../css/element.scss';
  $designWidth : 640; //写scss之前，必须要先定义designWidth。
	.hslider {
		margin-top: px2rem(120);
		img {
			width: 100%;
		}
		.list {
			font-size: px2rem(26);
			color: #666;
			padding-top: px2rem(40);
			@include list(row);
			justify-content: space-around;
			.item {
				width: px2rem(120);
				text-align: center;
				img {
					width: px2rem(90)
				}
				p {
					margin-top: px2rem(12);
				}
			}
		}
	}
</style>