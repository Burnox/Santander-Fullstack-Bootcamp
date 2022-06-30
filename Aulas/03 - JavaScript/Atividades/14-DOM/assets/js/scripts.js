const btn = document.getElementById('selector')
const h1 = document.getElementById('title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]

function changeClass() {
  btn.classList.toggle('dark-mode')
  h1.classList.toggle('dark-mode')
  body.classList.toggle('dark-mode')
  footer.classList.toggle('dark-mode')
}

function changeText() {
  if (body.classList.contains('dark-mode')) {
    h1.innerHTML = 'Dark Mode ON'
    btn.innerHTML = 'Light Mode'
  } else {
    h1.innerHTML = 'Light Mode ON'
    btn.innerHTML = 'Dark Mode'
  }
}

function changeMode() {
  changeClass()
  changeText()
}

btn.addEventListener('click', changeMode)
