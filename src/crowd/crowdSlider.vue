<template>
  <div class="crowd-slider">
    <section class="crowd-slider-body">
        <swiper :options="swiperOption">
        <swiper-slide>签到领流量，1元500M<em>></em></swiper-slide>
        <swiper-slide>百万白条券免费送，速来领取！<em>></em></swiper-slide>
        <swiper-slide>我是随便填的<em>></em></swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        autoplay: true,
        loop: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang='scss'>
  @import '../css/px2rem.scss';
  $designWidth : 640;
  .crowd-slider-body {
    .swiper-container {
      height: px2rem(88);
      line-height: px2rem(88);
      overflow: hidden;
      font-size: px2rem(28);
      color: #333;
      em {
        float: right;
        margin-right: px2rem(24);
      }
    }
    padding-left: px2rem(160);
    background: #fff url('../img/scroll_title_img.png') left center no-repeat;
  }
</style>
