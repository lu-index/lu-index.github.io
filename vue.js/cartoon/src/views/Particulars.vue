<template>
  <div class="particulars" v-if="this.particulars">
     <span class="icon" @click="$router.go(-1)">《</span>
    <div class="top">
      <img :src="this.particulars.data.cover" alt />
      <div class="images">
        <img :src="this.particulars.data.cover" alt />
      </div>
      <div class="name">
        <p class="booke">{{this.particulars.data.name}}</p>
        <p class="author">出版: {{this.particulars.data.author}}</p>
        <p class="tag">类型: {{this.particulars.data.tag}}</p>
        <p class="time">更新时间: {{this.particulars.data.time}}</p>
      </div>
    </div>
    <div class="introduce" :class="{active:isActive}">
      简介: {{this.particulars.data.introduce}}
    </div>
    <div class="btn">
      <img
        src="http://css99tel.cdndm5.com/v201910292122/blue/images/mobile/desc-more.png"
        alt
        @click="Btn"
      />
    </div>

    <ol>
      <li v-for="(item, index) in particulars.list" :key="index" @click="HomeSerializeClick(item.url)">{{item.num}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      particulars: null,
      isActive: true
    };
  },
  methods: {
    Btn: function() {
      this.isActive = !this.isActive;
    },
    getHomeSerialize(url) {
      this.axios
        .get("http://api.pingcc.cn", {
          params: {
            mhurl1: url
          }
        })
        .then(response => {
          ({ data: this.particulars } = response);
          window.console.log(response.data);
        });
    },
    HomeSerializeClick(param) {
      window.console.log("param");
      this.$router.push({ path: "/Lookbooke", query: { id: param } });
    }
  },
  beforeRouteEnter(to, from, next) {
    // window.console.log(to);
    // 路由进入 当前组件实例化之前就 拿数据
    // beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用,因此即将登场的新组件还没被创建
    next(vm => {
      vm.getHomeSerialize(to.query.id);
    });
  }
};
</script>

<style lang='less'>
.particulars {
  position: relative;
  span {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
    color: rgb(168, 166, 166);
  }
  .top {
    display: flex;
    width: 100%;
    filter: blur(0px);
    overflow: hidden;
    height: 300px;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      filter: blur(10px);
      transform: scale(1.5);
    }
    .images {
      width: 150px;
      padding: 20px;
      height: 200px;
      margin-top: 30px;
      img {
        width: 150px;
        height: 200px;
        filter: blur(0px);
        transform: scale(1);
        padding: 20px;
        margin-top: 30px;
      }
    }
    .name {
      padding-top: 70px;
      padding-left: 75px;
      filter: blur(0px);
      color: white;
      text-shadow: 0px 3px 5px #595959;
      width: 100%;
      .booke {
        font-size: 18px;
        font-weight: 800;
      }
      .author {
        font-size: 12px;
      }
      .tag {
        font-size: 12px;
      }
      .time {
        font-size: 12px;
      }
    }
  }
  .introduce {
    margin: 5px 15px 5px 15px;
    color: #666666;
    font-size: 16px;
    position: relative;
    :link {
      word-wrap: break-word;
      white-space: normal;
    }
    &.active {
      margin: 5px 15px 5px 15px;
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
  .btn {
    width: 100%;
    height: 20px;
    position: relative;
    img {
      width: 25px;
      position: absolute;
      right: 20px;
      top: 0;
    }
  }
  ol{
    // text-align: center;
    li{
      padding: 20px;
      line-height: 20px;
      border-top: 1px solid rgb(240, 240, 240);
    }
  }
}
</style>