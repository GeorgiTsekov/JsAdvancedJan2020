function create(words) {
   words.forEach(word => {
      const element = document.createElement('div');
      const paragraph = document.createElement('paragraph');

      element.appendChild(paragraph)
      paragraph.textContent = word;
      paragraph.style.display = 'none'
      paragraph.style.color = 'white'
      paragraph.style.margin = '6em 3em 6em 3em'
      document.getElementById('content').appendChild(element)
   });
   
   let button1 = document.querySelector("#content > div:nth-child(1)")
   let button2 = document.querySelector("#content > div:nth-child(2)")
   let button3 = document.querySelector("#content > div:nth-child(3)")
   let button4 = document.querySelector("#content > div:nth-child(4)")

   button1.addEventListener('click', (e) => {
      e.target.children[0].style.display = 'block'
   })
   button2.addEventListener('click', (e) => {
      e.target.children[0].style.display = 'block'
   })
   button3.addEventListener('click', (e) => {
      e.target.children[0].style.display = 'block'
   })
   button4.addEventListener('click', (e) => {
      e.target.children[0].style.display = 'block'
   })
}