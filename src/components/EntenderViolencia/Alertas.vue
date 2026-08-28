<template>
     <section class="alertas">
      <h2>Sinais de Alerta</h2>

      <p class="texto-secao">
        Alguns comportamentos podem indicar uma relação abusiva.
        Fique atenta aos sinais.
      </p>

      <div class="alertas-grid">
        <div class="alerta">Controle excessivo sobre onde você vai e com quem fala.</div>
        <div class="alerta">Ciúmes exagerados e acusações sem fundamento.</div>
        <div class="alerta">Desqualificação constante das suas opiniões e sentimentos.</div>
        <div class="alerta">Isolamento de amigos e familiares.</div>
        <div class="alerta">Explosões de raiva e comportamento imprevisível.</div>
        <div class="alerta">Culpabilização da vítima pelos problemas do relacionamento.</div>
        <div class="alerta">Desrespeito aos seus limites e vontades.</div>
        <div class="alerta">Ameaças diretas ou indiretas.</div>
      </div>
    </section>
</template>

<style scoped>
.alertas {
  width: 70%;
  margin: 0 auto 60px;
  padding: 45px 60px;
  border-radius: 25px;
  background: #feb9cd;
}

.alertas h2 {
  margin: 0 0 30px;
  text-align: center;
  font-size: 32px;
}

.texto-secao {
  max-width: 800px;
  margin: 0 auto 30px;
  text-align: center;
  font-size: 20px;
  line-height: 1.6;
}

.alertas-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 20px;
  max-width: 950px;
  margin: 0 auto;
}

.alerta {
  min-height: 85px;
  padding: 18px 22px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  background: #fdf1e2;
  font-size: 18px;
  line-height: 1.45;
}
</style>