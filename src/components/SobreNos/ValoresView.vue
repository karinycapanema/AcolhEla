<template>
  <div>
    <AppHeader />

    <main class="container">
      <section class="valores">
        <p class="mini-titulo">O que acreditamos</p>
        <h1>Nossos <span>valores</span></h1>
        <p class="texto">Nossos valores orientam cada decisão e cada ação do AcolhEla.</p>

        <div class="cards">
          <article class="card">
            <span class="numero">01</span>
            <span class="icone">🛡️</span>
            <h2>Segurança</h2>
            <p>Protegemos dados e pessoas com respeito, sigilo e responsabilidade.</p>
          </article>

          <article class="card">
            <span class="numero">02</span>
            <span class="icone">💗</span>
            <h2>Empatia</h2>
            <p>Acolhemos histórias com humanidade, empatia e sem julgamentos.</p>
          </article>

          <article class="card">
            <span class="numero">03</span>
            <span class="icone">🙋‍♀️</span>
            <h2>Respeito</h2>
            <p>Valorizamos cada mulher, suas escolhas, sua voz e sua história.</p>
          </article>

          <article class="card">
            <span class="numero">04</span>
            <span class="icone">🤝</span>
            <h2>Colaboração</h2>
            <p>
              Acreditamos que juntos podemos criar uma rede de apoio mais forte e transformar vidas.
            </p>
          </article>
        </div>

        <RouterLink to="/equipe" class="botao">Conheça nossa equipe →</RouterLink>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.container {
  width: 1100px;
  margin: 0 auto;
}

.valores {
  text-align: center;
  padding: 60px 0;
}

.mini-titulo {
  color: #a92d42;
  font-weight: bold;
  margin-bottom: 10px;
}

.valores h1 {
  font-size: 34px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #000;
}

.valores h1 span {
  color: #c8285a;
  font-weight: bold;
}

.texto {
  color: #555;
  margin-bottom: 40px;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 40px;
}

.card {
  position: relative;
  background-color: #fdf1de;
  border-radius: 10px;
  padding: 30px;
  text-align: left;
}

.numero {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #a92d42;
  font-weight: bold;
}

.icone {
  font-size: 32px;
  display: block;
  margin-bottom: 10px;
}

.card h2 {
  font-size: 18px;
  margin-bottom: 5px;
  color: #2c2929 ;
}

.card p {
  color: #555;
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