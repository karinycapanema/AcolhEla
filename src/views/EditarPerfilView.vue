<script setup>
import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const nome = ref('')
const email = ref('')
const telefone = ref('')
const senha = ref('')
const confirmarSenha = ref('')

const ajudas = ref([])

const tiposDeAjuda = [
  'Apoio Emocional',
  'Orientação e Informação',
  'Abrigo Temporário',
  'Transporte',
  'Orientação Jurídica',
  'Outros'
]



const tipoUsuario = ref('')

onMounted(() => {
  tipoUsuario.value = localStorage.getItem('tipoUsuario')

  let dados = null

  if (tipoUsuario.value === 'vitima') {
    dados = localStorage.getItem('vitima')
  }

  if (tipoUsuario.value === 'voluntaria') {
    dados = localStorage.getItem('voluntaria')
  }

  if (!dados) {
    router.push('/login')
    return
  }

  const usuario = JSON.parse(dados)

  nome.value = usuario.nome || ''
  email.value = usuario.email || ''
  telefone.value = usuario.telefone || ''
  senha.value = usuario.senha || ''
  confirmarSenha.value = usuario.senha || ''

  ajudas.value = usuario.ajudas || []
})

const salvarPerfil = () => {
  if (!nome.value || !email.value || !telefone.value) {
    alert('Preencha todos os campos!')
    return
  }

  if (senha.value !== confirmarSenha.value) {
    alert('As senhas não são iguais!')
    return
  }

  const dadosAtualizados = {
  nome: nome.value,
  email: email.value,
  telefone: telefone.value,
  senha: senha.value,
  ajudas: ajudas.value
}
  if (tipoUsuario.value === 'vitima') {
    localStorage.setItem(
      'vitima',
      JSON.stringify(dadosAtualizados)
    )

    localStorage.setItem(
      'usuario',
      JSON.stringify(dadosAtualizados)
    )
  }

  if (tipoUsuario.value === 'voluntaria') {
    const dadosAntigos = JSON.parse(
      localStorage.getItem('voluntaria')
    ) || {}

    const voluntariaAtualizada = {
      ...dadosAntigos,
      ...dadosAtualizados
    }

    localStorage.setItem(
      'voluntaria',
      JSON.stringify(voluntariaAtualizada)
    )

    localStorage.setItem(
      'usuario',
      JSON.stringify(voluntariaAtualizada)
    )
  }

  alert('Perfil atualizado com sucesso!')

  if (tipoUsuario.value === 'vitima') {
    router.push('/perfil-vitima')
  } else {
    router.push('/perfil-voluntaria')
  }
}

const cancelar = () => {
  if (tipoUsuario.value === 'vitima') {
    router.push('/perfil-vitima')
  } else {
    router.push('/perfil-voluntaria')
  }
}
</script>

<template>

    <header>
        <AppHeader/>
    </header>
  <main class="editar-page">

    <div class="editar-card">

      <h1>Editar Perfil</h1>

      <div class="campo">
        <label>Nome</label>
        <input
          v-model="nome"
          type="text"
          placeholder="Digite seu nome"
        >
      </div>

      <div class="campo">
        <label>E-mail</label>
        <input
          v-model="email"
          type="email"
          placeholder="Digite seu e-mail"
        >
      </div>

      <div class="campo">
        <label>Telefone</label>
        <input
          v-model="telefone"
          type="text"
          placeholder="Digite seu telefone"
        >
      </div>

      <div v-if="tipoUsuario === 'voluntaria'" class="campo">
        <label>Tipos de ajuda que você pode oferecer:</label>

  <div class="opcoes-ajuda">
    <label v-for="tipo in tiposDeAjuda" :key="tipo" class="opcao-ajuda">

      <input type="checkbox" :value="tipo" v-model="ajudas">
        <span>{{ tipo }}</span>
    </label>
  </div>
</div>

      <div class="campo">
        <label>Senha</label>
        <input
          v-model="senha"
          type="password"
          placeholder="Digite sua senha"
        >
      </div>

      <div class="campo">
        <label>Confirmar senha</label>
        <input
          v-model="confirmarSenha"
          type="password"
          placeholder="Confirme sua senha"
        >
      </div>

      <div class="botoes">
        <button
          class="botao cancelar"
          @click="cancelar"
        >
          Cancelar
        </button>

        <button
          class="botao salvar"
          @click="salvarPerfil"
        >
          Salvar alterações
        </button>
      </div>

    </div>
  </main>
  <footer>
    <AppFooter/>
  </footer>
</template>

<style scoped>
.editar-page {
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  box-sizing: border-box;
}

.editar-card {
  width: 66%;
  max-width: 100%;
  background: #fff0dc;
  padding: 35px;
  border-radius: 20px;
  box-sizing: border-box;
}

.editar-card h1 {
  text-align: center;
  color: #5b0018;
  margin-bottom: 30px;
  font-size: 2.5rem;
}

.opcoes-ajuda span{
    margin-bottom: 800px;
}

.campo {
  margin-bottom: 18px;
}

.campo label {
  display: block;
  color: #5b0018;
  font-weight: bold;
  font-size: 1.2rem;
}

.campo input {
  width: 100%;
  height: 45px;
  padding: 0 12px;
  border: 1px solid #f7a9c2;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
}

.botoes {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 25px;
}

.botao {
  flex: 1;
  height: 45px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.cancelar {
  background: #ffffff;
  color: #5b0018;
}

.salvar {
  background: #65071d;
  color: #ffffff;
}

.salvar:hover {
  background: #4d0516;
}
.opcoes-ajuda {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
}

.opcao-ajuda {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #5b0018;
  cursor: pointer;
  background: #f7afc6;
  border-radius: 10px;
  height: 35px;
  padding: 0 10px;
}


.opcao-ajuda input {
  width: 18px;
  height: 18px;
  accent-color: #65071d;
  cursor: pointer;
  margin: 8px ;
}
</style>