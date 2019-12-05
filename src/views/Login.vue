<template>
  <div>
    <van-nav-bar
      title="登录"
      left-arrow
      @click-left="onClickLeft"
      right-text="注册"
      @click-right="onClickRight"
    />
    <div class="logo">
      <img src="../assets/img/login-logo.png" alt />
    </div>
    <van-tabs v-model="active">
      <van-tab title="手机登录">
        <div class="input-box">
          <van-cell-group>
            <van-field
              label="手机号"
              placeholder="请输入手机号"
              v-model="phonenumber"
              maxlength="11"
              @blur="phoneNumCheckOut"
            />
          </van-cell-group>
          <van-cell-group class="test-code">
            <van-field
              v-model="sms"
              label="验证码"
              placeholder="请输入短信验证码"
            >
              <van-button
                slot="button"
                size="small"
                type="primary"
                color="#999"
                @click="sendCode"
              >发送验证码</van-button>
            </van-field>
          </van-cell-group>
        </div>
        <div class="btn-box">
          <button class="confrim" @click="getSmsLogin">确认</button>
        </div>
      </van-tab>
      <van-tab title="密码登录">
        <div class="input-box">
          <van-cell-group>
            <van-field
              label="用户名"
              placeholder="请输入用户名"
              maxlength="11"
              v-model="username"
              @blur="userNameCheckOut"
            />
          </van-cell-group>
          <van-cell-group class="test-code">
            <van-field
              type="password"
              v-model="password"
              center
              label="密码"
              placeholder="请输入密码"
            ></van-field>
          </van-cell-group>
        </div>
        <p class="forgetpass" @click="toForgetPass">忘记密码？</p>
        <div class="btn-box">
          <button type="submit" class="confrim" @click="getPassLogin">确认</button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
  
<script>
import { Toast } from "vant";
import md5 from 'js-md5';
export default {
  data() {
    return {
      active: 0,
      phonenumber: "", //手机号码
      sms: "", //短信验证码
      username: "",
      password: "",
      state: true,
      validateId: ''
    };
  },
  components: {
    [Toast.name]: Toast
  },
  methods: {
    onClickLeft() {
      alert("返回");
    },
    onClickRight() {
      this.$router.replace("/register");
    },
    toForgetPass() {
      this.$router.replace("/forgetpass");
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
          this.state == false;
        }
      }
    },
    userNameCheckOut() {
      if (this.username != "") {
        //当input 里面有数据的时候，再判断手机号对不对
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(this.username)) {
          Toast("请填写正确手机号码！");
          console.log(this.username);
          this.username = "";
        } else {
          console.log("Yeah you got your correct username!");
        }
      }
    },
    sendCode() {
      //发送验证码
      console.log(this.phonenumber);
      if (this.phonenumber == "") {
        Toast("请输入手机号！");
      } else {
        this.axios
          .post("/user/loginSendSms", {
            telNum: this.phonenumber
          })
          .then(res => {
            console.log(res.data);
            var code = res.data.code;
            if (code == 500) {
              Toast("该手机号暂未注册哦！");
            } else {
              Toast("验证码发送成功！");
            }
          });
      }
    },
    getSmsLogin() {
      console.log("登录");
      console.log(this.sms);
      if (this.phonenumber == "") {
        Toast("请输入手机号！");
      } else if (this.phonenumber && this.sms == "") {
        Toast("请输入验证码！");
      } else {
        this.axios
        .post("/user/loginBySms", {
            telNum: this.phonenumber,
            smsCode: this.sms
          },
          {
            headers: {
              "content-type": "application/json",
              validateId: this.validateId
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == "200") {
            // var token = "njaksxbxkjasbkjcxasbjk" // 模拟后台返回的token
            this.validateId = res.data.data.validateId;
            var token = res.data.data.token;
            var userId = res.data.data.user.userId;
            var userState = res.data.data.user.userState;
            var roleName = res.data.data.user.roles[0].roleName;
            
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("userId", userId);
            sessionStorage.setItem("userState", userState);
            sessionStorage.setItem("userName", roleName);
            var a =  sessionStorage.getItem(userState);
            console.log("用户状态",a);
            console.log(userId);
            console.log(roleName);
            console.log(userState);
            // 获取参数（未登录时想访问的路由）
            var url = this.$route.query.redirect;
            url = url ? url : "/index";
            // 切换路由
            this.$router.replace(url);
            // this.axios.post("/test")
          } else if (res.data.code == "500") {
            console.log("验证码错误");
          }
        })
        .catch(err => {
          console.log(err);
        });
      }
    },
    getPassLogin() {
      console.log("密码登录");
      console.log(this.username);
      if (this.username == "" || this.password == "") {
        Toast("请输入用户名或者密码！");
      } else {
        this.axios
        .post("/user/login", {
            userName: this.username,
            userPasswd: md5(this.password)
          },
          {
            headers: {
              "content-type": "application/json",
              validateId: this.validateId
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == "success") {
            // var token = "njaksxbxkjasbkjcxasbjk" // 模拟后台返回的token
            this.validateId = res.data.data.validateId;
            var token = res.data.data.token;
            var userId = res.data.data.user.userId;
            var userState = res.data.data.user.userState;
            var roleName = res.data.data.user.roles[0].roleName;
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("userId", userId);
            sessionStorage.setItem("userState", userState);
            sessionStorage.setItem("userName", roleName);
            console.log(userId);
            console.log(userState);
            // 获取参数（未登录时想访问的路由）
            var url = this.$route.query.redirect;

            url = url ? url : "/index";
            // 切换路由
            this.$router.replace(url);
            // this.axios.post("/test")
            Toast("登录成功!");
          } else if(res.data.code == "user_NotFound") {
            Toast("用户不存在!");
          } else if(res.data.code == "pwd_error") {
            Toast("密码错误!");
          } else if(res.data.code == "user_invalid") {
            Toast("用户不可用!");
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
p {
  font-size: 14px;
  text-align: right;
  padding-right: 10px;
  color: #888;
}
.logo {
  padding: 50px 0;
  text-align: center;
  background: #fff4e4;
  img {
    width: 200px;
  }
}
.forgetpass {
  float: right;
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