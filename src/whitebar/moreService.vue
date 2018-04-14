<template>
  <div class="more-service">
    <Panle title="更多服务" cname="more-service-panle">
      <section class="more-service-list">
        <div class="more-service-item" v-for="item in items" :key='item.title'>
          <img :src="item.src" alt="item.title">
          <p>{{item.title}}</p>
        </div>
      </section>
    </Panle>
  </div>
</template>

<script>
import Panle from '../core/panel.vue'
export default {
  data () {
    return {
      items: [{
        title: '小白卡',
        src: require('../img/590aca78Nf15a7947.png')
      }, {
        title: '白条商城',
        src: require('../img/590aca55N22a6f274.png')
      }, {
        title: '消费分期',
        src: require('../img/590ac7deN9a0eac2a.png')
      }, {
        title: '借钱',
        src: require('../img/59b8da06N14f62cf3.png')
      }, {
        title: '白条提额',
        src: require('../img/590ac8e8Ne9def22e.png')
      }, {
        title: '白条闪付',
        src: require('../img/590ac8afN5dd91d6e.png')
      }, {
        title: '小白会玩',
        src: require('../img/590ac860N752d5738.png')
      }, {
        title: '钢镚',
        src: require('../img/590aca20N089fd34a.png')
      }]
    }
  },
  components: {
    Panle
  }
}
</script>

<style scoped lang='scss'>
  @import '../css/px2rem.scss';
  $designWidth : 640;
  @import '../css/layout.scss';
  .more-service {
    .more-service-panle {
      padding-bottom: px2rem(20);
    }
    .more-service-list{
      @include flex(row);
      .more-service-item {
        width: 25%;
        font-size: px2rem(26);
        line-height: px2rem(38);
        text-align: center;
        margin-bottom: px2rem(30);
        img {
          width: px2rem(90);
        }
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &.active{
            color: #FF801A;
          }
        }
      }
    }
  }
</style>
