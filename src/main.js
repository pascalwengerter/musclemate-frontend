import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import WorkoutCard from "./components/WorkoutCard.vue";
import BackButton from "./components/BackButton.vue";
import DarkLogo from "./components/DarkLogo.vue";
import "./index.css";

const app = createApp(App).use(store).use(router);
app.component("WorkoutCard", WorkoutCard);
app.component("DarkLogo", DarkLogo);
app.component("BackButton", BackButton);
app.mount("#app");
