
<script setup>
import { ref } from 'vue'
import AppButton from '../ui/AppButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const API_URL = 'http://localhost:3000/denuncias'

const carregando = ref(false)
const erro = ref('')

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
  router.push('/denuncia')
}

async function confirmar() {
  const vitimaSalva = localStorage.getItem('vitima')

  if (!vitimaSalva) {
    erro.value = 'Não foi possível identificar a vítima.'
    return
  }

  const vitima = JSON.parse(vitimaSalva)

  const novaDenuncia = {
    emailVitima: vitima.email,
    relato: denuncia.value.relato,
    situacoes: denuncia.value.situacoes,
    data: denuncia.value.data,
    local: denuncia.value.local,
    anonima: denuncia.value.anonima,
    nome: denuncia.value.anonima ? '' : denuncia.value.nome,
    contato: denuncia.value.anonima ? '' : denuncia.value.contato,
    dataCadastro: new Date().toISOString()
  }

  carregando.value = true
  erro.value = ''

  try {
    // POST: cadastra a denúncia na API
    const resposta = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novaDenuncia)
    })

    if (!resposta.ok) {
      throw new Error('Não foi possível enviar a denúncia.')
    }

    await resposta.json()

    localStorage.removeItem('denuncia')

    router.push('/denuncia-enviada')
  } catch (erroApi) {
    console.error('Erro ao cadastrar denúncia:', erroApi)
    erro.value = 'Ocorreu um erro ao enviar. Tente novamente.'
  } finally {
    carregando.value = false
  }
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
        <p>{{ formatarSituacoes(denuncia.situacoes) }}</p>
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
        <p>{{ denuncia.anonima ? 'Sim' : 'Não' }}</p>
      </div>

      <div v-if="!denuncia.anonima" class="campo-relatorio">
        <h2>Nome</h2>
        <p>{{ denuncia.nome || 'Não informado' }}</p>
      </div>

      <div v-if="!denuncia.anonima" class="campo-relatorio">
        <h2>Contato</h2>
        <p>{{ denuncia.contato || 'Não informado' }}</p>
      </div>

      <p v-if="erro" class="mensagem-erro">
        {{ erro }}
      </p>

      <div class="botoes">
        <AppButton @click="corrigir">
          Corrigir informações
        </AppButton>

        <AppButton @click="confirmar">
          {{ carregando ? 'Enviando...' : 'Confirmar e enviar denúncia' }}
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
  font-size: 2rem;
}

.descricao {
  margin-bottom: 30px;
  text-align: center;
  line-height: 1.6;
  font-size: 1rem;
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
  font-size: 1rem;
}

.botoes {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.mensagem-erro {
  color: #b00020;
  text-align: center;
  font-weight: bold;
}
</style>
