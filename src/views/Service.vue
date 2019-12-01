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
      <div class="unlock inner-box">
        <div class="icons"><span class="iconfont icon-huishou"></span></div>
        <p class="letters">回收</p>
      </div>
      <div class="repair inner-box1">
        <div class="icons"></div>
        <p class="letters"></p>
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
@import '../assets/less/nav.less';
p{
  font-size: 18px;
}
.body {
  height: 600px;
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
  width: 100px;
  height: 100px;
  margin: 15px 0 0;
}
.inner-box1 {
  background-color: #fff;
  width: 100px;
  height: 100px;
  margin: 15px 0 0;
}
.icons {
  padding: 10px 0 5px;
}
.iconfont{
  font-size: 50px;
  color: @themeColor;
}
.letters {
  color: #3d0e1e;
}
</style>