<script setup>
import { ref, reactive, computed } from 'vue'
import AppHeader from '../layout/AppHeader.vue'
import AppFooter from '../layout/AppFooter.vue'

/* ---------- USUÁRIO LOGADO ----------
   Lê do localStorage, na chave "usuario", algo como { "id": 7, "tipo": "admin" }.
   Só quem tem tipo "admin" vê o botão de gerenciar módulos.
   Se o login de vocês guarda de outro jeito, ajuste só esta função. */
function getUsuario() {
  try {
    const u = JSON.parse(localStorage.getItem('usuario'))
    return u && u.id ? u : null
  } catch {
    return null
  }
}
const usuario = getUsuario()
const ehAdmin = usuario?.tipo === 'admin'

// telas: 'inicio' | 'curso' | 'final' | 'admin' | 'form'
const tela = ref('inicio')
const aula = ref(0)
const nome = ref('')
const respostas = ref([]) // uma resposta por módulo (null = ainda não respondeu)

/* ---------- DADOS ----------
   Começam com os módulos abaixo. Depois que o admin cadastra, edita ou exclui,
   tudo fica salvo no navegador (localStorage). */
const modulosIniciais = [
  {
    id: 1,
    titulo: 'Entendendo a violência',
    resumo: 'Aprenda a reconhecer os diferentes tipos de violência e como eles podem aparecer no dia a dia.',
    texto: 'Violência é qualquer ação ou comportamento que cause dano, sofrimento, medo, constrangimento ou prejuízo a outra pessoa.\nA violência pode ser física, psicológica, sexual, moral ou patrimonial. Uma situação pode envolver mais de um tipo.',
    dica: 'A violência não acontece somente de forma física. Comportamentos psicológicos, morais, sexuais e patrimoniais também podem causar danos.',
    pergunta: 'Uma pessoa constantemente humilha outra, ameaça deixá-la e tenta controlar suas amizades. Esse comportamento pode ser considerado:',
    opcao1: 'Violência psicológica',
    opcao2: 'Apenas uma discussão comum',
    opcao3: 'Uma demonstração de carinho',
    correta: 0,
    explicacao: 'Humilhações, ameaças e controle podem caracterizar violência psicológica.'
  },
  {
    id: 2,
    titulo: 'Reconhecendo situações de risco',
    resumo: 'Aprenda a identificar comportamentos que podem indicar uma situação de risco ou abuso.',
    texto: 'Ameaças, perseguição, isolamento, controle excessivo e invasão de privacidade podem indicar uma situação de risco.\nControlar amizades, roupas, redes sociais, localização ou exigir senhas pode representar uma tentativa de controlar outra pessoa.',
    dica: 'A responsabilidade pela violência nunca é da vítima.',
    pergunta: 'Uma pessoa exige a senha das redes sociais da parceira e fica irritada quando ela conversa com amigos. Esse comportamento pode indicar:',
    opcao1: 'Controle excessivo',
    opcao2: 'Comunicação saudável',
    opcao3: 'Respeito à privacidade',
    correta: 0,
    explicacao: 'Exigir senhas e controlar amizades são exemplos de comportamentos de controle.'
  },
  {
    id: 3,
    titulo: 'Meus direitos',
    resumo: 'Conheça informações básicas sobre direitos e mecanismos de proteção.',
    texto: 'A Lei Maria da Penha estabelece mecanismos para prevenir e combater a violência doméstica e familiar contra a mulher.\nExistem mecanismos legais destinados à proteção de mulheres em situação de violência.',
    dica: 'Conhecer seus direitos permite buscar orientação e proteção com mais informação.',
    pergunta: 'Qual é um dos objetivos da Lei Maria da Penha?',
    opcao1: 'Prevenir e combater a violência doméstica e familiar contra a mulher.',
    opcao2: 'Regular o uso das redes sociais.',
    opcao3: 'Criar regras para relacionamentos.',
    correta: 0,
    explicacao: 'A Lei Maria da Penha possui mecanismos para prevenir e combater a violência doméstica e familiar contra a mulher.'
  },
  {
    id: 4,
    titulo: 'Autodefesa e segurança',
    resumo: 'Aprenda princípios de prevenção e planejamento para situações de risco.',
    texto: 'Reconhecer situações de risco e pensar previamente em formas seguras de buscar ajuda pode fazer parte de um plano de segurança.\nUm plano pode envolver pessoas de confiança, lugares seguros, contatos importantes e estratégias para buscar ajuda.',
    dica: 'Autodefesa também envolve prevenção, percepção de riscos e planejamento. Em situações perigosas, priorize sua segurança.',
    pergunta: 'Qual elemento pode fazer parte de um plano de segurança?',
    opcao1: 'Pessoas de confiança e lugares seguros.',
    opcao2: 'Isolamento completo.',
    opcao3: 'Compartilhar senhas com qualquer pessoa.',
    correta: 0,
    explicacao: 'Pessoas de confiança e lugares seguros podem fazer parte de um planejamento de segurança.'
  },
  {
    id: 5,
    titulo: 'Rede de apoio',
    resumo: 'Entenda como pessoas e serviços podem ajudar em situações de violência.',
    texto: 'Uma rede de apoio pode ser formada por familiares, amigos, professores, profissionais e outras pessoas de confiança.\nConversar com alguém de confiança e procurar serviços especializados pode ser um caminho para obter orientação e apoio.',
    dica: 'Buscar ajuda não é sinal de fraqueza. Uma rede de apoio pode ajudar a encontrar caminhos de proteção.',
    pergunta: 'Quem pode fazer parte de uma rede de apoio?',
    opcao1: 'Somente familiares.',
    opcao2: 'Pessoas de confiança, como amigos, familiares ou profissionais.',
    opcao3: 'Somente pessoas que já passaram pela mesma situação.',
    correta: 1,
    explicacao: 'Uma rede de apoio pode envolver diferentes pessoas de confiança.'
  }
]

const CHAVE = 'acolhela_modulos'

function lerSalvos() {
  try {
    const salvo = localStorage.getItem(CHAVE)
    return salvo ? JSON.parse(salvo) : modulosIniciais
  } catch {
    return modulosIniciais
  }
}

const modulos = ref(lerSalvos())

function guardar() {
  localStorage.setItem(CHAVE, JSON.stringify(modulos.value))
}

// junta as 3 opções numa lista, que é o formato que a tela do curso usa
const aulas = computed(() =>
  modulos.value.map((m) => ({ ...m, opcoes: [m.opcao1, m.opcao2, m.opcao3] }))
)

/* ---------- NAVEGAÇÃO DO CURSO ---------- */
const progresso = computed(() =>
  aulas.value.length ? ((aula.value + 1) / aulas.value.length) * 100 : 0
)

const podeContinuar = computed(() => {
  const atual = aulas.value[aula.value]
  return atual && respostas.value[aula.value] === atual.correta
})

function iniciar() {
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

/* ---------- ADMIN: CADASTRAR / EDITAR / EXCLUIR ---------- */
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

function salvarModulo() {
  const campos = ['titulo', 'resumo', 'texto', 'dica', 'pergunta', 'opcao1', 'opcao2', 'opcao3', 'explicacao']
  if (campos.some((c) => !String(moduloForm[c]).trim())) {
    erroForm.value = 'Preencha todos os campos.'
    return
  }

  if (moduloForm.id) {
    // EDITAR
    modulos.value = modulos.value.map((m) =>
      m.id === moduloForm.id ? { ...moduloForm } : m
    )
  } else {
    // CADASTRAR
    modulos.value = [...modulos.value, { ...moduloForm, id: Date.now() }]
  }

  guardar()
  tela.value = 'admin'
}

function excluirModulo(modulo) {
  if (!confirm(`Excluir o módulo "${modulo.titulo}"?`)) return
  modulos.value = modulos.value.filter((m) => m.id !== modulo.id)
  guardar()
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
          <button v-if="aulas.length" @click="iniciar">Começar curso</button>
          <button v-if="ehAdmin" class="secundario" @click="tela = 'admin'">Gerenciar módulos</button>
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
          <div v-for="(aulaItem, index) in aulas" :key="aulaItem.id" class="card-aula">
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

    <!-- CURSO -->
    <div v-if="tela === 'curso'" class="pagina-aula">
      <div class="topo-aula">
        <button class="voltar" @click="tela = 'inicio'">← Voltar</button>
        <span>Módulo {{ aula + 1 }} de {{ aulas.length }}</span>
      </div>

      <div class="progresso">
        <div :style="{ width: progresso + '%' }"></div>
      </div>

      <main class="conteudo">
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

    <!-- FINAL -->
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

    <!-- ADMIN: LISTA -->
    <div v-if="tela === 'admin' && ehAdmin" class="admin">
      <div class="topo-aula">
        <button class="voltar" @click="tela = 'inicio'">← Voltar</button>
        <button @click="novoModulo">+ Novo módulo</button>
      </div>

      <h1>Gerenciar módulos</h1>

      <div v-for="m in modulos" :key="m.id" class="linha-admin">
        <h3>{{ m.titulo }}</h3>
        <div class="botoes-admin">
          <button class="secundario" @click="editarModulo(m)">Editar</button>
          <button class="perigo" @click="excluirModulo(m)">Excluir</button>
        </div>
      </div>
    </div>

    <!-- ADMIN: FORMULÁRIO -->
    <div v-if="tela === 'form' && ehAdmin" class="admin">
      <div class="topo-aula">
        <button class="voltar" @click="tela = 'admin'">← Cancelar</button>
      </div>

      <h1>{{ moduloForm.id ? 'Editar módulo' : 'Novo módulo' }}</h1>

      <form class="form-modulo" @submit.prevent="salvarModulo">
        <label>Título <input v-model="moduloForm.titulo" type="text" /></label>
        <label>Resumo <textarea v-model="moduloForm.resumo" rows="2"></textarea></label>
        <label>Texto do módulo <textarea v-model="moduloForm.texto" rows="5"></textarea></label>
        <label>Dica (caixa "Importante") <textarea v-model="moduloForm.dica" rows="2"></textarea></label>

        <label>Pergunta <textarea v-model="moduloForm.pergunta" rows="2"></textarea></label>
        <label>Opção 1 <input v-model="moduloForm.opcao1" type="text" /></label>
        <label>Opção 2 <input v-model="moduloForm.opcao2" type="text" /></label>
        <label>Opção 3 <input v-model="moduloForm.opcao3" type="text" /></label>
        <label>
          Qual é a opção correta?
          <select v-model.number="moduloForm.correta">
            <option :value="0">Opção 1</option>
            <option :value="1">Opção 2</option>
            <option :value="2">Opção 3</option>
          </select>
        </label>
        <label>Explicação da resposta <textarea v-model="moduloForm.explicacao" rows="2"></textarea></label>

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
  min-height: 100vh;
  background: #fffaf8;
  color: #3d3033;
  font-family: Georgia, 'Times New Roman', Times, serif;
  zoom: 1.66;
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
  max-width: 1000px;
  margin: auto;
  padding: 90px 40px;
}
.inicio-texto {
  max-width: 700px;
}
.inicio h1 {
  margin: 0 0 15px;
  font-size: 72.5px;
  color: #620017;
  font-weight: bold;
}
.inicio h2 {
  font-size: 40px;
  color: #620017;
}
.inicio p {
  max-width: 620px;
  margin-bottom: 30px;
  font-size: 21px;
  color: #4A0011;
  margin-top: 20px;
}

.sobre {
  max-width: 850px;
  margin: auto;
  padding: 50px 30px;
  text-align: center;
}
.sobre h2, .aulas h2 {
  font-size: 40px;
  color: #620017;
}
.sobre > p {
  max-width: 700px;
  margin: auto;
  color: #3A3A3A;
}
.info {
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-top: 35px;
}
.info div {
  display: flex;
  flex-direction: column;
}
.info strong {
  font-size: 33.75px;
  color: #8e2842;
}

.aulas {
  max-width: 850px;
  margin: auto;
  padding: 50px 30px;
}
.aulas h2 {
  text-align: center;
  margin-bottom: 30px;
}
.lista-aulas {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.card-aula {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: white;
  border: 1px solid #eadde0;
  border-radius: 10px;
  background-color: #FEB9CD;
  border-color: #e2728e;
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
  max-width: 600px;
  margin: 50px auto 80px;
  padding: 40px;
  text-align: center;
  background: #f9e7ea;
  border-radius: 12px;
  background-color: #FEB9CD;
}
.final-inicio h2 {
  margin-top: 0;
  color: #620017;
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
  max-width: 800px;
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
  font-family: Georgia, 'Times New Roman', Times, serif;
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
  max-width: 700px;
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
  white-space: pre-line; /* respeita a quebra de linha digitada no texto */
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
  font-family: inherit;
  background: white;
}

.form-modulo .erro-form {
  margin: 0;
  color: #B81833;
  font-weight: bold;
}

.form-modulo button[type='submit'] {
  align-self: center;
}
</style>