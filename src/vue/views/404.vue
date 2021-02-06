<template>
  <div class="d-flex flex-column align-center pt-10">
    <v-img
      src="https://res.cloudinary.com/dyigive9u/image/upload/t_medium/v1609179000/t-shirt-link-dead_hjbqry.jpg"
      max-width="300px"
      width="90%"
    >
    </v-img>

    <div class="text-h4 mt-5 font-weight-bold">
      {{ $t("oops") | capitalize }} !
    </div>

    <div class="text-h5 mt-2 mb-4">
      {{ $t("404") | capitalize }}
    </div>

    <v-btn color="success" to="/" small>
      {{ $t("home") | capitalize }}
    </v-btn>
  </div>
</template>
