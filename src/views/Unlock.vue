<template>
  <div class="unlock">
    
    <van-sticky>
    <van-row>
      <van-col span="24">
        <van-nav-bar
          title="开锁"
          left-text="返回"
         
          left-arrow
          @click-left="onClickLeft"
          
          class="top_nav"
        />
      </van-col>
    </van-row>
    </van-sticky>
    <van-loading size="24px" v-if="flag" class="load">加载中...</van-loading>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <ul>
        <van-cell v-for="(item,index) in this.unlockList" :key="index">
        <li class="list">
          <div class="msg">
           
            <img :src="getUrl+item.headImg" alt="">
          </div>
          <div class="adress">
            <span class="name">{{item.companyName}}</span>
            <div>联系人:<span>{{item.personName}}</span></div>
            <div class="tel">电话:<span>{{item.telNum}}</span></div>
            <div>地址:<span>{{item.location}}</span></div>
            <van-button type="info">联系ta</van-button>
            <span></span>
            <span></span>
          </div>
        </li>
        </van-cell>
      </ul>
    </van-list>
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
  List,
  Sticky,
  Loading
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
    [List.name]: List,
    [Sticky.name]:Sticky,
    [Loading.name]:Loading
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
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
      finished: false,
      unlockList:[],
      flag:true
    };
  },
  created(){
    this.axios.post("/unlock/getAll",{
      pageSize:"100",
      currentPage:"1"
    })
    .then(res=>{
      console.log(res.data);
       if(res.data.code==200){
          this.flag=false;
        }
      this.unlockList = res.data.data.data;
    })
    .catch(err=>{
      console.log(err);
    })
  },
  computed:{
    getUrl(){
      return this.$store.state.url
    }
  }
};
</script>

<style lang="less" scoped>
.right {
  float: right;
}
.top_nav {
  font-size: 16px;
}
// .van-nav-bar__title,
// .van-nav-bar {
//   height: 88px;
//   line-height: 88px;
  
// }
.van-cell--large {
  height: 500px;
  line-height: 50px;
}
.list {
  position: relative;
  // text-align: left;
  border-top: 1px solid #e3e3e3;
  padding: 10px;
  // .tel {
  //   display: inline-block;
  //   font-size: 32px;
  //   span {
  //     padding-right: 14px;
  //   }
  // }
  .msg {
    width: 80px;
    height: 80px;
    img {
      width: 100%;
    }
  }
  display: flex;
  justify-content:start
}
.adress {
  text-align: left;
  font-size: 14px;
  margin-left: 30px;
  line-height: 25px;
  .name{
    font-weight: 300;
    font-size: 18px;
  }
  .van-button {
    width: 74px;
    height: 30px;
    line-height: 30px;
    position: absolute;
    right: 10px;
    top: 16%;
    background-color: #ffa400;
    border-color: #ffa400;
  }
}
li:first-child {
  border: none;
}
.load {
  text-align: center;
}
</style>