<template>
  <div class="qpp">
    <!-- 导航条 -->
    <van-sticky>
    <van-row>
      <van-col span="24">
        <van-nav-bar
          title="用户认证"
          left-text="返回"
          
          left-arrow
          @click-left="onClickLeft"
        
        />
      </van-col>
    </van-row>
    </van-sticky>
     <van-cell-group>
            <van-field
              label="手机号"
              placeholder="请输入手机号"
              v-model="phonenumber"
              maxlength="11"
              @blur="phoneNumCheckOut"
            />
      </van-cell-group>
      <div class="input-box">
        <van-cell-group class="test-code">
          <van-field
            v-model="value"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <van-button slot="button" @click="sub" size="small" type="primary">发送验证码</van-button>
          </van-field>
         
        </van-cell-group>
      </div>
    <div class="btn-box">
      <button type="submit" @click="ok" class="confrim">确认</button>
    </div>
  </div>
</template>


<script>
import {Toast} from 'vant'
export default {
  name: "changenumber",
  components:{
    [Toast.name]:Toast
  },
  data() {
    return {
      show: false,
      value: "",
      msg:[],
      value1: "",
      value2: "",
      telyz:'',
      tel:"15008125180",
      userId:""
    };
  },
  created() {
    
  },
  methods: {
    sub(){
      this.axios
      .post("/user/sendSmsCode", {telNum:this.phonenumber})
      .then(res => {
        console.log(res.data)
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
    
    ok(){
      this.userId = sessionStorage.getItem("userId");
      console.log(this.userId);
      console.log(typeof(this.tel))
      this.axios
      .post("/user/authentication", {telNum:this.phonenumber,validateCode:this.value,userId:this.userId})
      .then(res => {
        console.log(res.data)
        if(res.data.code==200){
          sessionStorage.setItem("userState",res.data.data.data.user.userState);
          console.log("认证成功：",sessionStorage.getItem("userState"));
          this.$router.push('/authentication')
          
        } else {
          this.$toast("认证失败！")
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

