<template>
  <div class="album py-5 bg-light" id="Jobs">
    <div class="container">
      <h4>Relevant Jobs</h4>
      <v-row class="pt-4" cols="12">
        <v-col col="12" xl="3" lg="4" v-for="(job, id) in jobs" :key="id">
          <job-card
            :clientName="job.client"
            :clientDescription="job.description"
            :clientUrl="job.link"
            :jobName="job.name"
            :jobProject="job.project"
            :jobImg="job.img"
            :tags="job.tags"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import JobCard from "../widget/JobCard";

export default {
  name: "Jobs",
  components: {
    JobCard,
  },
  data: () => ({
    jobs: require("@/../db/jobs").jobs,
  }),
};
</script>

<style>
</style>