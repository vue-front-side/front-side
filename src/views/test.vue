<template>
  <div>
    <van-tabs v-model="activeName">
  <van-tab title="标签 1" :name="a"> <div>内容 1</div> </van-tab>
  <van-tab title="标签 2" :name="b"><div>内容 2</div></van-tab>
  <van-tab title="标签 3" :name="c"><div>内容 3</div></van-tab>
</van-tabs>
  </div>
</template>

export default {
  data() {
    return {
      activeName: this.a,
      a:"a",
      b:"b",
      c:"c"
    };
  }
}