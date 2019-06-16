<template>
	<div class="shop_item">
		<div class="warp item">
			<div id="shoop">
				<h3>全部商品分类 <img style="vertical-align: middle;" src="../assets/logo/nav_all_classify.png"/></h3>
				<ul class="content">
					<li v-for="item in arr">
						<a href="#">{{item.shoop}}</a>
						<span style="color: rgb(255,255,255);">></span>
					</li>
				</ul>
			</div>
			
			<ul class="list">
				<li>
					<a href="#">首页</a>
				</li>
				<li>
					<a href="#">闪购促销</a>
				</li>
				<li>
					<a href="#">最新活动</a>
				</li>
				<li>
					<a href="#">免费试吃</a>
				</li>
			</ul>
		</div>
		
	</div>
</template>
<script>
	export default{
		data(){
			return{
				arr:[
					{shoop:"专利分格"},
					{shoop:"彩虹过杯"},
					{shoop:"特别定制"},
					{shoop:"创意果切"},
					{shoop:"节日精选"},
					{shoop:"进口水果"},
					{shoop:"国产水果"}
				]
			}
		}
		
	}
</script>
<style>
	.shop_item{
		margin-top: 140px;
		background: red;
		height: 30px;
		line-height: 30px;
	}
	.item{
		display: flex;
	}
	.list{
		display: flex;
		
	}
	.list>li:hover{
		background: greenyellow;
	}
	h3{
		margin-right: 80px;
		color: #fff;
	}
	.list>li{
		width: 80px;
		text-align: center;
	}
	a{
		color: #fff;
	}
	.content{
		display: none;
		background: red;
		position: absolute;
		width: 150px;
	}
	.content>li{
		display: flex;
		justify-content: space-around;
		line-height: 60px;
		height: 60px;
		z-index: 1;
	}
	.content>li:hover{
		background: #fff;
			
	}
	#shoop{
		position: relative;
	}
	#shoop:hover> .content{
		display: block;
	}
</style>