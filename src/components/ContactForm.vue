<template>
  <section id="contacto" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5 fw-bold">{{ $t("contactUsTitle") }}</h2>
      <form class="row g-3">
        <!-- Título -->
        <div class="col-md-12">
          <label for="titulo" class="form-label">{{
            $t("contactUsTitleField")
          }}</label>
          <div class="input-group">
            <span class="input-group-text"><i class="fas fa-heading"></i></span>
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
          <label for="email" class="form-label">{{
            $t("contactUsEmailField")
          }}</label>
          <div class="input-group">
            <span class="input-group-text"
              ><i class="fas fa-envelope"></i
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
          <label for="descricao" class="form-label">{{
            $t("contactUsDescriptionField")
          }}</label>
          <div class="input-group">
            <span class="input-group-text"
              ><i class="fas fa-comment-dots"></i
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
          <button type="submit" class="btn btn-primary mt-3 px-5">
            <i class="fas fa-paper-plane"></i> {{ $t("sendOptionLabel") }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
