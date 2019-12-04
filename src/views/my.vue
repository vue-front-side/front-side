<template>
  <div id="qpp">
      <van-sticky>
      <van-row>
        <van-col span="24">
          <van-nav-bar
            title="个人中心"
            left-text="返回"          
            left-arrow
            @click-left="onClickLeft"
            class="top_nav"
          ><van-icon class="nav-right"  name="comment" @click="news" slot="right" /></van-nav-bar>
        </van-col>
      </van-row>
    </van-sticky>
    <div class="msg" style="padding:0 10px;">
      <img :src="'http://172.16.6.43:8080/'+list.photo" alt="">
      <p class="aaa">{{list.inhabitantName}}</p>
      <p class="aaa">{{list.telNum}}</p>
      <van-icon class="set" @click="center" name="setting-o" />
    </div>
    <van-cell title="缴费记录" is-link to="payjl" />
    <van-cell title="维修记录" is-link to="wxrecord" />
    <van-cell title="回收记录" is-link to="recoverjl" />
    <van-cell title="家政记录" is-link to="jzjl" />
    <van-cell title="成员管理" v-if="isHu==='房主'" is-link to="newcy" />
    <van-cell title="用户认证" v-if="!statu" is-link to="" />
    <van-cell title="意见反馈" is-link to="yjfk" />
    <van-cell title="关于我们" is-link to="aboutus" />
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[],
      statu:false,
      isHu:"房主"
    }
    
  },
  methods:{
     onClickLeft() {
      this.$router.go(-1);
    },
    center(){
      this.$router.push("/center");
    },
    news(){
      this.$router.push("/news")
    }
  },
  created() {
    this.axios
      .post("/inhabitant/findByUserId", {userId:4})
      .then(res => {
        this.list = res.data.data.data;
        console.log("数组:", this.list);
      })
      .catch(err => {
        console.log(err);
      });
  },
};
</script>

<style lang="less" scoped>
.msg {
  text-align: left;
  position: relative;
  overflow: hidden;
}
.msg img {
  width: 100px;
  height: 100px;
  margin-top:15px; 
  border: 1px solid #eee;
  border-radius: 50%;
  float: left;
}
.set {
  position: absolute;
  right: 20px;
  top:20px;
}
.aaa {
  font-size: 20px;
  margin-left: 120px;
}
</style>


