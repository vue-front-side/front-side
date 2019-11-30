<template>
  <div id="app">
    <!-- <van-row class="nav" type="flex">
      <van-col span="2">
        <van-icon name="arrow-left" />
      </van-col>
      <van-col span="8">易居家政</van-col>
      <van-col offset="8" span="2">
        <van-icon name="wap-nav" />
      </van-col>
    </van-row>-->
    <van-nav-bar  title="易居家政" left-text="返回" left-arrow>
      <van-icon class="nav-right" name="wap-nav" slot="right" />
    </van-nav-bar>
    <div class="content">
      <van-row type="flex" justify="space-between" style="margin-bottom:10px">
        <van-col span="12" style="font-size:16px; font-weight:900">成都优质住家保姆推荐</van-col>
        <van-col span="6" style="font-size:14px; font-weight:100">查看更多></van-col>
      </van-row>

      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        <ul>
          <li v-for="item in list" :key="item" :title="item">
            <div class="information">
              <div class="headimg">
                <img src="../assets/logo.png" alt />
              </div>
              <div class="introduce">
                <van-row type="flex" justify="space-between" style="font-size:18px;">
                  <van-col span="8">某阿姨</van-col>
                  <van-col span="10" class="price">5000元/月</van-col>
                </van-row>
                <van-row type="flex" justify="space-between" style="font-size:16px;margin-top:10px">
                  <van-col span="8">年龄</van-col>|
                  <van-col span="8">籍贯</van-col>|
                  <van-col span="8">工龄</van-col>
                </van-row>
                <van-row
                  type="flex"
                  justify="space-around"
                  style="font-size:14px;font-weight:100;margin-top:10px"
                >
                  <van-col span="6" style="border:1px solid #000;">工作内容</van-col>
                  <van-col span="6" style="border:1px solid #000;">工作内容</van-col>
                  <van-col span="6" style="border:1px solid #000;">工作内容</van-col>
                </van-row>
              </div>
            </div>
          </li>
        </ul>
      </van-list>
    </div>

      <van-row class="foot" type="flex" justify="between">
        <van-col span="12">首页</van-col>|
        <van-col span="12">精品服务</van-col>
      </van-row>

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
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

.van-nav-bar {
  background: #eee;
  width: 100%;
  height: 88px;
  position: fixed;
  top: 40px;
  line-height: 88px;
  margin-bottom: 10px;
  van-icon {
    font-size: 0.5rem;
  }
}
.content {
  margin-top: 128px;
}
.information {
  width: 90%;
  margin: 0 auto;
  height: 240px;
}
.headimg  {
  width: 180px;
  height: 240px;
  float: left;
}
.headimg img {
  width: 180px;
  height: 240px;
}
.price {
  border: 1px solid #ffa400;
  padding: 10px;
  color: #ffa400;
}
.van-nav-bar__title {
  max-width: 60%;
  margin: 0 auto;
  color: #323233;
  font-weight: 500;
  font-size: 0.5rem;
}
.van-nav-bar__text {
  font-size: 0.4rem;
}
.van-icon-arrow-left:before {
  font-size: 0.5rem;
}
.nav-right {
  font-size: 0.5rem;
}
ul li {
  margin: 20px 0;
}
.foot {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 98px;
  line-height: 98px;
  background: #eee;
}
</style>