<template>
  <div class="body">
    <van-nav-bar title="服务" left-arrow @click-left="onClickLeft"/>
    <div class="box">
      <div class="payment inner-box">
        <div class="icons"><span class="iconfont icon-wuyejiaofei"></span></div>
        <p class="letters">缴费</p>
      </div>
      <div class="repair inner-box">
        <div class="icons"><span class="iconfont icon-baoxiu"></span></div>
        <p class="letters">报修</p>
      </div>
      <div class="unlock inner-box">
        <div class="icons"><span class="iconfont icon-unlock"></span></div>
        <p class="letters">开锁</p>
      </div>
       <div class="housekepping inner-box">
        <div class="icons"><span class="iconfont icon-jiazhengfuwu"></span></div>
        <p class="letters">家政</p>
      </div>
      <div class="repair inner-box">
        <div class="icons"><span class="iconfont icon-niunai"></span></div>
        <p class="letters">牛奶预定</p>
      </div>
      <div class="unlock inner-box">
        <div class="icons"><span class="iconfont icon-huishou"></span></div>
        <p class="letters">回收</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   methods: {
    onClickLeft() {
      alert('返回');
    }
  }
}
</script>


<style lang="less" scoped>
@import '../assets/style/base.less';
p{
  font-size: 36px;
}
.body {
  height: 600px;
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
.box {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  text-align: center;
  flex-wrap: wrap;
  align-items: space-around;
}
.inner-box {
  /* background-color: rgb(245, 240, 223); */
  background-color: #fff4e4;
  width: 200px;
  height: 200px;
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
</style>