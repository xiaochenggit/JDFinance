<template>
  <div class="welfare">
    <Panel cname="welfare-panel" title="白条福利" :isBorder='true'>
      <section class="welfare-panel-body">
        <ul>
          <li>
            <img src="../img/58affd58Nb5c9198e.jpg" alt="开通白条"/>
            <div>
              <h4>开通白条</h4>
              <p>送188元礼包</p>
            </div>
            <em>立即开通 ></em>
          </li>
          <li>
            <img src="../img/58affc3bNbfa8f9d7.jpg" alt="月度"/>
            <div>
              <h4>白条闪付</h4>
              <p>新手享158元礼包</p>
            </div>
            <em>随机立减 ></em>
          </li>
          <li>
            <img src="../img/58bd2e10N453e9464.jpg" alt="月度"/>
            <div>
              <h4>白条提额</h4>
              <p>金融app专享提额礼包</p>
            </div>
            <em>去提额 ></em>
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
  .welfare {
    .welfare-panel-body {
      li {
        height: px2rem(140);
        @include flex(row);
        align-items: center;
        img {
          width: px2rem(88);
          margin: 0 px2rem(32);
        }
        div{
          width: px2rem(304);
          font-size: px2rem(32);
          line-height: 1.8;
          p{
            font-size: px2rem(24);
            color: #ff3232;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            line-height: 1.1;
          }
        }
        em {
          color: #ff801a;
          font-size: px2rem(28);
        }
        &:after{
          content: '';
          display: block;
          width: 100%;
          border-bottom: 1px solid #ddd;
          margin-left: px2rem(152);
        }
        &:last-child:after {
          display: none;
        }
      }
    }
  }
</style>