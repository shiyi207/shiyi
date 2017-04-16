window.onload=function(){
	let uls=document.querySelectorAll('.zhc-zl-two')
	uls.forEach((value,index)=>{
		let down=value.querySelector('.li-right > div')
		down.addEventListener('touchstart',function(){
			let kuai=down.querySelector('.zhc-right-full')
			let circle=down.querySelector('.zhc-right-circle')
			kuai.classList.toggle('move')
			circle.classList.toggle('moves')
		})

	})
}