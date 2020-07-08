function solve() {
   let searchButton = document.getElementById('searchBtn');
   let input = document.getElementById('searchField');
   let rows = document.querySelectorAll('tbody tr');
   let selectedClass = document.querySelectorAll('td td')

   console.log(searchButton)

   searchButton.addEventListener('click', () => {

      Array.from(rows).forEach((row) => {
         if (row.innerHTML.includes(input.value)) {
            
         }

         input.value = '';

      })
   })

}