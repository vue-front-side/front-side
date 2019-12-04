<template>
  <div class="clearfix">
    <!-- 定位 -->
    <van-sticky>
      <div class="position" ref="location" :style="{background:bgcolor}">
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
            <img :src="image" />
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
          <van-grid-item class="grid_item tabBar" @click="link">
            <span class="iconfont icon-qitafeiyong"></span>
            <span class="tab_text fee">物业缴费</span>
          </van-grid-item>

          <van-grid-item class="grid_item tabBar" to="/recovery">
            <span class="iconfont icon-recycle"></span>
            <span class="tab_text">上门回收</span>
          </van-grid-item>
          <van-grid-item class="grid_item tabBar" to="/repair">
            <span class="iconfont icon-repairfill"></span>
            <span class="tab_text">报修</span>
          </van-grid-item>
          <van-grid-item class="grid_item tabBar" to="/service">
            <span class="iconfont icon-menu"></span>
            <span class="tab_text">服务</span>
          </van-grid-item>
        </van-grid>
      </van-col>
    </van-row>

    <!-- 生活百科 -->

    <van-row class="encyclopedia_box" :style="{bacground:bgcolor}">
      <van-col span="24">
        <span class="encyclopedia">生活百科</span>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="24">
        <van-tabs v-model="activeName" sticky :offset-top="44">
          <van-tab v-for="(item,index) in textType" :title="item" :key="index" class="article_box" background="gray" color="#ffa400">
            <div>
              <router-link :to="{ name: 'encyclopdia'}" v-for="(item,index) in allText" :key="index">
                <div class="article">
                  <div>
                    <img :src="'http://172.16.6.63:8080/'+item.ciImage" alt />
                  </div>
                  <span class="tag">{{item.ciType}}</span>
                  <p class="title">{{item.ciTitle}}</p>
                  <span class="info">{{item.ciDate}}</span>
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
import '../assets/less/reset.less'
import NavBottom from "../components/NavBottom";
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
  Sticky,
  Toast
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
    [Sticky.name]: Sticky,
    NavBottom
    // navSlot
  },
  data() {
    return {
      images: [
        "../assets/imag/index/plante1.jpg",
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
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      },
      bgcolor: "transform",
      startTime: new Date().getTime(),
      textType:[],
      allText:[]
    };
  },
  created() {
    sessionStorage.setItem("userState", true);
    this.axios
      .get("/communityInfo/showType")
      .then(res => {
        console.log(res.data.data.data);
        this.textType=res.data.data.data;
        this.textType.unshift("最新");
        this.axios.post("/communityInfo/showByLike",)
        .then(res=>{
          console.log(res.data.data.data);
          this.allText = res.data.data.data;
        })
        .catch(err=>{
          console.log(err);
        })
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    link() {
      const userState = sessionStorage.getItem("userState");
      console.log(userState);
      if (userState) {
        this.$router.push("/payments");
      } else {
        Toast("请先进行用户认证！");
      }
    },
    getScrollTop() {
      // console.log("开始时间：",this.startTime);
      var currentTime = new Date().getTime();
      // console.log("当前时间：",currentTime);
      if (currentTime - this.startTime > 500) {
        console.log("1");
        let scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
          scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
          scrollTop = document.body.scrollTop;
        }
        console.log(scrollTop);
        if (scrollTop > 0) {
          this.bgcolor = "red";
        }
      }
      this.startTime = currentTime;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.getScrollTop); // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/base.less";
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
  width: 100%;
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
.iconfont {
  font-size: 38px;
  color: @themeColor;
}

.tab_text {
  font-size: 14px;
  color: #838383;
}
.icon-qitafeiyong {
  font-size: 36px;
}
.fee {
  margin-top: 2px;
}
</style>
