const app = Vue.createApp({
  data() {
    return {
      goals: [],
      input: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.input);
    },
  },
});

app.mount('#user-goals');
