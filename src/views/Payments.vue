<template>
  <div class="body">
    <van-sticky>
      <van-row>
        <van-col span="24">
          <van-nav-bar
            title="生活缴费"
            left-text="返回"
            right-text="缴费记录"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            class="top_nav"
          />
        </van-col>
      </van-row>
    </van-sticky>
    <!-- <div class="history" >
      <van-icon name="underway-o" />
    </div> -->
    <div class="banner">
      <img src="../assets/img/payments/bannerimg.png" alt="">
    </div>
    <h2 class="title">手机缴费<br>快速到账</h2>
    <div class="box">
      <div class="payment inner-box">
        <div class="icons"><span class="iconfont icon-chongzhishuifei"></span></div>
        <router-link :to="'/paymentsdetails?' + water"><button >水费</button></router-link> 
      </div>
      <div class="repair inner-box">
        <div class="icons"><span class="iconfont icon-dianfei"></span></div>
        <router-link :to="'/paymentsdetails?' + electrcity"><button >电费</button></router-link> 
      </div>
      <div class="unlock inner-box">
        <div class="icons"><span class="iconfont icon-ranqifei"></span></div>
        <router-link :to="'/paymentsdetails?' + gass"><button >气费</button></router-link> 
      </div>
       <div class="housekepping inner-box">
        <div class="icons"><span class="iconfont icon-wuyefei"></span></div>
        <router-link :to="'/paymentsdetails?' + service"><button >服务费</button></router-link> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 1,
      water: "2",
      electrcity: "1",
      gass: "3",
      service: "4"
    }
  },
  created(){
    sessionStorage.setItem("zeroRoute",this.$route.fullPath);
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight(){
      this.$router.push("/payjl");
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/base.less';
@import '../assets/less/nav.less';
p{
  font-size: 36px;
}
h2{
  margin-top: 15px;
  font-size: 28px;
  font-weight: 600;
}
.body{
  height: 647px;
}
.history {
  position: absolute;
  top: 30px;
  right: 10px;
  z-index: 2;
}
.banner {
  background-color: #beeef7;
}
.banner img{
  width: 375px;
}
.title {
  color: #373a6d;
  position: absolute;
  top: 80px;
  right: 20px;
}
.box {
  width: 250px;
  display: flex;
  margin: 15px auto 0;
  justify-content: space-around;
  flex-direction: row;
  text-align: center;
  flex-wrap: wrap;
  align-items: space-around;
}
.inner-box {
  /* background-color: rgb(245, 240, 223); */
  background-color: #fff4e4;
  border-radius: 6px;
  width: 110px;
  height: 110px;
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
button {
  background-color: #111;
  border: none;
  border-radius: 4px;
  color: #fff4e4;
  font-size: 18px;
  width: 80px;
  height: 28px;
}

</style>