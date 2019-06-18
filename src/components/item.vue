<template>
	<div class="itemDatail">
		<slot name="currImg"></slot>
		<slot name="des"></slot>
		<slot name="number"></slot>
	</div>
</template>
<script>
	export default{
//		data(){
//			return {
//				
//			}
//		}
	}
</script>
<style lang="less">
	.da_List{
		width: 1200px;
		margin: 0 auto;
	}
	#box{
		margin-top: 125px;
		.da_left{
			float: left;
			width: 200px;
			margin-right: 10px;
			border: 1px solid #ccc;
			.itemDatail{
				padding: 10px 0 5px 0;
				.glc_lt_gds{
					text-align: center;
					>img{
						width: 150px;
						height: 150px;
						border: 1px solid #ccc;
					}
				}
				.glc_lt_gds_des{
					width: 150px;
					margin: auto;
					font-size: 12px;
					line-height: 20px;
					color: #666;
					p{
						padding-top: 5px;
					}
					span{
						color:#b9281e;
						font-size: 16px;
					}
				}
			}
			
		}
		.da_right{
			float: left;
			width:980px;
			justify-content: space-around;
			font-size: 12px;
			.itemDatail{
				width: 205px;
				height: 345px;
				float: left;
				margin:0 20px;
				margin-bottom: 28px;
				padding: 10px;
				box-sizing:border-box;
				.da_des{
					margin-top: 5px;
					p{
						padding:0 5px;
						line-height: 20px;
						&.title{
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
					span{
						font-size:20px;
						color: #bb3221;
						margin-bottom: 10px;
					}
					.icon_inner{
						float: right;
					    display: block;
					    width: 18px;
					    height: 18px;
					    background: url(../assets/logo/inner.png) no-repeat 0px -15px;
					    margin-top: 5px;
					}
				}
				.currImg{
					width: 200px;
					height: 200px;
					img{
						width:100%;
					}
				}
			}
			.da_bottom{
				display: flex;
				height: 40px;
				align-items: center;
				padding: 0 5px;
				.shu{
					width:76px;
					height: 25px;
					line-height: 25px;
					display: flex;
					background:#f0f0f0;
					text-align: center;
					>input{
						width:35px;
						height: 20px;
						text-align: center;
					}
					>span{
						width: 20px;
					}
				}
				.grgp_car{
					width:100px;
					height: 23px;
					line-height: 23px;
					border: 1px solid #e51e13;
					font-size: 12px;
					margin-left:5px;
					position: relative;
					a{
						color: #e51e13;
						display: block;
						width: 100%;
						height: 100%;
						padding-left:30px;
					}
					&:after{
						content: '';
						display: block;
						width: 30px;
						height: 20px;
						position: absolute;
						left: 0;
						top: 0;
						background: url(../assets/logo/inner.png)no-repeat 4px -35px;
					}
				}
			}
		}
	}
</style>