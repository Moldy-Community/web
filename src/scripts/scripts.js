// Dark Mode
const darkModeTrigger = document.getElementById('toggleDarkTheme')
const body = document.getElementById('body')
const loSt = window.localStorage
const page = 'moldy-dark-mode'
// const menuIcon = document.querySelector('#navbar-menu-default')
// const codeElement = document.querySelectorAll('.code')

darkModeTrigger.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode')
    body.classList.add('dark-mode')
    loSt.setItem(page, JSON.stringify({ darkMode: true }))
    // menuIcon.id = 'navbar-menu-darkmode'

    // codeElement.forEach((element) => {
    //   element.id = 'code-dark'
    // })
  } else {
    body.classList.remove('dark-mode')
    body.classList.add('light-mode')
    loSt.setItem(page, JSON.stringify({ darkMode: false }))
    // menuIcon.id = 'navbar-menu-default'

    // codeElement.forEach((element) => {
    //   element.id = ''
    // })
  }
})
window.addEventListener('DOMContentLoaded', () => {
  const setTheme = JSON.parse(loSt.getItem(page))
  if (setTheme.darkMode) {
    body.classList.remove('light-mode')
    // menuIcon.id = 'navbar-menu-darkmode'
    body.classList.add('dark-mode')
    // codeElement.forEach((element) => {
    //   element.id = 'code-dark'
    // })
  } else {
    body.classList.remove('dark-mode')
    body.classList.add('light-mode')
    // menuIcon.id = 'navbar-menu-default'

    // codeElement.forEach((element) => {
    //   element.id = ''
    // })
  }
})

// Copy Commands
const copyCommandsElement = document.getElementById('copy-commands')

const copyCommand = (target) => {
  const input = document.createElement('INPUT')

  // Se le pasa como "value" al input el texto del elemento que se hizo click
  input.setAttribute('value', target.textContent)
  copyCommandsElement.appendChild(input)

  // Se selecciona el texto del input (solo funciona en inputs o textarea)
  input.select()

  // Se copia
  document.execCommand('copy')
  // Se remueve del DOM el input
  copyCommandsElement.removeChild(input)
}

const showMessageCopied = (target) => {
  target.classList.add('copied')
  setTimeout(() => {
    target.classList.remove('copied')
  }, 1500)
}

copyCommandsElement.addEventListener('click', (e) => {
  // Si clickea cualquier cosa que no sea el p??rrafo con la clase "copy" retorna y no ejecuta la funci??n
  if (!e.target.classList.contains('code')) return
  copyCommand(e.target)
  // Cambia el color a verde del bot??n de copiar y pasado un tiempo vuelve a negro y el texto "Copiar"
  showMessageCopied(e.target)
})
