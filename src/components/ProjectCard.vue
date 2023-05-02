<template>
  <div class="container my-5">
    <div class="project-card">
      <h3>{{ project.title }}</h3>
      <p>{{ project.type ? project.type.name : "---" }}</p>
      <ul
        class="tech-list"
        v-if="project.technologies && project.technologies.length > 0"
      >
        <li
          class="tech"
          v-for="project in project.technologies"
          :key="project.id"
        >
          {{ project.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    // **************************
    // FINE PROPS
  },
  // **************************
  data() {
    return {
      // **************************
      // FINE DATA E RETURN &
    };
  },
  // **************************
  computed: {
    // **************************
    // FINE COMPUTED
  },
  // **************************
  watch: {
    // **************************
    // FINE WATCH
  },
  // **************************
  methods: {
    // **************************
    // FINE METHODS
  },
  // **************************
};
</script>

<style lang="scss" scoped>
@use "../style/partials//variables" as *;
</style>
