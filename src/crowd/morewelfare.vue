<template>
  <div class="crow-more-welfare">
    <Panel cname="crow-more-welfare-panel" title="更多福利">
      <section class="crow-more-welfare-panel-body list">
        <img src="../img/599cee57Naea99020.jpg" alt="支付">
        <img src="../img/599cee04Ne77b3641.jpg" alt="服务号">
        <img src="../img/59549aedNa30670f7.jpg" alt="公众号">
        <p>专项福利 ></p>
      </section>
    </Panel>
  </div>
</template>

<script>
  import Panel from '../core/panel.vue';
  export default {
    components: {
      Panel
    }
  }
</script>

<style scoped lang='scss'>
  @import '../css/layout.scss';
  @import '../css/px2rem.scss';
  $designWidth : 640;
  .crow-more-welfare{
    .crow-more-welfare-panel {
      position: relative;
      padding-bottom: px2rem(40);
    } 
    .list{
      @include flex(row);
      >img{
        width: 33.3333%;
        height: auto;
      }
      p{
        position: absolute;
        right: px2rem(36);
        top: 0;
        line-height: px2rem(112);
        font-size: px2rem(28);
        color: #999;
      }
    }
  }
</style>