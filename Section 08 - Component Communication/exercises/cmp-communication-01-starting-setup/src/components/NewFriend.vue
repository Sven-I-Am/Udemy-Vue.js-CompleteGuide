<template>
  <form>
    <div class="row">
      <div class="col">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" v-model="friend.firstName" />
      </div>
      <div class="col">
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" v-model="friend.lastName" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="phone">Phone</label>
        <input type="text" id="phone" v-model="friend.phone" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="email">Email</label>
        <input type="text" id="email" v-model="friend.email" />
      </div>
    </div>
    <div class="row">
      <button @click.prevent="saveFriend">Save</button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      friend: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      },
    };
  },
  emits: ["save-friend"],
  methods: {
    saveFriend() {
      this.$emit("save-friend", this.friend);
    },
  },
};
</script>
<style>
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
.row {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem auto;
}
.col {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.5rem;
}
</style>