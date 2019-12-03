<template>
  <div class="returnNav">
    <van-nav-bar title="标题" left-text="返回" @click-left="onClickLeft" left-arrow>
      <span slot="right" @click="onClickRight" ><slot name="slot">回收记录</slot></span>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name:'ReturnNav',
  methods:{
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      alert("记录");
    },
  }
}
</script>
