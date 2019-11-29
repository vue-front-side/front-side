<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { Button } from 'vant';

export default {
 components: {
   [Button.name]:Button,
    
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
  margin-top: 40px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color:  #fc9629;;

    &.router-link-exact-active {
      color: #ffa400;
    }
  }
}
.van-notice-bar__wrap {
  width: 60px;
}
</style>
