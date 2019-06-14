<template>
	<div>
		<header>
			<!--头部导航-->
			<div class="head_nav">
				<img src="../../assets/homeImg/s_03.png" />
				<ul>
					<li>
						<a href="#">首页</a>
					</li>
					<li>
						<a href="#">会员商城</a>
					</li>
					<li>
						<a href="#">招商加盟</a>
					</li>
				</ul>
			</div>
			<!--头部搜索动画图-->
			<div class="head_img">
				<img src="../../assets/homeImg/s_066.png" />
				<img src="../../assets/homeImg/s_0666.png" />
			</div>
			<!--搜索框部分-->
			<div class="head_search">
				<form action="#">
					<input type="search" placeholder="您今天想吃什么水果？搜下看看，有惊喜" />
					<img src="../../assets/homeImg/s_10.png" alt="" />
				</form>
				<ul class="head_searchTxt">
					<li>
						<a href="#">苹果</a>
					</li>
					<li>
						<a href="#">草莓</a>
					</li>
					<li>
						<a href="#">芒果</a>
					</li>
					<li>
						<a href="#">石榴</a>
					</li>
					<li>
						<a href="#">彩虹果杯</a>
					</li>
					<li>
						<a href="#">超级果盒</a>
					</li>
					<li>
						<a href="#">能量果花</a>
					</li>
					<li>
						<a href="#">创意果盘</a>
					</li>
				</ul>
			</div>
			<!--更多部分图标-->
			<a href="#" class="learnMore"><img src="../../assets/homeImg/s_14.png" /></a>
		</header>
		<section class="banner">
			<div><img src="../../assets/homeImg/home1_03.jpg"/></div>
			<p>
				
			</p>
		</section>
	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	/*头部*/
	header {
		text-align: center;
		padding: 40px 0 0 0;
		background: url(../../assets/homeImg/home1_01.jpg) no-repeat;
		background-size: cover;
		background-position: center;
	}
	/*头部导航*/
	.head_nav {
		ul {
			display: inline-block;
			overflow: hidden;
			height: 47px;
			line-height: 47px;
			li {
				float: left;
				margin: 0 10px;
				a {
					color: #fff;
					font-size: 20px;
				}
			}
		}
	}
	/*头部搜索动画图*/
	.head_img{
		/*需要完善有卡顿*/
		animation: myfirst 5s infinite;
		transition: all linear 1s;
		margin-top: 90px;
		position: relative;
		img:first-child{
			position: absolute;
		    top: -68%;
		    right: 42%;
		}
	}
	/*动画样式*/
	@keyframes myfirst{
		0%   {top: 0px;}
		16.667%  {top: -1px;}
		33.33%  {top: -2px;}
		50%  {top: -3px;}
		66.667%  {top: -2px;}
		83.3333% {top: -1px;}
		100% {top: 0px;}
	}
	/*搜索框部分*/
	.head_search {
		form {
			position: relative;
			input {
				width: 720px;
				height: 44px;
				border: 5px solid #eee;
				text-indent: 20px;
				border-radius: 8px;
				&::-webkit-input-placeholder {
					color: #999;
					font-size: 16px;
				}
			}
			img{
				position: absolute;
				top: 13%;
				right: 29%;
				width: 40px;
			}
		}
		.head_searchTxt {
			overflow: hidden;
			margin-left: 50%;
			margin-top: 14px;
			padding-left: 74px;
			transform: translateX(-50%);
			li {
				float: left;
				margin-right: 30px;
				a {
					color: #fff;
					font-size: 20px;
					font-weight: 600;
				}
			}
		}
	}
	/*更多部分图标*/
	.learnMore{
		display: block;
		margin-top: 16px;
	}
	
	/*轮播图部分*/
	.banner{
		text-align: center;
	}
</style>