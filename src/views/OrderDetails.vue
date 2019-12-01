<template>
  <div>
    <van-nav-bar title="订单详情" left-arrow @click-left="onClickLeft"/>
    <div class="title">
      <h3>缴费公司名字</h3>
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
@import '../assets/less/nav.less';
p{
  font-size: 16px;
  color: #666;
}
h3 {
  padding: 8px 0 0;
  font-weight: 500;
}
.title {
  padding: 25px 0;
  text-align: center;
}
.details {
  padding: 25px;
}
.clearfix {
  padding-top: 10px;
}
.left{
  float: left;
}
.right {
  float: right;
}
</style>