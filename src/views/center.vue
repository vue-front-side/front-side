<template>
  <div id="app">
    <van-nav-bar title="设置" left-text="返回" left-arrow @click-left="onClickLeft">

    </van-nav-bar>
    <van-cell-group style="margin-top:64px">
      <van-cell  title="头像" center is-link to="newpic" >
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <van-image class="img" slot="default" round width="40px" height="40px" :src="'http://172.16.6.43:8080/'+msg.photo" />
      </van-cell >
      <van-cell  title="姓名" :value="msg.inhabitantName" is-link to="" @click="newmsg" />
      <van-cell  title="性别" :value="msg.inhabitantSex" is-link to="newsex" />
      <van-cell  title="修改手机" :value="msg.telNum" is-link to="" />
      <van-cell title="修改密码" is-link to="newnext" />
      <van-cell title="退出登录" style="margin:20px 0 0 125px;width:125px;background:red;color:#fff;border-radius:10px" to="lgoin" />
    </van-cell-group>
  </div>
</template>


<script>
export default {
  data(){
    return {
      msg:[]
    }
  },
  created() {
    this.axios
      .post("/inhabitant/findByUserId", {userId:4})
      .then(res => {
        this.msg = res.data.data.data;
        console.log("数组:", this.msg);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods:{
    newmsg(){
      this.$router.push("/newmsg");
    },
     onClickLeft() {
      this.$router.push("/my");
    }
  }
};
</script>

<style lang="less" scoped>


</style>