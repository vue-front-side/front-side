<template>
  <div id="qpp">
     <van-loading style="text-align:center" v-if='state' />
   <van-sticky>
      <van-row>
        <van-col span="24">
          <van-nav-bar
            title="缴费记录"
            left-text="返回"
        
            left-arrow
            @click-left="onClickLeft"
        
            class="top_nav"
          />
        </van-col>
      </van-row>
    </van-sticky>
   
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
      list: [],
      oldUrl:""
    };
  },
    beforeRouteEnter (to, from, next){
     next(vm => {
       // 通过 `vm` 访问组件实例,将值传入oldUrl
       vm.oldUrl = from.path
     })
   },
  created() {
    console.log(this.$route.fullPath);
    sessionStorage.setItem("firstRoute",this.$route.fullPath);
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
      var route = sessionStorage.getItem("zeroRoute");
      this.$router.replace(route);
      sessionStorage.removeItem("zeroRoute");
    }
  },
     mounted() {
     this.$nextTick(()=>{
       // 验证是否获取到了上页的url
       /* eslint-disable no-console */
       console.log("上页地址",this.oldUrl)
     })
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
  margin: 18px 0;
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