<template>
  <li>
    <i class="svg"></i>
    {{item.keyword}}
  </li>
</template>

<script>
export default {
  name: "SuggestItem",
  props: ["item"]
};
</script>

<style lang="less" scoped>
li {
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  line-height: 40px;
  // border-bottom: 1px solid #ebecec;
  .svg {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-image: url("../assets/search.svg");
    // position: absolute;
    // left: -20px;
    // top: 15px;
  }
}
</style>
