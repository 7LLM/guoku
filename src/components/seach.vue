<template>
	<div>
		<Header></Header>
		<section>
			<div class="da_List">
				<div id="box">
					<div class="da_left">
						<div class="da_ti_le">
							<h4>人气商品</h4>
						</div>
						<Item>
							<div slot="currImg" class="glc_lt_gds"><img src="../assets/logo/Fruits18.jpg" /></div>
							<div slot="des" class="glc_lt_gds_des">
								<p>智利进口车厘子4斤</p>
								<span>￥258.00</span>
							</div>
						</Item>
						<Item>
							<div slot="currImg" class="glc_lt_gds"><img src="../assets/logo/Fruits18.jpg" /></div>
							<div slot="des" class="glc_lt_gds_des">
								<p>智利进口车厘子4斤</p>
								<span>￥258.00</span>
							</div>
						</Item>
						<Item>
							<div slot="currImg" class="glc_lt_gds"><img src="../assets/logo/Fruits18.jpg" /></div>
							<div slot="des" class="glc_lt_gds_des">
								<p>智利进口车厘子4斤</p>
								<span>￥258.00</span>
							</div>
						</Item>
						<Item>
							<div slot="currImg" class="glc_lt_gds"><img src="../assets/logo/Fruits18.jpg" /></div>
							<div slot="des" class="glc_lt_gds_des">
								<p>智利进口车厘子4斤</p>
								<span>￥258.00</span>
							</div>
						</Item>
						<Item>
							<div slot="currImg" class="glc_lt_gds"><img src="../assets/logo/Fruits18.jpg" /></div>
							<div slot="des" class="glc_lt_gds_des">
								<p>智利进口车厘子4斤</p>
								<span>￥258.00</span>
							</div>
						</Item>
					</div>
					<div class="da_right">
						<div class="da_top">
							<ul class="da_ti_rt">
								<li>综合</li>
								<li>新品</li>
								<li>销量</li>
								<li>价格</li>
							</ul>
						</div>
						
						<Item v-for="(item,index) in arr" :key='index'>
							<div slot="currImg" class="currImg"><img :src="item.img_url" /></div>
							<div slot="des" class="da_des">
								<span>{{item.price}}</span><span class="icon_inner"></span>
								<p class="title">{{item.title}}</p>
								<p>规格：{{item.spece}}g/杯</p>
								<p>原产地：{{item.address}}</p>
							</div>
							<div slot="number" class="da_bottom">
								<div class="shu">
									<span class="jian">-</span>
									<input type="text" name="" id="" value="1" />
									<span class="jia">+</span>
								</div>
								<div class="grgp_car">
								  <a href="#">加入购物车</a>
								</div>
							</div>
						</Item>
					</div>
				</div>
			</div>
		</section>
		<Footer></Footer>
	</div>
</template>
<script>
	import Header from './header'
	import Footer from './footer'
	import Item from './item'
	export default {
		components: {
			Header,
			Footer,
			Item
		},
		data() {
			return {
				arr: []
			}
		},
		methods: {
			getval() {
				this.$axios.get("../../static/data/datail.json")
					.then(res => {
						console.log(res.data.datail)
						this.arr = res.data.datail
					})
					.catch(err => {
						console.log(err)
					})
			}
		},
		mounted() {
			this.getval();
		}
	}
</script>
<style lang="less">
.da_ti_le{
	background: #FF0000;
	color: #fff;
	text-align: center;
	line-height: 35px;
}
.da_top{
	height:35px;
	background: #f5f5f5;
	border: 1px solid #ddd;
	.da_ti_rt{
		display: flex;
		height:100%;
		margin-left: 8px;
		margin-top:5px;
		>li{
			width: 66px;
			height: 23px;
			line-height:23px;
			background: #fff;
			border: 1px solid #ccc;
			text-align: center;
			/*border-left: none;*/
			&:not(:first-child){
				border-left: none;
			}
		}
	}
}

</style>