<template>
  <DefaultLayaout>
    <template v-if="project">
      <div class="container">
        <h1>{{ project.title }}</h1>
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
    fechProjects() {
      axios
        .get("http://127.0.0.1:8000/api/projects/${ slug }")
        .then((res) => {
          let { success, project } = res.data;

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
    this.fechProjects();
  },
};
</script>

<style lang="scss" scoped>
@use "../style/partials//variables" as *;
</style>
