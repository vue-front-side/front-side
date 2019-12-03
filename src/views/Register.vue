<template>
  <div>
    <van-nav-bar title="注册" left-arrow @click-left="onClickLeft"/>
        <div class="input-box">
          <van-cell-group>
            <van-field
              label="手机号"
              placeholder="请输入手机号"
              v-model="phonenumber" 
              @touchstart.native.stop="show = true"
            /> 
          </van-cell-group>
          <van-cell-group class="test-code">
            <van-field
              v-model="sms"
              center 
              label="验证码"
              label-width='2rem'
              placeholder="请输入短信验证码"
            >
              <van-button slot="button" size="small" type="primary" color="#999" @click="sendCode">发送验证码</van-button>
            </van-field>
          </van-cell-group>
          <van-cell-group class="pass-box">
            <van-field
              label="密码"
              type="password"
              placeholder="请输入密码"
              v-model="password" 
            />
            <van-field
              label="密码"
              type="password"
              placeholder="请再次输入密码"
            /> 
          </van-cell-group>
        </div>
        <div class="btn-box">
          <button type="submit" class="confrim" @click="getRegister">确认</button>
        </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      show: false,
      active: 0,
      phonenumber: '',
      sms: '',
      username: '',
      password: '',
      showkey: ''
    }
  },
  components: {
    [Toast.name]: Toast
  },
  methods: {
    onClickLeft() {
      alert('返回');
    },
    sendCode() {
      console.log(this.phonenumber);
      if(this.phonenumber == '') {
        Toast("请输入手机号！")
      } else {
        this.axios
        .post("/user/sendSmsCode", {
          telNum: this.phonenumber
        })
        .then(res => {
          console.log(res.data)
          var code = res.data.code;
          if(code == 500) {
            Toast('该手机号已经了注册哦！');
          } else {
            Toast('验证码发送成功！');
          }
        })
      }
    },
    getRegister() {
      console.log(this.password)
      console.log("注册");
      console.log(this.sms);
      this.axios
        .post("/user/registerBySms", {
          telNum: this.phonenumber,
          smsCode: this.sms,
          password: this.password
        },
        {
        headers: {
          'content-type': 'application/json',
          "validateId": this.validateId
        }
        })
        .then(res => {
          console.log(res);
          if (res.status == "200") {
            // var token = "njaksxbxkjasbkjcxasbjk" // 模拟后台返回的token
            var token = res.data.data.token;
            var userId = res.data.data.user.userId;
            var userState = res.data.data.user.userId;
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("userId", userId);
            sessionStorage.setItem("userId",userState);
            console.log(userId);
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
.input-box {
  margin-top: 25px;
}
.pass-box {
  margin-top: 30px;
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