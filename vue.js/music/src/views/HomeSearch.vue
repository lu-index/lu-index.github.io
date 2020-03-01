<template>
  <div id="app">
    <div class="search">
      <i class="svg"></i>
      <!-- <SearchInput @translate-search-text="translateText($event)" /> -->
      <!-- <hr /> -->
      <input
        type="text"
        v-model.trim="inputText"
        @keyup.enter="getSearchMultimatch(); getSearchSongs()"
        @xxx="songSeach()"
        placeholder="搜索歌曲、歌手、专辑"
      />
      <button @click="inputText=null" class="reset"></button>
      <template v-if="inputText && !searchMultimatch">
        <ul>
          <!-- <SuggestItem v-for="(item, index) in suggests.allMatch" :key="index" :item="item" /> -->
          <div class="fontsearch">搜索:"{{inputText}}"</div>
          <li v-for="(item, index) in suggests" :key="index">
            <i class="svg"></i>
            {{item.keyword}}
          </li>
        </ul>
      </template>
    </div>
    <template v-if="!inputText">
      <div class="SearchHots">
        <div class="hottitle">热门搜索</div>
        <ul class="list">
          <li v-for="(item, index) in SearchHots" :key="index">{{item.first}}</li>
        </ul>
      </div>
    </template>
    <template v-if="inputText">
      <div class="multimatch" v-if="searchMultimatch">
        <template v-if="searchMultimatch.artist">
          <div
            class="artist"
            v-for="(item) in searchMultimatch.artist"
            :key="item.id"
            @click="$router.push('/artist?id='+item.id)"
          >
            <img :src="item.picUrl" alt />
            <h5>
              歌手:
              <span>{{item.name}}</span>
            </h5>
            <span>></span>
          </div>
        </template>
        <template v-if="searchMultimatch.mv">
          <div class="mv" v-for="(item) in searchMultimatch.mv" :key="item.id">
            <img :src="item.cover" alt />
            <h5>
              <p>MV: {{item.name}}</p>
              <p>{{item.artistName}}</p>
            </h5>
            <span>></span>
          </div>
        </template>
      </div>
      <ul v-if="searchSongs">
        <SongListItem
          v-for="(item) in searchSongs"
          :key="item.id"
          :songItem="item"
          @translate-currentid="$emit('translate-currentid', $event)"
        ></SongListItem>
      </ul>
    </template>

    <template v-if="loading">
      <div class="loader loader--style8" title="7">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="24px"
          height="30px"
          viewBox="0 0 24 30"
          style="enable-background:new 0 0 50 50;"
          xml:space="preserve"
        >
          <rect x="0" y="10" width="4" height="10" fill="#d43c33" opacity="0.2">
            <animate
              attributeName="opacity"
              attributeType="XML"
              values="0.2; 1; .2"
              begin="0s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="height"
              attributeType="XML"
              values="10; 20; 10"
              begin="0s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              values="10; 5; 10"
              begin="0s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="8" y="10" width="4" height="10" fill="#d43c33" opacity="0.2">
            <animate
              attributeName="opacity"
              attributeType="XML"
              values="0.2; 1; .2"
              begin="0.15s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="height"
              attributeType="XML"
              values="10; 20; 10"
              begin="0.15s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              values="10; 5; 10"
              begin="0.15s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="16" y="10" width="4" height="10" fill="#d43c33" opacity="0.2">
            <animate
              attributeName="opacity"
              attributeType="XML"
              values="0.2; 1; .2"
              begin="0.3s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="height"
              attributeType="XML"
              values="10; 20; 10"
              begin="0.3s"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              attributeType="XML"
              values="10; 5; 10"
              begin="0.3s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
    </template>
  </div>
</template>

<script>
// import SearchInput from "@/components/SearchInput.vue";
// import SuggestItem from "@/components/SuggestItem.vue";
import SongListItem from "@/components/SongListItem.vue";
export default {
  name: "app",
  components: {
    // SearchInput,
    // SuggestItem
    SongListItem
  },
  data() {
    return {
      // translatedSearchText: null,
      suggests: [],
      SearchHots: [],
      inputText: null,
      searchMultimatch: null,
      searchSongs: [],
      loading: false,
    };
  },
  methods: {
    getHotSearch() {
      this.axios.get("http://music.kele8.cn/search/hot").then(response => {
        ({ hots: this.SearchHots } = response.data.result);
      });
    },
    getSearchSuggest() {
      this.loading = true;
      this.axios
        .get("http://music.kele8.cn/search/suggest", {
          params: {
            keywords: this.inputText,
            type: "mobile"
          }
        })
        .then(response => {
          // window.console.log(response);

          ({ allMatch: this.suggests } = response.data.result);
          this.loading = false;
        });
    },
    getSearchMultimatch() {
      this.loading = true;
      this.axios
        .get("http://music.kele8.cn/search/multimatch", {
          params: {
            keywords: this.inputText,
            type: "mobile"
          }
        })
        .then(response => {
          ({ result: this.searchMultimatch } = response.data);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getSearchSongs() {
      this.loading = true;
      // this.searchSongs = [];
      this.axios
        .get("http://music.kele8.cn/search", {
          params: {
            keywords: this.inputText,
            limit: 10,
            offset: 0
          }
        })
        .then(response => {
          ({ songs: this.searchSongs } = response.data.result);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    songSeach() {
     
    }
  },
  watch: {
    inputText(newValue) {
      // this.getHot();
      // this.getSearchSuggest();
      if (newValue) {
        this.getSearchSuggest();
      }
    }
    // searchSongs(){
    //   // this.searchSongs=[];
    //   // this.getSearchSongs()
    // }
  },
  created() {
    // 组件创建完成 拿数据
    // this.getPersonalized();
    // this.getHot();
    this.getHotSearch();
  }
};
</script>

<style lang='less' scoped>
#app {
  padding: 15px 10px;

  .search {
    position: relative;
    width: 100%;
    height: 30px;
    padding: 0 30px;
    // box-sizing: border-box;
    background: #ebecec;
    border-radius: 30px;
    border-bottom: 1px solid #ebecec;
    input {
      // border-radius: 10px;
      outline: none;
      width: 100%;
      height: 30px;
      border: 0;
      background: #ebecec;
    }
    .reset {
      width: 14px;
      height: 14px;
      position: absolute;
      top: 8px;
      right: 10px;
      border: none;
      outline: none;
      background: url("../assets/删除.svg");
    }
    ul {
      .fontsearch {
        color: #507daf;
        border-top: 1px solid #f8f6f6;
        border-bottom: 1px solid #f8f6f6;
        line-height: 50px;
      }
      li {
        width: 90%;
        margin: 0;
        padding: 0;
        position: relative;
        line-height: 50px;
        left: 20px;
        border-bottom: 1px solid #f8f6f6;
        i.svg {
          display: inline-block;
          width: 15px;
          height: 15px;
          background-image: url("../assets/search.svg");
          position: absolute;
          left: -20px;
          top: 15px;
        }
      }
    }

    .svg {
      display: inline-block;
      width: 13px;
      height: 13px;
      background-image: url("../assets/search.svg");
      position: absolute;
      left: 8px;
      top: 9px;
    }
    ul {
      width: 100%;
      list-style: none;
      position: absolute;
      left: 0px;
      top: 50px;
      margin: 0;
      padding: 0;
    }
  }
  .SearchHots {
    padding: 10px 5px 0;
    border-top: 1px solid whitesmoke;
    margin-top: 20px;
    .hottitle {
      font-size: 12px;
      line-height: 12px;
      color: #666;
    }
    ul.list {
      margin: 10px 0 0px;
      padding: 0;
      li {
        display: inline-block;
        height: 32px;
        margin-right: 8px;
        margin-bottom: 8px;
        padding: 0 12px;
        font-size: 14px;
        line-height: 32px;
        color: #333;
        border: 1px solid whitesmoke;
        border-radius: 32px;
        box-sizing: none;
      }
    }
  }
  .multimatch {
    .artist {
      display: flex;
      line-height: 80px;
      border-top: 1px solid #f8f6f6;
      border-bottom: 1px solid #f8f6f6;
      margin-top: 20px;
      img {
        width: 55px;
        height: 55px;
        margin-top: 15px;
        margin-right: 10px;
      }
      h5 {
        flex: 1;
        span {
          color: #507daf;
        }
      }
      span {
        width: 20px;
      }
    }

    .mv {
      display: flex;
      line-height: 50px;
      img {
        width: 90px;
        height: 50px;
      }
      h5 {
        flex: 1;
        p {
          &:first-child {
            line-height: 30px;
          }
          &:last-child {
            line-height: 20px;
          }
        }
      }
      span {
        width: 20px;
      }
    }
  }
  .loader {
    position: absolute;
    left: 50%;
    top: 70%;
  }
}
</style>