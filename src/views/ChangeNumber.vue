<template>
  <div class="disappointing">
     <!-- 导航条 -->
    <van-nav-bar title="更换手机号码" left-arrow @click-left="onClickLeft"/>
    <div class="phone-number">
      <h3>当前绑定手机号:</h3>
      <p class="recent-phonenumber">182******42</p>
    </div>
    <form action="">
      <div class="input-box">
        <van-cell-group>
          <van-field
            readonly
            clickable
            label="手机号"
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
            <van-button slot="button" size="small" type="primary" color="#999">发送验证码</van-button>
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
@import '../assets/less/nav.less';
h3{
  font-weight: 500;
}
.disappointing {
  background-color: rgb(248, 248, 248);
  height: 1196px;
}
.phone-number {
  padding: 20px 10px 10px; 
}
.recent-phonenumber {
  text-align: center;
  margin-top: 20px;
}
.input-box{
  width: 100%;
  margin-top: 20px;
}
// .van-cell--clickable {
//   font-size: 18px;
//   color: #666;
// }
// .van-icon-phone-o{
//   font-size: 20px;
// }
// /* .van-field__control {
//   padding-left: 20px;
//   box-sizing: border-box;
// } */
// .van-button--small {
//   height: 80px;
//   width: 160px;
//   margin-top: 0px;
//   transform: translateY(-3px);
// }
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