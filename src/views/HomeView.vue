<template>
  <div class="home">

    <AppHeader />


    <main>
      <HeroSection />

      <SobreSection />

      <TiposViolenciaSection />

      <AjudaSection />

      <ParticiparSection />

      <MapaAcolhimentoSection/>
    </main>


    <AppFooter />

  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import SobreSection from '@/components/home/SobreSection.vue'
import TiposViolenciaSection from '@/components/home/TiposViolenciaSection.vue'
import AjudaSection from '@/components/home/AjudaSection.vue'
import ParticiparSection from '@/components/home/ParticiparSection.vue'
import MapaAcolhimentoSection from '@/components/home/MapaAcolhimentoSection.vue'
</script>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
}

main {
  width: 100%;
}
</style>
