const form = document.getElementById('display')
const taskList = document.getElementById('list')

form.onsubmit = function (e) {
  e.preventDefault()
  const inputField = document.getElementById('textInput')
  addTask(inputField.value)
  form.reset()
}

function addTask(description) {
  const taskContainer = document.createElement('div')
  const newTask = document.createElement('input')
  const taskLabel = document.createElement('label')
  const taskDescriptionNode = document.createTextNode(description)

  newTask.setAttribute('type', 'checkbox')
  newTask.setAttribute('name', description)
  newTask.setAttribute('id', description)

  taskLabel.setAttribute('for', description)
  taskLabel.appendChild(taskDescriptionNode)

  taskContainer.classList.add('task')
  taskContainer.appendChild(newTask)
  taskContainer.appendChild(taskLabel)

  taskList.appendChild(taskContainer)
}

// const list = document.getElementsById('list')

// document.getElementById('addTask').onsubmit = function(e){
//     e.preventDefault();
//     const inputField = document.getElementById('textInput');
//     addTask(inputField.value)
//     }

// function addTask(description) {
//   const newDiv = document.createElement('div')
//   const newTask = document.createElement('input')
//   const newLabel = document.createElement('label')

//   newTask.setAttribute('type', 'checkbox')
//   newLabel.setAttribute('for', description)

//   newDiv.classList.add('task')
//   newDiv.appendChild(newTask)
//   newDiv.appendChild(newLabel)

//   document.getElementsByClassName('list').appendChild(newDiv)
// }
