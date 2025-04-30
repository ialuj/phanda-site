<template>
  <section id="servicos" class="py-5 bg-light">
    <div class="container text-center px-0 position-relative">
      <h2 class="mb-5 fw-bold arrow">{{ $t("serviceSectionTitle") }}</h2>

      <div class="scroll-wrapper position-relative">
        <!-- Botão Esquerdo -->
        <button class="scroll-btn left" @click="scroll('left')">
          <i class="bi bi-chevron-left arrow"></i>
        </button>

        <!-- Lista de serviços com rolagem horizontal -->
        <div class="scroll-container" ref="scrollContainer">
          <div
            class="service-item"
            v-for="(servico, index) in servicos"
            :key="index"
          >
            <div class="card h-100 shadow service-card p-3 border-0">
              <div class="card-body">
                <div class="service-icon mb-3">
                  <i :class="servico.icone" :style="{ color: servico.cor }"></i>
                </div>
                <h5 class="card-title fw-semibold arrow">
                  {{ $t(`services.${servico.key}.title`) }}
                </h5>
                <p class="card-text text-muted">
                  {{ $t(`services.${servico.key}.description`) }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Botão Direito -->
        <button class="scroll-btn right" @click="scroll('right')">
          <i class="bi bi-chevron-right arrow"></i>
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const scrollContainer = ref(null);

const scroll = (direction) => {
  const container = scrollContainer.value;
  const scrollAmount = 300;
  container.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
};

const servicos = [
  { key: "web", icone: "bi bi-code-slash", cor: "#0d6efd" },
  { key: "mobile", icone: "bi bi-phone", cor: "#20c997" },
  { key: "custom", icone: "bi bi-gear-fill", cor: "#6f42c1" },
  { key: "consulting", icone: "bi bi-lightbulb-fill", cor: "#fd7e14" },
  { key: "training", icone: "bi bi-easel-fill", cor: "#dc3545" },
  { key: "network", icone: "bi bi-hdd-network-fill", cor: "#198754" },
  { key: "hosting", icone: "bi bi-server", cor: "#6610f2" },
  { key: "hardware", icone: "bi bi-laptop", cor: "#0dcaf0" },
];
</script>
<style scoped>
.arrow {
  color: #027906;
}
</style>
