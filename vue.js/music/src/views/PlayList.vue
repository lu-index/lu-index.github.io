<template>
  <div class="palylist">
    <div class="go-back fa fa-chevron-left" @click="$router.go(-1)"></div>
    <!-- {{$route.query.id}} -->
    <div class="img">
      <PlayListImg :item="playlist" :creator="playlist.creator" v-if="playlist" />
      <!-- <img :src="item.coverImgUrl" alt /> -->
    </div>
    <div v-if="playlist">
      <span class="titlelist">标签:</span>
      <span class="titletags" v-for="(tags, index) in playlist.tags" :key="index">{{tags}}</span>
    </div>

    <div class="description" v-if="playlist" :class="{active:isActive}">简介:{{playlist.description}}</div>
    <div class="but" @click="Btn">
      <template v-if="isActive">
        <div class="fa fa-chevron-down"></div>
      </template>
      <template v-else>
        <div class="fa fa-chevron-up"></div>
      </template>
    </div>
    <div class="listfont">歌曲列表</div>
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
import PlayListImg from "@/components/PlayListImg.vue";
export default {
  components: {
    SongListItem,
    PlayListImg
  },
  data: function() {
    return {
      //   playlistId: null,
      playlist: null,
      isActive: true
    };
  },
  methods: {
    Btn: function() {
      this.isActive = !this.isActive;
    },
    getPlayListDetail(id) {
      this.axios
        .get(
          "http://music.kele8.cn/playlist/detail",
          {
            params: {
              id: id
            }
          }
        )
        .then(reponse => {
          //   window.console.log(reponse.data);
          ({ playlist: this.playlist } = reponse.data);
        });
    }
  },
  created() {
    // window.console.log("创建");
    // this.getPersonalized();
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
};
</script>

<style lang='less' scoped>
.palylist {
  .go-back {
    cursor: pointer;
    position: absolute;
    left: 5px;
    top: 5px;
    z-index: 1;
    color: white;
  }
  ol {
    cursor: pointer;
  }
  .img {
    li {
      list-style: none;
    }
  }
  .listfont {
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    color: #666;
    background: #eeeff0;
    border: 1px solid #eeeff0;
    padding: 0px 10px;
    // margin-top: 20px
  }
  .titlelist {
    display: inline-block;
    color: gray;
    font-size: 16px;
    margin: 10px 15px;
  }
  .titletags {
    color: gray;
    font-size: 12px;
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid whitesmoke;
    border-radius: 15px;
  }
  .description {
    margin: 5px 15px 5px 15px;
    font-size: 16px;
    color: gray;
    :link {
      word-wrap: break-word;
      white-space: normal;
    }
    &.active {
      margin: 5px 15px 5px 15px;
      font-size: 16px;
      color: gray;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  .but {
    text-align: right;
    margin: 0px 15px 5px 0px;
    color: gray;
  }
}
</style>