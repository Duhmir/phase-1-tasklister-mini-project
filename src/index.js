document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form =document.querySelector('form')
  form.addEventListener('submit', function(e){
    e.preventDefault();
    handleToDo(e.target.new-task-description.value)
    form.reset()
  })
});

function handleToDo(todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDeleteButton)
  btn.textContent = 'x'
  li.textContent = `${todo} `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function handleDeleteButton(e){
  e.target.parentNode.remove()
}