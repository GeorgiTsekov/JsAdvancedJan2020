function solve() {
    bookTitleInput = document.querySelector("body > form > input[type=text]:nth-child(2)");
    yearInput = document.querySelector("body > form > input[type=number]:nth-child(4)");
    priceInput = document.querySelector("body > form > input[type=number]:nth-child(6)");
    addNewBookBotton = document.querySelector("body > form > button");
    newBooksDiv = document.querySelector("#outputs > section:nth-child(2) > div");
    oldBooksDiv = document.querySelector("#outputs > section:nth-child(1) > div");

    let totalStoreProfit = document.querySelector("body > h1:nth-child(3)");
    let totalStoreProfitSplited = totalStoreProfit.textContent.split(' ')
    let totalSum = Number(totalStoreProfitSplited[3]);

    addNewBookBotton.addEventListener('click', createNewBook);

    function createNewBook(e) {
        e.preventDefault();

        let title = bookTitleInput.value;
        let year = Number(yearInput.value);
        let price = Number(priceInput.value).toFixed(2);

        if (title !== '' && year > 0 && price > 0) {
            let bookDiv = createHTMLElement('div', 'book');
            let bookDivP = createHTMLElement('p', null, `${title} [${year}]`);

            if (year >= 2000) {
                let bookDivBuyItOnlyButton = createHTMLElement('button', null, `Buy it only for ${price} BGN`, null, { name: 'click', func: removeCurrentBook });
                let bookDivMoveToOldSectionButton = createHTMLElement('button', null, `Move to old section`, null, { name: 'click', func: moveCurrendBook });
                bookDiv = appendChildrenToParent([bookDivP, bookDivBuyItOnlyButton, bookDivMoveToOldSectionButton], bookDiv);
                newBooksDiv.appendChild(bookDiv);
            } else {
                let bookDivBuyItOnlyButton = createHTMLElement('button', null, `Buy it only for ${(price * 0.85).toFixed(2)} BGN`, null, { name: 'click', func: removeCurrentBook });
                bookDiv = appendChildrenToParent([bookDivP, bookDivBuyItOnlyButton], bookDiv);
                oldBooksDiv.appendChild(bookDiv);
            }
        }
    }

    function removeCurrentBook() {
        totalSum += Number(this.parentNode.children[1].textContent.split(' ')[4]);
        totalStoreProfit.textContent = `Total Store Profit: ${totalSum.toFixed(2)} BGN`

        this.parentNode.remove();
    }

    function moveCurrendBook() {
        let oldBookDiv = this.parentNode;
        let newPrice = (Number(oldBookDiv.children[1].textContent.split(' ')[4]) * 0.85).toFixed(2);
        this.parentNode.children[2].remove();

        let bookDivBuyIt = document.querySelector("#outputs > section:nth-child(2) > div > div > button:nth-child(2)")

        bookDivBuyIt.textContent = `Buy it only for ${newPrice} BGN`;


        oldBooksDiv.appendChild(oldBookDiv)
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

