var a = true;
var timerId;

function mas(){
	if(a){
		timerId = setInterval(function() {
			if (Lai.innerHTML != "Laik@__") 
				Lai.innerHTML = "Laik@__";
			else
				Lai.innerHTML = "Laik@_/";
		}, 1000);
		a=false;
	}
	else{
		clearInterval(timerId);
		Lai.innerHTML = "Laiks";
	}	
}

window.onscroll = function() {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	scrollTop/=300;
	document.getElementById("paras").style.background = "rgba(45,45,45,"+ scrollTop + ")";
	document.getElementById("paras").style.background = "rgba(45,45,45,"+ scrollTop + ")";
}
