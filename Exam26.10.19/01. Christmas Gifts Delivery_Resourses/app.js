function solution() {

    let addGiftInput = document.querySelector("body > div > section:nth-child(1) > div > input[type=text]");
    let addGiftButton = document.querySelector("body > div > section:nth-child(1) > div > button");
    let addList = [];
    let listOfGiftsUl = document.querySelector("body > div > section:nth-child(2) > ul");
    let sentList = document.querySelector("body > div > section:nth-child(3) > ul");
    let discardedList = document.querySelector("body > div > section:nth-child(4) > ul");

    addGiftButton.addEventListener('click', addGifts);

    function addGifts() {
        let gift = addGiftInput.value;
        addList.push(gift);
        addList = addList.sort();

        listOfGiftsUl.innerHTML = ''

        addList.forEach(el => {
            let giftUlLi = createHTMLElement('li', 'gift', null, el);
            let giftUlLiSendButton = createHTMLElement('button', null, 'sendButton', 'Send', null, { name: 'click', func: sendedGiftsFunc });
            let giftUlLiDiscardButton = createHTMLElement('button', null, 'discardButton', 'Discard', null, { name: 'click', func: discardedGiftsFunc });

            giftUlLi = appendChildrenToParent([giftUlLiSendButton, giftUlLiDiscardButton], giftUlLi);
            listOfGiftsUl.appendChild(giftUlLi);
        });

        addGiftInput.value = '';
    }

    function sendedGiftsFunc() {
        let gift = this.parentNode.textContent.split('SendDiscard')[0];
        let index = addList.findIndex(x => x === gift);
        addList.splice(index, 1);

        let giftUlLi = createHTMLElement('li', 'gift', null, gift);
        sentList.appendChild(giftUlLi);
        this.parentNode.remove();
    }

    function discardedGiftsFunc() {
        let gift = this.parentNode.textContent.split('SendDiscard')[0];
        let index = addList.findIndex(x => x === gift);
        addList.splice(index, 1);

        let giftUlLi = createHTMLElement('li', 'gift', null, gift);
        discardedList.appendChild(giftUlLi);
        this.parentNode.remove();
    }

    function createHTMLElement(tagName, className, id, textContent, attributes, event) {

        let element = document.createElement(tagName);

        if (className) {
            element.classList.add(className);
        }

        if (className) {
            element.classList.add(id);
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