<template>
  <div class="recovery">
    
    <van-row>
      <van-col span="24">
        <van-nav-bar
          title="社区动态"
          left-text="返回"
          right-text="发布"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
          class="top_nav"
        />
      </van-col>
    </van-row>
    <van-loading type="spinner" v-if="flag"/>
    <div v-for="(item,index) in dynamicList" :key="index">
      <div class="contents">
        <van-row class="head">
          <van-col span="4">
            <div class="head_box">
              <van-image width="50" height="50" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </div>
          </van-col>
          <van-col span="20" class="msg">
            <span class="name">{{item.name}}</span>
            <span class="time">{{item.time}}</span>
          </van-col>
        </van-row>
        <van-row class="text">
          <van-col span="24">
            <p>{{item.content}}</p>
            <div class="img_box">
              <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </div>
          </van-col>
        </van-row>
        <van-row class="comment_box">
          <van-col span="24">
            <span class="comment">
              <van-icon name="good-job-o" @click="zan(index)" />
            </span>
            <span class="thumbs-up">
              <van-icon name="chat-o" @click="focus(index)"/>
            </span>
          </van-col>
        </van-row>
        <van-row class="comment_text">
          <van-col span="24">
            <span class="comment_logo">
              <van-icon name="good-job-o" @click="comment" />
            </span>
            <span>{{item.count}}人觉得很赞</span>
          </van-col>
        </van-row>
        <van-row class="comment_content" v-for="(items,index) in item.componentArr" :key="index">
          <van-col span="24">
            <span class="com_name">{{items.componentName}}:</span><span>{{items.component}}</span>
          </van-col>
        </van-row>
        <!-- <van-row class="comment_content">
          <van-col span="24">
            <span>张三:</span><span>厉害</span>
          </van-col>
        </van-row> -->
        <van-field ref="com_input" v-model="value" placeholder="评论" class="com_input"/>
      </div>
    </div>
    <!-- <div class="contents">
      <van-row class="head">
        <van-col span="4">
          <div class="head_box">
            <van-image width="50" height="50" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
        </van-col>
        <van-col span="20" class="msg">
          <span class="name">王思聪</span>
          <span class="time">今天12:22</span>
        </van-col>
      </van-row>
      <van-row class="text">
        <van-col span="24">
          <p>Vant 提供了一套默认主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以使用下面提供的方法</p>
          <div class="img_box">
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
        </van-col>
      </van-row>
      <van-row class="comment_box">
        <van-col span="24">
          <span class="comment">
            <van-icon name="good-job-o" />
          </span>
          <span class="thumbs-up">
            <van-icon name="chat-o" />
          </span>
        </van-col>
      </van-row>
      <van-row class="comment_text">
        <van-col span="24">
          <span class="comment">
            <van-icon name="good-job-o" />
          </span>
          <span>3人觉得很赞</span>
        </van-col>
      </van-row>
      <van-field v-model="value" placeholder="评论" class="com_input" />
    </div>
     <div class="contents">
      <van-row class="head">
        <van-col span="4">
          <div class="head_box">
            <van-image width="50" height="50" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
        </van-col>
        <van-col span="20" class="msg">
          <span class="name">王思聪</span>
          <span class="time">今天12:22</span>
        </van-col>
      </van-row>
      <van-row class="text">
        <van-col span="24">
          <p>Vant 提供了一套默认主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以使用下面提供的方法</p>
          <div class="img_box">
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
        </van-col>
      </van-row>
      <van-row class="comment_box">
        <van-col span="24">
          <span class="comment">
            <van-icon name="good-job-o" />
          </span>
          <span class="thumbs-up">
            <van-icon name="chat-o" />
          </span>
        </van-col>
      </van-row>
      <van-row class="comment_text">
        <van-col span="24">
          <span class="comment">
            <van-icon name="good-job-o" />
          </span>
          <span>3人觉得很赞</span>
        </van-col>
      </van-row>
      <van-field v-model="value" placeholder="评论" class="com_input" />
    </div>-->
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
  Image,
  Icon,
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
    [Image.name]: Image,
    [Icon.name]: Icon,
    [Loading.name]:Loading
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push("/release");
    },
    getDynamic(arr) {
      for (var i = 0; i < arr.length; i++) {
        var temp = {};
        var tempArr = [];
        var temp2 = {};
        temp.content = arr[i].content;
        temp.userid = arr[i].inhabitant.inhabitantId;
        temp.name = arr[i].inhabitant.inhabitantName;
        temp.img = arr[i].imgs;
        temp.time = arr[i].releaseTime;
        temp.dynamicsId = arr[i].dynamicsId;
        temp.count = arr[i].zanCount;
        for(var j=0;j<arr[i].discusses.length;j++){
          temp2.component = arr[i].discusses[j].comment;
          temp2.componentName = arr[i].discusses[j].inhabitant.inhabitantName;
          tempArr.push(temp2);
        }
        temp.componentArr=tempArr;
        this.dynamicList.push(temp);
        
      }
      return this.dynamicList;
    },
    // getComponent(arr) {
    //   for (var i = 0; i < arr.length; i++) {
    //     var temp = {};
        
        
    //     this.dynamicList.push(temp);
    //   }
    //   return this.dynamicList;
    // },
    //点赞
    zan(i) {
      this.dynamicList[i].count += 1;
      console.log(typeof this.dynamicList[i].dynamicsId);
      this.axios
        .post("/dynamic/zan", {
          // params:{
          //   dynamicsId:this.dynamicList[i].dynamicsId
          // }
          dynamicsId: this.dynamicList[i].dynamicsId
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //评论
    comment() {
      this.axios.post("/dynamic/discusses", {});
    },
    focus(i){
      this.$refs.com_input[i].focus();
   }
   
      
    
  },
  data() {
    return {
      dynamicList: [],
      count: 0,
      flag:true
    };
  },
  created() {
    console.log("动态");
    this.axios
      .get("/dynamic/showAll", {
        params: {
          pageIndex: "1",
          pageSize: "1"
        }
      })
      .then(res => {
        console.log(res.data);
        if(res.data.code==200){
          this.flag=false;
        }
        this.getDynamic(res.data.data.dynamics);
        console.log("数据", this.dynamicList);
      });
     
  },
  mounted() {
   
  }
};
</script>

<style lang="less" scoped>
//导航
.top_nav {
  font-size: 16px;
}

// .van-nav-bar__title,
// .van-nav-bar {
//   height: 44px;
//   line-height: 44px;
// }

//头像
.head {
  text-align: left;
  .head_box {
    margin: 12px 10px 0 10px;
  }
}
.msg {
  line-height: 1.8;
  margin-top: 14px;
  span {
    font-size: 15px;
    display: block;
  }
  .time {
    font-size: 12px;
    color: rgb(177, 177, 177);
  }
}
.text {
  // margin: 20px 0;

  padding: 0 10px;
  p {
    font-size: 14px;
    text-align: justify;
    margin-bottom: 10px;
  }
}
//评论
.comment_box {
  padding: 0 10px;
  text-align: right;
  .comment {
    margin: 0 10px;
  }
  .van-col {
    // padding: 4px 0;
    border-bottom: 1px solid #f3f3f3;
  }
}
.comment_text {
  text-align: left;
  font-size: 14px;
  padding: 10px 0 5px 10px;
  .comment {
    
    margin-right: 6px;
  }
}
.comment_content {
  padding: 5px 0 5px 10px;
  font-size: 14px;
  text-align: left;
  .com_name {
    color: rgb(31, 31, 167);
  }
}
</style>