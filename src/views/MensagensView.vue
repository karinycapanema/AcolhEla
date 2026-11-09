<template>

  <header>
    <AppHeader />
  </header>


  <main class="mensagens-page">

    <h1 class="mensagens-titulo">
      Mensagens
    </h1>


    <p class="mensagens-subtitulo">
      Converse com uma acolhedora de forma segura e discreta.
    </p>


    <!-- =========================
         VÍTIMA
    ========================== -->

    <section
      v-if="tipoUsuario === 'vitima'"
      class="mensagens-container"
    >

      <h2>
        Acolhedoras disponíveis
      </h2>


      <div
        v-if="acolhedoras.length > 0"
        class="lista-conversas"
      >

        <button
          v-for="acolhedora in acolhedoras"
          :key="acolhedora.email"
          type="button"
          class="conversa-card"
          @click="abrirConversa(acolhedora)"
        >

          <div class="conversa-info">

            <strong>
              {{ acolhedora.nome }}
            </strong>

            <span>
              Acolhedora
            </span>

          </div>


          <FontAwesomeIcon
            :icon="['fas', 'chevron-right']"
            class="icone-seta"
          />

        </button>

      </div>


      <div
        v-else
        class="mensagens-vazio"
      >

        <h3>
          Nenhuma acolhedora disponível
        </h3>

        <p>
          No momento, não há acolhedoras cadastradas para iniciar uma conversa.
        </p>

      </div>

    </section>

  <!-- =========================
     ACOLHEDORA
========================== -->

<section
  v-if="tipoUsuario === 'voluntaria'"
  class="mensagens-container"
>

  <h2>
    Suas conversas
  </h2>

  <div
    v-if="conversasVoluntaria.length > 0"
    class="lista-conversas"
  >

    <button
      v-for="conversa in conversasVoluntaria"
      :key="conversa.id"
      type="button"
      class="conversa-card"
      @click="abrirConversa(conversa)"
    >

      <div class="conversa-info">

        <strong>
          {{ conversa.nomeVitima }}
        </strong>

        <span>
          {{ conversa.mensagens.length > 0
            ? conversa.mensagens[conversa.mensagens.length - 1].texto
            : 'Iniciar conversa'
          }}
        </span>

      </div>

      <FontAwesomeIcon
        :icon="['fas', 'chevron-right']"
        class="icone-seta"
      />

    </button>

  </div>

  <div
    v-else
    class="mensagens-vazio"
  >

    <h3>
      Nenhuma conversa ainda
    </h3>

    <p>
      Quando uma vítima iniciar uma conversa com você,
      ela aparecerá aqui.
    </p>

  </div>

</section>


    <!-- =========================
         CONVERSA
    ========================== -->

    <section
      v-if="conversaSelecionada"
      class="chat-container"
    >

      <div class="chat-cabecalho">

        <button
          type="button"
          class="voltar-btn"
          @click="fecharConversa"
        >
          <FontAwesomeIcon
            :icon="['fas', 'arrow-left']"
          />
        </button>


        <div>

         <h2>
  {{ tipoUsuario === 'vitima'
    ? conversaSelecionada.nomeVoluntaria
    : conversaSelecionada.nomeVitima
  }}
</h2>

<span>
  {{ tipoUsuario === 'vitima' ? 'Acolhedora' : 'Vítima' }}
</span>

        </div>

      </div>


      <div class="chat-mensagens">

        <div
          v-if="mensagens.length === 0"
          class="chat-vazio"
        >

          <p>
            Esta é uma conversa segura e privada.
          </p>

          <span>
            Envie uma mensagem para iniciar.
          </span>

        </div>


        <div
          v-for="(mensagem, index) in mensagens"
          :key="index"
          :class="[
            'mensagem',
            mensagem.remetente === tipoUsuario
              ? 'mensagem-enviada'
              : 'mensagem-recebida'
          ]"
        >

          <span>
            {{ mensagem.texto }}
          </span>

        </div>

      </div>


      <form
        class="chat-form"
        @submit.prevent="enviarMensagem"
      >

        <input
          v-model="novaMensagem"
          type="text"
          placeholder="Digite sua mensagem..."
          autocomplete="off"
        />


        <button
          type="submit"
          aria-label="Enviar mensagem"
        >

          <FontAwesomeIcon
            :icon="['fas', 'paper-plane']"
          />

        </button>

      </form>

    </section>

  </main>


  <footer>
    <AppFooter />
  </footer>

</template>



<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const router = useRouter()

// Tipo de usuário conectado
const tipoUsuario = ref(
  localStorage.getItem('tipoUsuario')
)

// Dados das pessoas
const acolhedoras = ref([])
const conversasVoluntaria = ref([])

// Conversa aberta
const conversaSelecionada = ref(null)
const mensagens = ref([])
const novaMensagem = ref('')

// Chave onde todas as conversas ficam salvas
const CHAVE_CONVERSAS = 'conversas'

// Carregar conversas salvas
function carregarConversas() {
  try {
    return JSON.parse(
      localStorage.getItem(CHAVE_CONVERSAS) || '[]'
    )
  } catch (erro) {
    console.error('Erro ao carregar conversas:', erro)
    return []
  }
}

// Salvar conversas
function salvarConversas(conversas) {
  localStorage.setItem(
    CHAVE_CONVERSAS,
    JSON.stringify(conversas)
  )
}

// Carregar dados da página
onMounted(() => {
  const logado = localStorage.getItem('usuarioLogado')
  const tipo = localStorage.getItem('tipoUsuario')

  if (
    logado !== 'true' ||
    (tipo !== 'vitima' && tipo !== 'voluntaria')
  ) {
    router.push('/login')
    return
  }

  tipoUsuario.value = tipo

  const voluntariaSalva = localStorage.getItem('voluntaria')
  const vitimaSalva = localStorage.getItem('vitima')

  const todasConversas = carregarConversas()

  // Se for vítima, mostra as voluntárias disponíveis
  if (tipo === 'vitima') {
    if (voluntariaSalva) {
      const voluntaria = JSON.parse(voluntariaSalva)

      acolhedoras.value = [{
        nome: voluntaria.nome,
        email: voluntaria.email
      }]
    }
  }

  // Se for voluntária, mostra as conversas recebidas
  if (tipo === 'voluntaria') {
    if (!voluntariaSalva) {
      return
    }

    const voluntaria = JSON.parse(voluntariaSalva)

    conversasVoluntaria.value = todasConversas.filter(
      conversa =>
        conversa.emailVoluntaria === voluntaria.email
    )
  }
})

// Abrir conversa
function abrirConversa(pessoa) {
  const voluntariaSalva = localStorage.getItem('voluntaria')
  const vitimaSalva = localStorage.getItem('vitima')

  const voluntaria = voluntariaSalva
    ? JSON.parse(voluntariaSalva)
    : null

  const vitima = vitimaSalva
    ? JSON.parse(vitimaSalva)
    : null

  let emailVoluntaria
  let emailVitima
  let nomeVoluntaria
  let nomeVitima

  if (tipoUsuario.value === 'vitima') {
    if (!voluntaria || !vitima) return

    emailVoluntaria = voluntaria.email
    emailVitima = vitima.email

    nomeVoluntaria = voluntaria.nome
    nomeVitima = vitima.nome
  } else {
    emailVoluntaria = pessoa.emailVoluntaria
    emailVitima = pessoa.emailVitima

    nomeVoluntaria = pessoa.nomeVoluntaria
    nomeVitima = pessoa.nomeVitima
  }

  const id = `${emailVitima}_${emailVoluntaria}`

  const todasConversas = carregarConversas()

  let conversa = todasConversas.find(
    item => item.id === id
  )

  // Cria uma conversa caso ainda não exista
  if (!conversa) {
    conversa = {
      id,
      emailVitima,
      emailVoluntaria,
      nomeVitima,
      nomeVoluntaria,
      mensagens: []
    }

    todasConversas.push(conversa)
    salvarConversas(todasConversas)
  }

  conversaSelecionada.value = conversa
  mensagens.value = [...conversa.mensagens]
}

// Fechar conversa
function fecharConversa() {
  conversaSelecionada.value = null
  mensagens.value = []
}

// Enviar mensagem
function enviarMensagem() {
  const texto = novaMensagem.value.trim()

  if (!texto || !conversaSelecionada.value) {
    return
  }

  const nova = {
    remetente: tipoUsuario.value,
    texto,
    data: new Date().toISOString()
  }

  const todasConversas = carregarConversas()

  const indice = todasConversas.findIndex(
    conversa => conversa.id === conversaSelecionada.value.id
  )

  if (indice === -1) return

  todasConversas[indice].mensagens.push(nova)

  salvarConversas(todasConversas)

  conversaSelecionada.value = todasConversas[indice]

  mensagens.value = [...todasConversas[indice].mensagens]

  // Atualiza a lista da voluntária
  if (tipoUsuario.value === 'voluntaria') {
    conversasVoluntaria.value = todasConversas.filter(
      conversa =>
        conversa.emailVoluntaria === conversaSelecionada.value.emailVoluntaria
    )
  }

  novaMensagem.value = ''
}
</script>



<style scoped>

* {
  box-sizing: border-box;
}


.mensagens-page {

  min-height: calc(100vh - 160px);

  padding: 45px 20px 70px;

  background-color: #f7f3f0;

}


.mensagens-titulo {

  margin: 0;

  text-align: center;

  color: #650018;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 3rem;

  font-weight: bold;

}


.mensagens-subtitulo {

  margin: 12px auto 40px;

  max-width: 650px;

  text-align: center;

  color: #5f4148;

  font-size: 1.1rem;

}


/* =========================
   CONTAINER
========================= */

.mensagens-container {

  width: 90%;

  max-width: 850px;

  margin: 0 auto;

  background-color: #fff0dc;

  border-radius: 20px;

  padding: 35px;

  box-shadow:
    0 5px 15px
    rgba(74, 0, 17, 0.15);

}


.mensagens-container h2 {

  margin: 0 0 25px;

  color: #650018;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 1.8rem;

}


/* =========================
   LISTA
========================= */

.lista-conversas {

  display: flex;

  flex-direction: column;

  gap: 12px;

}


.conversa-card {

  width: 100%;

  border: none;

  background-color: #ffffff;

  border-radius: 12px;

  padding: 18px 20px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  text-align: left;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;

}


.conversa-card:hover {

  background-color: #f8e1e6;

  transform: translateY(-2px);

  box-shadow:
    0 4px 10px
    rgba(74, 0, 17, 0.1);

}


.conversa-info {

  display: flex;

  flex-direction: column;

  gap: 5px;

}


.conversa-info strong {

  color: #650018;

  font-size: 1.1rem;

}


.conversa-info span {

  color: #80666c;

  font-size: 0.9rem;

}


.icone-seta {

  color: #650018;

  font-size: 18px;

}


/* =========================
   VAZIO
========================= */

.mensagens-vazio {

  text-align: center;

  padding: 35px 20px;

}


.mensagens-vazio h3 {

  margin-bottom: 10px;

  color: #650018;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 1.3rem;

}


.mensagens-vazio p {

  margin: 0;

  color: #6d555b;

  line-height: 1.5;

}


/* =========================
   CHAT
========================= */

.chat-container {

  width: 90%;

  max-width: 850px;

  height: 650px;

  margin: 0 auto;

  background-color: #ffffff;

  border-radius: 20px;

  overflow: hidden;

  display: flex;

  flex-direction: column;

  box-shadow:
    0 5px 15px
    rgba(74, 0, 17, 0.15);

}


.chat-cabecalho {

  min-height: 80px;

  padding: 15px 25px;

  background-color: #650018;

  color: #ffffff;

  display: flex;

  align-items: center;

  gap: 15px;

}


.voltar-btn {

  width: 40px;

  height: 40px;

  border: none;

  border-radius: 50%;

  background-color: transparent;

  color: #ffffff;

  font-size: 18px;

  cursor: pointer;

}


.voltar-btn:hover {

  background-color: rgba(255, 255, 255, 0.15);

}


.chat-cabecalho h2 {

  margin: 0;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 1.4rem;

}


.chat-cabecalho span {

  font-size: 0.85rem;

  opacity: 0.8;

}


/* =========================
   MENSAGENS
========================= */

.chat-mensagens {

  flex: 1;

  padding: 25px;

  overflow-y: auto;

  background-color: #faf7f5;

  display: flex;

  flex-direction: column;

  gap: 12px;

}


.chat-vazio {

  margin: auto;

  text-align: center;

  color: #80666c;

}


.chat-vazio p {

  margin-bottom: 5px;

}


.chat-vazio span {

  font-size: 0.9rem;

}


.mensagem {

  max-width: 70%;

  padding: 12px 16px;

  border-radius: 15px;

  line-height: 1.4;

}


.mensagem-enviada {

  align-self: flex-end;

  background-color: #f3c8d2;

  color: #4e2229;

  border-radius:
    15px 15px 3px 15px;

}


.mensagem-recebida {

  align-self: flex-start;

  background-color: #e8e1de;

  color: #4e2229;

  border-radius:
    15px 15px 15px 3px;

}


/* =========================
   CAMPO DE MENSAGEM
========================= */

.chat-form {

  display: flex;

  gap: 10px;

  padding: 15px;

  border-top:
    1px solid #eadfe1;

  background-color: #ffffff;

}


.chat-form input {

  flex: 1;

  min-width: 0;

  border:
    1px solid #d8cbd1;

  border-radius: 25px;

  padding: 12px 18px;

  font-family: inherit;

  font-size: 15px;

  outline: none;

}


.chat-form input:focus {

  border-color: #a92d42;

}


.chat-form button {

  width: 46px;

  height: 46px;

  border: none;

  border-radius: 50%;

  background-color: #650018;

  color: #ffffff;

  cursor: pointer;

  font-size: 16px;

}


.chat-form button:hover {

  background-color: #4e0012;

}


/* =========================
   RESPONSIVIDADE
========================= */

@media (max-width: 700px) {

  .mensagens-page {

    padding:
      35px 15px 50px;

  }


  .mensagens-titulo {

    font-size: 2.3rem;

  }


  .mensagens-container,
  .chat-container {

    width: 95%;

  }


  .mensagens-container {

    padding: 25px 18px;

  }


  .chat-container {

    height: 600px;

  }


  .chat-cabecalho {

    padding:
      12px 15px;

  }


  .chat-mensagens {

    padding: 18px;

  }


  .mensagem {

    max-width: 80%;

  }

}

</style>