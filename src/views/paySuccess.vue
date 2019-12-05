<template>
  <div>
    <van-sticky :offset-top="20">
      <van-nav-bar title="支付结果" left-arrow @click-left="onClickLeft"/>
      <div class="icon-box">
        <span class="iconfont icon-zhifuchenggong"></span>
        <p class="msg">支付成功！</p>
      </div>
    </van-sticky>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.replace('/payments')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/icon/font_tu2yo77ivb/iconfont.css';
.icon-zhifuchenggong {
  font-size: 38px;
  color: #27B61C;
}
.icon-box {
  text-align: center;
  padding-top: 50px;
}
.msg {
  color: #27B61C;
  font-size: 20px;
  padding-top: 10px;
}
</style>