<template>
  <nav class="nav-bar">
    <ul class="list">
      <li>
        <router-link :to="{'name': 'home'}">
          <img src="../img/580f2435Nbfaa8055.png" alt="首页">
          <p>首页</p>
        </router-link>  
      </li>
      <li>
        <router-link :to="{'name': 'home'}">
          <img src="../img/580f1e25N028a1f2c.png" alt="理财">
          <p>理财</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{'name': 'home'}">
          <img src="../img/580f50e4N005181d0.png" alt="白条">
          <p>白条</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{'name': 'home'}">
          <img src="../img/580f240aNbee3dcc4.png" alt="众筹">
          <p>众筹</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{'name': 'home'}">
          <img src="../img/580f51cdN4caf20b2.png" alt="我的">
          <p>我的</p>
        </router-link>
      </li>
      
    </ul>
  </nav>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang='scss'>
  @import '../css/layout.scss';
  @import '../css/px2rem.scss';
  $designWidth : 640;
  .nav-bar{
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 100;
    background-color: #fff;
    padding-top: px2rem(12);
    .list{
      @include flex(row);
      font-size: px2rem(24);
      li{
        text-align: center;
        flex: 1;
        line-height: px2rem(40);
        img {
          width: px2rem(44);
          height: auto;
        }
        a {
          text-decoration: none;
          color:#656565;
        }
      }
    }
  }
</style>