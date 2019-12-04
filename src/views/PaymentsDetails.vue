<template>
  <div>
    <van-nav-bar title="生活缴费" left-arrow @click-left="onClickLeft"/>
    <div class="details">
      <div class="de-innerbox">
        <h4><span>{{catigorys}}</span>缴费</h4>
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
          v-model="value"
        />
      </van-cell-group>
      <router-link :to="{ name: 'orderdetails'}">
        <div class="btn-box">
          <button type="submit" class="confrim" @click="getPay">立即缴费</button>
        </div>
      </router-link>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'paymentDetails',
  data() {
    return {
      catigorys: '电费',
      value: '',
      list: []
    }
  },
  created() {
    console.log("当前缴费类别 id:", location.search.substring(1));
    this.category = location.search.substring(1);
    /* var userId = sessionStorage.getItem(userId); */
    this.userId = "1";
    console.log(this.category);
    console.log(this.userId);
    this.axios
    .post("/pay/jiemian", {
      payUnitId: this.category,
      inhabitantId: this.userId
    })
    .then(res => {
      console.log(res.data)
      if(res.data.code == "200"){
        this.list = res.data.data.Pays[0];
        console.log(res.data.data.Pays[0])
      } else {
        console.log("获取数据失败");
      }
    })
    .catch(err => {
      console.log(err);
    });
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1);
    },
    getPay() {
      this.payId = '19'
      this.axios
      .post("/alipay/shaxiang", {
        payId: this.payId
      })
      .then(res => {
        console.log(res.data)
        if(res.data.code == "200"){
          console.log(res.data);
        } else {
          console.log("bbb");
        }
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/base.less';
@import '../assets/less/nav.less';
p{
  font-size: 16px;
  color: #666;
}
h4 {
  font-weight: 500;
  text-align: left;
}
hr {
  border-width: 1px;
  border-color: #ccc;
  margin-top: 6px;
}
.de-innerbox {
  width: 86%;
  margin: 20px auto 0;
}
.clearfix {
  padding-top: 14px;
}
.left{
  float: left;
}
.right {
  float: right;
}
.inputs {
  margin-top: 30px;
}
.van-cell {
  font-size: 15px;
  color: #666;
}
.btn-box{
  text-align: center;
  margin-top: 30px;
}
.confrim {
  width: 180px;
  height: 40px;
  background: @themeColor;
  border: none;
  border-radius: 2px;
  font-size: 20px;
  color: white;
}
</style>