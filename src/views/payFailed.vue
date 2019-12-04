<template>
  <div>
    <van-sticky :offset-top="20">
      <van-nav-bar title="生活缴费" left-arrow @click-left="onClickLeft"/>
      <div class="icon-box">
        <span class="iconfont icon-zhifushibai"></span>
        <p class="msg">支付失败！</p>
      </div>
    </van-sticky>
  </div>
</template>

<script>
export default {
  data() {

  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/icon/font_tu2yo77ivb/iconfont.css';
.icon-zhifushibai {
  font-size: 38px;
  color: rgb(226, 115, 105);
}
.icon-box {
  text-align: center;
  padding-top: 50px;
}
.msg {
  color: rgb(226, 115, 105);
  font-size: 20px;
  padding-top: 10px;
}
</style>