$(document).ready(function() {
	$('.lp-footer')[0].addEventListener('touchstart',function(){
		$('.cover').css('display','block');
		$('.left')[0].addEventListener('touchstart',function(){
			if($('.left').hasClass('active')){
				location.href='lp-pay-2.html';
				$('.cover').css('display','none');
			}else{
				$('.left').toggleClass('active');
				$('.right').toggleClass('active');
			}	
		})
		$('.right')[0].addEventListener('touchstart',function(){
			if($('.right').hasClass('active')){
				location.href='lp-pay-1.html';
			}else{
				$('.left').toggleClass('active');
				$('.right').toggleClass('active');
			}	
		})
	})
//	删除//支付
	let money=0;
	$('.edit')[0].addEventListener('touchstart',function(){
		$('.lp-del').toggleClass('active');
		$('.lp-pay').toggleClass('active');
	})
	$('.lp-line1').each(function(index,value){
		value.addEventListener('touchstart',function(){
			$(value).children('.circle').toggleClass('change');
			if(index==0){
				if($(value).children('.circle').hasClass('change')){
					money=money+569;
				}else{
					money=money-569;
				}
				console.log(money)
				
			}
			if(index==1){
				if($(value).children('.circle').hasClass('change')){
					money=money+96;
				}else{
					money=money-96;
				}
				console.log(money)
			}
			if(index==2){
				if($(value).children('.circle').hasClass('change')){
					money=money+852;
				}else{
					money=money-852;
				}
				console.log(money)
			}
			if(index==3){
				if($(value).children('.circle').hasClass('change')){
					money=money+36;
				}else{
					money=money-36;
				}
			}
			$('.all').html(function(){
				if(money==0){
					money='0'+money;
				}
				return ''+money;
			});
			$('.yuan').html(function(){
				if(money==0){
					money='0'+money;
				}
				return ''+money;
			});
		})
	})
	$('.lp-del')[0].addEventListener('touchstart',function(){
		$('.circle').each(function(index,value){
			if($(value).hasClass('change')){
				$(value).parent().addClass('active');
			}
		})
	})
})