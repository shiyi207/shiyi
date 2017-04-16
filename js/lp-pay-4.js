$().ready(function() {
	$("#signupForm").validate({
		rules:{
			user: {
			    required: true,//必填
			    minlength: 19,
			    maxlength: 19
			},
			pass: {
			    required: true,//必填
			    minlength: 18,
			    maxlength: 18
			},
			yinhang: "required",
		},
		errorPlacement:function(error,val){//一但验证错误就会触发函数，val是jquery对象	
			val.css('color','#F62466');
		},
		success:function(error,val){//验证成功触发函数,dom对象		
			val.css('color','#707070');	
		}
	})
})