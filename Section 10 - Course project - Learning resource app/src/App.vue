<template>
  <the-header :title="title"></the-header>
  <div id="btn-wrapper">
    <base-button @click.prevent="setSelectedComponent('stored-resources')"
      >Stored Resources</base-button
    >
    <base-button @click.prevent="setSelectedComponent('add-resources')"
      >Add Resource</base-button
    >
  </div>
  <stored-resources
    :resources="storedResources"
    v-if="selectedComponent === 'stored-resources'"
  ></stored-resources>
  <add-resources v-if="selectedComponent === 'add-resources'"></add-resources>
</template>

<script>
import StoredResources from './components/learningResources/StoredResources.vue';
import AddResources from './components/learningResources/AddResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';
import BaseButton from './components/UI/BaseButton.vue';
export default {
  components: {
    StoredResources,
    AddResources,
    TheHeader,
    BaseButton,
  },
  data() {
    return {
      selectedComponent: 'stored-resources',
      title: 'RememberMe',
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
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
#btn-wrapper {
  display: flex;
  justify-content: center;
  margin: 1rem;
}
</style>
