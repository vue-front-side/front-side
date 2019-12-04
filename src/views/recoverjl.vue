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
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
     <ul>
       <li v-for="(item,index) in list" :key="index">
         <div class="box">
           <div class="boxone">
             <p>回收物</p>
             <p>预约时间：xxxxxx</p>
           </div>
           <van-button style="width:100px;height:40px;margin:25px 0 0 10px" type="danger">回收状态</van-button>
         </div>
       </li>
     </ul>
    </van-list>
  </div>
</template>

<script>
export default {
   data() {
    return {
      list: [],
      loading: false,
      finished: false,
      oldUrl:""
    };
  },
  created() {
    this.axios
      .post("/staff/recycle/getAllRecycle", {})
      .then(res => {
        this.list = res.data.data.staffList;
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
    methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 4) {
          this.finished = true;
        }
      }, 500);
    },
    onClickLeft() {
      this.$router.push(this.oldUrl)
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
</style>