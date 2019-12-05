<template>
  <div id="qpp">
    <div class="box">
      <van-sticky>
        <van-row>
          <van-col span="24">
            <van-nav-bar
              title="意见反馈"
              left-text="返回"
              right-text="完成"
              left-arrow
              @click-left="onClickLeft"
              @click-right="suss"
            />
          </van-col>
        </van-row>
      </van-sticky>

      <van-field v-model="message" rows="1" style="height:200px" autosize type="textarea" />

      <!-- <van-button class="button" @click="suss" type="info">提交</van-button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      userId:""
    };
  },
  methods: {
    suss() {
      this.userId = sessionStorage.getItem("userId")
      this.$toast.success("提交成功");
      this.axios
      .post("/suggestion/add", {userId:this.userId,content:this.message})
      .then(res => {
        console.log(res.data)
         setTimeout(() => {
        this.$router.push("/my");
      }, 2000);
      })
      .catch(err => {
        console.log(err);
      });
      
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