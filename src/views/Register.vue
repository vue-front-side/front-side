<template>
  <div>
    <van-nav-bar title="注册" left-arrow left-text="返回" @click-left="onClickLeft" />
    <div class="input-box">
      <van-cell-group>
        <van-field
          label="手机号"
          placeholder="请输入手机号"
          v-model="phonenumber"
          @blur="phoneNumCheckOut"
          maxlength="11"
        />
      </van-cell-group>
      <van-cell-group class="test-code">
        <van-field v-model="sms" label="验证码" placeholder="请输入短信验证码">
          <van-button slot="button" size="small" type="primary" @click="sendCode" v-if="isSend" :disabled="state">发送验证码</van-button>
          <van-button slot="button" size="small" disabled type="primary" v-else>{{seconds}}s后重新发送</van-button>
        </van-field>
      </van-cell-group>
      <van-cell-group class="pass-box">
        <van-field label="密码" type="password" placeholder="请输入密码" v-model="password" />
        <van-field
          label="密码"
          type="password"
          placeholder="请再次输入密码"
          v-model="passSure"
          @blur="passChekOut"
        />
      </van-cell-group>
    </div>
    <div class="btn-box">
      <button type="submit" class="confrim" @click="getRegister">确认</button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import md5 from 'js-md5';
Toast.resetDefaultOptions({ position: "top" });
export default {
  data() {
    return {
      active: 0,
      phonenumber: "",
      sms: "",
      username: "",
      password: "",
      passSure: "",
      state: true,
      validateId:'',
      isSend: true,
      seconds: 60
    };
  },
  components: {
    [Toast.name]: Toast
  },
  methods: {
    onClickLeft() {
      this.$router.replace('/login');
    },
    sub() {
      this.isSend = false;
      var time = setInterval(() => {
        if (this.seconds > 1) {
          this.seconds--;
        } else {
          clearInterval(time);
          this.seconds = 60;
          this.isSend = true;
        }
      }, 1000)
    },
    phoneNumCheckOut() {
      if (this.phonenumber != "") {
        //当input 里面有数据的时候，再判断手机号对不对
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(this.phonenumber)) {
          Toast("请填写正确手机号码！");
          console.log(this.phonenumber);
        } else {
          console.log("Yeah you got your correct number!");
          this.state = false;
        }
      }
    },
    passChekOut() {  //密码检测
      if (this.passSure || this.password) {
        if (this.password != this.passSure) {
          Toast("两次密码输入不一致！");
          this.passSure = '';
        } else if (this.passSure == "") {
          Toast("请再次输入密码！");
        }
      }
    },
    sendCode() {
      this.sub();
      console.log(this.phonenumber);
      if (this.phonenumber == "") {
        Toast("请输入手机号！");
      } else {
        this.axios
        .post("/user/sendSmsCode", {
          telNum: this.phonenumber
        })
        .then(res => {
          console.log(res.data);
          var code = res.data.code;
          if (code == 500) {
            Toast("该手机号已经了注册哦！");
          } else {
            Toast("验证码发送成功！");
          }
        });
      }
    },
    getRegister() {
      console.log(this.password);
      console.log("注册");
      console.log(this.sms);
      if (this.phonenumber == "") {
        Toast("请输入手机号！");
      } else if (this.phonenumber && this.sms == "") {
        Toast("请输入验证码！");
      } else if (this.password == "" || this.passSure == '') {
        Toast("请输入密码！");
      } else {
        this.axios
        .post("/user/registerBySms", {
            telNum: this.phonenumber,
            smsCode: this.sms,
            password: md5(this.passSure)
          },
          {
            headers: {
              "content-type": "application/json",
              
            }
          }
        )
        .then(res => {
          console.log(res);
          console.log("注册",res.data);
          if (res.status == "200") {
            // var token = "njaksxbxkjasbkjcxasbjk" // 模拟后台返回的token
            var validateId = res.data.data.validateId;
            var token = res.data.data.token;
            var userId = res.data.data.user.userId;
            var userState = res.data.data.user.userState;
            console.log("用户ID",userId);
            console.log("用户stste",userState);
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("userId", userId);
            sessionStorage.setItem("userState", userState);
            sessionStorage.setItem("validateId",validateId);
            console.log(userId);
            Toast("注册成功！");
            // 获取参数（未登录时想访问的路由）
            var url = this.$route.query.redirect;

            url = url ? url : "/index";
            // 切换路由
            this.$router.replace(url);
            // this.axios.post("/test")
          } else {
            Toast("注册失败！");
          }
        })
        .catch(err => {
          console.log(err);
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/base.less";
@import "../assets/less/nav.less";
.input-box {
  margin-top: 25px;
}
.pass-box {
  margin-top: 30px;
}
.btn-box {
  text-align: center;
  margin-top: 35px;
}
.confrim {
  width: 180px;
  height: 40px;
  background: @themeColor;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  color: white;
}
</style>