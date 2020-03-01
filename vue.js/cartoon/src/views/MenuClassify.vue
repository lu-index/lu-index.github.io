<template>
  <div class="classify">
    <LookTitle>分类</LookTitle>
    <ul>
      <li>全部</li>
      <li>全部</li>
      <li>全部</li>
      <li>全部</li>
      <li>全部</li>
      <li>全部</li>
      <li>全部</li>
      <li>全部</li>
      <li>全部</li>
      <li>全部</li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import LookTitle from "@/components/LookTitle.vue";
export default {
      components:{
        LookTitle
    },
  data() {
    return {
      active: 2
    };
  }
};
</script>

<style lang='less'>
.classify {
  // .toplcassify{
  //  text-align: center;
  //   background: white;
  //   line-height: 50px;
  //   font-size: 20px;
  //   position: fixed;
  //   width: 100%;
  //   height: 50px;
  //   box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.3);
  //   span{
  //     display: block;
  //     float: left;
  //   }
  //   p {
  //     margin: 0;
  //   }
  // }
  .van-tabs {
    border: none;
    .van-tab {
      text-align: center;
    }
  }
  ul {
    padding-top: 50px;
    li {
      display: inline-block;
      padding: 0 20px;
      line-height: 30px;
    }
  }
}
</style>