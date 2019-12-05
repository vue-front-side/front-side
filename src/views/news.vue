<template>
  <div id="qpp">
    <van-sticky>
      <van-row>
        <van-col span="24">
          <van-nav-bar
            title="消息中心"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            class="top_nav"
          />
        </van-col>
      </van-row>
    </van-sticky>
    <ul>
      <li
        style="overflow: hidden;position:relative;margin-top:-20px"
        v-for="(item,index) in list"
        :key="index"
      >
        <van-icon name="volume-o" />
        <div>
          <p class="news">
            您的意见：
            {{item.sugContent}}
            <br />
            <span v-if="item.sugState==1" class="del" style="margin-left:290px" @click="send">
              已处理
              <van-icon name="close" class="sc" @click="sugId=item.sugId" />
            </span>
            <span v-if="item.sugState==0" class="del">处理中</span>
            <span class="time">3:10</span>
          </p>
        </div>
      </li>
      <li
        style="overflow: hidden;position:relative;margin-top:-20px"
        v-for="(item,index) in msg"
        :key="index"
      >
        <van-icon name="volume-o" />
        <div>
          <p class="news">
            您报修的：
            {{item.repairsParts[0].partName}}
            <br />
            <span v-if="item.repairState==2" class="del" style="margin-left:290px" @click="send">
              已处理
              <van-icon name="close" class="sc" @click="sugId=item.sugId" />
            </span>
            <span v-if="item.repairState==0||item.repairState==1" class="del">处理中</span>
            <span class="time">3:10</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: [],
      sugId: "",
      state: "",
      msg: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
    send() {
      this.axios
        .post("/suggestion/deleteById", { id: this.sugId })
        .then(res => {
          console.log(res.data);
          this.$dialog
            .confirm({
              message: "确认删除？"
            })
            .then(() => {
              this.axios
                .post("/suggestion/showByUserId", { userId: 1 })
                .then(res => {
                  this.list = res.data.data.data;
                })
                .catch(err => {
                  console.log(err);
                });
              this.axios
                .post("/suggestion/showRepairByUserId", { userId: 1 })
                .then(res => {
                  this.msg = res.data.data.data;
                })
                .catch(err => {
                  console.log(err);
                });
            })
            .catch(() => {
              // on cancel
            });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.axios
      .post("/suggestion/showByUserId", { userId: 1 })
      .then(res => {
        this.list = res.data.data.data;
      })
      .catch(err => {
        console.log(err);
      });
    this.axios
      .post("/suggestion/showRepairByUserId", { userId: 1 })
      .then(res => {
        this.msg = res.data.data.data;
        console.log(this.msg);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>


<style lang="less" scoped>
.time {
  position: absolute;
  right: 90px;
  bottom: 25px;
  font-size: 16px;
  color: #aaa;
}
.news {
  width: 260px;
  padding: 10px 20px 40px 20px;
  margin-right: 20px;
  font-size: 18px;
  float: right;
  text-align: left;
  border: 1px solid #eee;
  border-radius: 20px;
}
.del {
  display: inline-block;
  height: 25px;
  position: absolute;
  top: 93px;
  right: 30px;
  color: #aaa;
  font-size: 16px;
}
.sc {
  transform: translateY(-65px);
  float: right;
}
</style>