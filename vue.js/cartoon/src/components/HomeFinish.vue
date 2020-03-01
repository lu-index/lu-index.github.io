<template>
  <div class="finish">
    <div class="title">
      <p @click="Looklist()">完结漫画</p>
      <span @click="Looklist()">更多></span>
    </div>
    <ul>
      <li v-for="(item, index) in carousel" :key="index" @click="handlerCardClick(item.url)">
        <div class="icon" v-if="item.cover">
          <img :src="item.cover" alt />
          <div class="name">{{item.name}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      //   playlistId: null,
      list: [],
      carousel: []
    };
  },
  methods: {
    getHomeSerialize() {
      this.axios.get("http://api.pingcc.cn/?mhlb=wanjie").then(response => {
        ({ list: this.list } = response.data);
        // window.console.log(response);
        for (var i = 1; i < response.data.list.length; i++) {
          if (i % 15 == 0) {
            // window.console.log(this.carousel);
            this.carousel.push(this.list[i]);
          }
        }
      });
    },
    handlerCardClick(param) {
      window.console.log("param");
      this.$router.push({ path: "/Particulars", query: { id: param } });
    },
    Looklist(param) {
      window.console.log("param");
      this.$router.push({ path: "/FinishList", query: { id: param } });
    }
  },
  created() {
    // 组件创建完成 拿数据
    this.getHomeSerialize();
    // window.console.log("创建");
  },
  beforeRouteEnter(to, from, next) {
    // window.console.log(to);
    // 路由进入 当前组件实例化之前就 拿数据
    // beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用,因此即将登场的新组件还没被创建
    next(vm => {
      vm.getPlayListDetail(to.query.name);
    });
  }
};
</script>

<style lang="less">
.finish {
  height: 400px;
  background: rgb(252, 252, 250);
  margin-top: 30px;
  margin-bottom: 30px;
  .title {
     display: flex;
    color: rgb(184, 178, 178);
    p {
      margin: 0 15px;
      padding-top: 10px;
      font-size: 18px;
      
    }
        span{
      flex: 1;
      padding-top: 10px;
      text-align: right;
      padding-right: 20px;
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
    // width: 100%;
    flex-wrap: wrap;
    li {
      // height: 120px;
      .icon {
        width: 100px;
        overflow: hidden;
        flex: 1;
        margin: 18px 0;
        box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
        // text-align: center;
        img {
          height: 120px;
          width: 100px;
        }
        .name {
          height: 20px;
          text-align: center;
          line-height: 20px;
          display: -webkit-box;
          font-size: 14px;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          padding: 3px 0;
        }
      }
    }
  }
}
</style>