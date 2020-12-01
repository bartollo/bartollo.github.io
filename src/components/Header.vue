<template>
  <div>
    <div class="navbar navbar-dark bg-dark box-shadow">
      <div class="container d-flex justify-content-between">
        <a href="#" class="navbar-brand d-flex my-0 mr-md-auto">
          <strong>Bartollo's Portfolio</strong>
        </a>
        <nav class="my-2 my-md-0 mr-md-3">
          <a class="p-2 text-white" href="#">Relevant Jobs</a>
          <a class="p-2 text-white" href="#">Journey</a>
          <a class="p-2 text-white" href="#">Articles</a>
        </nav>
        <v-bottom-sheet v-model="sheet">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="lime accent-3 text--black" v-bind="attrs" v-on="on">
              Hire Me
            </v-btn>
          </template>
          <v-list>
            <v-subheader>Contact with</v-subheader>
            <v-list-item
              class="text-left"
              v-for="tile in tiles"
              :key="tile.title"
              @click="sheet = false"
            >
              <v-list-item-avatar>
                <v-avatar size="32px" tile>
                  <img
                    :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                    :alt="tile.title"
                  />
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-title>{{ tile.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-bottom-sheet>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sheet: false,
    tiles: [
      { img: "keep.png", title: "Whatsapp" },
      { img: "inbox.png", title: "Wmail" },
      { img: "hangouts.png", title: "Linkedin" },
      { img: "messenger.png", title: "Github" },
      { img: "google.png", title: "Medium" },
    ],
  }),
};
</script>

<style scooped>
.bg-dark .text-muted {
  color: #8b8e99 !important;
}
</style>