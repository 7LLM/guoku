<template>
	<div class="footerWarp">
		<div class="Flogo">
			<img src="../assets/logo/foot_logo.jpg" />
		</div>
		<div class="warp">
			<div class="fot_box">
				<div class="fotL">
					<div class="footer_left_one">
						<p>总部地址 ：<span>北京市丰台区榴乡路88号石榴中心2号楼701</span></p>
					</div>
					<div class="footer_left_two">
						<p>预定电话：<span>400-6900-621</span></p>
						<p>微信公众号：<span>guocool621</span></p>
						<p>官方微博：<span>@果酷guocool</span></p>
					</div>
					<div class="footer_left_three">
						<p>在线客服</p>
						<p>北京 上海 深圳 杭州 广州 天津</p>
						<img src="../assets/logo/sina_icon.jpg" />
						<img src="../assets/logo/weixin_icon.jpg" />
					</div>
				</div>
				<div class="fotR">
					<div v-for="(item,index) in arr">
						<h3>{{item.title}} <span>{{item.fu}}</span></h3>
						<ul v-for="(item,index) in item.arrlist">
							<li>
								<a href="#">{{item}}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="fot_copy">
				<p>所有图片均受著作权保护，未经许可任何单位与个人不得使用、复制、转载、摘编，违者必究法律责任。</p>
				<p>CopyRight 2010-2018, 果酷网 版权所有 京ICP备18056299号</p>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				arr: [{
						title: '新手指南',
						fu: 'NEWBIT GUIDE',
						arrlist: ['用户注册', '购物流程', '订购方式', '会员等级']
					},
					{
						title: '合作伙伴',
						fu: 'COOPERATE',
						arrlist: ['滴滴出行', '网易 优酷', '易果生鲜', '58同城']
					},
					{
						title: '售后服务',
						fu: 'AFTER SERVICE',
						arrlist: ['退换货政策', '退换货流程', '常见问题', '投诉和建议']
					},
					{
						title: '关于我们',
						fu: 'ABOUT US',
						arrlist: ['发展历程', '联系我们', '加入我们']
					},
					{
						title: '项目活动',
						fu: 'PROGRAMMES',
						arrlist: ['试吃活动', '试吃报名', '企业活动', '活动定制']
					},
					{
						title: '配送方式',
						fu: 'SHIPPING METHODS',
						arrlist: ['配送运费', '配送时间', '配送范围']
					}
				]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.footerWarp {
		width: 100%;
		padding-bottom: 20px;
		position: fixed;
		bottom: 0;
		.Flogo {
			width: 100%;
			img {
				width: 100%;
			}
		}
	}
	
	.warp {
		margin: 0 auto;
		width: 1200px;
	}
	
	.fot_box {
		display: flex;
		font-size: 14px;
		text-align: left;
		padding: 10px 20px;
		.fotL {
			width: 400px;
			height: 300px;
			margin-right: 130px;
			>div {
				margin-bottom: 10px;
				color: #333;
				position: relative;
				span {
					color: #616161;
				}
				&:before {
					content: '';
					display: block;
					width: 20px;
					height: 20px;
					position: absolute;
					left: -23px;
					top: 1px;
					background: url(../assets/logo/address_icon.jpg) no-repeat;
					background-size: 20px auto;
				}
				&:nth-of-type(2) {
					&:before {
						background-image: url(../assets/logo/phoneF_icon.jpg);
					}
				}
				&:nth-of-type(3) {
					&:before {
						background-image: url(../assets/logo/icon_server.jpg);
					}
				}
				>img {
					margin-top: 10px;
				}
			}
		}
		.fotR {
			display: flex;
			flex-wrap: wrap;
			>div {
				width: 250px;
				margin-right: 10px;
				position: relative;
				h3 {
					font-weight: normal;
					margin-bottom: 10px;
					span {
						font-size: 14px;
					}
				}
				ul {
					line-height: 23px;
					a {
						color: #666666;
					}
				}
				&:before {
					position: absolute;
					left: -25px;
					top: 2px;
					content: '';
					display: block;
					width: 20px;
					height: 20px;
					background: url(../assets/logo/guide_icon.jpg)no-repeat;
					background-size: 20px auto;
				}
				&:nth-of-type(2) {
					&:before {
						background-image: url(../assets/logo/partner_icon.jpg);
					}
				}
				&:nth-of-type(3) {
					&:before {
						background-image: url(../assets/logo/service_icon.jpg);
					}
				}
				&:nth-of-type(4) {
					&:before {
						background-image: url(../assets/logo/aboutus_icon.jpg);
					}
				}
				&:nth-of-type(5) {
					&:before {
						background-image: url(../assets/logo/activity_icon.jpg);
					}
				}
				&:nth-of-type(6) {
					&:before {
						background-image: url(../assets/logo/delivery_icon.jpg);
					}
				}
			}
		}
	}
	
	.fot_copy {
		text-align: center;
		font-size: 14px;
		color: #616161;
		p:nth-of-type(2) {
			position: relative;
			&:after {
				content: '';
				display: block;
				width: 50px;
				height: 20px;
				position: absolute;
				right:28%;
				top: 4px;
				background: url(../assets/logo/pic.gif) no-repeat;
			}
		}
	}
</style>