<template>
  <div class="home">
    <HomeNav />
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="(item, index) in carousel"
        :key="index"
        @click="handlerCardClick(item.url)"
      >
        <van-image :src="item.cover" />
      </van-swipe-item>
    </van-swipe>
    <Homemenu />
    <HomeSerialize />
    <HomeFinish />
    <div class="bottom">
      <span>投稿高手</span>
      <span>关于作者</span>
      <span>意见反馈</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from "@/components/HomeNav.vue";
import Homemenu from "@/components/Homemenu.vue";
import HomeSerialize from "@/components/HomeSerialize.vue";
import HomeFinish from "@/components/HomeFinish.vue";

export default {
  name: "home",
  components: {
    HomeNav,
    Homemenu,
    HomeSerialize,
    HomeFinish
  },
  data() {
    return {
      value: "",
      swipe: [],
      carousel: [],
      index: 0
    };
  },
  methods: {
    getSwipe() {
      this.axios.get("http://api.pingcc.cn/?mhlb=shaonianrexue").then(response => {
        ({ list: this.swipe } = response.data);
        window.console.log(response.data);
        for (var i = 1; i < response.data.list.length; i++) {
          if (i % 30 == 0) {
            // window.console.log(this.carousel);
            this.carousel.push(this.swipe[i]);
          }
        }
      });
    },
    handlerCardClick(param) {
      window.console.log("param");
      this.$router.push({ path: "/Particulars", query: { id: param } });
    }
  },

  created() {
    // 组件创建完成 拿数据
    this.getSwipe();
  }
};
</script>

<style lang="less" scoped>
.home {
  .van-swipe {
    padding-top: 50px;
    height: 250px;
    width: 100%;
    .van-swipe-item {
      .van-image {
         width: 100%;
         height: 350px;
      }
    }
  }
  .bottom {
    height: 50px;
    background: rgb(190, 190, 190);
    text-align: center;
    line-height: 50px;
    color: white;
    span {
      margin: 10px;
    }
  }
}
</style>
