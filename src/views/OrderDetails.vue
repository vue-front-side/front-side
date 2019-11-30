<template>
  <div>
    <van-nav-bar title="订单详情" left-arrow @click-left="onClickLeft"/>
    <div class="title">
      <h2>缴费公司名字</h2>
      <h3>199.00</h3>
      <p>交易成功</p>
    </div>
    <ul class="details">
      <li class="clearfix">
        <p class="left">金额</p>
        <p class="right" >xxxxxxxxxxxxxx</p>
      </li>
      <li class="clearfix">
        <p class="left">付款方式</p>
        <p class="right">xxxxxxxxxxxxxx</p>
      </li>
      <li class="clearfix">
        <p class="left">缴费说明</p>
        <p class="right">xxxxxxxxxxxxxx</p>
      </li>
      <li class="clearfix">
        <p class="left">户号</p>
        <p class="right">xxxxxxxxxxxxxx</p>
      </li>
      <li class="clearfix">
        <p class="left">创建时间</p>
        <p class="right">xxxxxxxxxxxxxx</p>
      </li>
      <li class="clearfix">
        <p class="left">订单号</p>
        <p class="right">xxxxxxxxxxxxxx</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
@import '../assets/style/base.less';
p{
  font-size: 32px;
  color: #666;
}
h3 {
  padding: 8px 0 0;
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
.title {
  padding: 50px 0;
  text-align: center;
}
.details {
  padding: 50px 50px;
}
.clearfix {
  padding-top: 20px;
}
.left{
  float: left;
}
.right {
  float: right;
}
</style>