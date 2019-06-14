<template>
	<div>
		<header>
			<!--头部导航-->
			<div class="head_nav">
				<img src="../../assets/homeImg/s_03.png"/>
				<ul>
					<li><a href="#">首页</a></li>
					<li><a href="#">会员商城</a></li>
					<li><a href="#">招商加盟</a></li>
				</ul>
			</div>
			<!--头部搜索动画图-->
			<div class="head_img">
				<img src="../../assets/homeImg/s_066.png"/>
				<img src="../../assets/homeImg/s_0666.png"/>
			</div>
			<!--搜索框部分-->
			<div class="head_search">
				<form action="#">
					<input type="search" placeholder="您今天想吃什么水果？搜下看看，有惊喜"/>
					<img src="../../assets/homeImg/s_10.png" alt="" />
				</form>
				<ul class="head_searchTxt">
					<li><a href="#">苹果</a></li>
					<li><a href="#">苹果</a></li>
					<li><a href="#">苹果</a></li>
					<li><a href="#">苹果</a></li>
					<li><a href="#">苹果</a></li>
					<li><a href="#">苹果</a></li>
					<li><a href="#">苹果</a></li>
					<li><a href="#">苹果</a></li>
				</ul>
			</div>
			<!--更多部分图标-->
			<a href="#" class="learnMore"><img src="../../assets/homeImg/s_14.png"/></a>
		</header>
	</div>
</template>

<script>
	
</script>

<style lang="less" scoped="scoped">
	header{
		text-align: center;
		padding: 40px 0;
		background: url(../../assets/homeImg/home1_01.jpg) no-repeat;
		background-size: cover;
		background-position: center;
	}
	.head_nav{
		ul{
			display: inline-block;
			overflow: hidden;
			height: 47px;
			line-height: 47px;
			li{
				float: left;
				margin: 0 10px;
				a{
					color: #fff;
					font-size: 20px;
				}
			}
		}
	}
</style>