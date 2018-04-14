<template>
  <div class="money-slider">
    <slider :items="items"></slider>
  </div>
</template>

<script>
import Slider from '../core/slider.vue'
export default {
  data () {
    return {
      items: [{
        src: require('../img/59f97c36N7599be57.png'),
        href: 'money',
        title: '理财1'
      }, {
        src: require('../img/59f97baeN3cdae084.jpg'),
        href: 'money',
        title: '理财1'
      }]
    }
  },
  components: {
    Slider
  }
}
</script>

<style lang='scss'>
  .money-slider img{
    width: 100%;
  }
</style>
