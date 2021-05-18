<template>
  <div class="container mt-5 mb-5" id="Journey">
    <div class="row">
      <div class="col-md-9 offset-md-1">
        <h4>Journey</h4>
        <Timeline
          :timeline-items="journey"
          :unique-year="true"
          :show-day-and-month="true"
          order="desc"
          class="pt-4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "timeline-vuejs";

export default {
  name: "Journey",
  components: {
    Timeline,
  },
  data: () => ({
    journey: require("@/../db/journey").journey,
  }),
};
</script>

<style sccoped>
.wrapper-timeline {
  list-style-type: none;
  position: relative;
}
.timeline {
  max-width: none !important;
}
</style>