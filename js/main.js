var clickBlock = document.querySelectorAll('#pageWhatCrashed .block .insideWrapBlock'); //Выбираем элемент
var myPopover  = document.querySelectorAll('#whatWeRepair .myPopover');
var body       = document.querySelectorAll('body');

for (var i = 0; i < clickBlock.length; i++){
	
	var x = clickBlock[i];
	
	x.addEventListener('click', function(){

		for(var j = 0; j < myPopover.length; j++){

			var y = myPopover[j];
			
			if(myPopover[j].classList.contains('show')){
				myPopover[j].classList.remove('show');
			}else if(myPopover[+this.id].classList.contains('show')){
				myPopover[+this.id].classList.remove('show');
			}else if(!(myPopover[+this.id].classList.contains('show'))){
				myPopover[+this.id].classList.add('show');
			};
			if(!(myPopover[+this.id].classList.contains('show'))){
				myPopover[+this.id].classList.add('show');
			};
		}

	})
}

/*for (var i = 0; i < clickBlock.length; i++){
	
	var clickBlockCur = clickBlock[i];
	
	clickBlock[i].addEventListener('click', function(){
		
		var classes = this.getAttribute('class'),
		newClasses = '',
		classesArr = classes.split(' '),
		newclassesArr = classes.split(' ');
		
		for (var j = 0; j < classesArr.length; j++){
			if(classesArr[j] == 'show'){
				classesArr.splice([j] ,1);
			}
		}
		
		if(classesArr.length === newclassesArr.length){
			classesArr.push('show');
			newClasses = classesArr.join(' ');
		} else {
			newClasses = classesArr.join(' ');
		}

		for(var l = 0; l < clickBlock.length; l++){
			
			oldClasses    = clickBlock[l].getAttribute('class');
			oldClassesArr =  oldClasses.split(' ');

			for(var k = 0; k < oldClassesArr.length; k++){
				
				if(oldClassesArr[k] == 'show'){
					oldClassesArr.splice([k], 1);
				}

				oldClasses = oldClassesArr.join(' ');
				clickBlock[l].setAttribute('class', oldClasses);
			}
		} 

		this.setAttribute('class', newClasses);
	})
}*/







