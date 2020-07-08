// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution() {

    let inputQuestion = document.querySelector("#inputSection > textarea");
    let inputName = document.querySelector("#inputSection > div > input[type=username]");
    let sendButton = document.querySelector("#inputSection > div > button");


    let pQsDiv = document.querySelector("#pendingQuestions");
    let openQsDiv = document.querySelector("#openQuestions");


    sendButton.addEventListener('click', ascQuestion);

    function ascQuestion(e) {
        e.preventDefault();

        let author = inputName.value;
        let question = inputQuestion.value;

        if (author == '') {
            author = 'Anonymous'
        }

        let pQDiv = createHTMLElement('div', 'pendingQuestion');

        let pQDiv_Img = createHTMLElement('img', null, null, null, [{ k: 'src', v: './images/user.png' }, { k: 'width', v: 32 }, { k: 'height', v: 32 }]);
        let pQDiv_SpanAuthor = createHTMLElement('span', null, null, author);
        let pQDiv_PQuestion = createHTMLElement('p', null, null, question);
        let pQDiv_DivActions = createHTMLElement('div', 'actions');

        let pQDiv_DivActions_ArchiveButton = createHTMLElement('button', 'archive', null, 'Archive', null, { name: 'click', func: archiveQuestion });
        let pQDiv_DivActions_OpenButton = createHTMLElement('button', 'archive', null, 'Open', null, { name: 'click', func: openQuestion });

        pQDiv_DivActions = appendChildrenToParent([pQDiv_DivActions_ArchiveButton, pQDiv_DivActions_OpenButton], pQDiv_DivActions);

        pQDiv = appendChildrenToParent([pQDiv_Img, pQDiv_SpanAuthor, pQDiv_PQuestion, pQDiv_DivActions], pQDiv);

        pQsDiv.appendChild(pQDiv);

        inputQuestion.value = '';
        inputName.value = '';
    }

    function openQuestion() {

        const openQDiv = this.parentNode.parentNode;
        openQDiv.className = 'openQuestion';

        let openQDiv_actionsDiv = openQDiv.children[3];
        openQDiv_actionsDiv.innerHTML = '';

        let openQDiv_actionsDiv_replyButton = createHTMLElement('button', 'reply', null, 'Reply', null, { name: 'click', func: replyQuestion });
        openQDiv_actionsDiv.appendChild(openQDiv_actionsDiv_replyButton);

        let openQDiv_replaySectionDiv = createHTMLElement('div', 'replySection', null, null, [{ k: 'style', v: 'display: none;' }]);

        let openQDiv_replaySectionDiv_replyInput = createHTMLElement('input', 'replyInput', null, null, [{ k: 'type', v: 'text' }, { k: 'placeholder', v: 'Reply to this question here...' }]);
        let openQDiv_replaySectionDiv_sendButton = createHTMLElement('button', 'replyButton', null, 'Send', null, { name: 'click', func: sendAnswer });
        let openQDiv_replaySectionDiv_replyOl = createHTMLElement('ol', 'reply', null, null, [{ k: 'type', v: '1' }]);

        openQDiv_replaySectionDiv = appendChildrenToParent([openQDiv_replaySectionDiv_replyInput, openQDiv_replaySectionDiv_sendButton, openQDiv_replaySectionDiv_replyOl], openQDiv_replaySectionDiv);

        openQDiv.appendChild(openQDiv_replaySectionDiv);

        openQsDiv.appendChild(openQDiv);
    }

    function sendAnswer() {
        let replyOl = this.parentNode.parentNode.getElementsByClassName('reply')[1];

        let inputText = document.querySelector("#openQuestions > div > div.replySection > input");

        let replyOlLi = createHTMLElement('li', null, null, inputText.value);
        inputText.value = '';

        replyOl.appendChild(replyOlLi);

        console.log();
    }

    function replyQuestion() {
        let button = this.parentNode.children[0];

        let replySectionDiv =this.parentNode.parentNode.children[4];

        if (button.textContent === 'Reply') {
            button.textContent = 'Back';
            replySectionDiv.style.display = 'block';
        } else {
            button.textContent = 'Reply';
            replySectionDiv.style.display = 'none';
        }
    }

    function archiveQuestion() {
        this.parentNode.parentNode.remove();
    }

    function createHTMLElement(tagName, className, id, textContent, attributes, event) {

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
// To check out your solution, just submit mySolution() function in judge system.