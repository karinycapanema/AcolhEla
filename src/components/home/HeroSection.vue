<template>
  <section class="hero-section">
    <div class="hero-imagem">
      <img
        src="/img/hero.png"
        alt="Campanha contra a violência contra a mulher"
      />

      <div class="hero-conteudo">

        <div class="hero-balao">

          <p>
            O silêncio protege o
            <br />
            agressor, a denúncia
            <br />
            protege a vítima.
          </p>

          <strong>
            Quebremos o silêncio!
          </strong>

        </div>

        <RouterLink
          to="/cadastro"
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


/* =========================
   IMAGEM
========================= */

.hero-imagem {

  position: relative;

  width: 100%;

  overflow: hidden;

}


.hero-imagem img {

  width: 100%;

  height: auto;

  display: block;

  transform: scale(1.03);

  transform-origin: center center;

}


/* =========================
   CONTEÚDO
========================= */

.hero-conteudo {

  position: absolute;

  top: 50%;

  right: 6%;

  transform: translateY(-50%);

  display: flex;

  flex-direction: column;

  align-items: center;

  width: 410px;

}


/* =========================
   BALÃO
========================= */

.hero-balao {

  width: 390px;

  background-color: #b7b7b7;

  padding: 28px 32px;

  border-radius: 20px 0;

  text-align: center;

  box-shadow:

    0 3px 10px

    rgba(0, 0, 0, 0.15);

}


.hero-balao p {

  margin: 0;

  color: black;

  font-family:

    Georgia,

    'Times New Roman',

    serif;

  font-size: 30px;

  font-weight: bold;

  font-style: italic;

  line-height: 1.35;

}


.hero-balao strong {

  display: block;

  margin-top: 16px;

  color: black;

  font-family:

    Georgia,

    'Times New Roman',

    serif;

  font-size: 29px;

  font-weight: bold;

  font-style: italic;

}


/* =========================
   BOTÃO
========================= */

.btn-cadastro {

  margin-top: 25px;

  padding: 13px 30px;

  background-color: #d9d9d9;

  color: black;

  border-radius: 25px;

  font-family: Arial, sans-serif;

  font-size: 19px;

  font-weight: 600;

  text-decoration: none;

  box-shadow:

    0 3px 8px

    rgba(0, 0, 0, 0.15);

  transition: 0.2s ease;

}


.btn-cadastro:hover {

  transform: scale(1.05);

}


/* =========================
   TABLET
========================= */

@media (max-width: 1000px) {

  .hero-conteudo {
    right: 4%;

    width: 300px;
  }


  .hero-balao {
    width: 285px;

    padding: 18px 20px;
  }


  .hero-balao p {
    font-size: 20px;
  }


  .hero-balao strong {
    margin-top: 12px;

    font-size: 20px;
  }


  .btn-cadastro {
    margin-top: 18px;

    padding: 10px 20px;

    font-size: 13px;
  }

}


/* =========================
   CELULAR
========================= */

@media (max-width: 700px) {

  .hero-conteudo {
    right: 3%;

    width: 45%;
  }


  .hero-balao {
    width: 100%;

    padding: 10px 12px;
  }


  .hero-balao p {
    font-size: 12px;

    line-height: 1.3;
  }


  .hero-balao strong {
    margin-top: 8px;

    font-size: 12px;
  }


  .btn-cadastro {
    margin-top: 10px;

    padding: 7px 12px;

    font-size: 9px;
  }

}

</style>