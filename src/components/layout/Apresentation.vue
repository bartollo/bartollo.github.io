<template>
  <div class="album py-5 bg-white" id="Apresentation">
    <v-jumbotron class="text-center">
      <v-container fluid fill-height grid-list-xl>
        <v-layout row wrap align-center>
          <v-flex xs12 md8 text-xs-center class="left-side py-5">
            <v-card id="jumbo-card" flat>
              <h1 class="jumbotron-heading pb-2">
                Hello, my name is Luiz Bartolomeu.
              </h1>
              <p class="lead text-muted">
                I am a <mark>Web Application Software Engineer</mark> with
                <mark
                  >{{ moment().diff(moment("2005-04-01"), "years") }} years
                  software development experience</mark
                >,
                <mark
                  >Specialist's Degree in Software Development for WEB and
                  Bachelor's Degree in Information Systems</mark
                >
                by UNIFACS - Laureate Internacional Universities, BA, BRAZIL.
              </p>
              <p class="lead text-muted">
                Feel free to take a look at my most relevant projects, my
                journey, my articles and even my github.
              </p>
              <p class="lead text-muted">
                In the <mark>last 2 years I have been working</mark> more
                frequently with
                <mark
                  >Laravel, Codeigniter, Firestore, Sql Server, Postgresql and
                  VUE.js.</mark
                >
              </p>
              <p class="lead text-muted">
                Remotely available UTC - 1 to UTC 8.
                <mark>luizbart@gmail.com</mark>
              </p>
              <p></p>
            </v-card>
          </v-flex>
          <v-flex xs12 md4 text-xs-center class="right-side">
            <v-avatar width="260" height="260" class="mb-2">
              <img
                style="height: auto"
                alt="Luiz Bartolomeu - Web Application Software Engineer"
                src="https://avatars1.githubusercontent.com/u/8986786?s=460&amp;u=db9c7a23f00980e27f7a1c496d0327d736d70a92&amp;v=4"
              />
            </v-avatar>
            <v-flex justify-center flex-column>
              <social-fab
                v-for="(item, id) in social"
                :key="id"
                :tooltipMessage="item.tooltipMessage"
                :url="item.url"
                :icon="item.icon"
              />
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>

<script>
import SocialFab from "../widget/SocialFab";

export default {
  name: "Apresentation",
  components: {
    SocialFab,
  },
  data: () => ({
    social: require("@/../db/social").social,
  }),
};
</script>

<style scooped>
@media (max-width: 959px) {
  .left-side {
    order: 2;
  }

  .right-side {
    order: 1;
  }
}
</style>