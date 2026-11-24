<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import AppHeader from '../layout/AppHeader.vue'
import AppFooter from '../layout/AppFooter.vue'
import AppButton from '../ui/AppButton.vue'

function getUsuario() {
  try {
    const u = JSON.parse(localStorage.getItem('usuario'))
    return u && u.id ? u : null
  } catch {
    return null


const usuario = getUsuario()
const ehAdmin = usuario?.tipo === 'admin'

const API = 'http://localhost:3000/modulos'

const tela = ref('inicio')
const aula = ref(0)
const nome = ref('')
const respostas = ref([])

const modulos = ref([])
const carregando = ref(false)
const erroApi = ref('')

async function carregarModulos() {
  carregando.value = true
  erroApi.value = ''

  try {
    const resposta = await fetch(API)

    if (!resposta.ok) {
      throw new Error('Erro ao buscar módulos.')
    }

    modulos.value = await resposta.json()
  } catch (erro) {
    console.error(erro)
    erroApi.value = 'Não foi possível carregar os módulos. Verifique se o JSON Server está iniciado.'
  } finally {
    carregando.value = false
  }
}

onMounted(() => {
  carregarModulos()
})

const aulas = computed(() =>
  modulos.value.map((m) => ({
    ...m,
    opcoes: [m.opcao1, m.opcao2, m.opcao3]
  }))
)

const progresso = computed(() =>
  aulas.value.length ? ((aula.value + 1) / aulas.value.length) * 100 : 0
)

const podeContinuar = computed(() => {
  const atual = aulas.value[aula.value]
  return atual && respostas.value[aula.value] === atual.correta
})

function iniciar() {
  if (!aulas.value.length) return

  respostas.value = aulas.value.map(() => null)
  tela.value = 'curso'
  aula.value = 0
  window.scrollTo(0, 0)
}

function responder(opcao) {
  respostas.value[aula.value] = opcao
}

function proxima() {
  if (!podeContinuar.value) return

  if (aula.value < aulas.value.length - 1) {
    aula.value++
  } else {
    tela.value = 'final'
  }

  window.scrollTo(0, 0)
}

function imprimir() {
  if (!nome.value.trim()) {
    alert('Digite seu nome primeiro!')
    return
  }

  window.print()
}

const moduloVazio = () => ({
  id: null,
  titulo: '',
  resumo: '',
  texto: '',
  dica: '',
  pergunta: '',
  opcao1: '',
  opcao2: '',
  opcao3: '',
  correta: 0,
  explicacao: ''
})

const moduloForm = reactive(moduloVazio())
const erroForm = ref('')

function novoModulo() {
  Object.assign(moduloForm, moduloVazio())
  erroForm.value = ''
  tela.value = 'form'
}

function editarModulo(modulo) {
  Object.assign(moduloForm, modulo)
  erroForm.value = ''
  tela.value = 'form'
}

async function salvarModulo() {
  const campos = [
    'titulo',
    'resumo',
    'texto',
    'dica',
    'pergunta',
    'opcao1',
    'opcao2',
    'opcao3',
    'explicacao'
  ]

  if (campos.some((c) => !String(moduloForm[c]).trim())) {
    erroForm.value = 'Preencha todos os campos.'
    return
  }

  try {
    const dados = { ...moduloForm }
    const id = dados.id

    delete dados.id

    const editando = id !== null && id !== undefined && id !== ''

    const resposta = await fetch(
      editando ? `${API}/${id}` : API,
      {
        method: editando ? 'PATCH' : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      }
    )

    if (!resposta.ok) {
      throw new Error('Erro ao salvar módulo.')
    }

    await carregarModulos()

    if (erroApi.value) {
      throw new Error('O módulo foi enviado, mas não foi possível atualizar a listagem.')
    }

    Object.assign(moduloForm, moduloVazio())
    tela.value = 'admin'
    alert(editando ? 'Módulo atualizado com sucesso!' : 'Módulo cadastrado com sucesso!')

  } catch (erro) {
    console.error(erro)
    erroForm.value = 'Não foi possível salvar o módulo. Verifique a conexão com a API.'
  }
}

async function excluirModulo(modulo) {
  if (!confirm(`Excluir o módulo "${modulo.titulo}"?`)) return

  try {
    const resposta = await fetch(`${API}/${modulo.id}`, {
      method: 'DELETE'
    })

    if (!resposta.ok) {
      throw new Error('Erro ao excluir módulo.')
    }

    await carregarModulos()

    if (erroApi.value) {
      throw new Error('Não foi possível atualizar a listagem.')
    }

    alert('Módulo excluído com sucesso!')

  } catch (erro) {
    console.error(erro)
    alert('Não foi possível excluir o módulo.')
  }
}
</script>

  <template>
    <AppHeader />

    <div class="curso">
      <!-- INÍCIO -->
      <div v-if="tela === 'inicio'">
        <section class="inicio">
          <div class="inicio-texto">
            <h1>Curso AcolhEla</h1>
            <h2>Informação também é uma forma de proteção.</h2>
            <p>
              Aprenda sobre violência, direitos, autodefesa,
              segurança e rede de apoio.
            </p>
            <div class="comecar">
            <AppButton v-if="aulas.length" @click="iniciar">Começar agora</AppButton>
            </div>
            <button v-if="ehAdmin" class="secundario" @click="tela = 'admin'">Gerenciar módulos</button>
          </div>
        </section>

  <div class="curso">
    <div v-if="tela === 'inicio'">
      <section class="inicio">
        <div class="inicio-texto">
          <h1>Curso AcolhEla</h1>
          <h2>Informação também é uma forma de proteção.</h2>
          <p>
            Aprenda sobre violência, direitos, autodefesa,
            segurança e rede de apoio.
          </p>

          <p v-if="carregando">Carregando módulos...</p>
          <p v-if="erroApi" class="erro-form">{{ erroApi }}</p>

          <button v-if="aulas.length" @click="iniciar">Começar curso</button>
          <button v-if="ehAdmin" class="secundario" @click="tela = 'admin'">
            Gerenciar módulos
          </button>
        </div>
      </section>

      <section class="sobre">
        <h2>Sobre o curso</h2>
        <p>
          Ao longo dos módulos, você responderá atividades relacionadas
          diretamente ao conteúdo apresentado.
        </p>

        <div class="info">
          <div>
            <strong>{{ aulas.length }}</strong>
            <span>Módulos</span>
          </div>
          <div>
            <strong>{{ aulas.length }}</strong>
            <span>Perguntas</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Gratuito</span>
          </div>
        </div>
      </section>

      <section class="aulas">
        <h2>Conteúdo do curso</h2>

        <div class="lista-aulas">
          <div
            v-for="(aulaItem, index) in aulas"
            :key="aulaItem.id"
            class="card-aula"
          >
            <span>0{{ index + 1 }}</span>
            <div>
              <h3>{{ aulaItem.titulo }}</h3>
              <p>{{ aulaItem.resumo }}</p>
            </div>
          </div>
        </div>
      </section>

      <section v-if="aulas.length" class="final-inicio">
        <h2>Vamos começar?</h2>
        <button @click="iniciar">Começar agora</button>
      </section>
    </div>

        <section v-if="aulas.length" class="final-inicio">
          <h2>Vamos começar?</h2>
          <div class="comecar">
          <AppButton @click="iniciar">Começar agora</AppButton>
          </div>
        </section>
      </div>

      <div class="progresso">
        <div :style="{ width: progresso + '%' }"></div>
      </div>

      <main v-if="aulas[aula]" class="conteudo">
        <h1>{{ aulas[aula].titulo }}</h1>
        <p class="introducao">{{ aulas[aula].resumo }}</p>

        <section class="conteudo-modulo">
          <div class="parte">
            <p class="texto-modulo">{{ aulas[aula].texto }}</p>
          </div>

          <div class="importante">
            <h3>Importante</h3>
            <p>{{ aulas[aula].dica }}</p>
          </div>

          <div class="atividade">
            <h2>Questionário</h2>
            <p class="instrucao">
              Responda à pergunta com base no conteúdo apresentado anteriormente.
            </p>

            <div class="pergunta">
              <h3>{{ aulas[aula].pergunta }}</h3>

              <button
                v-for="(opcao, i) in aulas[aula].opcoes"
                :key="i"
                class="opcao"
                :class="{
                  correta: respostas[aula] === i && i === aulas[aula].correta,
                  incorreta: respostas[aula] === i && i !== aulas[aula].correta
                }"
                @click="responder(i)"
              >
                {{ opcao }}
              </button>

              <p v-if="respostas[aula] !== null" class="resultado">
                {{
                  respostas[aula] === aulas[aula].correta
                    ? '✓ ' + aulas[aula].explicacao
                    : '✕ Tente novamente!'
                }}
              </p>
            </div>
          </div>

          <button class="proxima" :disabled="!podeContinuar" @click="proxima">
            {{ aula === aulas.length - 1 ? 'Concluir curso' : 'Próximo módulo →' }}
          </button>
        </section>
      </main>
    </div>

    <div v-if="tela === 'final'" class="conclusao">
      <div class="icone">✓</div>
      <h1>Curso concluído!</h1>
      <p>Parabéns! Você chegou ao final do Curso AcolhEla.</p>

      <div class="certificado">
        <h2>Certificado de conclusão</h2>
        <p>Digite seu nome para gerar o certificado.</p>
        <input v-model="nome" placeholder="Seu nome">
        <button @click="imprimir">Gerar certificado</button>
      </div>
    </div>

    <div v-if="tela === 'admin' && ehAdmin" class="admin">
      <div class="topo-aula">
        <button class="voltar" @click="tela = 'inicio'">← Voltar</button>
        <button @click="novoModulo">+ Novo módulo</button>
      </div>

      <h1>Gerenciar módulos</h1>

      <p v-if="carregando">Carregando módulos...</p>
      <p v-if="erroApi" class="erro-form">{{ erroApi }}</p>
      <p v-if="!carregando && !erroApi && !modulos.length">
        Nenhum módulo cadastrado.
      </p>

      <div v-for="m in modulos" :key="m.id" class="linha-admin">
        <h3>{{ m.titulo }}</h3>

        <div class="botoes-admin">
          <button class="secundario" @click="editarModulo(m)">Editar</button>
          <button class="perigo" @click="excluirModulo(m)">Excluir</button>
        </div>
      </div>
    </div>

    <div v-if="tela === 'form' && ehAdmin" class="admin">
      <div class="topo-aula">
        <button class="voltar" @click="tela = 'admin'">← Cancelar</button>
      </div>

      <h1>{{ moduloForm.id ? 'Editar módulo' : 'Novo módulo' }}</h1>

      <form class="form-modulo" @submit.prevent="salvarModulo">
        <label>
          Título
          <input v-model="moduloForm.titulo" type="text" />
        </label>

        <label>
          Resumo
          <textarea v-model="moduloForm.resumo" rows="2"></textarea>
        </label>

        <label>
          Texto do módulo
          <textarea v-model="moduloForm.texto" rows="5"></textarea>
        </label>

        <label>
          Dica (caixa "Importante")
          <textarea v-model="moduloForm.dica" rows="2"></textarea>
        </label>

        <label>
          Pergunta
          <textarea v-model="moduloForm.pergunta" rows="2"></textarea>
        </label>

        <label>
          Opção 1
          <input v-model="moduloForm.opcao1" type="text" />
        </label>

        <label>
          Opção 2
          <input v-model="moduloForm.opcao2" type="text" />
        </label>

        <label>
          Opção 3
          <input v-model="moduloForm.opcao3" type="text" />
        </label>

        <label>
          Qual é a opção correta?
          <select v-model.number="moduloForm.correta">
            <option :value="0">Opção 1</option>
            <option :value="1">Opção 2</option>
            <option :value="2">Opção 3</option>
          </select>
        </label>

        <label>
          Explicação da resposta
          <textarea v-model="moduloForm.explicacao" rows="2"></textarea>
        </label>

        <p v-if="erroForm" class="erro-form">{{ erroForm }}</p>

        <button type="submit">Salvar módulo</button>
      </form>
    </div>
  </div>

  <AppFooter />
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.curso {
  background: #ffffff;
  color: #650019;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

h1,
h2,
h3,
p {
  line-height: 1.6;
}

h1 {
  font-weight: 400;
}

p {
  line-height: 1.6;
}

button {
  border: none;
  border-radius: 16px;
  padding: 14px 27px;
  background: #620017;
  color: white;
  font-size: 18.75px;
  cursor: pointer;
}

button:hover {
  opacity: .9;
  transform: scale(1.04);
  transition: 0.35s ease;
  border: none;
}

.inicio {
  width: 66%;
  margin: auto;
  padding: 10px;
  display: flex;
  justify-content: center;
}

.inicio-texto {
  max-width: 700px;
}

.inicio h1 {
  font-size: 3.5rem;
  color: #650019;
  display: flex;
  justify-content: center;
}

.inicio h2 {
  font-size: 2.0rem;
  color: #650019;
}

.inicio p {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 1.4rem;
  color: #650019;
}

.inicio-texto button + button {
  margin-left: 12px;
}

.sobre {
  width: 66%;
  margin: 10px auto 20px;
  padding: 25px 43px;
  background: #fff0dc;
  border-radius: 22px;  
  box-shadow: 0 5px 15px rgba(74, 0, 17, 0.2);
}

.sobre h2,
.aulas h2 {
  font-size: 2.5rem;
  color: #650019;
  display: flex;
  justify-content: center;
}

.sobre > p {
  color: #650019;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
}

.info {
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-top: 25px;
}

.info div {
  display: flex;
  flex-direction: column;
}

.info strong {
  font-size: 2.6rem;
  color: #a52d43;
}

.info span {
  color: #650019;
}


.lista-aulas {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-aula {
  width: 66%;
  min-height: 163px;
  margin: 10px auto;
  padding: 25px 43px;
  display: flex;
  align-items: center;
  background: #fff0dc;
  border-radius: 22px;
  box-sizing: border-box;
  box-shadow: 0 5px 15px rgba(74, 0, 17, 0.2);
  gap: 25px;
}

.card-aula > span {
  font-size: 27px;
  color: #a52d47;
}

.card-aula h3 {
  margin: 0 0 5px;
  font-size: 25px;
  color: #4A0011;
}

.card-aula p {
  margin: 0;
  font-size: 17.5px;
  color: #4A0011;
}

.final-inicio {
  width: 66%;
  margin: 20px auto;
  padding: 40px;
  text-align: center;
  background: #f7c6d5;
  border-radius: 22px;
}

.comecar{
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.final-inicio h2 {
  color: #650019;
  font-size: 2.4rem;
}

.final-inicio p {
  margin: 9px 0 9px 0;
}

.pagina-aula {
  min-height: 100vh;
  padding-bottom: 70px;
}

.topo-aula {
  max-width: 850px;
  margin: auto;
  padding: 25px 30px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.voltar {
  padding: 5px;
  background: none;
  color: #620017;
}

.progresso {
  max-width: 790px;
  height: 6px;
  margin: 0 auto 40px;
  background: #eadde0;
  border-radius: 10px;
}

.progresso div {
  height: 100%;
  background: #8e2842;
  border-radius: 10px;
}

.conteudo {
  width: 66%;
  margin: auto;
  padding: 20px 40px;
}

.conteudo > h1 {
  margin-bottom: 10px;
  font-size: 45px;
  color: #620017;
}

.introducao {
  margin-bottom: 40px;
  color: #8e2842;
  font-size: 17px;
}

.parte {
  margin-bottom: 30px;
}

.parte h2 {
  font-size: 31.25px;
}

.parte p {
  font-size: 16px;
}

.importante {
  margin: 35px 0;
  padding: 20px;
  background: #f9e7ea;
  border-left: 4px solid #8e2842;
}

.importante h3 {
  margin-top: 0;
  color: #620017;
}

.atividade {
  margin-top: 45px;
  padding: 35px 40px;
  background: #fbe8d3;
  border-radius: 20px;
}

.atividade h2 {
  color: #4A0011;
  text-align: center;
}

.instrucao {
  color: #4A0011;
  text-align: center;
  margin-bottom: 30px;
}

.pergunta {
  margin: 30px 0;
}

.pergunta h3 {
  font-size: 16px;
  font-weight: bold;
  color: #4A0011;
  margin-bottom: 10px;
}

.opcao {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 14px 20px;
  text-align: left;
  background: #FEB9CD;
  color: #4A0011;
  border: 1px solid #f0d9bd;
  border-radius: 17px;
  font-size: 16px;
}

.opcao:hover {
  background: #fce6c9;
}

.opcao.correta {
  background: #e5f1e7;
  border-color: #8eb69a;
  color: #355c3f;
}

.opcao.incorreta {
  background: #f8e2e5;
  border-color: #d49aa4;
  color: #7a2532;
}

.resultado {
  font-size: 14px;
  color: #66595b;
  margin-top: 6px;
  padding-left: 20px;
}

.proxima {
  display: block;
  margin: 30px auto 0;
  width: 100%;
  max-width: 320px;
  border-radius: 999px;
  background: #4A0011;
  text-align: center;
}

.proxima:disabled {
  opacity: .4;
  cursor: not-allowed;
}

.conclusao {
  width: 66%;
  margin: auto;
  padding: 90px 30px;
  text-align: center;
}

.icone {
  width: 60px;
  height: 60px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f2c4d0;
  color: #620017;
  font-size: 25px;
}

.conclusao h1 {
  font-size: 48px;
  color: #620017;
}

.certificado {
  margin-top: 60px;
  padding: 35px;
  background: white;
  border: 1px solid #ddc7cc;
  border-radius: 10px;
}

.certificado h2 {
  color: #620017;
}

.certificado input {
  width: 90%;
  margin: 15px 0 20px;
  padding: 12px;
  border: 1px solid #d8c7cb;
  border-radius: 6px;
  font-size: 20px;
}

@media (max-width: 700px) {
  .inicio {
    padding: 60px 25px;
  }

  .inicio h1 {
    font-size: 53.75px;
  }

  .inicio h2 {
    font-size: 32.5px;
  }

  .info {
    gap: 30px;
  }

  .conteudo {
    padding: 20px 25px;
  }

  .conteudo > h1 {
    font-size: 45px;
  }

  .topo-aula {
    padding: 20px;
  }
}

@media print {
  body * {
    visibility: hidden;
  }

  .certificado, .certificado * {
    visibility: visible;
  }

  .certificado {
    position: absolute;
    left: 5%;
    top: 20%;
    width: 90%;
  }
}

.texto-modulo {
  white-space: pre-line;
  font-size: 16px;
}

button.secundario {
  background: #F5D0D0;
  color: #4A0011;
}

button.perigo {
  background: #B81833;
}

.inicio-texto button + button {
  margin-left: 12px;
}

.admin {
  max-width: 800px;
  margin: auto;
  padding: 20px 30px 70px;
}

.admin > h1 {
  font-size: 40px;
  color: #620017;
}

.linha-admin {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 12px;
  padding: 16px 20px;
  background: #FEB9CD;
  border: 1px solid #e2728e;
  border-radius: 10px;
}

.linha-admin h3 {
  margin: 0;
  font-size: 20px;
  color: #4A0011;
}

.botoes-admin {
  display: flex;
  gap: 8px;
}

.botoes-admin button {
  padding: 8px 16px;
  font-size: 14px;
}

.form-modulo {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.form-modulo label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  font-weight: bold;
  color: #4A0011;
}

.form-modulo input,
.form-modulo textarea,
.form-modulo select {
  padding: 10px 12px;
  border: 1px solid #d8c7cb;
  border-radius: 8px;
  font-size: 15px;
  background: white;
}

.form-modulo .erro-form,
.erro-form {
  margin: 0;
  color: #B81833;
  font-weight: bold;
}

.form-modulo button[type='submit'] {
  align-self: center;
}
</style>