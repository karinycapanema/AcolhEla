<script setup>
import Tipos from './Tipos.vue'
import Alertas from './Alertas.vue'
import Lei from './Lei.vue'
import Ajuda from './Ajuda.vue'
import Direitos from './Direitos.vue'
import Introducao from './Introducao.vue'
</script>

<template>
  <Introducao />

  <Tipos />

  <Alertas />

  <Lei />

  <Direitos />

  <Ajuda />
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  max-width: none;
  min-width: 0;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  min-width: 0;
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  background: #ffffff;
}

.pagina {
  width: 100%;
  max-width: none;
  background: #ffffff;
  color: #4a0011;
}

a {
  text-decoration: none;
}

.logo {
  color: #ffffff;
  font-size: 28px;
}

.menu {
  display: flex;
  align-items: center;
  gap: 34px;
}

.menu a {
  color: #ffffff;
  font-size: 15px;
}

.contato {
  padding: 10px 25px;
  border-radius: 25px;
  background: #4a0011;
}

.ajuda {
  width: 75%;
  margin: 0 auto 60px;
  padding: 45px 60px;
  text-align: center;
  border-radius: 25px;
  color: #ffffff;
  background: #4a0011;
}

.ajuda h2 {
  margin: 0 0 20px;
  font-size: 32px;
}

.ajuda p {
  max-width: 750px;
  margin: 0 auto 30px;
  font-size: 18px;
  line-height: 1.6;
}

.botoes-ajuda {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.botoes-ajuda a {
  padding: 13px 30px;
  border-radius: 25px;
  color: #4a0011;
  background: #fdf1e2;
  font-size: 16px;
}

.redes {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  font-size: 13px;
}

.introducao,
.tipos-conteudo,
.alertas,
.lei,
.lei-card,
.direito,
.ajuda {
  box-shadow: 0 5px 15px rgba(74, 0, 17, 0.2);
}

h1,
h2,
h3 {
  text-shadow: 1px 2px 3px rgba(74, 0, 17, 0.3);
}

</style>