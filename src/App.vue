<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { Icon } from 'vant';

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

  color: #2c3e50;
  margin-top: 20px;
}


.van-notice-bar__wrap {
  width: 60px;
}

</style>
