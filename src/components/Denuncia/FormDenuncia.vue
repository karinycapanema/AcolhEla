<script setup>
import { reactive } from 'vue'
import AppButton from '../ui/AppButton.vue'
import UploadArquivos from './UploadArquivos.vue'


  const formulario = reactive({
    relato: '',
    situacoes: [],
    data: '',
    local: '',
    anonima: false,
    nome: '',
    contato: ''
  })
    
  const erros = reactive({
  relato: '',
  situacoes: '',
  data: '',
  local: ''
  })

  const dadosSalvos = localStorage.getItem('denuncia')


  if (dadosSalvos) {
    Object.assign(formulario, JSON.parse(dadosSalvos))
  }


 function enviarDenuncia() {

  // Limpa os erros anteriores
  erros.relato = ''
  erros.situacoes = ''
  erros.data = ''
  erros.local = ''

  let formularioValido = true

  // Validação do relato
  if (!formulario.relato.trim()) {
    erros.relato = 'Este campo é obrigatório.'
    formularioValido = false
  }

  // Validação das situações
  if (!formulario.situacoes || formulario.situacoes.length === 0) {
    erros.situacoes = 'Selecione pelo menos uma opção.'
    formularioValido = false
  }

  // Validação da data
  if (!formulario.data) {
    erros.data = 'Informe a data do ocorrido.'
    formularioValido = false
  }

  // Validação do local
  if (!formulario.local.trim()) {
    erros.local = 'Informe o local do ocorrido.'
    formularioValido = false
  }

  // Se houver algum erro, não envia
  if (!formularioValido) {
    return
  }

  // Salva os dados
  localStorage.setItem(
    'denuncia',
    JSON.stringify(formulario)
  )

  // Vai para a revisão
  window.location.href = '/revisar-denuncia'
}

</script>

<template>
  <form class="formulario" @submit.prevent="enviarDenuncia">

    <div class="campo-relato">

      <label for="relato">Conte o que aconteceu:</label>

      <textarea id="relato" v-model="formulario.relato" placeholder="Descreva a situação da forma que se sentir confortável..."></textarea>
      
      <p v-if="erros.relato" class="mensagem-erro">
      {{ erros.relato }}
      </p>

    </div>


    <!-- UPLOADS -->

    <div class="arquivos">

      <UploadArquivos
        titulo="Adicionar fotos:"
        tipo="foto"
      />

      <UploadArquivos
        titulo="Adicionar prints:"
        tipo="print"
      />

      <UploadArquivos
        titulo="Adicionar áudios:"
        tipo="audio"
      />

    </div>


    <!-- TIPO DE SITUAÇÃO -->

    <div class="campo-situacao">

      <label class="titulo-campo">Tipo de situação:</label>

      <div class="opcoes-situacao">

        <label class="opcao">
          <input v-model="formulario.situacoes" type="checkbox" value="Assédio">
          <span>Assédio</span>
        </label>


        <label class="opcao"> 
          <input v-model="formulario.situacoes" type="checkbox" value="Violência">
          <span>Violência</span>
        </label>


        <label class="opcao">
          <input v-model="formulario.situacoes" type="checkbox" value="Ameaça">
          <span>Ameaça</span>
        </label>


        <label class="opcao">
          <input v-model="formulario.situacoes" type="checkbox" value="Bullying">
          <span>Bullying</span>
        </label>


        <label class="opcao">
          <input v-model="formulario.situacoes" type="checkbox" value="Discriminação">
          <span>Discriminação</span>
        </label>


        <label class="opcao">
          <input v-model="formulario.situacoes" type="checkbox" value="Outro">
          <span>Outro</span>
        </label>

        <p v-if="erros.situacoes" class="mensagem-erro">
        {{ erros.situacoes }}
        </p>

      </div>

    </div>


    <!-- DATA -->

    <div class="campo">

      <label for="data">Data do ocorrido:</label>
      <input id="data" v-model="formulario.data" type="date">

      <p v-if="erros.data" class="mensagem-erro">
      {{ erros.data }}
      </p>

    </div>


    <!-- LOCAL -->

    <div class="campo">

      <label for="local">Local do ocorrido:</label>
      <input id="local" v-model="formulario.local" type="text" placeholder="Onde aconteceu?">

      <p v-if="erros.local" class="mensagem-erro">
      {{ erros.local }}
      </p>

    </div>


    <!-- ANÔNIMA -->

    <label class="opcao-anonima">

      <input
        v-model="formulario.anonima"
        type="checkbox"
      >

      <span>
        Desejo permanecer anônima.
      </span>

    </label>


    <!-- INFORMAÇÕES OPCIONAIS -->

    <div class="informacoes">

      <h2>
        Informações opcionais:
      </h2>


      <label for="nome">
        Nome (opcional)
      </label>

      <input
        id="nome"
        v-model="formulario.nome"
        type="text"
        placeholder="Como prefere ser chamada?"
      >


      <label for="contato">
        Contato (opcional)
      </label>

      <input
        id="contato"
        v-model="formulario.contato"
        type="text"
        placeholder="E-mail ou telefone para retorno"
      >

    </div>


    <!-- BOTÃO -->

    <div class="area-botao">

      <AppButton type="submit">
        Enviar denúncia
      </AppButton>

    </div>


    <p class="aviso">
      Seus dados serão protegidos e tratados com confidencialidade
    </p>

  </form>
</template>

<style scoped>
.formulario {
  width: 950px;
  max-width: calc(100% - 40px);
  margin: 30px auto;
  padding: 32px 35px 28px;
  background-color: #fff0dc;
  border-radius: 20px;
  color: #65071d;
  box-shadow: 2px 8px 10px #65071d;
}


/* RELATO */

.campo-relato {
  margin-bottom: 28px;
}

.campo-relato label,
.titulo-campo,
.campo label,
.informacoes label {
  display: block;
  margin-bottom: 7px;
  color: #65071d;
  font-size: 1.1rem;
  font-weight: 600;
}

.campo-relato textarea {
  width: 100%;
  height: 110px;
  padding: 12px;
  resize: none;
  border: 1px solid #a96a78;
  border-radius: 8px;
  background-color: #fffaf5;
  outline: none;
  color: #65071d;
  font-family: inherit;
  font-size: 1.0rem;
}

.campo-relato textarea::placeholder {
  color: #9b737b;
}


/* UPLOADS */

.arquivos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 28px;
}


/* SITUAÇÕES */

.campo-situacao {
  margin-bottom: 30px;
}

.opcoes-situacao {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 25px;
}

.opcao {
  height: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
  border-radius: 7px;
  background-color: #f7a9c2;
  cursor: pointer;
  font-size: 1.0rem;
}

.opcao input {
  width: 12px;
  height: 12px;
  accent-color: #65071d;
}


/* DATA E LOCAL */

.campo {
  width: 45%;
  margin-bottom: 27px;
}

.campo input {
  width: 100%;
  height: 30px;
  padding: 7px 10px;
  border: 1px solid #efb6c6;
  border-radius: 8px;
  background-color: #fffaf5;
  color: #65071d;
  font-family: inherit;
  font-size: 1.0rem;
  outline: none;
}


/* ANÔNIMA */

.opcao-anonima {
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 8px;
  padding: 7px 12px;
  margin-bottom: 30px;
  border-radius: 7px;
  background-color: #f7a9c2;
  cursor: pointer;
  font-size: 1.0rem;
}

.opcao-anonima input {
  width: 12px;
  height: 12px;
  accent-color: #65071d;
}


/* INFORMAÇÕES */

.informacoes {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.informacoes h2 {
  margin: 0 0 5px;
  color: #65071d;
  font-size: 1.3rem;
}

.informacoes input {
  width: 100%;
  height: 30px;
  padding: 7px 10px;
  margin-bottom: 7px;
  border: 1px solid #efb6c6;
  border-radius: 8px;
  background-color: #fffaf5;
  outline: none;
  color: #65071d;
  font-family: inherit;
  font-size: 1.0rem;
}


/* BOTÃO */

.area-botao {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}


/* AVISO */

.aviso {
  margin: 10px 0 0;
  text-align: center;
  color: #65071d;
  font-size: 1.0rem;
  font-weight: 600;
}

.mensagem-erro {
  margin-top: 5px;
  margin-bottom: 10px;
  color: #b00020;
  font-size: 1.0rem;
  font-weight: 600;
}

/* RESPONSIVIDADE */

@media (max-width: 700px) {

  .formulario {
    padding: 25px 20px;
  }

  .arquivos {
    gap: 12px;
  }

}


@media (max-width: 500px) {

  .arquivos {
    grid-template-columns: 1fr;
  }

  .campo {
    width: 100%;
  }

  .opcoes-situacao {
    grid-template-columns: 1fr;
  }

}
</style>