<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <van-button   type="danger">默认按钮</van-button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { Button } from 'vant';

export default {
 components: {
   [Button.name]:Button
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
</style>
