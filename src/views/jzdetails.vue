<template>
  <div id="qpp">
    <van-nav-bar title="易居家政" left-text="返回" @click-left="onClickLeft" left-arrow>
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
            <van-col span="8">{{list.staffName}}</van-col>
          </van-row>
          <van-row
            type="flex"
            justify="space-around"
            style="font-size:18px;margin-top:15px;color:#333"
          >
            <van-col span="12">学历：{{list.education}}</van-col>
            <van-col span="10">民族：{{list.staffNation}}</van-col>
          </van-row>
          <van-row
            type="flex"
            justify="space-around"
            style="font-size:18px;margin-top:15px;color:#333"
          >
            <van-col span="12">年龄：45岁</van-col>
            <van-col span="10">经验：{{list.workTime}}年</van-col>
          </van-row>
        </div>
      </div>
    </div>
    <div class="hege">
      <van-row type="flex" justify="space-between">
        <van-col
          span="7"
          style="text-align:center;font-size:16px; background:#eee;color:#ffa400;height:50px;line-height:50px"
        >背调合格</van-col>
        <van-col
          span="7"
          style="text-align:center;font-size:16px; background:#eee;color:#ffa400;height:50px;line-height:50px"
        >保证金已缴纳</van-col>
        <van-col
          span="7"
          style="text-align:center;font-size:16px; background:#eee;color:#ffa400;height:50px;line-height:50px"
        >暂时不找工作</van-col>
      </van-row>
    </div>
    <div class="fengexian"></div>
    <div class="pingjia">
      <p>
        <van-icon class="smile" name="smile-o" />综合评价
      </p>
      <span style="margin-left:10px">喜欢带孩子， 有责任心，爱心。做家务，干净利索。</span>
    </div>
    <div class="fengexian"></div>
    <div class="yixiang">
      <p>
        <van-icon class="bell" name="bell" />服务范围
      </p>
      <!-- <span>求职状态：<span>暂时不找工作</span></span>
      <span>求职内容：<span>洗衣服 打扫卫生 1至3岁小孩 做饭 </span></span>
      <span>求职地点：<span>暂时不找工作</span></span>-->
      <van-row style="margin:0px 10px">
        <van-col span="6" style="font-size:16px;font-weight:100">出勤状态：</van-col>
        <van-col
          span="18"
          style="font-size:16px;font-weight:500;text-align:left"
          v-if="list.isFree==0"
        >已出勤</van-col>
        <van-col
          span="18"
          style="font-size:16px;font-weight:500;text-align:left"
          v-if="list.isFree==1"
        >未出勤</van-col>
      </van-row>
      <van-row style="margin:10px 10px">
        <van-col span="6" style="font-size:16px;font-weight:100">工作内容：</van-col>
        <van-col
          span="18"
          style="font-size:16px;font-weight:500;text-align:left"
        >{{list.serviceItem}}</van-col>
      </van-row>
    </div>
    <div class="fengexian"></div>
    <div class="jingli">
      <p>
        <van-icon class="column" name="column" />工作经历
      </p>
      <div>
        <span class="text" style=" word-wrap:break-word">{{list.workExperience}}</span>
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
      <van-col style="text-align:center" span="12">首页</van-col>|
      <van-col style="text-align:center" span="12">精品服务</van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      newId: "",
      list: []
    };
  },
  created() {
    this.newId = this.$route.params.staffId;
    console.log(this.newId);
    this.axios
      .post("/staff/selectJZAYbyId", { staffId: this.newId })
      .then(res => {
        console.log(res);
        this.list = res.data.data.staff;
        console.log("数组:", res.data.data.staff);
        console.log(this.list.isFree);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    ok() {
      this.$dialog
        .alert({
          title: "预约成功",
          width: "250",
          height: "150",
          message:
            "您已经成功预定该阿姨，我们会尽快通知阿姨联系您，请保持电话畅通"
        })
        .then(() => {
          // on close
        });
    },
    onClickLeft() {
      this.$router.push("/jzlist");
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  margin-top: 64px;
}
.information {
  width: 100%;
  height: 150px;
  background: #ffa400;
}
.introduce {
  padding: 5px 0;
}
.headimg {
  width: 100px;
  height: 140px;
  padding: 5px;
  float: left;
}
.headimg img {
  width: 100px;
  height: 140px;
}
.hege {
  padding: 10px;
}
.fengexian {
  width: 100%;
  height: 5px;
  background: #eee;
}
.pingjia p {
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  float: left;
  margin-left: 10px;
  margin-top: 5px;
}
.yixiang p {
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  float: left;
  margin: 5px 250px 5px 10px;
}
.jingli {
  position: relative;
  z-index: 999;
}
.jingli p {
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  float: left;
  margin: 5px 250px 5px 10px;
}
.smile {
  color: #ffa400;
  font-size: 32px;
  transform: translateY(3px);
}
.bell {
  color: #ffa400;
  font-size: 20px;
  transform: translateY(3px);
}
.column {
  color: #ffa400;
  font-size: 20px;
  transform: translateY(3px);
}
.pingjia span {
  display: inline-block;
  font-size: 14px;
  margin-bottom: 10px;
}
.foot {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 9999;
  height: 59px;
  line-height: 59px;
  background: #eee;
}
.choose {
  width: 100%;
  height: 100px;
  margin-bottom: 50px;
}
.choose button {
  width: 150px;
  height: 40px;
  margin-top: 10px;
  margin-left: 115px;
  border: none;
  background: #ffa400;
  color: #eee;
  border: 1px solid #fff;
  border-radius: 15px;
  font-size: 16px;
}
.text {
  display: inline-block;
  width: 300px;
  font-size: 16px;
  text-align: center;
  margin-left: 32.5px;
}
</style>