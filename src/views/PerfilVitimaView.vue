<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppButton from '@/components/ui/AppButton.vue'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const iconeExcluir = faTrash

const router = useRouter()
const vitima = ref(null)
const denuncias = ref([])

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

      const denunciasSalvas = JSON.parse(
        localStorage.getItem('denuncias')
      ) || []

   if (vitima.value) {

        denuncias.value = denunciasSalvas.filter(
          denuncia =>
            denuncia.emailVitima === vitima.value.email
        )
      }
  } 
})

const editarPerfil = () => {
  router.push('/editar-perfil')
}

const mensagens = () => {
  router.push('/mensagens')
}

const irParaDenuncia = () => {
  router.push('/denuncia')
}

const abrirDenuncia = (denuncia) => {
  alert(`Abrindo: ${denuncia.nome}`)
}

const abrirContato = (contato) => {
  alert(`Abrindo conversa com ${contato.nome}`)
}

const apagarDenuncia = (id) => {
  const confirmar = confirm(
    'Tem certeza que deseja apagar esta denúncia?'
  )

  if (!confirmar) {
    return
  }

  const denunciasSalvas = localStorage.getItem('denuncias')

  if (!denunciasSalvas) {
    return
  }

  const todasDenuncias = JSON.parse(denunciasSalvas)

  const novasDenuncias = todasDenuncias.filter(
    denuncia => denuncia.id !== id
  )

  localStorage.setItem(
    'denuncias',
    JSON.stringify(novasDenuncias)
  )

  denuncias.value = novasDenuncias.filter(
    denuncia => denuncia.emailVitima === vitima.value.email
  )
}

const sair = () => {

  localStorage.removeItem('usuarioLogado')
  localStorage.removeItem('tipoUsuario')

  router.push('/login')
}

const apagarConta = () => {
  const confirmar = confirm(
    'Tem certeza que deseja apagar sua conta? Todas as suas denúncias também serão apagadas. Essa ação não poderá ser desfeita.'
  )

  if (!confirmar) {
    return
  }
  const vitimaSalva = localStorage.getItem('vitima')

  if (vitimaSalva) {
    const vitima = JSON.parse(vitimaSalva)
    const denunciasSalvas = localStorage.getItem('denuncias')

    if (denunciasSalvas) {
      const denuncias = JSON.parse(denunciasSalvas)

      const novasDenuncias = denuncias.filter(
        denuncia => denuncia.emailVitima !== vitima.email
      )

      localStorage.setItem(
        'denuncias',
        JSON.stringify(novasDenuncias)
      )
    }
  }
  localStorage.removeItem('usuario')
  localStorage.removeItem('vitima')
  localStorage.removeItem('usuarioLogado')
  localStorage.removeItem('tipoUsuario')

  alert('Sua conta e suas denúncias foram apagadas com sucesso!')

  router.push('/')
}
</script>

<template>

  <header>
    <AppHeader />
  </header>

  <main class="perfil-page">

    <!-- titulo -->
    <h1 class="perfil-titulo">
      Minha Conta
    </h1>


    <!-- perfil -->

    <section class="perfil-card">

      <div class="perfil-info">

        <h2 class="perfil-nome">
          Bem vinda, {{ vitima?.nome || 'Fulana' }}!
        </h2>

        <p class="perfil-descricao">
          Aqui é um espaço seguro para você buscar ajuda, denunciar e ser ouvida!
        </p>

        <div class="perfil-botoes">

          <button class="perfil-botao" @click="editarPerfil">
            Editar Perfil
          </button>

          <button class="perfil-botao" @click="mensagens">
            Mensagens
          </button>

        </div>

      </div>

    </section>


    <!-- denuncias -->

    <h2 class="secao-titulo">
      Denúncias realizadas
    </h2>

    <section class="denuncias-card">

  <!-- nao existirem -->

  <div
    v-if="denuncias.length === 0"
    class="nenhuma-denuncia"
  >

    <h3>
      Nenhuma denúncia realizada
    </h3>

    <p>
      Você ainda não realizou nenhuma denúncia.
    </p>

    <button class="botao-primeira-denuncia" @click="irParaDenuncia">
      Realizar minha primeira denúncia
    </button>

  </div>

  <!-- exixtirem -->

  <div
    v-else
    v-for="(denuncia, index) in denuncias ":key="denuncia.id || index" class="denuncia-item" @click="abrirDenuncia(denuncia)">


    <div class="menor">
    <strong>
      Denúncia {{ index + 1 }}
    </strong>

    <span>
      Realizada em: {{ denuncia.data }}
    </span>

    <small>
     Tipo de situação: {{ denuncia.situacoes.join(', ') }}
    </small>
    </div>

    <div class="apagar">
      <button class="botao-excluir-denuncia" @click="apagarDenuncia(denuncia.id)" title="Apagar denúncia">
      <font-awesome-icon :icon="iconeExcluir" />
    </button>

    </div>

  </div>

  </section>
    <!-- contato -->

    <h2 class="secao-titulo contatos-titulo">
      Contatos recentes
    </h2>

    <section class="contatos-card">

      <div
        v-for="(contato, index) in contatos" :key="index" class="contato" @click="abrirContato(contato)">

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

    <div class="sair-apagar">

      <AppButton @click="sair">
        Sair da conta
      </AppButton>

       <AppButton @click="apagarConta">
        Apagar conta
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

.perfil-titulo {
  margin: 0 0 28px;
  text-align: center;
  font-size: 3.5rem;
  font-weight: bold;
  color: #5b0018;
}
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


/*informações*/

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

/*botões*/

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


.secao-titulo {
  margin: 25px 0 20px;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #5b0018;
}


/*denuncia*/

.denuncias-card {
  width: 66%;
  margin: 0 auto;
  padding: 38px 25px;
  display: flex;
  flex-direction: column-reverse;
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
  justify-content: space-between;
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
  font-size: 1.8rem;
  color: #5b0018;
}

.denuncia-item span {
  font-size: 1.4rem;
  color: #5b0018;
}

.denuncia-item small {
  margin: 4px 0;
  color: #65071d;
  font-size: 1.4rem;
}

.botao-excluir-denuncia {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 8px;
  background-color: #f7b0c8;
  color: #63071d;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;
}
.apagar{
  display: flex;
  align-items: center;
}

.botao-excluir-denuncia:hover {
  background-color: #63071d;
  color: white;
}

.botao-excluir-denuncia svg {
  width: 18px;
  height: 18px;
}

.menor{
  display: flex;
  flex-direction: column;
}

.nenhuma-denuncia {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  text-align: center;
  background: #f7b0c8;
  border-radius: 25px;
}

.nenhuma-denuncia h3 {
  margin: 0 0 8px;
  color: #65071d;
  font-size: 1.6rem;
}

.nenhuma-denuncia p {
  margin: 0 0 20px;
  color: #65071d;
  font-size: 1.1rem;
}

.botao-primeira-denuncia {
  padding: 12px 25px;
  border: none;
  border-radius: 20px;
  background-color: #65001b;
  color: white;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.botao-primeira-denuncia:hover {
  background-color: #800023;
}

/*contato*/

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


/*sair*/

.sair-apagar{
  display: flex;
  justify-content: space-evenly;
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