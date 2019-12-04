<template>
  <div>
    <van-sticky :offset-top="20">
      <van-nav-bar title="生活缴费" left-arrow @click-left="onClickLeft"/>
      <div>
        <span class="iconfont icon-zhifuchenggong"></span>
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
.icon-zhifuchenggong {
  font-size: 38px;
  color: #27B61C;
}
</style>