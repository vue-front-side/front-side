<template>
  <div id="app">
    <div id="nav">
      <!-- <van-Icon   type="danger">默认按钮</van-Icon> -->
      
    </div>
    <router-view/>
  </div>
</template>

<script>
import { Icon } from 'vant';

export default {
 components: {
   [Icon.name]:Icon
 }
  
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
