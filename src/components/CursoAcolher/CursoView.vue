<script setup>
import { ref, computed } from 'vue'
import AppHeader from '../layout/AppHeader.vue'
import AppFooter from '../layout/AppFooter.vue'


const tela = ref('inicio')
const aula = ref(0)          
const nome = ref('')
const respostas = ref([])

const aulas = [
  {
    titulo: 'Entendendo a violência',
    resumo: 'Aprenda a reconhecer os diferentes tipos de violência e como eles podem aparecer no dia a dia.',
    dica: 'A violência não acontece somente de forma física. Comportamentos psicológicos, morais, sexuais e patrimoniais também podem causar danos.',
    conteudo: [
      {
        titulo: 'O que é violência?',
        texto: 'Violência é qualquer ação ou comportamento que cause dano, sofrimento, medo, constrangimento ou prejuízo a outra pessoa.'
      },
      {
        titulo: 'Tipos de violência',
        texto: 'A violência pode ser física, psicológica, sexual, moral ou patrimonial. Uma situação pode envolver mais de um tipo.'
      }
    ],
    perguntas: [
      {
        pergunta: 'Uma pessoa constantemente humilha outra, ameaça deixá-la e tenta controlar suas amizades. De acordo com conteúdo apresentado anteriormente, esse comportamento pode ser considerado:',
        opcoes: ['Violência psicológica', 'Apenas uma discussão comum', 'Uma demonstração de carinho'],
        correta: 0,
        explicacao: 'Humilhações, ameaças e controle podem caracterizar violência psicológica.'
      },
      {
        pergunta: 'De acordo com o conteúdo apresentado, qual afirmação está correta?',
        opcoes: ['Somente agressões físicas são violência.', 'Existem diferentes formas de violência.', 'Violência acontece somente dentro de casa.'],
        correta: 1,
        explicacao: 'A violência pode ocorrer de diferentes formas e em diferentes contextos.'
      }
    ]
  },
  {
    titulo: 'Reconhecendo situações de risco',
    resumo: 'Aprenda a identificar comportamentos que podem indicar uma situação de risco ou abuso.',
    dica: 'A responsabilidade pela violência nunca é da vítima.',
    conteudo: [
      {
        titulo: 'Sinais de alerta',
        texto: 'Ameaças, perseguição, isolamento, controle excessivo e invasão de privacidade podem indicar uma situação de risco.'
      },
      {
        titulo: 'Controle também importa',
        texto: 'Controlar amizades, roupas, redes sociais, localização ou exigir senhas pode representar uma tentativa de controlar outra pessoa.'
      }
    ],
    perguntas: [
      {
        pergunta: 'Uma pessoa exige a senha das redes sociais da parceira e fica irritada quando ela conversa com amigos. Segundo o assunto, esse comportamento pode indicar:',
        opcoes: ['Controle excessivo', 'Comunicação saudável', 'Respeito à privacidade'],
        correta: 0,
        explicacao: 'Exigir senhas e controlar amizades são exemplos de comportamentos de controle.'
      },
      {
        pergunta: 'Qual das situações apresentadas representa um sinal de alerta?',
        opcoes: ['Respeitar os limites da outra pessoa.', 'Perseguir alguém após ela pedir para ser deixada em paz.', 'Conversar sobre problemas de maneira respeitosa.'],
        correta: 1,
        explicacao: 'A perseguição pode representar uma situação de risco.'
      }
    ]
  },
  {
    titulo: 'Meus direitos',
    resumo: 'Conheça informações básicas sobre direitos e mecanismos de proteção.',
    dica: 'Conhecer seus direitos permite buscar orientação e proteção com mais informação.',
    conteudo: [
      {
        titulo: 'Lei Maria da Penha',
        texto: 'A Lei Maria da Penha estabelece mecanismos para prevenir e combater a violência doméstica e familiar contra a mulher.'
      },
      {
        titulo: 'Medidas de proteção',
        texto: 'Existem mecanismos legais destinados à proteção de mulheres em situação de violência.'
      }
    ],
    perguntas: [
      {
        pergunta: 'Segundo o assunto, qual é um dos objetivos da Lei Maria da Penha?',
        opcoes: ['Prevenir e combater a violência doméstica e familiar contra a mulher.', 'Regular o uso das redes sociais.', 'Criar regras para relacionamentos.'],
        correta: 0,
        explicacao: 'A Lei Maria da Penha possui mecanismos para prevenir e combater a violência doméstica e familiar contra a mulher.'
      },
      {
        pergunta: 'Por que conhecer os próprios direitos pode ser importante em uma situação de violência?',
        opcoes: ['Porque permite conhecer possibilidades de proteção e apoio.', 'Porque elimina automaticamente todos os problemas.', 'Porque impede a busca por ajuda.'],
        correta: 0,
        explicacao: 'Conhecer os direitos ajuda a compreender possibilidades de proteção e orientação.'
      }
    ]
  },
  {
    titulo: 'Autodefesa e segurança',
    resumo: 'Aprenda princípios de prevenção e planejamento para situações de risco.',
    dica: 'Autodefesa também envolve prevenção, percepção de riscos e planejamento. Em situações perigosas, priorize sua segurança.',
    conteudo: [
      {
        titulo: 'Prevenção',
        texto: 'Reconhecer situações de risco e pensar previamente em formas seguras de buscar ajuda pode fazer parte de um plano de segurança.'
      },
      {
        titulo: 'Plano de segurança',
        texto: 'Um plano pode envolver pessoas de confiança, lugares seguros, contatos importantes e estratégias para buscar ajuda.'
      }
    ],
    perguntas: [
      {
        pergunta: 'Uma pessoa percebe que está em uma situação de risco. Qual atitude deve ser tomada!?',
        opcoes: ['Planejar formas seguras de buscar ajuda.', 'Se colocar deliberadamente em maior perigo.', 'Ignorar todos os sinais de risco.'],
        correta: 0,
        explicacao: 'Planejar formas seguras de buscar ajuda pode fazer parte de um plano de segurança.'
      },
      {
        pergunta: 'Qual elemento pode fazer parte de um plano de segurança?',
        opcoes: ['Pessoas de confiança e lugares seguros.', 'Isolamento completo.', 'Compartilhar senhas com qualquer pessoa.'],
        correta: 0,
        explicacao: 'Pessoas de confiança e lugares seguros podem fazer parte de um planejamento de segurança.'
      }
    ]
  },
  {
    titulo: 'Rede de apoio',
    resumo: 'Entenda como pessoas e serviços podem ajudar em situações de violência.',
    dica: 'Buscar ajuda não é sinal de fraqueza. Uma rede de apoio pode ajudar a encontrar caminhos de proteção.',
    conteudo: [
      {
        titulo: 'O que é uma rede de apoio?',
        texto: 'Pode ser formada por familiares, amigos, professores, profissionais e outras pessoas de confiança.'
      },
      {
        titulo: 'Buscar ajuda',
        texto: 'Conversar com alguém de confiança e procurar serviços especializados pode ser um caminho para obter orientação e apoio.'
      }
    ],
    perguntas: [
      {
        pergunta: 'De acordo com o assunto, quem pode fazer parte de uma rede de apoio?',
        opcoes: ['Somente familiares.', 'Pessoas de confiança, como amigos, familiares ou profissionais.', 'Somente pessoas que já passaram pela mesma situação.'],
        correta: 1,
        explicacao: 'Uma rede de apoio pode envolver diferentes pessoas de confiança.'
      },
      {
        pergunta: 'Qual atitude está de acordo com o conteúdo apresentado?',
        opcoes: ['Buscar uma pessoa de confiança quando precisar de apoio.', 'Se isolar completamente.', 'Ignorar uma situação que causa medo.'],
        correta: 0,
        explicacao: 'Buscar uma pessoa de confiança pode ser um primeiro passo para encontrar apoio.'
      }
    ]
  }
]

respostas.value = aulas.map(a => a.perguntas.map(() => null))


const progresso = computed(() => ((aula.value + 1) / aulas.length) * 100)

const podeContinuar = computed(() => {
  return respostas.value[aula.value].every(
    (resposta, index) => resposta === aulas[aula.value].perguntas[index].correta
  )
})

const totalPerguntas = computed(() =>
  aulas.reduce((total, a) => total + a.perguntas.length, 0)
)


function iniciar() {
  tela.value = 'curso'
  aula.value = 0
  window.scrollTo(0, 0)
}

function responder(pergunta, opcao) {
  respostas.value[aula.value][pergunta] = opcao
}

function proxima() {
  if (!podeContinuar.value) return

  if (aula.value < aulas.length - 1) {
    aula.value++
    window.scrollTo(0, 0)
  } else {
    tela.value = 'final'
    window.scrollTo(0, 0)
  }
}

function imprimir() {
  if (!nome.value.trim()) {
    alert('Digite seu nome primeiro!')
    return
  }
  window.print()
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
          <button @click="iniciar">Começar curso</button>
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
            <strong>{{ totalPerguntas }}</strong>
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
            :key="index"
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

      <section class="final-inicio">
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
          <div
            v-for="(parte, index) in aulas[aula].conteudo"
            :key="index"
            class="parte"
          >
            <h2>{{ parte.titulo }}</h2>
            <p>{{ parte.texto }}</p>
          </div>


          <div class="importante">
            <h3>Importante</h3>
            <p>{{ aulas[aula].dica }}</p>
          </div>


          <div class="atividade">
            <h2>Questionário</h2>
            <p class="instrucao">
              Responda às perguntas com base no conteúdo
              apresentado anteriormente.
            </p>

            <div
              v-for="(pergunta, index) in aulas[aula].perguntas"
              :key="index"
              class="pergunta"
            >
              <h3>{{ index + 1 }}. {{ pergunta.pergunta }}</h3>

              <button
                v-for="(opcao, i) in pergunta.opcoes"
                :key="i"
                class="opcao"
                :class="{
                  correta: respostas[aula][index] === i && i === pergunta.correta,
                  incorreta: respostas[aula][index] === i && i !== pergunta.correta
                }"
                @click="responder(index, i)"
              >
                {{ opcao }}
              </button>

              <p v-if="respostas[aula][index] !== null" class="resultado">
                {{
                  respostas[aula][index] === pergunta.correta
                    ? '✓ ' + pergunta.explicacao
                    : '✕ Tente novamente!'
                }}
              </p>
            </div>
          </div>

  
          <button
            class="proxima"
            :disabled="!podeContinuar"
            @click="proxima"
          >
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

/* INÍCIO */
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

/* SOBRE */
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

/* AULAS */
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

/* FINAL DA PÁGINA */
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

/* CURSO */
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

/* CONTEÚDO */
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

/* QUESTIONÁRIO */
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

/* CONCLUSÃO */
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
</style>  