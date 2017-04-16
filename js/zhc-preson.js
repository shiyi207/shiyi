$(document).ready(function(){
//	联系人数
	$('.zhc-actop h6').html($('.zhc-list li').length)
	
//	点击左滑
//$('.zhc-li-right p').each(function(index,value){
//	value.addEventListener('touchmove',function(){
//		$(this).css('right','0')
//		$(this).children().first().css('display','inline-block')
//		$(this).children('span').css('display','none')
//	})
//	value.addEventListener('touchenter',function(){
//		$(this).css('right','-1.6rem')
//		$(this).children().first().css('display','none')
//		$(this).children('span').css('display','inline-block')
//	})
//})
	$('.zhc-li-right p').hover(function(){
		$(this).css('right','0')
		$(this).children().first().css('display','inline-block')
		$(this).children('span').css('display','none')
	},function(){
		$(this).css('right','-1.6rem')
		$(this).children().first().css('display','none')
		$(this).children('span').css('display','inline-block')
	})
//		删除
	$('.zhc-li-right p img').each(function(index,value){
		value.addEventListener('touchstart',function(){
			$(this).parentsUntil('ul').remove()	
		})
	})
		
		
//	楼层跳转?
	let arr=$.map($('.zhc-actrile ul'),function(index,val){
		return index.offsetTop
	})
	console.log(arr)
	$('.zhc-asdie li')
	window.onscroll=function(){
		let obj=document.body.scrollTop==0?document.documentElement:document.body;
		console.log(obj.scrollTop)
		arr.forEach(function(value,index){
		console.log(arr[index])
			if(obj.scrollTop>=arr[index]){
//				遍历左边角定位块里边的LI的集合  
				
				$('.zhc-asdie li').get().forEach(function(value,index){
//					先移除一个类名
					value.classList.remove('zhc-active')
				})
//				和arr所对应的下标改变lists那个下标的类名
				$('.zhc-asdie li').get()[index].classList.add('zhc-active')
			}
			
		})
	}
	
})
