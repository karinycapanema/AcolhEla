<script setup>
import App from '@/App.vue'
import { ref } from 'vue'
import AppButton from '../ui/AppButton.vue'

const denuncia = ref({
  relato: '',
  situacoes: [],
  data: '',
  local: '',
  anonima: false,
  nome: '',
  contato: ''
})

const dadosSalvos = localStorage.getItem('denuncia')

if (dadosSalvos) {
  denuncia.value = JSON.parse(dadosSalvos)
}

function formatarSituacoes(situacoes) {
  if (!situacoes || situacoes.length === 0) {
    return 'Não informado'
  }

  return situacoes.join(', ')
}

function corrigir() {
  window.location.href = '/'
}

function confirmar() {
  localStorage.removeItem('denuncia')

  window.location.href = '/denuncia-enviada'
}
</script>
<template>
  <main class="pagina-revisao">

    <section class="relatorio">

      <h1>Revise sua denúncia</h1>

      <p class="descricao">
        Confira as informações abaixo antes de confirmar o envio.
        Caso alguma informação esteja incorreta, você poderá voltar
        e corrigir.
      </p>

      <div class="campo-relatorio">
        <h2>Relato</h2>
        <p>{{ denuncia.relato || 'Não informado' }}</p>
      </div>

      <div class="campo-relatorio">
        <h2>Situações</h2>
        <p>
          {{ formatarSituacoes(denuncia.situacoes) }}
        </p>
      </div>

      <div class="campo-relatorio">
        <h2>Data</h2>
        <p>{{ denuncia.data || 'Não informado' }}</p>
      </div>

      <div class="campo-relatorio">
        <h2>Local</h2>
        <p>{{ denuncia.local || 'Não informado' }}</p>
      </div>

      <div class="campo-relatorio">
        <h2>Denúncia anônima</h2>
        <p>
          {{ denuncia.anonima ? 'Sim' : 'Não' }}
        </p>
      </div>

      <div
        v-if="!denuncia.anonima"
        class="campo-relatorio"
      >
        <h2>Nome</h2>
        <p>{{ denuncia.nome || 'Não informado' }}</p>
      </div>

      <div
        v-if="!denuncia.anonima"
        class="campo-relatorio"
      >
        <h2>Contato</h2>
        <p>{{ denuncia.contato || 'Não informado' }}</p>
      </div>

      <div class="botoes">

        <AppButton @click="corrigir">
            Corrigir imformações
        </AppButton>
        
        <AppButton @click="confirmar">
            Confirmar e enviar denúncia
        </AppButton>

      </div>

    </section>

  </main>
</template>
<style scoped>

.pagina-revisao {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 50px 20px; 
  background-color: #ffffff;
}

.relatorio {
  width: 700px;
  max-width: 100%;
  padding: 40px;
  border-radius: 20px;
  background-color: #fff0dc;
  color: #65071d;
  box-shadow: 2px 8px 30px #65071d;
}

.relatorio h1 {
  margin: 0 0 15px;
  text-align: center;
  font-size: 2.0rem;
}

.descricao {
  margin-bottom: 30px;
  text-align: center;
  line-height: 1.6;
  font-size: 1.0rem;
}

.campo-relatorio {
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 10px;
  background-color: #ffffff;
}

.campo-relatorio h2 {
  margin: 0 0 7px;
  font-size: 1.2rem;
}

.campo-relatorio p {
  margin: 0;
  line-height: 1.5;
  word-break: break-word;
  font-size: 1.0rem;
}

.botoes {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
}

</style>