<template>
  <van-row type="flex" justify="space-around">
    <van-col span="6">
      <div class="iocn" @click="$router.push('/menuclassify')">
        <img src="http://css99tel.cdndm5.com/v201910292122/blue/images/mobile/index-menu-1.png" alt />
        <b>分类</b>
      </div>
    </van-col>
    <van-col span="6">
      <div class="iocn"  @click="$router.push('/homelist')">
        <img src="http://css99tel.cdndm5.com/v201910292122/blue/images/mobile/index-menu-2.png" alt />
        <b>热门</b>
      </div>
    </van-col>
    <van-col span="6">
      <div class="iocn"  @click="$router.push('/homenew')">
        <img src="http://css99tel.cdndm5.com/v201910292122/blue/images/mobile/index-menu-3.png" alt />
        <b>最新</b>
      </div>
    </van-col>
  </van-row>
</template>

<script>
export default {};
</script>

<style lang='less'>
.van-row {
  margin-top: 20px;
  .van-col {
    // text-align: center;
    // margin-left: 10px;
     width: 40px;
    .iocn {
      width: 40px;
      height: 40px;
      text-align: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>