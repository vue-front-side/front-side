<template>
  <div id="qpp">
    <van-nav-bar title="维修记录" left-text="返回" left-arrow></van-nav-bar>
    <div style="margin-top:84px;"></div>
    <van-tabs v-model="active" animated>
      <van-tab title="待维修">
        <ul>
          <li>
            <div class="box">
              <div class="img">
                <img src alt="暂无图片" />
              </div>
              <p>维修内容：洗衣机损坏</p>
              <p>报修时间：2019.12.01</p>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="已维修">
        <ul>
          <li>
            <div class="box">
              <div class="img">
                <img src alt="暂无图片" />
              </div>
              <div class="content">
                <p>维修内容：洗衣机损坏</p>
                <p>维修时间：2019.12.01</p>
                <p>维修人员：张师傅</p>
                <p>维修费用：￥45</p>
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
}
</style>