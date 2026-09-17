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


@media (max-width: 1100px) {

  .introducao,
  .tipos,
  .lei,
  .direitos {
    width: 90%;
  }

  .introducao {
    padding: 45px 60px;
  }

  .alertas {
    width: 82%;
    padding: 40px 45px;
  }

  .ajuda {
    width: 85%;
  }

  .tipos-conteudo {
    padding: 30px 40px;
  }

  .tipo {
    gap: 25px;
  }

  .tipo-texto p,
  .exemplos p {
    font-size: 17px;
  }

  .direitos-grid {
    gap: 18px;
  }

}


/*TABLET*/

@media (max-width: 900px) {

  .menu {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .introducao {
    width: 90%;
    margin: 35px auto;
    padding: 40px 35px;
  }

  .introducao h1 {
    font-size: 29px;
  }

  .introducao p {
    font-size: 18px;
  }


  .tipos {
    width: 90%;
  }

  .tipos-conteudo {
    padding: 25px 30px;
  }

  .tipo {
    grid-template-columns: 1fr 60px 1fr;
    gap: 20px;
    min-height: 140px;
  }

  .tipo-texto p,
  .exemplos p {
    font-size: 16px;
    line-height: 1.5;
  }

  .tipo-texto h3,
  .exemplos strong {
    font-size: 18px;
  }

  .numero {
    width: 48px;
    height: 48px;
    font-size: 18px;
  }


  .alertas {
    width: 90%;
    padding: 40px 30px;
  }

  .alertas-grid {
    grid-template-columns: 1fr 1fr;
  }

  .alerta {
    min-height: 80px;
    padding: 16px 18px;
    font-size: 16px;
  }


  .lei {
    width: 90%;
    padding: 40px 30px;
  }

  .lei > p {
    font-size: 19px;
  }

  .lei-grid {
    grid-template-columns: 1fr 1fr;
  }

  .lei-card {
    padding: 25px;
  }

  .lei-card h3 {
    font-size: 23px;
  }

  .lei-card p {
    font-size: 17px;
  }


  .direitos {
    width: 90%;
  }

  .direitos-grid {
    grid-template-columns: 1fr 1fr;
  }

  .direito {
    min-height: 170px;
    padding: 25px;
  }

  .direito h3 {
    font-size: 21px;
  }

  .direito p {
    font-size: 17px;
  }


  .ajuda {
    width: 90%;
    padding: 40px 30px;
  }

}


/*CELULAR*/

@media (max-width: 600px) {


  .introducao,
  .tipos,
  .alertas,
  .lei,
  .direitos,
  .ajuda {
    width: calc(100% - 30px);
  }

  .tipos h2,
  .alertas h2,
  .lei h2,
  .direitos h2,
  .ajuda h2 {
    font-size: 26px;
    margin-bottom: 25px;
  }

  .introducao {
    margin: 25px auto 40px;
    padding: 30px 20px;
    border-radius: 20px;
  }

  .introducao h1 {
    font-size: 25px;
    line-height: 1.25;
    margin-bottom: 18px;
  }

  .introducao p {
    font-size: 16px;
    line-height: 1.55;
  }

  .tipos {
    margin-bottom: 40px;
  }

  .tipos-conteudo {
    padding: 20px;
    border-radius: 20px;
  }

  .tipo {
    display: flex;
    flex-direction: column;
    min-height: auto;
    gap: 12px;
    padding: 22px 5px;
    text-align: center;
  }

  .tipo:not(:last-child) {
    border-bottom: 1px solid rgba(74, 0, 17, 0.18);
  }

  .tipo:not(:last-child)::after {
    display: none;
  }

  .tipo-texto {
    text-align: center;
    order: 2;
  }

  .numero {
    order: 1;

    width: 45px;
    height: 45px;

    font-size: 17px;

    flex-shrink: 0;
  }

  .exemplos {
    order: 3;
    text-align: center;

    width: 100%;
    padding: 12px 15px;

    border-radius: 12px;
    background: #feb9cd;
  }

  .tipo-texto h3,
  .exemplos strong {
    font-size: 18px;
  }

  .tipo-texto p,
  .exemplos p {
    margin: 7px 0 0;
    font-size: 15px;
    line-height: 1.5;
  }


  .alertas {
    margin-bottom: 40px;
    padding: 30px 20px;
    border-radius: 20px;
  }

  .texto-secao {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 22px;
  }

  .alertas-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .alerta {
    min-height: auto;
    padding: 15px 16px;
    font-size: 15px;
    line-height: 1.45;
    border-radius: 13px;
  }

  .lei {
    margin-bottom: 40px;
    padding: 30px 20px;
    border-radius: 20px;
  }

  .lei > p {
    font-size: 16px;
    line-height: 1.55;
    margin-bottom: 25px;
  }

  .lei-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .lei-card {
    padding: 22px;
    border-radius: 15px;
  }

  .lei-card h3 {
    font-size: 21px;
    margin-bottom: 10px;
  }

  .lei-card p {
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 0;
  }

  .direitos {
    margin-bottom: 40px;
  }

  .direitos-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .direito {
    min-height: auto;
    padding: 22px;
    border-radius: 15px;
  }

  .direito h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .direito p {
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 0;
  }
  .ajuda {
    margin-bottom: 40px;
    padding: 30px 20px;
    border-radius: 20px;
  }

  .ajuda h2 {
    font-size: 25px;
  }

  .ajuda p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 25px;
  }

  .botoes-ajuda {
    flex-direction: column;
    gap: 12px;
  }

  .button-ajuda {
    width: 100%;
    padding: 13px 20px;
    font-size: 15px;
  }

}


</style>