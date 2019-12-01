<template>
  <div>
    <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" right-text="注册" @click-right="onClickRight"/>
    <div class="logo">
      <img src="../assets/img/login-logo.png" alt="">
    </div>
    <van-tabs v-model="active">
      <van-tab title="手机登录">
        <form action="">
          <div class="input-box">
            <van-cell-group>
              <van-field
                readonly
                clickable
                label="手机号"
                placeholder="请输入手机号"
                :value="phonenumber" 
                @touchstart.native.stop="show = true"
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
                placeholder="请输入短信验证码"
              >
                <van-button slot="button" size="small" type="primary" color="#999">发送验证码</van-button>
              </van-field>
            </van-cell-group>
          </div>
          <div class="btn-box">
            <button type="submit" class="confrim">确认</button>
          </div>
        </form>
      </van-tab>
      <van-tab title="密码登录">
        <form action="">
          <div class="input-box">
            <van-cell-group>
              <van-field
                label="用户名"
                placeholder="请输入用户名"
                :value="username" 
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
          <p>忘记密码？</p>
          <div class="btn-box">
            <button type="submit" class="confrim">确认</button>
          </div>
        </form>
      </van-tab>
    </van-tabs>
    
  </div>
</template>
  
<script>
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
  methods: {
    onClickLeft() {
      alert('返回');
    },
    onClickRight() {
      alert('注册')
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