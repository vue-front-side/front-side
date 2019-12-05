<template>
  <div v-html="payGateWay">
    <van-loading />
    {{payGateWay}}
  </div>
  
</template>

<script>
import { Loading } from 'vant';
export default {
  name: "payGateWay",
  components: {
    [Loading.name]: Loading
  },
  data() {
    return {
      payGateWay: ""
    };
  },
  mounted() {
    let form = this.$route.query.htmlData;
    console.log(form);
    this.payGateWay = form;
    this.$nextTick(() => {
      document.forms[0].submit();
    });
  }
};
</script>

<style lang="less" scoped>
html {
  width: 375px;
  height: 667px;
}
</style>