<template>
  <section class="tipos">
    <h2>Tipos de Violência</h2>

    <div class="tipos-conteudo">
      <div class="tipo">
        <div class="tipo-texto">
          <h3>Violência Física</h3>
          <p>Qualquer ação que cause dano físico ou sofrimento à mulher.</p>
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
          <p>Atitudes que causam sofrimento emocional e diminuem a autoestima.</p>
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
            Qualquer ação que obrigue a mulher a participar de uma situação sexual contra sua
            vontade.
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
          <p>Ações que atacam a honra e a reputação da mulher.</p>
        </div>

        <div class="numero">5</div>

        <div class="exemplos">
          <strong>Exemplos:</strong>
          <p>Calúnia, difamação, insultos e acusações.</p>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
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
</style>