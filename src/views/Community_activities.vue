<template>
  <div class="release">
    <van-sticky>
    <van-row>
      <van-col span="24">
        <van-nav-bar title="社区活动" left-text="返回" left-arrow @click-left="onClickLeft" />
      </van-col>
    </van-row>
    </van-sticky>
    <div v-for="(item,index) in this.activeList" :key="index">
    <van-row>
      <van-col span="24">
        <van-image width="100%" height="200" :src="'http://172.16.6.66:8080/'+item.img" />
      </van-col>
    </van-row>
    <van-row class="active_text">
      <van-col span="24">
        <h4>{{item.activityName}}</h4>
        <p>
          “世界很复杂，百度更懂你”，百度翻译拥有网页版和手机APP等多种产品形态，
          此外还针对开发者提供开放云接口服务，日均响应上亿次翻译请求。除文本翻译外，
          结合用户多样性的翻译需求，推出网页翻译、网络释义、海量例句、权威词典、离线翻译、语音翻译、对话翻译、实用口语、拍照翻译、AR翻译、趣味配音等功能，
          同时还针对对译文质量要求较高的用户，提供人工翻译服务，让用户畅享每一次翻译体验。
          <!-- {{item.content}} -->
        </p>
      </van-col>
    </van-row>
    <van-row class="catergary">
      <van-col span="24">
        <div>
          <span>活动时间:</span>
          <span>{{item.startTime}} - {{item.endTime}}</span>
        </div>
        <div>
          活动地点:
          <span>{{item.activityAddress}}</span>
        </div>
        <div>
          最大参加人数:
          <span>{{item.maxCount}}</span>
        </div>
        <div>
          联系人:
          <span>{{item.contactsName}}</span>
        </div>
        <div>
          联系电话:
          <span>{{item.contactsPhone}}</span>
        </div>
        <div>
          已报名人数:
          <span>{{item.count}}</span>
        </div>
      </van-col>
    </van-row>
    <van-button type="info">活动报名</van-button>
    </div>
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
  Button,
  Image,
  RadioGroup,
  Radio,
  Sticky
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
    [Button.name]: Button,
    [Image.name]: Image,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Sticky.name]:Sticky
  },
  data() {
    return {
      radio: "1",
      activeList:[]
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    }
  },
  created(){
    this.axios.post("/activity/showOne",{
      activityId:"1"
    })
    .then(res=>{
      console.log(res.data);
      this.activeList.push(res.data.data.Activity);
    })
  }
};
</script>

<style lang="less" scoped>
.active_text {
  p {
    padding: 10px;
    font-size: 16px;
    text-align: left;
    line-height: 1.6;
  }
}
.catergary {
  text-align: left;
  font-size: 14px;
  padding: 0 10px;
  line-height: 1.8;
  color: #696969;
}
.type {
  padding: 10px 10px;
  font-size: 14px;
  color: #696969;
}
.van-button{
  width: 90%;
  // height: 40px;
  font-size: 20px;
  margin: 20px 0;
}
</style>