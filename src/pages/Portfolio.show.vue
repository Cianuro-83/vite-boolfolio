<template>
  <DefaultLayaout>
    <template v-if="project">
      <div class="container">
        <h1 class="text-center text-uppercase fw-semibold my-5 text-info">
          {{ project.title }}
        </h1>
        <p class="" v-if="project.type">
          <span>Tipologia del progetto: </span>
          <span class="badge text-bg-warning">{{ project.type.name }}</span>
        </p>
        <div>
          <span class="me-2">Tecnologie utilizzate:</span>

          <span v-for="tech in project.technologies" :key="tech.slug">
            <span
              class="badge text-bg-success me-3"
              v-if="project.technologies"
              >{{ tech.name }}</span
            >
          </span>
        </div>
      </div>

      <div class="container py-4">
        <div class="scb" v-html="project.description"></div>
      </div>
    </template>
  </DefaultLayaout>
</template>

<script>
import DefaultLayaout from "../layouts/Default.vue";
import axios from "axios";
export default {
  components: {
    DefaultLayaout,
    // **************************
    // FINE COMPONETS
  },
  // **************************
  props: ["slug"],
  data() {
    return {
      project: null,
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
    fechProjects(slug) {
      axios
        .get(`http://127.0.0.1:8000/api/projects/${slug}`)
        .then((res) => {
          let { success, project } = res.data;
          console.log(res.data);
          if (success) {
            this.project = project;
          } else {
            // this.$router.replace({ name: '404' })
          }
        })
        .catch((err) => {
          console.log(err);
          //   this.$router.replace({ name: '404' })
        });
    },
    // **************************
    // FINE METHODS
  },
  // **************************
  created() {
    this.fechProjects(this.slug);
  },
};
</script>

<style lang="scss" scoped>
@use "../style/partials//variables" as *;
.scb {
  text-align: justify;
}
</style>
