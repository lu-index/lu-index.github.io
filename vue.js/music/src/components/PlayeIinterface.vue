<template>
  <li class="card" @click="handlerCardClick(item.id)">
    <div class="thumb">
      <img :src="item.picUrl" alt />
      <!-- <span class="hear"></span> -->
      <span>{{translatePlayCount(item.playCount)}}</span>
    </div>
    <div class="name">{{item.name}}</div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    translatePlayCount(n) {
      if (n > 99999999) {
        return (n / 100000000).toFixed(2) + "亿";
      }
      if (n > 9999) {
        return (n / 10000).toFixed(1) + "万";
      }
    },
    handlerCardClick(param) {
      // window.console.log(param)
      this.$router.push({ path: "playlist", query: { id: param } });
    }
  }
};
</script>
<style lang="less">
.thumb {
  position: relative;
  img {
    vertical-align: middle;
  }
  // .hear {
  //   position: absolute;
  //   right: 40px;
  //   top: 5px;
  //   width: 11px;
  //   height: 10px;
  //   background: url("../assets/hear.svg");
  //   // background-size: 11px 10px;
  // }
  span {
    position: absolute;
    top: 3px;
    right: 5px;
    color: white;
    font-size: 10px;
    &::before {
      content: "";
      display: inline-block;
      width: 11px;
      height: 10px;
      background: url("../assets/hear.svg");
    }
  }
}
.name {
  display: -webkit-box;
  font-size: 13px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0 5px 10px 5px;
  padding-top: 5px;
}
</style>