function acceptance() {
	companyInput = document.querySelector("#fields > td:nth-child(1) > input[type=text]");
	productInput = document.querySelector("#fields > td:nth-child(2) > input[type=text]")
	quantityInput = document.querySelector("#fields > td:nth-child(3) > input[type=text]");
	scrapeInput = document.querySelector("#fields > td:nth-child(4) > input[type=text]");
	warehouse = document.getElementById('warehouse');

	addItButton = document.getElementById('acceptance');

	addItButton.addEventListener('click', warehouseFunc);

	function warehouseFunc() {
		let company = companyInput.value;
		let product = productInput.value;
		let quantity = quantityInput.value;
		let scrape = scrapeInput.value;

		if (company !== '' && product !== '' && quantity !== '' && scrape !== '') {
			let result = Number(quantity) - Number(scrape);

			if (result > 0) {
				let productData = `[${company}] ${product} - ${result} pieces`;

				let productDiv = createHTMLElement('div');
				let productP = createHTMLElement('p', null, productData);
				let outOfStockButton = createHTMLElement('button', null, 'Out of stock', null, { name: 'click', func: removeProduct });
				
				productDiv = appendChildrenToParent([productP, outOfStockButton], productDiv);

				warehouse.appendChild(productDiv);

				companyInput.value = '';
				productInput.value = '';
				quantityInput.value = '';
				scrapeInput.value = '';
			}
		}
	}

	function removeProduct() {
		this.parentNode.remove();
	}

	function createHTMLElement(tagName, className, textContent, attributes, event) {

		let element = document.createElement(tagName);

		if (className) {
			element.classList.add(className);
		}

		if (textContent) {
			element.textContent = textContent;
		}

		if (attributes) {
			attributes.forEach(attribute => element.setAttribute(attribute.k, attribute.v));
		}

		if (event) {
			element.addEventListener(event.name, event.func);
		}

		return element;
	}

	function appendChildrenToParent(children, parent) {
		children.forEach((c) => parent.appendChild(c));

		return parent;
	}
}