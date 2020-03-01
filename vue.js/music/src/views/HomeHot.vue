<template>
  <div class="hot">
    <div class="imga">
      <img src="../assets/hot_music_bg_3x.jpg" alt="">
      <div class="icon"></div>
      <div class="time">更新日期:<span>12月26日</span></div>
      </div>
     <ol class="songlist">
      <template v-if="playlist">
        <SongListItem
          v-for="(item, index) in playlist.tracks"
          :key="index"
          :song-item="item"
          :is-show-quality="false"
          :index="index"
          @translate-currentid="$emit('translate-currentid',$event)"
        />
      </template>
    </ol>
  </div>
</template>

<script>
import SongListItem from "@/components/SongListItem.vue";
export default {
  components: {
    SongListItem
  },
  data: function() {
    return {
      //   playlistId: null,
      playlist: null
    };
  },
  methods: {
    getPlayListDetail(id) {
      this.axios
        .get("http://music.kele8.cn/top/list?idx=1", {
          params: {
            id: id
          }
        })
        .then(reponse => {
          //   window.console.log(reponse.data);
          ({ playlist: this.playlist } = reponse.data);
        });
    }
  },
  created() {
    window.console.log("创建");
  },
  //   watch: {
  //       $route: function () {
  //           window.console.log(this.$route);
  //       }
  //   },

  beforeRouteEnter(to, from, next) {
    // window.console.log(to);
    // 路由进入 当前组件实例化之前就 拿数据
    // beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用,因此即将登场的新组件还没被创建
    next(vm => {
      vm.getPlayListDetail(to.query.id);
    });
  }
}
</script>

<style lang='less' scoped>
.hot{
  .imga{
    position: relative;
    img{
      width: 100%;
    }
    .icon{
        width: 120px;
        height: 60px;
        position: absolute;
        left: 20px;
        top: 30px;
        overflow: hidden;
        // border: 1px solid red;
        background:url('../assets/index_icon_2x.png');
        background-size: 121%;
        background-position: -23px -25px;
    }
    .time{
       position: absolute;
        left: 20px;
        top: 100px;
        font-size: 10px;
        color: white;
        letter-spacing: 1px;
        span{
          margin-left: 5px;
        }
    }
  }
}
</style>