<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        v-bind="friend"
        @toggle-favorite="toggleFavoriteStatus"
      ></friend-contact>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phoneNumber: "0123 45678 90",
          emailAddress: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phoneNumber: "0987 65432 10",
          emailAddress: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(id) {
      const idFriend = this.friends.find((friend) => friend.id === id);
      idFriend.isFavorite = !idFriend.isFavorite;
    },
  },
};
</script>
