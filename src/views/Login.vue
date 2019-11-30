<template>
  <div>
    <van-nav-bar title="生活缴费" left-arrow @click-left="onClickLeft"/>
    <div class="logo">
      <!-- <img src="../assets/img/login-logo.png" alt=""> -->
    </div>
    <van-tabs v-model="active">
      <van-tab title="手机登录">
        <form action="">
          <input type="text" name="" id="" placeholder="请输入手机号">
        </form>g'i't
      </van-tab>
      <van-tab title="密码登录">内容 2</van-tab>
    </van-tabs>
    
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>


<style lang="less" scoped>
// @import '../assets/style/base.less';
// .van-nav-bar {
//   background-color: #eee;
//   height: @navgHeight;
//   width: 100%;
//   line-height: @navgHeight;
//   margin-top: 40px;
// }
// .van-nav-bar__title {
//   max-width: 100%;
//   font-size:  40px;
//   font-weight: 500;
// }
// .van-icon-arrow-left {
//   color: #444;
//   font-size: 34px;
// }
// .logo {
//   padding: 100px 0 ;
//   text-align: center;
//   background: #fff4e4;
//   img{
//     width: 400px;
//   }
// }

</style>