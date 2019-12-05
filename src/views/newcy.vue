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
      <van-field
        v-model="username"
        clearable
        label="姓名"
        placeholder="请填写成员姓名"
        @blur="nameCheckOut"
      />
      <van-field v-model="relate" clearable label="关系" placeholder="请填写成员关系" />
      <van-field
        v-model="usernum"
        clearable
        label="手机号"
        placeholder="请填写成员手机号"
        @blur="phoneCheckOut"
      />
      <van-field
        v-model="idcard"
        clearable
        label="身份证号"
        placeholder="请填写成员身份证号"
        @blur="identityCheckOut"
      />
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
      relate: "",
      inhabitantId:""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
    phoneCheckOut() {
      if (this.usernum != "") {
        //当input 里面有数据的时候，再判断手机号对不对
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(this.usernum)) {
          this.$toast("请填写正确手机号码！");
          console.log(this.usernum);
          this.usernum=''
        } else {
          console.log("Yeah you got your correct number!");
        }
      }
    },
    nameCheckOut() {
      if (this.username != "") {
        //当input 里面有数据的时候，再判断手机号对不对
        var myreg = /^[\u4e00-\u9fa5]{2,4}$/i;
        if (!myreg.test(this.username)) {
          this.$toast("请填写正确姓名！");
          console.log(this.username);
          this.username = "";
        } else {
          console.log("Yeah you got your correct name!");
        }
      }
    },
    identityCheckOut() {
      if (this.idcard != "") {
        //当input 里面有数据的时候，再判断手机号对不对
        var myreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (!myreg.test(this.idcard)) {
           this.$toast("请填写正确身份证号！");
          console.log(this.idcard);
          this.idcard = "";
        } else {
          console.log("Yeah you got your correct identity!");
        }
      }
    },
    sub() {
      this.inhabitantId = sessionStorage.getItem("inhabitantId")
      this.axios
        .post("/InhabitantAndHouseProperty/inhabitantAddToHouseProperty", {
          inhabitantName: this.username,
          inhabitantType: this.relate,
          telNum:this.usernum,
          idCardNo:this.idcard,
          inhabitantId:this.inhabitantId
        })
        .then(res => {
          if (res.data.message == "该成员已被绑定") {
            this.$toast("该成员已经绑定");
          } else {
            this.$toast("绑定成功");
            this.$router.push("/my");
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