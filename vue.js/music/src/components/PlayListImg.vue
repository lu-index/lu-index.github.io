<template>
  <div class="thumb" v-if="item">
    <img :src="item.coverImgUrl" alt />
    <div class="icon">
      <div class="font">歌单</div>
      <img :src="item.coverImgUrl" alt />
      <span>{{translatePlayCount(item.playCount)}}</span>
    </div>
    <div class="name">
      <h1>{{item.name}}</h1>
      <div class="images">
        <img :src="creator.avatarUrl" alt />
      </div>
      <div class="description">{{creator.nickname}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    creator: Object
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
<style lang="less" scoped>
.thumb {
  position: relative;
  height: 200px;
  overflow: hidden;
  img {
    vertical-align: middle;
    width: 100%;
    height: 100%;
    transform: scale(1.5);
    filter: blur(10px);
  }
  .icon {
    width: 120px;
    height: 120px;
    // border: 1px solid red;
    position: absolute;
    top: 40px;
    left: 20px;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
      filter: blur(0px);
      transform: scale(1);
    }
    span {
      position: absolute;
      left: 0;
      top: 0;
      text-align: right;
      width: 100%;
      padding: 3px 0;
      background-color: rgba(0, 0, 0, 0.2);
    }
    .font {
      position: absolute;
      top: 20px;
      left: 0;
      font-size: 9px;
      z-index: 3;
      height: 17px;
      width: 35px;
      color: white;
      text-align: center;
      line-height: 17px;
      background-color: rgba(217, 48, 48, 0.8);
      border-top-right-radius: 17px;
      border-bottom-right-radius: 17px;
    }
  }

  .name {
    position: absolute;
    top: 40px;
    right: 0px;
    color: white;
    width: 200px;
    line-height: 30px;
    h1 {
      font-size: 18px;
      font-family: "Courier New", Courier, monospace;
    }
    .description {
      width: 150px;
      margin-top: 20px;
      margin-left: 40px;
    }
    .images {
      position: absolute;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      bottom: 0px;
      left: 0;
      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        filter: blur(0px);
        transform: scale(1);
      }
    }
  }
}
</style>
