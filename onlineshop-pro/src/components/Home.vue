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
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-home"></span>
		            <div class="mui-media-body">Home</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		            <div class="mui-media-body">Email</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-chatbubble"></span>
		            <div class="mui-media-body">Chat</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-location"></span>
		            <div class="mui-media-body">location</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-search"></span>
		            <div class="mui-media-body">Search</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-phone"></span>
		            <div class="mui-media-body">Phone</div></a></li>
		</ul>
        <h1>主页</h1>

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
</style>