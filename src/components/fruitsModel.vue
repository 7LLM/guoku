<template>
	<div class="produList">
		<!--<div class="produ_title">
			<div> <span>>> 专利分格</span></div>
			<ul class="subtitle">
				<li><a href="#">专利分格</a></li>
				<li><a href="#">专利分格</a></li>
				<li><a href="#">专利分格</a></li>
				<li><a href="#">专利分格</a></li>
				<li><a href="#">专利分格</a></li>
			</ul>
		</div>-->
		<div class="pro_list" v-for="(item,index) in pro" :key="index">
			<div class="listLeft"><img :src="item.recommend"/></div>
			<div class="listRight">
				<div class="listRight_item" v-for="(item,index) in item.group_list" :key="index">
					<a href="#">
						<img :src="item.img_url"/>
						<p class="pro_name">{{item.produ_name}}</p>
						<p class="pro_price">{{item.pro_price}}</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				pro:[]
			}
		},
		mounted(){
			this.$axios.get("../../static/data/fruitsModel.json")
			.then(res=>{
				console.log(res.data.data);
				this.pro=res.data.data;
			}).catch(res => {
				console.log(err)
			})
		}
	}
</script>

<style lang="less" scoped>
	.produList{
		width: 1200px;
		margin: 0 auto;
		text-align: center;
	}
	/*.produ_title{
		height: 35px;
		line-height: 35px;
		border-bottom: 3px solid #E51E13;
		>div{
			float: left;
			&::before{
				content: '';
				display: inline-block;
				clear: both;
				width: 35px;
				height: 35px;
				background: url(../assets/logo/icon_goods_1.png) no-repeat;
			}
			span{
				position: relative;
    			bottom: 11px;
    			color: #616161;
			}
		}
		.subtitle{
			overflow: hidden;
			float: left;
			li{
				float: left;
				margin-right: 10px;
			}
		}
	}*/
	.pro_list{
		width: 100%;
		display: flex;
		.listLeft{
			width: 425px;
			height: 548px;
			border-bottom: 1px solid #DDDDDD;
			border-right: 1px solid #DDDDDD;
			img{
				width: 425px;
				height: 548px;
			}
		}
		.listRight{
			width: 70%;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			.listRight_item{
				/*width: 254px;
				height: 250px;*/
				border: 1px solid red;
				a{
					display: block;
					.pro_price{
						color: #E51E13;
						font-size: 14px;
					}
					.pro_name{
						color: #000;
						font-size: 12px;
					}
				}
			}
			img{
				width: 200px;
				height: 200px;
			}
		}
	}
</style>