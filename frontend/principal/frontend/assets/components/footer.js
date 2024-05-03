const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
    <style>
        .footer-information>h1 {
        font-size: 1.8rem;
        }
        .footer-information > p {
            margin: 0 auto;
            width:40vh;
            padding: 0 10px;
        } 
        .social-row > h1 {
            display: flex;
            justify-content: center;
            font-size: 1.8rem;
        }
        .social-row > p {
            font-size: 1.4rem;
            display: flex;
            justify-content: center;
        } 
        .social-row > a{
            display: flex;
            justify-content: center;
            font-size: 1.4rem;
        }
        .social-row > a:hover{
            color: rgb(43, 206, 22);
        }
        .footer-information {
            display: flex;
            font-size: 1.4rem;
            flex-direction: column;
            align-items: center;
        }

        .list-information {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .grid-footer {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        .programador {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            height: 20vh;
        }
        .footer-icons {
            width: 100vh;
            display: flex;
            justify-content: space-between;
        }
        .sociais-footer{
            display: flex;
            justify-content: center;
            padding: 7vh;
        }
        .footer-content {
            max-width: 120rem;
            margin: 0 auto;
            height: 24vh;
        }
        .footer-icons > img {
            width: 6vh;
        }
        footer {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            list-style: none;
        }

        ul li {
            list-style: none;
            display: inline;
        }

        a {
            margin: 0 15px;
            color: inherit;
            text-decoration: none;
        }
        a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #333;
        }
        .social-row li a {
            margin: 0 15px;
        }
        .style-footer {
            width: 100%;
            background-color: #12121212;
        }
        @media (max-width: 800px) {
            .social-row > a {
                font-size: 1.4rem;
            }
            .footer-information > p {
                width:100%;
            } 

        }

    </style>
    <footer class="footer-content">
        <div class="style-footer">

            <div class="sociais-footer">
                <div class="footer-icons">
                    <a href="">
                        <img src="/frontend/principal/frontend/assets/img/icon-whatsapp.webp">
                    </a>
                    <a href="">
                        <img src="/frontend/principal/frontend/assets/img/icon-facebook.webp">
                    </a>
                    <a href="">
                        <img src="/frontend/principal/frontend/assets/img/icon-linkedin.webp">
                    </a>
                    <a href="">
                        <img src="/frontend/principal/frontend/assets/img/icon-instagran.webp">
                    </a>
                </div>
            </div>
            <div class="grid-footer main-content">
                <div class="list-information">
                    <li class="footer-information">
                        <h1>Way ultima milha</h1>
                        <p>Em busca da excelência no transporte de cargas, a nossa transportadora se destaca como a
                            melhor opção em todo o Brasil e região. </p>
                    </li>
                </div>
                <div class="footer-contact">
                    <li class="social-row">
                        <h1>Fale conosco</h1>
                        <p>Contato: 62 992103944</p>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=inspireweb23@gmail.com&su=Orçamento para uma entrega&body=Adicione detalhes sobre o pedido">Enviar
                            e-mail</a>
                    </li>
                </div>
            </div>
            <div class="footer-content">
                <p class="programador">
                    <a rel="nofollow" target="_blank" href="https://inspireweeb.netlify.app/#">Feito com <span class="heart">♡</span> Por Brendon
                        Fernandes</a>
                </p>
            </div>
        </div>
    </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);