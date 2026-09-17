<template>
  <header class="header">
    <div class="logo">
      <RouterLink to="/">
        AcolhEla
      </RouterLink>
    </div>

    <nav class="menu">

      <!-- QUERO ACOLHIMENTO -->
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
        </div>
      </div>

      <!-- QUERO ACOLHER -->
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
        </div>
      </div>

      <!-- VIOLÊNCIA -->
      <div class="menu-item">
        <RouterLink to="/violencia" class="menu-title">
          Quero entender sobre violência
        </RouterLink>
      </div>

      <!-- SOBRE NÓS -->
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

      <!-- CONTATO -->
      <div class="menu-item">
        <button
          type="button"
          class="contato-btn"
          @click="abrirContato"
        >
          Contato
        </button>
      </div>

      <!-- PERFIL - USUÁRIO NÃO LOGADO -->
      <div
        v-if="!usuarioLogado"
        class="menu-item perfil-dropdown"
      >
        <button
          type="button"
          class="perfil-btn"
        >
          <FontAwesomeIcon :icon="['fas', 'user']" />
        </button>

        <div class="perfil-dropdown-menu">
          <RouterLink to="/cadastro">
            Entrar como vítima
          </RouterLink>

          <RouterLink to="/cadastro-acolher">
            Entrar como acolhedora
          </RouterLink>
        </div>
      </div>

      <!-- PERFIL - USUÁRIO LOGADO -->
      <div
        v-else
        class="menu-item perfil-logado"
      >
        <button
          type="button"
          class="perfil-btn"
          @click="abrirPerfil"
        >
          <!-- Foto da acolhedora -->
          <img
            v-if="fotoUsuario"
            :src="fotoUsuario"
            alt="Foto de perfil"
            class="foto-header"
          />

          <!-- Ícone quando não existe foto -->
          <FontAwesomeIcon
            v-else
            :icon="['fas', 'user']"
          />
        </button>
      </div>

    </nav>
  </header>

  <!-- MODAL DE CONTATO -->
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
        />

        <label for="email">
          E-mail
        </label>

        <input
          id="email"
          v-model="formulario.email"
          type="email"
          placeholder="Digite seu e-mail"
          required
        />

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
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

/* =========================
   CONTATO
========================= */

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

/* =========================
   LOGIN / PERFIL
========================= */

const usuarioLogado = computed(() => {
  return localStorage.getItem('usuarioLogado') === 'true'
})

const tipoUsuario = computed(() => {
  return localStorage.getItem('tipoUsuario')
})

/* =========================
   FOTO DA ACOLHEDORA
========================= */

const fotoUsuario = computed(() => {
  if (tipoUsuario.value === 'voluntaria') {
    const voluntariaSalva = localStorage.getItem('voluntaria')

    if (voluntariaSalva) {
      try {
        const voluntaria = JSON.parse(voluntariaSalva)

        return voluntaria.foto || null
      } catch (erro) {
        console.error('Erro ao carregar foto:', erro)
        return null
      }
    }
  }

  return null
})

/* =========================
   ABRIR PERFIL
========================= */

function abrirPerfil() {
  if (tipoUsuario.value === 'vitima') {
    router.push('/perfil-vitima')
    return
  }

  if (tipoUsuario.value === 'voluntaria') {
    router.push('/perfil-voluntaria')
  }
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

/* =========================
   DROPDOWNS
========================= */

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

/* =========================
   CONTATO
========================= */

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

/* =========================
   PERFIL
========================= */

.perfil-dropdown {
  position: relative;
}

/* Botão do usuário */

.perfil-btn {
  width: 43px;
  height: 43px;

  border: none;
  border-radius: 50%;

  background-color: #650018;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-size: 21px;

  padding: 0;

  overflow: hidden;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.perfil-btn:hover {
  background-color: #4e0012;
  transform: translateY(-1px);
}

/* =========================
   DROPDOWN DO PERFIL
========================= */

.perfil-dropdown-menu {
  position: absolute;

  top: 84px;
  right: 0;

  min-width: 220px;

  background-color: #ffffff;

  border-radius: 0 0 8px 8px;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  padding: 8px 0;

  opacity: 0;
  visibility: hidden;

  transform: translateY(-10px);

  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s ease;

  z-index: 100;
}

.perfil-dropdown:hover .perfil-dropdown-menu {
  opacity: 1;
  visibility: visible;

  transform: translateY(0);
}

.perfil-dropdown-menu a {
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

.perfil-dropdown-menu a:hover {
  background-color: #f3d5dc;
  color: #8f2438;
}

/* =========================
   FOTO NO HEADER
========================= */

.foto-header {
  width: 100%;
  height: 100%;

  border-radius: 50%;

  object-fit: cover;

  display: block;
}

/* =========================
   MODAL
========================= */

.modal {
  position: fixed;

  top: 0;
  left: 0;

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
  max-width: 500px;

  background-color: #ffffff;

  padding: 35px;

  border-radius: 15px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.modal-content h2 {
  color: #650018;
  margin-bottom: 10px;
}

.modal-content p {
  color: #555;
  margin-bottom: 25px;
}

.fechar {
  position: absolute;

  top: 12px;
  right: 18px;

  border: none;
  background: none;

  font-size: 30px;

  color: #650018;

  cursor: pointer;
}

.modal-content form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.modal-content label {
  color: #650018;
  font-weight: bold;
  margin-top: 8px;
}

.modal-content input,
.modal-content textarea {
  width: 100%;

  padding: 12px;

  border: 1px solid #ccc;

  border-radius: 8px;

  font-family: inherit;
  font-size: 15px;

  resize: vertical;
}

.modal-content input:focus,
.modal-content textarea:focus {
  outline: none;
  border-color: #a92d42;
}

.enviar-btn {
  margin-top: 15px;

  border: none;

  background-color: #650018;
  color: #ffffff;

  padding: 12px;

  border-radius: 8px;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  transition: background-color 0.2s ease;
}

.enviar-btn:hover {
  background-color: #4e0012;
}

/* =========================
   RESPONSIVO
========================= */

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

  .perfil-dropdown-menu {
    top: 53px;
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
