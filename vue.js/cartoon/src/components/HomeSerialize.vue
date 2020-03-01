<template>
  <div class="serialize">
    <div class="title">
      <p>精品推存</p>
      <span @click="Looklist()">更多></span>
    </div>
    <ul>
      <li v-for="(item, index) in carousel" :key="index">
        <div class="icon" v-if="item.cover" @click="handlerCardClick(item.url)">
          <img :src="item.cover" alt />
          <div class="name">{{item.name}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data: function() {
    return {
      //   playlistId: null,
      list: [],
      carousel: []
    };
  },
  methods: {
    getHomeSerialize() {
      this.axios.get("http://api.pingcc.cn/?mhlb=lianzai").then(response => {
        ({ list: this.list } = response.data);
        // window.console.log(response);
        for (var i = 1; i < response.data.list.length; i++) {
          if (i % 30 == 0) {
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
      this.$router.push({ path: "/SerializeList", query: { id: param } });
    }
  },
  created() {
    // 组件创建完成 拿数据
    this.getHomeSerialize();
    // window.console.log("创建");
  }
};
</script>

<style lang='less'>
.serialize {
  height: 220px;
  background: rgb(252, 252, 250);
  margin-top: 40px;
  .title {
    display: flex;
     color: rgb(184, 178, 178);
    p {
      margin: 0px 15px;
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
    li {
      .icon {
        width: 100px;
        flex: 1;
        overflow: hidden;
        margin: 18px 0px;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
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