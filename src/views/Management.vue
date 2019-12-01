<template>
  <div class="release">
    <van-row>
      <van-col span="24">
        <van-nav-bar title="成员管理" left-text="返回" left-arrow @click-left="onClickLeft" />
      </van-col>
    </van-row>
    <van-row class="people">
      <van-col span="2" class="head">
        <van-icon name="user-o" />
      </van-col>
      <van-col span="22" class="concat">
        <div>
          姓名:
          <span>张三</span>
        </div>
        <div>
          电话:
          <span>15700495753</span>
        </div>
        <div>
          关系:
          <span>家庭成员</span>
        </div>
      </van-col>
      <van-button type="danger" class="del" @click="confirm">删除</van-button>
    </van-row>
    <van-row class="people">
      <van-col span="2" class="head">
        <van-icon name="user-o" />
      </van-col>
      <van-col span="22" class="concat">
        <div>
          姓名:
          <span>张三</span>
        </div>
        <div>
          电话:
          <span>15700495753</span>
        </div>
        <div>
          关系:
          <span>家庭成员</span>
        </div>
      </van-col>
      <van-button type="danger" class="del" @click="confirm">删除</van-button>
    </van-row>
    <van-row class="people">
      <van-col span="2" class="head">
        <van-icon name="user-o" />
      </van-col>
      <van-col span="22" class="concat">
        <div>
          姓名:
          <span>张三</span>
        </div>
        <div>
          电话:
          <span>15700495753</span>
        </div>
        <div>
          关系:
          <span>家庭成员</span>
        </div>
      </van-col>
      <van-button type="danger" class="del" @click="confirm">删除</van-button>
    </van-row>

    <van-button type="info" @click="login">添加成员</van-button>
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
  ContactCard,
  ContactList,
  ContactEdit,
  Dialog
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
    [ContactCard.name]: ContactCard,
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit,
    [Dialog.name]: Dialog
  },
  data() {
    return {
      chosenContactId: null,
      list: [
        {
          name: "张三",
          tel: "13000000000",
          id: 0
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    confirm() {
      Dialog.confirm({
        message: "确认删除！"
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    login(){
      console.log("登录");
      this.axios.post("/users/login",{
        username:"admin",
        userpass:"123456"
      })
      .then(res=>{
        console.log(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
};
</script>

<style lang="less" scoped>
.van-button {
  width: 90%;
  // height: 40px;
  font-size: 20px;
  margin: 20px 0;
}
.head {
  margin-top: 18px;
  font-size: 34px;
}
.concat {
  padding: 10px 0 10px 10px;
  font-size: 18px;
  text-align: left;
}
.people {
  position: relative;
}
.people::before {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  background: repeating-linear-gradient(
    -45deg,
    #ff6c6c 0,
    #ff6c6c 20%,
    transparent 0,
    transparent 25%,
    #1989fa 0,
    #1989fa 45%,
    transparent 0,
    transparent 50%
  );
  background-size: 80px;
  content: "";
}
.del {
  position: absolute;
  top: 8px;
  right: 30px;
  width: 22%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
}
</style>


