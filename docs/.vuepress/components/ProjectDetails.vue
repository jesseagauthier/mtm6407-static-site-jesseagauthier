<template>
  <div class="project" v-if="project">
    <h2>{{ project.title }}</h2>
    <div class="flex">
      <img :src="project.primaryImage" :alt="project.title" class="w-full rounded" />
      <div v-if="project.images && project.images.length > 0">
        <img
          :src="project.images[0].src"
          :alt="project.images[0].title"
          class="w-full rounded mt-4"
        />
      </div>
    </div>
    <p class="text-gray-700">{{ project.longBio }}</p>
    <a :href="project.link">View Project</a>
  </div>
</template>

<script>
import { projects } from '../projectsData.js'

export default {
  props: ['projectId'],
  computed: {
    project() {
      return projects.find((p) => p.id === parseInt(this.projectId, 10))
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  gap: 14px;
}

img {
  width: 50%;
}
</style>
