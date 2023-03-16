import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AppFooter from "./components/AppFooter.vue";
import BackButton from "./components/BackButton.vue";
import DarkLogo from "./components/DarkLogo.vue";
import WorkoutCard from "./components/WorkoutCard.vue";
import "./index.css";

const app = createApp(App).use(createPinia()).use(router);
app.component("AppFooter", AppFooter);
app.component("BackButton", BackButton);
app.component("DarkLogo", DarkLogo);
app.component("WorkoutCard", WorkoutCard);
app.mount("#app");
