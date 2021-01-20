const button = document.getElementById('menu-button')
const menu = document.getElementById('menu')

button.addEventListener('click', function() {
  if (menu.style.display === 'none') {
    menu.style.display = 'grid'
  } else {
    menu.style.display = 'none'
  }
})

