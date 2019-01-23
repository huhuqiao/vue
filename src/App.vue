<template>
  <div class="app">
    <van-nav-bar
      title="vue项目"
      left-text="返回"
      left-arrow
    />
    
    <transition>
      <router-view></router-view>
    </transition>

    <van-tabbar v-model="active">
      <van-tabbar-item to='/Index' icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to='/Merder' icon="manager-o">会员</van-tabbar-item>
      <van-tabbar-item to='/Shoppingcar' icon="shopping-cart-o" :info='$store.state.cou'>购物车</van-tabbar-item>
      <van-tabbar-item to='/Search' icon="search">搜索</van-tabbar-item>
    </van-tabbar>
    
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    active: 0
  }),
  methods:{
  },
};
</script>

<style>
.app{
  overflow-x: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  position: absolute;
  left: -200%;
}
.v-enter-active,.v-leave-active {
  transition: all 0.4s;
}
</style>
