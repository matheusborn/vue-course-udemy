<template>
  <div>
    <base-card>
      <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
      <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
    </base-card>
    <component :is="selectedTab"></component>
  </div>
</template>

<script>
import StoredResources from '@/components/learning-resources/StoredResources';
import AddResource from '@/components/learning-resources/AddResource';

export default {
  components: {
    AddResource,
    StoredResources
  },
  data() {
    return {
      selectedTab: 'stored-resources'
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    }
  }
};
</script>