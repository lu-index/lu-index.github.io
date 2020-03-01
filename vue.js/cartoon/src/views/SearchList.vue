<template>
  <div class="search-list">
     <h1 v-for="(item, index) in books" :key="index">{{item.title}}</h1> 
  </div>
</template>

<script>
import Vue from "vue";
export default {
  beforeRouteEnter(to, from, next) {
    Vue.axios
      .get("http://novel.kele8.cn/search", {
        params: {
          keyword: to.query.keyword
        }
      })
      .then(function(response) {
        next(vm => {
          vm.books = response.data.books;
          window.console.log(response);
        });
        
        
      });
    
  },
  data() {
    return {
      books: []
    };
  }
}
</script>

<style>

</style>