<template>
  <div id="qpp">
    <van-sticky>
      <van-row>
        <van-col span="24">
          <van-nav-bar
            title="回收记录"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            class="top_nav"
          />
        </van-col>
      </van-row>
    </van-sticky>
    <van-loading style="text-align:center" v-if="this.state" />
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div class="box">
          <div class="boxone">
            <p>{{item.regenerantStyle}}</p>
            <p>预约时间：{{item.recycleTime}}</p>
          </div>
          <van-button
            style="width:100px;height:40px;margin:25px 0 5px 10px"
            type="primary"
            v-if="item.recycleState==1"
          >已回收</van-button>
          <van-button
            style="width:100px;height:40px;margin:25px 0 5px 10px"
            type="danger"
            v-if="item.recycleState==0"
          >待回收</van-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      oldUrl: "",
      inhabitantId:"",
      state:true
    };
  },
  created() {
    sessionStorage.setItem("secondRoute",this.$route.fullPath)
    this.inhabitantId = sessionStorage.getItem("inhabitantId");
    this.axios
      .get("/InhabitantAndRecycle/getAllRecycle", {
        params: { inhabitantId: this.inhabitantId }
      })
      .then(res => {
        console.log(res.data)
        if(res.data.code==200){
          this.state=false;
          this.list = res.data.data.recycles;
        }       
      })
      .catch(err => {
        console.log(err);
      });
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例,将值传入oldUrl
      vm.oldUrl = from.path;
    });
  },
  methods: {
    onClickLeft() {
      this.$router.push(sessionStorage.getItem("firstRoute"));
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 验证是否获取到了上页的url
      /* eslint-disable no-console */
      console.log("上页地址", this.oldUrl);
    });
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  border-bottom: 1px solid #999;
}
.boxone {
  width: 200px;
  text-align: left;
  float: left;
}
.boxone p {
  font-size: 18px;
  margin: 15px 0 0 10px;
}
.red {
  background: red;
  border: none;
}
</style>