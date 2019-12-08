<template>
  <div id="qpp">
    <van-nav-bar title="订单详情" left-arrow left-text="返回" @click-left="back" />
    <div class="title">
      <h3>{{list.company.companyName}}</h3>
      <h3>{{list.payMoney}}</h3>
      <p>交易成功</p>
    </div>
    <ul class="details">
      <li class="clearfix">
        <p class="left">金额</p>
        <p class="right" >{{list.payMoney}}</p>
      </li>
      <li class="clearfix">
        <p class="left">付款方式</p>
        <p class="right">{{list.payTheWay}}</p>
      </li>
      <li class="clearfix">
        <p class="left">户号</p>
        <p class="right">{{list.inhabitantAndHousePropertyVO.housePropertyNo}}</p>
      </li>
      <li class="clearfix">
        <p class="left">创建时间</p>
        <p class="right">{{list.payDate}}</p>
      </li>
      <li class="clearfix">
        <p class="left">订单号</p>
        <p class="right">{{list.payOrder}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
    return {
      show: false,
      newId: "",
      list: []
    };
  },
   created() {
     sessionStorage.setItem("secRoute",this.$route.fullPath);
    this.newId = this.$route.params.payId;
    console.log(this.newId);
    this.axios
      .post("/pay/xiangqing", { payId:this.newId})
      .then(res => {
        this.list = res.data.data.Pays;
        console.log(this.list)
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods:{
    back(){
      this.$router.push(sessionStorage.getItem("firstRoute"));
      sessionStorage.removeItem("firstRoute");
      
    }
  }
}
</script>

<style lang="less" scoped>
// @import '../assets/style/base.less';
// @import '../assets/less/nav.less';
h2 {
  font-size: 34px;
  font-weight: 500;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
h2,p,h3,h4,hr {
  margin: 0;
  padding: 0;
}
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
