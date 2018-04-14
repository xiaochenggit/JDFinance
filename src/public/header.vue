<template>
  <div class="header">
    <span class="left">
      <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
    </span>
    <Btn class="downloadBtn">App下载</Btn>
  </div>
</template>

<script>
  import Btn from '../core/btn.vue';
  export default {
    components: {
      Btn
    }
  }
</script>

<style lang='scss' scoped>
  @import '../css/px2rem.scss';
  $designWidth : 640; //写scss之前，必须要先定义designWidth。
  .header{
    padding: px2rem(18) px2rem(22);
    font-size: px2rem(28);
    line-height: px2rem(56);
    background: #fff url('../img/jr-logo.png') center center no-repeat;
    background-size: auto 50%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
  }
  .downloadBtn.btn{
    font-size: px2rem(24);
    line-height: px2rem(56);
    height: px2rem(56);
    min-width: px2rem(120);
    border-radius: px2rem(4);
    float: right;
    padding: 0rem;
  }
</style>