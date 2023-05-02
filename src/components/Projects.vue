<template>
  <div>
    <div class="container my-5 projects">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>

    <ul class="pagination">
      <li
        :class="[link.active ? 'active' : '', 'page-link']"
        v-for="link in links"
        @click="fetchProjectsByUrl(link.url)"
        :key="link.label"
        v-html="link.label"
      ></li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";

export default {
  components: {
    ProjectCard,
    // **************************
    // FINE COMPONETS
  },
  // **************************
  data() {
    return {
      projects: [],
      lastPage: 0,
      currentPage: 1,
      links: [],
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
    fetchProjects(page) {
      axios
        .get("http://127.0.0.1:8001/api/projects", {
          params: {
            page: page,
          },
        })
        .then((res) => {
          console.log(res);
          let results = res.data.results;
          this.links = results.links;
          this.lastPage = results.last_page;
          this.projects = results.data;
          this.currentPage = results.current_page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchProjectsByUrl(url) {
      axios
        .get(url)
        .then((res) => {
          let results = res.data.results;
          this.links = results.links;
          this.lastPage = results.last_page;
          this.projects = results.data;
          this.currentPage = results.current_page;
          console.log(this.projects);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // **************************
    // FINE METHODS
  },
  // **************************
  mounted() {
    this.fetchProjects(this.currentPage);
  },
};
</script>

<style lang="scss" scoped>
@use "../style/partials//variables" as *;
</style>
