<template>
  <header class="w-50 m-auto text-dark bg-info p-4 mt-2 mb-5 rounded-3 shadow">
    <h1>Active user data</h1>
  </header>
  <main class="container">
    <section class="row gx-5">
      <user-data @set-user="setUser"></user-data>
      <active-user v-bind="user"></active-user>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: "",
      },
    };
  },
  methods: {
    setUser(user) {
      this.user = user;
    },
  },
};
</script>
