<template>
  <div class="body">
    <van-nav-bar title="生活缴费" left-arrow @click-left="onClickLeft"/>
    <div class="history" @click="changeUrl">
      <van-icon name="underway-o" />
      </div>
    <div class="banner">
      <img src="../assets/img/payments/bannerimg.png" alt="">
    </div>
    <h2 class="title">手机缴费<br>快速到账</h2>
    <div class="box">
      <div class="payment inner-box">
        <div class="icons"><span class="iconfont icon-chongzhishuifei"></span></div>
        <button>水费</button>
      </div>
      <div class="repair inner-box">
        <div class="icons"><span class="iconfont icon-dianfei"></span></div>
        <button>电费</button>
      </div>
      <div class="unlock inner-box">
        <div class="icons"><span class="iconfont icon-ranqifei"></span></div>
        <button>气费</button>
      </div>
       <div class="housekepping inner-box">
        <div class="icons"><span class="iconfont icon-wuyefei"></span></div>
        <button>物业费</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      alert('返回');
    },
    changeUrl() {
      alert('history')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/base.less';
p{
  font-size: 36px;
}
h2{
  font-size: 56px;
  font-weight: 600;
}
.body{
  height: 1196px;
}
.van-nav-bar {
  background-color: #eee;
  height: @navgHeight;
  width:100%;
  line-height: @navgHeight;
  margin-top: 40px;
}
.van-nav-bar__title {
  max-width: 100%;
  font-size:  40px;
  font-weight: 500;
}
.van-icon-arrow-left {
  color: #444;
  font-size: 34px;
}
.history {
  position: absolute;
  top: 60px;
  right: 20px;
  z-index: 2;
}
.banner {
  background-color: #beeef7;
}
.banner img{
  width: 375*2px;
}
.title {
  color: #373a6d;
  position: absolute;
  top: 160px;
  right: 40px;
}
.box {
  width: 500px;
  display: flex;
  margin: 30px auto 0;
  justify-content: space-around;
  flex-direction: row;
  text-align: center;
  flex-wrap: wrap;
  align-items: space-around;
}
.inner-box {
  /* background-color: rgb(245, 240, 223); */
  background-color: #fff4e4;
  border-radius: 12px;
  width: 220px;
  height: 220px;
  margin: 30px 0 0;
}
.icons {
  padding: 20px 0 10px;
}
.iconfont{
  font-size: 100px;
  color: @themeColor;
}
.letters {
  color: #3d0e1e;
}
button {
  background-color: #111;
  border: none;
  border-radius: 8px;
  color: #fff4e4;
  font-size: 36px;
  width: 160px;
  height: 56px;
}

</style>