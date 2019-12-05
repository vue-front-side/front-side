<template>
  <div>
    <van-nav-bar title="忘记密码" left-arrow @click-left="onClickLeft"/>
        <div class="input-box">
          <van-cell-group>
            <van-field
              label="手机号"
              placeholder="请输入手机号"
              maxlength="11"
              v-model="phonenumber"
              @blur="phoneCheckOut"
            />
          </van-cell-group>
          <van-cell-group class="test-code">
            <van-field
              v-model="sms"
              label="验证码"
              placeholder="请输入短信验证码"
            >
              <van-button slot="button" size="small" type="primary" @click="sendSmsCode" v-if="isSend" :disabled="state">发送验证码</van-button>
              <van-button slot="button" size="small" disabled type="primary" v-else>{{seconds}}s后重新发送</van-button>
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
              label="新密码"
              type="password"
              placeholder="请输入新密码"
              v-model="passSure" 
              @blur="passCheckOut"
            /> 
          </van-cell-group>
        </div>
        <div class="btn-box">
          <button class="confrim" @click="setPassSubmit">确认</button>
        </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { CountDown } from 'vant';
import md5 from 'js-md5';
export default {
  data() {
    return {
      active: 0,
      phonenumber: '',
      name: '',
      identity: '',
      sms: '',
      username: '',
      password: '',
      passSure: '',
      state: true,
      isSend: true,
      seconds: 60
    }
  },
   components: {
    [Toast.name]: Toast,
    [CountDown.name]: CountDown
  },
  methods: {
    onClickLeft() {
      this.$router.replace('/login')
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
    phoneCheckOut() {
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
    passCheckOut() {  
      if (this.passSure || this.password) {
        if (this.password != this.passSure) {
          Toast("两次密码输入不一致！");
          this.passSure = '';
        } else if (this.passSure == "") {
          Toast("请再次输入密码！");
        }
      }
    },
    sendSmsCode() {
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
    setPassSubmit()  {
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
        console.log(this.sms);
        console.log(typeof(this.sms));
        this.axios
        .post("/user/forgetPasswordSubmit", {
            telNum: this.phonenumber,
            smsCode: this.sms,
            password: md5(this.passSure)
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
          if (res.data.code == "modify_success") {
            Toast("密码修改成功!");
            // 切换路由
            this.$router.replace('/login');
            // this.axios.post("/test")
          } else {
            Toast("密码修改失败！")
          }
        })
        .catch(err => {
          console.log(err);
        });
      }
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