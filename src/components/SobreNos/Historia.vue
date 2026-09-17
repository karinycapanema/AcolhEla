<template>
  <div>
    <AppHeader />

    <main class="container">
      <section class="historia">
        <p class="mini-titulo">Nossa história</p>
        <h1>Como nasceu o <span>AcolhEla</span>?</h1>
        <p class="texto">
          O AcolhEla nasceu com o propósito de utilizar a tecnologia como uma ferramenta de
          acolhimento, proteção e transformação social.
        </p>

        <div class="cards">
          <article class="card">
            <span class="icone">🛡️</span>
            <div>
              <h2>Missão do projeto</h2>
              <p>
                Promover acolhimento, proteção e mudança de vidas por meio da tecnologia, garantindo
                que nenhuma mulher precise enfrentar violência sozinha.
              </p>
            </div>
          </article>

          <article class="card">
            <span class="icone">🎯</span>
            <div>
              <h2>Objetivo do projeto</h2>
              <p>
                Usar a tecnologia como ferramenta de impacto social, oferecendo informação e
                orientação segura para mulheres e pessoas dispostas a ajudar.
              </p>
            </div>
          </article>

          <article class="card">
            <span class="icone">👥</span>
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
    </main>

    <AppFooter />
  </div>
</template>


<style scoped>
.container {
  width: 1100px;
  margin: 0 auto;
}

.historia {
  text-align: center;
  padding: 60px 0;
}

.mini-titulo {
  color: #a92d42;
  font-weight: bold;
  margin-bottom: 10px;
}

.historia h1 {
  font-size: 34px;
  margin-bottom: 20px;
  color: #000;
  font-weight: bold;
}

.historia h1 span {
  color: #c8285a;
  font-weight: bold;
}

.texto {
  width: 600px;
  margin: 0 auto 40px;
  color: #555;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
}

.card {
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #fdf1de;
  border-radius: 10px;
  padding: 25px 30px;
  text-align: left;
}

.icone {
  font-size: 36px;
}

.card h2 {
  font-size: 18px;
  margin-bottom: 5px;
  color: #2c2929;
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