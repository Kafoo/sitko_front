const path = require("path");

module.exports = {

  publicPath: '/frontend/dist/',

  devServer: {
    host: "localhost"
  },

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
        "@c": path.resolve(__dirname, "./src/vue/components"),
        "@use": path.resolve(__dirname, "./src/ts/functions/composition")
      },
      extensions: [".js", ".vue", ".json"]
    }
  }
};
