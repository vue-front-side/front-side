<template>
  <div class="release">
    <van-row>
      <van-col span="24">
        <van-nav-bar
          title="发动态"
          left-text="返回"
          right-text="发布"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
      </van-col>
    </van-row>
    <van-cell-group>
      <van-field
        v-model="message"
        rows="2"
        autosize="{minHeight:200}"
        type="textarea"
        maxlength="200"
        placeholder="分享新鲜事..."
        show-word-limit
        size="large"
      />
    </van-cell-group>
    <van-uploader
      class="img_upper"
      v-model="fileList"
      multiple
      :max-count="1"
      :after-read="afterRead"
    />

    <form action=""></form>
  </div>
</template>

<script>
import '../assets/less/reset.less'
import {
  Row,
  Col,
  NavBar,
  Toast,
  Cell,
  CellGroup,
  Field,
  Area,
  Popup,
  DatetimePicker,
  Uploader,
  Button
} from "vant";

export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [NavBar.name]: NavBar,
    [Toast.name]: Toast,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Area.name]: Area,
    [Popup.name]: Popup,
    [DatetimePicker.name]: DatetimePicker,
    [Uploader.name]: Uploader,
    [Button.name]: Button
  },
  data() {
    return {
      message: "",
      fileList: [
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ],
      formdata1:{},
      url:""

    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      // console.log("发布");
      // let config = {
      //   headers: {
      //     "Content-Type": "multipart/form-data"
      //   }
      // };
      this.axios.post("/dynamic/insert", {inhabitantId:"1",imgs:this.url,content:this.message})
        .then(res => {
          //这里的url为后端接口
          console.log(res.data);
          //res 为接口返回值
          if(res.data.code==200){
            this.$router.replace("/dynamic");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // this.uploadImg(file.file);
      // console.log(file);
      console.log("发送了")
      let formdata1 = new FormData();
      formdata1.append("file", file.file, file.file.name);
      // console.log("format",this.formdata1);
      let config = {
           headers:{
               'Content-Type':'multipart/form-data'
           }
      };
      this.axios.post('/dynamic/upload',formdata1,config)
      .then((res)=>{   //这里的url为后端接口
          console.log(res.data.data);
          //res 为接口返回值
          this.url=res.data.data.filePath
      })
      .catch(() => {})
    }
    },
    // uploadImg(file) {
      // 创建form对象
      // let formdata1 = new FormData();
      // 通过append向form对象添加数据,可以通过append继续添加数据
      //或formdata1.append('file',file);
      // formdata1.append('file', file, file.name);
      //设置请求头
      // let config = {
      //      headers:{
      //          'Content-Type':'multipart/form-data'
      //      }
      // };
      //this.axios 是因为在main.js写在vue实例里
      // const axiosAjax = this.axios.create({
      //      timeout: 1000 * 60, //时间
      //      withCredentials: true //跨域携带cookie
      // });
      // axios.post('/dynamic/insert',formdata1,config){}
      // .then((res)=>{   //这里的url为后端接口
      //     console.log(res.data);
      //     //res 为接口返回值
      // })
      // .catch(() => {})
    // }
  
};
</script>

<style lang="less" scoped>
.img_upper {
  float: left;
}
</style>