<template>
  <div class="home">
      <div class="top">
      <div class="logo">
        <img src="../assets/logo.jpg" alt=""><span>时潮音乐</span>
      </div>
      
    </div>
   <ul class="nav">
      <li>
        <router-link to="/recommend">推荐音乐</router-link>
      </li>
      <li>
        <router-link to="/hot">热歌榜</router-link>
      </li>
      <li>
        <router-link to="/search">搜索</router-link>
      </li>
    </ul>
     <keep-alive>
      <router-view @translate-currentid="$emit('translate-currentid',$event)"></router-view>
    </keep-alive>
  </div>
</template>
 
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="less" scoped>
.top{
  height: 80px;
  background:  #d43c33;
  overflow: hidden;
  .logo{
    // background: #2c3e50;
    height: 30px;
    width: 140px;
    line-height: 30px;
    margin-top: 25px;
    margin-left: 15px;
  img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  span{
    display: block;
    float: right;
    height: 25px;
    font-size: 22px;
    color: white;
    font-family: 'Courier New', Courier, monospace
  }
  }

}
ul.nav {
  display: flex;
  border-bottom: 1px solid #f8f6f6;
  li {
    flex: 1;
    text-align: center;
    height: 41px;
    a {
      line-height: 40px;
      display: inline-block;
      &:active {
        background: none;
      }
      &.router-link-exact-active {
        color: #d43c33;
        border-bottom: 2px solid #d43c33;
      }
    }
  }
}
</style>
