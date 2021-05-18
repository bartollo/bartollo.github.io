<template>
  <v-app>
    <div id="app">
      <Header />
      <body-section-apresentation />
      <body-section-jobs />
      <body-section-journey />
      <body-section-artices />
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Header from "./components/layout/Header.vue";

import Apresentation from "./components/layout/Apresentation.vue";
import Jobs from "./components/layout/Jobs.vue";
import Journey from "./components/layout/Journey.vue";
import Articles from "./components/layout/Articles.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    "body-section-apresentation": Apresentation,
    "body-section-jobs": Jobs,
    "body-section-journey": Journey,
    "body-section-artices": Articles,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a:link {
  text-decoration: none;
}
</style>
