<template>
  <div>
    <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" right-text="注册" @click-right="onClickRight"/>
    <div class="logo">
      <img src="../assets/img/login-logo.png" alt="">
    </div>
    <van-tabs v-model="active">
      <van-tab title="手机登录">
          <div class="input-box">
            <van-cell-group>
              <van-field
                readonly
                clickable
                label="手机号"
                placeholder="请输入手机号"
                :value="phonenumber" 
                @touchstart.native.stop="show = true"
                @blur="checkOut"
              /> 
              <van-number-keyboard
                v-model="phonenumber"
                :show="show"
                :maxlength="11"
                @blur="show = false"  
              /> 
            </van-cell-group>
            <van-cell-group class="test-code">
              <van-field
                v-model="sms"
                center
                label="验证码"
                label-width='2rem'
                :value="identifyCode"
                placeholder="请输入短信验证码"
              >
                <van-button slot="button" size="small" type="primary" color="#999" @click="sendCode">发送验证码</van-button>
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
                clickable
                readonly
                label="用户名"
                placeholder="请输入用户名"
                :value="username" 
                @touchstart.native.stop="show = true"
              /> 
              <van-number-keyboard
                v-model="username"
                :show="show"
                :maxlength="11"
                @blur="show = false"  
              />
            </van-cell-group>
            <van-cell-group class="test-code">
              <van-field
                type="password"
                v-model="password"
                center
                label="密码"
                label-width='2rem'
                placeholder="请输入密码"
                @touchstart.native.stop="showkey = true"
              >
              <van-number-keyboard
                v-model="password"
                :show="showkey"
                :maxlength="11"
                @blur="show = false"  
              /> 
              </van-field>
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
import { Toast } from 'vant';
export default {
  data() {
    return {
      show: false,
      active: 0,
      phonenumber: '',    //手机号码
      sms: '',    //短信验证码
      username: '',
      password: '',
      showkey: '',
      identifyCode: ''
    }
  },
  methods: {
    onClickLeft() {
      alert('返回');
    },
    onClickRight() {
      this.$router.replace("/register");   
    },
    toForgetPass() {        
      this.$router.replace("/forgetpass");
    },
    sendCode() {    //发送验证码
      console.log(this.phonenumber);
      this.axios
      .post("/user/loginSendSms", {
        telNum: this.phonenumber
      })
      .then(res => {
        console.log(res.data)
        var code = res.data.code;
        if(code == 500) {
          Toast('该手机号暂未注册哦！');
        } else {
          Toast('验证码发送成功！');
        }
      })
    },
    getSmsLogin() {
      console.log("登录");
      console.log(this.sms);
      this.axios
        .post("/user/loginBySms", {
          telNum: this.phonenumber,
          smsCode: this.sms
        },
        {
        headers: {
          'content-type': 'application/json',
          "validateId": this.validateId
        }
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == "200") {
            // var token = "njaksxbxkjasbkjcxasbjk" // 模拟后台返回的token
            var token = res.data.data.token;
            sessionStorage.setItem("token", token);
            console.log(this.token);
            // 获取参数（未登录时想访问的路由）
            var url = this.$route.query.redirect;
            url = url ? url : "/index";
            // 切换路由
            this.$router.replace(url);
            // this.axios.post("/test")
          } else if(res.data.code == "500"){
            console.log("验证码错误");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getPassLogin() {
    console.log("密码登录");
    console.log(this.password);
    this.axios
      .post("/user/login", {
        userName: this.username,
        userPasswd: this.password
      },
      {
      headers: {
        'content-type': 'application/json',
        "validateId": this.validateId
      }
      })
      .then(res => {
        console.log(res.data);
        if (res.data.code == "success") {
          // var token = "njaksxbxkjasbkjcxasbjk" // 模拟后台返回的token
          var token = res.data.data.token;
          sessionStorage.setItem("token", token);
          console.log(this.token);
          // 获取参数（未登录时想访问的路由）
          var url = this.$route.query.redirect;

          url = url ? url : "/index";
          // 切换路由
          this.$router.replace(url);
          // this.axios.post("/test")
        } else {
          console.log("登陆失败");
        }
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
}
</script>


<style lang="less" scoped>
@import '../assets/style/base.less';
@import '../assets/less/nav.less';
p {
  font-size: 14px;
  text-align: right;
  padding-right: 10px;
  color: #888;
}
.logo {
  padding: 50px 0 ;
  text-align: center;
  background: #fff4e4;
  img{
    width: 200px;
  }
}
.forgetpass {
  float: right;
}
.btn-box{
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