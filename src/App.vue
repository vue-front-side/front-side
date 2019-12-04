<template>
  <div id="app">
    <div id="nav">
      <!-- <van-Icon   type="danger">默认按钮</van-Icon> -->
      
    </div>
    <router-view  v-if="isRouterAlive" />
  </div>
</template>

<script>
import { Icon } from 'vant';

export default {
 components: {
   [Icon.name]:Icon
 },
   provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
    methods: {
    reload (){
       this.isRouterAlive = false
       this.$nextTick(function(){
          this.isRouterAlive = true
       })
    }
  }
  
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top:40px; 
}

#nav {
  background: #eee;

  a {
    font-weight: bold;
    color:  #fc9629;;

    &.router-link-exact-active {
      color: #ffa400;
    }
  }
}

</style>
