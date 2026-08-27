<template>
  <section class="mapa-section">

    <div class="mapa-textos">

      <h2>Conheça nosso Mapa do Acolhimento!</h2>

      <p>
        Encontre locais próximos a você que oferecem apoio e
        acolhimento para mulheres vítimas de violência.
      </p>

      <p>
        No nosso mapa você poderá encontrar serviços
        especializados, instituições e locais que podem ajudar.
      </p>

    </div>

    <RouterLink to="/mapa" class="mapa-imagem">
      <img
        src="/img/mapa.png"
        alt="Mapa do Acolhimento"
      >
    </RouterLink>

  </section>
</template>


<style scoped>

.mapa-section {
  width: 100%;
  min-height: 550px;

  padding: 70px 10%;

  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 30px;
}


/* =========================
   TEXTOS
   ========================= */

.mapa-textos {
  width: 520px;
  max-width: 520px;
}

.mapa-textos h2 {
  margin-bottom: 30px;

  color: #4d0017;

  font-family: Georgia, "Times New Roman", serif;

  font-size: 42px;

  line-height: 1.2;

  font-weight: bold;
}

.mapa-textos p {
  margin-bottom: 22px;

  color: #333333;

  font-family: Arial, sans-serif;

  font-size: 20px;

  line-height: 1.6;
}


/* =========================
   IMAGEM
   ========================= */

.mapa-imagem {
  width: 350px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}

.mapa-imagem img {
  width: 100%;
  height: auto;

  object-fit: contain;

  display: block;

  transition: transform 0.2s ease;
}

.mapa-imagem:hover img {
  transform: scale(1.04);
}


/* =========================
   TABLET
   ========================= */

@media (max-width: 900px) {

  .mapa-section {
    padding: 60px 5%;
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }

  .mapa-textos {
    width: 100%;
    max-width: 700px;
  }

  .mapa-textos h2 {
    font-size: 38px;
  }

  .mapa-textos p {
    font-size: 20px;
  }

  .mapa-imagem {
    width: 60%;
    max-width: 400px;
  }
}


/* =========================
   CELULAR
   ========================= */

@media (max-width: 600px) {

  .mapa-section {
    padding: 50px 25px;
  }

  .mapa-textos h2 {
    font-size: 32px;
  }

  .mapa-textos p {
    font-size: 18px;
  }

  .mapa-imagem {
    width: 80%;
  }
}

</style>
