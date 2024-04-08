<template>
  <div class="project_ctn">
    <div
      v-for="project in projects"
      :key="project.id"
      class="max-w-sm rounded overflow-hidden shadow-lg"
    >
      <a :href="`/projects/${project.id}`">
        <img
          class="w-full hover:opacity-75 transition-opacity duration-300"
          :src="project.primaryImage"
          :alt="project.title"
        />
      </a>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import { projects } from '../projectsData.js'

export default {
  data() {
    return {
      projects
    }
  }
}
</script>
