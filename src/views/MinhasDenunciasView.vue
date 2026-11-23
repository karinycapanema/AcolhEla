
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppButton from '@/components/ui/AppButton.vue'

const router = useRouter()
const API_URL = 'http://localhost:3000/denuncias'

const denuncias = ref([])
const denunciaEditando = ref(null)
const carregando = ref(false)
const erro = ref('')
const sucesso = ref('')

const situacoesDisponiveis = [
  'Assédio',
  'Violência',
  'Ameaça',
  'Bullying',
  'Discriminação',
  'Outro'
]

async function carregarDenuncias() {
  const logado = localStorage.getItem('usuarioLogado')
  const tipoUsuario = localStorage.getItem('tipoUsuario')

  if (logado !== 'true' || tipoUsuario !== 'vitima') {
    router.push('/login')
    return
  }

  const vitimaSalva = localStorage.getItem('vitima')

  if (!vitimaSalva) {
    erro.value = 'Não foi possível identificar a conta.'
    return
  }

  try {
    const vitima = JSON.parse(vitimaSalva)

    if (!vitima.email) {
      throw new Error('O e-mail da vítima não foi encontrado.')
    }

    carregando.value = true
    erro.value = ''

    const resposta = await fetch(
      `${API_URL}?emailVitima=${encodeURIComponent(vitima.email)}`
    )

    if (!resposta.ok) {
      throw new Error('Não foi possível carregar as denúncias.')
    }

    denuncias.value = await resposta.json()

  } catch (erroApi) {
    erro.value = erroApi.message
  } finally {
    carregando.value = false
  }
}

function editarDenuncia(denuncia) {
  denunciaEditando.value = {
    ...denuncia,
    situacoes: [...denuncia.situacoes]
  }

  erro.value = ''
  sucesso.value = ''
}

async function salvarEdicao() {
  if (!denunciaEditando.value) return

  const dados = denunciaEditando.value

  if (
    !dados.relato.trim() ||
    !dados.local.trim() ||
    !dados.data ||
    dados.situacoes.length === 0
  ) {
    erro.value = 'Preencha todos os campos obrigatórios.'
    return
  }

  const confirmar = window.confirm(
    'Deseja salvar as alterações desta denúncia?'
  )

  if (!confirmar) return

  carregando.value = true
  erro.value = ''
  sucesso.value = ''

  try {
    const resposta = await fetch(`${API_URL}/${dados.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       ...dados, nome: dados.anonima ? '' : dados.nome, contato: dados.anonima ? '' : dados.contato
      })
    })

    if (!resposta.ok) {
      throw new Error('Não foi possível atualizar a denúncia.')
    }

    const denunciaAtualizada = await resposta.json()

    denuncias.value = denuncias.value.map(item =>
      item.id === denunciaAtualizada.id
        ? denunciaAtualizada
        : item
    )

    denunciaEditando.value = null
    sucesso.value = 'Denúncia atualizada com sucesso!'
  } catch (erroApi) {
    erro.value = erroApi.message
  } finally {
    carregando.value = false
  }
}

async function excluirDenuncia(id) {
  const confirmar = window.confirm(
    'Tem certeza de que deseja excluir esta denúncia?'
  )

  if (!confirmar) return

  carregando.value = true
  erro.value = ''
  sucesso.value = ''

  try {
    const resposta = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })

    if (!resposta.ok) {
      throw new Error('Não foi possível excluir a denúncia.')
    }

    denuncias.value = denuncias.value.filter(
      denuncia => denuncia.id !== id
    )

    sucesso.value = 'Denúncia excluída com sucesso!'
  } catch (erroApi) {
    erro.value = erroApi.message
  } finally {
    carregando.value = false
  }
}

function cancelarEdicao() {
  denunciaEditando.value = null
  erro.value = ''
}

function voltar() {
  router.push('/perfil-vitima')
}

onMounted(carregarDenuncias)
</script>

<template>
  <div>
    <AppHeader />

    <main class="pagina-denuncias">
      <section class="conteudo">
        <h1>Minhas denúncias</h1>

        <p class="descricao">
          Consulte e gerencie as denúncias cadastradas.
        </p>

        <p v-if="carregando" class="aviso">
          Carregando...
        </p>

        <p v-if="erro" class="erro">
          {{ erro }}
        </p>

        <p v-if="sucesso" class="sucesso">
          {{ sucesso }}
        </p>

        <div v-if="!carregando && denuncias.length === 0" class="vazio">
          Nenhuma denúncia cadastrada.
        </div>

        <article
          v-for="(denuncia, index) in denuncias"
          :key="denuncia.id"
          class="cartao-denuncia"
        >
          <template v-if="denunciaEditando?.id !== denuncia.id">
            <h2>Denúncia {{ index + 1 }}</h2>

            <p><strong>Relato:</strong> {{ denuncia.relato }}</p>
            <p><strong>Situações:</strong> {{ denuncia.situacoes.join(', ') }}</p>
            <p><strong>Data:</strong> {{ denuncia.data }}</p>
            <p><strong>Local:</strong> {{ denuncia.local }}</p>
            <p><strong>Anônima:</strong> {{ denuncia.anonima ? 'Sim' : 'Não' }}</p>

            <div class="acoes">
                <AppButton @click="editarDenuncia(denuncia)">
                    Editar
                </AppButton>
    
                <AppButton class="botao-excluir" @click="excluirDenuncia(denuncia.id)">
                    Excluir
                </AppButton>
            </div>
          </template>

          <template v-else>
            <h2>Editar denúncia {{ index + 1 }}</h2>

            <form @submit.prevent="salvarEdicao">
              <label for="relato">Relato:</label>
              <textarea
                id="relato"
                v-model="denunciaEditando.relato"
                required
              ></textarea>

              <label>Tipo de situação:</label>

              <div class="opcoes">
                <label
                  v-for="situacao in situacoesDisponiveis"
                  :key="situacao"
                  class="opcao"
                >
                  <input
                    v-model="denunciaEditando.situacoes"
                    type="checkbox"
                    :value="situacao"
                  />
                  {{ situacao }}
                </label>
              </div>

              <label for="data">Data do ocorrido:</label>
              <input
                id="data"
                v-model="denunciaEditando.data"
                type="date"
                required
              />

              <label for="local">Local do ocorrido:</label>
              <input
                id="local"
                v-model="denunciaEditando.local"
                type="text"
                required
              />

              <label class="opcao">
                <input
                  v-model="denunciaEditando.anonima"
                  type="checkbox"
                />
                Desejo permanecer anônima.
              </label>

              <template v-if="!denunciaEditando.anonima">
                <label for="nome">Nome:</label>
                <input
                  id="nome"
                  v-model="denunciaEditando.nome"
                  type="text"
                />

                <label for="contato">Contato:</label>
                <input
                  id="contato"
                  v-model="denunciaEditando.contato"
                  type="text"
                />
              </template>

              <div class="acoes">
                <AppButton type="submit">
                  Salvar alterações
                </AppButton>

                <AppButton class="botao-cancelar" @click="cancelarEdicao">
                  Cancelar
                </AppButton>
              </div>
            </form>
          </template>
        </article>

        <AppButton class="botao-voltar" @click="voltar">
          Voltar ao perfil
        </AppButton>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.pagina-denuncias {
  padding: 15px 20px;
  background: #ffffff;
}

.conteudo {
  margin: auto;
  color: #65071d;
}

h1 {
  text-align: center;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 3.5rem;
  font-weight: bold;
}

.descricao {
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.4rem;
}

.cartao-denuncia {
  width: 66%;
  margin: 0 auto 20px;
  padding: 10px 25px 38px 25px;
  background: #fff0dc;
  border-radius: 22px;
  box-shadow: 0 5px 15px rgba(74, 0, 17, 0.2);
}

.cartao-denuncia h2 {
  margin-top: 0;
  font-size: 2.5rem;
}

.cartao-denuncia p {
  line-height: 1.5;
  font-size: 1.4rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

textarea,
input[type='text'],
input[type='date'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #a96a78;
  border-radius: 8px;
  background: #fffaf5;
  color: #65071d;
  font: inherit;
}

textarea {
  min-height: 110px;
  resize: vertical;
}

.opcoes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.opcao {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 7px;
  background: #f7a9c2;
}

.opcao input {
  accent-color: #65071d;
}

.acoes {
  display: flex;
  gap: 10px;
  margin-top: 18px;
}


.botao-voltar {
  display: block;
  margin: 25px auto 0;
}

.erro {
  color: #b00020;
  text-align: center;
}

.sucesso {
  color: #26733b;
  text-align: center;
}

.aviso,
.vazio {
  margin: 25px 0;
  text-align: center;
}

@media (max-width: 550px) {
  .opcoes {
    grid-template-columns: 1fr;
  }
}
</style>
