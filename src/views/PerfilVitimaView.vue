<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppButton from '@/components/ui/AppButton.vue'

const router = useRouter()

const vitima = ref(null)

/* Denúncias da vítima */
const denuncias = ref([
  {
    nome: 'Nome da denúncia',
    data: '00/00/0000'
  },
  {
    nome: 'Nome da denúncia',
    data: '00/00/0000'
  },
  {
    nome: 'Nome da denúncia',
    data: '00/00/0000'
  }
])

/* Contatos recentes */
const contatos = ref([
  { nome: 'Fulana' },
  { nome: 'Fulana' },
  { nome: 'Fulana' },
  { nome: 'Fulana' },
  { nome: 'Fulana' }
])

onMounted(() => {

  const logado = localStorage.getItem('usuarioLogado')
  const tipoUsuario = localStorage.getItem('tipoUsuario')

  if (
    logado !== 'true' ||
    tipoUsuario !== 'vitima'
  ) {
    router.push('/login')
    return
  }

  const dados = localStorage.getItem('vitima')

  if (dados) {
    vitima.value = JSON.parse(dados)
  } else {
    /* Dados temporários caso ainda não existam no localStorage */
    vitima.value = {
      nome: 'Fulana'
    }
  }
})

const editarPerfil = () => {
  router.push('/editar-perfil')
}

const mensagens = () => {
  router.push('/mensagens')
}

const abrirDenuncia = (denuncia) => {
  alert(`Abrindo: ${denuncia.nome}`)
}

const abrirContato = (contato) => {
  alert(`Abrindo conversa com ${contato.nome}`)
}

const sair = () => {

  localStorage.removeItem('usuarioLogado')
  localStorage.removeItem('tipoUsuario')

  router.push('/login')
}
</script>

<template>

  <header>
    <AppHeader />
  </header>

  <main class="perfil-page">

    <!-- TÍTULO -->
    <h1 class="perfil-titulo">
      Minha Conta
    </h1>


    <!-- =========================
         PERFIL
    ========================== -->

    <section class="perfil-card">

      <div class="perfil-info">

        <h2 class="perfil-nome">
          Bem vinda, {{ vitima?.nome || 'Fulana' }}!
        </h2>

        <p class="perfil-descricao">
          Aqui é um espaço seguro para você buscar ajuda,
          denunciar e ser ouvida!
        </p>

        <div class="perfil-botoes">

          <button
            class="perfil-botao"
            @click="editarPerfil"
          >
            Editar Perfil
          </button>

          <button
            class="perfil-botao"
            @click="mensagens"
          >
            Mensagens
          </button>

        </div>

      </div>

    </section>


    <!-- =========================
         DENÚNCIAS
    ========================== -->

    <h2 class="secao-titulo">
      Denúncias realizadas
    </h2>

    <section class="denuncias-card">

      <div
        v-for="(denuncia, index) in denuncias"
        :key="index"
        class="denuncia-item"
        @click="abrirDenuncia(denuncia)"
      >

        <strong>
          {{ denuncia.nome }}
        </strong>

        <span>
          Realizada em {{ denuncia.data }}
        </span>

      </div>

    </section>


    <!-- =========================
         CONTATOS
    ========================== -->

    <h2 class="secao-titulo contatos-titulo">
      Contatos recentes
    </h2>

    <section class="contatos-card">

      <div
        v-for="(contato, index) in contatos"
        :key="index"
        class="contato"
        @click="abrirContato(contato)"
      >

        <div class="contato-foto">
          <span>
            {{ contato.nome.charAt(0).toUpperCase() }}
          </span>
        </div>

        <p>
          {{ contato.nome }}
        </p>

      </div>

    </section>


    <!--SAIR-->

    <div class="sair-container">

      <AppButton @click="sair">
        Sair da conta
      </AppButton>

    </div>

  </main>

  <footer>
    <AppFooter />
  </footer>

</template>


<style scoped>

.perfil-page {
  width: 100%;
  min-height: 100vh;
  padding: 22px 0 55px;
  background: #ffffff;
  color: #5b0018;
  font-family: Georgia, "Times New Roman", serif;
  box-sizing: border-box;
}


/*TÍTULO*/

.perfil-titulo {
  margin: 0 0 28px;
  text-align: center;
  font-size: 3.5rem;
  font-weight: bold;
  color: #5b0018;
}


/*CARD DO PERFIL*/

.perfil-card {
  width: 66%;
  min-height: 163px;
  margin: 0 auto;
  padding: 25px 43px;
  display: flex;
  align-items: center;
  background: #fff0dc;
  border-radius: 22px;
  box-sizing: border-box;
  box-shadow: 0 5px 15px rgba(74, 0, 17, 0.2);
}


/*INFORMAÇÕES*/

.perfil-info {
  width: 100%;
}

.perfil-nome {
  margin: 0 0 2px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #5b0018;
}

.perfil-descricao {
  margin: 0 0 15px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #5b0018;
}

/* BOTÕES*/

.perfil-botoes {
  display: flex;
  gap: 19px;
}

.perfil-botao {
  width: 268px;
  height: 50px;
  border: none;
  border-radius: 20px;
  background: #65001b;
  color: #ffffff;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.perfil-botao:hover {
  background: #800023;
}


/*TÍTULOS DAS SEÇÕES*/

.secao-titulo {
  margin: 25px 0 20px;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #5b0018;
}


/*DENÚNCIAS*/

.denuncias-card {
  width: 66%;
  margin: 0 auto;
  padding: 38px 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: #fff0dc;
  border-radius: 22px;
  box-sizing: border-box;
  box-shadow: 0 5px 15px rgba(74, 0, 17, 0.2);
}

.denuncia-item {
  width: 100%;
  min-height: 49px;
  padding: 5px 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f7b0c8;
  border-radius: 25px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s;
}

.denuncia-item:hover {
  transform: scale(1.01);
  background: #f3a0bb;
}

.denuncia-item strong {
  font-size: 1.7rem;
  color: #5b0018;
}

.denuncia-item span {
  font-size: 1.2rem;
  color: #5b0018;
}


/*CONTATOS*/

.contatos-titulo {
  margin-top: 25px;
}

.contatos-card {
  width: 66%;
  min-height: 113px;

  margin: 0 auto;
  padding: 18px 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #fff0dc;
  border-radius: 22px;

  box-sizing: border-box;

  box-shadow: 0 5px 15px rgba(74, 0, 17, 0.2);
}


/*CONTATO*/

.contato {
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
}

.contato-foto {
  width: 65px;
  height: 65px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #d9d9d9;
}

.contato-foto span {
  font-size: 1.5rem;
  color: #ffffff;
}

.contato p {
  margin: 6px 0 0;

  font-size: 0.8rem;

  color: #5b0018;
}


/*SAIR*/

.sair-container {
  display: flex;
  justify-content: center;

  margin-top: 35px;
}


@media (max-width: 750px) {

  .perfil-card,
  .denuncias-card,
  .contatos-card {
    width: 90%;
  }

  .contatos-card {
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
  }

}

@media (max-width: 600px) {

  .perfil-titulo {
    font-size: 2.5rem;
  }

  .perfil-card {
    padding: 25px;
  }

  .perfil-nome {
    font-size: 2rem;
  }

  .perfil-botoes {
    flex-direction: column;
  }

  .perfil-botao {
    width: 100%;
  }

  .denuncia-item strong {
    font-size: 1.1rem;
  }

  .secao-titulo {
    font-size: 2rem;
  }

}

</style>