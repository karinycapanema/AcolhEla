<script setup>
import FormDenuncia from '@/components/Denuncia/FormDenuncia.vue';
</script>
<template>
  <main class="pagina-denuncia">

    <section class="titulo-pagina">
      <h1>Desejo Denunciar</h1>

      <p>
        Você não está sozinha(o).
      </p>
    </section>

    <FormDenuncia />

  </main>
</template>

<style scoped>
.pagina-denuncia {
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
}

.titulo-pagina {
  text-align: center;
  padding: 45px 20px 30px;
}

.titulo-pagina h1 {
  margin: 0;
  color: #65071d;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2.5rem;
  font-weight: bold;
}

.titulo-pagina p {
  margin: 5px 0 0;
  color: #65071d;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.4rem;
}
</style>