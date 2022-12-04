import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import VueSocialSharing from "vue-social-sharing";

library.add(fas, far, fab);
const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueSocialSharing);

app.mount("#app");
