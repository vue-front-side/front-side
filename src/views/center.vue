<template>
  <div id="qpp">
    <van-nav-bar title="设置" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-cell-group>
      <van-cell title="头像" center is-link to="newpic">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <van-image
          class="img"
          slot="default"
          round
          width="40px"
          height="40px"
          :src="'http://172.16.6.43:8080/'+msg.photo"
        />
      </van-cell>
      <van-cell title="姓名" :value="msg.inhabitantName" is-link to @click="newmsg" />
      <van-cell title="性别" :value="msg.inhabitantSex" is-link to="newsex" />
      <van-cell title="修改手机" :value="msg.telNum" is-link to />
      <van-cell title="修改密码" is-link to="newnext" />
    </van-cell-group>
    <div class="box">
    <button @click="tologin" class="btn">退出登录</button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      msg: [],
      userId: ""
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
    newmsg() {
      this.$router.push("/newmsg");
    },
    onClickLeft() {
      this.$router.push("/my");
    },
    tologin() {
      this.$dialog
        .confirm({
          message: "确认退出登录？"
        })
        .then(() => {
          this.axios
            .post("/user/logout")
            .then(res => {
              console.log(res.data);
              if (res.data.code == "logout_success") {
                sessionStorage.clear();
                this.$router.replace("/login");
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  margin-top: 40px;
  width: 100%;
  height: 40px;
  text-align: center;
}
.btn {
  width: 125px;
  background: red;
  color: #fff;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  height: 40px;
}
</style>