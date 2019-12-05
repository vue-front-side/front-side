<template>
  <div class="qpp">
    <!-- 导航条 -->
    <van-sticky>
      <van-row>
        <van-col span="24">
          <van-nav-bar title="修改密码" left-text="返回" left-arrow @click-left="onClickLeft" />
        </van-col>
      </van-row>
    </van-sticky>
    <div class="phone-number">
      <span style="float:left;font-size:18px">绑定手机号:</span>
      <p class="recent-phonenumber">{{msg.telNum}}</p>
    </div>

    <div class="input-box">
      <van-cell-group class="test-code">
        <van-field v-model="value" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <van-button slot="button"  @click="sub" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <van-cell-group>
      <van-field v-model="value1" label="新密码" type="password" placeholder="请输入新密码" />
      <van-field
        v-model="value2"
        label="确认密码"
        type="password"
        placeholder="请再次输入密码"
        @blur="passChekOut"
      />
    </van-cell-group>
    <div class="btn-box">
      <button type="submit" @click="ok" class="confrim">确认</button>
    </div>
  </div>
</template>


<script>
import md5 from "js-md5";
export default {
  name: "changenumber",
  data() {
    return {
      show: false,
      value: "",
      msg: [],
      value1: "",
      value2: "",
      telyz: "",
      tel: "15008125180"
    };
  },
  created() {
    this.axios
      .post("/inhabitant/findByUserId", { userId: 4 })
      .then(res => {
        this.msg = res.data.data.data;
        console.log("数组:", this.msg);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    sub() {
      this.axios
        .post("/user/sendSmsCode", { telNum: this.tel })
        .then(res => {
          console.log(res.data);
          this.telyz = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    onClickLeft() {
      this.$router.push("/center");
    },
    next() {
      this.$router.push("/newpass");
    },
    passChekOut() {
      //密码检测
      if (this.value1 || this.value2) {
        if (this.value1 != this.value2) {
          this.$toast("两次密码输入不一致！");
          this.value2 = "";
        } else if (this.value2 == "") {
          this.$toast("请再次输入密码！");
        }
      }
    },

    ok() {
      console.log(typeof this.tel);
      this.axios
        .post("/user/forgetPasswordSubmit", {
          telNum: this.tel,
          smsCode: this.value,
          password: md5(this.value2)
        })
        .then(res => {
          console.log(res.data);
          if (res.data.message == "密码修改成功") {
            this.$dialog
              .confirm({
                message: "确认删除？"
              })
              .then(() => {
                this.$router.push("/center");
              })
              .catch(() => {
                this.$toast('取消修改')
              });
            
          } else {
            this.$toast("验证码错误！");
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
// @import "../assets/style/base.less";
// @import "../assets/less/nav.less";
.disappointing {
  background-color: rgb(248, 248, 248);
  height: 598px;
}
.phone-number {
  height: 80px;
  line-height: 80px;
  padding: 10px;
  margin-left: 26px;
}
.phone-number span {
  font-size: 26px;
  margin-top: 10px;
}
.recent-phonenumber {
  text-align: center;
  margin-top: 10px;
  margin-right: 20px;
}
.input-box {
  width: 100%;
  margin-top: 10px;
}

.btn-box {
  text-align: center;
  margin-top: 18px;
}
.confrim {
  width: 90px;
  height: 30px;
  border: none;
  border-radius: 4px;
  font-size: 10px;
  color: white;
  background: #ffa400;
}
</style>

