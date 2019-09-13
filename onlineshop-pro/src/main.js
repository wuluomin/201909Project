// 入口文件
import Vue from 'vue'
import App from './App.vue'
import { Header } from 'mint-ui'; //引入mint-ui 的组件
// 导入MUI组件
import './assets/lib/mui-master/examples/hello-mui/css/mui.min.css'

Vue.component(Header.name, Header); //使用mint-ui组件:顶栏



Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')