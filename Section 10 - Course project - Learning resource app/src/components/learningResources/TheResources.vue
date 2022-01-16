<template>
  <base-card>
    <base-button @click="setSelectedComponent('stored-resources')"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedComponent('add-resources')"
      >Add Resource</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';
export default {
  components: { StoredResources, AddResources },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://v3.vuejs.org/',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google...',
          link: 'https://www.google.com',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },

  methods: {
    setSelectedComponent(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
