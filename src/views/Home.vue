<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="logo">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="btn">按钮</button>
    <li v-for="(item,index) in list" :key="index" :title="item">
            <div class="information">
              <div class="headimg">
                <img src="../assets/logo.png" alt />
              </div>
              <div class="introduce">
                <van-row type="flex" justify="space-between" style="font-size:18px;">
                  <van-col span="8" style="text-align: center;">{{list[index].staffName}}</van-col>
                  <van-col span="10" class="price">5000元/月</van-col>
                </van-row>
                <van-row type="flex" justify="space-between" style="text-align: center;font-size:16px;margin-top:10px">
                  <van-col span="8">年龄</van-col>|
                  <van-col span="8">籍贯</van-col>|
                  <van-col span="8">工龄</van-col>
                </van-row>
                <van-row
                  type="flex"
                  justify="space-around"
                  style="font-size:14px;font-weight:100;margin-top:10px"
                >
                  <van-col span="6" style="border:1px solid #000;">工作内容</van-col>
                  <van-col span="6" style="border:1px solid #000;">工作内容</van-col>
                  <van-col span="6" style="border:1px solid #000;">工作内容</van-col>
                </van-row>
              </div>
            </div>
          </li>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return {
      list:[]
    }
  },
  
  components: {
    HelloWorld
  },
  methods:{
    btn(){
       this.axios.post("/staff/getAllStaffIsJZAY", {
        
      })
      .then((res) => {
        this.list = res.data.data.staffList;
        console.log("数组:",this.list)
        // this.list=res.data.staffList;
        // console.log(this.list)
        // if(res.data.state == "200") {
        //   // var token = "njaksxbxkjasbkjcxasbjk" // 模拟后台返回的token
        //   var token = res.data.token;
        //   sessionStorage.setItem("token", token)

        //   // 获取参数（未登录时想访问的路由）
        //   var url = this.$route.query.redirect;
        //   console.log(url)

        //   url = url ? url : "/"
        //   // 切换路由
        //   this.$router.replace(url)
        // } else {
        //   console.log("登陆失败")
        // }
      })
      .catch(err=> {
        console.log(err)
      })
     
    }
  }

  
}
</script>

<style lang="less" scoped>
.logo {
  width: 200px;
  height: 200px;
}
</style>
