<template>
  <section class="tipos-violencia">

    <h2>Você sabia que existem mais tipos de violência?</h2>

    <div class="cards-violencia">

      <!-- Física -->
      <div class="card-violencia">
        <img
          src="/img/fisica.png"
          alt="Violência Física"
        />

        <div class="nome-violencia">
          Física
        </div>
      </div>

      <!-- Patrimonial -->
      <div class="card-violencia">
        <img
          src="/img/patrimonial.png"
          alt="Violência Patrimonial"
        />

        <div class="nome-violencia">
          Patrimonial
        </div>
      </div>

      <!-- Moral -->
      <div class="card-violencia">
        <img
          src="/img/moral.png"
          alt="Violência Moral"
        />

        <div class="nome-violencia">
          Moral
        </div>
      </div>

      <!-- Psicológica -->
      <div class="card-violencia">
        <img
          src="/img/psicologica.png"
          alt="Violência Psicológica"
        />

        <div class="nome-violencia">
          Psicológica
        </div>
      </div>

      <!-- Sexual -->
      <div class="card-violencia">
        <img
          src="/img/sexual.png"
          alt="Violência Sexual"
        />

        <div class="nome-violencia">
          Sexual
        </div>
      </div>

    </div>

    <RouterLink
      to="/violencia"
      class="botao-violencia"
    >
      Entenda mais!
    </RouterLink>

  </section>
</template>


<style scoped>

.tipos-violencia {
  width: 100%;
  padding: 80px 40px;
  background-color: #fff3e6;
}


/* =========================
   TÍTULO
   ========================= */

.tipos-violencia h2 {
  margin: 0 auto 55px;

  max-width: 1200px;

  text-align: center;

  color: #4d0017;

  font-family: Georgia, "Times New Roman", serif;

  font-size: 42px;

  font-weight: bold;

  line-height: 1.25;
}


/* =========================
   CARDS
   ========================= */

.cards-violencia {
  width: 100%;
  max-width: 1250px;

  margin: 0 auto;

  display: flex;

  justify-content: center;

  align-items: stretch;

  gap: 25px;
}


/* =========================
   CARD INDIVIDUAL
   ========================= */

.card-violencia {
  width: 210px;

  background-color: white;

  overflow: hidden;

  transition: 0.2s ease;
}

.card-violencia:hover {
  transform: translateY(-5px);
}


/* =========================
   IMAGEM
   ========================= */

.card-violencia img {
  display: block;

  width: 100%;

  height: 220px;

  object-fit: cover;
}


/* =========================
   NOME
   ========================= */

.nome-violencia {
  width: 100%;

  min-height: 52px;

  display: flex;

  align-items: center;

  justify-content: center;

  background-color: #efa8c3;

  color: white;

  font-family: Georgia, "Times New Roman", serif;

  font-size: 18px;

  text-align: center;
}


/* =========================
   BOTÃO
   ========================= */

.botao-violencia {
  display: block;

  width: fit-content;

  margin: 45px auto 0;

  padding: 15px 35px;

  background-color: #4d0017;

  color: white;

  border-radius: 25px;

  font-family: Arial, sans-serif;

  font-size: 17px;

  font-weight: 600;

  text-decoration: none;

  transition: 0.2s ease;
}

.botao-violencia:hover {
  transform: scale(1.05);
}


/* =========================
   TABLET
   ========================= */

@media (max-width: 1100px) {

  .cards-violencia {
    gap: 15px;
  }

  .card-violencia {
    width: 180px;
  }

  .card-violencia img {
    height: 200px;
  }

}


/* =========================
   TABLET MENOR
   ========================= */

@media (max-width: 900px) {

  .tipos-violencia {
    padding: 60px 25px;
  }

  .tipos-violencia h2 {
    font-size: 36px;
  }

  .cards-violencia {
    flex-wrap: wrap;
    max-width: 700px;
  }

  .card-violencia {
    width: 200px;
  }

}


/* =========================
   CELULAR
   ========================= */

@media (max-width: 600px) {

  .tipos-violencia {
    padding: 50px 20px;
  }

  .tipos-violencia h2 {
    font-size: 30px;

    margin-bottom: 35px;
  }

  .cards-violencia {
    flex-direction: column;

    align-items: center;

    gap: 20px;
  }

  .card-violencia {
    width: 280px;
  }

  .card-violencia img {
    height: 260px;
  }

  .nome-violencia {
    font-size: 18px;
  }

  .botao-violencia {
    margin-top: 35px;

    padding: 13px 28px;

    font-size: 15px;
  }

}

</style>
