(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},s={app:0},r=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"15c80953"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"00ab75bd"}[t]+".css",s=c.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var u=r[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===s)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[t],h.parentNode.removeChild(h),n(r)},h.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){i[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}s[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var h=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"16a2":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"songlist"},[void 0!==t.index?n("div",{staticClass:"left"},[t._v(t._s(t.index+1))]):t._e(),n("dl",{staticClass:"center"},[n("dt",[t._v(t._s(t.songItem.name))]),t.songItem.song?n("dd",[t.songItem.song.hMusic&&t.isShowQuality?n("span",[n("div",{staticClass:"img"})]):t._e(),t._v(" "+t._s(t.songItem.song.artists[0].name)+"-"+t._s(t.songItem.song.album.name)+" ")]):t.songItem.h?n("dd",[t.songItem.h?n("span",[n("div",{staticClass:"img"})]):t._e(),t._v(" "+t._s(t.songItem.ar[0].name)+"-"+t._s(t.songItem.al.name)+" ")]):t._e(),t.songItem.artists?n("dd",[t._v(t._s(t.songItem.artists[0].name)+"-"+t._s(t.songItem.album.name))]):t._e()]),n("div",{attrs:{id:"but"},on:{click:function(e){return e.stopPropagation(),t.setCurrentSongId(t.songItem.id)}}},[t.butActive?[n("div",{staticClass:"right play fa fa-play-circle-o"})]:[n("div",{staticClass:"right pause fa fa-pause-circle-o"})]],2)])},i=[],s=(n("ac1f"),n("466d"),{props:["songItem","isShowQuality","index"],methods:{setCurrentSongId:function(t){this.$emit("translate-currentid",{songId:t,showFullscreen:!!window.location.hash.match("search")}),this.butActive=!this.butActive}},data:function(){return{butActive:!0}}}),r=s,o=(n("e673"),n("2877")),c=Object(o["a"])(r,a,i,!1,null,"53953dff",null);e["a"]=c.exports},2395:function(t,e,n){},"3c02":function(t,e,n){"use strict";var a=n("9891"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=(n("d3b7"),n("bc3a")),r=n.n(i),o={},c=r.a.create(o);c.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=c,window.axios=c,Object.defineProperties(t.prototype,{axios:{get:function(){return c}},$axios:{get:function(){return c}}})},a["a"].use(Plugin);Plugin;var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view",{on:{"translate-currentid":function(e){t.currentSongId=e.songId,t.showFullscreen=e.showFullscreen},click:function(e){e.stopPropagation(),t.pausedAudio,t.setCurrentSongId}}})],1),t.currentSongId?n("Player",{attrs:{"current-song-id":t.currentSongId,"show-fullscreen":t.showFullscreen}}):t._e()],1)},l=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.currentSongDetail?n("div",{staticClass:"player",class:{paused:t.isPaused}},[n("audio",{attrs:{src:t.currentSongUrl,controls:"",autoplay:""}}),n("div",{staticClass:"player-bar",on:{click:function(e){t.isShowFullscreenPlayer=!0}}},[n("img",{attrs:{src:t.currentSongDetail.al.picUrl,alt:""}}),n("span",[n("h3",[t._v(t._s(t.currentSongDetail.name))]),n("p",[t._v(t._s(t.currentSongDetail.ar[0].name))])]),n("span",{staticClass:"progress",on:{click:function(e){return e.stopPropagation(),t.pausedAudio(e)}}},[n("canvas",{attrs:{width:"36",height:"36"}}),t.isPaused?[n("div",{staticClass:"right fa fa-play"})]:[n("div",{staticClass:"right fa fa-pause"})]],2),n("span",{staticClass:"songlist fa fa-align-justify"})]),t.isShowFullscreenPlayer?[n("div",{staticClass:"bg"},[n("div",{staticClass:"songturn"},[n("div",{staticClass:"songturn-m"},[n("div",{staticClass:"songturn-img"},[n("img",{attrs:{src:t.currentSongDetail.al.picUrl,alt:""}})])]),n("div",{staticClass:"stop",on:{click:function(e){return e.stopPropagation(),t.pausedAudio(e)}}},[n("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAABJlBMVEUAAAAAAAD////l5eX///9iYmKDg4Pn5+f///9YWFj////09PT////4+Pjt7e3///////9oaGhBQUH////////////////CwsIaGhr///8xMTEkJCT////7+/vp6en///////////////+srKyoqKienp58fHz////y8vKTk5P///8EBAT////////////////V1dW3t7f////////////////////v7++jo6N9fX3///////+UlJT////s7Oz////Nzc3///////+RkZGPj495eXkTExP////////29vb////k5OTPz882Njb////////////c3Nz///////9ycnJsbGz///9dXV3////////Q0ND///9QUFD///////////////////9FeiN6AAAAYXRSTlNmAP3c+oWT3ueB9vA19ealRId5EQbuurpu83RxD/nh05dfAquooo+M7JtzaSolE+vMspJ3Wj7w6KSQj6ucKeXNxLWnmpmObVYd8t3axXZRSt7TvbKLideCeSzHnn4V3Nh6YarbPAAABlRJREFUeNrU14lWEmEYh/GXcdj3HQTZRCkS913UNE2zbLd9Oc/930Q2LmVpwPAC03MD/M5835n/IC6dkqHnzcVoZvdkLp2HfHruZDcTXWw+DyVdOilAt6uNjI8782Ua1W2XjTShtdDSmzRdlH6zFKq5bKQBTS5H57gqXJrP1tsb7kShkBPJFQoJ90a7np0vhblqLrrc8R7oQ4vVPZOLIp8mp8flzsanJ59FuMjcqxZdHVKFxvYDWK1lPQXpooInu4ZVYD/m6pAWNLn0DSvvekJ6KLHuxerb0qyrQwrQViV/oZzKSc/lpi6sgUrLdSN16MyWARBcOBWbnS4EAYytj67r1KGtqMUseaSvPCWLGr14u+pDZysmwFhc+i4+BmBWZgcATTXTFvO9qOS3qOlmShu68g7A6xa13F6A7yuq0ORnA9jZENU2dgDjc1IPGvMB4QNR7+AJ4IspQVObBjDmF+Wur6qxmdKAbpeBoEcGlCcIlLf7hx7lOzxOlYeaP+oTmmoYQFsGWhswGql+oMUMEInLgItHgEzRPvS43OHYVY+/fGwXGvIBkzKU6oAvZA8aywOPZEg9AvIxO9AXAZg4lKF1OAGBF71DX5jw5EyG2NkTMJ/3Co2ZcM8tQ819D8xYb9CVgA2nijSw0gs0tArBzk59aRBWQ91Dj30QjssIiofBd9wttFiGiTMZSWcTUC52B629Bg5lRB0Cr2tdQRvAfRlZ94FGN9AjA+oywupgHHWGzuRhTEbaGORnOkFTZYj4ZaT5I1BOdYBuAnEZcXFg89/QmAFtGXltMGL/ghZ9I7+g19fUV/wHtAJBvzggfxAqd0NXDPCII/KAsXIXNPXOIQd/efjvUndAmxB2xMH/zB+G5u3Qr2k4EMd0AOmvt0IrsCMOagcqt0FbJkyLg5oGs3ULNApecVReiP4NnTHALY7KDcbHv6BbDno1XTUGW39CWwa8F4flB6P1B3TRgQ/UeqSLN6GzAQd83f1dHAKzN6AfoCQOrARLN6Andr9GpiITT9/KwPLAye/QGATFTusAxsOCDKogxH6D7sOC2GkNq+B9GVALsP8LWgzAqdjJ4LJXCRlIpxAoXkOrtteT6yYmH8gg8kL1GroHU/1CoTSQBZ6CvSto0oRc/1DM7GNRLwdm8hK6DF5RgMI9j6jnheVLaBTWdaAwPy7KrUP0Alqbg4QWlPCU6JaAuZoFDcGaqEHh6RdRLQIhC/oBsppQzAXVN1UWlixoBjyqUIhozr8H3vyE1lYhpwnVnv8CpH9CZyAi2lAIPtK8pDPn0Cp8UoWqz/8zqJ5DGzCpCdWf/0lonEMzMK0J1Z//acicQ30wrgnVn/9x8LkkCWFRherPfxiSEgKvLlR//r0QkmWY14Xqz/88LEsTsqpQ/fm3RlQWoa4L1Z//OixKFNq6UP35vw9RycDGMKAYD3P9vEhlF9y6UP35d8OuvISELlR//hPwUqxh0oTqz781TbIKueFB4em4rb/Mq5IfMpRn0nOPIS+ADBUatvcz/w/0B/X2VgMACMNQ9AMnWOADKwT/QuahyZYcDcte7e146X9W+vFmWmEzOeOJGfjMCmWOEubMYw7no7wizHPHvMuMAMFIOo5IxsiOjJDLSOOM2cDYN44hxliMjGnL2OAOWMCgGgz84uBEDKDFIG8ORLhzLPO2Y5kK6PpMdJiBsR28nQkMOBEMJtTixISY4JUTZWPCgVXevesgCINhGG7dZPLEIg7GRRsMTsaoMTEOnmLUuBgn+e//JuTHGt0aKT3y3QIFpj6vO9ctnbnAmr9PIysefn0E0PfhkjW92HFtnQHULn5AAG9aISZGF3NaQYxVrInRrcVYBW4H5vkPEPIfuIV5UGXhClHT8Qv9oXQ/MckoTfb+wVTGqK8ZUl9+4mmUnpGj03pOmzlH5y/w5w6ZiAil+G9qA0KpkfWMTxKsJ6530wel3try9CwjSscg27BTDcw321gHjzyuEjj9IbwP1hPeDqHo2abP0pn5XMR/NhTB/fyo2gv3q0gh1JSkEHCrUuMSG1VxCdxDOtfR1ZDr4AGUwIUACi5JJZMyx1RHUgY3kIn0LBuFQk2EFlv7J3t0+id7JPi86wlJsfm9FUVbQrZR1LrPmQ0hKZfSXC7Fzr5LeD7uGoYBQBCGV56PS2g5ewGy+NkUNbjr9gAAAABJRU5ErkJggg==",alt:""}})])]),n("img",{attrs:{src:t.currentSongDetail.al.picUrl,alt:""}}),n("div",{staticClass:"compress fa fa-compress",on:{click:function(e){t.isShowFullscreenPlayer=!1}}})])]:t._e()],2):t._e()},h=[],p={props:["currentSongId"],data:function(){return{currentSongDetail:null,isPaused:!1,isShowFullscreenPlayer:!1,currentTime:0,animateId:null}},computed:{currentSongUrl:function(){return"https://music.163.com/song/media/outer/url?id="+this.currentSongId+".mp3"}},methods:{getSongDetail:function(){var t=this;this.axios.get("https://music.kele8.cn/song/detail",{params:{ids:this.currentSongId}}).then((function(e){window.console.log(e),t.currentSongDetail=e.data.songs[0]}))},pausedAudio:function(){var t=this.$el.querySelector("audio");this.isPaused?t.play():t.pause(),this.isPaused=t.paused},drawCircleProgress:function(){var t=this,e=this.$el.querySelector("audio"),n=this.$el.querySelector("canvas"),a=n.getContext("2d"),i=window.setInterval((function(){t.currentTime=1e3*e.currentTime,a.clearRect(0,0,36,36),a.beginPath(),a.arc(18,18,17,0,2*Math.PI),a.closePath(),a.strokeStyle="#ccc",a.stroke(),a.beginPath(),a.arc(18,18,17,-.5*Math.PI,2*Math.PI*(t.currentTime/t.currentSongDetail.dt)-.5*Math.PI),a.strokeStyle="red",a.stroke()}),1e3);return i}},created:function(){this.getSongDetail()},watch:{currentSongId:function(){this.getSongDetail()},isPaused:function(){this.isPaused?window.clearInterval(this.animateId):(window.clearInterval(this.animateId),this.animateId=this.drawCircleProgress())},currentSongDetail:function(){this.$nextTick((function(){window.clearInterval(this.animateId),this.animateId=this.drawCircleProgress()}))}},updated:function(){}},g=p,f=(n("6d16"),n("2877")),m=Object(f["a"])(g,d,h,!1,null,"11fa41a8",null),v=m.exports,b={components:{Player:v},data:function(){return{currentSongId:null}}},y=b,C=(n("7c55"),Object(f["a"])(y,u,l,!1,null,null,null)),w=C.exports,A=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),n("ul",{staticClass:"nav"},[n("li",[n("router-link",{attrs:{to:"/recommend"}},[t._v("推荐音乐")])],1),n("li",[n("router-link",{attrs:{to:"/hot"}},[t._v("热歌榜")])],1),n("li",[n("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)]),n("keep-alive",[n("router-view",{on:{"translate-currentid":function(e){return t.$emit("translate-currentid",e)}}})],1)],1)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("b640"),alt:""}}),a("span",[t._v("时潮音乐")])])])}],x={name:"home",components:{}},P=x,I=(n("b03c"),Object(f["a"])(P,S,_,!1,null,"c27b3468",null)),k=I.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},[n("HomeTitle",[t._v("推荐歌单")]),n("ul",{staticClass:"list"},t._l(t.personalized,(function(t,e){return n("SongListCard",{key:e,attrs:{item:t}})})),1),n("HomeTitle",[t._v("最新音乐")]),n("ol",t._l(t.newsong,(function(e,a){return n("SongListItem",{key:a,attrs:{"song-item":e,"is-show-quality":!0},on:{"translate-currentid":function(e){return t.$emit("translate-currentid",e)}}})})),1)],1)},M=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"title"},[t._t("default")],2)},L=[],j={},E=j,D=(n("9143"),Object(f["a"])(E,O,L,!1,null,null,null)),B=D.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"card",on:{click:function(e){return t.handlerCardClick(t.item.id)}}},[n("div",{staticClass:"thumb"},[n("img",{attrs:{src:t.item.picUrl,alt:""}}),n("span",[t._v(t._s(t.translatePlayCount(t.item.playCount)))])]),n("div",{staticClass:"name"},[t._v(t._s(t.item.name))])])},N=[],U=(n("b680"),{props:{item:Object},methods:{translatePlayCount:function(t){return t>99999999?(t/1e8).toFixed(2)+"亿":t>9999?(t/1e4).toFixed(1)+"万":void 0},handlerCardClick:function(t){this.$router.push({path:"playlist",query:{id:t}})}}}),F=U,H=(n("ac5a"),Object(f["a"])(F,G,N,!1,null,null,null)),Q=H.exports,R=n("16a2"),z={name:"HomeRecommend",components:{HomeTitle:B,SongListCard:Q,SongListItem:R["a"]},data:function(){return{personalized:[],newsong:[]}},methods:{getPersonalized:function(){var t=this;this.axios.get("https://music.kele8.cn/personalized?limit=6").then((function(e){t.personalized=e.data.result}))},getNewsong:function(){var t=this;this.axios.get("https://music.kele8.cn/personalized/newsong").then((function(e){t.newsong=e.data.result}))}},created:function(){this.getPersonalized(),this.getNewsong()}},q=z,X=(n("3c02"),Object(f["a"])(q,T,M,!1,null,"3a51efc2",null)),K=X.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hot"},[t._m(0),n("ol",{staticClass:"songlist"},[t.playlist?t._l(t.playlist.tracks,(function(e,a){return n("SongListItem",{key:a,attrs:{"song-item":e,"is-show-quality":!1,index:a},on:{"translate-currentid":function(e){return t.$emit("translate-currentid",e)}}})})):t._e()],2)])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"imga"},[a("img",{attrs:{src:n("bb7f"),alt:""}}),a("div",{staticClass:"icon"}),a("div",{staticClass:"time"},[t._v("更新日期:"),a("span",[t._v("12月26日")])])])}],Z={components:{SongListItem:R["a"]},data:function(){return{playlist:null}},methods:{getPlayListDetail:function(t){var e=this;s,this.axios.get("https://music.kele8.cn/top/list?idx=1",{params:{id:t}}).then((function(t){e.playlist=t.data.playlist}))}},created:function(){window.console.log("创建")},beforeRouteEnter:function(t,e,n){n((function(e){e.getPlayListDetail(t.query.id)}))}},V=Z,Y=(n("b7ff"),Object(f["a"])(V,W,J,!1,null,"c5b44634",null)),$=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"search"},[n("i",{staticClass:"svg"}),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputText,expression:"inputText",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"搜索歌曲、歌手、专辑"},domProps:{value:t.inputText},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getSearchMultimatch(),t.getSearchSongs()},xxx:function(e){return t.songSeach()},input:function(e){e.target.composing||(t.inputText=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("button",{staticClass:"reset",on:{click:function(e){t.inputText=null}}}),t.inputText&&!t.searchMultimatch?[n("ul",[n("div",{staticClass:"fontsearch"},[t._v('搜索:"'+t._s(t.inputText)+'"')]),t._l(t.suggests,(function(e,a){return n("li",{key:a},[n("i",{staticClass:"svg"}),t._v(" "+t._s(e.keyword)+" ")])}))],2)]:t._e()],2),t.inputText?t._e():[n("div",{staticClass:"SearchHots"},[n("div",{staticClass:"hottitle"},[t._v("热门搜索")]),n("ul",{staticClass:"list"},t._l(t.SearchHots,(function(e,a){return n("li",{key:a},[t._v(t._s(e.first))])})),0)])],t.inputText?[t.searchMultimatch?n("div",{staticClass:"multimatch"},[t.searchMultimatch.artist?t._l(t.searchMultimatch.artist,(function(e){return n("div",{key:e.id,staticClass:"artist",on:{click:function(n){return t.$router.push("/artist?id="+e.id)}}},[n("img",{attrs:{src:e.picUrl,alt:""}}),n("h5",[t._v(" 歌手: "),n("span",[t._v(t._s(e.name))])]),n("span",[t._v(">")])])})):t._e(),t.searchMultimatch.mv?t._l(t.searchMultimatch.mv,(function(e){return n("div",{key:e.id,staticClass:"mv"},[n("img",{attrs:{src:e.cover,alt:""}}),n("h5",[n("p",[t._v("MV: "+t._s(e.name))]),n("p",[t._v(t._s(e.artistName))])]),n("span",[t._v(">")])])})):t._e()],2):t._e(),t.searchSongs?n("ul",t._l(t.searchSongs,(function(e){return n("SongListItem",{key:e.id,attrs:{songItem:e},on:{"translate-currentid":function(e){return t.$emit("translate-currentid",e)}}})})),1):t._e()]:t._e(),t.loading?[n("div",{staticClass:"loader loader--style8",attrs:{title:"7"}},[n("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"24px",height:"30px",viewBox:"0 0 24 30","xml:space":"preserve"}},[n("rect",{attrs:{x:"0",y:"10",width:"4",height:"10",fill:"#d43c33",opacity:"0.2"}},[n("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),n("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),n("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),n("rect",{attrs:{x:"8",y:"10",width:"4",height:"10",fill:"#d43c33",opacity:"0.2"}},[n("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),n("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),n("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),n("rect",{attrs:{x:"16",y:"10",width:"4",height:"10",fill:"#d43c33",opacity:"0.2"}},[n("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),n("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),n("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])])]:t._e()],2)},et=[],nt={name:"app",components:{SongListItem:R["a"]},data:function(){return{suggests:[],SearchHots:[],inputText:null,searchMultimatch:null,searchSongs:[],loading:!1}},methods:{getHotSearch:function(){var t=this;this.axios.get("https://music.kele8.cn/search/hot").then((function(e){t.SearchHots=e.data.result.hots}))},getSearchSuggest:function(){var t=this;this.loading=!0,this.axios.get("https://music.kele8.cn/search/suggest",{params:{keywords:this.inputText,type:"mobile"}}).then((function(e){t.suggests=e.data.result.allMatch,t.loading=!1}))},getSearchMultimatch:function(){var t=this;this.loading=!0,this.axios.get("https://music.kele8.cn/search/multimatch",{params:{keywords:this.inputText,type:"mobile"}}).then((function(e){t.searchMultimatch=e.data.result})).finally((function(){t.loading=!1}))},getSearchSongs:function(){var t=this;this.loading=!0,this.axios.get("https://music.kele8.cn/search",{params:{keywords:this.inputText,limit:10,offset:0}}).then((function(e){t.searchSongs=e.data.result.songs})).finally((function(){t.loading=!1}))},songSeach:function(){}},watch:{inputText:function(t){t&&this.getSearchSuggest()}},created:function(){this.getHotSearch()}},at=nt,it=(n("9bc8"),Object(f["a"])(at,tt,et,!1,null,"7de3acce",null)),st=it.exports;a["a"].use(A["a"]);var rt=[{path:"/",name:"home",component:k,redirect:"/recommend",children:[{path:"recommend",component:K},{path:"hot",component:$},{path:"search",component:st}]},{path:"/PlayList",name:"PlayList",component:function(){return n.e("about").then(n.bind(null,"fddd"))}},{path:"/artist",name:"artist",component:function(){return n.e("about").then(n.bind(null,"6b01"))}}],ot=new A["a"]({routes:rt}),ct=ot;a["a"].config.productionTip=!1,new a["a"]({router:ct,render:function(t){return t(w)}}).$mount("#app")},"6d16":function(t,e,n){"use strict";var a=n("b74f"),i=n.n(a);i.a},"7aa8":function(t,e,n){},"7c55":function(t,e,n){"use strict";var a=n("2395"),i=n.n(a);i.a},9143:function(t,e,n){"use strict";var a=n("ea77"),i=n.n(a);i.a},9891:function(t,e,n){},"9bc8":function(t,e,n){"use strict";var a=n("7aa8"),i=n.n(a);i.a},"9feb":function(t,e,n){},ac5a:function(t,e,n){"use strict";var a=n("e271"),i=n.n(a);i.a},b03c:function(t,e,n){"use strict";var a=n("fada"),i=n.n(a);i.a},b640:function(t,e,n){t.exports=n.p+"img/logo.b4efc34b.jpg"},b74f:function(t,e,n){},b7ff:function(t,e,n){"use strict";var a=n("9feb"),i=n.n(a);i.a},bb7f:function(t,e,n){t.exports=n.p+"img/hot_music_bg_3x.2bfefd3b.jpg"},c101:function(t,e,n){},e271:function(t,e,n){},e673:function(t,e,n){"use strict";var a=n("c101"),i=n.n(a);i.a},ea77:function(t,e,n){},fada:function(t,e,n){}});
//# sourceMappingURL=app.ded9c2aa.js.map