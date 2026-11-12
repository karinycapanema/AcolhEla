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

    <p v-if="carregando" class="mensagens-aviso">Carregando mensagens...</p>

    <p v-if="erro" class="mensagens-erro">{{ erro }}</p>

    <p v-if="sucesso" class="mensagens-sucesso">{{ sucesso }}</p>


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

          <span>
          {{ tipoUsuario === 'vitima' ? 'Acolhedora' : 'Vítima' }}
        </span>
        </h2>

        

        <button
            type="button"
            class="excluir-conversa-btn"
            @click="excluirConversa"
          >
            Excluir conversa
        </button>

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

const API_URL = 'http://localhost:3000/conversas'

const tipoUsuario = ref(localStorage.getItem('tipoUsuario'))

const acolhedoras = ref([])
const conversasVoluntaria = ref([])

const conversaSelecionada = ref(null)
const mensagens = ref([])
const novaMensagem = ref('')

const carregando = ref(false)
const erro = ref('')
const sucesso = ref('')


async function carregarConversas() {
  try {
    const resposta = await fetch(API_URL)

    if (!resposta.ok) {
      throw new Error('Não foi possível carregar as conversas.')
    }

    return await resposta.json()
  } catch (erroApi) {
    console.error('Erro ao carregar conversas:', erroApi)
    erro.value = erroApi.message
    return []
  }
}

onMounted(async () => {
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

  carregando.value = true
  erro.value = ''

  try {
    const todasConversas = await carregarConversas()

 if (tipo === 'vitima') {
      if (voluntariaSalva) {
        const voluntaria = JSON.parse(voluntariaSalva)

        acolhedoras.value = [{
          nome: voluntaria.nome,
          email: voluntaria.email
        }]
      }
    }

    if (tipo === 'voluntaria') {
      if (!voluntariaSalva) {
        return
      }

      const voluntaria = JSON.parse(voluntariaSalva)

      conversasVoluntaria.value = todasConversas.filter(
        conversa => conversa.emailVoluntaria === voluntaria.email
      )
    }
  } catch (erroApi) {
    console.error('Erro ao carregar a página:', erroApi)
    erro.value = 'Não foi possível carregar as mensagens.'
  } finally {
    carregando.value = false
  }
})

async function abrirConversa(pessoa) {
  erro.value = ''
  sucesso.value = ''

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
    if (!voluntaria || !vitima) {
      erro.value = 'Não foi possível identificar os usuários da conversa.'
      return
    }

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

  try {
    carregando.value = true

    const todasConversas = await carregarConversas()

    let conversa = todasConversas.find(
      item =>
        item.emailVitima === emailVitima &&
        item.emailVoluntaria === emailVoluntaria
    )

    if (!conversa) {
      const novaConversa = {
        emailVitima,
        emailVoluntaria,
        nomeVitima,
        nomeVoluntaria,
        mensagens: []
      }

      const resposta = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaConversa)
      })

      if (!resposta.ok) {
        throw new Error('Não foi possível criar a conversa.')
      }

      conversa = await resposta.json()
    }

    conversaSelecionada.value = conversa
    mensagens.value = [...conversa.mensagens]

   
    if (tipoUsuario.value === 'voluntaria') {
      conversasVoluntaria.value = todasConversas.filter(
        item => item.emailVoluntaria === emailVoluntaria
      )

      if (!conversasVoluntaria.value.some(item => item.id === conversa.id)) {
        conversasVoluntaria.value.push(conversa)
      }
    }
  } catch (erroApi) {
    console.error('Erro ao abrir conversa:', erroApi)
    erro.value = 'Não foi possível abrir a conversa.'
  } finally {
    carregando.value = false
  }
}


function fecharConversa() {
  conversaSelecionada.value = null
  mensagens.value = []
  erro.value = ''
  sucesso.value = ''
}


async function enviarMensagem() {
  const texto = novaMensagem.value.trim()

  if (!texto || !conversaSelecionada.value) {
    return
  }

  erro.value = ''
  sucesso.value = ''

  const conversaAtualizada = {
    ...conversaSelecionada.value,
    mensagens: [
      ...conversaSelecionada.value.mensagens,
      {
        remetente: tipoUsuario.value,
        texto,
        data: new Date().toISOString()
      }
    ]
  }

  try {
    const resposta = await fetch(
      `${API_URL}/${conversaSelecionada.value.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(conversaAtualizada)
      }
    )

    if (!resposta.ok) {
      throw new Error('Não foi possível enviar a mensagem.')
    }

    const conversaSalva = await resposta.json()

    conversaSelecionada.value = conversaSalva
    mensagens.value = [...conversaSalva.mensagens]
    novaMensagem.value = ''

    sucesso.value = 'Mensagem enviada!'

    
    if (tipoUsuario.value === 'voluntaria') {
      const indice = conversasVoluntaria.value.findIndex(
        item => item.id === conversaSalva.id
      )

      if (indice !== -1) {
        conversasVoluntaria.value[indice] = conversaSalva
      }
    }
  } catch (erroApi) {
    console.error('Erro ao enviar mensagem:', erroApi)
    erro.value = 'Não foi possível enviar a mensagem. Tente novamente.'
  }
}


async function excluirConversa() {
  if (!conversaSelecionada.value) return

  const confirmar = window.confirm(
    'Tem certeza de que deseja excluir esta conversa?'
  )

  if (!confirmar) return

  erro.value = ''
  sucesso.value = ''

  try {

    const resposta = await fetch(
      `${API_URL}/${conversaSelecionada.value.id}`,
      {
        method: 'DELETE'
      }
    )

    if (!resposta.ok) {
      throw new Error('Não foi possível excluir a conversa.')
    }

    conversasVoluntaria.value = conversasVoluntaria.value.filter(
      conversa => conversa.id !== conversaSelecionada.value.id
    )

    fecharConversa()
    sucesso.value = 'Conversa excluída com sucesso!'
  } catch (erroApi) {
    console.error('Erro ao excluir conversa:', erroApi)
    erro.value = 'Não foi possível excluir a conversa.'
  }
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

  margin-right: 10px;

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

.mensagens-aviso {
  text-align: center;
  color: #650018;
  margin: 15px 0;
}

.mensagens-erro {
  text-align: center;
  color: #b00020;
  margin: 15px 0;
}

.mensagens-sucesso {
  text-align: center;
  color: #26733b;
  margin: 15px 0;
}

.excluir-conversa-btn {
  border: none;
  border-radius: 8px;
  padding: 10px 14px;
  background-color: #650018;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
}

.excluir-conversa-btn:hover {
  background-color: #850024;
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