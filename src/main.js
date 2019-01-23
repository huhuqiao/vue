// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' 

// 使用vant组件库
import { NavBar,Tabbar, Stepper,TabbarItem,Swipe, SwipeItem,Row, Col, Card,Button,Tab, Tabs,Lazyload } from 'vant';
Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Row).use(Col).use(Card).use(Button).use(Tab).use(Tabs).use(Lazyload).use(Stepper);

// 把路由引入进来使用
import router from './router/router'
// 把vuex引入进来使用
import store from './state'

// 引用vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;

// 引入axios 用法和vue-resource一样
//import axios from 'axios'
// Vue.prototype.axios

// 引入时间包 定义全局时间过滤器
import moment from 'moment'
Vue.filter('data',(data,arg='YYYY-MM-DD HH-mm-ss')=>{
  return moment(data).format(arg)
})

// vue自带底层优化代码
Vue.config.productionTip = false


/* eslint-disable no-new */
//挂载vuex 像挂载路由一样
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
