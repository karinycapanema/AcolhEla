<script setup>
import { ref, reactive, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import AppHeader from '../layout/AppHeader.vue'
import AppFooter from '../layout/AppFooter.vue'

const busca = ref('')
const filtroSelecionado = ref('todos')

let mapa = null
let marcadores = []
let marcadorTemp = null

/* ---------- USUÁRIO LOGADO ----------
   Lê do localStorage, na chave "usuario", algo como { "id": 7 }.
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

const cores = {
  apoio: '#3B803B',
  abrigo: '#ecae43',
  hospital: '#B81833',
  delegacia: '#812E81',
  juridica: '#29689E'
}
const nomesTipo = {
  apoio: 'Apoio psicológico',
  abrigo: 'Casa de acolhimento',
  hospital: 'Hospital',
  delegacia: 'Delegacia',
  juridica: 'Assistência Jurídica'
}

/* ---------- DADOS ----------
   Começam com os locais abaixo. Depois que alguém adiciona, edita ou exclui,
   tudo fica salvo no navegador (localStorage) e continua lá ao recarregar. */
const locaisIniciais = [
  { id: 1, tipo: 'apoio', titulo: 'CREAS Sul', descricao: 'Oferece acolhimento e acompanhamento especializado para pessoas em situação de violência, auxiliando na proteção e no acesso à rede de apoio.', latitude: -26.32573273269251, longitude: -48.84054667963756 },
  { id: 2, tipo: 'apoio', titulo: 'CREAS 3', descricao: 'Realiza atendimento especializado e acompanhamento psicossocial para pessoas e famílias que enfrentam situações de violência ou vulnerabilidade social.', latitude: -26.293979946791847, longitude: -48.857005632479634 },
  { id: 3, tipo: 'apoio', titulo: 'CREAS 2', descricao: 'Oferece acolhimento, orientação e acompanhamento psicossocial para pessoas em situação de violência e outras violações de direitos.', latitude: -26.322462616653226, longitude: -48.83831129151787 },
  { id: 4, tipo: 'apoio', titulo: 'CREAS 4', descricao: 'Presta atendimento psicossocial especializado a pessoas e famílias que enfrentam situações de violência e violação de direitos.', latitude: -26.305799715833494, longitude: -48.84529060584507 },
  { id: 5, tipo: 'abrigo', titulo: 'Abrigo temporário', descricao: 'Espaço sigiloso e seguro para mulheres em situação de risco. Endereço fictício, favor ligar para obter mais informações.', telefone: '3436-3534 / 3434-5718', latitude: -26.309, longitude: -48.85 },
  { id: 6, tipo: 'hospital', titulo: 'Hospital São José', descricao: 'Referência dentre os hospitais públicos de grande porte.', latitude: -26.30976, longitude: -48.84713 },
  { id: 7, tipo: 'hospital', titulo: 'Hospital Regional Hans Dieter', descricao: 'Infraestrutura robusta de nível terciário, focada em alta complexidade médica.', latitude: -26.282, longitude: -48.813 },
  { id: 8, tipo: 'hospital', titulo: 'Hospital Infantil Dr. Jeser Amarante', descricao: 'Hospital público estadual de alta complexidade voltado exclusivamente para o atendimento pediátrico.', latitude: -26.299444, longitude: -48.840556 },
  { id: 9, tipo: 'delegacia', titulo: 'Delegacia Especializada no Atendimento à Mulher', descricao: 'O espaço físico é subdividido para oferecer um atendimento acolhedor e exclusivo para mulheres vítimas de violência doméstica e familiar.', latitude: -26.311409662464, longitude: -48.84299439203333 },
  { id: 10, tipo: 'delegacia', titulo: 'DIC Polícia Civil', descricao: 'Unidade da Polícia Civil localizada no complexo de segurança da Boa Vista.', latitude: -26.30602875753503, longitude: -48.833262904621044 },
  { id: 11, tipo: 'delegacia', titulo: '2ª Delegacia de Polícia Civil', descricao: 'Responsável por ocorrências de diversos bairros da região sul de Joinville.', latitude: -26.33631408102287, longitude: -48.81958505921077 },
  { id: 12, tipo: 'delegacia', titulo: '4ª Delegacia de Polícia', descricao: 'Unidade da Polícia Civil localizada na região do Aventureiro, atendendo ocorrências da região norte/nordeste de Joinville.', latitude: -26.26741329521001, longitude: -48.82210147578651 },
  { id: 13, tipo: 'delegacia', titulo: '1ª Delegacia de Polícia Civil', descricao: 'Atende ocorrências da região de Costa e Silva e bairros próximos. Também pode receber registros de ocorrências envolvendo mulheres.', latitude: -26.27278927462599, longitude: -48.86329901379665 },
  { id: 14, tipo: 'juridica', titulo: 'Defensoria Pública de Santa Catarina', descricao: 'É uma das principais opções para assistência jurídica. Pode prestar orientação jurídica, atendimento e acompanhamento de medidas protetivas de urgência para mulheres.', latitude: -26.294931157539107, longitude: -48.83978170716148 },
  { id: 15, tipo: 'juridica', titulo: 'Defensoria Pública da União', descricao: 'Atende questões que pertencem à Justiça Federal.', latitude: -26.304840987511476, longitude: -48.846836518198806 }
]

const CHAVE = 'acolhela_locais'

function lerSalvos() {
  try {
    const salvo = localStorage.getItem(CHAVE)
    return salvo ? JSON.parse(salvo) : locaisIniciais
  } catch {
    return locaisIniciais
  }
}

const locais = ref(lerSalvos())

function guardar() {
  localStorage.setItem(CHAVE, JSON.stringify(locais.value))
}

const locaisFiltrados = computed(() => {
  return locais.value.filter((local) => {
    const correspondeFiltro =
      filtroSelecionado.value === 'todos' || local.tipo === filtroSelecionado.value
    const textoBusca = `${local.titulo} ${local.descricao}`.toLowerCase()
    return correspondeFiltro && textoBusca.includes(busca.value.toLowerCase())
  })
})

function selecionarFiltro(filtro) {
  filtroSelecionado.value = filtro
}

function acaoLocal(local) {
  const url = `https://www.google.com/maps/search/?api=1&query=${local.latitude},${local.longitude}`
  window.open(url, '_blank')
}

/* ---------- FORMULÁRIO (cadastrar e editar) ---------- */
const mostrarForm = ref(false)
const editandoId = ref(null)
const erroForm = ref('')

const formVazio = () => ({
  titulo: '',
  tipo: 'apoio',
  endereco: '',
  telefone: '',
  descricao: '',
  latitude: null,
  longitude: null
})
const form = reactive(formVazio())

function marcarPonto(lat, lng) {
  form.latitude = Number(lat.toFixed(6))
  form.longitude = Number(lng.toFixed(6))
  if (marcadorTemp) mapa.removeLayer(marcadorTemp)
  marcadorTemp = L.circleMarker([lat, lng], {
    radius: 11,
    color: '#620017',
    weight: 3,
    fillColor: '#FEB9CD',
    fillOpacity: 0.9
  }).addTo(mapa)
}

function novoLocal() {
  Object.assign(form, formVazio())
  editandoId.value = null
  erroForm.value = ''
  mostrarForm.value = true
}

function editarLocal(local) {
  Object.assign(form, {
    titulo: local.titulo,
    tipo: local.tipo,
    endereco: local.endereco || '',
    telefone: local.telefone || '',
    descricao: local.descricao
  })
  editandoId.value = local.id
  erroForm.value = ''
  mostrarForm.value = true
  marcarPonto(local.latitude, local.longitude)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function cancelar() {
  mostrarForm.value = false
  if (marcadorTemp) mapa.removeLayer(marcadorTemp)
  marcadorTemp = null
}

function salvar() {
  if (!form.titulo.trim() || !form.descricao.trim()) {
    erroForm.value = 'Preencha o nome e a descrição.'
    return
  }
  if (form.latitude === null) {
    erroForm.value = 'Clique no mapa para marcar a localização.'
    return
  }

  if (editandoId.value) {
    // EDITAR: troca o local antigo pelo editado
    locais.value = locais.value.map((l) =>
      l.id === editandoId.value ? { ...form, id: editandoId.value } : l
    )
  } else {
    // CADASTRAR: adiciona no final da lista
    locais.value = [...locais.value, { ...form, id: Date.now() }]
  }

  guardar()
  cancelar()
}

function excluir(local) {
  if (!confirm(`Excluir "${local.titulo}"?`)) return
  locais.value = locais.value.filter((l) => l.id !== local.id)
  guardar()
}

/* ---------- MAPA ---------- */
function escapeHtml(texto) {
  const div = document.createElement('div')
  div.textContent = texto ?? ''
  return div.innerHTML
}

function atualizarMarcadores() {
  if (!mapa) return

  marcadores.forEach((marcador) => mapa.removeLayer(marcador))
  marcadores = []

  locaisFiltrados.value.forEach((local) => {
    const cor = cores[local.tipo] || '#555555'

    const marcador = L.circleMarker([local.latitude, local.longitude], {
      radius: 9,
      color: '#ffffff',
      weight: 2,
      fillColor: cor,
      fillOpacity: 1
    })

    const popupEl = document.createElement('div')
    popupEl.className = 'popup-mapa'
    popupEl.innerHTML = `
      <strong>${escapeHtml(local.titulo)}</strong>
      <p>${escapeHtml(local.descricao)}</p>
      ${local.telefone ? `<p>📞 ${escapeHtml(local.telefone)}</p>` : ''}
    `

    const botao = document.createElement('button')
    botao.textContent = 'Saiba mais'
    botao.style.cssText = `
      background:${cor};
      color:white;
      border:none;
      border-radius:15px;
      padding:7px 15px;
      cursor:pointer;
    `
    botao.addEventListener('click', () => acaoLocal(local))
    popupEl.appendChild(botao)

    marcador.bindPopup(popupEl)
    marcador.addTo(mapa)
    marcadores.push(marcador)
  })
}

watch(locaisFiltrados, atualizarMarcadores)

onMounted(() => {
  mapa = L.map('mapaInterativo', { zoomControl: true }).setView([-26.3044, -48.8487], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(mapa)

  // com o formulário aberto, clicar no mapa escolhe a localização
  mapa.on('click', (e) => {
    if (mostrarForm.value) marcarPonto(e.latlng.lat, e.latlng.lng)
  })

  atualizarMarcadores()
})

onBeforeUnmount(() => {
  if (mapa) {
    mapa.remove()
    mapa = null
  }
})
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <div class="pagina">
    <div class="intro">
      <h1>Mapa de Acolhimento</h1>
      <p>Encontre locais de apoio próximos a você</p>

      <button v-if="usuario && !mostrarForm" class="btn-add" @click="novoLocal">
        + Adicionar local
      </button>
      <p v-if="!usuario" class="aviso-login">Faça login para adicionar locais no mapa.</p>
    </div>

    <section class="segmento1">
      <div class="mapa">
        <div id="mapaInterativo"></div>

        <div id="tituMapa">
          <h3>Mapa Interativo</h3>
          <p v-if="mostrarForm">Clique no mapa para marcar a localização</p>
          <p v-else>Visualize os locais de apoio no mapa abaixo</p>
        </div>
      </div>

      <div class="Buscalocal">
        <input
          v-model="busca"
          type="text"
          placeholder="Buscar local..."
          aria-label="Buscar local"
        />

        <div class="tiposLocais" role="group" aria-label="Filtrar por categoria">
          <button :class="{ selecionado: filtroSelecionado === 'todos' }" @click="selecionarFiltro('todos')">Todos</button>
          <button :class="{ selecionado: filtroSelecionado === 'delegacia' }" @click="selecionarFiltro('delegacia')">Delegacia</button>
          <button :class="{ selecionado: filtroSelecionado === 'hospital' }" @click="selecionarFiltro('hospital')">Hospital</button>
          <button :class="{ selecionado: filtroSelecionado === 'abrigo' }" @click="selecionarFiltro('abrigo')">Casa de acolhimento</button>
          <button :class="{ selecionado: filtroSelecionado === 'apoio' }" @click="selecionarFiltro('apoio')">Apoio psicológico</button>
          <button :class="{ selecionado: filtroSelecionado === 'juridica' }" @click="selecionarFiltro('juridica')">Assistência Jurídica</button>
        </div>
      </div>
    </section>

    <!-- FORMULÁRIO -->
    <section v-if="mostrarForm" class="form-local">
      <h2>{{ editandoId ? 'Editar local' : 'Novo local' }}</h2>

      <form @submit.prevent="salvar">
        <label>
          Nome do local
          <input v-model="form.titulo" type="text" />
        </label>

        <label>
          Categoria
          <select v-model="form.tipo">
            <option v-for="(nome, chave) in nomesTipo" :key="chave" :value="chave">{{ nome }}</option>
          </select>
        </label>

        <label>
          Endereço
          <input v-model="form.endereco" type="text" />
        </label>

        <label>
          Telefone
          <input v-model="form.telefone" type="text" />
        </label>

        <label class="larga">
          Descrição
          <textarea v-model="form.descricao" rows="3"></textarea>
        </label>

        <p class="ponto larga">
          {{ form.latitude !== null ? '✓ Localização marcada' : 'Clique no mapa para marcar a localização.' }}
        </p>

        <p v-if="erroForm" class="erro-form larga">{{ erroForm }}</p>

        <div class="acoes-form larga">
          <button type="submit">Salvar</button>
          <button type="button" class="secundario" @click="cancelar">Cancelar</button>
        </div>
      </form>
    </section>

    <!-- CARDS -->
    <section class="segmento2">
      <div
        v-for="local in locaisFiltrados"
        :key="local.id"
        class="card-local"
        :class="local.tipo"
        :style="{ '--cor': cores[local.tipo] || '#555555' }"
      >
        <h2>{{ local.titulo }}</h2>
        <p>{{ local.descricao }}</p>
        <p v-if="local.endereco">📍 {{ local.endereco }}</p>
        <p v-if="local.telefone">📞 {{ local.telefone }}</p>

        <button @click="acaoLocal(local)">Saiba mais</button>

        <div v-if="usuario" class="acoes">
          <button class="btn-editar" @click="editarLocal(local)">Editar</button>
          <button class="btn-excluir" @click="excluir(local)">Excluir</button>
        </div>
      </div>

      <div v-if="locaisFiltrados.length === 0" class="nenhum">
        <h2>Nenhum local encontrado</h2>
        <p>Tente buscar por outro local ou categoria.</p>
      </div>
    </section>
  </div>
  <footer>
    <AppFooter />
  </footer>
</template>

<style scoped>
.pagina {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: 35px 40px 70px;
  box-sizing: border-box;
}

.intro {
  margin-bottom: 30px;
}

.intro h1 {
  margin: 0 0 8px;
  font-size: 34px;
  font-weight: bold;
  color: black;
}

.intro p {
  margin: 0;
  font-size: 17px;
}

.segmento1 {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 30px;
  align-items: start;
}

.segmento1 .mapa {
  position: relative;
  width: 100%;
  height: 430px;
  margin: 0;
  border-radius: 20px;
  overflow: hidden;
}

#mapaInterativo {
  width: 100%;
  height: 100%;
  z-index: 1;
}

.segmento1 .mapa #tituMapa {
  position: absolute;
  z-index: 1000;
  top: 15px;
  left: 15px;
  width: 260px;
  padding: 15px 18px;
  background-color: #FEB9CD;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.10);
  box-sizing: border-box;
}

.segmento1 .mapa #tituMapa h3 {
  margin: 0 0 6px;
  font-size: 21px;
  font-weight: bold;
}

.segmento1 .mapa #tituMapa p {
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
}

.segmento1 .Buscalocal {
  width: 100%;
}

.segmento1 .Buscalocal input {
  width: 100%;
  height: 45px;
  padding: 8px 15px;
  margin: 0 0 18px;
  background-color: #FFECCC;
  border-radius: 15px;
  border: none;
  outline: none;
  font-size: 15px;
  box-sizing: border-box;
}

.segmento1 .Buscalocal .tiposLocais {
  width: 100%;
  padding: 20px 16px;
  background-color: #FFECCC;
  border-radius: 20px;
  box-sizing: border-box;
  color: #4A0011;
}

.segmento1 .Buscalocal .tiposLocais button {
  display: block;
  width: 100%;
  padding: 10px 12px;
  margin: 0 0 12px;
  background-color: #F5D0D0;
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 15px;
  text-align: left;
  cursor: pointer;
  transition: 0.2s;
  box-sizing: border-box;
  color: #4A0011;
}

.segmento1 .Buscalocal .tiposLocais button:last-child {
  margin-bottom: 0;
}

.segmento1 .Buscalocal .tiposLocais button:hover,
.segmento1 .Buscalocal .tiposLocais button.selecionado {
  background-color: #FEB9CD;
}

.segmento1 .Buscalocal .tiposLocais button.selecionado {
  font-weight: bold;
}

.segmento2 {
  width: 100%;
  margin: 30px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}

.card-local {
  width: 100%;
  min-height: 190px;
  padding: 25px 30px;
  background-color: #FADADA;
  border-radius: 20px;
  box-sizing: border-box;
  transition: 0.2s;
}

.card-local:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.10);
}

.card-local h2 {
  margin: 0 0 10px;
  color: var(--cor);
  font-size: 24px;
  font-weight: bold;
}

.card-local p {
  margin: 0;
  color: var(--cor);
  font-size: 15px;
  line-height: 1.5;
}

.card-local button {
  display: block;
  width: 75%;
  max-width: 280px;
  margin: 22px auto 0;
  padding: 10px 20px;
  background-color: var(--cor);
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.card-local button:hover {
  opacity: 0.85;
}

.nenhum {
  grid-column: 1 / -1;
  width: 100%;
  padding: 40px;
  background-color: #FFECCC;
  border-radius: 20px;
  text-align: center;
  box-sizing: border-box;
}

.nenhum h2 {
  margin: 0 0 10px;
}

.nenhum p {
  margin: 0;
}

.segmento2 .juridica {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 190px;
  text-align: center;
  box-sizing: border-box;
}

.segmento2 .juridica h2 {
  width: 100%;
  margin: 0 0 10px;
  text-align: center;
}

.segmento2 .juridica p {
  width: 100%;
  margin: 0;
  text-align: center;
}

.segmento2 .juridica button {
  display: block;
  width: 75%;
  max-width: 280px;
  margin: 22px auto 0;
}

/* ===== NOVO: adicionar / editar / excluir ===== */

.btn-add {
  margin-top: 14px;
  padding: 10px 22px;
  background-color: #620017;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
}

.aviso-login {
  margin-top: 14px;
  font-size: 15px;
}

.form-local {
  margin-top: 30px;
  padding: 25px 30px;
  background-color: #FFECCC;
  border-radius: 20px;
  color: #4A0011;
  box-sizing: border-box;
}

.form-local form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 20px;
}

.form-local label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: bold;
}

.form-local .larga {
  grid-column: 1 / -1;
}

.form-local input,
.form-local select,
.form-local textarea {
  padding: 10px 12px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-family: inherit;
  box-sizing: border-box;
}

.form-local .erro-form {
  margin: 0;
  color: #B81833;
  font-weight: bold;
}

.form-local .acoes-form {
  display: flex;
  gap: 12px;
}

.form-local .acoes-form button {
  padding: 10px 24px;
  background-color: #620017;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
}

.form-local .acoes-form button.secundario {
  background-color: #F5D0D0;
  color: #4A0011;
}

.card-local .acoes {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 14px;
}

.card-local .acoes button {
  width: auto;
  margin: 0;
  padding: 6px 18px;
  font-size: 14px;
  background-color: transparent;
  border: 2px solid var(--cor);
  color: var(--cor);
}

.card-local .acoes button.btn-excluir {
  border-color: #B81833;
  color: #B81833;
}

/* ===== RESPONSIVO ===== */

@media (max-width: 1000px) {
  .pagina {
    padding: 30px;
  }

  .segmento1 {
    grid-template-columns: minmax(0, 1fr) 250px;
    gap: 20px;
  }

  .segmento1 .mapa {
    height: 400px;
  }
}

@media (max-width: 800px) {
  .pagina {
    padding: 25px 20px 50px;
  }

  .segmento1 {
    grid-template-columns: 1fr;
  }

  .segmento1 .mapa {
    height: 400px;
  }

  .segmento2 {
    grid-template-columns: 1fr;
  }

  .form-local form {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .pagina {
    padding: 20px 15px 40px;
  }

  .intro h1 {
    font-size: 28px;
    color: #4A0011;
  }

  .intro p {
    font-size: 15px;
    color: #4A0011;
  }

  .segmento1 .mapa {
    height: 350px;
  }

  .segmento1 .mapa #tituMapa {
    width: 230px;
    padding: 14px 15px;
  }

  .segmento1 .mapa #tituMapa h3 {
    font-size: 18px;
  }

  .segmento1 .mapa #tituMapa p {
    font-size: 12px;
  }

  .segmento2 {
    grid-template-columns: 1fr;
  }

  .card-local {
    min-height: 180px;
    padding: 22px;
  }
}
</style>