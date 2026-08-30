<template>
  <header class="header">
   
    <div class="logo">
      <RouterLink to="/">
        AcolhEla
      </RouterLink>
    </div>


    <nav class="menu">

    
      <div class="menu-item dropdown">
        <span class="menu-title">
          Quero Acolhimento
        </span>

        <div class="dropdown-menu">
          <RouterLink to="/mapa">
            Mapa do acolhimento
          </RouterLink>

          <RouterLink to="/denuncia">
            Desejo denunciar
          </RouterLink>

          <RouterLink to="/cadastro">
            Desejo me cadastrar
          </RouterLink>
        </div>
      </div>


      <div class="menu-item dropdown">
        <span class="menu-title">
          Quero Acolher
        </span>

        <div class="dropdown-menu">
          <RouterLink to="/capacitar">
            Quero me capacitar para acolher
          </RouterLink>

          <RouterLink to="/curso">
            Curso do acolhimento
          </RouterLink>

          <RouterLink to="/cadastro-acolher">
            Quero me cadastrar
          </RouterLink>
        </div>
      </div>

      <div class="menu-item">
        <RouterLink
          to="/violencia"
          class="menu-title"
        >
          Quero entender sobre violência
        </RouterLink>
      </div>

   
      <div class="menu-item dropdown">
        <span class="menu-title">
          Sobre nós
        </span>

        <div class="dropdown-menu">
          <RouterLink to="/sobre">
            Quem somos
          </RouterLink>
        </div>
      </div>

      
      <div class="menu-item">
        <button
          type="button"
          class="contato-btn"
          @click="abrirContato"
        >
          Contato
        </button>
      </div>
    </nav>
  </header>

  
  <div
    v-if="modalContato"
    class="modal"
    @click.self="fecharContato"
  >
    <div class="modal-content">

      <button
        type="button"
        class="fechar"
        @click="fecharContato"
      >
        &times;
      </button>

      <h2>Entre em contato</h2>

      <p>
        Preencha seus dados para entrar em contato conosco.
      </p>

      <form @submit.prevent="enviarFormulario">

        <label for="nome">
          Nome
        </label>

        <input
          id="nome"
          v-model="formulario.nome"
          type="text"
          placeholder="Digite seu nome"
          required
        >

        <label for="email">
          E-mail
        </label>

        <input
          id="email"
          v-model="formulario.email"
          type="email"
          placeholder="Digite seu e-mail"
          required
        >

        <label for="mensagem">
          Mensagem
        </label>

        <textarea
          id="mensagem"
          v-model="formulario.mensagem"
          placeholder="Digite sua mensagem"
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          class="enviar-btn"
        >
          Enviar
        </button>

      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const modalContato = ref(false)

const formulario = ref({
  nome: '',
  email: '',
  mensagem: ''
})

function abrirContato() {
  modalContato.value = true
}

function fecharContato() {
  modalContato.value = false
}

function enviarFormulario() {
  console.log(formulario.value)

  alert('Mensagem enviada com sucesso!')

  formulario.value = {
    nome: '',
    email: '',
    mensagem: ''
  }

  fecharContato()
}
</script>

<style scoped>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}




.header {
  width: 100%;
  height: 84px;

  background-color: #a92d42;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px 0 36px;
}




.logo a {
  color: #ffffff;

  text-decoration: none;

  font-family: Georgia, "Times New Roman", serif;
  font-size: 42px;
  font-weight: bold;

  letter-spacing: -2px;
}




.menu {
  height: 100%;

  display: flex;
  align-items: center;

  gap: 30px;
}

.menu-item {
  height: 100%;

  display: flex;
  align-items: center;

  position: relative;
}




.menu-title {
  color: #ffffff;

  text-decoration: none;

  font-size: 20px;
  font-weight: bold;

  cursor: pointer;

  white-space: nowrap;

  transition: color 0.2s ease;
}

.menu-title:hover {
  color: #f5dce1;
}


.dropdown-menu {
  position: absolute;

  top: 84px;
  left: 50%;

  min-width: 250px;

  background-color: #ffffff;

  border-radius: 0 0 8px 8px;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  padding: 8px 0;

  opacity: 0;
  visibility: hidden;

  transform: translateX(-50%) translateY(-10px);

  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s ease;

  z-index: 100;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;

  transform: translateX(-50%) translateY(0);
}

.dropdown-menu a {
  display: block;

  padding: 13px 18px;

  color: #6f1729;

  text-decoration: none;

  font-size: 16px;
  font-weight: 500;

  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.dropdown-menu a:hover {
  background-color: #f3d5dc;

  color: #8f2438;
}

.contato-btn {
  border: none;

  background-color: #650018;

  color: #ffffff;

  font-family: inherit;

  font-size: 20px;
  font-weight: bold;

  padding: 6px 31px;

  border-radius: 10px;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.contato-btn:hover {
  background-color: #4e0012;

  transform: translateY(-1px);
}

.modal {
  position: fixed;

  inset: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.55);

  display: flex;

  align-items: center;
  justify-content: center;

  z-index: 1000;
}


.modal-content {
  position: relative;

  width: 90%;
  max-width: 480px;

  background-color: #ffffff;

  border-radius: 12px;

  padding: 30px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.modal-content h2 {
  color: #a92d42;

  font-size: 28px;

  margin-bottom: 8px;
}

.modal-content p {
  color: #555;

  margin-bottom: 22px;
}


.fechar {
  position: absolute;

  top: 10px;
  right: 15px;

  border: none;

  background: none;

  color: #777;

  font-size: 30px;

  cursor: pointer;
}

.fechar:hover {
  color: #a92d42;
}


.modal-content form {
  display: flex;

  flex-direction: column;

  gap: 8px;
}

.modal-content label {
  color: #6f1729;

  font-weight: bold;

  margin-top: 8px;
}

.modal-content input,
.modal-content textarea {
  width: 100%;

  padding: 11px 12px;

  border: 1px solid #ccc;

  border-radius: 6px;

  font-family: inherit;

  font-size: 15px;

  outline: none;
}

.modal-content input:focus,
.modal-content textarea:focus {
  border-color: #a92d42;

  box-shadow: 0 0 0 2px rgba(169, 45, 66, 0.12);
}

.modal-content textarea {
  resize: vertical;
}


.enviar-btn {
  margin-top: 15px;

  padding: 12px;

  border: none;

  border-radius: 7px;

  background-color: #a92d42;

  color: #ffffff;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;
}

.enviar-btn:hover {
  background-color: #8f2438;
}


@media (max-width: 1000px) {

  .header {
    height: auto;

    min-height: 84px;

    flex-direction: column;

    gap: 15px;

    padding: 15px;
  }

  .menu {
    height: auto;

    flex-wrap: wrap;

    justify-content: center;

    gap: 15px 22px;
  }

  .menu-item {
    height: auto;
  }

  .dropdown-menu {
    top: 30px;
  }

}


@media (max-width: 600px) {

  .logo a {
    font-size: 36px;
  }

  .menu {
    flex-direction: column;

    width: 100%;

    gap: 12px;
  }

  .menu-title {
    font-size: 17px;
  }

  .contato-btn {
    font-size: 17px;

    padding: 7px 25px;
  }

}

</style>