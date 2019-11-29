<template>
  <div class="unlock">
    <van-row>
      <van-col span="24">
        <van-nav-bar
          title="开锁"
          left-text="返回"
          right-text="开锁记录"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
          class="top_nav"
        />
      </van-col>
    </van-row>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <ul>
        <van-cell>
        <li class="list">
          <div class="msg">
           
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="adress">
            <span class="name">王记锁行</span>
            <div>联系人:<span>王师傅</span></div>
            <div class="tel">电话:<span>13788214396</span></div>
            <div>地址:<span>成都市青羊区大南街88号</span></div>
            <van-button type="info">联系ta</van-button>
            <span></span>
            <span></span>
          </div>
        </li>
        </van-cell>
        <van-cell>
        <li class="list">
          <div class="msg">
           
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="adress">
            <span class="name">王记锁行</span>
            <div>联系人:<span>王师傅</span></div>
            <div class="tel">电话:<span>13788214396</span></div>
            <div>地址:<span>成都市青羊区大南街88号</span></div>
            <van-button type="info">联系ta</van-button>
            <span></span>
            <span></span>
          </div>
        </li>
        </van-cell>
        <van-cell>
         <li class="list">
          <div class="msg">
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="adress">
            <span class="name">王记锁行</span>
            <div>联系人:<span>王师傅</span></div>
            <div class="tel">电话:<span>13788214396</span></div>
            <div>地址:<span>成都市青羊区大南街88号</span></div>
            <van-button type="info">联系ta</van-button>
            <span></span>
            <span></span>
          </div>
        </li>
        </van-cell>
        <van-cell>
         <li class="list">
          <div class="msg">
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="adress">
            <span class="name">王记锁行</span>
            <div>联系人:<span>王师傅</span></div>
            <div class="tel">电话:<span>13788214396</span></div>
            <div>地址:<span>成都市青羊区大南街88号</span></div>
            <van-button type="info">联系ta</van-button>
            <span></span>
            <span></span>
          </div>
        </li>
        </van-cell>
        <van-cell>
         <li class="list">
          <div class="msg">    
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="adress">
            <span class="name">王记锁行</span>
            <div>联系人:<span>王师傅</span></div>
            <div class="tel">电话:<span>13788214396</span></div>
            <div>地址:<span>成都市青羊区大南街88号</span></div>
            <van-button type="info">联系ta</van-button>
          </div>
        </li>
        </van-cell>
      </ul>
    </van-list>
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
  Button,
  List
  
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
    [List.name]: List
   
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  }
};
</script>

<style lang="less" scoped>
.right {
  float: right;
}
.top_nav {
  font-size: 32px;
}
.van-nav-bar__title,
.van-nav-bar {
  height: 88px;
  line-height: 88px;
  
}
.van-cell--large {
  height: 100px;
  line-height: 100px;
}
.list {
  position: relative;
  // text-align: left;
  border-top: 1px solid #e3e3e3;
  padding: 20px;
  // .tel {
  //   display: inline-block;
  //   font-size: 32px;
  //   span {
  //     padding-right: 14px;
  //   }
  // }
  .msg {
    width: 200px;
    height: 200px;
    img {
      width: 100%;
    }
  }
  display: flex;
  justify-content:start
}
.adress {
  text-align: left;
  font-size: 28px;
  margin-left: 60px;
  line-height: 50px;
  .name{
    font-weight: 600;
    font-size: 36px;
  }
  .van-button {
    width: 120px;
    height: 60px;
    position: absolute;
    right: 20px;
    top: 32%;
  }
}
li:first-child {
  border: none;
}
</style>