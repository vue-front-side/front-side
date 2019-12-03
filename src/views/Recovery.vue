<template>
  <div class="recovery">
    <van-row>
      <van-col span="24">
        <van-nav-bar
          title="上门回收"
          left-text="返回"
          right-text="回收记录"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
          class="top_nav"
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
        :placeholder="concactPeople"
        label-width="60"
        label-align="left"
        border
        type="text"
        
      />
      <van-field
        clearable
        label="联系电话"
        :placeholder="concactTel"
        label-width="60"
        label-align="left"
        type="tel"
        :tel="concactTel"
      />
      <van-field
        clearable
        label="所在区"
        right-icon="arrow"
        :placeholder="areaPlace"
        @click-right-icon="$toast('question')"
        label-width="60"
        label-align="left"
        :value="value"
        @click="showPopup"
      />
      <van-field
        clearable
        label="所在小区"
        right-icon="arrow"
        :placeholder="village"
        @click-right-icon="$toast('question')"
        label-width="60"
        label-align="left"
        disabled="true"
      />
      <van-field :placeholder="address" size="large" />
    </van-cell-group>
    <van-popup v-model="show" position="bottom">
      <van-area :area-list="areaList" value="110101" title="请选择区" @cancel="show=false" @confirm="onConfirm" />
    </van-popup>
    <van-popup v-model="showTime" position="bottom">
      <van-datetime-picker
  v-model="currentDate"
  type="datetime"
  :min-date="minDate"
  :max-date="maxDate"
  @cancel="showTime=false"
  @confirm ="timeConfirm"
/>
    </van-popup>
    <van-field
      clearable
      label="预约时间"
      right-icon="arrow"
      :placeholder="appointment"
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
        <span>回收类别</span>
      </van-col>
    </van-row>
    <van-row class="catergary">
      <van-col span="24" class="catergary_col">
        <van-row type="flex" justify="space-around" >
          <van-col span="6" v-for="(item,index) in rec" :key="index" @click="item.state=!item.state" :class="{on:item.state}" :cat="item.name">{{item.name}}</van-col>
          <!-- <van-col span="6" @click="chooseCatergary(choose2,2)" :class="{on:choose2}">印刷品</van-col>
          <van-col span="6">塑料</van-col> -->
        </van-row>
        <van-row type="flex" justify="space-around" class="second_row">
          <van-col span="6" v-for="(item,index) in recSecond" :key="index" @click="item.state=!item.state" :class="{on:item.state}" :cat="item.name">{{item.name}}</van-col>
          <!-- <van-col span="6">纸板</van-col>
          <van-col span="6">其他</van-col> -->
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
        <van-uploader v-model="fileList" multiple :max-count="4" :before-read="beforeRead" capture="camera" :after-read="afterRead"/>
      </van-col>
    </van-row>
    
    <van-row class="tips">
      <van-col span="24">
        <span class="fa fa-gg-circle logo"></span>
        <span>温馨提示</span>
        <p>请保持电话畅通，工作人员会第一时间与您联系。</p>
      </van-col>
    </van-row>
    <van-button type="primary" size="large" round @click="submit">提交</van-button>
    
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
// import { format } from 'path';
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
    data() {
    return {
      concactPeople:"请输入用户名",
      concactTel:"请输入用户名",
      areaPlace: "请选择地区",
      appointment:"请选择预约时间",
      village:"请选择小区",
      address:"请填写详细地址，不少于5个字",
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
      rec: [
        {
          name: '衣服',
          state: false
        },
        {
          name: '印刷品',
          state: false
        },
        {
          name: '塑料',
          state: false
        },
        

      ],
      recSecond:[
        {
          name: '金属',
          state: false
        },
         {
          name: '纸板',
          state: false
        },
         {
          name: '其他',
          state: false
        },
      ],
      value:'',
      show: false,
      showTime: false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(1980, 10, 1),
      maxDate: new Date(2020, 12, 1),
      currentDate: new Date(),
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true }
      ],
      choose1:false,
      choose2:false,
      choose:false,
    };
  },
  methods: {
    // onClickLeft() {
    //   this.$router.go(-1);
    // },
    // onClickRight() {
    //   Toast("按钮");
    // },
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
    },
    onConfirm(value) {
      console.log(value);
      // this.value = value[2].code;
      this.areaPlace = value[0].name + " " + value[1].name + " " + value[2].name
      this.show = false;
    },
    timeConfirm(value){
      console.log(value);
      this.showTime = false;
      this.formatTime(value);
    },
    formatTime(time){
      var d = new Date(time);  
      var myTime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
      this.appointment = myTime;
    },
    submit(){
      this.axios.post("/repairInfo/addRepairInfo",{
        housePropertyId:"1",
        inhabitantId:"1",
        repairContent:"hhajdj",
        repairPartId:['dsa','da']   
      })
      .then(res=>{
        console.log(res.data);
      })
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
      this.axios.post('/repairInfo/addRepairInfo',formdata1,config)
      .then((res)=>{   //这里的url为后端接口
          console.log(res.data.data);
          //res 为接口返回值
          // this.url=res.data.data.filePath
      })
      .catch(() => {})
    }
  }

};
</script>

<style lang="less" scoped>
.recovery {
  background-color: #ececec;
}

//导航
.top_nav {
  font-size: 32px;
}

// .van-nav-bar__title,
// .van-nav-bar {
//   height: 44px;
//   line-height: 44px;
  
// }
.logo {
  font-size: 18px;
  color: green;
  vertical-align: middle;
  margin: 0 14px;
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
.on {
  background: green;
}
</style>