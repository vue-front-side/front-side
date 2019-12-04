<template>
  <div id="qpp">
    <van-nav-bar title="缴费记录" left-text="返回" @click-left="onClickLeft" left-arrow></van-nav-bar>
    <div style="margin-top:64px;"></div>
   
     <ul>
       
       <li v-for="(item,index) in list" :key="index">
         <router-link :to="'/paydetails/'+item.payId">
         <div class="box" >
           <div class="boxone">
             <p>{{item.company.companyName}}</p>
             <p>缴费时间：{{item.payDate}}</p>
           </div>
           <div class="price"><span>-{{item.payMoney}}</span></div>
         </div>
         </router-link>
       </li>
       
     </ul>

  </div>

</template>

<script>
export default {
   data() {
    return {
      list: []
    };
  },
  created() {
    this.axios
      .post("/pay/selinha", {inhabitantId:1})
      .then(res => {
        console.log(res.data.data)
        this.list = res.data.data.pays;
      })
      .catch(err => {
        console.log(err);
      });
  },
    methods: {
   
    onClickLeft(){
      this.$router.push('/my')
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  border-bottom: 1px solid #999;
  position: relative;
}
.boxone {
  width: 300px;
  text-align: left;
  float: left;
}
.boxone p {
  font-size: 18px;
}
.price {
  width: 75px;
  height: 30px;
  text-align: right;
  position: absolute;
  top: 40px;
  right: 10px;
}
a {
  color: #000;
}
</style>