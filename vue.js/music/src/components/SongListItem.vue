<template>
  <li class="songlist">
    <div class="left" v-if="index !== undefined">{{index+1}}</div>
    <dl class="center">
      <dt>{{songItem.name}}</dt>
      <dd v-if="songItem.song">
        <span v-if="(songItem.song.hMusic) && isShowQuality">
          <div class="img"></div>
        </span>
        {{songItem.song.artists[0].name}}-{{songItem.song.album.name}}
      </dd>
      <dd v-else-if="songItem.h">
        <span v-if="(songItem.h)">
          <div class="img"></div>
        </span>
        {{songItem.ar[0].name}}-{{songItem.al.name}}
      </dd>

       <dd v-if="songItem.artists">{{songItem.artists[0].name}}-{{songItem.album.name}}</dd>
    </dl>
    <div id="but" @click.stop="setCurrentSongId(songItem.id)">
      <template v-if="butActive">
        <div class="right play fa fa-play-circle-o"></div>
      </template>
      <template v-else>
        <div class="right pause fa fa-pause-circle-o"></div>
      </template>
    </div>
  </li>
</template>

<script>
export default {
  props: ["songItem", "isShowQuality", "index"],
  methods: {
    setCurrentSongId(id) {
      this.$emit("translate-currentid", {
        songId: id,
        showFullscreen: window.location.hash.match("search") ? true : false
      });
      this.butActive = !this.butActive;
    }
    // but: function() {
    //   this.butActive = !this.butActive;
    // }
  },
  data() {
    return {
      butActive: true
    };
  }
};
</script>

<style lang='less' scoped>
li.songlist {
  display: flex;
  border-bottom: 1px solid #f8f6f6;
  position: relative;
  // width: 360px;
  dl.center {
    flex: 1;
    dt {
      line-height: 30px;
      font-size: 17px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      width: 300px;
    }
    dd {
      line-height: 20px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.3);
      display: -webkit-box;
      font-size: 12px;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      width: 300px;
      span {
        // border: 1px solid rgb(255, 136, 0);
        width: 18px;
        height: 15px;
        display: inline-block;
        position: relative;
        top: 2px;
        overflow: hidden;
        .img {
          width: 100px;
          height: 100px;
          position: absolute;
          left: 0px;
          top: 4px;
          background: url("../assets/index_icon_2x.png");
          background-size: 200%;
          background-position: 0px 0px;
        }
      }
    }
  }
  .left {
    color: gray;
    width: 30px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  // .left,
  // .right {
  //   width: 30px;
  //   height: 50px;
  //   line-height: 50px;
  //   text-align: center;
  // }
  .right {
    color: rgba(0, 0, 0, 0.3);
    line-height: 30px;
    font-size: 22px;
    position: absolute;
    right: 10px;
    top: 15px;
  }
  &:nth-child(1) {
    .left {
      color: #df3436;
    }
  }
    &:nth-child(2) {
    .left {
      color: #df3436;
    }
  }
    &:nth-child(3) {
    .left {
     color: #df3436;
    }
  }
}
</style>