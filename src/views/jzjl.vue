<template>
  <div id="qpp">
    <van-sticky>
      <van-row>
        <van-col span="24">
          <van-nav-bar
            title="家政记录"
            left-text="返回"
            
            left-arrow
            @click-left="onClickLeft"
            
            class="top_nav"
          />
        </van-col>
      </van-row>
    </van-sticky>
    <van-tabs v-model="active" animated>
      <van-tab title="待上门">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <div class="box" v-if="item.state==0">
              <div class="img">
                <img src alt="暂无图片" />
              </div>
              <div class="content">
                <p>{{item.staffName}}</p>
                <p class="time" style="font-size:12px">{{item.serviceTime}}</p>
                <p>洗衣做饭带娃</p>
                <span class="isover">未完成</span>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="已上门">
        <ul>
          <li v-for="(item,index) in list" :key="index" >
            <div class="box" v-if="item.state ==1">
              <div class="img">
                <img src alt="暂无图片" />
              </div>
              <div class="content">
                <p>{{item.staffName}}</p>
                <p class="time" style="font-size:12px">{{item.serviceTime}}</p>
                <p>洗衣做饭带娃</p>
                <span class="isover">已完成</span>
                <span class="price">￥845</span>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>
export default {
    data() {
    return {
      active: 2,
      oldUrl:"",
      list:[]
    };
  },
  created() {
    sessionStorage.setItem("firstRoute",this.$route.fullPath);
    this.axios
      .get("/InhabitantAndStaff/getInfoById", {params:{inhabitantId:1}})
      .then(res => {
        console.log(res.data.data)
        this.list = res.data.data.list
        console.log("数组:", this.list);
      })
      .catch(err => {
        console.log(err);
      });
  },
  beforeRouteEnter (to, from, next){
     next(vm => {
       // 通过 `vm` 访问组件实例,将值传入oldUrl
       vm.oldUrl = from.path
     })
   },
  methods:{
    onClickLeft() {
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
  border: 1px solid #eee;
  margin: 5px;
  overflow: hidden;
}
.box p {
  font-size: 16px;
  margin-top: 5px;
}
.img {
  width: 70px;
  height: 70px;
  background: #eee;
  float: left;
  margin-left:10px;
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
}
.content {
  width: 250px;
  float: right;
  text-align: left;
  position: relative;
}
p {
  margin: 0;
}
.time {
  color: #aaa;

}
.isover {
  font-size: 14px;
  display: inline-block;
  width: 60px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  padding: 5px 10px;
  position: absolute;
  top: 10px;
  right: 10px;;
}
.price {
    font-size: 16px;
  display: inline-block;
  width: 40px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  padding: 5px 10px;
  position: absolute;
  bottom: 5px;
  right: 20px;;
  color: red;
}
</style>