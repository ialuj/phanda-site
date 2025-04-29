<template>
  <div class="page-container">
    <!-- Navbar -->
    <MenuBar />

    <!-- Hero / Página Inicial -->
    <Header />

    <!-- Sobre Nós -->
    <AboutUs />

    <!-- Nossos Serviços -->
    <Service />

    <!-- Contacto -->
    <ContactForm />

    <!-- Rodapé -->
    <Footer />
  </div>
</template>

<script setup>
import AboutUs from "@/components/AboutUs.vue";
import ContactForm from "@/components/ContactForm.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import MenuBar from "@/components/MenuBar.vue";
import Service from "@/components/Service.vue";
</script>

<style scoped>
.page-container {
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  margin-top: 120px; /* Ajuste a altura para garantir que o conteúdo não fique escondido pelo MenuBar fixo */
}
</style>
