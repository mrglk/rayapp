import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

import "./assets/styles/fonts.css";
import "./assets/styles/vars.css"
import "./assets/styles/global.css";

import App from './App.vue'
import TopBar from "./components/TopBar.vue";
import NavigationBar from "./components/NavigationBar.vue";
import Icon from "./components/Icon.vue";
import TopCard from "./components/TopCard.vue";
import Card from "./components/Card.vue";
import ExploreLink from "./components/ExploreLink.vue";
import ProgressBar from "./components/ProgressBar.vue";
import Question from "./components/Question.vue";
import Home from "./views/Home.vue";
import Learning from "./views/Learning.vue";

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory('/rayapp/'),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/learning", name: "Learning", component: Learning },
  ],
});

const app = createApp(App);
app.component("NavigationBar", NavigationBar);
app.component("Icon", Icon);
app.component('TopCard', TopCard);
app.component("ProgressBar", ProgressBar);
app.component('TopBar', TopBar);
app.component('Card', Card);
app.component("ExploreLink", ExploreLink);
app.component('Question', Question);
app.component("Learning", Learning);
app.component('Home', Home);
app.use(router);
app.use(pinia);
app.mount('#app');