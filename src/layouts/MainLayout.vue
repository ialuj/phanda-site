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
  overflow-x: hidden;
  margin-top: 105px;
}
</style>
