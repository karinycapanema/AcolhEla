<template>

  <header>
    <AppHeader />
  </header>

  <main class="pagina-voluntario">

    <section class="cabecalho-voluntario">
      <h1>Cadastro de Voluntário</h1>
      <p>Faça parte da nossa rede de apoio e ajude a transformar vidas</p>
    </section>

    <form class="formulario-voluntario" @submit.prevent="enviarCadastro">

      <h2>Informações Pessoais</h2>

      <div class="campo campo-grande">
        <label for="nome">Nome Completo</label>
        <input
          id="nome"
          v-model="formulario.nome"
          type="text"
          placeholder="Seu nome completo"
          required
        >
      </div>

      <div class="linha-campos">

        <div class="campo">
          <label for="email">E-mail</label>
          <input
            id="email"
            v-model="formulario.email"
            type="email"
            placeholder="seu@gmail.com"
            required
          >
        </div>

        <div class="campo">
          <label for="telefone">Telefone</label>
          <input
            id="telefone"
            v-model="formulario.telefone"
            type="tel"
            placeholder="(00) 00000-0000"
            required
          >
        </div>

      </div>

      <div class="linha-campos">

        <div class="campo">
          <label for="cidade">Cidade</label>
          <input
            id="cidade"
            v-model="formulario.cidade"
            type="text"
            placeholder="Sua cidade"
            required
          >
        </div>

        <div class="campo">
          <label for="estado">Estado</label>
          <input
            id="estado"
            v-model="formulario.estado"
            type="text"
            placeholder="Seu estado"
            required
          >
        </div>

      </div>

      <div class="campo-ajuda">
        <label>Tipo de Ajuda que Posso Oferecer</label>

        <div class="opcoes-ajuda">

          <label
            v-for="opcao in opcoesAjuda"
            :key="opcao"
            class="opcao-ajuda"
          >
            <input
              v-model="formulario.ajudas"
              type="checkbox"
              :value="opcao"
            >
            <span>{{ opcao }}</span>
          </label>

        </div>
      </div>

      <div class="campo mensagem">
        <label for="mensagem">Mensagem (Opcional)</label>

        <textarea
          id="mensagem"
          v-model="formulario.mensagem"
          placeholder="Conte um pouco sobre você e por que quer ser voluntário..."
        ></textarea>
      </div>

      <button type="submit" class="botao-enviar">
        Enviar Cadastro
      </button>

    </form>

    <section class="mensagem-final">
      <p>
        Obrigada por querer fazer parte dessa rede de apoio. Juntas somos mais fortes!
      </p>
    </section>
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import { reactive } from 'vue'

const opcoesAjuda = [
  'Apoio Emocional',
  'Orientação e Informação',
  'Abrigo Temporário',
  'Transporte',
  'Orientação Jurídica',
  'Outros'
]

const formulario = reactive({
  nome: '',
  email: '',
  telefone: '',
  cidade: '',
  estado: '',
  ajudas: [],
  mensagem: ''
})

function enviarCadastro() {
  alert('Cadastro enviado com sucesso!')
  formulario.nome = ''
  formulario.email = ''
  formulario.telefone = ''
  formulario.cidade = ''
  formulario.estado = ''
  formulario.ajudas = []
  formulario.mensagem = ''
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.pagina-voluntario {
  width: 100%;
  min-height: 100vh;
  padding: 50px 0 60px;
  background: #ffffff;
  color: #4a0011;
}

.cabecalho-voluntario {
  width: 100%;
  text-align: center;
  margin-bottom: 35px;
}

.cabecalho-voluntario h1 {
  margin: 0 0 8px;
  font-size: 30px;
  font-weight: 600;
}

.cabecalho-voluntario p {
  margin: 0;
  font-size: 17px;
}

.formulario-voluntario {
  width: 650px;
  margin: 0 auto;
  padding: 28px 35px 30px;
  border-radius: 22px;
  background: #fdf1e2;
  box-shadow: 0 6px 18px rgba(74, 0, 17, 0.18);
}

.formulario-voluntario h2 {
  margin: 0 0 25px;
  font-size: 19px;
  font-weight: 600;
}

.campo {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.campo label,
.campo-ajuda > label {
  margin: 0 0 7px 3px;
  font-size: 14px;
  font-weight: 600;
}

.campo input,
.campo textarea {
  width: 100%;
  border: 1px solid #ffb4ca;
  border-radius: 11px;
  outline: none;
  background: #fffaf6;
  color: #4a0011;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 14px;
}

.campo input {
  height: 40px;
  padding: 0 12px;
}

.campo textarea {
  height: 105px;
  padding: 13px;
  resize: none;
}

.campo input::placeholder,
.campo textarea::placeholder {
  color: #8c8580;
}

.campo input:focus,
.campo textarea:focus {
  border-color: #a4303f;
}

.linha-campos {
  display: flex;
  gap: 20px;
  margin-bottom: 18px;
}

.campo-grande {
  margin-bottom: 18px;
}

.campo-ajuda {
  margin-top: 5px;
  margin-bottom: 20px;
}

.opcoes-ajuda {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 20px;
}

.opcao-ajuda {
  height: 35px;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 0 10px;
  border-radius: 10px;
  background: #f7afc6;
  cursor: pointer;
}

.opcao-ajuda input {
  width: 15px;
  height: 15px;
  margin: 0;
  accent-color: #4a0011;
}

.opcao-ajuda span {
  font-size: 14px;
}

.mensagem {
  margin-bottom: 20px;
}

.botao-enviar {
  display: block;
  width: 80%;
  height: 42px;
  margin: 0 auto;
  border: none;
  border-radius: 11px;
  background: #4a0011;
  color: #ffffff;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 14px;
  cursor: pointer;
}

.botao-enviar:hover {
  background: #650018;
}

.mensagem-final {
  width: 650px;
  min-height: 55px;
  margin: 27px auto 0;
  padding: 17px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #feb9cd;
  text-align: center;
  box-shadow: 0 6px 18px rgba(74, 0, 17, 0.15);
}

.mensagem-final p {
  margin: 0;
  font-size: 14px;
}

@media (max-width: 750px) {
  .formulario-voluntario,
  .mensagem-final {
    width: 90%;
  }
}

@media (max-width: 600px) {
  .linha-campos {
    flex-direction: column;
  }

  .opcoes-ajuda {
    grid-template-columns: 1fr;
  }

  .formulario-voluntario {
    padding: 25px 20px;
  }

  .botao-enviar {
    width: 100%;
  }
}
</style>