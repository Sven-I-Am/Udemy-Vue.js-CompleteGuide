<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>
    <ul>
      <friend-contact
        name="Manuel Lorenzs"
        phoneNumber="0123 45678 90"
        emailAddress="manuel@localhost.com"
      ></friend-contact>
      <friend-contact
        name="Julie Jones"
        phoneNumber="0987 65432 10"
        emailAddress="julie@localhost.com"
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
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 65432 10",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>