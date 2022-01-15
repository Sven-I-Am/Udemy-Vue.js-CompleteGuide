<template>
  <the-header :title="title"></the-header>
  <the-resources></the-resources>
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
import TheResources from './components/learningResources/TheResources.vue';

export default {
  components: {
    StoredResources,
    AddResources,
    TheHeader,
    TheResources,
  },
  data() {
    return {
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
