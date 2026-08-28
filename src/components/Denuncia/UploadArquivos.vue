<script setup>
import { computed, ref } from 'vue'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'

const iconeUpload = faCloudArrowUp

const props = defineProps({
  titulo: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  }
})
const arquivoSelecionado = ref('')

const tipoArquivo = computed(() => {
  if (props.tipo === 'foto') {
    return 'image/*'
  }
  if (props.tipo === 'print') {
    return 'image/*'
  }
  if (props.tipo === 'audio') {
    return 'audio/*'
  }
  return '*/*'
})

function selecionarArquivo(event) {
  const arquivo = event.target.files[0]
  if (!arquivo) {
    return
  }
  arquivoSelecionado.value = arquivo.name
}
</script>
<template>

  <div class="upload">

    <label class="titulo">
      {{ titulo }}
    </label>

    <label class="botao-upload">

      <span class="icone"><font-awesome-icon :icon="iconeUpload" class="icone-upload"/></span>

      <input
        type="file"
        :accept="tipoArquivo"
        @change="selecionarArquivo"
      >

    </label>

    <p
      v-if="arquivoSelecionado"
      class="nome-arquivo"
    >
      {{ arquivoSelecionado }}
    </p>

  </div>

</template>

<style scoped>
.upload {
  width: 100%;
}

.titulo {
  display: block;
  margin-bottom: 8px;
  color: #65071d;
  font-size: 1.0rem;
  font-weight: bold;
}

.botao-upload {
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background-color: #f7a9c2;
  cursor: pointer;
  transition: 0.2s;
}

.botao-upload:hover {
  background-color: #f3a0bb;
}

.icone {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #65071d;
}

.svg-inline--fa{
 width: 45px;
  height: 45px;
}

.botao-upload input {
  display: none;
}

.nome-arquivo {
  margin: 5px 0 0;
  overflow: hidden;
  color: #65071d;
  font-size: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>