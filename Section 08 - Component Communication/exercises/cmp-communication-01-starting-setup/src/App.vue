<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :name="friend.name"
        :phoneNumber="friend.phone"
        :emailAddress="friend.email"
        :setFavorite="friend.isFavorite"
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
          id: "1",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: "2",
          name: "Julie Jones",
          phone: "0987 65432 10",
          email: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
};
</script>