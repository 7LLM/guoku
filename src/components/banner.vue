<template>
		<div class="swiper-container" :class="swiperid">
		    <div class="swiper-wrapper">
		    	<slot name="swiper_con"></slot>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		    <div :class="{'swiper-pagination':paginationshow}"></div>
		    <!-- 如果需要导航按钮 -->
		    <div class="swiper-button-prev"></div>
		    <div class="swiper-button-next"></div>
		</div>
</template>

<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css'
	export default {
		props:{
			swiperid:{type:String,default:""},	//唯一标识
			paginationshow:{ type:Boolean,default:true},  //是否显示分页器
			paginationtype:{ type:String,default:"bullets"}, //分页器的样式
			effecttype:{type:String,default:"swiper"},//切换样式
			autoplaytype:{type:Boolean,default:true},//自动切换
			looptype:{type:Boolean,default:true}// 循环模式选项
		},
		mounted:function(){
			new Swiper ('.'+this.swiperid, {
			    loop: this.looptype, // 循环模式选项
			    autoplay:this.autoplaytype,//自动切换
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			      type:this.paginationtype	//分页器样式
			    },
			    effect:this.effecttype,	//切换样式
			    // 如果需要前进后退按钮
			    navigation: {
			      nextEl: '.swiper-button-next',
			      prevEl: '.swiper-button-prev',
			    }
		  })
		}
	}
</script>

<style lang="less" scoped="scoped">
	
</style>