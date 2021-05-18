<template>
  <v-card hover align="left" class="job-card">
    <img
      class="card-img"
      height="225px"
      width="100%"
      :src="require(`@/../public/imgs/${jobImg}`)"
      :alt="clientDescription"
    />

    <v-card-text style="height: 120px" class="mb-3">
      <h4 class="mb-2">{{ clientName }}</h4>
      {{ jobProject }}
    </v-card-text>
    <p style="height: 90px" class="py-3 px-5">
      <v-chip
        v-for="(tag, id) in tags"
        :key="id"
        class="white--text mr-1 mb-1"
        color="blue-grey lighten-2"
        small
      >
        {{ tag.name }}
      </v-chip>
    </p>
    <v-card-actions style="height: 50px">
      <v-btn
        v-if="clientUrl != ''"
        color="black"
        text
        width="100%"
        :href="clientUrl"
        target="_blank"
      >
        {{ clientName }}
        <v-icon small class="ml-2"> mdi-open-in-new </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "JobCard",
  props: {
    clientName: String,
    clientDescription: String,
    clientUrl: String,
    jobName: String,
    jobProject: String,
    jobImg: String,
    tags: {
      name: String,
      color: String,
      icon: String,
    },
  },
};
</script>

<style scooped>
#chips-container .v-chip.complete {
  background: #3cd1c2;
}
#chips-container .v-chip.ongoing {
  background: #ffaa2c;
}
#chips-container .v-chip.overdue {
  background: #f83e70;
}

.job-card {
  min-width: 300px;
}

.card-img {
  max-width: 100%;
  width: auto;
  height: auto;
}
</style>