//instantiate a new Vue app
const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: '<h2>Master Vue and build amazing Apps</h2>',
      vueLink: 'https://vuejs.org',
    };
  },
  methods: {
    showGoal() {
      const rnd = Math.random();
      if (rnd < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
//mount the Vue app in a specific element of the DOM
app.mount('#user-goal');
