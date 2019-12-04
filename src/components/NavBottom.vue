<template>
  <div class="nav-bottom">
    <van-tabbar v-model="active" class="nav-bottom">
      <van-tabbar-item name="home">
        <span class="iconfont icon-home bot_text"></span>
        <span>首页</span>
        <!-- <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" /> -->
      </van-tabbar-item>
      <van-tabbar-item name="serve" to="/service">
        
        <span class="iconfont icon-qitafuwu bot_text"></span>
        <span>服务</span> 
      </van-tabbar-item>
      <van-tabbar-item name="dynamic" to="/dynamic">
     
      <span class="iconfont icon-shoucang-moren bot_text"></span>
       <span>社区动态</span>
      </van-tabbar-item>
      <van-tabbar-item name="personal" >
        
        <span class="iconfont icon-icon7 bot_text"></span>
        <span>我的</span>
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar,TabbarItem,} from 'vant'
export default {
  name:'NavBottom',
  components:{
    [TabbarItem.name]:TabbarItem,
    [Tabbar.name]:Tabbar
  },
  data(){
    return {
       active: "home",
       icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    }
  }
}
</script>

<style lang="less">
  .nav-bottom {
  height: 60px;
   font-size: 16px;
}
.bot_text {
  display: block;
  font-size: 20px;
  margin-bottom: 6px;
}
</style>