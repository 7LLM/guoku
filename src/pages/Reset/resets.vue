<template>
	<div>
		<Header></Header>
		<Shop_item ></Shop_item>
		<div class="bjc">
			<div id="form">
				<h2>用户注册</h2>
				<ul>
					<li>
						<span>*</span>
						<label>手机号:</label>
						<input type="text"/>
					</li>
					<li>
						<span>*</span>
						<label>手机号:</label>
						<input type=""/>
					</li>
					<li>
						<span>*</span>
						<label>手机验证:</label>
						<input type="text"/>
						<input class="btn" type="button" :value="value" />
					</li>
				</ul>
				<p>
					<input class="check" type="checkbox" />我已阅读并同意
					<span>《果酷用户注册协议》</span>	
				</p>
				<p style="text-indent: 20px;">
					已经是果酷会员？<span>立即登录</span>
				</p>
				<p>
					<button class="button">立即注册</button>
				</p>
				
			</div>
			
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
	import	Footer from "../../components/footer"
	import	Header from "../../components/header"
	import	Shop_item from "../../components/shop_item"
	export default{
		components:{
			Footer,Header,Shop_item 
		},
		data(){
			return{
				value:"获取短信验证码"
			}
		}
	}
</script>
<style>
	.bjc{
		background-image:url(../../assets/reset/test_cm.jpg);
		background-size:100% ;
		height: 1200px;
		display: flex;
		justify-content: center;
		
	}
	#form{
		margin-top: 150px;
		width: 400px;
	}
	h2{
		text-align: center;
	}
	#form li{
		height: 40px;
		line-height: 40px;
	}
	#form li>span{
		display: inline-block;
		width: 10px;
		text-align: center;
		color: red;
	}
	#form li>label{
		display: inline-block;
		width: 80px;
	}
	#form li input{
		height: 25px;
		width: 250px;
	}
	#form li:last-child>input{
		width: 120px;
	}
	#form li:last-child>.btn{
		background: red;
		color: #fff;
		border: none;
		height: 28px;
		font-size: 14px;
	}
	#form  p{
		margin: 20px 0;
	}
	#form  p span{
		color: darkturquoise;
	}
	.check{
		margin-right: 5px;
	}
	.button{
		width: 200px;
		height: 40px;
		border: none;
		background: red;
		color: #fff;
		font-size: 14px;
	}
</style>