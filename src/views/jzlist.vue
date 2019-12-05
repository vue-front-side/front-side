<template>
  <div id="qpp">
    
    <van-nav-bar title="易居家政" left-text="返回" @click-left="back" right-text="家政记录" @click-right="jl" left-arrow>
     
    </van-nav-bar>
    <van-loading style="text-align:center" v-if='state' />
    <div class="content">
      <van-row type="flex" justify="space-between" style="margin-bottom:10px">
        <van-col span="12" style="font-size:16px; font-weight:900">成都优质保姆推荐</van-col>
      </van-row>

      <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad"> -->
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <router-link :to="'/jzdetails/'+item.staffId">
            <div class="information">
              <div class="headimg">
                <img src="../assets/logo.png" alt />
              </div>
              <div class="introduce">
                <van-row type="flex" justify="space-between" style="font-size:18px;">
                  <van-col span="8"  style="text-align: center;height:36px;line-height:36px">{{item.staffName}}</van-col>
                  <van-col span="10" class="price">{{item.staffSalary}}元/周</van-col>
                </van-row>
                <van-row
                  type="flex"
                  justify="space-between"
                  style="text-align: center;font-size:16px;margin-top:10px"
                >
                  <van-col span="8">44</van-col>|
                  <van-col span="8">{{item.born}}</van-col>|
                  <van-col span="8">从业{{item.workTime}}年</van-col>
                </van-row>
                <van-row
                  type="flex"
                  justify="space-around"
                  style="font-size:14px;font-weight:100;margin-top:10px"
                >
                  <van-col span="6" style="border:1px solid #000;">洗衣做饭</van-col>
                  <van-col span="6" style="border:1px solid #000;">照顾小孩</van-col>
                  <van-col span="6" style="border:1px solid #000;">打扫卫生</van-col>
                </van-row>
              </div>
            </div>
            </router-link>
          </li>
        </ul>
      <!-- </van-list> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      state:true
    };
  },
  created() {
    sessionStorage.setItem("zeroRoute",this.$route.fullPath);
    this.axios
      .get("/staff/getAllStaffIsJZAY", {})

      .then(res => {
        if(res.data.code==200){
          this.state=false
        }
        this.list = res.data.data.staffList;
        console.log("数组:", this.list);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    jl(){
      this.$router.push('/jzjl')
    },
    back(){
      this.$router.push('/service')
    }
    // next(){
    //   this.$router.push({ path: '/jzdetails', query: { orderId: 123 } });
    // }
    // onLoad() {
    //   // 异步更新数据
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1);
    //     }
    //     // 加载状态结束
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 500);
    // }
  }
};
</script>

<style lang="less" scoped>
.information {
  width: 90%;
  margin: 0 auto;
  height: 120px;
}
.headimg {
  width: 90px;
  height: 120px;
  float: left;
}
.headimg img {
  width: 90px;
  height: 100px;
}
.price {
  border: 1px solid #ffa400;
  padding: 5px;
  color: #ffa400;
}

ul li {
  margin: 10px 0;
}
.foot {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 59px;
  line-height: 59px;
  background: #eee;
  text-align: center;
}
</style>