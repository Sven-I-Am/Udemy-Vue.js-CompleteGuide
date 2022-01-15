<template>
  <div class="col shadow-sm rounded bg-light m-4 p-5">
    <form @submit.prevent="setUser">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="user.name" />
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input
          type="number"
          min="0"
          class="form-control"
          id="age"
          v-model="user.age"
        />
      </div>
      <button class="btn btn-info rounded-pill">Submit</button>
    </form>
  </div>
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
  emits: ["set-user"],
  methods: {
    setUser() {
      this.$emit("set-user", this.user);
    },
  },
};
</script>