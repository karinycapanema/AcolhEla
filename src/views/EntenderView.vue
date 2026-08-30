<script setup>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
</script>
<template>
  <div class="pagina">

    <header>
      
      <AppHeader/>

    </header>

    <section class="introducao">
      <h1>Quer entender sobre violência?</h1>

      <p>
        A violência contra a mulher pode acontecer de diferentes formas
        e muitas vezes passa despercebida.
      </p>

      <p>
        Conhecer os sinais é importante para identificar abusos,
        reconhecer situações de violência e buscar ajuda.
      </p>
    </section>

    <section class="tipos">
      <h2>Tipos de Violência</h2>

      <div class="tipos-conteudo">

        <div class="tipo">
          <div class="tipo-texto">
            <h3>Violência Física</h3>
            <p>
              Qualquer ação que cause dano físico ou sofrimento à mulher.
            </p>
          </div>

          <div class="numero">1</div>

          <div class="exemplos">
            <strong>Exemplos:</strong>
            <p>Empurrões, tapas, socos, chutes e agressões.</p>
          </div>
        </div>

        <div class="tipo">
          <div class="tipo-texto">
            <h3>Violência Psicológica</h3>
            <p>
              Atitudes que causam sofrimento emocional e diminuem a autoestima.
            </p>
          </div>

          <div class="numero">2</div>

          <div class="exemplos">
            <strong>Exemplos:</strong>
            <p>Ameaças, humilhações, controle, chantagem e isolamento.</p>
          </div>
        </div>

        <div class="tipo">
          <div class="tipo-texto">
            <h3>Violência Sexual</h3>
            <p>
              Qualquer ação que obrigue a mulher a participar de uma situação sexual contra sua vontade.
            </p>
          </div>

          <div class="numero">3</div>

          <div class="exemplos">
            <strong>Exemplos:</strong>
            <p>Forçar relações, impedir o uso de métodos contraceptivos ou desrespeitar limites.</p>
          </div>
        </div>

        <div class="tipo">
          <div class="tipo-texto">
            <h3>Violência Patrimonial</h3>
            <p>
              Ações que envolvem controle ou destruição de bens, documentos ou recursos financeiros.
            </p>
          </div>

          <div class="numero">4</div>

          <div class="exemplos">
            <strong>Exemplos:</strong>
            <p>Destruir objetos, esconder documentos ou controlar dinheiro.</p>
          </div>
        </div>

        <div class="tipo">
          <div class="tipo-texto">
            <h3>Violência Moral</h3>
            <p>
              Ações que atacam a honra e a reputação da mulher.
            </p>
          </div>

          <div class="numero">5</div>

          <div class="exemplos">
            <strong>Exemplos:</strong>
            <p>Calúnia, difamação, insultos e acusações.</p>
          </div>
        </div>

      </div>
    </section>

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

    <section class="direitos">
      <h2>Seus Direitos</h2>

      <div class="direitos-grid">

        <div class="direito">
          <h3>Direito à Proteção</h3>
          <p>
            Você tem direito a medidas de proteção para garantir sua segurança.
          </p>
        </div>

        <div class="direito">
          <h3>Direito à Justiça</h3>
          <p>
            Você pode buscar orientação jurídica e ter acesso à justiça.
          </p>
        </div>

        <div class="direito">
          <h3>Direito ao Atendimento</h3>
          <p>
            Você tem direito a um atendimento acolhedor, respeitoso e humanizado.
          </p>
        </div>

      </div>
    </section>

    <section class="ajuda">
      <h2>Precisa de Ajuda?</h2>

      <p>
        Se você se identificou com alguma das situações descritas,
        saiba que não está sozinha. Busque ajuda.
      </p>

      <div class="botoes-ajuda">
        <a href="tel:180" class="button-ajuda">Ligar 180</a>
        <RouterLink to="/denuncia" class="button-ajuda">Buscar apoio</RouterLink>
      </div>
    </section>

    <footer>
      <AppFooter/>
    </footer>

  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  max-width: none;
  min-width: 0;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  min-width: 0;
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  background: #ffffff;
}

.pagina {
  width: 100%;
  max-width: none;
  min-height: 100vh;
  background: #ffffff;
  color: #4a0011;
}

a {
  text-decoration: none;
}

.logo {
  color: #ffffff;
  font-size: 28px;
}

.menu {
  display: flex;
  align-items: center;
  gap: 34px;
}

.menu a {
  color: #ffffff;
  font-size: 15px;
}

.contato {
  padding: 10px 25px;
  border-radius: 25px;
  background: #4a0011;
}


.introducao {
  width: 86%;
  margin: 45px auto;
  padding: 55px 100px;
  text-align: center;
  border-radius: 25px;
  background: #feb9cd;
}

.introducao h1 {
  margin: 0 0 22px;
  font-size: 32px;
}

.introducao p {
  max-width: 850px;
  margin: 8px auto;
  font-size: 20px;
  line-height: 1.7;
}


.tipos h2,
.alertas h2,
.lei h2,
.direitos h2,
.ajuda h2 {
  margin: 0 0 35px;
  text-align: center;
  font-size: 32px;
}

.tipos {
  width: 86%;
  margin: 0 auto 60px;
}

.tipos-conteudo {
  padding: 35px 60px;
  border-radius: 25px;
  background: #fdf1e2;
}

.tipo {
  min-height: 150px;
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  align-items: center;
  gap: 35px;
  position: relative;
}

.tipo:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 75px;
  bottom: -75px;
  width: 2px;
  background: #4a0011;
  transform: translateX(-50%);
}

.tipo-texto {
  text-align: right;
}

.tipo-texto h3,
.exemplos strong {
  font-size: 20px;
}

.tipo-texto p,
.exemplos p {
  font-size: 18px;
  line-height: 1.6;
}

.numero {
  width: 52px;
  height: 52px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  border-radius: 50%;
  color: #ffffff;
  background: #4a0011;
  font-size: 20px;
}

.exemplos {
  text-align: left;
}


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


.direitos {
  width: 86%;
  margin: 0 auto 60px;
}

.direitos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.direito {
  min-height: 190px;
  padding: 30px;
  border-radius: 18px;
  background: #fdf1e2;
}

.direito h3 {
  margin-top: 0;
  font-size: 23px;
}

.direito p {
  font-size: 19px;
  line-height: 1.6;
}


.ajuda {
  width: 75%;
  margin: 0 auto 60px;
  padding: 45px 60px;
  text-align: center;
  border-radius: 25px;
  color: #ffffff;
  background: #4a0011;
}

.ajuda h2 {
  margin: 0 0 20px;
  font-size: 32px;
}

.ajuda p {
  max-width: 750px;
  margin: 0 auto 30px;
  font-size: 18px;
  line-height: 1.6;
}

.botoes-ajuda {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.button-ajuda {
  padding: 13px 30px;
  border-radius: 25px;
  color: #4a0011;
  background: #fdf1e2;
  font-size: 16px;
}



.redes {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  font-size: 13px;
}


.introducao,
.tipos-conteudo,
.alertas,
.lei,
.lei-card,
.direito,
.ajuda {
  box-shadow: 0 5px 15px rgba(74, 0, 17, 0.2);
}

h1,
h2,
h3 {
  text-shadow: 1px 2px 3px rgba(74, 0, 17, 0.3);
}


@media (max-width: 900px) {
  body {
    min-width: 0;
  }


  .menu {
    flex-wrap: wrap;
    justify-content: center;
  }

  .tipo {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .tipo-texto,
  .exemplos {
    text-align: center;
  }

  .tipo:not(:last-child)::after {
    display: none;
  }

  .alertas-grid,
  .lei-grid,
  .direitos-grid {
    grid-template-columns: 1fr;
  }
}
</style>