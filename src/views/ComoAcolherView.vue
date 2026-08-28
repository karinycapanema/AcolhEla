<script setup>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
</script>
<template>

  <header>
    <AppHeader/>
  </header>
  <div class="pagina">

    <main>

      <section class="titulo">
        <h1>Como Acolher</h1>

        <p>
          Sua ajuda pode salvar vidas. Aprenda como acolher de forma
          responsável e humanizada.
        </p>
      </section>


      <section class="acolhimento">

        <div class="texto-acolhimento">

          <h2>O Que é Acolhimento Humanizado?</h2>

          <p>
            Acolher é mais do que ouvir. É criar um espaço seguro, oferecer
            apoio emocional sem julgamentos e orientar com responsabilidade.
            Não é necessário ser profissional para fazer a diferença, mas é
            essencial se preparar adequadamente.
          </p>

          <ul>
            <li>Escuta ativa e sem julgamentos</li>
            <li>Respeito ao tempo e escolhas da vítima</li>
            <li>Orientação para redes de apoio especializadas</li>
          </ul>

        </div>

        <div class="circulo"></div>

      </section>


      <section class="cards">

        <div class="card">

          <div class="cabecalho-card">

            <div class="icone coracao">
              ♥
            </div>

            <h3>Capacitação</h3>

          </div>

          <p>
            Acesse vídeos, cartilhas e materiais educativos para se preparar
            adequadamente.
          </p>

   <button @click="$router.push('/capacitacao')">
  Capacitação
</button>

        </div>


        <div class="card">

          <div class="cabecalho-card">

            <div class="icone pessoa">
              ♙
              <span>+</span>
            </div>

            <h3>Cadastrar-se</h3>

          </div>

          <p>
            Faça parte da nossa rede de apoio voluntário e ajude mulheres em
            sua região.
          </p>

          <button @click="$router.push('/feat/voluntario')">
  Capacitação
</button>

        </div>

      </section>


      <section class="impacto">

        <h2>Impacto do Acolhimento</h2>

        <div class="impacto-cards">

          <div class="impacto-card">
            <strong>85%</strong>

            <p>
              das mulheres sentem-se mais seguras após o primeiro acolhimento
            </p>
          </div>

          <div class="impacto-card">
            <strong>2.400+</strong>

            <p>
              voluntários já fazem parte da nossa rede
            </p>
          </div>

          <div class="impacto-card">
            <strong>92%</strong>

            <p>
              recomendam o programa de capacitação
            </p>
          </div>

        </div>

      </section>

    </main>

  </div>
  <footer>
    <AppFooter/>  
  </footer>
</template>


<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.pagina {
  width: 100%;
  min-height: 100vh;
  background-color: white;
  font-family: Georgia, "Times New Roman", serif;
  color: #5b001c;
}

main {
  width: 100%;
  padding: 50px 7vw 80px;
}

.titulo {
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
}

.titulo h1 {
  color: #680019;
  font-size: clamp(36px, 4vw, 58px);
  margin-bottom: 12px;
}

.titulo p {
  color: #6b4650;
  font-size: clamp(13px, 1.2vw, 17px);
  line-height: 1.5;
}

.acolhimento {
  width: 100%;
  min-height: 300px;

  background-color: #fff1df;
  border-radius: 22px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 45px 7%;

  margin-bottom: 50px;
}

.texto-acolhimento {
  width: 65%;
}

.texto-acolhimento h2 {
  font-size: clamp(22px, 2vw, 30px);
  margin-bottom: 18px;
}

.texto-acolhimento p {
  color: #4d3c3c;
  font-size: clamp(13px, 1.1vw, 16px);
  line-height: 1.6;
  margin-bottom: 20px;
}

.texto-acolhimento ul {
  padding-left: 22px;
}

.texto-acolhimento li {
  color: #3f3030;
  font-size: clamp(12px, 1vw, 15px);
  line-height: 1.9;
}

.circulo {
  width: clamp(130px, 16vw, 220px);
  height: clamp(130px, 16vw, 220px);

  background-color: #62001d;

  border-radius: 50%;

  flex-shrink: 0;
}

.cards {
  width: 100%;

  display: flex;
  justify-content: center;

  gap: 5vw;

  margin-bottom: 65px;
}

.card {
  width: 38%;
  max-width: 430px;
  min-height: 260px;

  background-color: #fff1df;

  border: 2px solid #f3c0ce;

  border-radius: 20px;

  padding: 30px;
}

.cabecalho-card {
  display: flex;
  align-items: center;

  gap: 15px;
}

.icone {
  width: 55px;
  height: 55px;

  background-color: #f8a9c4;

  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.coracao {
  color: #62001d;
  font-size: 30px;
}

.pessoa {
  position: relative;
  color: #62001d;
  font-size: 30px;
}

.pessoa span {
  position: absolute;

  right: -8px;
  bottom: -5px;

  width: 22px;
  height: 22px;

  background-color: #62001d;
  color: white;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.card h3 {
  font-size: clamp(18px, 1.7vw, 24px);
}

.card p {
  color: #4d3c3c;

  font-size: clamp(13px, 1vw, 16px);

  line-height: 1.6;

  margin-top: 25px;
}

.card button {
  width: 160px;
  height: 42px;

  margin-top: 25px;

  border: none;
  border-radius: 8px;

  background-color: #62001d;

  color: white;

  font-family: Georgia, "Times New Roman", serif;

  font-size: 14px;

  cursor: pointer;
}

.impacto {
  width: 100%;
  text-align: center;
}

.impacto h2 {
  font-size: clamp(24px, 2.2vw, 32px);

  margin-bottom: 30px;
}

.impacto-cards {
  width: 100%;

  display: flex;

  justify-content: center;

  gap: 20px;
}

.impacto-card {
  width: 30%;
  max-width: 350px;

  min-height: 140px;

  background-color: #fff1df;

  border-radius: 18px;

  padding: 25px;
}

.impacto-card strong {
  display: block;

  font-size: clamp(25px, 2.5vw, 36px);

  margin-bottom: 10px;
}

.impacto-card p {
  color: #755e5e;

  font-size: clamp(11px, 1vw, 15px);

  line-height: 1.5;
}

@media (max-width: 700px) {

  main {
    padding: 30px 20px 50px;
  }

  .acolhimento {
    flex-direction: column;
    text-align: center;
    gap: 30px;
    padding: 30px 25px;
  }

  .texto-acolhimento {
    width: 100%;
  }

  .texto-acolhimento ul {
    text-align: left;
  }

  .cards {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .card {
    width: 100%;
    max-width: 400px;
  }

  .impacto-cards {
    flex-direction: column;
    align-items: center;
  }

  .impacto-card {
    width: 100%;
    max-width: 400px;
  }

}

</style>