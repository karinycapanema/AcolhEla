<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import AppButton from '@/components/ui/AppButton.vue'

const router = useRouter()

const email = ref('')
const senha = ref('')
const erro = ref('')

const fazerLogin = () => {
  erro.value = ''

  if (!email.value || !senha.value) {
    erro.value = 'Preencha todos os campos.'
    return
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailValido.test(email.value)) {
    erro.value = 'Digite um e-mail válido.'
    return
  }

  const usuarioSalvo = localStorage.getItem('usuario')

  if (!usuarioSalvo) {
    erro.value = 'Nenhuma conta cadastrada. Crie uma conta primeiro.'
    return
  }

  const usuario = JSON.parse(usuarioSalvo)

  if (
    email.value !== usuario.email ||
    senha.value !== usuario.senha
  ) {
    erro.value = 'E-mail ou senha incorretos.'
    return
  }

  localStorage.setItem('usuarioLogado', 'true')

  alert(`Bem-vinda, ${usuario.nome}!`)

  router.push('/')
}
</script>
<template>
  <div class="login-container">
    <div class="login-box">

      <h1>Fazer login</h1>

      <p>Entre na sua conta para continuar.</p>

      <form @submit.prevent="fazerLogin">

        <div class="campo">
          <label for="email">E-mail</label>

          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div class="campo">
          <label for="senha">Senha</label>

          <input
            id="senha"
            v-model="senha"
            type="password"
            placeholder="Digite sua senha"
          />
        </div>

        <p v-if="erro" class="erro">
          {{ erro }}
        </p>

        <div class="area-button">
        <AppButton type="submit">
            Fazer login
        </AppButton>
        </div>

      </form>

      <p class="cadastro">Ainda não tem uma conta?
        <RouterLink to="/cadastro">
          Criar conta
        </RouterLink>
      </p>

    </div>
  </div>
</template>
<style scoped>

.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.login-box {
  width: 850px;
  height: 500px;
  max-width: 100%;
  padding: 55px 45px;
  text-align: center;
  background-color: #fff0dc;
  border-radius: 20px;
  color: #65071d;
  box-shadow: 2px 8px 10px #65071d;
}

.login-box h1 {
  text-align: center;
  margin-bottom: 10px;
  color: #6d3b52;
  font-size: 2.0rem;
}

.login-box p {
  text-align: center;
  color: #65071d;
  font-size: 1.1rem;
}

.campo {
  display: flex;
  text-align: justify;
  flex-direction: column;
  margin-bottom: 20px;
}

.campo label {
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 1.1rem;
}

.campo input {
  width: 100%;
  box-sizing: border-box;
  padding: 13px 15px;
  border: 1px solid #d8cbd1;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
  transition: 0.2s;
}

.campo input:focus {
  border-color: #9b5c79;
  box-shadow: 0 0 0 2px rgba(155, 92, 121, 0.12);
}

.erro {
  color: #c0392b;
  font-size: 14px;
  margin: -5px 0 15px;
  text-align: left;
}

.area-button{
  display: flex;
  justify-content: center;
  margin: 30px;
}

.cadastro {
  margin-top: 25px;
  font-size: 1.1rem;
}

.cadastro a {
  color: #8f4f6b;
  font-weight: 600;
  text-decoration: none;
}

.cadastro a:hover {
  text-decoration: underline;
}
</style>