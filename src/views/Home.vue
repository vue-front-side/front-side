<template>
  <div>haha
      <button type="button" @click="submit">登录</button>
      <van-button type="primary" size="large" round @click="submit">提交</van-button>
  </div>
</template>

<script>
import {Button} from 'vant'
export default {
  commponents:{
    [Button.name]:Button
  },
  methods:{
    submit() {
      console.log("提交");
      this.axios.post("/users/login",{
        username:"admin",
        userpass:'123'
      })
      .then(res=>{
        console.log(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>