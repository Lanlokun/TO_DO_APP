const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const todo = document.createElement('li')
  todo.className = classNames.TODO_ITEM
  todo.innerHTML = `
    <input type="checkbox" class="${classNames.TODO_CHECKBOX}">
    <span class="${classNames.TODO_TEXT}">${prompt('Enter a new todo:')}</span>
    <button class="${classNames.TODO_DELETE}">Delete</button>
  `
  list.appendChild(todo)
  updateCount()
}

function updateCount() {
  const unchecked = document.querySelectorAll('input:not(:checked)')
  itemCountSpan.innerHTML = list.children.length
  uncheckedCountSpan.innerHTML = unchecked.length
}

function deleteTodo() {
  const todo = this.parentNode
  list.removeChild(todo)
  updateCount()
}
