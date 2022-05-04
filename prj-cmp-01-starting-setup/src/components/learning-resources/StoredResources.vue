<template>
  <ul>
    <learning-resource
      v-for="resource in resources"
      :key="resource.id"
      :description="resource.description"
      :link="resource.link"
      :title="resource.title"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from '@/components/learning-resources/LearningResource';

export default {
  components: {
    LearningResource
  },
  inject: ['resources']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>