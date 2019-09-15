<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
            <mt-swipe-item>4</mt-swipe-item>
        </mt-swipe>

        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/newslist">
		            <img src="../assets/images/menu1.png" alt="">
		            <div class="mui-media-body">新闻资讯</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/sharepic">
		            <img src="../assets/images/menu2.png" alt="">		           
		            <div class="mui-media-body">图片分享</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/shopping">
		            <img src="../assets/images/menu3.png" alt="">	            
		            <div class="mui-media-body">商品购买</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/leavemessage">
		            <img src="../assets/images/menu4.png" alt="">
		            <div class="mui-media-body">留言反馈</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/videos">
		            <img src="../assets/images/menu5.png" alt="">
		            <div class="mui-media-body">视频专区</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/contactus">
		            <img src="../assets/images/menu6.png" alt="">
		            <div class="mui-media-body">联系我们</div></router-link></li>
		</ul>

    </div>
</template>

<script>
export default {
	
    
}
</script>
<style scoped>
.mint-swipe{
    height: 200px;
}
.mint-swipe-item:nth-child(1){
    background-color: lightcyan;
}
.mint-swipe-item:nth-child(2){
    background-color: lightcoral;
}
.mint-swipe-item:nth-child(3){
    background-color: lightblue;
}
.mint-swipe-item:nth-child(4){
    background-color: lightgreen;
}
.mui-grid-view.mui-grid-9{
	background-color: white;
	border:0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border:0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell img{
	width: 60px;
	height: 60px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
	font-size: 13px;
}
</style>