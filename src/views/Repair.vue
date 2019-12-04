<template>
  <div class="recovery">
    <van-sticky>
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
    </van-sticky>
    <van-row class="people_title">
      <van-col span="24">
        <span class="iconfont icon-yuyue logo"></span>
        <span>预约人信息</span>
      </van-col>
    </van-row>
    <van-cell-group>
      <van-field
        clearable
        label="联系人"
        placeholder="请输入联系人姓名:"
        label-width="60"
        label-align="left"
        v-model="name"
        border
        type="text"
        required
      />
      <van-field
        clearable
        label="联系电话"
        placeholder="请输入联系电话:"
        label-width="60"
        label-align="left"
        v-model="telNumber"
        type="tel"
        required
      />
      <van-field
        clearable
        label="所在区"
        right-icon="arrow"
        placeholder="请选择所在区:"
        @click-right-icon="$toast('question')"
        label-width="60"
        label-align="left"
        :value="value"
        disabled="true"
        @click="showPopup"
        v-model="areaPlace"
        required
      />
      <van-field
        clearable
        label="所在小区"
        right-icon="arrow"
        placeholder="请选择所在小区:"
        @click-right-icon="$toast('question')"
        label-width="60"
        label-align="left"
        disabled="true"
        v-model="village"
        required
      />
      <van-field placeholder="请填写详细地址，不少于5个字" size="large" v-model="address" required />
    </van-cell-group>
    <van-popup v-model="show" position="bottom">
      <van-area
        :area-list="areaList"
        value="110101"
        title="请选择区"
        @cancel="show=false"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-field
      clearable
      label="预约时间"
      right-icon="arrow"
      placeholder="请选择预约时间:"
      @click-right-icon="$toast('question')"
      label-width="60"
      label-align="left"
      disabled="true"
      class="time"
      @click="showPopupTime"
      v-model="appointment"
      required
    />
    <van-popup v-model="showTime" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="showTime=false"
        @confirm="timeConfirm"
      />
    </van-popup>
    <van-row class="people_title">
      <van-col span="24">
        <span class="iconfont icon-biaoqian logo"></span>
        <span>报修类型</span>
      </van-col>
    </van-row>
    <van-row class="catergary">
      <van-col span="24" class="catergary_col">
        <van-row type="flex" justify="space-around">
          <van-col
            span="6"
            v-for="(item,index) in rec"
            :key="index"
            @click="item.state=!item.state"
            :class="{on:item.state}"
          >{{item.name}}</van-col>
        </van-row>
        <van-row type="flex" justify="space-around" class="second_row">
          <van-col
            span="6"
            v-for="(item,index) in recSecond"
            :key="index"
            @click="item.state=!item.state"
            :class="{on:item.state}"
          >{{item.name}}</van-col>
        </van-row>
      </van-col>
    </van-row>
    <van-row class="people_title">
      <van-col span="24">
        <span class="iconfont icon-tupianshangchuan logo"></span>
        <span>上传物品照片(非必填项)</span>
      </van-col>
    </van-row>
    <van-row class="photo">
      <van-col span="24">
        <van-uploader
          
          multiple
          :max-count="1"
          :before-read="beforeRead"
          capture="camera"
          :after-read="afterRead"
        />
      </van-col>
    </van-row>

    <van-row class="tips">
      <van-col span="24">
        <span class="iconfont icon-wenxintishi logo"></span>
        <span>温馨提示</span>
        <p>请保持电话畅通，工作人员会第一时间与您联系。</p>
      </van-col>
    </van-row>
    <div @click="submit" class="btn_box">
      <van-button type="primary" class="btn" size="large" round>提交</van-button>
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
    [Sticky.name]:Sticky
  },
  methods: {
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
      if (file.type !== "image/jpeg") {
        Toast("请上传 jpg 格式图片");
        return false;
      }

      return true;
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // this.uploadImg(file.file);
      // console.log(file);
      console.log("发送了");
      let formdata1 = new FormData();
      formdata1.append("file", file.file, file.file.name);
      // console.log("format",this.formdata1);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      this.axios
        .post("/repairInfo/loadInfoImg", formdata1, config)
        .then(res => {
          //这里的url为后端接口
          console.log(res.data.data);
          //res 为接口返回值
          this.url = res.data.data.filePath;
        })
        .catch(() => {});
    },
    // 返回 Promise
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type !== "image/jpeg") {
          Toast("请上传 jpg 格式图片");
          reject();
        } else {
          resolve();
        }
      });
    },
    //获取用户所在区
    onConfirm(value) {
      console.log(value);
      // this.value = value[2].code;
      this.areaPlace =
        value[0].name + " " + value[1].name + " " + value[2].name;
      this.show = false;
    },
    timeConfirm(value) {
      console.log(value);
      this.showTime = false;
      this.formatTime(value);
    },
    formatTime(time) {
      var d = new Date(time);
      var myTime =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getDate() +
        " " +
        d.getHours() +
        ":" +
        d.getMinutes();
      this.appointment = myTime;
    },
    //判断用户是否选择了类型
    isChoose() {
      var tempArr = this.selected.filter(item => {
        if (item != 0) {
          return item;
        }
      });
      console.log("temArr", tempArr);
      if (tempArr.length == 0) {
        return false;
      } else {
        return true;
      }
    },
    //判断输入框是否为空
    isEmpity() {
      const pat = /^1[3456789]\d{9}$/;
      if (this.name == "") {
        Toast("请输入联系人姓名！");
      } else if (!pat.test(this.telNumber)) {
        Toast("请输入正确联系人电话！");
      } else if (this.areaPlace == "") {
        Toast("请选择地区！");
      } else if (this.village == "") {
        Toast("请选择小区！");
      } else if (this.address == "") {
        Toast("请填写具体地址！");
      } else if (this.appointment == "") {
        Toast("请选择预约时间！");
      } else if (!this.isChoose()) {
        Toast("请选择报修类型！");
      }
      else{
       return true
      }
    },
    //点击提交报修订单
    submit() {
      this.selected = this.rec.map((item, i) => {
        console.log(i);
        if (item.state) {
          return i + 1;
        } else {
          return 0;
        }
      });
      var selected2 = this.recSecond.map((item, i) => {
        if (item.state) {
          return i + 4;
        } else {
          return 0;
        }
      });
      this.selected = this.selected.concat(selected2);
      this.catergary = this.selected.join(",");
      // console.log(this.catergary);
      // console.log(this.name);
      // console.log(this.telNumber);
      // console.log(this.address);
      // console.log(this.areaPlace);
      // console.log(this.appointment);
      // console.log(this.areaPlace + this.village + this.address);
      if(this.isEmpity()){
      this.axios.post("/repairInfo/addRepairInfo",{
        // params:{
        repairName:this.name,
        concactTel:this.telNumber,
        repairAdress:this.areaPlace+this.village+this.address,
        housePropertyId:"1",
        inhabitantId:"1",
        repairContent:"hhajdj",
        appointmentTime:this.appointment,
        repairPartIds:this.catergary,
        repairImg:this.url
        // }
      })
      .then(res=>{
        console.log(res.data);
        if(res.data.code==200){
          Toast("报修成功！");
        }
      })
      }
    }
  },
  data() {
    return {
      concactPeople: "请输入用户名",
      concactTel: "请输入用户名",
      areaPlace: "",
      appointment: "",
      village: "请选择小区",
      address: "",
      name: "",
      telNumber: "",
      selected: [],
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
          name: "电器",
          state: false
        },
        {
          name: "家具",
          state: false
        },
        {
          name: "线路",
          state: false
        }
      ],
      recSecond: [
        {
          name: "天然气",
          state: false
        },
        {
          name: "下水道",
          state: false
        },
        {
          name: "其他",
          state: false
        }
      ],
      value: "",
      show: false,
      showTime: false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date(2019, 1, 1),
      maxDate: new Date(2020, 12, 2),
      currentDate: new Date(),
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: "https://cloud-image", isImage: true }
      ],
      catergary: ""
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
  color: #ffa400;
  vertical-align: middle;
  margin: 0 10px;
}
.icon-tupianshangchuan,
.icon-yuyue {
  font-size: 22px;
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
.catergary {
  font-size: 16px;
  padding: 20px 0;
  .van-col {
    border: 1px solid #d3d3d3;
    padding: 4px 0;
  }
  .catergary_col {
    border: none;
    text-align: center;
  }
  .second_row {
    margin-top: 20px;
  }
  .on {
  background: #ffa400;
  border-color: #ffa400;
}
}
.tips {
  margin-top: 10px;
  line-height: 30px;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  p {
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
.btn_box {
  text-align: center;
}
.van-button {
  width: 90%;
  // height: 40px;
  font-size: 20px;
  margin: 20px 0;
  background-color: #ffa400;
  border-color: #ffa400;
}

</style>