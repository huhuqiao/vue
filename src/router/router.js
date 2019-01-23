// 1.引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
// 2.注册路由
Vue.use(VueRouter)
// 3.定义并引用组件
import Index from '../components/tabbar/Index'
import Merder from '../components/tabbar/Merber'
import Shoppingcar from '../components/tabbar/Shoppingcar'
import Search from '../components/tabbar/Search'
import Newslist from '../components/list/Newslist'
import NewsInfo from '../components/list/NewsInfo'
import Img from '../components/list/Img'
import Imginfo from '../components/list/Imginfo'
import shop from '../components/list/shop'
import shopinfo from '../components/list/shopinfo'


// 4.实例化路由并暴露 组件的路径必须写在这里
export default new VueRouter({
  routes:[
    {path:'/Index',component:Index},
    {path:'/Merder',component:Merder},
    {path:'/Shoppingcar',component:Shoppingcar},
    {path:'/Search',component:Search},
    {path:'/Index/Newslist',component:Newslist},
    {path:'/Newslist/NewsInfo/:id',component:NewsInfo},
    {path:'/Index/Img',component:Img},
    {path:'/Img/Imginfo/:id',component:Imginfo},
    {path:'/Index/shop',component:shop},
    {path:'/shop/shopinfo/:id',component:shopinfo,name:'shopinfo'},
  ]
})
