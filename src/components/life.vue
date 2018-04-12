<template>
  <div class="life">
    <Panle title="生活服务" cname="life-panle">
      <section class="life-list">
        <div class="life-item" v-for="item in items" :key='item.title'>
          <img :src="item.src" alt="item.title">
          <p>{{item.title}}</p>
          <p v-if="item.active" class="active">{{ item.active }}</p>
        </div>
      </section>
    </Panle>
  </div>
</template>

<script>
  import Panle from '../core/panel.vue';
  export default {
    data () {
      return {
        items: [{
          title: '惠加油',
          src: require('../img/58be89c8Nb9d41295.png')
        },{
          title: '小白信用',
          src: require('../img/58be8a6eNf10193d0.png'),
          active: '全面升级'
        },{
          title: '信用卡还款',
          src: require('../img/58be8a81Nd7716a06.png')
        },{
          title: '卡转让',
          src: require('../img/58be8acfNdadcaf00.png')
        },{
          title: '定期还款',
          src: require('../img/58f57851N17ee6993.jpg')
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
  .life {
    .life-panle {
      padding-bottom: px2rem(40);
    }
    .life-list{
      @include flex(row);
      .life-item {
        width: 20%;
        font-size: px2rem(26);
        line-height: px2rem(38);
        text-align: center;
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