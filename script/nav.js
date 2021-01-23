class Navigation extends HTMLElement {
  constructor () {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <link rel="stylesheet" href="../styles/nav.css">
        <nav class="nav">
          <img src="../images/turing-logo.png" alt="Turing desarrollo Web Mendoza" width="40px">
          <h1>Turing</h1>
          <button class="menu" id="menu-button">
            <img id="burger" src="../images/menu.svg" alt="" width="30px">
            <img class="cross" id="cross" src="../images/cross.svg" alt="" width="30px" height="20px">
          </button>
          <ul class="menu-list" id="menu">
            <li class="menu-item">
              <a href="../index.html">Inicio</a>
            </li>
            <li class="menu-item">
              <a href="contact.html">Contacto</a>
            </li>
            <li class="menu-item"> 
              <a href="../services.html">Servicios</a>
            </li>
            <li class="menu-item">
              <a href="../us.html">Nosotros</a>
            </li>
            <li class="menu-item1">
              <a href="../contact.html" class="button-services">
                Contactar
              </a>
            </li>
          </ul>
      
          <ul class="menu-list-2" id="menu">
            <li class="menu-item2">
              <a href="../">Inicio</a>
            </li>
            <li class="menu-item2">
              <a href="contact.html">Contacto</a>
            </li>
            <li class="menu-item2"> 
              <a href="../services.html">Servicios</a>
            </li>
            <li class="menu-item2">
              <a href="../us.html">Nosotros</a>
            </li>
          </ul>
      
          <a href="../contact.html" class="button-services-2">
            Contactar
          </a>
      
        </nav>
      </header>
    `;
    const button = document.getElementById('menu-button')
    const menu = document.getElementById('menu')
    const burger = document.getElementById('burger')
    const cross = document.getElementById('cross')

    button.addEventListener('click', () => {
      if (menu.style.display === 'none') {
        menu.style.display = 'grid'
        burger.style.display = 'none'
        cross.style.display = 'block'
      } else {
        menu.style.display = 'none'
        burger.style.display = 'block'
        cross.style.display = 'none'
      }
    })
  }
}

window.customElements.define("my-navigation", Navigation)