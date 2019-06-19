<template>
	<div>
		<Header></Header>
		<Shopitem></Shopitem>
		<section class="shopping">
			<div class="warp">
				<div class="S_top">
					<h1>我的购物车</h1>
					<div class="bgk_cart">
						<span>1.我的购物车</span>
						<span>2.填写核对订单信息</span>
						<span>3.成功提交订单</span>
					</div>
				</div>
				<div class="S_center">
					<div class="S_center_first">
						<form action="#">
							<input type="checkbox" name="" id="" value="全选" />
							<label for="">全选</label>
						</form>
						<p class="msg">商品信息</p>
						<p>市场价(元)</p>
						<p>单价(元)</p>
						<p>数量</p>
						<p>金额(元)</p>
						<p>操作</p>
					</div>
					<div class="S_center_second" v-for="(item,index) in arr" >
						<form><input type="checkbox" name="" id="" value="全选" /></form>
						<div class="s_Msg">
							<a href="#"><img src="../../assets/mallImg/huifruits_05.jpg"/></a>
							<p><a href="#">{{item.title}}</a></p>
						</div>
						<p>{{item.sprice}}</p>
						<p>{{item.dprice}}</p>
						<p class="number">
							<span @click="muist()">-</span>
							<input type="text" name="" id="" value="1" v-model="count"/>
							<span @click="add()">+</span>
						</p>
						<p><span>{{item.zprice}}</span></p>
						<p @click="del(index)">删除</p>
					</div>
					<div class="S_center_three">
						<form action="#">
							<input type="checkbox" name="" id="" value="全选" />
							<label for="">全选</label>
						</form>
						<p>已选商品<span>1</span>件</p>
						<p>总计(不含运费)</p>
						<p><span>￥{{toprice()}}</span></p>
						<p>
							<!--<a href="#"></a>-->
							<router-link to="/order">结算</router-link>
						</p>
					</div>
				</div>
			</div>
		</section>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from '../../components/header'
	import Footer from '../../components/footer'
	import Shopitem from '../../components/shop_item'
	export default {
			data(){
			return{
				count:1,
				arr:[
				   {title:'万圣节主题手工鲜榨果汁',dprice:25.90,zprice:25.90,sprice:25.90},
				   {title:'万圣节主题手工鲜榨果汁',dprice:24.90,zprice:24.90,sprice:24.90}
				]
			}
		},
		methods:{
			add(){
				this.count++;
			},
            muist(){
				this.count--;
				this.count=this.count<1?this.count+1:this.count
			},
			toprice(){
				var total=0;
				for (var i in this.arr) {
					var item=this.arr[i];
					total+=this.count*item.dprice
					console.log(total)
				}
				return total
			},
			del(index){
				this.arr.splice(index,1)
			}
		},
		components: {
			Header,
			Footer,Shopitem
		}
	}
</script>

<style lang="less">
.shopping {
		width: 100%;
		margin-bottom: 400px;
		.warp {
			width: 1200px;
			margin: 0 auto;
		}
	}
	
	.S_top {
		display: flex;
		justify-content: space-between;
		padding-top: 30px;
		h1 {
			font-size: 36px;
			color: #616161;
		}
		.bgk_cart {
			width: 500px;
			height: 24px;
			background: url(../../assets/logo/index.png)left -279px no-repeat;
			span {
				display: inline-block;
				margin-top: 35px;
				padding: 0 35px;
				color: #616161;
				font-size: 12px;
			}
		}
	}
	
	.S_center {
		border-top: 1px solid #ccc;
		margin-top: 30px;
		height: 60px;
		.S_center_first {
			display: flex;
			line-height: 60px;
			background: #F5F5F5;
			color: #616161;
			text-align: center;
			.msg{
				width:450px;
			}
			p{
				width: 200px;
				
			}
			>form {
				width: 151px;
				label {
					margin-left:15px;
				}
				input[type="checkbox"]{
					margin-top: 20px;
					width: 15px;
					height: 15px;
					margin-left: 15px;
				}
			}
		}
		.S_center_second{
			display: flex;
			height: 150px;
			line-height: 150px;
			text-align: center;
			border: 1px solid #f5f5f5;
			input[type="checkbox"]{
				margin-top: 60px;
				margin-left:28px;
				width: 15px;
				height: 15px;
			}
			.s_Msg{
				padding-left: 15px;
				display: flex;
				width:508px;
				text-align: center;
				>a{
					width:100px;
					height:100px;
					>img{
						width: 100%;
						vertical-align: middle;
					}
				}
				>p{
					width: 200px;
					padding-left: 40px;
					a{
						color: #616161;
					}
				}
			}
			p{
				width: 200px;
			}
			p.number{
				height: 25px;
				line-height: 25px;
				width:100px;
				background: #f2f2f2;
				margin-top: 62px;
				text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;
				>input{
					width:40px;
					height:20px;
					text-align: center;
				}
				>span{
					width:30px;
				}
			}
		}
		.S_center_three {
			display: flex;
			justify-content: space-between;
			text-align: right;
			height: 60px;
			line-height: 60px;
			background: #F5F5F5;
			color: #616161;
			>form {
				width: 500PX;
				margin-left:30px;
				text-align: left;
				label {
					margin-left:20px;
				}
				input[type="checkbox"]{
					margin-top: 20px;
					width: 15px;
					height: 15px;
				}
			}
			p {
				/*width: 200px;*/
				text-align: center;
			}
			p:last-of-type {
				width:160px;
				line-height: 60px;
				background: #FF3228;
				a {
					color: #fff;
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			span {
				color: red;
			}
		}
	}
</style>