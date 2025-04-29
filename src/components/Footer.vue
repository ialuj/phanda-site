<template>
  <footer class="bg-dark text-white text-center py-3 mt-5">
    <div class="container-fluid">
      <p class="mb-0">&copy; {{ currentYear }} {{ $t("copyRight") }}</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
