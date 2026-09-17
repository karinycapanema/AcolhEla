<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import AppHeader from '../layout/AppHeader.vue'
import AppFooter from '../layout/AppFooter.vue'

const busca = ref('')
const filtroSelecionado = ref('todos')

let mapa = null
let marcadores = []

const locais = [
  
  {
    id: 1,
    tipo: 'apoio',
    titulo: 'CREAS Sul',
    descricao: 'Oferece acolhimento e acompanhamento especializado para pessoas em situação de violência, auxiliando na proteção e no acesso à rede de apoio.',
    botao: 'Saiba mais',
    cor: '#3B803B',
    latitude: -26.32573273269251,
    longitude:  -48.84054667963756
  },
    {
    id: 2,
    tipo: 'apoio',
    titulo: 'CREAS 3',
    descricao: 'Realiza atendimento especializado e acompanhamento psicossocial para pessoas e famílias que enfrentam situações de violência ou vulnerabilidade social',
    botao: 'Saiba mais',
    cor: '#3B803B',
    latitude: -26.293979946791847,
    longitude:  -48.857005632479634
  },

    {
    id: 3,
    tipo: 'apoio',
    titulo: 'CREAS 2',
    descricao: 'Oferece acolhimento, orientação e acompanhamento psicossocial para pessoas em situação de violência e outras violações de direitos',
    botao: 'Saiba mais',
    cor: '#3B803B',
    latitude: -26.322462616653226,
    longitude:  -48.83831129151787
  },
    {
    id: 4,
    tipo: 'apoio',
    titulo: 'CREAS 4',
    descricao: 'Presta atendimento psicossocial especializado a pessoas e famílias que enfrentam situações de violência e violação de direitos',
    botao: 'Saiba mais',
    cor: '#3B803B',
    latitude: -26.305799715833494,
    longitude:  -48.84529060584507
  },
  {
    id: 5,
    tipo: 'abrigo',
    titulo: 'Abrigo temporário',
    descricao: 'Espaço sigiloso e seguro para mulheres em situação de risco, favor ligar ao número: 3436-3534 ou 3434-5718 para mais informações',
    botao: 'endereço fictício, favor ligar ao número na descrição',
    cor: '#ecae43',
    latitude: -26.3090,
    longitude: -48.8500
  },

  { id:6 ,
     tipo: 'hospital'
    , titulo: 'Hospital são josé',
    descricao: 'referência dentre os hospitais públicos de grande porte',
    botao: 'SaibaMais',
    cor: '#B81833',
    latitude: -26.30976,
   longitude:-48.84713
   },

  { 
    id:7 ,
    tipo: 'hospital',
    titulo: 'Hospital Regional Hans Dieter ',
    descricao: 'infraestrutura robusta de nível terciário, focada em alta complexidade médica.',
    botao: 'SaibaMais',
    cor: '#B81833',
    latitude: -26.282,
    longitude: -48.813 
  },

  { 
    id:8 ,
    tipo: 'hospital',
    titulo: 'Hospital infantil Dr. Jeser Amarante',
    descricao: 'hospital público estadual de alta complexidade voltado exclusivamente para o atendimento pediátrico',
    botao: 'SaibaMais',
    cor: '#B81833',
    latitude: -26.299444,
    longitude: -48.840556 
  } ,
   { 
    id: 9,
    tipo: 'delegacia',
    titulo: 'Delegacia Especializada no Atendimento à Mulher',
    descricao: ' O espaço físico é subdividido para oferecer um atendimento acolhedor e exclusivo para mulheres vítimas de violência doméstica e familiar',
    botao: 'SaibaMais',
    cor: '#812E81',
    latitude: -26.311409662464,
    longitude:-48.84299439203333
  },
     { 
    id: 10,
    tipo: 'delegacia',
    titulo: 'DIC Polícia Civil',
    descricao: 'Unidade da Polícia Civil localizada no complexo de segurança da Boa Vista',
    botao: 'SaibaMais',
    cor: '#812E81',
    latitude:-26.30602875753503,
    longitude:  -48.833262904621044
  } ,

  { 
    id: 11 ,
    tipo: 'delegacia',
    titulo: '2ª Delegacia de Polícia Civil',
    descricao: 'responsável por ocorrências de diversos bairros da região sul de Joinville.',
    botao: 'SaibaMais',
    cor: '#812E81',
    latitude: -26.33631408102287,
    longitude: -48.81958505921077
  }, 

     { 
    id: 12,
    tipo: 'delegacia',
    titulo: '4ª Delegacia de Polícia',
    descricao: 'Unidade da Polícia Civil localizada na região do Aventureiro, atendendo ocorrências da região norte/nordeste de Joinville.',
    botao: 'SaibaMais',
    cor: '#812E81',
    latitude:-26.26741329521001, 
    longitude:  -48.82210147578651 
  } ,

   { 
    id: 13,
    tipo: 'delegacia',
    titulo: '1ª Delegacia de Polícia Civil',
    descricao: 'atende ocorrências da região de Costa e Silva e bairros próximos. Também pode receber registros de ocorrências envolvendo mulheres.',
    botao: 'SaibaMais',
    cor: '#812E81',
    latitude: -26.27278927462599, 
    longitude:  -48.86329901379665
  },

   { 
    id:14 ,
    tipo: 'juridica',
    titulo: 'Defensoria Pública de Santa Catarina',
    descricao: 'É uma das principais opções para assistência jurídica. O Tribunal de Justiça de SC informa que a Defensoria pode prestar orientação jurídica, atendimento e acompanhamento de medidas protetivas de urgência para mulheres,',
    botao: 'SaibaMais',
    cor: '#29689E',
    latitude:-26.294931157539107,
    longitude:   -48.83978170716148 
  } ,

     { 
    id:15 ,
    tipo: 'juridica',
    titulo: 'Defensoria Pública da União',
    descricao: 'atende questões que pertencem à Justiça Federal',
    botao: 'SaibaMais',
    cor: '#29689E',
    latitude: -26.304840987511476,
    longitude:   -48.846836518198806
  }
  
  
 ]



const locaisFiltrados = computed(() => {
  return locais.filter((local) => {
    const correspondeFiltro =
      filtroSelecionado.value === 'todos' ||
      local.tipo === filtroSelecionado.value

    const textoBusca = `${local.titulo} ${local.descricao}`.toLowerCase()
    const correspondeBusca = textoBusca.includes(busca.value.toLowerCase())

    return correspondeFiltro && correspondeBusca
  })
})

function selecionarFiltro(filtro) {
  filtroSelecionado.value = filtro
}

function acaoLocal(local) {
  const url = `https://www.google.com/maps/search/?api=1&query=${local.latitude},${local.longitude}`
  window.open(url, '_blank')
}


function escapeHtml(texto) {
  const div = document.createElement('div')
  div.textContent = texto
  return div.innerHTML
}

function atualizarMarcadores() {
  if (!mapa) return

  marcadores.forEach((marcador) => mapa.removeLayer(marcador))
  marcadores = []

  locaisFiltrados.value.forEach((local) => {
    const marcador = L.circleMarker(
      [local.latitude, local.longitude],
      {
        radius: 9,
        color: '#ffffff',
        weight: 2,
        fillColor: local.cor,
        fillOpacity: 1
      }
    )

    const popupEl = document.createElement('div')
    popupEl.className = 'popup-mapa'
    popupEl.innerHTML = `
      <strong>${escapeHtml(local.titulo)}</strong>
      <p>${escapeHtml(local.descricao)}</p>
    `

    const botao = document.createElement('button')
    botao.textContent = local.botao
    botao.style.cssText = `
      background:${local.cor};
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


watch([busca, filtroSelecionado], atualizarMarcadores)

onMounted(() => {
  mapa = L.map('mapaInterativo', {
    zoomControl: true
  }).setView([-26.3044, -48.8487], 13)

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }
  ).addTo(mapa)

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
    <AppHeader/>
  </header>
  <div class="pagina">
    <div class="intro">
      <h1>Mapa de Acolhimento</h1>
      <p>Encontre locais de apoio próximos a você</p>
    </div>

    <section class="segmento1">
      <div class="mapa">
        <div id="mapaInterativo"></div>

        <div id="tituMapa">
          <h3>Mapa Interativo</h3>
          <p>Visualize os locais de apoio no mapa abaixo</p>
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
          <button
            :class="{ selecionado: filtroSelecionado === 'todos' }"
            :aria-pressed="filtroSelecionado === 'todos'"
            @click="selecionarFiltro('todos')"
          >
            Todos
          </button>

          <button
            :class="{ selecionado: filtroSelecionado === 'delegacia' }"
            :aria-pressed="filtroSelecionado === 'delegacia'"
            @click="selecionarFiltro('delegacia')"
          >
            Delegacia
          </button>

          <button
            :class="{ selecionado: filtroSelecionado === 'hospital' }"
            :aria-pressed="filtroSelecionado === 'hospital'"
            @click="selecionarFiltro('hospital')"
          >
            Hospital
          </button>

          <button
            :class="{ selecionado: filtroSelecionado === 'abrigo' }"
            :aria-pressed="filtroSelecionado === 'abrigo'"
            @click="selecionarFiltro('abrigo')"
          >
            Casa de acolhimento
          </button>

          <button
            :class="{ selecionado: filtroSelecionado === 'apoio' }"
            :aria-pressed="filtroSelecionado === 'apoio'"
            @click="selecionarFiltro('apoio')"
          >
            Apoio psicológico
          </button>

          <button
          :class="{ selecionado: filtroSelecionado === 'juridica' }"
          :aria-pressed="filtroSelecionado === 'juridica'"
          @click="selecionarFiltro('juridica')"
          >
          Assistência Jurídica
        </button>
        
        </div>
      </div>
    </section>

    <section class="segmento2">
      <div
        v-for="local in locaisFiltrados"
        :key="local.id"
        class="card-local"
        :class="local.tipo"
        :style="{ '--cor': local.cor }"
      >
        <h2>{{ local.titulo }}</h2>

        <p>{{ local.descricao }}</p>

        <button @click="acaoLocal(local)">
          {{ local.botao }}
        </button>
      </div>

      <div v-if="locaisFiltrados.length === 0" class="nenhum">
        <h2>Nenhum local encontrado</h2>
        <p>Tente buscar por outro local ou categoria.</p>
      </div>
    </section>
  </div>
  <footer>
    <AppFooter/>
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
  color: ;
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