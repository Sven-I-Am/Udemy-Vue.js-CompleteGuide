<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <ul>
      <friend-contact
        id="1"
        name="Manuel Lorenzs"
        phoneNumber="0123 45678 90"
        emailAddress="manuel@localhost.com"
        setFavorite="0"
      ></friend-contact>
      <friend-contact
        id="2"
        name="Julie Jones"
        phoneNumber="0987 65432 10"
        emailAddress="julie@localhost.com"
        setFavorite="1"
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
        },
        {
          id: "2",
          name: "Julie Jones",
          phone: "0987 65432 10",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>