<template>
  <div id="qpp">
    <van-sticky>
    <van-row>
      <van-col span="24">
        <van-nav-bar
          title="关于我们"
          left-text="返回"
          
          left-arrow
          @click-left="onClickLeft"
          
        />
      </van-col>
    </van-row>
    </van-sticky>
    <img background="#eee" width="100" height="100" src="../assets/logo.png" />
    <van-row>
      <van-col style="font-size:24px" span="24">易居APP</van-col>
    </van-row>
    <van-row>
      <van-col style="font-size:20px;margin-top:10px" span="24">YJ 1.2.3</van-col>
    </van-row>
    <van-cell title="去评分" is-link to="index" />
    <van-cell title="功能介绍" is-link to="index" />
    <van-cell title="投诉" is-link to="index" />
    <van-cell title="版本更新" is-link to="index" />
    <van-row>
      <van-col
        style="font-size:12px;margin-top:150px;font-weight:800"
        span="24"
      >《易居软件许可及服务协议》和《易居隐私保护指引》</van-col>
    </van-row>
    <van-row>
      <van-col style="font-size:12px;font-weight:100" span="24">国信安公司版权所有</van-col>
    </van-row>
    <van-row>
      <van-col
        style="font-size:12px;font-weight:100"
        span="24"
      >Copyright@2011-2019 GXA.All Rights Reserved</van-col>
    </van-row>
  </div>
</template>


<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    }
  }
};
</script>
<style lang="less" scoped>
#qpp {
  text-align: center;
}
</style>