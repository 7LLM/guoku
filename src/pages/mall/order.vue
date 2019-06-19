<template>
	<div>
		<Header></Header>
		<Shopitem></Shopitem>
		<div id="orderWarp">
			<div class="debg">
				<div class="Tmsg">
					<h3>收货人信息</h3>
					<div class="address">
						<div>
							<h4><span>李</span><span>152****4660</span></h4>
							<p>中国 广东 深圳市 龙岗区</p>
							<p>*****2号</p>
						</div>
					</div>
					<p><button>新增收货地址</button><i class="jia">+</i></p>
				</div>
				<div class="delivery">
					<h3>送货清单</h3>
					<div class="centent">
						<a href="#">乐食汇食品旗舰店</a>
						<ul>
							<li>
								<p>请选择配送方式</p>
								<p class="putong">普通快递</p>
							</li>
							<li>
								<p>以下商品 单独配送 &nbsp;运费 0.00</p>
								<div class="D_des">
									<div class="D_des_one">
										<p class="name">商品名称</p>
										<p>单价</p>
										<p>数量</p>
										<p>总价</p>
									</div>
									<div class="D_des_one D_des_two">
										<div class="name">
											<img src="../../assets/mallImg/huifruits_03.jpg" />
											<div>
												<h5>【包邮】 进口甜心芒5件 金牌芒 新鲜水果</h5>
											   <strong>不支持7天无理由退货</strong>
											</div>
											
										</div>
										<p>29.90</p>
										<p>1</p>
										<p>29.9</p>
									</div>
								</div>
							</li>
						</ul>
						<div class="closing">
							<div class="liuy">
								<p>给卖家留言</p>
								<textarea name="" rows="2" cols="50" maxlength="79"></textarea>0/79
							</div>
							<div class="toprices">
								<p><span>1</span>件包裹</p>
								<p>商品总价：29.90</p>
								<p>运费 ：0.00</p>
								<p>店铺合计：<span class="rally">29.90</span></p>
							</div>
						</div>
					</div>
				</div>
				<div class="bill">
					<h3>发票</h3>
					<div class="invoice">
						<p><input type="checkbox" name="" id="" value="" />需要开发票</p>
						<ul>
							<li>
								<i></i>
								<p> 礼券/运费券</p>
								<div class="quan">
									<a href="#">
										<p>礼券(0张可用)</p>
										<img src="../../assets/mallImg/timg 2jpg.jpg" />
										<div>你可以
											<a href="#">了解礼券/运费券使用规则 </a> 或者
											<a href="#">激活</a>
										</div>
									</a>
									<a href="#"><p>运费 券(0张可用)</p></a>
								</div>
							</li>
							<li>
								<i></i>
								<p>余额<span>(您的账户中并没有余额)</span></p>
							</li>
							<li>
								<i></i>
								<p>礼品卡</p>
							</li>
							<li>
								<i></i>
								<p>优惠码</p>
							</li>
						</ul>
						<div class="topal">
							<p>商品金额：29.90</p>
							<p>运费：0.00</p>
							<p>应付金额：<span>29.90</span></p>
						</div>
						<div class="jiaddress">寄送至：中国 广东 深圳市 龙岗区 *****2号 李 150****4660</div>
						<div class="zhifu">
							<div class="fu_des">
								<div>
									<p>共<span>1</span>件商品</p>
									<p>应付金额：<strong>29.90</strong></p>
									<p>(含运费<span>0.00</span>元)</p>
								</div>
								<span class="hot">热销 商品订单请在1天内完成支付</span>
							</div>
							<a href="#">去支付</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
	import Header from '../../components/header'
	import Footer from '../../components/footer'
	import Shopitem from '../../components/shop_item'
	export default {
		components: {
			Header,Shopitem,Footer
		}
	}
</script>
<style lang="less">
	#orderWarp {
		/*margin-top: 150px;*/
		.debg {
			width: 1200px;
			margin: 0 auto;
			padding: 20px 40px;
		}
	}
	
	.Tmsg {
		padding: 10px 20px;
		width: 250px;
		h3 {
			margin-bottom: 15px;
		}
		.address {
			border: 1px solid #ccc;
			width: 100%;
			padding: 10px 20px;
			h4 {
				border-bottom: 1px solid #ccc;
				padding: 10px 0;
				display: flex;
				justify-content: space-between;
				span {
					font-size: 12px;
				}
			}
			p {
				margin: 10px 0;
			}
		}
		>p {
			margin-top: 20px;
			width: 120px;
			border: 1px solid #ccc;
			background: #f2f2f2;
			line-height: 30px;
			display: flex;
			button {
				border: none;
				background: none;
				padding-left: 5px;
			}
			.jia {
				font-style: normal;
				padding-left: 5px;
			}
		}
	}
	
	.delivery {
		padding: 10px 20px;
		.centent {
			width: 100%;
			>a {
				display: block;
				height: 50px;
				line-height: 50px;
				font-size: 16px;
				color: #333;
			}
			>ul {
				display: flex;
				margin-bottom: 5px;
				border: 1px solid #ccc;
				li:nth-of-type(1) {
					width: 28%;
					border-right: 1px solid #ccc;
					background: #fff;
					padding: 0 20px;
					p {
						margin: 10px 0;
						&.putong {
							width: 120px;
							text-align: center;
							line-height: 30px;
							background: #FF0000;
							color: #fff;
						}
					}
				}
				li:nth-of-type(2) {
					width: 70%;
					>p {
						line-height: 50px;
						padding-left: 20px;
						box-sizing: border-box;
						background: rgb(241, 245, 247);
					}
					.D_des {
						padding: 0 20px;
						background: #fff;
						color: #616161;
						.D_des_one {
							display: flex;
							flex: 1;
							line-height: 40px;
							text-align: center;
							.name {
								flex-basis: 80%;
							}
							>p {
								width: 20%;
							}
						}
						.D_des_two {
							>.name {
								display: flex;
								justify-content: space-around;
								img {
									width: 100px;
									height: 100px;
									vertical-align: middle;
								}
							}
							strong{
								color: #999999;
								margin-left: -85px;
							}
						}
					}
				}
			}
		}
		.closing {
			display: flex;
			padding-top: 15px;
			.toprices {
				display: flex;
				flex-wrap: wrap;
				>p {
					width: 130px;
					text-align: center;
				}
				.rally {
					color: #FF0000;
				}
			}
			.liuy {
				display: flex;
				flex-basis: 85%;
			}
		}
	}
	
	.bill {
		padding: 10px 20px;
		.invoice {
			padding:0 15px;
			>p {
				line-height: 35px;
				border-bottom: 1px solid #CCCCCC;
			}
		}
		ul{
			padding: 10px 0;
			li{
				padding-left: 30px;
				line-height: 40px;
				position: relative;
				>i{
					width: 15px;
					height:15px;
					background: #FFCA99;
					position: absolute;
					left: 0;
					top: 14px;
					border-radius: 50%;
				}
				.quan{
					display: flex;
					>a{
						width: 50%;
						border: 1px solid #ccc;
						color: #616161;
						line-height: 35px;
						font-size: 14px;
						padding: 0 10px;
						img{
							width: 90%;
							height: 150px;
							margin: 10px 0;
						}
						>p{
							text-align: center;
							
						}
						>div{
							font-size: 16px;
							>a{
								color: #FF3228;
							}
						}
						&:nth-of-type(2){
							border-left: 0;
							padding: 0;
							>p{
								background: rgb(241, 245, 247);
							}
						}
					}
				}
			}
		}
		.topal{
			text-align: right;
			padding: 0 20px;
			line-height: 25px;
			>p:nth-of-type(3){
				span{
					color: #FF0000;
				}
			}
		}
		.jiaddress{
			line-height: 50px;
			background:rgb(241, 245, 247) ;
			text-align: right;
			padding: 0 20px;
			margin-bottom: 10px;
		}
		.zhifu{
			display: flex;
		    height: 60px;
			justify-content: space-around;
			background: rgb(241, 245, 247);
			.fu_des{
				width:89%;
				text-align: right;
				font-size: 14px;
				margin-top:10px;
				>div{
					display: flex;
					margin-left: 690px;
					p{
						margin: 5px 0;
						padding: 0 5px;
						&:nth-of-type(2){
							margin: 0;
						}
					}
					strong{
						color: #FF0000;
						font-size: 20px;
					}
				}
				span{
					color: #FF0000;
					&.hot{
						padding-right: 32px;
						font-size: 14px;
					}
				}
			}
			>a{
				width: 100px;
				height: 35px;
				line-height: 35px;
				background: #FF0000;
				color: #fff;
				text-align: center;
				margin-top: 13px;
			}
		}
	}
</style>