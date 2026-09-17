<script setup>
import { ref, onMounted } from 'vue'
import { faCloudArrowUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppButton from '@/components/ui/AppButton.vue'

const router = useRouter()

const voluntaria = ref(null)

const iconeUpload = faCloudArrowUp
const iconeExcluir = faTrash

const certificados = ref([null, null, null])

function selecionarCertificado(event, index) {
  const arquivo = event.target.files[0]

  if (!arquivo) {
    return
  }

  if (!arquivo.type.startsWith('image/')) {
    alert('Selecione uma imagem do certificado.')
    event.target.value = ''
    return
  }

  const urlImagem = URL.createObjectURL(arquivo)

  certificados.value[index] = {
    arquivo: arquivo,
    nome: arquivo.name,
    imagem: urlImagem
  }
}

function removerCertificado(index) {
  if (certificados.value[index]?.imagem) {
    URL.revokeObjectURL(certificados.value[index].imagem)
  }

  certificados.value[index] = null
}

onMounted(() => {

  const logado = localStorage.getItem('usuarioLogado')
  const tipoUsuario = localStorage.getItem('tipoUsuario')

  if (
    logado !== 'true' ||
    tipoUsuario !== 'voluntaria'
  ) {
    router.push('/login')
    return
  }

  const dados = localStorage.getItem('voluntaria')

  if (dados) {
    voluntaria.value = JSON.parse(dados)
  }
})

const editarPerfil = () => {
  alert('Área de edição do perfil.')
}

const mensagens = () => {
  alert('Área de mensagens.')
}

const sair = () => {

  localStorage.removeItem('usuarioLogado')
  localStorage.removeItem('tipoUsuario')

  router.push('/login')
}

const apagarConta = () => {
  const confirmar = confirm(
    'Tem certeza que deseja apagar sua conta? Essa ação não poderá ser desfeita.'
  )

  if (!confirmar) {
    return
  }

  localStorage.removeItem('usuario')
  localStorage.removeItem('voluntaria')
  localStorage.removeItem('usuarioLogado')
  localStorage.removeItem('tipoUsuario')

  alert('Sua conta foi apagada com sucesso!')

  router.push('/')
}
</script>

<template>

    <header>
        <AppHeader/>
    </header>

  <main class="conta-page">

    <h1 class="conta-titulo">Minha Conta</h1>

    <section v-if="voluntaria" class="conta-perfil">

      <div class="conta-foto">
        <span>
          {{ voluntaria.nome.charAt(0).toUpperCase() }}
        </span>
      </div>

      <div class="conta-info">

        <h2 class="conta-nome">
          {{ voluntaria.nome }}
        </h2>

        <div class="conta-tags">

            <span v-for="ajuda in voluntaria.ajudas" :key="ajuda" class="conta-tag">
                {{ ajuda }}
            </span>

        </div>

        <div class="conta-botoes">

          <button class="conta-botao" @click="editarPerfil">
            Editar Perfil
          </button>

          <button class="conta-botao" @click="mensagens">
            Mensagens
          </button>

        </div>
      </div>

    </section>

    <h2 class="conta-cursos-titulo">
      Cursos e Capacitações realizados
    </h2>

    <section class="conta-cursos">

  <div v-for="(certificado, index) in certificados" :key="index" class="conta-curso">

    <label v-if="!certificado" class="certificado-upload">

      <font-awesome-icon :icon="iconeUpload" class="certificado-icone"/>

      <span>Anexar certificado</span>

      <input type="file" accept="image/*" @change="selecionarCertificado($event, index)">

    </label>


    <div v-else class="certificado-preview">

      <img :src="certificado.imagem" :alt="certificado.nome">

      <button type="button" class="certificado-remover" @click="removerCertificado(index)" title="Remover certificado">
        <font-awesome-icon :icon="iconeExcluir" />
      </button>

    </div>

  </div>

</section>

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
    <AppFooter/>
  </footer>

</template>

<style scoped>

.conta-page {
  width: 100%;
  padding: 22px 0 55px;
  background: #ffffff;
  color: #5b0018;
  font-family: Georgia, "Times New Roman", serif;
}

/*titulo*/

.conta-titulo {
  margin: 0 0 28px;
  text-align: center;
  font-size: 3.5rem;
  font-weight: bold;
  color: #5b0018;
}

/*perfil*/

.conta-perfil {
  width: 66%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  background: #fff0dc;
  border-radius: 22px;
  box-sizing: border-box;
}

/*foto*/

.conta-foto {
  width: 245px;
  height: 245px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #65071d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}

.conta-foto span {
  font-size: 5.5rem;
  font-weight: normal;
  color: #ffffff;
}

/*informações*/

.conta-info {
  width: 80%;
  margin-left: 23px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.conta-nome {
  margin: 15px 0 30px 20px;
  font-size: 2.5rem;
  line-height: 1;
  font-weight: bold;
  color: #5b0018;
}

/*tags*/

.conta-tags {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 8px 27px;
  margin-bottom: 10px;
}
.conta-tag {
  width: 350px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: #f7a9c2;
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: bold;
  box-sizing: border-box;
}

/*botões*/

.conta-botoes {
    margin: 20px;
  display: flex;
  justify-content: space-evenly;
}

.conta-botao {
  width: 274px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background: #65001b;
  color: #ffffff;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
}

.conta-botao:hover {
  background: #800023;
}

/*cursos*/

.conta-cursos-titulo {
  margin: 25px 0 20px;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #5b0018;
}

.conta-cursos {
  width: 66%;
  margin: 0 auto;
  padding: 25px 43px;
  display: flex;justify-content: space-between;
  background: #fff0dc;
  border-radius: 22px;
  box-sizing: border-box;
}

.conta-curso {
  width: 300px;
  height: 150px;
  flex-shrink: 0;
  border-radius: 22px;
  overflow: hidden;
}

.certificado-upload {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #f7a9c2;
  color: #65071d;
  font-size: 16px;
  font-weight: bold;
  border-radius: 22px;
  cursor: pointer;
  transition: 0.2s;
}

.certificado-upload:hover {
  background-color: #f3a0bb;
}

.certificado-upload input {
  display: none;
}

.certificado-icone {
  width: 45px;
  height: 45px;
}

.certificado-preview {
  width: 100%;
  height: 100%;
  position: relative;
  background: #ffffff;
}

.certificado-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


/*remover*/

.certificado-remover {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background-color: #65071d;
  color: white;
  cursor: pointer;
  font-size: 15px;
}

.certificado-remover:hover {
  background-color: #800023;
}

/*sair e apagar*/

.sair-apagar{
  display: flex;
  justify-content: space-evenly;
  margin-top: 35px;
}


.conta-perfil, .conta-cursos{
  box-shadow: 0 5px 15px rgba(74, 0, 17, 0.2);
}

@media (max-width: 750px) {

  .conta-perfil,
  .conta-cursos {
    width: 90%;
  }

  .conta-perfil {
    height: auto;
    min-height: 181px;
  }

  .conta-cursos {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }

}

@media (max-width: 600px) {

  .conta-perfil {
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }

  .conta-info {
    width: 100%;
    margin-left: 0;
    align-items: center;
  }

  .conta-tags,
  .conta-botoes {
    flex-direction: column;
    gap: 8px;
  }

  .conta-nome {
    font-size: 30px;
    text-align: center;
  }

}

</style>