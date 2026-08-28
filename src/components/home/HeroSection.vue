<template>
  <section class="hero-section">

    <!-- Imagem inteira do banner -->
    <div class="hero-imagem">

      <img
        src="/img/hero.png"
        alt="Campanha contra a violência contra a mulher"
      />

      <!-- Texto sobre a imagem -->
      <div class="hero-conteudo">

        <!-- Balão do texto -->
        <div class="hero-balao">

          <p>
            O silêncio protege o
            <br>
            agressor, a denúncia
            <br>
            protege a vítima.
          </p>

          <strong>Quebremos o silêncio!</strong>

        </div>

        <!-- Botão -->
        <RouterLink
          to="/cadastro-usuario"
          class="btn-cadastro"
        >
          Se cadastre e busque apoio!
        </RouterLink>

      </div>

    </div>

  </section>
</template>

<style scoped>

.hero-section {
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Imagem do Hero */
.hero-imagem {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.hero-imagem img {
  width: 100%;
  height: auto;
  display: block;
}

/* Conteúdo sobre a imagem */
.hero-conteudo {
  position: absolute;

  top: 50%;
  right: 6%;

  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 420px;
}

/* Balão do texto */
.hero-balao {
  width: 400px;

  background-color: rgba(255, 255, 255, 0.90);

  padding: 30px 35px;

  border-radius: 12px;

  text-align: center;

  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
}

/* Texto principal */
.hero-balao p {
  margin: 0;

  color: #4d0017;

  font-family: Georgia, 'Times New Roman', serif;

  font-size: 28px;

  font-weight: bold;

  font-style: italic;

  line-height: 1.4;
}

/* Quebremos o silêncio */
.hero-balao strong {
  display: block;

  margin-top: 10px;

  color: #4d0017;

  font-family: Georgia, 'Times New Roman', serif;

  font-size: 27px;

  font-weight: bold;

  font-style: italic;
}

/* Botão */
.btn-cadastro {
  margin-top: 25px;

  padding: 14px 32px;

  background-color: #ffffff;

  color: #4d0017;

  border-radius: 25px;

  font-family: Arial, sans-serif;

  font-size: 16px;

  font-weight: 600;

  text-decoration: none;

  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);

  transition: 0.2s ease;
}

/* Efeito ao passar o mouse */
.btn-cadastro:hover {
  transform: scale(1.05);
}


/* =========================
   RESPONSIVIDADE
   ========================= */

@media (max-width: 1000px) {

  .hero-conteudo {
    right: 4%;
    width: 350px;
  }

  .hero-balao {
    width: 340px;
    padding: 22px 25px;
  }

  .hero-balao p {
    font-size: 23px;
  }

  .hero-balao strong {
    font-size: 22px;
  }

  .btn-cadastro {
    padding: 12px 25px;
    font-size: 14px;
  }
}


@media (max-width: 700px) {

  .hero-conteudo {
    right: 3%;
    width: 45%;
  }

  .hero-balao {
    width: 100%;
    padding: 12px 15px;
  }

  .hero-balao p {
    font-size: 14px;
  }

  .hero-balao strong {
    font-size: 14px;
  }

  .btn-cadastro {
    margin-top: 10px;
    padding: 8px 14px;
    font-size: 10px;
  }
}

</style>
