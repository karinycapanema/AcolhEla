<template>
  <section class="ajuda-section">

    <div class="ajuda-conteudo">

      <div class="ajuda-icone">
        <img src="/imagens/alerta.png" alt="Alerta">
      </div>

      <div class="ajuda-texto">

        <h2>Se identificou com alguma delas?</h2>

        <p>Peça ajuda!</p>

        <div class="ajuda-botoes">

          <RouterLink
            to="/denunciar"
            class="btn-denunciar"
          >
            Denuncie aqui!
          </RouterLink>

          <a
            href="tel:180"
            class="btn-180"
          >
            Ligar para o 180!
          </a>

        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>

/* =========================
   SEÇÃO
   ========================= */

.ajuda-section {
  width: 100%;

  padding: 75px 6%;

  background-color: #ffffff;
}


/* =========================
   CONTEÚDO
   ========================= */

.ajuda-conteudo {
  width: 100%;
  max-width: 1250px;

  margin: 0 auto;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 60px;
}


/* =========================
   ÍCONE
   ========================= */

.ajuda-icone {
  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;
}


.icone-alerta {
  width: 150px;
  height: 150px;

  background-color: #222222;

  color: #ffffff;

  clip-path: polygon(
    50% 0%,
    100% 100%,
    0% 100%
  );

  display: flex;

  align-items: center;

  justify-content: center;

  padding-top: 35px;

  font-family: Arial, sans-serif;

  font-size: 75px;

  font-weight: bold;
}


/* =========================
   TEXTO
   ========================= */

.ajuda-texto {
  display: flex;

  flex-direction: column;

  align-items: flex-start;

  justify-content: center;
}


.ajuda-texto h2 {
  margin: 0;

  color: #4d0017;

  font-family: Georgia, "Times New Roman", serif;

  font-size: 38px;

  font-weight: bold;

  line-height: 1.2;
}


.ajuda-texto p {
  margin: 10px 0 30px;

  color: #4d0017;

  font-family: Georgia, "Times New Roman", serif;

  font-size: 34px;

  font-weight: bold;
}


/* =========================
   BOTÕES
   ========================= */

.ajuda-botoes {
  display: flex;

  align-items: center;

  gap: 25px;
}


.btn-denunciar,
.btn-180 {
  display: flex;

  align-items: center;

  justify-content: center;

  min-width: 210px;

  padding: 16px 30px;

  border-radius: 30px;

  font-family: Arial, sans-serif;

  font-size: 17px;

  font-weight: 600;

  text-decoration: none;

  transition: 0.2s ease;
}


/* Botão denunciar */

.btn-denunciar {
  background-color: #4d0017;

  color: #ffffff;
}


/* Botão 180 */

.btn-180 {
  background-color: #efa8c3;

  color: #4d0017;
}


/* Efeito */

.btn-denunciar:hover,
.btn-180:hover {
  transform: scale(1.05);
}


/* =========================
   TABLET
   ========================= */

@media (max-width: 900px) {

  .ajuda-section {
    padding: 60px 5%;
  }

  .ajuda-conteudo {
    gap: 40px;
  }

  .icone-alerta {
    width: 120px;
    height: 120px;

    font-size: 60px;
  }

  .ajuda-texto h2 {
    font-size: 30px;
  }

  .ajuda-texto p {
    font-size: 28px;
  }

  .btn-denunciar,
  .btn-180 {
    min-width: 180px;

    font-size: 15px;
  }

}


/* =========================
   CELULAR
   ========================= */

@media (max-width: 650px) {

  .ajuda-section {
    padding: 50px 20px;
  }

  .ajuda-conteudo {
    flex-direction: column;

    text-align: center;

    gap: 30px;
  }

  .ajuda-texto {
    align-items: center;
  }

  .ajuda-texto h2 {
    font-size: 28px;
  }

  .ajuda-texto p {
    font-size: 25px;

    margin-bottom: 25px;
  }

  .ajuda-botoes {
    flex-direction: column;

    gap: 15px;

    width: 100%;
  }

  .btn-denunciar,
  .btn-180 {
    width: 260px;

    font-size: 15px;
  }

}

</style>
