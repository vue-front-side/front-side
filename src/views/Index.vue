<template>
  <div class="clearfix">
    <!-- 定位 -->
    <van-sticky>
     <div class="position">
      <div class="pos_content">
        <span>成都</span>
        <van-icon name="location-o" class="icon" />
      </div>
    </div>
    </van-sticky>
    <!-- 轮播 -->
    <van-row class="row">
      <van-col span="24" class="col">
        <van-swipe :autoplay="3000" class="swipe_box">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </van-col>
    </van-row>
    <!-- 公告 -->
    <van-row class="notice_content">
      <van-col span="24">
        <!-- <van-swipe :autoplay="3000" class="notice" vertical :show-indicators="false">
          <van-swipe-item v-for="(item, index) in lists" :key="index" class="swipe_item">
            <span>{{item.text}}</span>
          </van-swipe-item>
        </van-swipe>-->
        <van-notice-bar
          mode="link"
          left-icon="volume-o"
          :scrollable="true"
        >足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。</van-notice-bar>
      </van-col>
    </van-row>
    <!-- 导航 -->
   
    <van-row class="nav">
      <van-col span="24">
        <van-grid class="grid" :border="false" icon-size="42px">
          <van-grid-item class="grid_item tabBar" to="/payments">
            
            <span class="iconfont icon-wuyejiaofei"></span>
            <span class="tab_text">物业缴费</span>
          </van-grid-item>
          
          <van-grid-item class="grid_item tabBar" to="/recovery" >
             <span class="iconfont icon-huishou"></span>
              <span class="tab_text">上门回收</span>
          </van-grid-item>
          <van-grid-item class="grid_item tabBar" to="/repair">
            <span class="iconfont icon-baoxiu"></span>
              <span class="tab_text">报修</span>
          </van-grid-item>
          <van-grid-item class="grid_item tabBar" to="/service">
              <span class="iconfont icon-ruanjianfuwu"></span>
              <span class="tab_text">服务</span>
          </van-grid-item>
        </van-grid>
      </van-col>
    </van-row>
    
    <!-- 生活百科 -->
   
    <van-row class="encyclopedia_box">
      <van-col span="24">
        <span class="encyclopedia">生活百科</span>
      </van-col>
    </van-row>
   
    <van-row>
      <van-col span="24">
        <van-tabs v-model="activeName" sticky :offset-top="44">
          <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index" class="article_box">
            <div>
              <router-link :to="{ name: 'encyclopdia'}">
              <div class="article">
                <div>
                  <img src="../assets/imag/index/VN.png" alt />
                </div>
                <span class="tag">生活常识</span>
                <p class="title">因为有你，心存感激</p>
                <span class="info">感恩节</span>
              </div>
              </router-link>
              <div class="article">
                <div>
                  <img src="../assets/imag/index/VN.png" alt />
                </div>
                <span class="tag">生活常识</span>
                <p class="title">因为有你，心存感激</p>
                <span class="info">感恩节</span>
              </div>
              <div class="article">
                <div>
                  <img src="../assets/imag/index/VN.png" alt />
                </div>
                <span class="tag">生活常识</span>
                <p class="title">因为有你，心存感激</p>
                <span class="info">感恩节</span>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </van-col>
    </van-row>
    <NavBottom></NavBottom>
  </div>
</template>

<script>
// import navSlot from '../components/Nav-top'
import NavBottom from '../components/NavBottom'
import {
  Button,
  Row,
  Col,
  Swipe,
  SwipeItem,
  Lazyload,
  NavBar,
  Icon,
  Tabbar,
  TabbarItem,
  Grid,
  GridItem,
  NoticeBar,
  Tab,
  Tabs,
  Sticky
} from "vant";
export default {
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [NoticeBar.name]: NoticeBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Sticky.name]:Sticky,
    NavBottom
    // navSlot
  },
  data() {
    return {
      images: [
        "../../public/favicon.ico",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      lists: [
        {
          text: "今天停气"
        },
        {
          text: "明天停气"
        }
      ],

      active: "home",
      activeName: "a",
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    };
  },
  created(){
    this.axios.get("/communityInfo/showByLike")
    .then(res=>{
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  }
};
</script>

<style lang="less" scoped>
@import '../assets/style/base.less';
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.swipe_box {
  height: 200px;
  z-index: -1;
}
.swipe_box img {
  height: 100%;
}
.position {
  overflow: hidden;
  height: 44px;
  line-height: 44px;
  background-color: transparent;
  text-align: left;
}
.row {
  height: 160px;
}
.col {
  position: absolute;
  top: 20px;
  width: 100%;
}
.pos_content {
  display: inline-block;
  height: 100%;
  // float: left;
  margin-left: 10px;
  font-size: 16px;
}
.pos_content .icon {
  margin-left: 3px;
  vertical-align: text-bottom;
}
.notice {
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  border: 1px solid black;
}
.notice_content {
  margin: 10px 0;
}
.swipe_item {
  height: 100%;
  text-align: left;
}

// 百科
.encyclopedia_box {
  height: 40px;
  margin-top: 10px;
  line-height: 40px;
  font-size: 18px;
  text-align: left;
}
.encyclopedia::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 20px;
  margin-right: 8px;
  background-color: #ffa400;
  vertical-align: text-bottom;
}
.article_box {
  text-align: left;
}
.article {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
}
.article div {
  height: 180px;
  text-align: center;
}
.article img {
  height: 100%;
}
.tag {
  display: inline-block;
  color: #fff;
  font-size: 14px;
  padding: 2px 10px;
  border-radius: 9px 0 9px 0;
  background-color: rgba(0, 0, 0, 0.24);
  position: absolute;
  top: 170px;
}
.title {
  margin: 10px 0;
  color: #000;
  font-size: 16px;
}
.info {
  display: inline-block;
  color: #5e5d5d;
  font-size: 14px;
}
.icons {
  padding: 10px 0 5px;
}
.iconfont{
  font-size: 50px;
  color: @themeColor;
}

.tab_text {
  font-size: 14px;
  color: #838383
}
</style>
