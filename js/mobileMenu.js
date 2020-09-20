{
	'use strict';
	document.querySelector('.mobileHeaderMenuBtn').addEventListener('click', () => {
		document.querySelector('.mobileDropdown').classList.toggle('mobileDropdownVisible');
	});

	document.querySelector('.mobileDropdown').addEventListener('click', (el) => {
		if(el.target.classList.contains(mobileLink)) {
			document.querySelector('.mobileDropdown').classList.toggle('mobileDropdownVisible');
		}
	});
}