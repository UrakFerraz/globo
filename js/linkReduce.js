{
	'use strict';
	
	function siteMapLinkReduce(texto, size) {
		let arr = [];
		let siteMapLink = document.querySelector(texto);
		let regex = siteMapLink.textContent.match(/(.)/gmi).forEach((el,index) => {
			if(index <= size) {
				arr.push(el);
			}
		});
		arr.push('...');
		let arr1 = arr.join('');
		console.log(arr1);
		siteMapLink.textContent = arr1;
	};

	siteMapLinkReduce('.siteMapListLast', 43);
}