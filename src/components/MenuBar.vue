<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark px-3 position-fixed w-100"
    style="top: 0; z-index: 1050"
  >
    <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img
          src="../assets/logo.png"
          alt="Phanda Logo"
          width="80"
          height="80"
          class="me-2"
        />
        <span class="fw-bold text-gold">Phanda Tech Solutions</span>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav text-end">
          <li class="nav-item">
            <a class="nav-link active" href="#">{{ $t("home") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sobre">{{ $t("about") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#servicos">{{ $t("services") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacto">{{ $t("contact") }}</a>
          </li>

          <!-- Idiomas -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              🌐 {{ currentLanguage.toUpperCase() }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" @click="changeLanguage('pt')"
                  >Português</a
                >
              </li>
              <li>
                <a class="dropdown-item" @click="changeLanguage('en')"
                  >English</a
                >
              </li>
              <li>
                <a class="dropdown-item" @click="changeLanguage('es')"
                  >Español</a
                >
              </li>
              <li>
                <a class="dropdown-item" @click="changeLanguage('fr')"
                  >Français</a
                >
              </li>
            </ul>
          </li>

          <!-- Redes Sociais -->
          <li class="nav-item d-flex align-items-center ms-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              class="nav-link text-light"
              ><i class="fab fa-linkedin"></i
            ></a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              class="nav-link text-light"
              ><i class="fab fa-facebook"></i
            ></a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              class="nav-link text-light"
              ><i class="fab fa-instagram"></i
            ></a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              class="nav-link text-light"
              ><i class="fab fa-twitter"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { locale } = useI18n();
const currentLanguage = ref(locale.value);

const changeLanguage = (lang) => {
  locale.value = lang;
  currentLanguage.value = lang;
};
</script>

<style scoped>
.text-gold {
  color: #c49b0f;
}

.nav-link:hover {
  color: #f0c040 !important;
}

/* Garante que o MenuBar tenha altura suficiente e não seja sobreposto */
.navbar {
  z-index: 1050; /* Garante que o menu fique acima do cabeçalho */
}
</style>
