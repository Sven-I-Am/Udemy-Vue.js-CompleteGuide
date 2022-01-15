<template>
  <base-card>
    <base-button @click.prevent="setSelectedComponent('stored-resources')"
      >Stored Resources</base-button
    >
    <base-button @click.prevent="setSelectedComponent('add-resources')"
      >Add Resource</base-button
    >
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 'stored-resources',
    };
  },

  methods: {
    setSelectedComponent(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
