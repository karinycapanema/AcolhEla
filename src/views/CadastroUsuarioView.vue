<script setup>
import FormUsuario from '@/components/CadastroUsuario/FormUsuario.vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
</script>

<template>

  <header>
    <AppHeader/>
  </header>

  <main class="cadastro">

    <section class="conteudo">
      <h1>Criar Conta</h1>

      <FormUsuario />

        <div class="icone-ajuda">
            <FontAwesomeIcon :icon="['fas', 'user-clock']"/>
        </div>

    </section>
  </main>

  <footer>
    <AppFooter />
  </footer>

</template>

<style scoped>
.cadastro {
  min-height: 100vh;
  background: #f7f7f8;
}

.conteudo {
  min-height: calc(100vh - 4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 38px 20px 20px;
}

h1 {
  margin-bottom: 46px;
  color: #4e2229;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2.5rem;
  font-weight: bold;
}

.icone-ajuda {
  width: 90px;
  height: 90px;
  margin-top: 36px;
  border-radius: 50%;
  background: #efa7b5;

  display: flex;
  align-items: center;
  justify-content: center;
}

.icone-ajuda svg {
  width: 42px;
  height: 42px;
  color: #63071d;
}

@media (max-width: 600px) {
  .conteudo {
    padding: 30px 15px 20px;
  }

  h1 {
    margin-bottom: 30px;
  }
}
</style>