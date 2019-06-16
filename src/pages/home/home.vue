<template>
	<div>
		<!--头部-->
		<header>
			<!--头部导航-->
			<div class="head_nav">
				<img src="../../assets/homeImg/s_03.png" />
				<ul>
					<li>
						<!--<a href="#">首页</a>-->
						<router-link to="/home">首页</router-link>
					</li>
					<li>
						<!--<a href="#">会员商城</a>-->
						<router-link to="/mall">会员商城</router-link>
					</li>
					<li>
						<!--<a href="#">招商加盟</a>-->
						<router-link to="/joinIn">招商加盟</router-link>
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
		<!--轮播图部分-->
		<section class="banner">
			<div><img src="../../assets/homeImg/home1_03.jpg" /></div>
			<Banner swiperid="homeswiper" paginationtype="bullets" effecttype="coverflow" :autoplaytype=true :looptype=false>
				<div slot="swiper_con" class="swiper-slide">
					<img src="../../assets/banner/home1_lunbo_01.jpg" />
				</div>
				<div slot="swiper_con" class="swiper-slide">
					<img src="../../assets/banner/home1_lunbo_02.jpg" />
				</div>
				<div slot="swiper_con" class="swiper-slide">
					<img src="../../assets/banner/home1_lunbo_03.jpg" />
				</div>
				<div slot="swiper_con" class="swiper-slide">
					<img src="../../assets/banner/home1_lunbo_04.jpg" />
				</div>
			</Banner>
			<p class="mission">
				我们的使命<br /> 让更多白领方便吃水果，让工作做生活新鲜起来！
				<br /> 多年锻炼贴心企业管家服务，零食下午茶综合福利服务商
			</p>
			<a href="#" class="tryToEat"><img src="../../assets/homeImg/home1_05.jpg" /></a>
		</section>
		<!--加入我们部分-->
		<section class="joinIn">
			<div class="rotate_div">
				<div>FRUIT BENTO</div>
				<div>
					一度深受喜爱的水果便当，你值得拥有<br/><br/> 一度は好きな果物の弁当を深く受け、あなたは持っている
				</div>
			</div>
			<img src="../../assets/homeImg/home1_07.jpg" />
		</section>
		<!--加入会员部分-->
		<section class="member">
			<div class="member_left">
				<img src="../../assets/homeImg/home1_08_1.png"/>
				<h3>精选优质果源</h3>
				<p>具备核心保鲜技术及专利产品<br/>产地直供优质果源</p>
				<p class="english">
					Core preservation technology and patented products<br />
					Good quality fruit source for direct supply<br />
					in producing area
				</p>
			</div>
			<div class="member_right">
				<img src="../../assets/homeImg/home1_08_2.png"/>
				<h3>战略合作伙伴</h3>
				<p>易果生鲜<br />全球战略合作伙伴</p>
				<p class="english">
					Domestic fresh cut fruit industry<br />
					Leading brand, easy fruit fresh<br />
					Global strategic partnersProvide the whole<br />
					chain complete service from origin to user
				</p>
			</div>
			<div class="member_bottom">
				<img src="../../assets/homeImg/home1_08_3.png"/>
				我们提供优质的鲜切水果及相关产品
				<p>
					We offer fresh fruit and related products with<br />
					the highest performance price ratio
				</p>
				<a href="#"><img src="../../assets/homeImg/home1_09.png"/></a>
			</div>
		</section>
		<!--申请体验部分-->
		<section class="experience">
			<img class="store" src="../../assets/homeImg/home1_10.jpg"/>
			<div class="experience_cen">
				<p class="super">
					<span>商超便利&新零售</span><br />Supermarket Convenience Stores&New retail
				</p>
				<p class="super_desc">
					 随着新零售市场的火热升温，一定程度上也带动了商超便利场景的繁荣，两个场景的产<br />
					品和服务需求随着人们的使用频率的增高，要求的提升，成为近年来投资发展的热点。
				</p>
				<a href="#"><img src="../../assets/homeImg/home1_12.png"/></a>
			</div>
		</section>
		<!--招募合伙人部分-->
		<section class="partner">
			<img src="../../assets/homeImg/home1_13.jpg"/>
			<div class="partner_center">
				<p>我们是谁</p>
				<p>
					果酷是国内专注于即食鲜果产品及服务的品牌，公
					<br>司于2010年在北京正式成立。
					<br>果酷拥有业界的核心保鲜技术、全资质加
					<br>工车间，保证了鲜切产品的新鲜及安全，是目前国内鲜
					<br>切行业的领军企业。
				</p>
			</div>
			<img src="../../assets/homeImg/home1_15.jpg"/>
			<!--申请函-->
			<div class="partner_bottom">
				<h3>果酷城市合伙人加入申请函</h3>
				<form action="#" method="post">
					<p class="inputBox">
						<input type="text" placeholder="姓名:"/><input type="text" placeholder="目前业务描述："/>
					</p>
					<p class="inputBox">
						<input type="text" placeholder="所在城市："/><input type="text" placeholder="联系电话："/>
					</p>
					<div class="business_phone">业务咨询电话：400-6900-621</div>
					<a href="#"><img src="../../assets/homeImg/home1_17.png"/></a>
				</form>
			</div>
		</section>
		<!--底部-->
		<Footer></Footer>
	</div>
</template>

<script>
	import Banner from "../../components/banner"
	import Footer from "../../components/footer"
	
	export default {
		components: {
			Banner,Footer
		}
	}
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
	.head_img {
		/*需要完善有卡顿...*/
		animation: myfirst 5s infinite;
		transition: all linear 1s;
		margin-top: 90px;
		position: relative;
		img:first-child {
			position: absolute;
			top: -68%;
			right: 40%;
		}
	}
	/*动画样式*/
	@keyframes myfirst {
		0% {
			top: 0px;
		}
		16.67% {
			top: -1px;
		}
		33.33% {
			top: -2px;
		}
		50% {
			top: -3px;
		}
		66.67% {
			top: -2px;
		}
		83.33% {
			top: -1px;
		}
		100% {
			top: 0px;
		}
	}
	/*搜索框部分*/
	.head_search {
		form {
			position: relative;
			input {
				width: 47%;
				height: 44px;
				border: 5px solid #eee;
				text-indent: 20px;
				outline: none;
				border-radius: 8px;
				&::-webkit-input-placeholder {
					color: #999;
					font-size: 16px;
				}
			}
			img {
				position: absolute;
				top: 13%;
				right: 27%;
				width: 40px;
			}
		}
		.head_searchTxt {
			overflow: hidden;
			margin-left: 50%;
			margin-top: 10px;
			padding-left: 30px;
			transform: translateX(-50%);
			li {
				float: left;
				margin-right: 20px;
				a {
					color: #fff;
					font-size: 20px;
					font-weight: 500;
				}
			}
		}
	}
	/*更多部分图标*/
	.learnMore {
		display: block;
		margin-top: 16px;
	}
	/*轮播图部分,切换方式要改。。。*/
	.banner {
		text-align: center;
		margin: 20px 0;
		.swiper-container {
			width: 66%;
			margin: 20px auto;
			border: 1px solid #000;
			img {
				width: 100%;
			}
		}
		.mission {
			font-size: 24px;
			margin-bottom: 20px;
		}
		.tryToEat {
			display: inline-block;
		}
	}
	
	/*加入我们部分*/
	.joinIn {
		text-align: center;
		.rotate_div {
			position: relative;
			height: 602px;
			background: url(../../assets/homeImg/home1_06.jpg) no-repeat;
			background-size: cover;
			background-position: center;
			font-size: 28px;
			color: #fff;
			div:first-child{
				position: absolute;
				top: 25%;
				left: 18%;
				transform: rotate(6deg);
			}
			div:last-child{
				position: absolute;
				top: 56%;
				left: 5%;
				transform: rotate(-9deg);
			}
		}
	}
	/*加入会员部分*/
	.member{
		text-align: center;
		width: 100%;
	    height: 933px;
	    background: url(../../assets/homeImg/home1_08.jpg) no-repeat;
	    background-size: cover;
	    background-position: center;
	    .member_left{
	    	width: 50%;
	    	float: left;
	    	text-align: left;
	    	margin-top: 140px;
	    	padding-left: 190px;
	    	box-sizing: border-box;
	    }
	    .member_right{
	    	width: 50%;
	    	float: right;
	    	text-align: right;
	    	margin-top: 140px;
	    	padding-right: 190px;
	    	box-sizing: border-box;
	    }
	    h3{
	    	color: #F6207D;
	    	font-size: 20px;
	    	font-weight: 500;
	    }
	    p{
	    	font-size: 16px;
	    }
	    .english{
	    	color: #616161;
	    }
	    .member_bottom{
	    	float: left;
	    	margin-left: 50%;
	    	margin-top: 18%;
	    	transform: translateX(-50%);
	    	p{
	    		color: #616161;
	    	}
	    	a{
	    		display: inline-block;
	    	}
	    	img:first-of-type{
	    		display: block;
	    		margin-left: 50%;
	    		transform: translateX(-50%);
	    	}
	    }
	}
	/*申请体验部分*/
	.experience{
		text-align: center;
		.store{
			width: 75%;
		}
		.experience_cen{
			box-sizing: border-box;
			padding-top: 23%;
			color: #fff;
			height: 840px;
			background: url(../../assets/homeImg/home1_11.jpg) no-repeat;
			background-size: cover;
			background-position: center;
			.super{
				font-size: 36px;
				line-height: 40px;
				margin-bottom: 20px;
			}
			.super_desc{
				font-size: 22px;
				line-height: 40px;
				margin-bottom: 30px;
			}
		}
	}
	/*招募合伙人部分*/
	.partner{
		text-align: center;
		>div{
			background: url(../../assets/homeImg/home1_14.jpg) no-repeat;
			background-size: cover;
			background-position: center;
		}
		.partner_center{
			height: 540px;
			box-sizing: border-box;
			padding-top: 12%;
			p{
				color: #fff;
				font-size: 22px;
			}
			p:first-of-type{
				font-size: 32px;
				padding-bottom: 20px;
			}
		}
		/*申请函*/
		.partner_bottom{
			height: 740px;
			box-sizing: border-box;
			padding-top: 12%;
			background-image: url(../../assets/homeImg/home1_16.jpg);
			h3{
				color: #fff;
				font-size: 36px;
			}
			.inputBox{
				margin: 70px 0;
				input{
					text-indent: 12px;
					border-radius: 9px;
				    width: 300px;
				    height: 40px;
				    margin: 0 80px;
				    outline: none;
				}
			}
			.business_phone{
				color: #fff;
				font-size: 26px;
			}
		}
	}
	/*底部*/
	.footerWarp{
		position: relative;
	}
</style>