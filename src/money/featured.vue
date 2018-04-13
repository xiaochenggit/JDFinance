<template>
  <div class="featured">
    <Panel cname="featured-panel" title="理财精选" :isBorder='true'>
      <section class="featured-panel-body">
        <ul>
          <li>
            <img src="../img/580d80afN63b1085a.png" alt="月度"/>
            <div>
              <h4>月度理财</h4>
              <p>预期年化收益率4.50%</p>
            </div>
            <em>去赚钱 ></em>
          </li>
          <li>
            <img src="../img/580d8189N6b6f8052.png" alt="月度"/>
            <div>
              <h4>季度理财</h4>
              <p>历史年化回报率5.50%</p>
            </div>
            <em>去赚钱 ></em>
          </li>
          <li>
            <img src="../img/580d7f6cN7f35e596.png" alt="月度"/>
            <div>
              <h4>一年理财</h4>
              <p>历史年化回报率5.80%</p>
            </div>
            <em>去赚钱 ></em>
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
  .featured {
    .featured-panel-body {
      li {
        height: px2rem(140);
        @include flex(row);
        align-items: center;
        img {
          width: px2rem(88);
          margin: 0 px2rem(32);
        }
        div{
          width: px2rem(344);
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