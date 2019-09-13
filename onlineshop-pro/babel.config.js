module.exports = {
    presets: [
        '@vue/app'
    ],
    //  引入 mint-ui 组件，否则没有样式
    plugins: [
        [
            "component",
            {
                "libraryName": "mint-ui",
                "style": true
            }
        ]
    ]
}