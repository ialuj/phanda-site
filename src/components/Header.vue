<template>
  <header class="header bg-primary text-white text-center py-5 w-100">
    <div class="w-100 px-0">
      <h1 class="display-5 fw-bold">{{ $t("headerTitle") }}</h1>
      <p class="lead">{{ $t("headerMessage") }}</p>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #007bff; /* Cor primária ajustada para o tema */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Garante que o cabeçalho fique sobre o conteúdo */
  padding: 20px;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Ajusta o corpo para não ficar atrás do cabeçalho fixo */
body {
  margin-top: 120px; /* Aumente a altura para compensar o cabeçalho fixo */
}
</style>
