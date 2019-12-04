<template>
  <div id="qpp">
    <div class="box">
      <van-nav-bar
        title="意见反馈"
        left-text="返回"
        @click-left="onClickLeft"
        @click-right="suss"
        right-text="完成"
        left-arrow
      >
        <!-- <van-icon class="nav-right" title="完成"  /> -->
      </van-nav-bar>
      <div style="margin-top:64px;"></div>

      <van-field v-model="message" rows="1" style="height:200px" autosize type="textarea" />

      <!-- <van-button class="button" @click="suss" type="info">提交</van-button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  methods: {
    suss() {
      this.$toast.success("提交成功");
      this.axios
      .post("/suggestion/add", {userId:5,content:this.message})
      // .then(res => {
      //   console.log(this.message)
      // })
      // .catch(err => {
      //   console.log(err);
      // });
      setTimeout(() => {
        this.$router.push("/my");
      }, 2000);
    },

    onClickLeft() {
      this.$router.push("/my");
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  background: white;
}
#qpp {
  background: #eee;
  height: 1206px;
}
</style>