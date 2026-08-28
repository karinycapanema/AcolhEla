<template>
 <section class="direitos">
      <h2>Seus Direitos</h2>

      <div class="direitos-grid">

        <div class="direito">
          <h3>Direito à Proteção</h3>
          <p>
            Você tem direito a medidas de proteção para garantir sua segurança.
          </p>
        </div>

        <div class="direito">
          <h3>Direito à Justiça</h3>
          <p>
            Você pode buscar orientação jurídica e ter acesso à justiça.
          </p>
        </div>

        <div class="direito">
          <h3>Direito ao Atendimento</h3>
          <p>
            Você tem direito a um atendimento acolhedor, respeitoso e humanizado.
          </p>
        </div>

      </div>
    </section>
</template>

<style scoped>
.direitos {
  width: 86%;
  margin: 0 auto 60px;
}

.direitos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.direito {
  min-height: 190px;
  padding: 30px;
  border-radius: 18px;
  background: #fdf1e2;
}

.direito h3 {
  margin-top: 0;
  font-size: 23px;
}

.direito p {
  font-size: 19px;
  line-height: 1.6;
}

</style>