// 使用vuex和使用路由差不多步骤
// 1.引入
import Vue from 'vue'
import vuex, { Store } from 'vuex'
// 2.注册
Vue.use(vuex)
// 3.实例化并且暴露出去给别的组件用 智能自动解构了

var car = JSON.parse(localStorage.getItem('car') || '[]')

export default new Store({
  state:{ //相当于data 数据在这里写
    car,
    cou:0
  },
  mutations:{ //相当于methods 方法在这里写
    //和methods中方法不同的写法是 任何方法必须传一个state参数[把数据传进来]
    add(state,info){
      var flag = false
      state.cou+=info.count;
      state.car.some(item => {
        if (item.id == info.id) {
          item.count += parseInt(info.count)
          flag = true
          return true
        }
      })

      // 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
      if (!flag) {
        state.car.push(info)
      }

      // 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
  }
})
