<template>
  <section id="contacto" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5 fw-bold icons">{{ $t("contactUsTitle") }}</h2>
      <form class="row g-3">
        <!-- Título -->
        <div class="col-md-12">
          <label for="titulo" class="form-label icons">{{
            $t("contactUsTitleField")
          }}</label>
          <div class="input-group">
            <span class="input-group-text"
              ><i class="fas fa-heading icons"></i
            ></span>
            <input
              type="text"
              class="form-control"
              id="titulo"
              :placeholder="$t('contactUsTitlePlaceholder')"
            />
          </div>
        </div>

        <!-- E-mail -->
        <div class="col-md-12">
          <label for="email" class="form-label icons">{{
            $t("contactUsEmailField")
          }}</label>
          <div class="input-group">
            <span class="input-group-text"
              ><i class="fas fa-envelope icons"></i
            ></span>
            <input
              type="email"
              class="form-control"
              id="email"
              :placeholder="$t('contactUsEmailPlaceholder')"
            />
          </div>
        </div>

        <!-- Descrição -->
        <div class="col-md-12">
          <label for="descricao" class="form-label icons">{{
            $t("contactUsDescriptionField")
          }}</label>
          <div class="input-group">
            <span class="input-group-text"
              ><i class="fas fa-comment-dots icons"></i
            ></span>
            <textarea
              class="form-control"
              id="descricao"
              rows="4"
              :placeholder="$t('contactUsDescriptionPlaceholder')"
            ></textarea>
          </div>
        </div>

        <!-- Botão de Enviar -->
        <div class="col-12 text-center">
          <button type="submit" class="btn mt-3 px-5">
            <i class="fas fa-paper-plane btn-text"></i>
            <span class="btn-text">{{ $t("sendOptionLabel") }}</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
<style scoped>
.btn {
  background-color: #027906; /* Cor primária ajustada para o tema */
}

.btn-text {
  color: white;
  font-weight: bold;
}

.icons {
  color: #027906;
}
</style>
