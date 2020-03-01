<template>
  <div class="finishlist">
   <LookTitle>完结漫画</LookTitle>
   <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="icon" v-if="item.cover" @click="handlerCardClick(item.url)">
          <img :src="item.cover" alt />
          <div class="name">{{item.name}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import LookTitle from "@/components/LookTitle.vue";
export default {
    name:'looktitle',
    components:{
        LookTitle
    },
      data() {
    return {
      list: []
    };
  },
    methods: {
    getHomeSerialize() {
      this.axios.get("http://api.pingcc.cn/?mhlb=wanjie").then(response => {
        ({ list: this.list } = response.data);
        window.console.log(response);
      });
    },
    handlerCardClick(param) {
      window.console.log("param");
      this.$router.push({ path: "/Particulars", query: { id: param } });
    }
  },
  created() {
    // 组件创建完成 拿数据
    this.getHomeSerialize();
    // window.console.log("创建");
  }
};
</script>

<style lang='less' scoped>
.finishlist{
    font-size: 0;
     ul {
   padding-top: 50px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
    li {
      .icon {
        width: 100px;
        overflow: hidden;
        flex: 1;
        margin: 18px 12px;
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