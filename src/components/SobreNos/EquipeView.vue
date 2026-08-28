<template>
  <div>
    <AppHeader />

    <main class="container">
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

        <RouterLink to="/sobre" class="botao">← Voltar para Sobre nós</RouterLink>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
const equipe = [
  { nome: 'Júlia Calegarim', foto: '/img/equipe/calega.png' },
  { nome: 'Julia Bittencourt', foto: '/img/equipe/bitten.png' },
  { nome: 'Kariny Capanema', foto: '/img/equipe/kariny.png' },
  { nome: 'Pietra de Jesus', foto: '/img/equipe/pietra.png' },
  { nome: 'Victor Israel', foto: '/img/equipe/victor.png' },
  { nome: 'Ana Carolini', foto: '/img/equipe/anacarol.png' },
]</script>

<style scoped>
.container {
  width: 1100px;
  margin: 0 auto;
}

.equipe {
  text-align: center;
  padding: 60px 0;
}

.mini-titulo {
  color: #a92d42;
  font-weight: bold;
  margin-bottom: 10px;
}

.equipe h1 {
  font-size: 34px;
  margin-bottom: 20px;
  color: #000;
  font-weight: bold;
}

.equipe h1 span {
  color: #c8285a;
  font-weight: bold;
}

.texto {
  color: #555;
  margin-bottom: 40px;
}

.membros {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}

.membro {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.foto {
  width: 190px;
  height: 190px;
  border-radius: 10px;
  background-color: #eeeeee;
  overflow: hidden;
  margin-bottom: 10px;
}

.foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.nome {
  background-color: #fdf1de;
  color: #6f1729;
  font-weight: bold;
  padding: 6px 14px;
  border-radius: 8px;
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
</style>