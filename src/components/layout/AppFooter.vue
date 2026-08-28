<template>
  <footer class="footer">
    <div class="footer-overlay"></div>

    <div class="footer-content">

      <div class="footer-column denuncias">
        <h2>Denúncias</h2>

        <a
          href="https://www.gov.br/mulheres/pt-br/ligue180"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ligue 180 - Central de<br />
          atendimento à mulher
        </a>

        <a
          href="https://www.gov.br/mdh/pt-br/acesso-a-informacao/disque-100/disque-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Disque 100 - Direitos Humanos
        </a>

        <a
          href="https://pc.sc.gov.br/?page_id=51"
          target="_blank"
          rel="noopener noreferrer"
        >
          Disque 181 - Polícia Civil
        </a>

        <a
          href="https://www.pm.sc.gov.br/paginas/nossas-atividades"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ligue 180 - Polícia Militar
        </a>

        <a
          href="https://denuncias.pc.sc.gov.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ligue 197 - Disque Denúncia
        </a>
      </div>

      <div class="footer-column acolhela">

        <!-- Volta para o topo da página -->
        <a href="#main" class="footer-logo">
          AcolhEla
        </a>

        <p class="footer-slogan">fff8ee
          Toda mulher tem o<br />
          direito de viver sem medo.
        </p>

        <!-- E-mail -->
        <a
          href="mailto:acolhela@gmail.com"
          class="footer-email"
        >
          acolhela@gmail.com
        </a>

        <!-- Redes sociais -->
        <div class="footer-social">

          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>

        </div>
      </div>


    
      <div class="footer-column mais-sobre">

        <h2>Mais sobre</h2>

        <a
          href="https://www.cnj.jus.br/violencia-contra-a-mulher/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portal CNJ - Violência contra a<br />
          mulher.
        </a>

        <a
          href="https://www.gov.br/mulheres/pt-br/acesso-a-informacao/institucional/competencias"
          target="_blank"
          rel="noopener noreferrer"
        >
          Secretaria Nacional de<br />
          Enfrentamento à Violência<br />
          contra Mulheres
        </a>

        <a
          href="https://www.gov.br/mulheres/pt-br/ligue180"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portal Ligue 180
        </a>

        <a
          href="https://www12.senado.leg.br/institucional/omv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Observatório da Mulher contra<br />
          a Violência
        </a>

      </div>

    </div>
  </footer>
</template>


<style scoped>


.footer {
  position: relative;
  width: 100%;
  min-height: 495px;

  background-image: url("/public/img/rodape.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  overflow: hidden;
}


.footer-overlay {
  position: absolute;
  inset: 0;

  background-color: rgba(192, 62, 92, 0.72);

  z-index: 1;
}


.footer-content {
  position: relative;
  z-index: 2;

  width: 100%;
  min-height: 495px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  align-items: stretch;

  color: #ffffff;
}


.footer-column {
  display: flex;
  flex-direction: column;
}


.footer-column h2,
.footer-logo {
  margin: 0;

  color: #FDF1E2;

  font-family: Georgia, "Times New Roman", serif;
  font-size: 56px;
  font-weight: bold;

  text-decoration: none;
}


.denuncias {
  padding-left: 63px;
  padding-top: 47px;
}

.denuncias h2 {
  margin-bottom: 30px;
}

.denuncias a {
  width: fit-content;

  margin-bottom: 23px;

  color: #ffffff;

  font-family: "Trebuchet MS", Arial, sans-serif;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.35;

  text-decoration: none;

  transition: opacity 0.2s ease;
}

.denuncias a:hover {
  opacity: 0.75;
}


.acolhela {
  align-items: center;
  text-align: center;

  padding-top: 47px;
}

.footer-logo {
  display: inline-block;

  margin-bottom: 29px;

  font-size: 55px;

  transition: opacity 0.2s ease;
}

.footer-logo:hover {
  opacity: 0.75;
}

.footer-slogan {
  margin: 0;

  color: #ffffff;

  font-family: "Trebuchet MS", Arial, sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.4;
}

.footer-email {
  margin-top: 61px;

  color: #ffffff;

  font-family: "Trebuchet MS", Arial, sans-serif;
  font-size: 30px;
  font-weight: 600;

  text-decoration: none;

  transition: opacity 0.2s ease;
}

.footer-email:hover {
  opacity: 0.75;
}

.footer-social {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 18px;

  margin-top: 50px;
}

.footer-social a {
  display: flex;
  align-items: center;
  justify-content: center;

  color: #f0528a;

  font-size: 55px;

  text-decoration: none;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.footer-social a:hover {
  transform: scale(1.08);
  opacity: 0.8;
}

.mais-sobre {
  align-items: center;
  text-align: center;

  padding-top: 47px;
}

.mais-sobre h2 {
  margin-bottom: 30px;
}

.mais-sobre a {
  margin-bottom: 23px;

  color: #ffffff;

  font-family: "Trebuchet MS", Arial, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.35;

  text-decoration: none;

  transition: opacity 0.2s ease;
}

.mais-sobre a:hover {
  opacity: 0.75;
}

@media (max-width: 1000px) {

  .footer {
    min-height: auto;
  }

  .footer-content {
    min-height: auto;

    grid-template-columns: 1fr;
    gap: 50px;

    padding: 50px 30px;
  }

  .denuncias,
  .acolhela,
  .mais-sobre {
    padding: 0;

    align-items: center;
    text-align: center;
  }

  .footer-column h2,
  .footer-logo {
    font-size: 45px;
  }

  .denuncias a,
  .mais-sobre a {
    font-size: 18px;
  }

  .footer-email {
    margin-top: 35px;
    font-size: 25px;
  }

  .footer-social {
    margin-top: 30px;
  }
}

@media (max-width: 600px) {

  .footer-content {
    padding: 40px 20px;
    gap: 45px;
  }

  .footer-column h2,
  .footer-logo {
    font-size: 38px;
  }

  .denuncias a,
  .mais-sobre a,
  .footer-slogan {
    font-size: 17px;
  }

  .footer-email {
    font-size: 21px;
  }

  .footer-social a {
    font-size: 45px;
  }

}

</style>