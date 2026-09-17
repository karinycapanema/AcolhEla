<template>
  <header class="header">

    <!-- LOGO -->
    <div class="logo">
      <RouterLink to="/">
        AcolhEla
      </RouterLink>
    </div>

    <!-- =========================
         MENU DESKTOP
    ========================== -->

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


      <!-- ENTENDER SOBRE VIOLÊNCIA -->
      <div class="menu-item">
        <RouterLink
          to="/violencia"
          class="menu-title"
        >
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


      <!-- PERFIL DESLOGADO -->
      <div
        v-if="!usuarioLogado"
        class="menu-item perfil-dropdown"
      >
        <button
          type="button"
          class="perfil-btn"
          aria-label="Abrir opções de login"
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


      <!-- PERFIL LOGADO -->
      <div
        v-else
        class="menu-item perfil-logado"
      >
        <button
          type="button"
          class="perfil-btn"
          @click="abrirPerfil"
          aria-label="Abrir meu perfil"
        >

          <img
            v-if="fotoUsuario"
            :src="fotoUsuario"
            alt="Foto de perfil"
            class="foto-header"
          />

          <FontAwesomeIcon
            v-else
            :icon="['fas', 'user']"
          />

        </button>
      </div>

    </nav>


    <!-- =========================
         BOTÃO HAMBÚRGUER
    ========================== -->

    <button
      type="button"
      class="hamburger-btn"
      @click="alternarMenu"
      :aria-expanded="menuAberto"
      aria-label="Abrir menu"
    >
      <FontAwesomeIcon
        :icon="['fas', menuAberto ? 'xmark' : 'bars']"
      />
    </button>

  </header>


  <!-- =========================
       MENU MOBILE
  ========================== -->

  <div
    v-if="menuAberto"
    class="mobile-menu"
  >

    <!-- QUERO ACOLHIMENTO -->
    <div class="mobile-section">

      <button
        type="button"
        class="mobile-section-title"
        @click="acolhimentoAberto = !acolhimentoAberto"
      >
        Quero Acolhimento

        <FontAwesomeIcon
          :icon="[
            'fas',
            acolhimentoAberto ? 'chevron-up' : 'chevron-down'
          ]"
        />
      </button>

      <div
        v-if="acolhimentoAberto"
        class="mobile-submenu"
      >

        <RouterLink
          to="/mapa"
          @click="fecharMenu"
        >
          Mapa do acolhimento
        </RouterLink>

        <RouterLink
          to="/denuncia"
          @click="fecharMenu"
        >
          Desejo denunciar
        </RouterLink>

      </div>

    </div>


    <!-- QUERO ACOLHER -->
    <div class="mobile-section">

      <button
        type="button"
        class="mobile-section-title"
        @click="acolherAberto = !acolherAberto"
      >
        Quero Acolher

        <FontAwesomeIcon
          :icon="[
            'fas',
            acolherAberto ? 'chevron-up' : 'chevron-down'
          ]"
        />
      </button>

      <div
        v-if="acolherAberto"
        class="mobile-submenu"
      >

        <RouterLink
          to="/capacitar"
          @click="fecharMenu"
        >
          Quero me capacitar para acolher
        </RouterLink>

        <RouterLink
          to="/curso"
          @click="fecharMenu"
        >
          Curso do acolhimento
        </RouterLink>

      </div>

    </div>


    <!-- VIOLÊNCIA -->
    <RouterLink
      to="/violencia"
      class="mobile-link"
      @click="fecharMenu"
    >
      Quero entender sobre violência
    </RouterLink>


    <!-- SOBRE NÓS -->
    <div class="mobile-section">

      <button
        type="button"
        class="mobile-section-title"
        @click="sobreAberto = !sobreAberto"
      >
        Sobre nós

        <FontAwesomeIcon
          :icon="[
            'fas',
            sobreAberto ? 'chevron-up' : 'chevron-down'
          ]"
        />
      </button>

      <div
        v-if="sobreAberto"
        class="mobile-submenu"
      >

        <RouterLink
          to="/sobre"
          @click="fecharMenu"
        >
          Quem somos
        </RouterLink>

      </div>

    </div>


    <!-- CONTATO -->
    <button
      type="button"
      class="mobile-link mobile-button"
      @click="abrirContatoMobile"
    >
      Contato
    </button>


    <!-- =========================
         USUÁRIO DESLOGADO
    ========================== -->

    <div
      v-if="!usuarioLogado"
      class="mobile-section"
    >

      <button
        type="button"
        class="mobile-section-title"
        @click="perfilAberto = !perfilAberto"
      >
        <span class="mobile-perfil-titulo">
          <FontAwesomeIcon
            :icon="['fas', 'user']"
          />
          Minha conta
        </span>

        <FontAwesomeIcon
          :icon="[
            'fas',
            perfilAberto ? 'chevron-up' : 'chevron-down'
          ]"
        />
      </button>

      <div
        v-if="perfilAberto"
        class="mobile-submenu"
      >

        <RouterLink
          to="/cadastro"
          @click="fecharMenu"
        >
          Entrar como vítima
        </RouterLink>

        <RouterLink
          to="/cadastro-acolher"
          @click="fecharMenu"
        >
          Entrar como acolhedora
        </RouterLink>

      </div>

    </div>


    <!-- =========================
         USUÁRIO LOGADO
    ========================== -->

    <button
      v-else
      type="button"
      class="mobile-link mobile-button mobile-perfil-logado"
      @click="abrirPerfilMobile"
    >

      <img
        v-if="fotoUsuario"
        :src="fotoUsuario"
        alt="Foto de perfil"
        class="foto-mobile"
      />

      <FontAwesomeIcon
        v-else
        :icon="['fas', 'user']"
      />

      <span>
        Minha conta
      </span>

    </button>

  </div>


  <!-- =========================
       MODAL DE CONTATO
  ========================== -->

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
   MENU MOBILE
========================= */

const menuAberto = ref(false)

const acolhimentoAberto = ref(false)

const acolherAberto = ref(false)

const sobreAberto = ref(false)

const perfilAberto = ref(false)


function alternarMenu() {

  menuAberto.value = !menuAberto.value

}


function fecharMenu() {

  menuAberto.value = false

  acolhimentoAberto.value = false

  acolherAberto.value = false

  sobreAberto.value = false

  perfilAberto.value = false

}


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


function abrirContatoMobile() {

  fecharMenu()

  abrirContato()

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
   USUÁRIO LOGADO
========================= */

const usuarioLogado = computed(() => {

  return localStorage.getItem('usuarioLogado') === 'true'

})


/* =========================
   TIPO DE USUÁRIO
========================= */

const tipoUsuario = computed(() => {

  return localStorage.getItem('tipoUsuario')

})


/* =========================
   FOTO DA ACOLHEDORA
========================= */

const fotoUsuario = computed(() => {

  if (tipoUsuario.value === 'voluntaria') {

    const voluntariaSalva =
      localStorage.getItem('voluntaria')

    if (voluntariaSalva) {

      try {

        const voluntaria =
          JSON.parse(voluntariaSalva)

        return voluntaria.foto || null

      } catch (erro) {

        console.error(
          'Erro ao carregar foto:',
          erro
        )

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


function abrirPerfilMobile() {

  fecharMenu()

  abrirPerfil()

}

</script>


<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


/* =========================
   HEADER
========================= */

.header {

  width: 100%;
  height: 84px;

  background-color: #a92d42;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px 0 36px;

  position: relative;

  z-index: 1100;

}


/* =========================
   LOGO
========================= */

.logo a {

  color: #ffffff;

  text-decoration: none;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 42px;

  font-weight: bold;

  letter-spacing: -2px;

}


/* =========================
   MENU DESKTOP
========================= */

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

  transition:
    color 0.2s ease;

}


.menu-title:hover {

  color: #f5dce1;

}


/* =========================
   DROPDOWNS DESKTOP
========================= */

.dropdown-menu {

  position: absolute;

  top: 84px;
  left: 50%;

  min-width: 250px;

  background-color: #ffffff;

  border-radius:
    0 0 8px 8px;

  box-shadow:
    0 5px 15px
    rgba(0, 0, 0, 0.2);

  padding: 8px 0;

  opacity: 0;

  visibility: hidden;

  transform:
    translateX(-50%)
    translateY(-10px);

  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s ease;

  z-index: 100;

}


.dropdown:hover .dropdown-menu {

  opacity: 1;

  visibility: visible;

  transform:
    translateX(-50%)
    translateY(0);

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
   PERFIL DESKTOP
========================= */

.perfil-dropdown {

  position: relative;

}


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
   DROPDOWN PERFIL
========================= */

.perfil-dropdown-menu {

  position: absolute;

  top: 84px;
  right: 0;

  min-width: 220px;

  background-color: #ffffff;

  border-radius:
    0 0 8px 8px;

  box-shadow:
    0 5px 15px
    rgba(0, 0, 0, 0.2);

  padding: 8px 0;

  opacity: 0;

  visibility: hidden;

  transform:
    translateY(-10px);

  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s ease;

  z-index: 100;

}


.perfil-dropdown:hover
.perfil-dropdown-menu {

  opacity: 1;

  visibility: visible;

  transform:
    translateY(0);

}


.perfil-dropdown-menu a {

  display: block;

  padding: 13px 18px;

  color: #6f1729;

  text-decoration: none;

  font-size: 16px;

  font-weight: 500;

}


.perfil-dropdown-menu a:hover {

  background-color: #f3d5dc;

  color: #8f2438;

}


/* =========================
   FOTO
========================= */

.foto-header {

  width: 100%;
  height: 100%;

  border-radius: 50%;

  object-fit: cover;

  display: block;

}


/* =========================
   HAMBÚRGUER
========================= */

.hamburger-btn {

  display: none;

  width: 46px;
  height: 46px;

  border: none;

  background: transparent;

  color: #ffffff;

  font-size: 28px;

  cursor: pointer;

  align-items: center;
  justify-content: center;

  padding: 0;

  z-index: 1200;

}


/* =========================
   MENU MOBILE
========================= */

.mobile-menu {

  position: absolute;

  top: 84px;
  left: 0;

  width: 100%;

  background-color: #ffffff;

  display: flex;

  flex-direction: column;

  padding: 8px 0;

  box-shadow:
    0 5px 15px
    rgba(0, 0, 0, 0.2);

  z-index: 1000;

}


.mobile-link,
.mobile-section-title {

  width: 100%;

  min-height: 52px;

  border: none;

  background-color: transparent;

  color: #6f1729;

  text-decoration: none;

  font-family: inherit;

  font-size: 17px;

  font-weight: 600;

  padding: 15px 25px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  text-align: left;

  cursor: pointer;

}


.mobile-link:hover,
.mobile-section-title:hover {

  background-color: #f3d5dc;

}


/* =========================
   SUBMENUS MOBILE
========================= */

.mobile-submenu {

  background-color: #faf5f6;

}


.mobile-submenu a {

  display: block;

  width: 100%;

  padding: 13px 25px 13px 45px;

  color: #6f1729;

  text-decoration: none;

  font-size: 16px;

  font-weight: 500;

}


.mobile-submenu a:hover {

  background-color: #f3d5dc;

}


/* =========================
   BOTÕES MOBILE
========================= */

.mobile-button {

  appearance: none;

  -webkit-appearance: none;

}


.mobile-perfil-titulo {

  display: flex;

  align-items: center;

  gap: 10px;

}


.mobile-perfil-logado {

  justify-content: flex-start;

  gap: 10px;

}


.foto-mobile {

  width: 28px;
  height: 28px;

  border-radius: 50%;

  object-fit: cover;

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

  background-color:
    rgba(0, 0, 0, 0.55);

  display: flex;

  align-items: center;

  justify-content: center;

  z-index: 2000;

}


.modal-content {

  position: relative;

  width: 90%;

  max-width: 500px;

  background-color: #ffffff;

  padding: 35px;

  border-radius: 15px;

  box-shadow:
    0 10px 30px
    rgba(0, 0, 0, 0.3);

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

}


.enviar-btn:hover {

  background-color: #4e0012;

}


/* =========================
   TABLET / CELULAR
========================= */

@media (max-width: 1000px) {

  .header {

    height: 84px;

    padding: 0 20px;

    flex-direction: row;

  }


  /* Esconde completamente
     o menu de desktop */

  .menu {

    display: none;

  }


  /* Mostra o hambúrguer */

  .hamburger-btn {

    display: flex;

  }


  .mobile-menu {

    top: 84px;

  }

}


/* =========================
   CELULAR
========================= */

@media (max-width: 600px) {

  .header {

    height: 75px;

    padding: 0 18px;

  }


  .logo a {

    font-size: 36px;

  }


  .hamburger-btn {

    width: 42px;
    height: 42px;

    font-size: 26px;

    display: flex;

  }


  .mobile-menu {

    top: 75px;

  }


  .mobile-link,
  .mobile-section-title {

    font-size: 16px;

    padding-left: 20px;
    padding-right: 20px;

  }


  .mobile-submenu a {

    padding-left: 40px;

  }

}

</style>