function mySolution() {
    const textAreaInput = document.querySelector("#inputSection > textarea");
    const usernameInput = document.querySelector("#inputSection > div > input[type=username]");
    const ascQuestionSendButton = document.querySelector("#inputSection > div > button");
    const pendingQuestionsDiv = document.getElementById('pendingQuestions');
    const openQuestionsDiv = document.getElementById('openQuestions');
    

    ascQuestionSendButton.addEventListener('click', ascQuestion);

    function ascQuestion() {
        const question = textAreaInput.value;
        const username = usernameInput.value !== '' ? usernameInput.value : 'Anonymous';

        let pendingQuestionDiv = createHTMLElement('div', 'pendingQuestion');
        let usernameImg = createHTMLElement(
            'img',
            null,
            null,
            [{ k: 'src', v: './images/user.png' }, { k: 'width', v: 32 }, { k: 'height', v: 32 }]
        );
        let usernameSpan = createHTMLElement('span', null, username);
        let questionP = createHTMLElement('p', null, question);
        let actionsDiv = createHTMLElement('div', 'actions');

        let archiveButton = createHTMLElement('button', 'archive', 'Archive', null, { name: 'click', func: archiveQuestion });
        let openButton = createHTMLElement('button', 'open', 'Open', null, { name: 'click', func: openQuestion });

        actionsDiv = appendChildrenToParent([archiveButton, openButton], actionsDiv);
        pendingQuestionDiv = appendChildrenToParent([usernameImg, usernameSpan, questionP, actionsDiv], pendingQuestionDiv);
        pendingQuestionsDiv.appendChild(pendingQuestionDiv);
        textAreaInput.value = '';
        usernameInput.value = ''
    }

    function archiveQuestion() {
        this.parentNode.parentNode.remove();
    }

    function replyQuestion() {
        let button = this.parentNode.querySelector('button');
        
        let replaySectionSendButton = this.parentNode.parentNode.getElementsByClassName('replySection')[0];

        if (button.textContent === 'Reply') {
            replaySectionSendButton.style.display = 'block';
            button.textContent = 'Back';
        } else {
            replaySectionSendButton.style.display = 'none';
            button.textContent = 'Reply';
        }

    }

    function replySectionSendQuestion() {
        let answerValue = this.parentNode.getElementsByClassName('replyInput')[0].value;
        let answerLi = createHTMLElement('li', null, answerValue);
        let answerOl = this.parentNode.getElementsByClassName('reply')[0];
        answerOl.appendChild(answerLi);
        this.parentNode.getElementsByClassName('replyInput')[0].value = ''
    }

    function openQuestion() {
        // const question = this.parentNode.parentNode.querySelector('p').textContent;
        // const username = this.parentNode.parentNode.querySelector('span').textContent;

        // let openQuestionDiv = createHTMLElement('div', 'openQuestion');
        // let usernameImg = createHTMLElement(
        //     'img',
        //     null,
        //     null,
        //     [{ k: 'src', v: './images/user.png' }, { k: 'width', v: 32 }, { k: 'height', v: 32 }]
        // );
        // let usernameSpan = createHTMLElement('span', null, username);
        // let questionP = createHTMLElement('p', null, question);
        // let actionsDiv = createHTMLElement('div', 'actions');

        // let replyButton = createHTMLElement('button', 'reply', 'Reply', null, { name: 'click', func: replyQuestion });

        // let replySectionDiv = createHTMLElement('div', 'replySection');

        // let replySectionInput = createHTMLElement(
        //     'input',
        //     'replyInput',
        //     null,
        //     [{ k: 'type', v: 'text' }, { k: 'placeholder', v: 'Reply to this question here...' }]
        // );
        // let replySectionSendButton = createHTMLElement('button', 'replyButton', 'Send', null, { name: 'click', func: replySectionSendQuestion });
        // let replySectionOl = createHTMLElement('ol', 'reply', null, [{ k: 'type', v: 1 }]);

        // replySectionDiv = appendChildrenToParent([replySectionInput, replySectionSendButton, replySectionOl], replySectionDiv);
        // replySectionDiv.style.display = 'none';
        // actionsDiv.appendChild(replyButton);
        // openQuestionDiv = appendChildrenToParent([usernameImg, usernameSpan, questionP, actionsDiv, replySectionDiv], openQuestionDiv);
        // openQuestionsDiv.appendChild(openQuestionDiv);

        // this.parentNode.parentNode.remove();

        const openQuestionDiv = this.parentNode.parentNode;

        openQuestionDiv.className = 'openQuestion';
        let actionsDiv = openQuestionDiv.querySelector('div.actions');
        actionsDiv.innerHTML = '';
        const replyButton = createHTMLElement('button', 'reply', 'Reply', null, { name: 'click', func: replyQuestion });
        actionsDiv.appendChild(replyButton);
        let replySectionDiv = createHTMLElement('div', 'replySection', null, [{k: 'style', v: 'display: none;'}]);

        let replySectionInput = createHTMLElement(
            'input',
            'replyInput',
            null,
            [{ k: 'type', v: 'text' }, { k: 'placeholder', v: 'Reply to this question here...' }]
        );
        let replySectionSendButton = createHTMLElement('button', 'replyButton', 'Send', null, { name: 'click', func: replySectionSendQuestion });
        let replySectionOl = createHTMLElement('ol', 'reply', null, [{ k: 'type', v: 1 }]);

        replySectionDiv = appendChildrenToParent([replySectionInput, replySectionSendButton, replySectionOl], replySectionDiv);
        
        openQuestionDiv.appendChild(replySectionDiv);

        openQuestionsDiv.appendChild(openQuestionDiv);
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