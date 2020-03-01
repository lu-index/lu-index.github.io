<template>
  <h3 class="title">
   <slot></slot>
  </h3>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .title {
  line-height: 20px;
  font-size: 18px;
  font-weight: normal;
  margin: 25px 0 15px 0;
  padding-left: 10px;
  border-left: 2px solid #d43c33;
}
</style>
