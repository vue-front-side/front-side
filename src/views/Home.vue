<template>
  <div>haha
      <button type="button" @click="submit">登录</button>
      <van-button type="primary" size="large" round @click="submit">提交</van-button>
       <van-icon class="iconfont" class-prefix='icon' name='wuyejiaofei' />
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
      this.axios.post("/pay/leibie",{
        //  params:{
        //    inhabitantId:"1"
        //  }
        payProject:"物业费"
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