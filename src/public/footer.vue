<template>
  <footer class="company-footer">
    <Panel cname="company-panel">
      <section class="company-panel-body">
        <div class="service">
          <img src="../img/577cf395N31e76288.png" alt="客服专线">
        </div>
        <div class="version">
          <div>
            <img src="../img/577dc28dNe5138337.png" alt="客户端">
            <p>客户端</p>
          </div>
          <div>
            <img src="../img/577cf3dcN18aadbf2.png" alt="触屏版">
            <p>触屏版</p>
          </div>
          <div>
            <img src="../img/577cf3e5N53f740b8.png" alt="电脑版">
            <p>电脑版</p>
          </div>
        </div>
        <ul class="des">
          <li>Copyright © 2004-2017 京东JD.com 版权所有</li>
          <li>投资有风险，购买需谨慎</li>
          <li>京东金融平台服务协议</li>
          <li>京东金融隐私政策</li>
        </ul>
      </section>
    </Panel>
  </footer>
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
  .company-footer {
    .company-panel {
      background-color: #f5f5f5;
      color: #999;
    }
    .service {
      img {
        width: 100%;
      }
    }
    .version {
      @include flex(row);
      div {
        width: 33.3333%;
        text-align: center;
        font-size: px2rem(26);
        img {
          width: px2rem(90);
          margin: px2rem(12) 0;
        }
        margin-bottom: px2rem(36);
      }
    }
    .des {
      font-size: px2rem(24);
      text-align: center;
      li {
        line-height: px2rem(88);
        border-top: 1px solid #ccc;
      }
    }
  }
</style>