<template>
   <div id="app">
    <keep-alive>
      <router-view @translate-currentid="currentSongId=$event.songId; showFullscreen=$event.showFullscreen" @click.stop="pausedAudio;setCurrentSongId" />
    </keep-alive>

    <Player v-if="currentSongId" :current-song-id="currentSongId" :show-fullscreen="showFullscreen"></Player>
  </div>
</template>

<script>
import Player from "@/views/Player.vue";
export default {
  components: {
    Player
  },
  data() {
    return {
      currentSongId: null
    };
  }
};
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
} 

a {
  color: #2c3e50;
  text-decoration: none;
}
// audio {
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 60px;
//   // z-index: 1;
// }

</style>
