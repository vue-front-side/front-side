<template>
  <div id="qpp">
    <van-nav-bar title="回收记录" left-text="返回" @click-left="onClickLeft" left-arrow></van-nav-bar>
    <div style="margin-top:64px;"></div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
     <ul>
       <li v-for="(item,index) in list" :key="index">
         <div class="box">
           <div class="boxone">
             <p>回收物</p>
             <p>预约时间：xxxxxx</p>
           </div>
           <van-button style="width:100px;height:40px;margin:35px 0 0 60px" type="danger">回收状态</van-button>
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
      finished: false
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
}
.boxone {
  width: 150px;
  text-align: left;
  float: left;
}
.boxone p {
  font-size: 18px;
}
</style>