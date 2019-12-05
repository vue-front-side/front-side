<template>
  <div id="qpp">
    <van-nav-bar
      title="设置性别"
      left-text="返回"
      right-text="完成"
      @click-right="ok"
      left-arrow
      @click-left="onClickLeft"
    />
    <div></div>
    <van-picker v-model="sex" :columns="columns" :default-index="0"  @change="onChange" />
  </div>
</template>

<script>
export default {
   data() {
    return {
      columns: ['男', '女'],
      sex:'',
       msg: [],
       userId:""
    };
  },
   created() {
     this.userId = sessionStorage.getItem("userId")
    this.axios
      .post("/inhabitant/findByUserId", { userId: this.userId })
      .then(res => {
        this.msg = res.data.data.data;
        console.log("数组:", this.msg);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
     onChange(picker, value) {
       this.sex=value
       console.log(this.sex)
      
    },
    onClickLeft() {
      this.$router.push('/center')
    },
    ok() {
      console.log(this.sex)
      this.axios
        .post("/inhabitant/modifyInhabitantPhone", {
          photo: this.msg.photo,
          inhabitantName: this.msg.inhabitantName,
          inhabitantSex: this.sex,
          inhabitantId:this.msg.inhabitantId
        })
        .then(res => {
          this.msg = res.data.data.data;
          this.$router.push("/center");
        })
        .catch(err => {
          console.log(err);
        });
  }
  }
};
</script>

<style lang="less" scoped>
#qpp {
  height: 667px;
  background: #eee;
}
</style>