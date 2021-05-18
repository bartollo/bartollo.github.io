<template>
  <v-row class="pt-4" cols="12">
    <v-col
      col="12"
      xl="3"
      lg="4"
      v-for="post in posts"
      :key="post.link"
      style="min-width: 350px; max-width: 460px"
    >
      <v-card hover :href="post.link" target="_blank">
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
            <v-col class="text-left" style="height: 70px">
              <p>
                <v-avatar size="24">
                  <img :src="feed.image" />
                </v-avatar>
                {{ shortenText(post.title, 0, 50) }}
                {{ post.title.length > 50 ? "..." : "" }}
              </p>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text class="text-left" style="height: 105px">
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
  props: {
    userName: String,
  },
  data: function () {
    return {
      posts: {},
      feed: {},
    };
  },
  beforeMount() {
    this.getDataFromApi();
  },
  methods: {
    getDataFromApi: async function () {
      await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@" +
          this.userName
      )
        .then((res) => res.json())
        .then((data) => {
          // Fillter the array
          this.posts = data.items;
          this.feed = data.feed; //This is an array with the content. No feed, no info about author etc..
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