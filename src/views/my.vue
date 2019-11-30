<template>
  <div id="app">
    <van-nav-bar title="个人中心" left-text="返回" left-arrow>
      <van-icon class="nav-right"  name="comment" slot="right" />
    </van-nav-bar>
    <div style="margin-top:64px;"></div>
    <div class="msg" style="padding: 20px;">
      <img src="../assets/logo.png" alt="">
      <p style="height:40px;margin-top:10px">姓名</p>
      <p>手机号</p>
      <van-icon class="set" name="setting-o" />
    </div>
    <van-cell title="缴费记录" is-link to="payjl" />
    <van-cell title="维修记录" is-link to="wxrecord" />
    <van-cell title="回收记录" is-link to="recoverjl" />
    <van-cell title="开锁记录" is-link to="openjl" />
    <van-cell title="家政记录" is-link to="jzjl" />
    <van-cell title="意见反馈" is-link to="yjfk" />
    <van-cell title="关于我们" is-link to="aboutus" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.msg {
  text-align: left;
  position: relative;
  overflow: hidden;
}
.msg img {
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
  border-radius: 50%;
  float: left;
}
.set {
  position: absolute;
  right: 40px;
  top:40px;
}
</style>


