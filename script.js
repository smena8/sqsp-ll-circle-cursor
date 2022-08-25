window.addEventListener('DOMContentLoaded', (event) => {
	const cursorElem = document.createElement('div');
	cursorElem.setAttribute('class', 'cursor-ll');
	let bodyElemLL;
	if (document.querySelector("#siteWrapper") !== null) {
		bodyElemLL = document.querySelector("#siteWrapper").parentElement;
	} else {
		bodyElemLL = document.querySelector("body")
	}
	bodyElemLL.prepend(cursorElem);
	bodyElemLL.classList.add('cursor-none-ll');

	const cursor = document.querySelector('.cursor-ll');

	window.addEventListener('mousemove', cursorMove);
	const hoverArray = ['a', 'button', '.sqs-add-to-cart-button', '.sqs-block-button', 'input', 'select', 'option', 'label'];
	hoverArray.forEach(selector => {
		let elements = document.querySelectorAll(selector)
		elements.forEach(element => {
			if (selector === 'label' && (!element.hasAttribute('for') && element.firstElementChild.tagName !== 'INPUT')) {
				return;
			}
			element.classList.add('cursor-none-ll');
			element.addEventListener('mouseenter', addCursorHover);
			element.addEventListener('mouseleave', removeCursorHover);
		})
	})

	function cursorMove(e) {
		cursor.style.top = `${e.pageY}px`;
		cursor.style.left = `${e.pageX}px`;
	}

	function addCursorHover(e) {
		cursor.classList.add('cursor-hover-ll');
	}

	function removeCursorHover(e) {
		cursor.classList.remove('cursor-hover-ll');
	}

});
