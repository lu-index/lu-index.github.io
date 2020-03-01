<template>
  <div class="player" :class="{paused: isPaused}" v-if="currentSongDetail">
    <audio :src="currentSongUrl" controls autoplay></audio>
    <div class="player-bar" @click="isShowFullscreenPlayer=true">
      <img :src="currentSongDetail.al.picUrl" alt />
      <span>
        <h3>{{currentSongDetail.name}}</h3>
        <p>{{currentSongDetail.ar[0].name}}</p>
      </span>

      <span class="progress" @click.stop="pausedAudio">
        <canvas width="36" height="36"></canvas>
        <template v-if="isPaused" @click="!isPaused">
          <div class="right fa fa-play"></div>
        </template>
        <template v-else>
          <div class="right fa fa-pause"></div>
        </template>
      </span>
      <span class="songlist fa fa-align-justify"></span>
    </div>
    <template v-if="isShowFullscreenPlayer">
      <!-- <div
        class="player-fullscreen"
        :style="{'background-image': `url(${currentSongDetail.al.picUrl})`}"
      ></div>-->
      <!-- <div class="player-fullscreen">{{currentSongDetail.al.picUrl}}</div> -->
      <div class="bg">
        <div class="songturn">
          <div class="songturn-m">
            <div class="songturn-img">
              <img :src="currentSongDetail.al.picUrl" alt />
            </div>
          </div>
          <div class="stop" @click.stop="pausedAudio">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAABJlBMVEUAAAAAAAD////l5eX///9iYmKDg4Pn5+f///9YWFj////09PT////4+Pjt7e3///////9oaGhBQUH////////////////CwsIaGhr///8xMTEkJCT////7+/vp6en///////////////+srKyoqKienp58fHz////y8vKTk5P///8EBAT////////////////V1dW3t7f////////////////////v7++jo6N9fX3///////+UlJT////s7Oz////Nzc3///////+RkZGPj495eXkTExP////////29vb////k5OTPz882Njb////////////c3Nz///////9ycnJsbGz///9dXV3////////Q0ND///9QUFD///////////////////9FeiN6AAAAYXRSTlNmAP3c+oWT3ueB9vA19ealRId5EQbuurpu83RxD/nh05dfAquooo+M7JtzaSolE+vMspJ3Wj7w6KSQj6ucKeXNxLWnmpmObVYd8t3axXZRSt7TvbKLideCeSzHnn4V3Nh6YarbPAAABlRJREFUeNrU14lWEmEYh/GXcdj3HQTZRCkS913UNE2zbLd9Oc/930Q2LmVpwPAC03MD/M5835n/IC6dkqHnzcVoZvdkLp2HfHruZDcTXWw+DyVdOilAt6uNjI8782Ua1W2XjTShtdDSmzRdlH6zFKq5bKQBTS5H57gqXJrP1tsb7kShkBPJFQoJ90a7np0vhblqLrrc8R7oQ4vVPZOLIp8mp8flzsanJ59FuMjcqxZdHVKFxvYDWK1lPQXpooInu4ZVYD/m6pAWNLn0DSvvekJ6KLHuxerb0qyrQwrQViV/oZzKSc/lpi6sgUrLdSN16MyWARBcOBWbnS4EAYytj67r1KGtqMUseaSvPCWLGr14u+pDZysmwFhc+i4+BmBWZgcATTXTFvO9qOS3qOlmShu68g7A6xa13F6A7yuq0ORnA9jZENU2dgDjc1IPGvMB4QNR7+AJ4IspQVObBjDmF+Wur6qxmdKAbpeBoEcGlCcIlLf7hx7lOzxOlYeaP+oTmmoYQFsGWhswGql+oMUMEInLgItHgEzRPvS43OHYVY+/fGwXGvIBkzKU6oAvZA8aywOPZEg9AvIxO9AXAZg4lKF1OAGBF71DX5jw5EyG2NkTMJ/3Co2ZcM8tQ819D8xYb9CVgA2nijSw0gs0tArBzk59aRBWQ91Dj30QjssIiofBd9wttFiGiTMZSWcTUC52B629Bg5lRB0Cr2tdQRvAfRlZ94FGN9AjA+oywupgHHWGzuRhTEbaGORnOkFTZYj4ZaT5I1BOdYBuAnEZcXFg89/QmAFtGXltMGL/ghZ9I7+g19fUV/wHtAJBvzggfxAqd0NXDPCII/KAsXIXNPXOIQd/efjvUndAmxB2xMH/zB+G5u3Qr2k4EMd0AOmvt0IrsCMOagcqt0FbJkyLg5oGs3ULNApecVReiP4NnTHALY7KDcbHv6BbDno1XTUGW39CWwa8F4flB6P1B3TRgQ/UeqSLN6GzAQd83f1dHAKzN6AfoCQOrARLN6Andr9GpiITT9/KwPLAye/QGATFTusAxsOCDKogxH6D7sOC2GkNq+B9GVALsP8LWgzAqdjJ4LJXCRlIpxAoXkOrtteT6yYmH8gg8kL1GroHU/1CoTSQBZ6CvSto0oRc/1DM7GNRLwdm8hK6DF5RgMI9j6jnheVLaBTWdaAwPy7KrUP0Alqbg4QWlPCU6JaAuZoFDcGaqEHh6RdRLQIhC/oBsppQzAXVN1UWlixoBjyqUIhozr8H3vyE1lYhpwnVnv8CpH9CZyAi2lAIPtK8pDPn0Cp8UoWqz/8zqJ5DGzCpCdWf/0lonEMzMK0J1Z//acicQ30wrgnVn/9x8LkkCWFRherPfxiSEgKvLlR//r0QkmWY14Xqz/88LEsTsqpQ/fm3RlQWoa4L1Z//OixKFNq6UP35vw9RycDGMKAYD3P9vEhlF9y6UP35d8OuvISELlR//hPwUqxh0oTqz781TbIKueFB4em4rb/Mq5IfMpRn0nOPIS+ADBUatvcz/w/0B/X2VgMACMNQ9AMnWOADKwT/QuahyZYcDcte7e146X9W+vFmWmEzOeOJGfjMCmWOEubMYw7no7wizHPHvMuMAMFIOo5IxsiOjJDLSOOM2cDYN44hxliMjGnL2OAOWMCgGgz84uBEDKDFIG8ORLhzLPO2Y5kK6PpMdJiBsR28nQkMOBEMJtTixISY4JUTZWPCgVXevesgCINhGG7dZPLEIg7GRRsMTsaoMTEOnmLUuBgn+e//JuTHGt0aKT3y3QIFpj6vO9ctnbnAmr9PIysefn0E0PfhkjW92HFtnQHULn5AAG9aISZGF3NaQYxVrInRrcVYBW4H5vkPEPIfuIV5UGXhClHT8Qv9oXQ/MckoTfb+wVTGqK8ZUl9+4mmUnpGj03pOmzlH5y/w5w6ZiAil+G9qA0KpkfWMTxKsJ6530wel3try9CwjSscg27BTDcw321gHjzyuEjj9IbwP1hPeDqHo2abP0pn5XMR/NhTB/fyo2gv3q0gh1JSkEHCrUuMSG1VxCdxDOtfR1ZDr4AGUwIUACi5JJZMyx1RHUgY3kIn0LBuFQk2EFlv7J3t0+id7JPi86wlJsfm9FUVbQrZR1LrPmQ0hKZfSXC7Fzr5LeD7uGoYBQBCGV56PS2g5ewGy+NkUNbjr9gAAAABJRU5ErkJggg=="
              alt
            />
          </div>
        </div>
        <img :src="currentSongDetail.al.picUrl" alt />
        <div class="compress fa fa-compress" @click="isShowFullscreenPlayer=false"></div>
      </div>
    </template>
  </div>
</template>


<script>
export default {
  props: ["currentSongId"],
  data() {
    return {
      currentSongDetail: null,
      isPaused: false,
      isShowFullscreenPlayer: false,
      currentTime: 0,
      animateId: null
    };
  },
  computed: {
    currentSongUrl() {
      return (
        "https://music.163.com/song/media/outer/url?id=" +
        this.currentSongId +
        ".mp3"
      );
    }
  },
  methods: {
    getSongDetail() {
      this.axios
        .get("http://music.kele8.cn/song/detail", {
          params: {
            ids: this.currentSongId
          }
        })
        .then(response => {
          window.console.log(response);
          this.currentSongDetail = response.data.songs[0];
        });
    },
    pausedAudio() {
      let audio = this.$el.querySelector("audio");

      if (this.isPaused) {
        audio.play();
      } else {
        audio.pause();
      }
      this.isPaused = audio.paused;
    },
    drawCircleProgress() {
      let audio = this.$el.querySelector("audio");

      let canvas = this.$el.querySelector("canvas");
      let ctx = canvas.getContext("2d");

      let id = window.setInterval(() => {
        // window.console.log("dd");
        this.currentTime = audio.currentTime * 1000;

        ctx.clearRect(0, 0, 36, 36);

        ctx.beginPath();
        ctx.arc(18, 18, 17, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.strokeStyle = "#ccc";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(
          18,
          18,
          17,
          -0.5 * Math.PI,
          2 * Math.PI * (this.currentTime / this.currentSongDetail.dt) -
            0.5 * Math.PI
        );
        ctx.strokeStyle = "red";
        ctx.stroke();
      }, 1000);
      return id;
    }
  },
  created() {
    // 第一次进来就拿数据
    this.getSongDetail();
  },
  watch: {
    currentSongId: function() {
      // 每次id变化也拿数据
      this.getSongDetail();
    },
    isPaused() {
      if (this.isPaused) {
        window.clearInterval(this.animateId);
      } else {
        window.clearInterval(this.animateId);
        this.animateId = this.drawCircleProgress();
      }
    },
    currentSongDetail() {
      // 第一次进入 后面每次更新
      this.$nextTick(function() {
        window.clearInterval(this.animateId);
        this.animateId = this.drawCircleProgress();
      });
    }
  },
  updated() {}
};
</script>

<style lang="less" scoped>
.player {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  //   height: 60px;
  audio {
    // height: 60px;
  }
  .player-bar {
    display: flex;
    border-top: 1px solid #e9e6e6;
    background: rgba(255, 255, 255, 1);
    padding: 6px 10px;
    // position: absolute;
    // left: 0;
    // bottom: 0;
    // line-height: 10px;

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      animation: myrolling 5s linear infinite;
    }
    @keyframes myrolling {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
    span {
      // flex: 1;
      margin-left: 10px;
      h3 {
        // margin: 0 10px;
        // line-height: 20px;
        font-size: 14px;
        text-align: left;
      }
      p {
        // width: 50px;
        font-size: 12px;
        text-align: left;
        color: rgba(0, 0, 0, 0.3);
      }
    }
    .progress {
      position: absolute;
      top: 26px;
      right: 35px;
      width: 36px;
      height: 36px;
      // text-align: center;
      .right {
        color: rgba(0, 0, 0, 0.3);
        line-height: 30px;
        font-size: 16px;
        width: 100%;
        height: 100%;
        position: absolute;
        left: -10px;
        top: 0px;
        text-align: end;
        line-height: 36px;
        // .fa-play {
        //    position: absolute;
        // left: 11px;
        // top: 2px;
        // // text-align: center;
        // }
      }
    }
    .songlist {
      position: absolute;
      top: 32px;
      right: 5px;
      font-size: 24px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
  &.paused {
    .player-bar {
      img {
        animation-play-state: paused;
      }
    }
  }

  .player-fullscreen {
    width: 100vw;
    height: 100vh;
    vertical-align: middle;
    background-size: 200%;
    background-position: center;
    // transform: scale(1.5)
    // position: absolute;
    // left: 0;
    // top:0 ;
    //  filter: blur(5px);
    z-index: -1;
    transform: scale(1.2);
  }
  .bg {
    // position: absolute;
    // left: 0;
    // top: 0;
    width: 100vw;
    height: 100vh;
    transform: scale(1.5);
    // transition: all 0.5s;
    // background: rgba(0, 0, 0, 0.5);
    // opacity: 0.3;
    .compress {
      width: 25px;
      height: 30px;
      position: absolute;
      right: 55px;
      top: 110px;
      z-index: 5;
      font-size: 16px;
      color: white;
    }
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      filter: blur(10px);
    }
    .songturn {
      width: 180px;
      height: 180px;
      // border: 1px solid red;
      position: absolute;
      top: 160px;
      left: 90px;
      z-index: 9;
      .songturn-m {
        width: 100%;
        height: 100%;
        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          background: url("../assets/disc.png");
          background-size: 100%;
          background-repeat: no-repeat;
          position: absolute;
          top: 0px;
          left: 0px;
          // animation: myrolling 8s linear infinite;
        }
      }
      .songturn-img {
        width: 110px;
        height: 110px;
        position: absolute;
        left: 35px;
        top: 35px;
        border-radius: 50%;
        animation: myrolling 8s linear infinite;
        // border: 1px solid red;
        &.paused {
          .player-bar {
            img {
              animation-play-state: paused;
            }
          }
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          filter: blur(0px);
        }
      }
      &::before {
        content: "";
        display: block;
        width: 80px;
        height: 120px;
        background: url("../assets/needle.png");
        background-size: 80%;
        background-repeat: no-repeat;
        position: absolute;
        top: -55px;
        left: 60px;
        z-index: 1;
      }
      .stop {
        width: 56px;
        height: 56px;
        z-index: 5;
        position: absolute;
        left: 60px;
        top: 60px;
        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          filter: blur(0px);
        }
      }
    }
  }
}
</style>