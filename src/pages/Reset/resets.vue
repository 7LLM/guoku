<template>
	<div>
		<Header></Header>
		<Shop_item ></Shop_item>
		<div class="bjc">
			<ul>
				<li class="list">
					<label><span>*</span>手机号：</label>
					<input type="text" v-model="iphone" @click="focus"/>
				</li>
				<li style="line-height: 0;">
					<p class="tis"  v-show="isShow">{{tishi}}</p>
				</li>
				
				<li class="list" style="display: flex;">
					<label><span>*</span>滑动验证：</label>
					<Huadon></Huadon>
				</li>
				<li class="list">
					<label><span>*</span>手机验证：</label>
					<input style="width: 100px;margin-right: 10px;"/>
					<button class="btn" @click="time">{{value}}</button>
				</li>
				<li>
					<input type="checkbox" style="margin-right: 5px;"/>我已阅读并同意<span class="cl">《果酷用户注册协议》</span>
					<p style="margin-left: 20px;">已经是果酷会员？<a href="#" class="cl">立即登录</a></p>
				</li>
				<li>
					<button class="bt" @click="reset">立即注册</button>
				</li>
			</ul>
			
		</div>
		<Footer></Footer>
		
	</div>
</template>
<script>
	import	Footer from "../../components/footer"
	import	Header from "../../components/header"
	import	Shop_item from "../../components/shop_item"
	import	Huadon from "../../components/huadon"
	export default{
		components:{
			Footer,Header,Shop_item ,Huadon
		},
		data(){
			return{
				value:"获取短信验证码",
				iphone:"请输入手机号",
				tishi:"手机号输入错误",
				isShow:false,
				num:60,
				timer:null,
				show:true
			}
		},
		methods:{
			reset(){
				var reg =new RegExp(/^13[5789][0-9]{8}$/)
				if(reg.test(this.iphone)){
					this.isShow=false
				}else{
					this.isShow=true
				}
			},
			focus(){
				this.iphone=""
			},
			time(){
				if(this.show){
					this.timer=setInterval(()=>{
					this.show=false
					this.value=this.num--+"s重新获取验证码"
						if(this.num<0){
							this.value="获取短信验证码"
							this.num=60
							clearInterval(this.timer)
							this.show=true	
						}
					},1000)
				}
			
			}
		}
	}
</script>
<style>
	.bjc{
		background-image:url(../../assets/reset/test_cm.jpg);
		background-size:100% ;
		height: 700px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	input{
		outline: none;
	}
	.bjc ul li{
		line-height: 30px;
		margin: 20px 0 ;
	}
	.bjc ul li label{
		width: 100px;
	}
	.bjc ul .list input{
		width: 224px;
		height: 30px;
		padding-left: 10px;
	}
	.tis{
		color: red;
		font-size: 12px;
		margin-left: 100px;
	}
	.bjc ul li .btn{
		width: 116px;
		text-align: center;
		height: 34px;
		color: #fff;
		background: red;
		border: none;
	}
	.cl{
		color: #3f9fff;
	}
	.bt{
		width: 200px;
		height: 50px;
		color: #fff;
		background: red;
		border: none;
	}
</style>