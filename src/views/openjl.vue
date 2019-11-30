<template>
  <div id="qpp">
    <van-nav-bar title="开锁记录" left-text="返回" left-arrow></van-nav-bar>
    <div style="margin-top:84px;"></div>
    <ul>
      <li>
        <div class="box">
          <div class="content">
            <p>开锁时间：2019.12.01</p>
            <p>开锁师傅：张师傅</p>
            <p>联系方式：13325313321</p>
            <p>所需费用：￥45</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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