<template>
  <div class="home-nav">
    <van-nav-bar left-arrow>
      <van-image
        width="100"
        height="25"
        src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/icon.b72a7a04.png"
        slot="left"
      />
      <van-icon name="search" slot="right" @click="$router.push('/homesearch')" />
      <van-icon name="user-circle-o" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less">
.home-nav {
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 1;
  .van-nav-bar {
    .van-image {
      top: 8px;
    }

    .button-group {
      width: 200px;
      margin: 0 auto;
      display: flex;
      line-height: 24px;
      margin-left: 20px;
      button {
        flex: 1;
        height: 47px;
        border: none;
        outline: none;
        background: transparent;
        color: black;
        font-size: 14px;
      }
    }
    .van-icon {
      color: rgb(77, 74, 74);
      font-size: 28px;
      margin: 0 5px;
      font-weight: 600;
    }
  }
}
</style>