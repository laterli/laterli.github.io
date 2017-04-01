



	var liLin=(function(){
	function addClass(dom,str){
		var newClass=''
		if(dom.className){
			newClass=dom.className+" "+str
		}else{
			newClass=str
		}
		dom.className=newClass	
	}
	function removeClass(dom,str){
		var dClass=dom.className;
		var arr=dClass.split(' ')
		for(var i=0;i<arr.length;i++){
			if(arr[i]===str){
				arr.splice(i,1)
			}
		}
		dom.className=arr.join(' ')
	}
	function siblings(dom){
		var ft=dom.parentNode;
		var chi=ft.children;
		var ind=[]
		for(var i=0;i<chi.length;i++){
			if(chi[i]!==dom){
				ind.push(chi)
			}
		}
		return ind
	}
	return {
		addClass:addClass,
		removeClass:removeClass,
		siblings:siblings
	}
})()