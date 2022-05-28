// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'

Vue.config.productionTip = false
/* eslint-disable no-unused-vars */

// new Vue({
//   // el: '#app',
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})
// 上面写法报错 ：You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
// 大概意思就是： 当前的vue 版本没有带解析器，无法解析这个代码
// 解决思路： 换一个vue 版本
// search node_modules 插件可以查看包
// 引入的vue 版本:  "dist/vue.runtime.common.js", 不带解析器,那么就换一个版本
// 

// 那么为什么还要 render 的方式呢
// 优点就是：比 template 方式打包时的体积更小，效率更高
// 其次就是：上面实现的功能差不多 
// 步骤 1. 定义并注册App  2. 使用了App组件 3. 比上面的写法多干了一件事，寻找解析器loader