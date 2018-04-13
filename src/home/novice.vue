<template>
  <div class="novice">
    <Panle cname='novice-pancel' title='新手特权' :isBorder='true'>
      <section class="novice-body">
        <div class="item">
          <h4>下载APP送888元礼包</h4>
          <p>新手专享</p>
          <img :src="require('../img/lhb.png')" alt="礼包">
        </div>
        <div class="item">
          <ul>
            <li>
              <div class="des">
                <div>
                  <h4>领128元新手奖励</h4>
                  <p>立即开通</p>
                </div>
              </div>
              <img :src="require('../img/lhb.png')" alt="新手奖励">
            </li>
            <li>
              <div class="des">
                <div>
                  <h4>打白条享免息</h4>
                  <p>立即开通享好礼</p>
                </div>
              </div>
              <img :src="require('../img/lhb.png')" alt="白条">
            </li>
          </ul>
        </div>
      </section>
    </Panle>
  </div>
</template>

<script>
  import Panle from '../core/panel.vue';
  export default {
    components: {
      Panle
    }
  }
</script>
<style lang='scss' scoped>
  @import '../css/layout.scss';
  @import '../css/px2rem.scss';
  $designWidth : 640; //写scss之前，必须要先定义designWidth。
  .novice-pancel{
    .novice-body {
      @include flex(row);
      line-height: px2rem(40);
      h4 {
        font-size: px2rem(24);
        color: #000000;
      }
      p {
        color: #999;
      }
      font-size: px2rem(20);
      .item {
        width: 50%;
        box-sizing: border-box;
        &:first-child {
          text-align: center;
          border-right: 1px solid #ddd;
          padding: px2rem(20);
          img {
            margin-top: px2rem(10);
            width: px2rem(110);
          }
        }
        li {
          box-sizing: border-box;
          padding: px2rem(20);
          @include flex(row);
          overflow: hidden;
          width: 100%;
          &:first-child {
            border-bottom: 1px solid #ddd;
          }
          img {
            height: px2rem(88);
            width:  px2rem(88);
            flex: 0 px2rem(88);
          }
          .des{
            flex: 1;
            h4 {
              width: 100%;
              height: px2rem(40);
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
</style>