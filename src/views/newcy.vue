<template>
  <div id="qpp">
    <van-nav-bar title="添加成员" left-text="返回" @click-left="onClickLeft" left-arrow></van-nav-bar>
    <div style="margin-top:84px;"></div>
    <van-cell-group>
      <van-field v-model="username" clearable label="姓名" placeholder="请填写成员姓名" />
      <van-field v-model="relate" clearable label="关系" placeholder="请填写成员关系" />
      <van-field v-model="usernum" clearable label="手机号" placeholder="请填写成员手机号" />
      <van-field v-model="idcard" clearable label="身份证号" placeholder="请填写成员身份证号" />
    </van-cell-group>
    <div>
      <button type="submit" class="sub">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      usernum: "",
      idcard: "",
      relate:''
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    }
  }
};
</script>

<style lang="less" scoped>
.sub {
  border: none;
  background: #ffa400;
  color:#fff;
  font-size: 18px;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  margin:20px  0  0  85px; 
}
</style>