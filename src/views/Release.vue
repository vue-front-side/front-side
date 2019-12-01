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
    autosize={minHeight:200}
    type="textarea"
    maxlength="200"
    placeholder="分享新鲜事..."
    show-word-limit
    size="large"
  />
</van-cell-group>
   <van-uploader class="img_upper" v-model="fileList" multiple :max-count="1" />
  </div>
</template>

<script>
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
  data(){
    return {
      message:[],
      fileList: [
       
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        
      ]
    }
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
     
  }
};
</script>

<style lang="less" scoped>
.img_upper {
  float: left;
}
</style>