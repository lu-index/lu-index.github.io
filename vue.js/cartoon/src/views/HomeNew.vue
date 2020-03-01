<template>
  <div class="new">
    <LookTitle>最新漫画</LookTitle>
    <ol>
      <li
        v-for="(item, index) in list"
        :index="index"
        :key="index"
        @click="handlerCardClick(item.url)"
      >
        <div class="images" v-if="item.cover">
          <img :src="item.cover" alt />
        </div>
        <div class="newname">{{item.name}}</div>
      </li>
    </ol>
  </div>
</template>

<script>
import LookTitle from "@/components/LookTitle.vue";
export default {
      components:{
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
      this.axios.get("http://api.pingcc.cn/?mhlb=new").then(reponse => {
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

<style lang='less'>
.new {
  height: 100%;
  ol {
    padding-top: 60px;
    li {
      color: #666;
      .images {
        border-radius: 10px;
        padding: 0 10px;
        img {
          height: 300px;
          width: 100%;
          // border-radius: 10px;
          border: none;
          box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
        }
      }
      .newname {
        line-height: 50px;
        font-size: 18px;
        padding-left: 10px;
      }
    }
  }
}
</style>