<template>
  <form>
    <input type="text" v-model.trim="inputText" placeholder="搜索歌曲、歌手、专辑" />
  </form>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      inputText: null
    };
  },
  watch: {
    inputText: function(value) {
      this.$emit("translate-search-text", value);
    }
  }
};
</script>

<style lang="less">
form {
//   padding: 15px 10px;
  input {
    // border-radius: 10px;
    outline: none;
    width: 100%;
    height: 30px;
    border: 0;
    background: #ebecec;
  }
}
</style>