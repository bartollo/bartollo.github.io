<template>
  <div class="album py-5 bg-light" id="Articles">
    <div class="container">
      <h4>Articles</h4>
      <MediumCard items="items" feed="feed"> </MediumCard>
    </div>
  </div>
</template>

<script>
import MediumCard from "../widget/MediumCard";

export default {
  name: "Articles",
  components: {
    MediumCard,
  },
  data: () => ({
    items: {},
    feed: {},
    userName: "bartollo-dev",
  }),
  methods: {
    getMediumDataFromApi: async function () {
      await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bartollo-dev"
      )
        .then((res) => res.json())
        .then((data) => {
          // Fillter the array
          this.items = data.items;
          this.feed = data.feed; //This is an array with the content. No feed, no info about author etc..
          // const posts = res.filter((item) => item.categories.length > 0); // That's the main trick* !
        });
    },
  },
};
</script>

<style>
</style>