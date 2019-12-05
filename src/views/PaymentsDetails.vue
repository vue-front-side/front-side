<template>
  <div>
    <van-nav-bar title="生活缴费" left-arrow @click-left="onClickLeft"/>
    <van-loading size="24px" v-if="flag" class="load">加载中...</van-loading>
    <div class="details">
      <div class="de-innerbox">
        <h4><span>{{catigorys}}</span>缴费</h4>
        <hr>
        <ul>
          <li class="clearfix">
            <p class="left">缴费单位</p>
            <p class="right" >{{company}}</p>
          </li>
          <li class="clearfix">
            <p class="left">住户号</p>
            <p class="right">{{inhabitantNum}}</p>
          </li>
          <li class="clearfix">
            <p class="left">住户住址</p>
            <p class="right">{{inhabitantAdd}}</p>
          </li>
          <li class="clearfix">
            <p class="left">余额</p>
            <p class="right">{{inhabitantMone}}</p>
          </li>
        </ul>
      </div>
      <van-cell-group class="inputs">
        <van-field
          label="充值金额"
          placeholder="请输入充值金额"
          @blur="checkMoney"
          v-model="money"
        />
      </van-cell-group>
      <div class="btn-box">
        <button type="button" class="confrim" @click="sureToPay" :disabled="state">立即缴费</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog, Loading } from 'vant';
import { Toast } from "vant";
export default {
  name: 'paymentDetails',
  data() {
    return {
      catigorys: '',
      company: '',
      inhabitantNum: '',
      inhabitantAdd: '',
      inhabitantMone: '',
      payid: '',
      location: '',
      money: '',
      state: true,
      flag: true ,
      userId:""
    }
  },
  components: {
    [Dialog.name]: Dialog,
    [Toast.name]: Toast,
    [Loading.name]: Loading
  },
  created() {
    console.log("当前缴费类别 id:", location.search.substring(1));
    this.category = location.search.substring(1);
    this.userId = sessionStorage.getItem("userId"); 
     
    console.log(this.category);
    console.log(this.userId);
    this.axios
    .post("/pay/jiemian", {
      payUnitId: this.category,
      inhabitantId: this.userId
    })
    .then(res => {
      this.flag = false;
      console.log(res.data)
      if(res.data.code == "200"){
        this.catigorys = res.data.data.Pays[0].payProject;
        this.company = res.data.data.Pays[0].company.companyName;
        this.inhabitantNum = res.data.data.Pays[0].inhabitantAndHousePropertyVO.housePropertyNo;
        this.inhabitantAdd = res.data.data.Pays[0].inhabitantAndHousePropertyVO.detailAddress;
        this.inhabitantMone = res.data.data.Pays[0].payMoney;
        this.payid = res.data.data.Pays[0].payId;
        console.log(res.data.data.Pays[0]);
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
    checkMoney() {
      if (this.money != "") {
        //当input 里面有数据的时候，再判断手机号对不对
        var myreg = /^\d+(\.\d{1,2})?$/;
        if (!myreg.test(this.money)) {
          Toast("请输入正确的金额！");
          console.log(this.money);
        } else {
          console.log("Yeah you got your correct number!");
          this.state = false;
        }
      }
    },
    sureToPay() {
      console.log('aaa')
      Dialog.confirm({
        title: '提示',
        message: '花钱如流水哦！'
      }).then(() => {
        // on confirm
        this.getPayUrl();
      }).catch(() => {
        // on cancel
      });
    },
    getPayUrl() {
    this.axios
    .post("/alipay", {
      payId: this.payid,
      payMoney: this.money
    })
    .then(res => {
      console.log(res.data);
      let routerData = this.$router.resolve({path:'/payGateWay',query:{ htmlData: res.data}})
     // 打开新页面
      window.open(routerData.href, '_ blank') 
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
.load {
  text-align: center;
  position: absolute;
  top: 250px;
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