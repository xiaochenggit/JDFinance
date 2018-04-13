<template>
  <div class="insurance">
    <Panel title="保险保障" cname="insurance-panel">
      <Slider :items='items' :options='swiperOption' cname="insurance-slider"></Slider>
      <div class="advertising">
        <img src="../img/5a953b19Nd7e46726.jpg" alt="广告">
      </div>
    </Panel>
  </div>
</template>

<script>
  import Panel from '../core/panel.vue';
  import Slider from '../core/slider.vue';
  export default {
    data () {
      return {
        items: [{
          href: 'home',
          src: require('../img/5a153643N04efba6e.jpg'),
          title:'1'
        },{
          href: 'home',
          src: require('../img/59cb6304Naef85042.jpg'),
          title:'2'
        },{
          href: 'home',
          src: require('../img/59cb632fNcac82571.jpg'),
          title:'3'
        },{
          href: 'home',
          src: require('../img/5a31dde6Nbba7f26c.png'),
          title:'4'
        },{
          href: 'home',
          src: require('../img/59cb637dNf25b0dff.jpg'),
          title:'5'
        }],
        swiperOption: {
          slidesPerView: 2.3,
          spaceBetween: 30
        }
      }
    },
    components: {
      Panel,
      Slider
    }
  }
</script>

<style lang='scss'>
  .insurance {
    .insurance-panel {
      .advertising {
        margin-top: 30px;
        img {
          width: 100%;
        }
      }
      padding-bottom: 30px;
    }
    .insurance-slider {
      img{
        width: 100%;
      }
      padding-left: 30px;
    }
  }
</style>