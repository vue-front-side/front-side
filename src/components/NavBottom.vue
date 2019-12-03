<template>
  <div class="nav-bottom">
    <van-tabbar v-model="active" class="nav-bottom">
      <van-tabbar-item name="home">
        <span>首页</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
      </van-tabbar-item>
      <van-tabbar-item name="serve" to="/service">服务</van-tabbar-item>
      <van-tabbar-item name="dynamic" to="/dynamic">社区动态</van-tabbar-item>
      <van-tabbar-item name="personal" >我的</van-tabbar-item>
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
</style>