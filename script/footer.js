class Footer extends HTMLElement {
  constructor () {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
    <link rel="stylesheet" href="./styles/footer.css">

      <div>
        <img src="./images/turing-logo.png" alt="" width="50px">
        <div class="icons-footer">
          <a href="https://www.instagram.com/creacionesturing/">
            <img src="./images/instagram.svg" alt="" width="30px">
          </a>

          <a href="mailto:creacionesturing@gmail.com">
            <img src="./images/email.svg" alt="" width="30px">
          </a>
        </div>
      </div>
    
      <div class="footer-links">
        <a href="./">Inicio</a>
        <a href="./contact.html">Contacto</a>
        <a href="./services.html">Servicios</a>
        <a href="./us.html">Nosotros</a>
      </div>

      <div>
        <a href=./contact.html" class="button-services">
          Contactar
        </a>
        <p>
          © Turing. All Rights Reserved
        </p>
      </div>
    </footer>
    `;
  }
}

window.customElements.define("my-footer", Footer)