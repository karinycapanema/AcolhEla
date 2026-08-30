<template>
  <section class="sobre-section">

    <div class="sobre-conteudo">

      <div class="sobre-texto">

        <h2>O que é o AcolhEla?</h2>

        <p>
          O AcolhEla é um projeto destinado a ajudar mulheres que sofrem
          e/ou já sofreram quaisquer tipos de violência. Nosso site tem o
          propósito de ser um lugar seguro, acolhedor e informativo para
          todas que acessarem. Além de ser um meio de denunciar seu agressor.
        </p>

        <RouterLink
          to="/quem-somos"
          class="btn-sobre"
        >
          Saiba mais sobre nós!
        </RouterLink>

      </div>

      <div class="sobre-imagem">
        <img
          src="/img/sobre.png"
          alt="Mulheres acolhendo umas às outras"
        />
      </div>

    </div>

  </section>
</template>

<style scoped>

.sobre-section {
  width: 100%;
  background-color: #ffffff;
  padding: 70px 6%;
}


.sobre-conteudo {
  width: 100%;
  max-width: 1300px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 70px;
}

.sobre-texto {
  flex: 1;

  max-width: 650px;
}

.sobre-texto h2 {
  margin: 0 0 30px;

  color: #4A0011;

  font-family: Georgia, 'Times New Roman', serif;

  font-size: 60px;

  font-weight: bold;

  line-height: 1.2;
}

.sobre-texto p {
  margin: 0 0 30px;

  color: #4A0011;

  font-family: Georgia, 'Times New Roman', serif;

  font-size: 30px;

  line-height: 1.6;
}

.btn-sobre {
  display: inline-block;

  padding: 15px 30px;

  background-color: #FEB9CD;

  color: #4A0011;

  border-radius: 25px;

  font-family: Arial, sans-serif;

  font-size: 22px;

  font-weight: 600;

  text-decoration: none;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);

  transition: 0.2s ease;
}

.btn-sobre:hover {
  transform: scale(1.05);
}

.sobre-imagem {
  flex: 0 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

.sobre-imagem img {
  display: block;

  width: 100%;
  max-width: 430px;

  height: auto;

  object-fit: contain;

  border-radius: 0;
}

@media (max-width: 900px) {

  .sobre-section {
    padding: 50px 5%;
  }

  .sobre-conteudo {
    gap: 40px;
  }

  .sobre-texto h2 {
    font-size: 34px;
  }

  .sobre-texto p {
    font-size: 18px;
  }

  .sobre-imagem img {
    max-width: 350px;
  }
}


@media (max-width: 700px) {

  .sobre-conteudo {
    flex-direction: column;
    text-align: center;
  }

  .sobre-texto {
    max-width: 100%;
  }

  .sobre-texto h2 {
    font-size: 32px;
  }

  .sobre-texto p {
    font-size: 17px;
  }

  .sobre-imagem {
    width: 100%;
  }

  .sobre-imagem img {
    width: 100%;
    max-width: 400px;
  }

  .btn-sobre {
    font-size: 15px;
    padding: 13px 25px;
  }
}

</style>
