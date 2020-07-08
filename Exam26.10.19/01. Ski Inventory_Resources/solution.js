function solve() {
   let priceSoFar = 0;
   let filterInput = document.getElementById('filter');
   let filterButton = document.querySelector("#products > div > button");

   const ulParagraph = document.querySelector("#products > ul");
   let ulElement = document.querySelector("#myProducts > ul");

   let addNameInput = document.querySelector("#add-new > input[type=text]:nth-child(2)");
   let addQuantityInput = document.querySelector("#add-new > input[type=text]:nth-child(3)");
   let addPriceInput = document.querySelector("#add-new > input[type=text]:nth-child(4)");
   let addButton = document.querySelector("#add-new > button");

   let totalPriceRef = document.querySelectorAll('h1');
   let buyButton = document.querySelector("#myProducts > button");

   addButton.addEventListener('click', (e) => {
      e.preventDefault()

      const liParagraph = document.createElement('li');
      const name = document.createElement('span');
      const quantity = document.createElement('strong');
      name.innerText = addNameInput.value;
      quantity.innerText = `Available: ${addQuantityInput.value}`;
      const divParagraph = document.createElement('div');
      liParagraph.appendChild(name);
      liParagraph.appendChild(quantity);
      const price = document.createElement('strong');
      price.innerText = Number(addPriceInput.value).toFixed(2);

      let addButtonClientList = document.createElement('button');
      addButtonClientList.innerText = "Add to Client's List";
      divParagraph.appendChild(price);
      divParagraph.appendChild(addButtonClientList);
      liParagraph.appendChild(divParagraph);

      ulParagraph.appendChild(liParagraph);
   })

   filterButton.addEventListener('click', (e) => {
      Array.from(ulParagraph.children).forEach(element => {
         let name = element.getElementsByTagName('span')[0].innerText;
         if (name.toLowerCase().includes(filterInput.value.toLowerCase())) {
            element.style.display = 'block'
         } else {
            element.style.display = 'none'
         }
      });
   })

   ulParagraph.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {

         let price = e.target.parentNode.querySelector('strong').textContent
         let productName = e.target.parentNode.parentNode.querySelector('span').textContent;
         const liParagraph = document.createElement('li');
         liParagraph.innerText = productName;

         let basquetPrice = document.createElement('strong');
         basquetPrice.innerText = price;
         
         liParagraph.appendChild(basquetPrice);
         
         ulElement.appendChild(liParagraph);
         priceSoFar += Number(price);
         totalPriceRef[1].innerHTML = `Total Price: ${(priceSoFar).toFixed(2)}`;
         
         let availableProduct = Number((e.target.parentNode.parentNode.querySelector('strong').textContent).split(': ')[1])
         availableProduct--;
         if (availableProduct > 0) {
            e.target.parentNode.parentNode.querySelector('strong').textContent = `Available: ${availableProduct}`;
         } else {
            e.target.parentNode.parentNode.remove();
         }
      }
   })

   buyButton.addEventListener('click', (e) => {
      ulElement.innerHTML = ''
      priceSoFar = 0;
      totalPriceRef[1].innerHTML = `Total Price: ${(priceSoFar).toFixed(2)}`;
   })
}