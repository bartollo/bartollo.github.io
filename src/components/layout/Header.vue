<template>
  <div class="navbar navbar-dark bg-dark box-shadow" id="Header">
    <v-container class="d-flex justify-content-between">
      <a href="#" class="navbar-brand d-flex my-0 mr-md-auto">
        <strong>Bartollo's Portfolio</strong>
      </a>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-white" href="#Jobs" v-smooth-scroll>Relevant Jobs</a>
        <a class="p-2 text-white" href="#Journey" v-smooth-scroll>Journey</a>
        <a class="p-2 text-white" href="#Articles" v-smooth-scroll>Articles</a>
      </nav>
      <v-bottom-sheet v-model="sheet">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="lime accent-3 text--black" v-bind="attrs" v-on="on">
            Hire Me
          </v-btn>
        </template>
        <v-list>
          <v-subheader>Contact me with</v-subheader>
          <v-list-item
            class="text-left"
            v-for="item in social"
            :key="item.title"
            @click="sheet = false"
            :href="item.url"
            target="_blank"
          >
            <v-list-item-avatar>
              <v-avatar size="32px" tile>
                <v-icon :color="item.color">{{ `${item.icon}` }}</v-icon>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    sheet: false,
    social: require("@/../db/social").social,
  }),
};
</script>

<style scooped>
.bg-dark .text-muted {
  color: #8b8e99 !important;
}
</style>