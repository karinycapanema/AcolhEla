<script setup>
import { ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'

const nome = ref('')
const email = ref('')
const telefone = ref('')
const senha = ref('')
const confirmarSenha = ref('')
const erroSenha = ref('')

const limparFormulario = () => {
  nome.value = ''
  email.value = ''
  telefone.value = ''
  senha.value = ''
  confirmarSenha.value = ''
  erroSenha.value = ''
}

const enviarCadastro = () => {
  if (
    !nome.value ||
    !email.value ||
    !telefone.value ||
    !senha.value ||
    !confirmarSenha.value
  ) {
    return
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailValido.test(email.value)) {
    alert('Digite um e-mail válido!')
    return
  }

   const telefoneNumeros = telefone.value.replace(/\D/g, '')

  if (telefoneNumeros.length !== 10 && telefoneNumeros.length !== 11) {
    alert('Digite um telefone válido!')
    return
  }

  if (senha.value !== confirmarSenha.value) {
    erroSenha.value = 'As senhas não são iguais!'
    return
  }
  erroSenha.value = ''

  const usuario = {
  nome: nome.value,
  email: email.value,
  telefone: telefone.value,
  senha: senha.value
}

localStorage.setItem('usuario', JSON.stringify(usuario))

alert('Cadastro realizado com sucesso!')

limparFormulario()
}

const mostrarSenha = ref(false)

const formatarTelefone = () => {
  let valor = telefone.value.replace(/\D/g, '')

  if (valor.length > 11) {
    valor = valor.slice(0, 11)
  }

  if (valor.length <= 2) {
    telefone.value = valor
  } else if (valor.length <= 6) {
    telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`
  } else if (valor.length <= 10) {
    telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 6)}-${valor.slice(6)}`
  } else {
    telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`
  }
}


</script>

<template>
  <form class="form-usuario" @submit.prevent="enviarCadastro">

    <div class="campo">
      <label for="nome">Nome Completo</label>

      <div class="input-com-icone">
        <input id="nome" v-model="nome" type="text" placeholder="Seu nome completo" required/>
        <FontAwesomeIcon class="icone-input" :icon="['fas', 'user-clock']"/>
      </div>
    </div>

    <div class="campo">
      <label for="email">E-mail</label>

      <div class="input-com-icone">
        <input id="email" v-model="email" type="email" placeholder="seu@gmail.com" required/>
        <FontAwesomeIcon class="icone-input" :icon="['fas','envelope']"/>
      </div>
    </div>

    <div class="campo">
      <label for="telefone">Telefone</label>

      <div class="input-com-icone">
        <input id="telefone" v-model="telefone" @input="formatarTelefone" type="tel" placeholder="(00) 00000-0000" required/>

        <FontAwesomeIcon class="icone-input" :icon="['fas','phone']"/>

      </div>
    </div>

    <div class="campo">

        <label for="senha">Senha</label>

        <div class="input-com-icone">
            <input id="senha" v-model="senha" :type="mostrarSenha ? 'text' : 'password'" placeholder="••••••••" required/>

            <FontAwesomeIcon class="icone-input":icon="mostrarSenha ? ['fas', 'unlock'] : ['fas', 'lock']" 
            @click="mostrarSenha = !mostrarSenha"/>

        </div>
    </div>

    <div class="campo">
      
        <label for="confirmar-senha">Confirmar senha</label>

        <div class="input-com-icone">
            <input id="confirmar-senha" v-model="confirmarSenha" :type="mostrarSenha ? 'text' : 'password'" placeholder="••••••••" required/>

            <FontAwesomeIcon class="icone-input":icon="mostrarSenha ? ['fas', 'unlock'] : ['fas', 'lock']" 
            @click="mostrarSenha = !mostrarSenha"/>

            <p v-if="erroSenha" class="erro-senha"> {{ erroSenha }} </p>

        </div>

    </div>

    <div class="area-button">
    <AppButton type="submit">
      Criar Conta
    </AppButton>
    </div>

    <p class="login">
      já tem uma conta?
      <RouterLink to="/login" class="login-link">Login</RouterLink>
    </p>
  </form>
</template>

<style scoped>
.form-usuario {
  width: 100%;
  max-width: 690px;
  padding: 15px 18px 22px;
  border-radius: 24px;
  background: #f4ead9;
  box-shadow: 2px 8px 10px #65071d;
}

.campo {
  margin-bottom: 14px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #52252b;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.1rem;
  font-weight: bold;
}
.input-com-icone {
  position: relative;
  width: 100%;
}

.input-com-icone input {
  width: 100%;
  height: 34px;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 45px;
}

.icone-input {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #63071d;
  font-size: 14px;
}

input {
  width: 100%;
  height: 34px;
  border: 1px solid #efbdc3;
  border-radius: 15px;
  outline: none;
  padding: 0 42px 0 15px;
  background: #fffaf5;
  color: #52252b;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.0rem;
}

input::placeholder {
  color: #5c4a4b;
  opacity: 0.9;
}

input:focus {
  border-color: #690914;
}

.input-com-icone span {
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  color: #690914;
  font-size: 14px;
}

.area-button{
 display: flex;
 justify-content: center;
}

.login {
  margin-top: 16px;
  text-align: center;
  color: #52252b;
  font-weight: bold;
  font-size: 1.1rem;
}

.login a {
  color: #e9a7b3;
  text-decoration: none;
  font-size: 1.1rem;
}

.erro-senha {
  color: #c62828;
  font-size: 1.0rem;
  margin-top: 5px;
}

@media (max-width: 600px) {
  .form-usuario {
    padding: 18px 14px 22px;
  }
}
</style>