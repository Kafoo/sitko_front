const path = require("path");

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
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@c": path.resolve(__dirname, "./src/vue/components")
      },
      extensions: ['.js', '.vue', '.json']
    }
  }

};
