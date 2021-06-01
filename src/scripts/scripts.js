// Dark Mode
const darkModeTrigger = document.getElementById("toggleDarkTheme")
const body = document.getElementById("body")
const loSt = window.localStorage
const page = "moldy-dark-mode"
const menuIcon = document.querySelector("#navbar-menu-default")

darkModeTrigger.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode")
    body.classList.add("dark-mode")
    loSt.setItem(page, JSON.stringify({ darkMode: true }))
    menuIcon.id = "navbar-menu-darkmode"
  } else {
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")
    loSt.setItem(page, JSON.stringify({ darkMode: false }))
    menuIcon.id = "navbar-menu-default"
  }
})
window.addEventListener("DOMContentLoaded", () => {
  const setTheme = JSON.parse(loSt.getItem(page))
  if (setTheme.darkMode) {
    body.classList.remove("light-mode")
    menuIcon.id = "navbar-menu-darkmode"
    body.classList.add("dark-mode")
  } else {
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")
    menuIcon.id = "navbar-menu-default"
  }
})

// Copy Commands
const copyCommandsElement = document.getElementById("copy-commands")

const copyCommand = (target) => {
  const input = document.createElement("INPUT")

  // Se le pasa como "value" al input el texto del elemento que se hizo click
  input.setAttribute("value", target.textContent)
  copyCommandsElement.appendChild(input)

  // Se selecciona el texto del input (solo funciona en inputs o textarea)
  input.select()

  // Se copia
  document.execCommand("copy")
  // Se remueve del DOM el input
  copyCommandsElement.removeChild(input)
}

const showMessageCopied = (target) => {
  target.classList.add("copied")
  setTimeout(() => {
    target.classList.remove("copied")
  }, 1500)
}

copyCommandsElement.addEventListener("click", (e) => {
  // Si clickea cualquier cosa que no sea el párrafo con la clase "copy" retorna y no ejecuta la función
  if (!e.target.classList.contains("code")) return
  copyCommand(e.target)
  // Cambia el color a verde del botón de copiar y pasado un tiempo vuelve a negro y el texto "Copiar"
  showMessageCopied(e.target)
})
