<template>
  <div class="home-search">
    <form action="/">
      <van-search
        v-model.trim="value"
        @keyup.enter="getSearchMhname()"
        placeholder="请搜索漫画名、作者名"
        show-action
        shape="round"
      >
        <div slot="action" @click="$router.go(-1)">取消</div>
      </van-search>
    </form>
    <template v-if="value">
      <ul>
        <div class="fontsearch">搜索:"{{value}}"</div>
        <li v-for="(item, index) in SearchMhname" :key="index" @click="handlerCardClick(item.url)">
          <i class="svg"></i>
          {{item.name}}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      SearchMhname: []
    };
  },
  methods: {
    getSearchMhname() {
      this.axios
        .get("http://api.pingcc.cn", {
          params: {
            mhname: this.value
          }
        })
        .then(response => {
          ({ list: this.SearchMhname } = response.data);
          window.console.log(response.data);
        });
    },
    handlerCardClick(param) {
      window.console.log("param");
      this.$router.push({ path: "/Particulars", query: { id: param } });
    }
  },
  watch: {
    value(newValue) {
      if (newValue) {
        this.getSearchMhname();
      }
    }
  }
};
</script>

<style lang='less'>
.home-search {
  position: relative;
  .van-swipe {
    width: 50%;
    height: 34px;
    position: absolute;
    top: 10px;
    left: 20px;
    .van-swipe-item {
      line-height: 34px;
      font-size: 12px;
    }
  }
  ul {
    .fontsearch {
      color: #507daf;
      border-top: 1px solid #f8f6f6;
      border-bottom: 1px solid #f8f6f6;
      line-height: 50px;
    }
    li {
      width: 90%;
      margin: 0;
      padding: 0;
      position: relative;
      line-height: 50px;
      left: 30px;
      border-bottom: 1px solid #f8f6f6;
      i.svg {
        display: inline-block;
        width: 15px;
        height: 15px;
        background-image: url("../assets/search.svg");
        position: absolute;
        left: -20px;
        top: 18px;
      }
    }
  }
}
</style>