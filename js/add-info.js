window.addEventListener('DOMContentLoaded', addInfoInit)

function addInfoInit() {
	setTimeout(function(){
		document.querySelectorAll(".add-info").forEach((el) => {
            //const inforef = el.getAttribute("info-ref");
			var moreinfo;
			moreinfo = document.createElement("span");
			moreinfo.addEventListener("click", hideSeek);
			moreinfo.innerHTML = ' (<a href="javascript:void(0)">more info</a>)';
			el.appendChild(moreinfo);
		});
	},100);
}

function hideSeek(e) {
	var inforef = e.currentTarget.parentElement.getAttribute("info-ref");
//console.log(inforef);

	switch(inforef) {
		case 'fast-theme':
			console.log('fast');
		break;
		
		default: break;
	}
}