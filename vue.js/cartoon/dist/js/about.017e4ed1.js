(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0392":function(t,i,a){},1217:function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"finishlist"},[a("LookTitle",[t._v("完结漫画")]),a("ul",t._l(t.list,(function(i,n){return a("li",{key:n},[i.cover?a("div",{staticClass:"icon",on:{click:function(a){return t.handlerCardClick(i.url)}}},[a("img",{attrs:{src:i.cover,alt:""}}),a("div",{staticClass:"name"},[t._v(t._s(i.name))])]):t._e()])})),0)],1)},e=[],s=a("a8da"),o={name:"looktitle",components:{LookTitle:s["a"]},data:function(){return{list:[]}},methods:{getHomeSerialize:function(){var t=this;this.axios.get("https://api.pingcc.cn/?mhlb=wanjie").then((function(i){t.list=i.data.list,window.console.log(i)}))},handlerCardClick:function(t){window.console.log("param"),this.$router.push({path:"/Particulars",query:{id:t}})}},created:function(){this.getHomeSerialize()}},c=o,r=(a("49ed"),a("2877")),l=Object(r["a"])(c,n,e,!1,null,"b5b96a04",null);i["default"]=l.exports},2822:function(t,i,a){},4382:function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"xxxx"},[a("LookTitle",[t._v("精品推存")]),a("ul",t._l(t.list,(function(i,n){return a("li",{key:n},[i.cover?a("div",{staticClass:"icon",on:{click:function(a){return t.handlerCardClick(i.url)}}},[a("img",{attrs:{src:i.cover,alt:""}}),a("div",{staticClass:"name"},[t._v(t._s(i.name))])]):t._e()])})),0)],1)},e=[],s=a("a8da"),o={name:"looktitle",components:{LookTitle:s["a"]},data:function(){return{list:[]}},methods:{getHomeSerialize:function(){var t=this;this.axios.get("https://api.pingcc.cn/?mhlb=lianzai").then((function(i){t.list=i.data.list,window.console.log(i)}))},handlerCardClick:function(t){window.console.log("param"),this.$router.push({path:"/Particulars",query:{id:t}})}},created:function(){this.getHomeSerialize()}},c=o,r=(a("ef8a"),a("2877")),l=Object(r["a"])(c,n,e,!1,null,"7072a140",null);i["default"]=l.exports},"49ed":function(t,i,a){"use strict";var n=a("0392"),e=a.n(n);e.a},"51d0":function(t,i,a){"use strict";var n=a("e239"),e=a.n(n);e.a},"70d3":function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return this.particulars?a("div",{staticClass:"particulars"},[a("span",{staticClass:"icon",on:{click:function(i){return t.$router.go(-1)}}},[t._v("《 "),a("b",[t._v("返回")])]),a("div",{staticClass:"top"},[a("img",{attrs:{src:this.particulars.data.cover,alt:""}}),a("div",{staticClass:"images"},[a("img",{attrs:{src:this.particulars.data.cover,alt:""}})]),a("div",{staticClass:"name"},[a("p",{staticClass:"booke"},[t._v(t._s(this.particulars.data.name))]),a("p",{staticClass:"author"},[t._v("出版: "+t._s(this.particulars.data.author))]),a("p",{staticClass:"tag"},[t._v("类型: "+t._s(this.particulars.data.tag))]),a("p",{staticClass:"time"},[t._v("更新时间: "+t._s(this.particulars.data.time))])])]),a("div",{staticClass:"introduce",class:{active:t.isActive}},[t._v(" 简介: "+t._s(this.particulars.data.introduce)+" ")]),a("div",{staticClass:"btn"},[a("img",{attrs:{src:"https://css99tel.cdndm5.com/v201910292122/blue/images/mobile/desc-more.png",alt:""},on:{click:t.Btn}})]),a("ol",t._l(t.particulars.list,(function(i,n){return a("li",{key:n,on:{click:function(a){return t.HomeSerializeClick(i.url)}}},[t._v(t._s(i.num))])})),0)]):t._e()},e=[],s={data:function(){return{particulars:null,isActive:!0}},methods:{Btn:function(){this.isActive=!this.isActive},getHomeSerialize:function(t){var i=this;this.axios.get("https://api.pingcc.cn",{params:{mhurl1:t}}).then((function(t){i.particulars=t.data,window.console.log(t.data)}))},HomeSerializeClick:function(t){window.console.log("param"),this.$router.push({path:"/Lookbooke",query:{id:t}})}},beforeRouteEnter:function(t,i,a){a((function(i){i.getHomeSerialize(t.query.id)}))}},o=s,c=(a("96e2"),a("2877")),r=Object(c["a"])(o,n,e,!1,null,null,null);i["default"]=r.exports},"866b":function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("ul",[a("div",{staticClass:"btn",on:{click:function(i){return t.$router.go(-1)}}},[t._v("《 "),a("b",[t._v("返回")])]),t._l(t.Lookbooke,(function(t,i){return a("li",{key:i},[a("img",{attrs:{src:t.img,alt:""}})])}))],2)},e=[],s={data:function(){return{Lookbooke:null}},methods:{getLookbooke:function(t){var i=this;this.axios.get("https://api.pingcc.cn",{params:{mhurl2:t}}).then((function(t){i.Lookbooke=t.data.list,window.console.log(t)}))}},beforeRouteEnter:function(t,i,a){a((function(i){i.getLookbooke(t.query.id)}))}},o=s,c=(a("51d0"),a("2877")),r=Object(c["a"])(o,n,e,!1,null,"5974caad",null);i["default"]=r.exports},"96e2":function(t,i,a){"use strict";var n=a("2822"),e=a.n(n);e.a},bf73:function(t,i,a){},e239:function(t,i,a){},ef8a:function(t,i,a){"use strict";var n=a("bf73"),e=a.n(n);e.a}}]);
//# sourceMappingURL=about.017e4ed1.js.map