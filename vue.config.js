module.exports = {
  transpileDependencies: [
    "vuetify",
    "vue-clamp",
    "resize-detector",
    "vuex-module-decorators"
  ],

  pluginOptions: {
    i18n: {
      locale: "fr",
      fallbackLocale: "fr",
      localeDir: "translations",
      enableInSFC: true
    }
  }
};
