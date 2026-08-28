<script setup>
import AppHeader from '../layout/AppHeader.vue'
import AppFooter from '../layout/AppFooter.vue'
const cursos = [
  {
    titulo: 'Reconhecendo a violência',
    descricao: 'Aprenda a identificar sinais de violência e situações de risco.'
  },
  {
    titulo: 'Conheça seus direitos',
    descricao: 'Entenda seus direitos e os caminhos para buscar ajuda.'
  },
  {
    titulo: 'Fortaleça sua autonomia',
    descricao: 'Descubra caminhos para fortalecer sua independência.'
  },
  {
    titulo: 'Plano de segurança',
    descricao: 'Aprenda a criar estratégias para se proteger.'
  }
]

const motivos = [
  {
    icone: '♡',
    titulo: 'Reconheça os sinais',
    texto: 'Aprenda a identificar comportamentos abusivos, sinais de controle, ameaças e situações que podem representar riscos.'
  },
  {
    icone: '⚖',
    titulo: 'Conheça seus direitos',
    texto: 'Conheça as leis que protegem as mulheres e saiba quais medidas podem ser buscadas em uma situação de violência.'
  },
  {
    icone: '♧',
    titulo: 'Fortaleça sua autonomia',
    texto: 'Descubra caminhos para recuperar sua independência e construir novos projetos para sua vida.'
  }
]

const etapas = [
  {
    numero: '1',
    icone: '/img/cell-phone.png',
    titulo: 'Assista',
    texto: 'Aulas curtas pelo celular'
  },
  {
    numero: '2',
    icone: '/img/book.png',
    titulo: 'Aprenda',
    texto: 'Conteúdos simples'
  },
  {
    numero: '3',
    icone: '/img/trophy.png',
    titulo: 'Conclua',
    texto: 'Receba seu certificado'
  }
]

const modulos = [
  {
    titulo: 'Entendendo a violência',
    itens: [
      'O que caracteriza violência doméstica',
      'Tipos de violência',
      'Sinais de um relacionamento abusivo'
    ]
  },
  {
    titulo: 'Reconhecendo situações de risco',
    itens: [
      'Sinais de alerta',
      'Ameaças e perseguição',
      'Quando procurar ajuda'
    ]
  },
  {
    titulo: 'Conhecendo seus direitos',
    itens: [
      'Lei Maria da Penha',
      'Medidas protetivas',
      'Rede de proteção'
    ]
  },
  {
    titulo: 'Criando um plano de segurança',
    itens: [
      'Pessoas de confiança',
      'Documentos importantes',
      'Locais seguros'
    ]
  },
  {
    titulo: 'Segurança digital',
    itens: [
      'Proteção de contas',
      'Senhas e privacidade',
      'Cuidados com localização'
    ]
  },
  {
    titulo: 'Construindo novos caminhos',
    itens: [
      'Rede de apoio',
      'Independência financeira',
      'Acesso a oportunidades'
    ]
  }
]
</script>

<template>
  <header>
    <AppHeader/>
  </header>
  <main class="pagina-cursos">
    <section class="intro">
      <div class="intro-conteudo">
        <h1>Cursos do AcolheEla</h1>

        <p class="descricao">
          Reconhecendo a violência e construindo um plano de segurança.
          Aprenda a identificar sinais de violência, conhecer seus direitos
          e descobrir formas de fortalecer sua segurança.
        </p>

        <div class="informacoes">
          <span>
            <img src="/img/clock.png" alt="Relógio">
            2 horas
          </span>

          <span>
            <img src="/img/open-book.png" alt="Livro">
            6 aulas
          </span>

          <span>
            <img src="/img/money.png" alt="Dinheiro">
            Gratuito
          </span>
        </div>

        <div class="aprendizado">
          <h3>O que você irá aprender com o nosso curso:</h3>

          <ul>
            <li>Novas habilidades</li>
            <li>Seus direitos</li>
            <li>Fortaleça sua autonomia!</li>
          </ul>
        </div>
      </div>

      <h2 class="titulo-destaque">Cursos em destaque</h2>

      <div class="cursos-grid">
        <article
          v-for="curso in cursos"
          :key="curso.titulo"
          class="curso-card"
        >
          <div class="curso-conteudo">
            <h3>{{ curso.titulo }}</h3>
            <p>{{ curso.descricao }}</p>
          </div>

          <button
            class="botao-curso"
            :aria-label="`Começar o curso: ${curso.titulo}`"
          >
            começar!
          </button>
        </article>
      </div>
    </section>

    <section class="motivos">
      <h2>Motivos para realizar o curso!</h2>

      <div class="motivos-grid">
        <article
          v-for="motivo in motivos"
          :key="motivo.titulo"
          class="motivo-card"
        >
          <div class="motivo-icone">{{ motivo.icone }}</div>
          <h3>{{ motivo.titulo }}</h3>
          <p>{{ motivo.texto }}</p>
        </article>
      </div>

      <div class="como-funciona">
        <h2>Como funciona?</h2>

        <p class="subtitulo">
          Aprenda do seu ritmo, de onde estiver!
        </p>

        <div class="etapas">
          <div
            v-for="etapa in etapas"
            :key="etapa.numero"
            class="etapa"
          >
            <div class="numero">
              {{ etapa.numero }}
            </div>

            <div class="etapa-icone">
              <img
                :src="etapa.icone"
                :alt="etapa.titulo"
              >
            </div>

            <h3>{{ etapa.titulo }}</h3>

            <p>{{ etapa.texto }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="conteudo">
      <div class="conteudo-box">
        <h2>O que você vai aprender?</h2>

        <div class="modulos">
          <article
            v-for="modulo in modulos"
            :key="modulo.titulo"
            class="modulo"
          >
            <strong>{{ modulo.titulo }}</strong>

            <ul>
              <li
                v-for="item in modulo.itens"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </div>

      <div class="comecar">
        <h2>Pronto para começar?</h2>

        <p>
          Conheça o caminho para transformar medo em
          força e informação em proteção.
        </p>

        <button class="botao-final">
          COMEÇAR
        </button>
      </div>
    </section>
  </main>
  <footer>
    <AppFooter/>
  </footer>
</template>

<style scoped>
:global(html) {
  width: 100%;
  margin: 0;
  padding: 0;
}

:global(body) {
  width: 100%;
  min-width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

:global(#app) {
  width: 100%;
  max-width: none;
  min-width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.pagina-cursos {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: #ffffff;
  color: #222222;
  font-family: Georgia, "Times New Roman", serif;
}

.pagina-cursos * {
  box-sizing: border-box;
}

.intro {
  width: 100%;
  max-width: 1230px;
  margin: 0 auto;
  padding: 65px 40px 80px;
}

.intro-conteudo {
  width: 100%;
}

.intro h1 {
  margin: 0 0 12px;
  font-size: 38px;
  line-height: 1.2;
  font-weight: 700;
}

.descricao {
  width: 100%;
  max-width: 780px;
  margin: 0 0 30px;
  font-size: 16px;
  line-height: 1.6;
}

.informacoes {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 780px;
  max-width: 100%;
  gap: 120px;
  margin: 30px 0 42px;
  font-size: 16px;
}

.informacoes span {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.informacoes img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.aprendizado {
  margin-top: 25px;
}

.aprendizado h3 {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 500;
}

.aprendizado ul {
  margin: 0;
  padding-left: 28px;
  font-size: 15px;
  line-height: 1.9;
}

.titulo-destaque {
  margin: 42px 0 24px;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
}

.cursos-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
  width: 100%;
}

.curso-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 215px;
  padding: 22px;
  border-radius: 18px;
  background: #ffe8c3;
}

.curso-conteudo h3 {
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 600;
}

.curso-conteudo p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #5a4632;
}

.botao-curso {
  align-self: flex-start;
  margin-top: 18px;
  padding: 7px 24px;
  border: none;
  border-radius: 22px;
  background: #f5a6c7;
  color: #222222;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 12px;
  cursor: pointer;
  transition: 0.2s ease;
}

.botao-curso:hover {
  transform: scale(1.05);
}

.motivos {
  width: 100%;
  max-width: 1230px;
  margin: 0 auto;
  padding: 80px 40px;
}

.motivos > h2 {
  margin: 0 0 36px;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
}

.motivos-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
  width: 100%;
}

.motivo-card {
  min-height: 198px;
  padding: 22px 24px;
  border-radius: 11px;
  background: #ffedcf;
  text-align: center;
}

.motivo-icone {
  margin-bottom: 12px;
  font-size: 30px;
}

.motivo-card h3 {
  margin: 0 0 18px;
  font-size: 14px;
}

.motivo-card p {
  margin: 0;
  color: #a05252;
  font-size: 12px;
  line-height: 1.6;
}

.como-funciona {
  margin-top: 80px;
  text-align: center;
}

.como-funciona h2 {
  margin: 0 0 18px;
  font-size: 24px;
}

.subtitulo {
  margin: 0 0 42px;
  font-size: 15px;
}

.etapas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
}

.etapa {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.numero {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  height: 29px;
  margin-bottom: 36px;
  border: 1px solid #222222;
  border-radius: 50%;
  font-size: 14px;
}

.etapa-icone {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin-bottom: 15px;
}

.etapa-icone img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.etapa h3 {
  margin: 0 0 10px;
  font-size: 15px;
}

.etapa p {
  max-width: 130px;
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
}

.conteudo {
  width: 100%;
  max-width: 1230px;
  margin: 0 auto;
  padding: 80px 40px 95px;
}

.conteudo-box {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 18px;
  border-radius: 14px;
  background: #ffedcf;
}

.conteudo-box h2 {
  margin: 0 0 15px 12px;
  font-size: 18px;
}

.modulos {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.modulo {
  padding: 11px 16px;
  border-radius: 9px;
  background: #f7a9c8;
}

.modulo strong {
  display: block;
  margin-bottom: 3px;
  font-size: 11px;
  font-weight: 500;
}

.modulo ul {
  margin: 0;
  padding-left: 18px;
}

.modulo li {
  font-size: 10px;
  line-height: 1.5;
}

.comecar {
  width: 100%;
  max-width: 600px;
  margin: 35px auto 0;
  padding: 24px 36px;
  border-radius: 11px;
  background: #5b0015;
  color: white;
  text-align: center;
}

.comecar h2 {
  margin: 0 0 7px;
  font-size: 19px;
}

.comecar p {
  max-width: 350px;
  margin: 0 auto 18px;
  font-size: 12px;
  line-height: 1.6;
}

.botao-final {
  padding: 10px 42px;
  border: none;
  border-radius: 22px;
  background: #ffedcf;
  color: #222222;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s ease;
}

.botao-final:hover {
  transform: scale(1.05);
}

@media (max-width: 1300px) {
  .intro,
  .motivos,
  .conteudo {
    padding-left: 35px;
    padding-right: 35px;
  }
}

@media (max-width: 800px) {
  .intro,
  .motivos,
  .conteudo {
    padding-left: 25px;
    padding-right: 25px;
  }

  .intro h1 {
    font-size: 32px;
  }

  .descricao {
    font-size: 14px;
  }

  .informacoes {
    width: 100%;
    gap: 30px;
    flex-wrap: wrap;
  }

  .cursos-grid {
    grid-template-columns: 1fr;
  }

  .motivos-grid {
    grid-template-columns: 1fr;
  }

  .etapas {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .motivo-card {
    min-height: auto;
  }
}

@media (max-width: 500px) {
  .intro,
  .motivos,
  .conteudo {
    padding-left: 18px;
    padding-right: 18px;
  }

  .intro h1 {
    font-size: 28px;
  }

  .descricao {
    font-size: 13px;
  }

  .informacoes {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }

  .curso-card {
    height: auto;
  }
}
</style>