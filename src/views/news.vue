<template>
  <div id="app">
    <van-nav-bar title="消息中心" left-text="返回" left-arrow></van-nav-bar>
    <div style="margin-top:64px;"></div>
    <ul>
      <li style="overflow: hidden;position:relative;margin-top:-30px">
        
        <van-icon name="volume-o" />
        <div>
          <p class="news">消息通知消息通知消息通知消息通知消息通知消息通知消息通知消息通知消息通知<span class="time">3:10</span></p>
        </div>
      </li>
      <li style="overflow: hidden; position:relative;margin-top:-30px">
        
        <van-icon name="volume-o" />
        <div>
          <p class="news">消息通知消息通知消息通知消息通知消息通知消息通知消息通知消息通知消息通知<span class="time">3:10</span></p>
        </div>
      </li>
      <li style="overflow: hidden;position:relative;margin-top:-30px">
        
        <van-icon name="volume-o" />
        <div>
          <p class="news">消息通知消息通知消息通知消息通知消息通息通知消息通知消息通息通知消息通知消息通息通知消息通知消息通知消息通知消息通知消息通知消息通知<span class="time">3:10</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {};
</script>


<style lang="less" scoped>
.time {
  position: absolute;
  right: 60px;
  bottom: 40px;
  font-size: 30px;
  color: #aaa;
}
.news {
  width: 520px;
  padding: 32px 20px;
  margin-right: 40px;
  font-size: 36px;
  float: right;
  text-align: left;
  border: 2px solid #eee;
  border-radius: 20px;
}
</style>