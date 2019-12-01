<template>
  <div class="recovery">
    <van-row>
      <van-col span="24">
        <van-nav-bar
          title="报修"
          left-text="返回"
          right-text="报修记录"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
      </van-col>
    </van-row>
    <van-row class="people_title">
      <van-col span="24">
        <span class="fa fa-newspaper-o logo"></span>
        <span>预约人信息</span>
      </van-col>
    </van-row>
    <van-cell-group>
      <van-field
        clearable
        label="联系人"
        placeholder="请输入用户名"
        label-width="60"
        label-align="left"
        
        border
        type="textarea"
      />
      <van-field
        clearable
        label="联系电话"
        placeholder="请输入用户名"
        label-width="60"
        label-align="left"
       
        type="tel"
      />
      <van-field
        clearable
        label="所在区"
        right-icon="arrow"
        placeholder="请选择地区"
        @click-right-icon="$toast('question')"
        label-width="60"
        label-align="left"
      
        disabled="true"
        @click="showPopup"
      />
      <van-field
        clearable
        label="所在小区"
        right-icon="arrow"
        placeholder="请选择小区"
        @click-right-icon="$toast('question')"
        label-width="60"
        label-align="left"
        
        disabled="true"
      />
      <van-field placeholder="请填写详细地址，不少于5个字" size="large" />
    </van-cell-group>
    <van-popup v-model="show" position="bottom">
      <van-area :area-list="areaList" value="110101" title="请选择区" />
    </van-popup>
    <van-field
      clearable
      label="预约时间"
      right-icon="arrow"
      placeholder="请选择"
      @click-right-icon="$toast('question')"
      label-width="60"
      label-align="left"
      
      disabled="true"
      class="time"
      @click="showPopupTime"
    />
    <!-- <van-popup v-model="showTime" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>-->
    <van-row class="people_title">
      <van-col span="24">
        <span class="fa fa-gg-circle logo"></span>
        <span>报修类型</span>
      </van-col>
    </van-row>
    <van-row class="catergary">
      <van-col span="24" class="catergary_col">
        <van-row type="flex" justify="space-around">
          <van-col span="6">电器</van-col>
          <van-col span="6">家具</van-col>
          <van-col span="6">线路</van-col>
        </van-row>
        <van-row type="flex" justify="space-around" class="second_row">
          <van-col span="6">天然气</van-col>
          <van-col span="6">下水道</van-col>
          <van-col span="6">其他</van-col>
        </van-row>
      </van-col>
    </van-row>
    <van-row class="people_title">
      <van-col span="24">
        <span class="fa fa-gg-circle logo"></span>
        <span>上传物品照片(非必填项)</span>
      </van-col>
    </van-row>
      <van-row class="photo">
      <van-col span="24">
        <van-uploader v-model="fileList" multiple :max-count="4" :before-read="beforeRead" capture="camera"/>
      </van-col>
    </van-row>
    
    <van-row class="tips">
      <van-col span="24">
        <span class="fa fa-gg-circle logo"></span>
        <span>温馨提示</span>
        <p>请保持电话畅通，工作人员会第一时间与您联系。</p>
      </van-col>
    </van-row>
    <div @click="submit"><van-button type="primary" size="large" round >提交</van-button></div>
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
    [Uploader.name]:Uploader,
    [Button.name]:Button
  },
  methods: {
     submit() {
      console.log("提交");
      this.axios.post("/users/login",{
        username:"admin",
        userpass:'123'
      })
      .then(res=>{
        console.log(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
    showPopup() {
      this.show = true;
    },
    showPopupTime() {
      this.showTime = true;
    },
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片');
        return false;
      }
    
      return true;
    },
     // 返回 Promise
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg') {
          Toast('请上传 jpg 格式图片');
          reject();
        } else {
          resolve();
        }
      });
    }
   
  },
  data() {
    return {
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市"
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县"
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区"
        }
      },
      show: false,
      showTime: false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date(),
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.recovery {
  background-color: #ececec;
}
// .van-nav-bar__title,
// .van-nav-bar {
//   // height: 44px;
//   // line-height: 44px;
// }
.logo {
  font-size: 18px;
  color: green;
  vertical-align: middle;
  margin: 0 10px;
}
.people_title {
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  text-align: left;
  // background-color: #d3d3d3;
}
// 地址
// .van-cell {
//   height: 70px;
//   text-align: left;
//   line-height: 50px;
//   font-size: 28px;
//   // display: flex;
//   // justify-content: center;
// }
// .van-cell--large {
//   height: 100px;
//   line-height: 100px;
// }
.van-field__label {
  text-align: left;
}
.time {
  margin-top: 12px;
}
.catergary{
  font-size: 16px;
  padding: 20px 0;
  .van-col {
    border: 1px solid #d3d3d3;
    padding: 4px 0;
  }
  .catergary_col {
    border: none;
  } 
  .second_row {
    margin-top: 20px;
  }
}
.tips {
  margin-top: 10px; 
  line-height: 30px;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  p{
    margin-left: 14px;
    color: #858585;
  }
  .van-col {
    padding: 10px 0;
  }
}
.photo,
.catergary {
  background-color: #fff;
}
.photo {
  height: 80px;
  padding: 10px 0;
  .van-col {
    display: flex;
    justify-content: start;
  }
}
.van-button{
  width: 90%;
  // height: 40px;
  font-size: 20px;
  margin: 20px 0;
}
 
</style>