<template>
  <div class="body">
    <!-- 导航条 -->
    <van-nav-bar title="百科详情" left-arrow @click-left="onClickLeft"/>
    <!-- 文章 -->
    <div class="article-body">
      <h4>文章标题</h4>
      <p class="publish-time">发布时间 2019-11-27</p>
      <div class="article">
        <p class="paragraph1">
          橘常绿小乔木或灌木，高3～4m。枝细，多有刺。叶互生；叶柄长0.5～37.5px，有窄翼，顶端有关节；叶片披针形或椭圆形，长4～275px，
          宽1.5～100px，先端渐尖微凹，基部楔形，全缘或为波状，具不明显的钝锯齿，有半透明油点。花单生或数朵丛生于枝端或叶腋；
        </p>
        <p class="paragraph2 paragraph">
          雌蕊1，子房圆形，柱头头状。柑果近圆形或扁圆形，
          横径4～175px，果皮薄而宽，容易剥离，囊瓣7～12，汁胞柔软多汁。种子卵圆形，白色，一端尖，数粒至数十粒或无。花期3～4月，果期10～12月。
        </p>
        <div class="img-box">
          <img src="../assets/img/service/test.jpg" alt="" class="imge2 imges">
        </div>
        <p class="paragraph2 paragraph">
          花萼杯状，5裂；
          花瓣5，白色或带淡红色，开时向上反卷；雄蕊15～30，长短不一，花丝常3～5个连合成组；雌蕊1，子房圆形，柱头头状。柑果近圆形或扁圆形，
          横径4～175px，果皮薄而宽，容易剥离，囊瓣7～12，汁胞柔软多汁。种子卵圆形，白色，一端尖，数粒至数十粒或无。花期3～4月，果期10～12月。
        </p>
        <div class="img-box">
          <img src="../assets/img/service/test.jpg" alt="" class="imge2 imges">
        </div>
      </div>
      <div class="bottom">
        <p class="read-counter">阅读 3520</p>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'service',
  data() {

    return {
    };
  },
  methods: {
    onClickLeft() {
      alert('返回');
    }
  }
}
</script>


<style lang="less" scoped>
@import '../assets/style/base.less';
@import '../assets/less/nav.less';
h4{
  text-align: left;
}
p {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  text-align: left;
}
.article-body {
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
}
.publish-time {
  color: #999;
}
.article {
  margin-top: 10px;
}
.paragraph {
  margin: 10px 0;
}
.img-box {
  text-align: center;
}
.imges {
  width: 320px;
}
.bottom {
  margin-top: 30px;
}
.read-counter {
  color: #999;
}
</style>