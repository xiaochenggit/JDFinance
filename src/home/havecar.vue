<template>
  <div class="have-car">
    <Panel cname="have-car-panel" title="有车有钱">
      <section class="have-car-body">
        <div class="advertising">
          <img src="../img/5ac180b5N008bdabb.png" alt="有车有钱">
          <img src="../img/5a56c877Nee6cfc4d.jpg" alt="有车有钱">
        </div>
        <ul class="list">
          <li>
            <img src="../img/5a4f2622Nc4aca701.png" alt="旅游">
            <p>旅游</p>
          </li>
          <li>
            <img src="../img/5a4f265bN66ef5ae8.png" alt="医美">
            <p>医美</p>
          </li>
          <li>
            <img src="../img/5a4f2693N937f1905.png" alt="房抵贷">
            <p>房抵贷</p>
          </li>
          <li>
            <img src="../img/5a4f26bfN03ed1f66.png" alt="驾校">
            <p>驾校</p>
          </li>
          <li>
            <img src="../img/5a4f26edN6cdfda66.png" alt="分期用">
            <p>分期用</p>
          </li>
        </ul>
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
  .have-car-panel {
    .advertising {
      @include flex(row);
      img {
        width: 50%;
        height: auto;
      }
    }
    .list{
      @include flex(row);
      font-size: px2rem(26);
      color: #666;
      margin-top: px2rem(80);
      li{
        width: 20%;
        text-align: center;
        img{
          width: px2rem(90);
        }
        p{
          margin: px2rem(10) 0 px2rem(10);
        }
      }
    }
  }
</style>