<template>
  <div id="qpp">
    <van-sticky>
      <van-row>
        <van-col span="24">
          <van-nav-bar
            title="成员管理"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            class="top_nav"
          />
        </van-col>
      </van-row>
    </van-sticky>
    <van-cell-group>
      <van-field v-model="username" clearable label="姓名" placeholder="请填写成员姓名" />
      <van-field v-model="relate" clearable label="关系" placeholder="请填写成员关系" />
      <van-field v-model="usernum" clearable label="手机号" placeholder="请填写成员手机号" />
      <van-field v-model="idcard" clearable label="身份证号" placeholder="请填写成员身份证号" />
    </van-cell-group>
    <div>
      <button type="submit" @click="sub" class="sub">提交</button>
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
      relate: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
    sub() {
      this.axios
        .post("/InhabitantAndHouseProperty/inhabitantAddToHouseProperty", {
          inhabitantName: this.username,
          inhabitantType: this.relate,
          telNum:this.usernum,
          idCardNo:this.idcard,
          inhabitantId:1
        })
        .then(res => {
            if( res.data.message=="该成员已被绑定" ) {
              this.$toast('该成员已经绑定')
            }else {
              this.$toast('绑定成功')
              this.$router.push('/my')
            }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.sub {
  border: none;
  background: #ffa400;
  color: #fff;
  font-size: 18px;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  margin: 20px 0 0 85px;
}
</style>