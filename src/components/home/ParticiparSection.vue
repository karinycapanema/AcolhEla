<template>
  <section class="participar-section">

    <!-- TÍTULO -->
    <div class="participar-titulo">
      <h2>Gostou do projeto e se interessou em fazer parte?</h2>
    </div>

    <!-- CARDS -->
    <div class="participar-cards">

      <!-- CARD ACOLHER -->
      <RouterLink to="/acolher" class="participar-card">

        <img
          src="/img/acolher.png"
          alt="Quero acolher"
        >

        <div class="participar-texto">
          Quero acolher
        </div>

      </RouterLink>


      <!-- CARD APRENDER -->
      <RouterLink to="/capacitar" class="participar-card">

        <img
          src="/img/aprender.png"
          alt="Quero aprender"
        >

        <div class="participar-texto">
          Quero aprender
        </div>

      </RouterLink>

    </div>

  </section>
</template>


<style scoped>

/* =========================
   SEÇÃO
   ========================= */

.participar-section {
  width: 100%;
  padding: 55px 6% 60px;

  background-color: #FEB9CD;

  box-sizing: border-box;
}


/* =========================
   TÍTULO
   ========================= */

.participar-titulo {
  width: fit-content;

  margin: 0 auto 55px;

  padding: 12px 32px;

  background-color: #FDF1E2;

  border-radius: 40px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
}


.participar-titulo h2 {
  margin: 0;

  color: #4A0011;

  font-family: Georgia, "Times New Roman", serif;

  font-size: 38px;

  font-weight: bold;

  line-height: 1.2;

  text-align: center;
}


/* =========================
   CARDS
   ========================= */

.participar-cards {
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;

  display: flex;

  justify-content: center;

  align-items: center;

  gap: 55px;
}


/* =========================
   CARD
   ========================= */

.participar-card {
  position: relative;

  width: 500px;
  height: 290px;

  overflow: hidden;

  border-radius: 35px;

  text-decoration: none;

  display: block;

  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);

  transition: transform 0.25s ease;
}


/* =========================
   IMAGEM
   ========================= */

.participar-card img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  filter: grayscale(100%);

  transition: transform 0.3s ease;
}


/* =========================
   TEXTO SOBRE A IMAGEM
   ========================= */

.participar-texto {
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 70%;

  padding: 12px 25px;

  background-color: #FDF1E2;

  color: #4A0011;

  border-radius: 35px;

  font-family: Georgia, "Times New Roman", serif;

  font-size: 30px;

  font-weight: bold;

  text-align: center;

  box-sizing: border-box;

  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.12);
}


/* =========================
   EFEITO AO PASSAR O MOUSE
   ========================= */

.participar-card:hover {
  transform: translateY(-5px);
}

.participar-card:hover img {
  transform: scale(1.04);
}


/* =========================
   TABLET
   ========================= */

@media (max-width: 1000px) {

  .participar-section {
    padding: 50px 5%;
  }

  .participar-titulo {
    margin-bottom: 40px;
  }

  .participar-titulo h2 {
    font-size: 32px;
  }

  .participar-cards {
    gap: 30px;
  }

  .participar-card {
    width: 45vw;
    height: 260px;
  }

  .participar-texto {
    font-size: 26px;
  }
}


/* =========================
   CELULAR
   ========================= */

@media (max-width: 700px) {

  .participar-section {
    padding: 40px 20px 50px;
  }

  .participar-titulo {
    width: 90%;

    padding: 12px 20px;

    margin-bottom: 35px;
  }

  .participar-titulo h2 {
    font-size: 26px;
  }

  .participar-cards {
    flex-direction: column;

    gap: 25px;
  }

  .participar-card {
    width: 100%;
    max-width: 500px;

    height: 250px;
  }

  .participar-texto {
    width: 70%;

    font-size: 24px;

    padding: 10px 15px;
  }
}

</style>