<template>
  <header class="header text-white text-center py-5 w-100">
    <div class="w-100 px-0">
      <h1 class="display-5 fw-bold">{{ $t("headerTitle") }}</h1>
      <p class="lead">{{ $t("headerMessage") }}</p>
    </div>
  </header>
</template>

<style scoped>
.header {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #027906;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
</style>
