<template>
  <div class="new-product">
    <Panle cname="new-product-panle" title="重酬新品">
      <div class="arrow">更多尖货 ></div>
      <Slider :options="swiperOption" cname="new-product-slider" :items="items"></Slider>
    </Panle>
  </div>
</template>

<script>
import Panle from '../core/panel.vue'
import Slider from '../core/slider.vue'
export default {
  data () {
    return {
      items: [{
        href: 'home',
        title: '智能插座',
        src: require('../img/5ab85da9N8af17d57.jpg')
      }, {
        href: 'home',
        title: '按摩贴',
        src: require('../img/5ab85dd5Ndaf12da2.jpg')
      }, {
        href: 'home',
        title: '新风王',
        src: require('../img/5ab85ddeNaa593024.jpg')
      }, {
        href: 'home',
        title: '淑云截',
        src: require('../img/5ab85debN56037cfc.jpg')
      }],
      swiperOption: {
        slidesPerView: 2.3,
        spaceBetween: 30
      }
    }
  },
  components: {
    Panle,
    Slider
  }
}
</script>

<style lang='scss'>
  @import '../css/px2rem.scss';
  $designWidth : 640;
  .new-product{
    .new-product-slider{
      padding-left: 30px;
      padding-bottom: px2rem(40);
      img {
        width: 100%;
      }
    }
    .new-product-panle{
      position: relative;
      .arrow {
        position: absolute;
        top: 0;
        right: px2rem(40);
        color: #999;
        font-size: px2rem(28);
        line-height: px2rem(112);
      }
    }
  }
</style>
