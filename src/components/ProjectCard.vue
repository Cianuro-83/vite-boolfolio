<template>
  <div class="container my-5">
    <div class="project-card">
      <div class="card scb">
        <div class="card-body">
          <h3 class="card-title text-center fw-bold text-danger">
            {{ project.title }}
          </h3>
          <h5 class="card-subtitle mb-2 text-body-secondary">
            TIPOLOGIA:
            <span>{{ project.type ? project.type.name : "---" }}</span>
          </h5>
          <p class="card-text text-truncate">
            {{ project.description }}
          </p>
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
.scb {
  background-color: darkblue;
  display: flex;
}

.disposizione {
  display: flex;
}
</style>
