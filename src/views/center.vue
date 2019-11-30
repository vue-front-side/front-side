<template>
  <div id="app">
    <van-nav-bar title="设置" left-text="返回" left-arrow>
      <van-icon class="nav-right" name="wap-nav" slot="right" />
    </van-nav-bar>
    <van-cell-group style="margin-top:64px">
      <van-cell  title="头像" center >
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <van-image class="img" slot="default" round width="40px" height="40px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </van-cell >
      <van-cell  title="姓名" value="易居" />
      <van-cell  title="性别" value="男" />
      <van-cell  title="修改手机" value="110120119" is-link to="newphone.vue" />
      <van-cell title="修改密码" is-link to="newpass.vue" />
      <van-cell title="退出登录" style="margin-top:20px;width:75px;background:red;color:#fff;border-radius:10px" to="lgoin" />
    </van-cell-group>
  </div>
</template>


<script>
export default {};
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
.headimg {
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
.img {
  transform: translateY(13px)
}
</style>