<template>
  <div class="white-bar-slider">
    <slider :items="items"></slider>
  </div>
</template>

<script>
import Slider from '../core/slider.vue'
export default {
  data () {
    return {
      items: [{
        src: require('../img/59bf1f41N50d846f9.jpg'),
        href: 'money',
        title: '白条1'
      }, {
        src: require('../img/59a94358N92475fca.jpg'),
        href: 'money',
        title: '白条2'
      }]
    }
  },
  components: {
    Slider
  }
}
</script>

<style lang='scss'>
  .white-bar-slider img{
    width: 100%;
  }
</style>
