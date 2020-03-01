<template>
  <ul>
      <div class="btn" @click="$router.go(-1)">《 <b>返回</b></div>
    <li v-for="(item, index) in Lookbooke" :key="index">
      <img :src="item.img" alt />
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      Lookbooke: null
    };
  },
  methods: {
    getLookbooke(url) {
      this.axios
        .get("http://api.pingcc.cn", {
          params: {
            mhurl2: url
          }
        })
        .then(response => {
          ({ list: this.Lookbooke } = response.data);
          window.console.log(response);
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    // window.console.log(to);
    // 路由进入 当前组件实例化之前就 拿数据
    // beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用,因此即将登场的新组件还没被创建
    next(vm => {
      vm.getLookbooke(to.query.id);
    });
  }
};
</script>

<style lang='less' scoped>
ul {
  li {
    font-size: 0px;
    padding-top: 30px;
    img {
      width: 100%;
    }
  }
  .btn{
    position: fixed;
    width: 100%;
    line-height: 50px;
    background: rgb(250, 249, 249);
  }
}
</style>