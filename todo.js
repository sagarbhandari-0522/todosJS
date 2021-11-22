 let addTodos = document.querySelector('.addItem');
 let searchTodos = document.querySelector('.searchItem')
 let ul = document.querySelector('ul')
 let emptyAdd = document.querySelector('#alert')
 addTodos.addEventListener('submit', e => {
     e.preventDefault()
     if (e.target.add.value.trim().length !== 0) {
         console.log(e.target.add.value)
         ul.innerHTML += `<li>${e.target.add.value.trim()}<i class="fas fa-trash-alt"></i></li> `
         e.target.add.value = ''
         alert.textContent = ``
     } else if (e.target.add.value.trim().length === 0) {
         emptyAdd.textContent = 'Invalid Input'
         e.target.style.color = 'red'

     }
     window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
 })

 let delTodos = document.querySelector('ul')
 delTodos.addEventListener('click', e => {
     console.log(e.target.nodeName)
     if (e.target.nodeName === 'I') {
         e.target.parentNode.remove()
     }
 })

 searchTodos.search.addEventListener('keyup', e => {
     e.preventDefault()
     let term = e.target.value;
     //console.log(term)
     let liArray = [...document.querySelectorAll('li')]
     let list = liArray.filter(li => {
         li.classList.remove('hidden')
         return (!(li.textContent.includes(term)));

     })
     list.forEach(li => {
         li.classList.add('hidden');
     })
 })