<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="logo">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <NavBottom></NavBottom>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,

  }
}
</script>

<style lang="less" scoped>
.logo {
  width: 200px;
  height: 200px;
}
</style>