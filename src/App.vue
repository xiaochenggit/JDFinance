<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  @import './css/reset.scss';
  @import './css/px2rem.scss';
  $designWidth : 640;
  body {
    background-color: #f5f5f5;
    font-family: 'PingFangSC-Regular,Arial,"Helvetica Neue",Helvetica,sans-serif';
    .main {
      padding: px2rem(112) 0 px2rem(96);
    }
  }
</style>
