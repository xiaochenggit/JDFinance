<template>
  <div class="money">
    <Panel title="理财精选" cname="money-panel">
      <section class="money-panel-body">
        <dl v-for="item in items" :key="item.title" class="item">
          <dt class="titile">{{ item.title }}<span>{{ item.sub }}</span></dt>
          <dd class="percent">{{ item.percent }}</dd>
          <dd class="des">{{ item.des }}</dd>
        </dl>
      </section>
    </Panel>
  </div>
</template>

<script>
  import Panel from '../core/panel.vue';
  export default {
    data () {
      return {
        items: [{
          title: '定期理财',
          sub: '90天可质押',
          percent: '5.50%',
          des: '历史年化结算利率'
        },{
          title: '年年盈',
          sub: '理财推荐',
          percent: '5.80%',
          des: '综合年化收益率'
        },{
          title: '基智账户',
          sub: '组合投资',
          percent: '8%-10%',
          des: '止盈年化收益率'
        },{
          title: '小白基金',
          sub: '超短期',
          percent: '5.00%',
          des: '7日年化收益率'
        }]
      }
    },
    components: {
      Panel
    }
  }
</script>

<style scoped lang='scss'>
  @import '../css/layout.scss';
  @import '../css/px2rem.scss';
  $designWidth : 640;
  .money {
    .money-panel-body {
      @include flex(row);
      position: relative;
      &:after {
        content: '';
        display: block;
        border-bottom: 1px solid #ccc;
        position: absolute;
        width: 100%;
        left: 0;
        top: 50%;
      }
    }
    dl {
      &:after {
        content: '';
        display: block;
        border-right: 1px solid #ccc;
        position: absolute;
        height: px2rem(122);
        right: 0;
        top: px2rem(34);
      }
      &:nth-child(2n):after {
        display: none;
      }
      position: relative;
      width: 50%; 
      height: px2rem(218);
      padding-left: px2rem(32);
      box-sizing: border-box;
      dt {
        line-height: px2rem(36);
        font-size: px2rem(30);
        margin: px2rem(34) 0 px2rem(22);
        font-weight: 700;
        color: #000;
        span {
          border: 1px solid #ff5155;
          line-height: px2rem(34);
          padding: 0 px2rem(8);
          font-size: px2rem(22);
          margin-left: px2rem(8);
          vertical-align: top;
          margin-top: px2rem(4);
          color: #ff5155;
        }
      }
      dd.percent {
        line-height: px2rem(38);
        font-size: px2rem(44);
        font-weight: 700;
        color: #ff5155;
      }
      dd.des {
        font-size: px2rem(24);
        color: #999;
        line-height: px2rem(34);
      }
    }
  }
</style>