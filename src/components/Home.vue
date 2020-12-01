<template>
  <div>
    <v-jumbotron class="text-center">
      <v-container fluid fill-height grid-list-xl>
        <v-layout row wrap align-center>
          <v-flex xs12 md8 text-xs-center my-4 class="left-side py-5">
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
              <p>
                <!-- <a href="#" class="btn btn-primary my-2 mr-2">My Journey</a>
          <a href="#" class="btn btn-primary my-2">My Articles</a>
          <a href="#" class="btn btn-secondary my-2">Secondary action</a> -->
              </p>
            </v-card>
          </v-flex>
          <v-flex xs12 md4 text-xs-center my-4 class="right-side">
            <v-avatar width="260" height="260" class="mb-2">
              <img
                style="height: auto"
                alt="Luiz Bartolomeu - Web Application Software Engineer"
                src="https://avatars1.githubusercontent.com/u/8986786?s=460&amp;u=db9c7a23f00980e27f7a1c496d0327d736d70a92&amp;v=4"
              />
            </v-avatar>
            <v-flex justify-center flex-column>
              <social-fab
                name="Linkedin"
                url="https://www.linkedin.com/in/luiz-bartolomeu"
                icon="mdi-linkedin"
              />
              <social-fab
                name="GitHub"
                url="https://github.com/bartollo/"
                icon="mdi-github-circle"
              />

              <social-fab
                name="Medium"
                url="https://medium.com/@bartollo.dev"
                icon="mdi-medium"
              />
              <social-fab
                name="Send me a WhatsaApp message!"
                url="https://wa.me/?text=Hello%20Luiz, how are you?%20+557198219406"
                icon="mdi-whatsapp"
              />
              <social-fab
                name="Send me an E-mail!"
                url="mailto:luizbart@gmail.com.br"
                icon="mdi-email"
              />
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>

    <div class="album py-5 bg-light">
      <div class="container">
        <h4>Relevant Jobs</h4>
        <v-row class="pt-4" cols="12">
          <v-col
            lg="4"
            xl="3"
            md="6"
            sm="12"
            v-for="item in jobs"
            :key="item.name"
          >
            <v-card hover>
              <img
                class="card-img-top"
                height="225px"
                width="100%"
                :src="require(`@/../public/imgs/${item.img}`)"
                :alt="item.description"
              />

              <v-card-text>
                {{ item.project }}
                <h3 class="mb-2"></h3>
                <v-chip
                  v-for="tag in item.tags"
                  :key="tag.name"
                  class="white--text mr-1 mb-1"
                  :color="tag.color"
                  small
                >
                  <v-icon left> mdi-label </v-icon>
                  {{ tag.name }}
                </v-chip>
              </v-card-text>
              <v-card-actions>
                <v-btn color="black" text width="100%">
                  {{ item.client }}
                  <v-icon small class="ml-2"> mdi-open-in-new </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-9 offset-md-1">
          <h4>Journey</h4>
          <Timeline
            :timeline-items="dataTimeline"
            :message-when-no-items="messageWhenNoItems"
            :unique-year="true"
            :show-day-and-month="true"
            order="desc"
            class="pt-4"
          />
        </div>
      </div>
    </div>
    <div class="album py-5 bg-light">
      <div class="container">
        <h4>Articles</h4>
        <Medium username="bartollo.dev"> </Medium>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "timeline-vuejs";
import Medium from "./Medium";
import SocialFab from "./SocialFab";

export default {
  name: "App",
  components: {
    Timeline,
    Medium,
    SocialFab,
  },
  data: () => ({
    jobs: require("@/../db/jobs").jobs,
    messageWhenNoItems: "There arent items",
    projects: [
      {
        color: "ongoing",
      },
      {
        color: "complete",
      },
      {
        color: "overdue",
      },
    ],
    dataTimeline: [
      {
        from: new Date(2005, 4),
        title:
          'Treinner at <a target="_blank" href="https://www.uniftc.edu.br/">Uniftc University, Ba, Brazil</a>',
        description:
          "Developing Academic Systems with Sql Server, Asp and Php.",
        color: "rgb(204 213 219)",
      },
      {
        from: new Date(2007, 4),
        title:
          'Junior Developer at <a target="_blank" href="https://www.uniftc.edu.br/">Uniftc University, Ba, Brazil</a>',
        description:
          "Developing Academic Systems with Sql Server, Asp and Php.",
        color: "rgb(204 213 219)",
      },
      {
        from: new Date(2008, 4),
        title:
          'Senior Developer at <a target="_blank" href="https://www.uniftc.edu.br/">Uniftc University, Ba, Brazil</a>',
        description:
          "Developing Academic Systems with Sql Server, Asp and Php.",
        color: "rgb(204 213 219)",
      },
      {
        from: new Date(2009, 7),
        title:
          'Bachelor\'s Degree, B. Sc. Information Systems at <a target="_blank" href="http://www.unifacs.br/">UNIFACS, Ba, Brazil</a>',
        description:
          "Article: WEBVOTE: A SERVICE TO SUPPORT THE VOTING PROCESS IN BRAINSTORMING ACTIVITIES IN A VIRTUAL LEARNING ENVIRONMENT.",
        color: "#ffc107",
      },
      {
        from: new Date(2010, 7),
        title:
          'Developer at <a target="_blank" href="https://www.ba.senac.br/">SENAC, Ba, Brazil</a>',
        description:
          "Developing Systems for a public institution focused on teaching with Sql Server, Java, Maker All(R),Php.",
        color: "rgb(204 213 219)",
      },
      {
        from: new Date(2012, 1),
        title: "CEO at Navegart, Ba, Brazil",
        description: "Foundation of systems development company.",
        color: "#4f4db1",
      },

      {
        from: new Date(2013, 7),
        title:
          'Leader Developer Team at <a target="_blank" href="http://www.meioambiente.ba.gov.br/">Bahia State Meio Ambiente Department</a> by <a target="_blank" href="https://www.ctis.com.br/">CTIS, Ba, Brazil</a>',
        description: "Leadering Developer Team.",
        color: "rgb(204 213 219)",
      },
      {
        from: new Date(2014, 7),
        title:
          'Developer at <a target="_blank" href="http://www.imap.org.br/">IMAP, Ba, Brazil</a>',
        description:
          "Developing Systems for Brazilian municipalities and states with Sql Server, Mysql, CodeIgniter, Php, Jquery, Javascript.",
        color: "rgb(204 213 219)",
      },
      {
        from: new Date(2018, 7),
        title:
          'Specialist\'s Degree, Lato Sensu Graduate, Software Development for WEB at <a target="_blank" href="http://www.unifacs.br/">UNIFACS, Ba, Brazil</a>',
        description:
          "Article: MIGRATING A RESPONSIVE WEB APP SYSTEM FOR A WEB PROGRESSIVE APPLICATION.",
        color: "#ffc107",
      },
    ],
  }),
};
</script>

<style>
mark {
  background-color: #ececec !important;
}
.wrapper-timeline {
  list-style-type: none;
  position: relative;
}
.timeline {
  max-width: none !important;
}

#chips-container .v-chip.complete {
  background: #3cd1c2;
}
#chips-container .v-chip.ongoing {
  background: #ffaa2c;
}
#chips-container .v-chip.overdue {
  background: #f83e70;
}

@media (max-width: 959px) {
  .left-side {
    order: 2;
  }

  .right-side {
    order: 1;
  }
}
</style>
