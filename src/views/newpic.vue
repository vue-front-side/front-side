<template>
  <div id="qpp">
    <van-nav-bar
      title="更换头像"
      left-text="返回"
      right-text="完成"
      @click-right="ok"
      @click-left="onClickLeft"
      left-arrow
    ></van-nav-bar>
    <div style="margin-bottom:20px"></div>

    <van-uploader
      v-model="fileList"
      :after-read="afterRead"
      multiple
      :max-count="1"
      preview-size="200px"
      style="margin-top:20px"
    >
      <van-image
        class="img"
        slot="default"
        width="200px"
        height="200px"
        :src="'http://172.16.6.43:8080/'+msg.photo"
      />
    </van-uploader>
    <div>点击图片更换头像</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      fileList: [],
      url:'',
      msg:[],
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
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      let formdata1 = new FormData();
      formdata1.append("img", file.file, file.file.name);
      // console.log("format",this.formdata1);
      let config = {
           headers:{
               'Content-Type':'multipart/form-data'
           }
      };
      this.axios.post('/inhabitant/uploadImg',formdata1,config)
      .then((res)=>{   //这里的url为后端接口
          console.log(res.data.data);
          //res 为接口返回值
          this.url=res.data.data.filePath
      })
      .catch(() => {})

      // this.axios.post("/inhabitant/uploadImg",{file})
      console.log(file);
    },
    onClickLeft() {
      this.$router.push("/center");
    },
    ok() {
      this.axios
        .post("/inhabitant/modifyInhabitantPhone", {
          photo: this.url,
          inhabitantName: this.msg.inhabitantName,
          inhabitantSex: this.msg.inhabitantSex,
          inhabitantId: this.msg.inhabitantId
        })
        .then(res => {
          this.msg = res.data.data.data;
          console.log("数组:", this.msg);
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
  text-align: center;
}
</style>