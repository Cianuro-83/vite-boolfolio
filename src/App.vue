<template>
  <div class="container">
    <Projects />
  </div>
</template>

<script>
import Projects from "./components/Projects.vue";
export default {
  components: {
    Projects,
  },
};
</script>

<style lang="scss">
@use "./style/general.scss";
</style>
