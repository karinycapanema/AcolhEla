<script setup>
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import AppButton from '../ui/AppButton.vue';

const byPrefixAndName = {
  fas: {
    'circle-check': faCircleCheck
  }
}

function voltarInicio() {
  window.location.href = '/'
}
</script>
<template>
  <main class="pagina-sucesso">

    <section class="mensagem-sucesso">

      <div class="icone-sucesso">
        <div class="icone-sucesso">
          <font-awesome-icon
            :icon="byPrefixAndName.fas['circle-check']"
          />
        </div>
      </div>

      <h1>
        Denúncia enviada com sucesso!
      </h1>

      <p>
        Recebemos sua denúncia.
      </p>

      <p>
        Suas informações foram registradas e serão tratadas
        com confidencialidade.
      </p>

      <p class="mensagem-final">
        Você não está sozinho. Obrigada por confiar em nós.
      </p>

      <div class="area-button">
      <AppButton @click="voltarInicio">
        Voltar para o inicio
      </AppButton>
      </div>

    </section>

  </main>
</template>

<style scoped>

.pagina-sucesso {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #ffffff;
}

.mensagem-sucesso {
  width: 850px;
  height: 500px;
  max-width: 100%;
  padding: 55px 45px;
  text-align: center;
  background-color: #fff0dc;
  border-radius: 20px;
  color: #65071d;
  box-shadow: 2px 8px 30px #65071d;
}

.icone-sucesso {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  border-radius: 50%;
  color: #65071d;
}

.icone-sucesso :deep(svg) {
  width: 85px;
  height: 85px;
}

.mensagem-sucesso h1 {
  margin: 0 0 15px;
  color: #65071d;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2.0rem;
}

.mensagem-sucesso p {
  margin: 8px 0;
  color: #65071d;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.0rem;
  line-height: 1.6;
}

.mensagem-sucesso .mensagem-final {
  margin-top: 25px;
  font-weight: bold;
  font-size: 1.0rem;
}
.area-button{
  display: flex;
  justify-content: center;
}
</style>