<template>
	<div class="crowd-sign">
		<Panel title="每日签到" cname="crowd-sign-panel">
			<section class="crowd-sign-body">
				<img src="../img/589bd5a2Nabdbbbd9.jpg" alt="每日签到">
				<img src="../img/589bd5d4Nf32e7adc.jpg" alt="每日签到">
				<p>不抢白不抢</p>
			</section>
		</Panel>
	</div>
</template>

<script>
	import Panel from '../core/panel.vue';
	export default {
		components: {
			Panel
		}
	}
</script>

<style scoped lang='scss'>
	@import '../css/layout.scss';
	@import '../css/px2rem.scss';
  $designWidth : 640;
	.crowd-sign {
		position: relative;
		.crowd-sign-body{
			padding-bottom: px2rem(40);
			@include flex(row);
			img{
				width: 50%;
				height: auto;
			}
			p {
				position: absolute;
				top: 0;
				right: px2rem(36);
				line-height: px2rem(112);
				font-size: px2rem(28);
				color: #999;
			}
		}
	}
</style>