<template>
  <div id="app" class="app-container">
        <!-- 顶栏 -->
        <mt-header fixed title="买买买"></mt-header>

        <!-- 中间的router-view -->
        <router-view></router-view>

        <!-- 底部tab栏 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      
    }
  },
  components: {

}
}
</script>

<style lang="scss">
.app-container{
  padding-top: 40px;
  margin: 0;
}
.mint-header-title{
  font-size: 16px;
}
</style>
