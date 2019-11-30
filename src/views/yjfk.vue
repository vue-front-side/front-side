<template>
  <div id="qpp">
   <div class="box">
      <van-nav-bar title="意见反馈" left-text="返回" right-text="完成" left-arrow>
      <!-- <van-icon class="nav-right" title="完成"  /> -->
    </van-nav-bar>
 <div style="margin-top:64px;"></div>

        <van-field v-model="message" rows="1" style="height:200px" autosize type="textarea" />

    <!-- <van-button class="button" @click="suss" type="info">提交</van-button> -->
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  methods: {
    suss() {
      this.$toast.success("提交成功");
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
  .box {
    width: 100%;
    background: white;

  }
  #qpp {
    background: #eee;
    height: 1206px;
  }


</style>