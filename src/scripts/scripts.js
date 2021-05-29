const darkModeTrigger = document.getElementById('toggleDarkTheme')
const body = document.getElementById('body')
const loSt = window.localStorage
const page = 'moldy-dark-mode'

darkModeTrigger.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode')
    body.classList.add('dark-mode')
    loSt.setItem(page, JSON.stringify({ darkMode: true }))
  } else {
    body.classList.remove('dark-mode')
    body.classList.add('light-mode')
    loSt.setItem(page, JSON.stringify({ darkMode: false }))
  }
})
window.addEventListener('DOMContentLoaded', () => {
  const setTheme = JSON.parse(loSt.getItem(page))
  if (setTheme.darkMode) {
    body.classList.remove('light-mode')
    body.classList.add('dark-mode')
  } else {
    body.classList.remove('dark-mode')
    body.classList.add('light-mode')
  }
})
