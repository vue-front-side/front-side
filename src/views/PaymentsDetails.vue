<template>
  <div>
    <van-nav-bar title="生活缴费" left-arrow @click-left="onClickLeft"/>
    <div class="details">
      <div class="de-innerbox">
        <h2><span>{{catigorys}}</span>缴费</h2>
        <hr>
        <ul>
          <li class="clearfix">
            <p class="left">缴费单位</p>
            <p class="right" >xxxxxxxxxxxxxx</p>
          </li>
          <li class="clearfix">
            <p class="left">住户号</p>
            <p class="right">xxxxxxxxxxxxxx</p>
          </li>
          <li class="clearfix">
            <p class="left">住户住址</p>
            <p class="right">xxxxxxxxxxxxxx</p>
          </li>
          <li class="clearfix">
            <p class="left">余额</p>
            <p class="right">xxxxxxxxxxxxxx</p>
          </li>
        </ul>
      </div>
      <van-cell-group class="inputs">
        <van-field
          label="充值金额"
          placeholder="请输入充值金额"
          label-width='2rem'
          :value="value"
          @touchstart.native.stop="show = true"
        />

        <van-number-keyboard
          v-model="value"
          :show="show"
          :maxlength="6"
          @blur="show = false"
        />
      </van-cell-group>

       <div class="btn-box">
        <button type="submit" class="confrim">立即缴费</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catigorys: '电费',
      show: false,
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/base.less';
p{
  font-size: 32px;
  color: #666;
}
hr {
  border-width: 1px;
  border-color: #ccc;
  margin-top: 12px;
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
.de-innerbox {
  width: 86%;
  margin: 100px auto 0;
}
.clearfix {
  padding-top: 36px;
}
.left{
  float: left;
}
.right {
  float: right;
}
.inputs {
  margin-top: 100px;
}
.van-cell {
  line-height: 80px; 
  padding-left: 20px;
  font-size: 30px;
  color: #666;
}
.btn-box{
  text-align: center;
  margin-top: 100px;
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