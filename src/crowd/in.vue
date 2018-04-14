<template>
  <div class="crowd-in">
    <Panel cname='crowd-in-panel' title="In货推荐">
      <section class="list" v-for="item in items" :key="item.title">
        <img :src="item.src" :alt="item.title">
        <section class="list-item" v-for="ele in item.arr" :key="ele.title">
          <img :src="ele.img" :alt="ele.title">
          <p class="title">{{ ele.title }}</p>
          <p class="price"><em>{{ ele.price }}</em>起</p>
          <div class="percent">
            <div class="warp">
              <div class="inner" :style="{width: ele.percent + '%'}"></div>
            </div>
            <p>{{ ele.percent }}%</p>
          </div>
          <span class="sub">精选</span>
        </section>
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
          src: require('../img/5846d8e7N20446dbd.png'),
          title: '科技',
          arr: [{
            title: '双响炮蓝牙音响',
            img: require('../img/5a33a171N18c9c80a.jpg'),
            price: '29.00',
            percent: 50,
            sub: '精选'
          },{
            title: '脑波相机',
            img: require('../img/5a37676dNc31da9ea.jpg'),
            price: '998.00',
            percent: 255,
            sub: '专题'
          }]
        },{
          src: require('../img/5846a953N66b67d05.png'),
          title: '智能',
          arr: [{
            title: '智能电动牙刷',
            img: require('../img/5a138f21N32dca834.jpg'),
            price: '19.00',
            percent: 481,
            sub: '精选'
          },{
            title: '烟草加热电子烟',
            img: require('../img/5a33a983N077cac56.jpg'),
            price: '258.00',
            percent: 105,
            sub: '专题'
          }]
        },{
          src: require('../img/5846d310Ne93f00c9.png'),
          title: '美食',
          arr: [{
            title: '赖公高淮封藏老酒',
            img: require('../img/5a3cb182N15868ea1.jpg'),
            price: '99.00',
            percent: 199,
            sub: '精选'
          },{
            title: '泗洪花雕醉蟹',
            img: require('../img/5a33a171N18c9c80a.jpg'),
            price: '58.00',
            percent: 222,
            sub: '专题'
          }]
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
  .crowd-in{
    .list{
      @include flex(row);
      >img{
        width: 100%;
        height: auto;
      }
      .list-item{
        position: relative;
        width: 50%;
        text-align: center;
        line-height: px2rem(40);
        background-color: rgba(0, 0, 0, 0.02);
        padding-bottom: px2rem(20);
        margin-bottom: px2rem(40);
        >img{
          width: px2rem(180);
          margin: px2rem(40) auto px2rem(20);
        }
        .title{
          color: #444;
          font-size: px2rem(28);
        }
        .price{
          color: #999;
          font-size: px2rem(20);
          em{
            margin-right: px2rem(8);
            font-size: px2rem(36);
            color: #ff3232;
            &:before{
              content: '￥';
              font-size: px2rem(28);
            }
          }
        }
        .percent{
          @include flex(row);
          align-items: center;
          justify-content: space-around;
          padding: 0 px2rem(30);
          .warp {
            width: px2rem(156);
            background-color: #F6E6E6;
            border-radius: px2rem(22);
            height: px2rem(10);
            overflow: hidden;
            .inner{
              height: 100%;
              background-image: linear-gradient(270deg, #F55 1%, #FF9C31 100%);
              max-width: 100%;
              width: 100%;
            }
          }
          p{
            font-size: px2rem(24);
          }
        }
        .sub{
          position: absolute;
          top: 0;
          left: 0;
          font-size: px2rem(20);
          background-color: #c1c1c1;
          padding: px2rem(4) px2rem(8);
          color: #ff0000;
          display: block;
          line-height: 1;
        }
      }
    }
  }
</style>