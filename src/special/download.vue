<template>
  <div class="download">
    <P>立即下载</P>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang='scss'>
@import '../css/px2rem.scss';
$designWidth : 640;
.download{
  width: 100%;
  height: px2rem(1136);
  background: url('../img/59b65f36N05367075.png') center top no-repeat;
  background-size: 100% auto;
  p{
    width: 73.6%;
    margin: 0% 13.2% 5rem 13.2%;
    height: 3.125rem;
    line-height: 3.125rem;
    font-family: 'PingFangSC-Regular';
    font-weight: bold;
    font-size: 1rem;
    color: #fff;
    background-color: #F1443E;
    border-radius: 5px;
    background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
    box-shadow: 0 6px 16px 0 rgba(255,159,135,.6);
    text-align: center;
    position: fixed;
    bottom: 1.5rem;
  }
}
</style>
