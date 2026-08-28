<template>
     <section class="lei">
      <h2>Lei Maria da Penha</h2>

      <p>
        A Lei Maria da Penha criou mecanismos para prevenir e combater
        a violência doméstica e familiar contra a mulher, garantindo
        proteção e acesso à justiça.
      </p>

      <div class="lei-grid">
        <div class="lei-card">
          <h3>Medidas Protetivas</h3>
          <p>
            Medidas que podem proteger a mulher de situações de violência
            e impedir a aproximação do agressor.
          </p>
        </div>

        <div class="lei-card">
          <h3>Assistência à Mulher</h3>
          <p>
            A mulher tem direito a atendimento e acesso aos serviços
            de proteção e apoio.
          </p>
        </div>
      </div>
    </section>
</template>

<style scoped>
.lei {
  width: 86%;
  margin: 0 auto 60px;
  padding: 50px 65px;
  border-radius: 25px;
  background: #fdf1e2;
}

.lei > p {
  max-width: 900px;
  margin: 0 auto 35px;
  text-align: center;
  font-size: 23px;
  line-height: 1.7;
}

.lei-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.lei-card {
  padding: 30px;
  border-radius: 18px;
  background: #feb9cd;
}

.lei-card h3 {
  margin-top: 0;
  font-size: 28px;
}

.lei-card p {
  font-size: 19px;
  line-height: 1.6;
}
</style>