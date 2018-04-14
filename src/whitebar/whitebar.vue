<template>
  <div class="white-bar main">
    <Header/>
    <Wslider/>
    <Welfare/>
    <MoreService/>
    <Footer/>
    <nav-bar/>
  </div>
</template>

<script>
import Header from '../public/header.vue'
import Footer from '../public/footer.vue'
import NavBar from '../public/navBar.vue'
import Wslider from './wSlider.vue'
import Welfare from './welfare.vue'
import MoreService from './moreService.vue'
export default {
  components: {
    Header,
    Footer,
    NavBar,
    Wslider,
    Welfare,
    MoreService
  }
}
</script>
<style lang='scss'>
</style>
