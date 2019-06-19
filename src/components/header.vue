<template>
	<div class="headWarp">
		<header class="header">
			<div class="h_Top">
				<div class="h_Left">收藏果酷</div>
				<ul class="h_Right">
					<li>
						<a href="#">请登录</a>
					</li>
					<li>
						<a href="#">免费注册</a>
					</li>
					<li>
						<a href="#">我的订单</a>
					</li>
					<li>
						<a href="#">北京市</a><i class="icon_down"></i></li>
				</ul>
			</div>
		</header>
		<nav class="nav">
			<div class="h_Nav">
				<div class="navlist">
					<div class="logo">
						<a href="#"></a>
					</div>
					<div class="fromNav">
						<p class="fromI"><input type="text" name="" id="" placeholder="请输入要搜索的水果" /></p>
						<div class="navTitle">
							<ul>
								<li v-for="(item,index) in headarr" @mouseout="fn(item)" @mouseleave="!fn(item)" :class="{active:item.ishow}">
									<a href="#">{{item.showNav}}</a>
								</li>
								<li>
									<img src="../assets/logo/phone_icon.jpg"/>
									400-6900-621
								</li>
							</ul>
						</div>
					</div>
					<div class="nCart">
						<i class="icon_cart"></i>
						<!--<a href="#">我的购物车</a>-->
						<router-link to="/shoppcar">我的购物车</router-link>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				headarr:[ 
				    {English:"HOME",showNav:'HOME',chinese:"首页",ishow:false},
				    {English:"SALES",showNav:'SALES',chinese:"闪购促销",ishow:false},
				    {English:"ACTIVITY",showNav:'ACTIVITY',chinese:"最新活动",ishow:false},
				    {English:"TASTE",showNav:'TASTE',chinese:"免费试吃",ishow:false}
				]
			}
		},
		methods:{
			fn(item){
//				console.log(item.showNav,item.showNav==item.English)
				if(item.showNav==item.English){
					item.showNav=item.chinese
					item.ishow=true;
				}else{
					item.showNav=item.English;
					item.ishow =false;
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.headWarp {
		width: 100%;
		position: fixed;top: 0;
		z-index: 55;
		background: #FFFFFF;
		.header {
			border-bottom: 1px solid #ccc;
			height: 30px;
			font-size: 12px;
			.h_Top {
				width: 1200px;
				margin: 0 auto;
				position: relative;
				.h_Left {
					float: left;
					line-height: 30px;
					padding-left: 20px;
					&:before {
						content: '';
						display: block;
						position: absolute;
						left: 0;
						top: 3px;
						width: 20px;
						height: 20px;
						background: url(../assets/logo/index.png) left 3px;
					}
				}
			}
			.h_Right {
				float: right;
				>li {
					list-style: none;
					float: left;
					line-height: 30px;
					padding: 0 10px 0 22px;
					margin: 0 10px;
					position: relative;
					a {
						text-decoration: none;
						color: #666;
					}
					&:before {
						content: '';
						display: block;
						width: 20px;
						height: 20px;
						position: absolute;
						left: 0;
						top: 3px;
						background: url(../assets/logo/login_icon.jpg)no-repeat;
					}
					&:nth-of-type(2) {
						&:before {
							background: url(../assets/logo/register_icon.jpg)no-repeat;
						}
					}
					&:nth-of-type(3) {
						&:before {
							background: url(../assets/logo/order_icon.jpg)no-repeat;
						}
					}
					&:nth-of-type(4) {
						&:before {
							background: url(../assets/logo/city_icon.jpg)no-repeat;
						}
					}
					.icon_down {
						width: 16px;
						height: 16px;
						position: absolute;
						right: -10px;
						bottom: 0;
						background: url(../assets/logo/san_k.png)no-repeat;
					}
				}
			}
		}
	}
	
	.nav {
		height: 80px;
		padding-bottom:10px;
		.h_Nav {
			margin: 0 auto;
			width: 1200px;
			.navlist {
				display: flex;
				justify-content: space-between;
			}
			.logo {
				width: 145px;
				height: 72px;
				background: url(../assets/logo/logo.png)-61px 0 no-repeat;
				a {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	
	.fromNav {
		padding: 20px 0;
		position: relative;
		.fromI {
			width: 350px;
			height: 22px;
			border-radius: 10px;
			border: 1px solid #ccc;
			padding: 0 5px;
			input {
				border: 0;
				outline: none;
				width: 100%;
				text-indent: .2em;
				font-size: 12px;
				line-height:16px;
			}
		}
	}
	.navTitle {
		width: 750px;
		display: flex;
		padding-top: 20px;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		left:-60%;
		top: 60%;
		font-size: 16px;
		box-sizing: border-box;
		>ul {
			display: flex;
			margin-right: 100px;
			align-items: center;
			li{
				width: 80px;
				padding: 0 5px;
				margin: 0 10px;
				text-align: center;
				a {
					color: #333;
				}
				&.active a{
					color: #FF0000;
				}
				&:nth-of-type(5){
					width:150px;
					margin-left: 173px;
					>img{
						vertical-align:-4px;
					}
				}
			}
		}
	}
	.nCart{
		margin-top: 30px;
		position: relative;
		i{
			position: absolute;
			left: -8px;
			top:1px;
			width: 30px;
			height: 25px;
			background: url(../assets/logo/index.png)left -47px no-repeat;
		}
		a{
			padding-left: 20px;
			color: #666;
			font-size: 14px;
		}
	}
</style>