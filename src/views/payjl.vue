<template>
  <div id="qpp">
    <van-nav-bar title="缴费记录" left-text="返回" left-arrow></van-nav-bar>
    <div style="margin-top:64px;"></div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
     <ul>
       <li v-for="item in list" :key="item" :title="item">
         <div class="box" >
           <div class="boxone">
             <p>缴费对象</p>
             <p>缴费时间：xxxxxx</p>
           </div>
           <div class="price"><span>-40.00</span></div>
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
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, );
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
  width: 300px;
  text-align: left;
  float: left;
}
.boxone p {
  font-size: 36px;
}
.price {
  margin: 70px 0 0 40px;
  text-align: right;
}
</style>