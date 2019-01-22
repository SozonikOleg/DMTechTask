import Vue from "vue";
import App from "./App.vue";

import Header from "./Header/Header.vue";

Vue.component("AppHeader", Header);

new Vue({
  el: "#app",
  render: h => h(App)
});
