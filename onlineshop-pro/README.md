# onlineshop-pro

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### 新闻列表的item-新闻详情
1.将a链接改为router-link
2.新建一个NewsDetail.vue的组件
- main.js中引入组件并配置路由
3.NewsDetail.vue中布局：
- title：get请求
- 发表时间：使用全局过滤器格式化时间
- 点击次数：get请求
- 内容：使用v-html
- 若有图片，则设置宽度为100%且去掉scope，否则图片较大时多余部分会被隐藏
- 评论子组件
    - 共用的子组件（因为其他地方也需要）：
        - 先创建一个单独的comment.vue模板
        - 在需要用到的组件中手动导入该组件--`import comment from './comment.vue'`
        - 在父组件中使用`components`属性，将刚才导入的组件注册为自己的子组件
        - 在父组件中以标签的形式引用该组件
4.v-for循环渲染
5.