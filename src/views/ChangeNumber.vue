<template>
  <div class="disappointing">
     <!-- 导航条 -->
    <van-nav-bar title="更换手机号码" left-arrow @click-left="onClickLeft"/>
    <div class="phone-number">
      <h2>当前绑定手机号:</h2>
      <p class="recent-phonenumber">182******42</p>
    </div>
    <form action="">
      <div class="input-box">
        <van-cell-group>
          <van-field
            readonly
            clickable
            left-icon="phone-o"
            placeholder="请输入新手机号"
            :value="value" 
            @touchstart.native.stop="show = true"
          /> 
          <van-number-keyboard
            v-model="value"
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
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
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
  name: 'changenumber',
  data() {
    return {
      show: false,
      value: '',
      sms: ''
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
.disappointing {
  background-color: rgb(248, 248, 248);
  height: 1196px;
}
.van-nav-bar {
  background-color: #eee;
  height: @navgHeight;
  width:100%;
  line-height: @navgHeight;
  margin-top: 40px;
}
.van-nav-bar__title {
  max-width: 100%;
  font-size:  40px;
  font-weight: 500;
  
}
.van-icon-arrow-left {
  color: #444;
  font-size: 34px;
}
.phone-number {
  padding: 40px;
}
.recent-phonenumber {
  text-align: center;
  margin-top: 40px;
}
.input-box{
  width: 100%;
  margin-top: 80px;
}
.van-cell--clickable {
  line-height: 80px; 
  padding-left: 20px;
  font-size: 30px;
  color: #666;
}
/* .van-field__control {
  padding-left: 20px;
  box-sizing: border-box;
} */
.van-button--small {
  height: 80px;
  width: 160px;
  margin-top: 0px;
  transform: translateY(-3px);
}
.btn-box{
  text-align: center;
  margin-top: 150px;
}
.confrim {

  width: 360px;
  height: 80px;
  background: @themeColor;
  border: none;
  border-radius: 4px;
  font-size: 40px;
  color: white;
}

</style>