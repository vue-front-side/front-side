<template>
  <div id="qpp">
    <van-nav-bar
      title="设置名字"
      left-text="返回"
      right-text="完成"
      left-arrow
      @click-left="onClickLeft"
      @click-right="ok"
    />
    <div></div>
    <van-field v-model="username" style="background:#fff" clearable placeholder="请输入新用户名" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      msg: [],
      userId:""
    };
  },
  created() {
    this.userId = sessionStorage.getItem("userId");
    this.axios
      .post("/inhabitant/findByUserId", { userId: this.userId })
      .then(res => {
        this.msg = res.data.data.data;
        console.log("数组:", this.msg);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onClickLeft() {
      this.$router.push("/center");
    },
    ok() {
      this.axios
        .post("/inhabitant/modifyInhabitantPhone", {
          photo: this.msg.photo,
          inhabitantName: this.username,
          inhabitantSex: this.msg.inhabitantSex,
          inhabitantId:this.msg.inhabitantId
        })
        .then(res => {
          this.msg = res.data.data.data;
          console.log("数组:", this.msg);
          this.$router.push("/center");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
#qpp {
  height: 667px;
  background: #eee;
}
</style>