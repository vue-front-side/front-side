<template>
  <div id="qpp">
    <van-sticky>
      <van-row>
        <van-col span="24">
          <van-nav-bar
            title="维修记录"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            class="top_nav"
          />
        </van-col>
      </van-row>
    </van-sticky>
    <van-tabs v-model="active" animated>
      <van-tab title="待维修">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <div class="box" v-if="item.repairState==1||item.repairState==0">
              <div class="img">
                <img :src="getUrl+item.repairImg" alt="暂无图片" />
              </div>
              <div class="content">
                <p>维修内容：{{item.repairContent}}</p>
                <p>报修时间：{{item.regDate}}</p>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="已维修">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <div class="box" v-if="item.repairState==2">
              <div class="img">
                <img :src="getUrl+item.repairImg" alt="暂无图片" />
              </div>
              <div class="content">
                <p>维修内容：{{item.repairContent}}</p>
                <p>维修时间：{{item.appointmentTime}}</p>
                <p>维修人员：{{item.staff[0].staffName}}</p>
                <p>维修费用：￥45</p>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      list: [
        {
          repairContent:"桌子坏了",
          regDate:"2019-12-07",
          repairState:0
        },
        {
          repairContent:"门坏了",
          regDate:"2019-12-07",
          repairState:1
        },
        {
          repairContent:"桌子",
          appointmentTime:"2019-12-08",
          repairState:2,
          staff:[{
            staffName:"刘师傅"
          }]
        }
      ],
      msg: [],
      oldUrl: "",
      inhabitantId: ""
    };
  },
  created() {
    this.inhabitantId = sessionStorage.getItem("inhabitantId");
    // this.axios
    //   .post("/repairInfo/findByHibId", { inhibId: this.inhabitantId })
    //   .then(res => {
    //     console.log(res.data.data);
    //     this.list = res.data.data.data;
    //     console.log("数组:", this.list);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例,将值传入oldUrl
      vm.oldUrl = from.path;
    });
  },
  methods: {
    onClickLeft() {
      this.$router.push(this.oldUrl);
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 验证是否获取到了上页的url
      /* eslint-disable no-console */
      console.log("上页地址", this.oldUrl);
    });
  },
  computed: {
    getUrl() {
      return this.$store.state.url;
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  border: 1px solid #eee;
  margin: 5px;
  overflow: hidden;
}
.box p {
  font-size: 16px;
  margin-top: 5px;
}
.img {
  width: 70px;
  height: 70px;
  background: #eee;
  float: left;
  margin-left: 10px;
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
  img {
    width: 100%;
  }
}
.content {
  width: 250px;
  float: right;
  text-align: left;
}
</style>