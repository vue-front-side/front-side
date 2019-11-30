<template>
  <div id="jz">
    <van-nav-bar title="易居家政" left-text="返回" left-arrow>
      <van-icon class="nav-right" name="wap-nav" slot="right" />
    </van-nav-bar>
    <div class="content">
      <div class="information">
        <div class="headimg">
          <img src="../assets/logo.png" alt />
        </div>
        <div class="introduce">
          <van-row
            type="flex"
            justify="space-between"
            style="font-size:18px;margin-top:15px;color:#333"
          >
            <van-col span="8">刘阿姨</van-col>
          </van-row>
          <van-row
            type="flex"
            justify="space-around"
            style="font-size:18px;margin-top:15px;color:#333"
          >
            <van-col span="12">学历：初中</van-col>
            <van-col span="10">民族：汉</van-col>
          </van-row>
          <van-row
            type="flex"
            justify="space-around"
            style="font-size:18px;margin-top:15px;color:#333"
          >
            <van-col span="12">年龄：45岁</van-col>
            <van-col span="10">经验：20年</van-col>
          </van-row>
        </div>
      </div>
    </div>
    <div class="hege">
      <van-row type="flex" justify="space-between">
        <van-col
          span="7"
          style="font-size:16px; background:#eee;color:#ffa400;height:50px;line-height:50px"
        >背调合格</van-col>
        <van-col
          span="7"
          style="font-size:16px; background:#eee;color:#ffa400;height:50px;line-height:50px"
        >保证金已缴纳</van-col>
        <van-col
          span="7"
          style="font-size:16px; background:#eee;color:#ffa400;height:50px;line-height:50px"
        >暂时不找工作</van-col>
      </van-row>
    </div>
    <div class="fengexian"></div>
    <div class="pingjia">
      <p>
        <van-icon class="smile" name="smile-o" />综合评价
      </p>
      <span>喜欢带孩子， 有责任心，爱心。做家务，干净利索。</span>
    </div>
    <div class="fengexian"></div>
    <div class="yixiang">
      <p>
        <van-icon class="bell" name="bell" />服务范围
      </p>
      <!-- <span>求职状态：<span>暂时不找工作</span></span>
      <span>求职内容：<span>洗衣服 打扫卫生 1至3岁小孩 做饭 </span></span>
      <span>求职地点：<span>暂时不找工作</span></span>-->
      <van-row style>
        <van-col span="6" style="font-size:16px;font-weight:100">出勤状态：</van-col>
        <van-col span="18" style="font-size:16px;font-weight:500;text-align:left">未出勤</van-col>
      </van-row>
      <van-row style="margin:10px 0">
        <van-col span="6" style="font-size:16px;font-weight:100">工作内容：</van-col>
        <van-col span="18" style="font-size:16px;font-weight:500;text-align:left">洗衣服 打扫卫生 1至3岁小孩 做饭</van-col>
      </van-row>
    </div>
    <div class="fengexian"></div>
    <div class="jingli">
      <p>
        <van-icon class="column" name="column" />工作经历
      </p>
      <div>
        <span class="text" style=" word-wrap:break-word">ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</span>
      </div>
    </div>
      
    <div class="fengexian"></div>
    <div class="jingli">
      <p>
        <van-icon class="column" name="star" />培训经历
      </p>
      <van-row>
        <van-col
          span="22"
          style="font-size:16px;font-weight:500;text-align:center;background:#eee; margin-left:15px"
        >58到家保姆新岗位技能培训（全国）培训通过</van-col>
      </van-row>
      <van-row>
        <van-col
          span="11"
          style="font-size:16px;font-weight:500;margin-left:15px;width:172px;height:63px;border:1px solid #eee;margin-bottom:20px"
        >
          新岗前理论知识二
          (上户须知、面试与
          上户礼仪、APP、物
          损课程）
        </van-col>
        <van-col
          span="11"
          style="font-size:16px;font-weight:500;width:172px;height:63px;border:1px solid #eee;margin-bottom:20px"
        >
          新岗前理论知识一
          (企业文化、结算与
          制度）
        </van-col>
      </van-row>
    </div>
    <div class="choose">
      <button type="primary" @click="ok">就决定是你了</button>
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
      show: false
    };
  },
  methods: {
    ok() {
      this.$dialog
        .alert({
          title: "预约成功",
          width: "250",
          height: "150",
          message:
            "您已经成功预定刘阿姨，我们会尽快通知阿姨联系您，请保持电话畅通"
        })
        .then(() => {
          // on close
        });
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
  margin-right: 20px;
}
.content {
  margin-top: 128px;
}
.information {
  width: 100%;
  height: 300px;
  background: #ffa400;
}
.introduce {
  padding: 10px 0;
}
.headimg {
  width: 200px;
  height: 280px;
  padding: 10px;
  float: left;
}
.headimg img {
  width: 200px;
  height: 280px;
}
.hege {
  padding: 20px;
}
.fengexian {
  width: 100%;
  height: 10px;
  background: #eee;
}
.pingjia p {
  height: 64px;
  line-height: 64px;
  font-size: 32px;
  float: left;
  margin-left: 20px;
  margin-top: 10px;
}
.yixiang p {
  height: 64px;
  line-height: 64px;
  font-size: 32px;
  float: left;
  margin: 10px 500px 10px 20px;
}
.jingli {
  position: relative;
  z-index: 999;
}
.jingli p {
  height: 64px;
  line-height: 64px;
  font-size: 32px;
  float: left;
  margin: 10px 500px 10px 20px;
}
.smile {
  color: #ffa400;
  font-size: 40px;
  transform: translateY(6px);
}
.bell {
  color: #ffa400;
  font-size: 40px;
  transform: translateY(6px);
}
.column {
  color: #ffa400;
  font-size: 40px;
  transform: translateY(6px);
}
.pingjia span {
  display: inline-block;
  font-size: 28px;
  margin-bottom: 20px;
}
.foot {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 9999;
  height: 98px;
  line-height: 98px;
  background: #eee;
}
.choose {
  width: 100%;
  height: 200px;
  margin-bottom: 100px;
}
.choose button {
  width: 300px;
  height: 80px;
  margin-top: 20px;
  border: none;
  background: #ffa400;
  color: #eee;
  border: 1px solid #fff;
  border-radius: 15px;
  font-size: 32px;
}
.text {
  display: inline-block;
  width: 600px;
  font-size: 34px;
  
}
</style>