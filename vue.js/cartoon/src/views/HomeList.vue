<template >
  <div class="list">
    <LookTitle>热门漫画</LookTitle>
    <ol>
      <li
        v-for="(item, index) in list"
        :index="index"
        :key="index"
        @click="handlerCardClick(item.url)"
      >
        <div class="icon" v-if="item.cover">
          <img :src="item.cover" alt />
          <div class="name">{{item.name}}</div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import LookTitle from "@/components/LookTitle.vue";
export default {
  components: {
    LookTitle
  },
  data: function() {
    return {
      //   playlistId: null,
      list: null
    };
  },
  methods: {
    getPlayListDetail() {
      this.axios.get("http://api.pingcc.cn/?mhlb=hot").then(reponse => {
        window.console.log(reponse.data);
        ({ list: this.list } = reponse.data);
      });
    },
    handlerCardClick(param) {
      window.console.log("param");
      this.$router.push({ path: "/Particulars", query: { id: param } });
    }
  },
  created() {
    // 组件创建完成 拿数据
    // this.getPlayListDetail();
    window.console.log("创建");
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
.list {
  ol {
    padding-top: 60px;
    li {
      .icon {
        float: left;
        width: 150px;
        overflow: hidden;
        margin-left: 25px;
        margin-bottom: 15px;
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
        img {
          height: 200px;
          width: 150px;
        }
        .name {
          // flex: 1;
          // float: left;
          height: 30px;
          text-align: center;
          line-height: 30px;
        }
      }
    }
  }
}
</style>