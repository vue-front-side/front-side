<template>
  <div>
    <van-nav-bar title="注册" left-arrow @click-left="onClickLeft"/>
    <form action="" class="form-area">
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
          <van-cell-group class="pass-box">
            <van-field
              readonly
              clickable
              label="密码"
              placeholder="请输入密码"
              :value="password" 
            /> 
            <van-field
              readonly
              clickable
              label="新密码"
              placeholder="请输入新密码"
              :value="newpassword" 
            /> 
          </van-cell-group>
        </div>
        <div class="btn-box">
          <button type="submit" class="confrim">确认</button>
        </div>
      </form>
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
      newpassword: ''
    }
  },
  methods: {
    onClickLeft() {
      alert('返回');
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/base.less';
@import '../assets/less/nav.less';
.form-area {
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