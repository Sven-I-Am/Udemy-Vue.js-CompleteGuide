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
      this.input = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount('#user-goals');
