<template>
  <div class="disappointing">
    <!-- 导航条 -->
    <van-nav-bar title="更换手机号码" left-arrow @click-left="onClickLeft" />
    <div class="phone-number">
      <h3>当前绑定手机号:</h3>
      <p class="recent-phonenumber">182******42</p>
    </div>
    <div class="input-box">
      <van-cell-group>
        <van-field
          label="手机号"
          placeholder="请输入新的手机号"
          maxlength="11"
          v-model="phonenumber"
          @blur="phoneCheckOut"
        />
        <van-field label="姓名" 
        placeholder="请输入您的姓名" 
        v-model="name" 
        @blur="nameCheckOut" 
        />
        <van-field
          label="身份证号"
          placeholder="请输入您的身份证号"
          maxlength="18"
          v-model="identity"
          @blur="identityCheckOut"
        />
      </van-cell-group>
      <van-cell-group class="test-code">
        <van-field v-model="sms" label="验证码" placeholder="请输入短信验证码">
          <van-button
            slot="button"
            size="small"
            type="primary"
            color="#999"
            :disabled="state" 
            @click="sendSmsCode"
          >发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <div class="btn-box">
      <button class="confrim" @click="setPassSubmit">确认</button>
    </div>
  </div>
</template>


<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      active: 0,
      phonenumber: "",
      name: "",
      identity: "",
      sms: "",
      username: "",
      state: true
    };
  },
  components: {
    [Toast.name]: Toast
  },
  methods: {
    onClickLeft() {
      this.$router.replace("/login");
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
    nameCheckOut() {
      if (this.name != "") {
        //当input 里面有数据的时候，再判断手机号对不对
        var myreg = /^[\u4e00-\u9fa5]{2,4}$/i;
        if (!myreg.test(this.name)) {
          Toast("请填写正确姓名！");
          console.log(this.name);
          this.name = "";
        } else {
          console.log("Yeah you got your correct name!");
        }
      }
    },
    identityCheckOut() {
      if (this.identity != "") {
        //当input 里面有数据的时候，再判断手机号对不对
        var myreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (!myreg.test(this.identity)) {
          Toast("请填写正确身份证号！");
          console.log(this.identity);
          this.identity = "";
        } else {
          console.log("Yeah you got your correct identity!");
        }
      }
    },
    sendSmsCode() {
      console.log(this.phonenumber);
      if (this.phonenumber == "") {
        Toast("请输入手机号！");
      } else {
        /* this.userId = sessionStorage.getItem(userId); */
        this.axios
        .post("/inhabitant/findByUserId",{
          userId: this.userId
        })
        .then()
        this.axios
          .post("/user/modifyTelNumSms", {
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
          })
          ;
      }
    },
    setPassSubmit() {
      console.log(this.password);
      console.log("注册");
      console.log(this.sms);
      if (this.phonenumber == "") {
        Toast("请输入手机号！");
      } else if (this.name == "") {
        Toast("请输入姓名！");
      } else if (this.identity == "") {
        Toast("请输入身份证号！");
      } else if (this.phonenumber && this.sms == "") {
        Toast("请输入验证码！");
      } else if (this.password == "" || this.passSure == "") {
        Toast("请输入密码！");
      } else {
        this.axios
          .post(
            "/user/forgetPasswordSubmit",
            {
              telNum: this.phonenumber,
              smsCode: this.sms,
              password: this.password
            },
            {
              headers: {
                "content-type": "application/json",
                validateId: this.validateId
              }
            }
          )
          .then(res => {
            console.log(res);
            if (res.data.code == "modify_success") {
              // var token = "njaksxbxkjasbkjcxasbjk" // 模拟后台返回的token
              var token = res.data.data.token;
              var userId = res.data.data.user.userId;
              var userState = res.data.data.user.userId;
              sessionStorage.setItem("token", token);
              sessionStorage.setItem("userId", userId);
              sessionStorage.setItem("userId", userState);
              console.log(userId);
              Toast("密码修改成功!");
              // 获取参数（未登录时想访问的路由）
              var url = this.$route.query.redirect;

              url = url ? url : "/index";
              // 切换路由
              this.$router.replace(url);
              // this.axios.post("/test")
            } else {
              Toast("密码修改失败！");
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
h3 {
  font-weight: 500;
}
.disappointing {
  background-color: rgb(248, 248, 248);
  height: 647px;
}
.phone-number {
  padding: 20px 10px 10px;
}
.recent-phonenumber {
  text-align: center;
  margin-top: 20px;
}
.input-box {
  width: 100%;
  margin-top: 20px;
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