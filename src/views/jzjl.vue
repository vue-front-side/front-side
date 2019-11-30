<template>
  <div id="qpp">
    <van-nav-bar title="家政记录" left-text="返回" left-arrow></van-nav-bar>
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
  }
};
</script>

<style lang="less" scoped>
.box {
  border: 2px solid #eee;
  margin: 10px;
  overflow: hidden;
}
.box p {
  font-size: 32px;
  margin-top: 10px;
}
.img {
  width: 140px;
  height: 140px;
  background: #eee;
  float: left;
  margin-left: 20px;
  margin-top: 5px;
  line-height: 70px;
  font-size: 28px;
  text-align: center;
}
.content {
  width: 500px;
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
  font-size: 24px;
  display: inline-block;
  width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding: 5px 10px;
  position: absolute;
  top: 20px;
  right: 20px;;
}
.price {
    font-size: 30px;
  display: inline-block;
  width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding: 5px 10px;
  position: absolute;
  bottom: 10px;
  right: 20px;;
}
</style>