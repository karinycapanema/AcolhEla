<template>
   <header>
      <AppHeader />
    </header>

  <div>
   
    <main class="container">


      <section class="hero">
        <div class="hero-text">
          <p class="mini-titulo">Sobre nós</p>
          <h1>Acolher, <span>proteger</span> e transformar vidas.</h1>
          <p>
            AcolhEla é um projeto social que usa a tecnologia para promover proteção, acolhimento e
            informação para mulheres em situação de violência, conectando-as a uma rede de apoio
            segura e confiável.
          </p>
        </div>

        <div class="hero-imagem">
          <img src="/img/equipe/logo.png" alt="mulher" />
        </div>
      </section>

      <section class="cards">
        <div class="card">
          <h2>Nossa história</h2>
          <p>Saiba como surgiu o AcolhEla, nossa missão e nossos objetivos.</p>
        </div>

        <div class="card">
          <h2>Nossos valores</h2>
          <p>Conheça os princípios que orientam nosso projeto.</p>
        </div>

        <div class="card">
          <h2>Nossa equipe</h2>
          <p>Conheça as pessoas que fazem o AcolhEla acontecer.</p>
        </div>
      </section>

      <section class="ajuda">
        <h2>Faça parte dessa transformação</h2>
        <p>Sua doação, seu tempo ou seu conhecimento podem mudar histórias e salvar vidas.</p>
        <RouterLink class="botao-claro" to="/violencia">Quero Ajudar</RouterLink>
      </section>

      <section class="stats">
        <div>
          <p>+5.000 Mulheres apoiadas</p>
          <p>+3.200 Denúncias realizadas</p>
        </div>

        <img src="/img/equipe/logo.png" alt="mulher" class="stats-icone" />

        <div>
          <p>+1.800 Voluntários ativos</p>
          <p>+120 Instituições parceiras</p>
        </div>
      </section>

      <hr class="divisor" />



      <section class="historia">
        <p class="mini-titulo">Nossa história</p>
        <h1>Como nasceu o <span>AcolhEla</span>?</h1>
        <p class="texto">
          O AcolhEla nasceu com o propósito de utilizar a tecnologia como uma ferramenta de
          acolhimento, proteção e transformação social.
        </p>

        <div class="cards-coluna">
          <article class="card-linha">
            <span class="icone"><img src="/img/defesa.png" alt="escudo"></span>
            <div>
              <h2>Missão do projeto</h2>
              <p>
                Promover acolhimento, proteção e mudança de vidas por meio da tecnologia, garantindo
                que nenhuma mulher precise enfrentar violência sozinha.
              </p>
            </div>
          </article>

          <article class="card-linha">
            <span class="icone"><img src="/img/alvo.png" alt="alvo"></span>
            <div>
              <h2>Objetivo do projeto</h2>
              <p>
                Usar a tecnologia como ferramenta de impacto social, oferecendo informação e
                orientação segura para mulheres e pessoas dispostas a ajudar.
              </p>
            </div>
          </article>

          <article class="card-linha">
            <span class="icone"><img src="/img/pessoas.png" alt="pessoa"></span>
            <div>
              <h2>Por que fazemos?</h2>
              <p>
                Acreditamos que juntas somos mais fortes e podemos mudar histórias, salvar vidas e
                construir um futuro com mais respeito, segurança e empatia.
              </p>
            </div>
          </article>
        </div>
      </section>

      <hr class="divisor" />



      <section class="valores">
        <p class="mini-titulo">O que acreditamos</p>
        <h1>Nossos <span>valores</span></h1>
        <p class="texto">Nossos valores orientam cada decisão e cada ação do AcolhEla.</p>

        <div class="cards-grid">
          <article class="card-valor">
            <span class="numero">01</span>
            <h2>Segurança</h2>
            <p>Protegemos dados e pessoas com respeito, sigilo e responsabilidade.</p>
          </article>

          <article class="card-valor">
            <span class="numero">02</span>
            <h2>Empatia</h2>
            <p>Acolhemos histórias com humanidade, empatia e sem julgamentos.</p>
          </article>

          <article class="card-valor">
            <span class="numero">03</span>
            <h2>Respeito</h2>
            <p>Valorizamos cada mulher, suas escolhas, sua voz e sua história.</p>
          </article>

          <article class="card-valor">
            <span class="numero">04</span>
            <h2>Colaboração</h2>
            <p>
              Acreditamos que juntos podemos criar uma rede de apoio mais forte e transformar vidas.
            </p>
          </article>
        </div>
      </section>

      <hr class="divisor" />


      <section class="equipe">
        <p class="mini-titulo">Quem somos</p>
        <h1>Nossa <span>equipe</span></h1>
        <p class="texto">Conheça as pessoas que trabalham juntas para construir o AcolhEla.</p>

        <div class="membros">
          <div v-for="membro in equipe" :key="membro.nome" class="membro">
            <div class="foto">
              <img :src="membro.foto" :alt="membro.nome" />
            </div>
            <p class="nome">{{ membro.nome }}</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script setup>

import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';

const equipe = [
  { nome: 'Júlia Calegarim', foto: '/img/equipe/calega.png' },
  { nome: 'Julia Bittencourt', foto: '/img/equipe/bitten.png' },
  { nome: 'Kariny Capanema', foto: '/img/equipe/kariny.png' },
  { nome: 'Pietra de Jesus', foto: '/img/equipe/pietra.png' },
  { nome: 'Victor Israel', foto: '/img/equipe/victor.png' },
  { nome: 'Ana Carolini', foto: '/img/equipe/anacarol.png' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

main {
  background-color: #ffffff;
}

.container {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 24px 40px;
  box-sizing: border-box;
}

.mini-titulo {
  color: #a92d42;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 12px;
}

.divisor {
  border: none;
  border-top: 1px solid #eee;
  margin: 20px 0 50px;
}


.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0 60px;
  gap: 50px;
}

.hero-text {
  width: 55%;
}

.hero-text h1 {
  font-size: 52px;
  line-height: 1.25;
  margin-bottom: 22px;
  color: #000;
  font-weight: 800;
}

.hero-text h1 span {
  color: #c8285a;
}

.hero-text p {
  color: #333;
  font-size: 17px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.hero-imagem {
  width: 45%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 16px;
  background-color: #fdf1de;
}

.hero-imagem img {
  max-width: 70%;
  max-height: 70%;
  object-fit: contain;
}


.botao-claro {
  display: inline-block;
  text-decoration: none;
  padding: 14px 32px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-color: #fdf1de;
  color: #6f1729;
}

.botao-claro:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}


.cards {
  display: flex;
  gap: 24px;
  margin-bottom: 60px;
}

.card {
  flex: 1;
  background-color: #fdf1de;
  border-radius: 14px;
  padding: 30px;
  text-align: left;
  color: #000;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}

.card h2 {
  font-size: 19px;
  margin-bottom: 10px;
  font-weight: 700;
}

.card p {
  color: #555;
  font-size: 15px;
  line-height: 1.5;
}


.ajuda {
  background-color: #6f1729;
  color: #fff;
  text-align: center;
  padding: 50px;
  border-radius: 16px;
  margin-bottom: 60px;
}

.ajuda h2 {
  margin-bottom: 12px;
  font-size: 26px;
}

.ajuda p {
  margin-bottom: 24px;
  font-size: 16px;
  opacity: 0.9;
}

.stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 30px 0;
  text-align: center;
  background-color: #6f1729;
  border-radius: 16px;
  margin: 0 0 20px;
}

.stats p {
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  margin: 4px 0;
}

.stats-icone {
  width: 70px;
  height: 70px;
}


.historia,
.valores,
.equipe {
  text-align: center;
  padding: 10px 0 60px;
}

.historia h1,
.valores h1,
.equipe h1 {
  font-size: 40px;
  margin-bottom: 20px;
  color: #000;
  font-weight: 800;
}

.historia h1 span,
.valores h1 span,
.equipe h1 span {
  color: #c8285a;
}

.texto {
  width: 100%;
  max-width: 780px;
  margin: 0 auto 45px;
  color: #555;
  font-size: 16px;
  line-height: 1.6;
}

.cards-coluna {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.card-linha {
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: #fdf1de;
  border-radius: 14px;
  padding: 30px 35px;
  text-align: left;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card-linha:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1);
}

.icone img {
  width: 40px;
  height: auto;

}

.card-linha h2 {
  font-size: 19px;
  margin-bottom: 6px;
  color: #2c2929;
  font-weight: 700;
}

.card-linha p {
  color: #555;
  font-size: 15px;
  line-height: 1.5;
}


.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.card-valor {
  position: relative;
  background-color: #fdf1de;
  border-radius: 14px;
  padding: 35px;
  text-align: left;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card-valor:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}

.numero {
  position: absolute;
  top: 22px;
  right: 24px;
  color: #a92d42;
  font-weight: 800;
  font-size: 18px;
}

.card-valor h2 {
  font-size: 19px;
  margin-bottom: 8px;
  color: #2c2929;
  font-weight: 700;
}

.card-valor p {
  color: #555;
  font-size: 15px;
  line-height: 1.5;
}


.membros {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.membro {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.foto {
  width: 210px;
  height: 210px;
  border-radius: 14px;
  background-color: #eeeeee;
  overflow: hidden;
  margin-bottom: 14px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
}

.foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.membro:hover .foto img {
  transform: scale(1.06);
}

.nome {
  background-color: #fdf1de;
  color: #6f1729;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 15px;
}
</style>