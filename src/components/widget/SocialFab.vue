<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        dark
        fab
        bottom
        color="blue-grey darken-4"
        small
        :href="url"
        target="_blank"
        class="mr-2"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>{{ `${icon}` }}</v-icon>
      </v-btn>
    </template>
    <span>{{ tooltip }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "SocialFab",
  props: {
    tooltipMessage: String,
    url: String,
    icon: String,
    color: String,
  },
};
</script>