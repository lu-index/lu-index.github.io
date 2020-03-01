<template>
  <div class="looktitle">
    <div class="title">
      <span @click="$router.go(-1)">《</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.looktitle {
  .title {
    text-align: center;
    background: white;
    line-height: 50px;
    font-size: 20px;
    position: fixed;
    width: 100%;
    height: 50px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
     color: rgb(184, 178, 178);
    span {
      display: block;
      float: left;
    }
    p {
      margin: 0;
     
    }
  }
}
</style>