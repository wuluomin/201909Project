<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../assets/images/menu1.png">
						<div class="mui-media-body">
							<h3>幸福</h3>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019-01-01 12:00:00</span>
                                <span>点击：1次</span>
                            </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../assets/images/menu1.png">
						<div class="mui-media-body">
							<h3>幸福</h3>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019-01-01 12:00:00</span>
                                <span>点击：1次</span>
                            </p>
						</div>
					</a>
				</li>
                <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../assets/images/menu1.png">
						<div class="mui-media-body">
							<h3>幸福</h3>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019-01-01 12:00:00</span>
                                <span>点击：1次</span>
                            </p>
						</div>
					</a>
				</li>

			</ul>
			<comment></comment>
    </div>
</template>
<script>
//	导入公共子组件
import comment from '../subcomponent/Comment.vue'

export default {
    data(){
		return {

		}
	},
	methods:{

	},
	components:{	//	用来注册子组件
		comment
	}
}
</script>
<style lang="scss" scoped>
.mui-table-view li{
	h3{
    font-size: 14px;
}
	.mui-ellipsis{
    font-size: 12px;
    color: #226aff;
    /* C3 样式 */
    display: flex;
    justify-content: space-between;
}
}
</style>