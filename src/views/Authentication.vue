<template>
  <div id="qpp">
    <van-sticky>
      <van-row>
        <van-col span="24">
          <van-nav-bar
            title="绑定信息"
            left-text="返回"
            
            left-arrow
            @click-left="onClickLeft"
            
            class="top_nav"
          />
        </van-col>
      </van-row>
    </van-sticky>
    <van-cell-group>
      <van-field v-model="username" clearable label="姓名" placeholder="请填写成员姓名" />
      <van-field v-model="idcard" clearable label="身份证号" placeholder="请填写成员身份证号" />
    </van-cell-group>
    <div>
      <button type="submit" class="sub" @click="sub">提交</button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      username: "",
      idcard: "",
      userId:"",
      inhabitantId:"",
      telNum:""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
    sub(){
      console.log("提交")
      this.axios.post("/inhabitant/modifyInhabitant",{
        inhabitantName:this.username,
        idCardNo:this.idcard,
        inhabitantType: "已认证",
        telNum:this.telNum,
        inhabitantId:this.inhabitantId
      })
      .then(res=>{
        console.log(res.data);
        if(res.data.code==200){
          Toast("绑定成功！");
          this.axios.post("")
          setTimeout(()=>{
            this.$router.push("/my");
          },2000);
          
        }
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
  created(){
    this.userId = sessionStorage.getItem("userId");
    console.log(this.userId)
    this.axios.post("/inhabitant/findByUserId",{userId:this.userId})
    .then(res=>{
      console.log(res.data);
      this.inhabitantId = res.data.data.data.inhabitantId;
      this.telNum = res.data.data.data.telNum;
      console.log("id:",this.inhabitantId);
      console.log("tel",this.telNum)
    })
  }
};
</script>

<style lang="less" scoped>
.sub {
  border: none;
  background: #ffa400;
  color:#fff;
  font-size: 18px;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  margin:20px  0  0  85px; 
}
</style>