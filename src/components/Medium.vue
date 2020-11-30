<template>
  <v-row class="pt-4" cols="12">
    <v-col lg="4" md="6" sm="12" v-for="post in posts" :key="post.link">
      <v-card hover>
        <img
          class="card-img-top"
          height="225px"
          width="100%"
          :alt="shortenText(post.title, 0, 30)"
          src="https://miro.medium.com/max/1200/1*jfdwtvU6V6g99q3G7gq7dQ.png"
          data-holder-rendered="true"
        />
        <v-card-title>
          <v-row>
            <v-col class="text-left">
              <v-avatar size="32" class="mr-2">
                <img
                  style="height: auto"
                  alt="Luiz Bartolomeu - Web Application Software Engineer"
                  src="https://avatars1.githubusercontent.com/u/8986786?s=460&amp;u=db9c7a23f00980e27f7a1c496d0327d736d70a92&amp;v=4"
                />
              </v-avatar>
              {{ shortenText(post.title, 0, 50) }}

              {{ post.title.length > 50 ? "..." : "" }}
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text class="text-left">
          {{ "..." + shortenText(toText(post.content), 60, 230) + "..." }}
        </v-card-text>
        <v-card-actions class="text-xs-center">
          <v-row>
            <v-col>
              <p>{{ "@" + username }}</p>
            </v-col>
            <v-col>
              <small class="text-muted">{{
                shortenText(post.pubDate, 0, 10)
              }}</small>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
export default {
  name: "Medium",
  props: ["username"],
  data: function () {
    return {
      posts: {},
    };
  },
  beforeMount() {
    this.getDataFromApi();
  },
  methods: {
    getDataFromApi: async function () {
      await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@" +
          this.username
      )
        .then((res) => res.json())
        .then((data) => {
          // Fillter the array
          this.posts = data.items; //This is an array with the content. No feed, no info about author etc..
          // const posts = res.filter((item) => item.categories.length > 0); // That's the main trick* !
        });
    },
    toText: function (node) {
      let tag = document.createElement("div");
      tag.innerHTML = node;
      node = tag.innerText;
      return node;
    },

    shortenText: function (text, startingPoint, maxLength) {
      return text.length > maxLength
        ? text.slice(startingPoint, maxLength)
        : text;
    },
  },
};
</script>

<style lang="stylus"></style>