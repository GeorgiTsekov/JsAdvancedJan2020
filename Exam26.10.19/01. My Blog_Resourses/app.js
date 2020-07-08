function solve() {
   let authorInput = document.querySelector("#creator");
   let titleInput = document.querySelector("#title");
   let categoryInput = document.querySelector("#category");
   let contentInput = document.querySelector("#content");
   let createButton = document.querySelector("body > div > div > aside > section:nth-child(1) > form > button");
   let articlesSection = document.querySelector("body > div > div > main > section");
   let archiveUl = document.querySelector("body > div > div > aside > section.archive-section > ul");
   let addList = [];

   createButton.addEventListener('click', articlesSectionFunc);

   function articlesSectionFunc(e) {
      e.preventDefault()
      let autor = authorInput.value;
      let title = titleInput.value;
      let category = categoryInput.value;
      let content = contentInput.value;

      let article = createHTMLElement('article');

      let articleH1 = createHTMLElement('h1', null, null, null, title);

      let articleP = createHTMLElement('p', null, null, null, 'Category:');
      let articlePStrong = createHTMLElement('strong', null, null, null, category);
      articleP.appendChild(articlePStrong);

      let articleCreatorP = createHTMLElement('p', null, null, null, 'Creator:');
      let articleCreatorPStrong = createHTMLElement('strong', null, null, null, autor);
      articleCreatorP.appendChild(articleCreatorPStrong);

      let articleContentP = createHTMLElement('p', null, null, null, content);

      let articleDivClass = createHTMLElement('div', 'buttons', 'buttons');
      let deleteButton = createHTMLElement('button', 'btn', 'delete', null, 'Delete', null, { name: 'click', func: deleteFunc });
      let archiveButton = createHTMLElement('button', 'btn', 'archive', null, 'Archive', null, { name: 'click', func: archiveFunc });
      articleDivClass = appendChildrenToParent([deleteButton, archiveButton], articleDivClass);

      article = appendChildrenToParent([articleH1, articleP, articleCreatorP, articleContentP, articleDivClass], article);
      articlesSection.appendChild(article)
   }

   function deleteFunc() {
      this.parentNode.parentNode.remove();
   }

   function archiveFunc() {
      let input = this.parentNode.parentNode.children[0].textContent;
      addList.push(input);
      addList = addList.sort();
      archiveUl.innerHTML = '';
      addList.forEach(el => {
         let articleLi = createHTMLElement('li', null, null, null, el);
         archiveUl.appendChild(articleLi);
      });

      this.parentNode.parentNode.remove();
   }

   function createHTMLElement(tagName, className, className, id, textContent, attributes, event) {

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
