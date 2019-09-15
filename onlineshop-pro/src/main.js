/* eslint-disable */
// eslint-disable-next-line
// 入口文件
import Vue from 'vue'
import App from './App.vue'
import { Header, Swipe, SwipeItem } from 'mint-ui' //引入mint-ui 的组件
// 导入MUI组件
import './assets/lib/mui-master/examples/hello-mui/css/mui.min.css'
//  导入MUI的字体图标文件，如运行到扩展图标时需要引入扩展的字体图标文件，
//  这里是修改购物车小图标时需要用到
import './assets/lib/mui-master/examples/hello-mui/css/icons-extra.css'


Vue.component(Header.name, Header) //使用mint-ui组件:顶栏
Vue.component(Swipe.name, Swipe); //mint-ui的轮播图
Vue.component(SwipeItem.name, SwipeItem);

//  导入和使用路由包
import VueRouter from 'vue-router'
Vue.use(VueRouter)
    //  引入路由模块
import router from './router'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')