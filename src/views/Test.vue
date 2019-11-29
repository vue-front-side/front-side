<template>
  <div>
    <img v-for="(img,index) in images" v-lazy="img" :key="index">
  </div>
</template>

<script>
import { Lazyload } from 'vant';
export default {
  components:{
    [Lazyload.name]:Lazyload
  },
  data(){
    return {
      images:[
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }

}
</script>