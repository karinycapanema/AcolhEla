<template>
  <section class="participar-section">

    <h2>
      Gostou do projeto e se interessou em fazer parte?
    </h2>

    <div class="participar-cards">

      <!-- QUERO ACOLHER -->
      <div class="participar-card">

        <div class="participar-icone">
          ♡
        </div>

        <h3>Quero acolher</h3>

        <p>
          Faça parte da nossa rede de apoio e ajude
          a acolher mulheres que precisam de ajuda.
        </p>

        <RouterLink
          to="/cadastro-acolher"
          class="btn-participar"
        >
          Quero acolher
        </RouterLink>

      </div>


      <!-- QUERO ME CAPACITAR -->
      <div class="participar-card">

        <div class="participar-icone">
          ✦
        </div>

        <h3>Quero me capacitar</h3>

        <p>
          Aprenda mais sobre violência contra a
          mulher e descubra como oferecer um
          acolhimento seguro e adequado.
        </p>

        <RouterLink
          to="/capacitar"
          class="btn-participar"
        >
          Quero me capacitar para acolher
        </RouterLink>

      </div>

    </div>

  </section>
</template>


<style scoped>

/* =========================
   SEÇÃO
   ========================= */

.participar-section {
  width: 100%;

  padding: 80px 6%;

  background-color: #f3a8c3;
}


/* =========================
   TÍTULO
   ========================= */

.participar-section h2 {
  margin: 0 auto 55px;

  text-align: center;

  color: #4d0017;

  font-family: Georgia, "Times New Roman", serif;

  font-size: 42px;

  font-weight: bold;

  line-height: 1.3;
}


/* =========================
   CARDS
   ========================= */

.participar-cards {
  width: 100%;

  max-width: 1050px;

  margin: 0 auto;

  display: flex;

  justify-content: center;

  align-items: stretch;

  gap: 40px;
}


/* =========================
   CARD
   ========================= */

.participar-card {
  width: 480px;

  min-height: 430px;

  padding: 40px 45px;

  background-color: #ffffff;

  border-radius: 20px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);

  transition: 0.2s ease;
}


.participar-card:hover {
  transform: translateY(-5px);

  box-shadow: 0 7px 18px rgba(0, 0, 0, 0.16);
}


/* =========================
   ÍCONE
   ========================= */

.participar-icone {
  width: 80px;

  height: 80px;

  margin-bottom: 20px;

  border: 3px solid #4d0017;

  border-radius: 50%;

  display: flex;

  align-items: center;

  justify-content: center;

  color: #4d0017;

  font-size: 45px;

  line-height: 1;
}


/* =========================
   TÍTULO DOS CARDS
   ========================= */

.participar-card h3 {
  margin: 0 0 20px;

  color: #4d0017;

  font-family: Georgia, "Times New Roman", serif;

  font-size: 30px;

  font-weight: bold;
}


/* =========================
   TEXTO
   ========================= */

.participar-card p {
  max-width: 370px;

  margin: 0 0 30px;

  color: #4d0017;

  font-family: Georgia, "Times New Roman", serif;

  font-size: 19px;

  line-height: 1.5;
}


/* =========================
   BOTÃO
   ========================= */

.btn-participar {
  display: flex;

  align-items: center;

  justify-content: center;

  min-width: 220px;

  min-height: 50px;

  padding: 14px 25px;

  background-color: #4d0017;

  color: #ffffff;

  border-radius: 28px;

  font-family: Arial, sans-serif;

  font-size: 16px;

  font-weight: 600;

  text-decoration: none;

  transition: 0.2s ease;
}


.btn-participar:hover {
  transform: scale(1.05);
}


/* =========================
   TABLET
   ========================= */

@media (max-width: 1000px) {

  .participar-cards {
    gap: 25px;
  }

  .participar-card {
    width: 45%;

    min-height: 400px;

    padding: 30px;
  }

  .participar-section h2 {
    font-size: 36px;
  }

}


/* =========================
   CELULAR
   ========================= */

@media (max-width: 700px) {

  .participar-section {
    padding: 60px 20px;
  }

  .participar-section h2 {
    font-size: 30px;

    margin-bottom: 40px;
  }

  .participar-cards {
    flex-direction: column;

    align-items: center;

    gap: 25px;
  }

  .participar-card {
    width: 100%;

    max-width: 400px;

    min-height: 380px;

    padding: 30px 25px;
  }

  .participar-card h3 {
    font-size: 27px;
  }

  .participar-card p {
    font-size: 17px;
  }

  .participar-icone {
    width: 70px;

    height: 70px;

    font-size: 38px;
  }

  .btn-participar {
    min-width: 200px;

    font-size: 15px;
  }

}

</style>
