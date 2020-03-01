<template>
  <div class="recommend">
    <HomeTitle>推荐歌单</HomeTitle>
    <ul class="list">
      <SongListCard v-for="(item, index) in personalized" :key="index" :item="item" />
    </ul>
    <HomeTitle>最新音乐</HomeTitle>
    <ol>
      <SongListItem
        v-for="(item, index) in newsong"
        :key="index"
        :song-item="item"
        :is-show-quality="true"
        @translate-currentid="$emit('translate-currentid', $event)"
      />
    </ol>
  </div>
</template>

<script>
import HomeTitle from "@/components/HomeTitle.vue";
import SongListCard from "@/components/SongListCard.vue";
import SongListItem from "@/components/SongListItem.vue";

export default {
  name: "HomeRecommend",
  components: {
    HomeTitle,
    SongListCard,
    SongListItem
  },
  data: function() {
    return {
      personalized: [],
      newsong: []
    };
  },
  methods: {
    getPersonalized() {
      this.axios
        .get("http://music.kele8.cn/personalized?limit=6")
        .then(response => {
          ({ result: this.personalized } = response.data);
        });
    },
    getNewsong() {
      this.axios
        .get("http://music.kele8.cn/personalized/newsong")
        .then(response => {
          ({ result: this.newsong } = response.data);
          //   window.console.log(response)
        });
    }
  },
  created() {
    // 组件创建完成 拿数据
    this.getPersonalized();
    this.getNewsong();
  }
};
</script>

<style lang="less" scoped>
ul.list {
  display: flex;
  flex-wrap: wrap;
  li.card {
    flex: 1 0 32%;
    &:nth-child(3n + 2) {
      margin: 0 2px;
    }
  }
}
ol{
  padding-left: 10px;
   margin-bottom: 50px;
}
</style>