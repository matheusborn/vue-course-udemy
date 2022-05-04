<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
      >Stored Resources</base-button>
      <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
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
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org/v2/guide/'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google',
          link: 'https://www.google.com/'
        }
      ]
    };
  },
  provide() {
    return {
      resources: this.storedResources
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    }
  }
};
</script>