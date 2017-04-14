$(document).ready(function(){
	$('.zhc-zan h1').click(function(){
		let val=parseInt($('.zhc-zan h1 span').html())
		$('.zhc-zan h1 span').html(val+=1)
//		$('.zhc-zan h1 i').fadeTo(0.2,100)
	})
})