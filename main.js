import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import componentA from "./component/ComponentA.vue";

createApp({
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  components: {
    "a-component": componentA,
  },
}).mount("#app");
