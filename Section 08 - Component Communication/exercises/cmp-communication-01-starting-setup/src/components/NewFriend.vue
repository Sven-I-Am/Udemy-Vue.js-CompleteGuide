<template>
  <form @submit.prevent="saveFriend">
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
        <input type="tel" id="phone" v-model="friend.phone" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="friend.email" />
      </div>
    </div>
    <div class="row">
      <button>Save</button>
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
      this.friend = {};
    },
  },
};
</script>