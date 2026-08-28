<script setup>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import Equipe from '@/components/SobreNos/Equipe.vue';
import Historia from '@/components/SobreNos/Historia.vue';
import Valores from '@/components/SobreNos/Valores.vue';
</script>
<template>
    
    <header>
      <AppHeader />
    </header>

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
        <img src="../../../public/img/equipe/logo.png" alt="mulher" class="hero-imagem">
        </div>
      </section>

      <section class="cards">
        <RouterLink to="/historia" class="card">
          <h2>Conheça nossa história</h2>
          <p>Saiba como surgiu o AcolhEla, nossa missão e nossos objetivos.</p>
          <span>Conhecer →</span>
        </RouterLink>

        <RouterLink to="/valores" class="card">
          <h2>Nossos valores</h2>
          <p>Conheça os princípios que orientam nosso projeto.</p>
          <span>Conhecer →</span>
        </RouterLink>

        
      </section>

      <section>
        <div>
          <Historia/>
        </div>
        <div>
          <Valores/>
        </div>
        <div>
          <Equipe/>
        </div>

      </section>

      <section class="ajuda">
        <h2>Faça parte dessa transformação</h2>
        <p>Sua doação, seu tempo ou seu conhecimento podem mudar histórias e salvar vidas.</p>
        <RouterLink to="/cadastro-acolher" class="botao-claro"> Quero ajudar</RouterLink>
      </section>

      <section class="stats">
        <div>
          <p>+5.000 Mulheres apoiadas</p>
          <p>+3.200 Denúncias realizadas</p>
        </div>

          <img src="../../../public/img/equipe/logo.png" alt="mulher" class="stats-icone">


        <div>
          <p>+1.800 Voluntários ativos</p>
          <p>+120 Instituições parceiras</p>
        </div>
      </section>
    </main>

    <footer>
      <AppFooter />
    </footer>
</template>

<style scoped>

main {
  background-color: #ffffff;
}

.container {
  width: 1100px;
  margin: 0 auto;
}

.mini-titulo {
  color: #a92d42;
  font-weight: bold;
  margin-bottom: 10px;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0;
  gap:30px;
}

.hero-text {
  width: 550px;
}

.hero-text h1 {
  font-size: 42px;
  line-height: 1.25;
  margin-bottom: 20px;
  color: #000;
  font-weight: bold;
}

.hero-text h1 span {
  color: #c8285a;
  font-weight: bold;
}

.hero-text p {
  color: #000;
  margin-bottom: 20px;
}

.hero-imagem {
  width: 600px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
}

.botao {
  display: inline-block;
  background-color: #a92d42;
  color: #fff;
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: bold;
}

.cards {
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
}

.card {
  flex: 1;
  background-color: #fdf1de;
  border-radius: 10px;
  padding: 25px;
  text-decoration: none;
  color: #000;
}

.card h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.card p {
  color: #555;
  margin-bottom: 15px;
}

.card span {
  color: #a92d42;
  font-weight: bold;
}

.ajuda {
  background-color: #6f1729;
  color: #fff;
  text-align: center;
  padding: 40px;
  border-radius: 12px;
  margin-bottom: 50px;
}

.ajuda h2 {
  margin-bottom: 10px;
}

.ajuda p {
  margin-bottom: 20px;
}

.botao-claro {
  display: inline-block;
  background-color: #fdf1de;
  color: #6f1729;
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: bold;
}

.stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding-bottom: 6px;
  text-align: center;
  background-color: #6f1729;
  border-radius: 15px;
  margin: 0 150px 50px;
}

.stats p {
  color: #ffffff;
  font-weight: bold;
}

.stats-icone {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>