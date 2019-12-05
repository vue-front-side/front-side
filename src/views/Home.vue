<template>
  <div>
      
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
