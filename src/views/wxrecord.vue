<template>
  <div id="qpp">
    <van-nav-bar title="维修记录" left-text="返回" @click-left="onClickLeft" left-arrow></van-nav-bar>
    <div style="margin-top:84px;"></div>
    <van-tabs v-model="active" animated>
      <van-tab title="待维修">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <div class="box" v-if="item.repairState==1||item.repairState==0">
              <div class="img">
                <img src alt="暂无图片" />
              </div>
              <div class="content">
              <p>维修内容：{{item.repairContent}}</p>
              <p>报修时间：{{item.regDate}}</p>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="已维修">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <div class="box" v-if="item.repairState==2">
              <div class="img">
                <img src alt="暂无图片" />
              </div>
              <div class="content">
                <p>维修内容：{{item.repairContent}}</p>
                <p>维修时间：{{item.appointmentTime}}</p>
                <p>维修人员：{{item.staff.staffName}}</p>
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
      active: 2,
      list:[],
      msg:[]
    };
  },
    created() {
    this.axios
      .post("/repairInfo/findByHibId", {inhibId:1})
      .then(res => {
        console.log(res.data.data)
        this.list = res.data.data.data;
        console.log("数组:", this.list);
      })
      .catch(err => {
        console.log(err);
      });
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
  width:70px;
  height: 70px;
  background: #eee;
  float: left;
  margin-left: 10px;
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
}
.content {
  width: 250px;
  float: right;  
  text-align: left;
}
</style>