<template>
  <div id="qpp">
    <van-nav-bar title="家政记录" left-text="返回" @click-left="onClickLeft" left-arrow></van-nav-bar>
    <div style="margin-top:84px;"></div>
    <van-tabs v-model="active" animated>
      <van-tab title="待上门">
        <ul>
          <li>
            <div class="box">
              <div class="img">
                <img src alt="暂无图片" />
              </div>
              <div class="content">
                <p>唐阿姨</p>
                <p class="time" style="font-size:12px">2019.12.01-2019.12.02</p>
                <p>洗衣做饭带娃</p>
                <span class="isover">未完成</span>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="已上门">
        <ul>
          <li>
            <div class="box">
              <div class="img">
                <img src alt="暂无图片" />
              </div>
              <div class="content">
                <p>唐阿姨</p>
                <p class="time" style="font-size:12px">2019.12.01</p>
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
      active: 2
    };
  },
  methods:{
    onClickLeft() {
      this.$router.push('/my')
    }
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
  line-height: 70px;
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