<template>
  <section class="hero-section">
    <div class="hero-imagem">
      <img src="/img/hero.png" alt="Campanha contra a violência contra a mulher" />

      <div class="hero-conteudo">
        <div class="hero-balao">
          <p>
            O silêncio protege o
            <br />
            agressor, a denúncia
            <br />
            protege a vítima.
          </p>

          <strong>Quebremos o silêncio!</strong>
        </div>

        <RouterLink to="/cadastro-usuario" class="btn-cadastro">
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

.hero-balao {
  width: 400px;

  background-color: #b7b7b7;

  padding: 30px 35px;

  border-radius: 20px 0;

  text-align: center;

  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
}

.hero-balao p {
  margin: 0;

  color: black;

  font-family: Georgia, 'Times New Roman', serif;

  font-size: 35px;

  font-weight: bold;

  font-style: italic;

  line-height: 1.4;
}

.hero-balao strong {
  display: block;

  margin-top: 10px;

  color: black;

  font-family: Georgia, 'Times New Roman', serif;

  font-size: 35px;

  font-weight: bold;

  font-style: italic;
}

.btn-cadastro {
  margin-top: 25px;

  padding: 14px 32px;

  background-color: #d9d9d9;

  color: black;

  border-radius: 25px;

  font-family: Arial, sans-serif;

  font-size: 20px;

  font-weight: 600;

  text-decoration: none;

  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);

  transition: 0.2s ease;
}

.btn-cadastro:hover {
  transform: scale(1.05);
}

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
