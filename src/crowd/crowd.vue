<template>
  <div class="crowd main">
    <Header/>
    <crowd-slider/>
    <crowd-sign/>
    <In/>
    <MoreWelfare/>
    <Footer :is-service="false"/>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import Header from '../public/header.vue'
import Footer from '../public/footer.vue'
import NavBar from '../public/navBar.vue'
import CrowdSlider from './crowdSlider.vue'
import CrowdSign from './crowdsign.vue'
import In from './in.vue'
import MoreWelfare from './morewelfare.vue'
export default {
  components: {
    Header,
    Footer,
    NavBar,
    CrowdSlider,
    CrowdSign,
    In,
    MoreWelfare
  }
}
</script>

<style scoped>
</style>
