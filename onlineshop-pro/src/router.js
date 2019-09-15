import VueRouter from 'vue-router';

//  引入组件模块
import Home from './components/Home.vue'
import Member from './components/Member.vue'
import Shop from './components/Shop.vue'
import Search from './components/Search.vue'
import NewsList from './components/news/NewsList.vue'

const router = new VueRouter({
    routes: [ //  匹配路由规则
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/member', component: Member },
        { path: '/shop', component: Shop },
        { path: '/search', component: Search },
        { path: '/home/newslist', component: NewsList }
    ],
    linkActiveClass: 'mui-active' // 修改默认的路由高亮类，默认为router-link-active
});

export default router;