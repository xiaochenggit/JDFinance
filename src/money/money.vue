<template>
  <div class="money-vue main">
    <Header/>
    <Mslider/>
    <advertising-one/>
    <money-m/>
    <Featured/>
    <advertising-two/>
    <Footer :isService='false'/>
    <nav-bar/>
  </div>
</template>

<script>
  import Header from '../public/header.vue';
  import Footer from '../public/footer.vue';
  import NavBar from '../public/navBar.vue';
  import Mslider from './mSlider.vue';
  import AdvertisingOne from './advertisingOne.vue';
  import MoneyM from './money-m.vue';
  import Featured from './featured.vue';
  import AdvertisingTwo from './advertisingTwo.vue';
  export default {
    components: {
      Header,
      Footer,
      NavBar,
      Mslider,
      AdvertisingOne,
      MoneyM,
      Featured,
      AdvertisingTwo
    }
  }
</script>
<style lang='scss'>
  .money-vue {
    .money-ad-panel{
      overflow: hidden;
      img{
        width: 100%;
        float: left;
      }
    }
  }
</style>